import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./ForgotPasswordForm.css";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setMessage("");

    try {
      // El backend genera el token seguro y envía el email él mismo.
      // La respuesta es genérica (no revela si el email existe: anti-enumeración).
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/forgot-password`, {
        email,
      });
      setMessage(
        "Si el email está registrado, recibirás un enlace para restablecer tu contraseña. Revisa tu bandeja de entrada."
      );
    } catch (err) {
      setError("No se pudo procesar la solicitud. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="form-card">
        <img
          src="/FemCodersClubLogo.png"
          alt="FemCoders Club Logo"
          className="form-logo"
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <p className="instruction-text">
              Escribe tu correo para recibir instrucciones de restablecimiento.
            </p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="primary-button"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Enviando…" : "Enviar"}
          </button>
          {message && (
            <p className="success-message" role="status">
              {message}
            </p>
          )}
          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}

          <Link to="/login" className="back-to-login">
            <ArrowLeft size={16} aria-hidden="true" />
            Volver a iniciar sesión
          </Link>

          <p className="forgot-help-text">
            ¿Sigues sin poder acceder? Escríbenos a{" "}
            <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>
          </p>
        </form>
      </div>
      <div className="image-container">
        <img
          src="/FemCodersClubLogo.png"
          alt="FemCoders Club"
          className="side-image"
        />
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
