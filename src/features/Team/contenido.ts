/*
 * Textos de /equipo, en un solo sitio. Los pintan las secciones de
 * src/features/Team/components y los convierte scripts/contenidoEquipo.ts en
 * el HTML servido (para quien no ejecuta JavaScript) y en llms.txt: lo que lee
 * un buscador o un modelo es lo mismo que ve una persona.
 *
 * Los iconos no están aquí: son decoración y los elige cada sección.
 * Las biografías del equipo no están aquí: llegan de la base de datos.
 */
import type { Fragmento, Titulo } from "../About/contenido";
import {
  ANIO_FUNDACION,
  CIFRAS_COMUNIDAD,
  RECURSOS_ABIERTOS,
} from "../../data/cifrasComunidad";

/*
 * Las cofundadoras del equipo actual, una sola vez para toda la web: la frase
 * de presentación de /equipo, su meta description y el JSON-LD
 * (scripts/fundadoras.ts) salen de aquí. Las cofundadoras que ya no están
 * (rol «Cofundadora Legacy») siguen solo en la base de datos.
 *
 * Los buscadores y los modelos de IA mezclaban a las del equipo actual con
 * las de los inicios, que algunos perfiles externos siguen presentando como
 * cofundadoras. Por eso la página lo dice en una frase que se pueda citar
 * tal cual, con las palabras «fundadoras» y «cofundadoras».
 */
export const COFUNDADORAS_ACTUALES = [
  { nombre: "Elvia Benedith", linkedin: "https://www.linkedin.com/in/elvia-benedith" },
  { nombre: "Ana Lucía Silva Córdoba", linkedin: "https://www.linkedin.com/in/ana-lucia-silva-cordoba" },
  { nombre: "Irina Ichim", linkedin: "https://www.linkedin.com/in/irina-ichim-desarrolladora" },
  { nombre: "Silvina Lucero Calderón", linkedin: "https://www.linkedin.com/in/silvina-lucero" },
  { nombre: "Isadora Matias", linkedin: "https://www.linkedin.com/in/isadoramatias/" },
] as const;

/** «A, B e C»: delante de «i» o «hi» la conjunción es «e». */
const enumerar = (nombres: readonly string[]) => {
  if (nombres.length < 2) return nombres.join("");
  const ultimo = nombres[nombres.length - 1];
  const conjuncion = /^h?i(?![aeiouáéíóú])/i.test(ultimo) ? "e" : "y";
  return `${nombres.slice(0, -1).join(", ")} ${conjuncion} ${ultimo}`;
};

const NOMBRES_COFUNDADORAS = enumerar(COFUNDADORAS_ACTUALES.map((c) => c.nombre));

/*
 * Título y meta description de /equipo, para el Helmet de TeamPage y el
 * prerender (scripts/spaRoutesMeta.ts). El título lleva «fundadoras», que es
 * lo que se busca, y la descripción, «cofundadoras» y los nombres.
 */
export const TITULO_PAGINA_EQUIPO = "Fundadoras de FemCoders Club: el equipo actual";
export const DESCRIPCION_EQUIPO = `Las cofundadoras que lideran hoy FemCoders Club: ${NOMBRES_COFUNDADORAS}.`;

export const PRESENTACION_EQUIPO = {
  antetitulo: "Nuestro equipo",
  marca: "FemCoders Club",
  titulo: { texto: "Fundadoras y equipo", destacado: "actual" } as Titulo,
  lema: "¡Conoce a las líderes de FemCoders Club!",
  parrafos: [
    [
      `FemCoders Club se fundó en Barcelona en octubre de ${ANIO_FUNDACION}. Hoy lo lideran sus cofundadoras: `,
      { negrita: [NOMBRES_COFUNDADORAS] },
      ". Ellas son las fundadoras que forman el equipo actual. Otras compañeras participaron en los inicios del club y forman parte de su historia, aunque hoy ya no están en el equipo.",
    ],
    [
      "Nuestro equipo de cofundadoras, mentoras y colaboradoras es el motor de esta iniciativa. Lo que nació como una comunidad apasionada hoy se ha formalizado como una ",
      { negrita: ["asociación legalmente constituida"] },
      ".",
    ],
    [
      "Este paso administrativo es la prueba de nuestro compromiso a largo plazo: nos da la ",
      { negrita: ["estructura necesaria"] },
      " para impulsar proyectos de gran escala y ofrecer una plataforma estable donde todas puedan crecer.",
    ],
    [
      "Cada miembro de nuestro liderazgo aporta una trayectoria sólida y una visión estratégica para asegurar que FemCoders Club continúe siendo el referente de la inclusión y el empoderamiento femenino en el sector tech.",
    ],
  ] as Fragmento[][],
  subtitulo: "Nuestro equipo actual",
  intro: "Estás a punto de conocer a las profesionales que están marcando el camino.",
};

