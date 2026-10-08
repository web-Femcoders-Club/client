import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, CircleCheck, CircleX, Copy, Lightbulb, MessageCircleQuestion } from "lucide-react";

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

type TarjetaDePost = {
  titulo: string;
  texto: React.ReactNode;
  /** Ruta de la web («/recursos/…») o dirección externa («https://…»). */
  enlace?: string;
  icono?: React.ReactNode;
};

type TarjetasPostProps = { titulo?: string; tarjetas: TarjetaDePost[]; columnas?: 2 | 3 | 4 };

/*
 * Varias ideas cortas en tarjetas, en vez de una lista de viñetas con negritas.
 * Con `enlace`, el título es el enlace y toda la tarjeta responde al pasar.
 */
export const TarjetasPost: React.FC<TarjetasPostProps> = ({ titulo, tarjetas, columnas = 2 }) => (
  <div className="post-tarjetas">
    {titulo && <h3>{titulo}</h3>}
    <ul className={`post-tarjetas__lista post-tarjetas__lista--${columnas}`}>
      {tarjetas.map((tarjeta) => (
        <li key={tarjeta.titulo} className="post-tarjetas__tarjeta">
          {tarjeta.icono && <span className="post-tarjetas__icono">{tarjeta.icono}</span>}
          <p className="post-tarjetas__titulo">
            {!tarjeta.enlace ? (
              tarjeta.titulo
            ) : tarjeta.enlace.startsWith("/") ? (
              <Link to={tarjeta.enlace} className="post-tarjetas__enlace">
                {tarjeta.titulo}
              </Link>
            ) : (
              <a href={tarjeta.enlace} className="post-tarjetas__enlace" rel="noopener noreferrer">
                {tarjeta.titulo}
              </a>
            )}
          </p>
          <p className="post-tarjetas__texto">{tarjeta.texto}</p>
        </li>
      ))}
    </ul>
  </div>
);

const ICONOS_DE_LISTA = {
  bien: <CircleCheck aria-hidden="true" />,
  mal: <CircleX aria-hidden="true" />,
  pregunta: <MessageCircleQuestion aria-hidden="true" />,
};

type ListaMarcadaPostProps = {
  titulo: string;
  tipo: keyof typeof ICONOS_DE_LISTA;
  children: React.ReactNode;
};

/** Una lista con un icono por punto: lo que sí, lo que no, o preguntas. Cada hijo es un <li>. */
export const ListaMarcadaPost: React.FC<ListaMarcadaPostProps> = ({ titulo, tipo, children }) => (
  <div className={`post-marcada post-marcada--${tipo}`}>
    <h3>{titulo}</h3>
    <ul>
      {React.Children.map(children, (hijo) =>
        React.isValidElement<{ children?: React.ReactNode }>(hijo) ? (
          <li>
            {ICONOS_DE_LISTA[tipo]}
            <span className="post-marcada__texto">{hijo.props.children}</span>
          </li>
        ) : null
      )}
    </ul>
  </div>
);

type PasoDePost = { etiqueta: string; titulo: string; puntos: React.ReactNode[] };

/** Un plan por etapas en línea de tiempo: «Semana 1-2 · Refuerza lo básico» y sus tareas. */
export const PasosPost: React.FC<{ pasos: PasoDePost[] }> = ({ pasos }) => (
  <ol className="post-pasos">
    {pasos.map((paso, i) => (
      <li key={paso.etiqueta} className="post-pasos__paso">
        <span className="post-pasos__numero" aria-hidden="true">
          {i + 1}
        </span>
        <div>
          <p className="post-pasos__etiqueta">{paso.etiqueta}</p>
          <p className="post-pasos__titulo">{paso.titulo}</p>
          <ul>
            {paso.puntos.map((punto, j) => (
              <li key={j}>{punto}</li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ol>
);
