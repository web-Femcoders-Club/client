import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BookOpen, Download, Globe, MessageSquare, Share2, Trophy, Users } from "lucide-react";
import Quiz, { QuizQuestion, QuizResults } from "../../../../../components/Quiz";
import PlantillaPost from "../../../components/post/PlantillaPost";
import { NotaPost, SeccionPost, TablaPost, TarjetasPost } from "../../../components/post/PiezasPost";

const preguntasCSSEntrevistas: QuizQuestion[] = [
  // NIVEL BÁSICO (10 preguntas)
  {
    id: "css-basic-1",
    level: "basico",
    question: "¿Cuál es la diferencia entre 'display: none' y 'visibility: hidden'?",
    options: [
      { id: "a", text: "display: none elimina el elemento del flujo del documento" },
      { id: "b", text: "visibility: hidden oculta el elemento pero mantiene su espacio" },
      { id: "c", text: "Ambas hacen exactamente lo mismo" },
      { id: "d", text: "display: none es más rápido que visibility: hidden" }
    ],
    correct: ["a", "b"],
    explanation: "display: none elimina completamente el elemento del flujo (no ocupa espacio), mientras visibility: hidden lo oculta pero mantiene el espacio que ocupa."
  },
  {
    id: "css-basic-2",
    level: "basico",
    question: "¿Qué especificidad tiene mayor peso?",
    options: [
      { id: "a", text: "ID (#elemento)" },
      { id: "b", text: "Clase (.elemento)" },
      { id: "c", text: "Etiqueta (div)" },
      { id: "d", text: "!important" }
    ],
    correct: ["d"],
    explanation: "!important no forma parte de la especificidad, pero se impone a ella: gana a los estilos inline, los IDs, las clases y las etiquetas. Sin embargo, abusar de !important es una mala práctica."
  },
  {
    id: "css-basic-3",
    level: "basico",
    question: "¿Cuáles son valores válidos para la propiedad 'position'?",
    options: [
      { id: "a", text: "static" },
      { id: "b", text: "relative" },
      { id: "c", text: "absolute" },
      { id: "d", text: "fixed" }
    ],
    correct: ["a", "b", "c", "d"],
    explanation: "Todos son valores válidos de position. También existe 'sticky' que combina relative y fixed."
  },
  {
    id: "css-basic-4",
    level: "basico",
    question: "¿Qué unidad CSS es relativa al tamaño de fuente del elemento padre?",
    options: [
      { id: "a", text: "px (pixels)" },
      { id: "b", text: "em" },
      { id: "c", text: "rem" },
      { id: "d", text: "vh (viewport height)" }
    ],
    correct: ["b"],
    explanation: "em es relativo al font-size del elemento padre cuando se usa en font-size (en el resto de propiedades, al font-size del propio elemento). rem es relativo al font-size del elemento raíz (html). px es absoluto y vh es relativo al viewport."
  },
  {
    id: "css-basic-5",
    level: "basico",
    question: "¿Cómo centrar un elemento horizontalmente con CSS?",
    options: [
      { id: "a", text: "margin: 0 auto; (para elementos de bloque con ancho definido)" },
      { id: "b", text: "text-align: center; (para contenido inline)" },
      { id: "c", text: "display: flex; justify-content: center;" },
      { id: "d", text: "position: absolute; left: 50%;" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Hay múltiples formas de centrar. margin: 0 auto para bloques con ancho, text-align para inline, flexbox es moderno y versátil. position: absolute sin transform no centra correctamente."
  },
  {
    id: "css-basic-6",
    level: "basico",
    question: "¿Qué es el Box Model en CSS?",
    options: [
      { id: "a", text: "content, padding, border, margin (de dentro hacia fuera)" },
      { id: "b", text: "Solo el contenido del elemento" },
      { id: "c", text: "margin, border, padding, content" },
      { id: "d", text: "Un modelo solo para elementos flex" }
    ],
    correct: ["a"],
    explanation: "El Box Model define las capas de un elemento: content (contenido), padding (relleno interno), border (borde) y margin (espacio externo)."
  },
  {
    id: "css-basic-7",
    level: "basico",
    question: "¿Cuál es la diferencia entre padding y margin?",
    options: [
      { id: "a", text: "padding es espacio interno, margin es espacio externo" },
      { id: "b", text: "padding afecta el fondo del elemento, margin no" },
      { id: "c", text: "Son exactamente lo mismo" },
      { id: "d", text: "padding aumenta el tamaño del elemento (con box-sizing: content-box)" }
    ],
    correct: ["a", "b", "d"],
    explanation: "padding es el espacio entre el contenido y el borde (incluye fondo), margin es el espacio fuera del borde. padding aumenta el tamaño total con box-sizing: content-box."
  },
  {
    id: "css-basic-8",
    level: "basico",
    question: "¿Qué hace 'box-sizing: border-box'?",
    options: [
      { id: "a", text: "Incluye padding y border en el ancho/alto total" },
      { id: "b", text: "Excluye padding y border del cálculo" },
      { id: "c", text: "Solo funciona con flexbox" },
      { id: "d", text: "Facilita el cálculo del tamaño de elementos" }
    ],
    correct: ["a", "d"],
    explanation: "border-box incluye padding y border en el width/height declarado, haciendo más predecible el tamaño final del elemento."
  },
  {
    id: "css-basic-9",
    level: "basico",
    question: "¿Cuál es la sintaxis correcta para una media query?",
    options: [
      { id: "a", text: "@media (max-width: 768px) { }" },
      { id: "b", text: "@media screen and (min-width: 768px) { }" },
      { id: "c", text: "media (width < 768px) { }" },
      { id: "d", text: "@viewport (768px) { }" }
    ],
    correct: ["a", "b"],
    explanation: "Las media queries usan @media seguido de condiciones. Puedes especificar tipo (screen) y características (width). La opción c no es válida porque le falta la @; escrita como @media (width < 768px) es la sintaxis de rangos, que ya admiten los navegadores actuales."
  },
  {
    id: "css-basic-10",
    level: "basico",
    question: "¿Qué selector tiene mayor especificidad?",
    options: [
      { id: "a", text: "div.clase" },
      { id: "b", text: "#id" },
      { id: "c", text: ".clase" },
      { id: "d", text: "div" }
    ],
    correct: ["b"],
    explanation: "Especificidad: inline styles > #id (100) > .clase (10) > etiqueta (1). div.clase = 11, #id = 100."
  },

  // NIVEL INTERMEDIO (10 preguntas)
  {
    id: "css-int-1",
    level: "intermedio",
    question: "¿Cuáles son las diferencias clave entre Flexbox y Grid?",
    options: [
      { id: "a", text: "Flexbox es unidimensional (fila o columna), Grid es bidimensional" },
      { id: "b", text: "Grid es mejor para layouts complejos de página completa" },
      { id: "c", text: "Flexbox es mejor para componentes y alineación de elementos" },
      { id: "d", text: "Grid no puede crear layouts responsive" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Flexbox trabaja en una dimensión (fila O columna), Grid en dos (filas Y columnas). Grid es ideal para layouts macro, Flexbox para micro-layouts."
  },
  {
    id: "css-int-2",
    level: "intermedio",
    question: "¿Qué hace la propiedad 'transform' en CSS?",
    options: [
      { id: "a", text: "Permite rotar, escalar, sesgar o trasladar elementos" },
      { id: "b", text: "No afecta el flujo del documento" },
      { id: "c", text: "Puede ser animada con transitions y animations" },
      { id: "d", text: "Modifica el layout de elementos vecinos" }
    ],
    correct: ["a", "b", "c"],
    explanation: "transform aplica transformaciones 2D/3D sin afectar el flujo del documento ni elementos vecinos. Es performante y animable."
  },
  {
    id: "css-int-3",
    level: "intermedio",
    question: "¿Cuál es la diferencia entre 'transition' y 'animation'?",
    options: [
      { id: "a", text: "transition requiere un trigger (hover, click), animation es automática" },
      { id: "b", text: "animation permite keyframes con múltiples estados" },
      { id: "c", text: "transition solo anima de A a B" },
      { id: "d", text: "Son exactamente lo mismo" }
    ],
    correct: ["a", "b", "c"],
    explanation: "transition es simple (A→B con trigger), animation es compleja (múltiples estados con @keyframes, puede ser automática o infinita)."
  },
  {
    id: "css-int-4",
    level: "intermedio",
    question: "¿Qué es CSS Specificity y cómo se calcula?",
    options: [
      { id: "a", text: "inline styles (1000) > IDs (100) > classes (10) > elements (1)" },
      { id: "b", text: "Define qué estilos se aplican cuando hay conflictos" },
      { id: "c", text: "!important sobrescribe toda especificidad" },
      { id: "d", text: "Solo importa el orden en el archivo CSS" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Especificidad determina qué estilos prevalecen. Se calcula sumando valores: inline (1000), ID (100), clase/atributo/pseudo-clase (10), elemento/pseudo-elemento (1)."
  },
  {
    id: "css-int-5",
    level: "intermedio",
    question: "¿Qué propiedades activan el hardware acceleration?",
    options: [
      { id: "a", text: "transform: translate3d()" },
      { id: "b", text: "will-change" },
      { id: "c", text: "opacity" },
      { id: "d", text: "margin" }
    ],
    correct: ["a", "b", "c"],
    explanation: "transform (3D), will-change y opacity pueden activar aceleración por GPU. margin no activa hardware acceleration y puede causar reflows."
  },
  {
    id: "css-int-6",
    level: "intermedio",
    question: "¿Qué es el 'stacking context' en CSS?",
    options: [
      { id: "a", text: "Define el orden de apilamiento de elementos en el eje Z" },
      { id: "b", text: "Se crea con position + z-index, opacity < 1, transform, etc." },
      { id: "c", text: "Los elementos hijos se apilan dentro de su stacking context padre" },
      { id: "d", text: "Solo afecta a elementos con position: absolute" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Stacking context determina el orden 3D de elementos. Se crea con varias propiedades (position+z-index, transform, opacity, etc.). Elementos hijos no pueden salir del contexto del padre."
  },
  {
    id: "css-int-7",
    level: "intermedio",
    question: "¿Cuáles son pseudo-clases válidas en CSS?",
    options: [
      { id: "a", text: ":hover, :focus, :active" },
      { id: "b", text: ":nth-child(), :first-child, :last-child" },
      { id: "c", text: ":not(), :is(), :where()" },
      { id: "d", text: "::before, ::after" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Todas excepto d son pseudo-clases (:). ::before y ::after son pseudo-elementos (::) que generan contenido al pintar la página, pero no forman parte del DOM."
  },
  {
    id: "css-int-8",
    level: "intermedio",
    question: "¿Qué hace 'clamp()' en CSS?",
    options: [
      { id: "a", text: "Define un valor mínimo, preferido y máximo" },
      { id: "b", text: "Útil para tipografía fluid responsive" },
      { id: "c", text: "Sintaxis: clamp(min, preferido, max)" },
      { id: "d", text: "Solo funciona con pixels" }
    ],
    correct: ["a", "b", "c"],
    explanation: "clamp() establece un valor fluido entre mín y máx. Ideal para responsive design sin media queries. Acepta cualquier unidad CSS."
  },
  {
    id: "css-int-9",
    level: "intermedio",
    question: "¿Qué es el 'CSS containment' y para qué sirve?",
    options: [
      { id: "a", text: "contain: layout, paint, size limita el impacto de un elemento" },
      { id: "b", text: "Mejora el performance aislando cambios" },
      { id: "c", text: "Previene que cambios internos afecten elementos externos" },
      { id: "d", text: "Solo funciona con position: fixed" }
    ],
    correct: ["a", "b", "c"],
    explanation: "CSS containment (contain) optimiza rendering al aislar subsecciones del DOM. Los cambios dentro del contenedor no afectan el layout exterior."
  },
  {
    id: "css-int-10",
    level: "intermedio",
    question: "¿Cuál es la diferencia entre 'rem' y 'em'?",
    options: [
      { id: "a", text: "rem es relativo al elemento raíz (html)" },
      { id: "b", text: "em es relativo al font-size del elemento padre" },
      { id: "c", text: "rem es más predecible y fácil de mantener" },
      { id: "d", text: "Son idénticos en su comportamiento" }
    ],
    correct: ["a", "b", "c"],
    explanation: "rem (root em) es relativo a html, consistente en toda la página. em es relativo al padre, puede crear efectos compuestos complejos."
  },

  // NIVEL AVANZADO (10 preguntas)
  {
    id: "css-adv-1",
    level: "avanzado",
    question: "¿Qué son las Custom Properties (CSS Variables) y cuáles son sus ventajas?",
    options: [
      { id: "a", text: "Variables definidas con --nombre y usadas con var(--nombre)" },
      { id: "b", text: "Son heredables en cascada y pueden cambiar dinámicamente" },
      { id: "c", text: "Permiten theming dinámico sin preprocesadores" },
      { id: "d", text: "No funcionan en navegadores modernos" }
    ],
    correct: ["a", "b", "c"],
    explanation: "CSS Custom Properties son variables nativas del navegador, heredables, dinámicas y modificables vía JavaScript. Ideales para theming y diseño responsive."
  },
  {
    id: "css-adv-2",
    level: "avanzado",
    question: "¿Qué optimizaciones CSS mejoran el rendering performance?",
    options: [
      { id: "a", text: "Usar transform y opacity en lugar de top/left/width/height" },
      { id: "b", text: "Evitar selectores complejos y profundos" },
      { id: "c", text: "Usar will-change con precaución" },
      { id: "d", text: "Añadir !important a todos los estilos" }
    ],
    correct: ["a", "b", "c"],
    explanation: "transform/opacity activan GPU acceleration. Selectores simples son más rápidos. will-change avisa al navegador pero consume memoria si se abusa. !important no mejora performance."
  },
  {
    id: "css-adv-3",
    level: "avanzado",
    question: "¿Qué es el Critical CSS y cómo se implementa?",
    options: [
      { id: "a", text: "CSS mínimo necesario para renderizar la parte visible de la página" },
      { id: "b", text: "Se inlinea en <head> para evitar render-blocking" },
      { id: "c", text: "El resto del CSS se carga de forma asíncrona" },
      { id: "d", text: "Solo funciona con frameworks JavaScript" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Critical CSS es el conjunto mínimo de estilos above-the-fold. Se inlinea para primera pintura rápida. El resto se carga async. Mejora significativamente el FCP."
  },
  {
    id: "css-adv-4",
    level: "avanzado",
    question: "¿Qué técnicas CSS-in-JS conoces y cuáles son sus trade-offs?",
    options: [
      { id: "a", text: "Styled Components: estilos con scope automático" },
      { id: "b", text: "CSS Modules: estilos locales sin runtime overhead" },
      { id: "c", text: "Emotion: flexible con buen performance" },
      { id: "d", text: "Todas eliminan completamente la necesidad de CSS" }
    ],
    correct: ["a", "b", "c"],
    explanation: "CSS-in-JS ofrece scope, theming dinámico y co-location. Trade-offs: runtime overhead, bundle size, no funcionan sin JS. CSS Modules no es CSS-in-JS en sentido estricto (se procesa al compilar), pero se suele comparar con estas librerías. CSS puro sigue siendo necesario para progressive enhancement."
  },
  {
    id: "css-adv-5",
    level: "avanzado",
    question: "¿Qué es container queries y cómo difiere de media queries?",
    options: [
      { id: "a", text: "Container queries responden al tamaño del contenedor padre" },
      { id: "b", text: "Media queries responden al viewport" },
      { id: "c", text: "Container queries permiten componentes verdaderamente reusables" },
      { id: "d", text: "Media queries son obsoletas con container queries" }
    ],
    correct: ["a", "b", "c"],
    explanation: "@container responde al tamaño del contenedor, haciendo componentes responsive independientemente del viewport. Complementa media queries, no las reemplaza."
  },
  {
    id: "css-adv-6",
    level: "avanzado",
    question: "¿Qué hace la propiedad 'aspect-ratio' en CSS moderno?",
    options: [
      { id: "a", text: "Define la relación ancho:alto de un elemento" },
      { id: "b", text: "Reemplaza el hack de padding-top para ratios" },
      { id: "c", text: "Útil para imágenes y videos responsive" },
      { id: "d", text: "Solo funciona con position: absolute" }
    ],
    correct: ["a", "b", "c"],
    explanation: "aspect-ratio mantiene proporciones sin hacks. Simplifica layouts responsive de media. Funciona con cualquier elemento y position."
  },
  {
    id: "css-adv-7",
    level: "avanzado",
    question: "¿Qué son las CSS Houdini APIs?",
    options: [
      { id: "a", text: "APIs de bajo nivel que exponen el CSS engine del navegador" },
      { id: "b", text: "Permiten crear custom properties, layouts y paint" },
      { id: "c", text: "CSS Paint API, Layout API, Animation Worklet" },
      { id: "d", text: "Están completamente soportadas en todos los navegadores" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Houdini expone el rendering engine permitiendo custom CSS. Paint API para dibujar, Layout API para algoritmos custom, etc. Soporte parcial en navegadores."
  },
  {
    id: "css-adv-8",
    level: "avanzado",
    question: "¿Cómo funcionan las subgrid en CSS Grid?",
    options: [
      { id: "a", text: "grid-template-columns: subgrid (o rows) permite heredar las pistas del grid padre" },
      { id: "b", text: "Útil para alinear elementos anidados con el grid principal" },
      { id: "c", text: "Resuelve problemas complejos de alineación multi-nivel" },
      { id: "d", text: "Funciona automáticamente sin configuración" }
    ],
    correct: ["a", "b", "c"],
    explanation: "subgrid permite a un grid item ser también un grid que hereda tracks del padre. Resuelve alineación de contenido anidado complejo."
  },
  {
    id: "css-adv-9",
    level: "avanzado",
    question: "¿Qué estrategias existen para naming conventions en CSS a gran escala?",
    options: [
      { id: "a", text: "BEM (Block Element Modifier): .block__element--modifier" },
      { id: "b", text: "SMACSS: Base, Layout, Module, State, Theme" },
      { id: "c", text: "OOCSS: Separación estructura/skin" },
      { id: "d", text: "Utility-first (Tailwind): clases atómicas reutilizables" }
    ],
    correct: ["a", "b", "c", "d"],
    explanation: "BEM evita conflictos con naming explícito. SMACSS categoriza estilos. OOCSS promueve reutilización. Utility-first maximiza composición. Cada una con trade-offs."
  },
  {
    id: "css-adv-10",
    level: "avanzado",
    question: "¿Qué técnicas avanzadas mejoran la accesibilidad CSS?",
    options: [
      { id: "a", text: "prefers-reduced-motion para respetar preferencias de animación" },
      { id: "b", text: "prefers-color-scheme para dark/light mode automático" },
      { id: "c", text: "focus-visible para mejorar indicadores de foco" },
      { id: "d", text: "Ocultar contenido visualmente pero mantenerlo para screen readers" }
    ],
    correct: ["a", "b", "c", "d"],
    explanation: "Media queries de preferencias del usuario respetan accesibilidad. focus-visible mejora UX de teclado. Técnicas como sr-only permiten contenido accesible sin impacto visual."
  }
];

const PreguntasCSSEntrevistas: React.FC = () => {
  const postId = 29;
  const publicationDate = "17 de octubre de 2025";
  const [achievementModal, setAchievementModal] = useState<{
    show: boolean;
    title: string;
    message: string;
  }>({ show: false, title: "", message: "" });

  const handleQuizComplete = async (results: QuizResults) => {
    console.log("Quiz CSS completado:", results);

    const userId = sessionStorage.getItem("userId");
    const authToken = sessionStorage.getItem("authToken");

    if (userId && authToken) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/quizzes/complete/${userId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ quizType: "css" }),
          }
        );

        const data = await response.json();

        if (data.achievementUnlocked) {
          setAchievementModal({
            show: true,
            title: data.achievementUnlocked,
            message: data.message,
          });
        }
      } catch (error) {
        console.error("Error registrando quiz:", error);
      }
    }
  };

  const downloadStudyGuide = () => {
    const studyGuideContent = `
GUÍA DE ESTUDIO CSS - ENTREVISTAS TÉCNICAS
femCoders Club | ${publicationDate}

═══════════════════════════════════════════════════════════

📚 CONCEPTOS BÁSICOS ESENCIALES

🔸 Box Model:
  - content, padding, border, margin
  - box-sizing: border-box vs content-box
  - Colapso de márgenes

🔸 Selectores y Especificidad:
  - inline (1000) > ID (100) > clase (10) > elemento (1)
  - Pseudo-clases vs pseudo-elementos
  - Combinadores: descendiente, hijo, hermano

🔸 Display y Position:
  - display: block, inline, inline-block, none
  - position: static, relative, absolute, fixed, sticky
  - visibility: hidden vs display: none

🔸 Unidades CSS:
  - Absolutas: px
  - Relativas: em, rem, %, vw, vh
  - Cuándo usar cada una

═══════════════════════════════════════════════════════════

💼 CONCEPTOS INTERMEDIOS

🔸 Flexbox:
  - Contenedor flex: justify-content, align-items
  - Items flex: flex-grow, flex-shrink, flex-basis
  - Unidimensional (fila O columna)

🔸 CSS Grid:
  - grid-template-columns/rows
  - grid-gap, justify-items, align-items
  - Bidimensional (filas Y columnas)

🔸 Responsive Design:
  - Media queries: @media (min/max-width)
  - Mobile-first vs Desktop-first
  - Breakpoints comunes

🔸 Transformaciones y Transiciones:
  - transform: translate, rotate, scale, skew
  - transition vs animation
  - Timing functions

🔸 Stacking Context:
  - z-index y orden de apilamiento
  - Elementos que crean contexto
  - Jerarquía de contextos

═══════════════════════════════════════════════════════════

🚀 CONCEPTOS AVANZADOS

🔸 Custom Properties (CSS Variables):
  - --variable-name: valor
  - var(--variable-name, fallback)
  - Herencia y scope

🔸 Performance CSS:
  - Hardware acceleration (transform, opacity)
  - will-change (usar con cuidado)
  - Evitar reflows y repaints
  - Critical CSS

🔸 Características Modernas:
  - Container queries (@container)
  - aspect-ratio
  - clamp(), min(), max()
  - CSS Grid subgrid

🔸 CSS-in-JS:
  - Styled Components
  - CSS Modules
  - Emotion
  - Trade-offs

🔸 Accesibilidad:
  - prefers-reduced-motion
  - prefers-color-scheme
  - focus-visible
  - Técnicas sr-only

🔸 Arquitectura CSS:
  - BEM (Block Element Modifier)
  - SMACSS
  - OOCSS
  - Utility-first (Tailwind)

═══════════════════════════════════════════════════════════

🎯 TIPS PARA LA ENTREVISTA

✅ Explica el "por qué" de tus decisiones CSS
✅ Conoce performance implications
✅ Entiende browser compatibility
✅ Menciona accesibilidad
✅ Familiarízate con herramientas (PostCSS, Sass)
✅ Sé específica con terminología técnica
✅ Conoce debugging tools (DevTools)

═══════════════════════════════════════════════════════════

📖 RECURSOS RECOMENDADOS

- MDN CSS Reference
- CSS-Tricks
- Can I Use (caniuse.com)
- Web.dev (Google)
- CSS Specifications (W3C)

═══════════════════════════════════════════════════════════

🔧 HERRAMIENTAS Y PREPROCESADORES

- Sass/SCSS
- PostCSS
- Autoprefixer
- PurgeCSS
- CSS Lint

═══════════════════════════════════════════════════════════
Descargado desde: femcodersclub.com
Fecha: ${publicationDate}
    `;

    const blob = new Blob([studyGuideContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CSS-Entrevistas-Guia-Estudio-femCoders.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  /*
   * Bajo los resultados del quiz: el logro, si se ha desbloqueado (solo con la
   * sesión iniciada: handleQuizComplete se lo pide al servidor); si no hay
   * sesión, cómo guardarlo; y siempre la guía de estudio. Sustituye a la
   * ventana flotante de «¡Logro desbloqueado!».
   */
  const conSesion = Boolean(sessionStorage.getItem("userId") && sessionStorage.getItem("authToken"));
  const extraResultados = (
    <div className="quiz__extra">
      <p className="quiz__extra-texto">
        <Trophy aria-hidden="true" />
        {achievementModal.show ? (
          <span className="fc-texto-neutro">
            <strong>Has desbloqueado el logro «{achievementModal.title}».</strong>{" "}
            {achievementModal.message} Lo tienes en <Link to="/welcome">tu espacio</Link>.
          </span>
        ) : conSesion ? (
          <span className="fc-texto-neutro">
            Tus logros se guardan en <Link to="/welcome">tu espacio</Link>.
          </span>
        ) : (
          <span className="fc-texto-neutro">
            <Link to="/login">Inicia sesión</Link> antes de hacer el quiz para guardar tu
            logro en tu espacio.
          </span>
        )}
      </p>
      <button type="button" className="fc-boton" onClick={downloadStudyGuide}>
        <Download aria-hidden="true" />
        Descargar la guía de estudio
      </button>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Quiz CSS para Entrevistas Técnicas: 30 Preguntas Esenciales | femCoders Club</title>
        <meta
          name="description"
          content="Prepárate para entrevistas técnicas con nuestro quiz interactivo de CSS. 30 preguntas (básico a avanzado), explicaciones detalladas y guía de estudio descargable."
        />
        <meta
          name="keywords"
          content="quiz CSS, entrevistas técnicas CSS, preguntas CSS entrevista, test CSS desarrollador, CSS3 entrevista, preparación entrevista frontend, flexbox, grid, femcoders club"
        />

        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/quiz-css-entrevistas"
        />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina ichim" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Quiz CSS para Entrevistas Técnicas: 30 Preguntas Esenciales | femCoders Club"
        />
        <meta
          property="og:description"
          content="Quiz interactivo para preparar entrevistas técnicas de CSS. 3 niveles de dificultad, explicaciones detalladas y feedback personalizado."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/quiz-css-entrevistas"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CSS-Quiz-Entrevistas.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quiz CSS para Entrevistas Técnicas - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="30 preguntas cuidadosamente seleccionadas para preparar tu próxima entrevista técnica de CSS."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CSS-Quiz-Entrevistas.webp"
        />

        <meta
          property="article:published_time"
          content="2025-10-17T12:00:00Z"
        />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Entrevistas" />
        <meta property="article:tag" content="Quiz" />
        <meta property="article:tag" content="Frontend" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <PlantillaPost
        ruta="/recursos/css/quiz-css-entrevistas"
        titulo="Quiz CSS para entrevistas técnicas: 30 preguntas que debes dominar"
        autora={{ nombre: "femCoders Club", rol: "Comunidad de mujeres desarrolladoras" }}
        idComentarios={postId}
        entradilla={
          <>
            <p>
              ¿Te estás preparando para una entrevista como desarrolladora frontend? Este quiz interactivo te ayudará a
              <strong> evaluar tu nivel de CSS</strong> con las preguntas más frecuentes que suelen hacer los reclutadores técnicos.
              Desde conceptos básicos hasta técnicas avanzadas de <strong>Grid, Flexbox, performance y CSS moderno</strong>.
            </p>
            <p>
              He seleccionado cuidadosamente <strong>30 preguntas</strong> distribuidas en 3 niveles de dificultad,
              basándome en entrevistas reales de empresas tech. Cada pregunta incluye una explicación detallada
              para que entiendas no solo <em>qué</em> es correcto, sino <em>por qué</em>.
            </p>
          </>
        }
      >
        <SeccionPost titulo="¿Qué encontrarás en este quiz?">
          <TablaPost descripcion="Niveles del quiz">
            <table>
              <thead>
                <tr>
                  <th>Nivel</th>
                  <th>Preguntas</th>
                  <th>Temas clave</th>
                  <th>Perfil candidato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Básico</strong></td>
                  <td>10</td>
                  <td>Box Model, selectores, position, unidades, media queries</td>
                  <td>Junior Developer, Bootcamp graduate</td>
                </tr>
                <tr>
                  <td><strong>Intermedio</strong></td>
                  <td>10</td>
                  <td>Flexbox, Grid, transforms, animations, especificidad</td>
                  <td>Mid-level Developer, 1-3 años de experiencia</td>
                </tr>
                <tr>
                  <td><strong>Avanzado</strong></td>
                  <td>10</td>
                  <td>Custom Properties, performance, container queries, Houdini</td>
                  <td>Senior Developer, Tech Lead</td>
                </tr>
              </tbody>
            </table>
          </TablaPost>

          <p>
            <button type="button" className="fc-boton" onClick={downloadStudyGuide}>
              <Download aria-hidden="true" />
              Descargar la guía de estudio
            </button>
          </p>
          <p>Todos los conceptos clave organizados para repasar.</p>
        </SeccionPost>

        <SeccionPost titulo="Cómo aprovechar al máximo este quiz">
          <h3>Antes de empezar:</h3>
          <ul>
            <li><strong>No busques las respuestas</strong> - La idea es evaluar tu conocimiento actual</li>
            <li><strong>Lee cada pregunta cuidadosamente</strong> - Algunas tienen múltiples respuestas correctas</li>
            <li><strong>Tómate tu tiempo</strong> - No hay límite de tiempo, enfócate en entender</li>
          </ul>

          <h3>Durante el quiz:</h3>
          <ul>
            <li><strong>Piensa en voz alta</strong> - Como harías en una entrevista real</li>
            <li><strong>Considera el contexto</strong> - ¿Cuándo usarías cada opción?</li>
            <li><strong>Lee las explicaciones</strong> - Son tan importantes como las respuestas</li>
          </ul>

          <h3>Después del quiz:</h3>
          <ul>
            <li><strong>Revisa tus áreas débiles</strong> - El sistema te dará feedback por nivel</li>
            <li><strong>Practica los conceptos</strong> - Implementa lo que no domines</li>
            <li><strong>Repite en una semana</strong> - Para reforzar el aprendizaje</li>
          </ul>
        </SeccionPost>

        <SeccionPost titulo="El quiz interactivo">
          <p>
            <strong>Instrucciones:</strong> Selecciona la(s) respuesta(s) que consideres correcta(s) y pulsa
            «Comprobar respuesta». Algunas preguntas pueden tener múltiples opciones válidas.
          </p>

          <NotaPost titulo="Tip de entrevista">
            <p>
              En entrevistas reales, siempre explica tu razonamiento.
              No solo digas "la respuesta es B", sino "elijo B porque...". Los entrevistadores valoran
              el proceso de pensamiento tanto como la respuesta correcta.
            </p>
          </NotaPost>

          <Quiz
            title="Quiz CSS · Entrevistas técnicas"
            questions={preguntasCSSEntrevistas}
            showLevelIndicator={true}
            shuffleQuestions={false}
            passPercentage={70}
            onComplete={handleQuizComplete}
            extraResultados={extraResultados}
          />
        </SeccionPost>

        <SeccionPost titulo="Interpretando tu puntuación">
          <TarjetasPost
            titulo="Tu puntuación global"
            columnas={4}
            tarjetas={[
              { titulo: "90-100 %", texto: "¡Excelente! Estás preparada para entrevistas senior." },
              { titulo: "75-89 %", texto: "Muy bien. Repasa algunos conceptos concretos." },
              { titulo: "60-74 %", texto: "Buena base. Practica las áreas en las que fallaste." },
              { titulo: "Menos de 60 %", texto: "Toca estudiar un poco más: empieza por los recursos de abajo." },
            ]}
          />
          <TarjetasPost
            titulo="Qué pide cada nivel"
            columnas={3}
            tarjetas={[
              { titulo: "Básico", texto: "Acertar 8 de 10 o más es lo esperable en cualquier puesto de frontend." },
              { titulo: "Intermedio", texto: "Lo que se pide en puestos mid y senior." },
              { titulo: "Avanzado", texto: "Lo que te distingue en roles técnicos de liderazgo y arquitectura." },
            ]}
          />
        </SeccionPost>

        <SeccionPost titulo="Recursos para seguir aprendiendo">
          <p>Si quieres profundizar en algún tema del quiz, empieza por aquí:</p>
          <TarjetasPost
            titulo="Posts de FemCoders Club"
            tarjetas={[
              {
                titulo: "Introducción a CSS",
                texto: "Perfecto si necesitas reforzar los conceptos básicos.",
                enlace: "/recursos/css/introduccion-css",
                icono: <BookOpen aria-hidden="true" />,
              },
              {
                titulo: "Flexbox",
                texto: "Domina el layout unidimensional.",
                enlace: "/recursos/css/flexbox",
                icono: <BookOpen aria-hidden="true" />,
              },
              {
                titulo: "CSS Grid",
                texto: "Aprende a crear layouts bidimensionales.",
                enlace: "/recursos/css/css-grid",
                icono: <BookOpen aria-hidden="true" />,
              },
              {
                titulo: "El lado oculto del CSS",
                texto: "Aceleración por hardware y buenas prácticas de rendimiento.",
                enlace: "/recursos/css/css-performance-optimization",
                icono: <BookOpen aria-hidden="true" />,
              },
            ]}
          />
          <TarjetasPost
            titulo="Recursos externos"
            tarjetas={[
              {
                titulo: "MDN CSS Reference",
                texto: "Documentación técnica completa.",
                enlace: "https://developer.mozilla.org/es/docs/Web/CSS",
                icono: <Globe aria-hidden="true" />,
              },
              {
                titulo: "CSS-Tricks",
                texto: "Tutoriales y trucos prácticos.",
                enlace: "https://css-tricks.com/",
                icono: <Globe aria-hidden="true" />,
              },
              {
                titulo: "Can I Use",
                texto: "Compatibilidad de las características de CSS con cada navegador.",
                enlace: "https://caniuse.com/",
                icono: <Globe aria-hidden="true" />,
              },
              {
                titulo: "web.dev",
                texto: "Guías de Google sobre rendimiento y buenas prácticas.",
                enlace: "https://web.dev/",
                icono: <Globe aria-hidden="true" />,
              },
            ]}
          />
        </SeccionPost>

        <SeccionPost titulo="Comparte tu experiencia">
          <p>
            ¿Cómo te ha ido? Nos encanta saber qué tal le va a la comunidad, y lo que cuentas ayuda a
            otras desarrolladoras que se preparan como tú.
          </p>
          <TarjetasPost
            columnas={3}
            tarjetas={[
              {
                titulo: "En nuestro Slack",
                texto: "Únete a la comunidad y cuéntanos tus resultados.",
                enlace: "https://communityinviter.com/apps/femcodersclub/femcoders-club",
                icono: <Users aria-hidden="true" />,
              },
              {
                titulo: "En redes sociales",
                texto: "Con el hashtag #femCodersQuiz.",
                icono: <Share2 aria-hidden="true" />,
              },
              {
                titulo: "En los comentarios",
                texto: "Dinos qué temas te han costado más.",
                icono: <MessageSquare aria-hidden="true" />,
              },
            ]}
          />
        </SeccionPost>

        <NotaPost titulo="Recuerda">
          <p>
            El conocimiento técnico es solo una parte de la entrevista.
            La capacidad de comunicar ideas, trabajar en equipo y seguir aprendiendo son igualmente importantes.{" "}
            <strong>¡Confía en tu preparación y muestra tu pasión por el desarrollo!</strong>
          </p>
        </NotaPost>
      </PlantillaPost>
    </>
  );
};

export default PreguntasCSSEntrevistas;
