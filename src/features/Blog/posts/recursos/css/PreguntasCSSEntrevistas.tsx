import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Quiz, { QuizQuestion, QuizResults } from "../../../../../components/Quiz";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

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
    explanation: "!important tiene la mayor especificidad y sobrescribe todo, seguido de estilos inline, IDs, clases y etiquetas. Sin embargo, abusar de !important es una mala práctica."
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
    explanation: "em es relativo al font-size del elemento padre. rem es relativo al font-size del elemento raíz (html). px es absoluto y vh es relativo al viewport."
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
    explanation: "Las media queries usan @media seguido de condiciones. Puedes especificar tipo (screen) y características (width). La sintaxis con < es nueva pero no ampliamente soportada."
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
    explanation: "Todas excepto d son pseudo-clases (:). ::before y ::after son pseudo-elementos (::) que crean elementos en el DOM."
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
    explanation: "CSS Custom Properties son variables nativas del navegador, heredables, dinámicas y modificables via JavaScript. Ideales para theming y diseño responsive."
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
    explanation: "CSS-in-JS ofrece scope, theming dinámico y co-location. Trade-offs: runtime overhead, bundle size, no funcionan sin JS. CSS puro sigue siendo necesario para progressive enhancement."
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
      { id: "a", text: "display: subgrid permite heredar grid del padre" },
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

  const closeAchievementModal = () => {
    setAchievementModal({ show: false, title: "", message: "" });
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

  return (
    <div className="blog-post">
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

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/css/CSS-Quiz-Entrevistas.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/css/CSS-Quiz-Entrevistas.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/css/CSS-Quiz-Entrevistas.webp"
            alt="Quiz CSS para Entrevistas Técnicas - 30 preguntas esenciales femCoders Club"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Quiz CSS para Entrevistas Técnicas
        <br />
        30 Preguntas que Debes Dominar
      </h1>

      <ShareButtons path="/recursos/css/quiz-css-entrevistas" title="Quiz CSS para Entrevistas Técnicas: 30 Preguntas Esenciales" />

      <p className="intro-text">
        ¿Te estás preparando para una entrevista como desarrolladora frontend? Este quiz interactivo te ayudará a 
        <strong> evaluar tu nivel de CSS</strong> con las preguntas más frecuentes que suelen hacer los reclutadores técnicos. 
        Desde conceptos básicos hasta técnicas avanzadas de <strong>Grid, Flexbox, Performance y CSS moderno</strong>.
      </p>

      <p className="intro-text">
        He seleccionado cuidadosamente <strong>30 preguntas</strong> distribuidas en 3 niveles de dificultad, 
        basándome en entrevistas reales de empresas tech. Cada pregunta incluye una explicación detallada 
        para que entiendas no solo <em>qué</em> es correcto, sino <em>por qué</em>.
      </p>

      <div className="highlight-box">
        <h2>🎯 ¿Qué encontrarás en este quiz?</h2>
        
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Preguntas</th>
                <th>Temas Clave</th>
                <th>Perfil Candidato</th>
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
                <td>Mid-level Developer, 1-3 años experiencia</td>
              </tr>
              <tr>
                <td><strong>Avanzado</strong></td>
                <td>10</td>
                <td>Custom Properties, Performance, Container Queries, Houdini</td>
                <td>Senior Developer, Tech Lead</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button 
            onClick={downloadStudyGuide}
            style={{
              backgroundColor: "#4737bb",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#3d2ea1"}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#4737bb"}
          >
            📚 Descargar Guía de Estudio
          </button>
          <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "8px" }}>
            Todos los conceptos clave organizados para repasar
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>💡 Cómo aprovechar al máximo este quiz</h2>
        
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
      </div>

      <div className="highlight-box">
        <h2>🚀 El Quiz Interactivo</h2>
        <p>
          <strong>Instrucciones:</strong> Selecciona la(s) respuesta(s) que consideres correcta(s) y haz clic en 
          "Verificar Respuesta". Algunas preguntas pueden tener múltiples opciones válidas.
        </p>
        
        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "20px",
          borderLeft: "4px solid #4737bb"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>💡 Tip de entrevista:</strong> En entrevistas reales, siempre explica tu razonamiento. 
            No solo digas "la respuesta es B", sino "elijo B porque...". Los entrevistadores valoran 
            el proceso de pensamiento tanto como la respuesta correcta.
          </p>
        </div>
      </div>

      <Quiz 
        title="Quiz CSS - Entrevistas Técnicas" 
        questions={preguntasCSSEntrevistas}
        showLevelIndicator={true}
        shuffleQuestions={false}
        passPercentage={70}
        onComplete={handleQuizComplete}
      />

      <div className="highlight-box">
        <h2>📊 Interpretando tu puntuación</h2>
        
        <h3>Puntuación Global:</h3>
        <ul>
          <li><strong>90-100%:</strong> ¡Excelente! Estás preparada para entrevistas senior</li>
          <li><strong>75-89%:</strong> Muy bien. Repasa algunos conceptos específicos</li>
          <li><strong>60-74%:</strong> Buen nivel base. Practica las áreas débiles</li>
          <li><strong>Menos de 60%:</strong> Necesitas más estudio. Usa nuestra guía de recursos</li>
        </ul>

        <h3>Por Nivel de Dificultad:</h3>
        <ul>
          <li><strong>Básico:</strong> Fundamental dominar 8/10 o más para cualquier posición frontend</li>
          <li><strong>Intermedio:</strong> Necesario para posiciones mid-level y senior</li>
          <li><strong>Avanzado:</strong> Diferenciador para roles técnicos leadership y arquitectura</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🎓 Recursos para seguir aprendiendo</h2>
        <p>
          Si quieres profundizar en algún tema específico que apareció en el quiz, 
          estos recursos de femCoders Club te ayudarán:
        </p>

        <h3>📖 Posts relacionados:</h3>
        <ul>
          <li>
            <strong>
              <a
                href="https://www.femcodersclub.com/recursos/css/introduccion-css"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introducción a CSS: Fundamentos Esenciales
              </a>
            </strong> - Perfecto si necesitas reforzar conceptos básicos
          </li>
          <li>
            <strong>
              <a
                href="https://www.femcodersclub.com/recursos/css/flexbox-guia-completa"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flexbox: Guía Completa
              </a>
            </strong> - Domina el layout unidimensional
          </li>
          <li>
            <strong>
              <a
                href="https://www.femcodersclub.com/recursos/css/css-grid-completo"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Grid: De Cero a Experta
              </a>
            </strong> - Aprende layouts bidimensionales
          </li>
          <li>
            <strong>
              <a
                href="https://www.femcodersclub.com/recursos/css/css-performance-optimization"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Performance: Optimización Avanzada
              </a>
            </strong> - Hardware acceleration y mejores prácticas
          </li>
        </ul>

        <h3>🌐 Recursos externos recomendados:</h3>
        <ul>
          <li><strong>MDN CSS Reference</strong> - Documentación técnica completa</li>
          <li><strong>CSS-Tricks</strong> - Tutoriales y tips prácticos</li>
          <li><strong>Can I Use</strong> - Compatibilidad de características CSS</li>
          <li><strong>Web.dev</strong> - Guías de Google sobre performance y mejores prácticas</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🤝 Comparte tu experiencia</h2>
        <p>
          Comparte tus resultados y aprendizajes:
        </p>

        <ul>
          <li>
            <strong>En nuestra comunidad Slack:</strong> 
            <a
              href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
              className="highlight-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}Únete a femCoders Club
            </a>
          </li>
          <li><strong>En redes sociales:</strong> Usa el hashtag #femCodersQuiz</li>
          <li><strong>En los comentarios:</strong> Cuéntanos qué temas te resultaron más desafiantes</li>
        </ul>

        <p>
          <em>Tu feedback nos ayuda a crear mejores recursos para toda la comunidad. 
          ¡Cada experiencia compartida es una oportunidad de aprendizaje para otras desarrolladoras!</em>
        </p>
      </div>

      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          borderLeft: "5px solid #4737bb"
        }}>
          <p style={{ margin: "0", fontSize: "1.2rem", fontStyle: "italic" }}>
            <strong>🎯 Recuerda:</strong> El conocimiento técnico es solo una parte de la entrevista. 
            La capacidad de comunicar ideas, trabajar en equipo y seguir aprendiendo son igualmente importantes. 
            <strong> ¡Confía en tu preparación y muestra tu pasión por el desarrollo!</strong>
          </p>
        </div>
      </div>

      <div className="author-info">
        <p>
          Creado por: <strong>femCoders Club</strong>
        </p>
        <p>Comunidad de mujeres desarrolladoras</p>
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <Link to="/blog" className="back-to-blog">
          Volver al Blog
        </Link>
      </div>

      <CommentsSection postId={postId} />

      {achievementModal.show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeAchievementModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "40px",
              maxWidth: "450px",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(71, 55, 187, 0.3)",
              animation: "fadeIn 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🏆</div>
            <h2
              style={{
                color: "#4737bb",
                marginBottom: "15px",
                fontSize: "1.8rem",
              }}
            >
              ¡Logro Desbloqueado!
            </h2>
            <h3
              style={{
                color: "#6d2c95",
                marginBottom: "20px",
                fontSize: "1.4rem",
              }}
            >
              {achievementModal.title}
            </h3>
            <p style={{ color: "#666", marginBottom: "25px", lineHeight: 1.6 }}>
              {achievementModal.message}
            </p>
            <button
              onClick={closeAchievementModal}
              style={{
                backgroundColor: "#4737bb",
                color: "white",
                border: "none",
                padding: "12px 30px",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              ¡Genial!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreguntasCSSEntrevistas;