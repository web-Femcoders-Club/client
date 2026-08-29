import React, { useCallback, useEffect, useState } from "react";
import { Edit, Loader2, Trash2, X } from "lucide-react";
import {
  AdminUser,
  deleteAdminUser,
  getAdminUsers,
  updateAdminUser,
} from "../../../../api/adminApi";

/**
 * Gestión de usuarias registradas.
 *
 * Este componente existía pero estaba huérfano —nadie lo importaba— y no
 * habría funcionado: llamaba a http://localhost:3000 y no enviaba el token,
 * así que con /admin/* protegido (server#2) toda petición devolvía 401.
 * Ahora usa el cliente de API común, con VITE_API_URL y cabeceras de auth.
 */

const POR_PAGINA = 10;

interface EdicionState {
  userName: string;
  userLastName: string;
  userTelephone: string;
}

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);

  const [editando, setEditando] = useState<AdminUser | null>(null);
  const [formulario, setFormulario] = useState<EdicionState>({
    userName: "",
    userLastName: "",
    userTelephone: "",
  });
  const [guardando, setGuardando] = useState(false);

  const cargar = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setUsers(await getAdminUsers());
    } catch {
      setError("No se pudo cargar la lista de usuarias.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const termino = busqueda.trim().toLowerCase();
  const filtradas = termino
    ? users.filter(
        (u) =>
          u.userEmail.toLowerCase().includes(termino) ||
          `${u.userName} ${u.userLastName}`.toLowerCase().includes(termino)
      )
    : users;

  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / POR_PAGINA));
  // Si el filtro deja menos páginas, la actual podría quedar fuera de rango y
  // mostrar una tabla vacía sin explicación.
  const paginaActual = Math.min(pagina, totalPaginas);
  const visibles = filtradas.slice(
    (paginaActual - 1) * POR_PAGINA,
    paginaActual * POR_PAGINA
  );

  const abrirEdicion = (user: AdminUser) => {
    setEditando(user);
    setFormulario({
      userName: user.userName ?? "",
      userLastName: user.userLastName ?? "",
      userTelephone: user.userTelephone ?? "",
    });
  };

  const guardar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editando) return;

    setGuardando(true);
    setError(null);
    try {
      await updateAdminUser(editando.idUser, {
        userName: formulario.userName.trim(),
        userLastName: formulario.userLastName.trim(),
        userTelephone: formulario.userTelephone.trim() || null,
      });

      // Se actualiza en memoria en vez de recargar toda la lista: el cambio es
      // conocido y recargar perdería la página y el filtro actuales.
      setUsers((previos) =>
        previos.map((u) =>
          u.idUser === editando.idUser
            ? {
                ...u,
                userName: formulario.userName.trim(),
                userLastName: formulario.userLastName.trim(),
                userTelephone: formulario.userTelephone.trim() || null,
              }
            : u
        )
      );
      setAviso("Datos actualizados.");
      setEditando(null);
    } catch {
      setError("No se pudieron guardar los cambios.");
    } finally {
      setGuardando(false);
    }
  };

  const borrar = async (user: AdminUser) => {
    const confirmado = window.confirm(
      `¿Eliminar la cuenta de ${user.userName} ${user.userLastName} (${user.userEmail})?\n\n` +
        "Esta acción no se puede deshacer."
    );
    if (!confirmado) return;

    setError(null);
    try {
      await deleteAdminUser(user.idUser);
      setUsers((previos) => previos.filter((u) => u.idUser !== user.idUser));
      setAviso("Cuenta eliminada.");
    } catch {
      setError("No se pudo eliminar la cuenta.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#4737bb" }} />
        <span className="sr-only">Cargando usuarias…</span>
      </div>
    );
  }

  return (
    <section aria-labelledby="usuarias-titulo">
      <h2
        id="usuarias-titulo"
        className="text-2xl font-bold mb-1"
        style={{ color: "#4737bb" }}
      >
        Usuarias registradas
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Personas con cuenta en la web. No incluye a quienes solo se inscribieron
        a un evento por Eventbrite.
      </p>

      {error && (
        <p
          role="alert"
          className="mb-4 px-4 py-3 rounded-lg bg-red-50 text-red-800 text-sm"
        >
          {error}
        </p>
      )}
      {aviso && (
        <p
          role="status"
          className="mb-4 px-4 py-3 rounded-lg bg-green-50 text-green-800 text-sm"
        >
          {aviso}
        </p>
      )}

      <label htmlFor="buscar-usuaria" className="sr-only">
        Buscar por nombre o email
      </label>
      <input
        id="buscar-usuaria"
        type="search"
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
          setPagina(1); // un filtro nuevo empieza por el principio
        }}
        placeholder="Buscar por nombre o email…"
        className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
      />

      {filtradas.length === 0 ? (
        <p className="text-center text-gray-400 py-8 text-sm">
          {busqueda
            ? `No hay resultados para "${busqueda}"`
            : "No hay usuarias registradas."}
        </p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead>
                <tr style={{ backgroundColor: "#4737bb10" }}>
                  {["Nombre", "Email", "Rol", "Teléfono", "Acciones"].map(
                    (h) => (
                      <th
                        key={h}
                        scope="col"
                        className="p-4 text-left text-sm font-semibold"
                        style={{ color: "#4737bb" }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {visibles.map((user) => (
                  <tr
                    key={user.idUser}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 text-sm font-medium">
                      {user.userName} {user.userLastName}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {user.userEmail}
                    </td>
                    <td className="p-4 text-sm">
                      {user.userRole === "admin" ? (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-900">
                          admin
                        </span>
                      ) : (
                        /* text-xs explícito: sin él heredaba el tamaño del
                           contenedor y se veía más grande que el resto. */
                        <span className="text-xs text-gray-600">
                          {user.userRole || "—"}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {user.userTelephone || "—"}
                    </td>
                    <td className="p-4 text-sm">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => abrirEdicion(user)}
                          className="p-2 rounded-lg hover:bg-gray-100 admin-focus"
                          aria-label={`Editar a ${user.userName} ${user.userLastName}`}
                        >
                          <Edit size={16} style={{ color: "#4737bb" }} />
                        </button>
                        <button
                          type="button"
                          onClick={() => borrar(user)}
                          className="p-2 rounded-lg hover:bg-red-50 admin-focus"
                          aria-label={`Eliminar la cuenta de ${user.userName} ${user.userLastName}`}
                        >
                          <Trash2 size={16} className="text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPaginas > 1 && (
            <nav
              className="flex items-center justify-between gap-4 py-4"
              aria-label="Paginación de usuarias"
            >
              <button
                type="button"
                onClick={() => setPagina(paginaActual - 1)}
                disabled={paginaActual === 1}
                className="px-3 py-2 rounded-lg text-sm border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Anterior
              </button>
              <p className="text-sm text-gray-600" aria-live="polite">
                Página {paginaActual} de {totalPaginas}
                <span className="text-gray-400">
                  {" "}
                  · {filtradas.length} usuaria
                  {filtradas.length === 1 ? "" : "s"}
                </span>
              </p>
              <button
                type="button"
                onClick={() => setPagina(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
                className="px-3 py-2 rounded-lg text-sm border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Siguiente
              </button>
            </nav>
          )}
        </>
      )}

      {editando && (
        <div
          className="fixed inset-0 admin-overlay flex items-center justify-center p-4 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="editar-titulo"
        >
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <div className="flex items-start justify-between mb-4">
              <h3
                id="editar-titulo"
                className="text-lg font-bold"
                style={{ color: "#4737bb" }}
              >
                Editar usuaria
              </h3>
              <button
                type="button"
                onClick={() => setEditando(null)}
                aria-label="Cerrar"
                className="p-1 rounded hover:bg-gray-100 admin-focus"
              >
                <X size={18} />
              </button>
            </div>

            {/*
              El email no se edita aquí: es la identidad con la que la persona
              entra y con la que se cruzan las bajas y el consentimiento.
              Cambiarlo desde el panel rompería esos vínculos en silencio.
            */}
            <p className="text-sm text-gray-500 mb-4">{editando.userEmail}</p>

            <form onSubmit={guardar}>
              <div className="mb-3">
                <label
                  htmlFor="edit-nombre"
                  className="block text-sm font-medium mb-1"
                >
                  Nombre
                </label>
                <input
                  id="edit-nombre"
                  type="text"
                  value={formulario.userName}
                  onChange={(e) =>
                    setFormulario({ ...formulario, userName: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="edit-apellidos"
                  className="block text-sm font-medium mb-1"
                >
                  Apellidos
                </label>
                <input
                  id="edit-apellidos"
                  type="text"
                  value={formulario.userLastName}
                  onChange={(e) =>
                    setFormulario({
                      ...formulario,
                      userLastName: e.target.value,
                    })
                  }
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="edit-telefono"
                  className="block text-sm font-medium mb-1"
                >
                  Teléfono <span className="text-gray-400">(opcional)</span>
                </label>
                <input
                  id="edit-telefono"
                  type="tel"
                  value={formulario.userTelephone}
                  onChange={(e) =>
                    setFormulario({
                      ...formulario,
                      userTelephone: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditando(null)}
                  className="px-4 py-2 rounded-lg text-sm border border-gray-200 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={guardando}
                  className="px-4 py-2 rounded-lg text-sm text-white disabled:opacity-50"
                  style={{ backgroundColor: "#4737bb" }}
                >
                  {guardando ? "Guardando…" : "Guardar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageUsers;
