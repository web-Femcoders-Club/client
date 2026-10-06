import { Event } from "../../../types/types";
import { PROXIMOS_EVENTOS } from "../contenido";
import { fechaIso, leerFecha } from "../fecha";
import "./EventoTarjeta.css";

interface EventoTarjetaProps {
  evento: Event;
  /** Nivel del título según la sección que la pinte. */
  nivelTitulo?: "h3" | "h4";
}

/** «jueves 3 de septiembre · 19:30 h»; el año solo si no es el actual. */
const formatearFecha = (fecha: Date) => {
  const esteAnio = fecha.getFullYear() === new Date().getFullYear();
  const dia = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    ...(esteAnio ? {} : { year: "numeric" }),
  });
  const hora = fecha.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  return `${dia} · ${hora} h`;
};

/*
 * Tarjeta de un evento: imagen, fecha, lugar, nombre, descripción y, si aún
 * no ha pasado, el enlace para reservar en Eventbrite. Todo a la vista: la
 * tarjeta anterior escondía fecha y botón detrás de un giro.
 */
const EventoTarjeta: React.FC<EventoTarjetaProps> = ({ evento, nivelTitulo = "h3" }) => {
  const Titulo = nivelTitulo;
  const inicio = leerFecha(evento.start_local);
  const haPasado = inicio < new Date();
  const idTitulo = `evento-${evento.id}`;

  return (
    <article className="fc-tarjeta evento-tarjeta" aria-labelledby={idTitulo}>
      {evento.logo_url && (
        <img
          className="evento-tarjeta__imagen"
          src={evento.logo_url}
          alt=""
          width={800}
          height={400}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="evento-tarjeta__datos">
        <time className="evento-tarjeta__fecha" dateTime={fechaIso(evento.start_local)}>
          {formatearFecha(inicio)}
        </time>
        {evento.location && <span className="fc-chip fc-chip--lila">{evento.location}</span>}
      </div>
      <Titulo className="evento-tarjeta__nombre" id={idTitulo}>
        {evento.name}
      </Titulo>
      {evento.description && <p className="evento-tarjeta__texto">{evento.description}</p>}
      {!haPasado && evento.event_url && (
        <a
          className="fc-boton fc-boton--naranja"
          href={evento.event_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {PROXIMOS_EVENTOS.reservar}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
          <span className="fc-solo-lector">(se abre Eventbrite en otra pestaña)</span>
        </a>
      )}
    </article>
  );
};

export default EventoTarjeta;
