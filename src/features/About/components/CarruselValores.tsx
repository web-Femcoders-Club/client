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
import { VALORES } from "../contenido";

/* El icono es decoración (el nombre ya lo dice): se elige aquí; el texto vive en contenido.ts. */
const ICONOS: Record<string, LucideIcon> = {
  equidad: Scale,
  inclusion: HeartHandshake,
  visibilidad: Sparkles,
  desarrollo: TrendingUp,
  colaboracion: Handshake,
  empoderamiento: Rocket,
  diversidad: Shapes,
  etica: ShieldCheck,
  innovacion: Lightbulb,
  equilibrio: HeartPulse,
  responsabilidad: Globe,
};

const LISTA = VALORES.lista;

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
    () => setActual((a) => (a + 1) % LISTA.length),
    INTERVALO_ROTACION,
    true,
    actual,
  );

  const irA = (i: number) => setActual((i + LISTA.length) % LISTA.length);

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
        {VALORES.titulo}
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
        {LISTA.map(({ id, nombre, descripcion }, i) => {
          const Icono = ICONOS[id];
          return (
            <article
              key={id}
              className="valores__tarjeta fc-tarjeta"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${LISTA.length}`}
              hidden={i !== actual}
            >
              <div className="valores__cabeza">
                <div
                  className={`fc-disco${i % 2 ? " fc-disco--naranja" : ""}`}
                  aria-hidden="true"
                >
                  <Icono />
                </div>
                <p className="valores__contador" aria-hidden="true">
                  {i + 1} / {LISTA.length}
                </p>
              </div>
              <div className="valores__cuerpo">
                <h4 className="valores__nombre">{nombre}</h4>
                <p className="valores__descripcion">{descripcion}</p>
              </div>
            </article>
          );
        })}
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
          {LISTA.map((valor, i) => (
            <button
              key={valor.id}
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
