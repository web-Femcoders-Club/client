import { Link } from "react-router-dom";
import OptimizedImage from "../../../components/OptimizedImage";
import "./SeccionConocenos.css";

/** La forma mínima del evento que pinta esta sección; la petición vive en HomePage. */
interface EventoProximo {
  id: string;
  name: { text: string };
  start: { local: string };
  logo?: { original?: { url?: string } };
}

interface TiempoRestante {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface SeccionConocenosProps {
  eventos: EventoProximo[];
  indiceActivo: number;
  tiempoRestante: TiempoRestante;
  enTransicion: boolean;
  alElegirEvento: (indice: number) => void;
}

const dosCifras = (n: number) => String(Math.max(0, n)).padStart(2, "0");

/*
 * Tercera sección de la home: «Conócenos» y el próximo evento.
 *
 * Solo pinta. La lógica de eventos —la petición, la cuenta atrás, el cambio
 * automático entre eventos y sus temporizadores— sigue en HomePage tal como
 * estaba, y llega aquí por props.
 *
 * Sin iconos decorativos: la jerarquía la llevan la tipografía y el color.
 */
const SeccionConocenos: React.FC<SeccionConocenosProps> = ({
  eventos,
  indiceActivo,
  tiempoRestante,
  enTransicion,
  alElegirEvento,
}) => {
  const evento = eventos[indiceActivo];
  const fecha = evento ? new Date(evento.start.local) : null;
  const fechaValida = fecha && !Number.isNaN(fecha.getTime()) ? fecha : null;

  return (
    <section className="conocenos fc-fondo-claro--invertido fc-manchas" aria-labelledby="conocenos-titulo">
      <div className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />
      <div className="conocenos__rejilla">
        <article className="fc-tarjeta conocenos__tarjeta">
          <p className="fc-antetitulo">Conócenos</p>
          <h2 className="conocenos__titulo" id="conocenos-titulo">
            Una comunidad para impulsar
            <br />
            <em>tu camino en tech</em>
          </h2>

          <div className="conocenos__parrafos">
            <p>
              Si compartes nuestra pasión por la tecnología y nuestra filosofía
              de <strong>visibilizar a las mujeres programadoras</strong>,
              promoviendo su desarrollo profesional, te invitamos a unirte a
              nuestra comunidad. Ya seas una mujer en tecnología que busca
              crecer profesionalmente o una líder con años de experiencia
              dispuesta a compartir tu conocimiento, hay un lugar para ti en{" "}
              <strong>FemCoders Club</strong>.
            </p>
            <p>
              Además, extendemos una invitación a las empresas que se alinean
              con nuestros valores para que colaboren con nosotras.{" "}
              <strong>
                Juntas, podemos crear un entorno más inclusivo y equitativo en
                el sector tech.
              </strong>
            </p>
          </div>

          <div className="conocenos__cta">
            <p className="conocenos__cta-texto">
              ¿Lista para dar el siguiente paso en tu carrera tech?
            </p>
            <div className="conocenos__botones">
              <Link to="/login" className="fc-boton fc-boton--naranja">
                Únete a la comunidad
              </Link>
              <Link to="/femcoders-quienes-somos" className="fc-boton fc-boton--borde">
                Conoce más sobre nosotras
              </Link>
            </div>
          </div>
        </article>

        <article className="fc-tarjeta conocenos__tarjeta evento" aria-labelledby="evento-titulo">
          <p className="fc-antetitulo">Próximo evento</p>
          <h2 className="evento__titulo" id="evento-titulo">
            ¡No te lo <em>pierdas</em>!
          </h2>

          {evento ? (
            <div className={`evento__cuerpo${enTransicion ? " evento__cuerpo--transicion" : ""}`}>
              <figure className="evento__imagen">
                <OptimizedImage
                  src={evento.logo?.original?.url || "/apoyomujeres.png"}
                  alt={`Imagen del evento ${evento.name.text}`}
                />
                {fechaValida && (
                  <time
                    className="evento__fecha"
                    dateTime={evento.start.local}
                    aria-label={fechaValida.toLocaleDateString("es-ES", { day: "numeric", month: "long" })}
                  >
                    <span className="evento__dia fc-texto-neutro">{fechaValida.getDate()}</span>
                    <span className="evento__mes fc-texto-neutro">
                      {fechaValida.toLocaleDateString("es-ES", { month: "short" }).replace(".", "")}
                    </span>
                  </time>
                )}
                {eventos.length > 1 && (
                  <div className="evento__puntos">
                    {eventos.map((e, i) => (
                      <button
                        key={e.id}
                        type="button"
                        className={`evento__punto${i === indiceActivo ? " evento__punto--activo" : ""}`}
                        onClick={() => alElegirEvento(i)}
                        aria-label={`Ver evento ${i + 1}: ${e.name.text}`}
                        aria-current={i === indiceActivo}
                      />
                    ))}
                  </div>
                )}
              </figure>

              <h3 className="evento__nombre">{evento.name.text}</h3>

              <ul className="evento__cuenta" aria-label="Tiempo que falta para el evento">
                <li>
                  <strong>{tiempoRestante.days}</strong>
                  <span className="fc-texto-neutro">días</span>
                </li>
                <li>
                  <strong>{dosCifras(tiempoRestante.hours)}</strong>
                  <span className="fc-texto-neutro">horas</span>
                </li>
                <li>
                  <strong>{dosCifras(tiempoRestante.minutes)}</strong>
                  <span className="fc-texto-neutro">minutos</span>
                </li>
                <li>
                  <strong>{dosCifras(tiempoRestante.seconds)}</strong>
                  <span className="fc-texto-neutro">segundos</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="evento__cuerpo">
              <div className="evento__video">
                <video
                  src={`${import.meta.env.BASE_URL}assets/videos/SinEvento.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  onError={(e) => {
                    if ((e.target as HTMLVideoElement).error) {
                      console.error("El video no se pudo cargar.");
                      (e.target as HTMLVideoElement).style.display = "none";
                    }
                  }}
                />
              </div>
              <h3 className="evento__nombre">¡Grandes cosas están por venir!</h3>
              <p className="evento__texto">
                Nuestro equipo está diseñando experiencias únicas que
                transformarán tu carrera tech. <strong>Mantente conectada</strong>{" "}
                para ser la primera en conocer nuestras próximas sorpresas.
              </p>
            </div>
          )}

          <div className="evento__botones">
            <Link to="/eventos" className="fc-boton fc-boton--violeta">
              {evento ? "Ver todos los eventos" : "Ver eventos pasados"}
            </Link>
            <Link to="/blog/recursos" className="fc-boton fc-boton--borde">
              Explorar recursos
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SeccionConocenos;
