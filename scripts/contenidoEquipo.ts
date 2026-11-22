/**
 * /equipo en texto para quien no ejecuta JavaScript.
 *
 * Los rastreadores de los modelos (GPTBot, ClaudeBot, PerplexityBot) leen el
 * HTML tal como llega: sin JS, de esta página solo veían las metas, y Google
 * solo veía al equipo si renderizaba. Aquí se convierte
 * src/features/Team/contenido.ts —la misma fuente que pintan las secciones— y
 * el equipo actual de la base de datos en:
 *   - HTML para el bloque sin JS del HTML servido (lo inserta prerenderMeta);
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
  TITULO_PAGINA_EQUIPO,
  ordenarComoCofundadoras,
  VALORES_EQUIPO,
  partirDescripcion,
  enlazarWeb,
  webPersonal,
  type ParrafoConWeb,
  type WebPersonal,
} from "../src/features/Team/contenido";
import type { Member } from "../src/types/types";
import { fundadorasJsonLd, idPersona } from "./fundadoras";

const SITIO = "https://www.femcodersclub.com";
const URL_PAGINA = `${SITIO}/equipo`;
const API = process.env.VITE_API_URL || "https://server-femcoders.up.railway.app";

export interface MiembroPublico {
  nombre: string;
  rol: string;
  oficio: string | null;
  historia: string[];
  linkedin: string;
  web?: WebPersonal;
  imagen: string;
}

let peticion: Promise<MiembroPublico[]> | null = null;

/**
 * El equipo actual, en el orden de la base de datos. Vacío si la API falla.
 * Se pide una sola vez por build: lo usan el bloque sin JS, el JSON-LD y llms.txt.
 */
export function obtenerEquipo(): Promise<MiembroPublico[]> {
  peticion ??= pedirEquipo();
  return peticion;
}

async function pedirEquipo(): Promise<MiembroPublico[]> {
  try {
    const respuesta = await fetch(`${API}/member`, { signal: AbortSignal.timeout(15000) });
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    const miembros = (await respuesta.json()) as Member[];
    if (!Array.isArray(miembros)) throw new Error("la respuesta no es una lista");

    const actuales = ordenarComoCofundadoras(
      miembros.filter((m) => m.memberRole === ROL_EQUIPO_ACTUAL),
      (m) => `${m.memberName} ${m.memberLastName}`,
    );
    return actuales
      .map((m) => ({
        nombre: `${m.memberName} ${m.memberLastName}`.trim(),
        web: webPersonal(`${m.memberName} ${m.memberLastName}`),
        rol: m.memberRole,
        ...partirDescripcion(m.memberDescription ?? ""),
        linkedin: m.memberLinkedin,
        imagen: m.memberImage?.startsWith("http") ? m.memberImage : `${SITIO}${m.memberImage}`,
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

const parrafoHtml = (p: ParrafoConWeb) =>
  p.tipo === "texto"
    ? escapar(p.texto)
    : `${escapar(p.antes)}<a href="${escapar(p.web.url)}">${escapar(p.web.nombre)}</a>${escapar(p.despues)}`;

export function equipoHtml(equipo: MiembroPublico[]): string {
  const P = PRESENTACION_EQUIPO;
  const miembro = (m: MiembroPublico) =>
    [
      "<article>",
      `<h3>${escapar(m.nombre)}</h3>`,
      `<p>${escapar(m.rol)}${m.oficio ? ` · ${escapar(m.oficio)}` : ""}</p>`,
      ...enlazarWeb(m.historia, m.web).map((p) => `<p>${parrafoHtml(p)}</p>`),
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

// ---------- JSON-LD ----------

/*
 * Cada persona con el `@id` de scripts/fundadoras.ts, el mismo que cita
 * «Quiénes somos» en `founder` (los dos salen del nombre). Dice lo que se ve
 * en la página: el rol de la base de datos (`jobTitle`), su primera línea
 * (`description`), su foto y su LinkedIn.
 */
const idMiembro = idPersona;

export function equipoJsonLd(equipo: MiembroPublico[]): Record<string, unknown>[] {
  const ID_ORGANIZACION = `${SITIO}/#organization`;
  const ID_SITIO = `${SITIO}/#website`;

  const personas = equipo.map((m) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": idMiembro(m.nombre),
    name: m.nombre,
    jobTitle: m.rol,
    ...(m.oficio ? { description: m.oficio } : {}),
    image: m.imagen,
    ...(m.web ? { url: m.web.url } : {}),
    ...(m.linkedin ? { sameAs: m.linkedin } : {}),
    memberOf: { "@id": ID_ORGANIZACION },
  }));

  /*
   * La misma Organization que index.html y «Quiénes somos» (mismo `@id`), con
   * sus fundadoras: quien solo lee esta página tiene la respuesta aquí.
   */
  const organizacion = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ID_ORGANIZACION,
    name: "FemCoders Club",
    url: SITIO,
    founder: fundadorasJsonLd(),
  };

  const pagina = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": URL_PAGINA,
    name: TITULO_PAGINA_EQUIPO,
    url: URL_PAGINA,
    description:
      "Las fundadoras de FemCoders Club: las cofundadoras que forman el equipo actual, sus valores y el impacto de la comunidad.",
    inLanguage: "es",
    isPartOf: { "@id": ID_SITIO },
    about: { "@id": ID_ORGANIZACION },
    // Sin equipo (la API no respondió) la página no dice que contenga a nadie.
    ...(equipo.length
      ? {
          mainEntity: {
            "@type": "ItemList",
            name: PRESENTACION_EQUIPO.subtitulo,
            itemListElement: personas.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@id": p["@id"] },
            })),
          },
        }
      : {}),
  };

  const migas = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITIO },
      { "@type": "ListItem", position: 2, name: "Equipo", item: URL_PAGINA },
    ],
  };

  return [pagina, organizacion, ...personas, migas];
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
    "## Team: the founders (co-founders) of FemCoders Club, current team (in Spanish, as published)",
    "",
    `Source: ${URL_PAGINA}`,
    "",
    ...P.parrafos.map(fragmentosMd).flatMap((t) => [t, ""]),
    ...equipo.flatMap((m) => [
      `### ${m.nombre}`,
      "",
      `${m.rol}${m.oficio ? ` · ${m.oficio}` : ""}`,
      "",
      ...enlazarWeb(m.historia, m.web).flatMap((p) => [
        p.tipo === "texto" ? p.texto : `${p.antes}${p.web.nombre} (${p.web.url})${p.despues}`,
        "",
      ]),
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
