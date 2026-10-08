import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  DemoPost,
  ImagenPost,
  SeccionPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const BoxModels: React.FC = () => (
  <>
      <Helmet>
        <title>Box Model en CSS | Guía completa para frontend</title>
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
        <meta property="og:title" content="Box Model en CSS | Guía completa con FemCoders Club" />
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
        <meta name="twitter:title" content="Box Model en CSS | Guía completa para frontend" />
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

    <PlantillaPost
      ruta="/recursos/css/box-model"
      titulo="Box Model en CSS: guía completa para frontend"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={13}
      entradilla={
        <>
          <p>
            ¡Hola, comunidad FemCoders Club! Hoy vamos a hablar sobre el{" "}
            <strong>Box Model en CSS</strong>, una de las bases fundamentales
            para entender cómo se comportan los elementos en una página web.
          </p>
          <p>
            Si alguna vez te has preguntado por qué un botón no se alinea como
            esperas o por qué un div tiene más espacio del que debería, el Box
            Model tiene la respuesta. En este artículo exploraremos cómo
            funciona y cómo puedes usarlo para construir diseños más precisos y
            profesionales.
          </p>
          <p>
            ¡Vamos a desglosarlo paso a paso para que domines el Box Model como
            toda una experta en CSS!
          </p>
        </>
      }
    >
      <SeccionPost titulo="¿Qué es el Box Model?">
        <p>
          Imagina que cada elemento HTML de tu página web es una{" "}
          <strong>caja</strong>. Pero esta caja no es solo el contenido que
          ves: en realidad está compuesta por varias capas que definen su
          tamaño y su espacio en la página. Estas capas son:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "1. Content (contenido)",
              texto: "Es el corazón del elemento, donde se muestra el texto, las imágenes u otros medios.",
            },
            {
              titulo: "2. Padding (relleno)",
              texto: "El espacio entre el contenido y el borde.",
            },
            {
              titulo: "3. Border (borde)",
              texto: "El límite que rodea el padding y el contenido.",
            },
            {
              titulo: "4. Margin (margen)",
              texto: "El espacio exterior que separa el elemento de otros elementos de la página.",
            },
          ]}
        />
        <p>Así se representa el modelo de caja en CSS:</p>
        <CodigoPost lenguaje="Texto">{`|-------------------------------|
|         Margen (15px)         |
|  |-------------------------|  |
|  |       Borde (5px)       |  |
|  |  |-------------------|  |  |
|  |  |  Relleno (20px)   |  |  |
|  |  |  |-------------|  |  |  |
|  |  |  |  Contenido  |  |  |  |
|  |  |  |-------------|  |  |  |
|  |  |-------------------|  |  |
|  |-------------------------|  |
|-------------------------------|`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Las capas del Box Model en detalle">
        <p>
          Veamos cómo funciona cada capa del Box Model y cómo podemos
          controlarlas con CSS.
        </p>

        <h3>Content (contenido)</h3>
        <p>
          El contenido es el área donde se muestra tu texto, imágenes o
          cualquier otro medio. Sus dimensiones se controlan mediante:
        </p>
        <ul>
          <li>
            <code>width</code>: define el ancho del contenido.
          </li>
          <li>
            <code>height</code>: define la altura del contenido.
          </li>
          <li>
            <code>min-width</code> y <code>max-width</code>: establecen límites
            de ancho.
          </li>
          <li>
            <code>min-height</code> y <code>max-height</code>: establecen
            límites de altura.
          </li>
        </ul>

        <h3>Padding (relleno)</h3>
        <p>
          El padding es como un colchón invisible alrededor del contenido. Se
          controla con:
        </p>
        <ul>
          <li>
            <code>padding-top</code>, <code>padding-right</code>,{" "}
            <code>padding-bottom</code> y <code>padding-left</code>: controlan
            el relleno de cada lado.
          </li>
          <li>
            <code>padding</code>: define el relleno de los cuatro lados al
            mismo tiempo.
          </li>
        </ul>
        <CodigoPost lenguaje="CSS">{`padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;

/* O la versión abreviada */
padding: 10px 20px;`}</CodigoPost>

        <h3>Border (borde)</h3>
        <p>
          El borde es la línea visible (o invisible) que envuelve el padding y
          el contenido. Puedes personalizarlo con:
        </p>
        <ul>
          <li>
            <code>border-width</code>: define el grosor del borde.
          </li>
          <li>
            <code>border-style</code>: define el estilo (sólido, punteado,
            etc.).
          </li>
          <li>
            <code>border-color</code>: define el color del borde.
          </li>
          <li>
            <code>border</code>: combina las propiedades anteriores.
          </li>
        </ul>
        <CodigoPost lenguaje="CSS">{`border-width: 2px;
border-style: solid;
border-color: black;

/* O la versión abreviada */
border: 2px solid black;`}</CodigoPost>

        <h3>Margin (margen)</h3>
        <p>
          El margen es el espacio exterior que separa un elemento de otros. Se
          controla con:
        </p>
        <ul>
          <li>
            <code>margin-top</code>, <code>margin-right</code>,{" "}
            <code>margin-bottom</code> y <code>margin-left</code>: controlan el
            margen de cada lado.
          </li>
          <li>
            <code>margin</code>: define el margen de los cuatro lados al mismo
            tiempo.
          </li>
        </ul>
        <CodigoPost lenguaje="CSS">{`margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* O la versión abreviada */
margin: 10px 20px;`}</CodigoPost>

        <h3>Ejemplo práctico: caja con estilos personalizados</h3>
        <p>Veamos cómo se aplican estas propiedades en un ejemplo práctico:</p>
        <CodigoPost lenguaje="CSS">{`.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  background-color: #f3f3f3;
}`}</CodigoPost>
        <DemoPost>
          <div
            className="post-demo__caja"
            style={{ width: "200px", height: "100px", padding: "20px", margin: "10px" }}
          >
            Esta es una caja con estilos aplicados.
          </div>
        </DemoPost>
        <p>
          En este ejemplo hemos creado una caja con un ancho de 200px, un alto
          de 100px, un relleno de 20px, un borde sólido de 2px y un margen de
          10px. Puedes ajustar estos valores según tus necesidades para crear
          diseños personalizados.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Box sizing: controlando el tamaño de los elementos">
        <p>
          Una de las propiedades más importantes relacionadas con el Box Model
          es <code>box-sizing</code>. Controla cómo se calculan el ancho y el
          alto de un elemento en relación con su contenido, su padding y su
          borde.
        </p>

        <h3>¿Cómo afecta box-sizing?</h3>
        <p>
          Dependiendo del valor que elijas, el tamaño total del elemento
          cambiará. Veamos cómo se comportan los dos valores principales.
        </p>

        <h3>content-box (valor por defecto)</h3>
        <p>
          <strong>
            En <code>content-box</code>, el ancho y el alto del elemento solo
            incluyen el contenido
          </strong>
          , pero el padding y el borde se suman al tamaño total.
        </p>
        <CodigoPost lenguaje="CSS">{`/* CSS */
.elemento {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
/* Ancho total = 200px + 40px (padding) + 10px (border) = 250px */`}</CodigoPost>
        <DemoPost>
          <div
            className="post-demo__caja"
            style={{ boxSizing: "content-box", width: "200px", padding: "20px", borderWidth: "5px" }}
          >
            content-box: 250px de ancho total
          </div>
        </DemoPost>

        <h3>border-box (más intuitivo y recomendado)</h3>
        <p>
          En <code>border-box</code>, el padding y el borde están incluidos
          dentro del ancho y el alto especificados, lo que facilita el diseño
          sin cálculos extra.
        </p>
        <CodigoPost lenguaje="CSS">{`/* CSS */
.card {
    box-sizing: border-box;
    width: 100%;
    max-width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
/* El ancho total será de 300px, incluyendo el padding y el borde */`}</CodigoPost>
        <DemoPost titulo="Resultado: mismo ancho, padding y borde">
          <div
            className="post-demo__caja"
            style={{ boxSizing: "content-box", width: "200px", padding: "20px", borderWidth: "5px" }}
          >
            content-box: 250px
          </div>
          <div
            className="post-demo__caja"
            style={{ boxSizing: "border-box", width: "200px", padding: "20px", borderWidth: "5px", marginTop: "1rem" }}
          >
            border-box: 200px
          </div>
        </DemoPost>

        <h3>¿Por qué usar border-box?</h3>
        <p>
          La propiedad{" "}
          <strong>
            <code>box-sizing: border-box;</code> es especialmente útil en
            diseños responsivos
          </strong>
          , ya que evita cálculos extra al definir tamaños fijos. Por eso
          muchos frameworks CSS, como Bootstrap y Tailwind, la usan por
          defecto.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Recomendado para resetear el box-sizing en toda la página */
*, *::before, *::after {
    box-sizing: border-box;
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Formularios y el Box Model">
        <p>
          Los formularios son una parte esencial de cualquier sitio web, y el{" "}
          <strong>Box Model</strong> juega un papel crucial en su diseño. Cada
          campo de un formulario se comporta como una <strong>caja</strong>,
          con:
        </p>
        <ul>
          <li>
            <strong>Content:</strong> área donde la persona introduce
            información (texto, correo electrónico, etc.).
          </li>
          <li>
            <strong>Padding:</strong> espacio interno que separa el texto del
            borde del campo.
          </li>
          <li>
            <strong>Border:</strong> línea que rodea el campo de entrada.
          </li>
          <li>
            <strong>Margin:</strong> espacio exterior entre los campos del
            formulario.
          </li>
        </ul>

        <h3>Cómo afecta el Box Model al tamaño de los campos</h3>
        <p>
          Si usamos <code>box-sizing: content-box;</code>, el padding y el
          borde se suman al tamaño total del campo. En cambio, con{" "}
          <code>box-sizing: border-box;</code>, el padding y el borde se
          incluyen dentro del tamaño definido.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Estilo base de los campos de formulario */
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
    outline: 2px solid #007bff;
}`}</CodigoPost>

        <h3>Ejemplo práctico: campo de entrada con Box Model</h3>
        <DemoPost>
          <form onSubmit={(evento) => evento.preventDefault()}>
            <label htmlFor="box-model-nombre">Nombre</label>
            <input
              type="text"
              id="box-model-nombre"
              placeholder="Escribe tu nombre"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "12px",
                border: "2px solid var(--color-secondary)",
                borderRadius: "4px",
                marginBottom: "15px",
              }}
            />
            <label htmlFor="box-model-correo">Correo electrónico</label>
            <input
              type="email"
              id="box-model-correo"
              placeholder="ejemplo@correo.com"
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "12px",
                border: "2px solid var(--color-secondary)",
                borderRadius: "4px",
                marginBottom: "15px",
              }}
            />
          </form>
        </DemoPost>
        <p>
          En este ejemplo, el Box Model define cómo se comportan los campos de
          entrada. Al usar <code>box-sizing: border-box;</code>, nos aseguramos
          de que el padding y el borde formen parte del ancho total, lo que
          facilita el diseño sin cálculos extra. Esto es especialmente útil
          cuando trabajamos con diseños responsivos.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Técnicas avanzadas con el Box Model">
        <p>
          Ahora que dominas los conceptos básicos del{" "}
          <strong>Box Model</strong>, es momento de explorar algunas técnicas
          avanzadas que pueden llevar tus diseños al siguiente nivel.
        </p>

        <h3>Margen negativo: superposición creativa</h3>
        <p>
          Usar márgenes negativos te permite superponer elementos y crear
          efectos de desplazamiento interesantes. Es útil para imágenes,
          encabezados o cualquier elemento que necesite sobreponerse a otro
          contenido.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Ejemplo de margen negativo */
.negative-margin {
    margin-top: -20px;
    margin-left: -20px;
}`}</CodigoPost>
        <DemoPost>
          <div className="post-demo__caja">Este es un bloque normal</div>
          <div className="post-demo__caja" style={{ marginTop: "-20px", marginLeft: "-20px", background: "var(--color-lavanda-medio)" }}>
            Este bloque tiene margen negativo
          </div>
        </DemoPost>

        <h3>Centrado perfecto con Flexbox</h3>
        <p>
          Centrar elementos horizontal y verticalmente puede ser un reto, pero
          con <strong>Flexbox</strong> es más fácil que nunca. La siguiente
          configuración centra cualquier elemento en su contenedor:
        </p>
        <CodigoPost lenguaje="CSS">{`/* Centrado con Flexbox */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}`}</CodigoPost>
        <DemoPost>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "8rem" }}>
            <div className="post-demo__caja">Este texto está perfectamente centrado</div>
          </div>
        </DemoPost>

        <h3>Control del desbordamiento</h3>
        <p>
          Cuando el contenido de un elemento es más grande que su contenedor,
          se produce un desbordamiento. Con la propiedad <code>overflow</code>{" "}
          puedes decidir cómo manejarlo.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Ocultar el contenido desbordado */
