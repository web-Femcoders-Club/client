import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PasswordInput from "../../../components/ui/PasswordInput";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import "../components/ForgotPasswordForm.css";

const ResetPasswordForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const errorRef = useFocusMessage(error);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      setError("El enlace de restablecimiento no es válido o ha expirado.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/reset-password`,
        {
          token,
          newPassword,
        }
      );
      setMessage(response.data.message);
      setError("");
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response && err.response.status === 400) {
          setError("El enlace de restablecimiento no es válido o ha expirado.");
        } else {
          setError(
            "Error al restablecer la contraseña. Por favor, intenta nuevamente."
          );
        }
      } else {
        setError("Ocurrió un error desconocido.");
      }
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!token) {
    return (
      <div className="forgot-password-container">
        <div className="form-card">
          <img
            src="/FemCodersClubLogo.png"
            alt="FemCoders Club Logo"
            className="form-logo"
          />
          <p className="error-message">
            El enlace de restablecimiento no es válido o ha expirado.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="forgot-password-container">
      <div className="form-card">
        <img
          src="/FemCodersClubLogo.png"
          alt="FemCoders Club Logo"
          className="form-logo"
        />
        <form onSubmit={handleSubmit}>
          <h2>Crear Nueva Contraseña</h2>
          <div className="form-group">
            <PasswordInput
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
              required
            >
              <label htmlFor="newPassword">Nueva Contraseña</label>
            </PasswordInput>
          </div>
          <div className="form-group">
            <PasswordInput
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            >
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            </PasswordInput>
          </div>
          <button
            type="submit"
            className="primary-button"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Restableciendo…" : "Restablecer Contraseña"}
          </button>
          {message && (
            <p className="success-message" role="status">
              {message}
            </p>
          )}
          {error && (
            <p className="error-message" role="alert" tabIndex={-1} ref={errorRef}>
              {error}
            </p>
          )}

          <Link to="/login" className="back-to-login">
            <ArrowLeft size={16} aria-hidden="true" />
            Volver a iniciar sesión
          </Link>
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

export default ResetPasswordForm;
