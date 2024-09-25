import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../LogIn/page/LoginPage.css";
import "../../LogIn/components/LoginForm.css";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userTelephone: "",
    userGender: "",
    userRole: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    if (
      !/^[a-zA-Z\s]+$/.test(formData.userName) ||
      formData.userName.length < 2
    ) {
      return "El nombre debe tener al menos 2 caracteres y solo contener letras.";
    }
    if (
      !/^[a-zA-Z\s]+$/.test(formData.userLastName) ||
      formData.userLastName.length < 2
    ) {
      return "El apellido debe tener al menos 2 caracteres y solo contener letras.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
      return "El correo electrónico no es válido.";
    }
    if (
      formData.userPassword.length < 8 ||
      !/[A-Z]/.test(formData.userPassword) ||
      !/[a-z]/.test(formData.userPassword) ||
      !/[0-9]/.test(formData.userPassword)
    ) {
      return "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula y un número.";
    }
    if (!/^\d{9,15}$/.test(formData.userTelephone)) {
      return "El número de teléfono no es válido.";
    }
    if (!formData.userRole) {
      return "Por favor, selecciona un rol.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user`,
        formData
      );
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      setError("Error al registrarse. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-page bg1">
      <div className="login-container">
        <div className="login-background-text">
          <h3 className="typing main-title">¡Únete a nuestra comunidad!</h3>
          <div className="words">
            <h2 className="typing">Networking</h2>
            <h2 className="typing">Eventos</h2>
            <h2 className="typing">Mentoría</h2>
            <h2 className="typing">Oportunidades</h2>
            <h2 className="typing">Recursos</h2>
            <h2 className="typing">Apoyo Mutuo</h2>
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="userName">Nombre:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
              <label htmlFor="userLastName">Apellido:</label>
              <input
                type="text"
                id="userLastName"
                name="userLastName"
                value={formData.userLastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="userEmail">Correo Electrónico:</label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
              <label htmlFor="userPassword">Contraseña:</label>
              <input
                type="password"
                id="userPassword"
                name="userPassword"
                value={formData.userPassword}
                onChange={handleChange}
                required
              />
              <label htmlFor="userTelephone">Teléfono:</label>
              <input
                type="text"
                id="userTelephone"
                name="userTelephone"
                value={formData.userTelephone}
                onChange={handleChange}
              />
              <label htmlFor="userGender">Género:</label>
              <select
                id="userGender"
                name="userGender"
                value={formData.userGender}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu género</option>
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
                <option value="No binario">No binario</option>
                <option value="Prefiero no decir">Prefiero no decir</option>
              </select>
              <label htmlFor="userRole">Rol:</label>
              <select
                id="userRole"
                name="userRole"
                value={formData.userRole}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu rol</option>
                <option value="user">Usuario</option>
                <option value="volunteer">Voluntario</option>
                <option value="sponsor">Sponsor</option>
              </select>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="primary-button">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
