import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, CircleAlert, CircleCheck, KeyRound } from "lucide-react";
import PasswordInput from "../../../components/ui/PasswordInput";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import AccesoCentrado from "../../LogIn/components/AccesoCentrado";
import RequisitosContrasena from "../../LogIn/components/RequisitosContrasena";
import { cumplePoliticaContrasena } from "../../LogIn/politicaContrasena";

const ENLACE_NO_VALIDO = "El enlace de restablecimiento no es válido o ha expirado.";

const VolverAlLogin: React.FC = () => (
  <div className="formulario-acceso__pie">
    <Link to="/login" className="fc-enlace fc-enlace--texto formulario-acceso__volver">
      <ArrowLeft aria-hidden="true" />
      Volver a iniciar sesión
    </Link>
  </div>
);

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
      setError(ENLACE_NO_VALIDO);
      return;
    }

    /*
     * El backend aplica la misma política que en el alta y responde 400 si no
     * se cumple; abajo, un 400 se traduce como «enlace no válido», así que
     * quien elegía una contraseña débil creía que su enlace había caducado.
     * Se comprueba aquí antes de enviar.
     */
    if (!cumplePoliticaContrasena(newPassword)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula y un número."
      );
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
          setError(ENLACE_NO_VALIDO);
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

  const cabecera = {
    antetitulo: "Tu cuenta",
    titulo: (
      <>
        Crea una contraseña <span className="fc-rotulador">nueva</span>
      </>
    ),
  };

  if (!token) {
    return (
      <>
        <Helmet>
          <title>Nueva contraseña - FemCoders Club</title>
        </Helmet>
        <AccesoCentrado {...cabecera}>
          <p className="fc-aviso fc-aviso--error">
            <CircleAlert aria-hidden="true" />
            {ENLACE_NO_VALIDO}
          </p>
          <p className="formulario-acceso__ayuda">
            Puedes pedir uno nuevo en{" "}
            <Link to="/forgot-password" className="fc-enlace fc-enlace--texto">
              «He olvidado mi contraseña»
            </Link>
            .
          </p>
          <VolverAlLogin />
        </AccesoCentrado>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Nueva contraseña - FemCoders Club</title>
      </Helmet>
      <AccesoCentrado
        {...cabecera}
        entradilla="Elige la contraseña con la que entrarás a partir de ahora."
      >
        <form onSubmit={handleSubmit} className="formulario-acceso__campos">
          <div className="fc-campo">
            <label htmlFor="newPassword">Nueva contraseña</label>
            <PasswordInput
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          <RequisitosContrasena contrasena={newPassword} />

          <div className="fc-campo">
            <label htmlFor="confirmPassword">Repite la contraseña</label>
            <PasswordInput
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          {message && (
            <p className="fc-aviso fc-aviso--exito" role="status">
              <CircleCheck aria-hidden="true" />
              {message}
            </p>
          )}
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
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Guardando…" : "Guardar contraseña"}
            <KeyRound aria-hidden="true" />
          </button>
        </form>

        <VolverAlLogin />
      </AccesoCentrado>
    </>
  );
};

export default ResetPasswordForm;
