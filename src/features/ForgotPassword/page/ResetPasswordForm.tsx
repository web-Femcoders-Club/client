import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPasswordForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

 
  const query = new URLSearchParams(location.search);
  const email = query.get("email");  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/reset-password`, {
        email,  
        newPassword,
      });
      setMessage(response.data.message);
      setError(""); 
      setTimeout(() => navigate("/login"), 3000); 
    } catch (err) {
      setError("Error al restablecer la contraseña.");
      setMessage(""); 
    }
  };

  return (
    <div className="reset-password-container">
      <form onSubmit={handleSubmit}>
        <h2>Crear Nueva Contraseña</h2>
        <label htmlFor="newPassword">Nueva Contraseña:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Restablecer Contraseña</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default ResetPasswordForm;






