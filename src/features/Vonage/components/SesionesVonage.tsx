import React, { useEffect, useState } from "react";
import { getSesionesVonage, type SesionVonage } from "../../../api/vonageApi";
import "../../Welcome/components/vonage.css";
import "./SesionesVonage.css";

/** «lunes, 23 de noviembre». La fecha llega como `YYYY-MM-DD` en hora de Barcelona. */
const formatearDia = (fecha: string) =>
  new Date(`${fecha}T12:00:00`).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

const hoy = () => new Date().toLocaleDateString("sv-SE");

/**
 * Sesiones online con el equipo de Vonage (semana del 23/11/2026).
 *
 * Los enlaces y los códigos de Teams vienen del backend (server#152), nunca de
 * aquí: el bundle y el repositorio del client son públicos. El backend ya
 * quita las sesiones terminadas, y si no queda ninguna, este bloque no se pinta.
 *
 * Como el código promocional, no depende del consentimiento (RGPD art. 7.4).
 */
const SesionesVonage: React.FC = () => {
  const [sesiones, setSesiones] = useState<SesionVonage[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let vigente = true;
    getSesionesVonage()
      .then(({ sesiones }) => vigente && setSesiones(sesiones))
      .catch(() => vigente && setError(true));
    return () => {
      vigente = false;
    };
  }, []);

  if (!error && sesiones.length === 0) return null;

  const dia = hoy();

  return (
    <section className="vonage sesiones-vonage" aria-labelledby="sesiones-vonage-titulo">
      <div className="vonage__barra" aria-hidden="true" />
      <div className="vonage__cuerpo">
        <h2 id="sesiones-vonage-titulo" className="vonage__titulo">
          Sesiones online con el equipo de Vonage
        </h2>
        <p className="vonage__texto">
          Una hora por Microsoft Teams para plantear dudas de desarrollo, pedir
          demos en directo y recibir apoyo con vuestro proyecto. Entrad cuando
          queráis durante la sesión. Las horas son de Barcelona.
        </p>

        {error ? (
          <p className="vonage__error" role="alert">
            Ahora mismo no podemos mostrarte las sesiones. Escríbenos a
            femcodersclub@gmail.com y te pasamos los enlaces.
          </p>
        ) : (
          <ol className="sesiones-vonage__lista">
            {sesiones.map((s) => (
              <li key={`${s.fecha}-${s.inicio}`} className="sesiones-vonage__sesion">
                <p className="sesiones-vonage__cuando">
                  <time dateTime={`${s.fecha}T${s.inicio}`}>
                    {formatearDia(s.fecha)} · {s.inicio} a {s.fin}
                  </time>
                  {s.fecha === dia && <strong className="sesiones-vonage__hoy">Hoy</strong>}
                </p>
                <h3 className="sesiones-vonage__api">{s.api}</h3>
                <p className="sesiones-vonage__expertos">Con {s.expertos}</p>
                <a
                  className="vonage__boton foco-visible sesiones-vonage__entrar"
                  href={s.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unirse a la sesión de {s.api}
                  <span className="vonage__sr-only"> (se abre Microsoft Teams en otra pestaña)</span>
                </a>
                <p className="sesiones-vonage__acceso">
                  ID de reunión: <span className="sesiones-vonage__dato">{s.idReunion}</span> · Código:{" "}
                  <span className="sesiones-vonage__dato">{s.codigo}</span>
                </p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
};

export default SesionesVonage;
