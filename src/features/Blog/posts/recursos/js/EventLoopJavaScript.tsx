import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ListaMarcadaPost,
  NotaPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const EventLoopJavaScript: React.FC = () => (
  <>
      <Helmet>
        <title>Event Loop en JavaScript: cómo funciona la asincronía (Guía 2026) | FemCoders Club</title>
        <meta
          name="description"
          content="Aprende cómo funciona el Event Loop en JavaScript: Call Stack, Task Queue, Microtasks vs Macrotasks, Promises, async/await y AbortController. Guía completa con ejemplos prácticos."
        />
        <meta
          name="keywords"
          content="event loop javascript, asincronía javascript, call stack, task queue, microtasks, macrotasks, promises, async await, AbortController, tutorial javascript español, femcoders club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/event-loop-javascript" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Event Loop en JavaScript: cómo funciona la asincronía | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Entiende por qué setTimeout con 0ms no se ejecuta inmediatamente. Domina el Event Loop, microtasks, macrotasks y código asíncrono en JavaScript."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/event-loop-javascript" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/event-loop-javascript.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Event Loop en JavaScript - FemCoders Club"
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

    <PlantillaPost
      ruta="/recursos/js/event-loop-javascript"
      titulo="Event Loop en JavaScript: cómo funciona la asincronía"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={33}
      entradilla={
        <p>
          <strong>
            ¿Por qué tu setTimeout se ejecuta después aunque pongas 0
            milisegundos?
          </strong>{" "}
          Si alguna vez te has preguntado por qué este código no imprime en el
          orden que esperas, necesitas entender el Event Loop de JavaScript.
        </p>
      }
    >
      <CodigoPost lenguaje="JavaScript">{`console.log('Primero');
setTimeout(() => console.log('Segundo'), 0);
console.log('Tercero');

// Resultado: Primero, Tercero, Segundo`}</CodigoPost>

      <p>
        Al final de este artículo no solo entenderás este comportamiento, sino
        que sabrás aplicarlo en proyectos reales. Vamos a desentrañar los
        misterios de la asincronía: desde el Call Stack hasta las diferencias
        entre microtasks y macrotasks, pasando por promesas, async/await y cómo
        cancelar peticiones HTTP.
      </p>

      <NotaPost titulo="Para seguir este tutorial de forma práctica">
        <p>
          Hemos creado un{" "}
          <a
            href="https://github.com/femcodersclub/API-Resilience-Wrapper"
            target="_blank"
            rel="noopener noreferrer"
          >
            proyecto completo en GitHub
          </a>{" "}
          que ilustra todos estos conceptos en acción. Es un sistema de gestión
          de peticiones API con reintentos, rate limiting y monitorización en
          tiempo real.
        </p>
      </NotaPost>

      <SeccionPost titulo="1. El Event Loop: el corazón de JavaScript asíncrono">
        <h3>¿Qué problema resuelve el Event Loop?</h3>
        <p>
          JavaScript es <strong>single-threaded</strong> (un solo hilo de
          ejecución). Esto significa que solo puede hacer una cosa a la vez.
          Entonces, ¿cómo puede descargar archivos, hacer peticiones HTTP y
          responder a clics del usuario simultáneamente?
        </p>
        <p>
          La respuesta es el <strong>Event Loop</strong>: un mecanismo que
          permite a JavaScript delegar operaciones y continuar ejecutando código
          mientras espera respuestas.
        </p>

        <h3>Los tres pilares: Call Stack, Task Queue y Event Loop</h3>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Call Stack (pila de llamadas)",
              texto:
                "Es donde JavaScript registra qué función está ejecutando. Funciona como una pila de platos: el último que entra es el primero que sale (LIFO).",
            },
            {
              titulo: "Task Queue (cola de tareas)",
              texto:
                "Aquí esperan los callbacks de operaciones asíncronas (setTimeout, eventos, etc.) hasta que el Call Stack esté vacío.",
            },
            {
              titulo: "Event Loop",
              texto:
                "El vigilante que continuamente pregunta: «¿El stack está vacío? ¿Hay tareas esperando?». Si ambas respuestas son sí, mueve la primera tarea de la queue al stack.",
            },
          ]}
        />

        <h3>Ejemplo visual del flujo</h3>
        <CodigoPost lenguaje="JavaScript">{`console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');

// Salida: A, C, B`}</CodigoPost>

        <p>
          <strong>¿Qué está pasando?</strong>
        </p>
        <ol>
          <li>
            <code>console.log('A')</code> se ejecuta (síncrono): imprime «A».
          </li>
          <li>
            <code>setTimeout</code> envía su callback a la Task Queue y
            continúa.
          </li>
          <li>
            <code>console.log('C')</code> se ejecuta (síncrono): imprime «C».
          </li>
          <li>
            Stack vacío: el Event Loop mueve el callback de setTimeout al stack
            e imprime «B».
          </li>
        </ol>
      </SeccionPost>

      <SeccionPost titulo="2. Microtasks vs. macrotasks: la batalla por la prioridad">
        <p>
          No todas las tareas asíncronas son iguales. JavaScript tiene{" "}
          <strong>dos colas con diferentes prioridades</strong>:
        </p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Macrotasks (baja prioridad)",
              texto: (
                <ul>
                  <li>setTimeout / setInterval</li>
                  <li>Eventos del DOM</li>
                  <li>Operaciones de I/O</li>
                </ul>
              ),
            },
            {
              titulo: "Microtasks (alta prioridad)",
              texto: (
                <ul>
                  <li>Promise.then() / .catch() / .finally()</li>
                  <li>async/await</li>
                  <li>queueMicrotask()</li>
                </ul>
              ),
            },
          ]}
        />

        <NotaPost titulo="La regla de oro">
          <p>Las microtasks siempre se ejecutan antes que las macrotasks.</p>
        </NotaPost>

        <CodigoPost lenguaje="JavaScript">{`console.log('1');
setTimeout(() => console.log('4'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('2');

// Salida: 1, 2, 3, 4`}</CodigoPost>

        <h3>¿Por qué importa esto?</h3>
        <p>Entender esta diferencia es crucial para:</p>
        <ul>
          <li>Optimizar el rendimiento de tu aplicación.</li>
          <li>Evitar bugs sutiles en código asíncrono.</li>
          <li>Escribir código predecible que se ejecute en el orden correcto.</li>
        </ul>

        <NotaPost titulo="Caso real">
          <p>
            Imagina que estás validando un formulario y enviándolo al servidor.
            Si usas un setTimeout para la validación y una Promise para el
            envío, la validación podría ejecutarse <strong>después</strong> del
            envío. Usar microtasks garantiza que la validación ocurra primero.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="3. Callbacks, promesas y async/await: la evolución del código asíncrono">
        <h3>El problema original: callback hell</h3>
        <p>Antes de las promesas, teníamos que anidar callbacks dentro de callbacks:</p>

        <CodigoPost lenguaje="JavaScript">{`obtenerUsuario(id, (error, usuario) => {
  if (error) return manejarError(error);
  obtenerPosts(usuario.id, (error, posts) => {
    if (error) return manejarError(error);
    // ... y así sucesivamente (pirámide de la perdición)
  });
});`}</CodigoPost>

        <p>
          <strong>Problemas:</strong> código difícil de leer, mantener y
          depurar.
        </p>

        <h3>La solución: promesas</h3>
        <p>Las promesas nos permiten encadenar operaciones:</p>

        <CodigoPost lenguaje="JavaScript">{`obtenerUsuario(id)
  .then(usuario => obtenerPosts(usuario.id))
  .then(posts => procesarPosts(posts))
  .catch(manejarError);`}</CodigoPost>

        <h3>La mejor solución: async/await</h3>
        <p>Hace que el código asíncrono se vea como código síncrono:</p>

        <CodigoPost lenguaje="JavaScript">{`async function cargarDatos(id) {
  try {
    const usuario = await obtenerUsuario(id);
    const posts = await obtenerPosts(usuario.id);
    return procesarPosts(posts);
  } catch (error) {
    manejarError(error);
  }
}`}</CodigoPost>

        <h3>¿Cuál usar en 2026?</h3>
        <ul>
          <li>
            <strong>Async/await</strong> para flujos secuenciales (más legible).
          </li>
          <li>
            <strong>Promesas directas</strong> cuando necesitas composición
            (Promise.all, etc.).
          </li>
          <li>
            <strong>Evita callbacks</strong> salvo que trabajes con APIs legacy.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="4. Promise.all(), Promise.race() y Promise.allSettled()">
        <p>
          Estas herramientas son esenciales para manejar múltiples operaciones
          asíncronas de forma eficiente.
        </p>

        <h3>Promise.all(): todo o nada</h3>
        <p>
          Ejecuta múltiples promesas en paralelo.{" "}
          <strong>Si una falla, todas fallan.</strong>
        </p>
        <p>
          <em>Cuándo usarlo:</em> cuando necesitas que todas las operaciones
          tengan éxito (cargar recursos críticos, inicializar múltiples
          servicios).
        </p>

        <CodigoPost lenguaje="JavaScript">{`const [usuario, config, permisos] = await Promise.all([
  api.get('/usuario'),
  api.get('/config'),
  api.get('/permisos')
]);
// Si cualquiera falla, todo falla`}</CodigoPost>

        <h3>Promise.allSettled(): espera a todas</h3>
        <p>
          Espera a que todas terminen,{" "}
          <strong>sin importar si fallan o no.</strong>
        </p>
        <p>
          <em>Cuándo usarlo:</em> cuando algunas operaciones pueden fallar pero
          quieres continuar (analytics, recursos opcionales).
        </p>

        <CodigoPost lenguaje="JavaScript">{`const resultados = await Promise.allSettled([
  api.get('/datos-criticos'),
  api.get('/analytics'),  // puede fallar
  api.get('/ads')         // puede fallar
]);
// Siempre obtienes resultados de las tres`}</CodigoPost>

        <h3>Promise.race(): el primero gana</h3>
        <p>Retorna la primera promesa que se complete (éxito o fallo).</p>
        <p>
          <em>Cuándo usarlo:</em> timeouts personalizados, consultar servidores
          redundantes, obtener datos de la fuente más rápida.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const datos = await Promise.race([
  api.get('https://servidor-eu.com/datos'),
  api.get('https://servidor-us.com/datos'),
  api.get('https://servidor-asia.com/datos')
]);
// Usas el servidor más rápido automáticamente`}</CodigoPost>

        <h3>Promise.any(): la primera exitosa gana</h3>
        <p>
          Retorna la primera promesa exitosa.{" "}
          <strong>Solo falla si todas fallan.</strong>
        </p>
        <p>
          <em>Cuándo usarlo:</em> servicios con fallback, APIs con múltiples
          proveedores.
        </p>
      </SeccionPost>

      <SeccionPost titulo="5. AbortController: cancelando peticiones HTTP">
        <p>Una de las funciones más útiles y menos conocidas de JavaScript moderno.</p>

        <h3>¿Por qué necesitas cancelar peticiones?</h3>
        <p>
          <strong>Escenario real:</strong> el usuario escribe en un buscador.
          Cada tecla dispara una petición. Escribe «JavaScript» y se generan 10
          peticiones. Solo te interesa la última.
        </p>
        <ul>
          <li>
            <strong>Sin cancelación:</strong> 10 peticiones al servidor, 9 son
            inútiles.
          </li>
          <li>
            <strong>Con cancelación:</strong> solo 1 petición útil.
          </li>
        </ul>

        <h3>Cómo usar AbortController</h3>
        <CodigoPost lenguaje="JavaScript">{`const controller = new AbortController();

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
controller.abort();`}</CodigoPost>

        <h3>Caso de uso: búsqueda que cancela la petición anterior</h3>
        <CodigoPost lenguaje="JavaScript">{`let controllerActual = null;

function buscar(query) {
  // Cancelar búsqueda anterior
  if (controllerActual) {
    controllerActual.abort();
  }

  controllerActual = new AbortController();

  return fetch(\`/api/buscar?q=\${query}\`, {
    signal: controllerActual.signal
  });
}`}</CodigoPost>

        <ListaMarcadaPost titulo="Beneficios" tipo="bien">
          <li>Ahorra ancho de banda.</li>
          <li>Reduce la carga del servidor.</li>
          <li>Mejora la experiencia de usuario.</li>
          <li>Reduce costos en APIs de pago.</li>
        </ListaMarcadaPost>
      </SeccionPost>

      <SeccionPost titulo="6. Try/catch en contextos asíncronos">
        <p>El manejo de errores en código asíncrono tiene sus particularidades.</p>

        <h3>Error común: try/catch con callbacks no funciona</h3>
        <CodigoPost lenguaje="JavaScript">{`try {
  setTimeout(() => {
    throw new Error('Boom!');
  }, 100);
} catch (error) {
  // ¡Esto NUNCA se ejecuta!
}`}</CodigoPost>

        <p>
          <strong>¿Por qué?</strong> Cuando se ejecuta el callback, el try/catch
          ya terminó.
        </p>

        <h3>Try/catch con async/await funciona perfectamente</h3>
        <CodigoPost lenguaje="JavaScript">{`async function obtenerDatos() {
  try {
    const datos = await fetch('/api/datos');
    return await datos.json();
  } catch (error) {
    console.error('Error:', error);
    // Manejo apropiado del error
  }
}`}</CodigoPost>

        <h3>Manejo granular de errores</h3>
        <CodigoPost lenguaje="JavaScript">{`async function cargarDashboard(userId) {
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
}`}</CodigoPost>

        <h3>Tipos de errores que debes manejar</h3>
        <TablaPost descripcion="Tipos de errores asíncronos y cómo manejarlos">
          <table>
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
        </TablaPost>
      </SeccionPost>

      <SeccionPost titulo="7. Proyecto práctico: API Resilience Wrapper">
        <p>
          Todos los conceptos de este post están implementados en nuestro{" "}
          <a
            href="https://github.com/femcodersclub/API-Resilience-Wrapper"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Resilience Wrapper
          </a>
          , un sistema real de gestión de peticiones HTTP que puedes explorar y
          usar.
        </p>

        <h3>¿Qué hace?</h3>
        <p>Un wrapper inteligente para peticiones HTTP con:</p>
        <ul>
          <li>Reintentos automáticos.</li>
          <li>Rate limiting (control de tasa).</li>
          <li>Cola de prioridades.</li>
          <li>Timeouts y cancelación.</li>
          <li>Dashboard en tiempo real.</li>
        </ul>

        <h3>Cómo cada archivo ilustra los conceptos</h3>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "RetryManager.js",
              texto: (
                <>
                  <p>
                    <strong>Async/await + try/catch</strong>
                  </p>
                  <p>
                    Sistema de reintentos con backoff exponencial. Ejemplo
                    perfecto de manejo de errores asíncronos.
                  </p>
                </>
              ),
            },
            {
              titulo: "RateLimiter.js",
              texto: (
                <>
                  <p>
                    <strong>Event Loop + microtasks vs. macrotasks</strong>
                  </p>
                  <p>
                    Limita peticiones (10 por segundo) usando colas. Usa{" "}
                    <code>setTimeout(..., 0)</code> para ceder el control al
                    Event Loop.
                  </p>
                </>
              ),
            },
            {
              titulo: "TimeoutController.js",
              texto: (
                <>
                  <p>
                    <strong>AbortController + Promise.race()</strong>
                  </p>
                  <p>
                    Cancela peticiones automáticamente. Usa{" "}
                    <code>Promise.race()</code> para competir entre la petición
                    y el timeout.
                  </p>
                </>
              ),
            },
            {
              titulo: "RequestQueue.js",
              texto: (
                <>
                  <p>
                    <strong>Task Queue personalizada</strong>
                  </p>
                  <p>
                    Cola con límite de concurrencia (5 peticiones simultáneas).
                    Como la Task Queue de JavaScript, pero con prioridades.
                  </p>
                </>
              ),
            },
            {
              titulo: "ApiWrapper.js",
              texto: (
                <>
                  <p>
                    <strong>Promise.all/race/allSettled/any</strong>
                  </p>
                  <p>
                    Integra todo y demuestra cuándo usar cada método de Promise
                    en casos reales.
                  </p>
                </>
              ),
            },
          ]}
        />

        <h3>Dashboard interactivo</h3>
        <p>Experimenta con botones para:</p>
        <ul>
          <li>Promise.all / allSettled / race / any.</li>
          <li>Forzar reintentos y timeouts.</li>
          <li>Saturar el rate limit.</li>
          <li>Ver métricas en tiempo real.</li>
        </ul>

        <h3>Instalación rápida</h3>
        <CodigoPost lenguaje="Bash">{`git clone https://github.com/femcodersclub/API-Resilience-Wrapper.git
cd API-Resilience-Wrapper
npm install
npm run serve`}</CodigoPost>
        <p>
          Abre <code>http://localhost:3000/dashboard</code> y experimenta con
          cada concepto del post en acción.
        </p>

        <h3>Por qué vale la pena explorarlo</h3>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Para principiantes",
              texto:
                "Conceptos abstractos (Event Loop, microtasks) aplicados en código real.",
            },
            {
              titulo: "Para nivel intermedio",
              texto: "Patrones de arquitectura que usan empresas reales.",
            },
            {
              titulo: "Para avanzadas",
              texto: "Código production-ready que puedes usar en tus proyectos.",
            },
          ]}
        />

        <h3>Orden de estudio recomendado</h3>
        <ol>
          <li>
            <code>examples/usage.js</code>: ejemplos comentados.
          </li>
          <li>
            <code>RetryManager.js</code>: el más simple.
          </li>
          <li>
            <code>TimeoutController.js</code>: AbortController en acción.
          </li>
          <li>
            <code>RateLimiter.js</code>: Event Loop aplicado.
          </li>
          <li>
            <code>ApiWrapper.js</code>: integración completa.
          </li>
        </ol>
        <p>
          Cada archivo tiene comentarios extensos y referencias a los conceptos
          de este post.
        </p>

        <p>
          <a
            href="https://github.com/femcodersclub/API-Resilience-Wrapper"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Ver proyecto en GitHub
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conclusiones y mejores prácticas">
        <TarjetasPost
          titulo="Lo que debes recordar"
          tarjetas={[
            {
              titulo: "Event Loop",
              texto:
                "JavaScript delega operaciones asíncronas y continúa ejecutando. Las tareas solo vuelven al Call Stack cuando este está vacío.",
            },
            {
              titulo: "Microtasks > macrotasks",
              texto:
                "Las promesas (microtasks) siempre tienen prioridad sobre setTimeout (macrotasks).",
            },
            {
              titulo: "Usa async/await",
              texto:
                "Es la forma más legible y mantenible de escribir código asíncrono en 2026.",
            },
            {
              titulo: "Combina promesas sabiamente",
              texto: (
                <ul>
                  <li>Promise.all() cuando todas deben tener éxito.</li>
                  <li>Promise.allSettled() cuando algunas pueden fallar.</li>
                  <li>Promise.race() para timeouts o redundancia.</li>
                  <li>Promise.any() para fallback.</li>
                </ul>
              ),
            },
            {
              titulo: "Cancela peticiones innecesarias",
              texto:
                "AbortController es tu amigo. Úsalo especialmente en búsquedas y navegación.",
            },
            {
              titulo: "Maneja errores específicamente",
              texto:
                "Diferentes tipos de errores requieren diferentes estrategias (reintentar, fallar, ignorar).",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales">
        <h3>Para profundizar</h3>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=8aGhZQkoFbQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jake Archibald — In The Loop (vídeo imprescindible)
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN — Concurrency model and Event Loop
            </a>
          </li>
          <li>
            <Link to="/recursos/js/fundamentos-javascript-profundos">
              Fundamentos de JavaScript que realmente importan (post anterior)
            </Link>
          </li>
        </ul>

        <h3>Únete a la comunidad</h3>
        <p>
          ¿Tienes dudas sobre asincronía en JavaScript? ¿Quieres compartir tus
          proyectos? Únete a FemCoders Club, una comunidad de más de 1.600
          mujeres en tecnología donde aprendemos y crecemos juntas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Necesitas apoyo personalizado?">
        <p>
          Si estos conceptos te resultan desafiantes o quieres profundizar más
          con orientación personalizada, en FemCoders Club ofrecemos{" "}
          <Link to="/login">mentorías individuales</Link> donde podemos
          trabajar juntas en tus dudas específicas. (Requiere{" "}
          <Link to="/register">registro gratuito</Link>).
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default EventLoopJavaScript;
