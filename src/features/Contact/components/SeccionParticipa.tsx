import { CalendarDays, ExternalLink, MessagesSquare, UserPlus, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { PARTICIPA } from "../contenido";
import "./SeccionParticipa.css";

type ClaveTarjeta = (typeof PARTICIPA.tarjetas)[number]["clave"];

/*
 * Icono y botón de cada tarjeta. Slack es la llamada principal (naranja); las
 * otras dos, el relieve claro. El icono es decoración: el título ya lo dice.
 */
const ESTILO: Record<ClaveTarjeta, { Icono: LucideIcon; disco: string; boton: string }> = {
  slack: { Icono: MessagesSquare, disco: "fc-disco fc-disco--naranja", boton: "fc-boton fc-boton--naranja" },
  cuenta: { Icono: UserPlus, disco: "fc-disco", boton: "fc-boton fc-boton--borde" },
  eventos: { Icono: CalendarDays, disco: "fc-disco", boton: "fc-boton fc-boton--borde" },
};

/*
 * Segunda y última sección de /contacto: lo que se puede hacer sin escribir.
 * Sustituye a «¿Por qué contactarnos?», al bloque de Slack y a la llamada
 * final, que hablaban de lo mismo en tres secciones. Fondo `bg4`.
 */
const SeccionParticipa: React.FC = () => (
  <section className="participa bg4" aria-labelledby="participa-titulo">
    <div className="participa__contenedor">
      <header className="participa__cabecera">
        <p className="fc-antetitulo">{PARTICIPA.antetitulo}</p>
        <h2 className="fc-titulo-seccion participa__titulo" id="participa-titulo">
          {PARTICIPA.titulo.texto} <span className="fc-rotulador">{PARTICIPA.titulo.destacado}</span>
        </h2>
        <p className="participa__entradilla">{PARTICIPA.entradilla}</p>
      </header>

      <ul className="participa__tarjetas">
        {PARTICIPA.tarjetas.map(({ clave, titulo, texto, boton, enlace, externo }) => {
          const { Icono, disco, boton: claseBoton } = ESTILO[clave];
          return (
            <li key={clave} className="fc-tarjeta participa__tarjeta">
              <div className={disco} aria-hidden="true">
                <Icono />
              </div>
              <h3 className="participa__tarjeta-titulo">{titulo}</h3>
              <p className="participa__tarjeta-texto">{texto}</p>
              {externo ? (
                <a className={`${claseBoton} participa__boton`} href={enlace} target="_blank" rel="noopener noreferrer">
                  {boton}
                  <ExternalLink aria-hidden="true" />
                  <span className="fc-solo-lector"> (se abre en otra pestaña)</span>
                </a>
              ) : (
                <Link className={`${claseBoton} participa__boton`} to={enlace}>
                  {boton}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default SeccionParticipa;
