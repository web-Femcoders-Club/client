import React from "react";
import { Link } from "react-router-dom";
import "../../Welcome/components/vonage.css";

const PRESENTACION = "/MaterialesEventos/femCodersClub-Vonage-programaPiloto.pdf";

/**
 * La presentación del programa piloto (las diapositivas de las sesiones del 20
 * y el 23 de octubre de 2026) y el código de conducta, en un bloque propio
 * justo después del aviso de cierre. Dentro del aviso se perdían.
 *
 * Lo ve todo el mundo con sesión y no da por hecho que vaya a participar: aún
 * no está decidido quién de las inscritas formará parte de los equipos. El peso
 * del PDF se dice para que nadie se lleve 14 MB sin saberlo.
 */
const MaterialesPilotoVonage: React.FC = () => (
  <section className="vonage" aria-labelledby="materiales-piloto-titulo">
    <div className="vonage__barra" aria-hidden="true" />

    <div className="vonage__cuerpo">
      <h2 id="materiales-piloto-titulo" className="vonage__titulo">
        Conoce el programa piloto
      </h2>

      <p className="vonage__texto">
        En la presentación encontrarás cómo funcionará el programa: las fases,
        los cuatro proyectos y el calendario. El código de conducta recoge cómo
        nos tratamos en la comunidad y en los proyectos en grupo.
      </p>

      <ul className="vonage__acciones">
        <li>
          <a
            className="vonage__boton foco-visible"
            href={PRESENTACION}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver la presentación (PDF, 14 MB)
            <span className="vonage__sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </li>
        <li>
          <Link to="/codigo-de-conducta" className="vonage__boton vonage__boton--secundario foco-visible">
            Leer el código de conducta
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default MaterialesPilotoVonage;
