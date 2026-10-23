import React from "react";
import "../../Welcome/components/vonage.css";

/**
 * Espacio de Vonage para FemCoders Club. Vive fuera del sitio, así que el enlace
 * abre en pestaña nueva.
 */
const URL_COMUNIDAD =
  "https://developer.vonage.com/en/events/register/femcoders-club";

/**
 * Invitación al espacio de Vonage para la comunidad: el enlace de registro que
 * Vonage creó para FemCoders Club. Va dentro de la tarjeta «Somos Community
 * Partner» (CodigoVonage), debajo del código: las dos cosas son lo que da la
 * colaboración, y sueltas al final de /vonage parecían bloques sin relación.
 * Por eso es un `h3` de esa tarjeta y no una sección propia.
 */
const ComunidadVonage: React.FC = () => (
  <div className="vonage__caja vonage__caja--comunidad">
    <div className="vonage__caja-cuerpo">
      <h3 className="vonage__caja-titulo vonage__caja-titulo--llano">
        Únete a la comunidad de Vonage
      </h3>
      {/*
        La URL dice /events/register, pero la página no es de eventos: es la
        bienvenida de Vonage Developer a FemCoders Club, donde se crea la cuenta
        y se canjea el código. Con la cuenta se entra a toda la plataforma:
        documentación, comunidad, blog y Learning Center (comprobado el 23 de
        octubre de 2026).
      */}
      <p className="vonage__caja-texto">
        Crea tu cuenta en Vonage Developer desde su página de bienvenida para
        FemCoders Club, canjea tu código y accede a su documentación, su
        comunidad y su Learning Center.
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
  </div>
);

export default ComunidadVonage;
