/*
 * Organizaciones con las que FemCoders Club ha colaborado.
 *
 * No hay tabla en la base de datos: la lista vive aquí. La página «Comunidad
 * real» del panel la cuenta y la pinta, y la sección «Empresas que han
 * confiado en nosotras» de /equipo la muestra con su imagen y sus años. Cada
 * organización ocupa UNA entrada aunque haya colaborado muchas veces —sus
 * colaboraciones van dentro—, así que el total es la longitud del array y no
 * puede haber duplicados por repetir evento.
 *
 * Se compiló el 2 de octubre de 2026 a partir de lo que ya contaba la web
 * (el antiguo carrusel de empresas, el JSON-LD de TeamPage, las noticias y el
 * carrusel de eventos) y se completó con Irina el 5 de octubre de 2026. Las
 * variantes de nombre (LeWagon / Le Wagon, Canodrom / Canòdrom…) están
 * unificadas en la entrada.
 *
 * Para añadir una organización: un objeto más. Para una colaboración nueva con
 * una que ya está: una línea más en su `colaboraciones`.
 */

export type TipoColaboradora =
  | "empresa"
  | "espacio"
  | "formacion"
  | "congreso"
  | "comunidad"
  | "plataforma"
  | "fundacion"
  | "institucion"
  | "asociacion";

export interface Colaboracion {
  /** `AAAA-MM-DD`, `AAAA-MM` o `AAAA`. Ausente cuando no se conoce. */
  fecha?: string;
  descripcion: string;
}

/*
 * Imagen para la web, en public-optimized (siempre WebP). `logo` se muestra
 * entero sobre blanco; `foto` (cuando no hay logo) se recorta a la caja, y
 * `encuadre: "izquierda"` la ancla a la izquierda para que no se corte lo
 * importante.
 */
export interface ImagenColaboradora {
  ruta: string;
  tipo: "logo" | "foto";
  encuadre?: "izquierda";
}

export interface Colaboradora {
  nombre: string;
  tipo: TipoColaboradora;
  imagen: ImagenColaboradora;
  /** Colaboración continua desde este año hasta hoy (PokeCode nos da las reuniones online). */
  desde?: number;
  colaboraciones: Colaboracion[];
}

export const ROTULO_TIPO: Record<TipoColaboradora, string> = {
  empresa: "Empresa",
  espacio: "Espacio",
  formacion: "Formación",
  congreso: "Congreso",
  comunidad: "Comunidad",
  plataforma: "Plataforma",
  fundacion: "Fundación",
  institucion: "Institución pública",
  asociacion: "Asociación",
};

const IMG = "/public-optimized/mobile";
const logo = (ruta: string): ImagenColaboradora => ({ ruta: `${IMG}/${ruta}`, tipo: "logo" });
const foto = (ruta: string, encuadre?: "izquierda"): ImagenColaboradora => ({
  ruta: `${IMG}/${ruta}`,
  tipo: "foto",
  encuadre,
});

/** Años distintos en que colaboró, de menor a mayor. Con `desde`, todos hasta el año en curso. */
export const aniosDeColaboracion = ({ desde, colaboraciones }: Colaboradora): number[] => {
  const anios = new Set(
    colaboraciones.flatMap(({ fecha }) => (fecha ? [Number(fecha.slice(0, 4))] : [])),
  );
  if (desde) {
    for (let anio = desde; anio <= new Date().getFullYear(); anio++) anios.add(anio);
  }
  return [...anios].sort((a, b) => a - b);
};

