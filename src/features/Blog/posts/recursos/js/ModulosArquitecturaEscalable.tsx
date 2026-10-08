import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  NotaPost,
  SeccionPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const ModulosArquitecturaEscalable: React.FC = () => (
  <>
      <Helmet>
        <title>
          Módulos y arquitectura escalable en JavaScript | FemCoders Club
        </title>
        <meta
          name="description"
          content="ES Modules vs CommonJS, dynamic import, tree shaking y cómo organizar un proyecto JavaScript que va a crecer. Proyecto práctico: Productivity Dashboard, un dashboard modular en vanilla JavaScript con tres widgets independientes."
        />
        <meta
          name="keywords"
          content="ES modules javascript, CommonJS vs ES modules, dynamic import javascript, tree shaking, arquitectura javascript, módulos javascript, code splitting, importaciones circulares, femcoders club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/modulos-arquitectura-escalable" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Módulos y arquitectura escalable en JavaScript | FemCoders Club"
        />
        <meta
          property="og:description"
          content="ES Modules vs CommonJS, dynamic import, tree shaking y cómo organizar un proyecto JavaScript que va a crecer. Proyecto práctico: Productivity Dashboard."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/modulos-arquitectura-escalable" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/modulos-arquitectura-escalable.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Módulos y arquitectura escalable en JavaScript — femCoders Club"
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

    <PlantillaPost
      ruta="/recursos/js/modulos-arquitectura-escalable"
      titulo="Módulos y arquitectura escalable en JavaScript"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={40}
      portadaConIA
      entradilla={
        <>
          <p>
            Hay un momento concreto en la vida de cualquier proyecto JavaScript
            en el que el código deja de escalar. No es dramático. No hay un
            error en rojo que lo anuncie. Es más sutil: empiezas a perder el
            hilo de qué función está definida dónde, un cambio en un archivo
            rompe algo en otro que creías que no tenía nada que ver, y el tiempo
            que tardas en encontrar una función se duplica cada semana. Ese
            momento tiene nombre: es el momento en que necesitas módulos de
            verdad, no solo archivos separados.
          </p>
          <p>
            La diferencia entre dividir código en archivos y construir una
            arquitectura modular es la misma que hay entre apilar cajas y
            diseñar un sistema de almacenamiento. Las cajas están ahí, pero sin
            estructura, cada vez que necesitas algo tienes que moverlo todo. Los
            módulos no son solo una forma de organizar archivos:{" "}
            <strong>
              son contratos entre partes del sistema, donde cada pieza declara
              exactamente qué ofrece y qué necesita.
            </strong>
          </p>
          <p>
            Este post va de eso. De cómo JavaScript gestiona esos contratos con
            ES Modules, de qué decisiones de arquitectura marcan la diferencia
            cuando un proyecto crece, y de cómo el dynamic import cambia por
            completo la forma en que pensamos sobre qué código se carga y
            cuándo.
          </p>
        </>
      }
    >
      <ul>
        <li>ES Modules</li>
        <li>Dynamic import</li>
        <li>Tree shaking</li>
        <li>Arquitectura</li>
      </ul>

      <SeccionPost titulo="ES Modules vs. CommonJS: la diferencia que sí importa">
        <p>
          Durante años, JavaScript no tuvo un sistema de módulos nativo.
          Node.js adoptó CommonJS —el sistema del <code>require()</code>— y
          durante mucho tiempo fue el estándar de facto. Hoy conviven dos
          sistemas, y entender la diferencia no es trivia de entrevista: afecta
          a cómo el runtime carga tu código, a cómo los bundlers lo optimizan y
          a qué errores verás en producción.
        </p>
        <p>
          La diferencia fundamental es cuándo se resuelven las dependencias.
          CommonJS las resuelve en tiempo de ejecución: cuando el intérprete
          llega a un <code>require()</code>, para, carga el módulo y continúa.
          ES Modules las resuelven en tiempo de análisis estático: antes de
          ejecutar una sola línea, el motor ya sabe el grafo completo de
          dependencias. Esto no es un detalle menor. Es lo que hace posible el
          tree shaking, es lo que permite que los bundlers eliminen código
          muerto con certeza, y es lo que hace que las importaciones circulares
          en ES Modules se comporten de forma diferente a las de CommonJS —y a
          menudo más predecible.
        </p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "CommonJS",
              texto: (
                <>
                  <p>
                    <code>require()</code>
                  </p>
                  <p>
                    Dependencias en tiempo de <strong>ejecución</strong>.
                    Dinámico, síncrono. Sin tree shaking.
                  </p>
                </>
              ),
            },
            {
              titulo: "ES Modules",
              texto: (
                <>
                  <p>
                    <code>import / export</code>
                  </p>
                  <p>
                    Dependencias en tiempo de <strong>análisis</strong>.
                    Estático, predecible. Tree shaking posible.
                  </p>
                </>
              ),
            },
          ]}
        />

        <p>
          En la práctica, si trabajas en un proyecto Node.js moderno, el campo{" "}
          <code>"type": "module"</code> en el <code>package.json</code> lo es
          todo. El{" "}
          <a
            href="https://github.com/femcodersclub/productivity-dashboard-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Productivity Dashboard
          </a>{" "}
          lo tiene declarado desde el principio: cada archivo es un ES Module y
          todas las importaciones siguen las reglas del estándar. No hay{" "}
          <code>require()</code>, no hay <code>module.exports</code>. Solo{" "}
          <code>import</code> y <code>export</code>.
        </p>

        <CodigoPost lenguaje="JavaScript">{`// CommonJS — resolución en tiempo de ejecución
const fs = require('fs');
const { suma } = require('./utils');
module.exports = { procesarArchivo };

// ES Modules — resolución en tiempo de análisis estático
import fs from 'fs';
import { suma } from './utils.js';
export { procesarArchivo };
export default class Dashboard { /* ... */ }`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Named exports, default exports: cuándo usar cada uno">
        <p>
          Hay una decisión que se toma decenas de veces en cualquier proyecto y
          que raramente se piensa con cuidado: ¿exportación nombrada o
          exportación por defecto?
        </p>
        <p>
          La exportación por defecto tiene sentido cuando un módulo tiene una
          responsabilidad principal y única. Un widget, un componente, una
          clase. El consumidor del módulo decide cómo llamarlo al importarlo, lo
          que da flexibilidad. Los tres widgets del dashboard —Pomodoro, Hábitos
          y Notas— usan exportación por defecto precisamente porque cada módulo
          representa una única cosa: ese widget y nada más.
        </p>
        <p>
          Las exportaciones nombradas tienen sentido cuando un módulo agrupa
          funcionalidad relacionada. El sistema de plugins del dashboard
          exporta <code>PluginManager</code>, <code>loggerPlugin</code> y{" "}
          <code>keyboardPlugin</code> con nombre, porque los tres son distintos
          y el consumidor puede elegir importar solo lo que necesita. Aquí entra
          en juego el tree shaking: si solo importas <code>loggerPlugin</code>,
          un bundler como Rollup o esbuild puede eliminar{" "}
          <code>keyboardPlugin</code> del bundle final porque sabe,
          estáticamente, que nadie lo usa.
        </p>

        <CodigoPost lenguaje="JavaScript">{`// Default export — una responsabilidad principal
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
// keyboardPlugin no viaja al bundle si nadie lo importa ✓`}</CodigoPost>

        <NotaPost titulo="La pregunta correcta no es cuál usar por defecto">
          <p>
            Es: ¿este módulo tiene una responsabilidad principal, o agrupa
            varias cosas relacionadas? La respuesta determina el tipo de
            exportación —no la convención del equipo ni la consistencia
            superficial.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Dynamic import: el cambio de paradigma">
        <p>
          Los imports estáticos —los que están al principio de cada archivo— se
          resuelven antes de que el código se ejecute. Son síncronos en su
          análisis, predecibles, y permiten optimizaciones en tiempo de
          compilación. Pero tienen una limitación estructural: todo lo que
          importas al principio de un archivo se descarga y se ejecuta antes de
          que tu aplicación arranque, aunque el usuario nunca llegue a
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

        <CodigoPost lenguaje="JavaScript">{`// core/dashboard.js — widgets cargados solo cuando el usuario los activa
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
}`}</CodigoPost>

        <p>
          El dynamic import también es la base del code splitting en frameworks
          modernos. Cuando React o Vue dividen tu aplicación en chunks que se
          cargan por rutas, por debajo están usando exactamente este mecanismo.
          Entender el dynamic import en vanilla JS es entender qué hace tu
          bundler cuando le dices que separe el código por rutas.
        </p>

        <NotaPost titulo="La trampa del dynamic import silencioso" tipo="aviso">
          <p>
            Sin un bloque <code>try/catch</code>, cualquier fallo —red lenta,
            módulo no encontrado, error de sintaxis— se convierte en una
            excepción no capturada. El dashboard deshabilita el botón mientras
            carga y lo restaura tanto si tiene éxito como si falla. Un detalle
            pequeño, pero es la diferencia entre código de tutorial y código que
            sobrevive a producción.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Importaciones circulares: el error que no ves venir">
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
          la especificación—, pero en algún punto del ciclo, un módulo se
          ejecuta antes de que sus dependencias estén completamente
          inicializadas. El resultado es que la importación que esperabas que
          tuviera un valor llega vacía.
        </p>
        <p>
          La forma más común de encontrarte con esto en un proyecto real no es
          en un ciclo de dos módulos obvios, sino en uno de cinco o seis: el
          módulo de utilidades importa el de configuración, el de configuración
          importa el de logger, el de logger importa el de utilidades para
          formatear mensajes. Nadie diseñó eso intencionalmente. Fue creciendo.
        </p>

        <NotaPost titulo="La solución no es técnica: es de diseño">
          <p>
            Las dependencias circulares casi siempre son síntoma de que dos
            módulos están demasiado acoplados, o de que hay una responsabilidad
            que debería vivir en un tercer módulo del que ambos dependan. En el
            dashboard, la regla es explícita: los widgets no importan nada del
            core, el core no importa widgets concretos. Esa dirección
            unidireccional hace que las circulares sean estructuralmente
            imposibles.
          </p>
        </NotaPost>

        <p>
          Cuando encuentres una, la herramienta más útil no es el debugger: es
          dibujar el grafo de dependencias en papel y preguntarte qué
          responsabilidad está en el lugar equivocado.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Tree shaking: lo que tu bundler elimina (y por qué)">
        <p>
          Tree shaking es el proceso por el que un bundler analiza el grafo de
          importaciones de tu proyecto y elimina el código que nadie importa. El
          nombre viene de la imagen de sacudir un árbol para que caigan las
          hojas muertas.
        </p>
        <p>
          Para que funcione, dos condiciones tienen que cumplirse. Primera: el
          código tiene que usar ES Modules, porque solo con importaciones
          estáticas el bundler puede hacer el análisis en tiempo de compilación.
          Con CommonJS no es posible —las dependencias se conocen en tiempo de
          ejecución, no antes—. Segunda: el código no puede tener efectos
          secundarios en el nivel del módulo —es decir, no puede ejecutar cosas
          con consecuencias observables cuando simplemente se importa—.
        </p>
        <p>
          La implicación práctica es que la forma en que estructuras tus
          exportaciones determina cuánto código muerto llega a producción. Un
          módulo que exporta una clase monolítica con veinte métodos es opaco
          para el tree shaker: o se incluye entero, o no se incluye. Un módulo
          que exporta veinte funciones independientes permite incluir
          exactamente las que se usan.
        </p>

        <CodigoPost lenguaje="JavaScript">{`// ✗ Opaco para el tree shaker — la clase entera o nada
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
import { retry } from './utils.js';`}</CodigoPost>

        <p>
          Esto conecta con una decisión de arquitectura que se aplica desde el
          primer post de la serie: cuando construimos el{" "}
          <Link to="/recursos/js/estructuras-datos-js">LRU Cache System</Link>,
          la clase principal encapsula toda la lógica porque el módulo tiene una
          sola responsabilidad y siempre se usa entera. Cuando construimos el
          API Resilience Wrapper, las utilidades de retry y backoff están
          separadas precisamente para que quien solo necesite una de las dos no
          cargue la otra.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cómo organizar un proyecto JavaScript que va a crecer">
        <p>
          La organización de archivos no es una cuestión estética. Es una
          decisión de arquitectura que determina qué tan fácil es añadir
          funcionalidad sin romper lo que ya existe, y qué tan rápido encuentra
          una persona nueva —o tú misma dentro de seis meses— lo que está
          buscando.
        </p>
        <p>Hay dos modelos principales que funcionan en proyectos reales.</p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Por tipo",
              texto: (
                <>
                  <p>
                    <code>widgets/</code> <code>plugins/</code>{" "}
                    <code>core/</code> <code>tests/</code>
                  </p>
                  <p>
                    Bien cuando los módulos del mismo tipo son independientes
                    entre sí y la estructura es estable desde el principio.
                  </p>
                </>
              ),
            },
            {
              titulo: "Por dominio",
              texto: (
                <>
                  <p>
                    <code>users/</code> <code>payments/</code>{" "}
                    <code>auth/</code> <code>notifications/</code>
                  </p>
                  <p>
                    Bien cuando el proyecto crece por adición de dominios y cada
                    feature tiene su propio ciclo de vida.
                  </p>
                </>
              ),
            },
          ]}
        />

        <p>
          La decisión no es permanente, pero cambiarla a mitad de un proyecto
          tiene un coste real. Vale la pena pensarla antes de crear la primera
          carpeta.
        </p>
        <p>
          Lo que sí es permanente, o debería serlo, es la dirección de las
          dependencias. En el dashboard, los widgets no importan nada del core.
          El core no sabe nada de los widgets específicos —solo conoce la
          interfaz que deben implementar—. Los plugins tampoco importan
          widgets.{" "}
          <strong>
            Esta dirección unidireccional de dependencias es lo que hace que el
            sistema sea extensible: puedes añadir un widget nuevo sin tocar una
            sola línea del código existente.
          </strong>
        </p>
      </SeccionPost>

      <SeccionPost titulo="El proyecto: Productivity Dashboard">
        <p>
          El{" "}
          <a
            href="https://github.com/femcodersclub/productivity-dashboard-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Productivity Dashboard
          </a>{" "}
          es la demostración práctica de todo lo anterior. Un dashboard modular
          con tres widgets independientes —un timer Pomodoro, un tracker de
          hábitos con cálculo de racha y un editor de notas con autoguardado—
          construido en vanilla JavaScript sin ninguna dependencia externa.
        </p>

        <TarjetasPost
          columnas={4}
          tarjetas={[
            { titulo: "ES Modules", texto: "Estándar nativo" },
            { titulo: "Dynamic import", texto: "Carga bajo demanda" },
            { titulo: "Plugin system", texto: "Extensible sin modificar" },
            { titulo: "17 tests", texto: "Sin dependencias" },
          ]}
        />

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

        <CodigoPost lenguaje="Bash">{`git clone https://github.com/femcodersclub/productivity-dashboard-js
cd productivity-dashboard-js
node tests/dashboard.test.js
npx serve demo`}</CodigoPost>

        <p>
          El README incluye las instrucciones para añadir un widget propio y
          para crear un plugin desde cero. Es el punto de partida si quieres
          extender el proyecto.
        </p>

        <p>
          <a
            href="https://github.com/femcodersclub/productivity-dashboard-js"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Ver el proyecto en GitHub
          </a>
        </p>
        <p>
          <a
            href="https://femcodersclub.github.io/productivity-dashboard-js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver la demo en vivo
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          Los módulos no son una forma de organizar archivos. Son contratos. Y
          la arquitectura no es la estructura de carpetas —es la dirección de
          las dependencias.
        </p>

        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "ES Modules",
              texto:
                "Análisis estático, tree shaking posible, grafo de dependencias predecible.",
            },
            {
              titulo: "Default vs. named exports",
              texto:
                "La elección depende de cuántas responsabilidades tiene el módulo, no de convención.",
            },
            {
              titulo: "Dynamic import",
              texto: "Carga bajo demanda, siempre con manejo de errores explícito.",
            },
            {
              titulo: "Importaciones circulares",
              texto:
                "Síntoma de diseño, no problema técnico: la solución es mover responsabilidades.",
            },
            {
              titulo: "Tree shaking",
              texto:
                "Exports granulares sobre clases monolíticas cuando el consumo es selectivo.",
            },
            {
              titulo: "Dirección unidireccional de dependencias",
              texto: "El principio que hace extensible cualquier sistema.",
            },
          ]}
        />

        <p>
          ¿Tienes dudas o quieres compartir cómo estructuras tus proyectos
          JavaScript? Únete a la conversación en FemCoders Club, una comunidad
          de más de 1.600 mujeres en tecnología en España.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales">
        <h3>Para profundizar</h3>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN — Guía de módulos JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://github.com/femcodersclub/productivity-dashboard-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              productivity-dashboard-js — Proyecto completo en GitHub
            </a>
          </li>
          <li>
            <a
              href="https://femcodersclub.github.io/productivity-dashboard-js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Productivity Dashboard — Demo en vivo
            </a>
          </li>
          <li>
            <Link to="/recursos/js/patrones-diseno-javascript">
              Patrones de diseño en JavaScript puro: más allá del catálogo
            </Link>
          </li>
          <li>
            <Link to="/recursos/js/estructuras-datos-js">
              Estructuras de datos avanzadas en JavaScript: Map, Set, WeakMap y
              WeakSet
            </Link>
          </li>
          <li>
            <Link to="/recursos/js/event-loop-javascript">
              Event Loop y asincronía en JavaScript
            </Link>
          </li>
        </ul>

        <h3>Únete a la comunidad</h3>
        <p>
          ¿Tienes dudas sobre módulos o arquitectura JavaScript? Únete a
          FemCoders Club, una comunidad de más de 1.600 mujeres en tecnología
          donde aprendemos y crecemos juntas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Necesitas apoyo personalizado?">
        <p>
          Si los módulos y la arquitectura JavaScript te resultan desafiantes o
          quieres profundizar más con orientación personalizada, en FemCoders
          Club ofrecemos <Link to="/login">mentorías individuales</Link> donde
          podemos trabajar juntas en tus dudas específicas. (Requiere{" "}
          <Link to="/register">registro gratuito</Link>).
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ModulosArquitecturaEscalable;
