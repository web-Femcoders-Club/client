import React from "react";
import { Helmet } from "react-helmet";
import OptimizedImage from "../../../../../components/OptimizedImage";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const CssGridFlexbox: React.FC = () => {
  const postId = 17;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          Estrategias avanzadas para dominar el layout en CSS: Combinando Grid y
          Flexbox | FemCoders Club
        </title>
        <meta
          name="description"
          content="Aprende a combinar CSS Grid y Flexbox estratégicamente para crear layouts modernos, complejos y responsivos. Descubre 5 estrategias eficaces y ejemplos prácticos."
        />
        <meta
          name="keywords"
          content="CSS Grid, Flexbox, combinación Grid y Flexbox, layout web, frontend, diseño web, femcoders club, desarrollo web para mujeres, CSS avanzado, responsive design"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/css-grid-flexbox"
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
          content="Estrategias avanzadas para dominar el layout en CSS: Combinando Grid y Flexbox"
        />
        <meta
          property="og:description"
          content="Aprende a combinar CSS Grid y Flexbox estratégicamente para crear layouts modernos, complejos y responsivos. Descubre 5 estrategias eficaces y ejemplos prácticos."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/css-grid-flexbox"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CssGridFlexbox.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Estrategias avanzadas para dominar el layout en CSS: Combinando Grid y Flexbox"
        />
        <meta
          name="twitter:description"
          content="Guía completa para combinar Grid y Flexbox: 5 estrategias clave con ejemplos prácticos para diseñadoras y desarrolladoras web."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CssGridFlexbox.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-04-27T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Grid" />
        <meta property="article:tag" content="Flexbox" />
        <meta property="article:tag" content="Frontend" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/css/CssGridFlexbox.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/css/CssGridFlexbox.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/css/CssGridFlexbox.webp"
            alt="Combinación de CSS Grid y Flexbox - Estructura moderna de layout web"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Estrategias avanzadas para dominar el layout en CSS: Combinando Grid y
        Flexbox
      </h1>

      <ShareButtons path="/recursos/css/css-grid-flexbox" title="Estrategias avanzadas para dominar el layout en CSS: Combinando Grid y Flexbox" />

      <div className="intro-text">
        <p>
          En nuestros artículos anteriores, exploramos en profundidad{" "}
          <strong>
            {" "}
            🔗
            <a
              href="https://www.femcodersclub.com/recursos/css/flexbox "
              className="highlight-link"
            >
              Flexbox
            </a>
          </strong>{" "}
          y{" "}
          <strong>
            {" "}
            🔗
            <a
              href="https://www.femcodersclub.com/recursos/css/css-grid"
              className="highlight-link"
            >
              CSS Grid
            </a>
          </strong>{" "}
          como tecnologías individuales. Hoy, daremos un paso más y
          descubriremos cómo combinar ambas herramientas para crear layouts
          modernos, complejos y responsivos.
        </p>
        <p>
          Para este artículo, hemos creado un proyecto práctico que puedes
          explorar en nuestro{" "}
          <strong>
            🔗
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              repositorio de GitHub
            </a>
          </strong>
          . Te invitamos a clonarlo y experimentar con él mientras lees este
          post.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¿Por qué combinar Grid y Flexbox?</h2>
        <p>
          Grid y Flexbox no son tecnologías competidoras, sino complementarias.
          Cada una tiene sus fortalezas específicas:
        </p>
        <br />
        <h3>CSS Grid es ideal para:</h3>
        <ul>
          <li>Layouts bidimensionales (filas y columnas)</li>
          <li>Estructuras macro y diseños de página completa</li>
          <li>Posicionamiento preciso de elementos</li>
          <li>Alineación de elementos en ambos ejes simultáneamente</li>
        </ul>

        <h3>Flexbox brilla en:</h3>
        <ul>
          <li>Distribuciones unidimensionales (filas O columnas)</li>
          <li>Alineación flexible dentro de un contenedor</li>
          <li>Espaciado dinámico entre elementos</li>
          <li>Adaptación al contenido</li>
        </ul>

        <p>
          La clave para dominar el layout en CSS moderno es entender{" "}
          <strong>cuándo usar cada tecnología</strong> y cómo combinarlas
          estratégicamente.
        </p>
      </div>

      <div className="highlight-box">
        <h2>5 Estrategias efectivas para combinar Grid y Flexbox</h2>
        <p>
          A continuación, exploraremos 5 estrategias prácticas para combinar
          ambas tecnologías, todas implementadas en nuestro proyecto de ejemplo.
          <ul className="micro-index">
  <li><a href="#estrategia-1">1. Grid para la estructura general, Flexbox para los componentes internos</a></li>
  <li><a href="#estrategia-2">2. Grid para posicionamiento asimétrico, Flexbox para alineación interna</a></li>
  <li><a href="#estrategia-3">3. Grid con áreas nombradas y Flexbox para componentes</a></li>
  <li><a href="#estrategia-4">4. Grid para responsividad automática, Flexbox para componentes</a></li>
  <li><a href="#estrategia-5">5. Intercambio de layout basado en media queries</a></li>
</ul>
        </p>
        <br />
        <h3 id="estrategia-1">
          1.: Grid para la estructura general, Flexbox para los componentes
          internos
        </h3>
        <p>
          {" "}
          En esta estrategia usamos <strong>CSS Grid</strong> para construir el
          layout general (como la distribución de tarjetas) y{" "}
          <strong>Flexbox</strong> dentro de cada tarjeta para alinear sus
          elementos.{" "}
        </p>{" "}
        <p>Lo aplicamos así en nuestro proyecto:</p>{" "}
        <div
          className="example-image"
          style={{ textAlign: "center", margin: "20px 0" }}
        >
          {" "}
          <OptimizedImage
  src="assets/css/strategy1.png"
  alt="Estrategia 1: Grid para layout y Flexbox para contenido"
  className="rounded-lg shadow-md"
  loading="lazy"
/>{" "}
        </div>{" "}
        <ul>
          {" "}
          <li>
            <strong>.features-grid</strong>: usa <code>grid</code> para
            distribuir las tarjetas.
          </li>{" "}
          <li>
            <strong>.feature-card</strong>: usa <code>flex</code> para alinear
            texto e iconos verticalmente.
          </li>{" "}
        </ul>{" "}
        <pre className="code-block bg3">
          {" "}
          {`/* Grid para distribuir tarjetas */ .features-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: var(--space-lg); } /* Flexbox en tarjetas individuales */ .feature-card { display: flex; flex-direction: column; align-items: center; padding: var(--space-lg); }`}{" "}
        </pre>{" "}
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          {" "}
          <a
            href="https://github.com/femcodersclub/css-grid-flexbox-layouts/blob/main/css/combined.css"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            {" "}
            🔗 Ver código en GitHub{" "}
          </a>{" "}
        </p>
        <br />
        <h3 id="estrategia-2">
          2.: Grid para posicionamiento asimétrico, Flexbox para alineación
          interna
        </h3>
        <p>
          {" "}
          Aquí usamos <strong>Grid</strong> para crear una tarjeta que ocupa más
          espacio (ideal para destacar contenido) y <strong>Flexbox</strong>{" "}
          para alinear el contenido dentro de esa tarjeta.{" "}
        </p>{" "}
        <div
          className="example-image"
          style={{ textAlign: "center", margin: "20px 0" }}
        >
          {" "}
          <OptimizedImage
  src="assets/css/strategy2.png"
  alt="Estrategia 2: tarjeta asimétrica con Grid y Flexbox"
  className="rounded-lg shadow-md"
  loading="lazy"
/>
{" "}
        </div>{" "}
        <ul>
          {" "}
          <li>
            <strong>.examples-grid</strong>: layout de dos columnas con Grid.
          </li>{" "}
          <li>
            <strong>.example-card.large</strong>: tarjeta que ocupa dos
            columnas.
          </li>{" "}
          <li>
            <strong>.example-content</strong>: contenido alineado con Flexbox.
          </li>{" "}
        </ul>{" "}
        <pre className="code-block bg3">
          {" "}
          {`.example-card.large { grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: "image content"; } .example-card.large .example-content { grid-area: content; display: flex; flex-direction: column; justify-content: center; }`}{" "}
        </pre>{" "}
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          {" "}
          <a
            href="https://github.com/femcodersclub/css-grid-flexbox-layouts/blob/main/css/combined.css"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            {" "}
            🔗 Ver implementación en GitHub{" "}
          </a>{" "}
        </p>
        <br />
        <h3 id="estrategia-3">3.: Grid con áreas nombradas y Flexbox para componentes</h3>

<p>
  Una de las grandes ventajas de <strong>CSS Grid</strong> es que podemos definir <strong>áreas de contenido</strong> fácilmente, haciendo que los layouts sean más claros y organizados.
</p>

<p>
  En nuestro proyecto aplicamos esta técnica en la <strong>sección principal (Hero)</strong>, combinando <strong>Grid</strong> para distribuir la imagen y el texto, y <strong>Flexbox</strong> para alinear verticalmente los elementos internos.
</p>

<div className="example-image" style={{ textAlign: "center", margin: "20px 0" }}>
<OptimizedImage
  src="assets/css/strategy3.png"
  alt="Sección Hero usando Grid y Flexbox"
  className="rounded-lg shadow-md"
  loading="lazy"
/>

</div>

<h5>🛠 Aplicación práctica en el proyecto</h5>
<ul>
  <li>
    <code>.hero-container</code>: usa <code>grid-template-columns</code> para dividir en dos columnas (texto + imagen).
  </li>
  <li>
    <code>.hero-content</code>: usa <code>display: flex</code> para alinear el contenido (títulos, párrafos y botones) en columna.
  </li>
  <li>
    El diseño cambia a formato vertical en móviles gracias a <code>@media</code> queries.
  </li>
</ul>

<h5>🌟 Fragmento de código relevante</h5>
<pre className="code-block bg3">
{`.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-md);
}

@media (max-width: 768px) {
  .hero-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }
}`}
</pre>

<p>
  Combinando Grid y Flexbox en la sección Hero conseguimos un diseño moderno, claro y perfectamente adaptable a móviles.
</p>

<p style={{ textAlign: "center", marginTop: "15px" }}>
  <a
    href="https://github.com/femcodersclub/css-grid-flexbox-layouts/blob/main/css/combined.css"
    target="_blank"
    rel="noopener noreferrer"
    className="highlight-link"
  >
    🔗 Ver implementación real en GitHub
  </a>
</p>
<br />

        <h3 id="estrategia-4">
          4.: Grid para responsividad automática, Flexbox para componentes
        </h3>
        <p>
          {" "}
          Una gran ventaja de <strong>CSS Grid</strong> es que nos permite crear
          sistemas de tarjetas adaptables sin necesidad de media queries. Para
          ello, usamos funciones como <code>auto-fill</code> junto con{" "}
          <code>minmax()</code>.{" "}
        </p>{" "}
        <p>
          {" "}
          En nuestro proyecto, la sección de <code>.features-grid</code> usa
          Grid para que las tarjetas se redistribuyan automáticamente según el
          ancho disponible. Dentro de cada tarjeta, aplicamos Flexbox para
          alinear el contenido verticalmente.{" "}
        </p>{" "}
        <pre className="code-block bg3">
          {" "}
          {`/* combined.css */ /* Grid para responsividad automática */ .features-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: var(--space-lg); } /* Flexbox dentro de cada tarjeta */ .feature-card { display: flex; flex-direction: column; align-items: center; text-align: center; padding: var(--space-lg); }`}{" "}
        </pre>{" "}
        <p>
          {" "}
          Esta combinación hace que el layout sea fluido y adaptable,
          manteniendo una estructura limpia y centrada en cada tarjeta.{" "}
        </p>
        <br />
        <h3 id="estrategia-5">5.: Intercambio de layout basado en media queries</h3>
        <p>
          {" "}
          En esta estrategia, cambiamos de Grid a Flexbox (o viceversa) según el
          tamaño de pantalla, lo que permite adaptar el diseño a diferentes
          dispositivos de forma óptima.{" "}
        </p>{" "}
        <p>
          {" "}
          En la sección <code>.hero-container</code>, usamos Grid en escritorio
          para distribuir el contenido en columnas, y Flexbox en móvil para
          reordenar y alinear verticalmente.{" "}
        </p>{" "}
        <pre className="code-block bg3">
          {" "}
          {`/* combined.css */ /* Desktop: Usamos Grid */ .hero-container { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); align-items: center; } /* Mobile: Cambiamos a Flexbox */ @media (max-width: 768px) { .hero-container { display: flex; flex-direction: column; gap: var(--space-xl); } .hero-image { order: -1; /* Imagen arriba en móviles */ } }`}{" "}
        </pre>{" "}
        <p>
          {" "}
          Esta técnica mejora la experiencia del usuario en pantallas pequeñas
          sin duplicar el contenido ni complicar el HTML.{" "}
        </p>
      </div>

      <div className="highlight-box">
        <h2>Ejemplos prácticos en nuestro repositorio de GitHub</h2>
        <p>
          Para que puedas ver todos estos conceptos en acción, hemos creado un
          proyecto completo en GitHub con ejemplos interactivos. Cada estrategia
          mencionada en este artículo está implementada en este proyecto, donde
          podrás analizar el código y ver cómo funciona en un entorno real.
        </p>

        <h3>Lo que encontrarás en el repositorio:</h3>
        <ul>
          <li>
            <strong>Landing Page Completa:</strong> Una implementación real que
            utiliza todas las estrategias mencionadas en este artículo
          </li>
          <li>
            <strong>Archivos CSS organizados:</strong> <code>grid.css</code>,{" "}
            <code>flexbox.css</code> y <code>combined.css</code> muestran
            claramente cómo separar y combinar ambas tecnologías
          </li>
          <li>
            <strong>Componentes reutilizables:</strong> Tarjetas, navegación,
            secciones de características, testimonios, etc.
          </li>
          <li>
            <strong>Implementación responsive:</strong> Adaptación completa para
            móviles, tablets y escritorio
          </li>
        </ul>

        <div className="styled-paragraph" style={{ textAlign: "center" }}>
          <span>
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts"
              className="highlight underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ✨ Explora el código en GitHub 📂 ✨
            </a>
          </span>
          <br />
          <span>
            <a
              href="https://femcodersclub.github.io/css-grid-flexbox-layouts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ejemplo en vivo
            </a>
          </span>
        </div>

        <h3>Estructura del proyecto</h3>
        <pre className="code-block bg3">
{`css-grid-flexbox-layouts/
├── index.html            # Página principal (landing page)
├── css/                  # Carpeta de estilos CSS
│   ├── styles.css        # Estilos generales y variables
│   ├── grid.css          # Componentes estructurados con Grid
│   ├── flexbox.css       # Componentes estructurados con Flexbox
│   └── combined.css      # Componentes combinando Grid y Flexbox
├── js/
│   └── main.js           # JavaScript para interactividad básica (toggle menú)
├── images/               # Imágenes utilizadas en el proyecto
├── README.md             # Documentación del proyecto
`}
</pre>
        <p>
          En el archivo <code>README.md</code> encontrarás instrucciones para
          clonar el repositorio y ejecutar el proyecto localmente.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Ejemplo práctico: Layout moderno de landing page</h2>

        <p>
          Exploremos ahora cómo aplicamos todas estas estrategias en nuestra
          landing page de ejemplo que acabamos de crear para este artículo:
        </p>

        <div
          className="example-screenshot"
          style={{
            margin: "20px 0",
            textAlign: "center",
          }}
        >
          <img
            src="/public-optimized/desktop/assets/css/landing-preview.jpg"
            alt="Landing Page Preview del proyecto CSS Grid + Flexbox"
            style={{
              maxWidth: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
            loading="lazy"
          />
        </div>

        <p>
          El layout de nuestra landing page se divide en las siguientes
          secciones, y en cada una hemos aplicado específicamente las
          estrategias que acabamos de explicar:
        </p>

        <table className="framework-comparison-table">
          <thead>
            <tr>
              <th>Sección</th>
              <th>Estrategia aplicada</th>
              <th>Archivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Header</strong>
              </td>
              <td>
                Flexbox para alineación horizontal + comportamiento responsivo
              </td>
              <td>
                <code>flexbox.css</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Hero Section</strong>
              </td>
              <td>
                Grid para estructura, Flexbox para botones (Estrategia 1 y 5)
              </td>
              <td>
                <code>combined.css</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Features</strong>
              </td>
              <td>
                Grid para distribución, Flexbox para tarjetas (Estrategia 4)
              </td>
              <td>
                <code>grid.css + flexbox.css</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Examples</strong>
              </td>
              <td>Grid asimétrico con tarjeta expandida (Estrategia 2)</td>
              <td>
                <code>combined.css</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Testimonials</strong>
              </td>
              <td>
                Grid para estructura, Flexbox para alineación (Estrategia 1)
              </td>
              <td>
                <code>grid.css + flexbox.css</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Contact</strong>
              </td>
              <td>Grid con áreas nombradas (Estrategia 3)</td>
              <td>
                <code>grid.css</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Footer</strong>
              </td>
              <td>
                Grid para macroestructura, Flexbox para grupos (Estrategia 1)
              </td>
              <td>
                <code>combined.css</code>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Cada una de estas secciones es un ejemplo perfecto de cómo elegir la
          técnica adecuada según el tipo de layout que necesitas crear,
          aprovechando las fortalezas específicas de Grid y Flexbox.
        </p>

        <div
          style={{
            backgroundColor: "rgba(138, 43, 226, 0.1)",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "20px",
            borderLeft: "4px solid var(--color-primary)",
          }}
        >
          <p style={{ margin: "0" }}>
            <strong>💡 Consejo:</strong> Al explorar el código fuente en GitHub,
            observa cómo los comentarios en cada archivo CSS explican qué
            estrategia se está aplicando y por qué se eligió esa aproximación
            para cada componente específico.
          </p>
        </div>
      </div>

      <div className="highlight-box">
  <h2>Buenas prácticas para combinar Grid y Flexbox</h2>

  <p>
    A lo largo del desarrollo de este proyecto, aplicamos algunas buenas prácticas esenciales que te recomendamos seguir:
  </p>

  <ol>
    <li>
      <strong>Separa las responsabilidades:</strong> Organizamos el CSS en archivos diferentes:
      <code>grid.css</code> para estructuras basadas en Grid,
      <code>flexbox.css</code> para componentes basados en Flexbox,
      y <code>combined.css</code> para combinaciones de ambos.
    </li>

    <li>
      <strong>Mantén una organización lógica:</strong> Agrupamos estilos relacionados y añadimos comentarios explicativos para facilitar el mantenimiento del proyecto.
    </li>

    <li>
      <strong>Usa áreas nombradas en Grid:</strong> Definir áreas claras con <code>grid-template-areas</code> facilita la comprensión y modificación de layouts complejos como nuestro "Holy Grail Layout".
    </li>

    <li>
      <strong>Aplica un enfoque "Mobile First":</strong> Desde el principio diseñamos pensando en dispositivos móviles, ajustando la estructura mediante media queries cuando es necesario.
    </li>

    <li>
      <strong>Utiliza variables CSS:</strong> Todas las medidas de espacio, colores y tamaños de fuente están centralizadas en <code>styles.css</code> usando variables CSS para facilitar cambios globales.
    </li>

    <li>
      <strong>Evita anidar grids innecesariamente:</strong> Combinamos Grid y Flexbox solo cuando cada uno aporta ventajas reales, evitando estructuras demasiado complicadas.
    </li>

    <li>
      <strong>Cuida la semántica HTML:</strong> La estructura de nuestro <code>index.html</code> está diseñada para mantener sentido lógico incluso sin aplicar estilos, mejorando accesibilidad y SEO.
    </li>
  </ol>
</div>


      <div className="highlight-box">
        <h2>Compatibilidad con navegadores</h2>

        <h3>Tabla de compatibilidad actualizada</h3>
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Navegador</th>
                <th>CSS Grid</th>
                <th>Flexbox</th>
                <th>Combinación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chrome</td>
                <td>57+</td>
                <td>29+</td>
                <td>Completo</td>
              </tr>
              <tr>
                <td>Firefox</td>
                <td>52+</td>
                <td>28+</td>
                <td>Completo</td>
              </tr>
              <tr>
                <td>Safari</td>
                <td>10.1+</td>
                <td>9+</td>
                <td>Completo</td>
              </tr>
              <tr>
                <td>Edge</td>
                <td>16+</td>
                <td>12+</td>
                <td>Completo</td>
              </tr>
              <tr>
                <td>Opera</td>
                <td>44+</td>
                <td>28+</td>
                <td>Completo</td>
              </tr>
              <tr>
                <td>iOS Safari</td>
                <td>10.3+</td>
                <td>9.2+</td>
                <td>Completo</td>
              </tr>
              <tr>
                <td>Internet Explorer</td>
                <td>No soportado</td>
                <td>11 (parcial)</td>
                <td>No recomendado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Estrategias de fallback</h3>
        <p>Para garantizar la compatibilidad con navegadores más antiguos:</p>

        <pre className="code-block bg3">
          {`/* Fallback para navegadores que no soportan Grid */
.container {
  display: flex;
  flex-wrap: wrap;
}

/* Versión con Grid si es compatible */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>Conclusión: Lo mejor de ambos mundos</h2>

        <p>
          CSS Grid y Flexbox son herramientas poderosas que, cuando se combinan
          estratégicamente como lo hemos demostrado en nuestro proyecto, ofrecen
          infinitas posibilidades para crear layouts web modernos, responsivos y
          mantenibles.
        </p>

        <p>
          En este post hemos explorado 5 estrategias clave para combinar ambas
          tecnologías, y las hemos implementado todas en nuestro proyecto de
          ejemplo. Te animamos a clonar el repositorio y examinar el código para
          ver cómo cada estrategia funciona en un entorno real.
        </p>

       <br/>

        <h3>Próximos pasos:</h3>
        <ol>
          <li>
            Clona el{" "}
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              repositorio de GitHub
            </a>
          </li>
          <li>
            Examina la estructura de archivos y los comentarios explicativos
          </li>
          <li>
            Prueba la{" "}
            <a
              href="https://femcodersclub.github.io/css-grid-flexbox-layouts/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              demo en vivo
            </a>{" "}
            y adapta tu navegador a diferentes tamaños
          </li>
          <li>
            Prueba a modificar el código para crear tus propias variaciones
          </li>
        </ol>
<br/>
<h2>Recursos adicionales:</h2>
<ul>
  <li>
    <a
      href="https://www.femcodersclub.com/recursos/css/flexbox"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      Guía completa de Flexbox
    </a>
  </li>
  <li>
    <a
      href="https://www.femcodersclub.com/recursos/css/css-grid"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      Guía completa de CSS Grid
    </a>
  </li>
  <li>
    <a
      href="https://github.com/femcodersclub/css-grid-flexbox-layouts"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      Repositorio del proyecto
    </a>
  </li>
  <li>
    <a
      href="https://css-tricks.com/snippets/css/complete-guide-grid/"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      CSS Grid Cheatsheet de CSS-Tricks
    </a>
  </li>
  <li>
    <a
      href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      Flexbox Cheatsheet de CSS-Tricks
    </a>
  </li>
  <li>
    <a
      href="https://layout.bradwoods.io/"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      Grid Layout Generator (herramienta visual)
    </a>
  </li>
  <li>
    <a
      href="https://the-echoplex.net/flexyboxes/"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      Flexbox Layout Generator (herramienta visual)
    </a>
  </li>
  <li>
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      MDN Web Docs – CSS Grid
    </a>
  </li>
  <li>
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link"
    >
      MDN Web Docs – Flexbox
    </a>
  </li>
</ul>


        <div
          style={{
            backgroundColor: "rgba(71, 55, 187, 0.1)",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            margin: "30px 0",
            borderLeft: "5px solid #4737bb",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#6d2c95", marginTop: 0, fontSize: "1.8rem" }}>
            ¿Te animas a contribuir con tu propio ejemplo? 💡
          </h3>
          <p
            style={{ fontSize: "18px", marginBottom: "15px", color: "#2a2170" }}
          >
            Haz un <strong>Pull Request</strong> a nuestro repositorio y añade
            tu ejemplo creativo al proyecto
          </p>
          <a
            href="https://github.com/femcodersclub/css-grid-flexbox-layouts/pulls"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#4737bb",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
          >
            🚀 Contribuir al proyecto
          </a>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "15px",
              marginBottom: 0,
              color: "#2a2170",
            }}
          >
            ¡Hagamos crecer juntas la colección de ejemplos! 💪
          </p>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de FemCoders Club</p>
        <p>
          Fecha de publicación: <strong>27 de abril, 2025</strong>
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

export default CssGridFlexbox;
