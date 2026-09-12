import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getEstadoDeConsentimiento } from "../../../api/consentApi";
import { haySesion } from "../../../utils/sesion";

/**
 * Manda a la pantalla de preferencias a quien todavía no ha respondido (#101).
 *
 * Envuelve `/welcome` en vez de engancharse al login porque así también atrapa a
 * quien llega por una URL guardada o recarga la página. Engancharlo al login
 * dejaría esos dos caminos abiertos sin que se notara.
 *
 * ## Si la API falla, se deja pasar
 *
 * Un fallo de red o un backend caído no pueden dejar a nadie fuera de su propia
 * área personal. El coste de dejar pasar es que esa persona no ve la pantalla
 * hasta la próxima vez; el de bloquear sería una web rota sin explicación.
 */
const ExigeRespuesta: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [decision, setDecision] = useState<"cargando" | "pasa" | "preferencias">(
    "cargando",
  );

  const idUser = Number(sessionStorage.getItem("userId") || 0);

  useEffect(() => {
    // Sin sesión no hay a quién preguntar: que siga su camino y sea el backend
    // quien corte, como hace hoy con el resto de pantallas de usuaria.
    if (!haySesion() || !idUser) {
      setDecision("pasa");
      return;
    }

    let vigente = true;
    getEstadoDeConsentimiento(idUser)
      .then((estado) => {
        if (!vigente) return;
        setDecision(estado.yaRespondio ? "pasa" : "preferencias");
      })
      .catch(() => {
        if (vigente) setDecision("pasa");
      });

    return () => {
      vigente = false;
    };
  }, [idUser]);

  // Mientras se decide no se pinta nada. Pintar `/welcome` y saltar después a la
  // pantalla de preferencias sería un parpadeo, y quien lo vea no sabrá si ha
  // hecho algo mal.
  if (decision === "cargando") return null;

  if (decision === "preferencias") {
    return <Navigate to="/bienvenida/preferencias" replace />;
  }

  return <>{children}</>;
};

export default ExigeRespuesta;
