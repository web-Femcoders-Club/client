import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { FaSquareXTwitter } from "react-icons/fa6";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const CSSSelectors: React.FC = () => {
  const currentUrl = window.location.href;
  const publicationDate = "17 de enero de 2025";

  return (
    <div className="blog-post">
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
        <meta
          property="og:title"
          content="Domina los Selectores en CSS | femCoders Club"
        />
        <meta
          property="og:description"
          content="Explora los selectores en CSS, desde básicos como clases e ID hasta avanzados como pseudoclases y combinaciones. Ejemplos prácticos incluidos."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="/assets/css/SelectoresCss.jpg" />
        <meta property="og:site_name" content="femCoders Club" />
        <meta property="og:locale" content="es_ES" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/css/SelectoresCss.jpg"
          alt="Selectores en CSS"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">Domina los Selectores en CSS</h1>

      <div className="social-share">
        <div className="share-buttons">
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Facebook"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href={`https://www.instagram.com/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Instagram"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en LinkedIn"
          >
            <BsLinkedin className="social-icon" />
          </a>
          <a
            href={`https://twitter.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Twitter"
          >
            <FaSquareXTwitter className="social-icon" />
          </a>
          <a
            href={`https://www.tiktok.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>

      <div className="intro-text">
  <p>
    En el post
    <strong>
      {" "}
      <a href="/recursos/css/introduccion-css" title="Introducción a CSS">
        Introducción a CSS
      </a>
    </strong>
    , hablamos sobre la importancia de CSS en el diseño web. Hoy vamos a
    profundizar en un tema esencial para cualquier desarrolladora:
    <strong> los selectores de CSS.</strong> Desde los básicos hasta los
    avanzados, aprenderemos a seleccionar elementos específicos del DOM y
    aplicaremos estilos de manera precisa.
  </p>
  <p>
    Para complementar este aprendizaje, hemos creado un mini-proyecto en GitHub
    que puedes utilizar para practicar:
    <br /><span>
    👉 Repositorio en GitHub:{" "}
    <a
      href="https://github.com/femcodersclub/CssSelectors"
      title="Repositorio GitHub de Selectores CSS"
      target="_blank"
      rel="noopener"
    >
      CssSelectors - Repositorio GitHub
    </a>
    <br />
    🌐 Demostración en vivo:{" "}
    <a
      href="https://femcodersclub.github.io/CssSelectors/"
      title="Demostración en vivo de Selectores CSS"
      target="_blank"
      rel="noopener"
    >
      CssSelectors - GitHub Pages
    </a></span>
  </p>
</div>


      <div className="highlight-box">
        <h2>1. Selectores Básicos</h2>
        <p>Los selectores básicos son la base de CSS. Estos incluyen:</p>
        <ul>
          <li>
            **Por etiqueta:** Aplica estilos a todos los elementos de un tipo
            específico.
            <pre className="code-block bg3">{`h1 { color: blue; }`}</pre>
          </li>
          <li>
            **Por clase:** Aplica estilos a elementos con una clase.
            <pre className="code-block bg3 ">{`.mi-clase { font-size: 20px; }`}</pre>
          </li>
          <li>
            **Por ID:** Aplica estilos a un único elemento con un ID.
            <pre className="code-block bg3">{`#mi-id { background-color: yellow; }`}</pre>
          </li>
        </ul>
      </div>
      <div className="highlight-box">
        <h2>Comparativa entre selectores</h2>
        <table className="framework-comparison-table">
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
        <p>**Ejemplo práctico:**</p>
        <pre className="code-block bg3">
          <code>
            &lt;h1 id="titulo-principal"&gt;Bienvenido&lt;/h1&gt; &lt;p
            class="destacado"&gt;Este es un párrafo destacado.&lt;/p&gt; &lt;div
            class="boton"&gt;Haz clic aquí&lt;/div&gt;
          </code>
        </pre>
        <p>
          En este ejemplo, el selector `#titulo-principal` aplica estilos al
          encabezado principal, `.destacado` a los párrafos destacados y
          `.boton` a los botones.
        </p>
      </div>

      <div className="highlight-box">
        <h2>2. Selectores Avanzados</h2>
        <p>
          Los selectores avanzados permiten aplicar estilos más específicos y
          flexibles, adecuados para estructuras complejas del DOM:
        </p>
        <ul>
          <li>
            <strong>Selectores de atributos:</strong> Seleccionan elementos
            según atributos y valores.
            <pre className="code-block bg3">{`input[type="text"] { 
  border: 1px solid black; 
} /* Todos los inputs de tipo texto */

a[href^="https://"] { 
  color: blue; 
} /* Todos los enlaces que comienzan con https:// */`}</pre>
          </li>
          <li>
            <strong>Selectores de descendientes:</strong> Seleccionan todos los
            elementos dentro de un contenedor.
            <pre className="code-block bg3">{`div p { font-size: 16px; }`}</pre>
            <p>
              Aplica estilos a todos los elementos <code>&lt;p&gt;</code> que
              estén dentro de un <code>&lt;div&gt;</code>, sin importar su
              profundidad.
            </p>
          </li>
          <li>
            <strong>Selectores de hijos directos:</strong> Seleccionan elementos
            hijos inmediatos de un contenedor.
            <pre className="code-block bg3">{`div > p { font-weight: bold; }`}</pre>
            <p>
              Aplica estilos solo a los elementos <code>&lt;p&gt;</code> que son
              hijos directos del <code>&lt;div&gt;</code>.
            </p>
          </li>
          <li>
            <strong>Selectores de hermanos adyacentes:</strong> Seleccionan el
            primer hermano inmediatamente después de un elemento especificado.
            <pre className="code-block bg3">{`h1 + p { margin-top: 10px; }`}</pre>
            <p>
              Aplica estilos al primer <code>&lt;p&gt;</code> que sigue
              inmediatamente después de un <code>&lt;h1&gt;</code>.
            </p>
          </li>
          <li>
            <strong>Selectores de hermanos generales:</strong> Seleccionan todos
            los hermanos que siguen a un elemento especificado.
            <pre className="code-block bg3">{`h1 ~ p { color: red; }`}</pre>
            <p>
              Aplica estilos a todos los elementos <code>&lt;p&gt;</code> que
              son hermanos posteriores de un <code>&lt;h1&gt;</code> en el mismo
              nivel del DOM.
            </p>
          </li>
          <li>
            <strong>Pseudoclases:</strong> Aplican estilos basados en el estado
            de un elemento (hover, focus).
            <pre className="code-block bg3">{`a:hover { text-decoration: underline; }`}</pre>
          </li>
          <li>
            <strong>Pseudoelementos:</strong> Permiten insertar contenido
            (::before, ::after).
            <pre className="code-block bg3">{`p::before { content: "👉 "; }`}</pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>3. Combinaciones de Selectores</h2>
        <p>
          Puedes combinar diferentes tipos de selectores para crear reglas más
          específicas.
        </p>
        <pre className="code-block bg3">{`div.special p:first-child { 
  color: green; 
} /* El primer párrafo dentro de un div con clase "special" será verde */`}</pre>
        <p>
          Este selector selecciona el primer párrafo dentro de un{" "}
          <code>&lt;div&gt;</code> con la clase <strong>"special"</strong> y lo
          hace verde.
        </p>
      </div>

      <div className="highlight-box">
        <h2>4. Selectores de Tipografía</h2>
        <p>
          Estos selectores permiten estilizar elementos basados en su posición
          en relación con sus hermanos dentro del DOM.
        </p>
        <ul>
          <li>
            <strong>:first-child:</strong> Selecciona el primer hijo de un
            elemento.
            <pre className="code-block bg3">{`p:first-child { 
  font-weight: bold; 
} /* Aplica un estilo negrita al primer párrafo dentro de su contenedor */`}</pre>
          </li>
          <li>
            <strong>:nth-child(n):</strong> Selecciona hijos según un patrón o
            posición.
            <pre className="code-block bg3">{`li:nth-child(2n) { 
  background-color: lightblue; 
} /* Aplica fondo azul claro a los elementos li en posiciones pares */`}</pre>
            <p>
              Este selector aplicará un fondo azul claro a todos los elementos{" "}
              <code>&lt;li&gt;</code> que estén en una posición par (segundo,
              cuarto, sexto, etc.).
            </p>
          </li>
        </ul>
        <h3>Ejemplo práctico: Lista numerada con estilos alternantes</h3>
        <p>
          A continuación, mostramos una lista con un estilo alternante aplicado:
        </p>
        <ol>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
          <li>Elemento 4</li>
        </ol>
        <pre className="code-block bg3">{`ol li:nth-child(even) { 
  background-color: #f0f0f0; 
} /* Aplica fondo gris claro a los elementos en posiciones pares */`}</pre>
      </div>

      <div className="highlight-box">
        <h2>5. Selectores Estructurales</h2>
        <p>
          Estos selectores trabajan con la jerarquía y el estado de los
          elementos en el DOM, ofreciendo gran flexibilidad para personalizar
          estilos.
        </p>
        <ul>
          <li>
            <strong>:root:</strong> Apunta al elemento raíz del documento
            (generalmente <code>&lt;html&gt;</code>).
            <pre className="code-block bg3">{`:root { 
  --main-color: #ff6600; 
} /* Define una variable CSS personalizada llamada --main-color */`}</pre>
            <p>
              Esta variable CSS puede ser utilizada en otros selectores para
              establecer colores de manera centralizada.
            </p>
          </li>
          <li>
            <strong>:empty:</strong> Selecciona elementos que no tienen
            contenido.
            <pre className="code-block bg3">{`div:empty { 
  display: none; 
} /* Oculta todos los elementos div vacíos */`}</pre>
            <p>Ideal para limpiar el diseño eliminando contenedores vacíos.</p>
          </li>
          <li>
            <strong>:not(selector):</strong> Selecciona elementos que no
            coinciden con el selector especificado.
            <pre className="code-block bg3">{`p:not(.highlight) { 
  color: black; 
} /* Aplica color negro a párrafos que no tengan la clase "highlight" */`}</pre>
            <p>
              Permite excluir elementos específicos de un conjunto de reglas de
              estilo.
            </p>
          </li>
        </ul>

        <h3>Ejemplo práctico: Tema oscuro</h3>
        <p>
          Utilizando el selector <code>:root</code> y variables CSS, puedes
          implementar fácilmente un tema oscuro alternando los valores de las
          variables.
        </p>
        <pre className="code-block bg3">{`/* Tema claro por defecto */
:root {
  --main-color: #333;
  --background-color: #fff;
}

/* Activar tema oscuro */
.dark-mode :root {
  --main-color: #fff;
  --background-color: #333;
}`}</pre>
        <p>
          En este ejemplo, la clase <code>.dark-mode</code> puede ser añadida al
          contenedor principal para activar el tema oscuro dinámicamente.
        </p>
      </div>

      <div className="highlight-box">
        <h2>6. Selectores de Interfaz de Usuario</h2>
        <p>
          Estos selectores son ideales para formularios y elementos
          interactivos, mejorando la experiencia del usuario:
        </p>
        <ul>
          <li>
            <strong>:enabled:</strong> Selecciona elementos habilitados.
            <pre className="code-block bg3">{`input:enabled { 
  border-color: green; 
} /* Aplica un borde verde a los campos habilitados */`}</pre>
          </li>
          <li>
            <strong>:disabled:</strong> Selecciona elementos deshabilitados.
            <pre className="code-block bg3">{`input:disabled { 
  opacity: 0.5; 
} /* Reduce la opacidad de los campos deshabilitados para indicar su estado */`}</pre>
          </li>
          <li>
            <strong>:focus:</strong> Selecciona elementos que tienen el foco.
            <pre className="code-block bg3">{`input:focus { 
  outline: 2px solid blue; 
} /* Agrega un contorno azul para resaltar el campo enfocado */`}</pre>
          </li>
        </ul>

        <h3>Ejemplo práctico: Botón personalizado</h3>
        <p>
          A continuación, se muestra un botón con estilos personalizados y
          cambios dinámicos al interactuar con el usuario:
        </p>
        <button>Enviar</button>
        <pre className="code-block bg3">{`button {
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
}`}</pre>
      </div>

      <div className="highlight-box">
        <h2>7. Preprocesadores CSS: Sass y Less</h2>
        <p>
          Los preprocesadores CSS como <strong>Sass</strong> y{" "}
          <strong>Less</strong> permiten escribir CSS de forma más eficiente,
          organizada y potente. Estas herramientas añaden características como
          variables, anidamiento, mixins y funciones, lo que facilita la
          creación de estilos complejos y reutilizables.
        </p>

        <h3>Sass</h3>
        <pre className="code-block bg3">{`$primary-color: #3498db;

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
}`}</pre>

        <p>
          En este ejemplo, se define un mixin llamado <code>button-style</code>{" "}
          que encapsula los estilos comunes de un botón. Luego, se utiliza este
          mixin para crear dos botones con diferentes colores de fondo.
        </p>

        <h3>Ventajas de usar preprocesadores:</h3>
        <ul>
          <li>
            <strong>Reutilización de código:</strong> Usa mixins y funciones
            para evitar repetir estilos.
          </li>
          <li>
            <strong>Mejor organización:</strong> Divide los estilos en archivos
            parciales para mantener tu proyecto limpio y modular.
          </li>
          <li>
            <strong>Mayor legibilidad:</strong> Utiliza anidamiento para
            reflejar la estructura HTML y mejorar la claridad del CSS.
          </li>
          <li>
            <strong>Funciones matemáticas y lógicas:</strong> Realiza cálculos
            directamente en el CSS para manejar tamaños, colores y más.
          </li>
          <li>
            <strong>Integración con herramientas de desarrollo:</strong>{" "}
            Compatible con frameworks, compiladores y herramientas de
            automatización como Webpack.
          </li>
        </ul>

        <h3>¿Cuál elegir: Sass o Less?</h3>
        <p>
          Tanto <strong>Sass</strong> como <strong>Less</strong> son excelentes
          opciones. La elección depende de tus preferencias personales y del
          proyecto en el que trabajes:
        </p>
        <ul>
          <li>
            <strong>Sass:</strong> Ofrece más características avanzadas y tiene
            una comunidad más grande.
          </li>
          <li>
            <strong>Less:</strong> Más sencillo de aprender para quienes ya
            están familiarizados con JavaScript.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Conclusión</h2>
        <p>
          Los selectores CSS son el núcleo de cualquier hoja de estilo. Dominar
          su uso no solo te permitirá diseñar páginas web personalizadas y
          funcionales, sino que también potenciará tus habilidades como
          desarrolladora.
        </p>
        <p>
          Ahora que conoces los fundamentos y técnicas avanzadas de selectores,
          ¡es el momento de ponerlo en práctica! Crea, experimenta y lleva tus
          proyectos al siguiente nivel.
        </p>
        <p>
          Comparte tus creaciones con la comunidad de femCoders Club y sé parte
          de un espacio donde el aprendizaje y la inspiración se comparten.
          Estamos emocionadas por ver lo que puedes lograr. 💻✨
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

      <CommentsSection postId={12} />
    </div>
  );
};

export default CSSSelectors;
