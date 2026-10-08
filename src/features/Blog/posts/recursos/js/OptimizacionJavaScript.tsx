import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ImagenPost,
  NotaPost,
  SeccionPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const OptimizacionJavaScript: React.FC = () => (
  <>
      <Helmet>
        <title>
          Optimización en JavaScript: mide antes de tocar una línea |
          femCoders Club
        </title>
        <meta
          name="description"
          content="Optimización en JavaScript sin adivinar. Aprende a usar debounce, throttle, memoization y a detectar memory leaks midiendo el rendimiento real de tu código, no con intuiciones."
        />
        <meta
          name="keywords"
          content="optimización javascript, debounce, throttle, memoization, memory leaks javascript, performance javascript, profiling javascript, benchmark javascript, femcoders club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/optimizacion-javascript" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Optimización en JavaScript: mide antes de tocar una línea | femCoders Club"
        />
        <meta
          property="og:description"
          content="Debounce, throttle, memoization y detección de memory leaks: las técnicas que de verdad mueven la aguja, medidas con datos reales en lugar de intuiciones."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/optimizacion-javascript" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/optimizacion-javascript.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Optimización en JavaScript: mide antes de tocar una línea — femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Debounce, throttle, memoization y memory leaks medidos con datos reales, no con intuiciones."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/optimizacion-javascript.webp"
        />

        <meta property="article:published_time" content="2026-06-27T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Performance" />
        <meta property="article:tag" content="Debounce" />
        <meta property="article:tag" content="Throttle" />
        <meta property="article:tag" content="Memoization" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/js/optimizacion-javascript"
      titulo="Optimización en JavaScript: mide antes de tocar una línea"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={43}
      portadaConIA
      entradilla={
        <>
          <p>
            Alguien en una review te dice que tu función «va lenta». Abres el
            editor, miras el código y empiezas a cambiar cosas: metes un{" "}
            <code>useMemo</code> mental aquí, cacheas un resultado allá,
            reescribes un bucle. Media hora después no sabes si has mejorado
            algo o solo has ensuciado el código. No mediste antes. No has medido
            después. Has optimizado a ciegas.
          </p>
          <p>
            La optimización en JavaScript empieza por medir. No por saberte las
            técnicas de memoria, sino por poder demostrar, con datos de tu
            propio código, que una implementación es más rápida que otra o que
            un handler se dispara demasiadas veces. Este post va de eso: de las
            técnicas que de verdad mueven la aguja y de cómo comprobar que la
            mueven.
          </p>
          <p>
            El proyecto de este post es <strong>perf-lab-js</strong> (
            <a
              href="https://github.com/femcodersclub/performance-audit-tool-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/femcodersclub/performance-audit-tool-js
            </a>
            ): un toolkit de profiling y benchmarking en vanilla JavaScript, sin
            dependencias y sin build.
          </p>
        </>
      }
    >
      <p>Lo que incluye perf-lab-js:</p>
      <ul>
        <li>Profiler</li>
        <li>Benchmark</li>
        <li>Memory sampler</li>
        <li>Sin dependencias</li>
      </ul>

      <SeccionPost titulo="El error de optimizar sin datos">
        <p>
          Hay una regla incómoda: la mayoría de las optimizaciones que
          hacemos por intuición no sirven de nada, y algunas empeoran las
          cosas. Cacheas un cálculo que se ejecutaba una vez. Reescribes un{" "}
          <code>map</code> en un <code>for</code> porque «es más rápido» sin
          comprobar que en tu caso la diferencia es de microsegundos
          irrelevantes. Añades complejidad para ganar un 0,3%.
        </p>
        <p>
          El problema no es querer optimizar. Es hacerlo sin una línea
          base. Sin un número de partida, cualquier cambio parece una
          mejora porque no tienes con qué compararlo.
        </p>
        <p>
          Por eso el proyecto de este post no es un optimizador automático
          que te dice qué arreglar. Es un banco de medición: tres
          instrumentos que te dan los números para que decidas tú. Porque
          «esto va lento» no es un diagnóstico, es una sensación.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Debounce y throttle: la misma familia, problemas distintos">
        <p>
          Aquí va la confusión más común, y una pregunta de entrevista casi
          garantizada: la diferencia entre debounce y throttle. Las dos
          limitan cada cuánto se ejecuta una función que se dispara muchas
          veces. Cambian en <em>cuándo</em> la dejan pasar.
        </p>
        <p>
          <strong>Throttle</strong> ejecuta como mucho una vez cada X
          milisegundos, pase lo que pase. Es un portero que deja entrar a
          una persona cada quince segundos y al resto las manda esperar.
          Sirve para eventos continuos donde quieres actualizar de vez en
          cuando: scroll, resize, mousemove.
        </p>
        <p>
          <strong>Debounce</strong> espera a que paren de llegar eventos y
          solo entonces ejecuta. Es el portero que espera a que se vacíe la
          cola antes de abrir. Sirve para cuando solo te importa el estado
          final: un buscador que dispara la petición cuando el usuario deja
          de teclear, no con cada letra.
        </p>
        <p>
          La implementación de throttle cabe en unas pocas líneas y conviene
          entenderla de memoria, porque la vas a escribir en más de una
          pizarra:
        </p>

        <CodigoPost lenguaje="JavaScript">{`function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      return fn.apply(this, args);
    }
  };
}`}</CodigoPost>

        <p>
          Lo interesante no es el código, es poder demostrar que funciona.
          Si envuelves tu handler con un profiler antes y después de
          aplicar throttle, ves el número exacto de ejecuciones que te
          ahorras. Y ese número es contundente.
        </p>

        <ImagenPost
          src="/assets/javascript/profiler-memory.png"
          alt="Demo de perf-lab-js: a la izquierda, el profiler muestra que un handler que simula 200 eventos de scroll se llama 200 veces sin throttle y solo 91 con throttle, 109 llamadas evitadas (55% menos trabajo); a la derecha, el memory sampler toma 25 muestras del heap de una caché."
        />

        <NotaPost titulo="Ese 55% no es un dato de folleto">
          <p>
            Sale de ejecutar el código y contar: 200 llamadas sin throttle
            frente a 91 con throttle, 109 llamadas evitadas. Cuando en una
            entrevista puedes decir «el throttle redujo las llamadas un 55%
            en mi prueba», ya no estás recitando una técnica: la estás
            midiendo.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="¿Cuándo merece la pena memoizar?">
        <p>
          La memoization guarda el resultado de una función para no
          recalcularlo si vuelven a pedírselo con los mismos argumentos.
          Suena a victoria segura, pero tiene truco: solo compensa si la
          función es cara <strong>y</strong> si la vas a llamar varias
          veces con los mismos argumentos. Si cada llamada es distinta, lo
          único que consigues es llenar memoria con resultados que no vas a
          reutilizar. Es, en el fondo, el mismo compromiso que viste en el
          proyecto de{" "}
          <Link to="/recursos/js/estructuras-datos-js">
            Estructuras de Datos Avanzadas
          </Link>
          , el LRU Cache: guardar tiene un coste, y sin un límite ese coste
          se te va de las manos.
        </p>
        <p>
          La pregunta correcta no es «¿memoizo?», es «¿cuánto me cuesta
          esta función y cuántas veces la repito?». Y esa pregunta se
          responde midiendo, no suponiendo. Un benchmark que compare la
          versión memoizada contra la original, con tu patrón real de
          llamadas, te da la respuesta en una línea de tabla.
        </p>
        <p>
          Aquí es donde entra el segundo instrumento. Comparar
          implementaciones a ojo es imposible; <code>console.time()</code>{" "}
          suelto miente porque no calienta el motor ni repite las
          mediciones. Un benchmark serio calienta, mide muchas veces y
          resume con la mediana.
        </p>

        <ImagenPost
          src="/assets/javascript/benchmark-basico.png"
          alt="Salida del benchmark en la terminal al eliminar duplicados de un array de 3.000 números con tres estrategias: Set gana con 0.1000 ms y 10.000 ops/s, mientras que filter+indexOf y reduce+includes empatan en 0.4000 ms y 2500 ops/s, cuatro veces más lentas."
        />

        <p>
          La diferencia no es sutil: <code>Set</code> resuelve la
          deduplicación de 3.000 números en 0.1000 ms (10.000 ops/s), y
          tanto <code>filter+indexOf</code> como{" "}
          <code>reduce+includes</code> empatan en 0.4000 ms, cuatro veces
          más lentas. Esto es lo que un benchmark te enseña y la intuición
          te esconde.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Memory leaks: lo que no se ve hasta que la pestaña se cae">
        <p>
          Un memory leak en JavaScript no lanza ningún error. La pestaña
          simplemente va consumiendo más y más memoria hasta que se
          arrastra o se cierra. Los sospechosos habituales: listeners que
          nunca se quitan, timers que siguen vivos, referencias en closures
          que no sueltas y cachés sin límite que crecen para siempre.
        </p>
        <p>
          Detectar una fuga tiene una parte contraintuitiva: no existe una
          API que te diga «tienes un leak». Lo que puedes hacer es lo que
          hace cualquier perfil de memoria serio: muestrear el heap a lo
          largo del tiempo y mirar la tendencia. Si la memoria sube y sube
          sin bajar tras los ciclos de recolección, hay fuga. Una sola foto
          no basta; necesitas la película.
        </p>
        <p>
          El tercer instrumento hace justo eso: toma muestras del heap y
          calcula la tendencia. En la demo del proyecto (la que viste más
          arriba, en el panel derecho junto al profiler), el sampler toma
          25 muestras mientras se llena una caché dentro de un bucle: el
          heap pasa de 52.75 MB a 64.26 MB, con una tendencia de +479 KB
          por muestra, y aun así el propio sampler concluye{" "}
          <strong>«sin fuga aparente, la memoria se mantuvo estable entre
          muestras»</strong>.
        </p>
        <p>
          Ese matiz importa: crecer no es lo mismo que tener una fuga sin
          límite. Lo que el sampler vigila es si la tendencia se sostiene
          sin techo a lo largo de muchas más muestras, no si el heap se
          mueve entre dos números concretos. Una caché sin ningún tope de
          tamaño, sostenida durante miles de ciclos en lugar de 25, es el
          escenario que sí dispararía la alarma.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cuándo no optimizar">
        <p>
          Esta es la parte que casi nadie cuenta y la que más madurez
          demuestra. Optimizar tiene un coste: código más complejo, más
          difícil de leer, más fácil de romper. Ese coste solo se justifica
          si el beneficio es real y medible.
        </p>
        <p>
          Si una función se ejecuta una vez al cargar la página y tarda dos
          milisegundos, no la toques aunque puedas hacerla un 50% más
          rápida: estás ganando un milisegundo que nadie va a notar y
          regalando complejidad a quien lea el código después. La
          optimización prematura no es un pecado abstracto de los libros;
          es meter una caché en un sitio donde nadie lo necesitaba y crear
          un bug de estado obsoleto tres semanas más tarde.
        </p>

        <NotaPost titulo="La regla práctica">
          <p>
            Mide primero, identifica el cuello de botella real, optimiza solo
            eso, y vuelve a medir para confirmar que ganaste algo. Si no
            puedes medir la mejora, probablemente no valía la pena.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="El proyecto: perf-lab-js">
        <p>
          El proyecto de este post es <strong>perf-lab-js</strong>, un
          toolkit de profiling y benchmarking en vanilla JavaScript, sin
          dependencias y sin build. Reúne los tres instrumentos que has
          visto en acción: el benchmark para comparar implementaciones, el
          profiler para contar llamadas y tiempos, y el memory sampler para
          detectar fugas por tendencia.
        </p>
        <p>
          Está pensado para que lo instrumentes sobre tu propio código:
          envuelves una función y mides, comparas dos enfoques y ves cuál
          gana, muestreas la memoria de un proceso y compruebas si crece.
          El mismo código fuente corre en Node (para los tests y los
          scripts) y en el navegador (para la demo visual), gracias al
          formato UMD. Cero magia, cero bundler.
        </p>
        <p>
          Dentro encontrarás el runner de benchmark con warm-up y
          estadística real (mediana, desviación, percentiles p95/p99), el
          profiler que funciona con funciones síncronas y asíncronas, el
          sampler de memoria con detección de tendencia, una suite de 18
          tests con el <code>assert</code> nativo de Node y tres ejemplos
          ejecutables que dan los resultados que has visto arriba.
        </p>

        <CodigoPost lenguaje="Bash">{`git clone https://github.com/femcodersclub/performance-audit-tool-js.git
cd performance-audit-tool-js
npm test          # los 18 tests
npm run example   # el benchmark en acción
npm run demo      # la demo visual en el navegador`}</CodigoPost>

        <p>
          Construir este toolkit enseña algo que ninguna librería de
          terceros te da: entender por dentro cómo se mide el rendimiento
          de verdad. Cómo el warm-up cambia los números, por qué la mediana
          es más honesta que la media, cómo una regresión lineal convierte
          unas muestras de memoria en un diagnóstico. Eso es lo que se
          queda cuando cierras el editor.
        </p>

        <p>
          <a
            href="https://github.com/femcodersclub/performance-audit-tool-js"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Ver el proyecto en GitHub
          </a>
        </p>
        <p>
          <a
            href="https://femcodersclub.github.io/performance-audit-tool-js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver la demo en vivo
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          Mide antes de tocar. El resto es intuición, y la intuición en
          performance casi siempre se equivoca.
        </p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Throttle vs. debounce",
              texto:
                "Throttle ejecuta a intervalos fijos, debounce espera al silencio. Elegir mal el instrumento no se nota hasta que mides.",
            },
            {
              titulo: "Memoization",
              texto:
                "Solo compensa si la función es cara y se repite con los mismos argumentos. Sin esos dos factores, es memoria desperdiciada.",
            },
            {
              titulo: "Memory leaks",
              texto:
                "No lanzan errores, se detectan por tendencia. Una pendiente de heap que sube sin bajar es la firma de una fuga.",
            },
            {
              titulo: "Optimización prematura",
              texto:
                "Tiene coste real en legibilidad y mantenimiento. Solo se justifica si el beneficio es medible.",
            },
            {
              titulo: "Medir siempre, antes y después",
              texto:
                "Sin línea base, cualquier cambio parece una mejora. El número es lo que distingue una técnica de una intuición.",
            },
          ]}
        />

        <p>
          ¿Tienes dudas o quieres compartir tus mediciones de performance?
          Únete a la conversación en FemCoders Club, una comunidad de más
          de 1.600 mujeres en tecnología en España.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales">
        <h3>Para profundizar</h3>
        <ul>
          <li>
            <a
              href="https://github.com/femcodersclub/performance-audit-tool-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              performance-audit-tool-js — Proyecto completo en GitHub
            </a>
          </li>
          <li>
            <a
              href="https://femcodersclub.github.io/performance-audit-tool-js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              perf-lab-js — Demo en vivo
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Glossary/Debounce"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN — Debounce
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Web/API/Performance"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN — Performance API
            </a>
          </li>
          <li>
            <Link to="/recursos/js/estructuras-datos-js">
              Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap
              y WeakSet
            </Link>
          </li>
          <li>
            <Link to="/recursos/js/manipulacion-dom-ingeniera">
              Manipulación del DOM como una Ingeniera
            </Link>
          </li>
        </ul>

        <h3>Únete a la comunidad</h3>
        <p>
          ¿Tienes dudas sobre performance en JavaScript? Únete a FemCoders
          Club, una comunidad de más de 1.600 mujeres en tecnología donde
          aprendemos y crecemos juntas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Necesitas apoyo personalizado?">
        <p>
          Si la optimización o el profiling en JavaScript te resultan
          desafiantes o quieres profundizar más con orientación
          personalizada, en FemCoders Club ofrecemos{" "}
          <Link to="/login">mentorías individuales</Link> donde podemos
          trabajar juntas en tus dudas específicas. (Requiere{" "}
          <Link to="/register">registro gratuito</Link>.)
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default OptimizacionJavaScript;
