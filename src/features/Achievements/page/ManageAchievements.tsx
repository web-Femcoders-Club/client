import React, { useEffect, useState } from "react";
import { Trophy, Users, Clock, Loader2 } from "lucide-react";
import {
  getUsersWithAchievements,
  getRecentAchievements,
  getAdminUsers,
} from "../../../api/adminApi";
import {
  UserWithAchievements,
  RecentAchievement,
  Achievement,
  Pagination,
} from "../../../types/types";
import AdminPagination from '../../Admin/components/ui/AdminPagination';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';
// Esta ruta (/admin/achievements) no pasa por Admin.tsx, que es quien
// carga admin-ui.css. Sin este import los controles saldrían sin estilo.
import '../../Admin/admin-ui.css';

const API_URL = import.meta.env.VITE_API_URL;

interface User {
  idUser: number;
  userName: string;
  userLastName: string;
  userEmail: string;
}

const ITEMS_PER_PAGE = 10;

/**
 * Cuántas usuarias se ofrecen a la vez al asignar un logro.
 *
 * Antes había un `<select>` con todas. Con el endpoint paginado (server#27)
 * pasó a tener las 10 primeras y ninguna más: el resto de la asociación
 * simplemente no se podía elegir, y nada en la pantalla lo decía (#20).
 */
const SUGERENCIAS = 8;

/**
 * Un error en palabras, para enseñarlo en pantalla.
 *
 * Esta pantalla se tragaba los fallos en la consola: cuando algo no cargaba,
 * la tabla salía vacía y era imposible distinguir «no hay datos» de «la
 * petición falló». Quien lo ve tiene que poder decir qué pasó sin abrir las
 * herramientas de desarrollo.
 */
function descripcionDelError(err: unknown): string {
  const objeto = typeof err === "object" && err !== null ? err : {};
  const detalle =
    "message" in objeto ? String((objeto as { message: unknown }).message) : "";

  // axios guarda el código en response.status; con fetch lo ponemos nosotros
  // en el mensaje. Los dos caminos llevan al mismo sitio.
  const estado =
    "response" in objeto
      ? (objeto as { response?: { status?: number } }).response?.status
      : undefined;

  if (estado === 401 || detalle.includes("401")) {
    // Es el fallo más habitual y el único que la persona puede resolver sola.
    // Sin decirlo, la pantalla se ve vacía y parece que no hay datos.
    return "La sesión ha caducado. Vuelve a entrar para seguir gestionando logros.";
  }

  if (estado === 403 || detalle.includes("403")) {
    return "Esta cuenta no tiene permisos de administración.";
  }

  return detalle
    ? `No se pudieron cargar los datos: ${detalle}`
    : "No se pudieron cargar los datos.";
}

