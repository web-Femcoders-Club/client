import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Quiz, { QuizQuestion, QuizResults } from "../../../../../components/Quiz";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const preguntasHTMLEntrevistas: QuizQuestion[] = [
  // NIVEL BÁSICO (10 preguntas)
  {
    id: "html-basic-1",
    level: "basico",
    question: "¿Cuál es la estructura básica de un documento HTML5?",
    options: [
      { id: "a", text: "<!DOCTYPE html>, <html>, <head>, <body>" },
      { id: "b", text: "<html>, <head>, <body>" },
      { id: "c", text: "<!DOCTYPE>, <html>, <title>" },
      { id: "d", text: "<head>, <body>, <footer>" }
    ],
    correct: ["a"],
    explanation: "Un documento HTML5 válido debe comenzar con <!DOCTYPE html> seguido de <html>, <head> y <body>."
  },
  {
    id: "html-basic-2",
    level: "basico",
    question: "¿Cuáles de estas etiquetas son elementos semánticos de HTML5?",
    options: [
      { id: "a", text: "<article>" },
      { id: "b", text: "<div>" },
      { id: "c", text: "<section>" },
      { id: "d", text: "<span>" }
    ],
    correct: ["a", "c"],
    explanation: "<article> y <section> son elementos semánticos que dan significado al contenido. <div> y <span> son contenedores genéricos sin significado semántico."
  },
  {
    id: "html-basic-3",
    level: "basico",
    question: "¿Qué atributo HTML se usa para hacer que un enlace se abra en una nueva ventana?",
    options: [
      { id: "a", text: "target='_blank'" },
      { id: "b", text: "window='new'" },
      { id: "c", text: "open='new'" },
      { id: "d", text: "tab='new'" }
    ],
    correct: ["a"],
    explanation: "target='_blank' hace que el enlace se abra en una nueva pestaña o ventana del navegador."
  },
  {
    id: "html-basic-4",
    level: "basico",
    question: "¿Cuál es la diferencia entre <strong> y <b>?",
    options: [
      { id: "a", text: "No hay diferencia" },
      { id: "b", text: "<strong> tiene significado semántico, <b> es solo visual" },
      { id: "c", text: "<b> es más moderno que <strong>" },
      { id: "d", text: "<strong> es para títulos, <b> para párrafos" }
    ],
    correct: ["b"],
    explanation: "<strong> indica importancia semántica (lectores de pantalla lo enfatizan), mientras <b> es solo negrita visual sin significado."
  },
  {
    id: "html-basic-5",
    level: "basico",
    question: "¿Qué elementos HTML son de tipo 'block' por defecto?",
    options: [
      { id: "a", text: "<div>" },
      { id: "b", text: "<span>" },
      { id: "c", text: "<p>" },
      { id: "d", text: "<a>" }
    ],
    correct: ["a", "c"],
    explanation: "<div> y <p> son elementos de bloque (ocupan todo el ancho disponible). <span> y <a> son elementos inline."
  },
  {
    id: "html-basic-6",
    level: "basico",
    question: "¿Cuál es el propósito del atributo 'alt' en las imágenes?",
    options: [
      { id: "a", text: "Cambiar el tamaño de la imagen" },
      { id: "b", text: "Proporcionar texto alternativo para accesibilidad" },
      { id: "c", text: "Añadir efectos visuales" },
      { id: "d", text: "Optimizar la carga de la imagen" }
    ],
    correct: ["b"],
    explanation: "El atributo 'alt' proporciona texto alternativo que se muestra si la imagen no carga y es leído por lectores de pantalla para accesibilidad."
  },
  {
    id: "html-basic-7",
    level: "basico",
    question: "¿Qué etiqueta se usa para crear una lista ordenada?",
    options: [
      { id: "a", text: "<ul>" },
      { id: "b", text: "<ol>" },
      { id: "c", text: "<list>" },
      { id: "d", text: "<order>" }
    ],
    correct: ["b"],
    explanation: "<ol> (ordered list) crea listas numeradas, mientras <ul> (unordered list) crea listas con viñetas."
  },
  {
    id: "html-basic-8",
    level: "basico",
    question: "¿Qué significa HTML?",
    options: [
      { id: "a", text: "Hyper Text Markup Language" },
      { id: "b", text: "High Tech Modern Language" },
      { id: "c", text: "Home Tool Markup Language" },
      { id: "d", text: "Hyperlink and Text Markup Language" }
    ],
    correct: ["a"],
    explanation: "HTML significa HyperText Markup Language, es el lenguaje de marcado estándar para crear páginas web."
  },
  {
    id: "html-basic-9",
    level: "basico",
    question: "¿Cuál es la etiqueta correcta para incluir CSS externo?",
    options: [
      { id: "a", text: "<css src='style.css'>" },
      { id: "b", text: "<link rel='stylesheet' href='style.css'>" },
      { id: "c", text: "<style src='style.css'>" },
      { id: "d", text: "<stylesheet href='style.css'>" }
    ],
    correct: ["b"],
    explanation: "La etiqueta <link> con rel='stylesheet' y href es la forma correcta de incluir CSS externo."
  },
  {
    id: "html-basic-10",
    level: "basico",
    question: "¿Qué etiqueta se usa para crear un salto de línea?",
    options: [
      { id: "a", text: "<break>" },
      { id: "b", text: "<br>" },
      { id: "c", text: "<line>" },
      { id: "d", text: "<newline>" }
    ],
    correct: ["b"],
    explanation: "La etiqueta <br> (break) se usa para crear un salto de línea en HTML."
  },

  // NIVEL INTERMEDIO (10 preguntas)
  {
    id: "html-inter-1",
    level: "intermedio",
    question: "¿Cuáles son atributos globales válidos en HTML5?",
    options: [
      { id: "a", text: "class" },
      { id: "b", text: "data-*" },
      { id: "c", text: "href" },
      { id: "d", text: "contenteditable" }
    ],
    correct: ["a", "b", "d"],
    explanation: "class, data-* y contenteditable son atributos globales (se pueden usar en cualquier elemento). href es específico de enlaces."
  },
  {
    id: "html-inter-2",
    level: "intermedio",
    question: "¿Qué significa que HTML5 sea 'case-insensitive'?",
    options: [
      { id: "a", text: "No distingue entre mayúsculas y minúsculas en nombres de etiquetas" },
      { id: "b", text: "Los valores de atributos no distinguen mayúsculas" },
      { id: "c", text: "Solo se pueden usar minúsculas" },
      { id: "d", text: "Es sensible a mayúsculas y minúsculas" }
    ],
    correct: ["a"],
    explanation: "HTML5 no distingue entre <DIV>, <div> o <Div>, pero es buena práctica usar minúsculas. Los valores de atributos sí son case-sensitive."
  },
  {
    id: "html-inter-3",
    level: "intermedio",
    question: "¿Cuál es la diferencia entre <section> y <article>?",
    options: [
      { id: "a", text: "<article> es contenido independiente, <section> agrupa contenido relacionado" },
      { id: "b", text: "No hay diferencia" },
      { id: "c", text: "<section> es para noticias, <article> para blogs" },
      { id: "d", text: "<article> no puede contener <section>" }
    ],
    correct: ["a"],
    explanation: "<article> representa contenido independiente que puede existir solo (blog post, noticia). <section> agrupa contenido temáticamente relacionado."
  },
  {
    id: "html-inter-4",
    level: "intermedio",
    question: "¿Qué nuevos tipos de input introdujo HTML5?",
    options: [
      { id: "a", text: "email" },
      { id: "b", text: "date" },
      { id: "c", text: "number" },
      { id: "d", text: "password" }
    ],
    correct: ["a", "b", "c"],
    explanation: "HTML5 añadió email, date, number, color, range, etc. El tipo 'password' existía desde HTML4."
  },
  {
    id: "html-inter-5",
    level: "intermedio",
    question: "¿Cómo se implementa la validación nativa de formularios en HTML5?",
    options: [
      { id: "a", text: "Con el atributo 'required'" },
      { id: "b", text: "Con 'pattern' para expresiones regulares" },
      { id: "c", text: "Con JavaScript únicamente" },
      { id: "d", text: "Con 'min' y 'max' para números" }
    ],
    correct: ["a", "b", "d"],
    explanation: "HTML5 permite validación nativa con required, pattern, min/max, etc. JavaScript es opcional para validación adicional."
  },
  {
    id: "html-inter-6",
    level: "intermedio",
    question: "¿Para qué sirve el atributo 'role' en HTML?",
    options: [
      { id: "a", text: "Definir el comportamiento CSS del elemento" },
      { id: "b", text: "Mejorar la accesibilidad para tecnologías asistivas" },
      { id: "c", text: "Validar formularios" },
      { id: "d", text: "Optimizar el SEO" }
    ],
    correct: ["b"],
    explanation: "El atributo 'role' forma parte de ARIA y ayuda a las tecnologías asistivas (lectores de pantalla) a entender mejor el propósito del elemento."
  },
  {
    id: "html-inter-7",
    level: "intermedio",
    question: "¿Qué es el DOM (Document Object Model)?",
    options: [
      { id: "a", text: "Una representación en árbol del documento HTML" },
      { id: "b", text: "Un lenguaje de programación" },
      { id: "c", text: "Un tipo de base de datos" },
      { id: "d", text: "Una técnica de diseño web" }
    ],
    correct: ["a"],
    explanation: "El DOM es una representación estructurada en forma de árbol del documento HTML que permite a JavaScript interactuar con los elementos."
  },
  {
    id: "html-inter-8",
    level: "intermedio",
    question: "¿Cuáles son elementos de formulario semánticos en HTML5?",
    options: [
      { id: "a", text: "<fieldset>" },
      { id: "b", text: "<legend>" },
      { id: "c", text: "<label>" },
      { id: "d", text: "<input>" }
    ],
    correct: ["a", "b", "c"],
    explanation: "<fieldset>, <legend> y <label> son elementos semánticos que mejoran la estructura y accesibilidad de formularios."
  },
  {
    id: "html-inter-9",
    level: "intermedio",
    question: "¿Qué atributos son importantes para la accesibilidad web?",
    options: [
      { id: "a", text: "alt" },
      { id: "b", text: "aria-label" },
      { id: "c", text: "tabindex" },
      { id: "d", text: "style" }
    ],
    correct: ["a", "b", "c"],
    explanation: "alt, aria-label y tabindex son cruciales para accesibilidad. 'style' es para presentación, no accesibilidad."
  },
  {
    id: "html-inter-10",
    level: "intermedio",
    question: "¿Cuál es la estructura correcta de una tabla HTML?",
    options: [
      { id: "a", text: "<table>, <thead>, <tbody>, <tfoot>" },
      { id: "b", text: "<table>, <tr>, <td>" },
      { id: "c", text: "<table>, <header>, <body>, <footer>" },
      { id: "d", text: "<table>, <row>, <cell>" }
    ],
    correct: ["a"],
    explanation: "La estructura semántica completa incluye <table>, <thead>, <tbody> y <tfoot> para organizar el contenido."
  },

  // NIVEL AVANZADO (10 preguntas)
  {
    id: "html-adv-1",
    level: "avanzado",
    question: "¿Cuáles son las mejores prácticas para implementar microdatos en HTML5?",
    options: [
      { id: "a", text: "Usar atributos itemscope e itemtype" },
      { id: "b", text: "Implementar Schema.org vocabulary" },
      { id: "c", text: "Añadir itemref para referencias cruzadas" },
      { id: "d", text: "Usar solo en el <head>" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Los microdatos usan itemscope, itemtype (Schema.org), itemprop e itemref. No se limitan al <head>, se pueden usar en todo el documento."
  },
  {
    id: "html-adv-2",
    level: "avanzado",
    question: "¿Cómo optimizar HTML para Core Web Vitals?",
    options: [
      { id: "a", text: "Usar lazy loading en imágenes" },
      { id: "b", text: "Implementar resource hints (preload, prefetch)" },
      { id: "c", text: "Minimizar reflows con CSS crítico inline" },
      { id: "d", text: "Usar muchas etiquetas <div>" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Para mejorar Core Web Vitals: lazy loading reduce LCP, resource hints mejoran FCP, CSS crítico evita CLS. Muchos <div> no ayudan."
  },
  {
    id: "html-adv-3",
    level: "avanzado",
    question: "¿Cuándo usar <template> en HTML5?",
    options: [
      { id: "a", text: "Para crear contenido que no se renderiza inicialmente" },
      { id: "b", text: "Con Web Components" },
      { id: "c", text: "Para mejorar el SEO" },
      { id: "d", text: "Para clonar contenido con JavaScript" }
    ],
    correct: ["a", "b", "d"],
    explanation: "<template> contiene markup que no se renderiza hasta ser activado por JavaScript, útil para Web Components y clonación de contenido."
  },
  {
    id: "html-adv-4",
    level: "avanzado",
    question: "¿Qué es el Shadow DOM y cómo se relaciona con HTML?",
    options: [
      { id: "a", text: "Un DOM encapsulado para Web Components" },
      { id: "b", text: "Una técnica de SEO" },
      { id: "c", text: "Permite CSS y HTML aislados" },
      { id: "d", text: "Solo funciona con React" }
    ],
    correct: ["a", "c"],
    explanation: "Shadow DOM es un DOM encapsulado que permite CSS y HTML aislados del documento principal, fundamental para Web Components nativos."
  },
  {
    id: "html-adv-5",
    level: "avanzado",
    question: "¿Cómo implementar Progressive Enhancement en HTML?",
    options: [
      { id: "a", text: "Partir de HTML semántico básico" },
      { id: "b", text: "Añadir CSS para mejorar la presentación" },
      { id: "c", text: "Usar JavaScript solo para funcionalidad avanzada" },
      { id: "d", text: "Empezar siempre con JavaScript" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Progressive Enhancement: HTML semántico base → CSS para presentación → JavaScript para funcionalidad avanzada. Nunca empezar con JavaScript."
  },
  {
    id: "html-adv-6",
    level: "avanzado",
    question: "¿Qué son los Custom Elements en HTML5?",
    options: [
      { id: "a", text: "Elementos HTML personalizados definidos por el desarrollador" },
      { id: "b", text: "Parte de la especificación Web Components" },
      { id: "c", text: "Solo funcionan con frameworks" },
      { id: "d", text: "Requieren registro con customElements.define()" }
    ],
    correct: ["a", "b", "d"],
    explanation: "Custom Elements permiten crear etiquetas HTML personalizadas, son parte de Web Components y se registran con customElements.define()."
  },
  {
    id: "html-adv-7",
    level: "avanzado",
    question: "¿Cómo optimizar HTML para internacionalización (i18n)?",
    options: [
      { id: "a", text: "Usar atributo lang en <html>" },
      { id: "b", text: "Implementar dir='rtl' para idiomas de derecha a izquierda" },
      { id: "c", text: "Usar hreflang en enlaces" },
      { id: "d", text: "Solo traducir el texto visible" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Para i18n: lang especifica idioma, dir maneja direccionalidad, hreflang indica versiones en otros idiomas. También hay que considerar atributos alt, title, etc."
  },
  {
    id: "html-adv-8",
    level: "avanzado",
    question: "¿Qué técnicas avanzadas mejoran el rendimiento de carga HTML?",
    options: [
      { id: "a", text: "Critical CSS inline" },
      { id: "b", text: "Resource hints (dns-prefetch, preconnect)" },
      { id: "c", text: "Defer y async en scripts" },
      { id: "d", text: "Inline de todo el CSS y JS" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Critical CSS inline, resource hints y defer/async optimizan la carga. Inline de todo el CSS/JS es contraproducente para el cacheo."
  },
  {
    id: "html-adv-9",
    level: "avanzado",
    question: "¿Cuáles son las mejores prácticas para Web Components?",
    options: [
      { id: "a", text: "Usar Shadow DOM para encapsulación" },
      { id: "b", text: "Implementar Custom Elements" },
      { id: "c", text: "Usar HTML Templates" },
      { id: "d", text: "Evitar CSS Modules" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Web Components usa Shadow DOM, Custom Elements y HTML Templates. CSS Modules son útiles para el aislamiento de estilos."
  },
  {
    id: "html-adv-10",
    level: "avanzado",
    question: "¿Cómo implementar Service Workers con HTML?",
    options: [
      { id: "a", text: "Registro via JavaScript en el documento principal" },
      { id: "b", text: "Usar manifest.json para PWA" },
      { id: "c", text: "Implementar estrategias de cache" },
      { id: "d", text: "Solo funciona con HTTPS (excepto localhost)" }
    ],
    correct: ["a", "b", "c", "d"],
    explanation: "Service Workers requieren registro JS, manifest.json para PWA, estrategias de cache y HTTPS por seguridad."
  }
];

const PreguntasHTMLEntrevistas: React.FC = () => {
  const postId = 27;
  const publicationDate = "15 de septiembre de 2025";

  const handleQuizComplete = (results: QuizResults) => {
    console.log("Quiz HTML completado:", results);
    // Aquí puedes añadir tracking analytics si quieres
  };

  const downloadStudyGuidePDF = () => {
    const studyGuideContent = `
GUÍA DE ESTUDIO HTML - ENTREVISTAS TÉCNICAS
femCoders Club | ${publicationDate}

═══════════════════════════════════════════════════════════

📚 CONCEPTOS BÁSICOS ESENCIALES

🔸 Estructura HTML5:
  - <!DOCTYPE html>
  - <html>, <head>, <body>
  - Elementos semánticos vs genéricos

🔸 Etiquetas semánticas clave:
  - <article>, <section>, <nav>, <header>, <footer>
  - <main>, <aside>, <figure>, <figcaption>

🔸 Formularios HTML5:
  - Tipos de input: email, date, number, tel, url
  - Atributos: required, pattern, min, max, step
  - Elementos: <fieldset>, <legend>, <label>

═══════════════════════════════════════════════════════════

💼 CONCEPTOS INTERMEDIOS

🔸 Atributos globales:
  - class, id, data-*
  - contenteditable, draggable, hidden
  - aria-*, role, tabindex

🔸 Accesibilidad (a11y):
  - alt en imágenes
  - aria-label, aria-describedby
  - Estructura semántica correcta

🔸 SEO fundamentals:
  - Jerarquía de headings (h1-h6)
  - Meta tags esenciales
  - Structured data

═══════════════════════════════════════════════════════════

🚀 CONCEPTOS AVANZADOS

🔸 Web Components:
  - Custom Elements
  - Shadow DOM
  - HTML Templates

🔸 Performance:
  - Lazy loading (loading="lazy")
  - Resource hints (preload, prefetch)
  - Critical path optimization

🔸 APIs HTML5:
  - Local Storage vs Session Storage
  - Geolocation API
  - History API

═══════════════════════════════════════════════════════════

🎯 TIPS PARA LA ENTREVISTA

✅ Siempre explica el "por qué"
✅ Menciona consideraciones de accesibilidad
✅ Conoce las diferencias entre HTML4 y HTML5
✅ Entiende el DOM y cómo JavaScript interactúa
✅ Mantente actualizado con las especificaciones web

═══════════════════════════════════════════════════════════

📖 RECURSOS RECOMENDADOS

- MDN Web Docs (developer.mozilla.org)
- W3C HTML Specification
- WebAIM (accesibilidad)
- Can I Use (compatibilidad navegadores)

═══════════════════════════════════════════════════════════
Descargado desde: femcodersclub.com
Fecha: ${publicationDate}
    `;

    const blob = new Blob([studyGuideContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HTML-Entrevistas-Guia-Estudio-femCoders.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="blog-post">
      <Helmet>
        <title>Quiz HTML para Entrevistas Técnicas: 30 Preguntas Esenciales | femCoders Club</title>
        <meta
          name="description"
          content="Prepárate para entrevistas técnicas con nuestro quiz interactivo de HTML. 30 preguntas (básico a avanzado), explicaciones detalladas y guía de estudio descargable."
        />
        <meta
          name="keywords"
          content="quiz HTML, entrevistas técnicas HTML, preguntas HTML entrevista, test HTML desarrollador, HTML5 entrevista, preparación entrevista frontend, femcoders club"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/html/quiz-html-entrevistas"
        />

        {/* Directivas para motores de búsqueda */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="femCoders Club" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Quiz HTML para Entrevistas Técnicas: 30 Preguntas Esenciales | femCoders Club"
        />
        <meta
          property="og:description"
          content="Quiz interactivo para preparar entrevistas técnicas de HTML. 3 niveles de dificultad, explicaciones detalladas y feedback personalizado."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/html/quiz-html-entrevistas"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/html/HTML-Quiz-Entrevistas.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quiz HTML para Entrevistas Técnicas - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="30 preguntas cuidadosamente seleccionadas para preparar tu próxima entrevista técnica de HTML."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/html/HTML-Quiz-Entrevistas.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-09-15T12:00:00Z"
        />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="HTML" />
        <meta property="article:tag" content="Entrevistas" />
        <meta property="article:tag" content="Quiz" />
        <meta property="article:tag" content="Frontend" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/html/HTML-Quiz-Entrevistas.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/html/HTML-Quiz-Entrevistas.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/html/HTML-Quiz-Entrevistas.webp"
            alt="Quiz HTML para Entrevistas Técnicas - 30 preguntas esenciales femCoders Club"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Quiz HTML para Entrevistas Técnicas
        <br />
        30 Preguntas que Debes Dominar
      </h1>

      <div className="social-share">
        <div className="share-buttons">
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.femcodersclub.com/recursos/html/quiz-html-entrevistas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Facebook"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/?url=https://www.femcodersclub.com/recursos/html/quiz-html-entrevistas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Instagram"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.femcodersclub.com/recursos/html/quiz-html-entrevistas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en LinkedIn"
          >
            <BsLinkedin className="social-icon" />
          </a>
          <a
            href="https://twitter.com/share?url=https://www.femcodersclub.com/recursos/html/quiz-html-entrevistas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Twitter"
          >
            <FaSquareXTwitter className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/share?url=https://www.femcodersclub.com/recursos/html/quiz-html-entrevistas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>

      <p className="intro-text">
        ¿Te estás preparando para una entrevista como desarrolladora frontend? Este quiz interactivo te ayudará a 
        <strong> evaluar tu nivel de HTML</strong> con las preguntas más frecuentes que suelen hacer los reclutadores técnicos. 
        Desde conceptos básicos hasta técnicas avanzadas de <strong>Web Components y performance</strong>.
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
                <td>Estructura HTML5, etiquetas semánticas, formularios</td>
                <td>Junior Developer, Bootcamp graduate</td>
              </tr>
              <tr>
                <td><strong>Intermedio</strong></td>
                <td>10</td>
                <td>Accesibilidad, atributos globales, DOM, validación</td>
                <td>Mid-level Developer, 1-3 años experiencia</td>
              </tr>
              <tr>
                <td><strong>Avanzado</strong></td>
                <td>10</td>
                <td>Web Components, Performance, PWA, i18n</td>
                <td>Senior Developer, Tech Lead</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button 
            onClick={downloadStudyGuidePDF}
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

      {/* Componente Quiz */}
      <Quiz 
        title="Quiz HTML - Entrevistas Técnicas" 
        questions={preguntasHTMLEntrevistas}
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
                href="https://www.femcodersclub.com/recursos/html/introduccion-html"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introducción a HTML5: Fundamentos Esenciales
              </a>
            </strong> - Perfecto si necesitas reforzar conceptos básicos
          </li>
          <li>
            <strong>
              <a
                href="https://www.femcodersclub.com/recursos/html/html-semantico"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML Semántico: Estructura que Importa
              </a>
            </strong> - Domina <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> y más
          </li>
          <li>
            <strong>
              <a
                href="https://www.femcodersclub.com/recursos/html/accesibilidad-html"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accesibilidad HTML: Código Inclusivo
              </a>
            </strong> - ARIA, roles y mejores prácticas a11y
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
            </strong> - Complementa HTML con CSS eficiente
          </li>
        </ul>

        <h3>🛠️ Herramientas recomendadas:</h3>
        <ul>
          <li><strong>MDN Web Docs:</strong> La documentación oficial más completa</li>
          <li><strong>HTML5 Validator:</strong> Valida tu código HTML</li>
          <li><strong>Chrome DevTools:</strong> Inspecciona DOM y depura código</li>
          <li><strong>WAVE Web Accessibility Evaluator:</strong> Evalúa accesibilidad</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🎯 Tips específicos para la entrevista</h2>
        
        <h3>Lo que valoran los entrevistadores:</h3>
        <ul>
          <li><strong>Conocimiento semántico:</strong> No solo saber las etiquetas, sino cuándo usarlas</li>
          <li><strong>Pensamiento en accesibilidad:</strong> Siempre menciona consideraciones a11y</li>
          <li><strong>Performance awareness:</strong> Entiende el impacto de tus decisiones HTML</li>
          <li><strong>Evolución de HTML:</strong> Conoce las diferencias entre HTML4 y HTML5</li>
        </ul>

        <h3>Preguntas típicas de seguimiento:</h3>
        <ul>
          <li>"¿Por qué elegirías <code>&lt;article&gt;</code> en lugar de <code>&lt;div&gt;</code>?"</li>
          <li>"¿Cómo implementarías un tema oscuro usando solo HTML y CSS?"</li>
          <li>"¿Qué consideraciones tienes para hacer un formulario accesible?"</li>
          <li>"¿Cómo optimizarías la carga de una página con mucho contenido HTML?"</li>
        </ul>

        <h3>Errores comunes que debes evitar:</h3>
        <ul>
          <li><strong>Confundir semántica con presentación:</strong> HTML es para estructura, CSS para apariencia</li>
          <li><strong>Olvidar la accesibilidad:</strong> Siempre piensa en lectores de pantalla</li>
          <li><strong>No conocer las novedades:</strong> Mantente actualizada con nuevas especificaciones</li>
          <li><strong>Respuestas genéricas:</strong> Sé específica y da ejemplos concretos</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>💪 Siguientes pasos en tu preparación</h2>
        
        <h3>Plan de estudio recomendado:</h3>
        <p><strong>Semana 1-2:</strong> Refuerza conceptos básicos</p>
        <ul>
          <li>Repasa estructura HTML5 y elementos semánticos</li>
          <li>Practica formularios y validación nativa</li>
          <li>Domina la diferencia entre elementos block e inline</li>
        </ul>

        <p><strong>Semana 3-4:</strong> Profundiza en temas intermedios</p>
        <ul>
          <li>Estudia accesibilidad web y ARIA</li>
          <li>Practica con atributos globales y data attributes</li>
          <li>Entiende el DOM y su manipulación con JavaScript</li>
        </ul>

        <p><strong>Semana 5-6:</strong> Domina conceptos avanzados</p>
        <ul>
          <li>Experimenta con Web Components</li>
          <li>Aprende sobre performance y optimización</li>
          <li>Estudia PWAs y Service Workers</li>
        </ul>

        <h3>Práctica hands-on:</h3>
        <ul>
          <li><strong>Crea un portafolio personal:</strong> Usando HTML semántico y accesible</li>
          <li><strong>Construye un formulario complejo:</strong> Con validación nativa HTML5</li>
          <li><strong>Implementa un tema oscuro:</strong> Usando CSS Variables y HTML data attributes</li>
          <li><strong>Desarrolla un Web Component:</strong> Para entender Custom Elements</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🌟 Comparte tu experiencia</h2>
        <p>
          <strong>¿Cómo te fue en el quiz?</strong> Nos encanta conocer la experiencia de nuestra comunidad. 
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
              Únete a femCoders Club
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
            <strong>¡Confía en tu preparación y muestra tu pasión por el desarrollo!</strong>
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
    </div>
  );
};

export default PreguntasHTMLEntrevistas;
