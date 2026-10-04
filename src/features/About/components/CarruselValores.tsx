import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Handshake,
  HeartHandshake,
  HeartPulse,
  Lightbulb,
  Rocket,
  Scale,
  Shapes,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import BotonRotacion from "../../Home/components/BotonRotacion";
import { useRotacion } from "../../Home/components/useRotacion";

const VALORES: { Icono: LucideIcon; nombre: string; descripcion: string }[] = [
  {
    Icono: Scale,
    nombre: "Equidad",
    descripcion:
      "Las mujeres deben tener las mismas oportunidades de desarrollo profesional que los hombres, sin discriminación por género.",
  },
  {
    Icono: HeartHandshake,
    nombre: "Inclusión",
    descripcion:
      "Las mujeres deben sentirse bienvenidas y apoyadas en el sector IT, independientemente de sus antecedentes o experiencias.",
  },
  {
    Icono: Sparkles,
    nombre: "Visibilidad",
    descripcion:
      "Los logros de las mujeres en el sector IT deben ser reconocidos y celebrados.",
  },
  {
    Icono: TrendingUp,
    nombre: "Desarrollo profesional",
    descripcion:
      "Las mujeres deben tener acceso a oportunidades de desarrollo profesional que les permitan alcanzar su máximo potencial.",
  },
  {
    Icono: Handshake,
    nombre: "Colaboración",
    descripcion:
      "Fomentar un ambiente donde las mujeres trabajen juntas de manera colaborativa, compartiendo conocimientos y experiencias para impulsar el crecimiento mutuo.",
  },
  {
    Icono: Rocket,
    nombre: "Empoderamiento",
    descripcion:
      "Capacitar a las mujeres para que tomen el control de sus carreras en tecnología, brindándoles las herramientas y el apoyo necesarios para alcanzar sus metas.",
  },
  {
    Icono: Shapes,
    nombre: "Diversidad",
    descripcion:
      "Reconocer y valorar las diversas perspectivas, habilidades y experiencias que cada mujer aporta al campo de la tecnología, promoviendo un entorno inclusivo y enriquecedor.",
  },
  {
    Icono: ShieldCheck,
    nombre: "Ética",
    descripcion:
      "Promover prácticas éticas en el trabajo tecnológico, priorizando la integridad, la transparencia y el respeto hacia los demás y hacia la sociedad en general.",
  },
  {
    Icono: Lightbulb,
    nombre: "Innovación",
    descripcion:
      "Fomentar la creatividad y la innovación entre las mujeres en tecnología, alentándolas a pensar de manera crítica y a proponer soluciones disruptivas para los desafíos actuales y futuros.",
  },
  {
    Icono: HeartPulse,
    nombre: "Equilibrio entre vida laboral y personal",
    descripcion:
      "Promover un equilibrio saludable entre la vida laboral y personal, reconociendo la importancia de cuidar el bienestar físico, emocional y mental de las mujeres en la industria tecnológica.",
  },
  {
    Icono: Globe,
    nombre: "Responsabilidad social",
    descripcion:
      "Comprometerse con la responsabilidad social corporativa, participando en iniciativas y proyectos que tengan un impacto positivo en la comunidad y en el mundo en general.",
  },
];

const INTERVALO_ROTACION = 6000;

/*
 * Carrusel de valores: una tarjeta a la vista y dos «apiladas» detrás que
 * indican que hay más. Misma lógica que los carruseles de la home
 * (useRotacion, WCAG 2.2.2): se para con el ratón encima o el foco de teclado
 * dentro, el botón junto a los puntos lo detiene, y con «reducir movimiento»
 * arranca parado. Mientras gira no se anuncia (aria-live="off").
 */
const CarruselValores: React.FC = () => {
  const [actual, setActual] = useState(0);
  const rotacion = useRotacion(
    () => setActual((a) => (a + 1) % VALORES.length),
    INTERVALO_ROTACION,
    true,
    actual,
  );

  const irA = (i: number) => setActual((i + VALORES.length) % VALORES.length);

  const alPulsarTecla = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      irA(actual - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      irA(actual + 1);
    }
  };

  return (
    <div
      className="valores"
      role="region"
      aria-roledescription="carrusel"
      aria-labelledby="valores-titulo"
      onKeyDown={alPulsarTecla}
      {...rotacion.pausaAlInteractuar}
    >
      <h3 className="valores__etiqueta" id="valores-titulo">
        Nuestros valores
      </h3>

      {/*
        Los once valores están siempre en la página y solo el activo se ve
        (los demás llevan `hidden`): así buscadores y modelos leen todos, no
        solo el que estaba en pantalla al cargar.
      */}
      <div
        className="valores__pila"
        id="valores-tarjetas"
        aria-live={rotacion.girando ? "off" : "polite"}
      >
        {VALORES.map(({ Icono, nombre, descripcion }, i) => (
          <article
            key={nombre}
            className="valores__tarjeta fc-tarjeta"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${VALORES.length}`}
            hidden={i !== actual}
          >
            <div className="valores__cabeza">
              <div className={`fc-disco${i % 2 ? " fc-disco--naranja" : ""}`} aria-hidden="true">
                <Icono />
              </div>
              <p className="valores__contador" aria-hidden="true">
                {i + 1} / {VALORES.length}
              </p>
            </div>
            <div className="valores__cuerpo">
              <h4 className="valores__nombre">{nombre}</h4>
              <p className="valores__descripcion">{descripcion}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="valores__controles">
        <button
          type="button"
          className="fc-boton-redondo"
          onClick={() => irA(actual - 1)}
          aria-label="Valor anterior"
          aria-controls="valores-tarjetas"
        >
          <ArrowLeft aria-hidden="true" />
        </button>
        <div className="valores__puntos">
          {VALORES.map((valor, i) => (
            <button
              key={valor.nombre}
              type="button"
              className="valores__punto"
              onClick={() => irA(i)}
              aria-label={`Ver ${valor.nombre}`}
              aria-current={i === actual}
            />
          ))}
        </div>
        <BotonRotacion
          girando={rotacion.girando}
          alAlternar={rotacion.alternar}
          de="valores"
          controla="valores-tarjetas"
        />
        <button
          type="button"
          className="fc-boton-redondo"
          onClick={() => irA(actual + 1)}
          aria-label="Valor siguiente"
          aria-controls="valores-tarjetas"
        >
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default CarruselValores;
