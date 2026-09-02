import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ModalContext } from "../../../context/ModalContext";
import PasswordInput from "../../../components/ui/PasswordInput";
import "../../LogIn/page/LoginPage.css";
import "../../LogIn/components/LoginForm.css";
import "./RegisterForm.css";

// Nombres y apellidos reales: acentos, ñ, ç y alfabetos no latinos (\p{L}),
// más espacios, guiones y apóstrofos de los nombres compuestos
// (Sánchez-Ortiz, D'Angelo). Antes /^[a-zA-Z\s]+$/ rechazaba «Rodríguez».
const NAME_PATTERN = /^[\p{L}\s'’-]+$/u;

const RegisterForm: React.FC = () => {
  const { openModal } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    userName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
    userTelephone: "",
    userGender: "",
  });
  // Consentimiento RGPD (issue #7): privacidad obligatoria, marketing opcional.
  const [acceptsPrivacy, setAcceptsPrivacy] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState<string>("");
  const [emailTaken, setEmailTaken] = useState(false);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setEmailTaken(false);
  };

  // Accesibilidad: al aparecer un error, llevar el foco (y la vista) hasta él
  // para que la usuaria no tenga que buscarlo por el formulario.
  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.focus();
      errorRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [error]);

  const validateForm = () => {
    if (
      !NAME_PATTERN.test(formData.userName) ||
      formData.userName.trim().length < 1
    ) {
      return "Escribe tu nombre. No puede contener números ni símbolos.";
    }
    if (
      !NAME_PATTERN.test(formData.userLastName) ||
      formData.userLastName.trim().length < 1
    ) {
      return "Escribe tu apellido. No puede contener números ni símbolos.";
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
    if (formData.userPassword !== formData.confirmPassword) {
      return "Las contraseñas no coinciden.";
    }
    if (formData.userTelephone && !/^\d{9,15}$/.test(formData.userTelephone)) {
      return "El número de teléfono no es válido.";
    }
    if (!acceptsPrivacy) {
      return "Debes aceptar la política de privacidad para registrarte.";
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
      // confirmPassword es solo de UI: no viaja al backend.
      const dataToSend: Record<string, unknown> = {
        ...formData,
        acceptsPrivacy,
        marketingConsent,
      };
      delete dataToSend.confirmPassword;
      await axios.post(`${import.meta.env.VITE_API_URL}/user`, dataToSend);
      navigate("/login");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        // El backend responde con mensajes claros: 409 = email ya registrado,
        // 400 = validación (message puede ser un array de errores).
        const data = err.response.data as { message?: string | string[] };
        const backendMessage = Array.isArray(data?.message)
          ? data.message.join(". ")
          : data?.message;
        if (err.response.status === 409) {
          setEmailTaken(true);
          setError(backendMessage || "Este correo electrónico ya está registrado.");
        } else {
          setError(backendMessage || "Error al registrarse. Inténtalo de nuevo.");
        }
      } else {
        setError(
          "No se pudo conectar con el servidor. Inténtalo de nuevo en unos minutos."
        );
      }
    }
  };

  const passwordRequirements = [
    {
      met: formData.userPassword.length >= 8,
      text: "Mínimo 8 caracteres",
    },
    {
      met: /[A-Z]/.test(formData.userPassword),
      text: "Al menos una mayúscula",
    },
    {
      met: /[a-z]/.test(formData.userPassword),
      text: "Al menos una minúscula",
    },
    {
      met: /[0-9]/.test(formData.userPassword),
      text: "Al menos un número",
    },
  ];

  return (
    <div className="login-page register-page bg1">
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
            <h2 className="typing word-finale">Tu lugar en la tecnología</h2>
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="register-row">
                <div className="register-field">
                  <label htmlFor="userName">Nombre:</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="register-field">
                  <label htmlFor="userLastName">Apellido:</label>
                  <input
                    type="text"
                    id="userLastName"
                    name="userLastName"
                    value={formData.userLastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <label htmlFor="userEmail">Correo Electrónico:</label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
              <div className="register-row">
                <div className="register-field">
                  <label htmlFor="userPassword">Contraseña:</label>
                  <PasswordInput
                    id="userPassword"
                    value={formData.userPassword}
                    onChange={handleChange}
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                    autoComplete="new-password"
                    required
                  />
                </div>
                <div className="register-field">
                  <label htmlFor="confirmPassword">Repetir Contraseña:</label>
                  <PasswordInput
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>

              {passwordFocus && (
                <div className="password-requirements">
                  <p className="password-requirements-title">Requisitos:</p>
                  <ul className="password-requirements-list">
                    {passwordRequirements.map((req, index) => (
                      <li
                        key={index}
                        className={
                          req.met ? "requirement-met" : "requirement-unmet"
                        }
                      >
                        <span aria-hidden="true">{req.met ? "✓" : "×"}</span>{" "}
                        {req.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="register-row">
                <div className="register-field">
                  <label htmlFor="userTelephone">Teléfono:</label>
                  <input
                    type="text"
                    id="userTelephone"
                    name="userTelephone"
                    value={formData.userTelephone}
                    onChange={handleChange}
                  />
                </div>
                <div className="register-field">
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
                </div>
              </div>

              <div className="register-consent">
                <input
                  type="checkbox"
                  id="acceptsPrivacy"
                  name="acceptsPrivacy"
                  checked={acceptsPrivacy}
                  onChange={(e) => {
                    setAcceptsPrivacy(e.target.checked);
                    setError("");
                  }}
                  required
                  aria-required="true"
                  aria-invalid={!!error && !acceptsPrivacy}
                  aria-describedby={
                    error && !acceptsPrivacy ? "register-error" : undefined
                  }
                />
                <label htmlFor="acceptsPrivacy">
                  He leído y acepto la{" "}
                  <button
                    type="button"
                    className="link-button"
                    onClick={(e) => {
                      // Evita que el clic en el enlace marque/desmarque la casilla.
                      e.stopPropagation();
                      openModal("privacyPolicy");
                    }}
                  >
                    Política de Privacidad
                  </button>
                  . <span aria-hidden="true">*</span>
                </label>
              </div>

              <div className="register-consent">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                />
                <label htmlFor="marketingConsent">
                  Quiero recibir la newsletter de FemCoders Club e invitaciones a
                  futuros eventos por email. Puedo darme de baja cuando quiera.
                </label>
              </div>

              {error && (
                <p
                  id="register-error"
                  className="error-message"
                  role="alert"
                  tabIndex={-1}
                  ref={errorRef}
                >
                  {error}
                  {emailTaken && (
                    <>
                      {" "}
                      ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                    </>
                  )}
                </p>
              )}
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
