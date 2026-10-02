import { useEffect, useRef, useState } from "react";

interface CifraAnimadaProps {
  valor: number;
  /** Lo que va pegado al número: «+» en «1500+». */
  sufijo?: string;
  /** Milisegundos de espera antes de empezar, para que cada cifra arranque en su turno. */
  retraso?: number;
  duracion?: number;
}

/** Arranca rápido y frena al llegar: la cifra «aterriza» en vez de pararse en seco. */
const frenarAlFinal = (t: number) => 1 - Math.pow(1 - t, 3);

const prefiereMenosMovimiento = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/*
 * Número que cuenta desde 0 hasta su valor cuando entra en pantalla.
 *
 * Se pinta con el valor final desde el principio y solo baja a 0 al empezar
 * la cuenta: si el observador no llega a dispararse (prerender, captura de
 * pantalla, pestaña en segundo plano), se ve la cifra real y no un «0+».
 *
 * Solo es la parte visual: lleva `aria-hidden` porque un lector de pantalla
 * anunciaría cada fotograma. Quien lo usa pone al lado la frase completa en
 * texto oculto («Más de 1500 mujeres en STEM»).
 *
 * Con «reducir movimiento» activado no hay cuenta: se queda el valor final.
 */
const CifraAnimada: React.FC<CifraAnimadaProps> = ({
  valor,
  sufijo = "",
  retraso = 0,
  duracion = 2600,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [actual, setActual] = useState(valor);

  useEffect(() => {
    setActual(valor);
    if (prefiereMenosMovimiento()) return;

    const nodo = ref.current;
    if (!nodo) return;

    let fotograma = 0;
    let espera: ReturnType<typeof setTimeout> | undefined;

    const animar = () => {
      const inicio = performance.now();
      const paso = (ahora: number) => {
        const progreso = Math.min((ahora - inicio) / duracion, 1);
        setActual(Math.round(frenarAlFinal(progreso) * valor));
        if (progreso < 1) fotograma = requestAnimationFrame(paso);
      };
      fotograma = requestAnimationFrame(paso);
    };

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();
        setActual(0);
        espera = setTimeout(animar, retraso);
      },
      { threshold: 0.4 }
    );
    observador.observe(nodo);

    return () => {
      observador.disconnect();
      if (espera) clearTimeout(espera);
      cancelAnimationFrame(fotograma);
    };
  }, [valor, retraso, duracion]);

  return (
    <span ref={ref} className="portada__cifra-numero" aria-hidden="true">
      {actual}
      {sufijo}
    </span>
  );
};

export default CifraAnimada;
