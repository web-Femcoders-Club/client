import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const Flexbox: React.FC = () => {
  const publicationDate = "2 de marzo de 2025";

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          Flexbox: El poder de crear layouts flexibles | femCoders Club
        </title>
        <meta
          name="description"
          content="Aprende a usar Flexbox en CSS para crear layouts flexibles y responsivos de manera sencilla. Incluye ejemplos prácticos y recursos útiles."
        />
        <meta
          name="keywords"
          content="Flexbox, CSS, diseño web, layouts flexibles, responsive design, desarrollo web, femCoders Club"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/flexbox"
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
          content="Flexbox: El poder de crear layouts flexibles | femCoders Club"
        />
        <meta
          property="og:description"
          content="Descubre cómo utilizar Flexbox en CSS para crear layouts flexibles y responsivos. Ejemplos prácticos y consejos para mejorar tu diseño web."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/flexbox"
        />
        <meta property="og:image" content="https://www.femcodersclub.com/assets/css/flexbox.jpg" />
        <meta property="og:site_name" content="femCoders Club" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flexbox: El poder de crear layouts flexibles" />
        <meta name="twitter:description" content="Aprende Flexbox en CSS para crear layouts flexibles y responsivos. Guía completa con ejemplos prácticos y proyectos interactivos." />
        <meta name="twitter:image" content="https://www.femcodersclub.com/assets/css/flexbox.jpg" />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-03-02T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Flexbox" />
        <meta property="article:tag" content="Layout" />
        <meta property="article:tag" content="Responsive" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Flexbox: El poder de crear layouts flexibles | femCoders Club",
            author: {
              "@type": "Person",
              name: "Irina Ichim",
            },
            publisher: {
              "@type": "Organization",
              name: "femCoders Club",
              logo: {
                "@type": "ImageObject",
                url: "https://www.femcodersclub.com/FemCodersClubLogo.png",
              },
            },
            datePublished: "2025-03-02",
            dateModified: "2025-03-02",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.femcodersclub.com/recursos/css/flexbox",
            },
            image: "https://www.femcodersclub.com/assets/css/flexbox.jpg",
            description:
              "Aprende a usar Flexbox en CSS para crear layouts flexibles y responsivos de manera sencilla. Incluye ejemplos prácticos y recursos útiles.",
            articleBody:
              "Flexbox ha revolucionado el diseño web, permitiendo crear layouts flexibles con menos esfuerzo...",
          })}
        </script>
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/css/flexbox.jpg"
          alt="Flexbox: El poder de crear layouts flexibles"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
        Flexbox: El poder de crear layouts flexibles
      </h1>

      <ShareButtons path="/recursos/css/flexbox" title="Flexbox: El poder de crear layouts flexibles" />

      <div className="intro-text">
        <h3>¿Qué es Flexbox y por qué necesitamos aprenderlo?</h3>
        <p>
          Antes de Flexbox, crear diseños web alineados correctamente era todo
          un desafío. Utilizábamos floats, position y otros trucos que a menudo
          resultaban en código complicado y frágil. Con la llegada de Flexbox,
          todo cambió.
        </p>
        <p>
          Para complementar este aprendizaje, hemos creado un mini-proyecto en
          GitHub que puedes utilizar para practicar:
          <br />
          <span>
            👉 Repositorio en GitHub:{" "}
            <a
              href="https://github.com/femcodersclub/demoFlexbox.git"
              title="Repositorio GitHub Demo interactivo Flexbox"
              target="_blank"
              rel="noopener"
            >
              demoFlexBox - GitHub
            </a>
            <br />
            🌐 Demostración en vivo:{" "}
            <a
              href="https://femcodersclub.github.io/demoFlexbox/"
              title="Demostración en vivo Flexbox"
              target="_blank"
              rel="noopener"
            >
              demoFlexBox - Live
            </a>
          </span>
        </p>

        <p>
          <strong>Flexbox (Flexible Box Layout) </strong>llegó para revolucionar
          la forma en que posicionamos elementos en nuestras páginas web. Fue
          diseñado específicamente para crear diseños flexibles que se adapten a
          diferentes tamaños de pantalla, lo que lo hace perfecto para el diseño
          web moderno y responsivo.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Conceptos básicos de Flexbox</h2>
        <p>
          Para trabajar con Flexbox necesitamos entender dos conceptos
          principales:
        </p>
        <ul>
          <li>
            1. Contenedor Flex (Flex Container):Es el elemento padre que
            declaramos con<strong> display: flex</strong> o{" "}
            <strong>display: inline-flex. </strong>Este contenedor permite que
            todos sus hijos directos se comporten como elementos flexibles.
          </li>
          <li>
            2. Elementos Flex (Flex Items): Son los hijos directos del
            contenedor flex. Estos elementos se alinearán y distribuirán según
            las propiedades que definamos en el contenedor.
          </li>
        </ul>
      </div>
      <div className="highlight-box">
        <h2>Propiedades principales del Contenedor Flex</h2>
        <p>
          Estas propiedades controlan la distribución de los elementos dentro
          del contenedor flex:
        </p>
        <ul>
          <li>
            <strong>display:</strong> Activa Flexbox en el contenedor.
            <pre className="code-block bg3">
              {`.contenedor {
    display: flex; /* Contenedor Flex */
}`}
            </pre>
          </li>

          <li>
            <strong>flex-direction:</strong> Define la dirección de los
            elementos.
            <pre className="code-block bg3">
              {`.contenedor {
    flex-direction: row; /* Fila (por defecto) */
    flex-direction: column; /* Columna */
}`}
            </pre>
          </li>

          <li>
            <strong>flex-wrap:</strong> Controla si los elementos se ajustan a
            varias líneas.
            <pre className="code-block bg3">
              {`.contenedor {
    flex-wrap: wrap; /* Permite múltiples líneas */
}`}
            </pre>
          </li>

          <li>
            <strong>justify-content:</strong> Alinea los elementos en el eje
            principal.
            <pre className="code-block bg3">
              {`.contenedor {
    justify-content: center; /* Centra los elementos */
}`}
            </pre>
          </li>

          <li>
            <strong>align-items:</strong> Alinea los elementos en el eje
            cruzado.
            <pre className="code-block bg3">
              {`.contenedor {
    align-items: center; /* Centrado vertical */
}`}
            </pre>
          </li>

          <li>
            <strong>align-content:</strong> Alinea líneas de elementos cuando
            hay varias líneas.
            <pre className="code-block bg3">
              {`.contenedor {
    align-content: space-between; /* Espacio entre líneas */
}`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Propiedades de los Elementos Flex</h2>

        <p>
          <strong>Orden de los elementos: order</strong>
          <br />
          Cambia el orden de aparición de un elemento específico:
        </p>
        <pre className="code-block bg3">
          {`.elemento {
    order: 0; /* Por defecto */
    /* Números negativos mueven el elemento hacia el principio */
    /* Números positivos mueven el elemento hacia el final */
}`}
        </pre>

        <p>
          <strong>
            Tamaño de los elementos: flex-grow, flex-shrink y flex-basis
          </strong>
          <br />
          Controla cómo los elementos flexibles crecen, se encogen y se
          distribuyen:
        </p>
        <pre className="code-block bg3">
          {`.elemento {
    flex-grow: 0; /* No crece por defecto */
    flex-shrink: 1; /* Puede encogerse si es necesario */
    flex-basis: auto; /* Tamaño inicial basado en el contenido */

    /* Abreviatura: */
    flex: 0 1 auto; /* flex-grow flex-shrink flex-basis */
}`}
        </pre>

        <p>
          <strong>flex-grow:</strong> Define la capacidad de un elemento para
          crecer si hay espacio disponible.
          <br />
          <strong>flex-shrink:</strong> Define la capacidad de un elemento para
          encogerse si es necesario.
          <br />
          <strong>flex-basis:</strong> Define el tamaño inicial de un elemento
          antes de que el espacio restante sea distribuido.
        </p>
      </div>
      <div className="highlight-box">
        <h2>Alineación individual: align-self</h2>
        <p>
          La propiedad <strong>align-self</strong> permite sobrescribir la
          alineación establecida en <strong>align-items</strong>
          para un elemento específico dentro de un contenedor flex.
        </p>
        <p>
          📌 Ejemplo: Si tienes varios elementos en un contenedor, pero quieres
          que solo uno de ellos esté centrado verticalmente, puedes usar{" "}
          <strong>align-self: center;</strong> en ese elemento en particular.
        </p>
        <br />
        <h2>Centrado perfecto con Flexbox</h2>
        <p>
          Una de las razones por las que Flexbox es tan popular es porque
          permite centrar elementos fácilmente en una página, algo que antes
          requería trucos complejos.
        </p>
        <p>
          📌 ¿Cómo se hace? Basta con aplicar{" "}
          <strong>justify-content: center;</strong> para alinear horizontalmente
          y <strong>align-items: center;</strong> para centrar verticalmente
          dentro del contenedor.
        </p>
        <br />
        <h2>Proyecto interactivo: ¡Experimenta con Flexbox!</h2>
        <p>
          Para reforzar lo que hemos visto, hemos creado un{" "}
          <strong>proyecto interactivo</strong> donde puedes experimentar con
          estas propiedades en acción.
        </p>

        <ul>
          <li>🛠️ Navbar responsivo: construido con Flexbox.</li>
          <li>
            🎯 Centrado de elementos: con `justify-content` y `align-items`.
          </li>
          <li>🖼️ Galería adaptable: que se reorganiza automáticamente.</li>
          <li>
            🎮 Controles interactivos: para cambiar propiedades de Flexbox.
          </li>
        </ul>

        <h3>🔗 Prueba el proyecto aquí: </h3>
        <br />
        <p>
          🚀 Código en GitHub: 👉{" "}
          <span>
            <a
              href="https://github.com/femcodersclub/demoFlexbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/femcodersclub/demoFlexbox
            </a>{" "}
          </span>{" "}
        </p>

        <p>
          {" "}
          🌐 Demo en GitHub Pages: 👉
          <span>
            {" "}
            <a
              href="https://femcodersclub.github.io/demoFlexbox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              femcodersclub.github.io/demoFlexbox
            </a>{" "}
          </span>
        </p>
      </div>

      <div className="highlight-box">
        <h2>Ventajas de usar Flexbox</h2>
        <p>
          Flexbox ofrece múltiples ventajas que lo convierten en una opción
          ideal para diseñar
          <strong> layouts modernos, responsivos y fáciles de mantener.</strong>
        </p>
        <br />
        <ul>
          <li>
            <strong>Simplicidad:</strong> Permite crear diseños complejos con
            menos código, haciéndolos más fáciles de leer y mantener.
          </li>
          <li>
            <strong>Responsividad:</strong> Se adapta automáticamente a
            distintos tamaños de pantalla sin necesidad de media queries
            complicadas.
          </li>
          <li>
            <strong>Bidireccionalidad:</strong> Funciona en ambos ejes,
            horizontal y vertical, lo que facilita la distribución de los
            elementos.
          </li>
          <li>
            <strong>Alineación sencilla:</strong> Centrar elementos ya no es un
            desafío gracias a propiedades como
            <code> justify-content</code> y <code>align-items</code>.
          </li>
          <li>
            <strong>Orden flexible:</strong> Puedes cambiar el orden visual de
            los elementos sin modificar el HTML, usando la propiedad{" "}
            <code>order</code>.
          </li>
          <li>
            <strong>Compatibilidad:</strong> Funciona en la mayoría de los
            navegadores modernos, garantizando estabilidad en distintos
            entornos.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>¿Cuándo usar Flexbox?</h2>
        <p>
          Flexbox es ideal cuando necesitas distribuir y alinear elementos de
          manera flexible en una dimensión (fila o columna). Aquí algunos casos
          donde Flexbox es la mejor opción:
        </p>
        <br />
        <ul>
          <li>
            <strong>Diseño de componentes pequeños:</strong> Perfecto para
            alinear elementos dentro de tarjetas, botones, barras de navegación
            y formularios.
          </li>
          <li>
            <strong>Distribución de elementos en una fila o columna:</strong>{" "}
            Útil para menús de navegación, galerías de imágenes o listas de
            productos.
          </li>
          <li>
            <strong>Alineación de elementos:</strong> Centrar elementos en una
            página nunca fue tan fácil con
            <strong> justify-content</strong> y <strong>align-items</strong>.
          </li>
          <li>
            <strong>Espaciado uniforme entre elementos:</strong> Proporciona
            control total sobre el espacio entre elementos con propiedades como
            <strong> space-between</strong> y <strong>space-around</strong>.
          </li>
          <li>
            <strong>Componentes dinámicos:</strong> Cuando los elementos de un
            contenedor necesitan ajustarse según el contenido disponible sin
            usar
            <strong>width</strong> o <strong>height</strong> fijas.
          </li>
          <li>
            <strong>Diseños responsivos sin complicaciones:</strong> Evita el
            uso excesivo de media queries, ya que Flexbox ajusta los elementos
            automáticamente según el tamaño del contenedor.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🎮 Recursos para practicar Flexbox</h2>
        <p>
          ¡Aprender Flexbox puede ser divertido! Te recomendamos estos recursos
          interactivos:
        </p>
        <br />
        <ul>
          <li>
            <strong>
              <a
                href="https://flexboxfroggy.com/#es"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flexbox Froggy
              </a>
            </strong>{" "}
            - Un juego educativo donde ayudarás a unas ranitas a llegar a sus
            nenúfares usando propiedades de Flexbox. Es perfecto para
            principiantes y cubre todas las propiedades principales que hemos
            visto.
          </li>
          <li>
            <strong>
              <a
                href="http://www.flexboxdefense.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flexbox Defense
              </a>
            </strong>{" "}
            - Otro juego donde usas propiedades de Flexbox para posicionar
            torres de defensa y detener las oleadas de enemigos. Es ideal para
            practicar alineación y distribución de elementos.
          </li>
          <li>
            <strong>
              <a
                href="https://flukeout.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Diner
              </a>
            </strong>{" "}
            - No es específico de Flexbox, pero es excelente para practicar
            selectores CSS, que son fundamentales para aplicar correctamente tus
            estilos Flexbox.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>📱 Compatibilidad con navegadores</h2>
        <p>
          Flexbox es compatible con todos los navegadores modernos, lo que lo
          hace una opción segura para tus proyectos. Aquí tienes una tabla con
          la compatibilidad mínima requerida:
        </p>
        <br />
        <table className="framework-comparison-table">
          <thead>
            <tr>
              <th>Navegador</th>
              <th>Versión mínima</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🌍 Chrome</td>
              <td>29+</td>
            </tr>
            <tr>
              <td>🦊 Firefox</td>
              <td>22+</td>
            </tr>
            <tr>
              <td>🍏 Safari</td>
              <td>6.1+</td>
            </tr>
            <tr>
              <td>🖥️ Edge</td>
              <td>Compatibilidad completa</td>
            </tr>
            <tr>
              <td>🛑 Internet Explorer</td>
              <td>IE11 (con limitaciones)</td>
            </tr>
          </tbody>
        </table>
        <p>
          ✅{" "}
          <strong>
            Flexbox es compatible con la mayoría de los navegadores
          </strong>{" "}
          y funciona sin problemas en proyectos modernos. ⚠️ Sin embargo,{" "}
          <strong>Internet Explorer 11</strong> presenta algunas limitaciones y
          comportamientos inesperados. 📌 Para garantizar una experiencia
          consistente, te recomendamos probar tus diseños en diferentes
          navegadores.
        </p>

        <p>
          ⚠️ Para navegadores más antiguos, puedes utilizar un polyfill como{" "}
          <span>
            <a
              href="https://github.com/postcss/autoprefixer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Autoprefixer
            </a>
          </span>{" "}
          para mejorar la compatibilidad.
        </p>
      </div>

      <div className="highlight-box">
        <h2>🚀 Conclusión: El poder de Flexbox</h2>
        <p>
          Flexbox ha cambiado la forma en que diseñamos layouts en CSS,
          permitiéndonos trabajar de manera más eficiente y creando estructuras
          flexibles con menos esfuerzo. Su capacidad para manejar alineaciones y
          distribuciones de elementos lo convierte en una herramienta
          imprescindible en el desarrollo web moderno.
        </p>

        <p>
          Aunque <strong>CSS Grid</strong> es una alternativa potente para
          construir layouts más complejos, Flexbox sigue siendo la mejor opción
          para manejar alineaciones en una sola dimensión y para componentes
          como barras de navegación, formularios y tarjetas.
        </p>

        <h3>📌 Próximo tema: CSS Grid</h3>
        <p>
          En nuestro próximo post, exploraremos <strong>CSS Grid</strong> y cómo
          combinarlo con Flexbox para lograr diseños web aún más dinámicos y
          versátiles. <br />
          ¿Tienes alguna duda sobre Flexbox? 💬 ¡Déjanos un comentario y te
          ayudaremos! 😊
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

      <CommentsSection postId={14} />
    </div>
  );
};

export default Flexbox;
