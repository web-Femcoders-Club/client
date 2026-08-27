import React, { useEffect, useState } from "react";
import "./BackToTop.css";

const SCROLL_THRESHOLD = 400;
const CONTAINER_THRESHOLD = 200;

interface BackToTopProps {
  /**
   * Contenedor con scroll propio (p. ej. el .modal-content de los modales
   * legales). Sin él, el botón escucha el scroll de la ventana. Con él,
   * el botón debe renderizarse como ÚLTIMO HIJO dentro de ese contenedor
   * (usa position: sticky para quedarse visible abajo a la derecha).
   */
  targetRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Botón flotante «Volver arriba»: aparece tras un umbral de scroll.
 * Diseño: https://claude.ai/code/artifact/5acb286c-7ed4-40dc-9e56-494932878bfd
 */
const BackToTop: React.FC<BackToTopProps> = ({ targetRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = targetRef?.current;
    const threshold = target ? CONTAINER_THRESHOLD : SCROLL_THRESHOLD;
    const scroller: HTMLElement | Window = target ?? window;

    const onScroll = () => {
      const scrolled = target ? target.scrollTop : window.scrollY;
      setVisible(scrolled > threshold);
    };
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [targetRef]);

  const handleClick = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior: ScrollBehavior = reducedMotion ? "auto" : "smooth";
    if (targetRef?.current) {
      targetRef.current.scrollTo({ top: 0, behavior });
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  };

  return (
    <button
      type="button"
      className={`back-to-top ${targetRef ? "back-to-top--sticky" : "back-to-top--fixed"}${
        visible ? " back-to-top--visible" : ""
      }`}
      onClick={handleClick}
      aria-label="Volver arriba"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 19V5M5.5 11.5L12 5l6.5 6.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
