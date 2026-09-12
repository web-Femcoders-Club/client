/**
 * Genera un dist/<ruta>/index.html por cada post con las metaetiquetas y el
 * JSON-LD ya inyectados en el HTML.
 *
 * Por qué hace falta: la app es una SPA servida con `serve -s dist`, que
 * devuelve el mismo index.html para cualquier ruta. Los bots (Facebook,
 * LinkedIn, WhatsApp, GPTBot, PerplexityBot) no ejecutan JavaScript, así que
 * react-helmet nunca corre y todos leen las metas genéricas del index.html:
 * el logo en vez de la portada del post.
 *
 * `serve -s` solo reescribe las peticiones que NO encuentran fichero, de modo
 * que estos index.html por ruta se sirven tal cual sin tocar nixpacks.toml.
 */
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { getPostsIndex, type PostMeta } from "./postsIndex";
import { generateSocialImages, type SocialImageMap } from "./socialImages";
import { isPrivateRoute } from "./privateRoutes";
import { RUTAS_SPA, type RutaMeta } from "./spaRoutesMeta";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DIST_DIR = path.join(ROOT, "dist");
const SITE_URL = "https://www.femcodersclub.com";
const LOGO = `${SITE_URL}/FemCodersClubLogo.png`;

/** Escapa el texto que se incrusta en un atributo HTML. */
function attr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Elimina una meta del HTML para poder sustituirla en vez de duplicarla. */
function stripMeta(html: string, attrName: string, attrValue: string): string {
  const pattern = new RegExp(
    `[ \\t]*<meta\\s+${attrName}=["']${attrValue}["'][^>]*>\\r?\\n?`,
    "gi"
  );
  return html.replace(pattern, "");
}

function stripTag(html: string, tag: "title"): string {
  return html.replace(new RegExp(`[ \\t]*<${tag}>[\\s\\S]*?</${tag}>\\r?\\n?`, "i"), "");
}

/** JSON-LD del post: Article o NewsArticle según la sección, más migas. */
function buildJsonLd(post: PostMeta, image: string): string {
  const url = `${SITE_URL}${post.path}`;
  const isNews = post.section === "noticia";

  const article = {
    "@context": "https://schema.org",
    "@type": isNews ? "NewsArticle" : "Article",
    headline: post.title,
    description: post.description,
    image,
    inLanguage: "es-ES",
    ...(post.publishedTime
      ? { datePublished: post.publishedTime, dateModified: post.publishedTime }
      : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: "FemCoders Club",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "FemCoders Club",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO },
    },
    ...(post.keywords.length ? { keywords: post.keywords } : {}),
    // Pensado para asistentes de voz y respuestas generativas.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".blog-post-title", ".intro-text"],
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: isNews ? "Noticias" : "Recursos",
        item: `${SITE_URL}/blog/${isNews ? "noticias" : "recursos"}`,
      },
      { "@type": "ListItem", position: 4, name: post.title, item: url },
    ],
  };

  return [article, breadcrumb]
    .map(
      (schema) =>
        `    <script type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
    .join("\n");
}

/** Devuelve el index.html con las metas del post sustituyendo las genéricas. */
function renderHead(template: string, post: PostMeta, image: string): string {
  const url = `${SITE_URL}${post.path}`;

  // Se eliminan las genéricas antes de insertar: dejar dos og:image en el
  // documento es fuente de bugs, porque unos scrapers leen la primera y otros
  // la última.
  let html = template;
  html = stripTag(html, "title");
  for (const value of [
    "og:type",
    "og:url",
    "og:title",
    "og:description",
    "og:image",
  ]) {
    html = stripMeta(html, "property", value);
  }
  for (const value of [
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
    "description",
    "keywords",
  ]) {
    html = stripMeta(html, "name", value);
  }
  html = html.replace(
    /[ \t]*<link\s+rel=["']alternate["'][^>]*>\r?\n?/gi,
    ""
  );

  const alt = post.imageAlt || post.title;
  const tags = [
    `    <title>${attr(post.title)} | FemCoders Club</title>`,
    `    <meta name="description" content="${attr(post.description)}" />`,
    post.keywords.length
      ? `    <meta name="keywords" content="${attr(post.keywords.join(", "))}" />`
      : "",
    `    <link rel="canonical" href="${url}" />`,
    "",
    `    <meta property="og:type" content="article" />`,
    `    <meta property="og:site_name" content="FemCoders Club" />`,
    `    <meta property="og:locale" content="es_ES" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:title" content="${attr(post.title)}" />`,
    `    <meta property="og:description" content="${attr(post.description)}" />`,
    `    <meta property="og:image" content="${image}" />`,
    `    <meta property="og:image:secure_url" content="${image}" />`,
    // Declarar las dimensiones hace que Facebook y LinkedIn rendericen la
    // tarjeta grande de forma fiable desde el primer scrape.
    `    <meta property="og:image:width" content="1200" />`,
    `    <meta property="og:image:height" content="630" />`,
    `    <meta property="og:image:alt" content="${attr(alt)}" />`,
    post.publishedTime
      ? `    <meta property="article:published_time" content="${post.publishedTime}" />`
      : "",
    `    <meta property="article:author" content="FemCoders Club" />`,
    `    <meta property="article:section" content="${
      post.section === "noticia" ? "Noticias" : "Recursos"
    }" />`,
    "",
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:site" content="@FemCodersClub" />`,
    `    <meta name="twitter:title" content="${attr(post.title)}" />`,
    `    <meta name="twitter:description" content="${attr(post.description)}" />`,
    `    <meta name="twitter:image" content="${image}" />`,
    `    <meta name="twitter:image:alt" content="${attr(alt)}" />`,
    "",
    buildJsonLd(post, image),
  ]
    .filter(Boolean)
    .join("\n");

  return html.replace("</head>", `${tags}\n  </head>`);
}

