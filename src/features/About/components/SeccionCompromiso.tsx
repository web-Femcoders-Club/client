import CarruselValores from "./CarruselValores";
import { COMPROMISO } from "../contenido";
import TextoRico from "./TextoRico";
import "./SeccionCompromiso.css";

/*
 * Cuarta sección de «Quiénes somos»: el compromiso de la comunidad y el
 * carrusel de valores. Fondo `bg3`, siguiendo la alternancia de la home.
 */
const SeccionCompromiso: React.FC = () => (
  <section
    className="compromiso bg3 fc-manchas"
    aria-labelledby="compromiso-titulo"
  >
    <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
    <div className="compromiso__contenedor">
      <div className="compromiso__texto" data-aos="fade-right">
        <p className="fc-antetitulo">{COMPROMISO.antetitulo}</p>
        <h2
          className="fc-titulo-seccion compromiso__titulo"
          id="compromiso-titulo"
        >
          {COMPROMISO.titulo.texto}{" "}
          <span className="fc-rotulador">{COMPROMISO.titulo.destacado}</span>
        </h2>
        <div className="compromiso__parrafos">
          {COMPROMISO.parrafos.map((parrafo, i) => (
            <p key={i}>
              <TextoRico
                fragmentos={parrafo}
                claseEnlace="fc-enlace fc-enlace--siempre fc-enlace--texto"
              />
            </p>
          ))}
        </div>
      </div>

      <div className="compromiso__carrusel" data-aos="fade-up">
        <CarruselValores />
      </div>
    </div>
  </section>
);

export default SeccionCompromiso;
