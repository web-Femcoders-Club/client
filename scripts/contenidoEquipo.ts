/**
 * /equipo en texto para quien no ejecuta JavaScript.
 *
 * Los rastreadores de los modelos (GPTBot, ClaudeBot, PerplexityBot) leen el
 * HTML tal como llega: sin JS, de esta página solo veían las metas, y Google
 * solo veía al equipo si renderizaba. Aquí se convierte
 * src/features/Team/contenido.ts —la misma fuente que pintan las secciones— y
 * el equipo actual de la base de datos en:
 *   - HTML para un `<noscript>` del HTML servido (lo inserta prerenderMeta);
 *   - Markdown para un bloque de public/llms.txt (lo inserta generateLlmsTxt).
 * No es contenido distinto del que ve una persona: son los mismos textos y las
 * mismas biografías, íntegras.
 *
 * El equipo se pide a la API pública en cada build. Si no responde, el build
 * sigue: la página sale con sus textos y sin el equipo, y se avisa por consola.
 */
import type { Fragmento, Titulo } from "../src/features/About/contenido";
import {
  CAMBIO,
  IMPACTO,
  PRESENTACION_EQUIPO,
  ROL_EQUIPO_ACTUAL,
  VALORES_EQUIPO,
  partirDescripcion,
} from "../src/features/Team/contenido";
import type { Member } from "../src/types/types";

const SITIO = "https://www.femcodersclub.com";
const URL_PAGINA = `${SITIO}/equipo`;
const API = process.env.VITE_API_URL || "https://server-femcoders.up.railway.app";

export interface MiembroPublico {
  nombre: string;
  rol: string;
  oficio: string | null;
  historia: string[];
  linkedin: string;
}

/** El equipo actual, en el orden de la base de datos. Vacío si la API falla. */
export async function obtenerEquipo(): Promise<MiembroPublico[]> {
  try {
    const respuesta = await fetch(`${API}/member`, { signal: AbortSignal.timeout(15000) });
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    const miembros = (await respuesta.json()) as Member[];
    if (!Array.isArray(miembros)) throw new Error("la respuesta no es una lista");

    return miembros
      .filter((m) => m.memberRole === ROL_EQUIPO_ACTUAL)
      .map((m) => ({
        nombre: `${m.memberName} ${m.memberLastName}`.trim(),
        rol: m.memberRole,
        ...partirDescripcion(m.memberDescription ?? ""),
        linkedin: m.memberLinkedin,
      }));
  } catch (error) {
    console.warn(`⚠️  /equipo sin biografías en el HTML servido: ${(error as Error).message}`);
    return [];
  }
}

const escapar = (texto: string) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const titulo = (t: Titulo) => `${t.texto} ${t.destacado}`;

// ---------- HTML ----------

function fragmentosHtml(fragmentos: Fragmento[]): string {
  return fragmentos
    .map((f) => {
      if (typeof f === "string") return escapar(f);
      if ("negrita" in f) return `<strong>${fragmentosHtml(f.negrita)}</strong>`;
      return `<a href="${f.enlace}">${escapar(f.texto)}</a>`;
    })
    .join("");
}

export function equipoHtml(equipo: MiembroPublico[]): string {
  const P = PRESENTACION_EQUIPO;
  const miembro = (m: MiembroPublico) =>
    [
      "<article>",
      `<h3>${escapar(m.nombre)}</h3>`,
      `<p>${escapar(m.rol)}${m.oficio ? ` · ${escapar(m.oficio)}` : ""}</p>`,
      ...m.historia.map((p) => `<p>${escapar(p)}</p>`),
      m.linkedin ? `<p><a href="${escapar(m.linkedin)}">LinkedIn de ${escapar(m.nombre)}</a></p>` : "",
      "</article>",
    ].join("\n");

  return [
    "<main>",
    `<h1>${escapar(P.marca)}: ${escapar(titulo(P.titulo))}</h1>`,
    `<p>${escapar(P.lema)}</p>`,
    ...P.parrafos.map((p) => `<p>${fragmentosHtml(p)}</p>`),

    `<h2>${escapar(P.subtitulo)}</h2>`,
    `<p>${escapar(P.intro)}</p>`,
    ...equipo.map(miembro),

    `<h2>${escapar(titulo(VALORES_EQUIPO.titulo))}</h2>`,
    `<p>${escapar(VALORES_EQUIPO.parrafo)}</p>`,
    `<ul>${VALORES_EQUIPO.lista.map((v) => `<li><strong>${escapar(v.nombre)}:</strong> ${escapar(v.descripcion)}</li>`).join("")}</ul>`,

    `<h2>${escapar(titulo(IMPACTO.titulo))}</h2>`,
    `<p>${escapar(IMPACTO.parrafo)}</p>`,
    `<ul>${IMPACTO.cifras.map((c) => `<li><strong>${escapar(c.numero)}</strong> ${escapar(c.rotulo)}</li>`).join("")}</ul>`,
    `<h3>${escapar(IMPACTO.alianzasTitulo)}</h3>`,
    `<p>${escapar(IMPACTO.alianzasNota)}</p>`,
    `<ul>${IMPACTO.alianzas.map((a) => `<li><a href="${a.enlace}">${escapar(a.papel)}: ${escapar(a.nombre)}</a></li>`).join("")}</ul>`,

    `<h2>${escapar(titulo(CAMBIO.titulo))}</h2>`,
    `<p>${escapar(CAMBIO.parrafo)}</p>`,
    `<ul>${CAMBIO.beneficios.map((b) => `<li><strong>${escapar(b.titulo)}:</strong> ${escapar(b.texto)}</li>`).join("")}</ul>`,
    `<p><a href="/contacto">Quiero colaborar</a> · <a href="mailto:${CAMBIO.correo}">${CAMBIO.correo}</a></p>`,
    "</main>",
  ].join("\n");
}

// ---------- Markdown (llms.txt) ----------

function fragmentosMd(fragmentos: Fragmento[]): string {
  return fragmentos
    .map((f) => {
      if (typeof f === "string") return f;
      if ("negrita" in f) return fragmentosMd(f.negrita);
      return `${f.texto} (${SITIO}${f.enlace})`;
    })
    .join("");
}

export function equipoMarkdown(equipo: MiembroPublico[]): string {
  const P = PRESENTACION_EQUIPO;
  return [
    "## Team: the co-founders of FemCoders Club (in Spanish, as published)",
    "",
    `Source: ${URL_PAGINA}`,
    "",
    ...P.parrafos.map(fragmentosMd).flatMap((t) => [t, ""]),
    ...equipo.flatMap((m) => [
      `### ${m.nombre}`,
      "",
      `${m.rol}${m.oficio ? ` · ${m.oficio}` : ""}`,
      "",
      ...m.historia.flatMap((p) => [p, ""]),
      ...(m.linkedin ? [`LinkedIn: ${m.linkedin}`, ""] : []),
    ]),
    `### ${titulo(VALORES_EQUIPO.titulo)}`,
    "",
    ...VALORES_EQUIPO.lista.map((v) => `- ${v.nombre}: ${v.descripcion}`),
    "",
    `### ${IMPACTO.alianzasTitulo}`,
    "",
    ...IMPACTO.alianzas
      .filter((a) => !a.porVenir)
      .map((a) => `- ${a.papel}: ${a.nombre} (${SITIO}${a.enlace})`),
  ].join("\n");
}
