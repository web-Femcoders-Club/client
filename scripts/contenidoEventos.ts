/**
 * /eventos en texto para quien no ejecuta JavaScript.
 *
 * Mismo patrón que scripts/contenidoEquipo.ts: los textos de
 * src/features/Events/contenido.ts —la misma fuente que pintan las
 * secciones— y los eventos de la base de datos se convierten en:
 *   - HTML para un `<noscript>` del HTML servido (lo inserta prerenderMeta);
 *   - JSON-LD con cada evento, en el HTML servido;
 *   - Markdown para un bloque de public/llms.txt (lo inserta generateLlmsTxt).
 *
 * Los eventos se piden a la API pública en cada build, una sola vez. Si no
 * responde, el build sigue: la página sale con sus textos y sin eventos.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  EVENTOS_PASADOS,
  PONENTES,
  PRESENTACION_EVENTOS,
  PROXIMOS_EVENTOS,
} from "../src/features/Events/contenido";
import { fechaIso, leerFecha } from "../src/features/Events/fecha";
import type { Event } from "../src/types/types";

const SITIO = "https://www.femcodersclub.com";
const URL_PAGINA = `${SITIO}/eventos`;
const PUBLIC = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), "public");
const API = process.env.VITE_API_URL || "https://server-femcoders.up.railway.app";

export interface EventosPublicos {
  proximos: Event[];
  /** Del más reciente al más antiguo, como en la página. */
  pasados: Event[];
}

let peticion: Promise<EventosPublicos> | null = null;

/** Próximos y pasados. Listas vacías si la API falla. */
export function obtenerEventos(): Promise<EventosPublicos> {
  peticion ??= pedirEventos();
  return peticion;
}

async function pedirLista(ruta: string): Promise<Event[]> {
  const respuesta = await fetch(`${API}/events/api/list/${ruta}`, { signal: AbortSignal.timeout(15000) });
  if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
  const eventos = (await respuesta.json()) as Event[];
  if (!Array.isArray(eventos)) throw new Error("la respuesta no es una lista");
  return eventos;
}

async function pedirEventos(): Promise<EventosPublicos> {
  try {
    const [proximos, pasados] = await Promise.all([pedirLista("upcoming"), pedirLista("past")]);
    const porFecha = (a: Event, b: Event) => leerFecha(a.start_local).getTime() - leerFecha(b.start_local).getTime();
    return { proximos: [...proximos].sort(porFecha), pasados: [...pasados].sort((a, b) => porFecha(b, a)) };
  } catch (error) {
    console.warn(`⚠️  /eventos sin eventos en el HTML servido: ${(error as Error).message}`);
    return { proximos: [], pasados: [] };
  }
}

const escapar = (texto: string) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const titulo = (t: { texto: string; destacado: string }) => `${t.texto} ${t.destacado}`;

/** «jueves, 3 de septiembre de 2026, 19:30 h»; sin hora si el evento llega a las 00:00. */
function fechaLegible(evento: Event): string {
  const fecha = leerFecha(evento.start_local);
  const dia = fecha.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const conHora = fecha.getHours() !== 0 || fecha.getMinutes() !== 0;
  const hora = fecha.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  return conHora ? `${dia}, ${hora} h` : dia;
}

/*
 * La API da la hora local de Barcelona sin zona. Google pide la zona en
 * `startDate`: se añade la de Europe/Madrid en esa fecha (+01:00 o +02:00).
 */
function conZonaMadrid(startLocal: string): string {
  const local = fechaIso(startLocal).slice(0, 19);
  const zona = new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Madrid", timeZoneName: "longOffset" })
    .formatToParts(new Date(`${local}Z`))
    .find((parte) => parte.type === "timeZoneName")?.value;
  const desfase = zona && zona !== "GMT" ? zona.slice(3) : "+00:00";
  return `${local}${desfase}`;
}

// ---------- HTML ----------

function eventoHtml(evento: Event, conEnlace: boolean): string {
  return [
    "<article>",
    `<h3>${escapar(evento.name)}</h3>`,
    `<p><time datetime="${fechaIso(evento.start_local)}">${escapar(fechaLegible(evento))}</time>${
      evento.location ? ` · ${escapar(evento.location)}` : ""
    }</p>`,
    evento.description ? `<p>${escapar(evento.description)}</p>` : "",
    conEnlace && evento.event_url ? `<p><a href="${escapar(evento.event_url)}">${PROXIMOS_EVENTOS.reservar}</a></p>` : "",
    "</article>",
  ].join("\n");
}

export function eventosHtml({ proximos, pasados }: EventosPublicos): string {
  const P = PRESENTACION_EVENTOS;
  return [
    "<main>",
    `<p>${escapar(P.antetitulo)}</p>`,
    `<h1>${escapar(titulo(P.titulo))}</h1>`,
    `<p>${escapar(P.lema)}</p>`,
    ...P.parrafos.map((p) => `<p>${escapar(p)}</p>`),

    `<h2>${escapar(PROXIMOS_EVENTOS.titulo)}</h2>`,
    ...(proximos.length
      ? proximos.map((e) => eventoHtml(e, true))
      : [`<p>${escapar(PROXIMOS_EVENTOS.sinEventos.texto)}</p>`]),

    `<h2>${escapar(titulo(PONENTES.titulo))}</h2>`,
    `<p>${escapar(PONENTES.texto)}</p>`,
    `<ul>${PONENTES.fotos.map((f) => `<li>${escapar(f.texto)}</li>`).join("")}</ul>`,

    `<h2>${escapar(titulo(EVENTOS_PASADOS.titulo))}</h2>`,
    `<p>${escapar(EVENTOS_PASADOS.texto)}</p>`,
    ...pasados.map((e) => eventoHtml(e, false)),
    "</main>",
  ].join("\n");
}

