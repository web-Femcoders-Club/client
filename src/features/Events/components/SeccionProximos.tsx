import FemSpinner from "../../../components/FemSpinner";
import VideoSinEventos from "../../../components/VideoSinEventos/VideoSinEventos";
import { Event } from "../../../types/types";
import { PRESENTACION_EVENTOS as P, PROXIMOS_EVENTOS as PROX } from "../contenido";
import EventoTarjeta from "./EventoTarjeta";
import "./SeccionProximos.css";

interface SeccionProximosProps {
  eventos: Event[];
  cargando: boolean;
}

const CLASES_CHIP = ["fc-chip", "fc-chip fc-chip--naranja", "fc-chip fc-chip--lila", "fc-chip"];

/*
 * Primera sección de /eventos: título de la página, presentación y los
 * próximos eventos. Solo pinta: la petición sigue en EventsPage. Mismo patrón
 * que la primera sección de /equipo, sobre el fondo de la portada (`bg1`).
 * Los textos viven en ../contenido.ts.
 */
const SeccionProximos: React.FC<SeccionProximosProps> = ({ eventos, cargando }) => (
  <section className="eventos-proximos bg1 fc-manchas" aria-labelledby="eventos-titulo">
    <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
    <div className="eventos-proximos__contenedor">
      <div data-aos="fade-right">
        <p className="fc-antetitulo">{P.antetitulo}</p>
        <h1 className="eventos-proximos__titulo" id="eventos-titulo">
          {P.titulo.texto} <span className="fc-rotulador">{P.titulo.destacado}</span>
        </h1>
        <p className="eventos-proximos__lema">{P.lema}</p>
        {P.parrafos.map((parrafo, i) => (
          <p key={i} className="eventos-proximos__texto">
            {parrafo}
          </p>
        ))}
        <ul className="eventos-proximos__formatos" aria-label="Tipos de evento">
          {P.formatos.map((formato, i) => (
            <li key={formato} className={CLASES_CHIP[i % CLASES_CHIP.length]}>
              {formato}
            </li>
          ))}
        </ul>
        <div className="eventos-proximos__botones">
          <a className="fc-boton fc-boton--noche" href="#eventos-pasados">
            {P.botones.pasados}
          </a>
          <a className="fc-boton" href="#ponentes">
            {P.botones.ponentes}
          </a>
        </div>
      </div>

      <div className="eventos-proximos__lado">
        <h2 className="eventos-proximos__subtitulo" id="proximos">
          {PROX.titulo}
        </h2>
        {cargando ? (
          <FemSpinner />
        ) : eventos.length > 0 ? (
          <div className="eventos-proximos__pila">
            <div className="fc-capa" aria-hidden="true" />
            <ul className="eventos-proximos__lista">
              {eventos.map((evento) => (
                <li key={evento.id}>
                  <EventoTarjeta evento={evento} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="fc-tarjeta eventos-vacio">
            <VideoSinEventos className="eventos-vacio__video" />
            <h3 className="eventos-vacio__titulo">{PROX.sinEventos.titulo}</h3>
            <p className="eventos-vacio__texto">{PROX.sinEventos.texto}</p>
            <div className="eventos-vacio__botones">
              {PROX.sinEventos.redes.map((red, i) => (
                <a
                  key={red.url}
                  className={i === 0 ? "fc-boton fc-boton--naranja" : "fc-boton"}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {red.nombre}
                  <span className="fc-solo-lector">(se abre en otra pestaña)</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default SeccionProximos;
