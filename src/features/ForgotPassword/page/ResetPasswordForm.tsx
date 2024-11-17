// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../components/ForgotPasswordForm.css"; 

// const ResetPasswordForm: React.FC = () => {
//   const [newPassword, setNewPassword] = useState<string>("");
//   const [confirmPassword, setConfirmPassword] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const location = useLocation();
//   const navigate = useNavigate();

  
//   const query = new URLSearchParams(location.search);
//   const token = query.get("token");  

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setError("Las contraseñas no coinciden.");
//       return;
//     }

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/reset-password`, {
//         token,  
//         newPassword,
//       });
//       setMessage(response.data.message);
//       setError(""); 
//       setTimeout(() => navigate("/login"), 3000); 
//     } catch (err) {
//       setError("Error al restablecer la contraseña.");
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
//           <h2>Crear Nueva Contraseña</h2>
//           <div className="form-group">
//             <input
//               type="password"
//               id="newPassword"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//             <label htmlFor="newPassword">Nueva Contraseña</label>
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             <label htmlFor="confirmPassword">Confirmar Contraseña</label>
//           </div>
//           <button type="submit" className="primary-button">
//             Restablecer Contraseña
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

// export default ResetPasswordForm;


import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../components/ForgotPasswordForm.css"; 

const ResetPasswordForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
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

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/reset-password`, {
        token,
        newPassword,
      });
      setMessage(response.data.message);
      setError("");
      setTimeout(() => navigate("/login"), 3000);
    } catch (err: any) {
      if (err.response && err.response.status === 400) {
        setError("El enlace de restablecimiento no es válido o ha expirado.");
      } else {
        setError("Error al restablecer la contraseña. Por favor, intenta nuevamente.");
      }
      setMessage("");
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
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label htmlFor="newPassword">Nueva Contraseña</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          </div>
          <button type="submit" className="primary-button">
            Restablecer Contraseña
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

export default ResetPasswordForm;




