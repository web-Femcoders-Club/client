/*
 * Organizaciones con las que FemCoders Club ha colaborado.
 *
 * No hay tabla en la base de datos: la lista vive aquí y la página
 * «Comunidad real» del panel la cuenta y la pinta. Cada organización ocupa UNA
 * entrada aunque haya colaborado muchas veces —sus colaboraciones van dentro—,
 * así que el total es la longitud del array y no puede haber duplicados por
 * repetir evento.
 *
 * Se compiló el 2 de octubre de 2026 a partir de lo que ya contaba la web:
 * SponsorsARExperience, el JSON-LD de TeamPage, las noticias del blog y el
 * carrusel de eventos. Las variantes de nombre (LeWagon / Le Wagon, Canodrom /
 * Canòdrom…) están unificadas en la entrada.
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
  /** `AAAA-MM-DD` o `AAAA-MM`. Ausente cuando la web no la recoge. */
  fecha?: string;
  descripcion: string;
}

export interface Colaboradora {
  nombre: string;
  tipo: TipoColaboradora;
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

export const COLABORADORAS: Colaboradora[] = [
  {
    nombre: "InfoJobs",
    tipo: "empresa",
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
    colaboraciones: [
      { fecha: "2024-04-22", descripcion: "Backend Testing & Scalability Pitfalls, en sus oficinas" },
      { fecha: "2025-05-28", descripcion: "DataConnect" },
      { fecha: "2025-10-11", descripcion: "Sede de HackBarna 2025" },
    ],
  },
  {
    nombre: "NTT DATA",
    tipo: "empresa",
    colaboraciones: [
      { fecha: "2025-10-29", descripcion: "Liderar la revolución de la IA con talento femenino" },
    ],
  },
  {
    nombre: "Adevinta",
    tipo: "empresa",
    colaboraciones: [
      { fecha: "2024-03-07", descripcion: "8M: Mujeres en Tecnología, retos y oportunidades" },
    ],
  },
  {
    nombre: "Factorial HR",
    tipo: "empresa",
    colaboraciones: [{ fecha: "2024-05-16", descripcion: "Green Software" }],
  },
  {
    nombre: "Criteo",
    tipo: "empresa",
    colaboraciones: [{ fecha: "2024-05-29", descripcion: "Antes muerta que sin IA" }],
  },
  {
    nombre: "Dynatrace",
    tipo: "empresa",
    colaboraciones: [
      { fecha: "2024-06-19", descripcion: "Essential Visualization and Metrics for Success" },
    ],
  },
  {
    nombre: "Codurance",
    tipo: "empresa",
    colaboraciones: [
      { fecha: "2024-09-05", descripcion: "Catch Me If You Can: Malware Hide and Seek" },
    ],
  },
  {
    nombre: "Semrush",
    tipo: "empresa",
    colaboraciones: [{ fecha: "2024-11-07", descripcion: "Accesibilidad y POO" }],
  },
  {
    nombre: "SeatCode",
    tipo: "empresa",
    colaboraciones: [
      { fecha: "2024-11-28", descripcion: "Diseño, accesibilidad y ciberseguridad" },
    ],
  },
  {
    nombre: "PokeCode",
    tipo: "empresa",
    colaboraciones: [
      { fecha: "2024-01", descripcion: "Apoyo a la comunidad" },
      { fecha: "2026-05-27", descripcion: "Taller de Decidim con Elvia Benedith" },
    ],
  },
  {
    nombre: "El Canòdrom",
    tipo: "espacio",
    colaboraciones: [
      { fecha: "2023-11-24", descripcion: "Presentación del club: Música y Código" },
      { descripcion: "Soft skills: comunicación asertiva" },
      { fecha: "2026-02-26", descripcion: "Taller con Jennifer C. Neyra" },
      { fecha: "2026-04-15", descripcion: "Soft skills" },
      { fecha: "2026-05-27", descripcion: "Taller de Decidim" },
    ],
  },
  {
    nombre: "Le Wagon",
    tipo: "formacion",
    colaboraciones: [
      { fecha: "2024-06-27", descripcion: "Talleres de datos" },
      { descripcion: "Evento de Machine Learning" },
      { fecha: "2025-05-28", descripcion: "DataConnect" },
    ],
  },
  {
    nombre: "Factoría F5",
    tipo: "formacion",
    colaboraciones: [
      { fecha: "2024-02-20", descripcion: "Las skills que necesitas para ser una UX Engineer" },
    ],
  },
  {
    nombre: "HackBarna",
    tipo: "congreso",
    colaboraciones: [
      { fecha: "2025-10-11", descripcion: "Community Partner de HackBarna 2025" },
      { fecha: "2026-09-03", descripcion: "Sesión informativa del AI Summit 26" },
      { fecha: "2026-09-19", descripcion: "Community Partner de HackBarna AI Summit 26" },
    ],
  },
  {
    nombre: "Talent Arena",
    tipo: "congreso",
    colaboraciones: [{ fecha: "2026-02", descripcion: "Community Partner de Talent Arena 2026" }],
  },
  {
    nombre: "Barcelona Cybersecurity Congress",
    tipo: "congreso",
    colaboraciones: [{ fecha: "2026-11-03", descripcion: "Embajadoras oficiales de BCC26" }],
  },
  {
    nombre: "SheHub",
    tipo: "comunidad",
    colaboraciones: [{ fecha: "2025-07-05", descripcion: "Alianza para impulsar el talento femenino" }],
  },
  {
    nombre: "Claude Community House Barcelona",
    tipo: "comunidad",
    colaboraciones: [
      { fecha: "2026-03", descripcion: "Primer evento de la comunidad de Claude en Barcelona" },
      { fecha: "2026-09-21", descripcion: "Claude Community House, con código para la comunidad" },
    ],
  },
  {
    nombre: "Extraordinary",
    tipo: "plataforma",
    colaboraciones: [{ fecha: "2026-03-01", descripcion: "Alianza de networking" }],
  },
  {
    nombre: "Vonage",
    tipo: "plataforma",
    colaboraciones: [
      { fecha: "2026-09", descripcion: "Vonage Community Partnership Program" },
      { fecha: "2026-09-20", descripcion: "Premio Best use of the Vonage Video API en HackBarna" },
    ],
  },
  {
    nombre: "GitHub",
    tipo: "plataforma",
    colaboraciones: [
      { fecha: "2024-03-18", descripcion: "Charla sobre el perfil de GitHub" },
      { fecha: "2026", descripcion: "Evento de GitHub en FemCoders Club" },
    ],
  },
  {
    nombre: "Fundación Asti",
    tipo: "fundacion",
    colaboraciones: [{ descripcion: "Iníciate en programación con FemCoders Club" }],
  },
  {
    nombre: "In CoDe",
    tipo: "asociacion",
    colaboraciones: [{ fecha: "2026-07-05", descripcion: "Desarrollo de la plataforma June" }],
  },
  {
    nombre: "Subdirección General de Ciudadanía, Talento y Emprendimiento Digital",
    tipo: "institucion",
    colaboraciones: [
      { fecha: "2026-03", descripcion: "Diseño de programas de competencias digitales para mujeres" },
    ],
  },
];
