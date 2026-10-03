import { useEffect, useRef, useState, type FocusEvent } from "react";

const prefiereReducir = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/*
 * Avance automático de un carrusel, en bucle (WCAG 2.2.2):
 * - se detiene mientras el ratón está encima o el foco está dentro, así nada
 *   se mueve mientras alguien lee o navega con teclado;
 * - `alternar` lo detiene o lo reanuda a voluntad (el botón de rotación);
 * - con «reducir movimiento» arranca detenido; el botón lo pone en marcha.
 *
 * `avanzar` se lee siempre en su última versión: puede cerrar sobre el
 * estado del render actual sin reiniciar el temporizador.
 */
export function useRotacion(avanzar: () => void, intervalo: number, habilitada: boolean) {
  const [detenida, setDetenida] = useState(prefiereReducir);
  const [enPausa, setEnPausa] = useState(false);
  const ultimoAvanzar = useRef(avanzar);
  ultimoAvanzar.current = avanzar;

  useEffect(() => {
    if (!habilitada || detenida || enPausa) return;
    const temporizador = window.setInterval(() => ultimoAvanzar.current(), intervalo);
    return () => window.clearInterval(temporizador);
  }, [habilitada, detenida, enPausa, intervalo]);

  /** Para el contenedor del carrusel: pausa mientras hay ratón encima o foco dentro. */
  const pausaAlInteractuar = {
    onMouseEnter: () => setEnPausa(true),
    onMouseLeave: () => setEnPausa(false),
    onFocus: () => setEnPausa(true),
    onBlur: (e: FocusEvent<HTMLElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setEnPausa(false);
    },
  };

  return {
    /** Si está en modo automático (aunque ahora esté en pausa por ratón o foco). */
    girando: habilitada && !detenida,
    alternar: () => setDetenida((d) => !d),
    pausaAlInteractuar,
  };
}
