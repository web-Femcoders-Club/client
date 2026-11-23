import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useRotacion } from "../../../hooks/useRotacion";
import { Event } from "../../../types/types";
import EventoTarjeta from "./EventoTarjeta";
import "./CarruselProximos.css";

const INTERVALO_ROTACION = 7000;

/** Saca de la tabulación y del lector las tarjetas que no se ven. React 18 no conoce `inert`. */
const marcarInerte = (inerte: boolean) => (el: HTMLElement | null) => {
  if (!el) return;
  if (inerte) el.setAttribute("inert", "");
  else el.removeAttribute("inert");
};

/*
 * Próximos eventos cuando hay más de uno: una tarjeta a la vez, en vez de
 * apilarlas. Apiladas, la columna derecha de la sección crecía el doble que
 * la izquierda.
 *
 * - Todas las tarjetas comparten la misma celda de la rejilla: el carrusel
 *   mide lo que la más alta y la página no salta al cambiar.
 * - Gira sola (useRotacion, WCAG 2.2.2): para con el ratón encima o el foco
 *   del teclado dentro, tiene botón de pausa y con «reducir movimiento»
 *   arranca parado. Siete segundos, más que las fotos de ponentes, porque
 *   aquí hay texto que leer.
 * - Las ocultas van con `inert`: ni se tabulan ni las lee el lector.
 */
interface CarruselProximosProps {
  eventos: Event[];
  /** El título de la columna va en la misma fila que los controles, para no gastar una fila más. */
  titulo: string;
}

const CarruselProximos: React.FC<CarruselProximosProps> = ({ eventos, titulo }) => {
  const total = eventos.length;
  const [elegida, setElegida] = useState(0);
  // Si la lista se acorta al recargarse en segundo plano, el índice guardado
  // puede quedar fuera: sin acotarlo, ninguna tarjeta estaría activa.
  const actual = Math.min(elegida, total - 1);
  const irA = useCallback((i: number) => setElegida(((i % total) + total) % total), [total]);
  const rotacion = useRotacion(() => irA(actual + 1), INTERVALO_ROTACION, total > 1, actual);

  const alPulsarTecla = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Desde dentro de una tarjeta (p. ej. en «Reserva tu plaza») las flechas
    // no cambian de evento: la tarjeta pasaría a `inert` y el foco se perdería.
    if ((e.target as HTMLElement).closest(".carrusel-proximos__diapositiva")) return;
    const acciones: Record<string, () => void> = {
      ArrowLeft: () => irA(actual - 1),
      ArrowRight: () => irA(actual + 1),
      Home: () => irA(0),
      End: () => irA(total - 1),
    };
    const accion = acciones[e.key];
    if (!accion) return;
    e.preventDefault();
    accion();
  };

  const controles = (
    <div className="carrusel-proximos__controles">
      <button
        type="button"
        className="fc-boton-redondo"
        onClick={() => irA(actual - 1)}
        aria-label="Evento anterior"
        aria-controls="proximos-eventos"
      >
        <ArrowLeft aria-hidden="true" />
      </button>
      <span className="carrusel-proximos__contador fc-texto-neutro" aria-hidden="true">
        {actual + 1} / {total}
      </span>
      <button
        type="button"
        className="fc-boton-redondo"
        onClick={rotacion.alternar}
        aria-label={rotacion.girando ? "Pausar el carrusel" : "Reanudar el carrusel"}
        aria-controls="proximos-eventos"
      >
        {rotacion.girando ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
      </button>
      <button
        type="button"
        className="fc-boton-redondo"
        onClick={() => irA(actual + 1)}
        aria-label="Evento siguiente"
        aria-controls="proximos-eventos"
      >
        <ArrowRight aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <div
      className={`carrusel-proximos${rotacion.girando ? "" : " carrusel-proximos--detenido"}`}
      role="region"
      aria-roledescription="carrusel"
      aria-labelledby="proximos"
      onKeyDown={alPulsarTecla}
      {...rotacion.pausaAlInteractuar}
    >
      <div className="carrusel-proximos__cabecera">
        <h2 className="eventos-proximos__subtitulo" id="proximos">
          {titulo}
        </h2>
        {controles}
      </div>
      <div className="carrusel-proximos__pila">
        <div className="fc-capa" aria-hidden="true" />
        {/*
          Lo que oye el lector al cambiar a mano: posición y nombre, no la
          tarjeta entera. Mientras avanza sola, en silencio.
        */}
        <p className="fc-solo-lector" aria-live={rotacion.avanzando ? "off" : "polite"}>
          Evento {actual + 1} de {total}: {eventos[actual]?.name}
        </p>
        <div className="carrusel-proximos__marco" id="proximos-eventos">
          {eventos.map((evento, i) => (
            <div
              key={evento.id}
              ref={marcarInerte(i !== actual)}
              className={`carrusel-proximos__diapositiva${i === actual ? " carrusel-proximos__diapositiva--activa" : ""}`}
              role="group"
              aria-roledescription="evento"
              aria-label={`${i + 1} de ${total}`}
              aria-hidden={i !== actual}
            >
              <EventoTarjeta evento={evento} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarruselProximos;
