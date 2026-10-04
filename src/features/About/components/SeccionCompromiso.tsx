import { Link } from "react-router-dom";
import CarruselValores from "./CarruselValores";
import "./SeccionCompromiso.css";

/*
 * Cuarta sección de «Quiénes somos»: el compromiso de la comunidad y el
 * carrusel de valores. Fondo `bg3`, siguiendo la alternancia de la home.
 */
const SeccionCompromiso: React.FC = () => (
  <section className="compromiso bg3 fc-manchas" aria-labelledby="compromiso-titulo">
    <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
    <div className="compromiso__contenedor">
      <div className="compromiso__texto">
        <p className="fc-antetitulo">Compromiso y valores</p>
        <h2 className="fc-titulo-seccion compromiso__titulo" id="compromiso-titulo">
          Nuestro compromiso con una tecnología{" "}
          <span className="fc-rotulador">más diversa</span>
        </h2>
        <div className="compromiso__parrafos">
          <p>
            Trabajamos para contribuir a reducir la brecha de género en el
            sector tecnológico, fomentar la inclusión y{" "}
            <strong>
              generar oportunidades para que más mujeres puedan desarrollarse,
              avanzar y ocupar su espacio dentro de la industria
            </strong>
            .
          </p>
          <p>
            Queremos ser un punto de encuentro donde las mujeres encuentren
            referentes, conexiones, recursos y oportunidades para crecer
            personal y profesionalmente. Un espacio donde compartir
            experiencias, apoyarse, crear nuevas relaciones y sentirse parte de
            una comunidad que avanza junta.
          </p>
          <p>
            Nuestro compromiso también pasa por{" "}
            <strong>
              dar visibilidad al talento femenino que ya está transformando el
              sector
            </strong>
            , porque cada mujer que comparte su experiencia puede convertirse
            en referente para muchas otras.
          </p>
          <p>
            Si quieres conocer mejor lo que hacemos, descubre nuestras
            iniciativas en el{" "}
            <strong>
              <Link to="/blog" className="fc-enlace fc-enlace--siempre fc-enlace--texto">
                blog
              </Link>
            </strong>{" "}
            o{" "}
            <strong>
              <Link to="/contacto" className="fc-enlace fc-enlace--siempre fc-enlace--texto">
                escríbenos
              </Link>
            </strong>{" "}
            y forma parte de la comunidad.
          </p>
        </div>
      </div>

      <CarruselValores />
    </div>
  </section>
);

export default SeccionCompromiso;
