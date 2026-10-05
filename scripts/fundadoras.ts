/**
 * Las cofundadoras del equipo actual, una sola vez para todo el grafo JSON-LD.
 *
 * Antes cada página las declaraba a su manera: «Quiénes somos» y /equipo daban
 * a la misma persona `jobTitle` distintos, y un modelo que cruzara las dos
 * páginas encontraba dos versiones de ella. Ahora cada una tiene un `@id`
 * estable y las dos rutas lo citan:
 *   - «Quiénes somos» las lista en `founder` de la Organization;
 *   - /equipo las describe (nodos `Person` con su rol, su oficio y su foto,
 *     desde la base de datos: lo mismo que se ve).
 *
 * Solo el equipo actual. Las cofundadoras que ya no están (rol «Cofundadora
 * Legacy») siguen en la base de datos como constancia, pero no salen en la web
 * ni en sus datos estructurados: decisión de Irina del 5 de octubre de 2026,
 * que sustituye a la de mantener a Liliana Dalmarco en `founder` (EQ1, #18).
 */

const SITIO = "https://www.femcodersclub.com";

export interface Fundadora {
  nombre: string;
  linkedin: string;
}

export const FUNDADORAS: Fundadora[] = [
  { nombre: "Elvia Benedith", linkedin: "https://www.linkedin.com/in/elvia-benedith" },
  { nombre: "Ana Lucía Silva Córdoba", linkedin: "https://www.linkedin.com/in/ana-lucia-silva-cordoba" },
  { nombre: "Irina Ichim", linkedin: "https://www.linkedin.com/in/irina-ichim-desarrolladora" },
  { nombre: "Silvina Lucero Calderón", linkedin: "https://www.linkedin.com/in/silvina-lucero" },
  { nombre: "Isadora Matias", linkedin: "https://www.linkedin.com/in/isadoramatias/" },
];

/** «Ana Lucía Silva Córdoba» → «ana-lucia-silva-cordoba». */
export const slugPersona = (nombre: string) =>
  nombre
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Cada persona se identifica en /equipo, que es donde se la ve. */
export const idPersona = (nombre: string) => `${SITIO}/equipo#${slugPersona(nombre)}`;

/** Para `founder`: nombre, enlace y LinkedIn; el detalle lo da /equipo. */
export const fundadorasJsonLd = () =>
  FUNDADORAS.map((f) => ({
    "@type": "Person",
    "@id": idPersona(f.nombre),
    name: f.nombre,
    sameAs: f.linkedin,
  }));
