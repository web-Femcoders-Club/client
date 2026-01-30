import React, { useEffect, useState } from "react";
import { getUserStats } from "../../../../api/adminApi";
import { UserStats as UserStatsType } from "../../../../types/types";
import { Users, UserPlus, CalendarDays, Loader2, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 5;

const UserStats: React.FC = () => {
  const [stats, setStats] = useState<UserStatsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getUserStats();
        setStats(data);
      } catch (err) {
        console.error("Error fetching user stats:", err);
        setError("No se pudieron cargar las estadísticas. Inténtalo de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return "Fecha no disponible";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const isNewUser = (dateString: string | null): boolean => {
    if (!dateString) return false;
    const registrationDate = new Date(dateString);
    const now = new Date();
    const diffTime = now.getTime() - registrationDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  };

  const totalPages = stats ? Math.ceil(stats.recentRegistrations.length / ITEMS_PER_PAGE) : 0;

  const paginatedUsers = stats
    ? stats.recentRegistrations.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : [];

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 animate-spin" style={{ color: "#8B5CF6" }} />
          <p className="text-gray-500">Cargando estadísticas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 rounded-lg text-white transition-colors"
            style={{ backgroundColor: "#8B5CF6" }}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#8B5CF6" }}>
        Estadísticas de Usuarias
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Users Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#8B5CF6" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Registradas</p>
              <p className="text-3xl font-bold mt-1" style={{ color: "#8B5CF6" }}>
                {stats.totalUsers}
              </p>
            </div>
            <div className="p-3 rounded-full" style={{ backgroundColor: "#8B5CF620" }}>
              <Users className="w-6 h-6" style={{ color: "#8B5CF6" }} />
            </div>
          </div>
        </div>

        {/* New This Week Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#10B981" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Nuevas esta semana</p>
              <p className="text-3xl font-bold mt-1" style={{ color: "#10B981" }}>
                {stats.newThisWeek}
              </p>
            </div>
            <div className="p-3 rounded-full" style={{ backgroundColor: "#10B98120" }}>
              <UserPlus className="w-6 h-6" style={{ color: "#10B981" }} />
            </div>
          </div>
        </div>

        {/* New This Month Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#F59E0B" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Nuevas este mes</p>
              <p className="text-3xl font-bold mt-1" style={{ color: "#F59E0B" }}>
                {stats.newThisMonth}
              </p>
            </div>
            <div className="p-3 rounded-full" style={{ backgroundColor: "#F59E0B20" }}>
              <CalendarDays className="w-6 h-6" style={{ color: "#F59E0B" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Registrations Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold" style={{ color: "#8B5CF6" }}>
            Últimos Registros
          </h2>
          <span className="text-sm text-gray-500">
            {stats.recentRegistrations.length} usuarias en total
          </span>
        </div>

        {stats.recentRegistrations.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full border border-gray-200">
                <thead>
                  <tr style={{ backgroundColor: "#8B5CF610" }}>
                    <th className="p-4 text-left font-semibold" style={{ color: "#8B5CF6" }}>
                      Nombre Completo
                    </th>
                    <th className="p-4 text-left font-semibold" style={{ color: "#8B5CF6" }}>
                      Email
                    </th>
                    <th className="p-4 text-left font-semibold" style={{ color: "#8B5CF6" }}>
                      Fecha de Registro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map((user) => (
                    <tr key={user.idUser} className="hover:bg-gray-50 border-b border-gray-100">
                      <td className="p-4 flex items-center gap-2">
                        {user.userName} {user.userLastName}
                        {isNewUser(user.createdAt) && (
                          <span
                            className="px-2 py-0.5 text-xs font-medium rounded-full text-white"
                            style={{ backgroundColor: "#8B5CF6" }}
                          >
                            Nueva
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-gray-600">{user.userEmail}</td>
                      <td className="p-4 text-gray-600">{formatDate(user.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "text-white"
                        : "text-gray-600 border border-gray-200 hover:bg-gray-50"
                    }`}
                    style={currentPage === page ? { backgroundColor: "#8B5CF6" } : {}}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
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
            No hay registros recientes disponibles.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserStats;
