import React, { useState, useRef } from "react";

const PersonalizaPerfil: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(
    sessionStorage.getItem("userAvatar")
  );
  const [newAvatar, setNewAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
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

  const handleSaveAvatar = () => {
    if (newAvatar) {
      setAvatar(newAvatar);
      sessionStorage.setItem("userAvatar", newAvatar);
      setNewAvatar(null);
      window.dispatchEvent(new Event("storage")); 
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




