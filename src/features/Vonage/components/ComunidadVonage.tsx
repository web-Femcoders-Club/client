import React from "react";
import "../../Welcome/components/vonage.css";

/**
 * Espacio de Vonage para FemCoders Club. Vive fuera del sitio, así que el enlace
 * abre en pestaña nueva.
 */
const URL_COMUNIDAD =
  "https://developer.vonage.com/en/events/register/femcoders-club";

/**
 * Invitación al espacio de Vonage para la comunidad. Va al final de /vonage:
 * es una acción secundaria frente al código y lo que se puede hacer con él.
 */
const ComunidadVonage: React.FC = () => (
  <section
    className="vonage__caja vonage__caja--comunidad vonage__caja--suelta"
    aria-labelledby="comunidad-vonage-titulo"
  >
    <div>
      <h2
        id="comunidad-vonage-titulo"
        className="vonage__caja-titulo vonage__caja-titulo--llano"
      >
        Únete a la comunidad de Vonage
      </h2>
      <p className="vonage__caja-texto">
        Regístrate en su espacio para FemCoders Club y accede a sus eventos.
      </p>
    </div>

    {/*
      Sale del sitio, así que abre en pestaña nueva. Eso es un cambio de
      contexto y hay que anunciarlo (WCAG 3.2.5): el icono lo dice a quien lo ve
      y el texto oculto a quien lo escucha. `rel="noopener noreferrer"` porque
      `target="_blank"` da acceso a `window.opener`.
    */}
    <a
      className="vonage__boton vonage__boton--secundario foco-visible"
      href={URL_COMUNIDAD}
      target="_blank"
      rel="noopener noreferrer"
    >
      Ir al registro
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 4h6v6" />
        <path d="M20 4l-9 9" />
        <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </svg>
      <span className="vonage__sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  </section>
);

export default ComunidadVonage;
