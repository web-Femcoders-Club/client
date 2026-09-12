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
}

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
