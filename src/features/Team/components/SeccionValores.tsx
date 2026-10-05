import { Globe, Handshake, Lightbulb, Rocket, type LucideIcon } from "lucide-react";
import "./SeccionValores.css";

interface Valor {
  nombre: string;
  descripcion: string;
  /* Decoración: el nombre ya lo dice. Los mismos iconos que el carrusel de valores de «Quiénes somos». */
  Icono: LucideIcon;
}

const VALORES_EQUIPO: Valor[] = [
  {
    nombre: "Colaboración",
    descripcion:
      "Trabajamos juntas para crear un ecosistema tecnológico más inclusivo. Compartimos conocimiento, experiencias y oportunidades para aprender y crecer en comunidad.",
    Icono: Handshake,
  },
  {
    nombre: "Innovación",
    descripcion:
      "Exploramos nuevas tecnologías, ideas y formas de aprender. Nos gusta experimentar y acercarnos juntas a lo que está transformando el sector.",
    Icono: Lightbulb,
  },
  {
    nombre: "Empoderamiento",
    descripcion:
      "Creamos espacios seguros donde cada mujer pueda crecer personal y profesionalmente. Queremos que encuentre herramientas, confianza y oportunidades para construir su propio camino.",
    Icono: Rocket,
  },
  {
    nombre: "Comunidad global",
    descripcion:
      "Conectamos mujeres STEM de diferentes países, culturas y experiencias. Una red donde crear vínculos, compartir perspectivas y descubrir nuevas posibilidades.",
    Icono: Globe,
  },
];

/*
 * Segunda sección de /equipo: los valores con los que trabaja el equipo. Son
 * distintos de los valores de la comunidad de «Quiénes somos» (contenido.ts),
 * aunque compartan nombre: aquí hablan de cómo trabajamos.
 */
const SeccionValores: React.FC = () => (
  <section className="valores-equipo bg3 fc-manchas" aria-labelledby="valores-equipo-titulo">
    <div className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />
    <div className="valores-equipo__contenedor">
      <div className="valores-equipo__cabeza" data-aos="fade-up">
        <div>
          <p className="fc-antetitulo fc-antetitulo--naranja">Lo que nos guía</p>
          <h2 className="fc-titulo-seccion valores-equipo__titulo" id="valores-equipo-titulo">
            Nuestros <span className="fc-rotulador">valores</span>
          </h2>
        </div>
        <p className="valores-equipo__parrafo">
          Los principios que guían nuestro trabajo y definen quiénes somos como equipo.
        </p>
      </div>

      <ul className="valores-equipo__lista">
        {VALORES_EQUIPO.map(({ nombre, descripcion, Icono }, i) => (
          <li key={nombre} className="valores-equipo__tarjeta fc-tarjeta" data-aos="fade-up">
            <div className={`fc-disco${i % 2 ? " fc-disco--naranja" : ""}`} aria-hidden="true">
              <Icono />
            </div>
            <h3 className="valores-equipo__nombre">{nombre}</h3>
            <p className="valores-equipo__texto">{descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SeccionValores;
