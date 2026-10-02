import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import OptimizedImage from "../../../components/OptimizedImage";

export interface FotoEvento {
  src: string;
  alt: string;
  /** Se muestra como pie de foto: nombre del evento y fecha. */
  title: string;
}

interface GaleriaEventosProps {
  fotos: FotoEvento[];
  /** Milisegundos entre foto y foto cuando gira sola. */
  intervalo?: number;
}

const prefiereMenosMovimiento = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/*
 * Galería de eventos pasados de la sección «Nuestra esencia».
 *
 * - Gira sola, así que lleva botón de pausa (WCAG 2.2.2). Con «reducir
 *   movimiento» activado arranca en pausa.
 * - Solo monta la foto activa y sus dos vecinas: son unas 30 y apiladas se
 *   descargaban todas a la vez.
 * - Hay contador («3 / 30») en vez de puntos: 30 puntos no caben ni se leen.
 * - Mientras gira, `aria-live` va en «off» para no anunciar cada cambio; en
 *   pausa pasa a «polite» y se anuncia la foto a la que se navega.
 */
const GaleriaEventos: React.FC<GaleriaEventosProps> = ({ fotos, intervalo = 5000 }) => {
  const total = fotos.length;
  const [actual, setActual] = useState(0);
  const [girando, setGirando] = useState(() => !prefiereMenosMovimiento());

  const irA = useCallback((i: number) => setActual(((i % total) + total) % total), [total]);

  useEffect(() => {
    if (!girando || total < 2) return;
    const temporizador = setInterval(() => setActual((i) => (i + 1) % total), intervalo);
    return () => clearInterval(temporizador);
  }, [girando, total, intervalo, actual]);

  if (total === 0) return null;

  const vecinas = new Set([(actual - 1 + total) % total, actual, (actual + 1) % total]);

  const alPulsarTecla = (e: React.KeyboardEvent<HTMLDivElement>) => {
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

  return (
    <div
      className="galeria"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería de eventos pasados"
      onKeyDown={alPulsarTecla}
    >
      <svg className="galeria__chispas galeria__chispas--arriba" viewBox="0 0 60 60" aria-hidden="true">
        <path d="M10 30 L6 4" />
        <path d="M24 34 L44 8" />
        <path d="M30 50 L56 36" />
      </svg>

      <div className="galeria__capa" aria-hidden="true" />
      <div className="galeria__marco" id="galeria-eventos-fotos" aria-live={girando ? "off" : "polite"}>
        {fotos.map((foto, i) =>
          vecinas.has(i) ? (
            <figure
              key={foto.src}
              className={`galeria__foto${i === actual ? " galeria__foto--activa" : ""}`}
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${total}`}
              aria-hidden={i !== actual}
            >
              <OptimizedImage src={foto.src} alt={foto.alt} loading="lazy" />
              <figcaption className="galeria__pie">{foto.title.trim()}</figcaption>
            </figure>
          ) : null
        )}
      </div>

      <div className="galeria__controles">
        <button
          type="button"
          className="galeria__boton"
          onClick={() => irA(actual - 1)}
          aria-label="Foto anterior"
          aria-controls="galeria-eventos-fotos"
        >
          <ArrowLeft aria-hidden="true" />
        </button>
        <span className="galeria__contador" aria-hidden="true">
          {actual + 1} / {total}
        </span>
        <button
          type="button"
          className="galeria__boton"
          onClick={() => setGirando((g) => !g)}
          aria-label={girando ? "Pausar el carrusel" : "Reanudar el carrusel"}
          aria-controls="galeria-eventos-fotos"
        >
          {girando ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
        <button
          type="button"
          className="galeria__boton"
          onClick={() => irA(actual + 1)}
          aria-label="Foto siguiente"
          aria-controls="galeria-eventos-fotos"
        >
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default GaleriaEventos;
