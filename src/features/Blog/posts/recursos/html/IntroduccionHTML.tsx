import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  NotaPost,
  SeccionPost,
} from "../../../components/post/PiezasPost";

const IntroduccionHTML: React.FC = () => (
  <>
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

    <PlantillaPost
      ruta="/recursos/html/introduccion-html"
      titulo="Introducción a HTML: la base de la web"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={2}
      entradilla={
        <p>
          <strong>HTML (HyperText Markup Language)</strong> es el lenguaje
          fundamental que da estructura a todas las páginas web. Actúa como el
          esqueleto de un sitio web, organizando el contenido y permitiendo que
          los navegadores, como Chrome o Firefox, lo interpreten y lo muestren
          visualmente al usuario.
        </p>
      }
    >
      <SeccionPost titulo="¿Qué es HTML y por qué es importante?">
        <p>
          HTML es un <strong>lenguaje de marcado</strong> diseñado para
          organizar y estructurar el contenido en la web. A través de sus
          etiquetas, HTML define distintos elementos de una página web como
          textos, imágenes, vídeos, enlaces, tablas y mucho más. Cada etiqueta
          tiene un propósito específico, ya sea estructurar el contenido, dar
          significado a ciertos elementos o proporcionar información a los
          motores de búsqueda.
        </p>
        <p>
          Una de las grandes fortalezas de HTML es{" "}
          <strong>su simplicidad y accesibilidad</strong>. Permite que
          cualquiera, desde principiantes hasta desarrolladores avanzados, cree
          sitios web estructurados y bien organizados. Además, HTML es
          compatible con todos los navegadores y dispositivos, lo que lo
          convierte en la piedra angular de la web.
        </p>
        <p>
          Por otro lado, HTML no funciona solo: está diseñado para trabajar
          junto con <strong>CSS</strong> (que se encarga de los estilos y del
          diseño visual) y <strong>JavaScript</strong> (que añade
          interactividad a las páginas web). Juntos forman el núcleo de
          cualquier página moderna.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Historia del HTML">
        <p>
          HTML fue creado por Tim Berners-Lee en 1991. Originalmente fue
          diseñado para compartir documentos científicos en la web de manera más
          fácil y accesible. Tim Berners-Lee, el inventor de la World Wide Web,
          desarrolló HTML como una forma de interconectar documentos y
          enlazarlos entre sí. Desde su creación, HTML ha evolucionado
          considerablemente, permitiendo no solo compartir textos, sino también
          multimedia, y haciéndose cada vez más robusto para soportar
          aplicaciones web modernas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Evolución de las versiones de HTML">
        <p>
          A lo largo de los años, HTML ha pasado por varias versiones
          importantes. Estas son algunas de las más destacadas:
        </p>
        <ul>
          <li>
            <strong>HTML 4.01</strong>: introducido en 1999, trajo una
            estructura más organizada para el marcado web y la separación de
            contenido y presentación (CSS).
          </li>
          <li>
            <strong>XHTML</strong>: a principios de los 2000, XHTML intentó
            combinar las reglas estrictas de XML con HTML, exigiendo un código
            más limpio y correcto.
          </li>
          <li>
            <strong>HTML5</strong>: publicado en 2014, es la versión actual y se
            centra en ofrecer soporte nativo para multimedia (audio, vídeo),
            aplicaciones web, gráficos y mejoras en la semántica y la
            accesibilidad. Además, trajo nuevas etiquetas como{" "}
            <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{" "}
            <code>&lt;header&gt;</code> y <code>&lt;footer&gt;</code>, que
            mejoran la estructura semántica de una página web.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Errores comunes al escribir HTML">
        <p>
          Al trabajar con HTML, es común cometer algunos errores. Estos son
          algunos de los más habituales:
        </p>

        <h3>No cerrar las etiquetas correctamente</h3>
        <p>
          Asegúrate siempre de cerrar las etiquetas con{" "}
          <code>&lt;/nombre-de-etiqueta&gt;</code>, especialmente en HTML más
          estricto como XHTML. Por ejemplo:
        </p>
        <CodigoPost lenguaje="HTML">{`<div>
  <h1>Título</h1>
</div>`}</CodigoPost>

        <h3>
          Olvidar el atributo <code>alt</code> en las imágenes
        </h3>
        <p>
          El atributo <code>alt</code> es fundamental para la accesibilidad:
          describe el contenido de la imagen para las personas con
          discapacidades visuales, y además ayuda al SEO. Ejemplo:
        </p>
        <CodigoPost lenguaje="HTML">{`<img src="imagen.jpg" alt="Descripción de la imagen">`}</CodigoPost>

        <h3>No usar etiquetas semánticas</h3>
        <p>
          Es importante usar etiquetas semánticas como{" "}
          <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> y{" "}
          <code>&lt;header&gt;</code> para mejorar la estructura y la
          accesibilidad de tu página web. Por ejemplo:
        </p>
        <CodigoPost lenguaje="HTML">{`<article>
  <header>
    <h2>Título del artículo</h2>
  </header>
  <p>Contenido del artículo...</p>
</article>`}</CodigoPost>

        <h3>No incluir un doctype</h3>
        <p>
          Es esencial declarar un doctype al principio de tu documento HTML para
          que los navegadores sepan qué versión de HTML estás utilizando.
          Ejemplo:
        </p>
        <CodigoPost lenguaje="HTML">{`<!DOCTYPE html>`}</CodigoPost>

        <h3>Usar mal las etiquetas de bloque y en línea</h3>
        <p>
          Algunas etiquetas son de bloque (como <code>&lt;div&gt;</code> o{" "}
          <code>&lt;p&gt;</code>) y otras son en línea (como{" "}
          <code>&lt;span&gt;</code> o <code>&lt;a&gt;</code>). Usarlas
          incorrectamente puede afectar al diseño. Ejemplo:
        </p>
        <CodigoPost lenguaje="HTML">{`<div>
  <span>Texto en línea</span>
</div>`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Compatibilidad entre navegadores">
        <p>
          Uno de los retos más grandes al trabajar con HTML es asegurarse de que
          tu página se vea bien en diferentes navegadores (Chrome, Firefox,
          Safari, Edge…). Algunos elementos de HTML pueden interpretarse de
          manera diferente según el navegador, así que es importante:
        </p>
        <ul>
          <li>Probar tus páginas en varios navegadores.</li>
          <li>
            Usar herramientas como{" "}
            <a href="https://caniuse.com" target="_blank" rel="noopener noreferrer">
              Can I Use
            </a>{" "}
            para verificar la compatibilidad de ciertos elementos o
            funcionalidades.
          </li>
          <li>
            Implementar <strong>polyfills</strong>, fragmentos de código que
            permiten a los navegadores más antiguos utilizar nuevas
            características de HTML5 o JavaScript. Los polyfills simulan estas
            funcionalidades en navegadores que no las soportan de manera nativa,
            para que tu sitio funcione en una mayor variedad de navegadores.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Ejemplo básico de HTML">
        <CodigoPost lenguaje="HTML">{`<!DOCTYPE html>
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
</html>`}</CodigoPost>
      </SeccionPost>

      <SeccionPost
        titulo="Entendiendo el <head> de un documento HTML"
        id="entendiendo-el-head"
      >
        <p>
          El <code>&lt;head&gt;</code> de un documento HTML contiene información
          importante que no es visible en la página, pero es esencial para su
          correcto funcionamiento. Estos son algunos de los elementos clave:
        </p>

        <h3>
          1. <code>charset="UTF-8"</code>
        </h3>
        <p>
          La metaetiqueta <code>charset="UTF-8"</code> especifica la
          codificación de caracteres que usará el navegador para mostrar
          correctamente el texto de la página. UTF-8 es una codificación
          estándar que permite representar prácticamente todos los caracteres de
          los idiomas del mundo, incluidos símbolos y emojis. Usar UTF-8 asegura
          que tu página se leerá correctamente en cualquier navegador y región.
        </p>

        <h3>
          2. <code>lang="es"</code>
        </h3>
        <p>
          El atributo <code>lang="es"</code> en la etiqueta{" "}
          <code>&lt;html&gt;</code> le indica al navegador y a los motores de
          búsqueda qué idioma predomina en la página. Es útil para la
          accesibilidad, porque ayuda a los lectores de pantalla a pronunciar
          correctamente las palabras, y también para el SEO, porque los
          buscadores pueden indexar mejor tu contenido.
        </p>

        <h3>3. Metaetiquetas</h3>
        <p>
          Las metaetiquetas son elementos dentro del <code>&lt;head&gt;</code>{" "}
          que proporcionan metadatos sobre la página. No se muestran en la
          página web, pero son importantes para los motores de búsqueda y las
          redes sociales. Algunos ejemplos:
        </p>
        <ul>
          <li>
            <code>&lt;meta name="description" content="Descripción de tu sitio"&gt;</code>:
            proporciona una descripción de la página para los motores de
            búsqueda.
          </li>
          <li>
            <code>&lt;meta name="keywords" content="HTML, programación, tutorial"&gt;</code>:
            lista de palabras clave para SEO.
          </li>
          <li>
            <code>&lt;meta name="author" content="Tu nombre"&gt;</code>:
            especifica quién ha escrito la página.
          </li>
        </ul>

        <h3>4. Favicon</h3>
        <p>
          El <strong>favicon</strong> es el pequeño icono que aparece en la
          pestaña del navegador cuando se abre tu página web. Se añade en el{" "}
          <code>&lt;head&gt;</code> con el siguiente código:
        </p>
        <CodigoPost lenguaje="HTML">{`<link rel="icon" href="/ruta/del/favicon.ico" type="image/x-icon">`}</CodigoPost>

        <h3>5. Incluir CSS y JavaScript</h3>
        <p>
          Dentro del <code>&lt;head&gt;</code> también puedes incluir hojas de
          estilo CSS y archivos JavaScript que definan el diseño y el
          comportamiento de tu sitio web. Aquí tienes un ejemplo:
        </p>
        <CodigoPost lenguaje="HTML">{`<link rel="stylesheet" href="styles.css">
<script src="script.js" defer></script>`}</CodigoPost>
        <NotaPost titulo="El atributo defer">
          <p>
            El atributo <code>defer</code> en la etiqueta{" "}
            <code>&lt;script&gt;</code> indica al navegador que el archivo
            JavaScript se debe ejecutar después de analizar el HTML. Así el
            script no bloquea la renderización del contenido visible y la página
            carga antes.
          </p>
        </NotaPost>

        <h3>6. Lo que viene en futuros posts</h3>
        <p>
          En este post hemos cubierto los conceptos básicos de HTML, pero hay
          mucho más que se puede añadir en el <code>&lt;head&gt;</code>. En
          futuros posts exploraremos temas como:
        </p>
        <ul>
          <li>
            Cómo optimizar el <code>&lt;head&gt;</code> para mejorar la
            velocidad de carga del sitio.
          </li>
          <li>La importancia de los favicons, el archivo robots.txt y los sitemaps.</li>
          <li>
            La incorporación de bibliotecas externas, como Google Fonts o
            frameworks de JavaScript.
          </li>
          <li>
            La optimización SEO avanzada con metaetiquetas y datos
            estructurados.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="HTML, CSS y JavaScript: trabajando juntos">
        <p>
          <strong>HTML</strong> da la estructura a la página web, mientras que{" "}
          <strong>CSS</strong> se encarga del diseño y el estilo (colores,
          fuentes, márgenes) y <strong>JavaScript</strong> añade interactividad
          (formularios dinámicos, botones, etc.). Estos tres lenguajes se
          complementan para crear sitios web completos y modernos.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Recursos para seguir aprendiendo HTML">
        <p>
          Si quieres profundizar en HTML, aquí tienes algunos recursos útiles:
        </p>
        <ul>
          <li>
            <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              MDN Web Docs: HTML
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
              W3Schools: HTML
            </a>
          </li>
          <li>
            <a href="https://html.com/" target="_blank" rel="noopener noreferrer">
              HTML.com
            </a>
          </li>
          <li>
            <a href="https://lenguajehtml.com" target="_blank" rel="noopener noreferrer">
              Lenguaje HTML: guía completa de HTML5
            </a>
          </li>
        </ul>
        <p>
          <strong>HTML</strong> es la piedra angular de cualquier página web. Al
          dominar sus conceptos básicos, estarás en camino de crear sitios web
          bien estructurados y accesibles. En los próximos posts
          profundizaremos en <strong>CSS</strong> y <strong>JavaScript</strong>,
          las herramientas que te permitirán transformar tu estructura HTML en
          una web moderna e interactiva.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default IntroduccionHTML;
