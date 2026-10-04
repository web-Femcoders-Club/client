import { Eye, Target } from "lucide-react";
import { PROPOSITO } from "../contenido";
import TextoRico from "./TextoRico";
import "./SeccionProposito.css";

const ENLACE = "fc-enlace fc-enlace--siempre fc-enlace--texto";

/*
 * Segunda sección de «Quiénes somos»: misión y visión, con todo el texto a la
 * vista. Sustituye a las tarjetas que giraban al pasar el ratón, que con
 * teclado o en el móvil no dejaban leer nada.
 */
const SeccionProposito: React.FC = () => (
  <section
    className="proposito bg3 fc-manchas"
    aria-labelledby="proposito-titulo"
  >
    <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
    <div className="proposito__contenedor">
      <div data-aos="fade-up">
        <p className="fc-antetitulo">{PROPOSITO.antetitulo}</p>
        <h2
          className="fc-titulo-seccion proposito__titulo"
          id="proposito-titulo"
        >
          {PROPOSITO.titulo.texto}{" "}
          <span className="fc-rotulador">{PROPOSITO.titulo.destacado}</span>
        </h2>
      </div>

      <div className="proposito__tarjetas">
        <article
          data-aos="fade-up"
          className="proposito__tarjeta fc-tarjeta"
          aria-labelledby="mision-titulo"
        >
          <div className="proposito__fila">
            <div className="fc-disco" aria-hidden="true">
              <Target />
            </div>
            <h3 className="proposito__nombre" id="mision-titulo">
              {PROPOSITO.mision.nombre}
            </h3>
          </div>
          <p className="proposito__frase">{PROPOSITO.mision.frase}</p>
          {PROPOSITO.mision.parrafos.map((parrafo, i) => (
            <p key={i} className="proposito__texto">
              <TextoRico fragmentos={parrafo} claseEnlace={ENLACE} />
            </p>
          ))}
        </article>

        <div className="proposito__vision" data-aos="fade-up">
          <div className="fc-capa proposito__capa" aria-hidden="true" />
          <article
            className="proposito__tarjeta proposito__tarjeta--vision fc-tarjeta"
            aria-labelledby="vision-titulo"
          >
            <div className="proposito__fila">
              <div className="fc-disco fc-disco--naranja" aria-hidden="true">
                <Eye />
              </div>
              <h3 className="proposito__nombre" id="vision-titulo">
                {PROPOSITO.vision.nombre}
              </h3>
            </div>
            <p className="proposito__frase">{PROPOSITO.vision.frase}</p>
            {PROPOSITO.vision.parrafos.map((parrafo, i) => (
              <p key={i} className="proposito__texto">
                <TextoRico fragmentos={parrafo} claseEnlace={ENLACE} />
              </p>
            ))}
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default SeccionProposito;
