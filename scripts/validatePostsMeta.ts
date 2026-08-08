/**
 * Valida que todos los posts enrutados tengan los metadatos necesarios para
 * generar una vista previa correcta al compartir.
 *
 * Se ejecuta como parte del build: si un post nuevo se publica sin og:image,
 * el build falla ahí en vez de descubrirse semanas después al compartirlo.
 */
import { getPostsIndex } from "./postsIndex";

const REQUIRED = ["title", "description", "image"] as const;

const posts = getPostsIndex();
const problems: string[] = [];

for (const post of posts) {
  for (const field of REQUIRED) {
    if (!post[field]) {
      problems.push(`${post.file}\n    falta: ${field} (ruta ${post.path})`);
    }
  }

  if (post.image && !post.image.startsWith("https://")) {
    problems.push(
      `${post.file}\n    og:image debe ser absoluta (Open Graph no admite rutas relativas): ${post.image}`
    );
  }
}

console.log(`Posts validados: ${posts.length}`);

if (problems.length) {
  console.error(`\n❌ ${problems.length} problema(s) de metadatos:\n`);
  problems.forEach((p) => console.error(`  ${p}\n`));
  console.error(
    "Cada post necesita og:title, og:description y og:image absoluta en su <Helmet>."
  );
  process.exit(1);
}

console.log("✅ Todos los posts tienen los metadatos necesarios para compartir");
