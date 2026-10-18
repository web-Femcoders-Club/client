import { existsSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import sharp from "sharp";
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

/*
 * La portada del post se pinta con la proporción de su imagen, para no cortar
 * el texto de las 16:9. Se acota: una vertical o cuadrada ocuparía media
 * pantalla, y una muy panorámica quedaría en una tira. Con 1,9 una 16:9
 * pierde un 3 % arriba y otro abajo: menos alta, y el texto sigue entero.
 */
const PROPORCION_MINIMA = 1.9;
const PROPORCION_MAXIMA = 2.2;

async function proporcionDe(imagen: string): Promise<number> {
  const { width, height } = await sharp(resolve(ROOT, "public" + imagen)).metadata();
  if (!width || !height) throw new Error(`No se pueden leer las medidas de ${imagen}`);
  const acotada = Math.min(PROPORCION_MAXIMA, Math.max(PROPORCION_MINIMA, width / height));
  return Math.round(acotada * 1000) / 1000;
}

const posts: PostDelBlog[] = await Promise.all(
  getPostsIndex().map(async (post) => {
    const imagen = imagenLocal(post);
    return {
      ruta: post.path,
      titulo: post.title,
      descripcion: post.description,
      imagen,
      proporcion: await proporcionDe(imagen),
      fecha: post.publishedTime.slice(0, 10),
      seccion: post.section,
      tema: temaDe(post),
      ...(post.coverIsAiGenerated && { imagenConIA: true as const }),
    };
  })
);

writeFileSync(SALIDA, JSON.stringify(posts, null, 2) + "\n");
console.log(`✅ postsDelBlog.json: ${posts.length} posts`);
