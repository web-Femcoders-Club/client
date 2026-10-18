import React, { useEffect, useState } from "react";
import { getInteresEnApis } from "../../../api/vonageApi";
import "./vonage.css";

/**
 * Cierre de las inscripciones al programa piloto con las APIs de Vonage
 * (server#147). Sustituye al formulario de las tres preguntas, que cerró el
 * 18 de octubre de 2026.
 *
 * Quien se inscribió ve un mensaje propio: lo que necesita saber es que tenemos
 * su respuesta y que le escribiremos, no que las inscripciones han cerrado. Se
 * decide con la misma consulta que usaba el formulario; si falla, se muestra el
 * mensaje general, que también es cierto para ella.
 */
const CierrePilotoVonage: React.FC = () => {
  const idUser = Number(sessionStorage.getItem("userId") || 0);
  const [seInscribio, setSeInscribio] = useState(false);

  useEffect(() => {
    if (!idUser) return;
    let vigente = true;
    getInteresEnApis(idUser)
      .then((previa) => {
        if (vigente && previa) setSeInscribio(true);
      })
      .catch(() => {
        // Sin respuesta previa o sin conexión: se queda el mensaje general.
      });
    return () => {
      vigente = false;
    };
  }, [idUser]);

  if (!idUser) return null;

  return (
    <section className="vonage" aria-labelledby="cierre-piloto-titulo">
      <h2 id="cierre-piloto-titulo" className="vonage__titulo">
        Inscripciones al programa piloto cerradas
      </h2>
      {seInscribio ? (
        <p className="vonage__texto">
          Gracias por apuntarte al programa piloto con las APIs de Vonage. Ya
          tenemos tus respuestas, y el equipo se pondrá en contacto contigo para
          contarte los siguientes pasos.
        </p>
      ) : (
        <p className="vonage__texto">
          Las inscripciones al programa piloto con las APIs de Vonage cerraron el
          domingo 18 de octubre. Gracias a todas las personas que os habéis
          apuntado: con vuestras respuestas vamos a organizar los equipos.
        </p>
      )}
      <p className="vonage__texto">
        Si te apetece participar en los próximos proyectos de la comunidad, puedes
        apuntarte a la{" "}
        <a href="#lista-espera" className="vonage__enlace foco-visible">
          lista de espera
        </a>
        .
      </p>
    </section>
  );
};

export default CierrePilotoVonage;
