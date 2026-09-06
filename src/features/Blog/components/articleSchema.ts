import { SITE_URL, urlAbsoluta } from "./siteUrl";

/**
 * Construye el JSON-LD de un post del blog.
 *
 * ## Por qué una función y no un componente `<ArticleSchema>`
 *
 * La issue pedía un componente, pero `react-helmet` 6.1 no lo admite: solo
 * acepta como hijos elementos que sepa renderizar (`title`, `meta`, `link`,
 * `script`…) y lanza un error con cualquier otro. Un `<ArticleSchema />` dentro
 * del `<Helmet>` que ya tiene cada post no renderizaría nada.
 *
 * La alternativa era un segundo `<Helmet>` por post solo para el schema. Esto
 * es más barato: el `<script>` se queda donde estaba y solo cambia lo que hay
 * dentro.
 *
 * ## Qué resuelve
 *
 * El bloque `publisher` estaba copiado en los cuatro posts con JSON-LD, y ya
 * había divergido: tres decían «FemCoders Club» y uno «femCoders Club», y solo
 * tres llevaban `url`. Un buscador que lee las dos formas no sabe que son la
 * misma organización.
 *
 * El fallo del logo inexistente (#39) fue lo mismo: una copia que se quedó
 * atrás. No da error, no rompe el build y no se ve en la página — solo empeora
 * cómo se ve el post compartido, que es justo donde nadie mira hasta que
 * alguien lo comparte.
 */

/** La organización, escrita una sola vez. */
const FEMCODERS_CLUB = {
  "@type": "Organization",
  name: "FemCoders Club",
  url: SITE_URL,
} as const;

const PUBLISHER = {
  ...FEMCODERS_CLUB,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/FemCodersClubLogo.png`,
  },
} as const;

export interface ArticleSchemaInput {
  /**
   * Sin valor por defecto a propósito. `NewsArticle` es para las noticias del
   * club y `Article` para los recursos formativos; dejar uno por inercia
   * clasifica mal el contenido ante los buscadores, y es el tipo de error que
   * no avisa.
   */
  type: "NewsArticle" | "Article";
  /** Ruta canónica del post, p. ej. "/noticias/colaboracion-june". */
  path: string;
  headline: string;
  description: string;
  /** Ruta del sitio ("/assets/...") o URL absoluta. */
  image: string;
  datePublished: string;
  /** Si no se indica, se toma la fecha de publicación. */
  dateModified?: string;
  /** Por defecto, la organización. Los recursos con firma personal pasan una `Person`. */
  author?: Record<string, unknown>;
  /** De qué trata el post: un `Event`, otra `Organization`… */
  about?: Record<string, unknown>;
  contributor?: Record<string, unknown>[];
  keywords?: string[];
  articleBody?: string;
}

export function articleSchema({
  type,
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  about,
  contributor,
  keywords,
  articleBody,
}: ArticleSchemaInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    image: urlAbsoluta(image),
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "es-ES",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
    author: author ?? FEMCODERS_CLUB,
    publisher: PUBLISHER,
    // `JSON.stringify` omite las claves con `undefined`, así que lo que no se
    // pasa no aparece en la salida.
    about,
    contributor,
    keywords,
    articleBody,
  };
}
