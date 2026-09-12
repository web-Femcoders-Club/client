import React from "react";
import "./SaltarAlContenido.css";

export const ID_CONTENIDO_PRINCIPAL = "contenido-principal";

/*
 * Primer elemento enfocable de la página: permite saltarse la cabecera y el menú
 * —que se repiten idénticos en todas las pantallas— y llegar al contenido de una
 * pulsación (WCAG 2.4.1, nivel A).
 *
 * Está oculto con `transform`, no con `display: none` ni `visibility: hidden`:
 * esos dos lo sacarían también del orden de tabulación y el enlace dejaría de
 * existir justo para quien lo necesita.
 *
 * El salto se hace a mano en vez de dejárselo al ancla nativa por dos razones:
 * el navegador mueve el scroll al destino pero no siempre el foco, y la
 * navegación por fragmento dejaría `#contenido-principal` pegado a la URL, que
 * React Router arrastra después de ruta en ruta.
 */
const SaltarAlContenido: React.FC = () => {
  const irAlContenido = (evento: React.MouseEvent<HTMLAnchorElement>) => {
    const principal = document.getElementById(ID_CONTENIDO_PRINCIPAL);
    if (!principal) return; // Sin destino, que actúe el ancla nativa.

    evento.preventDefault();
    principal.focus();
    principal.scrollIntoView({ block: "start", behavior: "auto" });
  };

  return (
    <a
      href={`#${ID_CONTENIDO_PRINCIPAL}`}
      className="saltar-al-contenido"
      onClick={irAlContenido}
    >
      Saltar al contenido principal
    </a>
  );
};

export default SaltarAlContenido;
