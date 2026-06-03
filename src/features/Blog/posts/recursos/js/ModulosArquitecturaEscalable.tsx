import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaBook,
  FaCheck,
  FaCode,
  FaCubes,
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

const ModulosArquitecturaEscalable: React.FC = () => {
  const postId = 40;
  const publicationDate = "3 de junio de 2026";
  const currentUrl =
    "https://www.femcodersclub.com/recursos/js/modulos-arquitectura-escalable";

  return (
    <article className="blog-post">
      <Helmet>
        <title>
          Módulos y Arquitectura Escalable en JavaScript | femCoders Club
        </title>
        <meta
          name="description"
          content="ES Modules vs CommonJS, dynamic import, tree shaking y cómo organizar un proyecto JavaScript que va a crecer. Proyecto práctico: Productivity Dashboard, un dashboard modular en vanilla JavaScript con tres widgets independientes."
        />
        <meta
          name="keywords"
          content="ES modules javascript, CommonJS vs ES modules, dynamic import javascript, tree shaking, arquitectura javascript, módulos javascript, code splitting, importaciones circulares, femcoders club"
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Módulos y Arquitectura Escalable en JavaScript | femCoders Club"
        />
        <meta
          property="og:description"
          content="ES Modules vs CommonJS, dynamic import, tree shaking y cómo organizar un proyecto JavaScript que va a crecer. Proyecto práctico: Productivity Dashboard."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/modulos-arquitectura-escalable.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Módulos y Arquitectura Escalable en JavaScript — femCoders Club"
        />
        <meta
          name="twitter:description"
          content="ES Modules vs CommonJS, dynamic import, tree shaking y arquitectura modular en vanilla JS. Con proyecto práctico: Productivity Dashboard."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/modulos-arquitectura-escalable.webp"
        />

        <meta property="article:published_time" content="2026-06-03T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="ES Modules" />
        <meta property="article:tag" content="Dynamic Import" />
        <meta property="article:tag" content="Tree Shaking" />
        <meta property="article:tag" content="Arquitectura" />

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
            srcSet="/public-optimized/mobile/assets/javascript/modulos-arquitectura-escalable.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/javascript/modulos-arquitectura-escalable.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/javascript/modulos-arquitectura-escalable.webp"
            alt="Módulos y Arquitectura Escalable en JavaScript"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Módulos y Arquitectura Escalable
        <br />
        en JavaScript
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
          Hay un momento concreto en la vida de cualquier proyecto JavaScript en
          el que el código deja de escalar. No es dramático. No hay un error en
          rojo que lo anuncie. Es más sutil: empiezas a perder el hilo de qué
          función está definida dónde, un cambio en un archivo rompe algo en otro
          que creías que no tenía nada que ver, y el tiempo que tardas en
          encontrar una función se duplica cada semana. Ese momento tiene nombre:
          es el momento en que necesitas módulos de verdad, no solo archivos
          separados.
        </p>
        <p className="intro-text">
          La diferencia entre dividir código en archivos y construir una
          arquitectura modular es la misma que hay entre apilar cajas y diseñar
          un sistema de almacenamiento. Las cajas están ahí, pero sin estructura,
          cada vez que necesitas algo tienes que moverlo todo. Los módulos no son
          solo una forma de organizar archivos:{" "}
          <strong>
            son contratos entre partes del sistema, donde cada pieza declara
            exactamente qué ofrece y qué necesita.
          </strong>
        </p>
        <p className="intro-text">
          Este post va de eso. De cómo JavaScript gestiona esos contratos con ES
          Modules, de qué decisiones de arquitectura marcan la diferencia cuando
          un proyecto crece, y de cómo el dynamic import cambia por completo la
          forma en que pensamos sobre qué código se carga y cuándo.
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
            { icon: <FaCode />, label: "ES Modules", color: "#4737bb" },
            { icon: <FaRocket />, label: "Dynamic Import", color: "#6d2c95" },
            { icon: <FaTools />, label: "Tree Shaking", color: "#ea4f33" },
            { icon: <FaCubes />, label: "Arquitectura", color: "#4737bb" },
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

      {/* ── 1. ES Modules vs CommonJS ── */}
      <section aria-labelledby="esmodules-section">
        <div className="highlight-box">
          <h2 id="esmodules-section">
            <FaCode
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            ES Modules vs CommonJS: la diferencia que sí importa
          </h2>
          <br />
          <p>
            Durante años, JavaScript no tuvo un sistema de módulos nativo.
            Node.js adoptó CommonJS —el sistema del <code>require()</code>— y
            durante mucho tiempo fue el estándar de facto. Hoy conviven dos
            sistemas, y entender la diferencia no es trivia de entrevista: afecta
            a cómo el runtime carga tu código, a cómo los bundlers lo optimizan
            y a qué errores verás en producción.
          </p>
          <p>
            La diferencia fundamental es cuándo se resuelven las dependencias.
            CommonJS las resuelve en tiempo de ejecución: cuando el intérprete
            llega a un <code>require()</code>, para, carga el módulo, y continúa.
            ES Modules las resuelven en tiempo de análisis estático: antes de
            ejecutar una sola línea, el motor ya sabe el grafo completo de
            dependencias. Esto no es un detalle menor. Es lo que hace posible el
            tree shaking, es lo que permite que los bundlers eliminen código
            muerto con certeza, y es lo que hace que las importaciones circulares
            en ES Modules se comporten de forma diferente a las de CommonJS —y a
            menudo más predecible.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                background: "rgba(71,55,187,0.06)",
                borderRadius: "8px",
                padding: "16px",
                borderTop: "3px solid #4737bb",
              }}
            >
              <strong
                style={{ color: "#4737bb", display: "block", marginBottom: "8px" }}
              >
                CommonJS
              </strong>
              <code style={{ fontSize: "0.85rem", color: "#2a2170" }}>
                require()
              </code>
              <p
                style={{ fontSize: "0.9rem", margin: "8px 0 0", color: "#2a2170" }}
              >
                Dependencias en tiempo de <strong>ejecución</strong>. Dinámico,
                sincrónico. Sin tree shaking.
              </p>
            </div>
            <div
              style={{
                background: "rgba(109,44,149,0.06)",
                borderRadius: "8px",
                padding: "16px",
                borderTop: "3px solid #6d2c95",
              }}
            >
              <strong
                style={{ color: "#6d2c95", display: "block", marginBottom: "8px" }}
              >
                ES Modules
              </strong>
              <code style={{ fontSize: "0.85rem", color: "#2a2170" }}>
                import / export
              </code>
              <p
                style={{ fontSize: "0.9rem", margin: "8px 0 0", color: "#2a2170" }}
              >
                Dependencias en tiempo de <strong>análisis</strong>. Estático,
                predecible. Tree shaking posible.
              </p>
            </div>
          </div>

          <p>
            En la práctica, si trabajas en un proyecto Node.js moderno, el campo{" "}
            <code>"type": "module"</code> en el <code>package.json</code> lo es
            todo. El{" "}
            <a
              href="https://github.com/femcodersclub/productivity-dashboard-js"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              Productivity Dashboard
            </a>{" "}
            lo tiene declarado desde el principio: cada archivo es un ES Module y
            todas las importaciones siguen las reglas del estándar. No hay{" "}
            <code>require()</code>, no hay <code>module.exports</code>. Solo{" "}
            <code>import</code> y <code>export</code>.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// CommonJS — resolución en tiempo de ejecución
