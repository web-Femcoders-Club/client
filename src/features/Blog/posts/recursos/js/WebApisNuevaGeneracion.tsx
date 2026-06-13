import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaBook,
  FaCheck,
  FaCode,
  FaCubes,
  FaDatabase,
  FaFileCode,
  FaGithub,
  FaLightbulb,
  FaLock,
  FaMicrochip,
  FaSlack,
  FaTiktok,
  FaTools,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const WebApisNuevaGeneracion: React.FC = () => {
  const postId = 42;
  const publicationDate = "12 de junio de 2026";
  const currentUrl =
    "https://www.femcodersclub.com/recursos/js/web-apis-nueva-generacion";

  return (
    <article className="blog-post">
      <Helmet>
        <title>
          Web APIs de nueva generación en JavaScript: más allá del localStorage
          | femCoders Club
        </title>
        <meta
          name="description"
          content="IndexedDB, Web Crypto API y File System Access API en JavaScript: persistencia estructurada, encriptación real en el navegador y acceso a ficheros sin servidor. Proyecto práctico: Encrypted Private Notes."
        />
        <meta
          name="keywords"
          content="IndexedDB javascript, Web Crypto API, File System Access API, AES-GCM, PBKDF2, encriptación navegador, localStorage alternativa, femcoders club"
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Web APIs de nueva generación en JavaScript: más allá del localStorage | femCoders Club"
        />
        <meta
          property="og:description"
          content="IndexedDB, Web Crypto API y File System Access API: las APIs del navegador que reemplazan dependencias externas. Proyecto práctico: Encrypted Private Notes con encriptación extremo a extremo."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/web-apis-nueva-generacion.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web APIs de nueva generación en JavaScript — femCoders Club"
        />
        <meta
          name="twitter:description"
          content="IndexedDB, Web Crypto API y File System Access API. Notas privadas con encriptación AES-GCM-256 sin dependencias externas."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/web-apis-nueva-generacion.webp"
        />

        <meta property="article:published_time" content="2026-06-12T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="IndexedDB" />
        <meta property="article:tag" content="Web Crypto API" />
        <meta property="article:tag" content="File System Access API" />
        <meta property="article:tag" content="Web APIs" />

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
            srcSet="/public-optimized/mobile/assets/javascript/web-apis-nueva-generacion.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/javascript/web-apis-nueva-generacion.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/javascript/web-apis-nueva-generacion.webp"
            alt="Web APIs de nueva generación en JavaScript"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Web APIs de nueva generación en JavaScript:
        <br />
        más allá del localStorage
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
          Hay un momento en la vida de todo proyecto frontend en que localStorage
          se queda corto. Guardas demasiados datos, el rendimiento cae, o alguien
          de seguridad te pregunta si de verdad estás metiendo texto plano en el
          navegador. Y entonces descubres que el navegador lleva años teniendo APIs
          mucho más potentes — y que casi nadie las usa.
        </p>
        <p className="intro-text">
          IndexedDB para persistencia estructurada. Web Crypto API para encriptación
          real. File System Access API para leer y escribir ficheros sin pasar por
          un servidor. Estas no son APIs experimentales: están disponibles en todos
          los navegadores modernos y resuelven problemas que hasta hace poco
          requerían dependencias externas o lógica de servidor.
        </p>
        <p className="intro-text">
          El proyecto de este post es <strong>Encrypted Private Notes</strong> (
          <a
            href="https://github.com/femcodersclub/encrypted-private-notes"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            github.com/femcodersclub/encrypted-private-notes
          </a>
          ): un editor de notas con encriptación extremo a extremo construido con
          estas tres APIs, sin una sola dependencia externa y sin servidor. Todo
          ocurre en el navegador.
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
            { icon: <FaDatabase />, label: "IndexedDB", color: "#4737bb" },
            { icon: <FaLock />, label: "Web Crypto API", color: "#6d2c95" },
            { icon: <FaFileCode />, label: "File System Access", color: "#ea4f33" },
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

      {/* ── 1. IndexedDB ── */}
      <section aria-labelledby="indexeddb-section">
        <div className="highlight-box">
          <h2 id="indexeddb-section">
            <FaDatabase
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            IndexedDB: la base de datos que ya tienes en el navegador
          </h2>
          <br />
          <p>
            localStorage tiene dos límites que no tienen solución: almacena solo
            strings y bloquea el hilo principal. Para cualquier cosa más seria,
            IndexedDB es la alternativa nativa.
          </p>
          <p>
            Es una base de datos orientada a objetos, asíncrona, con soporte para
            índices y transacciones. Puede almacenar objetos JavaScript directamente
            — sin serializar a JSON, sin límite práctico de tamaño, sin bloquear la
            UI. Y funciona completamente offline.
          </p>
          <p>
            La API tiene fama de verbosa, y con razón. Pero el patrón se repite
            siempre: abrir la base de datos (con <code>indexedDB.open()</code>),
            definir el esquema en <code>onupgradeneeded</code>, y operar dentro de
            transacciones. Así abre y crea el almacén de notas el proyecto:
          </p>

          <div className="code-block bg3">
            <pre>
              {`function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('encrypted-notes-db', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const store = db.createObjectStore('notes', {
        keyPath: 'id',
        autoIncrement: true,
      });
      // Índice por fecha para recuperar notas ordenadas cronológicamente
      store.createIndex('createdAt', 'createdAt', { unique: false });
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}`}
            </pre>
          </div>

          <p>
            Lo que más cuesta al principio es que <code>onupgradeneeded</code> solo
            se ejecuta cuando la versión de la base de datos cambia — no en cada
            apertura. Es ahí donde defines o modificas el esquema. Si intentas crear
            un índice fuera de ese evento, IndexedDB lanza un error.
          </p>
          <p>
            Una vez abierta la conexión, las operaciones siguen siempre el mismo
            patrón: crear una transacción, obtener el <code>objectStore</code>,
            lanzar la operación, manejar <code>onsuccess</code> y{" "}
            <code>onerror</code>. La promisificación de esas callbacks es lo primero
            que merece la pena abstraer en cualquier proyecto real.
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
              <strong>
                En el proyecto, IndexedDB nunca almacena texto plano.
              </strong>{" "}
              Las notas entran ya encriptadas: el módulo <code>storage.js</code>{" "}
              solo mueve bytes cifrados hacia y desde la base de datos. La capa de
              encriptación vive completamente separada.
            </p>
          </div>

          <div className="post-image-container">
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/devTools-indexedDB.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/devTools-indexedDB.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/devTools-indexedDB.webp"
                alt="DevTools mostrando las notas en IndexedDB con los campos salt, iv y ciphertext en base64 — ningún texto plano visible"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* ── 2. Web Crypto API ── */}
      <section aria-labelledby="webcrypto-section">
        <div className="highlight-box">
          <h2 id="webcrypto-section">
            <FaLock
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Web Crypto API: encriptación real en el navegador
          </h2>
          <br />
          <p>
            <code>crypto.subtle</code> es la API criptográfica nativa del
            navegador. No es una librería, no es una dependencia — está disponible
            en <code>window.crypto.subtle</code> en cualquier contexto seguro (HTTPS
            o localhost). Implementa algoritmos estándar: AES-GCM, RSA-OAEP, ECDSA,
            PBKDF2, entre otros.
          </p>
          <p>
            El flujo de encriptación del proyecto tiene tres pasos: derivar una
            clave a partir de la contraseña, generar un IV aleatorio, y encriptar.
            La parte crítica es la derivación:
          </p>

          <div className="code-block bg3">
            <pre>
              {`async function deriveKey(password, salt) {
  const encoder = new TextEncoder();
  const rawKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 310_000, // Recomendación OWASP 2023 para SHA-256
      hash: 'SHA-256',
    },
    rawKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}`}
            </pre>
          </div>

          <p>
            PBKDF2 con 310.000 iteraciones convierte una contraseña en una{" "}
            <code>CryptoKey</code> de 256 bits. El <code>salt</code> — 16 bytes
            aleatorios generados con <code>crypto.getRandomValues()</code> —
            garantiza que dos usuarias con la misma contraseña obtengan claves
            distintas. La <code>CryptoKey</code> resultante no es un string ni un
            objeto serializable: es un handle opaco que solo existe en memoria y que{" "}
            <code>crypto.subtle</code> usa internamente. No puedes extraerla, y eso
            es intencional.
          </p>
          <p>
            Para encriptar, AES-GCM necesita además un IV (vector de
            inicialización) de 12 bytes, también aleatorio. La regla aquí no admite
            excepciones:{" "}
            <strong>nunca reutilizar el mismo IV con la misma clave</strong>. En
            AES-GCM, hacerlo compromete la clave entera. El proyecto genera un IV
            nuevo por cada nota, por cada edición.
          </p>
          <p>
            El resultado de <code>crypto.subtle.encrypt()</code> es un{" "}
            <code>ArrayBuffer</code> — bytes puros. Para guardarlo en IndexedDB o
            exportarlo a fichero, el proyecto lo convierte a base64. Salt, IV y
            ciphertext viajan juntos: sin los dos primeros, la desencriptación es
            imposible aunque tengas la contraseña.
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
              <strong>
                Lo que más sorprende a quien usa Web Crypto API por primera vez
              </strong>{" "}
              es que un password incorrecto no devuelve <code>null</code> ni{" "}
              <code>false</code>. Lanza un error. AES-GCM incluye autenticación de
              mensaje (la G de GCM): si el ciphertext o la clave no son correctos,
              la desencriptación falla con una excepción. No hay resultado parcial
              ni pista sobre qué fue mal. Eso es exactamente el comportamiento que
              quieres en una app de notas privadas.
            </p>
          </div>

          <div className="post-image-container">
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/crypto-tests.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/crypto-tests.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/crypto-tests.webp"
                alt="Terminal mostrando los 16 tests de crypto.test.js en verde, incluyendo que dos encriptaciones del mismo texto producen ciphertexts distintos"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* ── 3. File System Access API ── */}
      <section aria-labelledby="filesystem-section">
        <div className="highlight-box">
          <h2 id="filesystem-section">
            <FaFileCode
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            File System Access API: leer y escribir ficheros de verdad
          </h2>
          <br />
          <p>
            Durante años, la única forma de que un usuario descargara un fichero
            desde el navegador era crear un <code>&lt;a&gt;</code> con{" "}
            <code>download</code> y un <code>Blob</code>. Funcionaba, pero no había
            forma de que el usuario eligiera dónde guardarlo ni de volver a abrir
            ese mismo fichero después.
          </p>
          <p>
            File System Access API cambia eso. Permite abrir un selector de ficheros
            nativo del sistema operativo, leer el contenido de un fichero
            seleccionado, y guardar con <code>showSaveFilePicker()</code> en una
            ubicación que la usuaria elige. El proyecto usa ambas:
          </p>

          <div className="code-block bg3">
            <pre>
              {`async function exportWithFileSystemAPI(content, filename) {
  const handle = await window.showSaveFilePicker({
    suggestedName: filename,
    types: [{
      description: 'Nota encriptada',
      accept: { 'application/octet-stream': ['.enc'] },
    }],
  });

  const writable = await handle.createWritable();
  await writable.write(content);
  await writable.close();
}`}
            </pre>
          </div>

          <p>
            El fichero <code>.enc</code> exportado contiene JSON con el{" "}
            <code>salt</code>, el <code>iv</code> y el <code>ciphertext</code> en
            base64. Nada más. Puedes abrirlo con cualquier editor de texto y verás
            exactamente lo que IndexedDB tiene guardado: datos ilegibles sin la
            contraseña. Esa es la demostración más directa de que la encriptación
            funciona.
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
              <strong>Firefox tiene soporte parcial de esta API</strong> —{" "}
              <code>showSaveFilePicker</code> no está disponible en todas las
              versiones. El módulo <code>fileSystem.js</code> del proyecto detecta
              el soporte en tiempo de ejecución y cae al método clásico de{" "}
              <code>&lt;a download&gt;</code> cuando es necesario. La usuaria nunca
              ve la diferencia; el comportamiento cambia por debajo.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Arquitectura ── */}
      <section aria-labelledby="arquitectura-section">
        <div className="highlight-box">
          <h2 id="arquitectura-section">
            <FaCubes
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            La arquitectura que lo une todo
          </h2>
          <br />
          <p>
            Lo que hace que el proyecto sea interesante no es ninguna API por
            separado, sino cómo se combinan sin acoplarse. Cada módulo tiene una
            responsabilidad única y no conoce los detalles de los demás.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                modulo: "crypto.js",
                desc: "Recibe texto plano, devuelve datos encriptados",
                color: "#4737bb",
              },
              {
                modulo: "storage.js",
                desc: "Recibe datos encriptados, los guarda y devuelve",
                color: "#6d2c95",
              },
              {
                modulo: "fileSystem.js",
                desc: "Serializa y deserializa el objeto encriptado",
                color: "#ea4f33",
              },
              {
                modulo: "app.js",
                desc: "Orquesta el flujo; único que tiene la contraseña en memoria",
                color: "#4737bb",
              },
            ].map(({ modulo, desc, color }) => (
              <div
                key={modulo}
                style={{
                  background: "#fff",
                  border: `2px solid ${color}`,
                  borderRadius: "8px",
                  padding: "14px",
                  color,
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontSize: "0.95rem",
                    marginBottom: "6px",
                  }}
                >
                  <code>{modulo}</code>
                </strong>
                <span style={{ fontSize: "0.85rem", color: "#2a2170" }}>
                  {desc}
                </span>
              </div>
            ))}
          </div>

          <p>
            Esta separación tiene una consecuencia práctica importante: si mañana
            quisieras cambiar el algoritmo de encriptación de AES-GCM a ChaCha20,
            solo tocarías <code>crypto.js</code>. El resto del código no se entera.
          </p>
          <p>
            La gestión de la sesión merece atención aparte. La contraseña vive en
            una variable de módulo en <code>app.js</code>. Se borra en el momento
            en que la usuaria cierra la sesión o recarga la página. Nunca toca{" "}
            <code>localStorage</code>, nunca toca <code>sessionStorage</code>.
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
              <strong>
                Guardar la contraseña en <code>sessionStorage</code> es texto plano
                accesible desde JavaScript
              </strong>{" "}
              — hacerlo anularía todo el trabajo de encriptación. Esta decisión no
              es un compromiso de UX: es la única opción técnicamente correcta.
            </p>
          </div>

          <p>
            Si quieres ver cómo encajan todas las piezas — el flujo completo desde
            que la usuaria escribe una nota hasta que aparece como bytes en
            IndexedDB — el repositorio es el mejor punto de partida. El README
            incluye el diagrama del flujo de encriptación y las decisiones de diseño
            explicadas.
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
              href="https://github.com/femcodersclub/encrypted-private-notes"
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
              href="https://femcodersclub.github.io/encrypted-private-notes/"
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
              <FaLock />
              Ver la demo en vivo
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Web Workers ── */}
      <section aria-labelledby="webworkers-section">
        <div className="highlight-box">
          <h2 id="webworkers-section">
            <FaMicrochip
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Web Workers: procesamiento en paralelo (sin bloquear la UI)
          </h2>
          <br />
          <p>
            Web Workers permiten ejecutar código JavaScript en un hilo separado del
            hilo principal. La UI sigue respondiendo mientras el worker hace su
            trabajo — búsquedas en grandes volúmenes de datos, procesamiento de
            imágenes, cálculos intensivos.
          </p>
          <p>
            La comunicación entre el hilo principal y el worker ocurre por mensajes,
            con <code>postMessage()</code> y el evento <code>message</code>. No
            comparten memoria (salvo <code>SharedArrayBuffer</code>, que requiere
            cabeceras específicas): los datos se copian o se transfieren.
          </p>
          <p>
            En el contexto de este proyecto, un worker tendría sentido para la
            búsqueda full-text sobre notas desencriptadas en memoria —
            especialmente si el número de notas crece. La búsqueda implicaría
            desencriptar todas las notas, buscar en el texto plano, y devolver los
            resultados al hilo principal. Con muchas notas, esa operación puede
            tardar lo suficiente como para bloquear la UI perceptiblemente.
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
              No está implementado en el proyecto para mantener el código enfocado
              en las tres APIs protagonistas, pero el patrón es directo: el worker
              recibe los datos encriptados y la clave derivada, desencripta, filtra
              y devuelve los ids de las notas que coinciden.{" "}
              <strong>El hilo principal nunca se bloquea.</strong>
            </p>
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
            Los posts anteriores de la serie construyeron las bases —{" "}
            <Link to="/recursos/js/estructuras-datos-js" className="highlight-link">
              estructuras de datos
            </Link>
            ,{" "}
            <Link
              to="/recursos/js/patrones-diseno-javascript"
              className="highlight-link"
            >
              patrones de diseño
            </Link>
            ,{" "}
            <Link
              to="/recursos/js/modulos-arquitectura-escalable"
              className="highlight-link"
            >
              arquitectura modular
            </Link>
            . Este post completa ese cuadro con las APIs del navegador que hacen
            posible aplicaciones que antes requerían backend. La línea entre lo que
            puede hacer una app frontend y lo que necesita un servidor se sigue
            moviendo — y cada vez se mueve más hacia el cliente.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              {
                texto: "IndexedDB",
                desc: "base de datos asíncrona, orientada a objetos, sin límite práctico de tamaño. La alternativa correcta a localStorage para datos estructurados.",
              },
              {
                texto: "Web Crypto API",
                desc: "AES-GCM-256 con PBKDF2 en el navegador, sin dependencias. Salt e IV únicos por operación. Password incorrecto → excepción, no resultado parcial.",
              },
              {
                texto: "File System Access API",
                desc: "selector de ficheros nativo, export e import real. Degradación elegante a <a download> cuando el navegador no la soporta.",
              },
              {
                texto: "Separación de responsabilidades",
                desc: "crypto.js, storage.js, fileSystem.js y app.js con fronteras claras. Cambiar el algoritmo de encriptación no toca el resto del sistema.",
              },
              {
                texto: "Gestión segura de la sesión",
                desc: "contraseña solo en memoria de módulo, nunca en localStorage ni sessionStorage. Se borra al recargar o cerrar sesión.",
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
            ¿Tienes dudas o quieres compartir tus proyectos con Web APIs? Únete a
            la conversación en FemCoders Club, una comunidad de más de 1.500 mujeres
            en tecnología en España.
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
                href="https://github.com/femcodersclub/encrypted-private-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                encrypted-private-notes — Proyecto completo en GitHub
              </a>
            </li>
            <li>
              <a
                href="https://femcodersclub.github.io/encrypted-private-notes/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Encrypted Private Notes — Demo en vivo
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN — IndexedDB API
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/API/Web_Crypto_API"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN — Web Crypto API
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN — File System Access API
              </a>
            </li>
            <li>
              <Link
                to="/recursos/js/modulos-arquitectura-escalable"
                className="highlight-link"
              >
                Módulos y Arquitectura Escalable en JavaScript
              </Link>
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
                Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y
                WeakSet
              </Link>
            </li>
          </ul>
          <br />
          <h3>Únete a la comunidad</h3>
          <p>
            ¿Tienes dudas sobre Web APIs o encriptación en el navegador? Únete a
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
            Si las Web APIs o la criptografía en el navegador te resultan
            desafiantes o quieres profundizar más con orientación personalizada, en
            femCoders Club ofrecemos{" "}
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

export default WebApisNuevaGeneracion;
