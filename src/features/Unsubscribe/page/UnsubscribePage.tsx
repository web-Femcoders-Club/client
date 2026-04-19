import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../../ForgotPassword/components/ForgotPasswordForm.css";

type ConfirmStatus = "loading" | "success" | "already" | "error";
type RequestStatus = "idle" | "loading" | "sent" | "already" | "error";

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
      <div className="forgot-password-container">
        <div className="form-card">
          <img src="/FemCodersClubLogo.png" alt="FemCoders Club" className="form-logo" />
          <h2>{title}</h2>
          {type === "neutral" && <p style={{ color: "#4737bb", textAlign: "center" }}>{body}</p>}
          {type === "success" && <p className="success-message" style={{ textAlign: "center" }}>{body}</p>}
          {type === "error" && <p className="error-message" style={{ textAlign: "center" }}>{body}</p>}
          {(type === "success" || type === "error") && (
            <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "#666", textAlign: "center" }}>
              ¿Necesitas ayuda? Escríbenos a{" "}
              <a href="mailto:femcodersclub@gmail.com" style={{ color: "#4737bb" }}>
                femcodersclub@gmail.com
              </a>
            </p>
          )}
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <a href="/" className="primary-button" style={{ display: "inline-block" }}>
              Volver a FemCoders Club
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src="/FemCodersClubLogo.png" alt="FemCoders Club" className="side-image" />
        </div>
      </div>
    );
  }

  // — Render: formulario de solicitud
  return (
    <div className="forgot-password-container">
      <div className="form-card">
        <img src="/FemCodersClubLogo.png" alt="FemCoders Club" className="form-logo" />
        <h2>Gestionar comunicaciones</h2>
        <p style={{ textAlign: "center", color: "#555", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          Si no deseas recibir más comunicaciones de FemCoders Club, introduce tu dirección de
          email y te enviaremos un enlace para confirmar la baja.
        </p>

        {requestStatus === "idle" || requestStatus === "loading" || requestStatus === "error" ? (
          <form onSubmit={handleRequest} style={{ width: "100%" }}>
            <div className="form-group">
              <input
                type="email"
                id="unsub-email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                required
                placeholder=" "
                className="form-input"
                disabled={requestStatus === "loading"}
              />
              <label htmlFor="unsub-email">Tu dirección de email</label>
            </div>

            {requestStatus === "error" && (
              <p className="error-message" style={{ textAlign: "center" }}>
                No se pudo enviar el enlace. Inténtalo de nuevo o escríbenos a{" "}
                <a href="mailto:femcodersclub@gmail.com" style={{ color: "#4737bb" }}>
                  femcodersclub@gmail.com
                </a>
              </p>
            )}

            <button
              type="submit"
              className="primary-button"
              style={{ width: "100%", marginTop: "1rem" }}
              disabled={requestStatus === "loading"}
            >
              {requestStatus === "loading" ? "Enviando..." : "Enviarme el enlace de baja"}
            </button>
          </form>
        ) : requestStatus === "sent" ? (
          <p className="success-message" style={{ textAlign: "center" }}>
            Te hemos enviado un email con el enlace de confirmación. Revisa tu bandeja de entrada
            (y la carpeta de spam si no lo encuentras).
          </p>
        ) : (
          <p className="success-message" style={{ textAlign: "center" }}>
            Este email ya estaba dado de baja anteriormente. No tienes que hacer nada más.
          </p>
        )}

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <a href="/" style={{ color: "#4737bb", fontSize: "0.85rem" }}>
            Volver a FemCoders Club
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src="/FemCodersClubLogo.png" alt="FemCoders Club" className="side-image" />
      </div>
    </div>
  );
};

export default UnsubscribePage;
