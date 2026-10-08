import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ListaMarcadaPost,
  NotaPost,
  SeccionPost,
} from "../../../components/post/PiezasPost";

const FundamentosJavaScript: React.FC = () => (
  <>
      <Helmet>
        <title>Los fundamentos de JavaScript que realmente importan: de HTML/CSS a programación real | FemCoders Club</title>
        <meta
          name="description"
          content="Aprende los fundamentos profundos de JavaScript: execution context, closures, event loop, prototypes. De maquetadora a desarrolladora con ejemplos reales del día a día."
        />
        <meta
          name="keywords"
          content="fundamentos javascript, aprender javascript, closures javascript, event loop, execution context, prototypes javascript, de css a javascript, tutorial javascript español, femcoders club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/fundamentos-javascript-profundos" />
        
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Los fundamentos de JavaScript que realmente importan | FemCoders Club"
        />
        <meta
          property="og:description"
          content="El salto de HTML/CSS a JavaScript explicado sin tecnicismos. Entiende cómo funciona JavaScript por dentro con ejemplos reales."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/fundamentos-javascript-profundos" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/javascript/fundamentos-javascript.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fundamentos profundos de JavaScript - FemCoders Club"
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
        <meta property="article:author" content="Irina Ichim - FemCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Fundamentos" />
        <meta property="article:tag" content="Programación" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/js/fundamentos-javascript-profundos"
      titulo="De HTML y CSS a JavaScript: cuando tu web cobra vida"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={31}
      entradilla={
        <>
          <p>
            Con HTML construiste la estructura de tu página web. Con CSS la
            convertiste en algo visualmente atractivo. Pero tu sitio sigue siendo
            estático, como una revista digital que solo se puede mirar.{" "}
            <strong>
              JavaScript es lo que transforma esa revista en una aplicación
              interactiva, viva, que responde a las acciones de tus usuarios.
            </strong>
          </p>
          <p>
            Este es el salto de maquetadora a programadora. Y sí, se siente
            diferente. Muy diferente.
          </p>
          <p>
            Pero aquí está la verdad que nadie te dice al principio: JavaScript
            no es difícil porque sea complicado. Es difícil porque tiene{" "}
            <strong>comportamientos que desafían tu intuición</strong>.
            Comportamientos que, una vez entendidos, te convierten en una
            desarrolladora que no solo escribe código que funciona, sino que
            entiende profundamente <strong>por qué</strong> funciona.
          </p>
        </>
      }
    >
      <SeccionPost titulo="El momento «¿qué?» de JavaScript">
        <p>
          Antes de entrar en materia, déjame mostrarte por qué JavaScript tiene
          esa reputación de ser raro:
        </p>

        <h3>Situación 1: el carrito que suma mal</h3>
        <p>
          Estás calculando el precio total de un carrito de compras. El precio
          viene de un input del usuario (siempre son strings). Le sumas el envío
          de 5 euros. El resultado: <strong>505</strong> en lugar de 55. El
          operador más decidió pegar los números como si fueran texto en lugar
          de sumarlos.
        </p>

        <h3>Situación 2: el formulario que rechaza bebés</h3>
        <p>
          Estás validando la edad de un usuario. Tienes un bebé de 0 años. Tu
          código pregunta «¿hay edad?». JavaScript responde que no porque{" "}
          <strong>el cero se considera falso</strong>. El bebé queda rechazado
          del sistema.
        </p>

        <h3>Situación 3: la calculadora que no sabe matemáticas</h3>
        <p>
          Sumas <code>0.1 + 0.2</code> y JavaScript te dice que el resultado NO
          es <code>0.3</code>. Te juro que no es broma.
        </p>

        <NotaPost titulo="Si te desconciertan, perfecto">
          <p>
            <strong>Si estos comportamientos te desconciertan, perfecto.</strong>{" "}
            Al final de este post entenderás exactamente por qué JavaScript se
            comporta así, y cómo usar ese conocimiento a tu favor en lugar de
            luchar contra él.
          </p>
        </NotaPost>

        <p>
          <a
            href="/assets/javascript/motor_JavaScript_interno.pdf"
            download="motor-javascript-interno-femCoders.pdf"
            className="fc-boton"
          >
            Descargar la presentación: motor interno de JavaScript
          </a>
        </p>
        <p>
          Guía visual completa en PDF sobre cómo funciona JavaScript por dentro.
        </p>
      </SeccionPost>

      <SeccionPost titulo="La transición: de estático a dinámico">
        <h3>El cambio de paradigma</h3>
        <p>
          HTML y CSS son <strong>lenguajes declarativos</strong>: describes lo
          que quieres («quiero un título rojo») y el navegador lo muestra.
          JavaScript es <strong>imperativo</strong>: das instrucciones paso a
          paso sobre cómo hacer las cosas.
        </p>
        <p>
          Es la diferencia entre darle a alguien una foto de un plato de comida
          (HTML/CSS) y darle la receta con todos los pasos (JavaScript).
        </p>

        <h3>De páginas a aplicaciones</h3>
        <p>Imagina que tienes un formulario de contacto.</p>

        <ListaMarcadaPost titulo="Sin JavaScript" tipo="mal">
          <li>El usuario rellena los campos.</li>
          <li>Hace clic en «Enviar».</li>
          <li>La página se recarga completamente.</li>
          <li>Si hay un error, pierde todo lo que escribió.</li>
          <li>Tiene que volver a empezar.</li>
        </ListaMarcadaPost>

        <ListaMarcadaPost titulo="Con JavaScript" tipo="bien">
          <li>Validas los campos mientras el usuario escribe (¿el email tiene @?).</li>
          <li>Muestras mensajes de error específicos sin recargar nada.</li>
          <li>Deshabilitas el botón de envío mientras se procesa para evitar envíos duplicados.</li>
          <li>Guardas el borrador en el navegador por si cierran accidentalmente la pestaña.</li>
          <li>Confirmas el envío sin que la página parpadee.</li>
        </ListaMarcadaPost>

        <p>
          Esta es la diferencia entre una página web y una aplicación web.
          JavaScript es lo que hace la magia.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Los fundamentos que usarás cada día">
        <h3>1. Variables: más que simples contenedores</h3>
        <p>
          Cuando empiezas con JavaScript, te dicen: usa <code>let</code> para
          variables que cambian y <code>const</code> para las que no. Pero la
          historia real es más interesante.
        </p>

        <p>
          <strong>El caso del formulario que se actualiza solo</strong>
        </p>
        <p>
          Imagina que tienes los datos de un usuario en tu aplicación. Los
          copias para editarlos en otro lugar. Cambias el email en la copia. Y
          sorpresa: <strong>el original también cambió</strong>. No hiciste
          ninguna magia, simplemente no entendías que JavaScript maneja los
          objetos de forma diferente a los números o textos.
        </p>

        <NotaPost titulo="La verdad incómoda" tipo="aviso">
          <p>JavaScript diferencia entre dos tipos de datos fundamentales:</p>
          <ul>
            <li>
              <strong>Primitivos</strong> (números, textos, booleanos): cuando
              los copias, se duplican realmente.
            </li>
            <li>
              <strong>Objetos</strong> (incluidos los arrays): cuando los copias,
              solo copias la dirección donde viven en memoria, no el contenido.
            </li>
          </ul>
        </NotaPost>

        <p>
          Es como fotocopiar la dirección de una casa en lugar de fotocopiar
          toda la casa. Si tienes dos papeles con la misma dirección y vas a
          pintar esa casa de azul, ambos papeles seguirán apuntando a la misma
          casa azul.
        </p>

        <h3>2. El tipado dinámico: tu aliado y tu enemigo</h3>
        <p>
          JavaScript no te obliga a declarar tipos. No tienes que decir «esta
          variable es un número» o «esta es un texto». Suena liberador,
          ¿verdad?
        </p>
        <p>
          El problema es que JavaScript intentará ayudarte haciendo conversiones
          automáticas. Y a veces su ayuda es... cuestionable.
        </p>

        <p>
          <strong>El bug del carrito que suma texto</strong>
        </p>
        <p>
          Volvamos al primer ejemplo. Cuando tienes <code>"50"</code> (texto) y
          le sumas <code>5</code> (número), JavaScript ve el símbolo más y
          piensa: «¿quieren pegar cosas?». Convierte el 5 a texto y te da{" "}
          <code>"505"</code>.
        </p>
        <p>
          Pero si usas resta, multiplicación o división, JavaScript piensa
          diferente: «no puedes restar textos, claramente quieren hacer
          matemáticas». Convierte todo a números y funciona.
        </p>

        <NotaPost titulo="La regla de supervivencia">
          <p>
            Cuando obtienes datos de inputs de formularios, de URL o de
            cualquier lado donde el usuario escribe algo, SIEMPRE son textos.
            Aunque el usuario escriba 42, para JavaScript es el texto{" "}
            <code>"42"</code>, no el número <code>42</code>. Conviértelos
            explícitamente tú. No dejes que JavaScript adivine qué quieres
            hacer.
          </p>
        </NotaPost>

        <h3>3. Truthy y falsy: la trampa invisible</h3>
        <p>
          Aquí viene uno de los conceptos más importantes y menos explicados de
          JavaScript.
        </p>

        <p>
          <strong>El problema del bebé rechazado</strong>
        </p>
        <p>
          ¿Recuerdas el ejemplo del principio? Tienes la edad 0 (un bebé).
          Preguntas: «si hay edad, adelante». JavaScript dice «no hay edad» y
          rechaza al bebé. ¿Por qué?
        </p>
        <p>
          Porque JavaScript tiene una lista de valores que considera falsos
          aunque no sean exactamente el valor <code>false</code>:
        </p>
        <ul>
          <li>El número <code>0</code> (y <code>-0</code>, porque JavaScript).</li>
          <li>El texto vacío <code>""</code>.</li>
          <li><code>null</code> (ausencia intencional de valor).</li>
          <li><code>undefined</code> (variable declarada pero sin valor).</li>
          <li><code>NaN</code> (Not a Number, cuando las matemáticas fallan).</li>
        </ul>
        <p>
          Todo lo demás se considera verdadero, incluidas cosas que podrían
          sorprenderte:
        </p>
        <ul>
          <li>El texto <code>"0"</code> (aunque contenga un cero, es texto).</li>
          <li>El texto <code>"false"</code> (aunque diga false, es texto).</li>
          <li>Los arrays vacíos, <code>[]</code>.</li>
          <li>Los objetos vacíos, <code>{"{}"}</code>.</li>
        </ul>

        <p>
          <strong>La solución moderna</strong>
        </p>
        <p>JavaScript tiene dos operadores para valores por defecto:</p>
        <p>
          <strong>El operador OR (<code>||</code>)</strong>, que reemplaza TODO
          lo falsy: perfecto para búsquedas o textos opcionales donde el vacío
          no es válido.
        </p>
        <p>
          <strong>El operador nullish (<code>??</code>)</strong>, que solo
          reemplaza <code>null</code> y <code>undefined</code>: úsalo cuando{" "}
          <code>0</code>, <code>false</code> o el texto vacío son valores
          válidos. Por ejemplo, el número de página (la página 0 es válida), los
          flags booleanos o los campos opcionales que pueden estar vacíos
          legítimamente.
        </p>

        <h3>4. Funciones: los bloques de construcción</h3>
        <p>
          En JavaScript, las funciones son especiales. No son solo bloques de
          código que ejecutas. Son valores que puedes:
        </p>
        <ul>
          <li>Guardar en variables.</li>
          <li>Pasar como argumentos a otras funciones (esto se llama callback).</li>
          <li>Devolver desde otras funciones.</li>
        </ul>

        <p>
          <strong>El patrón que verás en todas partes</strong>
        </p>
        <p>
          Imagina un botón que valida un formulario antes de enviarlo. No
          escribes el código de validación directamente donde se envía. Creas
          una función de validación separada y la pasas como argumento. Así
          puedes cambiar las reglas de validación sin tocar el código de envío.
        </p>
        <p>
          Es como darle a alguien una receta (la función) en lugar de cocinar
          tú el plato. Esa persona decide cuándo usar esa receta.
        </p>

        <h3>5. Desestructuración: extraer lo que necesitas</h3>
        <p>
          Imagina que recibes los datos de un usuario desde el servidor. Es un
          objeto gigante con 20 propiedades. Solo necesitas el nombre, el email
          y la edad.
        </p>
        <p>En lugar de escribir «dame usuario punto nombre, usuario punto email, usuario punto edad»:</p>
        <CodigoPost lenguaje="JavaScript">{`const nombre = usuario.nombre;
const email = usuario.email;
const edad = usuario.edad;`}</CodigoPost>
        <p>Escribes «de usuario, dame nombre, email y edad»:</p>
        <CodigoPost lenguaje="JavaScript">{`const { nombre, email, edad } = usuario;`}</CodigoPost>
        <p>
          Es como abrir una maleta y sacar solo lo que necesitas en lugar de
          cargar con toda la maleta.
        </p>

        <h3>6. Spread y rest: los tres puntos mágicos</h3>
        <p>
          Los tres puntos (<code>...</code>) en JavaScript hacen dos cosas
          opuestas según dónde los pongas:
        </p>
        <p>
          <strong>Spread (expandir):</strong> «toma esto y desempácalo».
        </p>
        <ul>
          <li>Combinar arrays sin mutar los originales.</li>
          <li>Copiar objetos (con una trampa que veremos).</li>
          <li>Pasar múltiples argumentos a una función.</li>
        </ul>
        <p>
          <strong>Rest (recoger):</strong> «toma todo lo que sobra y
          empaquétalo».
        </p>
        <ul>
          <li>En funciones: aceptar cualquier cantidad de argumentos.</li>
          <li>
            En desestructuración: «dame estos tres campos específicos y todo el
            resto mételo en otro objeto».
          </li>
        </ul>

        <p>
          <strong>La trampa del shallow copy</strong>
        </p>
        <p>
          Cuando copias un objeto con spread, solo copias el primer nivel. Si
          dentro de tu objeto hay otros objetos (como las preferencias del
          usuario), esos internos NO se copian. Siguen compartiendo la misma
          dirección de memoria.
        </p>
        <p>
          Es como fotocopiar un sobre: copias el sobre, pero dentro sigue
          habiendo la misma carta, no una copia de la carta.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Los fundamentos profundos: de junior a senior">
        <p>
          Aquí es donde separamos el «hace que funcione» del «entiende por qué
          funciona».
        </p>

        <h3>1. Cómo JavaScript lee tu código</h3>
        <p>
          JavaScript no ejecuta tu código línea por línea como parece. Hay un
          proceso de dos fases que casi nadie te explica.
        </p>

        <p>
          <strong>Fase 1: escaneo completo</strong>
        </p>
        <p>
          Antes de ejecutar nada, JavaScript lee TODO tu archivo. Durante este
          escaneo:
        </p>
        <ul>
          <li>
            Encuentra todas las declaraciones de funciones y las eleva (puedes
            usarlas antes de declararlas).
          </li>
          <li>
            Encuentra todas las variables y las registra (pero no las inicializa
            todavía).
          </li>
          <li>
            Crea lo que se llama un contexto de ejecución (un entorno con todo
            preparado).
          </li>
        </ul>

        <p>
          <strong>Fase 2: ejecución</strong>
        </p>
        <p>
          Ahora sí ejecuta línea por línea, pero con toda la información del
          escaneo disponible.
        </p>

        <NotaPost titulo="Por qué importa: el bug del botón que no encuentra la función" tipo="aviso">
          <p>
            Has visto código donde se usa una función antes de declararla y
            funciona. Pero si intentas usar una variable antes de declararla,
            explota. No es inconsistencia: son las reglas de hoisting.
          </p>
        </NotaPost>

        <p>
          <strong>La Temporal Dead Zone (TDZ)</strong>
        </p>
        <p>
          Las variables modernas (<code>let</code> y <code>const</code>) entran
          en una zona muerta temporal desde que JavaScript las detecta hasta que
          ejecuta su declaración. Si intentas usarlas antes, error. Es una
          protección para evitar bugs raros.
        </p>

        <h3>2. Scope y closures: el superpoder real de JavaScript</h3>
        <p>El concepto más potente y peor explicado del lenguaje.</p>

        <p>
          <strong>El bug de los 5 botones que hacen lo mismo</strong>
        </p>
        <p>
          Tienes 5 botones en tu página. Cada uno debería mostrar su número
          cuando haces clic: el botón 1 muestra 1, el botón 2 muestra 2, etc.
          Los creas en un bucle, asignando a cada uno un event listener.
        </p>
        <p>
          Pero cuando haces clic en cualquiera... <strong>todos muestran 5</strong>.
          No el número que esperabas, sino siempre el último valor del bucle.
        </p>

        <p>
          <strong>La explicación que cambia todo</strong>
        </p>
        <p>
          JavaScript tiene algo llamado <strong>scope léxico</strong>. Significa
          que el acceso a variables se determina por DÓNDE escribes el código,
          no por cuándo se ejecuta.
        </p>
        <p>
          El bucle se ejecuta completamente primero (la variable del bucle llega
          a 5). Después, cuando haces clic en cualquier botón, las funciones
          asociadas se ejecutan y buscan la variable del bucle.{" "}
          <strong>¿Cuál es su valor en ese momento?</strong> 5. Por eso todas
          muestran el mismo número.
        </p>

        <p>
          <strong>Enter: closures (clausuras)</strong>
        </p>
        <p>
          Una closure es cuando una función recuerda el entorno donde fue
          creada, incluso después de que ese entorno haya desaparecido.
        </p>
        <p>
          Piensa en ello como una mochila invisible. Cuando creas una función
          dentro de otra función, la función interna lleva una mochila con todas
          las variables que había disponibles cuando nació. Esa mochila la
          acompaña siempre, incluso cuando la función original ya terminó.
        </p>

        <NotaPost titulo="Por qué esto es un superpoder">
          <p>
            Las closures te permiten crear variables privadas en JavaScript.
            Variables que solo ciertas funciones pueden ver y modificar, pero el
            resto del código no puede tocar. Es encapsulación real. Datos
            privados reales. Sin necesidad de clases ni sintaxis complicada.
          </p>
        </NotaPost>

        <h3>
          3. El misterioso <code>this</code>: contexto, no objeto
        </h3>
        <p>
          <code>this</code> es probablemente lo más confuso de JavaScript. Y la
          razón es simple: funciona al revés de como esperas.
        </p>

        <p>
          <strong>La trampa mental</strong>
        </p>
        <p>
          Vienes de HTML y CSS, donde todo es visual y predecible. Piensas que{" "}
          <code>this</code> se refiere al objeto donde defines la función.
          ERROR.
        </p>
        <p>
          <strong>
            <code>this</code> se refiere a CÓMO llamas a la función, no a dónde
            la escribes.
          </strong>
        </p>

        <p>
          <strong>El bug del botón que pierde la memoria</strong>
        </p>
        <p>
          Tienes un objeto <code>usuario</code> con un método{" "}
          <code>saludar</code> que dice «Hola, soy [nombre]». Cuando llamas
          directamente a <code>usuario.saludar()</code>, funciona perfecto.
        </p>
        <p>
          Pero cuando asignas ese método como event listener de un botón...
          dice «Hola, soy undefined». Perdió el nombre.
        </p>
        <p>
          ¿Por qué? Porque cuando el navegador ejecuta el event listener, no lo
          ejecuta como método de <code>usuario</code>. Lo ejecuta como función
          suelta. Y las funciones sueltas no tienen un <code>this</code> útil.
        </p>

        <p>
          <strong>Las 4 reglas (en orden de prioridad)</strong>
        </p>
        <ol>
          <li>
            <strong>Si usas <code>new</code>:</strong> <code>this</code> es el
            nuevo objeto que estás creando.
          </li>
          <li>
            <strong>
              Si usas <code>call</code>/<code>apply</code>/<code>bind</code>:
            </strong>{" "}
            <code>this</code> es lo que tú digas explícitamente.
          </li>
          <li>
            <strong>Si la llamas como método:</strong> <code>this</code> es el
            objeto antes del punto.
          </li>
          <li>
            <strong>Si la llamas suelta:</strong> <code>this</code> es el objeto
            global (<code>window</code>) o, en modo estricto,{" "}
            <code>undefined</code>.
          </li>
        </ol>

        <p>
          <strong>Arrow functions: la excepción</strong>
        </p>
        <p>
          Las funciones flecha NO tienen su propio <code>this</code>. Capturan
          el <code>this</code> del entorno donde se escriben, como si llevaran
          una foto del contexto.
        </p>

        <h3>4. Prototypes: el sistema de herencia secreto</h3>
        <p>
          JavaScript no tiene clases reales como Java o C++. La palabra clave{" "}
          <code>class</code> que usas es solo maquillaje sobre un sistema más
          antiguo y extraño: los prototypes.
        </p>

        <p>
          <strong>¿Por qué te importa si usas clases?</strong>
        </p>
        <p>
          Porque cuando depuras errores raros, cuando extiendes funcionalidad,
          cuando lees código de librerías... necesitas entender qué está pasando
          realmente bajo el capó.
        </p>

        <p>
          <strong>El concepto fundamental</strong>
        </p>
        <p>
          Cuando JavaScript no encuentra una propiedad en un objeto, no se
          rinde. Sigue buscando en el prototipo de ese objeto. Y si tampoco está
          ahí, busca en el prototipo del prototipo. Y así hasta llegar al final.
        </p>
        <p>Es como una cadena de herencia automática.</p>

        <h3>5. Event Loop: por qué JavaScript no se congela</h3>
        <p>
          Este es posiblemente el concepto más importante para entender las
          aplicaciones web modernas.
        </p>

        <p>
          <strong>El problema fundamental</strong>
        </p>
        <p>
          JavaScript solo puede hacer una cosa a la vez (es single-threaded).
          Entonces, ¿cómo puede cargar datos del servidor, actualizar la
          interfaz, responder a clics y no congelarse nunca?
        </p>
        <p>
          La respuesta: <strong>el Event Loop (bucle de eventos)</strong>.
        </p>

        <p>
          <strong>El bug del spinner invisible</strong>
        </p>
        <p>
          Imagina que quieres mostrar un spinner de «cargando...» mientras
          procesas datos pesados. Escribes el código en este orden lógico:
        </p>
        <ol>
          <li>Mostrar el spinner.</li>
          <li>Procesar 10 000 registros.</li>
          <li>Ocultar el spinner.</li>
        </ol>
        <p>
          <strong>Resultado:</strong> el spinner nunca aparece. La página se
          congela brevemente y luego vuelve a la normalidad. Es como si las
          líneas 1 y 3 nunca se hubieran ejecutado.
        </p>
        <p>
          La razón es que JavaScript no puede actualizar la interfaz mientras
          está ejecutando código. El navegador necesita que el Call Stack esté
          vacío para poder renderizar cambios visuales. Como los tres pasos se
          ejecutan en secuencia sin pausas, el navegador nunca tiene
          oportunidad de mostrar el spinner antes de ocultarlo.
        </p>

        <p>
          <strong>Cómo funciona realmente</strong>
        </p>
        <p>JavaScript tiene varias colas de tareas:</p>
        <ul>
          <li>
            <strong>Call Stack:</strong> donde se ejecuta el código actual. Solo
            puede hacer una cosa a la vez.
          </li>
          <li>
            <strong>Web APIs:</strong> cuando pides algo que tarda (cargar datos,
            esperar un temporizador), JavaScript lo delega al navegador.
          </li>
          <li>
            <strong>Callback Queue:</strong> cuando la Web API termina, la
            función callback se pone en cola aquí.
          </li>
          <li>
            <strong>Microtask Queue:</strong> una cola especial de ALTA prioridad
            para las promesas.
          </li>
          <li>
            <strong>Event Loop:</strong> el vigilante que pregunta
            constantemente: «¿está vacío el Call Stack?».
          </li>
        </ul>

        <NotaPost titulo="La regla de prioridad" tipo="aviso">
          <p>
            El Event Loop vacía TODA la Microtask Queue antes de tomar una sola
            tarea de la Callback Queue normal. Por eso las promesas se ejecutan
            antes que <code>setTimeout</code>, incluso si{" "}
            <code>setTimeout</code> tiene un retardo de 0.
          </p>
        </NotaPost>

        <h3>6. Modo estricto: JavaScript con red de seguridad</h3>
        <p>
          <code>"use strict"</code> al inicio de tu archivo activa restricciones
          que previenen errores comunes.
        </p>

        <p>
          <strong>El error que contamina el mundo</strong>
        </p>
        <p>
          Sin modo estricto, si olvidas poner <code>let</code>/<code>const</code>{" "}
          antes de una variable, JavaScript la crea automáticamente como GLOBAL.
          Puede contaminar todo tu código sin que te des cuenta.
        </p>
        <p>
          Con modo estricto: error inmediato. «Hey, declaraste esta variable sin{" "}
          <code>let</code>/<code>const</code>, eso es un error».
        </p>

        <h3>7. Coerción de tipos: la ayuda no pedida</h3>
        <p>
          JavaScript intenta ser servicial convirtiendo tipos automáticamente. A
          veces ayuda, a veces causa desastres.
        </p>

        <p>
          <strong>Los casos más comunes que causan bugs</strong>
        </p>
        <CodigoPost lenguaje="JavaScript">{`"5" == 5           // true (coerción)
"5" === 5          // false (sin coerción, más seguro)
null == undefined  // true (se consideran equivalentes)
"5" - 2            // 3 (la resta fuerza la conversión a número)
"5" + 2            // "52" (la suma con un string concatena)`}</CodigoPost>

        <NotaPost titulo="La regla de oro">
          <p>
            Usa triple igual (<code>===</code>) siempre. Es igualdad estricta:
            compara valor Y tipo, sin conversiones automáticas.
          </p>
        </NotaPost>

        <h3>8. Paso por valor vs. referencia: la fuente de mil bugs</h3>

        <p>
          <strong>El bug que todas hemos tenido</strong>
        </p>
        <p>
          Imagina que estás editando los datos de un usuario en un formulario.
          Creas una copia para trabajar con ella, modificas algunos campos y
          guardas los cambios. Pero al volver a la pantalla anterior descubres
          algo inquietante: <strong>los datos originales también cambiaron</strong>,
          incluso antes de guardar. No hiciste nada extraño, pero el objeto
          original se modificó como si tuviera conexión telepática con tu copia.
        </p>

        <p>
          <strong>La diferencia fundamental</strong>
        </p>
        <p>JavaScript maneja dos tipos de datos de forma completamente distinta:</p>
        <p>
          <strong>Primitivos (números, textos, booleanos):</strong> se copian
          por valor. Cuando los asignas a otra variable, JavaScript duplica el
          contenido completo. Son dos valores independientes en memoria.
        </p>
        <p>
          <strong>Objetos (incluidos arrays y funciones):</strong> se copian por
          referencia. Cuando los asignas, solo copias la dirección de memoria
          donde viven, no el contenido. Es como tener dos mandos a distancia
          apuntando al mismo televisor.
        </p>
        <p>
          La analogía perfecta: copiar un primitivo es fotocopiar una casa
          completa. Copiar un objeto es fotocopiar únicamente la dirección
          postal. Si alguien pinta esa casa de azul usando su copia de la
          dirección, tu dirección seguirá apuntando a la misma casa azul.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Debugging: entendiendo los errores">
        <p>
          Ahora que comprendes cómo funciona JavaScript por dentro, puedes
          depurar de manera estratégica en lugar de probar soluciones al azar.
          Cada error tiene una razón de ser basada en los fundamentos que acabas
          de aprender.
        </p>

        <h3>Los errores más comunes y sus causas reales</h3>
        <ul>
          <li>
            <strong><code>ReferenceError: X is not defined</code></strong>: estás
            intentando acceder a una variable que no existe en el scope actual o
            que está en la Temporal Dead Zone. Revisa el scope léxico y verifica
            que la variable esté declarada antes de usarla.
          </li>
          <li>
            <strong>
              <code>TypeError: Cannot read properties of undefined (reading 'X')</code>
            </strong>
            : el objeto que crees que existe es <code>null</code> o{" "}
            <code>undefined</code>. Probablemente una operación asíncrona no
            terminó todavía, o la cadena de prototipos no tiene lo que buscas.
            Usa optional chaining (<code>?.</code>) como protección.
          </li>
          <li>
            <strong><code>TypeError: X is not a function</code></strong>: estás
            intentando ejecutar algo que no es una función. Puede ser un
            problema de <code>this</code> que cambió de contexto, o que la
            función se perdió por paso de referencia. Verifica el contexto de
            ejecución.
          </li>
          <li>
            <strong><code>SyntaxError: Unexpected token</code></strong>: error de
            sintaxis básico: paréntesis sin cerrar, comas mal colocadas, llaves
            desbalanceadas. El parser de JavaScript no puede interpretar el
            código. Revisa la sintaxis línea por línea o usa un linter.
          </li>
          <li>
            <strong><code>RangeError: Maximum call stack size exceeded</code></strong>:
            recursión infinita. Tu función se llama a sí misma sin un caso base
            que detenga la ejecución. El Call Stack se llena hasta explotar.
            Añade una condición de salida.
          </li>
        </ul>

        <h3>
          Herramientas más allá de <code>console.log</code>
        </h3>
        <p>
          El <code>console.log</code> es útil, pero JavaScript tiene
          herramientas de depuración mucho más potentes:
        </p>
        <ul>
          <li>
            <strong><code>console.table(data)</code>:</strong> muestra arrays y
            objetos como tablas legibles. Perfecto para comparar varios objetos
            de un vistazo.
          </li>
          <li>
            <strong>
              <code>console.group()</code> / <code>console.groupEnd()</code>:
            </strong>{" "}
            agrupa mensajes relacionados con sangría. Ideal para trazar flujos
            complejos sin perder el contexto.
          </li>
          <li>
            <strong>
              <code>console.time('label')</code> /{" "}
              <code>console.timeEnd('label')</code>:
            </strong>{" "}
            mide exactamente cuánto tarda una operación. Útil para detectar
            cuellos de botella de rendimiento.
          </li>
          <li>
            <strong><code>console.trace()</code>:</strong> muestra toda la cadena
            de llamadas (call stack) que llevó hasta ese punto. Indispensable
            para entender cómo llegaste a un estado específico.
          </li>
          <li>
            <strong>La sentencia <code>debugger</code>:</strong> pausa la
            ejecución en ese punto exacto si tienes las DevTools abiertas. Puedes
            inspeccionar variables y el scope, y ejecutar código paso a paso.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="El camino desde aquí">
        <p>
          Si has llegado hasta aquí, ya no eres la misma desarrolladora que
          empezó a leer este post. Ahora comprendes cómo JavaScript procesa tu
          código en dos fases distintas, cómo maneja la memoria diferenciando
          entre primitivos y objetos, y cómo ejecuta operaciones asíncronas sin
          congelar el navegador gracias al Event Loop.
        </p>
        <p>
          Entiendes por qué <code>this</code> cambia según el contexto de
          invocación y no según dónde escribes el código. Sabes que las{" "}
          <strong>closures</strong> son el mecanismo que permite crear datos
          privados y funciones que recuerdan su entorno de origen. Y comprendes
          que las <strong>promesas</strong> no son magia, sino una forma
          elegante de manejar la cola de microtareas que el Event Loop prioriza
          sobre los callbacks normales.
        </p>
        <p>
          <strong>
            Pero estos fundamentos son tu base, no tu techo. Es momento de
            construir sobre ellos.
          </strong>
        </p>

        <h3>Los próximos pasos</h3>
        <ul>
          <li>
            <strong>Módulos ES6:</strong> organizar el código en archivos
            separados que se importan entre sí.
          </li>
          <li>
            <strong>DOM avanzado:</strong> Shadow DOM, Custom Elements,
            Intersection Observer.
          </li>
          <li>
            <strong>APIs del navegador:</strong> LocalStorage, Fetch API
            avanzado, Web Workers.
          </li>
          <li>
            <strong>Patrones de diseño:</strong> Module Pattern, Observer,
            Factory, Singleton.
          </li>
          <li>
            <strong>Frameworks:</strong> con estos fundamentos entenderás mejor
            React, Vue o Angular.
          </li>
        </ul>

        <h3>¿Necesitas apoyo personalizado?</h3>
        <p>
          Si estos conceptos te resultan desafiantes o quieres profundizar más
          con orientación personalizada, en FemCoders Club ofrecemos{" "}
          <Link to="/login">mentorías individuales</Link> donde podemos trabajar
          juntas en tus dudas específicas (requiere{" "}
          <Link to="/register">registro gratuito</Link>).
        </p>

        <h3>Recurso recomendado para profundizar</h3>
        <p>
          Si quieres complementar estos fundamentos con una guía clara y
          estructurada, te recomiendo la{" "}
          <a
            href="https://campus.mouredev.pro/products/digital_downloads/guia-fundamentos-javascript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Guía de Fundamentos de JavaScript de Brais Moure (MoureDev)</strong>
          </a>
          . Es un documento gratuito que reúne los conceptos esenciales de una
          forma muy accesible y que muchas personas de la comunidad utilizan
          como referencia.
        </p>
        <p>
          En próximos posts sobre JavaScript añadiremos más recursos específicos
          según el tema avanzado que tratemos.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El desafío final">
        <p>Si has llegado hasta aquí, prueba tu comprensión:</p>

        <NotaPost titulo="El desafío">
          <p>
            <strong>
              Tienes dos bucles casi idénticos que crean 3 botones cada uno.
            </strong>
          </p>
          <p>
            En el primero, todos los botones muestran 3 cuando haces clic. En el
            segundo, cada botón muestra su número correcto (0, 1, 2).
          </p>
          <p>
            <strong>La única diferencia:</strong> el primero usa{" "}
            <code>var</code> y el segundo usa <code>let</code>.
          </p>
        </NotaPost>

        <p>
          Si puedes explicar por qué hay diferente comportamiento usando{" "}
          <strong>execution context, scope, closures y event loop</strong>...
          has dominado los fundamentos de JavaScript.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conclusión: del código que funciona al código que entiendes">
        <p>
          JavaScript no es un lenguaje raro. Es un lenguaje con reglas muy
          específicas que, una vez comprendidas, se vuelven predecibles y
          poderosas.
        </p>
        <p>
          La diferencia entre una desarrolladora junior y una senior no está en
          cuántas líneas escribe, sino en{" "}
          <strong>cuánto entiende lo que sucede por debajo.</strong>
        </p>
        <p>
          Con estos fundamentos, conceptos avanzados como Generators, Proxies,
          Symbols o Async Iterators dejarán de parecer magia. Serán extensiones
          lógicas de lo que ya dominas.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default FundamentosJavaScript;
