import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  NotaPost,
  SeccionPost,
} from "../../../components/post/PiezasPost";

const ElementosHTMLClave: React.FC = () => (
  <>
  <Helmet>
  <title>Elementos HTML clave: encabezados, párrafos, enlaces e imágenes</title>
  <meta
    name="description"
    content="Descubre cómo usar encabezados, párrafos, enlaces, imágenes y más en HTML. Aprende buenas prácticas para estructurar contenido accesible y atractivo."
  />
  <meta
    name="keywords"
    content="HTML, etiquetas HTML, encabezados, párrafos, enlaces, imágenes, video en HTML, emojis, accesibilidad web"
  />

  {/* Metadatos canónicos */}
  <link
    rel="canonical"
    href="https://www.femcodersclub.com/recursos/html/elementos-html-clave"
  />

  {/* Directivas para motores de búsqueda */}
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow" />
  <meta name="bingbot" content="index, follow" />
  <meta name="author" content="Irina Ichim" />

  {/* Open Graph para compartir en redes sociales */}
  <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content="Elementos HTML clave: encabezados, párrafos, enlaces e imágenes"
  />
  <meta
    property="og:description"
    content="Explora los elementos esenciales de HTML y aprende a enriquecer tus páginas web con imágenes, enlaces, emojis y videos."
  />
  <meta
    property="og:url"
    content="https://www.femcodersclub.com/recursos/html/elementos-html-clave"
  />
  <meta
    property="og:image"
    content="https://www.femcodersclub.com/assets/html/Elementos-HTML-Clave.png"
  />
  <meta property="og:site_name" content="FemCoders Club" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Elementos HTML clave: encabezados, párrafos, enlaces e imágenes"
  />
  <meta
    name="twitter:description"
    content="Aprende a usar encabezados, enlaces, imágenes, emojis y más en HTML para crear contenido accesible y moderno."
  />
  <meta
    name="twitter:image"
    content="https://www.femcodersclub.com/assets/html/Elementos-HTML-Clave.png"
  />
  <meta name="twitter:creator" content="@femcodersclub" />

  {/* Metadatos de artículo */}
  <meta
    property="article:published_time"
    content="2023-10-21T12:00:00Z"
  />
  <meta property="article:author" content="Irina Ichim" />
  <meta property="article:section" content="Desarrollo Web" />
  <meta property="article:tag" content="HTML" />
  <meta property="article:tag" content="Elementos HTML" />
  <meta property="article:tag" content="Encabezados" />
  <meta property="article:tag" content="Enlaces" />

  {/* Metadatos adicionales */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="language" content="Spanish" />
</Helmet>

    <PlantillaPost
      ruta="/recursos/html/elementos-html-clave"
      titulo="Elementos HTML clave: encabezados, párrafos, enlaces e imágenes"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={3}
      entradilla={
        <p>
          ¿Alguna vez te has preguntado cómo los encabezados organizan la
          información en una página o cómo se crean enlaces que llevan a otros
          sitios? En esta sección, exploraremos los elementos esenciales de HTML
          que te permitirán estructurar tu contenido de forma clara y efectiva.
          Si aún no has leído nuestra{" "}
          <a href="/recursos/html/introduccion-html">introducción a HTML</a>, te
          recomendamos empezar por allí para comprender la base de este
          lenguaje. Además, aprenderás a añadir imágenes, videos y emojis para
          hacer tu página más atractiva y accesible. ¡Vamos a sumergirnos en el
          mundo de los elementos HTML clave!
        </p>
      }
    >
      <SeccionPost titulo="1. Encabezados (<h1> - <h6>)" id="encabezados">
        <p>
          Comenzaremos por los encabezados (<code>&lt;h1&gt;</code> a{" "}
          <code>&lt;h6&gt;</code>), que sirven para organizar el contenido
          jerárquicamente. Los encabezados no solo hacen que tu página sea más
          fácil de leer, sino que también ayudan a los motores de búsqueda a
          entender el contenido de tu página.
        </p>
      </SeccionPost>

      <SeccionPost
        titulo="2. Párrafos (<p>) y otras etiquetas de texto"
        id="parrafos"
      >
        <p>
          El elemento <code>&lt;p&gt;</code> define un párrafo. Para darle
          formato al texto dentro de un párrafo, podemos utilizar diferentes
          etiquetas:
        </p>
        <ul>
          <li>
            <strong>
              <code>&lt;strong&gt;</code>
            </strong>
            : Resalta texto importante, como palabras clave. Por ejemplo:{" "}
            <strong>Este es el texto más importante</strong>.
          </li>
          <li>
            <strong>
              <code>&lt;em&gt;</code>
            </strong>
            : Enfatiza una palabra o frase. Por ejemplo:{" "}
            <em>Este texto debe destacar</em>.
          </li>
          <li>
            <strong>
              <code>&lt;blockquote&gt;</code>
            </strong>
            : Cita un bloque de texto de otra fuente. Por ejemplo:
            <blockquote>
              "La mejor forma de aprender es haciendo." - Confucio
            </blockquote>
          </li>
          <li>
            <strong>
              <code>&lt;pre&gt;</code>
            </strong>
            : Muestra texto preformateado, ideal para código:
            <CodigoPost lenguaje="JavaScript">{`function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}`}</CodigoPost>
          </li>
          <li>
            <strong>
              <code>&lt;code&gt;</code>
            </strong>
            : Resalta fragmentos de código dentro de un párrafo. Por ejemplo:
            Utiliza el método <code>console.log()</code> para mostrar mensajes
            en la consola.
          </li>
          <li>
            <strong>
              <code>&lt;mark&gt;</code>
            </strong>
            : Destaca texto, como en una búsqueda:{" "}
            <mark>Este texto ha sido encontrado en la búsqueda</mark>.
          </li>
          <li>
            <strong>
              <code>&lt;abbr&gt;</code>
            </strong>
            : Define una abreviatura: HTML significa{" "}
            <abbr title="HyperText Markup Language">
              HyperText Markup Language
            </abbr>
            .
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="3. Enlaces (<a>)" id="enlaces">
        <p>
          Los enlaces (<code>&lt;a&gt;</code>) son fundamentales para conectar
          diferentes páginas web. Aprenderás cómo crear enlaces internos y
          externos, y cómo utilizar atributos como target para controlar dónde
          se abre un enlace.
        </p>
        <CodigoPost lenguaje="HTML">{`<a href="https://www.femcodersclub.com" target="_blank">Visita femCoders Club</a>`}</CodigoPost>
      </SeccionPost>

      <SeccionPost
        titulo="4. Imágenes (<img>) y la importancia del atributo alt"
        id="imagenes"
      >
        <p>
          Las imágenes (<code>&lt;img&gt;</code>) añaden vida a tus páginas web.
          Descubrirás cómo insertar imágenes y la importancia del atributo alt
          para la accesibilidad. El atributo alt describe el contenido de la
          imagen para las personas que utilizan lectores de pantalla.
        </p>
        <CodigoPost lenguaje="HTML">{`<img src="/FemCodersClubLogo.png" alt="Logo femCoders Club">`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="5. Usando Emojis en HTML">
        <p>
          ¡Los emojis pueden hacer que tu página sea más atractiva y amigable!
          Puedes añadirlos directamente en el texto como cualquier otro
          carácter.
        </p>
        <p>
          ¿Sabías que los emojis tienen códigos específicos? Por ejemplo, el
          emoji de pulgar hacia arriba (👍) se representa como{" "}
          <code>&amp;#128077;</code>. Aunque puedes copiar y pegar emojis
          directamente, conocer su código puede ser útil en ciertas situaciones.
        </p>
        <NotaPost titulo="¡Atención a la cultura!">
          <p>
            El significado de los emojis puede variar según el país o la región.
            Lo que en un lugar es un gesto positivo, en otro puede ser negativo.
            ¡Elige tus emojis con cuidado!
          </p>
        </NotaPost>
        <CodigoPost lenguaje="HTML">{`<p>🌟 ¡Aprender HTML es divertido y esencial! 💻🚀</p>`}</CodigoPost>
        <p>
          Aquí tienes algunos ejemplos de cómo puedes usar emojis en diferentes
          contextos:
        </p>
        <ul>
          <li>
            <strong>En listas de características:</strong>
            <CodigoPost lenguaje="HTML">{`<ul>
  <li>💻 Curso de programación</li>
  <li>📚 Documentación completa</li>
  <li>🌍 Comunidad internacional</li>
</ul>`}</CodigoPost>
          </li>
          <li>
            <strong>En botones de acción:</strong>
            <CodigoPost lenguaje="HTML">{`<button>📥 Descargar ahora</button>`}</CodigoPost>
          </li>
          <li>
            <strong>Para mejorar la accesibilidad:</strong>
            <p>
              Emojis pueden ser útiles para usuarios con lectores de pantalla.
              Asegúrate de incluir una descripción en texto alternativo para
              mejorar la accesibilidad. Por ejemplo:
            </p>
            <CodigoPost lenguaje="HTML">{`<p><span role="img" aria-label="estrella">🌟</span> ¡Este es un contenido destacado!</p>`}</CodigoPost>
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="6. Videos en HTML (<video>)" id="videos">
        <p>
          El contenido multimedia es esencial hoy en día para captar la atención
          de tus visitantes. La etiqueta <code>&lt;video&gt;</code> te permite
          integrar videos en tu página web de manera sencilla. Asegúrate de que
          tus videos estén en un formato compatible como MP4, WebM o Ogg.
        </p>
        <p>
          Para agregar controles de reproducción (play, pause, volumen), utiliza
          el atributo <code>controls</code>:
        </p>
        <CodigoPost lenguaje="HTML">{`<video controls>
  <source src="/VideoInicialComunidad.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta video.
</video>`}</CodigoPost>
        <p>
          Aquí tienes un ejemplo de cómo puedes incrustar un video de YouTube:
        </p>
        <p>
          Además de cargar videos locales, también puedes incrustar videos de
          plataformas externas como YouTube o Vimeo usando un{" "}
          <strong>iframe</strong>.
        </p>
        <p>
          Esto es especialmente útil si quieres compartir contenido de estas
          plataformas directamente en tu página web. Ejemplo de cómo incrustar
          un video de YouTube:
        </p>
        <CodigoPost lenguaje="HTML">{`<iframe width="560" height="315"  
      src="https://www.youtube.com/embed/fluYWEn7d5g" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>`}</CodigoPost>
        <iframe
          src="https://www.youtube.com/embed/fluYWEn7d5g"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          Ahora que conoces los elementos clave de HTML, tienes una sólida base
          para estructurar y enriquecer cualquier página web. Encabezados,
          párrafos, enlaces, imágenes, videos y emojis te ayudarán a crear
          contenido accesible, atractivo y funcional para los usuarios.
        </p>
        <p>
          HTML no solo es la base del diseño web, sino que también juega un
          papel crucial en la accesibilidad y la optimización para motores de
          búsqueda (SEO). Comprender cómo usar estas etiquetas correctamente es
          fundamental para crear experiencias web de calidad.
        </p>
        <p>
          Recuerda que, como en cualquier aspecto de la programación, la
          práctica es clave. Experimenta con estos elementos, incrusta contenido
          multimedia, y no dudes en compartir tus descubrimientos con la
          comunidad. ¡Estamos emocionadas de ver lo que construirás!
        </p>
        <p>
          ¿Tienes alguna duda o te gustaría compartir algo? No olvides dejar un
          comentario o seguirnos en nuestras redes sociales para más contenido
          interesante. Y si aún no formas parte de nuestra comunidad,{" "}
          <a href="/register">regístrate aquí</a> y comienza a aprender y
          compartir con femCoders Club.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ElementosHTMLClave;
