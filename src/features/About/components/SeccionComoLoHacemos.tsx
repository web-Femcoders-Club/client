import { Mic, Users } from "lucide-react";
import { COMO_LO_HACEMOS } from "../contenido";
import TextoRico from "./TextoRico";
import "./SeccionComoLoHacemos.css";

const ENLACE = "fc-enlace fc-enlace--siempre fc-enlace--texto";
const [REFERENTES, COLABORACIONES] = COMO_LO_HACEMOS.tarjetas;

/*
 * Tercera sección de «Quiénes somos»: cómo trabaja la comunidad. Recoge los
 * dos párrafos largos que antes iban bajo las tarjetas de misión y visión (y
 * que en el móvil estaban ocultos).
 */
const SeccionComoLoHacemos: React.FC = () => (
  <section className="como bg4 fc-manchas" aria-labelledby="como-titulo">
    <div className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />
    <div className="como__contenedor">
      <div className="como__texto" data-aos="fade-right">
        <p className="fc-antetitulo fc-antetitulo--naranja">
          {COMO_LO_HACEMOS.antetitulo}
        </p>
        <h2 className="fc-titulo-seccion como__titulo" id="como-titulo">
          {COMO_LO_HACEMOS.titulo.texto}{" "}
          <span className="fc-rotulador">
            {COMO_LO_HACEMOS.titulo.destacado}
          </span>
        </h2>
        <p className="como__parrafo">
          <TextoRico
            fragmentos={COMO_LO_HACEMOS.parrafo}
            claseEnlace={ENLACE}
          />
        </p>
        <p className="como__cierre">{COMO_LO_HACEMOS.cierre}</p>
      </div>

      <div className="como__tarjetas" data-aos="fade-up">
        <ul className="como__lista">
          <li className="como__tarjeta fc-tarjeta">
            <div className="como__fila">
              <div className="fc-disco" aria-hidden="true">
                <Mic />
              </div>
              <h3 className="como__nombre">{REFERENTES.nombre}</h3>
            </div>
            <p className="como__texto-tarjeta">
              <TextoRico fragmentos={REFERENTES.parrafo} claseEnlace={ENLACE} />
            </p>
          </li>
          {/* La capa en degradado va solo detrás de la segunda, como la de Visión. */}
          <li className="como__segunda">
            <div className="fc-capa como__capa" aria-hidden="true" />
            <div className="como__tarjeta fc-tarjeta">
              <div className="como__fila">
                <div className="fc-disco fc-disco--naranja" aria-hidden="true">
                  <Users />
                </div>
                <h3 className="como__nombre">{COLABORACIONES.nombre}</h3>
              </div>
              <p className="como__texto-tarjeta">
                <TextoRico
                  fragmentos={COLABORACIONES.parrafo}
                  claseEnlace={ENLACE}
                />
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default SeccionComoLoHacemos;
