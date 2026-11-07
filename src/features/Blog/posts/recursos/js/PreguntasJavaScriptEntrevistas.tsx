import React from "react";
import { Helmet } from "react-helmet";
import { BookOpen, Download, Globe, Hammer, MessageSquare, Share2, Users } from "lucide-react";
import Quiz, { type QuizQuestion } from "../../../../../components/Quiz";
import PlantillaPost from "../../../components/post/PlantillaPost";
import { ListaMarcadaPost, NotaPost, PasosPost, SeccionPost, TablaPost, TarjetasPost } from "../../../components/post/PiezasPost";

const preguntasJavaScriptEntrevistas: QuizQuestion[] = [
  // Básico: fundamentos del lenguaje.
  {
    id: "js-basic-1", level: "basico",
    question: "¿Qué permite declarar una variable que vas a reasignar y cuyo alcance es de bloque?",
    options: [{ id: "a", text: "`const`" }, { id: "b", text: "`let`" }, { id: "c", text: "`var`" }, { id: "d", text: "`static`" }],
    correct: ["b"],
    explanation: "let tiene alcance de bloque y permite reasignar. const también tiene alcance de bloque, pero impide reasignar la variable. var tiene alcance de función o global, no de bloque.",
  },
  {
    id: "js-basic-2", level: "basico",
    question: "Con `const persona = { nombre: 'Ana' }`, ¿qué operación es válida?",
    options: [{ id: "a", text: "`persona = { nombre: 'Luz' }`" }, { id: "b", text: "`persona.nombre = 'Luz'`" }, { id: "c", text: "Ninguna: `const` congela el objeto" }, { id: "d", text: "Solo se puede modificar si se declara con `var`" }],
    correct: ["b"],
    explanation: "const protege la asignación de la variable, no las propiedades del objeto. Puedes cambiar persona.nombre sin cambiar la referencia que guarda persona.",
  },
  {
    id: "js-basic-3", level: "basico",
    question: "¿Cuáles de estos valores son primitivos en JavaScript?",
    options: [{ id: "a", text: "`'hola'`" }, { id: "b", text: "`42`" }, { id: "c", text: "`null`" }, { id: "d", text: "`{ nombre: 'Ana' }`" }],
    correct: ["a", "b", "c"],
    explanation: "Las cadenas, los números y null son primitivos. También lo son undefined, boolean, bigint y symbol. Un objeto no es un primitivo, aunque typeof null devuelva 'object' por una peculiaridad histórica.",
  },
  {
    id: "js-basic-4", level: "basico",
    question: "¿Qué devuelve la comparación `5 === '5'`?",
    options: [{ id: "a", text: "`true`" }, { id: "b", text: "`false`" }, { id: "c", text: "`undefined`" }, { id: "d", text: "Lanza un `TypeError`" }],
    correct: ["b"],
    explanation: "La igualdad estricta no convierte los tipos: un número y una cadena son distintos. En cambio, 5 == '5' devuelve true porque la igualdad no estricta aplica conversión de tipos.",
  },
  {
    id: "js-basic-5", level: "basico",
    question: "¿Qué valores se convierten en `false` al usarlos como condición?",
    options: [{ id: "a", text: "`0`" }, { id: "b", text: "`''` (cadena vacía)" }, { id: "c", text: "`[]` (array vacío)" }, { id: "d", text: "`null`" }],
    correct: ["a", "b", "d"],
    explanation: "0, la cadena vacía y null son falsy. Un array vacío es un objeto y es truthy. También son falsy undefined, false, NaN, -0 y 0n.",
  },
  {
    id: "js-basic-6", level: "basico",
    question: "¿Qué devuelve `function saludar() {} saludar()`?",
    options: [{ id: "a", text: "`null`" }, { id: "b", text: "`false`" }, { id: "c", text: "`undefined`" }, { id: "d", text: "Una cadena vacía" }],
    correct: ["c"],
    explanation: "Una función normal sin return explícito devuelve undefined. return sin una expresión también devuelve undefined.",
  },
  {
    id: "js-basic-7", level: "basico",
    question: "¿Qué contiene `dobles` tras ejecutar `const dobles = [1, 2, 3].map(n => n * 2)`?",
    options: [{ id: "a", text: "`[2, 4, 6]`" }, { id: "b", text: "`[1, 2, 3, 2, 4, 6]`" }, { id: "c", text: "`12`" }, { id: "d", text: "`undefined`" }],
    correct: ["a"],
    explanation: "map crea un array con el resultado de aplicar la función a cada elemento. En este ejemplo no modifica el array original; una función pasada a map sí podría modificar objetos si se programa para hacerlo.",
  },
  {
    id: "js-basic-8", level: "basico",
    question: "¿Qué método crea un array con los elementos que cumplen una condición?",
    options: [{ id: "a", text: "`forEach()`" }, { id: "b", text: "`filter()`" }, { id: "c", text: "`find()`" }, { id: "d", text: "`push()`" }],
    correct: ["b"],
    explanation: "filter devuelve un array con los elementos para los que la función devuelve un valor truthy. find devuelve el primer elemento que cumple la condición, o undefined si no encuentra ninguno.",
  },
  {
    id: "js-basic-9", level: "basico",
    question: "¿Cuál es el valor de `nombre` en `const { nombre = 'Visitante' } = {}`?",
    options: [{ id: "a", text: "`undefined`" }, { id: "b", text: "`null`" }, { id: "c", text: "`'Visitante'`" }, { id: "d", text: "`{}`" }],
    correct: ["c"],
    explanation: "La desestructuración usa el valor por defecto si la propiedad no existe o vale undefined. Si nombre valiera null, conservaría null.",
  },
  {
    id: "js-basic-10", level: "basico",
    question: "En el navegador, ¿qué devuelve `document.querySelector('.aviso')` si no encuentra coincidencias?",
    options: [{ id: "a", text: "Un array vacío" }, { id: "b", text: "`undefined`" }, { id: "c", text: "`false`" }, { id: "d", text: "`null`" }],
    correct: ["d"],
    explanation: "querySelector devuelve el primer elemento que coincide o null. Comprueba ese resultado antes de acceder a sus propiedades. querySelectorAll devuelve una NodeList, que puede estar vacía.",
  },
  // Intermedio: scope, contexto, objetos y asincronía.
  {
    id: "js-mid-1", level: "intermedio",
    question: "Dentro de un bloque, ¿qué ocurre al leer una variable declarada con `let` antes de su inicialización?",
    options: [{ id: "a", text: "Devuelve `undefined`, como `var`" }, { id: "b", text: "Lanza un `ReferenceError`" }, { id: "c", text: "Devuelve `null`" }, { id: "d", text: "Busca siempre una variable global del mismo nombre" }],
    correct: ["b"],
    explanation: "La variable existe en el alcance del bloque, pero está en la zona muerta temporal hasta que se inicializa. Leerla en ese intervalo produce un ReferenceError.",
  },
  {
    id: "js-mid-2", level: "intermedio",
    question: "¿Qué describe un closure?",
    options: [{ id: "a", text: "Una función junto con el acceso a su entorno léxico" }, { id: "b", text: "Una función que solo puede ejecutarse una vez" }, { id: "c", text: "Una copia congelada de todas las variables globales" }, { id: "d", text: "Un método para cerrar conexiones HTTP" }],
    correct: ["a"],
    explanation: "Una función conserva acceso a las variables de su entorno léxico aunque la función exterior haya terminado. Ese acceso no es una foto de sus valores: puede observar cambios en las variables capturadas.",
  },
  {
    id: "js-mid-3", level: "intermedio",
    question: "¿Qué afirmaciones son correctas sobre las funciones flecha?",
    options: [{ id: "a", text: "Toman `this` del entorno léxico" }, { id: "b", text: "`call()` les asigna un nuevo `this`" }, { id: "c", text: "No pueden usarse como constructoras con `new`" }, { id: "d", text: "Crean su propio objeto `arguments`" }],
    correct: ["a", "c"],
    explanation: "Las flechas no tienen this ni arguments propios y no son constructoras. call, apply o bind no sustituyen su this léxico. Para recibir argumentos puedes usar parámetros rest.",
  },
  {
    id: "js-mid-4", level: "intermedio",
    question: "Con `const a = { perfil: { nombre: 'Ana' } }; const b = { ...a }; b.perfil.nombre = 'Luz'`, ¿qué vale `a.perfil.nombre`?",
    options: [{ id: "a", text: "`'Ana'`" }, { id: "b", text: "`undefined`" }, { id: "c", text: "Lanza un error por usar `const`" }, { id: "d", text: "`'Luz'`" }],
    correct: ["d"],
    explanation: "El spread crea una copia superficial. Los objetos a y b son distintos, pero su propiedad perfil apunta al mismo objeto anidado. Modificarlo desde b también se observa desde a.",
  },
  {
    id: "js-mid-5", level: "intermedio",
    question: "¿Qué valores resultan de `0 || 10` y `0 ?? 10`, respectivamente?",
    options: [{ id: "a", text: "`10` y `10`" }, { id: "b", text: "`0` y `0`" }, { id: "c", text: "`10` y `0`" }, { id: "d", text: "`0` y `10`" }],
    correct: ["c"],
    explanation: "|| usa el operando derecho cuando el izquierdo es falsy. ?? solo lo usa ante null o undefined, por lo que conserva valores como 0, false y la cadena vacía.",
  },
  {
    id: "js-mid-6", level: "intermedio",
    question: "¿Qué devuelve siempre una función declarada con `async` cuando se invoca?",
    options: [{ id: "a", text: "Una promesa" }, { id: "b", text: "El valor de `return` sin envolver" }, { id: "c", text: "Un hilo de ejecución" }, { id: "d", text: "Un callback" }],
    correct: ["a"],
    explanation: "Una función async devuelve una promesa. Un return normal determina su valor de cumplimiento; un error no capturado provoca su rechazo. async no crea por sí mismo otro hilo.",
  },
  {
    id: "js-mid-7", level: "intermedio",
    question: "En el navegador, `await fetch('/api/datos')` recibe una respuesta HTTP 404. ¿Qué debes tener en cuenta?",
    options: [{ id: "a", text: "La promesa siempre se rechaza por el 404" }, { id: "b", text: "Debes comprobar `response.ok` o `response.status`" }, { id: "c", text: "La promesa puede cumplirse con un objeto `Response`" }, { id: "d", text: "`fetch` reintenta automáticamente hasta obtener un 200" }],
    correct: ["b", "c"],
    explanation: "fetch no rechaza solo por un estado HTTP como 404 o 500. Comprueba ok o status y gestiona el error de tu aplicación. Sí puede rechazar por errores de red o una cancelación, entre otros motivos.",
  },
  {
    id: "js-mid-8", level: "intermedio",
    question: "¿En qué se basa la delegación de eventos de clic en un contenedor?",
    options: [{ id: "a", text: "En añadir un temporizador por cada elemento hijo" }, { id: "b", text: "En sustituir todos los botones por enlaces" }, { id: "c", text: "En que `event.target` siempre es el contenedor" }, { id: "d", text: "En la propagación del evento y en identificar el elemento de origen" }],
    correct: ["d"],
    explanation: "Un clic puede propagarse desde un descendiente hasta el contenedor. En el listener, currentTarget es el contenedor y target identifica el origen. closest ayuda a encontrar el control, comprobando que pertenece al contenedor.",
  },
  {
    id: "js-mid-9", level: "intermedio",
    question: "¿Qué afirmaciones son correctas sobre `Map` y `Set`?",
    options: [{ id: "a", text: "`Map` acepta objetos como claves" }, { id: "b", text: "`Set` conserva valores únicos" }, { id: "c", text: "Dos objetos con las mismas propiedades son la misma clave de `Map`" }, { id: "d", text: "`Set` compara objetos por su contenido" }],
    correct: ["a", "b"],
    explanation: "Map permite claves de cualquier tipo y Set evita duplicados. Los objetos se comparan por identidad: dos objetos creados por separado siguen siendo distintos aunque sus propiedades coincidan.",
  },
  {
    id: "js-mid-10", level: "intermedio",
    question: "En un módulo ES, ¿qué permite `import('./panel.js')`?",
    options: [{ id: "a", text: "Obtener el módulo de forma síncrona" }, { id: "b", text: "Cargar un módulo dinámicamente mediante una promesa" }, { id: "c", text: "Convertir el módulo en una variable global" }, { id: "d", text: "Evitar cualquier error de carga" }],
    correct: ["b"],
    explanation: "import() devuelve una promesa que se cumple con el espacio de nombres del módulo. Puedes usarlo para cargar funcionalidad cuando se necesita y gestionar posibles rechazos con catch o try/await/catch.",
  },
  // Avanzado: razonamiento sobre ejecución y decisiones de diseño.
  {
    id: "js-adv-1", level: "avanzado",
    question: "En un script del navegador, ¿en qué orden se registra `console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D')`?",
    options: [{ id: "a", text: "A, B, C, D" }, { id: "b", text: "A, D, B, C" }, { id: "c", text: "A, D, C, B" }, { id: "d", text: "C, A, D, B" }],
    correct: ["c"],
    explanation: "Primero se ejecuta el código síncrono: A y D. Tras terminar la tarea actual se procesan las microtareas, incluida la reacción de la promesa: C. El temporizador ejecuta B en una tarea posterior; 0 no significa ejecución inmediata.",
  },
  {
    id: "js-adv-2", level: "avanzado",
    question: "¿Qué garantiza `Promise.all([p1, p2])`?",
    options: [{ id: "a", text: "Si ambas se cumplen, los resultados mantienen el orden de entrada" }, { id: "b", text: "Si una rechaza, cancela automáticamente la otra operación" }, { id: "c", text: "Espera siempre a que ambas terminen antes de rechazar" }, { id: "d", text: "Rechaza cuando se produce un rechazo de entrada" }],
    correct: ["a", "d"],
    explanation: "Promise.all conserva el orden de entrada en los resultados y rechaza ante un rechazo, sin cancelar las operaciones restantes. Para conocer todos los desenlaces puedes usar Promise.allSettled.",
  },
  {
    id: "js-adv-3", level: "avanzado",
    question: "¿Qué ocurre con `await elementos.forEach(async elemento => guardar(elemento))`?",
    options: [{ id: "a", text: "Espera a que terminen todos los guardados" }, { id: "b", text: "`forEach` devuelve `undefined` y no espera las promesas de los callbacks" }, { id: "c", text: "Ejecuta necesariamente los guardados en serie" }, { id: "d", text: "Devuelve un array con los resultados" }],
    correct: ["b"],
    explanation: "forEach ignora los valores devueltos por los callbacks. Usa for...of con await para esperar en serie, o await Promise.all(elementos.map(guardar)) para esperar las operaciones iniciadas conjuntamente y gestionar sus errores.",
  },
  {
    id: "js-adv-4", level: "avanzado",
    question: "¿Cómo se cancela una petición `fetch` usando `AbortController`?",
    options: [{ id: "a", text: "Llamando a `cancel()` en cualquier promesa" }, { id: "b", text: "Borrando la variable que guarda la respuesta" }, { id: "c", text: "Usando solo `Promise.race` con un temporizador" }, { id: "d", text: "Pasando su `signal` a `fetch` y llamando a `abort()` en el controlador" }],
    correct: ["d"],
    explanation: "fetch acepta un AbortSignal en sus opciones. Al abortarlo puedes interrumpir la petición o la lectura del cuerpo y debes gestionar el rechazo correspondiente. Promise.race por sí solo no cancela la petición que pierde la carrera.",
  },
  {
    id: "js-adv-5", level: "avanzado",
    question: "Si una propiedad no está en el propio objeto, ¿cómo continúa una lectura normal de esa propiedad?",
    options: [{ id: "a", text: "Busca en la cadena de prototipos hasta encontrarla o llegar a `null`" }, { id: "b", text: "Copia todas las propiedades del prototipo al objeto" }, { id: "c", text: "Busca en todos los objetos del programa" }, { id: "d", text: "Lanza siempre un `ReferenceError`" }],
    correct: ["a"],
    explanation: "La búsqueda continúa por los prototipos. Si no se encuentra la propiedad devuelve undefined. Object.hasOwn permite distinguir una propiedad propia de una heredada.",
  },
  {
    id: "js-adv-6", level: "avanzado",
    question: "Un `WeakMap` usa un objeto como clave. ¿Qué afirmaciones son correctas?",
    options: [{ id: "a", text: "Mantiene viva la clave aunque no haya otras referencias" }, { id: "b", text: "No impide por sí mismo que esa clave se recoja como basura" }, { id: "c", text: "Permite enumerar todas sus claves con `keys()`" }, { id: "d", text: "Permite asociar metadatos al objeto sin añadirle propiedades" }],
    correct: ["b", "d"],
    explanation: "WeakMap mantiene una referencia débil a la clave y sirve para asociar metadatos. Sus claves no son enumerables y no expone size: el momento de la recolección de basura no es predecible.",
  },
  {
    id: "js-adv-7", level: "avanzado",
    question: "Una búsqueda lanza una petición por cada cambio de texto. ¿Qué ayudan a resolver debounce y el control de respuestas obsoletas?",
    options: [{ id: "a", text: "Debounce garantiza que las respuestas llegan en orden" }, { id: "b", text: "Debounce convierte la red en una operación síncrona" }, { id: "c", text: "Debounce reduce llamadas agrupando cambios cercanos" }, { id: "d", text: "Un identificador de petición permite ignorar resultados antiguos" }],
    correct: ["c", "d"],
    explanation: "Debounce retrasa la llamada hasta que pasa un intervalo sin nuevos cambios. No resuelve por sí solo las carreras de red: identifica la petición vigente antes de pintar sus resultados y considera cancelar peticiones anteriores.",
  },
  {
    id: "js-adv-8", level: "avanzado",
    question: "¿Qué caracteriza los bindings importados mediante ES Modules?",
    options: [{ id: "a", text: "Son copias fijas del valor en el momento de importar" }, { id: "b", text: "Reflejan cambios en la variable exportada y no se pueden reasignar desde quien importa" }, { id: "c", text: "Congelan automáticamente todos los objetos exportados" }, { id: "d", text: "Se convierten en propiedades de `window`" }],
    correct: ["b"],
    explanation: "Los imports son bindings vivos de solo lectura para el módulo importador. Si el módulo de origen actualiza una variable exportada, el cambio se observa al leerla. Esto no congela las propiedades de un objeto exportado.",
  },
  {
    id: "js-adv-9", level: "avanzado",
    question: "¿Qué consecuencias puede tener leer `offsetHeight` justo después de modificar estilos, repetidamente en un bucle?",
    options: [{ id: "a", text: "El navegador puede necesitar resolver el layout para responder a la lectura" }, { id: "b", text: "Intercalar lecturas y escrituras puede provocar cálculos de layout repetidos" }, { id: "c", text: "No tiene coste porque JavaScript se ejecuta siempre fuera del hilo principal" }, { id: "d", text: "Usar `requestAnimationFrame` elimina cualquier cálculo de layout" }],
    correct: ["a", "b"],
    explanation: "Una lectura de geometría con estilos pendientes puede forzar un layout síncrono. Agrupa lecturas antes de escrituras y mide con las herramientas del navegador. requestAnimationFrame ayuda a programar trabajo antes del repintado, pero no elimina su coste.",
  },
  {
    id: "js-adv-10", level: "avanzado",
    question: "Para probar una función que calcula un total y luego lo guarda por HTTP, ¿qué diseño facilita una prueba unitaria del cálculo?",
    options: [{ id: "a", text: "Depender siempre de una API real y de la hora actual" }, { id: "b", text: "Comprobar únicamente que no se lanza ningún error" }, { id: "c", text: "Separar el cálculo puro de la petición e inyectar la dependencia de red" }, { id: "d", text: "Cambiar el resultado esperado para que coincida con cualquier salida" }],
    correct: ["c"],
    explanation: "Una función pura permite verificar entradas, salidas y casos límite de forma determinista. Inyectar la dependencia de red permite simular respuestas y errores. Las pruebas de integración complementan esas comprobaciones.",
  },
];

