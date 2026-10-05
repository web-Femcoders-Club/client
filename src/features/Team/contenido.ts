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

export const PRESENTACION_EQUIPO = {
  antetitulo: "Nuestro equipo",
  marca: "FemCoders Club",
  titulo: { texto: "Nuestro equipo de", destacado: "liderazgo" } as Titulo,
  lema: "¡Conoce a las líderes de FemCoders Club!",
  parrafos: [
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
