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
import { quienesSomosMarkdown } from "./contenidoQuienesSomos";
import { colaboradorasMarkdown } from "./contenidoColaboradoras";
import { equipoMarkdown, obtenerEquipo } from "./contenidoEquipo";
import { eventosMarkdown, obtenerEventos } from "./contenidoEventos";
import { contactoMarkdown } from "./contenidoContacto";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const LLMS_PATH = path.join(ROOT, "public", "llms.txt");
const SITE_URL = "https://www.femcodersclub.com";

const BEGIN = "<!-- BEGIN: posts generados automaticamente -->";
const END = "<!-- END: posts generados automaticamente -->";
// Misión, visión y valores, desde src/features/About/contenido.ts: la misma
// fuente que pinta la página, para que llms.txt no se quede atrás.
const BEGIN_QUIENES = "<!-- BEGIN: quienes somos generado automaticamente -->";
const END_QUIENES = "<!-- END: quienes somos generado automaticamente -->";
// Organizaciones colaboradoras, desde src/data/colaboradoras.ts: la misma lista
// que pinta la sección de Inicio y cuenta el panel.
const BEGIN_COLABORADORAS = "<!-- BEGIN: colaboradoras generado automaticamente -->";
const END_COLABORADORAS = "<!-- END: colaboradoras generado automaticamente -->";
// El equipo actual, desde src/features/Team/contenido.ts y la base de datos.
const BEGIN_EQUIPO = "<!-- BEGIN: equipo generado automaticamente -->";
const END_EQUIPO = "<!-- END: equipo generado automaticamente -->";
// Próximos y pasados, desde src/features/Events/contenido.ts y la base de datos.
const BEGIN_EVENTOS = "<!-- BEGIN: eventos generado automaticamente -->";
const END_EVENTOS = "<!-- END: eventos generado automaticamente -->";
// Correo y motivos para escribir, desde src/features/Contact/contenido.ts.
const BEGIN_CONTACTO = "<!-- BEGIN: contacto generado automaticamente -->";
const END_CONTACTO = "<!-- END: contacto generado automaticamente -->";

/** Sustituye el bloque entre marcadores o, si no existe, lo inserta antes de `antes`. */
function ponerBloque(texto: string, inicio: string, fin: string, bloque: string, antes?: string): string {
  if (texto.includes(inicio) && texto.includes(fin)) {
    return texto.replace(new RegExp(`${inicio}[\\s\\S]*?${fin}`), bloque.replace(/\$/g, "$$$$"));
  }
  if (antes && texto.includes(antes)) return texto.replace(antes, `${bloque}\n\n${antes}`);
  return `${texto.trimEnd()}\n\n${bloque}\n`;
}

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

  const quienes = [BEGIN_QUIENES, "", quienesSomosMarkdown(), "", END_QUIENES].join("\n");

  const colaboradoras = [BEGIN_COLABORADORAS, "", colaboradorasMarkdown(), "", END_COLABORADORAS].join("\n");

  const contacto = [BEGIN_CONTACTO, "", contactoMarkdown(), "", END_CONTACTO].join("\n");

  const current = await fs.readFile(LLMS_PATH, "utf-8");
  const conContacto = ponerBloque(current, BEGIN_CONTACTO, END_CONTACTO, contacto, BEGIN_QUIENES);
  const conQuienes = ponerBloque(conContacto, BEGIN_QUIENES, END_QUIENES, quienes, BEGIN);
  const conColaboradoras = ponerBloque(conQuienes, BEGIN_COLABORADORAS, END_COLABORADORAS, colaboradoras, BEGIN);

  // Sin respuesta de la API se conserva el bloque anterior: mejor un equipo de
  // ayer que borrarlo de llms.txt por un fallo de red durante el build.
  const equipo = await obtenerEquipo();
  const bloqueEquipo = [BEGIN_EQUIPO, "", equipoMarkdown(equipo), "", END_EQUIPO].join("\n");
  const conEquipo =
    equipo.length > 0
      ? ponerBloque(conColaboradoras, BEGIN_EQUIPO, END_EQUIPO, bloqueEquipo, BEGIN_COLABORADORAS)
      : conColaboradoras;

  // Igual que el equipo: sin respuesta de la API se conserva el bloque anterior.
  const eventos = await obtenerEventos();
  const hayEventos = eventos.proximos.length + eventos.pasados.length > 0;
  const bloqueEventos = [BEGIN_EVENTOS, "", eventosMarkdown(eventos), "", END_EVENTOS].join("\n");
  const conEventos = hayEventos
    ? ponerBloque(conEquipo, BEGIN_EVENTOS, END_EVENTOS, bloqueEventos, BEGIN_COLABORADORAS)
    : conEquipo;

  const updated = ponerBloque(conEventos, BEGIN, END, section);

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
