import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CircleAlert, LogIn } from "lucide-react";
import PasswordInput from "../../../components/ui/PasswordInput";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import "./FormularioAcceso.css";

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
    <div className="fc-tarjeta formulario-acceso">
      <div className="formulario-acceso__cabecera">
        <img
          src="/logo-femcoders-animado.webp"
          alt="FemCoders Club"
          className="formulario-acceso__logo"
          width={64}
          height={64}
        />
        <div>
          <h2 className="formulario-acceso__titulo">Inicia sesión</h2>
          <p className="formulario-acceso__nota">
            Con el correo con el que te registraste.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="formulario-acceso__campos">
        <div className="fc-campo">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        {/*
          El enlace va después del campo y no junto a la etiqueta: así el
          tabulador pasa del correo a la contraseña sin desvíos.
        */}
        <div className="fc-campo">
          <label htmlFor="password">Contraseña</label>
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <Link
            to="/forgot-password"
            className="fc-enlace fc-enlace--texto formulario-acceso__olvido"
          >
            ¿Has olvidado tu contraseña?
          </Link>
        </div>

        {error && (
          <p
            className="fc-aviso fc-aviso--error"
            role="alert"
            tabIndex={-1}
            ref={errorRef}
          >
            <CircleAlert aria-hidden="true" />
            {error}
          </p>
        )}

        <button
          type="submit"
          className="fc-boton fc-boton--noche formulario-acceso__enviar"
        >
          Iniciar sesión
          <LogIn aria-hidden="true" />
        </button>
      </form>

      <p className="formulario-acceso__pie">
        ¿Todavía no tienes cuenta?{" "}
        <Link to="/register" className="fc-enlace fc-enlace--texto">
          Únete a la comunidad
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
