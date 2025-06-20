import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "../../LogIn/page/LoginPage.css";
import "../../LogIn/components/LoginForm.css";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
    userTelephone: "",
    userGender: "",
    userRole: "",
  });
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    if (
      !/^[a-zA-Z\s]+$/.test(formData.userName) ||
      formData.userName.length < 2
    ) {
      return "El nombre debe tener al menos 2 caracteres y solo contener letras.";
    }
    if (
      !/^[a-zA-Z\s]+$/.test(formData.userLastName) ||
      formData.userLastName.length < 2
    ) {
      return "El apellido debe tener al menos 2 caracteres y solo contener letras.";
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
    if (!/^\d{9,15}$/.test(formData.userTelephone)) {
      return "El número de teléfono no es válido.";
    }
    if (!formData.userRole) {
      return "Por favor, selecciona un rol.";
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
      const { confirmPassword, ...dataToSend } = formData;
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user`,
        dataToSend
      );
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      setError("Error al registrarse. Inténtalo de nuevo.");
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
    <div className="login-page bg1">
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
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="userName">Nombre:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
              <label htmlFor="userLastName">Apellido:</label>
              <input
                type="text"
                id="userLastName"
                name="userLastName"
                value={formData.userLastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="userEmail">Correo Electrónico:</label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
              <label htmlFor="userPassword">Contraseña:</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="userPassword"
                  name="userPassword"
                  value={formData.userPassword}
                  onChange={handleChange}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  required
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {passwordFocus && (
                <div
                  className="mt-1 p-2 bg-gray-50 rounded-md"
                  style={{ fontSize: "12px", lineHeight: "1.2" }}
                >
                  <p
                    className="text-gray-600 mb-1"
                    style={{ marginBottom: "4px" }}
                  >
                    Requisitos:
                  </p>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1"
                        style={{ fontSize: "12px" }}
                      >
                        <span
                          className={
                            req.met ? "text-green-500" : "text-red-500"
                          }
                          style={{ fontSize: "12px" }}
                        >
                          {req.met ? "✓" : "×"}
                        </span>
                        <span
                          className={
                            req.met ? "text-green-700" : "text-gray-600"
                          }
                          style={{ fontSize: "12px" }}
                        >
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <label htmlFor="confirmPassword">Repetir Contraseña:</label>
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              <label htmlFor="userTelephone">Teléfono:</label>
              <input
                type="text"
                id="userTelephone"
                name="userTelephone"
                value={formData.userTelephone}
                onChange={handleChange}
              />

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
              <label htmlFor="userRole">Rol:</label>
              <select
                id="userRole"
                name="userRole"
                value={formData.userRole}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu rol</option>
                <option value="user">Usuario</option>
                {/* <option value="volunteer">Voluntario</option>
                <option value="sponsor">Sponsor</option> */}
              </select> 

              {error && <p className="error-message">{error}</p>}
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
