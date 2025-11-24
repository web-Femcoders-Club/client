import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaBrain,
  FaBug,
  FaCheckCircle,
  FaCogs,
  FaDownload,
  FaFire,
  FaLightbulb,
  FaRocket,
  FaSlack,
  FaTiktok
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const FundamentosJavaScript: React.FC = () => {
  const postId = 31; 
  const publicationDate = "25 de noviembre de 2025";
  const currentUrl = "https://www.femcodersclub.com/recursos/js/fundamentos-javascript-profundos";

  const downloadPresentation = () => {
    const link = document.createElement('a');
    link.href = '/assets/javascript/motor_JavaScript_interno.pdf';
    link.download = 'motor-javascript-interno-femCoders.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="blog-post">
      <Helmet>
        <title>Los Fundamentos de JavaScript que Realmente Importan: De HTML/CSS a Programación Real | femCoders Club</title>
        <meta
          name="description"
          content="Aprende los fundamentos profundos de JavaScript: execution context, closures, event loop, prototypes. De maquetadora a desarrolladora con ejemplos reales del día a día."
        />
        <meta
          name="keywords"
          content="fundamentos javascript, aprender javascript, closures javascript, event loop, execution context, prototypes javascript, de css a javascript, tutorial javascript español, femcoders club"
        />
        <link rel="canonical" href={currentUrl} />
        
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Los Fundamentos de JavaScript que Realmente Importan | femCoders Club"
        />
        <meta
          property="og:description"
          content="El salto de HTML/CSS a JavaScript explicado sin tecnicismos. Entiende cómo funciona JavaScript por dentro con ejemplos reales."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/javascript/fundamentos-javascript.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fundamentos Profundos de JavaScript - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="De HTML/CSS a JavaScript: entiende closures, event loop, this y más con ejemplos que todas hemos vivido."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/javascript/fundamentos-javascript.webp"
        />
        
        <meta property="article:published_time" content="2025-11-25T10:00:00Z" />
        <meta property="article:author" content="Irina Ichim - femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Fundamentos" />
        <meta property="article:tag" content="Programación" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/javascript/fundamentos-javascript.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/javascript/fundamentos-javascript.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/javascript/fundamentos-javascript.webp"
            alt="Fundamentos Profundos de JavaScript - De HTML/CSS a Programación Real"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        De HTML y CSS a JavaScript
        <br />
        Cuando Tu Web Cobra Vida
      </h1>

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
            aria-label="Compartir en Facebook"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href={`https://www.instagram.com/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Instagram"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en LinkedIn"
          >
            <BsLinkedin className="social-icon" />
          </a>
          <a
            href={`https://twitter.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Twitter"
          >
            <FaSquareXTwitter className="social-icon" />
          </a>
          <a
            href={`https://www.tiktok.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>

      <p className="intro-text">
        Con HTML construiste la estructura de tu página web. Con CSS la convertiste en algo visualmente atractivo. 
        Pero tu sitio sigue siendo estático, como una revista digital que solo se puede mirar. <strong>JavaScript es lo 
        que transforma esa revista en una aplicación interactiva, viva, que responde a las acciones de tus usuarios.</strong>
      </p>

      <p className="intro-text">
        Este es el salto de maquetadora a programadora. Y sí, se siente diferente. Muy diferente.
      </p>

      <p className="intro-text">
        Pero aquí está la verdad que nadie te dice al principio: JavaScript no es difícil porque sea complicado. 
        Es difícil porque tiene <strong>comportamientos que desafían tu intuición</strong>. Comportamientos que, una vez entendidos, 
        te convierten en una desarrolladora que no solo escribe código que funciona, sino que entiende profundamente 
        <strong> por qué</strong> funciona.
      </p>

      <div className="highlight-box">
        <h2>
          <FaFire style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
          El Momento ¿QUÉ? de JavaScript
        </h2>
        
        <p>
          Antes de entrar en materia, déjame mostrarte por qué JavaScript tiene esa reputación de ser raro:
        </p>
<br />
        <h3>Situación 1: El carrito que suma mal</h3>
        <p>
          Estás calculando el precio total de un carrito de compras. El precio viene de un input del usuario 
          (siempre son strings). Le sumas el envío de 5 euros. El resultado: <strong>505</strong> en lugar de 55. 
          El operador más decidió pegar los números como si fueran texto en lugar de sumarlos.
        </p>
<br />
        <h3>Situación 2: El formulario que rechaza bebés</h3>
        <p>
          Estás validando la edad de un usuario. Tienes un bebé de 0 años. Tu código pregunta hay edad. 
          JavaScript responde no porque <strong>el cero se considera falso</strong>. El bebé queda rechazado del sistema.
        </p>
<br />
        <h3>Situación 3: La calculadora que no sabe matemáticas</h3>
        <p>
          Sumas 0.1 + 0.2 y JavaScript te dice que el resultado NO es 0.3. Te juro que no es broma.
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "20px",
          borderRadius: "var(--radius-md)",
          marginTop: "20px",
          borderLeft: "4px solid var(--color-secondary)"
        }}>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>
            <strong>Si estos comportamientos te desconciertan, perfecto.</strong> Al final de este post entenderás 
            exactamente por qué JavaScript se comporta así, y cómo usar ese conocimiento a tu favor en lugar de 
            luchar contra él.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button 
            onClick={downloadPresentation}
            style={{
              backgroundColor: "var(--color-secondary)",
              color: "white",
              padding: "15px 30px",
              border: "none",
              borderRadius: "var(--radius-md)",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "var(--transition-fast)",
              boxShadow: "var(--shadow-medium)",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <FaDownload /> Descargar Presentación: Motor Interno de JavaScript
          </button>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-dark)", marginTop: "10px" }}>
            Guía visual completa en PDF sobre cómo funciona JavaScript por dentro
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>
          <FaRocket style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          I. La Transición: De Estático a Dinámico
        </h2>
        <br />
        <h3>El Cambio de Paradigma</h3>
        <p>
          HTML y CSS son <strong>lenguajes declarativos</strong>: describes lo que quieres (quiero un título rojo) 
          y el navegador lo muestra. JavaScript es <strong>imperativo</strong>: das instrucciones paso a paso sobre 
          cómo hacer las cosas.
        </p>

        <p>
          Es la diferencia entre darle a alguien una foto de un plato de comida (HTML/CSS) versus darle la receta 
          con todos los pasos (JavaScript).
        </p>
<br />
        <h3>De Páginas a Aplicaciones</h3>
        <p>Imagina que tienes un formulario de contacto. <strong>Sin JavaScript:</strong></p>
        <ul>
          <li>El usuario llena los campos</li>
          <li>Hace click en Enviar</li>
          <li>La página se recarga completamente</li>
          <li>Si hay un error, pierde todo lo que escribió</li>
          <li>Tiene que volver a empezar</li>
        </ul>

        <p><strong>Con JavaScript:</strong></p>
        <ul>
          <li>Validas los campos mientras el usuario escribe (¿el email tiene @?)</li>
          <li>Muestras mensajes de error específicos sin recargar nada</li>
          <li>Deshabilitas el botón de envío mientras se procesa para evitar envíos duplicados</li>
          <li>Guardas el borrador en el navegador por si cierran accidentalmente la pestaña</li>
          <li>Confirmas el envío sin que la página parpadee</li>
        </ul>

        <p style={{ fontStyle: "italic", marginTop: "20px" }}>
          Esta es la diferencia entre una página web y una aplicación web. JavaScript es lo que hace la magia.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaLightbulb style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
          II. Los Fundamentos que Usarás Cada Día
        </h2>
        <br />
        <h3>1. Variables: Más Que Simples Contenedores</h3>
        <p>
          Cuando empiezas con JavaScript, te dicen: usa let para variables que cambian y const para las que no. 
          Pero la historia real es más interesante.
        </p>
<br />
        <h4>El caso del formulario que se actualiza solo</h4>
        <p>
          Imaginas que tienes los datos de un usuario en tu aplicación. Los copias para editarlos en otro lugar. 
          Cambias el email en la copia. Y sorpresa: <strong>el original también cambió</strong>. No hiciste ninguna magia, 
          simplemente no entendías que JavaScript maneja los objetos de forma diferente a los números o textos.
        </p>

        <div style={{
          backgroundColor: "rgba(234, 79, 51, 0.1)",
          padding: "15px",
          borderRadius: "var(--radius-sm)",
          marginTop: "15px",
          borderLeft: "3px solid var(--color-primary)"
        }}>
          <p style={{ margin: 0 }}>
            <strong>La verdad incómoda:</strong> JavaScript diferencia entre dos tipos de datos fundamentales:
          </p>
          <ul style={{ marginTop: "10px", marginBottom: 0 }}>
            <li><strong>Primitivos</strong> (números, textos, booleanos): cuando los copias, se duplican realmente</li>
            <li><strong>Objetos</strong> (incluyendo arrays): cuando los copias, solo copias la dirección donde viven en memoria, no el contenido</li>
          </ul>
        </div>

        <p style={{ marginTop: "15px" }}>
          Es como fotocopiar una dirección de una casa versus fotocopiar toda la casa. Si tienes dos papeles con 
          la misma dirección y vas a pintar esa casa de azul, ambos papeles seguirán apuntando a la misma casa azul.
        </p>
<br />
        <h3>2. El Tipado Dinámico: Tu Aliado y Tu Enemigo</h3>
        <p>
          JavaScript no te obliga a declarar tipos. No tienes que decir esta variable es un número o esta es un texto. 
          Suena liberador, ¿verdad?
        </p>

        <p>
          El problema es que JavaScript intentará ayudarte haciendo conversiones automáticas. Y a veces su ayuda es... cuestionable.
        </p>
<br />
        <h4>El bug del carrito que suma texto</h4>
        <p>
          Volvamos al primer ejemplo. Cuando tienes 50 (texto) y le sumas 5 (número), JavaScript ve el símbolo más 
          y piensa: ¿quieren pegar cosas?. Convierte el 5 a texto y te da 505.
        </p>

        <p>
          Pero si usas resta, multiplicación o división, JavaScript piensa diferente: No puedes restar textos, 
          claramente quieren hacer matemáticas. Convierte todo a números y funciona.
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "15px",
          borderRadius: "var(--radius-sm)",
          marginTop: "15px",
          borderLeft: "3px solid var(--color-secondary)"
        }}>
          <p style={{ margin: 0 }}>
            <strong>La regla de supervivencia:</strong> Cuando obtienes datos de inputs de formularios, de URLs, 
            o de cualquier lado donde el usuario escribe algo: SIEMPRE son textos. Aunque el usuario escriba 42, 
            para JavaScript es el texto 42, no el número 42. Conviértelos explícitamente tú. No dejes que JavaScript adivine qué quieres hacer.
          </p>
        </div>
<br />
        <h3>3. Truthy y Falsy: La Trampa Invisible</h3>
        <p>
          Aquí viene uno de los conceptos más importantes y menos explicados de JavaScript.
        </p>
<br />
        <h4>El problema del bebé rechazado</h4>
        <p>
          Recuerdas el ejemplo del principio. Tienes la edad 0 (un bebé). Preguntas si hay edad, proceder. 
          JavaScript dice no hay edad y rechaza al bebé. ¿Por qué?
        </p>

        <p>
          Porque JavaScript tiene una lista de valores que considera falsos aunque no sean exactamente el valor false:
        </p>

        <ul>
          <li>El número <strong>0</strong> (y -0, porque JavaScript)</li>
          <li>Texto vacío <strong>&quot;&quot;</strong></li>
          <li><strong>null</strong> (ausencia intencional de valor)</li>
          <li><strong>undefined</strong> (variable declarada pero sin valor)</li>
          <li><strong>NaN</strong> (Not a Number, cuando las matemáticas fallan)</li>
        </ul>

        <p>
          Todo lo demás se considera verdadero, incluyendo cosas que podrían sorprenderte:
        </p>

        <ul>
          <li>El texto 0 (aunque contenga un cero, es texto)</li>
          <li>El texto false (aunque diga false, es texto)</li>
          <li>Arrays vacíos []</li>
          <li>Objetos vacíos {}</li>
        </ul>

        <h4>La solución moderna</h4>
        <p>
          JavaScript tiene dos operadores para valores por defecto:
        </p>

        <p>
          <strong>El operador OR (||)</strong> que reemplaza TODO lo falsy: Perfecto para búsquedas o textos opcionales 
          donde el vacío no es válido.
        </p>

        <p>
          <strong>El operador Nullish (??)</strong> que solo reemplaza null y undefined: Úsalo cuando 0, false o texto 
          vacío son valores válidos. Por ejemplo, el número de página (la página 0 es válida), flags booleanos, 
          o campos opcionales que pueden estar vacíos legitimamente.
        </p>
<br />
        <h3>4. Funciones: Los Bloques de Construcción</h3>
        <p>
          En JavaScript, las funciones son especiales. No son solo bloques de código que ejecutas. Son valores que puedes:
        </p>
        <ul>
          <li>Guardar en variables</li>
          <li>Pasar como argumentos a otras funciones (esto se llama callback)</li>
          <li>Retornar desde otras funciones</li>
        </ul>

        <h4>El patrón que verás en todas partes</h4>
        <p>
          Imagina un botón que valida un formulario antes de enviarlo. No escribes el código de validación directamente 
          donde se envía. Creas una función de validación separada y la pasas como argumento. Así puedes cambiar las 
          reglas de validación sin tocar el código de envío.
        </p>

        <p>
          Es como darle a alguien una receta (la función) en lugar de cocinar tú el plato. Ellos deciden cuándo usar esa receta.
        </p>
<br />
        <h3>5. Desestructuración: Extraer lo que Necesitas</h3>
        <p>
          Imagina que recibes los datos de un usuario desde el servidor. Es un objeto gigante con 20 propiedades. 
          Solo necesitas el nombre, el email y la edad.
        </p>

        <p>
          En lugar de escribir: dame usuario punto nombre, usuario punto email, usuario punto edad
        </p>

        <p>
          Escribes: de usuario, dame nombre, email y edad
        </p>

        <p>
          Es como abrir una maleta y sacar solo lo que necesitas en lugar de cargar con toda la maleta.
        </p>
<br />
        <h3>6. Spread y Rest: Los Tres Puntos Mágicos</h3>
        <p>
          Los tres puntos (...) en JavaScript hacen dos cosas opuestas según dónde los pongas:
        </p>

        <p>
          <strong>Spread (expandir):</strong> Toma esto y desempácalo
        </p>
        <ul>
          <li>Combinar arrays sin mutar los originales</li>
          <li>Copiar objetos (con una trampa que veremos)</li>
          <li>Pasar múltiples argumentos a una función</li>
        </ul>

        <p>
          <strong>Rest (recoger):</strong> Toma todo lo que sobra y empaquétalo
        </p>
        <ul>
          <li>En funciones: aceptar cualquier cantidad de argumentos</li>
          <li>En desestructuración: dame estos tres campos específicos y todo el resto mételo en otro objeto</li>
        </ul>

        <h4>La trampa del shallow copy</h4>
        <p>
          Cuando copias un objeto con spread, solo copias el primer nivel. Si dentro de tu objeto hay otros objetos 
          (como preferencias del usuario), esos internos NO se copian. Siguen compartiendo la misma dirección de memoria.
        </p>

        <p>
          Es como fotocopiar un sobre: copias el sobre pero dentro sigue habiendo la misma carta, no una copia de la carta.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaBrain style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          III. Los Fundamentos Profundos: De Junior a Senior
        </h2>
        
        <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
          Aquí es donde separamos el hace que funcione del entiende por qué funciona.
        </p>
<br />
        <h3>1. Cómo JavaScript Lee Tu Código</h3>
        <p>
          JavaScript no ejecuta tu código línea por línea como parece. Hay un proceso de dos fases que casi nadie te explica.
        </p>

        <h4>Fase 1: Escaneo completo</h4>
        <p>
          Antes de ejecutar nada, JavaScript lee TODO tu archivo. Durante este escaneo:
        </p>
        <ul>
          <li>Encuentra todas las declaraciones de funciones y las eleva (puedes usarlas antes de declararlas)</li>
          <li>Encuentra todas las variables y las registra (pero no las inicializa todavía)</li>
          <li>Crea lo que se llama un Contexto de Ejecución (un entorno con todo preparado)</li>
        </ul>

        <h4>Fase 2: Ejecución</h4>
        <p>
          Ahora sí ejecuta línea por línea, pero con toda la información del escaneo disponible.
        </p>

        <div style={{
          backgroundColor: "rgba(234, 79, 51, 0.1)",
          padding: "15px",
          borderRadius: "var(--radius-sm)",
          marginTop: "15px",
          borderLeft: "3px solid var(--color-primary)"
        }}>
          <p style={{ margin: 0 }}>
            <strong>Por qué importa: El bug del botón que no encuentra la función</strong>
          </p>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            Has visto código donde se usa una función antes de declararla y funciona. Pero si intentas usar una 
            variable antes de declararla, explota. No es inconsistencia: son las reglas de hoisting.
          </p>
        </div>
<br />
        <h4>La Temporal Dead Zone (TDZ)</h4>
        <p>
          Las variables modernas (let y const) entran en una zona muerta temporal desde que JavaScript las detecta 
          hasta que ejecuta su declaración. Si intentas usarlas antes, error. Es una protección para evitar bugs raros.
        </p>
<br />
        <h3>2. Scope y Closures: El Superpoder Real de JavaScript</h3>
       
        <p >
          El concepto más potente y peor explicado del lenguaje.
        </p>
 <br />
        <h4>El bug de los 5 botones que hacen lo mismo</h4>
        <p>
          Tienes 5 botones en tu página. Cada uno debería mostrar su número cuando haces click: botón 1 muestra 1, 
          botón 2 muestra 2, etc. Los creas en un bucle, asignando a cada uno un event listener. 
        </p>
        
        <p>
          Pero cuando haces click en cualquiera... <strong>todos muestran 5</strong>. No el número que esperabas, 
          sino siempre el último valor del bucle.
        </p>
<br />
        <h4>La explicación que cambia todo</h4>
        <p>
          JavaScript tiene algo llamado <strong>scope léxico</strong>. Significa que el acceso a variables se determina 
          por DÓNDE escribes el código, no por cuándo se ejecuta.
        </p>

        <p>
          El bucle se ejecuta completamente primero (la variable del bucle llega a 5). Después, cuando haces click 
          en cualquier botón, las funciones asociadas se ejecutan y buscan la variable del bucle. <br /><strong>¿Cuál es 
          su valor en ese momento?</strong> 5. Por eso todas muestran el mismo número.
        </p>
<br />
        <h4>Enter: Closures (Clausuras)</h4>
        <p>
          Una closure es cuando una función recuerda el entorno donde fue creada, incluso después de que ese entorno 
          haya desaparecido.
        </p>

        <p>
          Piensa en ello como una mochila invisible. Cuando creas una función dentro de otra función, la función interna 
          lleva una mochila con todas las variables que había disponibles cuando nació. Esa mochila la acompaña siempre, 
          incluso cuando la función original ya terminó.
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "20px",
          borderRadius: "var(--radius-md)",
          marginTop: "20px",
          borderLeft: "4px solid var(--color-secondary)"
        }}>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.1rem" }}>
            Por qué esto es un superpoder:
          </p>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            Las closures te permiten crear variables privadas en JavaScript. Variables que solo ciertas funciones 
            pueden ver y modificar, pero el resto del código no puede tocar. Es encapsulación real. Datos privados 
            reales. Sin necesidad de clases ni sintaxis complicada.
          </p>
        </div>
<br />
        <h3>3. El Misterioso this: Contexto, No Objeto</h3>
        <p>
         <strong> this</strong> es probablemente lo más confuso de JavaScript. Y la razón es simple: funciona al revés de como esperas.
        </p>
<br />
        <h4>La trampa mental</h4>
        <p>
          Vienes de HTML y CSS donde todo es visual y predecible. Piensas que this se refiere al objeto donde 
          defines la función. ERROR.
        </p>

        <p>
          <strong>this se refiere a CÓMO llamas la función, no dónde la escribes.</strong>
        </p>
<br />
        <h4>El bug del botón que pierde la memoria</h4>
        <p>
          Tienes un objeto usuario con un método saludar que dice Hola, soy [nombre]. Cuando llamas directamente 
          usuario.saludar(), funciona perfecto.
        </p>

        <p>
          Pero cuando asignas ese método como event listener de un botón... dice Hola, soy undefined. Perdió el nombre.
        </p>

        <p>
          ¿Por qué? Porque cuando el navegador ejecuta el event listener, no lo ejecuta como método de usuario. 
          Lo ejecuta como función suelta. Y las funciones sueltas no tienen this útil.
        </p>
<br />
        <h4>Las 4 reglas (en orden de prioridad)</h4>
        <ul>
          <li><strong>Si usas new:</strong> this es el nuevo objeto que estás creando</li>
          <li><strong>Si usas call/apply/bind:</strong> this es lo que tú digas explícitamente</li>
          <li><strong>Si la llamas como método:</strong> this es el objeto antes del punto</li>
          <li><strong>Si la llamas suelta:</strong> this es el objeto global (window) o undefined</li>
        </ul>
<br />
        <h4>Arrow Functions: La excepción</h4>
        <p>
          Las funciones flecha NO tienen su propio this. Capturan el this del entorno donde se escriben, 
          como si llevaran una foto del contexto.
        </p>
<br />
        <h3>4. Prototypes: El Sistema de Herencia Secreto</h3>
        <p>
          JavaScript no tiene clases reales como Java o C++. La palabra clave class que usas es solo maquillaje 
          sobre un sistema más antiguo y extraño: prototypes.
        </p>
<br />
        <h4>¿Por qué te importa si usas classes?</h4>
        <p>
          Porque cuando debuggeas errores raros, cuando extiendes funcionalidad, cuando lees código de librerías... 
          necesitas entender qué está pasando realmente bajo el capó.
        </p>
<br />
        <h4>El concepto fundamental</h4>
        <p>
          Cuando JavaScript no encuentra una propiedad en un objeto, no se rinde. Sigue buscando en el prototipo 
          de ese objeto. Y si tampoco está ahí, busca en el prototipo del prototipo. Y así hasta llegar al final.
        </p>

        <p>
          Es como una cadena de herencia automática.
        </p>
<br />
        <h3>5. Event Loop: Por Qué JavaScript No Se Congela</h3>
        <p>
          Este es posiblemente el concepto más importante para entender aplicaciones web modernas.
        </p>
<br />
        <h4>El problema fundamental</h4>
        <p>
          JavaScript solo puede hacer una cosa a la vez (es single-threaded). Entonces, ¿cómo puede cargar datos 
          del servidor, actualizar la interfaz, responder a clicks, y no congelarse nunca?
        </p>

        <p>La respuesta: <strong>el Event Loop (bucle de eventos)</strong>.</p>
<br />
        <h4>El bug del spinner invisible</h4>
        <p>
          Imagina que quieres mostrar un spinner de "cargando..." mientras procesas datos pesados. Escribes el código 
          en este orden lógico:
        </p>
        <ol>
          <li>Mostrar spinner</li>
          <li>Procesar 10,000 registros</li>
          <li>Ocultar spinner</li>
        </ol>

        <p>
          <strong>Resultado:</strong> El spinner nunca aparece. La página se congela brevemente y luego vuelve a la normalidad. 
          Es como si las líneas 1 y 3 nunca se hubieran ejecutado.
        </p>

        <p>
          La razón es que JavaScript no puede actualizar la interfaz mientras está ejecutando código. El navegador necesita 
          que el Call Stack esté vacío para poder renderizar cambios visuales. Como los tres pasos se ejecutan en secuencia 
          sin pausas, el navegador nunca tiene oportunidad de mostrar el spinner antes de ocultarlo.
        </p>
<br />
        <h4>Cómo funciona realmente</h4>
        <p>JavaScript tiene varias colas de tareas:</p>

        <ul>
          <li><strong>Call Stack:</strong> Donde se ejecuta el código actual. Solo puede hacer una cosa a la vez.</li>
          <li><strong>Web APIs:</strong> Cuando pides algo que toma tiempo (cargar datos, esperar un timer), JavaScript lo delega al navegador.</li>
          <li><strong>Callback Queue:</strong> Cuando la Web API termina, la función callback se pone en cola aquí.</li>
          <li><strong>Microtask Queue:</strong> Una cola especial de ALTA prioridad para Promises.</li>
          <li><strong>Event Loop:</strong> El vigilante que constantemente pregunta: ¿Está vacío el Call Stack?</li>
        </ul>

        <div style={{
          backgroundColor: "rgba(234, 79, 51, 0.1)",
          padding: "15px",
          borderRadius: "var(--radius-sm)",
          marginTop: "15px",
          borderLeft: "3px solid var(--color-primary)"
        }}>
          <p style={{ margin: 0, fontWeight: "bold" }}>
            La regla de prioridad:
          </p>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            El Event Loop vacía TODA la Microtask Queue antes de tomar una sola tarea de la Callback Queue normal. 
            Por eso Promises se ejecutan antes que setTimeout, incluso si setTimeout tiene delay 0.
          </p>
        </div>
<br />
        <h3>6. Modo Estricto: JavaScript con Red de Seguridad</h3>
        <p>
          use strict al inicio de tu archivo activa restricciones que previenen errores comunes.
        </p>
<br />
        <h4>El error que contamina el mundo</h4>
        <p>
          Sin modo estricto, si olvidas poner let/const antes de una variable, JavaScript la crea automáticamente 
          como GLOBAL. Puede contaminar todo tu código sin que te des cuenta.
        </p>

        <p>
          Con modo estricto: error inmediato. Hey, declaraste esta variable sin let/const, eso es un error.
        </p>
<br />
        <h3>7. Coerción de Tipos: La Ayuda No Pedida</h3>
        <p>
          JavaScript intenta ser servicial convirtiendo tipos automáticamente. A veces ayuda, a veces causa desastres.
        </p>

        <h4>Los casos más comunes que causan bugs</h4>
        <ul>
          <li>5 == 5 es true (coerción)</li>
          <li>5 === 5 es false (sin coerción, más seguro)</li>
          <li>null == undefined es true (se consideran equivalentes)</li>
          <li>5 - 2 da 3 (resta fuerza conversión a número)</li>
          <li>5 + 2 da 52 (suma con string concatena)</li>
        </ul>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "15px",
          borderRadius: "var(--radius-sm)",
          marginTop: "15px",
          borderLeft: "3px solid var(--color-secondary)"
        }}>
          <p style={{ margin: 0 }}>
            <strong>La regla de oro:</strong> Usa triple igual (===) siempre. Es igualdad estricta: compara valor Y tipo, 
            sin conversiones automáticas.
          </p>
        </div>
<br />
        <h3>8. Paso por Valor vs Referencia: La Fuente de Mil Bugs</h3>
        <br />
        <h4>El bug que todas hemos tenido</h4>
        <p>
          Imagina que estás editando los datos de un usuario en un formulario. Creas una copia para trabajar con ella, 
          modificas algunos campos y guardas los cambios. Pero al volver a la pantalla anterior descubres algo inquietante: 
          <strong>los datos originales también cambiaron</strong>, incluso antes de guardar. No hiciste nada extraño, pero 
          el objeto original se modificó como si tuviera conexión telepática con tu copia.
        </p>
<br />
        <h4>La diferencia fundamental</h4>
        <p>
          JavaScript maneja dos tipos de datos de forma completamente distinta:
        </p>

        <p>
          <strong>Primitivos (números, textos, booleanos):</strong> Se copian por valor. Cuando los asignas a otra variable, 
          JavaScript duplica el contenido completo. Son dos valores independientes en memoria.
        </p>

        <p>
          <strong>Objetos (incluyendo arrays y funciones):</strong> Se copian por referencia. Cuando los asignas, solo copias 
          la dirección de memoria donde viven, no el contenido. Es como tener dos controles remotos apuntando al mismo televisor.
        </p>

        <p>
          La analogía perfecta: copiar un primitivo es fotocopiar una casa completa. Copiar un objeto es fotocopiar únicamente 
          la dirección postal. Si alguien pinta esa casa de azul usando su copia de la dirección, tu dirección seguirá apuntando 
          a la misma casa azul.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaBug style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
          IV. Debugging: Entendiendo los Errores
        </h2>
        
        <p>
          Ahora que comprendes cómo funciona JavaScript por dentro, puedes debuggear de manera estratégica en lugar 
          de probar soluciones al azar. Cada error tiene una razón de ser basada en los fundamentos que acabas de aprender.
        </p>

        <h3>Los Errores Más Comunes y Sus Causas Reales</h3>

        <ul>
          <li>
            <strong>ReferenceError: X is not defined</strong> — Estás intentando acceder a una variable que no existe 
            en el scope actual o que está en la Temporal Dead Zone. Revisa el scope léxico y verifica que la variable 
            esté declarada antes de usarla.
          </li>
          <li>
            <strong>TypeError: Cannot read property X of undefined</strong> — El objeto que crees que existe es null 
            o undefined. Probablemente una operación asíncrona no terminó todavía, o la cadena de prototipos no tiene 
            lo que buscas. Usa optional chaining (?.) como protección.
          </li>
          <li>
            <strong>TypeError: X is not a function</strong> — Estás intentando ejecutar algo que no es una función. 
            Puede ser un problema de <strong>this</strong> que cambió de contexto, o que la función se perdió por 
            paso de referencia. Verifica el contexto de ejecución.
          </li>
          <li>
            <strong>SyntaxError: Unexpected token</strong> — Error de sintaxis básico: paréntesis sin cerrar, comas 
            mal colocadas, llaves desbalanceadas. El parser de JavaScript no puede interpretar el código. Revisa 
            la sintaxis línea por línea o usa un linter.
          </li>
          <li>
            <strong>RangeError: Maximum call stack size exceeded</strong> — Recursión infinita. Tu función se llama 
            a sí misma sin un caso base que detenga la ejecución. El Call Stack se llena hasta explotar. Agrega una 
            condición de salida.
          </li>
        </ul>

        <h3>Herramientas Más Allá del console.log</h3>
        <p>
          El console.log es útil, pero JavaScript tiene herramientas de debugging mucho más poderosas:
        </p>
        <ul>
          <li>
            <strong>console.table(data):</strong> Muestra arrays y objetos como tablas legibles. Perfecto para comparar 
            múltiples objetos de un vistazo.
          </li>
          <li>
            <strong>console.group() / console.groupEnd():</strong> Agrupa mensajes relacionados con indentación. 
            Ideal para trazar flujos complejos sin perder el contexto.
          </li>
          <li>
            <strong>console.time('label') / console.timeEnd('label'):</strong> Mide exactamente cuánto tarda una 
            operación. Útil para detectar cuellos de botella de rendimiento.
          </li>
          <li>
            <strong>console.trace():</strong> Muestra toda la cadena de llamadas (call stack) que llevó hasta ese 
            punto. Indispensable para entender cómo llegaste a un estado específico.
          </li>
          <li>
            <strong>debugger statement:</strong> Pausa la ejecución en ese punto exacto y abre las DevTools 
            automáticamente. Puedes inspeccionar variables, el scope, y ejecutar código paso a paso.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>
          <FaCogs style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          V. El Camino Desde Aquí
        </h2>
        
        <p>
          Si has llegado hasta aquí, ya no eres la misma desarrolladora que empezó a leer este post. Ahora comprendes 
          cómo JavaScript procesa tu código en dos fases distintas, cómo maneja la memoria diferenciando entre primitivos 
          y objetos, y cómo ejecuta operaciones asíncronas sin congelar el navegador gracias al Event Loop.
        </p>

        <p>
          Entiendes por qué <strong>this</strong> cambia según el contexto de invocación y no según dónde escribes el 
          código. Sabes que los <strong>closures</strong> son el mecanismo que permite crear datos privados y funciones 
          que recuerdan su entorno de origen. Y comprendes que las <strong>Promises</strong> no son magia, sino una 
          forma elegante de manejar la cola de microtareas que el Event Loop prioriza sobre callbacks normales.
        </p>

        <p style={{ fontWeight: "bold" }}>
          Pero estos fundamentos son tu base, no tu techo. Es momento de construir sobre ellos.
        </p>
<br />
        <h3>Los Próximos Pasos</h3>
        <ul>
          <li><strong>Módulos ES6:</strong> Organizar código en archivos separados que se importan entre sí</li>
          <li><strong>DOM Avanzado:</strong> Shadow DOM, Custom Elements, Intersection Observer</li>
          <li><strong>APIs del Navegador:</strong> LocalStorage, Fetch API avanzado, Web Workers</li>
          <li><strong>Patrones de Diseño:</strong> Module Pattern, Observer, Factory, Singleton</li>
          <li><strong>Frameworks:</strong> Con estos fundamentos entenderás mejor React, Vue, Angular</li>
        </ul>

        <h3>¿Necesitas Apoyo Personalizado?</h3>
        <p>
          Si estos conceptos te resultan desafiantes o quieres profundizar más con orientación personalizada, 
          en femCoders Club ofrecemos{" "}
          <Link to="/login" className="highlight-link">
            mentorías individuales
          </Link>
          {" "}donde podemos trabajar juntas en tus dudas específicas. 
          {" "}(Requiere <Link to="/register" className="highlight-link">registro gratuito</Link>)
        </p>
<br />
        <h3>Recurso Recomendado para Profundizar</h3>
        <p>
          Si quieres complementar estos fundamentos con una guía clara y estructurada, te recomiendo la{" "}
          <a href="https://campus.mouredev.pro/products/digital_downloads/guia-fundamentos-javascript" target="_blank" rel="noopener noreferrer" className="highlight-link">
            <strong>Guía de Fundamentos de JavaScript de Brais Moure (MoureDev)</strong>
          </a>
          . Es un documento gratuito que reúne los conceptos esenciales de una forma muy accesible y que muchas personas 
          de la comunidad utilizan como referencia.
        </p>
        <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "var(--color-text-dark)" }}>
          En próximos posts sobre JavaScript agregaremos más recursos específicos según el tema avanzado que tratemos.
        </p>

      </div>

      <div className="highlight-box">
        <h2>
          <FaCheckCircle style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
          El Desafío Final
        </h2>
        
        <p>
          Si has llegado hasta aquí, prueba tu comprensión:
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "20px",
          borderRadius: "var(--radius-md)",
          marginTop: "20px"
        }}>
          <p style={{ fontWeight: "bold", fontSize: "1.1rem", marginTop: 0 }}>
            Tienes dos bucles casi idénticos que crean 3 botones cada uno.
          </p>
          <p>
            En el primero, todos los botones muestran 3 cuando haces click. En el segundo, cada botón muestra su 
            número correcto (0, 1, 2).
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>La única diferencia:</strong> el primero usa var y el segundo usa let.
          </p>
        </div>

        <p style={{ marginTop: "20px" }}>
          Si puedes explicar por qué hay diferente comportamiento usando <strong>execution context, scope, closures 
          y event loop</strong>... has dominado los fundamentos de JavaScript.
        </p>
      </div>

      <div style={{
        backgroundColor: "rgba(71, 55, 187, 0.05)",
        padding: "30px",
        borderRadius: "var(--radius-lg)",
        margin: "40px 0",
        borderLeft: "5px solid var(--color-secondary)"
      }}>
        <h2 style={{ marginTop: 0, textAlign: "center" }}>Conclusión: Del Código que Funciona al Código que Entiendes</h2> <br />
        <p style={{ fontSize: "1.2rem", textAlign: "left", color: "var(--color-text-dark)" }}>
          JavaScript no es un lenguaje raro. Es un lenguaje con reglas muy específicas que, una vez comprendidas, 
          se vuelven predecibles y poderosas.
        </p>
        <p style={{ fontSize: "1.1rem", textAlign: "left", color: "var(--color-text-dark)" }}>
          La diferencia entre una desarrolladora junior y una senior no está en cuántas líneas escribe, sino en 
          <strong> cuánto entiende lo que sucede por debajo.</strong>
        </p>
        <p style={{ fontSize: "1.1rem", fontStyle: "italic", marginBottom: 0, textAlign: "left", color: "var(--color-text-dark)" }}>
          Con estos fundamentos, conceptos avanzados como Generators, Proxies, Symbols, o Async Iterators dejarán de 
          parecer magia. Serán extensiones lógicas de lo que ya dominas.
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Full-stack Developer & Co-fundadora de femCoders Club</p>
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <Link to="/blog" className="back-to-blog">
          Volver al Blog
        </Link>
      </div>

      <CommentsSection postId={postId} />
    </div>
  );
};

export default FundamentosJavaScript;