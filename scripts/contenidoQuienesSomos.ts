/**
 * «Quiénes somos» en texto para quien no ejecuta JavaScript.
 *
 * Los rastreadores de los modelos (GPTBot, ClaudeBot, PerplexityBot) leen el
 * HTML tal como llega: sin JS, de esta página solo veían las metas. Aquí se
 * convierte src/features/About/contenido.ts, la misma fuente que pintan las
 * secciones, en:
 *   - HTML para un `<noscript>` del HTML servido (lo inserta prerenderMeta);
 *   - Markdown para un bloque de public/llms.txt (lo inserta generateLlmsTxt).
 * No es contenido distinto del que ve una persona: son los mismos textos.
 */
import {
  COMO_LO_HACEMOS,
  COMPROMISO,
  IDEAS,
  PRESENTACION,
  PROPOSITO,
  VALORES,
  type Fragmento,
  type Titulo,
} from "../src/features/About/contenido";
import { VIDEO_COMUNIDAD } from "../src/features/About/videoComunidad";

const SITIO = "https://www.femcodersclub.com";
const URL_PAGINA = `${SITIO}/femcoders-quienes-somos`;

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

const p = (fragmentos: Fragmento[]) => `<p>${fragmentosHtml(fragmentos)}</p>`;

export function quienesSomosHtml(): string {
  const ideas = (lista: typeof IDEAS.enMarcha.lista) =>
    `<ul>${lista.map((i) => `<li><strong>${escapar(i.titulo)}:</strong> ${fragmentosHtml(i.descripcion)}</li>`).join("")}</ul>`;

  return [
    "<main>",
    `<h1>${escapar(PRESENTACION.marca)}: ${escapar(titulo(PRESENTACION.titulo))}</h1>`,
    p(PRESENTACION.parrafo),
    `<h2>${escapar(VIDEO_COMUNIDAD.titulo)}</h2>`,
    `<p>${escapar(VIDEO_COMUNIDAD.descripcion)} <a href="${VIDEO_COMUNIDAD.youtube}">Verlo en YouTube</a></p>`,

    `<h2>${escapar(titulo(PROPOSITO.titulo))}</h2>`,
    `<h3>${escapar(PROPOSITO.mision.nombre)}</h3>`,
    `<p><strong>${escapar(PROPOSITO.mision.frase)}</strong></p>`,
    ...PROPOSITO.mision.parrafos.map(p),
    `<h3>${escapar(PROPOSITO.vision.nombre)}</h3>`,
    `<p><strong>${escapar(PROPOSITO.vision.frase)}</strong></p>`,
    ...PROPOSITO.vision.parrafos.map(p),

    `<h2>${escapar(titulo(COMO_LO_HACEMOS.titulo))}</h2>`,
    p(COMO_LO_HACEMOS.parrafo),
    ...COMO_LO_HACEMOS.tarjetas.flatMap((t) => [`<h3>${escapar(t.nombre)}</h3>`, p(t.parrafo)]),
    `<p>${escapar(COMO_LO_HACEMOS.cierre)}</p>`,

    `<h2>${escapar(titulo(COMPROMISO.titulo))}</h2>`,
    ...COMPROMISO.parrafos.map(p),
    `<h3>${escapar(VALORES.titulo)}</h3>`,
    `<ul>${VALORES.lista.map((v) => `<li><strong>${escapar(v.nombre)}:</strong> ${escapar(v.descripcion)}</li>`).join("")}</ul>`,

    `<h2>${escapar(titulo(IDEAS.titulo))}</h2>`,
    `<p>${escapar(IDEAS.entradilla)}</p>`,
    `<h3>${escapar(IDEAS.enMarcha.titulo)}</h3>`,
    ideas(IDEAS.enMarcha.lista),
    `<h3>${escapar(IDEAS.enElHorizonte.titulo)}</h3>`,
    ideas(IDEAS.enElHorizonte.lista),
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

export function quienesSomosMarkdown(): string {
  const ideas = (lista: typeof IDEAS.enMarcha.lista) =>
    lista.map((i) => `- ${i.titulo}: ${fragmentosMd(i.descripcion)}`).join("\n");

  return [
    "## About us: mission, vision and values (in Spanish, as published)",
    "",
    `Source: ${URL_PAGINA}`,
    "",
    fragmentosMd(PRESENTACION.parrafo),
    "",
    `Video: ${VIDEO_COMUNIDAD.titulo}. ${VIDEO_COMUNIDAD.descripcion} ${VIDEO_COMUNIDAD.youtube}`,
    "",
    `### ${PROPOSITO.mision.nombre}`,
    "",
    PROPOSITO.mision.frase,
    "",
    ...PROPOSITO.mision.parrafos.map(fragmentosMd).flatMap((t) => [t, ""]),
    `### ${PROPOSITO.vision.nombre}`,
    "",
    PROPOSITO.vision.frase,
    "",
    ...PROPOSITO.vision.parrafos.map(fragmentosMd).flatMap((t) => [t, ""]),
    `### ${titulo(COMO_LO_HACEMOS.titulo)}`,
    "",
    fragmentosMd(COMO_LO_HACEMOS.parrafo),
    "",
    ...COMO_LO_HACEMOS.tarjetas.map((t) => `- ${t.nombre}: ${fragmentosMd(t.parrafo)}`),
    "",
    `### ${titulo(COMPROMISO.titulo)}`,
    "",
    ...COMPROMISO.parrafos.map(fragmentosMd).flatMap((t) => [t, ""]),
    `### ${VALORES.titulo}`,
    "",
    ...VALORES.lista.map((v) => `- ${v.nombre}: ${v.descripcion}`),
    "",
    `### ${IDEAS.enMarcha.titulo}`,
    "",
    ideas(IDEAS.enMarcha.lista),
    "",
    `### ${IDEAS.enElHorizonte.titulo}`,
    "",
    ideas(IDEAS.enElHorizonte.lista),
  ].join("\n");
}
