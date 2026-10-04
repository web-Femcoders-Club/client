/*
 * Textos de «Quiénes somos». Fuente única: los pintan las secciones de la
 * página, y el build los escribe en el HTML servido (scripts/spaRoutesMeta.ts)
 * y en public/llms.txt, para buscadores y modelos que no ejecutan JavaScript.
 * Si cambias un texto aquí, cambia en los tres sitios.
 *
 * Sin React: lo importa también el build, que corre en Node. Cada párrafo es
 * una lista de fragmentos: texto, negrita o enlace interno.
 */

export type Fragmento =
  string | { negrita: Fragmento[] } | { enlace: string; texto: string };

export type Parrafo = Fragmento[];

/** Título de sección: la parte final va con el trazo de rotulador. */
export interface Titulo {
  texto: string;
  destacado: string;
}

export const PRESENTACION = {
  antetitulo: "Quiénes somos",
  marca: "FemCoders Club",
  titulo: {
    texto: "Mujeres que impulsan a otras mujeres en",
    destacado: "tecnología",
  },
  parrafo: [
    "Queremos cerrar la brecha de género en el ámbito digital y que la tecnología sea un lugar donde cada mujer encuentre su sitio. Somos una comunidad de mujeres vinculadas al mundo de la tecnología que ",
    {
      negrita: [
        "trabajamos para que más mujeres participen, crezcan y lideren en el sector",
      ],
    },
    ". Creamos espacios donde compartir conocimiento, generar conexiones y abrir oportunidades reales para avanzar juntas.",
  ] as Parrafo,
};

export const PROPOSITO = {
  antetitulo: "Nuestro propósito",
  titulo: {
    texto: "Por qué existimos y",
    destacado: "hacia dónde vamos",
  } as Titulo,
  mision: {
    nombre: "Misión",
    frase:
      "Empoderar e impulsar a las mujeres en el desarrollo web y la tecnología.",
    parrafos: [
      [
        "Trabajamos para cerrar la brecha de género en la tecnología con una comunidad que fortalece habilidades, conocimientos y confianza, a través de ",
        {
          negrita: [
            { enlace: "/eventos", texto: "eventos" },
            ", talleres y ",
            { enlace: "/blog/recursos", texto: "recursos" },
          ],
        },
        " que promueven la inclusión, la equidad y la diversidad.",
      ],
      [
        "Queremos que cada mujer tenga herramientas para avanzar profesionalmente, compartir lo que sabe y descubrir nuevas oportunidades dentro del sector. Porque aumentar la presencia de mujeres en tecnología también significa ",
        {
          negrita: [
            "darles espacio para crear, decidir y liderar su futuro profesional",
          ],
        },
        ".",
      ],
    ] as Parrafo[],
  },
  vision: {
    nombre: "Visión",
    frase:
      "Un futuro en el que las mujeres lideren, innoven y den forma al mundo digital.",
    parrafos: [
      [
        "Aspiramos a un sector tecnológico equitativo e inclusivo, donde el talento y las oportunidades no estén condicionados por el género ni por el lugar de origen. Queremos contribuir a una industria en la que más mujeres ocupen espacios de decisión, impulsen nuevas ideas y sean referentes para las próximas generaciones.",
      ],
      [
        {
          negrita: [
            "Una tecnología más diversa no solo abre puertas: también transforma quién la crea y para quién se construye.",
          ],
        },
      ],
    ] as Parrafo[],
  },
};

