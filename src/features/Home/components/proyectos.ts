/*
 * Proyectos de la sección «Proyectos de la comunidad» de la home.
 *
 * Para añadir uno: un objeto nuevo ARRIBA del todo (el orden de la lista es
 * el del carrusel, del más reciente al más antiguo). Los filtros salen de
 * `categorias`: uno que ningún proyecto use no se pinta.
 *
 * `imagen` es la ruta original en public/; OptimizedImage pide la versión
 * de public-optimized y, si no existe, cae a la original. Si solo existe la
 * optimizada (no hay original), se pone la ruta completa de public-optimized
 * y se pinta tal cual.
 */

/** Filtros del carrusel, en el orden en que se muestran (después de «Todos»). */
export const CATEGORIAS = [
  "Comunidad",
  "JavaScript",
  "CSS",
  "IA",
  "React y TypeScript",
] as const;

export type Categoria = (typeof CATEGORIAS)[number];

export interface Proyecto {
  id: string;
  nombre: string;
  /** Una o dos frases: la tarjeta corta a tres líneas. */
  descripcion: string;
  /** La primera es la que va en el chip de la imagen. */
  categorias: [Categoria, ...Categoria[]];
  tecnologias: string[];
  autoria: string;
  imagen: string;
  imagenAlt: string;
  /** Imagen generada con IA: muestra el distintivo (AI Act art. 50). */
  imagenIA?: boolean;
  /** Post del blog o noticia que lo cuenta (ruta interna). Si existe, es el enlace principal. */
  post?: string;
  repo?: string;
  demo?: string;
}

