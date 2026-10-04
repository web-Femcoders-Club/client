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
   * renderiza la página.
   */
  jsonLd?: Record<string, unknown>[];
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
    title: "Eventos Tech para Mujeres | FemCoders Club Barcelona",
    description:
      "Explora los mejores eventos tecnológicos para mujeres en Barcelona organizados por FemCoders Club. Talleres, conferencias, networking y oportunidades profesionales en el sector tech. Únete a la comunidad líder de mujeres en tecnología.",
  },
  "/equipo": {
    title: "Nuestro Equipo - FemCoders Club | Mujeres Líderes en Tecnología",
    description:
      "Conoce a las cofundadoras de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón e Isadora Matias. Líderes tech comprometidas con el empoderamiento femenino.",
  },
  "/femcoders-quienes-somos": {
    title: "FemCoders Club | Comunidad para Mujeres en Tecnología",
    description:
      "FemCoders Club es una comunidad que empodera a mujeres en el mundo tecnológico, cerrando la brecha de género digital. Conoce nuestra misión, visión y valores, y únete a nuestra comunidad inclusiva.",
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
          "Comunidad y asociación registrada que empodera a mujeres en el sector tecnológico, cerrando la brecha de género digital. Fundada en Barcelona en octubre de 2023, con más de 1.500 miembros y 40 eventos organizados.",
        foundingDate: "2023-10-24",
        email: "info@femcodersclub.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Barcelona",
          addressCountry: "ES",
        },
        // Liliana Dalmarco se mantiene a propósito aunque haya salido del
        // equipo visible (EQ1, issue #18): `founder` es quien fundó la
        // organización, un hecho histórico que no cambia. Sin
        // `numberOfEmployees`: en una asociación de voluntarias diría que
        // tiene seis empleadas, y el dato ya lo da `founder`.
        founder: [
          { "@type": "Person", name: "Irina Ichim", jobTitle: "Fullstack Software Developer & AI Specialist", sameAs: "https://www.linkedin.com/in/irina-ichim-desarrolladora" },
          { "@type": "Person", name: "Ana Lucía Silva Córdoba", jobTitle: "Fullstack Developer & Data Science", sameAs: "https://www.linkedin.com/in/ana-lucia-silva-cordoba" },
          { "@type": "Person", name: "Elvia Benedith", jobTitle: "Full-stack Web Developer", sameAs: "https://www.linkedin.com/in/elvia-benedith" },
          { "@type": "Person", name: "Silvina Lucero Calderón", jobTitle: "Full Stack Developer & QA", sameAs: "https://www.linkedin.com/in/silvina-lucero" },
          { "@type": "Person", name: "Liliana Dalmarco", jobTitle: "Fullstack Developer & Scrum Master", sameAs: "https://www.linkedin.com/in/lilianadalmarco" },
          { "@type": "Person", name: "Isadora Matias", jobTitle: "Full Stack Developer & Designer", sameAs: "https://www.linkedin.com/in/isadoramatias/" },
        ],
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
    title: "Contacto - FemCoders Club | Únete a Nuestra Comunidad Tech",
    description:
      "Conéctate con FemCoders Club. Únete a nuestra comunidad de mujeres en tecnología, participa en eventos, recibe mentoring o colabora en proyectos. ¡Tu voz importa!",
  },
  "/login": {
    title: "Iniciar Sesión - FemCoders Club",
    description:
      "Accede a tu cuenta de FemCoders Club para participar en nuestra comunidad tech.",
  },

  /*
   * Estas dos no tenían `<Helmet>` en ningún sitio, así que sus textos se
   * escriben aquí por primera vez.
   */
  "/register": {
    title: "Únete a FemCoders Club",
    description:
      "Crea tu cuenta para apuntarte a los eventos, guardar tus recursos favoritos y formar parte de la comunidad de mujeres en tecnología.",
  },
  "/baja-email": {
    title: "Dar de baja tu correo - FemCoders Club",
    description:
      "Gestiona si quieres seguir recibiendo los correos de FemCoders Club. Puedes volver a suscribirte cuando te apetezca.",
  },
};
