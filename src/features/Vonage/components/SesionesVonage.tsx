import React, { useEffect, useState } from "react";
import { getSesionesVonage, type SesionVonage } from "../../../api/vonageApi";
import OptimizedImage from "../../../components/OptimizedImage";
import "../../Welcome/components/vonage.css";
import "./SesionesVonage.css";

/** La fecha llega como `YYYY-MM-DD` en hora de Barcelona; a mediodía para no cruzar de día. */
const aFecha = (fecha: string) => new Date(`${fecha}T12:00:00`);

const hoy = () => new Date().toLocaleDateString("sv-SE");

/**
 * Sesiones online con el equipo de Vonage (semana del 23/11/2026).
 *
 * Los enlaces y los códigos de Teams vienen del backend (server#152), nunca de
 * aquí: el bundle y el repositorio del client son públicos. El backend ya
 * quita las sesiones terminadas, y si no queda ninguna, este bloque no se pinta.
 *
 * Misma tarjeta que la de Community Partner (barra, logo y título con
 * degradado), con una fila de agenda por sesión dentro de las cajas de vonage.css.
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
    <section className="vonage vonage--partner" aria-labelledby="sesiones-vonage-titulo">
      <div className="vonage__barra" aria-hidden="true" />
      <div className="vonage__cuerpo">
        <OptimizedImage src="/assets/Vonage/VonageLogo.png" alt="" className="vonage__logo" loading="lazy" />
        <h2 id="sesiones-vonage-titulo" className="vonage__titulo vonage__titulo--gradiente">
          Sesiones online con el equipo de Vonage
        </h2>
        <p className="vonage__texto">
          Una hora por Microsoft Teams para resolver dudas de desarrollo, ver
          demos en directo y recibir apoyo con vuestro proyecto. Podéis entrar
          en cualquier momento de la sesión. Horario de Barcelona.
        </p>

        {error ? (
          <p className="vonage__error" role="alert">
            Ahora mismo no podemos mostrarte las sesiones. Escríbenos a
            femcodersclub@gmail.com y te pasamos los enlaces.
          </p>
        ) : (
          <ol className="sesiones-vonage">
            {sesiones.map((s) => {
              const fecha = aFecha(s.fecha);
              const esHoy = s.fecha === dia;
              return (
                <li
                  key={`${s.fecha}-${s.inicio}`}
                  className={`vonage__caja sesiones-vonage__fila${esHoy ? " sesiones-vonage__fila--hoy" : ""}`}
                >
                  <time className="sesiones-vonage__fecha" dateTime={`${s.fecha}T${s.inicio}`}>
                    <span className="sesiones-vonage__semana">
                      {esHoy ? "Hoy" : fecha.toLocaleDateString("es-ES", { weekday: "short" }).replace(".", "")}
                    </span>
                    <span className="sesiones-vonage__dia">{fecha.getDate()}</span>
                    <span className="sesiones-vonage__mes">
                      {fecha.toLocaleDateString("es-ES", { month: "short" }).replace(".", "")}
                    </span>
                  </time>

                  <div className="sesiones-vonage__datos">
                    <p className="sesiones-vonage__api">{s.api}</p>
                    <p className="sesiones-vonage__detalle">
                      {s.inicio} a {s.fin} · con {s.expertos}
                    </p>
                    <p className="sesiones-vonage__acceso">
                      ID <code>{s.idReunion}</code> · Código <code>{s.codigo}</code>
                    </p>
                  </div>

                  <a
                    className="vonage__boton foco-visible sesiones-vonage__entrar"
                    href={s.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Unirse a la sesión de ${s.api} (se abre Microsoft Teams en otra pestaña)`}
                  >
                    Unirse
                  </a>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
};

export default SesionesVonage;
