import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const PersonalizaPerfil: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [newAvatar, setNewAvatar] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      fetchUserAvatar(storedUserId);
    } else {
      alert(
        "Parece que no estás logeado correctamente, intenta iniciar sesión de nuevo."
      );
    }
  }, []);

  const fetchUserAvatar = async (userId: string) => {
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

      if (response.data.userAvatar) {
        setAvatar(response.data.userAvatar);
      }
    } catch (error) {
      console.error("Error al obtener el avatar del usuario:", error);
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

  const handleSaveAvatar = async () => {
    if (newAvatar && userId) {
      try {
        const authToken = sessionStorage.getItem("authToken");
        await axios.put(
          `${import.meta.env.VITE_API_URL}/user/${userId}`,
          { userAvatar: newAvatar },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        sessionStorage.setItem("userAvatar", newAvatar);

        window.dispatchEvent(new Event("storage"));

        setAvatar(newAvatar);
        setNewAvatar(null);
      } catch (error) {
        alert(
          "Hubo un problema al actualizar el avatar. Por favor, inténtalo de nuevo."
        );
      }
    } else {
      alert("No se encontró el ID del usuario o la imagen a actualizar.");
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Personaliza tu Perfil</h1>

      <div className="avatar mb-4">
        {newAvatar ? (
          <img
            src={newAvatar}
            alt="User Avatar"
            className="rounded-full w-32 h-32 object-cover shadow-md"
          />
        ) : avatar ? (
          <img
            src={avatar}
            alt="User Avatar"
            className="rounded-full w-32 h-32 object-cover shadow-md"
          />
        ) : (
          <div className="rounded-full w-32 h-32 bg-gray-300 flex items-center justify-center shadow-md">
            <span className="text-xl text-gray-700">No Avatar</span>
          </div>
        )}
      </div>

      <button
        className="btn btn-outline mb-4"
        onClick={handleUploadAvatarClick}
      >
        Cambiar Avatar
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        title="Seleccionar archivo de imagen"
      />

      {newAvatar && (
        <button className="btn btn-primary mt-4" onClick={handleSaveAvatar}>
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
          defaultValue={sessionStorage.getItem("userName") || "Usuario"}
          className="input input-bordered w-full max-w-xs"
          disabled
        />
      </div>
    </div>
  );
};

export default PersonalizaPerfil;