const descargarGuia = () => {
  const contenido = [
    "GUÍA DE ESTUDIO JAVASCRIPT · ENTREVISTAS TÉCNICAS",
    "FemCoders Club · 7 de noviembre de 2026",
    "Repasa a tu ritmo. La puntuación orienta el repaso; no determina tu nivel profesional.",
    ...(["basico", "intermedio", "avanzado"] as const).flatMap((nivel) => [
      `\nNIVEL ${nivel.toUpperCase()}`,
      ...preguntasJavaScriptEntrevistas.filter((p) => p.level === nivel).map((p, i) =>
        `\n${i + 1}. ${p.question}\nRespuesta: ${p.options.filter((o) => p.correct.includes(o.id)).map((o) => o.text).join("; ")}\n${p.explanation}`),
    ]),
    "\nRecursos: https://www.femcodersclub.com/blog/recursos",
    "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide",
    "https://www.femcodersclub.com/recursos/js/quiz-javascript-entrevistas",
  ].join("\n");
  const url = URL.createObjectURL(new Blob([contenido], { type: "text/plain;charset=utf-8" }));
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = "JavaScript-Entrevistas-Guia-Estudio-FemCoders.txt";
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
  URL.revokeObjectURL(url);
};

const BotonGuia = () => (
  <button type="button" className="fc-boton" onClick={descargarGuia}>
    <Download aria-hidden="true" /> Descargar la guía de estudio
  </button>
);