export const VALORES_EQUIPO = {
  antetitulo: "Lo que nos guía",
  titulo: { texto: "Nuestros", destacado: "valores" } as Titulo,
  parrafo: "Los principios que guían nuestro trabajo y definen quiénes somos como equipo.",
  lista: [
    {
      id: "colaboracion",
      nombre: "Colaboración",
      descripcion:
        "Trabajamos juntas para crear un ecosistema tecnológico más inclusivo. Compartimos conocimiento, experiencias y oportunidades para aprender y crecer en comunidad.",
    },
    {
      id: "innovacion",
      nombre: "Innovación",
      descripcion:
        "Exploramos nuevas tecnologías, ideas y formas de aprender. Nos gusta experimentar y acercarnos juntas a lo que está transformando el sector.",
    },
    {
      id: "empoderamiento",
      nombre: "Empoderamiento",
      descripcion:
        "Creamos espacios seguros donde cada mujer pueda crecer personal y profesionalmente. Queremos que encuentre herramientas, confianza y oportunidades para construir su propio camino.",
    },
    {
      id: "comunidad-global",
      nombre: "Comunidad global",
      descripcion:
        "Conectamos mujeres STEM de diferentes países, culturas y experiencias. Una red donde crear vínculos, compartir perspectivas y descubrir nuevas posibilidades.",
    },
  ],
};

export const IMPACTO = {
  antetitulo: "Nuestro impacto",
  titulo: { texto: "Una comunidad real que", destacado: "no para de crecer" } as Titulo,
  parrafo: `Eventos, empresas que nos acompañan, recursos para aprender y proyectos con impacto social. Esto es lo que hemos construido juntas desde ${ANIO_FUNDACION}.`,
  cifras: [
    { numero: `${CIFRAS_COMUNIDAD.mujeres}+`, rotulo: "mujeres en STEM forman la comunidad" },
    { numero: `${CIFRAS_COMUNIDAD.eventos}+`, rotulo: "eventos realizados" },
    { numero: `${CIFRAS_COMUNIDAD.empresas}+`, rotulo: "empresas colaboradoras" },
    { numero: `${RECURSOS_ABIERTOS.repositoriosGithub}`, rotulo: "proyectos en GitHub para practicar" },
    { numero: `${RECURSOS_ABIERTOS.articulosTecnicos}`, rotulo: "artículos técnicos en el blog" },
    { numero: `${ANIO_FUNDACION}`, rotulo: "nace la comunidad en Barcelona" },
  ],
  alianzasTitulo: "Alianzas y colaboraciones",
  alianzasNota: "Congresos, hackathons y proyectos en los que participamos.",
  /* Cada alianza dice qué papel tiene FemCoders Club y lleva a su noticia. */
  alianzas: [
    { papel: "Community Partner", nombre: "Talent Arena 2026", enlace: "/noticias/talent-arena-2026-partnership" },
    { papel: "Community Partner", nombre: "HackBarna AI Summit", enlace: "/noticias/hackbarna-ai-summit-26" },
    { papel: "Ambassador", nombre: "Barcelona Cybersecurity Congress 2026", enlace: "/noticias/barcelona-cybersecurity-congress-2026" },
    { papel: "Community Partnership Program", nombre: "Vonage", enlace: "/noticias/vonage-community-partnership-program" },
    { papel: "Equipo de desarrollo", nombre: "June, con In CoDe", enlace: "/noticias/colaboracion-june" },
    { papel: "Comunidad colaboradora", nombre: "Claude Community House Barcelona", enlace: "/noticias/claude-community-house-barcelona" },
    // El listado de noticias vive en /blog/noticias: /noticias sola no existe.
    { papel: "Y las que vienen", nombre: "Síguelas en las noticias", enlace: "/blog/noticias", porVenir: true },
  ],
};

