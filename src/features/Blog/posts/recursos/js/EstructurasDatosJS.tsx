import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ImagenPost,
  ListaMarcadaPost,
  NotaPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const EstructurasDatosJS: React.FC = () => (
  <>
      <Helmet>
        <title>
          Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y
          WeakSet | femCoders Club
        </title>
        <meta
          name="description"
          content="Aprende cuándo usar Map, Set, WeakMap y WeakSet en JavaScript. Proyecto práctico: LRU Cache con Map, el mismo ejercicio que Google, Meta y Amazon usan en entrevistas técnicas."
        />
        <meta
          name="keywords"
          content="Map javascript, Set javascript, WeakMap, WeakSet, LRU Cache javascript, estructuras de datos javascript, entrevistas técnicas javascript, femcoders club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/estructuras-datos-js" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y WeakSet | femCoders Club"
        />
        <meta
          property="og:description"
          content="Map, Set, WeakMap y WeakSet: cuándo usar cada estructura y por qué importa. Proyecto práctico: LRU Cache con Map, el mismo ejercicio de entrevistas de Google, Meta y Amazon."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/estructuras-datos-js" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/estructuras-datos-js.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Estructuras de Datos Avanzadas en JavaScript - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Map, Set, WeakMap y WeakSet en JavaScript: cuándo usar cada una y proyecto práctico LRU Cache."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/estructuras-datos-js.webp"
        />

        <meta property="article:published_time" content="2026-04-25T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Map" />
        <meta property="article:tag" content="Set" />
        <meta property="article:tag" content="WeakMap" />
        <meta property="article:tag" content="Estructuras de Datos" />
        <meta property="article:tag" content="LRU Cache" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/js/estructuras-datos-js"
      titulo="Estructuras de datos avanzadas en JavaScript: Map, Set, WeakMap y WeakSet"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={38}
      entradilla={
        <>
          <p>
            Si llevas un tiempo programando en JavaScript, probablemente usas
            objetos y arrays para casi todo. Son versátiles, los conoces bien y
            funcionan. Pero hay situaciones en las que estás eligiendo la
            herramienta equivocada sin saberlo, y eso tiene un coste real:{" "}
            <strong>código más lento, más propenso a errores y más difícil de mantener</strong>.
          </p>
          <p>
            En este post vemos las estructuras de datos que JavaScript ofrece más
            allá de los objetos y arrays clásicos: <code>Map</code>,{" "}
            <code>Set</code>, <code>WeakMap</code> y <code>WeakSet</code>. Al
            final enlazamos con el proyecto práctico de la serie: un{" "}
            <strong>LRU Cache</strong> implementado con <code>Map</code>, el mismo
            ejercicio que Google, Meta y Amazon utilizan en sus entrevistas
            técnicas.
          </p>
        </>
      }
    >
      <SeccionPost titulo="1. Map: el Object que debería haber existido desde el principio">
        <p>
          Un <code>Map</code> es una colección de pares clave-valor, igual que
          un objeto. Las diferencias están en los detalles, y esos detalles
          importan.
        </p>

        <ListaMarcadaPost titulo="Qué puede hacer Map que Object no puede" tipo="bien">
          <li>
            <strong>Las keys pueden ser de cualquier tipo.</strong> En un
            objeto, las claves son siempre strings o Symbols. Si pasas
            cualquier otra cosa, JavaScript la convierte a string
            automáticamente, lo que provoca comportamientos inesperados. Con{" "}
            <code>Map</code> esto no ocurre: puedes usar objetos, funciones,
            números o cualquier otro tipo como clave y el comportamiento
            siempre es el esperado.
          </li>
          <li>
            <strong>El orden de inserción está garantizado.</strong> Los
            objetos tienen un orden de iteración que puede sorprenderte: las
            keys numéricas se ordenan primero, en orden numérico,
            independientemente de cuándo las insertaste. Los <code>Map</code>{" "}
            siempre iteran en el orden en que se insertaron los elementos, sin
            excepciones.
          </li>
          <li>
            <strong>La API es más limpia y directa.</strong> Con{" "}
            <code>Map</code> tienes <code>.size</code> para saber cuántos
            elementos hay sin iterar, <code>.has()</code> para comprobar
            existencia, y métodos de iteración nativos como{" "}
            <code>.keys()</code>, <code>.values()</code> y{" "}
            <code>.entries()</code>. Nada de <code>Object.keys()</code>,{" "}
            <code>Object.entries()</code> ni <code>hasOwnProperty()</code>.
          </li>
        </ListaMarcadaPost>

        <CodigoPost lenguaje="JavaScript">{`// Object: la key [object Object] sobreescribe todo
const obj = {};
const keyA = { id: 1 };
const keyB = { id: 2 };
obj[keyA] = "valor A";
obj[keyB] = "valor B"; // sobreescribe keyA
console.log(obj); // { '[object Object]': 'valor B' } ✗

// Map: cada objeto es una key distinta
const map = new Map();
map.set(keyA, "valor A");
map.set(keyB, "valor B");
console.log(map.get(keyA)); // "valor A" ✓
console.log(map.get(keyB)); // "valor B" ✓
console.log(map.size);      // 2 ✓`}</CodigoPost>

        <h3>Cuándo usar Map en lugar de Object</h3>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Usa Map cuando…",
              texto: (
                <ul>
                  <li>Las keys no son strings simples conocidos de antemano</li>
                  <li>
                    Necesitas saber el número de elementos directamente con{" "}
                    <code>.size</code>
                  </li>
                  <li>El orden de inserción importa</li>
                  <li>Harás muchas inserciones y eliminaciones dinámicas</li>
                </ul>
              ),
            },
            {
              titulo: "Sigue con Object cuando…",
              texto: (
                <ul>
                  <li>
                    Representas una estructura con propiedades conocidas y fijas
                    (usuario, producto, configuración)
                  </li>
                  <li>Necesitas serializar a JSON fácilmente</li>
                  <li>Usas los datos como namespace</li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="2. Set: cuando los duplicados no tienen cabida">
        <p>
          <code>Set</code> es una colección de valores únicos. Sin keys, sin
          pares. Solo valores, garantizando que no hay repetidos.
        </p>

        <h3>Eliminar duplicados, la operación más común</h3>
        <p>
          La situación más habitual es tener un array con valores repetidos y
          necesitar limpiarlo. Con <code>Set</code> se resuelve en una sola
          línea: se crea un <code>Set</code> a partir del array y se vuelve a
          convertir en array. El resultado es el array original sin
          duplicados, manteniendo el orden de primera aparición.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const tecnologias = ['React', 'JS', 'React', 'CSS', 'JS', 'React'];

// Sin Set: hay que iterar manualmente
const unicas = tecnologias.filter((v, i) => tecnologias.indexOf(v) === i);

// Con Set: una línea
const unicasSet = [...new Set(tecnologias)];
// ['React', 'JS', 'CSS'] — orden de primera aparición garantizado ✓`}</CodigoPost>

        <h3>Operaciones de conjuntos</h3>
        <p>
          <code>Set</code> hace que las operaciones matemáticas de conjuntos
          sean sencillas de implementar.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// Unión: todos los valores de ambas sin repetir
const union = new Set([...a, ...b]);
// {1, 2, 3, 4, 5, 6}

// Intersección: solo los que están en ambas
const interseccion = new Set([...a].filter(x => b.has(x)));
// {3, 4}

// Diferencia: lo que está en A pero no en B
const diferencia = new Set([...a].filter(x => !b.has(x)));
// {1, 2}`}</CodigoPost>

        <p>
          Estas operaciones son especialmente útiles cuando trabajas con
          conjuntos de permisos, tecnologías, categorías o cualquier colección
          donde la unicidad tiene sentido semántico.
        </p>

        <h3>Set vs. Array: cuándo importa el rendimiento</h3>
        <p>
          Para búsquedas, <code>Set</code> es significativamente más rápido
          que <code>Array</code>. <code>Array.includes()</code> recorre el
          array entero en el peor caso (complejidad O(n)).{" "}
          <code>Set.has()</code> es O(1): acceso directo, sin importar cuántos
          elementos haya.
        </p>
        <p>
          Con colecciones pequeñas la diferencia es inapreciable. Con
          colecciones grandes (miles o cientos de miles de elementos) y
          búsquedas frecuentes, la diferencia es enorme.
        </p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Usa Set cuando…",
              texto: (
                <ul>
                  <li>Necesitas garantizar unicidad</li>
                  <li>
                    Harás muchas búsquedas con <code>.has()</code>
                  </li>
                  <li>Necesitas operaciones de conjuntos</li>
                </ul>
              ),
            },
            {
              titulo: "Sigue con Array cuando…",
              texto: (
                <ul>
                  <li>Necesitas acceso por índice</li>
                  <li>
                    Usas <code>map</code>, <code>filter</code> o{" "}
                    <code>reduce</code>
                  </li>
                  <li>
                    El orden importa y puede haber duplicados con significado
                    propio
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="3. WeakMap y WeakSet: estructuras que no retienen memoria">
        <p>
          Aquí la cosa se pone más técnica, pero merece la pena entenderlo
          porque explica por qué existen estas estructuras.
        </p>

        <h3>El problema: referencias y memoria</h3>
        <p>
          Cuando guardas un objeto en un <code>Map</code>, ese{" "}
          <code>Map</code> mantiene una <strong>referencia fuerte</strong> a
          ese objeto. Aunque en el resto del código ese objeto ya no se use,
          el Garbage Collector no puede eliminarlo porque el <code>Map</code>{" "}
          sigue apuntando a él. Esto puede provocar fugas de memoria en
          aplicaciones de larga ejecución.
        </p>

        <h3>WeakMap: referencias débiles</h3>
        <p>
          <code>WeakMap</code> resuelve esto. Sus referencias a las keys son{" "}
          <em>débiles</em>: no impiden que el Garbage Collector elimine el
          objeto si ya no hay otras referencias a él en el código. Cuando el
          objeto «muere», su entrada en el <code>WeakMap</code> desaparece
          automáticamente.
        </p>
        <p>
          Las restricciones de <code>WeakMap</code> son consecuencia directa
          de cómo funciona el GC: las keys solo pueden ser objetos (no
          primitivos), no se puede iterar sobre él y no tiene{" "}
          <code>.size</code>. Si pudieras iterar, necesitarías mantener una
          lista de qué objetos están vivos, lo que requeriría referencias
          fuertes y anularía el propósito.
        </p>

        <ListaMarcadaPost titulo="Casos de uso reales de WeakMap" tipo="bien">
          <li>
            <strong>Metadata privada de instancias de clase.</strong> Los datos
            viven en el <code>WeakMap</code>, fuera del objeto, y son
            inaccesibles desde fuera de la clase. Cuando la instancia deja de
            usarse, el GC la elimina junto con su metadata.
          </li>
          <li>
            <strong>Caché temporal ligado al ciclo de vida de un objeto.</strong>{" "}
            Si tienes un cálculo costoso que depende de un elemento del DOM,
            puedes cachear el resultado en un <code>WeakMap</code> usando el
            elemento como key. Cuando el elemento se elimina del DOM y el GC
            lo recoge, la entrada del caché desaparece sola, sin que tengas
            que gestionar la limpieza manualmente.
          </li>
        </ListaMarcadaPost>

        <CodigoPost lenguaje="JavaScript">{`// Metadata privada con WeakMap
const _privado = new WeakMap();

class Usuario {
  constructor(nombre, email) {
    // Los datos privados viven fuera del objeto
    _privado.set(this, { nombre, email, loginCount: 0 });
  }

  login() {
    const datos = _privado.get(this);
    datos.loginCount++;
    return datos.loginCount;
  }

  getNombre() {
    return _privado.get(this).nombre;
  }
}

const user = new Usuario('Ana', 'ana@example.com');
user.login();
console.log(user.getNombre()); // 'Ana' ✓
console.log(user._privado);    // undefined — inaccesible ✓`}</CodigoPost>

        <h3>WeakSet: lo mismo pero para conjuntos</h3>
        <p>
          <code>WeakSet</code> es a <code>Set</code> lo que{" "}
          <code>WeakMap</code> es a <code>Map</code>. Solo acepta objetos, no
          es iterable y no retiene referencias.
        </p>
        <p>
          El caso de uso más habitual es{" "}
          <strong>marcar objetos como procesados</strong> sin modificarlos ni
          crear referencias fuertes. Si tienes un sistema de eventos y quieres
          asegurarte de que cada evento se procesa una sola vez, puedes
          añadirlo al <code>WeakSet</code> tras procesarlo. Cuando el evento
          ya no se use en ningún otro sitio, el GC lo elimina y el{" "}
          <code>WeakSet</code> no lo retiene.
        </p>

        <CodigoPost lenguaje="JavaScript">{`const procesados = new WeakSet();

function procesarEvento(evento) {
  if (procesados.has(evento)) {
    console.log('Ya procesado, ignorando');
    return;
  }

  // Procesar...
  procesados.add(evento);
  console.log('Evento procesado');
}

const e = { tipo: 'click', timestamp: Date.now() };
procesarEvento(e); // "Evento procesado"
procesarEvento(e); // "Ya procesado, ignorando"
// Cuando 'e' ya no tenga referencias, el GC lo eliminará
// junto con su entrada en el WeakSet — sin memoria retenida`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="4. Comparativa rápida">
        <TablaPost descripcion="Map, Object, Set y Array comparados por característica">
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th><code>Map</code></th>
                <th><code>Object</code></th>
                <th><code>Set</code></th>
                <th><code>Array</code></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Keys de cualquier tipo</strong></td>
                <td>Sí</td>
                <td>No</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>Orden garantizado</strong></td>
                <td>Sí</td>
                <td>Parcial</td>
                <td>Sí</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td><strong><code>.size</code> directo</strong></td>
                <td>Sí</td>
                <td>No</td>
                <td>Sí</td>
                <td><code>.length</code></td>
              </tr>
              <tr>
                <td><strong>Búsqueda</strong></td>
                <td>O(1)</td>
                <td>O(1)</td>
                <td>O(1)</td>
                <td>O(n)</td>
              </tr>
              <tr>
                <td><strong>Unicidad de valores</strong></td>
                <td>No</td>
                <td>Keys únicas</td>
                <td>Sí</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong>Iterable nativo</strong></td>
                <td>Sí</td>
                <td>Con helpers</td>
                <td>Sí</td>
                <td>Sí</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <TablaPost descripcion="WeakMap y WeakSet comparados por característica">
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th><code>WeakMap</code></th>
                <th><code>WeakSet</code></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Keys/valores permitidos</strong></td>
                <td>Solo objetos</td>
                <td>Solo objetos</td>
              </tr>
              <tr>
                <td><strong>Retiene referencias</strong></td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong>Iterable</strong></td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong><code>.size</code></strong></td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong>Uso típico</strong></td>
                <td>Caché, datos privados</td>
                <td>Marcar objetos</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>
      </SeccionPost>

      <SeccionPost titulo="5. Proyecto: LRU Cache con Map">
        <p>
          Ahora que entiendes <code>Map</code> y su orden de inserción
          garantizado, tiene sentido construir el proyecto práctico de este
          post.
        </p>
        <p>
          Un <strong>LRU Cache</strong> (Least Recently Used) es un caché con
          límite de tamaño. Cuando está lleno y llega un elemento nuevo,
          elimina el que lleva más tiempo sin usarse. Es un patrón que
          utilizan Redis, los navegadores web, los sistemas operativos y
          prácticamente cualquier sistema que necesite gestionar memoria de
          forma inteligente.
        </p>

        <NotaPost titulo="Un clásico de las entrevistas técnicas">
          <p>
            La pregunta «implementa un LRU Cache» aparece en entrevistas
            técnicas de Google, Meta y Amazon porque combina conocimiento de
            estructuras de datos con pensamiento algorítmico real. No es un
            ejercicio teórico: es un problema que existe en producción.{" "}
            <a
              href="https://github.com/femcodersclub/lru-cache-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Puedes ver nuestra implementación en GitHub.
            </a>
          </p>
        </NotaPost>

        <h3>Por qué Map es la estructura perfecta para esto</h3>
        <p>
          Para implementar un LRU Cache necesitamos dos cosas: saber en todo
          momento cuál es el elemento menos recientemente usado, y poder
          acceder a cualquier elemento en O(1). <code>Map</code> cumple ambas
          condiciones: mantiene el orden de inserción (el primero siempre es
          el LRU, el último el MRU) y el acceso es directo. Cuando se accede
          a un elemento, basta con eliminarlo e insertarlo de nuevo al final
          para que pase a ser el MRU.
        </p>

        <CodigoPost lenguaje="JavaScript">{`class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // El orden de inserción es nuestra estructura
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // Mover al final = marcar como MRU
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key); // Quitar de su posición actual
    } else if (this.cache.size >= this.capacity) {
      // Eliminar el LRU: primer elemento del Map
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
    this.cache.set(key, value); // Insertar al final = MRU
  }
}`}</CodigoPost>

        <h3>En acción: uso, tests y benchmark</h3>
        <p>
          La imagen siguiente, extraída directamente del{" "}
          <a
            href="https://github.com/femcodersclub/lru-cache-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            repositorio en GitHub
          </a>
          , muestra tres aspectos del proyecto: el comportamiento del caché
          con capacidad para tres elementos (cómo al acceder a un elemento
          pasa al extremo MRU y cómo el LRU se elimina automáticamente al
          insertar uno nuevo), los 15 tests que cubren operaciones básicas,
          política LRU y casos límite, y el benchmark comparando{" "}
          <code>Map</code> frente a <code>Array</code>:
        </p>

        <ImagenPost
          src="/assets/javascript/lru-cache-proyecto.png"
          alt="Tres terminales del proyecto LRU Cache. En la primera, los 15 tests pasan sin fallos. En la segunda, el benchmark con capacidad 1.000 y 200.000 operaciones: Map es 3,3 veces más rápido que Array en escrituras y 7 veces más rápido en lecturas. En la tercera, el caché de tres elementos mueve al extremo MRU el elemento consultado y elimina el LRU al insertar uno nuevo."
        />

        <p>
          Con 200.000 operaciones sobre un caché de capacidad 1.000,{" "}
          <code>Map</code> es hasta{" "}
          <strong>7 veces más rápido en lecturas</strong> y más de{" "}
          <strong>3 veces más rápido en escrituras</strong> que una
          implementación basada en <code>Array</code>. A pequeña escala no se
          nota. En una aplicación real con cientos de requests por segundo, sí
          importa.
        </p>
        <p>
          El{" "}
          <a
            href="https://github.com/femcodersclub/lru-cache-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            proyecto completo en GitHub
          </a>{" "}
          también incluye <code>LRUCacheWithStats</code>, una versión
          extendida que registra el hit ratio, el número de evictions y las
          keys más accedidas, útil para evaluar si el tamaño del caché es el
          adecuado para un caso de uso concreto.
        </p>

        <p>
          <a
            href="https://github.com/femcodersclub/lru-cache-js"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Ver el proyecto completo en GitHub
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          Elegir la estructura correcta no es optimización prematura. Es
          conocer las herramientas que tienes disponibles.
        </p>
        <ul>
          <li>
            <strong>Map</strong>: cuando las keys no son strings simples o el
            orden de inserción importa.
          </li>
          <li>
            <strong>Set</strong>: cuando necesitas unicidad o harás búsquedas
            frecuentes.
          </li>
          <li>
            <strong>WeakMap y WeakSet</strong>: cuando quieres asociar datos a
            objetos sin interferir con el ciclo de vida de esos objetos ni
            preocuparte por fugas de memoria.
          </li>
        </ul>

        <NotaPost titulo="El siguiente post de la serie">
          <p>
            <strong>Programación Funcional Profesional</strong>:{" "}
            <code>map</code>, <code>filter</code> y <code>reduce</code> usados
            bien, composición de funciones, currying e inmutabilidad real.
          </p>
        </NotaPost>

        <p>
          ¿Tienes dudas o quieres compartir cómo usas estas estructuras en tus
          proyectos? Únete a la conversación en FemCoders Club, una comunidad
          de más de 1.600 mujeres en tecnología en España.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales">
        <h3>Para profundizar</h3>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN: Map en JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN: Set en JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN: WeakMap en JavaScript
            </a>
          </li>
          <li>
            <Link to="/recursos/js/closures-scope-context">
              Closures, scope y context: lo que realmente pasa en el motor de
              JavaScript
            </Link>
          </li>
          <li>
            <Link to="/recursos/js/event-loop-javascript">
              Event loop en JavaScript: cómo funciona la asincronía
            </Link>
          </li>
        </ul>

        <h3>Únete a la comunidad</h3>
        <p>
          ¿Tienes dudas sobre estas estructuras de datos o quieres compartir
          tus proyectos? Únete a FemCoders Club, una comunidad de más de
          1.600 mujeres en tecnología donde aprendemos y crecemos juntas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Necesitas apoyo personalizado?">
        <p>
          Si estas estructuras te resultan desafiantes o quieres profundizar
          más con orientación personalizada, en FemCoders Club ofrecemos{" "}
          <Link to="/login">mentorías individuales</Link> donde podemos
          trabajar juntas en tus dudas específicas (requiere{" "}
          <Link to="/register">registro gratuito</Link>).
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default EstructurasDatosJS;
