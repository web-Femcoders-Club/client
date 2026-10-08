import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ChartColumn, Code, Eye, Timer } from "lucide-react";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ListaMarcadaPost,
  NotaPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const TestingJavaScriptSinFrameworks: React.FC = () => (
  <>
      <Helmet>
        <title>
          Testing en JavaScript sin frameworks: construye tu propio test
          runner | FemCoders Club
        </title>
        <meta
          name="description"
          content="Testing en JavaScript sin frameworks: construye tu propio runner con assertions, spies, fake timers y cobertura real de V8. Proyecto completo y sin dependencias."
        />
        <meta
          name="keywords"
          content="testing en javascript sin frameworks, test runner en javascript, unit testing vanilla js, framework de testing propio, assertions javascript, spies javascript, fake timers, cobertura v8, node test runner, femcoders club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/testing-javascript-sin-frameworks" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Testing en JavaScript sin frameworks: construye tu propio test runner | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Construye tu propio test runner en JavaScript sin dependencias: assertions con diff, spies, fake timers y cobertura real leyendo el perfilador de V8. Proyecto completo: testlet."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/testing-javascript-sin-frameworks" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/testlet-arquitectura.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Testing en JavaScript sin frameworks: construye tu propio test runner — femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Assertions con diff, spies, fake timers y cobertura real de V8: cómo construir tu propio framework de testing en JavaScript, sin dependencias."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/testlet-arquitectura.webp"
        />

        <meta property="article:published_time" content="2026-10-02T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Testing" />
        <meta property="article:tag" content="Test Runner" />
        <meta property="article:tag" content="V8" />
        <meta property="article:tag" content="Node.js" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/js/testing-javascript-sin-frameworks"
      titulo="Testing en JavaScript sin frameworks: construye tu propio test runner"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={53}
      entradilla={
        <>
          <p>
            Un test falla en CI. Abres el log y lo único que pone es{" "}
            <code>expected value to equal expected value</code>. No sabes qué
            propiedad no cuadra, no sabes si el problema está en tu código o en
            el mock, y el stack trace apunta a un archivo dentro de{" "}
            <code>node_modules</code> que no has escrito tú.
          </p>
          <p>
            Ese momento es la razón de este post. Jest y Vitest son excelentes
            herramientas, pero llevan tanta maquinaria encima que cuando algo se
            comporta de forma rara no tienes ni idea de por dónde empezar a
            mirar. La forma más rápida de perderles el miedo es construir uno.
          </p>
          <p>
            Y construir uno es mucho más barato de lo que parece. El núcleo de
            un test runner son quince líneas: una función que guarda tests en
            un array y otra que los ejecuta dentro de un <code>try/catch</code>.
            Todo lo demás —hooks, timeouts, spies, reporters, cobertura— son
            capas que se van añadiendo encima, y cada una resuelve un problema
            concreto que puedes reconocer.
          </p>
          <p>
            El proyecto de este post es <strong>testlet</strong> (
            <a
              href="https://github.com/femcodersclub/testlet"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/femcodersclub/testlet
            </a>
            ): un framework de testing completo, con cero dependencias, que
            además se testea a sí mismo y mide su propia cobertura leyendo el
            perfilador de V8.
          </p>
        </>
      }
    >
      <TarjetasPost
        tarjetas={[
          { titulo: "Assertions con diff", icono: <Code aria-hidden="true" />, texto: null },
          { titulo: "Spies y stubs", icono: <Eye aria-hidden="true" />, texto: null },
          { titulo: "Fake timers", icono: <Timer aria-hidden="true" />, texto: null },
          { titulo: "Cobertura V8", icono: <ChartColumn aria-hidden="true" />, texto: null },
        ]}
      />

      <SeccionPost titulo="¿Qué hace realmente un it()?">
        <p>
          Nada mágico. Recibe un nombre y una función, los guarda, y más
          tarde ejecuta esa función vigilando si lanza algo. Si lanza, el
          test falla. Si no lanza, pasa.
        </p>
        <p>
          Eso es literalmente todo el contrato. Un test no «comprueba» nada
          por sí mismo: son las assertions las que lanzan errores, y el
          runner solo se dedica a capturarlos y a contarlos.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const queue = [];

function it(name, fn) {
  queue.push({ name, fn });
}

async function run() {
  for (const { name, fn } of queue) {
    try {
      await fn();
      console.log(\`✓ \${name}\`);
    } catch (error) {
      console.log(\`✗ \${name} — \${error.message}\`);
    }
  }
}`}</CodigoPost>

        <p>
          Ese <code>await</code> delante de <code>fn()</code> es la única
          concesión al código asíncrono, y ya cubre el 90 % de los casos: si
          la función devuelve una promesa, esperamos; si es síncrona,{" "}
          <code>await</code> sobre un valor normal no hace daño. El resto de
          la complejidad del testing async —los timeouts, las promesas que
          nunca resuelven— viene después.
        </p>
        <p>
          Si lo comparas con <code>src/runner.js</code> del proyecto, verás
          que la estructura es la misma. Lo que crece son los detalles: el
          árbol de suites, el orden de los hooks y la gestión del tiempo.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Por qué describe necesita una pila">
        <p>
          Cuando anidas un <code>describe</code> dentro de otro, el runner
          tiene que saber en qué suite está registrando cada{" "}
          <code>it</code>. La forma habitual de resolverlo es una pila: al
          entrar en un <code>describe</code> se empuja la suite nueva, se
          ejecuta el callback (que registra tests e hijos), y al salir se
          saca.
        </p>
        <p>Lo interesante no es la pila. Es lo que pasa con los hooks.</p>
        <p>
          Los <code>beforeEach</code> se ejecutan{" "}
          <strong>de fuera hacia dentro</strong> y los <code>afterEach</code>{" "}
          <strong>de dentro hacia fuera</strong>. Suena a detalle, pero es
          la causa de una buena parte de los tests que fallan de forma
          intermitente: si esperas que tu limpieza interna corra después de
          la externa, tienes un bug esperando a manifestarse el día que el
          orden importe.
        </p>

        <CodigoPost lenguaje="JavaScript">{`collectHooks() {
  const chain = [];
  let current = this;
  while (current) {
    chain.unshift(current);
    current = current.parent;
  }
  const before = chain.flatMap((suite) => suite.beforeEachHooks);
  const after = [...chain].reverse().flatMap((suite) => suite.afterEachHooks);
  return { before, after };
}`}</CodigoPost>

        <p>
          Subir hasta la raíz y hacer <code>unshift</code> deja la cadena
          ordenada de la suite más externa a la más interna. Los{" "}
          <code>beforeEach</code> se ejecutan en ese orden y los{" "}
          <code>afterEach</code> en el inverso: el mismo patrón de apertura
          y cierre que tiene cualquier estructura anidada.
        </p>

        <NotaPost titulo="Los afterEach, aunque el test falle" tipo="aviso">
          <p>
            Hay una regla más que conviene tener clara: los{" "}
            <code>afterEach</code> deben ejecutarse{" "}
            <strong>aunque el test falle</strong>. Si tu limpieza vive
            dentro del mismo <code>try</code> que el test, un fallo deja el
            stub puesto y contamina todos los tests siguientes. Ese tipo de
            contaminación es la razón número uno por la que una suite pasa
            en local y falla en CI, donde el orden de ejecución puede
            cambiar.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Spies sin jest.fn(): una función que se apunta las llamadas">
        <p>
          La palabra «mock» arrastra más misterio del que merece. Un spy es
          una función que, antes de hacer nada, guarda con qué argumentos la
          han llamado. Ya está.
        </p>

        <CodigoPost lenguaje="JavaScript">{`export function spy(implementation = () => undefined) {
  const calls = [];
  const fn = function spied(...args) {
    const call = { args, returned: undefined, threw: undefined };
    calls.push(call);
    try {
      call.returned = implementation.apply(this, args);
      return call.returned;
    } catch (error) {
      call.threw = error;
      throw error;
    }
  };
  Object.defineProperty(fn, 'callCount', { get: () => calls.length });
  fn.calledWith = (...expected) => calls.some((c) => deepDiff(c.args, expected).length === 0);
  return fn;
}`}</CodigoPost>

        <p>
          Fíjate en <code>calledWith</code>: reutiliza el mismo{" "}
          <code>deepDiff</code> que usa <code>assert.deepEqual</code>.
          Comparar argumentos y comparar valores esperados es el mismo
          problema, y tener una sola implementación significa que{" "}
          <code>{`calledWith({ userId: 42 })`}</code> funciona con objetos
          nuevos, no solo con la misma referencia.
        </p>
        <p>
          En el proyecto, el spy crece con <code>returns()</code>,{" "}
          <code>resolves()</code>, <code>rejects()</code> y{" "}
          <code>callsFake()</code> para poder cambiar el comportamiento a
          mitad de un test. Y <code>stub(objeto, 'metodo')</code> hace lo
          mismo sobre un método existente, guardando el original para poder
          devolverlo con <code>restore()</code>. Restaurar siempre en un{" "}
          <code>afterEach</code>: un stub olvidado es exactamente la
          contaminación de la que hablábamos.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cómo testear un debounce de 300 ms en cero milisegundos">
        <p>
          Aquí es donde el testing se pone incómodo de verdad. Tienes un
          debounce como el que implementamos en{" "}
          <Link to="/recursos/js/optimizacion-javascript">
            Optimización en JavaScript: mide antes de tocar una línea
          </Link>
          , y quieres comprobar que agrupa las llamadas. La versión ingenua
          del test hace <code>await sleep(300)</code> y tarda 300
          milisegundos reales. Multiplica eso por cuarenta tests y tienes
          una suite que nadie ejecuta antes de hacer commit.
        </p>
        <p>
          La alternativa es no esperar al tiempo: controlarlo. Sustituimos{" "}
          <code>setTimeout</code>, <code>setInterval</code> y{" "}
          <code>Date.now</code> por versiones nuestras que mantienen una
          cola de temporizadores y un reloj que solo avanza cuando nosotras
          se lo decimos.
        </p>

        <CodigoPost lenguaje="JavaScript">{`it('un debounce de 300 ms se prueba en cero milisegundos', () => {
  const search = spy();
  const debounced = debounce(search, 300);

  debounced('fem');
  debounced('femco');
  debounced('femcoders');

  timers.tick(299);
  assert.equal(search.callCount, 0);

  timers.tick(1);
  assert.equal(search.callCount, 1);
  assert.ok(search.calledWith('femcoders'));
});`}</CodigoPost>

        <p>
          Ese test tarda menos de un milisegundo y, más importante, es
          determinista: no hay ninguna posibilidad de que falle un martes
          porque la máquina de CI iba lenta.
        </p>

        <NotaPost titulo="Los fake timers no controlan las promesas" tipo="aviso">
          <p>
            Hay un detalle que muerde a todo el mundo la primera vez. Los
            fake timers controlan los temporizadores, pero{" "}
            <strong>no controlan las promesas</strong>. Si tu código hace{" "}
            <code>await</code> entre dos <code>setTimeout</code>, avanzar el
            reloj de golpe no basta: hay que dejar respirar a la cola de
            microtareas entre avance y avance. Es la distinción entre
            macrotasks y microtasks que vimos en{" "}
            <Link to="/recursos/js/event-loop-javascript">
              Event Loop en JavaScript: cómo funciona la asincronía
            </Link>
            , y aquí deja de ser teoría de entrevista para convertirse en la
            razón por la que tu test se cuelga. En el ejemplo del repo esto
            se resuelve con una función <code>flush()</code> que alterna{" "}
            <code>await Promise.resolve()</code> con pequeños avances del
            reloj.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Cobertura real: preguntarle a V8 qué se ha ejecutado">
        <p>
          La mayoría de los tutoriales de «monta tu propio test runner» se
          paran antes de llegar aquí, o simulan la cobertura contando
          líneas a ojo. No hace falta: V8 ya lleva esa cuenta, porque la
          usa para decidir qué optimizar.
        </p>
        <p>
          A través de <code>node:inspector</code> puedes pedírsela. Activas
          el perfilador antes de que se cargue tu código, y al terminar{" "}
          <code>Profiler.takePreciseCoverage()</code> te devuelve, para
          cada script, los rangos de bytes que se han ejecutado y cuántas
          veces. Traducir esos rangos a números de línea es aritmética de
          offsets.
        </p>
        <p>
          El orden importa y es el error fácil de cometer: V8 solo perfila
          los scripts que se compilan <strong>después</strong> de arrancar
          el perfilador. Por eso el CLI del proyecto activa la cobertura
          antes de importar nada de <code>src/</code>, con imports
          dinámicos. Si lo haces al revés, el informe sale a cero y parece
          que la herramienta está rota.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cómo se testea un framework de tests">
        <p>
          El problema del huevo y la gallina es real: no puedes usar tu
          framework para verificar tu framework, porque si el núcleo está
          roto los tests te dirán que todo va bien.
        </p>
        <p>
          La solución son dos capas. En <code>tests/bootstrap/</code> el
          núcleo se verifica con el <code>assert</code> nativo de Node.js y
          un corredor de cuarenta líneas —el mismo <code>try/catch</code>{" "}
          del principio de este post—. Es pesar la báscula con una pesa de
          referencia. Solo cuando esa capa está en verde,{" "}
          <code>tests/self/</code> usa el framework para testear el
          framework.
        </p>
        <p>
          Ese <code>assert</code> nativo, por cierto, es el que llevamos
          usando en todos los proyectos de esta serie desde{" "}
          <Link to="/recursos/js/event-loop-javascript">
            Event Loop en JavaScript: cómo funciona la asincronía
          </Link>
          . Este es el momento de mirar qué hay debajo.
        </p>
        <p>
          Construyéndolo aparecieron tres bugs que merecen mención, porque
          son de los que no salen en ningún tutorial:
        </p>
        <ListaMarcadaPost titulo="Los tres bugs" tipo="mal">
          <li>
            El corredor de bootstrap importaba los archivos de test, y esos
            archivos importaban el corredor. Con top-level await, una
            importación circular así no da un warning: se bloquea en silencio
            y el proceso termina sin ejecutar nada.
          </li>
          <li>
            <code>unhandledRejection</code> es un evento del proceso, no del
            runner. Un self-test que provocaba un rechazo sin capturar
            ensuciaba también al runner que lo estaba ejecutando, porque los
            dos escuchaban el mismo evento.
          </li>
          <li>
            El stack trace de los fallos apuntaba a <code>assert.js</code> en
            lugar de al archivo de test. Detalle pequeño, diferencia enorme al
            usarlo: es exactamente la queja con la que empieza este post.
          </li>
        </ListaMarcadaPost>
      </SeccionPost>

      <SeccionPost titulo="El proyecto: testlet">
        <p>
          El repositorio incluye assertions con diff que te dicen qué
          propiedad falló, runner con <code>describe</code>/<code>it</code>{" "}
          anidados, hooks, timeouts, <code>.only</code> y <code>.skip</code>,
          spies y stubs, fake timers, tres reporters y cobertura de V8.
          Cero dependencias: no hay <code>npm install</code> porque no hay
          nada que instalar.
        </p>
        <p>
          El diagrama de clases que abre este post —generado a partir de{" "}
          <code>docs/arquitectura.mermaid</code>— resume cómo encajan las
          piezas: el <code>Runner</code> no conoce a{" "}
          <code>ConsoleReporter</code> ni a <code>HtmlReporter</code>, solo
          la interfaz <code>Reporter</code>. Por eso añadir el reporter
          JSON para CI fueron treinta líneas y ningún cambio en el núcleo.
        </p>
        <p>
          Esa decisión de diseño es el patrón Observer de{" "}
          <Link to="/recursos/js/patrones-diseno-javascript">
            Patrones de diseño en JavaScript puro: más allá del catálogo
          </Link>
          , aplicado a un caso donde se nota inmediatamente: emites eventos
          y no te importa quién escucha.
        </p>
        <p>
          El reporter HTML genera un documento autónomo, sin CSS ni
          JavaScript externos, que se puede abrir desde el disco o publicar
          como artefacto de CI. El repo trae un workflow de GitHub Actions
          que ejecuta las dos capas de tests en Node 18, 20 y 22, y sube los
          informes.
        </p>
        <p>
          Y para que no sea un ejercicio abstracto, <code>examples/</code>{" "}
          trae una suite realista sobre un <code>UserService</code> con
          reintentos, backoff y caché con TTL: red mockeada con spies,
          tiempo controlado con fake timers, y siete tests que se ejecutan
          en cuatro milisegundos.
        </p>
        <p>
          <a
            href="https://github.com/femcodersclub/testlet"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Ver el proyecto en GitHub
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="De testlet a Jest o Vitest">
        <p>
          Cuando vuelvas a un proyecto con Jest o Vitest, la traducción es
          casi mecánica:
        </p>

        <TablaPost descripcion="Equivalencias entre testlet y Jest o Vitest">
          <table>
            <thead>
              <tr>
                <th>testlet</th>
                <th>Jest / Vitest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>it(name, fn)</code></td>
                <td><code>test(name, fn)</code></td>
              </tr>
              <tr>
                <td><code>assert.deepEqual(a, b)</code></td>
                <td><code>expect(a).toEqual(b)</code></td>
              </tr>
              <tr>
                <td><code>assert.throws(fn, /msg/)</code></td>
                <td><code>expect(fn).toThrow(/msg/)</code></td>
              </tr>
              <tr>
                <td><code>spy()</code></td>
                <td><code>jest.fn() / vi.fn()</code></td>
              </tr>
              <tr>
                <td><code>stub(obj, 'metodo')</code></td>
                <td><code>jest.spyOn(obj, 'metodo')</code></td>
              </tr>
              <tr>
                <td><code>createFakeTimers().install()</code></td>
                <td><code>jest.useFakeTimers()</code></td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <p>
          Lo que esas herramientas tienen y esto no son veinte años de
          casos límite: paralelismo entre archivos, transformación de
          TypeScript, entorno de navegador simulado, snapshots, integración
          con los editores. Nada de eso es conceptualmente distinto de lo
          que acabas de construir; es lo mismo, muy pulido.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cierre">
        <p>
          La próxima vez que un test falle con un mensaje inútil, ya sabes
          qué hay detrás de esa línea: un array, un <code>try/catch</code>{" "}
          y un reporter que decidió no enseñarte el diff. Y sabes también
          que arreglarlo no requiere entender un framework entero, sino la
          pieza concreta que produce ese mensaje.
        </p>
        <p>
          ¿Te animas a construir tu propio test runner o te has topado con
          alguno de estos problemas en Jest o Vitest sin saber qué pasaba
          por debajo? Únete a la conversación en FemCoders Club, una
          comunidad de más de 1.600 mujeres en tecnología en España.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales">
        <h3>Para profundizar</h3>
        <ul>
          <li>
            <a
              href="https://github.com/femcodersclub/testlet"
              target="_blank"
              rel="noopener noreferrer"
            >
              testlet: proyecto completo en GitHub
            </a>
          </li>
          <li>
            <a
              href="https://nodejs.org/api/assert.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentación oficial de node:assert
            </a>
          </li>
          <li>
            <a
              href="https://nodejs.org/api/inspector.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentación oficial de node:inspector
            </a>
          </li>
          <li>
            <Link to="/recursos/js/event-loop-javascript">
              Event Loop en JavaScript: cómo funciona la asincronía
            </Link>
          </li>
          <li>
            <Link to="/recursos/js/patrones-diseno-javascript">
              Patrones de diseño en JavaScript puro: más allá del catálogo
            </Link>
          </li>
          <li>
            <Link to="/recursos/js/optimizacion-javascript">
              Optimización en JavaScript: mide antes de tocar una línea
            </Link>
          </li>
        </ul>

        <h3>Únete a la comunidad</h3>
        <p>
          ¿Tienes dudas sobre cómo construir o mantener tus propias
          herramientas de testing? Únete a{" "}
          <Link to="/register">FemCoders Club</Link>, una comunidad de más de
          1.600 mujeres en tecnología donde aprendemos y crecemos juntas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Necesitas apoyo personalizado?">
        <p>
          Si diseñar la arquitectura de tus propias herramientas o entender
          qué hay detrás de Jest o Vitest te resulta desafiante o quieres
          profundizar más con orientación personalizada, en FemCoders Club
          ofrecemos <Link to="/login">mentorías individuales</Link> donde
          podemos trabajar juntas en tus dudas específicas. (Requiere{" "}
          <Link to="/register">registro gratuito</Link>.)
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default TestingJavaScriptSinFrameworks;