export const PROYECTOS: Proyecto[] = [
  {
    id: "testlet",
    nombre: "testlet",
    descripcion:
      "Un framework de testing completo, construido desde cero y sin dependencias: assertions con diff, spies, fake timers y cobertura real. Se testea a sí mismo.",
    categorias: ["JavaScript"],
    tecnologias: ["JavaScript", "Node.js", "Testing"],
    autoria: "Irina Ichim",
    imagen: "/assets/javascript/testlet-arquitectura.webp",
    imagenAlt: "Diagrama de arquitectura de testlet: cómo se conectan el CLI, el runner, las suites, los reporters, la cobertura, Assert, Spy y FakeTimers",
    post: "/recursos/js/testing-javascript-sin-frameworks",
    repo: "https://github.com/femcodersclub/testlet",
  },
  {
    id: "offload",
    nombre: "OFFLOAD",
    descripcion:
      "Premio Best use of the Vonage Video API en HackBarna AI Summit 26. Una aplicación familiar que reparte la carga mental de una casa, con una agente de IA que solo habla cuando hace falta.",
    categorias: ["Comunidad", "IA", "React y TypeScript"],
    tecnologias: ["Vonage Video API", "Next.js", "TypeScript", "Mastra"],
    autoria: "CTRL4ELLA",
    imagen: "/assets/noticias/offload-challenge-vonage-hackbarna-ai-summit-26.jpg",
    imagenAlt: "El equipo CTRL4ELLA en el escenario de HackBarna AI Summit 26 con el premio de Vonage, junto a pantallas de la aplicación OFFLOAD",
    post: "/noticias/offload-challenge-vonage-hackbarna-ai-summit-26",
    repo: "https://github.com/ctrl-Ella/OffLoad",
  },
  {
    id: "smart-refactor-assistant",
    nombre: "Smart Refactor Assistant",
    descripcion:
      "Un asistente que analiza código JavaScript con un linter propio y usa la API gratuita de Gemini para explicarlo, refactorizarlo y generar tests.",
    categorias: ["JavaScript", "IA"],
    tecnologias: ["JavaScript", "Gemini API", "Node.js"],
    autoria: "Irina Ichim",
    imagen: "/assets/javascript/ia-javascript-gemini.webp",
    imagenAlt: "Smart Refactor Assistant con el lema «Código más claro. Decisiones más inteligentes.»: a la izquierda, el código que se quiere mejorar; a la derecha, los hallazgos del linter",
    post: "/recursos/js/ia-javascript-gemini",
    repo: "https://github.com/femcodersclub/smart-refactor-assistant",
    demo: "https://femcodersclub.github.io/smart-refactor-assistant/",
  },
  {
    id: "june",
    nombre: "June",
    descripcion:
      "Una plataforma de la asociación In CoDe para documentar la violencia política de género y la censura digital en España. FemCoders Club forma parte del equipo de desarrollo.",
    categorias: ["Comunidad", "React y TypeScript"],
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    autoria: "FemCoders Club con In CoDe",
    imagen: "/assets/noticias/colaboracion-june.png",
    imagenAlt: "Cartel de la colaboración entre FemCoders Club e In CoDe para desarrollar June",
    imagenIA: true,
    post: "/noticias/colaboracion-june",
  },
  {
    id: "perf-lab-js",
    nombre: "perf-lab-js",
    descripcion:
      "Un toolkit de profiling y benchmarking en vanilla JavaScript: mide con estadística real y detecta fugas de memoria antes de optimizar nada.",
    categorias: ["JavaScript"],
    tecnologias: ["JavaScript", "Profiling", "Benchmarking"],
    autoria: "Irina Ichim",
    imagen: "/assets/javascript/optimizacion-javascript.webp",
    imagenAlt: "Optimización en JavaScript: mide antes de tocar una línea. Un portátil con gráficas de ejecuciones, tiempo y memoria, una función throttle y un indicador de rendimiento",
    imagenIA: true,
    post: "/recursos/js/optimizacion-javascript",
    repo: "https://github.com/femcodersclub/performance-audit-tool-js",
    demo: "https://femcodersclub.github.io/performance-audit-tool-js/",
  },
  {
    id: "encrypted-private-notes",
    nombre: "Encrypted Private Notes",
    descripcion:
      "Un editor de notas con cifrado de extremo a extremo que funciona entero en el navegador, con IndexedDB, Web Crypto API y File System Access API.",
    categorias: ["JavaScript"],
    tecnologias: ["JavaScript", "IndexedDB", "Web Crypto API"],
    autoria: "Irina Ichim",
    imagen: "/assets/javascript/web-apis-nueva-generacion.webp",
    imagenAlt: "Esquema de Encrypted Private Notes: IndexedDB guarda las notas, Web Crypto API las cifra con AES-GCM 256 y File System Access API las exporta. Todo en el navegador, sin servidor",
    imagenIA: true,
    post: "/recursos/js/web-apis-nueva-generacion",
    repo: "https://github.com/femcodersclub/encrypted-private-notes",
    demo: "https://femcodersclub.github.io/encrypted-private-notes/",
  },
  {
    id: "reactive-store-js",
    nombre: "reactive-store-js",
    descripcion:
      "Un sistema de estado reactivo en menos de 300 líneas: cinco patrones de diseño trabajando juntos, con undo/redo y un panel de métricas.",
    categorias: ["JavaScript"],
    tecnologias: ["JavaScript", "Proxy API", "Patrones de diseño"],
    autoria: "Irina Ichim",
    imagen: "/assets/javascript/reactive-store-dashboard.webp",
    imagenAlt: "Dashboard de comunidad hecho con reactive-store-js: métricas de miembras y eventos, lenguajes más usados, actividad reciente y el panel de DevTools con el estado",
    post: "/recursos/js/patrones-diseno-javascript",
    repo: "https://github.com/femcodersclub/reactive-store-js",
    demo: "https://femcodersclub.github.io/reactive-store-js/demo/",
  },
  {
    id: "mujeres-que-transforman-el-futuro",
    nombre: "Mujeres que Transforman el Futuro",
    descripcion:
      "La landing del evento «Estructuras en Movimiento», pensada para inspirar e informar sobre el encuentro de FemCoders Club del 8 de marzo.",
    categorias: ["Comunidad", "CSS"],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    autoria: "Ana Lucía Silva Córdoba",
    imagen: "/mujeres-que-transforman-futuro.png",
    imagenAlt: "Landing del evento «Estructuras en movimiento: mujeres que transforman el futuro», de InfoJobs y FemCoders Club, el 8 de marzo, Día Internacional de la Mujer",
    repo: "https://github.com/femcodersclub/mujeres-que-transforman-el-futuro",
    demo: "https://femcodersclub.github.io/mujeres-que-transforman-el-futuro/",
  },
  {
    id: "fempalette",
    nombre: "FemPalette",
    descripcion:
      "Un generador visual de variables SASS que acompaña al tutorial: funciones, mixins y arquitectura 7-1 para aprender SASS practicando.",
    categorias: ["CSS"],
    tecnologias: ["SASS", "CSS", "JavaScript"],
    autoria: "Irina Ichim",
    imagen: "/assets/css/fempalette-generator.webp",
    imagenAlt: "FemPalette, el generador de variables SCSS: cuatro colores (primary, secondary, accent y neutral) y una vista previa que los usa",
    post: "/recursos/css/sass-next-level",
    repo: "https://github.com/femcodersclub/sass-color-generator",
    demo: "https://femcodersclub.github.io/sass-color-generator/",
  },
  {
    id: "responsive-showcase",
    nombre: "ResponsiveShowcase",
    descripcion:
      "Un escaparate de técnicas responsive: mobile-first, breakpoints, container queries y tipografía fluida, cada una con su ejemplo.",
    categorias: ["CSS"],
    tecnologias: ["CSS", "Container queries", "HTML"],
    autoria: "Irina Ichim",
    imagen: "/public-optimized/desktop/assets/css/responsiveshowcase-overview.webp",
    imagenAlt: "ResponsiveShowcase abierto junto a las DevTools del navegador, con un panel de depuración que muestra el ancho de la ventana y el breakpoint activo",
    post: "/recursos/css/responsive-design",
    repo: "https://github.com/femcodersclub/ResponsiveShowcase",
    demo: "https://femcodersclub.github.io/ResponsiveShowcase/",
  },
  {
    id: "breathe",
    nombre: "Breathe",
    descripcion:
      "Una aplicación de mindfulness que guía la respiración con animaciones CSS, cuidando el rendimiento y a quien prefiere menos movimiento.",
    categorias: ["CSS"],
    tecnologias: ["CSS", "Animaciones", "Keyframes"],
    autoria: "Irina Ichim",
    imagen: "/assets/css/breathe-app-demo.webp",
    imagenAlt: "Breathe, respiración guiada: un círculo luminoso marca el ritmo con el texto «Exhala suavemente…»",
    post: "/recursos/css/animaciones-css",
    repo: "https://github.com/femcodersclub/AnimacionesCSS",
    demo: "https://femcodersclub.github.io/AnimacionesCSS/",
  },
  {
    id: "dashboard-control-futurista",
    nombre: "Dashboard de Control Futurista",
    descripcion:
      "Un panel de control futurista hecho para practicar transiciones y transformaciones CSS en 2D y 3D.",
    categorias: ["CSS"],
    tecnologias: ["CSS", "Transformaciones 3D", "Transiciones"],
    autoria: "Irina Ichim",
    imagen: "/assets/css/dashboard-futurista-completo.webp",
    imagenAlt: "Control Dashboard de estética futurista en tonos cian: controles principales, un monitor de energía, ajustes con deslizadores y el estado del sistema",
    post: "/recursos/css/transiciones-transformaciones",
    repo: "https://github.com/femcodersclub/Dashboard-de-Control-Futurista",
    demo: "https://femcodersclub.github.io/Dashboard-de-Control-Futurista/",
  },
  {
    id: "nike-store-replica",
    nombre: "Réplica de Nike Store",
    descripcion:
      "Un e-commerce en React con carrito de compras, persistencia en localStorage y formularios validados, inspirado en la tienda de Nike.",
    categorias: ["Comunidad", "React y TypeScript"],
    tecnologias: ["React", "useReducer", "React Hook Form"],
    autoria: "Almudena Rendón Fernández",
    imagen: "/assets/react/nike-store-replica.jpg",
    imagenAlt: "Réplica de Nike Store de Almudena Rendón: portada oscura con la colección Pegasus y una zapatilla destacada en un carrusel",
    post: "/recursos/react/nike-store-replica",
  },
];
