import axios from "axios";
import { Camera, RotateCcw, RotateCw } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { assignAchievementByAdmin } from "../../../api/achievementsApi";
import "./ProfileCard.css";

const PersonalizaPerfil: React.FC = () => {
  const [userData, setUserData] = useState({
    avatar: null as string | null,
    newAvatar: null as string | null,
    userId: null as string | null,
    userName: "",
    userLastName: "",
    userGender: "",
    userTelephone: "",
  });

  const [isCardRotated, setIsCardRotated] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    if (storedUserId) {
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
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (response.data) {
        setUserData((prevData) => ({
          ...prevData,
          userId,
          avatar: response.data.userAvatar,
          userName: response.data.userName,
          userLastName: response.data.userLastName,
          userGender: response.data.userGender,
          userTelephone: response.data.userTelephone,
        }));
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
        setUserData((prevData) => ({
          ...prevData,
          newAvatar: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async () => {
    if (!userData.userId) {
      alert("No se encontró el ID del usuario.");
      return;
    }

    const hadPreviousAvatar = !!userData.avatar;
    const hasNewAvatar = !!userData.newAvatar;

    try {
      const authToken = sessionStorage.getItem("authToken");
      await axios.put(
        `${import.meta.env.VITE_API_URL}/user/${userData.userId}`,
        {
          userAvatar: userData.newAvatar,
          userName: userData.userName,
          userLastName: userData.userLastName,
          userGender: userData.userGender,
          userTelephone: userData.userTelephone,
        },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (userData.newAvatar) {
        sessionStorage.setItem("userAvatar", userData.newAvatar);
        window.dispatchEvent(new Event("storage"));
        setUserData((prevData) => ({
          ...prevData,
          avatar: userData.newAvatar,
          newAvatar: null,
        }));

        // Asignar logro si es la primera vez que sube o modifica el avatar
        // Logro ID 11 = "Perfil completado"
        if (!hadPreviousAvatar || hasNewAvatar) {
          try {
            await assignAchievementByAdmin(Number(userData.userId), 11);
            console.log("Logro de perfil completado asignado");
          } catch (achievementError) {
            console.log("El logro ya fue asignado o hubo un error:", achievementError);
          }
        }
      }

      alert("Perfil actualizado correctamente");
    } catch (error) {
      alert(
        "Hubo un problema al actualizar el perfil. Por favor, inténtalo de nuevo."
      );
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const toggleCardRotation = () => {
    setIsCardRotated(!isCardRotated);
  };

  return (
    <div
      className="bg1 overflow-hidden flex justify-center items-center min-h-screen"
      role="form"
      aria-labelledby="personaliza-perfil"
    >
      <div className={`profile-card ${isCardRotated ? "rotated" : ""}`}>
        <button
          className="group absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
          onClick={toggleCardRotation}
          aria-label={isCardRotated ? "Restaurar vista" : "Girar tarjeta"}
        >
          {isCardRotated ? <RotateCcw size={20} /> : <RotateCw size={20} />}

          <span
            className="
      absolute 
      bottom-full 
      left-1/2 
      transform 
      -translate-x-1/2 
      -translate-y-2 
      bg-gray-800 
      text-white 
      text-xs 
      px-2 
      py-1 
      rounded 
      opacity-0 
      group-hover:opacity-100 
      transition-opacity 
      duration-300 
      z-10
      whitespace-nowrap
    "
          >
            {isCardRotated ? "Desactivar animación" : "Girar tarjeta"}
          </span>
        </button>

        <div className="profile-card-inner">
          <div
            className="profile-card-front bg2"
            aria-label="Tarjeta de perfil"
          >
            <img src="/negativeLogo.png" alt="Logo de FemCoders Club" />
            <h1>Miembro FemCoders Club</h1>
          </div>

          <div className="profile-card-back">
            <div className="profile-card-back-left">
              <h5>Personaliza tu Perfil</h5>

              <div className="relative group">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  aria-label="Subir nueva foto de perfil"
                />

                {userData.newAvatar ? (
                  <img
                    src={userData.newAvatar}
                    alt="Nuevo avatar del usuario"
                    className="rounded-full object-cover"
                  />
                ) : userData.avatar ? (
                  <img
                    src={userData.avatar}
                    alt="Avatar actual del usuario"
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="rounded-full bg-gray-300 flex items-center justify-center w-full h-full">
                    <span>No Avatar</span>
                  </div>
                )}

                <button
                  className="btn btn-circle btn-accent absolute bottom-0 right-0 primary-button relative"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Subir nueva foto de perfil"
                >
                  <Camera aria-hidden="true" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    Subir imagen
                  </span>
                </button>
              </div>
            </div>

            <div className="profile-card-back-right">
              <div className="w-full">
                <label htmlFor="nombreUsuario" className="text-lg block mb-2">
                  Nombre:
                </label>
                <input
                  id="nombreUsuario"
                  type="text"
                  value={userData.userName}
                  onChange={(e) =>
                    handleInputChange("userName", e.target.value)
                  }
                  className="input input-bordered w-full mb-4"
                  aria-labelledby="nombreUsuario"
                />

                <label htmlFor="apellidoUsuario" className="text-lg block mb-2">
                  Apellido:
                </label>
                <input
                  id="apellidoUsuario"
                  type="text"
                  value={userData.userLastName}
                  onChange={(e) =>
                    handleInputChange("userLastName", e.target.value)
                  }
                  className="input input-bordered w-full mb-4"
                  aria-labelledby="apellidoUsuario"
                />

                <label htmlFor="generoUsuario" className="text-lg block mb-2">
                  Género:
                </label>
                <select
                  id="generoUsuario"
                  value={userData.userGender}
                  onChange={(e) =>
                    handleInputChange("userGender", e.target.value)
                  }
                  className="input input-bordered w-full mb-4 custom-select"
                  aria-label="Selecciona tu género"
                >
                  <option value="" disabled>
                    Selecciona tu género
                  </option>
                  <option value="Mujer">Mujer</option>
                  <option value="Hombre">Hombre</option>
                  <option value="No binario">No binario</option>
                  <option value="Prefiero no decirlo">
                    Prefiero no decirlo
                  </option>
                </select>

                <label htmlFor="telefonoUsuario" className="text-lg block mb-2">
                  Teléfono:
                </label>
                <input
                  id="telefonoUsuario"
                  type="text"
                  value={userData.userTelephone}
                  onChange={(e) =>
                    handleInputChange("userTelephone", e.target.value)
                  }
                  className="input input-bordered w-full mb-4"
                  aria-labelledby="telefonoUsuario"
                />
              </div>

              <button
                className="primary-button"
                onClick={handleSaveProfile}
                aria-label="Guardar cambios de perfil"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizaPerfil;