/**
 * Metas de una ruta de la SPA: lo mínimo para que deje de ser un duplicado de la
 * portada. Sin JSON-LD de artículo y con `og:type: website`, porque un listado
 * no es un artículo.
 */
function renderHeadRuta(template: string, route: string, meta: RutaMeta): string {
  const url = `${SITE_URL}${route}`;

  let html = template;
  html = stripTag(html, "title");
  for (const value of ["og:type", "og:url", "og:title", "og:description"]) {
    html = stripMeta(html, "property", value);
  }
  for (const value of ["twitter:title", "twitter:description", "description"]) {
    html = stripMeta(html, "name", value);
  }

  const tags = [
    `    <title>${attr(meta.title)}</title>`,
    `    <meta name="description" content="${attr(meta.description)}" />`,
    // La que faltaba. Sin ella, tres URLs con el mismo HTML dejan que Google
    // elija por su cuenta cuál es la buena, y eligió la portada.
    `    <link rel="canonical" href="${url}" />`,
    "",
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:title" content="${attr(meta.title)}" />`,
    `    <meta property="og:description" content="${attr(meta.description)}" />`,
    "",
    `    <meta name="twitter:title" content="${attr(meta.title)}" />`,
    `    <meta name="twitter:description" content="${attr(meta.description)}" />`,
  ].join("\n");

  return html.replace("</head>", `${tags}\n  </head>`);
}

/**
 * Incrusta los enlaces a los artículos en las páginas que los listan.
 *
 * El listado del blog lo pinta React, así que el HTML servido de /blog no
 * contenía ni un solo enlace a un post: los siete que había eran los del
 * `<noscript>` de index.html, todos a secciones. Un artículo nuevo solo era
 * descubrible por el sitemap, y una URL sin ningún enlace que la apunte recibe
 * poca prioridad de rastreo.
 *
 * Va dentro de un `<noscript>` porque con JavaScript activo el listado real ya
 * está ahí y duplicarlo sería ruido. No es contenido distinto del que ve una
 * persona: son los mismos artículos, los mismos títulos y las mismas rutas.
 */
