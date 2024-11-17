// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./ForgotPasswordForm.css"; 

// const ForgotPasswordForm: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const templateParams = {
//       user_email: email,
//       reset_link: `${import.meta.env.VITE_FRONTEND_URL}/reset-password`,
//     };

//     try {
//       await emailjs.send(
//         "service_ih9jxkp",
//         "template_83zb4od",
//         templateParams,
//         "H0H4RPki97qj_cDXM"
//       );
//       setMessage("Correo de restablecimiento enviado. Revisa tu bandeja de entrada.");
//       setError("");
//     } catch (err) {
//       console.error("Failed to send email:", err);
//       setError("Error al enviar el correo de restablecimiento.");
//       setMessage("");
//     }
//   };

//   return (
//     <div className="forgot-password-container">
//       <div className="form-card">
//         <img
//           src="/FemCodersClubLogo.png"
//           alt="FemCoders Club Logo"
//           className="form-logo"
//         />
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Correo Electrónico</label>
//             <p className="instruction-text">Escribe tu correo para recibir instrucciones de restablecimiento.</p>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="primary-button">
//             Enviar
//           </button>
//           {message && <p className="success-message">{message}</p>}
//           {error && <p className="error-message">{error}</p>}
//         </form>
//       </div>
//       <div className="image-container">
//         <img
//           src="/FemCodersClubLogo.png"
//           alt="FemCoders Club"
//           className="side-image"
//         />
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordForm;

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
      // Paso 1: Solicitar el enlace de restablecimiento con el token al backend
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/forgot-password`, {
        email,
      });

      // El backend devolverá el enlace con el token
      const resetLink = response.data.resetLink;

      // Paso 2: Preparar los parámetros del email
      const templateParams = {
        user_email: email,
        reset_link: resetLink,
      };

      // Paso 3: Enviar el correo electrónico con emailjs
      await emailjs.send(
        "service_ih9jxkp",
        "template_83zb4od",
        templateParams,
        "H0H4RPki97qj_cDXM"
      );

      setMessage("Correo de restablecimiento enviado. Revisa tu bandeja de entrada.");
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
            <p className="instruction-text">Escribe tu correo para recibir instrucciones de restablecimiento.</p>
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



