import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../../components/post/PlantillaPost";
import { CodigoPost, SeccionPost } from "../../../components/post/PiezasPost";

const IntroduccionCSS: React.FC = () => (
  <>
      <Helmet>
        <title>
          ¿Qué es CSS y cómo usarlo para diseñar páginas web? | FemCoders Club
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
          content="¿Qué es CSS y cómo usarlo para diseñar páginas web? | FemCoders Club"
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

    <PlantillaPost
      ruta="/recursos/css/introduccion-css"
      titulo="¿Qué es CSS y por qué es esencial para el diseño web?"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={4}
      entradilla={
        <>
          <p>
            <strong>CSS (Cascading Style Sheets)</strong> es un lenguaje de
            estilo que se utiliza para describir la presentación de un
            documento escrito en HTML. Con CSS defines colores, fuentes,
            márgenes y posiciones: es lo que da vida a tus páginas web.
          </p>
          <p>
            Separar la estructura del contenido (HTML) del estilo (CSS) es
            fundamental para mantener un código limpio y facilitar el
            mantenimiento de tus proyectos.
          </p>
        </>
      }
    >
      <SeccionPost titulo="Ejemplos básicos de CSS">
        <p>
          Con CSS puedes cambiar el color del texto, la fuente y el espacio
          entre elementos. Por ejemplo:
        </p>
        <CodigoPost lenguaje="CSS">{`body {
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
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Primeros pasos: CSS en línea, interno y externo">
        <p>Hay tres formas de aplicar CSS a un documento HTML:</p>

        <h3>En línea (inline)</h3>
        <p>
          Se aplica directamente en el elemento HTML con el atributo{" "}
          <code>style</code>.
        </p>
        <CodigoPost lenguaje="HTML">{`<h1 style="color: blue;">Este es un título en azul</h1>`}</CodigoPost>

        <h3>Interno (internal)</h3>
        <p>
          Se incluye en la sección <code>&lt;head&gt;</code> del HTML.
        </p>
        <CodigoPost lenguaje="HTML">{`<style>
h1 {
  color: blue;
}
</style>`}</CodigoPost>

        <h3>Externo (external)</h3>
        <p>Se enlaza a un archivo CSS aparte.</p>
        <CodigoPost lenguaje="HTML">{`<link rel="stylesheet" href="styles.css">`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Uso de selectores en CSS">
        <p>
          En CSS, los selectores son fundamentales para aplicar estilos a
          elementos específicos. Así se aplica un estilo a un párrafo:
        </p>
        <CodigoPost lenguaje="CSS">{`p {
  color: red;
}`}</CodigoPost>
        <p>
          Para aplicar un estilo a un elemento con una clase, se escribe un
          punto <code>.</code> antes del nombre de la clase:
        </p>
        <CodigoPost lenguaje="CSS">{`.mi-clase {
  color: blue;
}`}</CodigoPost>
        <p>
          Y para un elemento con un ID, la almohadilla <code>#</code> antes del
          nombre del ID:
        </p>
        <CodigoPost lenguaje="CSS">{`#mi-id {
  font-size: 20px;
}`}</CodigoPost>
        <p>
          Usar bien los selectores es esencial para aplicar estilos de manera
          efectiva. Utiliza selectores de clase para los estilos que se repiten
          en varios elementos y selectores de ID para los estilos únicos.
        </p>

        <h3>Ejemplo práctico: cómo enlazar una hoja de CSS</h3>
        <CodigoPost lenguaje="HTML">{`<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>Bienvenidas a femCoders Club</h1>
<p>En femCoders Club, apoyamos a las mujeres en la tecnología.</p>

</body>
</html>`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Comentarios en CSS">
        <p>Puedes escribir comentarios en CSS con este formato:</p>
        <CodigoPost lenguaje="CSS">{`/* Este es un comentario en CSS */`}</CodigoPost>
        <p>En VS Code tienes atajos de teclado para comentar más rápido:</p>
        <ul>
          <li>
            <strong>Ctrl + /</strong> (<strong>Cmd + /</strong> en Mac):
            comenta o descomenta las líneas seleccionadas.
          </li>
          <li>
            <strong>Ctrl + K, Ctrl + U</strong>: quita el comentario.
          </li>
        </ul>
        <p>
          Eso sí, no dejes demasiados comentarios en tu código: en exceso lo
          hacen más difícil de leer y de mantener. Úsalos para explicar las
          partes complejas, sin sobrecargar de información.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Explora el proyecto">
        <p>
          Para que lo entiendas mejor y puedas practicar, hemos creado un
          ejemplo básico. Puedes verlo en{" "}
          <a
            href="https://femcodersclub.github.io/IntroduccionCSS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Pages
          </a>{" "}
          o consultar el código en{" "}
          <a
            href="https://github.com/femcodersclub/IntroduccionCSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            su repositorio de GitHub
          </a>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          En este post hemos visto los conceptos básicos de CSS y cómo
          aplicarlo a nuestros proyectos web. En los próximos artículos
          profundizaremos en técnicas más avanzadas y en cómo usar CSS para
          crear diseños atractivos y adaptables. ¡Te esperamos!
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default IntroduccionCSS;