export const COLABORADORAS: Colaboradora[] = [
  {
    nombre: "InfoJobs",
    tipo: "empresa",
    imagen: logo("logoinfojobs.webp"),
    colaboraciones: [
      { fecha: "2025-03-13", descripcion: "El sector tecnológico necesita de más mujeres" },
      { fecha: "2025-05-28", descripcion: "DataConnect, en sus oficinas" },
      { fecha: "2025-10-29", descripcion: "Liderar la revolución de la IA con talento femenino, con NTT DATA" },
      { fecha: "2026-03-26", descripcion: "Estructuras en movimiento (8M)" },
    ],
  },
  {
    nombre: "Glovo",
    tipo: "empresa",
    imagen: logo("glovoLogo.webp"),
    colaboraciones: [
      { fecha: "2024-04-22", descripcion: "Backend Testing & Scalability Pitfalls, en sus oficinas" },
      { fecha: "2025-05-28", descripcion: "DataConnect" },
      { fecha: "2025-10-11", descripcion: "Sede de HackBarna 2025" },
    ],
  },
  {
    nombre: "NTT DATA",
    tipo: "empresa",
    imagen: foto("NTTData-InfoJobs-FemCodersClub.webp"),
    colaboraciones: [
      { fecha: "2025-10-29", descripcion: "Liderar la revolución de la IA con talento femenino" },
    ],
  },
  {
    nombre: "EY",
    tipo: "empresa",
    imagen: logo("assets/Eventos2025/ernst-young-logo.webp"),
    colaboraciones: [{ fecha: "2026-03-26", descripcion: "Estructuras en movimiento (8M), en InfoJobs" }],
  },
  {
    nombre: "Adevinta",
    tipo: "empresa",
    imagen: logo("logoAdevinta.webp"),
    colaboraciones: [
      { fecha: "2024-03-07", descripcion: "8M: Mujeres en Tecnología, retos y oportunidades" },
    ],
  },
  {
    nombre: "Between",
    tipo: "empresa",
    imagen: logo("logoBetween.webp"),
    colaboraciones: [
      { fecha: "2025-03-13", descripcion: "El sector tecnológico necesita de más mujeres, en InfoJobs" },
      { fecha: "2025-03", descripcion: "Ofertas de empleo para la comunidad" },
    ],
  },
  {
    nombre: "Oxigent",
    tipo: "empresa",
    imagen: logo("logoOxigent.webp"),
    colaboraciones: [
      { fecha: "2025-03-13", descripcion: "El sector tecnológico necesita de más mujeres, en InfoJobs" },
      { fecha: "2025-03", descripcion: "Ofertas de empleo para la comunidad" },
    ],
  },
  {
    nombre: "Keapps",
    tipo: "empresa",
    imagen: logo("assets/Eventos2025/logo-keaps.webp"),
    colaboraciones: [
      { fecha: "2025-03-13", descripcion: "El sector tecnológico necesita de más mujeres, en InfoJobs" },
    ],
  },
  {
    nombre: "K-LAGAN",
    tipo: "empresa",
    imagen: logo("assets/Eventos2025/logo-Klagan.webp"),
    colaboraciones: [
      { fecha: "2025-03-13", descripcion: "El sector tecnológico necesita de más mujeres, en InfoJobs" },
    ],
  },
  {
    nombre: "Lexy",
    tipo: "empresa",
    imagen: logo("assets/Eventos2025/mylexyco_logo.webp"),
    colaboraciones: [{ fecha: "2025-02", descripcion: "Ofertas de empleo para la comunidad" }],
  },
  {
    nombre: "Factorial HR",
    tipo: "empresa",
    imagen: logo("Factorial_logo_radical.webp"),
    colaboraciones: [{ fecha: "2024-05-16", descripcion: "Green Software" }],
  },
  {
    nombre: "Criteo",
    tipo: "empresa",
    imagen: logo("logoCriteo.webp"),
    colaboraciones: [{ fecha: "2024-05-29", descripcion: "Antes muerta que sin IA" }],
  },
  {
    nombre: "Dynatrace",
    tipo: "empresa",
    imagen: logo("logodynatrace.webp"),
    colaboraciones: [
      { fecha: "2024-06-19", descripcion: "Essential Visualization and Metrics for Success" },
    ],
  },
  {
    nombre: "Codurance",
    tipo: "empresa",
    imagen: logo("logo-codurance.webp"),
    colaboraciones: [
      { fecha: "2024-09-05", descripcion: "Catch Me If You Can: Malware Hide and Seek" },
    ],
  },
  {
    nombre: "Semrush",
    tipo: "empresa",
    imagen: logo("assets/semRush/logoSemRush.webp"),
    colaboraciones: [{ fecha: "2024-11-07", descripcion: "Accesibilidad y POO" }],
  },
  {
    nombre: "SEAT:CODE",
    tipo: "empresa",
    imagen: logo("assets/UltimosEventos2024/logoSeatCode.webp"),
    colaboraciones: [
      { fecha: "2024-11-28", descripcion: "Diseño, accesibilidad y ciberseguridad" },
    ],
  },
  {
    nombre: "PokeCode",
    tipo: "empresa",
    imagen: logo("logoPokeCode.webp"),
    desde: 2023,
    colaboraciones: [
      { fecha: "2023", descripcion: "Las reuniones online de la comunidad, desde 2023" },
      { fecha: "2026-05-27", descripcion: "Taller de Decidim con Elvia Benedith" },
    ],
  },
  {
    nombre: "Coboi Lab",
    tipo: "empresa",
    imagen: logo("assets/noticias/logo-coboi-lab.webp"),
    colaboraciones: [{ fecha: "2026", descripcion: "Alianza con la comunidad" }],
  },
  {
    nombre: "El Canòdrom",
    tipo: "espacio",
    imagen: logo("logocanodrom.webp"),
    colaboraciones: [
      { fecha: "2023-11-24", descripcion: "Presentación del club: Música y Código" },
      { fecha: "2024-03-18", descripcion: "Customiza tu perfil de GitHub" },
      { fecha: "2025-09-27", descripcion: "Taller: tu primera página web con HTML y CSS" },
      { descripcion: "Soft skills: comunicación asertiva" },
      { fecha: "2026-02-26", descripcion: "Taller con Jennifer C. Neyra" },
      { fecha: "2026-04-15", descripcion: "Soft skills" },
      { fecha: "2026-05-14", descripcion: "Customiza tu perfil de GitHub" },
      { fecha: "2026-05-27", descripcion: "Taller de Decidim" },
    ],
  },
  {
    nombre: "Le Wagon",
    tipo: "formacion",
    imagen: logo("LogoLeWagon.webp"),
    colaboraciones: [
      { fecha: "2024-06-27", descripcion: "Talleres de datos" },
      { fecha: "2024-09-19", descripcion: "Evento de Machine Learning" },
      { fecha: "2025-05-28", descripcion: "DataConnect" },
    ],
  },
  {
    nombre: "Factoría F5",
    tipo: "formacion",
    imagen: logo("logoFactoriaF5.webp"),
    colaboraciones: [
      { fecha: "2023-11-24", descripcion: "Presentación del club, con El Canòdrom" },
      { fecha: "2024-02-20", descripcion: "Las skills que necesitas para ser una UX Engineer" },
    ],
  },
  {
    nombre: "HackBarna",
    tipo: "congreso",
    imagen: logo("logoHackBarna.webp"),
    colaboraciones: [
      { fecha: "2025-10-11", descripcion: "Community Partner de HackBarna 2025" },
      { fecha: "2026-09-03", descripcion: "Sesión informativa del AI Summit 26" },
      { fecha: "2026-09-19", descripcion: "Community Partner de HackBarna AI Summit 26" },
    ],
  },
  {
    nombre: "Talent Arena",
    tipo: "congreso",
    imagen: foto("assets/noticias/talent-arena-2026-partnership.webp"),
    colaboraciones: [{ fecha: "2026-02", descripcion: "Community Partner de Talent Arena 2026" }],
  },
  {
    nombre: "Barcelona Cybersecurity Congress",
    tipo: "congreso",
    imagen: foto("assets/noticias/bcc26-femcodersclub.webp"),
    colaboraciones: [{ fecha: "2026-11-03", descripcion: "Embajadoras oficiales de BCC26" }],
  },
  {
    nombre: "SheHub",
    tipo: "comunidad",
    imagen: logo("logo-shehub.webp"),
    colaboraciones: [{ fecha: "2025-07-05", descripcion: "Alianza para impulsar el talento femenino" }],
  },
  {
    nombre: "TechFems",
    tipo: "comunidad",
    imagen: logo("assets/Eventos2025/techfems-logo.webp"),
    colaboraciones: [
      { fecha: "2024-03-07", descripcion: "Coorganizamos el 8M «Celebremos el Talento Tecnológico Femenino»" },
    ],
  },
  {
    nombre: "Women Techmakers",
    tipo: "comunidad",
    imagen: logo("assets/Eventos2025/women-techmakers-logo.webp"),
    colaboraciones: [{ fecha: "2025", descripcion: "Colaboración entre comunidades" }],
  },
  {
    nombre: "Actividades para Mujeres",
    tipo: "comunidad",
    imagen: foto("assets/noticias/alianza-actividades-para-mujeres.webp"),
    colaboraciones: [{ fecha: "2026", descripcion: "Alianza de impacto: juntas para poner a la mujer en el centro" }],
  },
  {
    nombre: "Claude Community House Barcelona",
    tipo: "comunidad",
    imagen: foto("assets/noticias/claude-community-house-barcelona.webp"),
    colaboraciones: [
      { fecha: "2026-03", descripcion: "Primer evento de la comunidad de Claude en Barcelona" },
      { fecha: "2026-09-21", descripcion: "Claude Community House, con código para la comunidad" },
    ],
  },
  {
    nombre: "Extraordinary",
    tipo: "plataforma",
    imagen: logo("assets/equipoFemCodersClub/logoExtraordinary.webp"),
    colaboraciones: [{ fecha: "2026-03-01", descripcion: "Alianza de networking" }],
  },
  {
    nombre: "Vonage",
    tipo: "plataforma",
    imagen: logo("assets/Vonage/VonageLogo.webp"),
    colaboraciones: [
      { fecha: "2026-09", descripcion: "Vonage Community Partnership Program" },
      { fecha: "2026-09-20", descripcion: "Premio Best use of the Vonage Video API en HackBarna" },
    ],
  },
  {
    nombre: "Fundación Asti",
    tipo: "fundacion",
    imagen: foto("assets/Eventos2025/AnaLuciaSilva-IrinaIchim-femCodersClub.webp", "izquierda"),
    colaboraciones: [{ fecha: "2024-01-21", descripcion: "Iníciate en programación con FemCoders Club" }],
  },
  {
    nombre: "In CoDe",
    tipo: "asociacion",
    imagen: foto("assets/noticias/colaboracion-june.webp"),
    colaboraciones: [{ fecha: "2026-07-05", descripcion: "Desarrollo de la plataforma June" }],
  },
  {
    nombre: "Subdirección General de Ciudadanía, Talento y Emprendimiento Digital",
    tipo: "institucion",
    imagen: foto("reunion-femCodersClub-administracion-gob-es.webp"),
    colaboraciones: [
      { fecha: "2026-03", descripcion: "Diseño de programas de competencias digitales para mujeres" },
    ],
  },
];