div {
    width: 200px;
    height: 200px;
    overflow: hidden;
}`}</CodigoPost>
        <DemoPost>
          <div className="post-demo__caja" style={{ width: "16rem", maxWidth: "100%", height: "8rem", overflow: "hidden" }}>
            Este texto está dentro de un div con <code>overflow: hidden;</code>.
            Si el contenido es muy largo, se recorta y no se ve.
          </div>
        </DemoPost>

        <h3>Otras opciones de overflow</h3>
        <ul>
          <li>
            <code>overflow: scroll;</code> muestra barras de desplazamiento.
          </li>
          <li>
            <code>overflow: auto;</code> añade desplazamiento solo si es
            necesario.
          </li>
          <li>
            <code>overflow: visible;</code> permite que el contenido sobresalga
            (valor por defecto).
          </li>
        </ul>
        <p>Es útil para manejar texto largo, imágenes y secciones dinámicas.</p>
      </SeccionPost>

      <SeccionPost titulo="Debugging y herramientas para CSS">
        <p>
          A medida que trabajas con el Box Model y otros conceptos de CSS, es
          importante contar con herramientas para{" "}
          <strong>depurar y optimizar tu código</strong>. Aquí tienes algunas
          técnicas y herramientas esenciales.
        </p>

        <h3>Debugging con CSS</h3>
        <p>
          Puedes añadir bordes y fondos semitransparentes a todos los elementos
          de la página para visualizar mejor su estructura y detectar problemas
          de diseño.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Activa la visualización del Box Model */
.debug {
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid red;
}`}</CodigoPost>
        <DemoPost>
          <div
            className="post-demo__caja"
            style={{ background: "rgba(255, 0, 0, 0.1)", border: "1px solid red" }}
          >
            Esta caja tiene activado el modo debug.
          </div>
        </DemoPost>
        <p>
          Es útil para detectar elementos mal alineados o con márgenes
          inesperados.
        </p>

        <h3>Uso de las DevTools</h3>
        <p>
          Las{" "}
          <strong>herramientas de desarrollo del navegador (DevTools)</strong>{" "}
          te permiten inspeccionar y modificar el CSS en tiempo real:
        </p>
        <ul>
          <li>Inspecciona elementos para ver el Box Model en tiempo real.</li>
          <li>Modifica estilos en línea para probar cambios rápidamente.</li>
          <li>Usa la consola para depurar problemas de CSS y JavaScript.</li>
        </ul>
        <ImagenPost
          src="/assets/css/devtools.jpg"
          alt="Ilustración en perspectiva de una caja formada por capas de colores, rotuladas en inglés como contenido, relleno, borde y margen."
          pie="Las capas del Box Model: contenido, relleno, borde y margen."
        />

        <h3>Extensiones de navegador</h3>
        <p>
          Existen extensiones útiles para analizar y mejorar el diseño de
          páginas web:
        </p>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Visor de CSS para Google Chrome",
              texto: "Muestra los estilos aplicados a cualquier elemento.",
              enlace: "https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce",
            },
            {
              titulo: "WhatFont",
              texto: "Identifica las fuentes utilizadas en una página web.",
              enlace: "https://www.whatfontis.com/",
            },
            {
              titulo: "ColorZilla",
              texto: "Extrae colores directamente de cualquier parte de una página web.",
              enlace: "https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp",
            },
          ]}
        />
        <p>
          Estas herramientas te ayudan a analizar otros sitios web y a aprender
          nuevas técnicas de diseño.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Mejores prácticas con el Box Model">
        <p>
          Aquí tienes algunas <strong>mejores prácticas</strong> para trabajar
          con el <strong>Box Model</strong> y optimizar tu flujo de trabajo en
          CSS.
        </p>

        <h3>Reset CSS consistente</h3>
        <p>
          Un <strong>reset CSS</strong> asegura que los estilos predeterminados
          del navegador no interfieran con tu diseño.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Reset de márgenes y paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`}</CodigoPost>
        <DemoPost>
          <div className="post-demo__caja" style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
            Este bloque tiene aplicado el reset CSS.
          </div>
        </DemoPost>

        <h3>Usa unidades relativas para mejorar la responsividad</h3>
        <p>
          Evita los valores fijos en <code>px</code> y usa <code>%</code>,{" "}
          <code>em</code> o <code>rem</code> para que tu diseño se adapte mejor
          a diferentes tamaños de pantalla.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Ancho en porcentaje y padding en em */
div {
    width: 50%;
    padding: 2em;
}`}</CodigoPost>
        <DemoPost>
          <div className="post-demo__caja" style={{ width: "50%", padding: "2em" }}>
            Esta caja usa <code>width: 50%</code> y <code>padding: 2em</code>
          </div>
        </DemoPost>

        <h3>Sistema de espaciado consistente</h3>
        <p>
          Define variables para mantener la coherencia en los espaciados y
          evitar valores aleatorios en diferentes partes del código.
        </p>
        <CodigoPost lenguaje="SCSS">{`/* Variables SCSS para espaciado */
$spacing-unit: 8px;
$padding-small: $spacing-unit;
$padding-medium: $spacing-unit * 2;
$padding-large: $spacing-unit * 3;`}</CodigoPost>
        <DemoPost>
          <div className="post-demo__caja" style={{ padding: "24px" }}>
            Esta caja usa un sistema de espaciado estructurado (
            <code>$padding-large</code>: 24px)
          </div>
        </DemoPost>
      </SeccionPost>

      <SeccionPost titulo="Problemas comunes y soluciones en el Box Model">
        <p>
          A medida que trabajas con el <strong>Box Model</strong>, es posible
          que te encuentres con algunos problemas comunes. Aquí tienes
          soluciones rápidas y efectivas.
        </p>

        <h3>Desbordamiento de contenido</h3>
        <p>
          Si el contenido de un elemento se desborda de su contenedor, puedes
          usar <code>overflow: auto;</code> para añadir barras de
          desplazamiento.
        </p>
        <DemoPost>
          {/* Una caja con scroll ha de poder recibir el foco para desplazarla con el teclado. */}
          <div
            className="post-demo__caja"
            tabIndex={0}
            style={{ width: "16rem", maxWidth: "100%", height: "8rem", overflow: "auto" }}
          >
            Este texto es muy largo y desborda el contenedor. Usa{" "}
            <code>overflow: auto;</code> para evitar que se salga del área
            asignada.
          </div>
        </DemoPost>
        <CodigoPost lenguaje="CSS">{`/* Solución: Agregar overflow */
div {
    width: 200px;
    height: 200px;
    overflow: auto;
}`}</CodigoPost>

        <h3>Altura del 100 %</h3>
        <p>
          Para que un elemento ocupe el 100 % de la altura de su contenedor,
          asegúrate de que el contenedor padre tenga una altura definida.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Solución: Asegurar altura en el contenedor padre */
