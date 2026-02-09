import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaBell,
  FaBook,
  FaBolt,
  FaBullseye,
  FaCheck,
  FaCode,
  FaCogs,
  FaEye,
  FaGithub,
  FaGraduationCap,
  FaLightbulb,
  FaMousePointer,
  FaRocket,
  FaSlack,
  FaTiktok,
  FaTools,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const ManipulacionDomIngeniera: React.FC = () => {
  const postId = 35;
  const publicationDate = "8 de febrero de 2026";
  const currentUrl = "https://www.femcodersclub.com/recursos/js/manipulacion-dom-ingeniera";

  return (
    <article className="blog-post">
      <Helmet>
        <title>Manipulaci&oacute;n del DOM como una Ingeniera: Event Delegation, Performance y Observers | femCoders Club</title>
        <meta
          name="description"
          content="Aprende manipulaci&oacute;n del DOM con enfoque de ingenier&iacute;a: Event Delegation, DocumentFragment, IntersectionObserver, MutationObserver y Custom Events. Gu&iacute;a completa con proyecto pr&aacute;ctico Smart Analytics Tracker."
        />
        <meta
          name="keywords"
          content="manipulaci&oacute;n DOM, event delegation, IntersectionObserver, MutationObserver, custom events, performance DOM, reflow repaint, requestAnimationFrame, JavaScript avanzado, femcoders club"
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Manipulaci&oacute;n del DOM como una Ingeniera | femCoders Club"
        />
        <meta
          property="og:description"
          content="Event Delegation, Performance, IntersectionObserver, MutationObserver y Custom Events. Construye sistemas robustos con manipulaci&oacute;n del DOM."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/manipulacion-dom-ingeniera.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Manipulaci&oacute;n del DOM como una Ingeniera - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Domina la manipulaci&oacute;n del DOM: Event Delegation, Performance, Observers y Custom Events con ejemplos reales y proyecto pr&aacute;ctico."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/manipulacion-dom-ingeniera.webp"
        />

        <meta property="article:published_time" content="2026-02-08T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="DOM" />
        <meta property="article:tag" content="Performance" />
        <meta property="article:tag" content="Programaci&oacute;n" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/javascript/manipulacion-dom-ingeniera.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/javascript/manipulacion-dom-ingeniera.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/javascript/manipulacion-dom-ingeniera.webp"
            alt="Manipulaci&oacute;n del DOM como una Ingeniera - femCoders Club"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Manipulaci&oacute;n del DOM como una Ingeniera
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

      {/* Introducci&oacute;n */}
      <section aria-labelledby="intro-section">
        <h2 id="intro-section" className="visually-hidden">Introducci&oacute;n</h2>

        <h2 style={{ fontSize: "1.8rem", color: "var(--color-primary)", marginBottom: "15px" }}>
          Cuando un Bot&oacute;n Deja de Funcionar, el Negocio se Detiene
        </h2>

        <p className="intro-text">
          Imagina un e-commerce en pleno Black Friday. Miles de usuarios navegando, a&ntilde;adiendo productos
          al carrito... pero el bot&oacute;n de &quot;Comprar&quot; no responde. Est&aacute; ah&iacute;, visible, pero los clicks no
          hacen nada. Los usuarios hacen click una, dos, tres veces. Frustrados, abandonan. Y cada minuto
          que pasa sin detectar el problema son <strong>ventas perdidas</strong>.
        </p>

        <div style={{ margin: "25px 0" }}>
          <picture>
            <source
              srcSet="/public-optimized/mobile/assets/javascript/boton-roto.webp"
              media="(max-width: 768px)"
            />
            <source
              srcSet="/public-optimized/desktop/assets/javascript/boton-roto.webp"
              media="(min-width: 769px)"
            />
            <img
              src="/public-optimized/desktop/assets/javascript/boton-roto.webp"
              alt="Bot&oacute;n de compra que no responde a clicks de usuarios"
              className="blog-post-image"
              loading="lazy"
            />
          </picture>
        </div>

        <p className="intro-text">
          Este escenario es m&aacute;s com&uacute;n de lo que parece. Un event listener mal gestionado, miles de
          listeners acumulados en memoria, elementos din&aacute;micos sin tracking... y de repente tu interfaz
          deja de responder bajo carga. Si tuvieras <strong>event delegation</strong> correctamente implementado
          y un sistema para detectar <strong>rage clicks</strong> (esos clicks desesperados que hacemos
          cuando algo no funciona), identificar&iacute;as el problema en minutos, no en horas.
        </p>

        <p className="intro-text">
          La manipulaci&oacute;n del DOM no es solo mover elementos de un lado a otro. Es entender c&oacute;mo el
          navegador procesa cada interacci&oacute;n, optimizar para que tu app no se congele con miles de
          usuarios simult&aacute;neos, y construir sistemas que te avisen cuando algo va mal.
        </p>

        <p className="intro-text">
          Hoy vamos a ver la manipulaci&oacute;n del DOM desde la perspectiva de una ingeniera de software que
          construye <strong>sistemas robustos</strong>, no solo p&aacute;ginas bonitas.
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "20px",
          borderRadius: "var(--radius-md)",
          marginTop: "20px",
          borderLeft: "4px solid var(--color-secondary)"
        }}>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>
            <FaLightbulb style={{ marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            <strong>Para seguir este tutorial de forma pr&aacute;ctica</strong>, hemos creado un{" "}
            <a
              href="https://github.com/femcodersclub/smart-analytics-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              Smart Analytics Tracker en GitHub
            </a>
            {" "}que demuestra todos estos conceptos en acci&oacute;n: event delegation, rage click detection,
            IntersectionObserver, MutationObserver y Custom Events.
          </p>
        </div>
      </section>

      {/* Secci&oacute;n 1: Event Delegation */}
      <section aria-labelledby="event-delegation-section">
        <div className="highlight-box">
          <h2 id="event-delegation-section">
            <FaMousePointer style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            1. Event Delegation: El Arte de Escuchar Inteligentemente
          </h2>

          <br />
          <h3>El Problema del Mill&oacute;n de Listeners</h3>

          <p>
            Imagina una aplicaci&oacute;n de e-commerce con 1,000 productos en pantalla. Cada producto tiene
            un bot&oacute;n &quot;Agregar al carrito&quot;. La forma &quot;obvia&quot; ser&iacute;a:
          </p>

          <div className="code-block bg3">
            <pre>
{`// ❌ Enfoque ingenuo
productos.forEach(producto => {
  producto.querySelector('.btn-comprar')
    .addEventListener('click', agregarAlCarrito);
});`}
            </pre>
          </div>

          <p>
            <strong>&iquest;Qu&eacute; acabas de hacer?</strong> Crear 1,000 event listeners en memoria.
          </p>

          <p><strong>Consecuencias:</strong></p>
          <ul>
            <li>Cada listener ocupa ~50 bytes &rarr; 50KB solo en listeners</li>
            <li>El navegador debe revisar 1,000 listeners en cada click</li>
            <li>Si agregas productos din&aacute;micamente, necesitas recordar agregar nuevos listeners</li>
            <li>Si olvidas removerlos, tienes un <strong>memory leak</strong></li>
          </ul>

          <br />
          <h3>La Soluci&oacute;n: Un Solo Listener para Gobernarlos a Todos</h3>

          <p>
            Event delegation aprovecha un concepto fundamental del DOM: <strong>event bubbling</strong>.
          </p>

          <p>
            <FaLightbulb style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            <strong>Analog&iacute;a del edificio:</strong> Imagina un edificio de oficinas con 100 empresas. Si cada empresa
            contrata su propio guardia de seguridad en su puerta, necesitas 100 guardias. Pero si pones
            un solo guardia en la entrada principal que pregunta &quot;&iquest;A qu&eacute; empresa vas?&quot;, solo necesitas 1.
          </p>

          <div className="code-block bg3">
            <pre>
{`// ✅ Enfoque ingenieril
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-comprar')) {
    agregarAlCarrito(e);
  }
}, true); // ← Capturing phase`}
            </pre>
          </div>

          <p><strong>Beneficios medibles:</strong></p>
          <ul>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> De 1,000 listeners a 1 &rarr; <strong>99.9% menos memoria</strong></li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> Funciona autom&aacute;ticamente con elementos agregados din&aacute;micamente</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> Un solo punto de mantenimiento</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> M&aacute;s r&aacute;pido en dispositivos con recursos limitados</li>
          </ul>

          <br />
          <h3>Bubbling vs Capturing: El Viaje del Evento</h3>

          <p>
            Cuando haces click en un bot&oacute;n que est&aacute; dentro de un div, que est&aacute; dentro del body,
            el evento hace un <strong>viaje de ida y vuelta</strong>:
          </p>

          <div className="code-block bg3">
            <pre>
{`// Fase 1: Capturing (De afuera hacia adentro)
window → document → html → body → div → button

// Fase 2: Target (Llega al elemento clickeado)
button ← estamos aquí

// Fase 3: Bubbling (De adentro hacia afuera)
button → div → body → html → document → window`}
            </pre>
          </div>

          <p>
            Si quieres interceptar un evento <strong>ANTES</strong> que cualquier otro listener (por ejemplo,
            para analytics), usas la <strong>capturing phase</strong>. Ese <code>true</code> en{" "}
            <code>addEventListener(..., true)</code> activa capturing.
          </p>

          <p>
            <FaLightbulb style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            <strong>Analog&iacute;a del correo:</strong> <em>Capturing</em> es el cartero bajando del cami&oacute;n, entrando al edificio,
            subiendo al piso, llegando a tu puerta. <em>Bubbling</em> es el camino de vuelta. La mayor&iacute;a de
            c&oacute;digo usa bubbling (el default), pero para tracking o debugging, capturing es tu mejor amigo.
          </p>

          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/dashboard-metricas.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/dashboard-metricas.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/dashboard-metricas.webp"
                alt="Dashboard mostrando m&eacute;tricas de clicks con event delegation"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Secci&oacute;n 2: Performance */}
      <section aria-labelledby="performance-section">
        <div className="highlight-box">
          <h2 id="performance-section">
            <FaBolt style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            2. Performance: Porque los Usuarios No Esperan
          </h2>

          <br />
          <h3>El Enemigo Invisible: Reflow y Repaint</h3>

          <p>Cada vez que modificas el DOM, el navegador puede necesitar:</p>
          <ol>
            <li><strong>Reflow</strong> (recalcular posiciones) - CARO</li>
            <li><strong>Repaint</strong> (redibujar pixels) - Menos caro</li>
          </ol>

          <p><strong>Reflow se dispara cuando:</strong></p>
          <ul>
            <li>Agregas/remueves elementos</li>
            <li>Cambias tama&ntilde;os, m&aacute;rgenes, padding</li>
            <li>Modificas clases que afectan layout</li>
            <li>Accedes a ciertas propiedades (<code>offsetWidth</code>, <code>scrollTop</code>)</li>
          </ul>

          <p>
            El problema: <strong>los reflows son sincr&oacute;nicos</strong>. Bloquean todo.
          </p>

          <br />
          <h3>DocumentFragment: El Escenario de Ensayo</h3>

          <p>
            <FaLightbulb style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            <strong>Analog&iacute;a del teatro:</strong> En lugar de que cada actor suba al escenario uno por uno
            (causando que el p&uacute;blico espere entre cada uno), primero ensayas toda la escena detr&aacute;s del
            tel&oacute;n, y luego subes el tel&oacute;n con toda la escena ya lista.
          </p>

          <div className="code-block bg3">
            <pre>
{`// ❌ 1000 reflows
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  container.appendChild(div); // ¡Reflow aquí!
}

// ✅ 1 solo reflow
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  fragment.appendChild(div); // En memoria, sin reflow
}
container.appendChild(fragment); // UN solo reflow`}
            </pre>
          </div>

          <p><strong>Impacto real:</strong></p>
          <ul>
            <li>Sin fragment: ~150ms para 1000 elementos</li>
            <li>Con fragment: ~15ms para 1000 elementos</li>
            <li><strong>10x m&aacute;s r&aacute;pido</strong></li>
          </ul>

          <br />
          <h3>requestAnimationFrame: Sincroniza con el Monitor</h3>

          <p>
            El navegador actualiza la pantalla ~60 veces por segundo (60fps). Cada frame dura ~16.67ms.
            Si haces actualizaciones del DOM fuera de sincron&iacute;a con estos frames, creas <strong>jank</strong>{" "}
            (esos saltos visuales feos).
          </p>

          <p>
            <code>requestAnimationFrame</code> te dice: &quot;Oye, voy a redibujar la pantalla AHORA, si tienes
            cambios visuales, este es el momento perfecto&quot;.
          </p>

          <div className="code-block bg3">
            <pre>
{`// ❌ Se ejecuta descontroladamente (100+ veces/segundo)
window.addEventListener('scroll', () => {
  actualizarIndicador();
});

// ✅ Máximo 60 veces/segundo, sincronizado con repaints
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      actualizarIndicador();
      ticking = false;
    });
    ticking = true;
  }
});`}
            </pre>
          </div>

          <p><strong>Por qu&eacute; funciona:</strong></p>
          <ul>
            <li>El navegador agrupa todos los cambios visuales del frame</li>
            <li>Evitas c&aacute;lculos desperdiciados entre frames</li>
            <li>Animaciones fluidas a 60fps</li>
            <li>Bater&iacute;a salvada en m&oacute;viles</li>
          </ul>

          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/renderizado-optimizado-javascript.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/renderizado-optimizado-javascript.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/renderizado-optimizado-javascript.webp"
                alt="Comparaci&oacute;n de tiempo de renderizado con y sin DocumentFragment"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Secci&oacute;n 3: IntersectionObserver */}
      <section aria-labelledby="intersection-observer-section">
        <div className="highlight-box">
          <h2 id="intersection-observer-section">
            <FaEye style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            3. IntersectionObserver: Visibilidad Eficiente
          </h2>

          <br />
          <h3>El Problema del Scroll Listener</h3>

          <p>Antes de IntersectionObserver, para saber si un elemento era visible hac&iacute;as:</p>

          <div className="code-block bg3">
            <pre>
{`window.addEventListener('scroll', () => {
  const rect = elemento.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // ¡Elemento visible!
  }
});`}
            </pre>
          </div>

          <p><strong>Problemas:</strong></p>
          <ul>
            <li><code>getBoundingClientRect()</code> causa reflow</li>
            <li>Se ejecuta en cada pixel de scroll</li>
            <li>T&uacute; calculas manualmente la visibilidad</li>
            <li>Consume bater&iacute;a en m&oacute;viles</li>
          </ul>

          <br />
          <h3>IntersectionObserver: El Navegador Hace el Trabajo</h3>

          <p>
            <FaLightbulb style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            <strong>Analog&iacute;a del vigilante:</strong> En lugar de que t&uacute; te levantes cada 5 segundos a mirar por la
            ventana si lleg&oacute; el cartero, el cartero toca el timbre cuando llega. IntersectionObserver es el timbre.
          </p>

          <div className="code-block bg3">
            <pre>
{`const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('¡Elemento visible!', entry.target);
      // Aquí: lazy load imagen, empezar video, contar view...
    }
  });
}, {
  threshold: 0.5,   // 50% visible
  rootMargin: '0px' // Margen adicional
});

observer.observe(miElemento);`}
            </pre>
          </div>

          <br />
          <h3>Casos de uso reales</h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
            marginTop: '15px'
          }}>
            <div style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-secondary)' }}>Lazy loading</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Carga im&aacute;genes solo cuando est&aacute;n cerca del viewport. Ahorra MB en conexiones lentas.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(234, 79, 51, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-primary)' }}>Analytics de visibilidad</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                &iquest;Cu&aacute;nto tiempo los usuarios VEN realmente un elemento? No solo scroll, sino tiempo real.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-secondary)' }}>Infinite scroll</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Detecta cuando llegas al final y carga m&aacute;s contenido autom&aacute;ticamente.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(234, 79, 51, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-primary)' }}>Animaciones on-scroll</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Activa animaciones cuando el elemento entra. Ahorra CPU no animando fuera de vista.
              </p>
            </div>
          </div>

          <br />
          <p><strong>Ventaja de performance:</strong></p>
          <ul>
            <li>CPU: ~0.1ms por check vs ~5ms con c&aacute;lculos manuales</li>
            <li>Bater&iacute;a: El navegador optimiza internamente</li>
            <li>C&oacute;digo: Menos l&iacute;neas, m&aacute;s declarativo</li>
          </ul>

          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/intersection-observer-js.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/intersection-observer-js.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/intersection-observer-js.webp"
                alt="IntersectionObserver detectando visibilidad de elementos en tiempo real"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Secci&oacute;n 4: MutationObserver */}
      <section aria-labelledby="mutation-observer-section">
        <div className="highlight-box">
          <h2 id="mutation-observer-section">
            <FaCogs style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            4. MutationObserver: Vigilante de Cambios Din&aacute;micos
          </h2>

          <br />
          <h3>El Desaf&iacute;o de las SPAs</h3>

          <p>
            En aplicaciones modernas (React, Vue, Svelte), el DOM cambia constantemente sin recargar la p&aacute;gina.
            &iquest;C&oacute;mo detectas estos cambios?
          </p>

          <div className="code-block bg3">
            <pre>
{`// ❌ Polling (preguntar cada X tiempo)
setInterval(() => {
  if (document.querySelector('.nuevo-elemento')) {
    // Hacer algo
  }
}, 100); // Cada 100ms... desperdicio brutal

// ✅ MutationObserver (el navegador te avisa)
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      console.log('Nodos agregados:', mutation.addedNodes);
      console.log('Nodos removidos:', mutation.removedNodes);
    }
    if (mutation.type === 'attributes') {
      console.log('Atributo cambió:', mutation.attributeName);
    }
  });
});

observer.observe(document.body, {
  childList: true,  // Observar hijos agregados/removidos
  attributes: true, // Observar cambios de atributos
  subtree: true     // Observar TODO el árbol
});`}
            </pre>
          </div>

          <p>
            <FaLightbulb style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            <strong>Analog&iacute;a del notario:</strong> Un notario documenta cambios legales. MutationObserver
            documenta cambios en el DOM. No previene cambios, solo te informa que ocurrieron.
          </p>

          <br />
          <h3>Casos de uso</h3>
          <ul>
            <li><strong>Auto-tracking en SPAs:</strong> Nuevos productos se agregan din&aacute;micamente, tu analytics los trackea autom&aacute;ticamente sin hooks en React/Vue</li>
            <li><strong>Detecci&oacute;n de cambios por terceros:</strong> Scripts externos modifican tu DOM y quieres saber qu&eacute; tocaron</li>
            <li><strong>Debugging:</strong> &quot;&iquest;Qui&eacute;n est&aacute; cambiando este atributo?&quot; MutationObserver te dice exactamente qu&eacute; cambi&oacute;</li>
            <li><strong>Sincronizaci&oacute;n:</strong> Mantener dos partes del UI sincronizadas observando cambios en A y actualizando B</li>
          </ul>

          <p>
            En nuestro proyecto, el <strong>MutationManager</strong> detecta cuando se agregan nuevos
            elementos con <code>data-track-visibility</code> y autom&aacute;ticamente empieza a observarlos con
            IntersectionObserver. &iquest;Magia? No, ingenier&iacute;a.
          </p>

          <br />
          <h3>
            <FaBullseye style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            Precauci&oacute;n: Performance
          </h3>
          <p>MutationObserver puede dispararse MUCHO en apps din&aacute;micas. Por eso:</p>
          <ul>
            <li>Usa <code>debounce</code> para agrupar mutaciones</li>
            <li>Observa solo lo necesario (no <code>document.body</code> si puedes evitarlo)</li>
            <li>Desconecta cuando no lo necesites</li>
          </ul>
        </div>
      </section>

      {/* Secci&oacute;n 5: Custom Events */}
      <section aria-labelledby="custom-events-section">
        <div className="highlight-box">
          <h2 id="custom-events-section">
            <FaBell style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            5. Custom Events: Arquitectura Desacoplada
          </h2>

          <br />
          <h3>El Problema del C&oacute;digo Acoplado</h3>

          <p>
            Imagina que tu ClickCollector necesita avisar al Dashboard cuando detecta un rage click:
          </p>

          <div className="code-block bg3">
            <pre>
{`// ❌ Acoplamiento directo
class ClickCollector {
  detectRageClick() {
    // ...
    dashboard.showAlert('Rage click!'); // ¡Depende de Dashboard!
  }
}`}
            </pre>
          </div>

          <p><strong>Problemas:</strong></p>
          <ul>
            <li>ClickCollector conoce a Dashboard</li>
            <li>Si cambia Dashboard, rompes ClickCollector</li>
            <li>No puedes usar ClickCollector sin Dashboard</li>
            <li>Testing es un infierno</li>
          </ul>

          <br />
          <h3>Custom Events: El Sistema de Mensajer&iacute;a</h3>

          <p>
            <FaLightbulb style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            <strong>Analog&iacute;a de la radio:</strong> Una estaci&oacute;n de radio transmite sin saber qui&eacute;n escucha.
            Puede que nadie, puede que millones. Le da igual, su trabajo es transmitir.
            Los custom events funcionan igual: el <strong>Publisher</strong> emite eventos sin saber qui&eacute;n escucha,
            el <strong>Subscriber</strong> escucha sin saber qui&eacute;n los emite.
          </p>

          <div className="code-block bg3">
            <pre>
{`// Patrón EventBus
class EventBus {
  constructor() {
    this.events = {};
  }

  // Suscribirse
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }

  // Emitir
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
}`}
            </pre>
          </div>

          <div className="code-block bg3">
            <pre>
{`const bus = new EventBus();

// ClickCollector emite
class ClickCollector {
  detectRageClick(data) {
    this.eventBus.emit('rage:detected', data);
  }
}

// Dashboard escucha
bus.on('rage:detected', (data) => {
  showAlert(data);
});

// Logger también escucha (¡nuevo módulo sin tocar ClickCollector!)
bus.on('rage:detected', (data) => {
  logToServer(data);
});`}
            </pre>
          </div>

          <br />
          <h3>Arquitectura del Proyecto</h3>

          <div className="code-block bg3">
            <pre>
{`TrackerEngine
    │
 EventBus (centro de comunicación)
    │
    ├─ ClickCollector emite → 'click:registered', 'rage:detected'
    ├─ ScrollCollector emite → 'milestone:reached', 'scroll:detected'
    ├─ VisibilityCollector emite → 'visibility:update'
    └─ Dashboard escucha → TODOS los eventos anteriores`}
            </pre>
          </div>

          <p><strong>Beneficios:</strong></p>
          <ul>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> <strong>Desacoplamiento:</strong> M&oacute;dulos independientes</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> <strong>Extensibilidad:</strong> Agregar listeners sin modificar emisores</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> <strong>Testing:</strong> Mock del EventBus, tests aislados</li>
            <li><FaCheck style={{ display: 'inline-block', marginRight: '8px', color: '#27ae60', verticalAlign: 'middle' }} /> <strong>Mantenibilidad:</strong> Cambios localizados</li>
          </ul>

          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/custom-events.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/custom-events.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/custom-events.webp"
                alt="Log de custom events mostrando comunicaci&oacute;n entre m&oacute;dulos desacoplados"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Secci&oacute;n: El Proyecto */}
      <section aria-labelledby="project-section">
        <div className="highlight-box">
          <h2 id="project-section">
            <FaRocket style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            El Proyecto: Donde Todo se Une
          </h2>

          <p>
            Nuestro <strong>Smart Analytics Tracker</strong> no es un proyecto de ejemplo random. Es una
            demostraci&oacute;n de c&oacute;mo estas t&eacute;cnicas resuelven problemas reales:
          </p>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <FaMousePointer style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Detecci&oacute;n de Rage Clicks:</strong> EventBus comunica entre ClickCollector y UI. Event delegation captura todos los clicks. Performance optimizada con buffers y debouncing.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaEye style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Tracking de Visibilidad Real:</strong> IntersectionObserver mide tiempo REAL de visualizaci&oacute;n. No solo &quot;scrolle&oacute; hasta aqu&iacute;&quot;, sino &quot;mir&oacute; esto X segundos&quot;.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaBolt style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Analytics de Scroll Inteligente:</strong> requestAnimationFrame limita callbacks a 60fps. Detecta patrones: &iquest;lectura lenta? &iquest;escaneo r&aacute;pido? &iquest;abandono?
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCogs style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Contenido Din&aacute;mico:</strong> MutationObserver detecta nuevos elementos. IntersectionObserver los trackea autom&aacute;ticamente. Sin configuraci&oacute;n manual.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCode style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Arquitectura Escalable:</strong> Un solo event listener global (delegation). M&oacute;dulos desacoplados con EventBus. F&aacute;cil agregar nuevos collectors.
            </li>
          </ul>

          <br />
          <h3>Instalaci&oacute;n r&aacute;pida</h3>
          <div className="code-block bg3">
            <pre>
{`git clone https://github.com/femcodersclub/smart-analytics-tracker.git
cd smart-analytics-tracker
npm install
npm start`}
            </pre>
          </div>

          <br />
          <h3>
            <FaGraduationCap style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            Por qu&eacute; vale la pena explorarlo
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
            marginTop: '15px'
          }}>
            <div style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-secondary)' }}>Para principiantes</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Conceptos abstractos (delegation, observers) aplicados en c&oacute;digo real.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(234, 79, 51, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-primary)' }}>Para nivel intermedio</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Patrones de arquitectura desacoplada con EventBus y Observers.
              </p>
            </div>

            <div style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "15px",
              borderRadius: "var(--radius-sm)",
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-secondary)' }}>Para avanzadas</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                Sistema de analytics production-ready que puedes usar en tus proyectos.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '25px' }}>
            <a
              href="https://github.com/femcodersclub/smart-analytics-tracker"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                padding: '12px 25px',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'var(--transition-fast)'
              }}
            >
              <FaGithub /> Ver proyecto en GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Conclusi&oacute;n */}
      <section aria-labelledby="conclusion-section">
        <div className="highlight-box">
          <h2 id="conclusion-section">
            <FaLightbulb style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            Conclusi&oacute;n: De C&oacute;digo a Sistemas
          </h2>

          <p>
            La diferencia entre &quot;hacer que funcione&quot; y &quot;construir un sistema&quot; est&aacute; en entender{" "}
            <strong>por qu&eacute;</strong> las cosas funcionan como funcionan.
          </p>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Event Delegation</strong> no es solo &quot;un truco para ahorrar memoria&quot;. Es entender c&oacute;mo
              el navegador propaga eventos y usar eso a tu favor.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>IntersectionObserver</strong> no es solo &quot;una API nueva&quot;. Es delegar al navegador trabajo
              que &eacute;l hace mejor que t&uacute;.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Custom Events</strong> no son solo &quot;desacoplamiento fancy&quot;. Son arquitectura que escala
              cuando tu app crece de 3 a 30 m&oacute;dulos.
            </li>
            <li style={{ marginBottom: '15px' }}>
              <FaCheck style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
              <strong>Performance</strong> no es solo &quot;usar DocumentFragment&quot;. Es entender reflows, repaints,
              y el rendering pipeline del navegador.
            </li>
          </ul>

          <p>
            Cuando manejas millones de interacciones diarias, cuando cada milisegundo importa, cuando tu
            app no puede fallar... estas t&eacute;cnicas dejan de ser &quot;buenas pr&aacute;cticas&quot; y se vuelven{" "}
            <strong>requisitos m&iacute;nimos</strong>.
          </p>

          <p>
            El proyecto est&aacute; en GitHub. Cl&oacute;nalo, r&oacute;mpelo, mej&oacute;ralo. Pero sobre todo:{" "}
            <strong>entiende por qu&eacute; cada decisi&oacute;n se tom&oacute; as&iacute;</strong>.
          </p>

          <p style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'var(--color-primary)' }}>
            Porque esa es la diferencia entre copiar c&oacute;digo y pensar como ingeniera.
          </p>
        </div>
      </section>

      {/* Recursos Adicionales */}
      <section aria-labelledby="resources-section">
        <div className="highlight-box">
          <h2 id="resources-section">
            <FaBook style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
            Recursos
          </h2>

          <ul>
            <li>
              <strong>Proyecto:</strong>{" "}
              <a
                href="https://github.com/femcodersclub/smart-analytics-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                github.com/femcodersclub/smart-analytics-tracker
              </a>
            </li>
            <li>
              <strong>Demo en vivo:</strong> Clona y corre localmente
            </li>
            <li>
              <strong>Documentaci&oacute;n t&eacute;cnica:</strong> Revisa ARCHITECTURE.md en el repo
            </li>
          </ul>

          <br />
          <h3>&Uacute;nete a la comunidad</h3>
          <p>
            &iquest;Preguntas? &iquest;Quieres profundizar en alg&uacute;n tema? &Uacute;nete a FemCoders Club, una comunidad
            de m&aacute;s de 1,300 mujeres en tecnolog&iacute;a donde aprendemos y crecemos juntas.
            Escr&iacute;benos o abre un issue en el proyecto.
          </p>
        </div>
      </section>

      {/* Mentor&iacute;a */}
      <section aria-labelledby="mentorship-section">
        <div className="highlight-box">
          <h2 id="mentorship-section">
            <FaTools style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
            &iquest;Necesitas Apoyo Personalizado?
          </h2>

          <p>
            Si estos conceptos te resultan desafiantes o quieres profundizar m&aacute;s con orientaci&oacute;n personalizada,
            en femCoders Club ofrecemos{" "}
            <Link to="/login" className="highlight-link">
              mentor&iacute;as individuales
            </Link>
            {" "}donde podemos trabajar juntas en tus dudas espec&iacute;ficas.
            {" "}(Requiere <Link to="/register" className="highlight-link">registro gratuito</Link>)
          </p>
        </div>
      </section>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>femCoders Club - Comunidad de mujeres en tecnolog&iacute;a</p>
        <p>
          Fecha de publicaci&oacute;n: <strong>{publicationDate}</strong>
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

export default ManipulacionDomIngeniera;
