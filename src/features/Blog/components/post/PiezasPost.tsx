import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  CircleCheck,
  CircleX,
  Copy,
  Lightbulb,
  MessageCircleQuestion,
  TriangleAlert,
} from "lucide-react";
import OptimizedImage from "../../../../components/OptimizedImage";

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

type NotaPostProps = { titulo?: string; tipo?: "consejo" | "aviso"; children: React.ReactNode };

/*
 * Un consejo o un aviso dentro del texto: una línea naranja a la izquierda,
 * sin caja de color. Solo cambia el icono: bombilla o triángulo de alerta.
 */
export const NotaPost: React.FC<NotaPostProps> = ({ titulo = "Consejo", tipo = "consejo", children }) => (
  <aside className="post-nota" aria-label={titulo}>
    {tipo === "aviso" ? <TriangleAlert aria-hidden="true" /> : <Lightbulb aria-hidden="true" />}
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

type ImagenPostProps = {
  src: string;
  alt: string;
  pie?: React.ReactNode;
  /** Creada o retocada con un modelo generativo; no un diseño hecho a mano en Canva. */
  generadaConIA?: boolean;
};

/*
 * Una imagen dentro del texto, al ancho de la columna, con pie opcional y,
 * si hace falta, el distintivo de IA (AI Act art. 50).
 */
export const ImagenPost: React.FC<ImagenPostProps> = ({ src, alt, pie, generadaConIA = false }) => (
  <figure className="post-imagen">
    <div className="post-imagen__marco">
      <OptimizedImage src={src} alt={alt} />
      {generadaConIA && <span className="fc-distintivo-ia">Imagen generada con IA</span>}
    </div>
    {pie && <figcaption>{pie}</figcaption>}
  </figure>
);

type VideoPostProps = {
  src: string;
  /** Versión vertical para móvil: el navegador la elige con `media`. */
  srcMovil?: string;
  poster?: string;
  /** Qué se ve en el vídeo: nombra el reproductor para el lector de pantalla. */
  descripcion: string;
  pie?: React.ReactNode;
};

/*
 * Un vídeo propio (.mp4) al ancho de la columna, con controles y sin
 * reproducción automática (WCAG 2.2.2). Los de YouTube van con un <iframe>
 * normal: la plantilla ya los pone en 16:9.
 */
export const VideoPost: React.FC<VideoPostProps> = ({ src, srcMovil, poster, descripcion, pie }) => (
  <figure className="post-video">
    <video controls preload="metadata" poster={poster} aria-label={descripcion}>
      {srcMovil && <source src={srcMovil} type="video/mp4" media="(max-width: 768px)" />}
      <source src={src} type="video/mp4" />
      <p>
        Tu navegador no puede reproducir este vídeo. <a href={src}>Descárgalo aquí</a>.
      </p>
    </video>
    {pie && <figcaption>{pie}</figcaption>}
  </figure>
);

type RespuestaPostProps ={ resumen?: string; children: React.ReactNode };

/*
 * La respuesta de un ejercicio, plegada: se abre al pulsar «Ver respuesta».
 * Con <details> nativo, el teclado y el lector de pantalla ya saben usarla.
 */
export const RespuestaPost: React.FC<RespuestaPostProps> = ({ resumen = "Ver respuesta", children }) => (
  <details className="post-respuesta">
    <summary>{resumen}</summary>
    <div className="post-respuesta__contenido">{children}</div>
  </details>
);

type DemoPostProps ={ titulo?: string; children: React.ReactNode };

/*
 * El resultado en vivo de un ejemplo de CSS, en un recuadro punteado para
 * que no se confunda con el texto. Los estilos que demuestra cada ejemplo
 * van en línea dentro del post, junto al código que los explica;
 * `.post-demo__caja` da el bloque de muestra de base.
 */
export const DemoPost: React.FC<DemoPostProps> = ({ titulo = "Resultado", children }) => (
  <figure className="post-demo">
    <figcaption className="post-demo__titulo">{titulo}</figcaption>
    <div className="post-demo__escenario">{children}</div>
  </figure>
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
          {/* Un <div> y no un <p>: el texto puede llevar su propia lista. */}
          <div className="post-tarjetas__texto">{tarjeta.texto}</div>
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
