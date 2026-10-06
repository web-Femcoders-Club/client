/*
 * Textos de /eventos, en un solo sitio. Los pintan las secciones de
 * src/features/Events/components. Los eventos no están aquí: llegan de la
 * base de datos (sincronizada con Eventbrite).
 */
import { CIFRAS_COMUNIDAD } from "../../data/cifrasComunidad";
import { REDES_SOCIALES } from "../../data/redesSociales";

export const PRESENTACION_EVENTOS = {
  antetitulo: "FemCoders Club",
  titulo: { texto: "Eventos para mujeres en", destacado: "tecnología" },
  lema: "Encuentros para aprender, conectar, compartir experiencias y crecer juntas.",
  parrafos: [
    "Organizamos eventos presenciales en Barcelona y sesiones online con profesionales del sector: charlas, talleres, encuentros y espacios de networking sobre tecnología, inteligencia artificial, desarrollo profesional, liderazgo y mucho más.",
    `Llevamos más de ${CIFRAS_COMUNIDAD.eventos} eventos creando oportunidades para conectar y seguir creciendo, estés dando tus primeros pasos o lleves años formando parte del sector.`,
  ],
  formatos: ["Charlas", "Talleres", "Encuentros", "Networking"],
  botones: {
    pasados: "Ver eventos pasados",
    ponentes: "Conoce a las ponentes",
  },
};

export const PROXIMOS_EVENTOS = {
  titulo: "Próximos eventos",
  reservar: "Reserva tu plaza",
  sinEventos: {
    titulo: "¡Grandes cosas están por venir!",
    texto:
      "Estamos preparando los próximos encuentros. Síguenos en redes para enterarte la primera cuando abramos inscripciones.",
    redes: [
      { nombre: "Síguenos en LinkedIn", url: REDES_SOCIALES.linkedin },
      { nombre: "Instagram", url: REDES_SOCIALES.instagram },
    ],
  },
};

export interface FotoPonente {
  src: string;
  /** Pie de foto: quién es y de qué habló. También describe la imagen. */
  texto: string;
}