html, body {
    height: 100%;
}`}</CodigoPost>

        <h3>Elementos flotantes (floats)</h3>
        <p>
          Los elementos flotantes pueden causar problemas de diseño al hacer
          que otros elementos no se comporten como deberían. Usa{" "}
          <code>clear: both;</code> para evitar que los elementos floten a su
          alrededor.
        </p>
        <DemoPost>
          <div className="post-demo__caja" style={{ float: "left" }}>
            Elemento flotante
          </div>
          <div className="post-demo__caja" style={{ clear: "both" }}>
            Elemento corregido con <code>clear: both;</code>
          </div>
        </DemoPost>
        <CodigoPost lenguaje="CSS">{`/* Solución: Agregar clearfix */
.clearfix::after {
    content: '';
    display: table;
    clear: both;
}`}</CodigoPost>

        <h3>Colapso de márgenes</h3>
        <p>
          Cuando dos elementos con márgenes verticales se tocan, a veces el
          margen se colapsa en lugar de sumarse. Para solucionarlo, usa{" "}
          <strong>padding o Flexbox</strong>.
        </p>
        <DemoPost>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="post-demo__caja">Elemento 1</div>
            <div className="post-demo__caja">
              Elemento 2, separado con <code>gap</code> (sin colapso)
            </div>
          </div>
        </DemoPost>
        <CodigoPost lenguaje="CSS">{`/* Solución 1: Usar padding en lugar de margin */
