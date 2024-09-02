import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      reset_link: `${import.meta.env.VITE_FRONTEND_URL}/reset-password?email=${email}`,
    };

    try {
      await emailjs.send(
        'service_ih9jxkp',        
        'template_83zb4od',       
        templateParams,
        'H0H4RPki97qj_cDXM'       
      );
      setMessage("Correo de restablecimiento enviado. Revisa tu bandeja de entrada.");
      setError("");
    } catch (err) {
      console.error('Failed to send email:', err);
      setError("Error al enviar el correo de restablecimiento.");
      setMessage("");
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginTop: '5rem' }}>Restablecer Contraseña</h2>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordForm;