export const COMO_LO_HACEMOS = {
  antetitulo: "Cómo lo hacemos",
  titulo: {
    texto: "Creamos espacios para conectar, compartir y",
    destacado: "crecer",
  } as Titulo,
  parrafo: [
    "Reunimos a mujeres STEM en espacios donde puedan conocerse, compartir experiencias y crear conexiones que impulsen su desarrollo personal y profesional. Nuestros encuentros abordan la tecnología desde diferentes perspectivas: desde conocimientos técnicos hasta liderazgo, soft skills, bienestar profesional y oportunidades dentro del sector.",
  ] as Parrafo,
  cierre:
    "Porque cuando una mujer comparte su experiencia, no solo cuenta su historia: también puede abrir camino para muchas otras.",
  tarjetas: [
    {
      id: "referentes",
      nombre: "Referentes",
      parrafo: [
        "Damos visibilidad a mujeres que ya están construyendo su camino profesional, invitándolas a compartir su experiencia como ponentes y referentes. ",
        {
          negrita: [
            "Queremos que otras mujeres puedan verse reflejadas en ellas, descubrir nuevos caminos y sentir que también pueden llegar hasta allí.",
          ],
        },
      ] as Parrafo,
    },
    {
      id: "colaboraciones",
      nombre: "Colaboraciones",
      parrafo: [
        "Colaboramos con empresas, organizaciones y profesionales para acercar nuestra comunidad al ecosistema tecnológico y generar encuentros de los que puedan surgir nuevas ideas, relaciones y oportunidades.",
      ] as Parrafo,
    },
  ],
};

export const COMPROMISO = {
  antetitulo: "Compromiso y valores",
  titulo: {
    texto: "Nuestro compromiso con una tecnología",
    destacado: "más diversa",
  } as Titulo,
  parrafos: [
    [
      "Trabajamos para contribuir a reducir la brecha de género en el sector tecnológico, fomentar la inclusión y ",
      {
        negrita: [
          "generar oportunidades para que más mujeres puedan desarrollarse, avanzar y ocupar su espacio dentro de la industria",
        ],
      },
      ".",
    ],
    [
      "Queremos ser un punto de encuentro donde las mujeres encuentren referentes, conexiones, recursos y oportunidades para crecer personal y profesionalmente. Un espacio donde compartir experiencias, apoyarse, crear nuevas relaciones y sentirse parte de una comunidad que avanza junta.",
    ],
    [
      "Nuestro compromiso también pasa por ",
      {
        negrita: [
          "dar visibilidad al talento femenino que ya está transformando el sector",
        ],
      },
      ", porque cada mujer que comparte su experiencia puede convertirse en referente para muchas otras.",
    ],
    [
      "Si quieres conocer mejor lo que hacemos, descubre nuestras iniciativas en el ",
      { negrita: [{ enlace: "/blog", texto: "blog" }] },
      " o ",
      { negrita: [{ enlace: "/contacto", texto: "escríbenos" }] },
      " y forma parte de la comunidad.",
    ],
  ] as Parrafo[],
};

export const VALORES = {
  titulo: "Nuestros valores",
  lista: [
    {
      id: "equidad",
      nombre: "Equidad",
      descripcion:
        "Las mujeres deben tener las mismas oportunidades de desarrollo profesional que los hombres, sin discriminación por género.",
    },
    {
      id: "inclusion",
      nombre: "Inclusión",
      descripcion:
        "Las mujeres deben sentirse bienvenidas y apoyadas en el sector IT, independientemente de sus antecedentes o experiencias.",
    },
    {
      id: "visibilidad",
      nombre: "Visibilidad",
      descripcion:
        "Los logros de las mujeres en el sector IT deben ser reconocidos y celebrados.",
    },
    {
      id: "desarrollo",
      nombre: "Desarrollo profesional",
      descripcion:
        "Las mujeres deben tener acceso a oportunidades de desarrollo profesional que les permitan alcanzar su máximo potencial.",
    },
    {
      id: "colaboracion",
      nombre: "Colaboración",
      descripcion:
        "Fomentar un ambiente donde las mujeres trabajen juntas de manera colaborativa, compartiendo conocimientos y experiencias para impulsar el crecimiento mutuo.",
    },
    {
      id: "empoderamiento",
      nombre: "Empoderamiento",
      descripcion:
        "Capacitar a las mujeres para que tomen el control de sus carreras en tecnología, brindándoles las herramientas y el apoyo necesarios para alcanzar sus metas.",
    },
    {
      id: "diversidad",
      nombre: "Diversidad",
      descripcion:
        "Reconocer y valorar las diversas perspectivas, habilidades y experiencias que cada mujer aporta al campo de la tecnología, promoviendo un entorno inclusivo y enriquecedor.",
    },
    {
      id: "etica",
      nombre: "Ética",
      descripcion:
        "Promover prácticas éticas en el trabajo tecnológico, priorizando la integridad, la transparencia y el respeto hacia los demás y hacia la sociedad en general.",
    },
    {
      id: "innovacion",
      nombre: "Innovación",
      descripcion:
        "Fomentar la creatividad y la innovación entre las mujeres en tecnología, alentándolas a pensar de manera crítica y a proponer soluciones disruptivas para los desafíos actuales y futuros.",
    },
    {
      id: "equilibrio",
      nombre: "Equilibrio entre vida laboral y personal",
      descripcion:
        "Promover un equilibrio saludable entre la vida laboral y personal, reconociendo la importancia de cuidar el bienestar físico, emocional y mental de las mujeres en la industria tecnológica.",
    },
    {
      id: "responsabilidad",
      nombre: "Responsabilidad social",
      descripcion:
        "Comprometerse con la responsabilidad social corporativa, participando en iniciativas y proyectos que tengan un impacto positivo en la comunidad y en el mundo en general.",
    },
  ],
};

