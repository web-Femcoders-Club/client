import { Globe, Handshake, Lightbulb, Rocket, type LucideIcon } from "lucide-react";
import { VALORES_EQUIPO as V } from "../contenido";
import "./SeccionValores.css";

/* Decoración: el nombre ya lo dice. Los mismos iconos que el carrusel de valores de «Quiénes somos». */
const ICONOS: Record<string, LucideIcon> = {
  colaboracion: Handshake,
  innovacion: Lightbulb,
  empoderamiento: Rocket,
  "comunidad-global": Globe,
};

/*
 * Segunda sección de /equipo: los valores con los que trabaja el equipo. Son
 * distintos de los valores de la comunidad de «Quiénes somos» (contenido.ts),
 * aunque compartan nombre: aquí hablan de cómo trabajamos. Los textos viven
 * en ../contenido.ts.
 */
const SeccionValores: React.FC = () => (
  <section className="valores-equipo bg3 fc-manchas" aria-labelledby="valores-equipo-titulo">
    <div className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />
    <div className="valores-equipo__contenedor">
      <div className="valores-equipo__cabeza" data-aos="fade-up">
        <div>
          <p className="fc-antetitulo fc-antetitulo--naranja">{V.antetitulo}</p>
          <h2 className="fc-titulo-seccion valores-equipo__titulo" id="valores-equipo-titulo">
            {V.titulo.texto} <span className="fc-rotulador">{V.titulo.destacado}</span>
          </h2>
        </div>
        <p className="valores-equipo__parrafo">{V.parrafo}</p>
      </div>

      <ul className="valores-equipo__lista">
        {V.lista.map(({ id, nombre, descripcion }, i) => {
          const Icono = ICONOS[id];
          return (
            <li key={id} className="valores-equipo__tarjeta fc-tarjeta" data-aos="fade-up">
              <div className={`fc-disco${i % 2 ? " fc-disco--naranja" : ""}`} aria-hidden="true">
                <Icono />
              </div>
              <h3 className="valores-equipo__nombre">{nombre}</h3>
              <p className="valores-equipo__texto">{descripcion}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default SeccionValores;
