import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  DemoPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const CSSSelectors: React.FC = () => (
  <>
      <Helmet>
        <title>Domina los Selectores en CSS | femCoders Club</title>
        <meta
          name="description"
          content="Guía completa para dominar los selectores CSS. Aprende selectores básicos, avanzados, combinados, y cómo utilizarlos con preprocesadores como Sass y Less."
        />
        <meta
          name="keywords"
          content="selectores básicos CSS, selectores avanzados CSS, selectores combinados CSS, modo oscuro CSS, pseudoclases CSS, pseudoelementos CSS, preprocesadores CSS, Sass, Less, selectores estructurales CSS, selectores de interfaz de usuario CSS, desarrollo web, diseño web"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/selectores-css"
        />

        {/* Directivas para motores de búsqueda */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina Ichim" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Domina los Selectores en CSS | femCoders Club" />
        <meta property="og:description" content="Explora los selectores en CSS, desde básicos como clases e ID hasta avanzados como pseudoclases y combinaciones. Ejemplos prácticos incluidos." />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/selectores-css"
        />
        <meta property="og:image" content="https://www.femcodersclub.com/assets/css/SelectoresCss.jpg" />
        <meta property="og:site_name" content="femCoders Club" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Domina los Selectores en CSS | femCoders Club" />
        <meta name="twitter:description" content="Explora todos los tipos de selectores CSS con ejemplos y práctica. Aprende a usarlos como una pro." />
        <meta name="twitter:image" content="https://www.femcodersclub.com/assets/css/SelectoresCss.jpg" />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-01-17T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Selectores" />
        <meta property="article:tag" content="Sass" />
        <meta property="article:tag" content="Less" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/css/selectores-css"
      titulo="Domina los selectores en CSS"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={12}
      entradilla={
        <>
          <p>
            En el post <Link to="/recursos/css/introduccion-css">Introducción a CSS</Link>{" "}
            hablamos sobre la importancia de CSS en el diseño web. Hoy vamos a
            profundizar en un tema esencial para cualquier desarrolladora:{" "}
            <strong>los selectores de CSS</strong>. Desde los básicos hasta los
            avanzados, aprenderemos a seleccionar elementos específicos del DOM y
            a aplicarles estilos de manera precisa.
          </p>
          <p>
            Para complementar este aprendizaje, hemos creado un miniproyecto para
            practicar: tienes el{" "}
            <a
              href="https://github.com/femcodersclub/CssSelectors"
              target="_blank"
              rel="noopener noreferrer"
            >
              repositorio CssSelectors en GitHub
            </a>{" "}
            y su{" "}
            <a
              href="https://femcodersclub.github.io/CssSelectors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              demostración en vivo en GitHub Pages
            </a>
            .
          </p>
        </>
      }
    >
      <SeccionPost titulo="1. Selectores básicos" id="selectores-basicos">
        <p>Los selectores básicos son la base de CSS. Estos incluyen:</p>

        <h3>Por etiqueta</h3>
        <p>Aplica estilos a todos los elementos de un tipo específico.</p>
        <CodigoPost lenguaje="CSS">{`h1 { color: blue; }`}</CodigoPost>

        <h3>Por clase</h3>
        <p>Aplica estilos a los elementos con una clase.</p>
        <CodigoPost lenguaje="CSS">{`.mi-clase { font-size: 20px; }`}</CodigoPost>

        <h3>Por ID</h3>
        <p>Aplica estilos a un único elemento con un ID.</p>
        <CodigoPost lenguaje="CSS">{`#mi-id { background-color: yellow; }`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Comparativa entre selectores">
        <TablaPost descripcion="Comparativa entre los selectores por etiqueta, por clase y por ID">
          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Descripción</th>
                <th>Uso común</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Por etiqueta</strong>
                </td>
                <td>Selecciona todos los elementos de un tipo.</td>
                <td>
                  Aplicar estilos generales a elementos similares (p, h1, div).
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Por clase</strong>
                </td>
                <td>Selecciona elementos con una clase específica.</td>
                <td>
                  Aplicar estilos a múltiples elementos que comparten una
                  característica (botones, secciones).
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Por ID</strong>
                </td>
                <td>Selecciona un elemento único.</td>
                <td>
                  Aplicar estilos a elementos muy específicos (encabezado
                  principal, pie de página).
                </td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <h3>Ejemplo práctico</h3>
        <CodigoPost lenguaje="HTML">{`<h1 id="titulo-principal">Bienvenido</h1>
<p class="destacado">Este es un párrafo destacado.</p>
<button class="boton">Haz clic aquí</button>`}</CodigoPost>
        <p>
          En este ejemplo, el selector <code>#titulo-principal</code> aplica
          estilos al encabezado principal, <code>.destacado</code> a los párrafos
          destacados y <code>.boton</code> a los botones.
        </p>
      </SeccionPost>

      <SeccionPost titulo="2. Selectores avanzados" id="selectores-avanzados">
        <p>
          Los selectores avanzados permiten aplicar estilos más específicos y
          flexibles, adecuados para estructuras complejas del DOM.
        </p>

        <h3>Selectores de atributos</h3>
        <p>Seleccionan elementos según sus atributos y valores.</p>
        <CodigoPost lenguaje="CSS">{`input[type="text"] {
  border: 1px solid black;
} /* Todos los inputs de tipo texto */

a[href^="https://"] {
  color: blue;
} /* Todos los enlaces que comienzan con https:// */`}</CodigoPost>

        <h3>Selectores de descendientes</h3>
        <p>Seleccionan todos los elementos dentro de un contenedor.</p>
        <CodigoPost lenguaje="CSS">{`div p { font-size: 16px; }`}</CodigoPost>
        <p>
          Aplica estilos a todos los elementos <code>&lt;p&gt;</code> que estén
          dentro de un <code>&lt;div&gt;</code>, sin importar su profundidad.
        </p>

        <h3>Selectores de hijos directos</h3>
        <p>Seleccionan los hijos inmediatos de un contenedor.</p>
        <CodigoPost lenguaje="CSS">{`div > p { font-weight: bold; }`}</CodigoPost>
        <p>
          Aplica estilos solo a los elementos <code>&lt;p&gt;</code> que son
          hijos directos del <code>&lt;div&gt;</code>.
        </p>

        <h3>Selectores de hermanos adyacentes</h3>
        <p>
          Seleccionan el hermano que va inmediatamente después de un elemento
          especificado.
        </p>
        <CodigoPost lenguaje="CSS">{`h1 + p { margin-top: 10px; }`}</CodigoPost>
        <p>
          Aplica estilos al primer <code>&lt;p&gt;</code> que sigue
          inmediatamente a un <code>&lt;h1&gt;</code>.
        </p>

        <h3>Selectores de hermanos generales</h3>
        <p>Seleccionan todos los hermanos que siguen a un elemento especificado.</p>
        <CodigoPost lenguaje="CSS">{`h1 ~ p { color: red; }`}</CodigoPost>
        <p>
          Aplica estilos a todos los elementos <code>&lt;p&gt;</code> que son
          hermanos posteriores de un <code>&lt;h1&gt;</code> en el mismo nivel
          del DOM.
        </p>

        <h3>Pseudoclases</h3>
        <p>
          Aplican estilos según el estado de un elemento (<code>:hover</code>,{" "}
          <code>:focus</code>).
        </p>
        <CodigoPost lenguaje="CSS">{`a:hover { text-decoration: underline; }`}</CodigoPost>

        <h3>Pseudoelementos</h3>
        <p>
          Permiten insertar contenido (<code>::before</code>,{" "}
          <code>::after</code>).
        </p>
        <CodigoPost lenguaje="CSS">{`p::before { content: "👉 "; }`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="3. Combinaciones de selectores" id="combinaciones-de-selectores">
        <p>
          Puedes combinar distintos tipos de selectores para crear reglas más
          específicas.
        </p>
        <CodigoPost lenguaje="CSS">{`div.special p:first-child {
  color: green;
} /* Los párrafos que son el primer hijo de su contenedor, dentro de un div con clase "special", serán verdes */`}</CodigoPost>
        <p>
          Este selector elige los párrafos que son el primer hijo de su
          contenedor dentro de un <code>&lt;div&gt;</code> con la clase{" "}
          <code>special</code> y los pone en verde.
        </p>
      </SeccionPost>

      <SeccionPost titulo="4. Selectores de posición" id="selectores-de-posicion">
        <p>
          Estos selectores permiten dar estilo a los elementos según su posición
          respecto a sus hermanos dentro del DOM.
        </p>

        <h3>
          <code>:first-child</code>
        </h3>
        <p>Selecciona un elemento cuando es el primer hijo de su contenedor.</p>
        <CodigoPost lenguaje="CSS">{`p:first-child {
  font-weight: bold;
} /* Pone en negrita el párrafo que sea el primer hijo de su contenedor */`}</CodigoPost>

        <h3>
          <code>:nth-child(n)</code>
        </h3>
        <p>Selecciona hijos según un patrón o una posición.</p>
        <CodigoPost lenguaje="CSS">{`li:nth-child(2n) {
  background-color: lightblue;
} /* Aplica fondo azul claro a los elementos li en posiciones pares */`}</CodigoPost>
        <p>
          Este selector aplicará un fondo azul claro a todos los elementos{" "}
          <code>&lt;li&gt;</code> que estén en una posición par (segundo,
          cuarto, sexto, etc.).
        </p>

        <h3>Ejemplo práctico: lista numerada con estilos alternos</h3>
        <p>A continuación, mostramos una lista con un estilo alterno aplicado:</p>
        <CodigoPost lenguaje="CSS">{`ol li:nth-child(even) {
  background-color: #f0f0f0;
} /* Aplica fondo gris claro a los elementos en posiciones pares */`}</CodigoPost>
        <DemoPost>
          <ol>
            <li className="post-demo__caja">Elemento 1</li>
            <li className="post-demo__caja" style={{ backgroundColor: "#f0f0f0" }}>
              Elemento 2
            </li>
            <li className="post-demo__caja">Elemento 3</li>
            <li className="post-demo__caja" style={{ backgroundColor: "#f0f0f0" }}>
              Elemento 4
            </li>
          </ol>
        </DemoPost>
      </SeccionPost>

      <SeccionPost titulo="5. Selectores estructurales" id="selectores-estructurales">
        <p>
          Estos selectores trabajan con la jerarquía y el estado de los elementos
          en el DOM, y ofrecen gran flexibilidad para personalizar estilos.
        </p>

        <h3>
          <code>:root</code>
        </h3>
        <p>
          Apunta al elemento raíz del documento (en HTML, <code>&lt;html&gt;</code>).
        </p>
        <CodigoPost lenguaje="CSS">{`:root {
  --main-color: #ff6600;
} /* Define una variable CSS personalizada llamada --main-color */`}</CodigoPost>
        <p>
          Esta variable CSS se puede usar en otros selectores para definir los
          colores de manera centralizada.
        </p>

        <h3>
          <code>:empty</code>
        </h3>
        <p>Selecciona elementos que no tienen contenido.</p>
        <CodigoPost lenguaje="CSS">{`div:empty {
  display: none;
} /* Oculta todos los elementos div vacíos */`}</CodigoPost>
        <p>Ideal para limpiar el diseño eliminando contenedores vacíos.</p>

        <h3>
          <code>:not(selector)</code>
        </h3>
        <p>
          Selecciona elementos que no coinciden con el selector especificado.
        </p>
        <CodigoPost lenguaje="CSS">{`p:not(.highlight) {
  color: black;
} /* Aplica color negro a párrafos que no tengan la clase "highlight" */`}</CodigoPost>
        <p>
          Permite excluir elementos concretos de un conjunto de reglas de estilo.
        </p>

        <h3>Ejemplo práctico: tema oscuro</h3>
        <p>
          Con el selector <code>:root</code> y variables CSS puedes implementar
          fácilmente un tema oscuro alternando los valores de las variables.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Tema claro por defecto */
:root {
  --main-color: #333;
  --background-color: #fff;
}

/* Activar tema oscuro */
.dark-mode {
  --main-color: #fff;
  --background-color: #333;
}`}</CodigoPost>
        <p>
          En este ejemplo, la clase <code>.dark-mode</code> se puede añadir al
          contenedor principal para activar el tema oscuro de forma dinámica:
          las variables que define sustituyen a las de <code>:root</code> en
          todo lo que hay dentro de ese contenedor.
        </p>
      </SeccionPost>

      <SeccionPost titulo="6. Selectores de interfaz de usuario" id="selectores-de-interfaz-de-usuario">
        <p>
          Estos selectores son ideales para formularios y elementos
          interactivos, y mejoran la experiencia de uso.
        </p>

        <h3>
          <code>:enabled</code>
        </h3>
        <p>Selecciona elementos habilitados.</p>
        <CodigoPost lenguaje="CSS">{`input:enabled {
  border-color: green;
} /* Aplica un borde verde a los campos habilitados */`}</CodigoPost>

        <h3>
          <code>:disabled</code>
        </h3>
        <p>Selecciona elementos deshabilitados.</p>
        <CodigoPost lenguaje="CSS">{`input:disabled {
  opacity: 0.5;
} /* Reduce la opacidad de los campos deshabilitados para indicar su estado */`}</CodigoPost>

        <h3>
          <code>:focus</code>
        </h3>
        <p>Selecciona el elemento que tiene el foco.</p>
        <CodigoPost lenguaje="CSS">{`input:focus {
  outline: 2px solid blue;
} /* Agrega un contorno azul para resaltar el campo enfocado */`}</CodigoPost>

        <h3>Ejemplo práctico: botón personalizado</h3>
        <p>
          Así se define un botón con estilos personalizados y cambios dinámicos
          cuando interactúas con él:
        </p>
        <CodigoPost lenguaje="CSS">{`button {
  background-color: #4CAF50; /* Fondo verde */
  color: white; /* Texto blanco */
  padding: 15px 32px; /* Espaciado interno */
  text-align: center; /* Centrado del texto */
  text-decoration: none; /* Sin subrayado */
  display: inline-block; /* Elemento en línea con propiedades de bloque */
  font-size: 16px; /* Tamaño de fuente */
  margin: 4px 2px; /* Márgenes */
  cursor: pointer; /* Cambia el cursor a un puntero */
}

button:hover {
  background-color: #3e8e41; /* Fondo más oscuro al pasar el ratón */
}

button:active {
  background-color: #3e8e41; /* Fondo más oscuro */
  box-shadow: 0 5px #666; /* Sombra para efecto de pulsación */
  transform: translateY(4px); /* Mueve el botón hacia abajo simulando un clic */
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="7. Preprocesadores CSS: Sass y Less" id="preprocesadores-css">
        <p>
          Los preprocesadores CSS como <strong>Sass</strong> y{" "}
          <strong>Less</strong> permiten escribir CSS de forma más eficiente,
          organizada y potente. Estas herramientas añaden características como
          variables, anidamiento, mixins y funciones, lo que facilita la
          creación de estilos complejos y reutilizables.
        </p>

        <h3>Sass</h3>
        <CodigoPost lenguaje="SCSS">{`$primary-color: #3498db;

@mixin button-style($background-color) {
  background-color: $background-color;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.primary-button {
  @include button-style($primary-color);
}

.secondary-button {
  @include button-style(#f0ad4e);
}`}</CodigoPost>
        <p>
          En este ejemplo se define un mixin llamado <code>button-style</code>{" "}
          que encapsula los estilos comunes de un botón. Luego, se usa este mixin
          para crear dos botones con distintos colores de fondo.
        </p>

        <TarjetasPost
          titulo="Ventajas de usar preprocesadores"
          tarjetas={[
            {
              titulo: "Reutilización de código",
              texto: "Usa mixins y funciones para evitar repetir estilos.",
            },
            {
              titulo: "Mejor organización",
              texto:
                "Divide los estilos en archivos parciales para mantener tu proyecto limpio y modular.",
            },
            {
              titulo: "Mayor legibilidad",
              texto:
                "Utiliza el anidamiento para reflejar la estructura HTML y mejorar la claridad del CSS.",
            },
            {
              titulo: "Funciones matemáticas y lógicas",
              texto:
                "Realiza cálculos directamente en el CSS para manejar tamaños, colores y más.",
            },
            {
              titulo: "Integración con herramientas de desarrollo",
              texto:
                "Compatible con frameworks, compiladores y herramientas de automatización como Webpack.",
            },
          ]}
        />

        <h3>¿Cuál elegir: Sass o Less?</h3>
        <p>
          Tanto <strong>Sass</strong> como <strong>Less</strong> son excelentes
          opciones. La elección depende de tus preferencias personales y del
          proyecto en el que trabajes:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Sass",
              texto: "Ofrece más características avanzadas y tiene una comunidad más grande.",
            },
            {
              titulo: "Less",
              texto:
                "Más sencillo de aprender para quienes ya están familiarizados con JavaScript.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          Los selectores CSS son el núcleo de cualquier hoja de estilo. Dominar
          su uso no solo te permitirá diseñar páginas web personalizadas y
          funcionales, sino que también potenciará tus habilidades como
          desarrolladora.
        </p>
        <p>
          Ahora que conoces los fundamentos y las técnicas avanzadas de
          selectores, ¡es el momento de ponerlo en práctica! Crea, experimenta y
          lleva tus proyectos al siguiente nivel.
        </p>
        <p>
          Comparte tus creaciones con la comunidad de FemCoders Club y forma
          parte de un espacio donde el aprendizaje y la inspiración se
          comparten. Estamos emocionadas por ver lo que puedes lograr. 💻✨
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default CSSSelectors;
