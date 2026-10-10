import { useId } from "react";
import { ExternalLink } from "lucide-react";
import "./EncuestaComunidad.css";

/*
 * Encuesta de experiencia en la comunidad. Las respuestas llegan al Drive del
 * equipo por Google Forms: la web no guarda nada, solo enlaza.
 *
 * Sale en la portada (visitantes) y en /welcome (usuarias registradas). Cuando
 * la encuesta cierre, se quita este componente de esas dos páginas; la URL y
 * el texto viven solo aquí.
 */
const URL_ENCUESTA =
  "https://docs.google.com/forms/d/e/1FAIpQLSe14x8Ws4LwHrFI-Gju7fTlk3_bNLKsZT4FdkvgLWSn_nt-Gg/viewform";

const EncuestaComunidad: React.FC = () => {
  const tituloId = useId();

  return (
    <section className="encuesta fc-tarjeta" aria-labelledby={tituloId}>
      <div className="encuesta__texto">
        <p className="fc-antetitulo fc-antetitulo--naranja">Tu opinión cuenta</p>
        <h2 id={tituloId} className="encuesta__titulo">
          ¿Cómo estás viviendo la comunidad?
        </h2>
        <p className="encuesta__parrafo">
          Queremos saber qué te está aportando FemCoders Club y qué podemos
          seguir mejorando. Te llevará solo unos minutos, y tus respuestas nos
          ayudan a crear más espacios y oportunidades en tecnología.
        </p>
      </div>

      <div className="encuesta__accion">
        {/*
          A la vista, el icono basta. El lector no ve el icono, así que a él se
          le dice con texto que se abre otra pestaña (WCAG 3.2.5, AAA).
        */}
        <a
          href={URL_ENCUESTA}
          target="_blank"
          rel="noopener noreferrer"
          className="fc-boton fc-boton--noche"
        >
          Responder la encuesta
          <ExternalLink aria-hidden="true" />
          <span className="fc-solo-lector">(se abre en una pestaña nueva)</span>
        </a>
      </div>
    </section>
  );
};

export default EncuestaComunidad;
