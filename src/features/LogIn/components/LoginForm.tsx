import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          userEmail: email,
          userPassword: password,
        }
      );

      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("userAvatar", response.data.avatar || "");
      sessionStorage.setItem("userName", response.data.name);
      sessionStorage.setItem("userId", response.data.idUser);
      sessionStorage.setItem("authToken", response.data.token);

      window.dispatchEvent(new Event("storage"));

      if (response.data.role === "admin") {
        navigate("/admin", {
          state: { userName: response.data.name, avatar: response.data.avatar },
        });
      } else {
        navigate("/welcome", {
          state: { userName: response.data.name, avatar: response.data.avatar },
        });
      }
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img
          src="/FemCodersClubLogo.png"
          alt="Fem Coders Club Logo"
          className="logo"
        />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="primary-button">
            Iniciar Sesión
          </button>
        </form>
        <div className="links">
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
          <br />
          <a href="/register">¿No tienes cuenta? Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
