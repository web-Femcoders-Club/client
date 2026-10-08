import React from "react";
import { Helmet } from "react-helmet";
import { articleSchema } from "../../../components/articleSchema";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ListaMarcadaPost,
  NotaPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const Flexbox: React.FC = () => (
  <>
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
          {JSON.stringify(
            articleSchema({
              type: "Article",
              path: "/recursos/css/flexbox",
              headline:
                "Flexbox: El poder de crear layouts flexibles | femCoders Club",
              description:
                "Aprende a usar Flexbox en CSS para crear layouts flexibles y responsivos de manera sencilla. Incluye ejemplos prácticos y recursos útiles.",
              image: "/assets/css/flexbox.jpg",
              datePublished: "2025-03-02",
              author: {
                "@type": "Person",
                name: "Irina Ichim",
              },
              articleBody:
                "Flexbox ha revolucionado el diseño web, permitiendo crear layouts flexibles con menos esfuerzo...",
            })
          )}
        </script>
      </Helmet>

    <PlantillaPost
      ruta="/recursos/css/flexbox"
      titulo="Flexbox: el poder de crear layouts flexibles"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={14}
      entradilla={
        <>
          <p>
            Antes de Flexbox, crear diseños web bien alineados era todo un
            desafío. Utilizábamos floats, position y otros trucos que a menudo
            acababan en código complicado y frágil. Con la llegada de Flexbox,
            todo cambió.
          </p>
          <p>
            Para complementar este aprendizaje, hemos creado un miniproyecto en
            GitHub que puedes utilizar para practicar:
          </p>
          <ul>
            <li>
              Repositorio en GitHub:{" "}
              <a
                href="https://github.com/femcodersclub/demoFlexbox.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                demoFlexBox en GitHub
              </a>
            </li>
            <li>
              Demostración en vivo:{" "}
              <a
                href="https://femcodersclub.github.io/demoFlexbox/"
                target="_blank"
                rel="noopener noreferrer"
              >
                demoFlexBox en vivo
              </a>
            </li>
          </ul>
          <p>
            <strong>Flexbox (Flexible Box Layout)</strong> llegó para
            revolucionar la forma en que posicionamos los elementos en nuestras
            páginas web. Se diseñó específicamente para crear diseños flexibles
            que se adapten a distintos tamaños de pantalla, lo que lo hace
            perfecto para el diseño web moderno y responsivo.
          </p>
        </>
      }
    >
      <SeccionPost titulo="Conceptos básicos de Flexbox">
        <p>
          Para trabajar con Flexbox necesitamos entender dos conceptos
          principales:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "1. Contenedor flex (flex container)",
              texto: (
                <>
                  Es el elemento padre que declaramos con{" "}
                  <code>display: flex</code> o{" "}
                  <code>display: inline-flex</code>. Este contenedor permite
                  que todos sus hijos directos se comporten como elementos
                  flexibles.
                </>
              ),
            },
            {
              titulo: "2. Elementos flex (flex items)",
              texto:
                "Son los hijos directos del contenedor flex. Estos elementos se alinean y distribuyen según las propiedades que definamos en el contenedor.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Propiedades principales del contenedor flex">
        <p>
          Estas propiedades controlan la distribución de los elementos dentro
          del contenedor flex:
        </p>

        <h3>
          <code>display</code>
        </h3>
        <p>Activa Flexbox en el contenedor.</p>
        <CodigoPost lenguaje="CSS">{`.contenedor {
    display: flex; /* Contenedor Flex */
}`}</CodigoPost>

        <h3>
          <code>flex-direction</code>
        </h3>
        <p>Define la dirección de los elementos.</p>
        <CodigoPost lenguaje="CSS">{`.contenedor {
    flex-direction: row; /* Fila (por defecto) */
    flex-direction: column; /* Columna */
}`}</CodigoPost>

        <h3>
          <code>flex-wrap</code>
        </h3>
        <p>Controla si los elementos se reparten en varias líneas.</p>
        <CodigoPost lenguaje="CSS">{`.contenedor {
    flex-wrap: wrap; /* Permite múltiples líneas */
}`}</CodigoPost>

        <h3>
          <code>justify-content</code>
        </h3>
        <p>Alinea los elementos en el eje principal.</p>
        <CodigoPost lenguaje="CSS">{`.contenedor {
    justify-content: center; /* Centra los elementos */
}`}</CodigoPost>

        <h3>
          <code>align-items</code>
        </h3>
        <p>Alinea los elementos en el eje cruzado.</p>
        <CodigoPost lenguaje="CSS">{`.contenedor {
    align-items: center; /* Centrado vertical */
}`}</CodigoPost>

        <h3>
          <code>align-content</code>
        </h3>
        <p>Alinea las líneas de elementos cuando hay varias.</p>
        <CodigoPost lenguaje="CSS">{`.contenedor {
    align-content: space-between; /* Espacio entre líneas */
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Propiedades de los elementos flex">
        <h3>
          Orden de los elementos: <code>order</code>
        </h3>
        <p>Cambia el orden de aparición de un elemento concreto:</p>
        <CodigoPost lenguaje="CSS">{`.elemento {
    order: 0; /* Por defecto */
    /* Números negativos mueven el elemento hacia el principio */
    /* Números positivos mueven el elemento hacia el final */
}`}</CodigoPost>

        <h3>
          Tamaño de los elementos: <code>flex-grow</code>,{" "}
          <code>flex-shrink</code> y <code>flex-basis</code>
        </h3>
        <p>
          Controlan cómo los elementos flexibles crecen, se encogen y se
          distribuyen:
        </p>
        <CodigoPost lenguaje="CSS">{`.elemento {
    flex-grow: 0; /* No crece por defecto */
    flex-shrink: 1; /* Puede encogerse si es necesario */
    flex-basis: auto; /* Tamaño inicial basado en el contenido */

    /* Abreviatura: */
    flex: 0 1 auto; /* flex-grow flex-shrink flex-basis */
}`}</CodigoPost>
        <ul>
          <li>
            <strong>
              <code>flex-grow</code>:
            </strong>{" "}
            define la capacidad de un elemento para crecer si hay espacio
            disponible.
          </li>
          <li>
            <strong>
              <code>flex-shrink</code>:
            </strong>{" "}
            define la capacidad de un elemento para encogerse si es necesario.
          </li>
          <li>
            <strong>
              <code>flex-basis</code>:
            </strong>{" "}
            define el tamaño inicial de un elemento antes de que se distribuya
            el espacio restante.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Alineación individual: align-self" id="align-self">
        <p>
          La propiedad <code>align-self</code> permite sobrescribir, para un
          elemento concreto dentro de un contenedor flex, la alineación
          establecida en <code>align-items</code>.
        </p>
        <p>
          Por ejemplo, si tienes varios elementos en un contenedor pero quieres
          que solo uno de ellos esté centrado verticalmente, puedes usar{" "}
          <code>align-self: center;</code> en ese elemento en particular.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Centrado perfecto con Flexbox">
        <p>
          Una de las razones por las que Flexbox es tan popular es que permite
          centrar elementos fácilmente en una página, algo que antes requería
          trucos complejos.
        </p>
        <p>
          ¿Cómo se hace? Basta con aplicar <code>justify-content: center;</code>{" "}
          para alinear horizontalmente y <code>align-items: center;</code> para
          centrar verticalmente dentro del contenedor.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Proyecto interactivo: ¡experimenta con Flexbox!">
        <p>
          Para reforzar lo que hemos visto, hemos creado un{" "}
          <strong>proyecto interactivo</strong> donde puedes experimentar con
          estas propiedades en acción.
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Navbar responsivo",
              texto: "Construido con Flexbox.",
            },
            {
              titulo: "Centrado de elementos",
              texto: (
                <>
                  Con <code>justify-content</code> y <code>align-items</code>.
                </>
              ),
            },
            {
              titulo: "Galería adaptable",
              texto: "Se reorganiza automáticamente.",
            },
            {
              titulo: "Controles interactivos",
              texto: "Para cambiar las propiedades de Flexbox.",
            },
          ]}
        />
        <h3>Prueba el proyecto</h3>
        <ul>
          <li>
            Código en GitHub:{" "}
            <a
              href="https://github.com/femcodersclub/demoFlexbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/femcodersclub/demoFlexbox
            </a>
          </li>
          <li>
            Demo en GitHub Pages:{" "}
            <a
              href="https://femcodersclub.github.io/demoFlexbox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              femcodersclub.github.io/demoFlexbox
            </a>
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Ventajas de usar Flexbox">
        <p>
          Flexbox ofrece múltiples ventajas que lo convierten en una opción
          ideal para diseñar{" "}
          <strong>layouts modernos, responsivos y fáciles de mantener</strong>.
        </p>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Simplicidad",
              texto:
                "Permite crear diseños complejos con menos código, más fácil de leer y mantener.",
            },
            {
              titulo: "Responsividad",
              texto:
                "Se adapta automáticamente a distintos tamaños de pantalla sin necesidad de media queries complicadas.",
            },
            {
              titulo: "Bidireccionalidad",
              texto:
                "Funciona en ambos ejes, horizontal y vertical, lo que facilita la distribución de los elementos.",
            },
            {
              titulo: "Alineación sencilla",
              texto: (
                <>
                  Centrar elementos ya no es un desafío gracias a propiedades
                  como <code>justify-content</code> y <code>align-items</code>.
                </>
              ),
            },
            {
              titulo: "Orden flexible",
              texto: (
                <>
                  Puedes cambiar el orden visual de los elementos sin modificar
                  el HTML, con la propiedad <code>order</code>.
                </>
              ),
            },
            {
              titulo: "Compatibilidad",
              texto:
                "Funciona en todos los navegadores modernos, lo que garantiza estabilidad en distintos entornos.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="¿Cuándo usar Flexbox?">
        <p>
          Flexbox es ideal cuando necesitas distribuir y alinear elementos de
          manera flexible en una dimensión (fila o columna).
        </p>
        <ListaMarcadaPost titulo="Casos en los que Flexbox es la mejor opción" tipo="bien">
          <li>
            <strong>Diseño de componentes pequeños:</strong> perfecto para
            alinear elementos dentro de tarjetas, botones, barras de navegación
            y formularios.
          </li>
          <li>
            <strong>Distribución de elementos en una fila o columna:</strong>{" "}
            útil para menús de navegación, galerías de imágenes o listas de
            productos.
          </li>
          <li>
            <strong>Alineación de elementos:</strong> centrar elementos en una
            página nunca fue tan fácil con <code>justify-content</code> y{" "}
            <code>align-items</code>.
          </li>
          <li>
            <strong>Espaciado uniforme entre elementos:</strong> proporciona
            control total sobre el espacio entre elementos con valores como{" "}
            <code>space-between</code> y <code>space-around</code>.
          </li>
          <li>
            <strong>Componentes dinámicos:</strong> cuando los elementos de un
            contenedor necesitan ajustarse según el contenido disponible sin
            usar <code>width</code> o <code>height</code> fijos.
          </li>
          <li>
            <strong>Diseños responsivos sin complicaciones:</strong> evita el
            uso excesivo de media queries, ya que Flexbox ajusta los elementos
            automáticamente según el tamaño del contenedor.
          </li>
        </ListaMarcadaPost>
      </SeccionPost>

      <SeccionPost titulo="Recursos para practicar Flexbox">
        <p>
          ¡Aprender Flexbox puede ser divertido! Te recomendamos estos recursos
          interactivos:
        </p>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Flexbox Froggy",
              texto:
                "Un juego educativo en el que ayudas a unas ranitas a llegar a sus nenúfares usando propiedades de Flexbox. Es perfecto para principiantes y cubre todas las propiedades principales que hemos visto.",
              enlace: "https://flexboxfroggy.com/#es",
            },
            {
              titulo: "Flexbox Defense",
              texto:
                "Otro juego en el que usas propiedades de Flexbox para posicionar torres de defensa y detener las oleadas de enemigos. Ideal para practicar la alineación y la distribución de elementos.",
              enlace: "http://www.flexboxdefense.com/",
            },
            {
              titulo: "CSS Diner",
              texto:
                "No es específico de Flexbox, pero es excelente para practicar los selectores CSS, fundamentales para aplicar correctamente tus estilos con Flexbox.",
              enlace: "https://flukeout.github.io/",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Compatibilidad con navegadores">
        <p>
          Flexbox es compatible con todos los navegadores modernos, lo que lo
          hace una opción segura para tus proyectos. Aquí tienes una tabla con
          la compatibilidad mínima requerida:
        </p>
        <TablaPost descripcion="Versión mínima de cada navegador compatible con Flexbox">
          <table>
            <thead>
              <tr>
                <th>Navegador</th>
                <th>Versión mínima</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chrome</td>
                <td>29+</td>
              </tr>
              <tr>
                <td>Firefox</td>
                <td>22+</td>
              </tr>
              <tr>
                <td>Safari</td>
                <td>6.1+</td>
              </tr>
              <tr>
                <td>Edge</td>
                <td>Compatibilidad completa</td>
              </tr>
              <tr>
                <td>Internet Explorer</td>
                <td>IE11 (con limitaciones)</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>
        <p>
          <strong>
            Flexbox es compatible con la mayoría de los navegadores
          </strong>{" "}
          y funciona sin problemas en proyectos modernos. Sin embargo,{" "}
          <strong>Internet Explorer 11</strong> presenta algunas limitaciones y
          comportamientos inesperados. Para garantizar una experiencia
          consistente, te recomendamos probar tus diseños en distintos
          navegadores.
        </p>
        <NotaPost titulo="Navegadores más antiguos" tipo="aviso">
          <p>
            Para navegadores más antiguos, puedes utilizar una herramienta como{" "}
            <a
              href="https://github.com/postcss/autoprefixer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Autoprefixer
            </a>, que añade automáticamente los prefijos de proveedor necesarios
            para mejorar la compatibilidad.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Conclusión: el poder de Flexbox">
        <p>
          Flexbox ha cambiado la forma en que diseñamos layouts en CSS: nos
          permite trabajar de manera más eficiente y crear estructuras
          flexibles con menos esfuerzo. Su capacidad para manejar alineaciones
          y distribuciones de elementos lo convierte en una herramienta
          imprescindible en el desarrollo web moderno.
        </p>
        <p>
          Aunque <strong>CSS Grid</strong> es una alternativa potente para
          construir layouts más complejos, Flexbox sigue siendo la mejor opción
          para manejar alineaciones en una sola dimensión y para componentes
          como barras de navegación, formularios y tarjetas.
        </p>

        <h3>Próximo tema: CSS Grid</h3>
        <p>
          En nuestro próximo post exploraremos <strong>CSS Grid</strong> y cómo
          combinarlo con Flexbox para lograr diseños web aún más dinámicos y
          versátiles.
        </p>
        <p>
          ¿Tienes alguna duda sobre Flexbox? ¡Déjanos un comentario y te
          ayudaremos!
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default Flexbox;
