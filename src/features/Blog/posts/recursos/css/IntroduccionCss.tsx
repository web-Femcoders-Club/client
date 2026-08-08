import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const IntroduccionCSS: React.FC = () => {
  const postId = 4;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          ¿Qué es CSS y cómo usarlo para diseñar páginas web? | femCoders Club
        </title>
        <meta
          name="description"
          content="Descubre qué es CSS, cómo funciona y por qué es esencial en el diseño web. Aprende a aplicarlo con ejemplos prácticos, selectores y enlaces a proyectos reales."
        />
        <meta
          name="keywords"
          content="CSS, introducción a CSS, qué es CSS, estilos web, diseño web, HTML y CSS, tutorial CSS básico, femCoders Club"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/introduccion-css"
        />

        {/* Directivas para motores de búsqueda */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina Ichim" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="¿Qué es CSS y cómo usarlo para diseñar páginas web? | femCoders Club"
        />
        <meta
          property="og:description"
          content="Aprende qué es CSS y cómo aplicarlo para crear páginas web visualmente atractivas. Con ejemplos y mini-proyecto para practicar."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/introduccion-css"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/css/IntroduccionCss.png"
        />
        <meta property="og:site_name" content="femCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="¿Qué es CSS y cómo usarlo para diseñar páginas web?" />
        <meta name="twitter:description" content="Guía básica de CSS con ejemplos, selectores y buenas prácticas. Aprende con femCoders Club y mejora tus habilidades en diseño web." />
        <meta name="twitter:image" content="https://www.femcodersclub.com/assets/css/IntroduccionCss.png" />

        {/* Metadatos de artículo */}
        <meta property="article:published_time" content="2024-11-15T12:00:00Z" />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Introducción" />
        <meta property="article:tag" content="Diseño Web" />
        <meta property="article:tag" content="Tutorial" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/css/IntroduccionCss.png"
          alt="CSS Design"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
        ¿Qué es CSS y por qué es esencial para el diseño web?
      </h1>

      <ShareButtons path="/recursos/css/introduccion-css" title="¿Qué es CSS y cómo usarlo para diseñar páginas web?" />

      <div className="intro-text">
        <p>
          <strong>CSS (Cascading Style Sheets)</strong> es un lenguaje de estilo
          que se utiliza para describir la presentación de un documento escrito
          en HTML. A través de CSS, puedes definir colores, fuentes, márgenes y
          posiciones, lo que te permite dar vida a tus páginas web.
        </p>
        <p>
          Separar la estructura del contenido (HTML) del estilo (CSS) es
          fundamental para mantener un código limpio y facilitar el
          mantenimiento de tus proyectos.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Ejemplos básicos de CSS</h2>
        <p>
          Con CSS, puedes cambiar el color del texto, la fuente y el espacio
          entre elementos. Por ejemplo:
        </p>
        <pre className="code-block bg3">
          {`body {
  background-color: #f0f0f0;
  color: #333;
}

h1 {
  font-family: Arial, sans-serif;
  color: #4737bb;
  margin: 20px 0;
}

p {
  line-height: 1.6;
}`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>Primeros pasos: Inline, Internal y External CSS</h2>
        <p>Hay tres formas de aplicar CSS a un documento HTML:</p>
        <ul>
          <li>
            <span>Inline CSS:</span> Se aplica directamente en el elemento HTML
            utilizando el atributo <code>style</code>.
            <pre className="code-block bg3">
              {`<h1 style="color: blue;">Este es un título en azul</h1>`}
            </pre>
          </li>
          <li>
            <span>Internal CSS:</span> Se incluye en la sección{" "}
            <code>&lt;head&gt;</code> del HTML.
            <pre className="code-block bg3">
              {`<style>
h1 {
  color: blue;
}
</style>`}
            </pre>
          </li>
          <li>
            <span>External CSS:</span> Se enlaza a un archivo CSS externo.
            <pre className="code-block bg3">
              {`<link rel="stylesheet" href="styles.css">`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Uso de Selectores en CSS</h2>
        <p>
          En CSS, los selectores son fundamentales para aplicar estilos a
          elementos específicos. Aquí tienes un ejemplo de cómo aplicar un
          estilo a un párrafo:
        </p>
        <pre className="code-block bg3">
          {`p {
  color: red;
}`}
        </pre>
        <p>
          Si quieres aplicar un estilo a un elemento con una clase, debes
          utilizar el punto <code>.</code>
          antes del nombre de la clase. Por ejemplo:
        </p>
        <pre className="code-block bg3">
          {`.mi-clase {
  color: blue;
}`}
        </pre>
        <p>
          De manera similar, si deseas aplicar estilos a un elemento con un ID,
          debes utilizar el símbolo de almohadilla <code>#</code> antes del
          nombre del ID. Por ejemplo:
        </p>
        <pre className="code-block bg3">
          {`#mi-id {
  font-size: 20px;
}`}
        </pre>
        <p>
          Recuerda que el uso correcto de selectores es esencial para aplicar
          estilos de manera efectiva en tus documentos HTML. Utiliza selectores
          de clase para estilos que se aplican a múltiples elementos y
          selectores de ID para estilos únicos.
        </p>
      </div>

      <h3>Ejemplo práctico de cómo enlazar una hoja de CSS</h3>

      <pre className="code-block bg3">
        {`<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>Bienvenidas a femCoders Club</h1>
<p>En femCoders Club, apoyamos a las mujeres en la tecnología.</p>

</body>
</html>`}
      </pre>

      <div className="highlight-box">
        <h2>Comentarios en CSS</h2>
        <p>Puedes hacer comentarios en CSS utilizando el siguiente formato:</p>
        <pre className="code-block bg3">
          {`/* Este es un comentario en CSS */`}
        </pre>
        <p>
          Para quitar un comentario, puedes usar los atajos de teclado:
          <ul>
            <li>
              <span>Ctrl + K:</span> Agregar comentario.
            </li>
            <li>
              <span>Ctrl + K + U:</span> Para deshacer el comentario.
            </li>
          </ul>
        </p>
        <p>
          Sin embargo, es importante no dejar demasiados comentarios en tu
          código. Los comentarios excesivos pueden hacer que el código sea más
          difícil de leer y mantener. Utiliza los comentarios de manera efectiva
          para explicar partes complejas, pero evita la sobrecarga de
          información.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¡Explora el proyecto! 🚀</h2>
        <p className="intro-text">
          Para que entiendas mejor y para que puedas practicar, hemos creado un
          ejemplo básico. Visita el proyecto en:{" "}
          <span>
            <a
              href="https://femcodersclub.github.io/IntroduccionCSS/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight underline"
            >
              👉 GitHub Pages{" "}
            </a>
          </span>
          o accede al repositorio en
          <span>
            {" "}
            <a
              href="https://github.com/femcodersclub/IntroduccionCSS"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight underline"
            >
              👉 GitHub.
            </a>
          </span>
        </p>
      </div>

      <div className="highlight-box">
        <h2>Conclusión</h2>
        <p>
          En este post, hemos aprendido sobre los conceptos básicos de CSS y
          cómo aplicarlo a nuestros proyectos web. En futuros artículos,
          profundizaremos en técnicas más avanzadas y en el uso de CSS para
          crear diseños atractivos y responsivos. ¡Esperamos que te unas a
          nosotras en este viaje!
        </p>
      </div>
      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de femCoders Club</p>
        <p>
          Fecha de publicación:{" "}
          <strong>{new Date().toLocaleDateString()}</strong>
        </p>
      </div>
      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <CommentsSection postId={postId} />
    </div>
  );
};

export default IntroduccionCSS;
