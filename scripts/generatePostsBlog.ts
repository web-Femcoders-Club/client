import { existsSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { getPostsIndex, type PostMeta } from "./postsIndex";
import type { PostDelBlog } from "../src/features/Blog/postsDelBlog";

/**
 * Genera src/features/Blog/postsDelBlog.json: la lista de posts que pinta la
 * página del blog, ordenada de más nuevo a más antiguo.
 *
 * Sale del mismo índice que el sitemap y llms.txt (postsIndex.ts: Router.tsx y
 * el <Helmet> de cada post), así que un post nuevo aparece en el blog sin
 * tocar BlogPage.tsx. Antes había que añadirlo a mano a un array y a un
 * `switch` que buscaba el enlace por el título exacto.
 *
 * Se versiona, como sitemap.xml: `pnpm dev` no pasa por el prebuild.
 */

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SALIDA = resolve(ROOT, "src/features/Blog/postsDelBlog.json");

const TEMAS: Record<string, string> = {
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
  react: "React",
};

/**
 * La og:image es una URL absoluta. Algunas apuntan a un .webp que nunca se
 * subió (la imagen está en .png): para pintar, se usa el archivo que existe.
 */
function imagenLocal(post: PostMeta): string {
  const ruta = new URL(post.image, "https://www.femcodersclub.com").pathname;
  if (existsSync(resolve(ROOT, "public" + ruta))) return ruta;

  const png = ruta.replace(/\.webp$/i, ".png");
  if (existsSync(resolve(ROOT, "public" + png))) return png;

  throw new Error(`La imagen de ${post.file} no existe: ${ruta}`);
}

function temaDe(post: PostMeta): string {
  if (post.section === "noticia") return "FemCoders Club";
  const carpeta = post.path.split("/")[2] ?? "";
  return TEMAS[carpeta] ?? carpeta;
}

const posts: PostDelBlog[] = getPostsIndex().map((post) => ({
  ruta: post.path,
  titulo: post.title,
  descripcion: post.description,
  imagen: imagenLocal(post),
  fecha: post.publishedTime.slice(0, 10),
  seccion: post.section,
  tema: temaDe(post),
  ...(post.coverIsAiGenerated && { imagenConIA: true }),
}));

writeFileSync(SALIDA, JSON.stringify(posts, null, 2) + "\n");
console.log(`✅ postsDelBlog.json: ${posts.length} posts`);