export interface Idea {
  id: string;
  titulo: string;
  descripcion: Parrafo;
}

export const IDEAS = {
  antetitulo: "Nuestras ideas",
  titulo: {
    texto: "Lo que ya hacemos y lo que",
    destacado: "queremos construir",
  } as Titulo,
  entradilla:
    "Muchas de las ideas con las que empezamos ya son una realidad. Otras siguen en camino, y la comunidad puede ayudarnos a hacerlas posibles.",
  enMarcha: {
    titulo: "Ya en marcha",
    lista: [
      {
        id: "mentorias",
        titulo: "Mentorías",
        descripcion: [
          "Mujeres con experiencia acompañan a quienes empiezan o quieren dar el siguiente paso. ",
          { enlace: "/mentoria", texto: "Ver mentorías (con tu cuenta)" },
        ],
      },
      {
        id: "recursos",
        titulo: "Recursos y herramientas",
        descripcion: [
          "Artículos y materiales gratuitos para aprender a tu ritmo. ",
          { enlace: "/blog/recursos", texto: "Ver recursos" },
        ],
      },
      {
        id: "eventos",
        titulo: "Eventos tecnológicos",
        descripcion: [
          "Charlas, talleres y hackathons, presenciales y online. ",
          { enlace: "/eventos", texto: "Ver eventos" },
        ],
      },
      {
        id: "networking",
        titulo: "Espacios de networking",
        descripcion: [
          "Encuentros para conectar, compartir experiencias y crear relaciones profesionales.",
        ],
      },
      {
        id: "alianzas",
        titulo: "Alianzas con empresas",
        descripcion: [
          "Colaboramos con empresas y organizaciones que comparten nuestra misión.",
        ],
      },
      {
        id: "comunidad-virtual",
        titulo: "Comunidad virtual",
        descripcion: [
          "Un espacio en línea para hacer preguntas, compartir recursos y apoyarnos.",
        ],
      },
    ] as Idea[],
  },
  enElHorizonte: {
    titulo: "En el horizonte",
    lista: [
      {
        id: "directorio",
        titulo: "Directorio de miembros",
        descripcion: [
          "Un directorio de mujeres de la comunidad, para darse a conocer y encontrarse.",
        ],
      },
      {
        id: "coworking",
        titulo: "Coworking y laboratorios",
        descripcion: [
          "Espacios de trabajo colaborativo donde crear y diseñar juntas.",
        ],
      },
      {
        id: "grupos",
        titulo: "Grupos de interés",
        descripcion: [
          "Grupos sobre inteligencia artificial, ciberseguridad u otras áreas, para profundizar juntas.",
        ],
      },
      {
        id: "emprendimiento",
        titulo: "Programas de emprendimiento",
        descripcion: [
          "Asesoramiento y contactos para mujeres que emprenden en tecnología.",
        ],
      },
      {
        id: "concienciacion",
        titulo: "Campañas de concienciación",
        descripcion: [
          "Campañas sobre la importancia de la diversidad de género en la tecnología.",
        ],
      },
    ] as Idea[],
  },
  llamada:
    "¿Te gustaría participar en nuestras iniciativas o proponer una idea nueva?",
};
