import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaBook,
  FaCheck,
  FaChartLine,
  FaClock,
  FaCode,
  FaExclamationTriangle,
  FaGithub,
  FaLightbulb,
  FaMemory,
  FaSlack,
  FaStopwatch,
  FaTiktok,
  FaTools,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const OptimizacionJavaScript: React.FC = () => {
  const postId = 43;
  const publicationDate = "27 de junio de 2026";
  const currentUrl =
    "https://www.femcodersclub.com/recursos/js/optimizacion-javascript";

  return (
    <article className="blog-post">
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
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Optimización en JavaScript: mide antes de tocar una línea | femCoders Club"
        />
        <meta
          property="og:description"
          content="Debounce, throttle, memoization y detección de memory leaks: las técnicas que de verdad mueven la aguja, medidas con datos reales en lugar de intuiciones."
        />
        <meta property="og:url" content={currentUrl} />
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

      {/* ── Hero image ── */}
      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/javascript/optimizacion-javascript.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/javascript/optimizacion-javascript.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/javascript/optimizacion-javascript.webp"
            alt="Optimización en JavaScript: mide antes de tocar una línea"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Optimización en JavaScript:
        <br />
        mide antes de tocar una línea
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
          Alguien en una review te dice que tu función "va lenta". Abres el
          editor, miras el código y empiezas a cambiar cosas: metes un{" "}
          <code>useMemo</code> mental aquí, cacheas un resultado allá,
          reescribes un bucle. Media hora después no sabes si has mejorado
          algo o solo has ensuciado el código. No mediste antes. No has medido
          después. Has optimizado a ciegas.
        </p>
        <p className="intro-text">
          La optimización en JavaScript empieza por medir. No por saberte las
          técnicas de memoria, sino por poder demostrar, con datos de tu
          propio código, que una implementación es más rápida que otra o que
          un handler se dispara demasiadas veces. Este post va de eso: de las
          técnicas que de verdad mueven la aguja y de cómo comprobar que la
          mueven.
        </p>
        <p className="intro-text">
          El proyecto de este post es <strong>perf-lab-js</strong> (
          <a
            href="https://github.com/femcodersclub/performance-audit-tool-js"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            github.com/femcodersclub/performance-audit-tool-js
          </a>
          ): un toolkit de profiling y benchmarking en vanilla JavaScript, sin
          dependencias y sin build.
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
            { icon: <FaStopwatch />, label: "Profiler", color: "#4737bb" },
            { icon: <FaChartLine />, label: "Benchmark", color: "#6d2c95" },
            { icon: <FaMemory />, label: "Memory Sampler", color: "#ea4f33" },
            { icon: <FaCode />, label: "Sin dependencias", color: "#4737bb" },
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

      {/* ── El error de optimizar sin datos ── */}
      <section aria-labelledby="sin-datos-section">
        <div className="highlight-box">
          <h2 id="sin-datos-section">
            <FaExclamationTriangle
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            El error de optimizar sin datos
          </h2>
          <br />
          <p>
            Hay una regla incómoda: la mayoría de las optimizaciones que
            hacemos por intuición no sirven de nada, y algunas empeoran las
            cosas. Cacheas un cálculo que se ejecutaba una vez. Reescribes un{" "}
            <code>map</code> en un <code>for</code> porque "es más rápido" sin
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
        </div>
      </section>

      {/* ── Debounce y throttle ── */}
      <section aria-labelledby="debounce-throttle-section">
        <div className="highlight-box">
          <h2 id="debounce-throttle-section">
            <FaClock
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Debounce y throttle: la misma familia, problemas distintos
          </h2>
          <br />
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

          <div className="code-block bg3">
            <pre>
              {`function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      return fn.apply(this, args);
    }
  };
}`}
            </pre>
          </div>

          <p>
            Lo interesante no es el código, es poder demostrar que funciona.
            Si envuelves tu handler con un profiler antes y después de
            aplicar throttle, ves el número exacto de ejecuciones que te
            ahorras. Y ese número es contundente.
          </p>

          <div className="post-image-container">
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/profiler-memory.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/profiler-memory.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/profiler-memory.webp"
                alt="Demo de perf-lab-js: a la izquierda el profiler mostrando que un handler simulando 200 eventos de scroll se llama 200 veces sin throttle y solo 91 con throttle, 109 llamadas evitadas (55% menos trabajo); a la derecha el memory sampler tomando 25 muestras del heap de una caché"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
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
              <strong>Ese 55% no es un dato de folleto.</strong> Sale de
              ejecutar el código y contar: 200 llamadas sin throttle frente a
              91 con throttle, 109 llamadas evitadas. Cuando en una
              entrevista puedes decir "el throttle redujo las llamadas un 55%
              en mi prueba", ya no estás recitando una técnica: la estás
              midiendo.
            </p>
          </div>
        </div>
      </section>

      {/* ── Memoization ── */}
      <section aria-labelledby="memoization-section">
        <div className="highlight-box">
          <h2 id="memoization-section">
            <FaMemory
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            ¿Cuándo merece la pena memoizar?
          </h2>
          <br />
          <p>
            La memoization guarda el resultado de una función para no
            recalcularlo si vuelven a pedírselo con los mismos argumentos.
            Suena a victoria segura, pero tiene truco: solo compensa si la
            función es cara <strong>y</strong> si la vas a llamar varias
            veces con los mismos argumentos. Si cada llamada es distinta, lo
            único que consigues es llenar memoria con resultados que no vas a
            reutilizar. Es, en el fondo, el mismo compromiso que viste en el
            proyecto de{" "}
            <Link
              to="/recursos/js/estructuras-datos-js"
              className="highlight-link"
            >
              Estructuras de Datos Avanzadas
            </Link>
            , el LRU Cache: guardar tiene un coste, y sin un límite ese coste
            se te va de las manos.
          </p>
          <p>
            La pregunta correcta no es "¿memoizo?", es "¿cuánto me cuesta
            esta función y cuántas veces la repito?". Y esa pregunta se
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

          <div className="post-image-container">
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/benchmark-basico.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/benchmark-basico.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/benchmark-basico.webp"
                alt="Salida del benchmark en terminal eliminando duplicados de un array de 3.000 números con tres estrategias: Set gana con 0.1000 ms y 10.000 ops/s, mientras filter+indexOf y reduce+includes empatan en 0.4000 ms y 2500 ops/s, cuatro veces más lentas"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>

          <p>
            La diferencia no es sutil: <code>Set</code> resuelve la
            deduplicación de 3.000 números en 0.1000 ms (10.000 ops/s), y
            tanto <code>filter+indexOf</code> como{" "}
            <code>reduce+includes</code> empatan en 0.4000 ms — cuatro veces
            más lentas. Esto es lo que un benchmark te enseña y la intuición
            te esconde.
          </p>
        </div>
      </section>

      {/* ── Memory leaks ── */}
      <section aria-labelledby="memory-leaks-section">
        <div className="highlight-box">
          <h2 id="memory-leaks-section">
            <FaExclamationTriangle
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Memory leaks: lo que no se ve hasta que la pestaña se cae
          </h2>
          <br />
          <p>
            Un memory leak en JavaScript no lanza ningún error. La pestaña
            simplemente va consumiendo más y más memoria hasta que se
            arrastra o se cierra. Los sospechosos habituales: listeners que
            nunca se quitan, timers que siguen vivos, referencias en closures
            que no sueltas y cachés sin límite que crecen para siempre.
          </p>
          <p>
            Detectar una fuga tiene una parte contraintuitiva: no existe una
            API que te diga "tienes un leak". Lo que puedes hacer es lo que
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
            por muestra — y aun así el propio sampler concluye{" "}
            <strong>"sin fuga aparente, la memoria se mantuvo estable entre
            muestras"</strong>.
          </p>
          <p>
            Ese matiz importa: crecer no es lo mismo que tener una fuga sin
            límite. Lo que el sampler vigila es si la tendencia se sostiene
            sin techo a lo largo de muchas más muestras, no si el heap se
            mueve entre dos números concretos. Una caché sin ningún tope de
            tamaño, sostenida durante miles de ciclos en lugar de 25, es el
            escenario que sí dispararía la alarma.
          </p>
        </div>
      </section>

      {/* ── Cuándo NO optimizar ── */}
      <section aria-labelledby="no-optimizar-section">
        <div className="highlight-box">
          <h2 id="no-optimizar-section">
            <FaLightbulb
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Cuándo NO optimizar
          </h2>
          <br />
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
              <strong>La regla práctica:</strong> mide primero, identifica el
              cuello de botella real, optimiza solo eso, y vuelve a medir
              para confirmar que ganaste algo. Si no puedes medir la mejora,
              probablemente no valía la pena.
            </p>
          </div>
        </div>
      </section>

      {/* ── El proyecto: perf-lab-js ── */}
      <section aria-labelledby="proyecto-section">
        <div className="highlight-box">
          <h2 id="proyecto-section">
            <FaCode
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            El proyecto: perf-lab-js
          </h2>
          <br />
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

          <div className="code-block bg3">
            <pre>
              {`git clone https://github.com/femcodersclub/performance-audit-tool-js.git
cd performance-audit-tool-js
npm test          # los 18 tests
npm run example   # el benchmark en acción
npm run demo      # la demo visual en el navegador`}
            </pre>
          </div>

          <p>
            Construir este toolkit enseña algo que ninguna librería de
            terceros te da: entender por dentro cómo se mide el rendimiento
            de verdad. Cómo el warm-up cambia los números, por qué la mediana
            es más honesta que la media, cómo una regresión lineal convierte
            unas muestras de memoria en un diagnóstico. Eso es lo que se
            queda cuando cierras el editor.
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
              href="https://github.com/femcodersclub/performance-audit-tool-js"
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
              href="https://femcodersclub.github.io/performance-audit-tool-js/"
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
              <FaChartLine />
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
            Mide antes de tocar. El resto es intuición, y la intuición en
            performance casi siempre se equivoca.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              {
                texto: "Throttle vs. debounce",
                desc: "throttle ejecuta a intervalos fijos, debounce espera al silencio. Elegir mal el instrumento no se nota hasta que mides.",
              },
              {
                texto: "Memoization",
                desc: "solo compensa si la función es cara y se repite con los mismos argumentos. Sin esos dos factores, es memoria desperdiciada.",
              },
              {
                texto: "Memory leaks",
                desc: "no lanzan errores, se detectan por tendencia. Una pendiente de heap que sube sin bajar es la firma de una fuga.",
              },
              {
                texto: "Optimización prematura",
                desc: "tiene coste real en legibilidad y mantenimiento. Solo se justifica si el beneficio es medible.",
              },
              {
                texto: "Medir siempre, antes y después",
                desc: "sin línea base, cualquier cambio parece una mejora. El número es lo que distingue una técnica de una intuición.",
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
            ¿Tienes dudas o quieres compartir tus mediciones de performance?
            Únete a la conversación en FemCoders Club, una comunidad de más
            de 1.500 mujeres en tecnología en España.
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
                href="https://github.com/femcodersclub/performance-audit-tool-js"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                performance-audit-tool-js — Proyecto completo en GitHub
              </a>
            </li>
            <li>
              <a
                href="https://femcodersclub.github.io/performance-audit-tool-js/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                perf-lab-js — Demo en vivo
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Glossary/Debounce"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN — Debounce
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/API/Performance"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN — Performance API
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
            ¿Tienes dudas sobre performance en JavaScript? Únete a FemCoders
            Club, una comunidad de más de 1.500 mujeres en tecnología donde
            aprendemos y crecemos juntas.
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
            Si la optimización o el profiling en JavaScript te resultan
            desafiantes o quieres profundizar más con orientación
            personalizada, en femCoders Club ofrecemos{" "}
            <Link to="/login" className="highlight-link">
              mentorías individuales
            </Link>{" "}
            donde podemos trabajar juntas en tus dudas específicas. (Requiere{" "}
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

export default OptimizacionJavaScript;
