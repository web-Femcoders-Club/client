import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../../components/ui/PasswordInput";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const errorRef = useFocusMessage(error);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          userEmail: email,
          userPassword: password,
        }
      );

      const { idUser, name, lastName, avatar, token, role } = response.data;

      if (!idUser || !token) {
        throw new Error("Datos de usuario incompletos recibidos");
      }

      sessionStorage.setItem("isAuthenticated", "true");
      // Sin avatar se borra la clave en vez de guardar una ruta por defecto:
      // aquí también se escribía "/default-avatar.png", que no existe. Hoy no
      // hace daño porque nadie lee esta clave —el Header pide el avatar al
      // backend—, pero guardar una ruta rota es dejar la trampa puesta para
      // quien la lea mañana. Borrarla evita además arrastrar el avatar de una
      // sesión anterior si la siguiente usuaria no tiene.
      if (avatar) {
        sessionStorage.setItem("userAvatar", avatar);
      } else {
        sessionStorage.removeItem("userAvatar");
      }
      sessionStorage.setItem("userName", name || "Usuario");
      sessionStorage.setItem("userLastName", lastName || "");
      sessionStorage.setItem("userId", idUser);
      sessionStorage.setItem("authToken", token);
      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("userRole", role || "user");

      window.dispatchEvent(new Event("storage"));

      if (role === "admin") {
        navigate("/admin", {
          state: { userName: name, avatar: avatar },
        });
      } else {
        navigate("/welcome", {
          state: { userName: name, avatar: avatar },
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Error al iniciar sesión. Verifica tus credenciales."
        );
      } else {
        setError("Error inesperado. Por favor, intenta de nuevo.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img
          src="/logo-femcoders-animado.webp"
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
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          {error && (
            <p className="error-message" role="alert" tabIndex={-1} ref={errorRef}>
              {error}
            </p>
          )}
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
