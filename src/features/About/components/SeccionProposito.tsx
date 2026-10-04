import { Link } from "react-router-dom";
import { Eye, Target } from "lucide-react";
import "./SeccionProposito.css";

/*
 * Segunda sección de «Quiénes somos»: misión y visión, con todo el texto a la
 * vista. Sustituye a las tarjetas que giraban al pasar el ratón, que con
 * teclado o en el móvil no dejaban leer nada.
 */
const SeccionProposito: React.FC = () => (
  <section className="proposito bg3 fc-manchas" aria-labelledby="proposito-titulo">
    <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
    <div className="proposito__contenedor">
      <div>
        <p className="fc-antetitulo">Nuestro propósito</p>
        <h2 className="fc-titulo-seccion proposito__titulo" id="proposito-titulo">
          Por qué existimos y <span className="fc-rotulador">hacia dónde vamos</span>
        </h2>
      </div>

      <div className="proposito__tarjetas">
        <article className="proposito__tarjeta fc-tarjeta" aria-labelledby="mision-titulo">
          <div className="proposito__fila">
            <div className="fc-disco" aria-hidden="true">
              <Target />
            </div>
            <h3 className="proposito__nombre" id="mision-titulo">Misión</h3>
          </div>
          <p className="proposito__frase">
            Empoderar e impulsar a las mujeres en el desarrollo web y la tecnología.
          </p>
          <p className="proposito__texto">
            Trabajamos para cerrar la brecha de género en la tecnología con una
            comunidad que fortalece habilidades, conocimientos y confianza, a
            través de{" "}
            <strong>
              <Link to="/eventos" className="fc-enlace fc-enlace--siempre fc-enlace--texto">
                eventos
              </Link>
              , talleres y{" "}
              <Link to="/blog/recursos" className="fc-enlace fc-enlace--siempre fc-enlace--texto">
                recursos
              </Link>
            </strong>{" "}
            que promueven la inclusión, la equidad y la diversidad.
          </p>
          <p className="proposito__texto">
            Queremos que cada mujer tenga herramientas para avanzar
            profesionalmente, compartir lo que sabe y descubrir nuevas
            oportunidades dentro del sector. Porque aumentar la presencia de
            mujeres en tecnología también significa{" "}
            <strong>
              darles espacio para crear, decidir y liderar su futuro profesional
            </strong>
            .
          </p>
        </article>

        <div className="proposito__vision">
          <div className="fc-capa proposito__capa" aria-hidden="true" />
          <article
            className="proposito__tarjeta proposito__tarjeta--vision fc-tarjeta"
            aria-labelledby="vision-titulo"
          >
            <div className="proposito__fila">
              <div className="fc-disco fc-disco--naranja" aria-hidden="true">
                <Eye />
              </div>
              <h3 className="proposito__nombre" id="vision-titulo">Visión</h3>
            </div>
            <p className="proposito__frase">
              Un futuro en el que las mujeres lideren, innoven y den forma al mundo digital.
            </p>
            <p className="proposito__texto">
              Aspiramos a un sector tecnológico equitativo e inclusivo, donde el
              talento y las oportunidades no estén condicionados por el género ni
              por el lugar de origen. Queremos contribuir a una industria en la
              que más mujeres ocupen espacios de decisión, impulsen nuevas ideas
              y sean referentes para las próximas generaciones.
            </p>
            <p className="proposito__texto">
              <strong>
                Una tecnología más diversa no solo abre puertas: también
                transforma quién la crea y para quién se construye.
              </strong>
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default SeccionProposito;
