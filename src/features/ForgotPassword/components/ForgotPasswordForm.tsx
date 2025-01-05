import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "./ForgotPasswordForm.css";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/forgot-password`,
        {
          email,
        }
      );

      const resetLink = response.data.resetLink;

      const templateParams = {
        user_email: email,
        reset_link: resetLink,
      };

      await emailjs.send(
        "service_ih9jxkp",
        "template_83zb4od",
        templateParams,
        "H0H4RPki97qj_cDXM"
      );

      setMessage(
        "Correo de restablecimiento enviado. Revisa tu bandeja de entrada."
      );
      setError("");
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Error al enviar el correo de restablecimiento.");
      setMessage("");
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
          <button type="submit" className="primary-button">
            Enviar
          </button>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
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
