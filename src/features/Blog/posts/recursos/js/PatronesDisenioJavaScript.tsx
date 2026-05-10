import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaBook,
  FaCheck,
  FaCode,
  FaCubes,
  FaEye,
  FaGithub,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaSlack,
  FaTiktok,
  FaTools,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const PatronesDisenioJavaScript: React.FC = () => {
  const postId = 39;
  const publicationDate = "10 de mayo de 2026";
  const currentUrl =
    "https://www.femcodersclub.com/recursos/js/patrones-diseno-javascript";

  return (
    <article className="blog-post">
      <Helmet>
        <title>
          Patrones de Diseño en JavaScript Puro: Más Allá del Catálogo |
          femCoders Club
        </title>
        <meta
          name="description"
          content="Aprende los patrones de diseño más importantes en JavaScript moderno: Module, Observer, Proxy, Decorator y composición funcional. Proyecto práctico: reactive-store-js, un sistema de estado reactivo en menos de 300 líneas."
        />
        <meta
          name="keywords"
          content="patrones de diseño javascript, design patterns javascript, observer pattern, proxy pattern, module pattern, decorator pattern, singleton, strategy pattern, reactive-store-js, femcoders club"
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Patrones de Diseño en JavaScript Puro: Más Allá del Catálogo | femCoders Club"
        />
        <meta
          property="og:description"
          content="Patrones de diseño en JavaScript moderno: Module, Observer, Proxy, Decorator y composición funcional. Proyecto práctico: reactive-store-js."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/patrones-diseno-javascript.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Patrones de Diseño en JavaScript Puro - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Patrones de diseño en JavaScript moderno: Module, Observer, Proxy, Decorator y composición funcional. Con proyecto práctico reactive-store-js."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/patrones-diseno-javascript.webp"
        />

        <meta property="article:published_time" content="2026-05-10T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Patrones de Diseño" />
        <meta property="article:tag" content="Design Patterns" />
        <meta property="article:tag" content="Observer Pattern" />
        <meta property="article:tag" content="Proxy Pattern" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Helmet>

      {/* ── Hero image ── */}
      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/javascript/patrones-diseno-javascript.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/javascript/patrones-diseno-javascript.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/javascript/patrones-diseno-javascript.webp"
            alt="Patrones de Diseño en JavaScript Puro: más allá del catálogo"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Patrones de Diseño en JavaScript Puro
        <br />
        Más Allá del Catálogo
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

      {/* ── Intro ── */}
      <section aria-labelledby="intro-section">
        <h2 id="intro-section" className="visually-hidden">
          Introducción
        </h2>
        <p className="intro-text">
          Hay un momento en la carrera de cualquier desarrolladora en el que el
          código deja de ser el problema. El código funciona. Los tests pasan.
          Pero tres meses después, nadie —incluida tú— sabe por qué una parte
          del sistema afecta a otra, ni cómo añadir una funcionalidad sin romper
          dos que ya existían.
        </p>
        <p className="intro-text">
          Ese es el problema que resuelven los patrones de diseño. No son
          recetas mágicas ni vocabulario para impresionar en entrevistas. Son{" "}
          <strong>
            soluciones probadas a problemas de estructura que aparecen una y
            otra vez en cualquier codebase que crece.
          </strong>
        </p>
        <p className="intro-text">
          El matiz importante —y el que casi ningún tutorial menciona— es que
          los patrones de diseño modernos nacieron en 1994, en un libro escrito
          para C++ y Java. JavaScript es otra cosa. Aquí los patrones se
          implementan de forma diferente, a veces más sencilla, a veces
          irreconocible si vienes del libro original.{" "}
          <strong>
            Entender esa diferencia es lo que separa a quien aplica patrones de
            quien los copia.
          </strong>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { icon: <FaCode />, label: "Encapsulación", color: "#4737bb" },
            { icon: <FaEye />, label: "Comunicación", color: "#6d2c95" },
            { icon: <FaShieldAlt />, label: "Interceptación", color: "#ea4f33" },
            { icon: <FaCubes />, label: "Composición", color: "#4737bb" },
          ].map(({ icon, label, color }) => (
            <div
              key={label}
              style={{
                background: "#fff",
                border: `2px solid ${color}`,
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
                color,
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── 1. GoF y JavaScript ── */}
      <section aria-labelledby="gof-section">
        <div className="highlight-box">
          <h2 id="gof-section">
            <FaBook
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            El GoF y JavaScript: una relación complicada
          </h2>
          <br />
          <p>
            El libro de referencia —<em>Design Patterns: Elements of Reusable
            Object-Oriented Software</em>, de Gamma, Helm, Johnson y Vlissides,
            conocido como el Gang of Four— describe 23 patrones organizados en
            tres categorías: creacionales, estructurales y de comportamiento. Es
            lectura obligatoria, pero tiene trampa.
          </p>
          <p>
            Muchos de esos patrones existen para compensar limitaciones de
            lenguajes sin funciones de primera clase. En Java, si quieres pasar
            comportamiento como argumento, necesitas crear una clase, implementar
            una interfaz, instanciar un objeto. En JavaScript, pasas una función.
            Punto.
          </p>
          <p>
            Esto tiene una consecuencia práctica: varios patrones del GoF en
            JavaScript son simplemente... una función. El Command Pattern, el
            Strategy Pattern, el Template Method —todos colapsan a «pasa una
            función como argumento». No es que JavaScript sea más simple. Es que{" "}
            <strong>
              el lenguaje ya tiene incorporadas capacidades que otros lenguajes
              necesitan simular con arquitectura.
            </strong>
          </p>
          <p>
            Lo que sí se mantiene —y esto es lo que importa— es el{" "}
            <strong>propósito</strong> de cada patrón. El problema que resuelve.
            Eso no cambia con el lenguaje.
          </p>
        </div>
      </section>

      {/* ── 2. Encapsulación y estructura ── */}
      <section aria-labelledby="encapsulacion-section">
        <div className="highlight-box">
          <h2 id="encapsulacion-section">
            <FaCode
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Encapsulación y estructura
          </h2>
          <br />
          <p>
            El primer grupo de patrones responde a la misma pregunta: ¿cómo
            organizas el código para que las partes internas no se expongan
            innecesariamente y las dependencias no se disparen?
          </p>

          <h3>Module Pattern</h3>
          <p>
            Antes de que existieran los módulos ES6, la única forma de encapsular
            código en JavaScript era mediante closures. El Module Pattern aprovecha
            que una función crea su propio scope y devuelve solo lo que quiere
            exponer.
          </p>
          <p>
            El patrón se construye con una función invocada inmediatamente (IIFE)
            que mantiene estado privado y devuelve una API pública. Lo privado nunca
            sale. Lo público es exactamente lo que tú decides.
          </p>
          <p>
            En la práctica, el Module Pattern resuelve el problema del scope
            global: variables que contaminan el entorno, funciones internas que se
            usan desde fuera sin querer, estado compartido sin control. Con ES6 y
            los módulos nativos, el patrón perdió relevancia en su forma clásica,
            pero su lógica —encapsular, exponer solo lo necesario— sigue siendo la
            base de cualquier API bien diseñada.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// IIFE — crea un scope aislado y devuelve solo la API pública
const contadorModule = (() => {
  let _count = 0; // privado — nunca sale del closure

  return {
    increment() { _count++; },
    decrement() { _count--; },
    getCount()  { return _count; },
  };
})();

contadorModule.increment();
contadorModule.increment();
console.log(contadorModule.getCount()); // 2
console.log(contadorModule._count);     // undefined — inaccesible ✓`}
            </pre>
          </div>

          <br />
          <h3>Revealing Module</h3>
          <p>
            Una variante del anterior. La diferencia es cosmética pero importante
            para la legibilidad: toda la lógica se escribe primero como funciones
            normales, y al final del módulo se devuelve un objeto que mapea nombres
            públicos a implementaciones privadas.
          </p>
          <p>
            El resultado es que puedes leer la API pública de un vistazo, en un
            solo lugar, sin tener que recorrer el código buscando qué está expuesto
            y qué no. En proyectos grandes, esa claridad tiene un valor real.
          </p>

          <div className="code-block bg3">
            <pre>
              {`const userService = (() => {
  // Toda la lógica primero — funciones internas normales
  function _validate(email) {
    return email.includes('@');
  }

  function create(nombre, email) {
    if (!_validate(email)) throw new Error('Email inválido');
    return { nombre, email, createdAt: new Date() };
  }

  function getDisplayName(user) {
    return user.nombre.split(' ')[0];
  }

  // La API pública en un solo lugar — fácil de leer de un vistazo
  return { create, getDisplayName };
})();`}
            </pre>
          </div>

          <br />
          <h3>Façade Pattern</h3>
          <p>
            La Façade no oculta complejidad —la organiza. Pones una interfaz
            limpia delante de un subsistema complejo para que quien lo use no
            necesite conocer sus detalles internos.
          </p>
          <p>
            <code>createStore()</code> en{" "}
            <a
              href="https://github.com/femcodersclub/reactive-store-js"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              reactive-store-js
            </a>{" "}
            es un ejemplo directo: detrás de esa función hay un sistema de Proxy
            anidado, un Map de suscriptores, un historial de snapshots y lógica
            de notificación en cadena. Quien usa el store no necesita saber nada
            de eso. Solo llama a <code>createStore()</code> y obtiene una API
            con cuatro o cinco métodos. Eso es una Façade.
          </p>
          <p>
            La diferencia con el Module Pattern es de intención: el Module
            encapsula para proteger estado interno; la Façade simplifica para
            reducir la carga cognitiva de quien consume la API.
          </p>

          <br />
          <h3>Singleton</h3>
          <p>
            Un Singleton garantiza que solo existe una instancia de algo. En
            lenguajes con clases, esto requiere constructores privados, métodos
            estáticos y comprobaciones de instancia. En JavaScript, es mucho más
            sencillo:{" "}
            <strong>
              un módulo que exporta un objeto ya es un Singleton
            </strong>
            , porque los módulos se cachean tras la primera importación.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// config.js — Singleton sin esfuerzo
// Los módulos ES6 se cachean: siempre se obtiene la misma instancia
export const config = {
  apiUrl: process.env.API_URL,
  maxRetries: 3,
  timeout: 5000,
};

// Cualquier archivo que importe config.js obtendrá
// exactamente el mismo objeto — no hay segunda instancia ✓`}
            </pre>
          </div>

          <p>
            El problema con el Singleton no es implementarlo —es usarlo mal. Es
            el patrón más fácil de abusar porque justifica el estado global.
            Antes de hacer algo un Singleton, vale la pena preguntarse si el
            problema real no es que ese estado debería estar más arriba en el
            árbol de dependencias.
          </p>
        </div>
      </section>

      {/* ── 3. Comunicación entre partes ── */}
      <section aria-labelledby="comunicacion-section">
        <div className="highlight-box">
          <h2 id="comunicacion-section">
            <FaEye
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Comunicación entre partes
          </h2>
          <br />
          <p>
            El segundo grupo de patrones resuelve un problema diferente: cómo
            hacer que distintas partes de un sistema se comuniquen sin que unas
            dependan directamente de las otras.
          </p>

          <h3>Observer Pattern</h3>
          <p>
            Es el patrón más importante para JavaScript moderno. La idea central
            es simple: un objeto (el sujeto) mantiene una lista de dependientes
            (los observadores) y los notifica cuando su estado cambia. Los
            observadores no saben nada los unos de los otros. El sujeto no sabe
            qué van a hacer con la notificación.
          </p>
          <p>
            Todo el sistema de eventos del navegador funciona así.{" "}
            <code>addEventListener</code> es Observer Pattern. Los sistemas de
            estado reactivo —Vuex, Zustand, Redux en su núcleo— son Observer
            Pattern.
          </p>
          <p>
            En{" "}
            <a
              href="https://github.com/femcodersclub/reactive-store-js"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              reactive-store-js
            </a>{" "}
            el patrón está implementado a mano: <code>subscribe</code> registra
            callbacks en un <code>Map</code> indexado por ruta, y cada vez que
            el Proxy detecta un cambio, <code>notify</code> recorre ese Map y
            ejecuta los callbacks correspondientes. El dashboard de métricas que
            acompaña al proyecto tiene ocho suscripciones activas
            simultáneamente —cada sección de la UI reacciona solo a los datos
            que le corresponden, sin que ninguna conozca a las demás.
          </p>

          <div
            style={{
              backgroundColor: "rgba(71, 55, 187, 0.08)",
              padding: "20px",
              borderRadius: "8px",
              borderLeft: "4px solid #4737bb",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170" }}>
              <strong>La clave del Observer bien implementado</strong> está en
              la limpieza: cada suscripción debe poder cancelarse. Si registras
              callbacks y no los limpias, acumulas memory leaks. En el store,{" "}
              <code>subscribe</code> devuelve una función de limpieza por
              exactamente este motivo.
            </p>
          </div>

          <div className="code-block bg3">
            <pre>
              {`// Observer básico: sujeto con lista de observadores y limpieza explícita
class EventEmitter {
  #listeners = new Map();

  on(event, callback) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, new Set());
    }
    this.#listeners.get(event).add(callback);

    // Devuelve función de limpieza — sin esto, memory leak garantizado
    return () => this.#listeners.get(event)?.delete(callback);
  }

  emit(event, data) {
    this.#listeners.get(event)?.forEach(cb => cb(data));
  }
}

const emitter = new EventEmitter();
const unsubscribe = emitter.on('cambio', (data) => console.log(data));

emitter.emit('cambio', { valor: 42 }); // { valor: 42 }
unsubscribe();                          // Limpieza explícita ✓
emitter.emit('cambio', { valor: 99 }); // Silencio — ya no escucha`}
            </pre>
          </div>

          <br />
          <h3>Command Pattern</h3>
          <p>
            El Command encapsula una operación como un objeto. En lugar de
            llamar directamente a una función, creas un objeto que representa
            esa acción —con toda la información necesaria para ejecutarla,
            deshacerla o registrarla.
          </p>
          <p>
            En JavaScript puro, esto suele ser más sencillo de lo que parece:
            un objeto con dos propiedades, <code>execute</code> y{" "}
            <code>undo</code>, cada una con una función. El historial de
            undo/redo de <code>reactive-store-js</code> sigue esta lógica: cada
            cambio de estado se puede deshacer porque el sistema guarda
            snapshots del estado anterior. El Command formaliza ese concepto y
            lo hace explícito.
          </p>
          <p>
            Es el patrón detrás de cualquier sistema con historial de acciones:
            editores de texto, herramientas de diseño, formularios con múltiples
            pasos. Si alguna vez has implementado un undo sin haberlo pensado
            como Command, probablemente has reinventado el patrón sin saberlo.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// Command Pattern — cada operación es reversible y registrable
const createCommand = (execute, undo) => ({ execute, undo });

const history = [];

function executeCommand(command) {
  command.execute();
  history.push(command);
}

function undoLast() {
  const command = history.pop();
  command?.undo();
}

// Uso: cada acción es un objeto con execute y undo
const addItem = (list, item) => createCommand(
  () => list.push(item),
  () => list.pop()
);

const lista = [];
executeCommand(addItem(lista, 'a')); // ['a']
executeCommand(addItem(lista, 'b')); // ['a', 'b']
undoLast();                          // ['a'] ✓`}
            </pre>
          </div>

          <br />
          <h3>Strategy Pattern</h3>
          <p>
            El Strategy define una familia de algoritmos, los encapsula por
            separado y los hace intercambiables. El cliente usa uno u otro sin
            cambiar su propio código.
          </p>
          <p>
            En JavaScript, la implementación más directa es pasar una función
            como argumento. Si tienes un pipeline de transformación de datos y
            quieres que el criterio de ordenación sea configurable, pasas la
            función de comparación. Eso es Strategy. El lenguaje lo hace tan
            natural que el patrón se vuelve casi invisible —lo cual es
            exactamente lo que buscas.
          </p>
          <p>
            Donde el Strategy tiene más valor es cuando la elección del
            algoritmo depende de condiciones en tiempo de ejecución: distintos
            métodos de autenticación, distintas estrategias de caché, distintos
            formatos de export. En lugar de un <code>switch</code> que crece
            sin control, tienes un mapa de estrategias y seleccionas la que
            corresponde.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// Strategy: mapa de algoritmos intercambiables en tiempo de ejecución
const exportStrategies = {
  json: (data) => JSON.stringify(data, null, 2),
  csv:  (data) => data.map(r => Object.values(r).join(',')).join('\\n'),
  tsv:  (data) => data.map(r => Object.values(r).join('\\t')).join('\\n'),
};

function exportData(data, format) {
  const strategy = exportStrategies[format];
  if (!strategy) throw new Error(\`Formato no soportado: \${format}\`);
  return strategy(data);
}

// Añadir un nuevo formato no toca el código existente ✓
exportStrategies.xml = (data) =>
  \`<data>\${data.map(r => JSON.stringify(r)).join('')}</data>\`;`}
            </pre>
          </div>
        </div>
      </section>

      {/* ── 4. Interceptación y extensión ── */}
      <section aria-labelledby="interceptacion-section">
        <div className="highlight-box">
          <h2 id="interceptacion-section">
            <FaShieldAlt
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Interceptación y extensión
          </h2>
          <br />
          <p>
            El tercer grupo resuelve un problema más sutil: cómo añadir
            comportamiento a código existente sin modificarlo.
          </p>

          <h3>Proxy Pattern</h3>
          <p>
            El Proxy es un objeto que envuelve a otro y puede interceptar
            cualquier operación sobre él —lecturas, escrituras, eliminaciones,
            llamadas a funciones. En JavaScript, <code>Proxy</code> es una API
            nativa del lenguaje desde ES6.
          </p>
          <p>
            Lo que hace especialmente potente al Proxy es que es{" "}
            <strong>transparente para quien lo usa</strong>. El objeto que
            consumes parece el original, pero por debajo hay una capa de lógica
            que puede validar, transformar, registrar o notificar cada
            operación.
          </p>
          <p>
            En <code>reactive-store-js</code>, el Proxy es el mecanismo
            central: cuando escribes{" "}
            <code>store.state.members.total = 1300</code>, no estás modificando
            un objeto plano. Estás disparando el handler <code>set</code> de un
            Proxy anidado que calcula la ruta completa del cambio (
            <code>'members.total'</code>), compara el valor nuevo con el
            anterior, guarda un snapshot en el historial y notifica a todos los
            suscriptores de esa ruta. Todo eso ocurre de forma invisible.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// Proxy: intercepta operaciones de forma transparente al consumidor
function createReactiveObject(target, onChange) {
  return new Proxy(target, {
    set(obj, prop, value) {
      const prev = obj[prop];
      if (prev === value) return true; // Sin cambio, sin notificación

      obj[prop] = value;
      onChange({ prop, prev, next: value });
      return true;
    },
    get(obj, prop) {
      const value = obj[prop];
      // Objetos anidados: Proxy recursivo para reactividad profunda
      if (typeof value === 'object' && value !== null) {
        return createReactiveObject(value, onChange);
      }
      return value;
    },
  });
}

const state = createReactiveObject({ count: 0 }, (change) => {
  console.log(\`\${change.prop}: \${change.prev} → \${change.next}\`);
});

state.count = 1; // "count: 0 → 1" — automático, sin llamar a nada ✓`}
            </pre>
          </div>

          <br />
          {/* Dashboard image */}
          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/reactive-store-dashboard.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/reactive-store-dashboard.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/reactive-store-dashboard.webp"
                alt="Dashboard del proyecto reactive-store-js con el panel de DevTools mostrando el estado del store, los subscribers activos y el historial de cambios"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>

          <p>
            El Proxy tiene casos de uso más allá de la reactividad: validación
            de esquemas, logging automático de accesos a propiedades, lazy
            loading de datos, APIs de acceso remoto que parecen objetos locales.
            Cualquier situación donde necesites interceptar el acceso a un
            objeto sin que el consumidor lo sepa.
          </p>

          <br />
          <h3>Decorator Pattern</h3>
          <p>
            El Decorator añade responsabilidades a un objeto o función de forma
            dinámica, sin modificar el original y sin usar herencia. En
            JavaScript funcional, esto se traduce en{" "}
            <strong>
              funciones que envuelven a otras funciones y extienden su
              comportamiento
            </strong>
            .
          </p>
          <p>
            El caso más claro es el de las funciones de orden superior:{" "}
            <code>memoize</code>, <code>debounce</code>, <code>throttle</code>,{" "}
            <code>retry</code>. Todas siguen el mismo patrón —reciben una
            función, devuelven una función nueva con comportamiento adicional, y
            la función original no sabe nada.
          </p>
          <p>
            La diferencia con el Proxy es de granularidad: el Proxy intercepta
            operaciones sobre objetos completos; el Decorator añade
            comportamiento a funciones o métodos concretos. En la práctica,
            ambos se complementan. Un sistema real puede usar Proxy para la
            reactividad del estado y Decorators para añadir logging o caché a
            funciones específicas.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// Decorator: funciones que envuelven funciones sin modificar el original
function withLogging(fn, name = fn.name) {
  return function (...args) {
    console.time(name);
    const result = fn.apply(this, args);
    console.timeEnd(name);
    return result;
  };
}

function withMemoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Los decorators se componen: primero memoize, luego logging encima
const fib = withLogging(
  withMemoize(function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  })
);

fib(40); // Calcula una vez (memoized), registra el tiempo (logged) ✓`}
            </pre>
          </div>

          {/* Terminal output image */}
          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/reactive-store-terminal.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/reactive-store-terminal.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/reactive-store-terminal.webp"
                alt="Output del ejemplo básico de reactive-store-js en terminal, mostrando cómo cada asignación dispara automáticamente los callbacks de los subscribers"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* ── 5. Composición sobre herencia ── */}
      <section aria-labelledby="composicion-section">
        <div className="highlight-box">
          <h2 id="composicion-section">
            <FaCubes
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Composición sobre herencia
          </h2>
          <br />
          <p>
            Este no es un patrón del catálogo, pero es el principio que hace
            que todos los anteriores tengan sentido en JavaScript moderno.
          </p>
          <p>
            La herencia de clases —extender una clase base para reutilizar
            comportamiento— crea jerarquías rígidas que se rompen en cuanto el
            dominio evoluciona. El problema clásico es la jerarquía frágil:
            cuando <code>Animal</code> tiene <code>mover()</code> y{" "}
            <code>hacerSonido()</code>, y luego necesitas un <code>Pato</code>{" "}
            que vuela, nada y hace quack, la jerarquía no escala sin
            duplicación o sin añadir métodos vacíos en clases donde no tienen
            sentido.
          </p>
          <p>
            La composición resuelve esto: en lugar de definir lo que un objeto{" "}
            <em>es</em>, defines lo que un objeto <em>hace</em>, y combinas
            comportamientos como piezas. En JavaScript, esto se hace con
            funciones que añaden capacidades a un objeto base.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// Composición: comportamientos como piezas intercambiables
const canFly   = (obj) => ({ ...obj, fly:   () => console.log(\`\${obj.name} vuela\`) });
const canSwim  = (obj) => ({ ...obj, swim:  () => console.log(\`\${obj.name} nada\`) });
const canQuack = (obj) => ({ ...obj, quack: () => console.log(\`\${obj.name} hace quack\`) });

// Sin herencia, sin jerarquía — solo composición de comportamientos
const pato = canFly(canSwim(canQuack({ name: 'Donald' })));
pato.fly();   // "Donald vuela"
pato.swim();  // "Donald nada"
pato.quack(); // "Donald hace quack"

// Cualquier combinación es posible sin tocar el código existente ✓
const pez = canSwim({ name: 'Nemo' });
pez.swim(); // "Nemo nada" — sin fly, sin quack, sin métodos vacíos`}
            </pre>
          </div>

          <p>
            <code>createStore()</code> es un ejemplo de esto: no hay clases, no
            hay herencia. Hay una función que crea un objeto plano, le añade un
            Proxy, le añade un sistema de suscripciones, le añade historial, y
            devuelve una API coherente. Cada capacidad se puede entender por
            separado. Ninguna depende de una jerarquía de herencia.
          </p>
          <p>
            El resultado es código más fácil de testear, más fácil de modificar
            y más fácil de razonar. No porque la composición sea siempre mejor
            que la herencia —sino porque en JavaScript, la composición suele ser
            la herramienta correcta para la mayoría de los problemas.
          </p>
        </div>
      </section>

      {/* ── 6. El proyecto ── */}
      <section aria-labelledby="proyecto-section">
        <div className="highlight-box">
          <h2 id="proyecto-section">
            <FaRocket
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            El proyecto: reactive-store-js
          </h2>
          <br />
          <p>
            <a
              href="https://github.com/femcodersclub/reactive-store-js"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              reactive-store-js
            </a>{" "}
            implementa en menos de 300 líneas lo que hemos visto a lo largo del
            post: Observer para las suscripciones, Proxy para la interceptación
            reactiva, Memento para el historial de undo/redo, Façade en la API
            pública y composición funcional en lugar de herencia.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "12px",
              marginBottom: "2rem",
            }}
          >
            {[
              { patron: "Observer", uso: "Suscripciones", color: "#4737bb" },
              { patron: "Proxy", uso: "Reactividad", color: "#6d2c95" },
              { patron: "Memento", uso: "Undo / Redo", color: "#ea4f33" },
              { patron: "Façade", uso: "API pública", color: "#4737bb" },
              { patron: "Composición", uso: "Sin herencia", color: "#6d2c95" },
            ].map(({ patron, uso, color }) => (
              <div
                key={patron}
                style={{
                  background: "#fff",
                  border: `2px solid ${color}`,
                  borderRadius: "8px",
                  padding: "12px",
                  textAlign: "center",
                  color,
                }}
              >
                <strong style={{ display: "block", fontSize: "0.95rem" }}>
                  {patron}
                </strong>
                <span style={{ fontSize: "0.85rem", color: "#2a2170" }}>
                  {uso}
                </span>
              </div>
            ))}
          </div>

          <p>
            La{" "}
            <a
              href="https://femcodersclub.github.io/reactive-store-js/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              demo en vivo
            </a>{" "}
            es un dashboard de métricas de comunidad donde cada sección de la
            UI reacciona de forma independiente a los cambios de estado, sin que
            ningún componente conozca a los demás. Clónalo, abre las DevTools
            integradas mientras simulas actividad, y observa en tiempo real cómo
            los patrones trabajan juntos.
          </p>

          <p>
            Los patrones de diseño no se aprenden leyendo definiciones. Se
            aprenden escribiendo código que tiene el problema que resuelven, y
            reconociendo la solución cuando aparece. Este proyecto está pensado
            exactamente para eso.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            <a
              href="https://github.com/femcodersclub/reactive-store-js"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#2a2170",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              <FaGithub />
              Ver el proyecto en GitHub
            </a>
            <a
              href="https://femcodersclub.github.io/reactive-store-js/demo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#6d2c95",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              <FaRocket />
              Ver la demo en vivo
            </a>
          </div>
        </div>
      </section>

      {/* ── Conclusión ── */}
      <section aria-labelledby="conclusiones-section">
        <div className="highlight-box">
          <h2 id="conclusiones-section">
            <FaLightbulb
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Conclusión
          </h2>
          <br />
          <p>
            Los patrones de diseño no son arquitectura. Son vocabulario
            compartido para problemas recurrentes. Cuando alguien dice «usa un
            Observer aquí», todo el equipo sabe qué significa, qué garantiza y
            qué sacrifica.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              {
                texto: "Module / Revealing Module",
                desc: "para encapsular estado y exponer solo lo necesario.",
              },
              {
                texto: "Façade",
                desc: "para simplificar subsistemas complejos con una API limpia.",
              },
              {
                texto: "Singleton",
                desc: "con cuidado — los módulos ES6 ya lo son por defecto.",
              },
              {
                texto: "Observer",
                desc: "para comunicación desacoplada, siempre con limpieza explícita.",
              },
              {
                texto: "Command",
                desc: "cuando necesitas historial, undo o auditoría de acciones.",
              },
              {
                texto: "Strategy",
                desc: "para algoritmos intercambiables sin if/switch que crece.",
              },
              {
                texto: "Proxy",
                desc: "para interceptar operaciones de forma transparente.",
              },
              {
                texto: "Decorator",
                desc: "para extender funciones sin modificarlas.",
              },
              {
                texto: "Composición",
                desc: "como principio general — define lo que el objeto hace, no lo que es.",
              },
            ].map(({ texto, desc }) => (
              <li key={texto} style={{ marginBottom: "12px" }}>
                <FaCheck
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    color: "var(--color-primary)",
                    verticalAlign: "middle",
                  }}
                />
                <strong>{texto}</strong> — {desc}
              </li>
            ))}
          </ul>

          <br />
          <p style={{ fontStyle: "italic", color: "#6d2c95" }}>
            ¿Tienes dudas o quieres compartir cómo aplicas estos patrones en
            tus proyectos? Únete a la conversación en FemCoders Club, una
            comunidad de más de 1.500 mujeres en tecnología en España.
          </p>
        </div>
      </section>

      {/* ── Recursos Adicionales ── */}
      <section aria-labelledby="resources-section">
        <div className="highlight-box">
          <h2 id="resources-section">
            <FaBook
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Recursos Adicionales
          </h2>
          <br />
          <h3>Para profundizar</h3>
          <ul>
            <li>
              <a
                href="https://refactoring.guru/es/design-patterns"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Refactoring Guru — Catálogo de patrones de diseño (en español)
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN — Proxy en JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://github.com/femcodersclub/reactive-store-js"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                reactive-store-js — Proyecto completo en GitHub
              </a>
            </li>
            <li>
              <Link
                to="/recursos/js/estructuras-datos-js"
                className="highlight-link"
              >
                Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap
                y WeakSet
              </Link>
            </li>
            <li>
              <Link
                to="/recursos/js/closures-scope-context"
                className="highlight-link"
              >
                Closures, Scope y Context: Lo que Realmente Pasa en el Motor de
                JavaScript
              </Link>
            </li>
            <li>
              <Link
                to="/recursos/js/manipulacion-dom-ingeniera"
                className="highlight-link"
              >
                Manipulación del DOM como una Ingeniera
              </Link>
            </li>
          </ul>
          <br />
          <h3>Únete a la comunidad</h3>
          <p>
            ¿Tienes dudas sobre patrones de diseño o quieres compartir tus
            proyectos? Únete a FemCoders Club, una comunidad de más de 1.500
            mujeres en tecnología donde aprendemos y crecemos juntas.
          </p>
        </div>
      </section>

      {/* ── Mentoría ── */}
      <section aria-labelledby="mentorship-section">
        <div className="highlight-box">
          <h2 id="mentorship-section">
            <FaTools
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            ¿Necesitas Apoyo Personalizado?
          </h2>
          <p>
            Si los patrones de diseño te resultan desafiantes o quieres
            profundizar más con orientación personalizada, en femCoders Club
            ofrecemos{" "}
            <Link to="/login" className="highlight-link">
              mentorías individuales
            </Link>{" "}
            donde podemos trabajar juntas en tus dudas específicas.{" "}
            (Requiere{" "}
            <Link to="/register" className="highlight-link">
              registro gratuito
            </Link>
            )
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

export default PatronesDisenioJavaScript;