function renderEnlacesPosts(html: string, posts: PostMeta[], meta: RutaMeta): string {
  if (!meta.listaPosts) return html;

  const seleccion =
    meta.listaPosts === "todas"
      ? posts
      : posts.filter((p) => p.section === meta.listaPosts);
  if (!seleccion.length) return html;

  const enlaces = seleccion
    .map(
      (p) =>
        `        <li><a href="${p.path}">${attr(p.title)}</a></li>`
    )
    .join("\n");

  const bloque = [
    "    <noscript>",
    `      <h2>${attr(meta.encabezadoLista || meta.title)}</h2>`,
    "      <ul>",
    enlaces,
    "      </ul>",
    "    </noscript>",
  ].join("\n");

  return html.replace('<div id="root"></div>', `${bloque}\n    <div id="root"></div>`);
}

export async function prerenderMeta(): Promise<void> {
  const templatePath = path.join(DIST_DIR, "index.html");
  if (!(await fs.pathExists(templatePath))) {
    throw new Error(
      "dist/index.html no existe: ejecuta el build de Vite antes del prerender"
    );
  }

  const template = await fs.readFile(templatePath, "utf-8");
  const posts = getPostsIndex();

  let socialImages: SocialImageMap = {};
  try {
    socialImages = await generateSocialImages();
  } catch (error) {
    // Sin JPEG derivados los posts siguen compartiéndose, solo que WhatsApp y
    // Telegram no mostrarán la miniatura. Degradar es preferible a romper.
    console.warn(
      `⚠️  no se generaron las imagenes sociales: ${(error as Error).message}`
    );
  }

  let written = 0;
  const failures: string[] = [];

  for (const post of posts) {
    try {
      const image = socialImages[post.image] || post.image || LOGO;
      const html = renderHead(template, post, image);

      // <ruta>/index.html en vez de <ruta>.html para que no colisione con
      // ficheros reales y para que `serve` lo resuelva como directorio.
      const outDir = path.join(DIST_DIR, post.path);
      await fs.ensureDir(outDir);
      await fs.writeFile(path.join(outDir, "index.html"), html, "utf-8");
      written++;
    } catch (error) {
      failures.push(`${post.path}: ${(error as Error).message}`);
    }
  }

  const spaRoutes = await writeSpaRoutes(posts);

  console.log(`Paginas prerenderizadas: ${written}/${posts.length}`);
  console.log(`Rutas de la SPA materializadas: ${spaRoutes}`);
  if (failures.length) {
    console.warn("⚠️  fallos (esas rutas conservan el index.html generico):");
    failures.forEach((f) => console.warn(`   ${f}`));
  }
}

/**
 * Materializa el resto de rutas de la SPA como <ruta>/index.html.
 *
 * Hace falta por cómo se comporta `serve`, y este es el punto delicado:
 *   - CON `-s`  reescribe TODA ruta sin extensión a /index.html antes de mirar
 *     si el fichero existe, así que los posts prerenderizados nunca se sirven
 *     y los bots siguen viendo el logo genérico.
 *   - SIN `-s`  los posts sí se sirven, pero /eventos, /blog y las demás rutas
 *     de la SPA devuelven 404.
 *
 * Un `serve.json` con rewrite negado no resuelve el conflicto: los patrones de
 * serve-handler tratan "/" como separador y la negación no casa con rutas
 * anidadas. La salida es que exista un fichero real para cada ruta: los posts
 * con sus metas propias y el resto con el index.html tal cual. Así se sirve
 * todo sin `-s` y sin reglas de reescritura.
 */
