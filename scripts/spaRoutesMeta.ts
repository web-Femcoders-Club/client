/**
 * Identidad de cada ruta de la SPA que no es un post.
 *
 * Por qué existe este archivo: el prerender escribía en estas rutas una copia
 * literal de `dist/index.html`, así que /blog, /blog/noticias, /blog/recursos y
 * siete más se servían con el mismo HTML byte a byte —el título de la portada,
 * `og:url` apuntando a la portada y sin ninguna canonical—. Google lo detectó
 * como "Duplicada: el usuario no ha indicado ninguna versión canónica" sobre
 * /blog/noticias. Los 49 posts nunca tuvieron el problema porque sí reciben sus
 * metas propias.
 *
 * Los textos de las rutas que ya declaraban `<Helmet>` se copian literalmente de
 * su componente, para que lo que ve un buscador y lo que ve el navegador digan
 * lo mismo. Esa duplicación es deliberada y tiene un coste: si se cambia el
 * Helmet de una página, hay que cambiarlo también aquí. No se centraliza en un
 * solo sitio porque el Helmet se evalúa en el navegador y esto se ejecuta en el
 * build, sin React; unificarlos sería reescribir cómo cada página declara sus
 * metas, y eso es un cambio mucho mayor que el fallo que se está corrigiendo.
 *
 * Una ruta que no esté en esta tabla conserva el HTML genérico y el prerender lo
 * avisa por consola, para que una ruta nueva no vuelva a caer en silencio.
 */

import { VIDEO_COMUNIDAD } from "../src/features/About/videoComunidad";
import { quienesSomosHtml } from "./contenidoQuienesSomos";
import { equipoHtml, equipoJsonLd, obtenerEquipo } from "./contenidoEquipo";
import { eventosHtml, eventosJsonLd, obtenerEventos } from "./contenidoEventos";
import { fundadorasJsonLd } from "./fundadoras";
import { contactoHtml, contactoJsonLd } from "./contenidoContacto";
import { META_CONTACTO } from "../src/features/Contact/contenido";
import { META_REGISTRO } from "../src/features/User/contenido";

export interface RutaMeta {
  title: string;
  description: string;
  /**
   * Sección de posts que la página lista, si lista alguna. El prerender la usa
   * para incrustar los enlaces a los artículos dentro de un `<noscript>`.
   */
  listaPosts?: "todas" | "noticia" | "recurso";
  /**
   * Encabezado de esa lista. Va aparte del `title` porque un título de pestaña
   * ("Noticias - FemCoders Club") no se lee como el encabezado de una lista
   * dentro de la propia página.
   */
  encabezadoLista?: string;
  /**
   * Datos estructurados que deben estar en el HTML servido, no solo en el
   * `<Helmet>`: el Helmet los añade en el navegador y Google solo los ve si
   * renderiza la página. Una función cuando dependen de datos que hay que
   * pedir en el build (las personas de /equipo).
   */
  jsonLd?: Record<string, unknown>[] | (() => Promise<Record<string, unknown>[]>);
  /**
   * Texto de la página en HTML, para un `<noscript>` del HTML servido. Los
   * rastreadores de los modelos no ejecutan JavaScript: sin esto, de una
   * página hecha en React solo leen las metas. Una función cuando el texto
   * depende de datos que hay que pedir en el build (el equipo de /equipo).
   */
  contenidoHtml?: string | (() => Promise<string>);
  /**
   * Imagen al compartir en redes (og:image y twitter:image). Sin ella, la
   * ruta se queda con la genérica de index.html (el logo). 1200×630.
   */
  imagen?: { ruta: string; ancho: number; alto: number; alt: string };
}

const SITIO = "https://www.femcodersclub.com";
const urlAbsoluta = (ruta: string) => `${SITIO}${ruta}`;

// Identificadores del grafo JSON-LD. #organization y #website son los de index.html.
const ID_ORGANIZACION = `${SITIO}/#organization`;
const ID_SITIO = `${SITIO}/#website`;
const ID_VIDEO = `${SITIO}/femcoders-quienes-somos#video`;

