import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const BoxModels: React.FC = () => {
  const publicationDate = "16 de febrero de 2025";

  return (
    <div className="blog-post">
      <Helmet>
        <title>Box Model en CSS | Guía Completa para Frontend</title>
        <meta
          name="description"
          content="Aprende todo sobre el Box Model en CSS con ejemplos, optimización y mejores prácticas. FemCoders Club te ayuda a mejorar tu diseño web y frontend."
        />
        <meta
          name="keywords"
          content="CSS, Box Model, diseño web, frontend, maquetación, desarrollo web, espacio en elementos, estilos en CSS, FemCoders Club, optimización CSS, femCoders Club"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/box-model"
        />

        {/* Directivas para motores de búsqueda */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina Ichim" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Box Model en CSS | Guía Completa con FemCoders Club" />
        <meta property="og:description" content="Descubre cómo funciona el Box Model en CSS y optimiza tus diseños web con técnicas avanzadas. Aprende con FemCoders Club." />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/box-model"
        />
        <meta property="og:image" content="https://www.femcodersclub.com/assets/css/boxModel.jpg" />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Box Model en CSS | Guía Completa para Frontend" />
        <meta name="twitter:description" content="Aprende Box Model en CSS con ejemplos prácticos, optimización y mejores prácticas para diseño web profesional." />
        <meta name="twitter:image" content="https://www.femcodersclub.com/assets/css/boxModel.jpg" />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-02-16T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Box Model" />
        <meta property="article:tag" content="Frontend" />
        <meta property="article:tag" content="Diseño Web" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/css/boxModel.jpg"
          alt="Box Model en CSS"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
      Box Model en CSS | Guía Completa para Frontend 
      </h1>

      <ShareButtons path="/recursos/css/box-model" title="Box Model en CSS | Guía Completa con FemCoders Club" />

      <div className="intro-text">
        <p>
          🎉 ¡Hola, comunidad <span>FemCoders Club! </span>🎉 Hoy vamos a hablar
          sobre el <strong>Box Model en CSS</strong>, una de las bases
          fundamentales para entender cómo los elementos se comportan en una
          página web. 📦✨
        </p>
        <p>
          Si alguna vez te has preguntado por qué un botón no se alinea como
          esperas o por qué un div tiene más espacio del que debería, el Box
          Model tiene la respuesta. En este artículo, exploraremos cómo funciona
          y cómo puedes usarlo para construir diseños más precisos y
          profesionales.
        </p>
        <p>
          🚀 ¡Vamos a desglosarlo paso a paso para que domines el Box Model como
          toda una experta en CSS!
        </p>
      </div>
      <div className="highlight-box">
        <h2>📦 ¿Qué es el Box Model?</h2>
        <p>
          Imagina que cada elemento HTML en tu página web es una **caja**. Pero
          esta "caja" no es solo el contenido que ves; en realidad, está
          compuesta por varias capas que definen su tamaño y espacio en la
          página. Estas capas son:
        </p>
        <ul>
          <li>
            <strong>1. Content (Contenido)</strong>: Es el corazón del elemento,
            donde se muestra el texto, imágenes u otros medios.
          </li>
          <li>
            <strong>2. Padding (Relleno)</strong>: El espacio entre el contenido
            y el borde.
          </li>
          <li>
            <strong>3. Border (Borde)</strong>: El límite que rodea el padding y
            el contenido.
          </li>
          <li>
            <strong>4. Margin (Margen)</strong>: El espacio exterior que separa
            el elemento de otros elementos en la página.
          </li>
        </ul>

        <pre className="ascii-box text-center mt-4 p-4 bg-gray-100 rounded-lg shadow-md text-sm font-mono">
          {`
    |---------------------------|
    |        Margen (15px)      |
    |  |---------------------|  |
    |  |     Borde (5px)     |  |
    |  |  |---------------|  |  |
    |  |  |  Relleno (20px)|  |  |
    |  |  |  |---------|  |  |  |
    |  |  |  | Contenido|  |  |  |
    |  |  |  |---------|  |  |  |
    |  |  |---------------|  |  |
    |  |---------------------|  |
    |---------------------------|
    `}
        </pre>

        <p className="text-center text-gray-600 mt-2">
          📌 Representación del Modelo de Caja en CSS.
        </p>
      </div>

      <div className="highlight-box">
        <h2>📦 Las capas del Box Model en detalle</h2>
        <br />
        <p>
          Veamos cómo funciona cada capa del Box Model y cómo podemos
          controlarlas con CSS.
        </p>

        <h3>📌 Content (Contenido)</h3>
        <p>
          El contenido es el área donde se muestra tu texto, imágenes o
          cualquier otro medio. Sus dimensiones se controlan mediante:
        </p>
        <ul>
          <li>
            <strong>width</strong>: Define el ancho del contenido.
          </li>
          <li>
            <strong>height</strong>: Define la altura del contenido.
          </li>
          <li>
            <strong>min-width</strong> y <strong>max-width</strong>: Establecen
            límites de ancho.
          </li>
          <li>
            <strong>min-height</strong> y <strong>max-height</strong>:
            Establecen límites de altura.
          </li>
        </ul>

        <h3>📌 Padding (Relleno)</h3>
        <p>
          El padding es como un colchón invisible alrededor del contenido. Se
          controla con:
        </p>
        <ul>
          <li>
            <strong>
              padding-top, padding-right, padding-bottom, padding-left
            </strong>
            : Controlan el relleno en cada lado.
          </li>
          <li>
            <strong>padding</strong>: Define el relleno en los cuatro lados al
            mismo tiempo.
          </li>
        </ul>
        <pre className="code-block bg3">
          {`padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;

/* O la versión abreviada */
padding: 10px 20px;`}
        </pre>

        <h3>📌 Border (Borde)</h3>
        <p>
          El borde es la línea visible (o invisible) que envuelve el padding y
          el contenido. Puedes personalizarlo con:
        </p>
        <ul>
          <li>
            <strong>border-width</strong>: Define el grosor del borde.
          </li>
          <li>
            <strong>border-style</strong>: Define el estilo (sólido, punteado,
            etc.).
          </li>
          <li>
            <strong>border-color</strong>: Define el color del borde.
          </li>
          <li>
            <strong>border</strong>: Combina las propiedades anteriores.
          </li>
        </ul>
        <pre className="code-block bg3">
          {`border-width: 2px;
border-style: solid;
border-color: black;

/* O la versión abreviada */
border: 2px solid black;`}
        </pre>

        <h3>📌 Margin (Margen)</h3>
        <p>
          El margen es el espacio exterior que separa un elemento de otros. Se
          controla con:
        </p>
        <ul>
          <li>
            <strong>
              margin-top, margin-right, margin-bottom, margin-left
            </strong>
            : Controlan el margen en cada lado.
          </li>
          <li>
            <strong>margin</strong>: Define el margen en los cuatro lados al
            mismo tiempo.
          </li>
        </ul>
        <pre className="code-block bg3">
          {`margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* O la versión abreviada */
margin: 10px 20px;`}
        </pre>

        <h3>🎨 Ejemplo práctico: Caja con estilos personalizados</h3>
        <p>Veamos cómo se aplican estas propiedades en un ejemplo práctico:</p>
        <pre className="code-block bg3">
          {`.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  background-color: #f3f3f3;
}`}
        </pre>

        <br />
        <div className="example-box mt-6 p-6 border-2 border-black bg-gray-100">
          <p className="text-center">
            📦 Esta es una caja con estilos aplicados.
          </p>
        </div>
        <br />
        <p className="mt-4">
          En este ejemplo, hemos creado una caja con un 'ancho de 200px', un
          'alto de 100px', un 'relleno de 20px', 'un borde sólido de 2px' y 'un
          margen de 10px'. Puedes ajustar estos valores según tus necesidades
          para crear diseños personalizados. 🚀
        </p>
      </div>

      <div className="highlight-box">
        <h2>📏 Box Sizing: Controlando el Tamaño de los Elementos</h2>
        <p>
          Una de las propiedades más importantes relacionadas con el Box Model
          es <strong>box-sizing</strong>. Controla cómo se calcula el 'ancho y
          alto' de un elemento en relación con su contenido, padding y borde.
        </p>
        <br />
        <h3>🎯 ¿Cómo afecta `box-sizing`?</h3>

        <p>
          Dependiendo del valor que elijas, 'el tamaño total del elemento'
          cambiará. Veamos cómo se comportan los dos valores principales:
        </p>
        <br />

        <h3>📦 `content-box` (Valor por Defecto)</h3>
        <br />
        <p>
          <strong>
            {" "}
            En content-box, el ancho y alto del elemento solo incluyen el
            contenido,{" "}
          </strong>
          pero el padding y el borde se suman al tamaño total.
        </p>

        <div className="relative bg-gray-100 p-6 rounded-lg shadow-md mt-4">
          <div className="w-40 h-20 p-4 border-4 border-blue-500 bg-white box-content">
            📦 `content-box`
          </div>
        </div>

        <pre className="code-block bg3">
          {`/* CSS */
.elemento {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
/* Ancho total = 200px + 20px (padding) + 10px (border) = 230px */
`}
        </pre>

        <h3>🖼️ `border-box` (Más Intuitivo y Recomendado)</h3>
        <br />
        <p>
          En `border-box`, el padding y el borde están incluidos dentro del
          ancho y alto especificados, lo que facilita el diseño sin cálculos
          extra.
        </p>

        <div className="relative bg-gray-100 p-6 rounded-lg shadow-md mt-4">
          <div className="w-40 h-20 p-4 border-4 border-green-500 bg-white box-border">
            🖼️ `border-box`
          </div>
        </div>

        <pre className="code-block bg3">
          {`/* CSS */
.card {
    box-sizing: border-box;
    width: 100%;
    max-width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
/* El ancho total será de 300px, incluyendo el padding y el borde */
`}
        </pre>

        <h3>✨ ¿Por qué usar `border-box`?</h3>
        <br />
        <p>
          La propiedad{" "}
          <strong>
            `box-sizing: border-box;` es especialmente útil en diseños
            responsivos,{" "}
          </strong>
          ya que evita cálculos extra al definir tamaños fijos. Es por eso que
          muchos frameworks CSS como Bootstrap y Tailwind la usan por defecto.
        </p>

        <pre className="code-block bg3">
          {`/* Recomendado para resetear el box-sizing en toda la página */
*, *::before, *::after {
    box-sizing: border-box;
}`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>📋 Formularios y el Box Model</h2>
        <br />
        <p>
          Los formularios son una parte esencial de cualquier sitio web, y el
          **Box Model** juega un papel crucial en su diseño. Cada campo de un
          formulario se comporta como una **caja**, con:
        </p>

        <ul>
          <li>
            <strong>📦 Content:</strong> Área donde el usuario introduce
            información (texto, email, etc.).
          </li>
          <li>
            <strong>📏 Padding:</strong> Espacio interno que separa el texto del
            borde del campo.
          </li>
          <li>
            <strong>🖼️ Border:</strong> Línea que rodea el campo de entrada.
          </li>
          <li>
            <strong>🚀 Margin:</strong> Espacio exterior entre los campos del
            formulario.
          </li>
        </ul>

        <h3>✨ Cómo el Box Model afecta el tamaño de los campos</h3>
        <br />
        <p>
          Si usamos <strong>box-sizing: content-box;</strong>, el padding y el
          borde se suman al tamaño total del campo. En cambio, con{" "}
          <strong>box-sizing: border-box;</strong>, el padding y el borde se
          incluyen dentro del tamaño definido.
        </p>
        <pre className="code-block bg3">
          {`/* Estilo base de los campos de formulario */
.form-input {
    box-sizing: border-box; /* Asegura que el padding y el borde no alteren el tamaño total */
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 4px;
    margin-bottom: 15px;
}

/* Efecto al enfocar el campo */
.form-input:focus {
    border-color: #007bff;
    outline: none;
}
`}
        </pre>

        <h3>📝 Ejemplo práctico: Campo de entrada con Box Model</h3>
        <br />
        <form className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Escribe tu nombre"
            required
            aria-label="Nombre"
          />

          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="ejemplo@correo.com"
            required
            aria-label="Correo Electrónico"
          />

          <button type="submit" className="form-button mt-4">
            🚀 Enviar
          </button>
        </form>
        <br />
        <p className="mt-4">
          En este ejemplo, el Box Model define cómo se comportan los campos de
          entrada. Al usar "box-sizing:" "border-box;", aseguramos que el
          padding y el borde sean parte del ancho total, facilitando el diseño
          sin cálculos extra. Esto es especialmente útil cuando trabajamos con
          diseños responsivos.
        </p>
      </div>

      <div className="highlight-box">
        <h2>🎨 Técnicas Avanzadas con el Box Model</h2>
        <p>
          Ahora que has dominado los conceptos básicos del{" "}
          <strong>Box Model</strong>, es momento de explorar algunas técnicas
          avanzadas* que pueden llevar tus diseños al siguiente nivel. 🚀
        </p>
        <br />

        <h3>📌 Margen Negativo: Superposición Creativa</h3>
        <br />
        <p>
          Usar márgenes negativos te permite superponer elementos y crear
          efectos de desplazamiento interesantes. Esto es útil para imágenes,
          encabezados o cualquier elemento que necesite sobreponerse a otro
          contenido.
        </p>

        <div className="relative bg-gray-100 p-4 rounded-lg shadow-md mt-4">
          <p className="text-gray-600">📌 Este es un bloque normal</p>
          <div className="bg-blue-500 text-white p-4 mt-2 shadow-lg rounded-lg -mt-4 -ml-4">
            🚀 Este bloque tiene margen negativo
          </div>
        </div>

        <pre className="code-block bg3">
          {`/* Ejemplo de margen negativo */
.negative-margin {
    margin-top: -20px;
    margin-left: -20px;
}
`}
        </pre>

        {/* Centrado Perfecto */}
        <h3>📌 Centrado Perfecto con Flexbox</h3>
        <br />
        <p>
          Centrar elementos horizontal y verticalmente puede ser un reto, pero
          con <strong>Flexbox </strong>es más fácil que nunca. La siguiente
          configuración centra cualquier elemento en su contenedor:
        </p>

        {/* Ejemplo en Vivo del Centrado */}
        <div className="flex items-center justify-center bg-gray-100 h-32 rounded-lg shadow-md mt-4">
          <p className="text-gray-600">
            📌 Este texto está perfectamente centrado
          </p>
        </div>

        <pre className="code-block bg3">
          {`/* Centrado con Flexbox */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
`}
        </pre>

        <h3>📌 Control de Desbordamiento</h3>
        <br />
        <p>
          Cuando el contenido de un elemento es más grande que su contenedor, se
          produce un desbordamiento. Con la propiedad <strong>overflow</strong>,
          puedes decidir cómo manejarlo.
        </p>

        <div className="w-64 h-32 overflow-hidden bg-gray-100 p-2 border border-gray-300 rounded-lg shadow-md mt-4">
          <p className="text-gray-600">
            📌 Este texto está dentro de un div con{" "}
            <code>overflow: hidden;</code>. Si el contenido es muy largo, será
            recortado y no se verá.
          </p>
        </div>

        <pre className="code-block bg3">
          {`/* Ocultar el contenido desbordado */
div {
    width: 200px;
    height: 200px;
    overflow: hidden;
}
`}
        </pre>

        <h3>👀 Otras opciones de `overflow`:</h3>
        <br />
        <ul>
          <li>
            🔹 <strong>overflow: scroll;</strong> → Muestra barras de
            desplazamiento.
          </li>
          <li>
            🔹 <strong>overflow: auto;</strong> → Agrega desplazamiento solo si
            es necesario.
          </li>
          <li>
            🔹 <strong>overflow: visible;</strong> → Permite que el contenido
            sobresalga (valor por defecto).
          </li>
        </ul>

        <p>✅ Útil para manejar texto largo, imágenes y secciones dinámicas.</p>
      </div>

      <div className="highlight-box">
        <h2>🐞 Debugging y Herramientas para CSS</h2>
        <p>
          A medida que trabajas con el Box Model y otros conceptos de CSS, es
          importante contar con herramientas para
          <strong> depurar y optimizar tu código. </strong>
          Aquí tienes algunas técnicas y herramientas esenciales:
        </p>

        <h3>🔍 Debugging con CSS</h3>
        <br />
        <p>
          Puedes agregar bordes y fondos semitransparentes a todos los elementos
          de la página para visualizar mejor su estructura y detectar problemas
          de diseño.
        </p>

        <pre className="code-block bg3">
          {`/* Activa la visualización del Box Model */
.debug {
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid red;
}`}
        </pre>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
          <p className="text-gray-600 debug">
            📌 Esta caja tiene activado el modo debug.
          </p>
        </div>
        <br />
        <p>
          ✅ Útil para detectar elementos que están mal alineados o con márgenes
          inesperados.
        </p>
        <br />
        <h3>🛠️ Uso de las DevTools</h3>
        <br />
        <p>
          Las{" "}
          <strong>herramientas de desarrollo del navegador (DevTools)</strong>{" "}
          te permiten inspeccionar y modificar el CSS en tiempo real.
        </p>
        <br />
        <ul>
          <li>
            📌 Inspecciona elementos para ver el Box Model en tiempo real*.
          </li>
          <li>✏️ Modifica estilos en línea para probar cambios rápidamente.</li>
          <li>🐞 Usa la consola para depurar problemas de CSS y JavaScript.</li>
        </ul>

        {/* Captura de pantalla de Chrome DevTools */}
        <div className="image-container text-center">
          <img
            src="/assets/css/devtools.jpg"
            alt="Vista del Box Model en Chrome DevTools"
            className="inline-block w-96 h-auto rounded-lg shadow-md mt-4"
          />

          <p className="text-sm text-gray-600 mt-2">
            📌 Inspección del Box Model en Chrome DevTools.
          </p>
        </div>
        <br />

        <h3>🧩 Extensiones de Navegador</h3>
        <p>
          Existen extensiones útiles para analizar y mejorar el diseño de
          páginas web:
        </p>
        <br />
        <ul>
          <li>
            🔎{" "}
            <strong>
              <a
                href="https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce "
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Visor de CSS para Google Chrome
              </a>
            </strong>{" "}
            → Muestra los estilos aplicados a cualquier elemento.
          </li>
          <li>
            🔠{" "}
            <strong>
              <a
                href="https://www.whatfontis.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                WhatFont
              </a>
            </strong>{" "}
            → Identifica las fuentes utilizadas en una página web.
          </li>
          <li>
            🎨{" "}
            <strong>
              <a
                href="https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ColorZilla
              </a>
            </strong>{" "}
            → Extrae colores directamente de cualquier parte de una página web.
          </li>
        </ul>

        <p>
          ✅ Estas herramientas te ayudan a analizar otros sitios web y aprender
          nuevas técnicas de diseño.
        </p>
      </div>

      <div className="highlight-box">
        <h2>✅ Mejores Prácticas con el Box Model</h2>
        <p>
          Aquí tienes algunas **mejores prácticas** para trabajar con el **Box
          Model** y optimizar tu flujo de trabajo en CSS. 🚀
        </p>
        <br />
        <ul>
          <li>
            <strong>🔄 Reset CSS Consistente</strong>
            <p>
              Un <strong>reset CSS</strong> asegura que los estilos
              predeterminados del navegador no interfieran con tu diseño.
            </p>
            <pre className="code-block bg3">
              {`/* Reset de márgenes y paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`}
            </pre>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
              <p className="text-gray-600">
                📌 Este bloque tiene aplicado el reset CSS.
              </p>
            </div>
          </li>

          <li>
            <strong>📏 Usa Unidades Relativas para Mejor Responsividad</strong>
            <p>
              Evita valores fijos en `px` y usa ` %,` `em `o `rem ` para que tu
              diseño se adapte mejor a diferentes tamaños de pantalla.
            </p>
            <pre className="code-block bg3">
              {`/* Ancho en porcentaje y padding en em */
div {
    width: 50%;
    padding: 2em;
}`}
            </pre>

            <div className="w-1/2 p-8 bg-blue-100 rounded-lg shadow-md mt-4">
              📏 Esta caja usa `width: 50%` y `padding: 2em`
            </div>
          </li>

          <li>
            <strong>📐 Sistema de Espaciado Consistente</strong>
            <p>
              Define variables para mantener coherencia en los espaciados y
              evitar valores aleatorios en diferentes partes del código.
            </p>
            <pre className="code-block bg3">
              {`/* Variables SCSS para espaciado */
$spacing-unit: 8px;
$padding-small: $spacing-unit;
$padding-medium: $spacing-unit * 2;
$padding-large: $spacing-unit * 3;
`}
            </pre>

            <div className="p-8 bg-green-100 rounded-lg shadow-md mt-4">
              📐 Esta caja usa un sistema de espaciado estructurado
            </div>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🚨 Problemas Comunes y Soluciones en el Box Model</h2>
        <p>
          A medida que trabajas con el **Box Model**, es posible que te
          encuentres con algunos problemas comunes. Aquí tienes soluciones
          rápidas y efectivas. 🚀
        </p>
        <br />
        <ul>
          <li>
            <strong>📌 Desbordamiento de Contenido</strong>
            <p>
              Si el contenido de un elemento se desborda de su contenedor,
              puedes usar <code>overflow: auto;</code> para agregar barras de
              desplazamiento.
            </p>

            <div className="w-64 h-32 overflow-auto bg-gray-100 p-2 border border-gray-300 rounded-lg shadow-md mt-4">
              📌 Este texto es muy largo y desborda el contenedor. Usa{" "}
              <code>overflow: auto;</code> para evitar que se salga del área
              asignada.
            </div>

            <pre className="code-block bg3">
              {`/* Solución: Agregar overflow */
div {
    width: 200px;
    height: 200px;
    overflow: auto;
}`}
            </pre>
          </li>

          <li>
            <strong>📏 Altura del 100%</strong>
            <p>
              Para que un elemento ocupe el 100% de la altura de su contenedor,
              asegúrate de que el contenedor padre tenga una altura definida.
            </p>

            <pre className="code-block bg3">
              {`/* Solución: Asegurar altura en el contenedor padre */
html, body {
    height: 100%;
}`}
            </pre>
          </li>

          <li>
            <strong>🌊 Elementos Flotantes (Floats)</strong>
            <p>
              Los elementos flotantes pueden causar problemas de diseño al hacer
              que otros elementos no se comporten como deberían. Usa{" "}
              <strong>clear: both;</strong> para evitar que los elementos floten
              alrededor de ellos.
            </p>

            <div className="clearfix bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-md mt-4">
              <div className="float-left bg-blue-200 p-2">
                📌 Elemento flotante
              </div>
              <div className="bg-green-200 p-2 mt-4 clear-both">
                ✅ Elemento corregido con `clear: both;`
              </div>
            </div>

            <pre className="code-block bg3">
              {`/* Solución: Agregar clearfix */
.clearfix::after {
    content: '';
    display: table;
    clear: both;
}`}
            </pre>
          </li>

          <li>
            <strong>📉 Colapso de Márgenes</strong>
            <p>
              Cuando dos elementos con márgenes verticales se tocan, a veces el
              margen se colapsa en lugar de sumarse. Para solucionar esto, usa{" "}
              <strong> padding o Flexbox.</strong>
            </p>

            <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-md mt-4 flex flex-col space-y-4">
              <div className="bg-blue-200 p-4">📦 Elemento 1 con margin</div>
              <div className="bg-green-200 p-4 mt-4 clear-both">
                📦 Elemento 2 con padding (sin colapso)
              </div>
            </div>

            <pre className="code-block bg3">
              {`/* Solución 1: Usar padding en lugar de margin */
.container div {
    padding: 10px;
}

/* Solución 2: Usar Flexbox */
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>⚡ Optimización del Box Model</h2>
        <p>
          Para mejorar el rendimiento y la estructura de los elementos en tu
          diseño, es importante aplicar buenas prácticas en el Box Model.
        </p>
        <br />
        <ul>
          <li>
            <strong>🎭 Usa `border-radius` con moderación</strong>
            <p>
              Los bordes redondeados pueden afectar el rendimiento en elementos
              animados. Evita valores altos en cajas con muchos elementos
              interactivos.
            </p>
            <pre className="code-block bg3">
              {`/* Evita valores extremos en animaciones */
.elemento {
    border-radius: 10px;
}`}
            </pre>
          </li>

          <li>
            <strong>📏 Reduce el uso excesivo de márgenes</strong>
            <p>
              En lugar de depender de `margin`, usa{" "}
              <strong>`gap` en Flexbox o Grid</strong>
              para un **espaciado más eficiente**.
            </p>
            <pre className="code-block bg3">
              {`/* Mejor espaciado con gap */
.flex-container {
    display: flex;
    gap: 10px;
}`}
            </pre>
          </li>

          <li>
            <strong>
              📐 Usa `min-height` y `max-height` para contenido dinámico
            </strong>
            <p>
              Evita cajas con alturas fijas. Usa `min-height` y `max-height`
              para permitir que el contenido se expanda sin romper el diseño.
            </p>
            <pre className="code-block bg3">
              {`/* Altura mínima y máxima */
.elemento {
    min-height: 200px;
    max-height: 500px;
}`}
            </pre>
          </li>

          <li>
            <strong>📉 Evita el colapso de márgenes</strong>
            <p>
              Cuando dos elementos con márgenes verticales se tocan, pueden
              colapsar en lugar de sumarse. Usa padding o Flexbox para evitar
              este problema.
            </p>
            <pre className="code-block bg3">
              {`/* Solución: Usar padding en lugar de margin */
.container div {
    padding: 10px;
}

/* Solución: Usar Flexbox */
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>📚 Recursos Adicionales</h2>
        <p>
          Si quieres seguir aprendiendo sobre CSS y diseño web, aquí tienes
          algunos recursos útiles:
        </p>
        <br />
        <ul>
          <li>
            📖{" "}
            <strong>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model"
                target="_blank"
                rel="noopener noreferrer"
                className="underline "
              >
                MDN Web Docs: Box Model
              </a>
            </strong>
          </li>
          <li>
            📝{" "}
            <strong>
              <a
                href="https://css-tricks.com/the-css-box-model/"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline "
              >
                CSS-Tricks: Guide to Box Model
              </a>
            </strong>
          </li>
          <li>
            🛠️{" "}
            <strong>
              <a
                href="https://developer.chrome.com/docs/devtools/css/"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline"
              >
                Chrome DevTools: Box Model Debugging
              </a>
            </strong>
          </li>
          <li>
            🎨{" "}
            <strong>
              <a
                href="https://codepen.io/tag/box-model"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                CodePen: Ejemplos Interactivos del Box Model
              </a>
            </strong>
          </li>
        </ul>
      </div>
      <div className="highlight-box">
        <h2>🎯 Conclusión</h2>
        <p>
          El <strong>Box Model</strong> es la base del diseño en CSS y
          comprenderlo te permitirá crear interfaces más precisas y
          profesionales. Cada capa —{" "}
          <strong>contenido, padding, borde y margen</strong> — juega un papel
          fundamental en cómo los elementos interactúan entre sí.
        </p>

        <p>
          Dominar el Box Model no solo te ayudará a evitar problemas de diseño,
          sino que también mejorará tu capacidad para estructurar sitios web más
          limpios, eficientes y responsivos.
        </p>

        <p>
          🛠️ ¿Qué sigue?
          <br />
          Ahora que comprendes cómo funciona, experimenta con diferentes
          valores, combina técnicas y optimiza tu diseño. Cuanto más practiques,
          más intuitivo se volverá para ti.
        </p>
        <br />
        <h3>💜 Forma parte de nuestra comunidad en FemCoders Club</h3>
        <br />
        <p>
          En <strong>FemCoders Club</strong>, creemos en el aprendizaje
          colaborativo y en el crecimiento conjunto. Si te ha gustado este
          contenido y quieres seguir mejorando tus habilidades en CSS y
          desarrollo web, únete a nuestra comunidad para acceder a más recursos,
          compartir tus proyectos y aprender junto a otras programadoras. 🚀
        </p>

        <p>
          🎉 Comparte tus avances, haz preguntas y sigue explorando! Nos
          encantaría ver lo que creas con el Box Model y cómo aplicas estas
          técnicas en tus proyectos.
        </p>
        <br />
        <p>
          🔗 Visítanos en{" "}
          <strong>
            <a
              href="https://www.femcodersclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              FemCoders Club
            </a>
          </strong>{" "}
          y síguenos en nuestras redes sociales.
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

      <CommentsSection postId={13} />
    </div>
  );
};

export default BoxModels;
