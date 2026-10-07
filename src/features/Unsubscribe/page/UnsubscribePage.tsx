import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, CircleAlert, CircleCheck, Send } from "lucide-react";
import AccesoCentrado from "../../LogIn/components/AccesoCentrado";

const CORREO_AYUDA = "femcodersclub@gmail.com";

const CABECERA = {
  antetitulo: "Tus correos",
  titulo: (
    <>
      Gestiona tus <span className="fc-rotulador">comunicaciones</span>
    </>
  ),
};

const VolverALaWeb: React.FC = () => (
  <div className="formulario-acceso__pie">
    <Link to="/" className="fc-enlace fc-enlace--texto formulario-acceso__volver">
      <ArrowLeft aria-hidden="true" />
      Volver a FemCoders Club
    </Link>
  </div>
);

const Ayuda: React.FC<{ texto: string }> = ({ texto }) => (
  <p className="formulario-acceso__ayuda">
    {texto}{" "}
    <a href={`mailto:${CORREO_AYUDA}`} className="fc-enlace fc-enlace--texto">
      {CORREO_AYUDA}
    </a>
  </p>
);

type ConfirmStatus = "loading" | "success" | "already" | "error";
/**
 * `queued`: el backend registró la solicitud pero no pudo enviar el email de
 * confirmación (proveedor caído). No es un error de la persona y no tiene
 * nada que reintentar — el mensaje debe decírselo, no mandarla a probar otra
 * vez.
 */
type RequestStatus =
  | "idle"
  | "loading"
  | "sent"
  | "already"
  | "queued"
  | "error";

const UnsubscribePage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const email = query.get("email");
  const token = query.get("token");

  const hasParams = !!email && !!token;

  // — Flujo confirmación (con token en URL)
  const [confirmStatus, setConfirmStatus] = useState<ConfirmStatus>("loading");

  useEffect(() => {
    if (!hasParams) return;
    const params = new URLSearchParams({ email: email!, token: token! });
    axios
      .get(`${import.meta.env.VITE_API_URL}/unsubscribe?${params.toString()}`)
      .then((res) => {
        if (res.data.status === "ok") setConfirmStatus("success");
        else if (res.data.status === "already") setConfirmStatus("already");
        else setConfirmStatus("error");
      })
      .catch(() => setConfirmStatus("error"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // — Flujo solicitud (sin token, formulario)
  const [inputEmail, setInputEmail] = useState("");
  const [requestStatus, setRequestStatus] = useState<RequestStatus>("idle");

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail.trim()) return;
    setRequestStatus("loading");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/unsubscribe/request`,
        { email: inputEmail.trim() }
      );
      if (res.data.status === "sent") setRequestStatus("sent");
      else if (res.data.status === "already") setRequestStatus("already");
      else if (res.data.status === "queued") setRequestStatus("queued");
      else setRequestStatus("error");
    } catch {
      setRequestStatus("error");
    }
  };

  // — Render: confirmación
  if (hasParams) {
    const content: Record<ConfirmStatus, { title: string; body: string; type: "neutral" | "success" | "error" }> = {
      loading: {
        title: "Procesando tu solicitud...",
        body: "Un momento, estamos gestionando tu baja.",
        type: "neutral",
      },
      success: {
        title: "Ya estás dada de baja 💜",
        body: `Hemos registrado que ${email} no desea recibir más comunicaciones de FemCoders Club. Lamentamos verte partir — siempre serás bienvenida si decides volver.`,
        type: "success",
      },
      already: {
        title: "Ya estabas dada de baja",
        body: `El correo ${email} ya estaba registrado como baja anteriormente. No tienes que hacer nada más.`,
        type: "success",
      },
      error: {
        title: "Enlace no válido",
        body: "El enlace de baja no es válido o ha sido manipulado. Si crees que es un error, contáctanos.",
        type: "error",
      },
    };

    const { title, body, type } = content[confirmStatus];

    return (
      <>
        <Helmet>
          <title>Dar de baja tu correo - FemCoders Club</title>
        </Helmet>
        <AccesoCentrado {...CABECERA}>
          <h2 className="formulario-acceso__titulo">{title}</h2>
          {type === "neutral" && (
            <p className="formulario-acceso__texto" role="status">
              {body}
            </p>
          )}
          {type === "success" && (
            <p className="fc-aviso fc-aviso--exito" role="status">
              <CircleCheck aria-hidden="true" />
              {body}
            </p>
          )}
          {type === "error" && (
            <p className="fc-aviso fc-aviso--error" role="alert">
              <CircleAlert aria-hidden="true" />
              {body}
            </p>
          )}
          {(type === "success" || type === "error") && (
            <Ayuda texto="¿Necesitas ayuda? Escríbenos a" />
          )}
          <VolverALaWeb />
        </AccesoCentrado>
      </>
    );
  }

  // — Render: formulario de solicitud
  return (
    <>
      <Helmet>
        <title>Dar de baja tu correo - FemCoders Club</title>
      </Helmet>
      <AccesoCentrado
        {...CABECERA}
        entradilla="Si no quieres recibir más correos de FemCoders Club, te enviamos un enlace para confirmar la baja."
      >
        {requestStatus === "idle" ||
        requestStatus === "loading" ||
        requestStatus === "error" ? (
          <form onSubmit={handleRequest} className="formulario-acceso__campos">
            <div className="fc-campo">
              <label htmlFor="unsub-email">Tu correo electrónico</label>
              <input
                type="email"
                id="unsub-email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                autoComplete="email"
                required
                disabled={requestStatus === "loading"}
              />
            </div>

            {requestStatus === "error" && (
              <p className="fc-aviso fc-aviso--error" role="alert">
                <CircleAlert aria-hidden="true" />
                <span className="fc-texto-neutro">
                  No se pudo enviar el enlace. Inténtalo de nuevo o escríbenos a{" "}
                  <a href={`mailto:${CORREO_AYUDA}`} className="fc-enlace fc-enlace--texto">
                    {CORREO_AYUDA}
                  </a>
                </span>
              </p>
            )}

            <button
              type="submit"
              className="fc-boton fc-boton--noche formulario-acceso__enviar"
              disabled={requestStatus === "loading"}
              aria-busy={requestStatus === "loading"}
            >
              {requestStatus === "loading" ? "Enviando…" : "Enviarme el enlace de baja"}
              <Send aria-hidden="true" />
            </button>
          </form>
        ) : requestStatus === "sent" ? (
          <p className="fc-aviso fc-aviso--exito" role="status">
            <CircleCheck aria-hidden="true" />
            Te hemos enviado un email con el enlace de confirmación. Revisa tu
            bandeja de entrada (y la carpeta de spam si no lo encuentras).
          </p>
        ) : requestStatus === "queued" ? (
          <div className="formulario-acceso__campos" role="status">
            <p className="fc-aviso fc-aviso--exito">
              <CircleCheck aria-hidden="true" />
              Hemos registrado tu solicitud de baja.
            </p>
            <p className="formulario-acceso__texto">
              Ahora mismo no podemos enviarte el email de confirmación por un
              problema técnico nuestro, así que la tramitaremos a mano. No
              tienes que hacer nada más ni volver a intentarlo.
            </p>
            <Ayuda texto="Si prefieres que te confirmemos por escrito, escríbenos a" />
          </div>
        ) : (
          <p className="fc-aviso fc-aviso--exito" role="status">
            <CircleCheck aria-hidden="true" />
            Este email ya estaba dado de baja anteriormente. No tienes que hacer
            nada más.
          </p>
        )}

        <VolverALaWeb />
      </AccesoCentrado>
    </>
  );
};

export default UnsubscribePage;
