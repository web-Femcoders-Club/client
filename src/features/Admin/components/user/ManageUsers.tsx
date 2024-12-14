import React, { useEffect, useState } from 'react';
import { Trash2, Eye, Edit } from 'lucide-react';

interface User {
  idUser: number;
  userName: string;
  userLastName: string;
  userEmail: string;
  userRole: string;
  userGender: string;
  userTelephone: string;
}

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/admin/users');
      if (!response.ok) {
        throw new Error(`Error fetching users: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/admin/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error deleting user: ${response.status} ${response.statusText}`);
      }

      setUsers(users.filter((user) => user.idUser !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleEditUser = (user: User) => {
    // Placeholder for edit functionality
    console.log('Editing user:', user);
    // You would typically open a modal or navigate to an edit page
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-primary rounded-full" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-50">
        <div className="bg-white shadow-lg rounded-lg p-8 border-l-4 border-red-500">
          <p className="text-xl font-semibold text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 uppercase tracking-wide">
        Gestión de Usuarios
      </h2>
      
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <tr>
                {['ID', 'Nombre', 'Apellido', 'Email', 'Rol', 'Género', 'Teléfono', 'Acciones'].map((header) => (
                  <th key={header} className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.idUser}
                  className={`
                    transition-all duration-300 ease-in-out 
                    ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    hover:bg-blue-50
                    border-b border-gray-200
                  `}
                  onMouseEnter={() => setHoveredUser(user.idUser)}
                  onMouseLeave={() => setHoveredUser(null)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.idUser}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{user.userName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.userLastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{user.userEmail}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.userRole}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.userGender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.userTelephone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button
                        className={`
                          transition-all duration-300 ease-in-out
                          p-2 rounded-full 
                          ${hoveredUser === user.idUser 
                            ? 'bg-blue-500 text-white shadow-lg' 
                            : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}
                        `}
                        onClick={() => handleViewUser(user)}
                        title="Ver Detalles"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className={`
                          transition-all duration-300 ease-in-out
                          p-2 rounded-full 
                          ${hoveredUser === user.idUser 
                            ? 'bg-green-500 text-white shadow-lg' 
                            : 'bg-green-100 text-green-600 hover:bg-green-200'}
                        `}
                        onClick={() => handleEditUser(user)}
                        title="Editar Usuario"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className={`
                          transition-all duration-300 ease-in-out
                          p-2 rounded-full 
                          ${hoveredUser === user.idUser 
                            ? 'bg-red-500 text-white shadow-lg' 
                            : 'bg-red-100 text-red-600 hover:bg-red-200'}
                        `}
                        onClick={() => handleDelete(user.idUser)}
                        title="Eliminar Usuario"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Detalles del Usuario</h3>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedUser.idUser}</p>
              <p><strong>Nombre:</strong> {selectedUser.userName} {selectedUser.userLastName}</p>
              <p><strong>Email:</strong> {selectedUser.userEmail}</p>
              <p><strong>Rol:</strong> {selectedUser.userRole}</p>
              <p><strong>Género:</strong> {selectedUser.userGender}</p>
              <p><strong>Teléfono:</strong> {selectedUser.userTelephone}</p>
            </div>
            <button 
              onClick={() => setSelectedUser(null)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;