const fs = require('fs');
const { suma } = require('./utils');
module.exports = { procesarArchivo };

// ES Modules — resolución en tiempo de análisis estático
import fs from 'fs';
import { suma } from './utils.js';
export { procesarArchivo };
export default class Dashboard { /* ... */ }`}
            </pre>
          </div>
        </div>
      </section>

      {/* ── 2. Named vs default exports ── */}
      <section aria-labelledby="exports-section">
        <div className="highlight-box">
          <h2 id="exports-section">
            <FaCubes
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Named exports, default exports: cuándo usar cada uno
          </h2>
          <br />
          <p>
            Hay una decisión que se toma decenas de veces en cualquier proyecto y
            que raramente se piensa con cuidado: ¿exportación nombrada o
            exportación por defecto?
          </p>
          <p>
            La exportación por defecto tiene sentido cuando un módulo tiene una
            responsabilidad principal y única. Un widget, un componente, una
            clase. El consumidor del módulo decide cómo llamarlo al importarlo,
            lo que da flexibilidad. Los tres widgets del dashboard —Pomodoro,
            Hábitos y Notas— usan exportación por defecto precisamente porque
            cada módulo representa una única cosa: ese widget y nada más.
          </p>
          <p>
            Las exportaciones nombradas tienen sentido cuando un módulo agrupa
            funcionalidad relacionada. El sistema de plugins del dashboard exporta{" "}
            <code>PluginManager</code>, <code>loggerPlugin</code> y{" "}
            <code>keyboardPlugin</code> con nombre, porque los tres son distintos
            y el consumidor puede elegir importar solo lo que necesita. Aquí
            entra en juego el tree shaking: si solo importas{" "}
            <code>loggerPlugin</code>, un bundler como Rollup o esbuild puede
            eliminar <code>keyboardPlugin</code> del bundle final porque sabe,
            estáticamente, que nadie lo usa.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// Default export — una responsabilidad principal
// widgets/pomodoro.js
export default class PomodoroWidget {
  name = 'pomodoro';
  async init(container) { /* ... */ }
  destroy() { /* ... */ }
}

// Named exports — funcionalidad agrupada, consumo selectivo
// plugins/index.js
export class PluginManager { /* ... */ }
export const loggerPlugin   = { /* ... */ }
export const keyboardPlugin = { /* ... */ }

// El consumidor elige qué necesita — el bundler elimina el resto
import { loggerPlugin } from './plugins/index.js';
// keyboardPlugin no viaja al bundle si nadie lo importa ✓`}
            </pre>
          </div>

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
              <strong>La pregunta correcta no es cuál usar por defecto.</strong>{" "}
              Es: ¿este módulo tiene una responsabilidad principal, o agrupa
              varias cosas relacionadas? La respuesta determina el tipo de
              exportación —no la convención del equipo ni la consistencia
              superficial.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Dynamic import ── */}
      <section aria-labelledby="dynamic-import-section">
        <div className="highlight-box">
          <h2 id="dynamic-import-section">
            <FaRocket
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Dynamic import: el cambio de paradigma
          </h2>
          <br />
          <p>
            Los imports estáticos —los que están al principio de cada
            archivo— se resuelven antes de que el código se ejecute. Son
            síncronos en su análisis, predecibles, y permiten optimizaciones en
            tiempo de compilación. Pero tienen una limitación estructural: todo
            lo que importas al principio de un archivo se descarga y se ejecuta
            antes de que tu aplicación arranque, aunque el usuario nunca llegue a
            necesitarlo.
          </p>
          <p>
            El dynamic import —<code>import()</code> como función, no como
            declaración— resuelve exactamente ese problema. Devuelve una promesa
            que se resuelve con el módulo cuando lo solicitas, en el momento en
            que lo necesitas. El módulo no se descarga antes. No existe para el
            runtime hasta que tú decides que existe.
          </p>
          <p>
            Esto es lo que hace el dashboard cuando el usuario pulsa «+ Pomodoro»:
            en ese momento, y solo en ese momento, el módulo del widget viaja por
            la red y se ejecuta. Si el usuario nunca activa el widget de Hábitos,
            ese código nunca se descarga. En aplicaciones reales con decenas de
            módulos, la diferencia en tiempo de carga inicial es significativa.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// core/dashboard.js — widgets cargados solo cuando el usuario los activa
