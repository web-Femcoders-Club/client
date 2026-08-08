import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

/**
 * Índice de posts del blog derivado del código, no escrito a mano.
 *
 * La fuente de verdad son dos ficheros que ya se tocan al publicar un post:
 * Router.tsx (ruta -> componente) y el <Helmet> del propio post (metadatos).
 * Derivar en vez de duplicar evita que el índice se desincronice.
 *
 * Mismo enfoque que src/utils/generate-sitemap.ts, que ya extrae rutas de
 * Router.tsx por regex.
 */

export interface PostMeta {
  /** Ruta canónica, p. ej. "/noticias/hackbarna-ai-summit-26" */
  path: string;
  /** Ruta del .tsx relativa a la raíz del repo */
  file: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  publishedTime: string;
  /** "noticia" | "recurso", derivado de la ruta */
  section: "noticia" | "recurso";
  keywords: string[];
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Lee el content de una <meta> por property o name. Tolera saltos de línea. */
function readMeta(source: string, attr: string, value: string): string {
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attr}=["']${value}["'][^>]*>`,
    "is"
  );
  const tag = source.match(pattern)?.[0];
  if (!tag) return "";

  // El content puede ir antes o después del identificador, y en varias líneas.
  const content = tag.match(/content=\{?["']([\s\S]*?)["']\}?\s*\/?>/is)?.[1];
  if (!content) return "";

  // JSX permite partir cadenas largas en varias líneas indentadas.
  return content.replace(/\s+/g, " ").trim();
}

/**
 * Extrae el mapa ruta -> fichero desde Router.tsx.
 *
 * Router.tsx declara los componentes con lazy(() => import("...")) y luego los
 * usa en <Route path="..." element={... <Componente /> ...} />. Cruzamos ambos.
 */
export function getRouteToFileMap(): Map<string, string> {
  const routerSource = readFileSync(
    resolve(ROOT, "src/router/Router.tsx"),
    "utf-8"
  );

  // 1. Componente -> ruta del módulo. Conviven dos estilos en el Router:
  //    lazy(() => import("...")) en las rutas nuevas e import estático en las
  //    antiguas, este último a veces con alias (HtmlSemantico -> el fichero
  //    HTMLSemanticoYLayout), así que el nombre local es el que manda.
  const componentToModule = new Map<string, string>();

  const lazyPattern =
    /const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(\s*["']([^"']+)["']\s*\)/g;
  let lazyMatch: RegExpExecArray | null;
  while ((lazyMatch = lazyPattern.exec(routerSource)) !== null) {
    componentToModule.set(lazyMatch[1], lazyMatch[2]);
  }

  const importPattern = /import\s+(\w+)\s+from\s+["']([^"']+)["']/g;
  let importMatch: RegExpExecArray | null;
  while ((importMatch = importPattern.exec(routerSource)) !== null) {
    componentToModule.set(importMatch[1], importMatch[2]);
  }

  // 2. Ruta -> componente, quedándonos solo con los posts del blog.
  //    Cada bloque va desde un <Route hasta el siguiente (o el fin), porque el
  //    </ Route> se cierra con /> y dentro hay otros /> (Loader, el propio
  //    componente) que cortarían la captura antes de tiempo.
  const routeToFile = new Map<string, string>();
  const blocks = routerSource.split(/<Route\b/).slice(1);
  for (const block of blocks) {
    const path = block.match(/path=["']([^"']+)["']/)?.[1];
    if (!path || path.includes("*") || path.includes(":")) continue;

    // El componente del post es el primer self-closing dentro del element,
    // descartando los de andamiaje. Hay dos formas en el Router: las rutas
    // nuevas envuelven en <Suspense fallback={<Loader />}> y las antiguas
    // cuelgan directamente de <Layout>, así que no se puede anclar al Suspense.
    const scaffolding = new Set(["Loader", "Layout", "Suspense"]);
    const component = [...block.matchAll(/<(\w+)\s*\/>/g)]
      .map((m) => m[1])
      .find((name) => !scaffolding.has(name));
    if (!component) continue;

    const modulePath = componentToModule.get(component);
    if (!modulePath || !modulePath.includes("Blog/posts/")) continue;

    // "../features/Blog/posts/noticias/X" -> "src/features/Blog/posts/noticias/X.tsx"
    const file = `src/${modulePath.replace(/^\.\.\//, "")}.tsx`;
    if (existsSync(resolve(ROOT, file))) {
      routeToFile.set(path, file);
    }
  }

  return routeToFile;
}

/** Lee los metadatos del <Helmet> de un post. */
export function readPostMeta(path: string, file: string): PostMeta {
  const source = readFileSync(resolve(ROOT, file), "utf-8");

  const title =
    readMeta(source, "property", "og:title") ||
    source.match(/<title>([\s\S]*?)<\/title>/i)?.[1].replace(/\s+/g, " ").trim() ||
    "";

  const keywords = readMeta(source, "name", "keywords");

  return {
    path,
    file,
    // El <title> lleva sufijo de marca; para compartir sobra.
    title: title.replace(/\s*\|\s*FemCoders Club\s*$/i, "").trim(),
    description:
      readMeta(source, "property", "og:description") ||
      readMeta(source, "name", "description"),
    image: readMeta(source, "property", "og:image"),
    imageAlt: readMeta(source, "property", "og:image:alt"),
    publishedTime: readMeta(source, "property", "article:published_time"),
    section: path.startsWith("/noticias/") ? "noticia" : "recurso",
    keywords: keywords ? keywords.split(",").map((k) => k.trim()).filter(Boolean) : [],
  };
}

/** Índice completo de posts, ordenado por fecha de publicación descendente. */
export function getPostsIndex(): PostMeta[] {
  const map = getRouteToFileMap();
  const posts = [...map.entries()].map(([path, file]) =>
    readPostMeta(path, file)
  );

  return posts.sort((a, b) =>
    (b.publishedTime || "").localeCompare(a.publishedTime || "")
  );
}