export const RUTAS_SPA: Record<string, RutaMeta> = {
  "/blog": {
    // Copiado de BlogPage.tsx, que ya elegía este título según la ruta.
    title: "Blog de FemCoders Club",
    description:
      "Descubre noticias y recursos sobre programación, tecnología, y más en el blog de FemCoders Club. Aprende y crece con nuestra comunidad.",
    listaPosts: "todas",
    encabezadoLista: "Todos los artículos del blog",
  },

  /*
   * Noticias y Recursos no declaraban metas propias en ninguna parte: se
   * renderizan dentro de BlogPage y heredaban su descripción y su canonical.
   * Tres URLs con la misma descripción es justo lo que Google llama duplicado,
   * así que aquí cada una dice de qué va.
   */
  "/blog/noticias": {
    title: "Noticias - FemCoders Club",
    description:
      "Lo que pasa en la comunidad: eventos, colaboraciones, entrevistas y aniversarios de FemCoders Club, contados desde dentro.",
    listaPosts: "noticia",
    encabezadoLista: "Noticias de la comunidad",
  },
  "/blog/recursos": {
    title: "Recursos - FemCoders Club",
    description:
      "Artículos para aprender HTML, CSS, JavaScript y React a tu ritmo, escritos por la comunidad de FemCoders Club.",
    listaPosts: "recurso",
    encabezadoLista: "Recursos para aprender",
  },

  "/eventos": {
    // Copiado de EventsPage.tsx. El título coincide con el h1 y cabe sin cortarse.
    title: "Eventos para mujeres en tecnología | FemCoders Club",
    description:
      "Charlas, talleres, encuentros y networking sobre tecnología, IA y desarrollo profesional, presenciales en Barcelona y online. Más de 40 eventos de FemCoders Club.",
    // Textos de src/features/Events/contenido.ts y eventos de la base de datos.
    contenidoHtml: async () => eventosHtml(await obtenerEventos()),
    imagen: {
      ruta: "/og-eventos.jpg",
      ancho: 1200,
      alto: 630,
      alt: "Asistentes y organizadoras de un taller de FemCoders Club posan sonriendo en el Canòdrom de Barcelona",
    },
    // La página, cada evento (próximos y pasados) y la miga de pan, enlazados
    // por `@id` al sitio y a la Organization de index.html (scripts/contenidoEventos.ts).
    jsonLd: async () => eventosJsonLd(await obtenerEventos()),
  },
  "/equipo": {
    // Copiado de TeamPage.tsx. El título coincide con el h1 y cabe sin cortarse.
    title: "Nuestro equipo de liderazgo | FemCoders Club",
    description:
      "Conoce a las cofundadoras de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón e Isadora Matias.",
    // Textos de src/features/Team/contenido.ts y biografías de la base de datos.
    contenidoHtml: async () => equipoHtml(await obtenerEquipo()),
    imagen: {
      ruta: "/og-equipo.jpg",
      ancho: 1200,
      alto: 630,
      alt: "Las cinco cofundadoras de FemCoders Club se hacen un selfi sonriendo al sol en Barcelona durante HackBarna AI Summit 2026",
    },
    // La página, las personas del equipo actual y la miga de pan, enlazadas por
    // `@id` al sitio y a la Organization de index.html (scripts/contenidoEquipo.ts).
    jsonLd: async () => equipoJsonLd(await obtenerEquipo()),
  },
  "/femcoders-quienes-somos": {
    title: "Quiénes somos: misión, visión y valores | FemCoders Club",
    description:
      "Somos una comunidad de mujeres en tecnología nacida en Barcelona en 2023. Conoce nuestra misión, nuestra visión y los valores con los que trabajamos juntas.",
    contenidoHtml: quienesSomosHtml(),
    imagen: {
      ruta: "/og-quienes-somos.jpg",
      ancho: 1200,
      alto: 630,
      alt: "Cuatro mujeres de FemCoders Club se hacen un selfi sonriendo durante un evento",
    },
    /*
     * Grafo enlazado por `@id`: la Organization es la misma que declara
     * index.html (#organization), y la página, el sitio y el vídeo se citan
     * entre sí. Va aquí y no en el Helmet de AboutPage para que esté en el
     * HTML servido, que es lo que leen los rastreadores que no ejecutan JS.
     */
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ID_ORGANIZACION,
        name: "FemCoders Club",
        url: SITIO,
        logo: urlAbsoluta("/FemCodersClubLogo.png"),
        description:
          "Comunidad y asociación registrada que empodera a mujeres en el sector tecnológico, cerrando la brecha de género digital. Fundada en Barcelona en octubre de 2023, con más de 1.600 miembros y más de 40 eventos organizados.",
        foundingDate: "2023-10-24",
        email: "info@femcodersclub.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Barcelona",
          addressCountry: "ES",
        },
        // Desde scripts/fundadoras.ts: el equipo actual, cada una con su `@id`,
        // el mismo que usa /equipo para describirla. Las cofundadoras que ya
        // no están se quedan solo en la base de datos (decisión del 5 de
        // octubre de 2026). Sin `numberOfEmployees`: en una asociación de
        // voluntarias diría que tiene empleadas.
        founder: fundadorasJsonLd(),
        knowsAbout: [
          "mujeres en tecnología", "diversidad en tech", "desarrollo web", "JavaScript", "CSS", "HTML", "React", "inteligencia artificial", "open source",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": urlAbsoluta("/femcoders-quienes-somos"),
        name: "Quiénes somos — FemCoders Club",
        url: urlAbsoluta("/femcoders-quienes-somos"),
        description:
          "FemCoders Club es una asociación registrada fundada en Barcelona en octubre de 2023. Misión, visión y valores de la comunidad de mujeres en tecnología.",
        inLanguage: "es",
        isPartOf: { "@id": ID_SITIO },
        about: { "@id": ID_ORGANIZACION },
        mainEntity: { "@id": ID_ORGANIZACION },
        video: { "@id": ID_VIDEO },
      },
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": ID_VIDEO,
        name: VIDEO_COMUNIDAD.titulo,
        description: VIDEO_COMUNIDAD.descripcion,
        thumbnailUrl: urlAbsoluta(VIDEO_COMUNIDAD.miniatura),
        uploadDate: VIDEO_COMUNIDAD.fechaSubida,
        duration: `PT${VIDEO_COMUNIDAD.duracionSegundos}S`,
        contentUrl: urlAbsoluta(VIDEO_COMUNIDAD.archivo),
        inLanguage: "es",
        // El mismo vídeo en YouTube. Se enlaza, no se incrusta: sin `embedUrl`.
        sameAs: VIDEO_COMUNIDAD.youtube,
        publisher: { "@id": ID_ORGANIZACION },
      },
    ],
  },
  "/contacto": {
    // Metas y textos de src/features/Contact/contenido.ts, los mismos que lee
    // el Helmet de ContactPage.tsx: no hay copia que mantener.
    title: META_CONTACTO.titulo,
    description: META_CONTACTO.descripcion,
    contenidoHtml: contactoHtml(),
    imagen: { ruta: META_CONTACTO.imagen, ancho: 1200, alto: 630, alt: META_CONTACTO.imagenAlt },
    // La página, el punto de contacto de la Organization y la miga de pan.
    jsonLd: contactoJsonLd(),
  },
  "/login": {
    title: "Iniciar Sesión - FemCoders Club",
    description:
      "Accede a tu cuenta de FemCoders Club para participar en nuestra comunidad tech.",
  },

  // Los mismos textos que lee el <Helmet> de RegisterForm.tsx.
  "/register": {
    title: META_REGISTRO.titulo,
    description: META_REGISTRO.descripcion,
  },

  // Esta no tenía `<Helmet>` en ningún sitio: su texto se escribe aquí.
  "/baja-email": {
    title: "Dar de baja tu correo - FemCoders Club",
    description:
      "Gestiona si quieres seguir recibiendo los correos de FemCoders Club. Puedes volver a suscribirte cuando te apetezca.",
  },
};
