import React, { useEffect, useState } from "react";
import "./BackToTop.css";

const SCROLL_THRESHOLD = 400;

/**
 * Botón flotante «Volver arriba»: aparece tras SCROLL_THRESHOLD px de scroll.
 * Diseño: https://claude.ai/code/artifact/5acb286c-7ed4-40dc-9e56-494932878bfd
 */
const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " back-to-top--visible" : ""}`}
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