async function writeSpaRoutes(posts: PostMeta[]): Promise<number> {
  const routerSource = await fs.readFile(
    path.join(ROOT, "src/router/Router.tsx"),
    "utf-8"
  );
  const template = await fs.readFile(path.join(DIST_DIR, "index.html"), "utf-8");

  const postPaths = new Set(posts.map((p) => p.path));
  const rawRoutes = [...routerSource.matchAll(/path=["']([^"']+)["']/g)].map(
    (m) => m[1]
  );

  // Las rutas comodín ("/blog/*") cuelgan de un componente que declara sus
  // propias rutas hijas relativas, así que hay que expandirlas: sin esto,
  // /blog resolvería pero /blog/noticias daría 404.
  const nested: string[] = [];
  for (const wildcard of rawRoutes.filter((r) => r.endsWith("/*"))) {
    const base = wildcard.replace(/\/\*+$/, "");
    const componentName = routerSource
      .split(`path="${wildcard}"`)[1]
      ?.match(/<(\w+)\s*\/>/)?.[1];
    if (!componentName) continue;

    const modulePath = routerSource.match(
      new RegExp(
        `(?:const\\s+${componentName}\\s*=\\s*lazy\\(\\s*\\(\\)\\s*=>\\s*import\\(|import\\s+${componentName}\\s+from\\s*)["']([^"']+)["']`
      )
    )?.[1];
    if (!modulePath) continue;

    const childFile = path.join(ROOT, "src", `${modulePath.replace(/^\.\.\//, "")}.tsx`);
    if (!(await fs.pathExists(childFile))) continue;

    const childSource = await fs.readFile(childFile, "utf-8");
    // El patrón acepta rutas hijas con comodín ("crm/*") y luego les recorta el
    // sufijo: filtrarlas de entrada dejaba /admin/crm sin materializar.
    for (const [, child] of childSource.matchAll(/<Route\s+path=["']([^"':]+)["']/g)) {
      nested.push(`${base}/${child.replace(/^\//, "").replace(/\/?\*+$/, "")}`);
    }
  }

  const routes = [...rawRoutes.map((r) => r.replace(/\/\*+$/, "")), ...nested]
    .filter(
      (route) =>
        route.startsWith("/") &&
        route !== "/" &&
        !route.includes("*") &&
        !route.includes(":") &&
        !postPaths.has(route) &&
        // Las rutas privadas no se materializan: no deben existir como fichero
        // publicado. Al no tener HTML propio caen en el 404.html, y la sesión
        // sigue funcionando dentro de la app por navegación de cliente.
        !isPrivateRoute(route)
    );

  let written = 0;
  const sinMetas: string[] = [];
  for (const route of new Set(routes)) {
    const meta = RUTAS_SPA[route];

    // Sin entrada en la tabla se escribe la plantilla tal cual, que es lo que se
    // hacía antes para todas. Se avisa para que una ruta nueva no se quede
    // duplicando la portada durante meses sin que nadie lo note.
    let html = template;
    if (meta) {
      html = renderHeadRuta(template, route, meta);
      html = renderEnlacesPosts(html, posts, meta);
    } else {
      sinMetas.push(route);
    }

    const outDir = path.join(DIST_DIR, route);
    await fs.ensureDir(outDir);
    await fs.writeFile(path.join(outDir, "index.html"), html, "utf-8");
    written++;
  }

  if (sinMetas.length) {
    console.warn(
      "⚠️  rutas sin metas propias (sirven una copia de la portada; añádelas a scripts/spaRoutesMeta.ts):"
    );
    sinMetas.forEach((r) => console.warn(`   ${r}`));
  }

  // Red de seguridad. `serve` devuelve 404.html cuando no encuentra fichero, y
  // como contiene la SPA, la app arranca y resuelve la ruta en cliente. Esto
  // cubre lo que la lista no enumera: rutas privadas (que a propósito no se
  // materializan), rutas con parámetros y cualquier ruta futura que alguien
  // añada sin tocar este script. Sin esto, quitar la flag `-s` convertiría
  // cada ruta no listada en un 404 real.
  await fs.writeFile(path.join(DIST_DIR, "404.html"), template, "utf-8");

  return written;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  prerenderMeta().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