.container div {
    padding: 10px;
}

/* Solución 2: Usar Flexbox */
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Optimización del Box Model">
        <p>
          Para mejorar el rendimiento y la estructura de los elementos de tu
          diseño, es importante aplicar buenas prácticas en el Box Model.
        </p>

        <h3>Usa border-radius con moderación</h3>
        <p>
          Los bordes redondeados pueden afectar al rendimiento en elementos
          animados. Evita valores altos en cajas con muchos elementos
          interactivos.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Evita valores extremos en animaciones */
.elemento {
    border-radius: 10px;
}`}</CodigoPost>

        <h3>Reduce el uso excesivo de márgenes</h3>
        <p>
          En lugar de depender de <code>margin</code>, usa{" "}
          <strong>
            <code>gap</code> en Flexbox o Grid
          </strong>{" "}
          para conseguir un <strong>espaciado más eficiente</strong>.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Mejor espaciado con gap */
.flex-container {
    display: flex;
    gap: 10px;
}`}</CodigoPost>

        <h3>Usa min-height y max-height para contenido dinámico</h3>
        <p>
          Evita las cajas con alturas fijas. Usa <code>min-height</code> y{" "}
          <code>max-height</code> para permitir que el contenido se expanda
          sin romper el diseño.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Altura mínima y máxima */
