import { useEffect, useRef, useState, type FocusEvent, type PointerEvent } from "react";

const prefiereReducir = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/*
 * Avance automático de un carrusel, en bucle (WCAG 2.2.2):
 * - se detiene mientras hay un RATÓN encima o el foco del TECLADO está dentro,
 *   así nada se mueve mientras alguien lee o navega con teclado. El toque en
 *   el móvil y el clic no pausan: el móvil simula «el ratón entra» al tocar y
 *   nunca «sale», y el carrusel se quedaba en pausa para siempre;
 * - `alternar` lo detiene o lo reanuda a voluntad (el botón de rotación);
 * - con «reducir movimiento» arranca detenido; el botón lo pone en marcha;
 * - `diapositiva` es la posición actual: al cambiar (a mano o sola) el
 *   temporizador se reinicia, así tras pulsar un punto hay un intervalo entero;
 * - `pausaExterna` para otras razones del propio carrusel (las tarjetas del
 *   equipo se paran con una historia abierta). No cambia `girando`: el botón
 *   sigue diciendo «Detener», porque al cerrar la historia vuelve a girar.
 *
 * `avanzar` se lee siempre en su última versión: puede cerrar sobre el
 * estado del render actual sin reiniciar el temporizador.
 */
export function useRotacion(
  avanzar: () => void,
  intervalo: number,
  habilitada: boolean,
  diapositiva: number,
  pausaExterna = false,
) {
  const [detenida, setDetenida] = useState(prefiereReducir);
  const [ratonEncima, setRatonEncima] = useState(false);
  const [focoTeclado, setFocoTeclado] = useState(false);
  const enPausa = ratonEncima || focoTeclado || pausaExterna;
  const ultimoAvanzar = useRef(avanzar);
  ultimoAvanzar.current = avanzar;

  useEffect(() => {
    if (!habilitada || detenida || enPausa) return;
    const temporizador = window.setInterval(() => ultimoAvanzar.current(), intervalo);
    return () => window.clearInterval(temporizador);
  }, [habilitada, detenida, enPausa, intervalo, diapositiva]);

  /** Para el contenedor del carrusel: pausa con ratón encima o foco de teclado dentro. */
  const pausaAlInteractuar = {
    onPointerEnter: (e: PointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") setRatonEncima(true);
    },
    onPointerLeave: (e: PointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") setRatonEncima(false);
    },
    // Solo el foco que llega con teclado (el que se ve con contorno).
    onFocus: (e: FocusEvent<HTMLElement>) => {
      if ((e.target as HTMLElement).matches?.(":focus-visible")) setFocoTeclado(true);
    },
    onBlur: (e: FocusEvent<HTMLElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocoTeclado(false);
    },
  };

  return {
    /** Si está en modo automático (aunque ahora esté en pausa por ratón o foco). */
    girando: habilitada && !detenida,
    alternar: () => setDetenida((d) => !d),
    pausaAlInteractuar,
  };
}