const PreguntasJavaScriptEntrevistas: React.FC = () => (
  <>
    <Helmet>
      <title>Quiz JavaScript para entrevistas técnicas: 30 preguntas esenciales | FemCoders Club</title>
      <meta name="description" content="Repasa JavaScript con 30 preguntas en tres niveles: fundamentos, closures, DOM, promesas, event loop y testing. Con explicaciones y guía descargable." />
      <meta name="keywords" content="quiz JavaScript, entrevistas técnicas JavaScript, preguntas JavaScript, closures, promesas, event loop, testing, FemCoders Club" />
      <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/quiz-javascript-entrevistas" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="FemCoders Club" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:title" content="Quiz JavaScript para entrevistas técnicas: 30 preguntas esenciales" />
      <meta property="og:description" content="Repasa JavaScript con 30 preguntas en tres niveles: fundamentos, closures, DOM, promesas, event loop y testing. Con explicaciones y guía descargable." />
      <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/quiz-javascript-entrevistas" />
      <meta property="og:image" content="https://www.femcodersclub.com/public-optimized/desktop/assets/javascript/fundamentos-javascript.webp" />
      <meta property="og:image:alt" content="Portada de los recursos sobre fundamentos de JavaScript de FemCoders Club" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Quiz JavaScript para entrevistas técnicas: 30 preguntas esenciales" />
      <meta name="twitter:description" content="30 preguntas, tres niveles y explicaciones para repasar JavaScript a tu ritmo. Incluye una guía de estudio descargable." />
      <meta name="twitter:image" content="https://www.femcodersclub.com/public-optimized/desktop/assets/javascript/fundamentos-javascript.webp" />
      <meta property="article:published_time" content="2026-11-07T09:00:00Z" />
      <meta property="article:author" content="FemCoders Club" />
      <meta property="article:section" content="Recursos" />
      <meta property="article:tag" content="JavaScript" />
      <meta property="article:tag" content="Quiz" />
    </Helmet>
    <PlantillaPost
      ruta="/recursos/js/quiz-javascript-entrevistas"
      titulo="Quiz JavaScript para entrevistas técnicas: 30 preguntas esenciales"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={57}
      entradilla={<>
        <p>Después de recorrer la serie de JavaScript, toca conectar las piezas. Este quiz reúne <strong>30 preguntas, de lo básico a lo avanzado</strong>, para practicar cómo razonas sobre el código y preparar conversaciones técnicas.</p>
        <p>Cada respuesta incluye una explicación. Encontrarás variables, arrays y DOM, pero también closures, promesas, módulos, rendimiento y testing. Puedes hacerlo a tu ritmo y volver a los artículos cuando necesites repasar.</p>
      </>}
    >
      <SeccionPost titulo="¿Qué encontrarás en este quiz?">
        <TablaPost descripcion="Niveles del quiz de JavaScript">
          <table>
            <thead><tr><th scope="col">Nivel</th><th scope="col">Preguntas</th><th scope="col">Temas clave</th></tr></thead>
            <tbody>
              <tr><th scope="row">Básico</th><td>10</td><td>Variables, tipos, comparaciones, funciones, arrays y selección del DOM</td></tr>
              <tr><th scope="row">Intermedio</th><td>10</td><td>Scope, closures, this, copias, async/await, fetch, eventos y colecciones</td></tr>
              <tr><th scope="row">Avanzado</th><td>10</td><td>Event loop, concurrencia, cancelación, prototipos, módulos, rendimiento y testing</td></tr>
            </tbody>
          </table>
        </TablaPost>
        <p>Los niveles ordenan los conceptos por dificultad; no equivalen a categorías profesionales ni a años de experiencia.</p>
        <BotonGuia />
        <p>La guía contiene las preguntas, las respuestas y sus explicaciones para repasar fuera de la web.</p>
      </SeccionPost>
      <SeccionPost titulo="Cómo aprovechar al máximo este quiz">
        <h3>Antes de empezar</h3>
        <ul><li>Reserva el tiempo que te venga bien: no hay cuenta atrás.</li><li>Prueba primero sin consultar documentación si te ayuda a identificar qué recuerdas.</li><li>Lee el contexto de cada ejemplo: algunas preguntas se refieren al navegador.</li></ul>
        <h3>Durante el quiz</h3>
        <ul><li>Algunas preguntas tienen varias respuestas correctas; selecciona todas las que correspondan.</li><li>Explica en voz alta por qué eliges cada opción.</li><li>Lee la explicación y prueba los ejemplos en la consola para explorar qué cambia.</li></ul>
        <h3>Después del quiz</h3>
        <ul><li>Consulta el desglose por nivel para elegir por dónde seguir.</li><li>Anota los conceptos que quieras practicar con un pequeño proyecto.</li><li>Repite cuando te resulte útil y compara tu razonamiento.</li></ul>
      </SeccionPost>
      <SeccionPost titulo="El quiz interactivo">
        <p>Selecciona tu respuesta o respuestas y pulsa «Comprobar respuesta». Después podrás leer la explicación y pasar a la siguiente pregunta.</p>
        <NotaPost titulo="Practica también cómo lo cuentas"><p>Además del resultado, explica el contexto y tus decisiones. Por ejemplo: qué ocurre si una petición falla o por qué una copia superficial comparte objetos anidados.</p></NotaPost>
        <Quiz title="Quiz JavaScript · Entrevistas técnicas" questions={preguntasJavaScriptEntrevistas} showLevelIndicator shuffleQuestions={false} passPercentage={70} extraResultados={<div className="quiz__extra"><BotonGuia /></div>} />
      </SeccionPost>
      <SeccionPost titulo="Interpretando tu puntuación">
        <p>La puntuación sirve para orientar el repaso. Un quiz no mide por sí solo tu capacidad para desarrollar un proyecto ni predice el resultado de una entrevista.</p>
        <TarjetasPost titulo="Ideas para tu siguiente paso" columnas={4} tarjetas={[
          { titulo: "90–100 %", texto: "Prueba variantes de los ejemplos y explica sus diferencias." },
          { titulo: "70–89 %", texto: "Vuelve a las preguntas que te generaron dudas y reproduce los casos." },
          { titulo: "50–69 %", texto: "Elige un tema por nivel y conviértelo en un ejercicio pequeño." },
          { titulo: "Menos de 50 %", texto: "Puedes empezar por fundamentos y avanzar a tu ritmo con la serie." },
        ]} />
      </SeccionPost>
      <SeccionPost titulo="Recursos para seguir aprendiendo">
        <TarjetasPost titulo="Posts de FemCoders Club" tarjetas={[
          { titulo: "Fundamentos de JavaScript", texto: "Repasa tipos, variables y cómo funciona el lenguaje.", enlace: "/recursos/js/fundamentos-javascript-profundos", icono: <BookOpen aria-hidden="true" /> },
          { titulo: "Closures, scope y context", texto: "Explora el alcance léxico y el valor de this.", enlace: "/recursos/js/closures-scope-context", icono: <BookOpen aria-hidden="true" /> },
          { titulo: "Event Loop", texto: "Sigue el orden de ejecución de tareas y microtareas.", enlace: "/recursos/js/event-loop-javascript", icono: <BookOpen aria-hidden="true" /> },
          { titulo: "Manipulación del DOM", texto: "Practica eventos y actualizaciones de la interfaz.", enlace: "/recursos/js/manipulacion-dom-ingeniera", icono: <BookOpen aria-hidden="true" /> },
          { titulo: "Módulos y arquitectura", texto: "Organiza responsabilidades y carga módulos bajo demanda.", enlace: "/recursos/js/modulos-arquitectura-escalable", icono: <BookOpen aria-hidden="true" /> },
          { titulo: "Testing sin frameworks", texto: "Practica assertions, spies y control del tiempo.", enlace: "/recursos/js/testing-javascript-sin-frameworks", icono: <BookOpen aria-hidden="true" /> },
        ]} />
        <TarjetasPost titulo="Documentación para contrastar los ejemplos" tarjetas={[
          { titulo: "Closures en MDN", texto: "Entorno léxico y variables capturadas.", enlace: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures", icono: <Globe aria-hidden="true" /> },
          { titulo: "Promise.all en MDN", texto: "Orden de resultados y comportamiento ante rechazos.", enlace: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all", icono: <Globe aria-hidden="true" /> },
          { titulo: "Fetch en MDN", texto: "Estados HTTP, respuestas y cancelación de peticiones.", enlace: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch", icono: <Globe aria-hidden="true" /> },
          { titulo: "Microtareas en MDN", texto: "Cuándo se procesan respecto a otras tareas del navegador.", enlace: "https://developer.mozilla.org/en-US/docs/Web/API/Window/queueMicrotask", icono: <Globe aria-hidden="true" /> },
        ]} />
      </SeccionPost>
      <SeccionPost titulo="Más allá de elegir una respuesta">
        <ListaMarcadaPost titulo="Preguntas para practicar en voz alta" tipo="bien">
          <li>¿Cómo evitarías que una búsqueda antigua sobrescriba el resultado más reciente?</li>
          <li>¿Cuándo esperarías operaciones en serie y cuándo iniciarías varias conjuntamente?</li>
          <li>¿Cómo localizarías una actualización del DOM que hace que la interfaz se ralentice?</li>
          <li>¿Qué separarías de una función para probarla sin hacer peticiones reales?</li>
        </ListaMarcadaPost>
        <ListaMarcadaPost titulo="Detalles que conviene revisar" tipo="mal">
          <li><strong>Copias superficiales:</strong> comprueba si sigues compartiendo objetos anidados.</li>
          <li><strong>Errores asíncronos:</strong> diferencia un estado HTTP de un rechazo y gestiona ambos.</li>
          <li><strong>Contexto de ejecución:</strong> especifica si hablas del navegador, de un módulo o de otro entorno.</li>
          <li><strong>Rendimiento:</strong> mide el caso antes de decidir qué optimizar.</li>
        </ListaMarcadaPost>
      </SeccionPost>
      <SeccionPost titulo="Tu plan de estudio">
        <p>Adapta estas etapas a tu disponibilidad. Puedes dedicar más tiempo al tema que más te interese.</p>
        <PasosPost pasos={[
          { etiqueta: "Primera etapa", titulo: "Refuerza lo básico", puntos: ["Variables, tipos y comparaciones", "Funciones, arrays y desestructuración", "Selección de elementos del DOM"] },
          { etiqueta: "Segunda etapa", titulo: "Conecta los conceptos", puntos: ["Scope, closures y this", "Promesas, async/await y gestión de errores", "Eventos, colecciones y módulos"] },
          { etiqueta: "Tercera etapa", titulo: "Practica decisiones de diseño", puntos: ["Event loop, cancelación y carreras de red", "Prototipos, referencias y memoria", "Medición del rendimiento y pruebas deterministas"] },
        ]} />
        <TarjetasPost titulo="Para practicar con las manos" tarjetas={[
          { titulo: "Un contador con closure", texto: "Crea dos contadores y comprueba que su estado es independiente.", icono: <Hammer aria-hidden="true" /> },
          { titulo: "Un buscador asíncrono", texto: "Añade debounce, cancelación y control de resultados obsoletos.", icono: <Hammer aria-hidden="true" /> },
          { titulo: "Una lista interactiva", texto: "Usa delegación de clics y conserva el manejo de los controles con teclado.", icono: <Hammer aria-hidden="true" /> },
          { titulo: "Un cálculo con pruebas", texto: "Separa la lógica de la red y verifica casos límite y errores.", icono: <Hammer aria-hidden="true" /> },
        ]} />
      </SeccionPost>
      <SeccionPost titulo="Comparte tu experiencia">
        <p>¿Qué pregunta te ha hecho detenerte a pensar? Compartir tu razonamiento puede ayudar a otras personas de la comunidad que también estén practicando.</p>
        <TarjetasPost columnas={3} tarjetas={[
          { titulo: "En nuestro Slack", texto: "Comparte un ejemplo o una duda con la comunidad.", enlace: "https://communityinviter.com/apps/femcodersclub/femcoders-club", icono: <Users aria-hidden="true" /> },
          { titulo: "En redes sociales", texto: "Puedes compartir lo que has aprendido con #femCodersQuiz.", icono: <Share2 aria-hidden="true" /> },
          { titulo: "En los comentarios", texto: "Cuéntanos qué tema te gustaría seguir practicando.", icono: <MessageSquare aria-hidden="true" /> },
        ]} />
      </SeccionPost>
      <NotaPost titulo="Cada explicación cuenta"><p>No necesitas recordarlo todo de memoria. Practicar, consultar documentación y explicar tus decisiones también forman parte de aprender a programar.</p></NotaPost>
    </PlantillaPost>
  </>
);

export default PreguntasJavaScriptEntrevistas;
