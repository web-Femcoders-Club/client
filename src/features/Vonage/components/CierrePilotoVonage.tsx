import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getInteresEnApis } from "../../../api/vonageApi";
import { ModalContext } from "../../../context/ModalContext";
import "../../Welcome/components/vonage.css";

/**
 * Aviso de cierre del programa piloto con las APIs de Vonage (server#147). Las
 * inscripciones cerraron el 18 de octubre de 2026.
 *
 * Va lo primero en /vonage y en tonos cálidos, distinto del violeta del resto
 * de bloques, para que nadie lo confunda con algo que todavía se puede hacer.
 *
 * Quien se inscribió ve un mensaje propio: lo que necesita saber es que tenemos
 * su respuesta y que le escribiremos. Se decide con la misma consulta que usaba
 * el formulario; si falla, se muestra el mensaje general, que también es cierto
 * para ella.
 */
const CierrePilotoVonage: React.FC = () => {
  const idUser = Number(sessionStorage.getItem("userId") || 0);
  const [seInscribio, setSeInscribio] = useState(false);
  const { openModal } = useContext(ModalContext);

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
    <section className="vonage-cierre" aria-labelledby="cierre-piloto-titulo">
      {/* El candado refuerza el «cerrado»; el texto ya lo dice, así que es decorativo. */}
      <div className="vonage-cierre__icono" aria-hidden="true">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      </div>

      <div className="vonage-cierre__cuerpo">
        <p className="vonage-cierre__antetitulo">Programa piloto · Cerrado</p>
        <h2 id="cierre-piloto-titulo" className="vonage-cierre__titulo">
          Inscripciones al programa piloto cerradas
        </h2>
        {seInscribio ? (
          <>
            <p className="vonage-cierre__texto">
              <strong>Gracias por sumarte a este primer programa piloto.</strong>{" "}
              Ya tenemos tus respuestas, y el equipo se pondrá en contacto contigo
              para contarte los siguientes pasos.
            </p>
            {/* El código de conducta es sobre todo para el piloto: solo lo ve quien se inscribió. */}
            <p className="vonage-cierre__texto">
              Antes del inicio, el 26 de octubre, te pedimos que leas el{" "}
              <button
                type="button"
                className="vonage__enlace vonage-cierre__enlace foco-visible"
                aria-haspopup="dialog"
                onClick={() => openModal("codigoConducta")}
              >
                código de conducta
              </button>{" "}
              del programa.
            </p>
          </>
        ) : (
          <p className="vonage-cierre__texto">
            Las inscripciones cerraron el domingo 18 de octubre.{" "}
            <strong>
              Gracias a todas las personas que os habéis sumado a este primer
              programa piloto
            </strong>
            : con vuestras respuestas vamos a organizar los equipos.
          </p>
        )}
        <p className="vonage-cierre__texto">
          Si te apetece participar en los próximos proyectos de la comunidad,
          apúntate a la{" "}
          <Link to="/welcome#lista-espera" className="vonage-cierre__enlace foco-visible">
            lista de espera
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default CierrePilotoVonage;
