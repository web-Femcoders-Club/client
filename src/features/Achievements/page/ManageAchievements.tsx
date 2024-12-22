import React, { useEffect, useState } from "react";
import { Edit, Trash, Trophy } from "lucide-react";

interface User {
  idUser: number;
  userName: string;
  userLastName: string;
  userEmail: string;
}

interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const ManageAchievements: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/users");
        if (!response.ok) {
          throw new Error("Error al obtener usuarios");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar la lista de usuarios.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("/api/achievements");
        if (!response.ok) {
          throw new Error("Error al obtener logros");
        }
        const data: Achievement[] = await response.json();
        setAchievements(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los logros.");
      }
    };
    fetchAchievements();
  }, []);

  const handleAssignAchievement = async (achievement: Achievement) => {
    if (!selectedUser) {
      alert("Selecciona un usuario para asignar el logro.");
      return;
    }

    try {
      console.log("Datos enviados:", {
        achievementId: achievement.id,
      });

      const response = await fetch(
        `/api/admin/users/${selectedUser}/achievements`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ achievementId: achievement.id }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error al asignar el logro:", errorData);
        throw new Error(
          errorData.message || "Error desconocido al asignar el logro."
        );
      }

      const responseData = await response.json();
      console.log("Respuesta recibida:", responseData);

      alert(
        `Logro "${achievement.title}" asignado con éxito al usuario ID ${selectedUser}.`
      );
    } catch (err) {
      console.error("Error al asignar logro:", err);
      alert(
        "Hubo un error al asignar el logro. Revisa los detalles en la consola."
      );
    }
  };

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Trophy className="text-primary" />
        Gestionar Logros
      </h1>
      <p className="mb-6 text-lg text-base-content">
        Aquí puedes gestionar los logros adicionales de los usuarios.
      </p>

      <div className="mb-6">
        <label htmlFor="user-select" className="block mb-2 text-lg">
          Selecciona un usuario:
        </label>
        <select
          id="user-select"
          className="select select-bordered w-full max-w-xs"
          value={selectedUser ?? ""}
          onChange={(e) => setSelectedUser(Number(e.target.value))}
        >
          <option value="" disabled>
            Selecciona un usuario
          </option>
          {users.map((user) => (
            <option key={user.idUser} value={user.idUser}>
              {user.userName} {user.userLastName} ({user.userEmail})
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Logro</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {achievements.map((achievement, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{achievement.icon}</span>
                    <span>{achievement.title}</span>
                  </div>
                </td>
                <td>{achievement.description}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-sm btn-primary flex items-center gap-2"
                      onClick={() => handleAssignAchievement(achievement)}
                    >
                      <Trophy className="w-4 h-4" /> Asignar
                    </button>
                    <button className="btn btn-sm btn-info flex items-center gap-2">
                      <Edit className="w-4 h-4" /> Editar
                    </button>
                    <button className="btn btn-sm btn-error flex items-center gap-2">
                      <Trash className="w-4 h-4" /> Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAchievements;
