import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, CircleAlert, CircleCheck, Send } from "lucide-react";
import AccesoCentrado from "../../LogIn/components/AccesoCentrado";

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
    <>
      <Helmet>
        <title>Recupera tu contraseña - FemCoders Club</title>
      </Helmet>
      <AccesoCentrado
        antetitulo="Tu cuenta"
        titulo={
          <>
            ¿Has olvidado tu <span className="fc-rotulador">contraseña</span>?
          </>
        }
        entradilla="Te enviamos un enlace por correo para que crees una nueva."
      >
        <form onSubmit={handleSubmit} className="formulario-acceso__campos">
          <div className="fc-campo">
            <label htmlFor="email">Correo electrónico</label>
            <p className="fc-campo__ayuda" id="email-ayuda">
              El mismo con el que te registraste.
            </p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              aria-describedby="email-ayuda"
              required
            />
          </div>

          <button
            type="submit"
            className="fc-boton fc-boton--noche formulario-acceso__enviar"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Enviando…" : "Enviar enlace"}
            <Send aria-hidden="true" />
          </button>

          {message && (
            <p className="fc-aviso fc-aviso--exito" role="status">
              <CircleCheck aria-hidden="true" />
              {message}
            </p>
          )}
          {error && (
            <p className="fc-aviso fc-aviso--error" role="alert">
              <CircleAlert aria-hidden="true" />
              {error}
            </p>
          )}
        </form>

        <div className="formulario-acceso__pie">
          <Link to="/login" className="fc-enlace fc-enlace--texto formulario-acceso__volver">
            <ArrowLeft aria-hidden="true" />
            Volver a iniciar sesión
          </Link>
          <p className="formulario-acceso__ayuda">
            ¿Sigues sin poder acceder? Escríbenos a{" "}
            <a href="mailto:info@femcodersclub.com" className="fc-enlace fc-enlace--texto">
              info@femcodersclub.com
            </a>
          </p>
        </div>
      </AccesoCentrado>
    </>
  );
};

export default ForgotPasswordForm;