export const PONENTES = {
  antetitulo: "Ponentes",
  titulo: { texto: "Expertas tecnológicas que lideran el cambio en el sector", destacado: "tech" },
  texto:
    "FemCoders Club conecta a mujeres profesionales del sector tecnológico con talento emergente a través de eventos presenciales y online. Participan mujeres referentes que, desde distintos ámbitos de la tecnología, comparten conocimientos, experiencias y reflexiones para inspirar, visibilizar y apoyar el crecimiento profesional de otras mujeres en el sector.",
  fotos: [
    {
      src: "/assets/eventos2026/ponencias-femeninas-femCodersClub.webp",
      texto:
        "Ponencias femeninas en el evento de FemCoders Club, destacando el talento y la experiencia de nuestras ponentes en el sector tecnológico.",
    },
    {
      src: "/assets/eventos2026/eventoJenniferNeyra.webp",
      texto:
        "Segundo taller presencial con Jennifer C. Neyra en el Canòdrom: cómo construir y comunicar tu propuesta de valor para destacar en los procesos de selección del sector IT.",
    },
    {
      src: "/evento-InfoJobs-NttData-femCodersClub.png",
      texto:
        "Liderando la revolución de la IA con talento femenino en tecnología, en colaboración con InfoJobs y NTT Data.",
    },
    {
      src: "/evento-mesQA-AnaLuciaSilva-SilvinaLucero-femcodersClub.png",
      texto:
        "Participación de Ana Lucía Silva y Silvina Lucero en el Mes del QA. Hablamos sobre accesibilidad en el ciclo de QA y cómo convertir requisitos en éxito.",
    },
    {
      src: "/NadiaSoledadCavalleri-entrevista-femCodersClub.png",
      texto:
        "Entrevista con Nadia Soledad Cavalleri, experta en QA y ponente internacional. Un espacio online para aprender, inspirarse y preguntar en directo.",
    },
    {
      src: "/DataConnect-evento-femCodersClub-ponentes.png",
      texto:
        "En el evento Data Connect: Inspire ideas. Learn from experts. Grow together!, exploramos el poder de los datos con la colaboración de InfoJobs. Glovo y LeWagon.",
    },
    {
      src: "/ponentesEventoInfoJobs.jpg",
      texto:
        "Gracias a InfoJobs y a las increíbles mujeres líderes que nos inspiraron en este evento, impulsando el talento femenino en tecnología.",
    },
    {
      src: "/assets/Eventos2025/AnaLuciaSilva-IrinaIchim-femCodersClub.png",
      texto:
        "En el evento 'Iníciate en programación', Ana Lucía Silva mostró proyectos en Realidad Aumentada con Glitch y A-Frame. Gilda Irina Ichim presentó un proyecto interactivo con CodePen y Three.js.",
    },
    {
      src: "/aurearodríguez.jpg",
      texto:
        "Àurea Rodríguez, fuente de inspiración para la comunidad FemCoders Club.",
    },
    {
      src: "/AdoptaUnJunior.png",
      texto:
        "En el evento Adopta Un Junior, entrevistamos a las fundadoras sobre su valioso trabajo.",
    },
    {
      src: "/AureaRodriguezMarinaAlves.jpg",
      texto:
        "Àurea Rodríguez y Marina Altés liderando una sesión sobre los últimos avances en inteligencia artificial.",
    },
    {
      src: "/carmenAnsio.jpg",
      texto:
        "Carmen Ansio, especialista en sistemas de diseño, uniendo diseño y desarrollo web.",
    },
    {
      src: "/ErikaVicente.jpg",
      texto:
        "Erika Vicente: Analista de datos y ponente destacada en el evento del Día Internacional de la Mujer.",
    },
    {
      src: "/eventoAntesMuertaQueSinIA.jpg",
      texto:
        "Compartiendo un momento especial con Àurea Rodríguez, una verdadera inspiración para FemCoders Club.",
    },
    {
      src: "/femCodersClubCarmenAnsio.jpg",
      texto:
        "Celebrando junto a Carmen Ansio, cuya visión y liderazgo inspiran a toda la comunidad femCoders Club.",
    },
    {
      src: "/femcodersCriteo.jpg",
      texto:
        "Agradecidas a Criteo y Marina Altés por su apoyo y colaboración en nuestro evento: Antes Muerta que Sin IA.",
    },
    {
      src: "/femCodersFactorial.jpg",
      texto:
        "Gran evento en Factorial, aprendiendo sobre soluciones tecnológicas sostenibles con María Alexandra Galarza.",
    },
    {
      src: "/martaDiez.jpg",
      texto:
        "Inspirándonos con Marta Díez Asensio, desarrolladora y asesora en blockchain, en el evento del 8 de Marzo.",
    },
    {
      src: "/ponentesEventoGlovo.jpg",
      texto:
        "En Glovo con las ponentes del evento 'Análisis profundo sobre el Testing en Backend y los Obstáculos de Escalabilidad'.",
    },
    {
      src: "/eventoGitHub.png",
      texto:
        "Evento online con Mari Carmen, aprendiendo a customizar tu perfil de GitHub.",
    },
    {
      src: "/ponentesUnlockingData.jpg",
      texto:
        "Unlocking Data: Visualización y métricas esenciales para el éxito, con las brillantes Alba Vicente Olmo y Patricia Márquez Valle.",
    },
    {
      src: "/SarahDresden.jpg",
      texto:
        "Disfrutando de la experiencia y talento de Sarah, destacada desarrolladora de juegos, en el evento del 8 de Marzo.",
    },
    {
      src: "/Laure.png",
      texto:
        "Explorando cómo la gestión emocional puede ser la clave para el éxito personal en todas las áreas de la vida.",
    },
    {
      src: "/unlockingDataAlba.jpg",
      texto:
        "Disfrutando de la experiencia en Unlocking Data con la talentosa Alba Vicente Olmo, aprendiendo sobre visualización de datos.",
    },
    {
      src: "/unlockingDataPatricia.jpg",
      texto:
        "Disfrutando de la experiencia en Unlocking Data con la brillante Patricia Márquez Valle, explorando métricas clave para el éxito.",
    },
    {
      src: "/PonentesMesaRedondaAdevinta.JPG",
      texto:
        "Espectacular evento: Mesa redonda sobre mujeres en tecnología, explorando los retos y oportunidades en el campo.",
    },
    {
      src: "/AsiaNoble.png",
      texto:
        "Workshop con Asia Noble: Predice la brecha salarial de género con IA, explorando técnicas de análisis de datos con Python y Pandas.",
    },
    {
      src: "/CarolinaMouradas.png",
      texto:
        "De la mano de Carolina Muradas, exploramos cómo la IA está transformando el mundo laboral.",
    },
    {
      src: "/LauraPourtier.png",
      texto:
        "De la mano de Laura Pourtier, analizamos la rentabilidad de Walmart utilizando Tableau en colaboración con Le Wagon. Un evento imprescindible para los apasionados por el análisis de datos y la tecnología.",
    },
    {
      src: "/DanielaTrifu-experta-en-ciberseguridad.png",
      texto:
        "Daniela Trifu, referente en ciberseguridad, aportando su valiosa experiencia durante el evento 'Ciberseguridad: Catch Me If You Can: Malware Hide and Seek'",
    },
    {
      src: "/Yeraldyn-Salazar-Cybersecurity-Teacher.png",
      texto:
        "Yeraldin Salazar, especialista en ciberseguridad, brindando su visión experta en el evento 'Ciberseguridad: Catch Me If You Can: Malware Hide and Seek''.",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/AnnaVia.png",
      texto:
        "Anna Vía, Product Manager de Machine Learning en Adevinta, compartió su conocimiento en la presentación 'Desbloqueando el potencial de IA: del problema al impacto', durante un evento organizado con el apoyo de Le Wagon.",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/ponentePaulaOses.png",
      texto:
        "Paula Oses, ingeniera de IA en IAG, presentó 'Construyendo tu propio modelo Rag' en el evento organizado con el apoyo de Le Wagon.",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/femcodersclubyponentes.png",
      texto:
        "En colaboración con Le Wagon, femCoders Club organizó un evento sobre Machine Learning, donde las ponentes compartieron su conocimiento y experiencia en el campo.",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/LiliDemarco-ponente.png",
      texto:
        "Liliana, una de las cofundadoras más queridas de femCoders Club, nos inspiró con su presentación 'Soft Skill: Comunicación Asertiva' en un evento organizado junto a Canodrum.",
    },
    {
      src: "/assets/semRush/dariaNaidikova.jpg",
      texto:
        "Daria Naidikova, desarrolladora front-end en Semrush, compartió estrategias clave sobre cómo mejorar la accesibilidad en productos digitales, inspirando a nuestra comunidad a crear experiencias web inclusivas para todos.",
    },
    {
      src: "/assets/semRush/crisMouta.jpg",
      texto:
        "Cris Mouta, arquitecta convertida en programadora y formadora fullstack, nos mostró los fundamentos de la Programación Orientada a Objetos (POO), destacando la importancia de la creatividad y pasión en el desarrollo de software.",
    },
    {
      src: "/assets/UltimosEventos2024/rocioCejudo.jpg",
      texto:
        "Rocío Cejudo, experta en accesibilidad y ciberseguridad, compartió valiosas estrategias para crear experiencias digitales más seguras e inclusivas en su charla.",
    },
    {
      src: "/assets/UltimosEventos2024/lorenaSalvador.jpg",
      texto:
        "Lorena Salvador abordó cómo diseñar webs y aplicaciones teniendo en cuenta la accesibilidad, destacando buenas prácticas para garantizar experiencias inclusivas para todos.",
    },
  ] as FotoPonente[],
};
