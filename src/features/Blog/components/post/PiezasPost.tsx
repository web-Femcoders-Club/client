import React, { useState } from "react";
import { Check, Copy, Lightbulb } from "lucide-react";

/** «¿Qué es HTML y por qué es importante?» → «que-es-html-y-por-que-es-importante». */
const slug = (texto: string) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

type SeccionPostProps = { titulo: string; id?: string; children: React.ReactNode };

/** Un apartado del post: su h2 (con ancla) y su contenido. Sustituye a `div.highlight-box`. */
export const SeccionPost: React.FC<SeccionPostProps> = ({ titulo, id, children }) => {
  const ancla = id ?? slug(titulo);
  return (
    <section className="post-seccion" aria-labelledby={ancla}>
      <h2 id={ancla}>{titulo}</h2>
      {children}
    </section>
  );
};

type CodigoPostProps = { lenguaje: string; children: string };

/*
 * Bloque de código con su lenguaje y un botón de copiar. Sustituye a
 * `pre.code-block`. El <pre> recibe el foco con el tabulador para poder
 * desplazarse con el teclado cuando una línea no cabe.
 */
export const CodigoPost: React.FC<CodigoPostProps> = ({ lenguaje, children }) => {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Sin permiso para el portapapeles: el código sigue ahí para seleccionarlo a mano.
    }
  };

  return (
    <figure className="post-codigo">
      <figcaption className="post-codigo__barra">
        <span className="post-codigo__lenguaje">{lenguaje}</span>
        <button type="button" className="post-codigo__copiar" onClick={copiar}>
          {copiado ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          <span className="post-codigo__copiar-texto" aria-live="polite">
            {copiado ? "Copiado" : "Copiar"}
          </span>
        </button>
      </figcaption>
      {/* Un <pre> con scroll ha de poder recibir el foco (WCAG 2.1.1). */}
      <pre tabIndex={0}>
        <code>{children}</code>
      </pre>
    </figure>
  );
};

type NotaPostProps = { titulo?: string; children: React.ReactNode };

/** Un consejo o aviso dentro del texto: una línea naranja a la izquierda, sin caja de color. */
export const NotaPost: React.FC<NotaPostProps> = ({ titulo = "Consejo", children }) => (
  <aside className="post-nota" aria-label={titulo}>
    <Lightbulb aria-hidden="true" />
    <div>
      <p className="post-nota__titulo">{titulo}</p>
      {children}
    </div>
  </aside>
);

type TablaPostProps = { descripcion: string; children: React.ReactNode };

/*
 * Una tabla con scroll horizontal en móvil. La región recibe el foco para
 * poder desplazarla con el teclado; `descripcion` la nombra para el lector.
 */
export const TablaPost: React.FC<TablaPostProps> = ({ descripcion, children }) => (
  <div className="post-tabla" role="region" aria-label={descripcion} tabIndex={0}>
    {children}
  </div>
);
