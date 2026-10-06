import { Event } from "../../../types/types";
import { EVENTOS_PASADOS } from "../contenido";
import { fechaIso, leerFecha } from "../fecha";
import ImagenEvento from "./ImagenEvento";
import "./EntradaEvento.css";

interface EntradaEventoProps {
  evento: Event;
}

/*
 * Un evento pasado, en forma de entrada ya usada: imagen con el sello
 * «Celebrado», troquel con dos muescas y la matriz con la fecha. Solo para
 * «Eventos pasados»; los próximos usan EventoTarjeta.
 */
const EntradaEvento: React.FC<EntradaEventoProps> = ({ evento }) => {
  const inicio = leerFecha(evento.start_local);
  const mes = inicio.toLocaleDateString("es-ES", { month: "short" }).replace(".", "");
  const diaSemana = inicio.toLocaleDateString("es-ES", { weekday: "long" });
  // Los eventos sin hora llegan a las 00:00: entonces no se pinta la hora.
  const tieneHora = inicio.getHours() !== 0 || inicio.getMinutes() !== 0;
  const hora = inicio.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  const idTitulo = `pasado-${evento.id}`;

  return (
    <article className="entrada" aria-labelledby={idTitulo}>
      <div className="entrada__imagen">
        {evento.logo_url && <ImagenEvento url={evento.logo_url} />}
        <div className="entrada__sello" aria-hidden="true">
          {EVENTOS_PASADOS.sello}
        </div>
      </div>
      <div className="entrada__cuerpo">
        <time className="entrada__matriz" dateTime={fechaIso(evento.start_local)}>
          <span className="entrada__dia">{inicio.getDate()}</span>
          <span className="entrada__mes">{mes}</span>
          <span className="entrada__anio">{inicio.getFullYear()}</span>
        </time>
        <div className="entrada__datos">
          <h3 className="entrada__nombre" id={idTitulo}>
            {evento.name}
          </h3>
          <p className="entrada__hora">
            {diaSemana}
            {tieneHora && ` · ${hora} h`}
          </p>
          {evento.location && <span className="fc-chip fc-chip--lila entrada__lugar">{evento.location}</span>}
          {evento.description && <p className="entrada__texto">{evento.description}</p>}
        </div>
      </div>
    </article>
  );
};

export default EntradaEvento;
