/**
 * /contacto en texto para quien no ejecuta JavaScript.
 *
 * Mismo patrón que scripts/contenidoQuienesSomos.ts: los textos de
 * src/features/Contact/contenido.ts —la misma fuente que pintan las
 * secciones— se convierten en:
 *   - HTML para un `<noscript>` del HTML servido (lo inserta prerenderMeta);
 *   - JSON-LD de la página y su punto de contacto, en el HTML servido;
 *   - Markdown para un bloque de public/llms.txt (lo inserta generateLlmsTxt).
 * El formulario no se reproduce: sin JavaScript no puede enviarse. Se da el
 * correo, que funciona sin él.
 */
import { CORREO_CONTACTO, ESCRIBENOS, PARTICIPA } from "../src/features/Contact/contenido";

const SITIO = "https://www.femcodersclub.com";
const URL_PAGINA = `${SITIO}/contacto`;

const escapar = (texto: string) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const titulo = (t: { texto: string; destacado: string }) => `${t.texto} ${t.destacado}`;

/** Enlace absoluto: las tarjetas internas llevan rutas («/eventos»). */
const absoluto = (enlace: string) => (enlace.startsWith("/") ? `${SITIO}${enlace}` : enlace);

// ---------- HTML ----------

export function contactoHtml(): string {
  const E = ESCRIBENOS;
  const P = PARTICIPA;
  return [
    "<main>",
    `<p>${escapar(E.antetitulo)}</p>`,
    `<h1>${escapar(titulo(E.titulo))}</h1>`,
    `<p>${escapar(E.entradilla)}</p>`,
    `<p>${escapar(E.correo)} <a href="mailto:${CORREO_CONTACTO}">${CORREO_CONTACTO}</a></p>`,
    `<h2>${escapar(E.motivosTitulo)}</h2>`,
    `<ul>${E.motivos.map((m) => `<li><strong>${escapar(m.titulo)}:</strong> ${escapar(m.texto)}</li>`).join("")}</ul>`,

    `<h2>${escapar(titulo(P.titulo))}</h2>`,
    `<p>${escapar(P.entradilla)}</p>`,
    ...P.tarjetas.flatMap((t) => [
      `<h3>${escapar(t.titulo)}</h3>`,
      `<p>${escapar(t.texto)} <a href="${escapar(absoluto(t.enlace))}">${escapar(t.boton)}</a></p>`,
    ]),
    "</main>",
  ].join("\n");
}

// ---------- JSON-LD ----------

/*
 * La página y el punto de contacto de la Organization de index.html (mismo
 * `@id`: los buscadores juntan los dos nodos). Solo el correo, que es lo que
 * la página ofrece: sin teléfono ni horario que nadie ha dado.
 */
export function contactoJsonLd(): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": URL_PAGINA,
      name: titulo(ESCRIBENOS.titulo),
      url: URL_PAGINA,
      description: ESCRIBENOS.entradilla,
      inLanguage: "es",
      isPartOf: { "@id": `${SITIO}/#website` },
      about: { "@id": `${SITIO}/#organization` },
      mainEntity: { "@id": `${SITIO}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITIO}/#organization`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "consultas generales",
        email: CORREO_CONTACTO,
        url: URL_PAGINA,
        availableLanguage: ["es"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITIO },
        { "@type": "ListItem", position: 2, name: "Contacto", item: URL_PAGINA },
      ],
    },
  ];
}

// ---------- Markdown (llms.txt) ----------

export function contactoMarkdown(): string {
  return [
    "## Contact (in Spanish, as published)",
    "",
    `Source: ${URL_PAGINA}`,
    "",
    `- Email: ${CORREO_CONTACTO}`,
    `- Contact form: ${URL_PAGINA}`,
    "",
    ESCRIBENOS.entradilla,
    "",
    `### ${ESCRIBENOS.motivosTitulo}`,
    "",
    ...ESCRIBENOS.motivos.map((m) => `- ${m.titulo}: ${m.texto}`),
    "",
    `### ${titulo(PARTICIPA.titulo)}`,
    "",
    ...PARTICIPA.tarjetas.map((t) => `- ${t.titulo}: ${t.texto} ${absoluto(t.enlace)}`),
  ].join("\n");
}
