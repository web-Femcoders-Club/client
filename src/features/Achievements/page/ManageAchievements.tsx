import React, { useEffect, useState } from "react";
import { Trophy, Users, Clock, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getUsersWithAchievements,
  getRecentAchievements,
} from "../../../api/adminApi";
import {
  UserWithAchievements,
  RecentAchievement,
  Achievement,
  Pagination,
} from "../../../types/types";

const API_URL = import.meta.env.VITE_API_URL;

interface User {
  idUser: number;
  userName: string;
  userLastName: string;
  userEmail: string;
}

const ITEMS_PER_PAGE = 10;

const ManageAchievements: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
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
    } catch {
      console.log("Endpoint de usuarios con logros no disponible");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [usersRes, achievementsRes] = await Promise.all([
          fetch(`${API_URL}/admin/users`, { headers: getAuthHeaders() }),
          fetch(`${API_URL}/admin/achievements`, { headers: getAuthHeaders() }),
        ]);

        if (!usersRes.ok || !achievementsRes.ok) {
          throw new Error("Error al cargar datos");
        }

        const usersData = await usersRes.json();
        const achievementsData = await achievementsRes.json();

        setUsers(usersData);
        setAchievements(achievementsData);

        // Cargar datos adicionales
        try {
          const [, recent] = await Promise.all([
            fetchUsersWithAchievements(1),
            getRecentAchievements(),
          ]);
          setRecentActivity(recent);
        } catch {
          console.log("Endpoints adicionales no disponibles aún");
        }
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          <Loader2 className="w-10 h-10 animate-spin" style={{ color: "#8B5CF6" }} />
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
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: "#8B5CF6" }}>
        <Trophy className="w-7 h-7" />
        Gestionar Logros
      </h1>

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
          style={activeTab === "users" ? { borderBottomColor: "#8B5CF6" } : {}}
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
          style={activeTab === "assign" ? { borderBottomColor: "#8B5CF6" } : {}}
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
          style={activeTab === "activity" ? { borderBottomColor: "#8B5CF6" } : {}}
        >
          <Clock className="inline-block w-4 h-4 mr-2" />
          Actividad Reciente
        </button>
      </div>

      {/* Tab: Users with Achievements */}
      {activeTab === "users" && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold" style={{ color: "#8B5CF6" }}>
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
                    <tr style={{ backgroundColor: "#8B5CF610" }}>
                      <th className="p-4 text-left font-semibold" style={{ color: "#8B5CF6" }}>
                        Usuaria
                      </th>
                      <th className="p-4 text-left font-semibold" style={{ color: "#8B5CF6" }}>
                        Email
                      </th>
                      <th className="p-4 text-center font-semibold" style={{ color: "#8B5CF6" }}>
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

              {/* Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!pagination.hasPreviousPage}
                    className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    aria-label="Página anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>

                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                      // Show first, last, current, and pages around current
                      return (
                        page === 1 ||
                        page === pagination.totalPages ||
                        Math.abs(page - currentPage) <= 1
                      );
                    })
                    .map((page, index, array) => {
                      // Add ellipsis if there's a gap
                      const showEllipsisBefore = index > 0 && page - array[index - 1] > 1;
                      return (
                        <React.Fragment key={page}>
                          {showEllipsisBefore && (
                            <span className="px-2 text-gray-400">...</span>
                          )}
                          <button
                            type="button"
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                              currentPage === page
                                ? "text-white"
                                : "text-gray-600 border border-gray-200 hover:bg-gray-50"
                            }`}
                            style={currentPage === page ? { backgroundColor: "#8B5CF6" } : {}}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      );
                    })}

                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!pagination.hasNextPage}
                    className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    aria-label="Página siguiente"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              )}
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
          <div className="mb-6">
            <label htmlFor="user-select" className="block mb-2 font-medium text-gray-700">
              Selecciona una usuaria:
            </label>
            <select
              id="user-select"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedUser ?? ""}
              onChange={(e) => setSelectedUser(Number(e.target.value))}
            >
              <option value="" disabled>
                Selecciona una usuaria
              </option>
              {users.map((user) => (
                <option key={user.idUser} value={user.idUser}>
                  {user.userName} {user.userLastName} ({user.userEmail})
                </option>
              ))}
            </select>
          </div>

          <h3 className="text-lg font-semibold mb-4" style={{ color: "#8B5CF6" }}>
            Logros disponibles
          </h3>
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-200">
              <thead>
                <tr style={{ backgroundColor: "#8B5CF610" }}>
                  <th className="p-4 text-left font-semibold" style={{ color: "#8B5CF6" }}>
                    Logro
                  </th>
                  <th className="p-4 text-left font-semibold" style={{ color: "#8B5CF6" }}>
                    Descripción
                  </th>
                  <th className="p-4 text-center font-semibold" style={{ color: "#8B5CF6" }}>
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
                        style={{ backgroundColor: "#8B5CF6" }}
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
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#8B5CF6" }}>
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