export const CAMBIO = {
  antetitulo: "Para empresas",
  titulo: { texto: "Sé parte del cambio en la", destacado: "industria tecnológica" } as Titulo,
  parrafo:
    "Uníos a las empresas que ya están marcando la diferencia en la inclusión de mujeres en tecnología. Vuestro apoyo puede abrir nuevas oportunidades y ayudar a construir un sector más diverso.",
  correo: "info@femcodersclub.com",
  /*
   * Lo que gana una empresa al colaborar. Va de «vosotros» en todo el bloque,
   * como pide la guía de tono para hablar a un equipo o empresa, y sin
   * prometer lo que no podemos garantizar.
   */
  beneficios: [
    {
      id: "visibilizad",
      titulo: "Visibilizad a vuestro equipo femenino",
      texto: "Dad protagonismo a las mujeres de vuestra empresa y mostradlas como referentes del sector tech.",
    },
    {
      id: "visibilidad",
      titulo: "Visibilidad destacada",
      texto:
        "Vuestra marca estará presente en eventos, redes y materiales de la comunidad, ante una audiencia tech comprometida.",
    },
    {
      id: "networking",
      titulo: "Networking estratégico",
      texto: "Conectad con profesionales de la tecnología y ampliad vuestra red de contactos en el sector.",
    },
    {
      id: "talento",
      titulo: "Innovación y talento",
      texto:
        "Conoced a mujeres con perfiles tecnológicos diversos que pueden aportar nuevas ideas a vuestros equipos.",
    },
    {
      id: "diversidad",
      titulo: "Compromiso con la diversidad",
      texto: "Reforzad vuestro compromiso con la diversidad y la inclusión en tecnología.",
    },
    {
      id: "impacto",
      titulo: "Impacto social real",
      texto: "Formad parte del cambio hacia un sector tecnológico más inclusivo, justo y representativo.",
    },
  ],
};

/*
 * La descripción de cada miembro llega de la base de datos en párrafos
 * separados por una línea en blanco, y el primero es el oficio («Desarrolladora
 * Web Full Stack…»): va bajo el nombre y el resto en «Leer más». El texto se
 * muestra íntegro. Si no hay párrafos, todo va al desplegable.
 */
export const partirDescripcion = (descripcion: string) => {
  const parrafos = descripcion
    .split(/\n\s*\n/)
    .map((parrafo) => parrafo.trim())
    .filter(Boolean);

  if (parrafos.length < 2) return { oficio: null, historia: parrafos };
  return { oficio: parrafos[0], historia: parrafos.slice(1) };
};

/** El rol que la base de datos da al equipo actual (las Legacy no se muestran). */
export const ROL_EQUIPO_ACTUAL = "Cofundadora";

/*
 * La web profesional de cada cofundadora que tenga una, por nombre completo
 * tal como está en la base de datos. Vive aquí y no en la base de datos
 * porque de momento solo hay una: si alguna más quiere la suya, conviene
 * pasarla a un campo de `member` (servidor, panel y este cliente a la vez).
 * La leen la tarjeta de /equipo, el HTML servido, el JSON-LD y llms.txt.
 */
export interface WebPersonal {
  nombre: string;
  url: string;
}

const WEBS_PERSONALES: Record<string, WebPersonal> = {
  "Irina Ichim": { nombre: "Irina Ichim Studio", url: "https://irina-ichim.com" },
};

export const webPersonal = (nombreCompleto: string): WebPersonal | undefined =>
  WEBS_PERSONALES[nombreCompleto.trim()];

/*
 * El enlace va dentro de la biografía, sobre el nombre de la web la primera
 * vez que aparece («Dirijo Irina Ichim Studio…»). Si la biografía no lo
 * nombra, la web va en un párrafo propio al final, para no perderla.
 */
export type ParrafoConWeb =
  | { tipo: "texto"; texto: string }
  | { tipo: "enlace"; antes: string; web: WebPersonal; despues: string };

export const enlazarWeb = (historia: string[], web?: WebPersonal): ParrafoConWeb[] => {
  const parrafos: ParrafoConWeb[] = historia.map((texto) => ({ tipo: "texto", texto }));
  if (!web) return parrafos;

  const i = historia.findIndex((p) => p.includes(web.nombre));
  if (i === -1) return [...parrafos, { tipo: "enlace", antes: "", web, despues: "" }];

  const [antes, ...resto] = historia[i].split(web.nombre);
  parrafos[i] = { tipo: "enlace", antes, web, despues: resto.join(web.nombre) };
  return parrafos;
};
