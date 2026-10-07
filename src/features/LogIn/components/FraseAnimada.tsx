import React, { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import "./FraseAnimada.css";

type FraseAnimadaProps = {
  /** Lo que se lee fijo antes de la palabra: «Juntas crecemos en». */
  inicio: string;
  palabras: readonly [string, ...string[]];
};

const TONOS = ["violeta", "naranja"] as const;
const ESPERA_ENTRE_TRAZOS_MS = 1900;
const MS_POR_LETRA = 95;
const CURVA_TRAZO = "cubic-bezier(.45,.05,.55,.95)";

// «comunidad, mentoría y liderazgo»: lo que oye el lector de pantalla.
const enumerar = (palabras: readonly string[]) =>
  palabras.length < 2
    ? palabras.join("")
    : `${palabras.slice(0, -1).join(", ")} y ${palabras[palabras.length - 1]}`;

const prefiereQuietud = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const terminada = (animacion: Animation) =>
  animacion.finished.then(
    () => undefined,
    () => undefined
  );

/*
 * Frase con una palabra que se escribe a mano, letra a letra, detrás de un
 * plumín; al terminar la subraya el rotulador, espera y se desvanece.
 *
 * - El hueco reserva el ancho de la palabra más larga con una copia
 *   invisible: la línea no salta al cambiar de palabra.
 * - Lo animado va oculto al lector, que oye la frase entera una sola vez.
 * - Pausa: WCAG 2.2.2 la exige para algo que se mueve más de 5 s. El texto
 *   del botón dice lo que hará; sin aria-pressed, que con el texto cambiando
 *   se oiría «Reanudar animación, pulsado».
 * - Con «reducir movimiento», la primera palabra fija y sin botón.
 *
 * El texto de la palabra se escribe por ref, no por estado: así React no
 * vuelve a pintar la frase en cada letra, y no pisa lo que pone la animación.
 */
const FraseAnimada: React.FC<FraseAnimadaProps> = ({ inicio, palabras }) => {
  const [quieta] = useState(prefiereQuietud);
  const [pausada, setPausada] = useState(false);
  const pausadaRef = useRef(false);
  const huecoRef = useRef<HTMLSpanElement>(null);
  const palabraRef = useRef<HTMLSpanElement>(null);
  const textoRef = useRef<HTMLSpanElement>(null);
  const trazoRef = useRef<HTMLSpanElement>(null);
  const pluminRef = useRef<HTMLSpanElement>(null);

  const masLarga = palabras.reduce((larga, p) => (p.length > larga.length ? p : larga));

  useEffect(() => {
    const palabra = palabraRef.current;
    const texto = textoRef.current;
    const trazo = trazoRef.current;
    const plumin = pluminRef.current;
    if (quieta || !palabra || !texto || !trazo || !plumin) return;

    let activa = true;

    // Una animación que nace mientras la frase está en pausa, nace pausada.
    const animar = (elemento: HTMLElement, fotogramas: Keyframe[], opciones: KeyframeAnimationOptions) => {
      const animacion = elemento.animate(fotogramas, opciones);
      if (pausadaRef.current) animacion.pause();
      return animacion;
    };

    // Espera «ms» de tiempo sin pausa; si el componente se desmonta, se abandona.
    const esperar = (ms: number) =>
      new Promise<void>((resolver) => {
        let resta = ms;
        let antes = performance.now();
        const paso = (ahora: number) => {
          if (!activa) return;
          if (!pausadaRef.current) resta -= ahora - antes;
          antes = ahora;
          if (resta <= 0) resolver();
          else requestAnimationFrame(paso);
        };
        requestAnimationFrame(paso);
      });

    const escribir = async (contenido: string, indice: number) => {
      palabra.dataset.tono = TONOS[indice % TONOS.length];
      texto.textContent = contenido;
      const ancho = texto.getBoundingClientRect().width;
      const duracion = 220 + contenido.length * MS_POR_LETRA;

      const subrayadoOculto = animar(
        trazo,
        [{ transform: "rotate(-1.2deg) scaleX(0)" }, { transform: "rotate(-1.2deg) scaleX(0)" }],
        { duration: 1, fill: "forwards" }
      );
      const tinta = animar(
        texto,
        [
          { clipPath: "inset(-0.4em 100% -0.4em -0.3em)" },
          { clipPath: "inset(-0.4em -0.3em -0.4em -0.3em)" },
        ],
        { duration: duracion, easing: CURVA_TRAZO, fill: "both" }
      );
      const pluma = animar(
        plumin,
        [
          { transform: "translateX(0)", opacity: 0 },
          { opacity: 1, offset: 0.08 },
          { opacity: 1, offset: 0.9 },
          { transform: `translateX(${ancho}px)`, opacity: 0 },
        ],
        { duration: duracion, easing: CURVA_TRAZO, fill: "both" }
      );
      await Promise.all([terminada(tinta), terminada(pluma)]);
      if (!activa) return;

      subrayadoOculto.cancel();
      await terminada(
        animar(
          trazo,
          [{ transform: "rotate(-1.2deg) scaleX(0)" }, { transform: "rotate(-1.2deg) scaleX(1)" }],
          { duration: 420, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" }
        )
      );
      await esperar(ESPERA_ENTRE_TRAZOS_MS);
      if (!activa) return;

      await terminada(
        animar(
          palabra,
          [
            { opacity: 1, transform: "translateY(0)" },
            { opacity: 0, transform: "translateY(-0.25em)" },
          ],
          { duration: 380, easing: "ease-in", fill: "forwards" }
        )
      );
      palabra.getAnimations({ subtree: true }).forEach((a) => a.cancel());
      texto.textContent = "";
    };

    const bucle = async () => {
      let indice = 0;
      while (activa) {
        await escribir(palabras[indice % palabras.length] ?? palabras[0], indice);
        indice += 1;
      }
    };
    bucle();

    return () => {
      activa = false;
      palabra.getAnimations({ subtree: true }).forEach((a) => a.cancel());
    };
  }, [palabras, quieta]);

  const alternarPausa = () => {
    const siguiente = !pausadaRef.current;
    pausadaRef.current = siguiente;
    setPausada(siguiente);
    huecoRef.current
      ?.getAnimations({ subtree: true })
      .forEach((a) => (siguiente ? a.pause() : a.play()));
  };

  return (
    <div className="frase-animada">
      <p className="frase-animada__texto">
        {inicio}{" "}
        <span className="frase-animada__hueco" ref={huecoRef} aria-hidden="true">
          <span className="frase-animada__fantasma">{masLarga}</span>
          <span className="frase-animada__capa">
            <span className="frase-animada__palabra" ref={palabraRef} data-tono="violeta">
              <span className="frase-animada__tinta" ref={textoRef}>
                {quieta ? palabras[0] : null}
              </span>
              <span className="frase-animada__trazo" ref={trazoRef} />
            </span>
            <span className="frase-animada__plumin" ref={pluminRef} />
          </span>
        </span>
        <span className="fc-solo-lector">{enumerar(palabras)}</span>
      </p>

      {!quieta && (
        <button
          type="button"
          className="frase-animada__pausa"
          onClick={alternarPausa}
        >
          {pausada ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          {pausada ? "Reanudar animación" : "Pausar animación"}
        </button>
      )}
    </div>
  );
};

export default FraseAnimada;
