import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const PersonalizaPerfil: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [newAvatar, setNewAvatar] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [userLastName, setUserLastName] = useState<string>("");
  const [userGender, setUserGender] = useState<string>("");
  const [userTelephone, setUserTelephone] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      fetchUserDetails(storedUserId);
    } else {
      alert(
        "Parece que no estás logeado correctamente, intenta iniciar sesión de nuevo."
      );
    }
  }, []);

  const fetchUserDetails = async (userId: string) => {
    try {
      const authToken = sessionStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.data) {
        setAvatar(response.data.userAvatar);
        setUserName(response.data.userName);
        setUserLastName(response.data.userLastName);
        setUserGender(response.data.userGender);
        setUserTelephone(response.data.userTelephone);
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert(
          "El archivo es demasiado grande. El tamaño máximo permitido es 2 MB."
        );
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setNewAvatar(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSaveProfile = async () => {
    if (userId) {
      try {
        const authToken = sessionStorage.getItem("authToken");
        await axios.put(
          `${import.meta.env.VITE_API_URL}/user/${userId}`,
          {
            userAvatar: newAvatar,
            userName,
            userLastName,
            userGender,
            userTelephone,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (newAvatar) {
          sessionStorage.setItem("userAvatar", newAvatar);
          window.dispatchEvent(new Event("storage"));
          setAvatar(newAvatar);
          setNewAvatar(null);
        }

        alert("Perfil actualizado correctamente.");
      } catch (error) {
        alert(
          "Hubo un problema al actualizar el perfil. Por favor, inténtalo de nuevo."
        );
      }
    } else {
      alert("No se encontró el ID del usuario.");
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Personaliza tu Perfil</h1>

      <div className="avatar mb-4 relative">
        {newAvatar ? (
          <img
            src={newAvatar}
            alt="User Avatar"
            className="rounded-full w-32 h-32 object-cover shadow-md border-4 border-primary"
          />
        ) : avatar ? (
          <img
            src={avatar}
            alt="User Avatar"
            className="rounded-full w-32 h-32 object-cover shadow-md border-4 border-primary"
          />
        ) : (
          <div className="rounded-full w-32 h-32 bg-gray-300 flex items-center justify-center shadow-md">
            <span className="text-xl text-gray-700">No Avatar</span>
          </div>
        )}
        <button
          className="btn btn-circle btn-accent absolute bottom-0 right-0"
          onClick={handleUploadAvatarClick}
        >
          📷
        </button>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        title="Seleccionar archivo de imagen"
      />

      {newAvatar && (
        <button className="btn btn-primary mt-4" onClick={handleSaveProfile}>
          Guardar Imagen
        </button>
      )}

      <div className="flex flex-col items-center w-full mt-6">
        <label htmlFor="nombreUsuario" className="mb-2 text-lg">
          Nombre de Usuario:
        </label>
        <input
          id="nombreUsuario"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="input input-bordered w-full max-w-xs mb-4"
        />

        <label htmlFor="apellidoUsuario" className="mb-2 text-lg">
          Apellido:
        </label>
        <input
          id="apellidoUsuario"
          type="text"
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
          className="input input-bordered w-full max-w-xs mb-4"
        />

        <label htmlFor="generoUsuario" className="mb-2 text-lg">
          Género:
        </label>
        <input
          id="generoUsuario"
          type="text"
          value={userGender}
          onChange={(e) => setUserGender(e.target.value)}
          className="input input-bordered w-full max-w-xs mb-4"
        />

        <label htmlFor="telefonoUsuario" className="mb-2 text-lg">
          Teléfono:
        </label>
        <input
          id="telefonoUsuario"
          type="text"
          value={userTelephone}
          onChange={(e) => setUserTelephone(e.target.value)}
          className="input input-bordered w-full max-w-xs mb-4"
        />
      </div>

      <button
        className="btn btn-primary mt-6"
        onClick={handleSaveProfile}
      >
        Guardar Cambios
      </button>
    </div>
  );
};

export default PersonalizaPerfil;