.elemento {
    min-height: 200px;
    max-height: 500px;
}`}</CodigoPost>

        <h3>Evita el colapso de márgenes</h3>
        <p>
          Cuando dos elementos con márgenes verticales se tocan, pueden
          colapsar en lugar de sumarse. Usa padding o Flexbox para evitar este
          problema.
        </p>
        <CodigoPost lenguaje="CSS">{`/* Solución: Usar padding en lugar de margin */
.container div {
    padding: 10px;
}

/* Solución: Usar Flexbox */
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales">
        <p>
          Si quieres seguir aprendiendo sobre CSS y diseño web, aquí tienes
          algunos recursos útiles:
        </p>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN Web Docs: Box Model
            </a>
          </li>
          <li>
            <a
              href="https://css-tricks.com/the-css-box-model/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS-Tricks: Guide to Box Model
            </a>
          </li>
          <li>
            <a
              href="https://developer.chrome.com/docs/devtools/css/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrome DevTools: Box Model Debugging
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/tag/box-model"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodePen: ejemplos interactivos del Box Model
            </a>
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          El <strong>Box Model</strong> es la base del diseño en CSS, y
          comprenderlo te permitirá crear interfaces más precisas y
          profesionales. Cada capa (
          <strong>contenido, padding, borde y margen</strong>) juega un papel
          fundamental en cómo interactúan los elementos entre sí.
        </p>
        <p>
          Dominar el Box Model no solo te ayudará a evitar problemas de diseño:
          también mejorará tu capacidad para estructurar sitios web más
          limpios, eficientes y responsivos.
        </p>
        <p>
          <strong>¿Qué sigue?</strong> Ahora que comprendes cómo funciona,
          experimenta con diferentes valores, combina técnicas y optimiza tu
          diseño. Cuanto más practiques, más intuitivo te resultará.
        </p>

        <h3>Forma parte de nuestra comunidad en FemCoders Club</h3>
        <p>
          En <strong>FemCoders Club</strong> creemos en el aprendizaje
          colaborativo y en el crecimiento conjunto. Si te ha gustado este
          contenido y quieres seguir mejorando tus habilidades en CSS y
          desarrollo web, únete a nuestra comunidad para acceder a más
          recursos, compartir tus proyectos y aprender junto a otras
          programadoras.
        </p>
        <p>
          ¡Comparte tus avances, haz preguntas y sigue explorando! Nos
          encantaría ver lo que creas con el Box Model y cómo aplicas estas
          técnicas en tus proyectos.
        </p>
        <p>
          Visítanos en <Link to="/">FemCoders Club</Link> y síguenos en
          nuestras redes sociales.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default BoxModels;
