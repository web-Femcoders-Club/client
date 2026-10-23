/*
 * Textos de /codigo-de-conducta, en un solo sitio. Los pinta
 * CodigoConductaPage.tsx y los convierte scripts/contenidoCodigoConducta.ts
 * para el HTML servido.
 *
 * El original está en el Drive de la asociación («Código de conducta del
 * programa piloto de proyectos en grupo»): si se cambia allí, hay que copiar
 * el cambio aquí, porque la web no lo lee del Drive.
 *
 * Dos partes: lo que vale para toda la comunidad y lo de los proyectos. Dentro
 * de los proyectos, primero las normas comunes a cualquier proyecto en grupo y
 * después lo propio de cada programa. Un programa nuevo es una entrada más en
 * PROYECTOS.programas, con su `id` para poder enlazarlo directamente.
 *
 * Cada bloque es un párrafo (texto) o una lista (array de textos). Donde
 * aparece CORREO_CODIGO, quien lo pinta lo convierte en enlace.
 */

export const CORREO_CODIGO = "info@femcodersclub.com";

export type Bloque = string | readonly string[];

export type Apartado = {
  titulo: string;
  bloques: readonly Bloque[];
};

export type Seccion = {
  /* Ancla de la sección: /codigo-de-conducta#<id>. */
  id: string;
  titulo: string;
  bloques?: readonly Bloque[];
  apartados: readonly Apartado[];
};

/* Metas de la página: las leen el Helmet y el prerender (scripts/spaRoutesMeta.ts). */
export const META_CODIGO = {
  titulo: "Código de conducta | FemCoders Club",
  descripcion:
    "Las normas de convivencia de FemCoders Club en eventos, Slack, redes y programas, y las de los proyectos en grupo de la comunidad.",
} as const;

export const CABECERA = {
  antetitulo: "Comunidad",
  titulo: { texto: "Código de", destacado: "conducta" },
  entradilla:
    "Las normas con las que convivimos en FemCoders Club. Primero, las que valen para toda la comunidad; después, las de los proyectos en grupo y las de cada programa.",
  vigor: { fecha: "2026-10-20", texto: "Fecha de entrada en vigor: 20.10.2026" },
  indice: "En esta página",
} as const;

export const CODIGO_COMUNIDAD: Seccion = {
  id: "comunidad",
  titulo: "Para toda la comunidad",
  apartados: [
    {
      titulo: "Idea general",
      bloques: [
        "En FemCoders Club se espera respeto en todo momento, y el acoso y el abuso no se toleran nunca. Ante todo, sentido común: educación, respeto y tolerancia hacia toda la comunidad.",
        "Este código se aplica a todas las personas que forman parte de la comunidad (participantes, mentoría, voluntariado y organización) y a todos sus espacios: eventos presenciales y online, Slack, redes sociales, GitHub y las sesiones de los programas.",
      ],
    },
    {
      titulo: "Qué se considera acoso",
      bloques: [
        "Se considera acoso:",
        [
          "Los comentarios ofensivos, verbales o escritos, sobre género, edad, orientación sexual, discapacidad, aspecto físico, tamaño corporal, raza, religión, clase social o situación económica.",
          "Interrumpir de forma sostenida charlas u otros eventos.",
          "En general, cualquier conducta que genere incomodidad a otra persona. Eso ya es motivo suficiente para dejar de hacerla.",
        ],
        "Esta norma se aplica igualmente a la mentoría, al voluntariado y a la organización.",
      ],
    },
    {
      titulo: "Conversaciones constructivas y contenido apropiado",
      bloques: [
        [
          "Las diferencias de opinión son bienvenidas siempre que se expresen con respeto. Se debaten ideas, no se ataca a las personas.",
          "No se permite compartir contenido NSFW u obsceno: texto, imágenes, gifs, vídeos o enlaces con desnudez, contenido sexual explícito, violencia gráfica o material perturbador.",
        ],
      ],
    },
    {
      titulo: "Legalidad y derechos de autor",
      bloques: [
        [
          "No se permite compartir de forma ilegal material protegido por derechos de autor, ni con enlaces de descarga ni distribuyendo archivos PDF, salvo que se trate de contenidos de libre distribución.",
          "No se permite ninguna práctica ilegal, como la piratería o el hacking. Las actividades educativas de hacking ético (pentesting o ciberseguridad) sí pueden desarrollarse sin problema.",
        ],
      ],
    },
    {
      titulo: "Un espacio para aprender y compartir",
      bloques: [
        "Estamos aquí para aprender, compartir, ayudar y divertirnos, y en esta comunidad nadie es más que nadie. Se respetan todas las preferencias por un lenguaje, framework, sistema operativo o herramienta: no se discute ni se adoctrina, y cada persona tiene su opinión.",
        "Preguntar siempre es bienvenido. Nadie tiene que justificar una duda, y quien responde lo hace con paciencia.",
      ],
    },
    {
      titulo: "Moderación y cómo comunicar un problema",
      bloques: [
        "El equipo de moderación de FemCoders Club vela por que se cumplan estas normas y puede advertir, silenciar, expulsar o vetar a quien las incumpla. Se espera respeto hacia sus decisiones.",
        `Si algo te incomoda o crees que no se está cumpliendo este código, puedes escribir a ${CORREO_CODIGO} o, si participas en un proyecto, comentarlo con quien acompaña tu grupo. Se tratará con discreción y con respeto hacia todas las personas implicadas.`,
        "El incumplimiento de estas normas puede derivar en sanciones temporales o en la expulsión. Ante una falta, lo primero es conversar y buscar una solución; si la conducta se repite o es grave, se aplicarán esas medidas.",
      ],
    },
    {
      titulo: "Aceptación del código",
      bloques: [
        `Al formar parte de la comunidad aceptas este código. Si te queda alguna duda, escríbenos a ${CORREO_CODIGO}.`,
      ],
    },
  ],
};

