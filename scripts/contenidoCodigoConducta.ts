/**
 * /codigo-de-conducta en texto para quien no ejecuta JavaScript.
 *
 * Mismo patrón que scripts/contenidoContacto.ts: los textos de
 * src/features/CodigoConducta/contenido.ts —la misma fuente que pinta la
 * página— se convierten en HTML para un `<noscript>` del HTML servido (lo
 * inserta prerenderMeta). Mismos encabezados y anclas que la página.
 */
import {
  CABECERA,
  CODIGO_COMUNIDAD,
  CORREO_CODIGO,
  PROYECTOS,
  type Apartado,
  type Bloque,
} from "../src/features/CodigoConducta/contenido";

const escapar = (texto: string) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* El correo, como enlace; lo demás, escapado. */
const conCorreo = (texto: string) =>
  texto
    .split(CORREO_CODIGO)
    .map(escapar)
    .join(`<a href="mailto:${CORREO_CODIGO}">${CORREO_CODIGO}</a>`);

const bloquesHtml = (bloques: readonly Bloque[]) =>
  bloques.map((bloque) =>
    typeof bloque === "string"
      ? `<p>${conCorreo(bloque)}</p>`
      : `<ul>${bloque.map((elemento) => `<li>${conCorreo(elemento)}</li>`).join("")}</ul>`
  );

const apartadosHtml = (apartados: readonly Apartado[], etiqueta: "h3" | "h4") =>
  apartados.flatMap(({ titulo, bloques }) => [`<${etiqueta}>${escapar(titulo)}</${etiqueta}>`, ...bloquesHtml(bloques)]);

export function codigoConductaHtml(): string {
  const secciones = [PROYECTOS.comunes, ...PROYECTOS.programas];
  return [
    "<main>",
    `<h1>${escapar(`${CABECERA.titulo.texto} ${CABECERA.titulo.destacado}`)}</h1>`,
    `<p>${escapar(CABECERA.entradilla)}</p>`,
    `<p><time datetime="${CABECERA.vigor.fecha}">${escapar(CABECERA.vigor.texto)}</time></p>`,

    `<h2 id="${CODIGO_COMUNIDAD.id}">${escapar(CODIGO_COMUNIDAD.titulo)}</h2>`,
    ...apartadosHtml(CODIGO_COMUNIDAD.apartados, "h3"),

    `<h2 id="${PROYECTOS.id}">${escapar(PROYECTOS.titulo)}</h2>`,
    `<p>${escapar(PROYECTOS.entradilla)}</p>`,
    ...secciones.flatMap(({ id, titulo, bloques, apartados }) => [
      `<h3 id="${id}">${escapar(titulo)}</h3>`,
      ...bloquesHtml(bloques ?? []),
      ...apartadosHtml(apartados, "h4"),
    ]),
    "</main>",
  ].join("\n");
}
