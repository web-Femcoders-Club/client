import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaBook,
  FaBolt,
  FaCheck,
  FaCode,
  FaCogs,
  FaExclamationTriangle,
  FaGithub,
  FaGraduationCap,
  FaLightbulb,
  FaLock,
  FaRocket,
  FaSlack,
  FaTiktok,
  FaTools,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const ClosuresScopeContext: React.FC = () => {
  const postId = 37;
  const publicationDate = "1 de marzo de 2026";
  const currentUrl =
    "https://www.femcodersclub.com/recursos/js/closures-scope-context";

  return (
    <article className="blog-post">
      <Helmet>
        <title>
          Closures, Scope y Context: Lo que Realmente Pasa en el Motor de
          JavaScript | femCoders Club
        </title>
        <meta
          name="description"
          content="Aprende closures, scope léxico y context (this) en JavaScript de forma práctica con una state machine real. Domina bind, call, apply y los 3 conceptos más preguntados en entrevistas técnicas."
        />
        <meta
          name="keywords"
          content="closures javascript, scope léxico, this javascript, bind call apply, state machine javascript, entrevistas javascript, lexical scope, closure loop, femcoders club"
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Closures, Scope y Context: Lo que Realmente Pasa en el Motor de JavaScript | femCoders Club"
        />
        <meta
          property="og:description"
          content="El 60% de las preguntas técnicas de JavaScript en entrevistas giran alrededor de scope, closures y this. Aprende cómo funcionan realmente con ejemplos y una state machine interactiva."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/closures-scope-context.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Closures, Scope y Context en JavaScript - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Domina los 3 conceptos más preguntados en entrevistas: scope léxico, closures y this. Con una state machine como proyecto práctico."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/closures-scope-context.webp"
        />

        <meta property="article:published_time" content="2026-03-01T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Closures" />
        <meta property="article:tag" content="Scope" />
        <meta property="article:tag" content="This" />
        <meta property="article:tag" content="Programación" />

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
            srcSet="/public-optimized/mobile/assets/javascript/closures-scope-context.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/javascript/closures-scope-context.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/javascript/closures-scope-context.webp"
            alt="Closures, Scope y Context en JavaScript - State Machine"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Closures, Scope y Context
        <br />
        Lo que Realmente Pasa en el Motor de JavaScript
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
          <strong>
            El 60% de las preguntas técnicas de JavaScript en entrevistas giran
            alrededor de 3 conceptos: scope, closures y <code>this</code>.
          </strong>{" "}
          Sin embargo, son los temas que peor se enseñan en bootcamps y
          tutoriales. Se explican con analogías vagas ("un closure es una
          función que recuerda cosas") en lugar de entender qué hace realmente
          el motor de JavaScript.
        </p>
        <p className="intro-text">Hoy vamos a cambiar eso.</p>

        <div
          style={{
            backgroundColor: "rgba(71, 55, 187, 0.1)",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "2rem",
            borderLeft: "4px solid #4737bb",
          }}
        >
          <p style={{ margin: 0, color: "#2a2170", fontWeight: 600 }}>
            <FaRocket
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "#ea4f33",
                verticalAlign: "middle",
              }}
            />
            Proyecto de este post: un{" "}
            <strong>wizard de configuración de perfil profesional</strong> que
            funciona como una <strong>state machine</strong>. No vas a leer
            código abstracto — vas a ver cómo estos mecanismos resuelven
            problemas reales.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { icon: <FaLock />, label: "Scope léxico", color: "#4737bb" },
            { icon: <FaCode />, label: "Closures", color: "#6d2c95" },
            { icon: <FaCogs />, label: "this & context", color: "#ea4f33" },
            { icon: <FaBolt />, label: "bind / call / apply", color: "#4737bb" },
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

      {/* ── 1. Lexical Scope ── */}
      <section aria-labelledby="scope-section">
        <div className="highlight-box">
          <h2 id="scope-section">
            <FaLock
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            1. Lexical Scope: Dónde Viven tus Variables
          </h2>
          <br />
          <p>
            El <strong>scope léxico</strong> se determina en el momento en que
            escribes el código, no cuando se ejecuta. JavaScript decide qué
            variables puede ver una función basándose en{" "}
            <strong>dónde la escribiste en el archivo</strong>, no en dónde la
            llamas.
          </p>
          <p>
            Imagina que tienes una función dentro de otra función. La función
            interna puede "ver" las variables de la externa porque está
            físicamente escrita dentro de ella. Esta relación se establece
            cuando escribes el código, y nunca cambia.
          </p>
          <p>
            El scope funciona como una escalera: puedes subir (acceder a
            variables de scopes externos), pero no puedes bajar (scopes internos
            no son visibles desde fuera). JavaScript recorre esta escalera
            automáticamente buscando la variable que necesitas.
          </p>

          <div className="code-block bg3">
            <pre>
              {`function externa() {
  const mensaje = "Hola desde externa";

  function interna() {
    // interna puede ver 'mensaje' porque está
    // escrita dentro de externa (scope léxico)
    console.log(mensaje); // "Hola desde externa"
  }

  interna();
}

// externa no puede ver las variables de interna
externa();`}
            </pre>
          </div>

          <br />
          <h3>En el proyecto: cada paso del wizard tiene su propio scope</h3>

          {/* Captura 1 */}
          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/state-machine-scope.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/state-machine-scope.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/state-machine-scope.webp"
                alt="Paso 1 del wizard activo, panel lateral mostrando Scope — datos encapsulados"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>

          <p>
            En la state machine, todo el estado (<code>_state</code>,{" "}
            <code>_history</code>, <code>_data</code>) vive dentro de una
            función que se ejecuta inmediatamente (IIFE). Esta técnica crea un
            scope cerrado: ningún código externo puede tocar directamente esas
            variables.
          </p>
          <p>
            Los datos están encapsulados. Solo puedes interactuar con ellos a
            través de los métodos públicos que la máquina expone. Es como una{" "}
            <strong>caja fuerte</strong>: sabes que hay cosas dentro, pero solo
            puedes acceder por la puerta oficial.
          </p>
          <p>
            Esta es la base de la <strong>encapsulación en JavaScript</strong>{" "}
            — usar scope para crear estado privado sin necesidad de clases o
            TypeScript.
          </p>

          <div className="code-block bg3">
            <pre>
              {`const machine = (function() {
  // Estado privado — inaccesible desde fuera
  let _state = 'STEP_1';
  let _history = [];
  let _data = {};

  // Solo puedes interactuar con la máquina
  // a través de estos métodos públicos
  return {
    getCurrentState: () => _state,
    getData: () => ({ ..._data }),
    transition(to) {
      _history.push(_state);
      _state = to;
    }
  };
})(); // <-- IIFE: se ejecuta inmediatamente

// Funciona ✓
console.log(machine.getCurrentState()); // 'STEP_1'

// Error ✗ — _state no existe en el scope externo
console.log(machine._state); // undefined`}
            </pre>
          </div>

          <br />
          <div
            style={{
              backgroundColor: "rgba(109, 44, 149, 0.08)",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #6d2c95",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170" }}>
              <strong>
                <FaLightbulb
                  style={{
                    display: "inline-block",
                    marginRight: "8px",
                    color: "#ea4f33",
                    verticalAlign: "middle",
                  }}
                />
                Scope vs Context: no son lo mismo
              </strong>
              <br />
              <br />
              <strong>Scope</strong> = qué variables puedes acceder → se
              determina al <em>escribir</em> el código (estático, léxico)
              <br />
              <strong>Context</strong> = a qué apunta <code>this</code> → se
              determina al <em>ejecutar</em> la función (dinámico)
              <br />
              <br />
              El scope es estático, predecible. El context cambia según cómo
              llamas la función. Vamos a ver esto en detalle más adelante.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Closures ── */}
      <section aria-labelledby="closures-section">
        <div className="highlight-box">
          <h2 id="closures-section">
            <FaCode
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            2. Closures: Más Allá de "Funciones que Recuerdan"
          </h2>
          <br />
          <p>
            La definición típica de closure es vaga e imprecisa. Vamos con la
            versión técnica:
          </p>

          <div
            style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "16px 20px",
              borderRadius: "8px",
              borderLeft: "5px solid #4737bb",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170", fontStyle: "italic" }}>
              Un closure es la combinación de una función y el{" "}
              <strong>lexical environment</strong> en el que fue declarada.
            </p>
          </div>

          <p>
            ¿Qué significa esto realmente? Cuando JavaScript ejecuta una
            función, no solo ejecuta el código — también crea un contexto de
            ejecución que incluye referencias a todas las variables del scope
            externo que la función necesita.
          </p>
          <p>
            Aquí está la magia: si una función interna referencia variables del
            scope externo,{" "}
            <strong>
              esas variables no se destruyen aunque la función externa haya
              terminado
            </strong>
            . JavaScript mantiene vivas esas referencias porque sabe que
            todavía las necesitas.
          </p>
          <p>
            Piensa en un closure como una{" "}
            <strong>mochila que la función lleva consigo</strong>. Cuando la
            función se crea, empaca todas las variables del entorno externo que
            necesita. No importa dónde llames esa función después — siempre
            lleva su mochila con las variables originales.
          </p>

          <div className="code-block bg3">
            <pre>
              {`function crearContador() {
  let count = 0; // Variable en el scope externo

  return function() {
    count++; // El closure mantiene 'count' vivo
    console.log(count);
  };
}

const contador = crearContador();
// crearContador ya terminó, pero 'count' persiste
contador(); // 1
contador(); // 2
contador(); // 3`}
            </pre>
          </div>

          <br />
          <h3>¿Por qué esto importa?</h3>
          <p>
            Sin closures, cada vez que una función termina, todas sus variables
            desaparecerían. No podrías crear funciones que mantengan estado
            interno, ni módulos con datos privados, ni callbacks que "recuerden"
            el contexto donde fueron creados.
          </p>
          <p>
            Los closures son el mecanismo que permite la programación funcional
            en JavaScript. Son la razón por la que puedes hacer esto: crear una
            función, pasarla como callback a un event listener, y que siga
            teniendo acceso a las variables que existían cuando la creaste —
            aunque esa función se ejecute segundos, minutos o incluso horas
            después.
          </p>

          <br />
          <h3>En el proyecto: los datos persisten gracias al closure</h3>

          {/* Captura 2 */}
          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/state-machine-closure.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/state-machine-closure.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/state-machine-closure.webp"
                alt="Paso 2 del wizard con chips de tecnologías seleccionadas, panel mostrando datos guardados en closure"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>

          <p>
            Cuando navegas entre pasos del wizard, los datos{" "}
            <strong>no se pierden</strong>. ¿Por qué? Porque el objeto{" "}
            <code>_data</code> vive en el scope de la función externa (el IIFE),
            y todos los métodos de la máquina son closures que mantienen acceso
            a él.
          </p>
          <p>
            Puedes ir al paso 2, seleccionar tecnologías, navegar atrás al paso
            1, cambiar tu nombre, volver al paso 2… y tus tecnologías siguen
            seleccionadas. El closure preserva ese estado aunque hayas "salido"
            de la función que lo creó.
          </p>
          <p>
            Esto es exactamente lo que necesitas para una state machine: estado
            que persiste entre transiciones pero que permanece encapsulado y
            protegido del código externo.
          </p>

          <div className="code-block bg3">
            <pre>
              {`const machine = (function() {
  let _data = {};

  return {
    // Estos métodos son closures:
    // tienen acceso a _data aunque IIFE ya terminó
    saveField(key, value) {
      _data[key] = value;
    },
    getData() {
      return { ..._data };
    }
  };
})();

machine.saveField('name', 'Ana');
machine.saveField('skills', ['JS', 'React']);

// Navegas a otro paso... y vuelves
console.log(machine.getData());
// { name: 'Ana', skills: ['JS', 'React'] } ✓`}
            </pre>
          </div>

          <br />
          <h3>Casos de uso reales donde necesitas closures</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              {
                title: "Módulos y encapsulación",
                desc: "El patrón módulo usa closures para crear APIs públicas con estado privado. Es la forma pre-ES6 de conseguir verdadera privacidad en JavaScript.",
              },
              {
                title: "Event handlers",
                desc: "Cuando pasas un callback a un evento, el closure mantiene acceso al contexto original donde se creó, no donde se ejecuta.",
              },
              {
                title: "Factories",
                desc: "Crear múltiples instancias independientes, cada una con su propio estado interno aislado.",
              },
              {
                title: "Memoization",
                desc: "Cachear resultados de funciones costosas. El closure guarda el caché internamente sin exponerlo.",
              },
            ].map(({ title, desc }) => (
              <li key={title} style={{ marginBottom: "12px" }}>
                <FaCheck
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    color: "var(--color-primary)",
                    verticalAlign: "top",
                    marginTop: "3px",
                  }}
                />
                <strong>{title}</strong> — {desc}
              </li>
            ))}
          </ul>

          <div
            style={{
              backgroundColor: "rgba(234, 79, 51, 0.1)",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #ea4f33",
              marginTop: "1.5rem",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170" }}>
              <strong>
                <FaExclamationTriangle
                  style={{
                    display: "inline-block",
                    marginRight: "8px",
                    color: "#ea4f33",
                    verticalAlign: "middle",
                  }}
                />
                Truco para entrevistas:
              </strong>{" "}
              Si te dan un código y preguntan "¿qué imprime?", el 90% de las
              veces la trampa está en un closure mal entendido. Busca funciones
              internas que referencien variables externas.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. This ── */}
      <section aria-labelledby="this-section">
        <div className="highlight-box">
          <h2 id="this-section">
            <FaCogs
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            3. <code>this</code>: El Contexto que Cambia
          </h2>
          <br />
          <p>
            <code>this</code> es el concepto más confuso de JavaScript. ¿Por
            qué? Porque su valor{" "}
            <strong>
              no depende de dónde escribes la función, sino de cómo la llamas
            </strong>
            .
          </p>
          <p>
            A diferencia del scope (que es léxico y predecible),{" "}
            <code>this</code> es <strong>dinámico</strong> — cambia en tiempo
            de ejecución según el contexto de la llamada. Esto rompe la
            intuición de muchos developers que vienen de otros lenguajes.
          </p>

          <br />
          <h3>Las 4 reglas de binding de this (en orden de prioridad)</h3>

          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
            <li style={{ marginBottom: "16px", padding: "14px 16px", background: "rgba(71,55,187,0.05)", borderRadius: "8px", borderLeft: "3px solid #4737bb" }}>
              <strong>1. Default binding</strong> — Si llamas una función sin ningún
              contexto (<code>myFunction()</code>), <code>this</code> será{" "}
              <code>undefined</code> en strict mode o el objeto global en modo no
              estricto. Es el caso por defecto cuando no aplica ninguna otra regla.
            </li>
            <li style={{ marginBottom: "16px", padding: "14px 16px", background: "rgba(71,55,187,0.05)", borderRadius: "8px", borderLeft: "3px solid #4737bb" }}>
              <strong>2. Implicit binding</strong> — Si llamas una función como
              método de un objeto (<code>user.greet()</code>), <code>this</code>{" "}
              será ese objeto. Es el caso más común y más intuitivo.
            </li>
            <li style={{ marginBottom: "16px", padding: "14px 16px", background: "rgba(71,55,187,0.05)", borderRadius: "8px", borderLeft: "3px solid #4737bb" }}>
              <strong>3. Explicit binding</strong> — Si usas <code>call</code>,{" "}
              <code>apply</code> o <code>bind</code>, tú decides manualmente qué
              será <code>this</code>. Esto sobrescribe el binding implícito.
            </li>
            <li style={{ marginBottom: "16px", padding: "14px 16px", background: "rgba(71,55,187,0.05)", borderRadius: "8px", borderLeft: "3px solid #4737bb" }}>
              <strong>4. New binding</strong> — Si llamas una función con{" "}
              <code>new</code> (<code>new User()</code>), JavaScript crea un nuevo
              objeto y <code>this</code> apunta a él. Este es el binding de mayor
              prioridad.
            </li>
          </ul>

          <div
            style={{
              backgroundColor: "rgba(109, 44, 149, 0.08)",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #6d2c95",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170" }}>
              <strong>Las arrow functions rompen todas estas reglas.</strong> No
              tienen su propio <code>this</code> — heredan el{" "}
              <code>this</code> del scope donde fueron declaradas (
              <em>lexical this</em>). Esto las hace perfectas para callbacks
              pero peligrosas como métodos de objetos.
            </p>
          </div>

          <h3>El error clásico: perder el contexto</h3>
          <p>
            Imagina que tienes un objeto con un método que usa{" "}
            <code>this</code>. Si pasas ese método como callback, pierdes el
            contexto. ¿Por qué? Porque cuando el callback se ejecuta, ya no es{" "}
            <code>objeto.metodo()</code> — es solo <code>metodo()</code>.
          </p>
          <p>
            La función sigue siendo la misma, pero el{" "}
            <strong>contexto de ejecución cambió</strong>. Ya no hay un objeto
            "a la izquierda del punto", así que <code>this</code> se vuelve{" "}
            <code>undefined</code>. Este bug aparece constantemente con event
            listeners, <code>setTimeout</code>, callbacks de arrays (
            <code>map</code>, <code>filter</code>), y cualquier situación donde
            pasas una función como valor en lugar de ejecutarla directamente.
          </p>

          <div className="code-block bg3">
            <pre>
              {`const user = {
  name: 'Ana',
  greet: function() {
    console.log('Hola, soy ' + this.name);
  }
};

user.greet(); // "Hola, soy Ana" ✓ — implicit binding

// Pierdes el contexto al asignar el método:
const fn = user.greet;
fn(); // "Hola, soy undefined" ✗ — default binding

// Solución con arrow function para callbacks:
const userArrow = {
  name: 'Ana',
  greet: function() {
    // La arrow hereda 'this' del método greet
    setTimeout(() => {
      console.log('Hola, soy ' + this.name); // "Ana" ✓
    }, 100);
  }
};`}
            </pre>
          </div>

          <br />
          <h3>En el proyecto: this referencia la máquina de estados</h3>

          {/* Captura 3 */}
          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/state-machine-this.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/state-machine-this.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/state-machine-this.webp"
                alt="Paso 3 del wizard con toggles de preferencias, panel mostrando this — la máquina referencia su propio estado"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>

          <p>
            Los métodos de la state machine usan <code>this</code> para
            auto-referenciarse. Cuando llamas{" "}
            <code>machine.canTransition()</code>, dentro de ese método{" "}
            <code>this</code> es <code>machine</code> — porque usaste implicit
            binding al llamarlo como método del objeto.
          </p>
          <p>
            Sin <code>this</code>, cada método necesitaría recibir la máquina
            como parámetro explícito. Tendrías que escribir{" "}
            <code>canTransition(machine, to)</code> en lugar de simplemente{" "}
            <code>canTransition(to)</code>. El código sería más verboso y menos
            orientado a objetos.
          </p>
          <p>
            <code>this</code> permite que un objeto se conozca a sí mismo sin
            pasarse como argumento constantemente. Es el mecanismo que hace
            posible la programación orientada a objetos en JavaScript.
          </p>
        </div>
      </section>

      {/* ── 4. Bind, Call, Apply ── */}
      <section aria-labelledby="bind-section">
        <div className="highlight-box">
          <h2 id="bind-section">
            <FaBolt
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            4. Bind, Call, Apply: Control Manual del Contexto
          </h2>
          <br />
          <p>
            Estos tres métodos te permiten controlar explícitamente el valor de{" "}
            <code>this</code>. Son la solución cuando el binding automático de
            JavaScript no hace lo que necesitas.
          </p>

          <h3>Las diferencias clave</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "12px" }}>
              <strong>
                <code>call()</code>
              </strong>{" "}
              — Invoca la función <strong>inmediatamente</strong> con el{" "}
              <code>this</code> que tú especifiques. Los argumentos se pasan uno
              por uno, separados por comas.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>
                <code>apply()</code>
              </strong>{" "}
              — Hace lo mismo que <code>call</code>, pero los argumentos se
              pasan como un <strong>array</strong>. Útil cuando ya tienes los
              argumentos en un array y no quieres expandirlos manualmente.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>
                <code>bind()</code>
              </strong>{" "}
              — <strong>No invoca la función</strong>, sino que retorna una{" "}
              <strong>nueva versión</strong> con <code>this</code> fijado
              permanentemente. Útil cuando necesitas crear una función para usar
              después (callbacks, event handlers).
            </li>
          </ul>

          <p>
            La diferencia entre <code>call</code> y <code>apply</code> es solo
            sintáctica. La diferencia entre <code>call</code>/<code>apply</code>{" "}
            y <code>bind</code> es conceptual:{" "}
            <strong>¿necesitas ejecutar ahora o después?</strong>
          </p>

          <div className="code-block bg3">
            <pre>
              {`const machine = {
  state: 'STEP_1',
  validate() {
    return this.state !== null;
  }
};

const otherContext = { state: 'STEP_2' };

// call() — invoca inmediatamente, args separados
machine.validate.call(otherContext);       // true

// apply() — invoca inmediatamente, args en array
machine.validate.apply(otherContext, []);  // true

// bind() — devuelve nueva función con this fijado
const boundValidate = machine.validate.bind(otherContext);
boundValidate(); // true — this siempre será otherContext`}
            </pre>
          </div>

          <br />
          <h3>¿Cuándo usar cada uno?</h3>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
            <li style={{ marginBottom: "10px" }}>
              <FaCheck
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "var(--color-primary)",
                  verticalAlign: "middle",
                }}
              />
              <strong>
                <code>call</code>
              </strong>{" "}
              → Necesitas invocar la función <em>ya</em> y sabes exactamente qué
              argumentos pasarle.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <FaCheck
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "var(--color-primary)",
                  verticalAlign: "middle",
                }}
              />
              <strong>
                <code>apply</code>
              </strong>{" "}
              → Necesitas invocar la función <em>ya</em> pero tus argumentos
              están en un array (o array-like).
            </li>
            <li style={{ marginBottom: "10px" }}>
              <FaCheck
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "var(--color-primary)",
                  verticalAlign: "middle",
                }}
              />
              <strong>
                <code>bind</code>
              </strong>{" "}
              → Necesitas crear una versión fijada para usar <em>después</em> —
              no la vas a llamar inmediatamente. Este es el caso del 90% de los
              callbacks y event handlers.
            </li>
          </ul>

          <h3>En el proyecto: bind garantiza el contexto correcto</h3>

          {/* Captura 4 */}
          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/state-machine-bind.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/state-machine-bind.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/state-machine-bind.webp"
                alt="Paso 4 del wizard con resumen del perfil, panel mostrando bind — contexto fijado y banner de éxito"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>

          <p>
            El método <code>reset</code> de la máquina está vinculado
            explícitamente con <code>bind</code>. ¿Por qué? Porque si alguna
            vez pasas <code>machine.reset</code> como callback a otro lugar (un
            botón de "reiniciar", por ejemplo), sin <code>bind</code> perdería
            el contexto.
          </p>
          <p>
            Con <code>bind</code>, no importa cómo se llame la función —{" "}
            <code>this</code> siempre será <code>machine</code>. Es una garantía
            permanente.
          </p>

          <div className="code-block bg3">
            <pre>
              {`const machine = (function() {
  let _state = 'STEP_1';
  let _data = {};

  const api = {
    reset() {
      _state = 'STEP_1';
      _data = {};
      console.log('Máquina reiniciada, this:', this === api);
    }
  };

  // bind fija 'this' permanentemente
  api.reset = api.reset.bind(api);

  return api;
})();

// Pasado como callback — this sigue siendo 'api' ✓
const btnReset = machine.reset;
btnReset(); // "Máquina reiniciada, this: true"`}
            </pre>
          </div>

          <div
            style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #4737bb",
              marginTop: "1.5rem",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170" }}>
              <strong>
                <FaLightbulb
                  style={{
                    display: "inline-block",
                    marginRight: "8px",
                    color: "#ea4f33",
                    verticalAlign: "middle",
                  }}
                />
                Este patrón es crítico en:
              </strong>{" "}
              React (binding de métodos en class components), event listeners
              del DOM, y cualquier situación donde pasas métodos de un objeto
              como callbacks.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Quiz ── */}
      <section aria-labelledby="quiz-section">
        <div className="highlight-box">
          <h2 id="quiz-section">
            <FaGraduationCap
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Quiz de Entrevista Técnica
          </h2>
          <br />
          <p>
            Estos son los tres escenarios clásicos que aparecen en entrevistas.
            Intenta responder antes de ver la solución.
          </p>

          {/* Pregunta 1 */}
          <h3>Pregunta 1: El closure del loop</h3>
          <div className="code-block bg3">
            <pre>
              {`for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// ¿Qué imprime?`}
            </pre>
          </div>

          <details style={{ marginTop: "12px", marginBottom: "24px" }}>
            <summary
              style={{
                cursor: "pointer",
                color: "#4737bb",
                fontWeight: 700,
                padding: "8px 0",
              }}
            >
              Ver respuesta
            </summary>
            <div
              style={{
                backgroundColor: "rgba(71, 55, 187, 0.08)",
                padding: "16px",
                borderRadius: "8px",
                marginTop: "8px",
              }}
            >
              <p style={{ color: "#2a2170", margin: "0 0 8px" }}>
                <strong>Imprime: 3, 3, 3</strong>
              </p>
              <p style={{ color: "#2a2170", margin: "0 0 8px" }}>
                <strong>Por qué:</strong> <code>var</code> tiene scope de
                función, no de bloque. Los 3 callbacks comparten el mismo{" "}
                <code>i</code>. Cuando se ejecutan (después de 100ms), el loop
                ya terminó e <code>i</code> vale 3.
              </p>
              <p style={{ color: "#2a2170", margin: "0 0 12px" }}>
                <strong>Solución:</strong> Usa <code>let</code> (que tiene block
                scope) o crea un closure explícito con un IIFE para capturar
                cada valor de <code>i</code>.
              </p>
              <div className="code-block bg3">
                <pre>
                  {`// Con let — block scope
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime: 0, 1, 2 ✓

// Con IIFE — closure explícito
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
// Imprime: 0, 1, 2 ✓`}
                </pre>
              </div>
            </div>
          </details>

          {/* Pregunta 2 */}
          <h3>Pregunta 2: This perdido</h3>
          <div className="code-block bg3">
            <pre>
              {`const obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};

const fn = obj.getValue;
console.log(fn());
// ¿Qué imprime?`}
            </pre>
          </div>

          <details style={{ marginTop: "12px", marginBottom: "24px" }}>
            <summary
              style={{
                cursor: "pointer",
                color: "#4737bb",
                fontWeight: 700,
                padding: "8px 0",
              }}
            >
              Ver respuesta
            </summary>
            <div
              style={{
                backgroundColor: "rgba(71, 55, 187, 0.08)",
                padding: "16px",
                borderRadius: "8px",
                marginTop: "8px",
              }}
            >
              <p style={{ color: "#2a2170", margin: "0 0 8px" }}>
                <strong>Imprime: undefined (o error en strict mode)</strong>
              </p>
              <p style={{ color: "#2a2170", margin: "0 0 8px" }}>
                <strong>Por qué:</strong> Al asignar <code>obj.getValue</code>{" "}
                a <code>fn</code>, pierdes el implicit binding. Cuando llamas{" "}
                <code>fn()</code>, no hay objeto antes del punto, así que{" "}
                <code>this</code> es <code>undefined</code>.
              </p>
              <p style={{ color: "#2a2170", margin: 0 }}>
                <strong>Solución:</strong> Usa <code>fn.call(obj)</code>,{" "}
                <code>obj.getValue()</code> directamente, o crea una versión
                bound con <code>obj.getValue.bind(obj)</code>.
              </p>
            </div>
          </details>

          {/* Pregunta 3 */}
          <h3>Pregunta 3: Closures independientes</h3>
          <div className="code-block bg3">
            <pre>
              {`function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const a = outer();
const b = outer();
a(); a(); b();
// ¿Qué imprime?`}
            </pre>
          </div>

          <details style={{ marginTop: "12px", marginBottom: "8px" }}>
            <summary
              style={{
                cursor: "pointer",
                color: "#4737bb",
                fontWeight: 700,
                padding: "8px 0",
              }}
            >
              Ver respuesta
            </summary>
            <div
              style={{
                backgroundColor: "rgba(71, 55, 187, 0.08)",
                padding: "16px",
                borderRadius: "8px",
                marginTop: "8px",
              }}
            >
              <p style={{ color: "#2a2170", margin: "0 0 8px" }}>
                <strong>Imprime: 1, 2, 1</strong>
              </p>
              <p style={{ color: "#2a2170", margin: 0 }}>
                <strong>Por qué:</strong> Cada llamada a <code>outer()</code>{" "}
                crea un nuevo lexical environment con su propio{" "}
                <code>count</code>. Las funciones <code>a</code> y{" "}
                <code>b</code> son closures <em>independientes</em> — cada una
                tiene su propio estado privado.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ── 6. Proyecto ── */}
      <section aria-labelledby="project-section">
        <div className="highlight-box">
          <h2 id="project-section">
            <FaRocket
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Prueba el Proyecto Completo
          </h2>
          <br />
          <p>
            He construido un wizard interactivo que demuestra todos estos
            conceptos visualmente. Ábrelo en tu navegador, interactúa con él, y
            observa el panel lateral que muestra en tiempo real:
          </p>
          <ul>
            <li>Estado actual de la máquina</li>
            <li>Historial de transiciones</li>
            <li>
              Datos guardados en el <strong>closure</strong>
            </li>
            <li>Qué concepto está activo en cada paso</li>
          </ul>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            <a
              href="https://femcodersclub.github.io/state-machine/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#4737bb",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              <FaRocket />
              Ver demo en vivo
            </a>
            <a
              href="https://github.com/femcodersclub/state-machine"
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
              Ver código en GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Conclusiones ── */}
      <section aria-labelledby="conclusions-section">
        <div className="highlight-box">
          <h2 id="conclusions-section">
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
            Scope, closures y context no son conceptos para memorizar — son{" "}
            <strong>mecanismos que usas todos los días</strong>, aunque no seas
            consciente. Entenderlos te permite:
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Debuggear bugs de contexto en segundos",
              "Diseñar APIs más limpias y seguras",
              "Responder con confianza en entrevistas técnicas",
              "Escribir código que otros developers puedan predecir",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "12px" }}>
                <FaCheck
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    color: "var(--color-primary)",
                    verticalAlign: "middle",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Si llegaste hasta aquí, ya sabes más que el 60% de los developers
            que solo memorizan definiciones.
          </p>
          <p>
            <strong>
              ¿Qué concepto te resultó más claro con el proyecto?
            </strong>{" "}
            Déjame un comentario — me encantaría saber qué sección te ayudó
            más.
          </p>
          <br />
          <p style={{ fontStyle: "italic", color: "#6d2c95" }}>
            Este post es parte de la serie de JavaScript avanzado de FemCoders
            Club. Si quieres profundizar más en temas como event loop, promises
            o prototypes, síguenos en{" "}
            <a
              href="https://www.linkedin.com/company/femcoders-club"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              LinkedIn
            </a>{" "}
            y únete a nuestra comunidad de 1,300+ mujeres en tech.
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
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Closures"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN - Closures en JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN - this en JavaScript
              </a>
            </li>
            <li>
              <Link
                to="/recursos/js/fundamentos-javascript-profundos"
                className="highlight-link"
              >
                Fundamentos de JavaScript que Realmente Importan
              </Link>
            </li>
            <li>
              <Link
                to="/recursos/js/event-loop-javascript"
                className="highlight-link"
              >
                Event Loop en JavaScript: Cómo Funciona la Asincronía
              </Link>
            </li>
          </ul>
          <br />
          <h3>Únete a la comunidad</h3>
          <p>
            ¿Tienes dudas sobre closures o context? ¿Quieres compartir tus
            proyectos? Únete a FemCoders Club, una comunidad de más de 1,300
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
            Si estos conceptos te resultan desafiantes o quieres profundizar más
            con orientación personalizada, en femCoders Club ofrecemos{" "}
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

export default ClosuresScopeContext;