export const PROYECTOS: {
  id: string;
  titulo: string;
  entradilla: string;
  comunes: Seccion;
  programas: readonly Seccion[];
} = {
  id: "proyectos",
  titulo: "En los proyectos de la comunidad",
  entradilla:
    "Además de las normas de toda la comunidad, en los proyectos en grupo y las mentorías se aplican estas. Cada proyecto tiene un equipo de acompañamiento que orienta al grupo; en cada programa se explica quién lo forma.",

  comunes: {
    id: "proyectos-en-grupo",
    titulo: "En todos los proyectos en grupo",
    apartados: [
      {
        titulo: "Compromiso y comunicación",
        bloques: [
          [
            "Participamos con constancia durante todo el proyecto y dedicamos el tiempo acordado dentro del grupo.",
            "Se avisa con tiempo si no se puede continuar o si una semana resulta imposible, para que el grupo pueda reorganizarse.",
            "Cumplimos las tareas que asumimos y pedimos ayuda cuando algo nos bloquea, sin esperar al último día.",
            "El proyecto es del grupo: todas las personas participan en el código y en las decisiones.",
            "Asistimos a las sesiones de mentoría con puntualidad y, si no es posible, se avisa antes.",
            "Slack es el canal principal del proyecto, para las dudas del día a día y para los avisos. Se responde en un plazo razonable y se avisa si va a tardarse más.",
            "Escribimos con claridad y con tono amable, usamos hilos para que las conversaciones sean fáciles de seguir y dejamos por escrito las decisiones importantes.",
            "El equipo de acompañamiento orienta y resuelve dudas, y las personas participantes construyen el proyecto.",
          ],
        ],
      },
      {
        titulo: "GitHub, código y portfolio",
        bloques: [
          [
            "Todo el código se integra mediante pull requests, que revisa el equipo de acompañamiento, y los commits siguen la especificación Conventional Commits.",
            "Las revisiones se hacen con tono constructivo: se señala lo que funciona, se explica lo que se puede mejorar y se proponen alternativas.",
            "El equipo de acompañamiento asigna las issues en el Project, para que se vea con claridad quién hace qué.",
            "Citamos las fuentes y el código ajeno que utilicemos.",
            "El proyecto se publica en GitHub y todas las personas que contribuyen pueden mostrarlo en su portfolio y en entrevistas.",
            "La autoría se reconoce por el historial de commits y pull requests, y ninguna aportación se atribuye a otra persona.",
            "Si alguien deja el proyecto, sus aportaciones ya integradas permanecen en él y se le sigue reconociendo la autoría.",
          ],
        ],
      },
      {
        titulo: "Sesiones, grabaciones e imagen",
        bloques: [
          [
            "Si las sesiones se graban, se explica al presentar el proyecto.",
            "Quien no quiera aparecer en la grabación puede apagar la cámara.",
            "Las grabaciones se usan para el proyecto y no se publican sin el consentimiento de las personas que aparecen en ellas.",
            "Las fotos, las capturas de pantalla y los nombres se publican en la web y en las redes de FemCoders Club solo con el consentimiento de cada persona.",
            "Nadie graba, captura ni comparte por su cuenta las sesiones ni las conversaciones del grupo.",
          ],
        ],
      },
      {
        titulo: "Uso de la inteligencia artificial",
        bloques: [
          [
            "Podemos usar herramientas de IA como apoyo para aprender y desarrollar, siempre con criterio.",
            "Entendemos el código que subimos: si no supiéramos explicarlo en una entrevista, todavía no está listo para entrar en el repositorio.",
            "No compartimos con herramientas externas las credenciales del proyecto ni datos personales de otras personas.",
          ],
        ],
      },
    ],
  },

  programas: [
    {
      id: "piloto-vonage",
      titulo: "Programa piloto de proyectos en grupo con Vonage",
      bloques: [
        "En el programa piloto de proyectos en grupo y mentorías con Vonage, el equipo de acompañamiento está formado por la mentoría y las tech leads.",
        [
          "El programa dura seis semanas, con una sesión de mentoría cada semana.",
          "Las sesiones se graban, tal como se explicó al presentar el programa.",
        ],
      ],
      apartados: [
        {
          titulo: "Créditos y claves de Vonage",
          bloques: [
            [
              "Los créditos de API que aporta Vonage se usan solo para desarrollar el proyecto del grupo.",
              "Las claves y credenciales no se comparten fuera del grupo y nunca se suben al repositorio ni a ningún espacio público, ni se incluyen datos personales en el código.",
              "Quien detecte una clave expuesta o un uso indebido de los créditos lo comunica enseguida al equipo de acompañamiento, para poder revocarla.",
            ],
          ],
        },
        {
          titulo: "Aceptación del código",
          bloques: [
            `Al participar en el programa aceptas este código. Te pedimos que lo leas antes del inicio, el 26 de octubre, y que escribas a ${CORREO_CODIGO} si te queda alguna duda.`,
          ],
        },
      ],
    },
  ],
};
