/**
 * Las organizaciones colaboradoras, para quien no ejecuta JavaScript.
 *
 * La sección «Empresas que han confiado en nosotras» de Inicio la pinta React,
 * así que el HTML servido de la portada no la contenía: ni Google sin
 * renderizar ni los rastreadores de los modelos (GPTBot, ClaudeBot,
 * PerplexityBot) veían ninguna organización. Aquí se convierte
 * src/data/colaboradoras.ts —la misma lista que pinta la sección y cuenta el
 * panel— en:
 *   - HTML para un `<noscript>` de la portada (lo inserta prerenderMeta);
 *   - JSON-LD de la portada, enlazado a la Organization de index.html;
 *   - Markdown para un bloque de public/llms.txt (lo inserta generateLlmsTxt).
 * No es contenido distinto del que ve una persona: son las mismas
 * organizaciones, con lo que hicimos juntas y en qué años.
 */
import {
  ANIO_PRIMERA_COLABORACION,
  COLABORADORAS,
  aniosDeColaboracion,
  textoAnios,
  type Colaboradora,
} from "../src/data/colaboradoras";

const SITIO = "https://www.femcodersclub.com";
const ID_ORGANIZACION = `${SITIO}/#organization`;
const TITULO = "Empresas que han confiado en nosotras";

const escapar = (texto: string) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const ordenadas = () =>
  [...COLABORADORAS].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

const resumen = () =>
  `${COLABORADORAS.length} empresas y organizaciones han colaborado con FemCoders Club desde ${ANIO_PRIMERA_COLABORACION}.`;

/** «InfoJobs (2025 · 2026): El sector tecnológico…; DataConnect…» */
const descripcion = (c: Colaboradora) =>
  `${textoAnios(aniosDeColaboracion(c))}: ${c.colaboraciones.map((col) => col.descripcion).join("; ")}`;

// ---------- HTML (noscript de la portada) ----------

export function colaboradorasHtml(): string {
  return [
    `<section aria-labelledby="colaboradoras-sin-js">`,
    `<h2 id="colaboradoras-sin-js">${escapar(TITULO)}</h2>`,
    `<p>${escapar(resumen())}</p>`,
    "<ul>",
    ...ordenadas().map(
      (c) => `<li><strong>${escapar(c.nombre)}</strong> (${escapar(descripcion(c))})</li>`,
    ),
    "</ul>",
    "</section>",
  ].join("\n");
}

// ---------- JSON-LD (portada) ----------

/*
 * Una lista de organizaciones enlazada a la FemCoders Club de index.html por
 * `@id`. `ItemList` y no una propiedad de la Organization (`sponsor`,
 * `member`…): ninguna describe bien a todas, que van de patrocinadoras a
 * espacios, congresos o comunidades amigas.
 */
export function colaboradorasJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITIO}/#colaboradoras`,
    name: TITULO,
    description: resumen(),
    about: { "@id": ID_ORGANIZACION },
    numberOfItems: COLABORADORAS.length,
    itemListElement: ordenadas().map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: c.nombre,
        description: `Colaboración con FemCoders Club en ${descripcion(c)}`,
      },
    })),
  };
}

// ---------- Markdown (llms.txt) ----------

export function colaboradorasMarkdown(): string {
  return [
    "## Companies and organizations that have collaborated with FemCoders Club (in Spanish, as published)",
    "",
    `Source: ${SITIO}/ (section «${TITULO}»)`,
    "",
    resumen(),
    "",
    ...ordenadas().map((c) => `- ${c.nombre} (${descripcion(c)})`),
  ].join("\n");
}
