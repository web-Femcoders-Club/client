import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaArrowRight,
  FaBook,
  FaBolt,
  FaChartBar,
  FaCheck,
  FaClock,
  FaCode,
  FaCogs,
  FaExclamationTriangle,
  FaGithub,
  FaGraduationCap,
  FaLightbulb,
  FaListOl,
  FaPlay,
  FaRocket,
  FaSlack,
  FaSync,
  FaTiktok,
  FaTimes,
  FaTools,
  FaTrafficLight
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const EventLoopJavaScript: React.FC = () => {
  const postId = 33;
  const publicationDate = "24 de enero de 2026";
  const currentUrl = "https://www.femcodersclub.com/recursos/js/event-loop-javascript";

  return (
    <article className="blog-post">
      <Helmet>
        <title>Event Loop en JavaScript: Cómo Funciona la Asincronía (Guía 2026) | femCoders Club</title>
        <meta
          name="description"
          content="Aprende cómo funciona el Event Loop en JavaScript: Call Stack, Task Queue, Microtasks vs Macrotasks, Promises, async/await y AbortController. Guía completa con ejemplos prácticos."
        />
        <meta
          name="keywords"
          content="event loop javascript, asincronía javascript, call stack, task queue, microtasks, macrotasks, promises, async await, AbortController, tutorial javascript español, femcoders club"
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Event Loop en JavaScript: Cómo Funciona la Asincronía | femCoders Club"
        />
        <meta
          property="og:description"
          content="Entiende por qué setTimeout con 0ms no se ejecuta inmediatamente. Domina el Event Loop, microtasks, macrotasks y código asíncrono en JavaScript."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/event-loop-javascript.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Event Loop en JavaScript - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Domina la asincronía en JavaScript: Event Loop, Promises, async/await, microtasks y macrotasks explicados con ejemplos reales."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/event-loop-javascript.webp"
        />

        <meta property="article:published_time" content="2026-01-24T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Event Loop" />
        <meta property="article:tag" content="Asincronía" />
        <meta property="article:tag" content="Programación" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/assets/javascript/event-loop-javascript.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/assets/javascript/event-loop-javascript.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/assets/javascript/event-loop-javascript.webp"
            alt="Event Loop en JavaScript - Cómo Funciona la Asincronía"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Event Loop en JavaScript
        <br />
        Cómo Funciona la Asincronía
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

      <section aria-labelledby="intro-section">
        <h2 id="intro-section" className="visually-hidden">Introducción</h2>
        <p className="intro-text">
          <strong>¿Por qué tu setTimeout se ejecuta después aunque pongas 0 milisegundos?</strong> Si alguna vez
          te has preguntado por qué este código no imprime en el orden que esperas, necesitas entender el
          Event Loop de JavaScript.
        </p>

        <div className="code-block bg3">
          <pre>
{`console.log('Primero');
setTimeout(() => console.log('Segundo'), 0);
console.log('Tercero');

// Resultado: Primero, Tercero, Segundo`}
          </pre>
        </div>

        <p className="intro-text">
          Al final de este artículo no solo entenderás este comportamiento, sino que sabrás aplicarlo en
          proyectos reales. Vamos a desentrañar los misterios de la asincronía: desde el Call Stack hasta
          las diferencias entre microtasks y macrotasks, pasando por promesas, async/await y cómo cancelar
          peticiones HTTP.
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "20px",
          borderRadius: "var(--radius-md)",
          marginTop: "20px",
          borderLeft: "4px solid var(--color-secondary)"
        }}>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>
            <FaLightbulb style={{ marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            <strong>Para seguir este tutorial de forma práctica</strong>, hemos creado un{" "}
            <a
              href="https://github.com/femcodersclub/API-Resilience-Wrapper"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              proyecto completo en GitHub
            </a>
            {" "}que ilustra todos estos conceptos en acción. Es un sistema de gestión de peticiones API
            con reintentos, rate limiting y monitoreo en tiempo real.
          </p>
        </div>
      </section>

      <section aria-labelledby="event-loop-section">
        <div className="highlight-box">
          <h2 id="event-loop-section">
            <FaCogs style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            1. El Event Loop: El Corazón de JavaScript Asíncrono
          </h2>

          <h3>¿Qué problema resuelve el Event Loop?</h3>
          <p>
            JavaScript es <strong>single-threaded</strong> (un solo hilo de ejecución). Esto significa que solo
            puede hacer una cosa a la vez. Entonces, ¿cómo puede descargar archivos, hacer peticiones HTTP y
            responder a clics del usuario simultáneamente?
          </p>
          <p>
            La respuesta es el <strong>Event Loop</strong>: un mecanismo que permite a JavaScript delegar
            operaciones y continuar ejecutando código mientras espera respuestas.
          </p>
          <br />
          <h3>Los tres pilares: Call Stack, Task Queue y Event Loop</h3>

          <h4>Call Stack (Pila de Llamadas)</h4>
          <p>
            Es donde JavaScript registra qué función está ejecutando. Funciona como una pila de platos:
            el último que entra es el primero que sale (LIFO).
          </p>

          <h4>Task Queue (Cola de Tareas)</h4>
          <p>
            Aquí esperan los callbacks de operaciones asíncronas (setTimeout, eventos, etc.) hasta que el
            Call Stack esté vacío.
          </p>

          <h4>Event Loop</h4>
          <p>
            El vigilante que continuamente pregunta: "¿El stack está vacío? ¿Hay tareas esperando?"
            Si ambas respuestas son sí, mueve la primera tarea de la queue al stack.
          </p>
          <br />
          <h3>Ejemplo visual del flujo</h3>
          <div className="code-block bg3">
            <pre>
{`console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');

// Salida: A, C, B`}
            </pre>
          </div>

          <h4>¿Qué está pasando?</h4>
          <ol>
            <li><code>console.log('A')</code> se ejecuta (síncrono) - imprime "A"</li>
            <li><code>setTimeout</code> envía su callback a la Task Queue y continúa</li>
            <li><code>console.log('C')</code> se ejecuta (síncrono) - imprime "C"</li>
            <li>Stack vacío - Event Loop mueve el callback de setTimeout al stack - imprime "B"</li>
          </ol>
        </div>
      </section>

      <section aria-labelledby="microtasks-section">
        <div className="highlight-box">
          <h2 id="microtasks-section">
            <FaBolt style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            2. Microtasks vs Macrotasks: La Batalla por la Prioridad
          </h2>

          <p>
            No todas las tareas asíncronas son iguales. JavaScript tiene <strong>dos colas con diferentes
            prioridades</strong>:
          </p>
          <br />
          <h3>Macrotasks (baja prioridad)</h3>
          <ul>
            <li>setTimeout / setInterval</li>
            <li>Eventos del DOM</li>
            <li>Operaciones de I/O</li>
          </ul>
          <br />
          <h3>Microtasks (alta prioridad)</h3>
          <ul>
            <li>Promise.then() / .catch() / .finally()</li>
            <li>async/await</li>
            <li>queueMicrotask()</li>
          </ul>

          <div style={{
            backgroundColor: "rgba(234, 79, 51, 0.1)",
            padding: "15px",
            borderRadius: "var(--radius-sm)",
            marginTop: "20px",
            borderLeft: "3px solid var(--color-primary)"
          }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>
              <FaExclamationTriangle style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              La regla de oro: Las microtasks siempre se ejecutan antes que las macrotasks.
            </p>
          </div>

          <div className="code-block bg3" style={{ marginTop: "20px" }}>
            <pre>
{`console.log('1');
setTimeout(() => console.log('4'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('2');

// Salida: 1, 2, 3, 4`}
            </pre>
          </div>
          <br />
          <h3>¿Por qué importa esto?</h3>
          <p>Entender esta diferencia es crucial para:</p>
          <ul>
            <li>Optimizar el rendimiento de tu aplicación</li>
            <li>Evitar bugs sutiles en código asíncrono</li>
            <li>Escribir código predecible que se ejecute en el orden correcto</li>
          </ul>

          <div style={{
            backgroundColor: "rgba(71, 55, 187, 0.1)",
            padding: "15px",
            borderRadius: "var(--radius-sm)",
            marginTop: "15px",
            borderLeft: "3px solid var(--color-secondary)"
          }}>
            <p style={{ margin: 0 }}>
              <strong>Caso real:</strong> Imagina que estás validando un formulario y enviándolo al servidor.
              Si usas un setTimeout para la validación y una Promise para el envío, la validación podría
              ejecutarse DESPUÉS del envío. Usar microtasks garantiza que la validación ocurra primero.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="evolution-section">
        <div className="highlight-box">
          <h2 id="evolution-section">
            <FaRocket style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            3. Callbacks, Promesas y Async/Await: La Evolución del Código Asíncrono
          </h2>
          <br />
          <h3>El problema original: Callback Hell</h3>
          <p>Antes de las promesas, teníamos que anidar callbacks dentro de callbacks:</p>

          <div className="code-block bg3">
            <pre>
{`obtenerUsuario(id, (error, usuario) => {
  if (error) return manejarError(error);
  obtenerPosts(usuario.id, (error, posts) => {
    if (error) return manejarError(error);
    // ... y así sucesivamente (pirámide de la perdición)
  });
});`}
            </pre>
          </div>

          <p><strong>Problemas:</strong> código difícil de leer, mantener y debuggear.</p>
          <br />
          <h3>La solución: Promesas</h3>
          <p>Las promesas nos permiten encadenar operaciones:</p>

          <div className="code-block bg3">
            <pre>
{`obtenerUsuario(id)
  .then(usuario => obtenerPosts(usuario.id))
  .then(posts => procesarPosts(posts))
  .catch(manejarError);`}
            </pre>
          </div>
          <br />
          <h3>La mejor solución: Async/Await</h3>
          <p>Hace que el código asíncrono se vea como código síncrono:</p>

          <div className="code-block bg3">
            <pre>
{`async function cargarDatos(id) {
  try {
    const usuario = await obtenerUsuario(id);
    const posts = await obtenerPosts(usuario.id);
    return procesarPosts(posts);
  } catch (error) {
    manejarError(error);
  }
}`}
            </pre>
          </div>
          <br />
          <h3>¿Cuál usar en 2026?</h3>
          <ul>
            <li><strong>Async/Await</strong> para flujos secuenciales (más legible)</li>
            <li><strong>Promesas directas</strong> cuando necesitas composición (Promise.all, etc.)</li>
            <li><strong>Evita callbacks</strong> salvo que trabajes con APIs legacy</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="promise-methods-section">
        <div className="highlight-box">
          <h2 id="promise-methods-section">
            <FaCode style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            4. Promise.all(), Promise.race() y Promise.allSettled()
          </h2>

          <p>
            Estas herramientas son esenciales para manejar múltiples operaciones asíncronas de forma eficiente.
          </p>
          <br />
          <h3>Promise.all() - Todo o nada</h3>
          <p>
            Ejecuta múltiples promesas en paralelo. <strong>Si una falla, todas fallan.</strong>
          </p>
          <p>
            <em>Cuándo usarlo:</em> Cuando necesitas que TODAS las operaciones tengan éxito (cargar recursos
            críticos, inicializar múltiples servicios).
          </p>

          <div className="code-block bg3">
            <pre>
{`const [usuario, config, permisos] = await Promise.all([
  api.get('/usuario'),
  api.get('/config'),
  api.get('/permisos')
]);
// Si cualquiera falla, todo falla`}
            </pre>
          </div>
          <br />
          <h3>Promise.allSettled() - Espera a todas</h3>
          <p>
            Espera a que todas terminen, <strong>sin importar si fallan o no.</strong>
          </p>
          <p>
            <em>Cuándo usarlo:</em> Cuando algunas operaciones pueden fallar pero quieres continuar
            (analytics, recursos opcionales).
          </p>

          <div className="code-block bg3">
            <pre>
{`const resultados = await Promise.allSettled([
  api.get('/datos-criticos'),
  api.get('/analytics'),  // puede fallar
  api.get('/ads')         // puede fallar
]);
// Siempre obtienes resultados de las tres`}
            </pre>
          </div>
          <br />
          <h3>Promise.race() - El primero gana</h3>
          <p>
            Retorna la primera promesa que se complete (éxito o fallo).
          </p>
          <p>
            <em>Cuándo usarlo:</em> Timeouts personalizados, consultar servidores redundantes, obtener datos
            de la fuente más rápida.
          </p>

          <div className="code-block bg3">
            <pre>
{`const datos = await Promise.race([
  api.get('https://servidor-eu.com/datos'),
  api.get('https://servidor-us.com/datos'),
  api.get('https://servidor-asia.com/datos')
]);
// Usas el servidor más rápido automáticamente`}
            </pre>
          </div>
          <br />
          <h3>Promise.any() - Primera exitosa gana</h3>
          <p>
            Retorna la primera promesa exitosa. <strong>Solo falla si TODAS fallan.</strong>
          </p>
          <p>
            <em>Cuándo usarlo:</em> Servicios con fallback, APIs con múltiples proveedores.
          </p>
        </div>
      </section>

      <section aria-labelledby="abort-controller-section">
        <div className="highlight-box">
          <h2 id="abort-controller-section">
            <FaTimes style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            5. AbortController: Cancelando Peticiones HTTP
          </h2>

          <p>Una de las funciones más útiles y menos conocidas de JavaScript moderno.</p>
          <br />
          <h3>¿Por qué necesitas cancelar peticiones?</h3>
          <p>
            <strong>Escenario real:</strong> El usuario escribe en un buscador. Cada tecla dispara una petición.
            Escribe "JavaScript" y se generan 10 peticiones. Solo te interesa la última.
          </p>
          <ul>
            <li><strong>Sin cancelación:</strong> 10 peticiones al servidor, 9 son inútiles.</li>
            <li><strong>Con cancelación:</strong> Solo 1 petición útil.</li>
          </ul>
          <br />
          <h3>Cómo usar AbortController</h3>

          <div className="code-block bg3">
            <pre>
{`const controller = new AbortController();

fetch('/api/buscar?q=javascript', {
  signal: controller.signal
})
.then(response => response.json())
.catch(error => {
  if (error.name === 'AbortError') {
    console.log('Búsqueda cancelada');
  }
});

// Cancelar la petición
controller.abort();`}
            </pre>
          </div>
          <br />
          <h3>Caso de uso: Búsqueda con debounce</h3>

          <div className="code-block bg3">
            <pre>
{`let controllerActual = null;

function buscar(query) {
  // Cancelar búsqueda anterior
  if (controllerActual) {
    controllerActual.abort();
  }

  controllerActual = new AbortController();

  return fetch(\`/api/buscar?q=\${query}\`, {
    signal: controllerActual.signal
  });
}`}
            </pre>
          </div>
          <br />
          <h3>Beneficios:</h3>
          <ul>
            <li><FaBolt style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Ahorra ancho de banda</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Reduce carga del servidor</li>
            <li><FaLightbulb style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Mejora experiencia de usuario</li>
            <li><FaClock style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Reduce costos en APIs de pago</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="try-catch-section">
        <div className="highlight-box">
          <h2 id="try-catch-section">
            <FaExclamationTriangle style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            6. Try/Catch en Contextos Asíncronos
          </h2>

          <p>El manejo de errores en código asíncrono tiene sus particularidades.</p>
          <br />
          <h3>
            <FaTimes style={{ display: 'inline-block', marginRight: '8px', color: '#e74c3c', verticalAlign: 'middle' }} />
            Error común: Try/Catch con callbacks no funciona
          </h3>

          <div className="code-block bg3">
            <pre>
{`try {
  setTimeout(() => {
    throw new Error('Boom!');
  }, 100);
} catch (error) {
  // ¡Esto NUNCA se ejecuta!
}`}
            </pre>
          </div>

          <p><strong>¿Por qué?</strong> Cuando se ejecuta el callback, el try/catch ya terminó.</p>
          <br />
          <h3>
            <FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} />
            Try/Catch con Async/Await funciona perfectamente
          </h3>

          <div className="code-block bg3">
            <pre>
{`async function obtenerDatos() {
  try {
    const datos = await fetch('/api/datos');
    return await datos.json();
  } catch (error) {
    console.error('Error:', error);
    // Manejo apropiado del error
  }
}`}
            </pre>
          </div>
          <br />
          <h3>Manejo granular de errores</h3>

          <div className="code-block bg3">
            <pre>
{`async function cargarDashboard(userId) {
  try {
    // Datos críticos
    const usuario = await api.get(\`/usuarios/\${userId}\`);

    // Datos opcionales - manejo independiente
    let posts = [];
    try {
      posts = await api.get(\`/usuarios/\${userId}/posts\`);
    } catch {
      console.warn('Posts no disponibles');
    }

    return { usuario, posts };

  } catch (error) {
    if (error.status === 404) {
      throw new Error('Usuario no encontrado');
    }
    throw error;
  }
}`}
            </pre>
          </div>
          <br />
          <h3>Tipos de errores que debes manejar</h3>

          <div className="table-container">
            <table className="framework-comparison-table">
              <thead>
                <tr>
                  <th>Error</th>
                  <th>Descripción</th>
                  <th>Manejo recomendado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>TimeoutError</code></td>
                  <td>La petición tardó demasiado</td>
                  <td>Reintentar o mostrar mensaje de conexión lenta</td>
                </tr>
                <tr>
                  <td><code>AbortError</code></td>
                  <td>La petición fue cancelada</td>
                  <td>No es un error real, simplemente ignorar</td>
                </tr>
                <tr>
                  <td><code>NetworkError</code></td>
                  <td>Sin conexión a internet</td>
                  <td>Mostrar mensaje de conexión y opción de reintentar</td>
                </tr>
                <tr>
                  <td>HTTP 429</td>
                  <td>Demasiadas peticiones (rate limit)</td>
                  <td>Esperar y reintentar automáticamente</td>
                </tr>
                <tr>
                  <td>HTTP 5xx</td>
                  <td>Error del servidor</td>
                  <td>Reintentar con backoff exponencial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="project-section">
        <div className="highlight-box">
          <h2 id="project-section">
            <FaGithub style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            7. Proyecto Práctico: API Resilience Wrapper
          </h2>

          <p>
            Todos los conceptos de este post están implementados en nuestro{" "}
            <a
              href="https://github.com/femcodersclub/API-Resilience-Wrapper"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              API Resilience Wrapper
            </a>
            , un sistema real de gestión de peticiones HTTP que puedes explorar y usar.
          </p>
          <br />
          <h3>¿Qué hace?</h3>
          <p>Un wrapper inteligente para peticiones HTTP con:</p>
          <ul>
            <li><FaSync style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Reintentos automáticos</li>
            <li><FaTrafficLight style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Rate limiting (control de tasa)</li>
            <li><FaListOl style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Cola de prioridades</li>
            <li><FaClock style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Timeouts y cancelación</li>
            <li><FaChartBar style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Dashboard en tiempo real</li>
          </ul>
          <br />
          <h3>Cómo cada archivo ilustra los conceptos</h3>

          <div style={{
            display: 'grid',
            gap: '15px',
            marginTop: '15px'
          }}>
            <div style={{
              backgroundColor: "rgba(234, 79, 51, 0.08)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              borderLeft: "3px solid var(--color-primary)"
            }}>
              <p style={{ margin: 0 }}>
                <strong>RetryManager.js</strong> <FaArrowRight style={{ margin: '0 8px', verticalAlign: 'middle' }} /> Async/await + Try/Catch
              </p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem' }}>
                Sistema de reintentos con backoff exponencial. Ejemplo perfecto de manejo de errores asíncronos.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(71, 55, 187, 0.08)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              borderLeft: "3px solid var(--color-secondary)"
            }}>
              <p style={{ margin: 0 }}>
                <strong>RateLimiter.js</strong> <FaArrowRight style={{ margin: '0 8px', verticalAlign: 'middle' }} /> Event Loop + Microtasks vs Macrotasks
              </p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem' }}>
                Limita peticiones (10/segundo) usando colas. Usa <code>setTimeout(..., 0)</code> para ceder control al Event Loop.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(234, 79, 51, 0.08)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              borderLeft: "3px solid var(--color-primary)"
            }}>
              <p style={{ margin: 0 }}>
                <strong>TimeoutController.js</strong> <FaArrowRight style={{ margin: '0 8px', verticalAlign: 'middle' }} /> AbortController + Promise.race()
              </p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem' }}>
                Cancela peticiones automáticamente. Usa <code>Promise.race()</code> para competir entre la petición y el timeout.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(71, 55, 187, 0.08)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              borderLeft: "3px solid var(--color-secondary)"
            }}>
              <p style={{ margin: 0 }}>
                <strong>RequestQueue.js</strong> <FaArrowRight style={{ margin: '0 8px', verticalAlign: 'middle' }} /> Task Queue personalizada
              </p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem' }}>
                Cola con límite de concurrencia (5 peticiones simultáneas). Como la Task Queue de JavaScript pero con prioridades.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(234, 79, 51, 0.08)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              borderLeft: "3px solid var(--color-primary)"
            }}>
              <p style={{ margin: 0 }}>
                <strong>ApiWrapper.js</strong> <FaArrowRight style={{ margin: '0 8px', verticalAlign: 'middle' }} /> Promise.all/race/allSettled/any
              </p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem' }}>
                Integra todo y demuestra cuándo usar cada método de Promise en casos reales.
              </p>
            </div>
          </div>
          <br />
          <h3>
            <FaPlay style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            Dashboard Interactivo
          </h3>
          <p>Experimenta con botones para:</p>
          <ul>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> Promise.all / allSettled / race / any</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> Forzar reintentos y timeouts</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> Saturar rate limit</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> Ver métricas en tiempo real</li>
          </ul>
          <br />
          <h3>Instalación rápida</h3>
          <div className="code-block bg3">
            <pre>
{`git clone https://github.com/femcodersclub/API-Resilience-Wrapper.git
cd API-Resilience-Wrapper
npm install
npm run serve`}
            </pre>
          </div>
          <p>
            Abre <code>http://localhost:3000/dashboard</code> y experimenta con cada concepto del post en acción.
          </p>
          <br />
          <h3>
            <FaGraduationCap style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            Por qué vale la pena explorarlo
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
            marginTop: '15px'
          }}>
            <div style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-secondary)' }}>Para principiantes</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Conceptos abstractos (Event Loop, microtasks) aplicados en código real.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(234, 79, 51, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-primary)' }}>Para nivel intermedio</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Patrones de arquitectura que usan empresas reales.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-secondary)' }}>Para avanzadas</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Código production-ready que puedes usar en tus proyectos.
              </p>
            </div>
          </div>
          <br />
          <h3>Orden de estudio recomendado</h3>
          <ol>
            <li><code>examples/usage.js</code> - Ejemplos comentados</li>
            <li><code>RetryManager.js</code> - El más simple</li>
            <li><code>TimeoutController.js</code> - AbortController en acción</li>
            <li><code>RateLimiter.js</code> - Event Loop aplicado</li>
            <li><code>ApiWrapper.js</code> - Integración completa</li>
          </ol>
          <p style={{ fontStyle: 'italic' }}>
            Cada archivo tiene comentarios extensos y referencias a los conceptos de este post.
          </p>

          <div style={{ textAlign: 'center', marginTop: '25px' }}>
            <a
              href="https://github.com/femcodersclub/API-Resilience-Wrapper"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                padding: '12px 25px',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'var(--transition-fast)'
              }}
            >
              <FaGithub /> Ver proyecto en GitHub
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="best-practices-section">
        <div className="highlight-box">
          <h2 id="best-practices-section">
            <FaLightbulb style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            Conclusiones y Mejores Prácticas
          </h2>
          <br />
          <h3>Lo que debes recordar</h3>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Event Loop:</strong> JavaScript delega operaciones asíncronas y continúa ejecutando.
              Las tareas solo vuelven al Call Stack cuando este está vacío.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Microtasks {">"} Macrotasks:</strong> Las promesas (microtasks) siempre tienen prioridad
              sobre setTimeout (macrotasks).
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Usa Async/Await:</strong> Es la forma más legible y mantenible de escribir código
              asíncrono en 2026.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Combina Promesas sabiamente:</strong>
              <ul style={{ marginTop: '8px', marginLeft: '30px' }}>
                <li>Promise.all() cuando todas deben tener éxito</li>
                <li>Promise.allSettled() cuando algunas pueden fallar</li>
                <li>Promise.race() para timeouts o redundancia</li>
                <li>Promise.any() para fallback</li>
              </ul>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Cancela peticiones innecesarias:</strong> AbortController es tu amigo. Úsalo
              especialmente en búsquedas y navegación.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Maneja errores específicamente:</strong> Diferentes tipos de errores requieren
              diferentes estrategias (reintentar, fallar, ignorar).
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="resources-section">
        <div className="highlight-box">
          <h2 id="resources-section">
            <FaBook style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            Recursos Adicionales
          </h2>
          <br />
          <h3>Para profundizar</h3>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=8aGhZQkoFbQ"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Jake Archibald - In The Loop (Video imprescindible)
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN - Concurrency model and Event Loop
              </a>
            </li>
            <li>
              <Link to="/recursos/js/fundamentos-javascript-profundos" className="highlight-link">
                Fundamentos de JavaScript que Realmente Importan (Post anterior)
              </Link>
            </li>
          </ul>
          <br />
          <h3>Únete a la comunidad</h3>
          <p>
            ¿Tienes dudas sobre asincronía en JavaScript? ¿Quieres compartir tus proyectos? Únete a
            FemCoders Club, una comunidad de más de 1,300 mujeres en tecnología donde aprendemos y
            crecemos juntas.
          </p>
        </div>
      </section>

      <section aria-labelledby="mentorship-section">
        <div className="highlight-box">
          <h2 id="mentorship-section">
            <FaTools style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            ¿Necesitas Apoyo Personalizado?
          </h2>

          <p>
            Si estos conceptos te resultan desafiantes o quieres profundizar más con orientación personalizada,
            en femCoders Club ofrecemos{" "}
            <Link to="/login" className="highlight-link">
              mentorías individuales
            </Link>
            {" "}donde podemos trabajar juntas en tus dudas específicas.
            {" "}(Requiere <Link to="/register" className="highlight-link">registro gratuito</Link>)
          </p>
        </div>
      </section>

      <div className="author-info">
        <p>
          Escrito por: <strong>femCoders Club</strong>
        </p>
        <p>Comunidad de mujeres en tecnología</p>
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
    </article>
  );
};

export default EventLoopJavaScript;
