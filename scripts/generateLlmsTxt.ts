/**
 * Actualiza la sección de posts de public/llms.txt con el índice real del blog.
 *
 * llms.txt describe el sitio a los motores generativos (ChatGPT, Perplexity,
 * Claude). El fichero está escrito a mano y ese contenido se conserva: aquí
 * solo se regenera el bloque delimitado por los marcadores, para que el listado
 * de posts no se quede atrás cada vez que se publica uno nuevo.
 *
 * Escribe en public/ (no en dist/) para que el fichero quede versionado y sea
 * revisable en el diff.
 */
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { getPostsIndex } from "./postsIndex";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const LLMS_PATH = path.join(ROOT, "public", "llms.txt");
const SITE_URL = "https://www.femcodersclub.com";

const BEGIN = "<!-- BEGIN: posts generados automaticamente -->";
const END = "<!-- END: posts generados automaticamente -->";

/** "2026-08-07T10:00:00Z" -> "2026-08-07". Vacío si no hay fecha. */
function isoDate(value: string): string {
  return value ? value.slice(0, 10) : "";
}

export async function generateLlmsTxt(): Promise<void> {
  if (!(await fs.pathExists(LLMS_PATH))) {
    console.warn("⚠️  public/llms.txt no existe, se omite la actualizacion");
    return;
  }

  const posts = getPostsIndex();
  const noticias = posts.filter((p) => p.section === "noticia");
  const recursos = posts.filter((p) => p.section === "recurso");

  const render = (list: typeof posts) =>
    list
      .map((p) => {
        const date = isoDate(p.publishedTime);
        return [
          `- ${p.title}`,
          `  URL: ${SITE_URL}${p.path}`,
          date ? `  Published: ${date}` : "",
          p.description ? `  Summary: ${p.description}` : "",
        ]
          .filter(Boolean)
          .join("\n");
      })
      .join("\n\n");

  const section = [
    BEGIN,
    "",
    "## Blog posts",
    "",
    `Complete index of the ${posts.length} articles published on the FemCoders Club blog.`,
    "",
    `### News (${noticias.length})`,
    "",
    render(noticias),
    "",
    `### Technical resources (${recursos.length})`,
    "",
    render(recursos),
    "",
    END,
  ].join("\n");

  const current = await fs.readFile(LLMS_PATH, "utf-8");
  const hasMarkers = current.includes(BEGIN) && current.includes(END);

  const updated = hasMarkers
    ? current.replace(
        new RegExp(`${BEGIN}[\\s\\S]*?${END}`),
        section.replace(/\$/g, "$$$$")
      )
    : `${current.trimEnd()}\n\n${section}\n`;

  await fs.writeFile(LLMS_PATH, updated, "utf-8");
  console.log(
    `llms.txt actualizado: ${posts.length} posts (${noticias.length} noticias, ${recursos.length} recursos)`
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateLlmsTxt().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
