/*
 * Textos de /contacto, en un solo sitio. Los pintan las secciones de
 * src/features/Contact/components y los convierte scripts/contenidoContacto.ts
 * para el HTML servido y llms.txt.
 *
 * A empresas y comunidades se les habla de vosotros; a cada persona, de tú
 * (docs/tono-editorial.md). Los iconos no están aquí: los elige quien los pinta.
 */
import { SLACK_INVITE_URL } from "../../utils/constants";

export const CORREO_CONTACTO = "info@femcodersclub.com";

/* Metas de la página: las leen el Helmet y el prerender (scripts/spaRoutesMeta.ts). */
export const META_CONTACTO = {
  titulo: "Contacto | FemCoders Club · Mujeres en tecnología",
  descripcion:
    "Escribe a FemCoders Club para colaborar o patrocinar, compartir una vacante, dar una charla u organizar algo entre comunidades. Te responderemos por correo.",
  imagen: "/og-contacto.jpg",
  imagenAlt:
    "Cuatro asistentes posan abrazadas y sonrientes durante el networking de un evento de FemCoders Club",
} as const;

export const ESCRIBENOS = {
  antetitulo: "Contacto",
  titulo: { texto: "Escríbenos, nos encantará", destacado: "leerte" },
  entradilla:
    "Detrás de este formulario está el equipo de FemCoders Club. Cuéntanos tu idea y te responderemos por correo.",
  motivosTitulo: "¿Qué tienes en mente?",
  motivos: [
    {
      clave: "patrocinio",
      titulo: "Colaborar o patrocinar",
      texto: "¿Formáis parte de una empresa? Podemos apoyar un evento o crear algo con vosotros para la comunidad.",
    },
    {
      clave: "vacante",
      titulo: "Compartir una vacante",
      texto: "¿Buscáis talento tech? Contadnos vuestra oferta y vemos cómo acercarla a la comunidad.",
    },
    {
      clave: "charla",
      titulo: "Dar una charla o un taller",
      texto: "¿Tienes algo que compartir? Cuéntanos tu propuesta y pensemos cómo llevarla a la comunidad.",
    },
    {
      clave: "comunidades",
      titulo: "Organizar algo en colaboración",
      texto: "¿Sois una comunidad o asociación tech? Podemos unir fuerzas y crear algo en colaboración.",
    },
  ],
  correo: "¿Prefieres el correo? Escríbenos a",
  redes: "También estamos en",
} as const;

export const PARTICIPA = {
  antetitulo: "Más formas de participar",
  titulo: { texto: "Sigue cerca de la", destacado: "comunidad" },
  entradilla: "No hace falta escribirnos para formar parte. Elige cómo te apetece empezar.",
  tarjetas: [
    {
      clave: "slack",
      titulo: "Conversa en nuestro Slack",
      texto:
        "Un espacio para hacer preguntas, compartir oportunidades y celebrar logros con otras mujeres en tecnología.",
      boton: "Unirme al Slack",
      enlace: SLACK_INVITE_URL,
      externo: true,
    },
    {
      clave: "cuenta",
      titulo: "Crea tu cuenta",
      texto:
        "Es gratuita y te da acceso a las ofertas de empleo y a las mentorías. Al crearla eliges qué avisos quieres recibir.",
      boton: "Crear cuenta",
      enlace: "/register",
      externo: false,
    },
    {
      clave: "eventos",
      titulo: "Ven a un evento",
      texto: "Charlas, talleres y encuentros para aprender y conocer a otras personas de la comunidad.",
      boton: "Ver próximos eventos",
      enlace: "/eventos",
      externo: false,
    },
  ],
} as const;