async loadWidget(name) {
  if (this.widgets.has(name)) return; // Ya está en memoria

  const button = document.querySelector(\`[data-widget="\${name}"]\`);
  button?.setAttribute('disabled', 'true');

  try {
    // El módulo no existe para el runtime hasta este instante
    const { default: WidgetClass } = await import(\`../widgets/\${name}.js\`);
    const widget = new WidgetClass();
    await widget.init(this.container);
    this.widgets.set(name, widget);
    this._notify('load', { name });
  } catch (error) {
    console.error(\`Error cargando widget \${name}:\`, error);
  } finally {
    button?.removeAttribute('disabled'); // Siempre se restaura ✓
  }
}`}
            </pre>
          </div>

          <p>
            El dynamic import también es la base del code splitting en frameworks
            modernos. Cuando React o Vue dividen tu aplicación en chunks que se
            cargan por rutas, por debajo están usando exactamente este mecanismo.
            Entender el dynamic import en vanilla JS es entender qué hace tu
            bundler cuando le dices que separe el código por rutas.
          </p>

          <div
            style={{
              backgroundColor: "rgba(234, 79, 51, 0.08)",
              padding: "20px",
              borderRadius: "8px",
              borderLeft: "4px solid #ea4f33",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170" }}>
              <strong>La trampa del dynamic import silencioso:</strong> sin un
              bloque <code>try/catch</code>, cualquier fallo —red lenta, módulo
              no encontrado, error de sintaxis— se convierte en una excepción no
              capturada. El dashboard deshabilita el botón mientras carga y lo
              restaura tanto si tiene éxito como si falla. Un detalle pequeño,
              pero es la diferencia entre código de tutorial y código que
              sobrevive a producción.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Circular imports ── */}
      <section aria-labelledby="circulares-section">
        <div className="highlight-box">
          <h2 id="circulares-section">
            <FaShieldAlt
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Importaciones circulares: el error que no ves venir
          </h2>
          <br />
          <p>
            Las importaciones circulares son el bug más desconcertante del sistema
            de módulos. El módulo A importa algo de B, B importa algo de A, y el
            resultado no es un error claro: es una variable que vale{" "}
            <code>undefined</code> en tiempo de ejecución, exactamente donde
            esperabas que tuviera su valor. El código parece correcto, los imports
            están bien escritos, y aun así algo falla.
          </p>
          <p>
            Por qué ocurre: cuando el motor de JavaScript encuentra una
            dependencia circular, tiene que decidir en qué orden inicializar los
            módulos. Lo hace de la mejor forma que puede —hay un orden definido en
            la especificación— pero en algún punto del ciclo, un módulo se ejecuta
            antes de que sus dependencias estén completamente inicializadas. El
            resultado es que la importación que esperabas que tuviera un valor
            llega vacía.
          </p>
          <p>
            La forma más común de encontrarte con esto en un proyecto real no es
            en un ciclo de dos módulos obvios, sino en uno de cinco o seis: el
            módulo de utilidades importa el de configuración, el de configuración
            importa el de logger, el de logger importa el de utilidades para
            formatear mensajes. Nadie diseñó eso intencionalmente. Fue creciendo.
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
              <strong>La solución no es técnica: es de diseño.</strong> Las
              dependencias circulares casi siempre son síntoma de que dos módulos
              están demasiado acoplados, o de que hay una responsabilidad que
              debería vivir en un tercer módulo del que ambos dependan. En el
              dashboard, la regla es explícita: los widgets no importan nada del
              core, el core no importa widgets concretos. Esa dirección
              unidireccional hace que las circulares sean estructuralmente
              imposibles.
            </p>
          </div>

          <p>
            Cuando encuentres una, la herramienta más útil no es el debugger: es
            dibujar el grafo de dependencias en papel y preguntarte qué
            responsabilidad está en el lugar equivocado.
          </p>
        </div>
      </section>

      {/* ── 5. Tree shaking ── */}
      <section aria-labelledby="treeshaking-section">
        <div className="highlight-box">
          <h2 id="treeshaking-section">
            <FaTools
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Tree shaking: lo que tu bundler elimina (y por qué)
          </h2>
          <br />
          <p>
            Tree shaking es el proceso por el que un bundler analiza el grafo de
            importaciones de tu proyecto y elimina el código que nadie importa. El
            nombre viene de la imagen de sacudir un árbol para que caigan las hojas
            muertas.
          </p>
          <p>
            Para que funcione, dos condiciones tienen que cumplirse. Primera: el
            código tiene que usar ES Modules, porque solo con importaciones
            estáticas el bundler puede hacer el análisis en tiempo de compilación.
            Con CommonJS no es posible —las dependencias se conocen en tiempo de
            ejecución, no antes. Segunda: el código no puede tener efectos
            secundarios en el nivel del módulo —es decir, no puede ejecutar cosas
            con consecuencias observables cuando simplemente se importa.
          </p>
          <p>
            La implicación práctica es que la forma en que estructuras tus
            exportaciones determina cuánto código muerto llega a producción. Un
            módulo que exporta una clase monolítica con veinte métodos es opaco
            para el tree shaker: o se incluye entero, o no se incluye. Un módulo
            que exporta veinte funciones independientes permite incluir exactamente
            las que se usan.
          </p>

          <div className="code-block bg3">
            <pre>
              {`// ✗ Opaco para el tree shaker — la clase entera o nada
export default class Utils {
  static retry(fn, n)      { /* ... */ }
  static debounce(fn, ms)  { /* ... */ }
  static memoize(fn)       { /* ... */ }
}

// ✓ Granular — el bundler incluye exactamente lo que se usa
export function retry(fn, n)     { /* ... */ }
export function debounce(fn, ms) { /* ... */ }
export function memoize(fn)      { /* ... */ }

// Solo retry viaja al bundle si nadie importa las otras dos
import { retry } from './utils.js';`}
            </pre>
          </div>

          <p>
            Esto conecta con una decisión de arquitectura que se aplica desde el
            primer post de la serie: cuando construimos el{" "}
            <Link to="/recursos/js/estructuras-datos-js" className="highlight-link">
              LRU Cache System
            </Link>
            , la clase principal encapsula toda la lógica porque el módulo tiene
            una sola responsabilidad y siempre se usa entera. Cuando construimos el
            API Resilience Wrapper, las utilidades de retry y backoff están
            separadas precisamente para que quien solo necesite una de las dos no
            cargue la otra.
          </p>
        </div>
      </section>

      {/* ── 6. Organización del proyecto ── */}
      <section aria-labelledby="organizacion-section">
        <div className="highlight-box">
          <h2 id="organizacion-section">
            <FaCubes
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Cómo organizar un proyecto JavaScript que va a crecer
          </h2>
          <br />
          <p>
            La organización de archivos no es una cuestión estética. Es una
            decisión de arquitectura que determina qué tan fácil es añadir
            funcionalidad sin romper lo que ya existe, y qué tan rápido encuentra
            una persona nueva —o tú misma dentro de seis meses— lo que está
            buscando.
          </p>
          <p>Hay dos modelos principales que funcionan en proyectos reales.</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                background: "rgba(71,55,187,0.06)",
                borderRadius: "8px",
                padding: "16px",
                borderTop: "3px solid #4737bb",
              }}
            >
              <strong
                style={{ color: "#4737bb", display: "block", marginBottom: "8px" }}
              >
                Por tipo
              </strong>
              <code
                style={{
                  fontSize: "0.8rem",
                  color: "#2a2170",
                  display: "block",
                  whiteSpace: "pre",
                }}
              >
                {`widgets/\nplugins/\ncore/\ntests/`}
              </code>
              <p
                style={{ fontSize: "0.9rem", margin: "8px 0 0", color: "#2a2170" }}
              >
                Bien cuando los módulos del mismo tipo son independientes entre sí
                y la estructura es estable desde el principio.
              </p>
            </div>
            <div
              style={{
                background: "rgba(109,44,149,0.06)",
                borderRadius: "8px",
                padding: "16px",
                borderTop: "3px solid #6d2c95",
              }}
            >
              <strong
                style={{ color: "#6d2c95", display: "block", marginBottom: "8px" }}
              >
                Por dominio
              </strong>
              <code
                style={{
                  fontSize: "0.8rem",
                  color: "#2a2170",
                  display: "block",
                  whiteSpace: "pre",
                }}
              >
                {`users/\npayments/\nauth/\nnotifications/`}
              </code>
              <p
                style={{ fontSize: "0.9rem", margin: "8px 0 0", color: "#2a2170" }}
              >
                Bien cuando el proyecto crece por adición de dominios y cada
                feature tiene su propio ciclo de vida.
              </p>
            </div>
          </div>

          <p>
            La decisión no es permanente, pero cambiarla a mitad de un proyecto
            tiene un coste real. Vale la pena pensarla antes de crear la primera
            carpeta.
          </p>
          <p>
            Lo que sí es permanente, o debería serlo, es la dirección de las
            dependencias. En el dashboard, los widgets no importan nada del core.
            El core no sabe nada de los widgets específicos —solo conoce la
            interfaz que deben implementar. Los plugins tampoco importan widgets.{" "}
            <strong>
              Esta dirección unidireccional de dependencias es lo que hace que el
              sistema sea extensible: puedes añadir un widget nuevo sin tocar una
              sola línea del código existente.
            </strong>
          </p>
        </div>
      </section>

      {/* ── 7. El proyecto ── */}
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
            El proyecto: Productivity Dashboard
          </h2>
          <br />
          <p>
            El{" "}
            <a
              href="https://github.com/femcodersclub/productivity-dashboard-js"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              Productivity Dashboard
            </a>{" "}
            es la demostración práctica de todo lo anterior. Un dashboard modular
            con tres widgets independientes —un timer Pomodoro, un tracker de
            hábitos con cálculo de racha, y un editor de notas con
            autoguardado— construido en vanilla JavaScript sin ninguna dependencia
            externa.
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
              { concepto: "ES Modules", detalle: "Estándar nativo", color: "#4737bb" },
              { concepto: "Dynamic import", detalle: "Carga bajo demanda", color: "#6d2c95" },
              { concepto: "Plugin system", detalle: "Extensible sin modificar", color: "#ea4f33" },
              { concepto: "17 tests", detalle: "Sin dependencias", color: "#4737bb" },
            ].map(({ concepto, detalle, color }) => (
              <div
                key={concepto}
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
                  {concepto}
                </strong>
                <span style={{ fontSize: "0.85rem", color: "#2a2170" }}>
                  {detalle}
                </span>
              </div>
            ))}
          </div>

          <p>
            Lo que hace que este proyecto sea diferente a otros dashboards de
            portfolio es la arquitectura. El core del dashboard —menos de 150
            líneas— no sabe qué widgets existen. Solo sabe cómo cargar un módulo
            dinámicamente, cómo gestionar su ciclo de vida y cómo persistir su
            configuración. Cada widget es un ES Module independiente que el
            dashboard carga solo cuando el usuario lo activa.
          </p>
          <p>
            El sistema de plugins sigue el mismo principio. El{" "}
            <code>PluginManager</code> incluido permite añadir comportamiento
            transversal —logging, atajos de teclado, analytics— sin modificar el
            core ni los widgets. El plugin de logging que viene incluido demuestra
            exactamente esto: intercepta los métodos <code>load</code> y{" "}
            <code>unload</code> del dashboard sin que el dashboard sepa que está
            siendo observado.
          </p>

          <div className="code-block bg3">
            <pre>
              {`git clone https://github.com/femcodersclub/productivity-dashboard-js
cd productivity-dashboard-js
node tests/dashboard.test.js
npx serve demo`}
            </pre>
          </div>

          <p>
            El README incluye las instrucciones para añadir un widget propio y
            para crear un plugin desde cero. Es el punto de partida si quieres
            extender el proyecto.
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
              href="https://github.com/femcodersclub/productivity-dashboard-js"
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
              href="https://femcodersclub.github.io/productivity-dashboard-js/"
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
            Los módulos no son una forma de organizar archivos. Son contratos. Y
            la arquitectura no es la estructura de carpetas —es la dirección de
            las dependencias.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              {
                texto: "ES Modules",
                desc: "análisis estático, tree shaking posible, grafo de dependencias predecible.",
              },
              {
                texto: "Default vs named exports",
                desc: "la elección depende de cuántas responsabilidades tiene el módulo, no de convención.",
              },
              {
                texto: "Dynamic import",
                desc: "carga bajo demanda, siempre con manejo de errores explícito.",
              },
              {
                texto: "Importaciones circulares",
                desc: "síntoma de diseño, no problema técnico — la solución es mover responsabilidades.",
              },
              {
                texto: "Tree shaking",
                desc: "exports granulares sobre clases monolíticas cuando el consumo es selectivo.",
              },
              {
                texto: "Dirección unidireccional de dependencias",
                desc: "el principio que hace extensible cualquier sistema.",
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
            ¿Tienes dudas o quieres compartir cómo estructuras tus proyectos
            JavaScript? Únete a la conversación en FemCoders Club, una comunidad
            de más de 1.500 mujeres en tecnología en España.
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
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN — Guía de módulos JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://github.com/femcodersclub/productivity-dashboard-js"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                productivity-dashboard-js — Proyecto completo en GitHub
              </a>
            </li>
            <li>
              <a
                href="https://femcodersclub.github.io/productivity-dashboard-js/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Productivity Dashboard — Demo en vivo
              </a>
            </li>
            <li>
              <Link
                to="/recursos/js/patrones-diseno-javascript"
                className="highlight-link"
              >
                Patrones de Diseño en JavaScript Puro: Más Allá del Catálogo
              </Link>
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
                to="/recursos/js/event-loop-javascript"
                className="highlight-link"
              >
                Event Loop y Asincronía en JavaScript
              </Link>
            </li>
          </ul>
          <br />
          <h3>Únete a la comunidad</h3>
          <p>
            ¿Tienes dudas sobre módulos o arquitectura JavaScript? Únete a
            FemCoders Club, una comunidad de más de 1.500 mujeres en tecnología
            donde aprendemos y crecemos juntas.
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
            Si los módulos y la arquitectura JavaScript te resultan desafiantes o
            quieres profundizar más con orientación personalizada, en femCoders
            Club ofrecemos{" "}
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

export default ModulosArquitecturaEscalable;
