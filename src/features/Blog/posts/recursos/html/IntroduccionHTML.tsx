import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const IntroduccionHTML: React.FC = () => {
  const publicationDate = "14 de octubre de 2023";

  return (
    <div className="blog-post">
      <Helmet>
        <title>Introducción a HTML: La base de la web</title>
        <meta
          name="description"
          content="Conoce los fundamentos de HTML, su importancia y cómo se relaciona con CSS y JavaScript para crear páginas web modernas."
        />
        <meta
          name="keywords"
          content="HTML, programación web, etiquetas HTML, introducción a HTML, femCoders Club"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/html/introduccion-html"
        />

        {/* Directivas para motores de búsqueda */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina Ichim" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Introducción a HTML: La base de la web" />
        <meta
          property="og:description"
          content="Aprende qué es HTML, por qué es esencial para la web moderna y cómo se combina con CSS y JS."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/html/introduccion-html"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/html/Introduccion-HTML.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Introducción a HTML: La base de la web" />
        <meta
          name="twitter:description"
          content="Explora las bases de HTML y cómo estructurar contenido web accesible y moderno."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/html/Introduccion-HTML.png"
        />
        <meta name="twitter:creator" content="@femcodersclub" />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2023-10-14T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="HTML" />
        <meta property="article:tag" content="Frontend" />
        <meta property="article:tag" content="Programación Web" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/html/Introduccion-HTML.png"
          alt="Introducción a HTML"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
        Introducción a HTML: La base de la web
      </h1>

      <ShareButtons path="/recursos/html/introduccion-html" title="Introducción a HTML: La base de la web" />

      <div className="intro-text">
        <p>
          <strong>HTML (HyperText Markup Language)</strong> es el lenguaje
          fundamental que da estructura a todas las páginas web. Actúa como el
          esqueleto de un sitio web, organizando el contenido y permitiendo que
          los navegadores, como Chrome o Firefox, lo interpreten y lo muestren
          visualmente al usuario. Sin HTML, los navegadores no podrían entender
          ni mostrar el contenido correctamente.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¿Qué es HTML y por qué es importante 🌐✨?</h2>
        <p>
          HTML es un <strong>lenguaje de marcado</strong> diseñado para
          organizar y estructurar el contenido en la web. A través de sus
          etiquetas, HTML define distintos elementos de una página web como
          textos, imágenes, videos, enlaces, tablas y mucho más. Cada etiqueta
          tiene un propósito específico, ya sea estructurar el contenido, dar
          significado a ciertos elementos, o proporcionar información a los
          motores de búsqueda.
        </p>

        <p>
          Una de las grandes fortalezas de HTML es{" "}
          <span>su simplicidad y accesibilidad.</span> Permite que cualquiera,
          desde principiantes hasta desarrolladores avanzados, cree sitios web
          estructurados y bien organizados. Además, HTML es compatible con todos
          los navegadores y dispositivos, lo que lo convierte en la piedra
          angular de la web.
        </p>

        <p>
          Por otro lado, HTML no funciona solo: está diseñado para trabajar
          junto con <strong>CSS</strong> (que se encarga de los estilos y diseño
          visual) y <strong>JavaScript</strong> (que añade interactividad a las
          páginas web). Juntos, forman el núcleo de cualquier página moderna.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Historia del HTML📜</h2>
        <p>
          HTML fue creado por Tim Berners-Lee en 1991. Originalmente, fue
          diseñado para compartir documentos científicos en la web de manera más
          fácil y accesible. Tim Berners-Lee, el inventor de la World Wide Web,
          desarrolló HTML como una forma de interconectar documentos y
          enlazarlos a través de enlaces. Desde su creación, HTML ha
          evolucionado considerablemente, permitiendo no solo compartir textos,
          sino también multimedia, y haciéndose cada vez más robusto para
          soportar aplicaciones web modernas.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Evolución de las versiones de HTML📈</h2>
        <p>
          A lo largo de los años, HTML ha pasado por varias versiones
          importantes. A continuación, algunas de las más destacadas:
        </p>
        <ul>
          <li>
            <strong>HTML 4.01</strong>: Introducido en 1999, esta versión trajo
            una estructura más organizada para el marcado web y la separación de
            contenido y presentación (CSS).
          </li>
          <li>
            <strong>XHTML</strong>: A principios de los 2000, XHTML intentó
            combinar las reglas estrictas de XML con HTML, exigiendo un código
            más limpio y correcto.
          </li>
          <li>
            <strong>HTML5</strong>: Publicado en 2014, HTML5 es la versión
            actual y se centra en ofrecer soporte nativo para multimedia (audio,
            video), aplicaciones web, gráficos y mejoras en la semántica y
            accesibilidad. Además, trajo nuevas etiquetas como{" "}
            <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{" "}
            <code>&lt;header&gt;</code>, y <code>&lt;footer&gt;</code>, que
            mejoran la estructura semántica de una página web.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Errores comunes al escribir HTML⚠️</h2>
        <p>
          Al trabajar con HTML, es común cometer algunos errores. Aquí te
          mencionamos algunos de los más comunes:
        </p>
        <ul>
          <li>
            <strong>No cerrar las etiquetas correctamente</strong>: Asegúrate
            siempre de cerrar las etiquetas con{" "}
            <code>&lt;/nombre-de-etiqueta&gt;</code>, especialmente en HTML más
            estricto como XHTML. Por ejemplo:
            <pre className="code-block bg3">
              {`<div>
  <h1>Título</h1>
</div>`}
            </pre>
          </li>
          <li>
            <strong>
              Olvidar el atributo <code>alt</code> en imágenes
            </strong>
            : El atributo <code>alt</code> es fundamental para mejorar la
            accesibilidad, describiendo el contenido de la imagen para los
            usuarios con discapacidades visuales y para optimización SEO.
            Ejemplo:
            <pre className="code-block bg3">
              {`<img src="imagen.jpg" alt="Descripción de la imagen">`}
            </pre>
          </li>
          <li>
            <strong>No usar etiquetas semánticas</strong>: Es importante usar
            etiquetas semánticas como <code>&lt;article&gt;</code>,{" "}
            <code>&lt;section&gt;</code>, y <code>&lt;header&gt;</code> para
            mejorar la estructura y accesibilidad de tu página web. Por ejemplo:
            <pre className="code-block bg3">
              {`<article>
  <header>
    <h2>Título del Artículo</h2>
  </header>
  <p>Contenido del artículo...</p>
</article>`}
            </pre>
          </li>
          <li>
            <strong>No incluir un doctype</strong>: Es esencial declarar un
            doctype al principio de tu documento HTML para que los navegadores
            sepan qué versión de HTML estás utilizando. Ejemplo:
            <pre className="code-block bg3">{`<!DOCTYPE html>`}</pre>
          </li>
          <li>
            <strong>Uso incorrecto de etiquetas de bloque y en línea</strong>:
            Algunas etiquetas son de bloque (como <code>&lt;div&gt;</code> o{" "}
            <code>&lt;p&gt;</code>) y otras son en línea (como{" "}
            <code>&lt;span&gt;</code> o <code>&lt;a&gt;</code>). Usarlas
            incorrectamente puede afectar el diseño. Ejemplo:
            <pre className="code-block bg3">
              {`<div>
  <span>Texto en línea</span>
</div>`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Compatibilidad entre navegadores🌍</h2>
        <p>
          Uno de los retos más grandes al trabajar con HTML es asegurarse de que
          tu página se vea bien en diferentes navegadores (Chrome, Firefox,
          Safari, Edge, etc.). Algunos elementos de HTML pueden ser
          interpretados de manera diferente dependiendo del navegador, así que
          es importante:
        </p>
        <ul>
          <li>Probar tus páginas en varios navegadores.</li>
          <li>
            Usar herramientas como{" "}
            <strong>
              <a
                href="https://caniuse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight underline"
              >
                Can I Use
              </a>
            </strong>{" "}
            para verificar la compatibilidad de ciertos elementos o
            funcionalidades.
          </li>

          <li>
            Implementar <strong>polyfills</strong>, que son fragmentos de código
            que permiten a los navegadores más antiguos utilizar nuevas
            características de HTML5 o JavaScript. Los polyfills simulan estas
            funcionalidades en navegadores que no las soportan de manera nativa,
            asegurando que tu sitio funcione correctamente en una mayor variedad
            de navegadores.
          </li>
        </ul>
      </div>

      <div className="code-box">
        <h3>Ejemplo básico de HTML:</h3>
        <pre className="code-block bg3">
          {`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página HTML</title>
  </head>
  <body>
    <h1>Bienvenidos a femCoders Club</h1>
    <p>Este es un ejemplo básico de HTML.</p>
    <a href="https://www.femcodersclub.com">Visita nuestra web</a>
  </body>
</html>`}
        </pre>
      </div>

      <div className="intro-text">
        <h2>
          Entendiendo más sobre el <code>&lt;head&gt;</code> de un documento
          HTML
        </h2>
        <p>
          El <code>&lt;head&gt;</code> de un documento HTML contiene información
          importante que no es visible en la página, pero es esencial para su
          correcto funcionamiento. Aquí te explicamos algunos de los elementos
          clave:
        </p>

        <h3>
          1. <code>charset="UTF-8"</code>
        </h3>
        <p>
          La metaetiqueta <code>charset="UTF-8"</code> especifica la
          codificación de caracteres que usará el navegador para mostrar
          correctamente el texto de la página web. UTF-8 es una codificación
          estándar que permite representar prácticamente todos los caracteres de
          los idiomas del mundo, incluidos símbolos, emojis, y más. Usar UTF-8
          asegura que tu página será legible correctamente en cualquier
          navegador y región.
        </p>

        <h3>
          2. <code>lang="es"</code>
        </h3>
        <p>
          El atributo <code>lang="es"</code> en la etiqueta{" "}
          <code>&lt;html&gt;</code> le indica al navegador y a los motores de
          búsqueda qué idioma predomina en la página. Esto es útil para la
          accesibilidad, ya que ayuda a los lectores de pantalla a pronunciar
          correctamente las palabras y también para el SEO, ya que los
          buscadores pueden indexar mejor tu contenido.
        </p>

        <h3>3. Metaetiquetas</h3>
        <p>
          Las metaetiquetas son elementos dentro del <code>&lt;head&gt;</code>{" "}
          que proporcionan metadatos sobre la página. Estos datos no se muestran
          en la página web, pero son importantes para los motores de búsqueda y
          redes sociales. Algunos ejemplos son:
        </p>
        <pre className="code-block bg3">
          <ul>
            <li>
              <code>
                &lt;meta name="description" content="Descripción de tu
                sitio"&gt;
              </code>{" "}
              – Proporciona una descripción de la página para los motores de
              búsqueda.
            </li>
            <li>
              <code>
                &lt;meta name="keywords" content="HTML, programación,
                tutorial"&gt;
              </code>{" "}
              – Lista de palabras clave para SEO.
            </li>
            <li>
              <code>&lt;meta name="author" content="Tu nombre"&gt;</code> –
              Especifica el autor de la página.
            </li>
          </ul>
        </pre>
        <h3>4. Favicon</h3>
        <p>
          El <strong>favicon</strong> es el pequeño icono que aparece en la
          pestaña del navegador cuando se abre tu página web. Este se puede
          agregar en el <code>&lt;head&gt;</code> usando el siguiente código:
        </p>
        <pre className="code-block bg3">
          {`<link rel="icon" href="/ruta/del/favicon.ico" type="image/x-icon">`}
        </pre>

        <h3>5. Incluir CSS y JavaScript</h3>
        <p>
          Dentro del <code>&lt;head&gt;</code>, también puedes incluir hojas de
          estilo CSS y archivos JavaScript que definan el diseño y
          comportamiento de tu sitio web. Aquí tienes un ejemplo:
        </p>
        <pre className="code-block bg3">
          {`<link rel="stylesheet" href="styles.css">
<script src="script.js" defer></script>`}
          <br /> <br />
          El atributo <code>defer</code> en la etiqueta{" "}
          <code>&lt;script&gt;</code> indica al navegador que el archivo
          JavaScript se debe cargar después de que se haya analizado el HTML.
          Esto ayuda a mejorar el rendimiento de la página, ya que el script no
          bloquea la renderización del contenido visible.
        </pre>

        <h3>6. Lo que viene en futuros posts</h3>
        <p>
          En este post hemos cubierto los conceptos básicos de HTML, pero hay
          mucho más que se puede agregar en el <code>&lt;head&gt;</code>. En
          futuros posts, exploraremos temas como:
        </p>

        <pre className="code-block bg3">
          <ul>
            <li>
              Cómo optimizar el <code>&lt;head&gt;</code> para mejorar la
              velocidad de carga del sitio.
            </li>
            <li>
              La importancia de los favicons, archivos robots.txt, y sitemaps.
            </li>
            <li>
              Incorporación de bibliotecas externas, como Google Fonts o
              frameworks de JavaScript.
            </li>
            <li>
              Optimización SEO avanzada utilizando metaetiquetas y datos
              estructurados.
            </li>
          </ul>
        </pre>
      </div>

      <div className="highlight-box">
        <h2>HTML, CSS y JavaScript: Trabajando juntos</h2>
        <p>
          <strong>HTML</strong> da la estructura a la página web, mientras que{" "}
          <strong>CSS</strong> se encarga del diseño y estilo (colores, fuentes,
          márgenes), y <strong>JavaScript</strong> añade interactividad
          (formularios dinámicos, botones, etc.). Estos tres lenguajes se
          complementan para crear sitios web completos y modernos.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Recursos adicionales para aprender HTML📚</h2>
        <p>
          Si deseas profundizar más en el aprendizaje de HTML, aquí tienes
          algunos recursos útiles:
        </p>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight underline"
            >
              MDN Web Docs - HTML
            </a>
          </li>
          <li>
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight underline"
            >
              W3Schools - HTML
            </a>
          </li>
          <li>
            <a
              href="https://html.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight underline"
            >
              HTML.com
            </a>
          </li>
          <li>
            <a
              href="https://lenguajehtml.com"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight underline"
            >
              Lenguaje HTML - Guía completa de HTML5
            </a>
          </li>
        </ul>
      </div>

      <div className="intro-text">
        <p>
          <strong>HTML</strong> es la piedra angular de cualquier página web. Al
          dominar sus conceptos básicos, estarás en camino a crear sitios web
          bien estructurados y accesibles. En los próximos posts,
          profundizaremos en <strong>CSS</strong> y <strong>JavaScript</strong>,
          herramientas que te permitirán transformar tu estructura HTML en una
          web moderna e interactiva.
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de femCoders Club</p>
        {/* <p>Fecha de publicación: <strong>{new Date().toLocaleDateString()}</strong></p> */}
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
        </p>
      </div>
      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <CommentsSection postId={2} />
    </div>
  );
};

export default IntroduccionHTML;