const ManageAchievements: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [busquedaUsuaria, setBusquedaUsuaria] = useState("");
  const busquedaUsuariaDiferida = useDebouncedValue(busquedaUsuaria);
  const [totalCoincidencias, setTotalCoincidencias] = useState(0);
  const [buscandoUsuarias, setBuscandoUsuarias] = useState(false);
  const [usuariaElegida, setUsuariaElegida] = useState<User | null>(null);
  const [avisoUsuarias, setAvisoUsuarias] = useState<string | null>(null);
  const [usersWithAchievements, setUsersWithAchievements] = useState<UserWithAchievements[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentAchievement[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"assign" | "users" | "activity">("users");
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getAuthHeaders = () => {
    const token = sessionStorage.getItem("authToken");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  const fetchUsersWithAchievements = async (page: number) => {
    try {
      const response = await getUsersWithAchievements(page, ITEMS_PER_PAGE);
      setUsersWithAchievements(response.data);
      setPagination(response.pagination);
      setAvisoUsuarias(null);
    } catch (err) {
      // Antes esto era un `console.log` y la tabla se quedaba vacía sin más:
      // «no hay logros asignados» y «no he podido preguntarlo» se veían igual.
      setAvisoUsuarias(descripcionDelError(err));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Las usuarias ya no se cargan aquí: se buscan en el servidor desde
        // la pestaña de asignar, que es donde hacen falta.
        const achievementsRes = await fetch(`${API_URL}/admin/achievements`, {
          headers: getAuthHeaders(),
        });

        if (!achievementsRes.ok) {
          // El código importa: un 401 es sesión caducada y se arregla
          // volviendo a entrar; un 500 no.
          throw new Error(
            `El servidor respondió ${achievementsRes.status} al pedir los logros`,
          );
        }

        const logros = await achievementsRes.json();
        if (!Array.isArray(logros)) {
          throw new Error("La lista de logros no llegó como una lista");
        }
        setAchievements(logros);

        // Cargar datos adicionales
        try {
          const [, recent] = await Promise.all([
            fetchUsersWithAchievements(1),
            getRecentAchievements(),
          ]);
          setRecentActivity(recent);
        } catch (err) {
          setAvisoUsuarias(descripcionDelError(err));
        }
      } catch (err) {
        console.error(err);
        setError(descripcionDelError(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Las usuarias que se ofrecen para asignar, buscadas en el servidor.
   *
   * Solo se piden cuando la pestaña está abierta: es la única que las usa.
   */
  useEffect(() => {
    if (activeTab !== "assign") return;

    let cancelado = false;
    const buscar = async () => {
      setBuscandoUsuarias(true);
      try {
        const { data, pagination } = await getAdminUsers(
          1,
          SUGERENCIAS,
          busquedaUsuariaDiferida.trim() || undefined
        );
        if (cancelado) return;
        setUsers(data);
        setTotalCoincidencias(pagination.totalItems);
      } catch (err) {
        if (cancelado) return;
        setUsers([]);
        setAvisoUsuarias(descripcionDelError(err));
      } finally {
        if (!cancelado) setBuscandoUsuarias(false);
      }
    };
    buscar();

    // Sin esto, dos búsquedas seguidas pueden contestar en orden distinto al
    // que se pidieron y dejar en pantalla la lista de la primera.
    return () => {
      cancelado = true;
    };
  }, [activeTab, busquedaUsuariaDiferida]);

  const handleAssignAchievement = async (achievement: Achievement) => {
    if (!selectedUser) {
      alert("Selecciona un usuario para asignar el logro.");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/admin/users/${selectedUser}/achievements`,
        {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({ achievementId: achievement.id }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al asignar el logro.");
      }

      alert(`Logro "${achievement.title}" asignado con éxito.`);

      // Refrescar usuarios con logros manteniendo la página actual
      await fetchUsersWithAchievements(currentPage);
    } catch (err) {
      console.error("Error al asignar logro:", err);
      alert("Hubo un error al asignar el logro.");
    }
  };

  const handlePageChange = async (newPage: number) => {
    setCurrentPage(newPage);
    await fetchUsersWithAchievements(newPage);
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 animate-spin" style={{ color: "#6D28D9" }} />
          <p className="text-gray-500">Cargando datos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: "#6D28D9" }}>
        <Trophy className="w-7 h-7" />
        Gestionar Logros
      </h1>

      {avisoUsuarias && (
        <p
          role="alert"
          className="mb-4 px-4 py-3 rounded-lg bg-amber-50 text-amber-900 text-sm"
        >
          {avisoUsuarias}
        </p>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setActiveTab("users")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "users"
              ? "border-b-2 text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          style={activeTab === "users" ? { borderBottomColor: "#6D28D9" } : {}}
        >
          <Users className="inline-block w-4 h-4 mr-2" />
          Usuarias con Logros
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("assign")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "assign"
              ? "border-b-2 text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          style={activeTab === "assign" ? { borderBottomColor: "#6D28D9" } : {}}
        >
          <Trophy className="inline-block w-4 h-4 mr-2" />
          Asignar Logros
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("activity")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "activity"
              ? "border-b-2 text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          style={activeTab === "activity" ? { borderBottomColor: "#6D28D9" } : {}}
        >
          <Clock className="inline-block w-4 h-4 mr-2" />
          Actividad Reciente
        </button>
      </div>

      {/* Tab: Users with Achievements */}
      {activeTab === "users" && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold" style={{ color: "#6D28D9" }}>
              Usuarias y sus logros
            </h2>
            {pagination && (
              <span className="text-sm text-gray-500">
                {pagination.totalItems} usuarias en total
              </span>
            )}
          </div>
          {usersWithAchievements.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="table w-full border border-gray-200">
                  <thead>
                    <tr style={{ backgroundColor: "#6D28D910" }}>
                      <th className="p-4 text-left font-semibold" style={{ color: "#6D28D9" }}>
                        Usuaria
                      </th>
                      <th className="p-4 text-left font-semibold" style={{ color: "#6D28D9" }}>
                        Email
                      </th>
                      <th className="p-4 text-center font-semibold" style={{ color: "#6D28D9" }}>
                        Logros
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersWithAchievements.map((user) => (
                      <tr key={user.idUser} className="hover:bg-gray-50 border-b border-gray-100">
                        <td className="p-4 font-medium">
                          {user.userName} {user.userLastName}
                        </td>
                        <td className="p-4 text-gray-600">{user.userEmail}</td>
                        <td className="p-4">
                          <div className="flex flex-wrap justify-center gap-1">
                            {user.achievements.length > 0 ? (
                              user.achievements.map((ach) => (
                                <span
                                  key={ach.id}
                                  className="text-xl cursor-help"
                                  title={ach.title}
                                >
                                  {ach.icon}
                                </span>
                              ))
                            ) : (
                              <span className="text-gray-400 text-sm">Sin logros</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Los controles vienen de AdminPagination, que ya usaban
                  CrmDashboard, ManageUsers y ConsentOverview. Este bloque
                  estaba copiado a mano y era la cuarta variante (#20). */}
              <AdminPagination
                paginaActual={currentPage}
                totalPaginas={pagination?.totalPages ?? 1}
                onCambiar={handlePageChange}
                totalElementos={pagination?.totalItems}
                nombreElemento="usuaria"
                etiqueta="Paginación de usuarias con logros"
              />
            </>
          ) : (
            <p className="text-center text-gray-500 py-8">
              No hay datos de usuarias con logros disponibles.
            </p>
          )}
        </div>
      )}

      {/* Tab: Assign Achievements */}
      {activeTab === "assign" && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6 max-w-md">
            <label
              htmlFor="buscar-usuaria-logro"
              className="block mb-2 font-medium text-gray-700"
            >
              Busca a la usuaria por nombre o email
            </label>
            <input
              id="buscar-usuaria-logro"
              type="search"
              value={busquedaUsuaria}
              onChange={(e) => setBusquedaUsuaria(e.target.value)}
              placeholder="Ej.: ana, garcía, ana@ejemplo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg admin-focus"
              aria-describedby="ayuda-busqueda-usuaria"
            />

            {/* aria-live: al escribir, la lista de abajo se sustituye entera y
                sin esto un lector de pantalla no anuncia que ha cambiado. */}
            <p
              id="ayuda-busqueda-usuaria"
              className="text-xs text-gray-500 mt-1"
              aria-live="polite"
            >
              {buscandoUsuarias
                ? "Buscando…"
                : totalCoincidencias > users.length
                ? `${totalCoincidencias} coincidencias. Se muestran las ${users.length} primeras: afina la búsqueda para ver el resto.`
                : `${totalCoincidencias} ${
                    totalCoincidencias === 1 ? "coincidencia" : "coincidencias"
                  }.`}
            </p>

            {usuariaElegida && (
              <p
                role="status"
                className="mt-3 px-4 py-3 rounded-lg bg-purple-50 text-sm"
                style={{ color: "#5B21B6" }}
              >
                Se asignará a{" "}
                <strong>
                  {usuariaElegida.userName} {usuariaElegida.userLastName}
                </strong>{" "}
                ({usuariaElegida.userEmail})
              </p>
            )}

            {users.length > 0 && (
              <ul className="mt-3 border border-gray-200 rounded-lg divide-y divide-gray-100">
                {users.map((user) => {
                  const elegida = selectedUser === user.idUser;
                  return (
                    <li key={user.idUser}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedUser(user.idUser);
                          setUsuariaElegida(user);
                        }}
                        aria-pressed={elegida}
                        className={`w-full text-left px-4 py-3 text-sm admin-focus ${
                          elegida ? "bg-purple-50 font-semibold" : "hover:bg-gray-50"
                        }`}
                      >
                        {user.userName} {user.userLastName}
                        <span className="block text-xs text-gray-500">
                          {user.userEmail}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <h3 className="text-lg font-semibold mb-4" style={{ color: "#6D28D9" }}>
            Logros disponibles
          </h3>
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-200">
              <thead>
                <tr style={{ backgroundColor: "#6D28D910" }}>
                  <th className="p-4 text-left font-semibold" style={{ color: "#6D28D9" }}>
                    Logro
                  </th>
                  <th className="p-4 text-left font-semibold" style={{ color: "#6D28D9" }}>
                    Descripción
                  </th>
                  <th className="p-4 text-center font-semibold" style={{ color: "#6D28D9" }}>
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {achievements.map((achievement) => (
                  <tr key={achievement.id} className="hover:bg-gray-50 border-b border-gray-100">
                    <td className="p-4">
                      <span className="text-2xl mr-2">{achievement.icon}</span>
                      <span className="font-medium">{achievement.title}</span>
                    </td>
                    <td className="p-4 text-gray-600">{achievement.description}</td>
                    <td className="p-4 text-center">
                      <button
                        type="button"
                        onClick={() => handleAssignAchievement(achievement)}
                        disabled={!selectedUser}
                        className="px-4 py-2 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: "#6D28D9" }}
                      >
                        Asignar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Recent Activity */}
      {activeTab === "activity" && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#6D28D9" }}>
            Actividad reciente de logros
          </h2>
          {recentActivity.length > 0 ? (
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-2xl">{activity.achievementIcon}</span>
                  <div>
                    <p className="font-medium">
                      {activity.userName} {activity.userLastName}
                    </p>
                    <p className="text-sm text-gray-600">
                      Desbloqueó: {activity.achievementTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">
              No hay actividad reciente disponible.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageAchievements;
