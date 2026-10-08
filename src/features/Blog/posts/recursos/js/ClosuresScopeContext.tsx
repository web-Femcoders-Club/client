import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ImagenPost,
  ListaMarcadaPost,
  NotaPost,
  RespuestaPost,
  SeccionPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const ClosuresScopeContext: React.FC = () => (
  <>
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
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/closures-scope-context" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Closures, Scope y Context: Lo que Realmente Pasa en el Motor de JavaScript | femCoders Club"
        />
        <meta
          property="og:description"
          content="El 60% de las preguntas técnicas de JavaScript en entrevistas giran alrededor de scope, closures y this. Aprende cómo funcionan realmente con ejemplos y una state machine interactiva."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/closures-scope-context" />
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

    <PlantillaPost
      ruta="/recursos/js/closures-scope-context"
      titulo="Closures, scope y context: lo que realmente pasa en el motor de JavaScript"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={37}
      entradilla={
        <>
          <p>
            <strong>
              El 60% de las preguntas técnicas de JavaScript en entrevistas giran
              alrededor de 3 conceptos: scope, closures y <code>this</code>.
            </strong>{" "}
            Sin embargo, son los temas que peor se enseñan en bootcamps y
            tutoriales. Se explican con analogías vagas («un closure es una
            función que recuerda cosas») en lugar de entender qué hace realmente
            el motor de JavaScript.
          </p>
          <p>Hoy vamos a cambiar eso.</p>
        </>
      }
    >
      <NotaPost titulo="Proyecto de este post">
        <p>
          Un <strong>wizard de configuración de perfil profesional</strong> que
          funciona como una <strong>state machine</strong>. No vas a leer
          código abstracto: vas a ver cómo estos mecanismos resuelven problemas
          reales.
        </p>
      </NotaPost>

      <p>Los cuatro conceptos que recorre el post:</p>
      <ul>
        <li>Scope léxico</li>
        <li>Closures</li>
        <li>
          <code>this</code> y context
        </li>
        <li>
          <code>bind</code>, <code>call</code> y <code>apply</code>
        </li>
      </ul>

      <SeccionPost titulo="1. Lexical scope: dónde viven tus variables">
        <p>
          El <strong>scope léxico</strong> se determina en el momento en que
          escribes el código, no cuando se ejecuta. JavaScript decide qué
          variables puede ver una función basándose en{" "}
          <strong>dónde la escribiste en el archivo</strong>, no en dónde la
          llamas.
        </p>
        <p>
          Imagina que tienes una función dentro de otra función. La función
          interna puede «ver» las variables de la externa porque está
          físicamente escrita dentro de ella. Esta relación se establece
          cuando escribes el código, y nunca cambia.
        </p>
        <p>
          El scope funciona como una escalera: puedes subir (acceder a
          variables de scopes externos), pero no puedes bajar (scopes internos
          no son visibles desde fuera). JavaScript recorre esta escalera
          automáticamente buscando la variable que necesitas.
        </p>

        <CodigoPost lenguaje="JavaScript">{`function externa() {
  const mensaje = "Hola desde externa";

  function interna() {
    // interna puede ver 'mensaje' porque está
    // escrita dentro de externa (scope léxico)
    console.log(mensaje); // "Hola desde externa"
  }

  interna();
}

// externa no puede ver las variables de interna
externa();`}</CodigoPost>

        <h3>En el proyecto: cada paso del wizard tiene su propio scope</h3>

        <ImagenPost
          src="/assets/javascript/state-machine-scope.png"
          alt="El wizard en el paso 1, con el panel lateral explicando el scope: los datos de la máquina están encapsulados y no se pueden tocar desde fuera."
        />

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
          Esta es la base de la <strong>encapsulación en JavaScript</strong>:
          usar scope para crear estado privado sin necesidad de clases o
          TypeScript.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const machine = (function() {
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
console.log(machine._state); // undefined`}</CodigoPost>

        <NotaPost titulo="Scope vs. context: no son lo mismo">
          <p>
            <strong>Scope</strong> = qué variables puedes acceder → se
            determina al <em>escribir</em> el código (estático, léxico).
          </p>
          <p>
            <strong>Context</strong> = a qué apunta <code>this</code> → se
            determina al <em>ejecutar</em> la función (dinámico).
          </p>
          <p>
            El scope es estático, predecible. El context cambia según cómo
            llamas a la función. Vamos a ver esto en detalle más adelante.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="2. Closures: más allá de «funciones que recuerdan»">
        <p>
          La definición típica de closure es vaga e imprecisa. Vamos con la
          versión técnica:
        </p>

        <NotaPost titulo="Definición">
          <p>
            Un closure es la combinación de una función y el{" "}
            <strong>lexical environment</strong> en el que fue declarada.
          </p>
        </NotaPost>

        <p>
          ¿Qué significa esto realmente? Cuando JavaScript ejecuta una
          función, no solo ejecuta el código: también crea un contexto de
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
          necesita. No importa dónde llames esa función después: siempre
          lleva su mochila con las variables originales.
        </p>

        <CodigoPost lenguaje="JavaScript">{`function crearContador() {
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
contador(); // 3`}</CodigoPost>

        <h3>¿Por qué esto importa?</h3>
        <p>
          Sin closures, cada vez que una función termina, todas sus variables
          desaparecerían. No podrías crear funciones que mantengan estado
          interno, ni módulos con datos privados, ni callbacks que «recuerden»
          el contexto donde fueron creados.
        </p>
        <p>
          Los closures son el mecanismo que permite la programación funcional
          en JavaScript. Son la razón por la que puedes hacer esto: crear una
          función, pasarla como callback a un event listener, y que siga
          teniendo acceso a las variables que existían cuando la creaste,
          aunque esa función se ejecute segundos, minutos o incluso horas
          después.
        </p>

        <h3>En el proyecto: los datos persisten gracias al closure</h3>

        <ImagenPost
          src="/assets/javascript/state-machine-closure.png"
          alt="El wizard en el paso 2, con varias tecnologías seleccionadas como chips y el panel lateral mostrando que esos datos siguen guardados en el closure."
        />

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
          seleccionadas. El closure preserva ese estado aunque hayas «salido»
          de la función que lo creó.
        </p>
        <p>
          Esto es exactamente lo que necesitas para una state machine: estado
          que persiste entre transiciones pero que permanece encapsulado y
          protegido del código externo.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const machine = (function() {
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
// { name: 'Ana', skills: ['JS', 'React'] } ✓`}</CodigoPost>

        <TarjetasPost
          titulo="Casos de uso reales donde necesitas closures"
          tarjetas={[
            {
              titulo: "Módulos y encapsulación",
              texto:
                "El patrón módulo usa closures para crear APIs públicas con estado privado. Es la forma pre-ES6 de conseguir verdadera privacidad en JavaScript.",
            },
            {
              titulo: "Event handlers",
              texto:
                "Cuando pasas un callback a un evento, el closure mantiene acceso al contexto original donde se creó, no donde se ejecuta.",
            },
            {
              titulo: "Factories",
              texto:
                "Crear múltiples instancias independientes, cada una con su propio estado interno aislado.",
            },
            {
              titulo: "Memoization",
              texto:
                "Cachear resultados de funciones costosas. El closure guarda el caché internamente sin exponerlo.",
            },
          ]}
        />

        <NotaPost titulo="Truco para entrevistas">
          <p>
            Si te dan un código y preguntan «¿qué imprime?», el 90% de las
            veces la trampa está en un closure mal entendido. Busca funciones
            internas que referencien variables externas.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="3. this: el contexto que cambia">
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
          <code>this</code> es <strong>dinámico</strong>: cambia en tiempo
          de ejecución según el contexto de la llamada. Esto rompe la
          intuición de muchos developers que vienen de otros lenguajes.
        </p>

        <TarjetasPost
          titulo="Las 4 reglas de binding de this (en orden de prioridad)"
          tarjetas={[
            {
              titulo: "1. Default binding",
              texto: (
                <p>
                  Si llamas a una función sin ningún contexto (
                  <code>myFunction()</code>), <code>this</code> será{" "}
                  <code>undefined</code> en strict mode o el objeto global en
                  modo no estricto. Es el caso por defecto cuando no aplica
                  ninguna otra regla.
                </p>
              ),
            },
            {
              titulo: "2. Implicit binding",
              texto: (
                <p>
                  Si llamas a una función como método de un objeto (
                  <code>user.greet()</code>), <code>this</code> será ese
                  objeto. Es el caso más común y más intuitivo.
                </p>
              ),
            },
            {
              titulo: "3. Explicit binding",
              texto: (
                <p>
                  Si usas <code>call</code>, <code>apply</code> o{" "}
                  <code>bind</code>, tú decides manualmente qué será{" "}
                  <code>this</code>. Esto sobrescribe el binding implícito.
                </p>
              ),
            },
            {
              titulo: "4. New binding",
              texto: (
                <p>
                  Si llamas a una función con <code>new</code> (
                  <code>new User()</code>), JavaScript crea un nuevo objeto y{" "}
                  <code>this</code> apunta a él. Este es el binding de mayor
                  prioridad.
                </p>
              ),
            },
          ]}
        />

        <NotaPost titulo="Las arrow functions rompen todas estas reglas">
          <p>
            No tienen su propio <code>this</code>: heredan el{" "}
            <code>this</code> del scope donde fueron declaradas (
            <em>lexical this</em>). Esto las hace perfectas para callbacks
            pero peligrosas como métodos de objetos.
          </p>
        </NotaPost>

        <h3>El error clásico: perder el contexto</h3>
        <p>
          Imagina que tienes un objeto con un método que usa{" "}
          <code>this</code>. Si pasas ese método como callback, pierdes el
          contexto. ¿Por qué? Porque cuando el callback se ejecuta, ya no es{" "}
          <code>objeto.metodo()</code>: es solo <code>metodo()</code>.
        </p>
        <p>
          La función sigue siendo la misma, pero el{" "}
          <strong>contexto de ejecución cambió</strong>. Ya no hay un objeto
          «a la izquierda del punto», así que <code>this</code> se vuelve{" "}
          <code>undefined</code> en strict mode (fuera de él, el objeto
          global). Este bug aparece constantemente con event listeners,{" "}
          <code>setTimeout</code>, callbacks de arrays (<code>map</code>,{" "}
          <code>filter</code>) y cualquier situación donde pasas una función
          como valor en lugar de ejecutarla directamente.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const user = {
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
};`}</CodigoPost>

        <h3>En el proyecto: this referencia la máquina de estados</h3>

        <ImagenPost
          src="/assets/javascript/state-machine-this.png"
          alt="El wizard en el paso 3, con interruptores de preferencias y el panel lateral mostrando que this apunta a la propia máquina y a su estado."
        />

        <p>
          Los métodos de la state machine usan <code>this</code> para
          autorreferenciarse. Cuando llamas{" "}
          <code>machine.canTransition()</code>, dentro de ese método{" "}
          <code>this</code> es <code>machine</code>, porque usaste implicit
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
      </SeccionPost>

      <SeccionPost titulo="4. bind, call, apply: control manual del contexto">
        <p>
          Estos tres métodos te permiten controlar explícitamente el valor de{" "}
          <code>this</code>. Son la solución cuando el binding automático de
          JavaScript no hace lo que necesitas.
        </p>

        <h3>Las diferencias clave</h3>
        <ul>
          <li>
            <strong>
              <code>call()</code>
            </strong>
            : invoca la función <strong>inmediatamente</strong> con el{" "}
            <code>this</code> que tú especifiques. Los argumentos se pasan uno
            por uno, separados por comas.
          </li>
          <li>
            <strong>
              <code>apply()</code>
            </strong>
            : hace lo mismo que <code>call</code>, pero los argumentos se
            pasan como un <strong>array</strong>. Útil cuando ya tienes los
            argumentos en un array y no quieres expandirlos manualmente.
          </li>
          <li>
            <strong>
              <code>bind()</code>
            </strong>
            : <strong>no invoca la función</strong>, sino que retorna una{" "}
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

        <CodigoPost lenguaje="JavaScript">{`const machine = {
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
boundValidate(); // true — this siempre será otherContext`}</CodigoPost>

        <ListaMarcadaPost titulo="¿Cuándo usar cada uno?" tipo="bien">
          <li>
            <strong>
              <code>call</code>
            </strong>{" "}
            → Necesitas invocar la función <em>ya</em> y sabes exactamente qué
            argumentos pasarle.
          </li>
          <li>
            <strong>
              <code>apply</code>
            </strong>{" "}
            → Necesitas invocar la función <em>ya</em>, pero tus argumentos
            están en un array (o array-like).
          </li>
          <li>
            <strong>
              <code>bind</code>
            </strong>{" "}
            → Necesitas crear una versión fijada para usar <em>después</em>:
            no la vas a llamar inmediatamente. Este es el caso del 90% de los
            callbacks y event handlers.
          </li>
        </ListaMarcadaPost>

        <h3>En el proyecto: bind garantiza el contexto correcto</h3>

        <ImagenPost
          src="/assets/javascript/state-machine-bind.png"
          alt="El wizard en el paso 4, con el resumen del perfil y un aviso de éxito; el panel lateral explica que bind deja el contexto fijado."
        />

        <p>
          El método <code>reset</code> de la máquina está vinculado
          explícitamente con <code>bind</code>. ¿Por qué? Porque si alguna
          vez pasas <code>machine.reset</code> como callback a otro lugar (un
          botón de «reiniciar», por ejemplo), sin <code>bind</code> perdería
          el contexto.
        </p>
        <p>
          Con <code>bind</code>, no importa cómo se llame la función:{" "}
          <code>this</code> siempre será <code>machine</code>. Es una garantía
          permanente.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const machine = (function() {
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
btnReset(); // "Máquina reiniciada, this: true"`}</CodigoPost>

        <NotaPost titulo="Este patrón es crítico en">
          <p>
            React (binding de métodos en class components), event listeners
            del DOM y cualquier situación donde pasas métodos de un objeto
            como callbacks.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Quiz de entrevista técnica">
        <p>
          Estos son los tres escenarios clásicos que aparecen en entrevistas.
          Intenta responder antes de ver la solución.
        </p>

        <h3>Pregunta 1: el closure del loop</h3>
        <CodigoPost lenguaje="JavaScript">{`for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// ¿Qué imprime?`}</CodigoPost>

        <RespuestaPost>
          <p>
            <strong>Imprime: 3, 3, 3</strong>
          </p>
          <p>
            <strong>Por qué:</strong> <code>var</code> tiene scope de
            función, no de bloque. Los 3 callbacks comparten el mismo{" "}
            <code>i</code>. Cuando se ejecutan (después de 100 ms), el loop
            ya terminó e <code>i</code> vale 3.
          </p>
          <p>
            <strong>Solución:</strong> usa <code>let</code> (que tiene block
            scope) o crea un closure explícito con un IIFE para capturar
            cada valor de <code>i</code>.
          </p>
          <CodigoPost lenguaje="JavaScript">{`// Con let — block scope
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
// Imprime: 0, 1, 2 ✓`}</CodigoPost>
        </RespuestaPost>

        <h3>Pregunta 2: this perdido</h3>
        <CodigoPost lenguaje="JavaScript">{`const obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};

const fn = obj.getValue;
console.log(fn());
// ¿Qué imprime?`}</CodigoPost>

        <RespuestaPost>
          <p>
            <strong>Imprime: undefined (o error en strict mode)</strong>
          </p>
          <p>
            <strong>Por qué:</strong> al asignar <code>obj.getValue</code>{" "}
            a <code>fn</code>, pierdes el implicit binding. Cuando llamas{" "}
            <code>fn()</code>, no hay objeto antes del punto y se aplica el
            default binding: en modo no estricto, <code>this</code> es el
            objeto global, que no tiene <code>value</code>; en strict mode,{" "}
            <code>this</code> es <code>undefined</code> y leer{" "}
            <code>this.value</code> lanza un <code>TypeError</code>.
          </p>
          <p>
            <strong>Solución:</strong> usa <code>fn.call(obj)</code>,{" "}
            <code>obj.getValue()</code> directamente, o crea una versión
            bound con <code>obj.getValue.bind(obj)</code>.
          </p>
        </RespuestaPost>

        <h3>Pregunta 3: closures independientes</h3>
        <CodigoPost lenguaje="JavaScript">{`function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const a = outer();
const b = outer();
a(); a(); b();
// ¿Qué imprime?`}</CodigoPost>

        <RespuestaPost>
          <p>
            <strong>Imprime: 1, 2, 1</strong>
          </p>
          <p>
            <strong>Por qué:</strong> cada llamada a <code>outer()</code>{" "}
            crea un nuevo lexical environment con su propio{" "}
            <code>count</code>. Las funciones <code>a</code> y{" "}
            <code>b</code> son closures <em>independientes</em>: cada una
            tiene su propio estado privado.
          </p>
        </RespuestaPost>
      </SeccionPost>

      <SeccionPost titulo="Prueba el proyecto completo">
        <p>
          He construido un wizard interactivo que demuestra todos estos
          conceptos visualmente. Ábrelo en tu navegador, interactúa con él y
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

        <p>
          <a
            href="https://femcodersclub.github.io/state-machine/"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Ver demo en vivo
          </a>
        </p>
        <p>
          <a
            href="https://github.com/femcodersclub/state-machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver código en GitHub
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          Scope, closures y context no son conceptos para memorizar: son{" "}
          <strong>mecanismos que usas todos los días</strong>, aunque no seas
          consciente. Entenderlos te permite:
        </p>
        <ul>
          <li>Debuggear bugs de contexto en segundos</li>
          <li>Diseñar APIs más limpias y seguras</li>
          <li>Responder con confianza en entrevistas técnicas</li>
          <li>Escribir código que otros developers puedan predecir</li>
        </ul>
        <p>
          Si llegaste hasta aquí, ya sabes más que el 60% de los developers
          que solo memorizan definiciones.
        </p>
        <p>
          <strong>
            ¿Qué concepto te resultó más claro con el proyecto?
          </strong>{" "}
          Déjame un comentario: me encantaría saber qué sección te ayudó
          más.
        </p>
        <p>
          Este post es parte de la serie de JavaScript avanzado de FemCoders
          Club. Si quieres profundizar más en temas como event loop, promises
          o prototypes, síguenos en{" "}
          <a
            href="https://www.linkedin.com/company/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          y únete a nuestra comunidad de más de 1.600 mujeres en tech.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales">
        <h3>Para profundizar</h3>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Closures"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN - Closures en JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN - this en JavaScript
            </a>
          </li>
          <li>
            <Link to="/recursos/js/fundamentos-javascript-profundos">
              Fundamentos de JavaScript que Realmente Importan
            </Link>
          </li>
          <li>
            <Link to="/recursos/js/event-loop-javascript">
              Event Loop en JavaScript: Cómo Funciona la Asincronía
            </Link>
          </li>
        </ul>

        <h3>Únete a la comunidad</h3>
        <p>
          ¿Tienes dudas sobre closures o context? ¿Quieres compartir tus
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
          <Link to="/register">registro gratuito</Link>.)
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ClosuresScopeContext;
