import React, { useState, useRef } from "react";

const PersonalizaPerfil: React.FC = () => {
  // Estado para guardar la imagen actual del avatar y la nueva seleccionada temporalmente
  const [avatar, setAvatar] = useState<string | null>(
    localStorage.getItem("userAvatar")
  );
  const [newAvatar, setNewAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Manejar la selección de un archivo para el avatar
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setNewAvatar(base64String); // Mostrar la imagen temporalmente
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para abrir el selector de archivos cuando se hace clic en "Cambiar Avatar"
  const handleUploadAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Guardar la imagen en el localStorage y actualizar el estado para que sea oficial
  const handleSaveAvatar = () => {
    if (newAvatar) {
      setAvatar(newAvatar); // Actualizar la imagen oficial
      localStorage.setItem("userAvatar", newAvatar);
      setNewAvatar(null); // Resetear el valor temporal del nuevo avatar
      window.dispatchEvent(new Event("storage")); // Forzar una actualización en Header
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
        className="hiddenFileInput"
        onChange={handleFileChange}
        title="Seleccionar archivo de imagen"
      />

      {/* Mostrar el botón de guardar solo si hay un nuevo avatar seleccionado */}
      {newAvatar && (
        <button
          className="btn btn-primary mt-4"
          onClick={handleSaveAvatar}
        >
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
          defaultValue={localStorage.getItem("userName") || "Usuario"}
          className="input input-bordered w-full max-w-xs"
          disabled
        />
      </div>
    </div>
  );
};

export default PersonalizaPerfil;