// ---------- JSON-LD ----------

/*
 * URL absoluta de la imagen. Las de Eventbrite ya lo son. Las de los eventos
 * creados a mano son rutas de public/, a veces sin barra inicial o apuntando
 * al .webp que solo existe en public-optimized (lo mismo que resuelve
 * OptimizedImage en la página). Si no está en ningún sitio, no se declara.
 */
function imagenAbsoluta(url: string): string | null {
  if (/^https?:\/\//.test(url)) return url;
  const ruta = url.startsWith("/") ? url : `/${url}`;
  if (fs.existsSync(path.join(PUBLIC, ruta))) return `${SITIO}${encodeURI(ruta)}`;
  const optimizada = `/public-optimized/desktop${ruta.replace(/\.(jpe?g|png|webp)$/i, ".webp")}`;
  if (fs.existsSync(path.join(PUBLIC, optimizada))) return `${SITIO}${encodeURI(optimizada)}`;
  return null;
}

/*
 * Cada evento dice lo que se ve en la página: nombre, fecha, descripción,
 * imagen y enlace de Eventbrite. El lugar solo cuando la base de datos lo
 * trae: muchos eventos no lo tienen y no se sabe si fueron presenciales u
 * online, así que no se inventa (sin `location`, Google no los muestra como
 * resultado enriquecido de evento, pero tampoco miente).
 */
function eventoJsonLd(evento: Event): Record<string, unknown> {
  const imagen = evento.logo_url ? imagenAbsoluta(evento.logo_url) : null;
  return {
    "@type": "Event",
    "@id": `${URL_PAGINA}#evento-${evento.id}`,
    name: evento.name,
    startDate: conZonaMadrid(evento.start_local),
    eventStatus: "https://schema.org/EventScheduled",
    ...(evento.description ? { description: evento.description } : {}),
    ...(imagen ? { image: imagen } : {}),
    ...(evento.event_url ? { url: evento.event_url } : {}),
    ...(evento.location
      ? {
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: evento.location,
            address: {
              "@type": "PostalAddress",
              ...(/barcelona/i.test(evento.location) ? { addressLocality: "Barcelona" } : {}),
              addressCountry: "ES",
            },
          },
        }
      : {}),
    organizer: { "@id": `${SITIO}/#organization` },
  };
}

export function eventosJsonLd({ proximos, pasados }: EventosPublicos): Record<string, unknown>[] {
  const todos = [...proximos, ...pasados];

  const pagina = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": URL_PAGINA,
    name: `${titulo(PRESENTACION_EVENTOS.titulo)} | FemCoders Club`,
    url: URL_PAGINA,
    description: PRESENTACION_EVENTOS.parrafos[0],
    inLanguage: "es",
    isPartOf: { "@id": `${SITIO}/#website` },
    about: { "@id": `${SITIO}/#organization` },
    // Sin eventos (la API no respondió) la página no dice que contenga ninguno.
    ...(todos.length
      ? {
          mainEntity: {
            "@type": "ItemList",
            name: "Eventos de FemCoders Club",
            numberOfItems: todos.length,
            itemListElement: todos.map((evento, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: eventoJsonLd(evento),
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
      { "@type": "ListItem", position: 2, name: "Eventos", item: URL_PAGINA },
    ],
  };

  return [pagina, migas];
}

// ---------- Markdown (llms.txt) ----------

function eventoMd(evento: Event): string[] {
  return [
    `- ${evento.name}`,
    `  Date: ${fechaIso(evento.start_local).slice(0, 10)}`,
    ...(evento.location ? [`  Location: ${evento.location}`] : []),
    ...(evento.description ? [`  Summary: ${evento.description}`] : []),
  ];
}

export function eventosMarkdown({ proximos, pasados }: EventosPublicos): string {
  const P = PRESENTACION_EVENTOS;
  return [
    "## Events (in Spanish, as published)",
    "",
    `Source: ${URL_PAGINA}`,
    "",
    ...P.parrafos.flatMap((p) => [p, ""]),
    `### Upcoming events (${proximos.length})`,
    "",
    ...(proximos.length
      ? proximos.flatMap((e) => [...eventoMd(e), ...(e.event_url ? [`  Tickets: ${e.event_url}`] : []), ""])
      : ["No upcoming events announced right now.", ""]),
    `### Speakers`,
    "",
    PONENTES.texto,
    "",
    `### Past events (${pasados.length}, most recent first)`,
    "",
    ...pasados.flatMap((e) => [...eventoMd(e), ""]),
  ]
    .join("\n")
    .trimEnd();
}
