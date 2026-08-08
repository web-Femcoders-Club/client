import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const HTMLSemanticoYLayout: React.FC = () => {
  const publicationDate = "30 de octubre de 2023";
  return (
    <div className="blog-post">
      <Helmet>
        <title>HTML Semántico y Diseño de Layout | FemCoders Club</title>
        <meta
          name="description"
          content="Explora el HTML semántico, su importancia para la accesibilidad y SEO, y cómo estructurar layouts de manera efectiva."
        />
        <meta
          name="keywords"
          content="HTML, semántica, diseño web, accesibilidad, SEO, layout, etiquetas semánticas, estructura web"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/html/html-semantico"
        />

        {/* Directivas para motores de búsqueda */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina Ichim" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="HTML Semántico y Diseño de Layout" />
        <meta
          property="og:description"
          content="Aprende a usar etiquetas semánticas y a crear layouts efectivos para mejorar la experiencia de usuario y el posicionamiento web."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/html/html-semantico"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/html/ejemplo-layout.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HTML Semántico y Diseño de Layout"
        />
        <meta
          name="twitter:description"
          content="Explora la importancia del HTML semántico para crear páginas accesibles y bien estructuradas."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/html/ejemplo-layout.png"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2023-10-30T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="HTML" />
        <meta property="article:tag" content="Semántica" />
        <meta property="article:tag" content="Layout" />
        <meta property="article:tag" content="Accesibilidad" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/html/ejemplo-layout.png"
          alt="Ejemplo de layout en HTML"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">HTML Semántico y Diseño de Layout</h1>

      <ShareButtons path="/recursos/html/html-semantico" title="HTML Semántico y Diseño de Layout" />

      <div className="intro-text">
        <p>
          El HTML semántico y el diseño de layouts son conceptos fundamentales
          en la creación de páginas web efectivas. En este post, exploraremos
          qué es un layout, la importancia del HTML semántico, y cómo estas
          prácticas se relacionan para mejorar la accesibilidad y la experiencia
          del usuario. Si estás empezando, te recomendamos comenzar por nuestra{" "}
          <a
            href="/recursos/html/introduccion-html"
            className="highlight underline"
          >
            introducción a HTML
          </a>{" "}
          y continuar con los{" "}
          <a
            href="/recursos/html/elementos-html-clave"
            className="highlight underline"
          >
            elementos clave de HTML
          </a>{" "}
          antes de sumergirte en esta parte más avanzada.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¿Qué es un layout🏗️?</h2>
        <p>
          Un layout es la organización de los elementos visuales en una página
          web, determinando cómo se presenta la información al usuario. Es
          decir, cómo se organizan los diferentes bloques de contenido (texto,
          imágenes, videos, etc.) en la pantalla.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¿Cómo se crea un layout en HTML?</h2>
        <p>
          Para crear un layout en HTML, se utilizan principalmente las
          siguientes etiquetas:
        </p>
        <ul>
          <li>
            <span>
              Etiquetas de división (<code>div</code>):
            </span>{" "}
            Son como contenedores que agrupan otros elementos. Puedes asignar
            estilos CSS a estas divisiones para controlar su tamaño, posición y
            apariencia.
          </li>
          <li>
            <span>Etiquetas semánticas:</span> Etiquetas como{" "}
            <strong>
              <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
              <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>,{" "}
              <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>{" "}
            </strong>{" "}
            proporcionan una estructura semántica a tu contenido, lo que
            facilita tanto a los navegadores como a los motores de búsqueda
            entender la organización de tu página.
          </li>
          <li>
            <span>
              Tablas (<code>table</code>):
            </span>{" "}
            Aunque menos utilizadas en diseños modernos, las tablas siguen
            siendo útiles para organizar datos en filas y columnas.
          </li>
          <li>
            <span>Flexbox y Grid:</span> Son modelos de diseño más modernos y
            flexibles que permiten crear layouts complejos de manera más
            sencilla.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Ejemplo de Layout en HTML</h2>

        <p>
          En este diagrama textual, puedes ver cómo se utilizan diferentes
          secciones semánticas para organizar el contenido de manera coherente y
          accesible.
        </p>

        <pre className="code-block bg3">
          {`+---------------------------------------+
|        <header>                       | 🏠  // Define la cabecera de un documento o sección
|        Header                         |
+---------------------------------------+
|        <nav>                          | 📜  // Define un conjunto de enlaces de navegación
|        Navigation                     |
+---------------------------------------+
|        <main>                         | 📝  // Define el contenido principal
| +-----------------------------------+ |
| |    <aside>                          | 🖼️  // Define contenido secundario relacionado
| |      Sidebar                      | |
| +-----------------------------------+ |
| |   <article>                         | 📄  // Define un contenido independiente y autocontenido
| |     Main Area                     | |
| |  <section>                          | 📚  // Define una sección temática
| |    <h2>Título</h2>                  |
| |    <p>Contenido...</p>              |
| |  </section>                       | |
| +-----------------------------------+ |
| +-----------------------------------+ |
| |  <details>                          | 🔍  // Detalles adicionales que el usuario puede abrir
| |<summary>Más información</summary>   |     // Título para el contenido oculto
| |   <p>Contenido adicional.</p>       |
| |  </details>                       | |
| +-----------------------------------+ |
+---------------------------------------+
|        <footer>                       | 📜  // Define un pie de página para el documento
|        Footer                         |
+---------------------------------------+
`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>HTML Semántico: ¿Por qué es importante🔍?</h2>
        <p>
          El HTML semántico es una práctica que consiste en utilizar las
          etiquetas de HTML de manera significativa, es decir, asignando un
          significado específico a cada elemento. Esto no solo facilita la
          comprensión del contenido por parte de los desarrolladores, sino que
          también mejora la accesibilidad y el SEO del sitio web. Un layout bien
          diseñado con etiquetas semánticas ayuda a los usuarios y a los motores
          de búsqueda a entender la estructura y el propósito de cada sección de
          la página.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Etiquetas semánticas importantes💡</h2>
        <ul>
          <li>
            <span>
              <code>&lt;header&gt;</code>{" "}
            </span>
            - Define la cabecera de un documento o sección. Suele contener el
            título principal, el logotipo, el menú de navegación principal y
            otros elementos de identificación de la página o sección.
            <pre className="code-block bg3">
              {`<header>
  <h1>Bienvenidos a mi blog</h1>
  <nav>
    <ul>
      <li><a href="#home">Inicio</a></li>
      <li><a href="#about">Sobre mí</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
</header>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;nav&gt;</code>{" "}
            </span>
            - Define un conjunto de enlaces de navegación. Se utiliza para
            agrupar los enlaces principales que permiten al usuario navegar
            entre las diferentes secciones de un sitio web, facilitando la
            orientación y mejorando la experiencia del usuario.
            <pre className="code-block bg3">
              {`<nav>
  <ul>
    <li><a href="#home">Inicio</a></li>
    <li><a href="#services">Servicios</a></li>
    <li><a href="#portfolio">Portafolio</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</nav>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;section&gt;</code>{" "}
            </span>
            - Define una sección en un documento. Se utiliza para agrupar
            contenido temático relacionado dentro de una página. Por ejemplo,
            una sección de noticias, una sección de productos, etc.
            <pre className="code-block bg3">
              {`<section>
  <h2>Últimas Noticias</h2>
  <article>
    <h3>Título de la noticia</h3>
    <p>Descripción de la noticia...</p>
  </article>
</section>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;article&gt;</code>{" "}
            </span>
            - Define un contenido independiente y autocontenido. Se emplea para
            encapsular contenido que podría ser distribuido o reutilizado por sí
            solo, como una entrada de blog, un artículo de noticias, un
            comentario, etc.
            <pre className="code-block bg3">
              {`<article>
  <h2>Cómo aprender a programar</h2>
  <p>La programación es una habilidad valiosa en el mundo digital actual...</p>
</article>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;aside&gt;</code>{" "}
            </span>
            - Define contenido secundario relacionado. Sirve para contener
            contenido complementario, como barras laterales, citas, cuadros
            informativos, etc.
            <pre className="code-block bg3">
              {`<aside>
  <h3>Citas Destacadas</h3>
  <p>"El único modo de hacer un gran trabajo es amar lo que haces." - Steve Jobs</p>
</aside>`}
            </pre>
          </li>
          <li>
            <span>
              <code>&lt;footer&gt;</code>
            </span>{" "}
            - Define un pie de página para un documento o sección. Suele
            contener información de copyright, enlaces a políticas de
            privacidad, mapas del sitio, etc.
            <pre className="code-block bg3">
              {`<footer>
  <p>&copy; 2024 Mi Blog. Todos los derechos reservados.</p>
  <a href="#privacy-policy">Política de privacidad</a>
</footer>`}
            </pre>
          </li>
          <li>
            <span>
              <code>&lt;details&gt;</code>{" "}
            </span>
            - Define detalles adicionales que el usuario puede abrir y cerrar.
            Permite ocultar contenido adicional que el usuario puede expandir si
            lo desea, como una descripción detallada de un producto, una
            transcripción de un video, etc.
            <pre className="code-block bg3">
              {`<details>
  <summary>Más información sobre el curso</summary>
  <p>Este curso te enseñará los fundamentos de la programación...</p>
</details>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;summary&gt;</code>{" "}
            </span>
            - Define un encabezado para el elemento <code>&lt;details&gt;</code>
            . Sirve como un título o etiqueta para el contenido oculto dentro
            del elemento <code>&lt;details&gt;</code>. Al hacer clic en el{" "}
            <code>&lt;summary&gt;</code>, el contenido se expande o contrae.
            <pre className="code-block bg3">
              {`<details>
  <summary>Contenido Adicional</summary>
  <p>Más información detallada...</p>
</details>`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>¿Por qué son importantes las etiquetas semánticas?</h2>
        <p>
          <strong>Accesibilidad:</strong> Las etiquetas semánticas proporcionan
          información adicional sobre la estructura y el propósito de cada
          elemento en la página, lo que facilita la navegación y la comprensión
          del contenido para las personas con discapacidades visuales o
          cognitivas.
        </p>
        <p>
          <strong>SEO:</strong> Los motores de búsqueda utilizan la estructura
          semántica de una página para comprender mejor su contenido y
          relevancia. Utilizar etiquetas semánticas correctamente puede mejorar
          la clasificación de tu sitio web en los resultados de búsqueda.
        </p>
        <p>
          <strong>Mantenimiento:</strong> Un código bien estructurado y
          semántico es más fácil de mantener y actualizar en el futuro, ya que
          facilita la identificación y modificación de diferentes secciones de
          la página.
        </p>
        <p>
          <strong>Mejores Prácticas de Diseño Web:</strong> El uso de etiquetas
          semánticas fomenta una estructura web más organizada y coherente, lo
          que mejora la experiencia del usuario.
        </p>
        <p>
          <strong>Utilizar etiquetas semánticas</strong> no solo mejora la
          accesibilidad y SEO, sino que también facilita la creación de un
          layout limpio y organizado. Cada etiqueta tiene un propósito, lo que
          permite a los desarrolladores y navegadores entender mejor la
          estructura de la página.
        </p>
      </div>

      <div className="highlight-box">
        <h2> Conclusión🌟</h2>
        <p>
          En resumen, el uso de etiquetas semánticas en HTML no solo mejora la
          accesibilidad de tus páginas web, sino que también facilita la
          comprensión del contenido por parte de los motores de búsqueda. Al
          utilizar etiquetas como <code>&lt;header&gt;</code>,{" "}
          <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>,{" "}
          <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, y{" "}
          <code>&lt;footer&gt;</code>, estás construyendo una estructura lógica
          y fácil de seguir para los usuarios.
        </p>
        <p>
          Recuerda que el uso de etiquetas semánticas no es solo una buena
          práctica, sino que es esencial para crear experiencias de usuario
          efectivas y accesibles.
        </p>

        <h2>Referencias</h2>
        <p>
          Para profundizar en el HTML semántico y el diseño de layouts, aquí
          tienes algunos recursos útiles:
        </p>
        <ul>
          <li>
            <span>
              <a
                href="https://www.w3schools.com/html/html_layout.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight underline"
              >
                W3Schools: HTML Layouts
              </a>
            </span>
          </li>
          <li>
            <span>
              {" "}
              <a
                href="https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight underline"
              >
                MDN Web Docs: Introducción a HTML
              </a>
            </span>
          </li>
        </ul>
        <p>
          ¿Te ha gustado este artículo? Entonces también te puede interesar
          nuestra{" "}
          <a
            href="/recursos/html/introduccion-html"
            className="highlight underline"
          >
            introducción a HTML
          </a>
          , los{" "}
          <a
            href="/recursos/html/elementos-html-clave"
            className="highlight underline"
          >
            elementos clave de HTML
          </a>{" "}
          y nuestra guía sobre{" "}
          <a
            href="/recursos/html/html-seo-accesibilidad"
            className="highlight underline"
          >
            HTML, SEO y accesibilidad
          </a>
          . ¡Sigue explorando y mejorando tus habilidades!
        </p>

        <p>
          Nos encantaría conocer tus experiencias y preguntas sobre HTML
          semántico y diseño de layouts. ¿Has implementado etiquetas semánticas
          en tus proyectos? ¿Qué desafíos has encontrado? ¡Comparte tus
          pensamientos en los comentarios a continuación!
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de femCoders Club</p>
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
        </p>
      </div>
      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <CommentsSection postId={8} />
    </div>
  );
};

export default HTMLSemanticoYLayout;
