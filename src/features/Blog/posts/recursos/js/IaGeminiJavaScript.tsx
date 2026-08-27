import React from "react";
import { Helmet } from "react-helmet";
import { FaBook, FaBolt, FaCheck, FaCode, FaComments, FaDatabase, FaGithub, FaKey, FaLightbulb, FaServer, FaShieldAlt, FaStream, FaTachometerAlt, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import PostImage from "../../../components/PostImage";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const IaGeminiJavaScript: React.FC = () => {
  const postId = 45;
  const publicationDate = "19 de julio de 2026";

  return (
    <article className="blog-post">
      <Helmet>
        <title>
          IA en JavaScript: cómo integrar la API gratuita de Gemini sin
          frameworks | femCoders Club
        </title>
        <meta
          name="description"
          content="Integra la API gratuita de Gemini en JavaScript vanilla: caché LRU, backoff exponencial, control de cuotas y streaming, en un proyecto real de código abierto."
        />
        <meta
          name="keywords"
          content="integración de gemini en javascript, api de gemini, ia en javascript, api gratuita de ia, gemini javascript, streaming gemini, caché lru, backoff exponencial, femcoders club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/ia-javascript-gemini" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="IA en JavaScript: cómo integrar la API gratuita de Gemini sin frameworks | femCoders Club"
        />
        <meta
          property="og:description"
          content="Cómo integrar Gemini en un proyecto JavaScript real sin frameworks: proxy en Node nativo, control de cuota, backoff exponencial, caché LRU y streaming token a token."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/ia-javascript-gemini" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/ia-javascript-gemini.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IA en JavaScript: integra la API gratuita de Gemini sin frameworks — femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Proxy, control de cuota, backoff exponencial, caché LRU y streaming: integrar Gemini en JavaScript vanilla, en un proyecto de código abierto."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/ia-javascript-gemini.webp"
        />

        <meta property="article:published_time" content="2026-07-19T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="IA" />
        <meta property="article:tag" content="Gemini" />
        <meta property="article:tag" content="API" />
        <meta property="article:tag" content="Streaming" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Helmet>

      {/* ── Hero image ── */}
      <PostImage
        src="/public-optimized/desktop/assets/javascript/ia-javascript-gemini.webp"
        mobileSrc="/public-optimized/mobile/assets/javascript/ia-javascript-gemini.webp"
        desktopSrc="/public-optimized/desktop/assets/javascript/ia-javascript-gemini.webp"
        alt="IA en JavaScript: cómo integrar la API gratuita de Gemini sin frameworks"
        aiGenerated
      />

      <h1 className="blog-post-title">
        IA en JavaScript:
        <br />
        integra la API gratuita de Gemini sin frameworks
      </h1>

      <ShareButtons path="/recursos/js/ia-javascript-gemini" title="IA en JavaScript: cómo integrar la API gratuita de Gemini sin frameworks" />

      {/* ── Intro ── */}
      <section aria-labelledby="intro-section">
        <h2 id="intro-section" className="visually-hidden">
          Introducción
        </h2>
        <p className="intro-text">
          Has probado a montar un side-project con IA y a los cinco minutos te
          ha saltado un <code>429</code>. No es que tu código esté mal. Es que
          el free tier de la API que estás usando permite cinco, diez, quince
          peticiones por minuto, y nadie te lo avisa hasta que ya has roto la
          demo delante de alguien.
        </p>
        <p className="intro-text">
          Este post va de eso: cómo integrar Gemini, la API gratuita de Google
          AI Studio, en un proyecto JavaScript real sin que la cuota te deje en
          evidencia. No vamos a hacer un wrapper de tres líneas sobre{" "}
          <code>fetch</code>. Vamos a construir algo que ya has visto fallar en
          otros proyectos: streaming de respuestas, reintentos cuando el
          servidor dice que no, y una caché que evita llamar dos veces a la IA
          para lo mismo.
        </p>
        <p className="intro-text">
          El proyecto de este post es{" "}
          <strong>Smart Refactor Assistant</strong> (
          <a
            href="https://github.com/femcodersclub/smart-refactor-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            github.com/femcodersclub/smart-refactor-assistant
          </a>
          ): un asistente que analiza código JavaScript, detecta anti-patterns
          al instante con un linter propio, y usa Gemini para lo que un linter
          no puede hacer — explicar, refactorizar y generar tests con criterio.
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
            { icon: <FaShieldAlt />, label: "Proxy sin clave expuesta", color: "#4737bb" },
            { icon: <FaTachometerAlt />, label: "Control de cuota", color: "#6d2c95" },
            { icon: <FaDatabase />, label: "Caché LRU", color: "#ea4f33" },
            { icon: <FaStream />, label: "Streaming", color: "#4737bb" },
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

      {/* ── ¿Por qué Gemini y no OpenAI? ── */}
      <section aria-labelledby="por-que-gemini-section">
        <div className="highlight-box">
          <h2 id="por-que-gemini-section">
            <FaBolt
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            ¿Por qué Gemini y no OpenAI para este proyecto?
          </h2>
          <br />
          <p>
            La respuesta corta es el precio: la API de OpenAI no tiene tier
            gratuito real, y para un proyecto de portfolio que la lectora vaya
            a clonar y probar sin tarjeta de crédito, eso descarta la opción de
            raíz.
          </p>
          <p>
            Entre las alternativas gratuitas, Gemini (a través de Google AI
            Studio) ofrece el mejor equilibrio para este caso concreto: hasta
            un millón de tokens de contexto en su modelo Flash, sin necesidad
            de tarjeta de crédito, y una clave que se genera en menos de un
            minuto. La contrapartida es que el límite de peticiones por minuto
            es bajo — entre 5 y 15 según el modelo, muy lejos de lo que
            necesitarías en producción. Groq, otra opción gratuita, da
            muchísima más velocidad y cuota, pero eso lo dejamos para otro
            proyecto de la comunidad más adelante.
          </p>
          <p>
            Esa limitación de cuota no es un detalle menor: es la razón por la
            que este proyecto tiene una arquitectura pensada de verdad, y no
            solo una llamada a <code>fetch</code> con una clave pegada en el
            código.
          </p>
        </div>
      </section>

      {/* ── El navegador nunca debería hablar directamente con Gemini ── */}
      <section aria-labelledby="proxy-section">
        <div className="highlight-box">
          <h2 id="proxy-section">
            <FaShieldAlt
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Por qué el navegador nunca debería hablar directamente con Gemini
          </h2>
          <br />
          <p>
            El error más habitual en un primer prototipo con IA es llamar a la
            API desde el propio navegador. Funciona en local, y falla en el
            minuto uno en producción: cualquier persona que abra las DevTools
            puede leer tu clave en la pestaña de red y usarla como si fuera
            suya.
          </p>
          <p>
            La solución es un{" "}
            <strong>
              <FaServer
                style={{
                  display: "inline-block",
                  marginRight: "6px",
                  color: "var(--color-primary)",
                  verticalAlign: "middle",
                }}
              />
              proxy
            </strong>
            : un servidor que recibe la petición del navegador, añade la clave
            (que solo él conoce) y reenvía la llamada a Gemini. En este
            proyecto ese proxy es un servidor Node.js con el módulo nativo{" "}
            <code>http</code>, sin Express ni ninguna otra dependencia. El
            navegador solo conoce un endpoint propio, <code>/api/analyze</code>,
            y nunca ve la clave real.
          </p>
          <p>
            Hay una ventaja extra en mantener esta separación: el linter de
            anti-patterns (<code>src/linter.js</code>) no depende de nada de
            Node, así que el mismo archivo se importa tal cual en el navegador
            para dar feedback instantáneo mientras escribes, y en el servidor
            para construir el prompt que se envía a Gemini. Una sola fuente de
            verdad, sin duplicar reglas en dos sitios.
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
              <FaKey
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              <strong>La regla de oro:</strong> si una clave llega al navegador,
              deja de ser secreta. El boundary usuario → servidor es un boundary
              de seguridad real, igual que el de una base de datos.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cómo evitar quedarte sin cuota ── */}
      <section aria-labelledby="cuota-section">
        <div className="highlight-box">
          <h2 id="cuota-section">
            <FaTachometerAlt
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Cómo evitar quedarte sin cuota a mitad de una demo
          </h2>
          <br />
          <p>
            Con un límite de 10-15 peticiones por minuto, necesitas dos cosas:
            saber cuánta cuota te queda antes de gastarla, y reintentar con
            criterio cuando Gemini responda con un <code>429</code> en lugar de
            fallar directamente. Esto es exactamente lo que resolvimos en el{" "}
            <Link
              to="/recursos/js/event-loop-javascript"
              className="highlight-link"
            >
              Post 02 de la serie
            </Link>{" "}
            con el API Resilience Wrapper, y aquí no hacía falta reinventarlo —
            solo aplicarlo a un caso real.
          </p>
          <p>
            El tracker de cuota lleva la cuenta en memoria, con una ventana
            deslizante para el límite por minuto:
          </p>

          <div className="code-block bg3">
            <pre>
              {`canMakeRequest(now = Date.now()) {
  this._pruneWindow(now);
  return this.requestTimestamps.length < this.rpm
    && this.dailyCount < this.rpd;
}

recordRequest(now = Date.now()) {
  this._pruneWindow(now);
  this.requestTimestamps.push(now);
  this.dailyCount++;
}`}
            </pre>
          </div>

          <p>
            Antes de llamar a Gemini, el cliente pregunta a este tracker si
            queda margen. Si no queda, lanza un error específico (
            <code>QuotaExceededError</code>) que la interfaz puede distinguir de
            un fallo real de red y mostrar de forma clara: "espera un momento",
            no "algo se ha roto".
          </p>
          <p>
            Contar peticiones no es lo mismo que controlar costes, aunque en el
            free tier ambos límites acaban tocándose. Un prompt que incluye todo
            el fragmento de código más los hallazgos del linter ocupa más tokens
            que uno genérico, y el límite diario de Gemini se agota antes cuanto
            más largo sea cada prompt. Por eso en este proyecto el prompt de
            cada modo es deliberadamente compacto, y por eso la caché LRU no es
            un añadido opcional: es la diferencia entre que la cuota diaria te
            dure una tarde de pruebas o veinte minutos.
          </p>
          <p>
            Cuando sí hay margen pero Gemini responde <code>429</code> o un
            error <code>5xx</code> puntual, el cliente reintenta con backoff
            exponencial más un poco de jitter, para no machacar la API con
            reintentos sincronizados:
          </p>

          <div className="code-block bg3">
            <pre>
              {`while (true) {
  this.quota.recordRequest();
  response = await this._fetch(url, { method: 'POST', body, signal });

  if (response.ok) break;

  const retriable = response.status === 429 || response.status >= 500;
  if (!retriable || attempt >= MAX_RETRIES) {
    throw new Error(\`Gemini respondió \${response.status}\`);
  }
  await sleep(backoffDelay(attempt));
  attempt++;
}`}
            </pre>
          </div>

          <p>
            La diferencia entre esto y un <code>try/catch</code> a secas es que
            aquí distinguimos errores que merece la pena reintentar (cuota
            agotada momentáneamente, un <code>500</code> puntual) de errores que
            no (una clave inválida, un prompt mal formado). Reintentar un{" "}
            <code>401</code> solo retrasa el mensaje de error real.
          </p>
        </div>
      </section>

      {/* ── Cómo cachear respuestas de IA ── */}
      <section aria-labelledby="cache-section">
        <div className="highlight-box">
          <h2 id="cache-section">
            <FaDatabase
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Cómo cachear respuestas de IA sin gastar cuota dos veces
          </h2>
          <br />
          <p>
            Mientras pruebas la herramienta es habitual analizar el mismo
            fragmento de código más de una vez — cambias de modo, vuelves atrás,
            comparas resultados. Sin caché, cada una de esas repeticiones
            consume cuota real. Aquí reaprovechamos el mismo patrón LRU del{" "}
            <Link
              to="/recursos/js/estructuras-datos-js"
              className="highlight-link"
            >
              Post 04 de la serie
            </Link>
            , el del LRU Cache System: un <code>Map</code> de JavaScript
            conserva el orden de inserción de sus claves, así que "el elemento
            más antiguo" es sencillamente el primero en iterar.
          </p>

          <div className="code-block bg3">
            <pre>
              {`get(key) {
  if (!this.store.has(key)) { this.misses++; return undefined; }
  const value = this.store.get(key);
  this.store.delete(key);
  this.store.set(key, value); // ahora es la más reciente
  this.hits++;
  return value;
}`}
            </pre>
          </div>

          <p>
            La clave de caché combina el código y el modo (analizar,
            refactorizar, generar tests o explicar) mediante un hash, así que
            analizar el mismo código en dos modos distintos no colisiona. Con un
            tamaño de caché de 50 entradas, en una sesión de prueba normal el
            ratio de aciertos compensa de sobra la memoria que ocupa.
          </p>
        </div>
      </section>

      {/* ── Streaming token a token ── */}
      <section aria-labelledby="streaming-section">
        <div className="highlight-box">
          <h2 id="streaming-section">
            <FaStream
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Cómo mostrar la respuesta en streaming, token a token
          </h2>
          <br />
          <p>
            Esperar diez segundos frente a una pantalla en blanco hace que
            cualquier herramienta con IA se sienta rota, aunque esté funcionando
            perfectamente. La solución es la misma que usan ChatGPT o Claude:
            mostrar el texto según va llegando, no esperar a que termine.
          </p>
          <p>
            Gemini expone un endpoint de streaming vía Server-Sent Events. En
            vez de reimplementar el protocolo SSE completo en el navegador, el
            servidor traduce esos eventos a NDJSON (una línea JSON por
            fragmento), que es más simple de consumir con <code>fetch</code> y
            un <code>ReadableStream</code>:
          </p>

          <div className="code-block bg3">
            <pre>
              {`while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  buffer += decoder.decode(value, { stream: true });

  const lines = buffer.split('\\n');
  buffer = lines.pop();
  for (const line of lines) {
    if (!line.trim()) continue;
    handleStreamEvent(JSON.parse(line));
  }
}`}
            </pre>
          </div>

          <p>
            Cada línea representa un evento (<code>token</code>,{" "}
            <code>done</code> o <code>error</code>), y la interfaz decide qué
            hacer con cada uno: añadir texto, actualizar el indicador de cuota, o
            mostrar un error legible. Esto también es lo que permite cancelar una
            petición a mitad de camino con <code>AbortController</code> sin dejar
            el servidor colgado esperando una respuesta que ya nadie quiere.
          </p>
        </div>
      </section>

      {/* ── Prompting efectivo ── */}
      <section aria-labelledby="prompting-section">
        <div className="highlight-box">
          <h2 id="prompting-section">
            <FaComments
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Prompting efectivo: qué diferencia a un buen prompt de uno genérico
          </h2>
          <br />
          <p>
            Pedirle a un modelo "revisa este código" da resultados genéricos. Lo
            que marca la diferencia es darle contexto que el modelo no puede
            inferir solo del código: qué rol debe adoptar, qué ya se sabe (los
            hallazgos del linter propio) y qué formato de respuesta esperas.
          </p>
          <p>
            En este proyecto, cada modo tiene su propio prompt en{" "}
            <code>src/prompts.js</code>, separado de la lógica de red para poder
            revisarlo y mejorarlo sin tocar el cliente HTTP. El prompt de
            análisis, por ejemplo, le pasa a Gemini los hallazgos del linter
            antes de pedirle su opinión — así la IA no repite lo que ya sabemos,
            sino que aporta matices que un análisis puramente sintáctico no puede
            dar, como si una mutación de parámetro es un bug real o una decisión
            intencional.
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
              <strong>Un detalle de seguridad que no conviene saltarse:</strong>{" "}
              el código que la usuaria pega es input no confiable. Igual que
              nunca concatenarías input de usuario directo en una consulta SQL,
              tampoco lo incrustas a ciegas en un prompt. El boundary usuario →
              prompt es un boundary real, y sanear ahí evita que alguien
              secuestre las instrucciones del modelo.
            </p>
          </div>
        </div>
      </section>

      {/* ── El proyecto: Smart Refactor Assistant ── */}
      <section aria-labelledby="proyecto-section">
        <div className="highlight-box">
          <h2 id="proyecto-section">
            <FaCode
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            El proyecto: Smart Refactor Assistant
          </h2>
          <br />
          <p>
            El repositorio combina las dos capas de las que habla este post: un
            linter propio que detecta anti-patterns (<code>var</code>,{" "}
            <code>==</code>, callbacks anidados a tres o más niveles, mutación de
            parámetros, funciones demasiado largas) sin depender de ningún
            servicio externo, y Gemini para el análisis que sí necesita
            comprensión real del código.
          </p>
          <p>
            Además de la interfaz web, el proyecto incluye un modo CLI (
            <code>node bin/cli.js archivo.js --mode refactor</code>) para
            analizar archivos reales de tu propio proyecto, no solo fragmentos
            pegados en una textarea. Todo el pipeline — linter, caché, cliente
            de Gemini — está cubierto por tests con <code>node:test</code> y{" "}
            <code>fetch</code> mockeado, así que ejecutarlos no consume cuota
            real.
          </p>

          <div className="post-image-container">
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/smart-refactor-linter.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/smart-refactor-linter.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/smart-refactor-linter.webp"
                alt="Captura del linter propio detectando anti-patterns en tiempo real mientras se escribe código, con el indicador de cuota restante de Gemini en la esquina superior derecha"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>

          <p>
            Para arrancarlo en local necesitas tu propia clave gratuita de
            Google AI Studio (el proxy la lee de una variable de entorno, nunca
            del código):
          </p>

          <div className="code-block bg3">
            <pre>
              {`git clone https://github.com/femcodersclub/smart-refactor-assistant.git
cd smart-refactor-assistant
cp .env.example .env      # pega aquí tu GEMINI_API_KEY
npm test                  # el pipeline completo, sin gastar cuota
npm start                 # levanta el proxy y la interfaz web`}
            </pre>
          </div>

          <p>
            Puedes probar la interfaz y el feedback del linter al instante en la
            demo en vivo. Y si quieres llevarlo a tu propio código con el modo
            CLI o desplegar tu propia instancia, clonas el repo y usas tu clave
            gratuita de Google AI Studio — así la cuota (y la clave) son tuyas,
            no compartidas. Al final, la parte interesante no es la pantalla,
            sino la arquitectura que hace que la IA sea usable con un free tier
            limitado.
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
              href="https://github.com/femcodersclub/smart-refactor-assistant"
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
              href="https://femcodersclub.github.io/smart-refactor-assistant/"
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
              <FaBolt />
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
            La próxima vez que un side-project con IA se te caiga a los cinco
            minutos de probarlo, lo más probable es que no sea un bug de tu
            lógica, sino la ausencia de estas piezas. Ninguna es exclusiva de la
            IA — son las mismas que ya aplicamos en el Post 02 y el Post 04 de
            esta serie, ahora aplicadas a un problema nuevo.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              {
                texto: "El proxy",
                desc: "la clave vive en el servidor, nunca en el navegador. Si llega al cliente, deja de ser secreta.",
              },
              {
                texto: "Control de cuota",
                desc: "saber cuánta cuota queda antes de gastarla convierte un 429 opaco en un mensaje claro para quien usa la herramienta.",
              },
              {
                texto: "Backoff exponencial",
                desc: "reintentar con criterio solo lo reintentable (429, 5xx) y fallar rápido en lo que no (401, prompt inválido).",
              },
              {
                texto: "Caché LRU",
                desc: "no llamar dos veces a la IA para lo mismo. En un free tier, es la diferencia entre una tarde de pruebas y veinte minutos.",
              },
              {
                texto: "Streaming",
                desc: "mostrar el texto según llega hace que la herramienta se sienta viva, y permite cancelar con AbortController.",
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
            ¿Estás integrando IA en tus proyectos o te has topado con estos
            límites de cuota? Únete a la conversación en FemCoders Club, una
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
                href="https://github.com/femcodersclub/smart-refactor-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                smart-refactor-assistant — Proyecto completo en GitHub
              </a>
            </li>
            <li>
              <a
                href="https://femcodersclub.github.io/smart-refactor-assistant/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Smart Refactor Assistant — Demo en vivo
              </a>
            </li>
            <li>
              <a
                href="https://ai.google.dev/gemini-api/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Documentación oficial de la API de Gemini
              </a>
            </li>
            <li>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Google AI Studio — Generar tu clave gratuita
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/API/ReadableStream"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN — ReadableStream
              </a>
            </li>
            <li>
              <Link
                to="/recursos/js/event-loop-javascript"
                className="highlight-link"
              >
                Event Loop en JavaScript: Cómo Funciona la Asincronía (Post 02)
              </Link>
            </li>
            <li>
              <Link
                to="/recursos/js/estructuras-datos-js"
                className="highlight-link"
              >
                Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y
                WeakSet (Post 04)
              </Link>
            </li>
          </ul>
          <br />
          <h3>Únete a la comunidad</h3>
          <p>
            ¿Tienes dudas sobre cómo integrar IA en tus proyectos JavaScript?
            Únete a FemCoders Club, una comunidad de más de 1.500 mujeres en
            tecnología donde aprendemos y crecemos juntas.
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
            Si integrar una API de IA o diseñar la arquitectura alrededor de un
            free tier te resultan desafiantes o quieres profundizar más con
            orientación personalizada, en femCoders Club ofrecemos{" "}
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

export default IaGeminiJavaScript;
