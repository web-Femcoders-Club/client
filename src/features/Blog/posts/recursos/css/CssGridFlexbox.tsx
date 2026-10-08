import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ImagenPost,
  ListaMarcadaPost,
  NotaPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const CssGridFlexbox: React.FC = () => (
  <>
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

    <PlantillaPost
      ruta="/recursos/css/css-grid-flexbox"
      titulo="Estrategias avanzadas para dominar el layout en CSS: combinando Grid y Flexbox"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={17}
      entradilla={
        <>
          <p>
            En nuestros artículos anteriores exploramos en profundidad{" "}
            <Link to="/recursos/css/flexbox">Flexbox</Link> y{" "}
            <Link to="/recursos/css/css-grid">CSS Grid</Link> como tecnologías
            individuales. Hoy daremos un paso más y descubriremos cómo combinar
            ambas herramientas para crear layouts modernos, complejos y
            responsivos.
          </p>
          <p>
            Para este artículo hemos creado un proyecto práctico que puedes
            explorar en nuestro{" "}
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts"
              target="_blank"
              rel="noopener noreferrer"
            >
              repositorio de GitHub
            </a>
            . Te invitamos a clonarlo y experimentar con él mientras lees este
            post.
          </p>
        </>
      }
    >
      <SeccionPost titulo="¿Por qué combinar Grid y Flexbox?">
        <p>
          Grid y Flexbox no son tecnologías competidoras, sino complementarias.
          Cada una tiene sus fortalezas específicas:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "CSS Grid es ideal para",
              texto: (
                <ul>
                  <li>Layouts bidimensionales (filas y columnas)</li>
                  <li>Estructuras macro y diseños de página completa</li>
                  <li>Posicionamiento preciso de elementos</li>
                  <li>Alineación de elementos en ambos ejes simultáneamente</li>
                </ul>
              ),
            },
            {
              titulo: "Flexbox brilla en",
              texto: (
                <ul>
                  <li>Distribuciones unidimensionales (filas o columnas)</li>
                  <li>Alineación flexible dentro de un contenedor</li>
                  <li>Espaciado dinámico entre elementos</li>
                  <li>Adaptación al contenido</li>
                </ul>
              ),
            },
          ]}
        />
        <p>
          La clave para dominar el layout en CSS moderno es entender{" "}
          <strong>cuándo usar cada tecnología</strong> y cómo combinarlas
          estratégicamente.
        </p>
      </SeccionPost>

      <SeccionPost titulo="5 estrategias efectivas para combinar Grid y Flexbox">
        <p>
          A continuación exploraremos 5 estrategias prácticas para combinar
          ambas tecnologías, todas implementadas en nuestro proyecto de ejemplo:
        </p>
        <ol>
          <li>
            <a href="#estrategia-1">
              Grid para la estructura general, Flexbox para los componentes
              internos
            </a>
          </li>
          <li>
            <a href="#estrategia-2">
              Grid para posicionamiento asimétrico, Flexbox para alineación
              interna
            </a>
          </li>
          <li>
            <a href="#estrategia-3">
              Grid con áreas nombradas y Flexbox para componentes
            </a>
          </li>
          <li>
            <a href="#estrategia-4">
              Grid para responsividad automática, Flexbox para componentes
            </a>
          </li>
          <li>
            <a href="#estrategia-5">
              Intercambio de layout basado en media queries
            </a>
          </li>
        </ol>

        <h3 id="estrategia-1">
          1. Grid para la estructura general, Flexbox para los componentes
          internos
        </h3>
        <p>
          En esta estrategia usamos <strong>CSS Grid</strong> para construir el
          layout general (como la distribución de tarjetas) y{" "}
          <strong>Flexbox</strong> dentro de cada tarjeta para alinear sus
          elementos.
        </p>
        <p>Lo aplicamos así en nuestro proyecto:</p>
        <ImagenPost
          src="assets/css/strategy1.png"
          alt="Sección principal de la landing page de ejemplo: a la izquierda, el titular «Domina Grid y Flexbox para crear layouts modernos» con dos botones; a la derecha, una ilustración de una rejilla de 3 × 3 junto a una columna de cuatro barras"
          pie={
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts/blob/main/css/combined.css"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código en GitHub
            </a>
          }
        />
        <ul>
          <li>
            <code>.features-grid</code>: usa <code>grid</code> para distribuir
            las tarjetas.
          </li>
          <li>
            <code>.feature-card</code>: usa <code>flex</code> para alinear texto
            e iconos verticalmente.
          </li>
        </ul>
        <CodigoPost lenguaje="CSS">{`/* Grid para distribuir tarjetas */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-lg);
}

/* Flexbox en tarjetas individuales */
.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg);
}`}</CodigoPost>

        <h3 id="estrategia-2">
          2. Grid para posicionamiento asimétrico, Flexbox para alineación
          interna
        </h3>
        <p>
          Aquí usamos <strong>Grid</strong> para crear una tarjeta que ocupa más
          espacio (ideal para destacar contenido) y <strong>Flexbox</strong>{" "}
          para alinear el contenido dentro de esa tarjeta.
        </p>
        <ImagenPost
          src="assets/css/strategy2.png"
          alt="Sección «Ejemplos prácticos» de la landing page: la tarjeta «Dashboard moderno» ocupa todo el ancho, con la captura del panel a la izquierda y el texto a la derecha; debajo, dos tarjetas más pequeñas en dos columnas"
          pie={
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts/blob/main/css/combined.css"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver implementación en GitHub
            </a>
          }
        />
        <ul>
          <li>
            <code>.examples-grid</code>: layout de dos columnas con Grid.
          </li>
          <li>
            <code>.example-card.large</code>: tarjeta que ocupa dos columnas.
          </li>
          <li>
            <code>.example-content</code>: contenido alineado con Flexbox.
          </li>
        </ul>
        <CodigoPost lenguaje="CSS">{`.example-card.large {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image content";
}

.example-card.large .example-content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
}`}</CodigoPost>

        <h3 id="estrategia-3">
          3. Grid con áreas nombradas y Flexbox para componentes
        </h3>
        <p>
          Una de las grandes ventajas de <strong>CSS Grid</strong> es que
          podemos definir <strong>áreas de contenido</strong> fácilmente, lo que
          hace que los layouts sean más claros y organizados.
        </p>
        <p>
          En nuestro proyecto aplicamos esta técnica en la{" "}
          <strong>sección principal (hero)</strong>, combinando{" "}
          <strong>Grid</strong> para distribuir la imagen y el texto, y{" "}
          <strong>Flexbox</strong> para alinear verticalmente los elementos
          internos.
        </p>
        <ImagenPost
          src="assets/css/strategy3.png"
          alt="Sección hero de la landing page en dos columnas: el texto y los botones a la izquierda, alineados en columna, y la ilustración «Grid y Flexbox combinados» a la derecha"
          pie={
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts/blob/main/css/combined.css"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver implementación real en GitHub
            </a>
          }
        />
        <p>Así lo aplicamos en el proyecto:</p>
        <ul>
          <li>
            <code>.hero-container</code>: usa{" "}
            <code>grid-template-columns</code> para dividir en dos columnas
            (texto + imagen).
          </li>
          <li>
            <code>.hero-content</code>: usa <code>display: flex</code> para
            alinear el contenido (títulos, párrafos y botones) en columna.
          </li>
          <li>
            El diseño cambia a formato vertical en móviles gracias a las{" "}
            <code>@media</code> queries.
          </li>
        </ul>
        <p>Este es el fragmento de código relevante:</p>
        <CodigoPost lenguaje="CSS">{`.hero-container {
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
}`}</CodigoPost>
        <p>
          Combinando Grid y Flexbox en la sección hero conseguimos un diseño
          moderno, claro y perfectamente adaptable a móviles.
        </p>

        <h3 id="estrategia-4">
          4. Grid para responsividad automática, Flexbox para componentes
        </h3>
        <p>
          Una gran ventaja de <strong>CSS Grid</strong> es que nos permite crear
          sistemas de tarjetas adaptables sin necesidad de media queries. Para
          ello, usamos funciones como <code>auto-fill</code> junto con{" "}
          <code>minmax()</code>.
        </p>
        <p>
          En nuestro proyecto, la sección de <code>.features-grid</code> usa
          Grid para que las tarjetas se redistribuyan automáticamente según el
          ancho disponible. Dentro de cada tarjeta, aplicamos Flexbox para
          alinear el contenido verticalmente.
        </p>
        <CodigoPost lenguaje="CSS">{`/* combined.css */

/* Grid para responsividad automática */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-lg);
}

/* Flexbox dentro de cada tarjeta */
.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-lg);
}`}</CodigoPost>
        <p>
          Esta combinación hace que el layout sea fluido y adaptable,
          manteniendo una estructura limpia y centrada en cada tarjeta.
        </p>

        <h3 id="estrategia-5">
          5. Intercambio de layout basado en media queries
        </h3>
        <p>
          En esta estrategia cambiamos de Grid a Flexbox (o viceversa) según el
          tamaño de pantalla, lo que permite adaptar el diseño a diferentes
          dispositivos de forma óptima.
        </p>
        <p>
          En la sección <code>.hero-container</code> usamos Grid en escritorio
          para distribuir el contenido en columnas, y Flexbox en móvil para
          reordenar y alinear verticalmente.
        </p>
        <CodigoPost lenguaje="CSS">{`/* combined.css */

/* Desktop: Usamos Grid */
.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

/* Mobile: Cambiamos a Flexbox */
@media (max-width: 768px) {
  .hero-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  .hero-image {
    order: -1; /* Imagen arriba en móviles */
  }
}`}</CodigoPost>
        <p>
          Esta técnica mejora la experiencia de quien navega en pantallas
          pequeñas sin duplicar el contenido ni complicar el HTML.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Ejemplos prácticos en nuestro repositorio de GitHub">
        <p>
          Para que puedas ver todos estos conceptos en acción, hemos creado un
          proyecto completo en GitHub con ejemplos interactivos. Cada estrategia
          mencionada en este artículo está implementada en este proyecto, donde
          podrás analizar el código y ver cómo funciona en un entorno real.
        </p>
        <TarjetasPost
          titulo="Lo que encontrarás en el repositorio"
          tarjetas={[
            {
              titulo: "Landing page completa",
              texto:
                "Una implementación real que utiliza todas las estrategias mencionadas en este artículo.",
            },
            {
              titulo: "Archivos CSS organizados",
              texto: (
                <>
                  <code>grid.css</code>, <code>flexbox.css</code> y{" "}
                  <code>combined.css</code> muestran claramente cómo separar y
                  combinar ambas tecnologías.
                </>
              ),
            },
            {
              titulo: "Componentes reutilizables",
              texto:
                "Tarjetas, navegación, secciones de características, testimonios, etc.",
            },
            {
              titulo: "Implementación responsive",
              texto: "Adaptación completa para móviles, tablets y escritorio.",
            },
          ]}
        />
        <p>
          <a
            href="https://github.com/femcodersclub/css-grid-flexbox-layouts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explora el código en GitHub
          </a>{" "}
          o{" "}
          <a
            href="https://femcodersclub.github.io/css-grid-flexbox-layouts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mira el ejemplo en vivo
          </a>
          .
        </p>

        <h3>Estructura del proyecto</h3>
        <CodigoPost lenguaje="Texto">{`css-grid-flexbox-layouts/
├── index.html            # Página principal (landing page)
├── css/                  # Carpeta de estilos CSS
│   ├── styles.css        # Estilos generales y variables
│   ├── grid.css          # Componentes estructurados con Grid
│   ├── flexbox.css       # Componentes estructurados con Flexbox
│   └── combined.css      # Componentes combinando Grid y Flexbox
├── js/
│   └── main.js           # JavaScript para interactividad básica (toggle menú)
├── images/               # Imágenes utilizadas en el proyecto
├── README.md             # Documentación del proyecto`}</CodigoPost>
        <p>
          En el archivo <code>README.md</code> encontrarás instrucciones para
          clonar el repositorio y ejecutar el proyecto localmente.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Ejemplo práctico: layout moderno de landing page">
        <p>
          Exploremos ahora cómo aplicamos todas estas estrategias en la landing
          page de ejemplo que hemos creado para este artículo:
        </p>
        <ImagenPost
          src="/public-optimized/desktop/assets/css/landing-preview.jpg"
          alt="Vista previa de la landing page de ejemplo del proyecto CSS Grid + Flexbox"
        />
        <p>
          El layout de nuestra landing page se divide en las siguientes
          secciones, y en cada una hemos aplicado específicamente las
          estrategias que acabamos de explicar:
        </p>
        <TablaPost descripcion="Estrategia aplicada en cada sección de la landing page">
          <table>
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
                  Grid para estructura, Flexbox para botones (estrategias 1 y 5)
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
                  Grid para distribución, Flexbox para tarjetas (estrategia 4)
                </td>
                <td>
                  <code>grid.css + flexbox.css</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Examples</strong>
                </td>
                <td>Grid asimétrico con tarjeta expandida (estrategia 2)</td>
                <td>
                  <code>combined.css</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Testimonials</strong>
                </td>
                <td>
                  Grid para estructura, Flexbox para alineación (estrategia 1)
                </td>
                <td>
                  <code>grid.css + flexbox.css</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Contact</strong>
                </td>
                <td>Grid con áreas nombradas (estrategia 3)</td>
                <td>
                  <code>grid.css</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Footer</strong>
                </td>
                <td>
                  Grid para macroestructura, Flexbox para grupos (estrategia 1)
                </td>
                <td>
                  <code>combined.css</code>
                </td>
              </tr>
            </tbody>
          </table>
        </TablaPost>
        <p>
          Cada una de estas secciones es un ejemplo perfecto de cómo elegir la
          técnica adecuada según el tipo de layout que necesitas crear,
          aprovechando las fortalezas específicas de Grid y Flexbox.
        </p>
        <NotaPost>
          <p>
            Al explorar el código fuente en GitHub, observa cómo los comentarios
            en cada archivo CSS explican qué estrategia se está aplicando y por
            qué se eligió esa aproximación para cada componente específico.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Buenas prácticas para combinar Grid y Flexbox">
        <p>
          A lo largo del desarrollo de este proyecto aplicamos algunas buenas
          prácticas esenciales que te recomendamos seguir:
        </p>
        <ListaMarcadaPost titulo="Lo que te recomendamos" tipo="bien">
          <li>
            <strong>Separa las responsabilidades:</strong> organizamos el CSS en
            archivos diferentes: <code>grid.css</code> para estructuras basadas
            en Grid, <code>flexbox.css</code> para componentes basados en
            Flexbox y <code>combined.css</code> para combinaciones de ambos.
          </li>
          <li>
            <strong>Mantén una organización lógica:</strong> agrupamos estilos
            relacionados y añadimos comentarios explicativos para facilitar el
            mantenimiento del proyecto.
          </li>
          <li>
            <strong>Usa áreas nombradas en Grid:</strong> definir áreas claras
            con <code>grid-template-areas</code> facilita la comprensión y
            modificación de layouts complejos como nuestro «Holy Grail Layout».
          </li>
          <li>
            <strong>Aplica un enfoque «mobile first»:</strong> desde el
            principio diseñamos pensando en dispositivos móviles, ajustando la
            estructura mediante media queries cuando es necesario.
          </li>
          <li>
            <strong>Utiliza variables CSS:</strong> todas las medidas de
            espacio, colores y tamaños de fuente están centralizadas en{" "}
            <code>styles.css</code> usando variables CSS para facilitar cambios
            globales.
          </li>
          <li>
            <strong>Evita anidar grids innecesariamente:</strong> combinamos
            Grid y Flexbox solo cuando cada uno aporta ventajas reales,
            evitando estructuras demasiado complicadas.
          </li>
          <li>
            <strong>Cuida la semántica HTML:</strong> la estructura de nuestro{" "}
            <code>index.html</code> está diseñada para mantener sentido lógico
            incluso sin aplicar estilos, mejorando accesibilidad y SEO.
          </li>
        </ListaMarcadaPost>
      </SeccionPost>

      <SeccionPost titulo="Compatibilidad con navegadores">
        <h3>Tabla de compatibilidad actualizada</h3>
        <TablaPost descripcion="Versiones de navegador compatibles con CSS Grid y Flexbox">
          <table>
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
                <td>10 y 11 (solo la sintaxis antigua con -ms-)</td>
                <td>11 (parcial)</td>
                <td>No recomendado</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <h3>Estrategias de fallback</h3>
        <p>Para garantizar la compatibilidad con navegadores más antiguos:</p>
        <CodigoPost lenguaje="CSS">{`/* Fallback para navegadores que no soportan Grid */
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
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Conclusión: lo mejor de ambos mundos">
        <p>
          CSS Grid y Flexbox son herramientas poderosas que, cuando se combinan
          estratégicamente como hemos demostrado en nuestro proyecto, ofrecen
          infinitas posibilidades para crear layouts web modernos, responsivos y
          mantenibles.
        </p>
        <p>
          En este post hemos explorado 5 estrategias clave para combinar ambas
          tecnologías, y las hemos implementado todas en nuestro proyecto de
          ejemplo. Te animamos a clonar el repositorio y examinar el código para
          ver cómo funciona cada estrategia en un entorno real.
        </p>

        <h3>Próximos pasos</h3>
        <ol>
          <li>
            Clona el{" "}
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts"
              target="_blank"
              rel="noopener noreferrer"
            >
              repositorio de GitHub
            </a>
            .
          </li>
          <li>
            Examina la estructura de archivos y los comentarios explicativos.
          </li>
          <li>
            Prueba la{" "}
            <a
              href="https://femcodersclub.github.io/css-grid-flexbox-layouts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              demo en vivo
            </a>{" "}
            y adapta tu navegador a diferentes tamaños.
          </li>
          <li>
            Prueba a modificar el código para crear tus propias variaciones.
          </li>
        </ol>

        <NotaPost titulo="¿Te animas a contribuir con tu propio ejemplo?">
          <p>
            Haz un <strong>pull request</strong> a nuestro repositorio y añade
            tu ejemplo creativo al proyecto:{" "}
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              contribuir al proyecto
            </a>
            . ¡Hagamos crecer juntas la colección de ejemplos!
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales">
        <ul>
          <li>
            <Link to="/recursos/css/flexbox">Guía completa de Flexbox</Link>
          </li>
          <li>
            <Link to="/recursos/css/css-grid">Guía completa de CSS Grid</Link>
          </li>
          <li>
            <a
              href="https://github.com/femcodersclub/css-grid-flexbox-layouts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio del proyecto
            </a>
          </li>
          <li>
            <a
              href="https://css-tricks.com/snippets/css/complete-guide-grid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS Grid Cheatsheet de CSS-Tricks
            </a>
          </li>
          <li>
            <a
              href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flexbox Cheatsheet de CSS-Tricks
            </a>
          </li>
          <li>
            <a
              href="https://layout.bradwoods.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grid Layout Generator (herramienta visual)
            </a>
          </li>
          <li>
            <a
              href="https://the-echoplex.net/flexyboxes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flexbox Layout Generator (herramienta visual)
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN Web Docs: CSS Grid
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN Web Docs: Flexbox
            </a>
          </li>
        </ul>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default CssGridFlexbox;
