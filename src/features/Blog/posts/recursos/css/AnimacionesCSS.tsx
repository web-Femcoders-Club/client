import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const AnimacionesCSS: React.FC = () => {
  const currentUrl = window.location.href;
  const postId = 21;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          Domina las Animaciones CSS: De Básico a Avanzado | FemCoders Club
        </title>
        <meta
          name="description"
          content="Guía completa de animaciones CSS desde keyframes básicos hasta técnicas avanzadas. Aprende performance, accesibilidad y mejores prácticas con ejemplos reales del proyecto Breathe."
        />
        <meta
          name="keywords"
          content="CSS animaciones, keyframes, animation, timing functions, performance CSS, animaciones web, debugging CSS, breathe app, femcoders club, desarrollo web para mujeres"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/animaciones-css"
        />

        {/* Directivas para motores de búsqueda */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina Ichim" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Domina las Animaciones CSS: De Básico a Avanzado"
        />
        <meta
          property="og:description"
          content="Guía completa de animaciones CSS desde keyframes básicos hasta técnicas avanzadas. Aprende performance, accesibilidad y mejores prácticas con ejemplos reales."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/animaciones-css"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/AnimacionesCSS.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Animaciones CSS: De Básico a Avanzado"
        />
        <meta
          name="twitter:description"
          content="Aprende animaciones CSS con keyframes, timing functions, performance y técnicas de optimización con ejemplos prácticos del proyecto Breathe."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/AnimacionesCSS.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-07-01T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Animaciones" />
        <meta property="article:tag" content="Keyframes" />
        <meta property="article:tag" content="Performance" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/css/AnimacionesCSS.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/css/AnimacionesCSS.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/css/AnimacionesCSS.webp"
            alt="Animaciones CSS - Aplicación Breathe con efectos de respiración y mindfulness"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Domina las Animaciones CSS<br/> De Básico a Avanzado
      </h1>

      <div className="social-share">
        <div className="share-buttons">
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
            aria-label="Compartir este post en Twitter"
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
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>
        </div>
      </div>

      <div className="intro-text">
        <p>
          ¿Alguna vez has querido dar vida a tus páginas web pero no sabías por dónde empezar con las animaciones? En este artículo exploramos las animaciones CSS desde los conceptos más básicos hasta técnicas avanzadas, usando ejemplos reales de nuestro proyecto "Breathe" - una aplicación de mindfulness creada completamente con CSS.
        </p>
        <div
          className="example-image"
          style={{ textAlign: "center", margin: "20px 0" }}
        >
          <img
            src="/assets/css/breathe-app-demo.gif"
            alt="Aplicación Breathe con animaciones de respiración y efectos visuales CSS"
            className="rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
        <p>
        Hemos creado un proyecto práctico que puedes
          explorar en nuestro{" "}
          <strong>
            🔗
            <a
              href="https://github.com/femcodersclub/AnimacionesCSS"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              repositorio de GitHub
            </a>
          </strong>
          . <br />
          Demo en vivo disponible{" "}
          <strong>
            🔗
            <a
              href="https://femcodersclub.github.io/AnimacionesCSS/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              aquí.
            </a>
          </strong>
<br />
          Te invitamos a clonarlo y experimentar con él mientras lees este
          post.
        </p>
      </div>

      <div className="highlight-box">
        <h2>🎯 ¿Qué vamos a aprender?</h2>
        <p>
          Al final de este tutorial, dominarás:
        </p>
        <ul>
          <li>Keyframes y propiedades básicas de animación</li>
          <li>Timing functions y curvas de animación personalizadas</li>
          <li>Animaciones complejas con múltiples elementos sincronizados</li>
          <li>Performance y optimización para producción</li>
          <li>Accesibilidad en animaciones y respeto por las preferencias del usuario</li>
          <li>Integración inteligente de CSS y JavaScript</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🔑 Animations vs Transitions: ¿Cuál elegir?</h2>
        
        <p>Antes de empezar, es fundamental entender cuándo usar cada herramienta:</p>
        
        <div style={{
          backgroundColor: "rgba(107, 115, 255, 0.1)",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          borderLeft: "4px solid #6b73ff"
        }}>
          <p style={{ margin: "0" }}>
            <strong>💡 ¿Quieres profundizar en Transitions?</strong> Lee nuestro post completo sobre{" "}
            <a
              href="/recursos/css/transiciones-transformaciones"
              className="highlight-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Transformaciones y Transiciones CSS 2D/3D
            </a>{" "}
            donde exploramos en detalle las transiciones, transforms y efectos 3D.
          </p>
        </div>
        
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Transitions</th>
                <th>Animations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Trigger</strong></td>
                <td>Eventos (hover, focus, clase)</td>
                <td>Automático o controlado</td>
              </tr>
              <tr>
                <td><strong>Puntos de control</strong></td>
                <td>Solo inicio y fin</td>
                <td>Múltiples keyframes</td>
              </tr>
              <tr>
                <td><strong>Repetición</strong></td>
                <td>Una vez por evento</td>
                <td>Infinita o N veces</td>
              </tr>
              <tr>
                <td><strong>Uso ideal</strong></td>
                <td>Microinteracciones</td>
                <td>Efectos visuales complejos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <pre className="code-block bg3">
{`/* Transition: reactiva a eventos */
.boton:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Animation: proactiva y autónoma */
.loading {
  animation: girar 2s linear infinite;
}

@keyframes girar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>🎨 1. Nivel Básico: Tus primeras animaciones</h2>
        
        <h3>Anatomía de una animación CSS</h3>
        <p>Toda animación CSS consta de dos partes esenciales:</p>

        <pre className="code-block bg3">
{`/* 1. Definición de keyframes */
@keyframes nombre-animacion {
  0% { /* Estado inicial */ }
  50% { /* Estado intermedio */ }
  100% { /* Estado final */ }
}

/* 2. Aplicación al elemento */
.elemento {
  animation: nombre-animacion 2s ease-in-out infinite;
}`}
        </pre>

        <h3>Las 8 propiedades de animation</h3>
        <br />
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Qué controla</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>animation-name</code></td>
                <td>Qué keyframes usar</td>
                <td><code>fadeIn</code></td>
              </tr>
              <tr>
                <td><code>animation-duration</code></td>
                <td>Cuánto dura</td>
                <td><code>2s</code>, <code>500ms</code></td>
              </tr>
              <tr>
                <td><code>animation-timing-function</code></td>
                <td>Velocidad de cambio</td>
                <td><code>ease</code>, <code>linear</code></td>
              </tr>
              <tr>
                <td><code>animation-delay</code></td>
                <td>Cuándo empieza</td>
                <td><code>0.5s</code>, <code>200ms</code></td>
              </tr>
              <tr>
                <td><code>animation-iteration-count</code></td>
                <td>Cuántas repeticiones</td>
                <td><code>infinite</code>, <code>3</code></td>
              </tr>
              <tr>
                <td><code>animation-direction</code></td>
                <td>Dirección de la animación</td>
                <td><code>normal</code>, <code>reverse</code>, <code>alternate</code></td>
              </tr>
              <tr>
                <td><code>animation-fill-mode</code></td>
                <td>Estados antes/después</td>
                <td><code>forwards</code>, <code>backwards</code>, <code>both</code></td>
              </tr>
              <tr>
                <td><code>animation-play-state</code></td>
                <td>Reproducir/pausar</td>
                <td><code>running</code>, <code>paused</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>💡 Ejemplo del proyecto: Entrada suave del header</h3>
        <p>En nuestra app "Breathe", el header aparece progresivamente:</p>

        <pre className="code-block bg3">
{`@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

.app-header {
  animation: fadeInDown 1s ease-out 0.5s forwards;
}`}
        </pre>

        <p><strong>¿Por qué funciona tan bien?</strong> Combina dos efectos: desvanecimiento y movimiento vertical, creando una sensación natural de "aterrizaje".</p>
      </div>

      <div className="highlight-box">
        <h2>🔧 2. Nivel Intermedio: Sincronización y complejidad</h2>
        
        <h3>Múltiples keyframes para movimientos naturales</h3>
        <p>La clave de animaciones convincentes está en los estados intermedios:</p>

        <pre className="code-block bg3">
{`/* La animación principal de respiración del proyecto */
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}`}
        </pre>

        <h3>Timing functions: La diferencia entre amateur y profesional</h3>
        <br />
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Función</th>
                <th>Cubic-Bezier</th>
                <th>Sensación</th>
                <th>Uso ideal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>ease-out</code></td>
                <td><code>(0, 0, 0.2, 1)</code></td>
                <td>Natural, suave</td>
                <td>Elementos que entran</td>
              </tr>
              <tr>
                <td><code>ease-in</code></td>
                <td><code>(0.4, 0, 1, 1)</code></td>
                <td>Aceleración gradual</td>
                <td>Elementos que salen</td>
              </tr>
              <tr>
                <td>Bounce</td>
                <td><code>(0.68, -0.55, 0.265, 1.55)</code></td>
                <td>Juguetón, dinámico</td>
                <td>Botones, microinteracciones</td>
              </tr>
              <tr>
                <td>Back</td>
                <td><code>(0.175, 0.885, 0.32, 1.275)</code></td>
                <td>Anticipación</td>
                <td>Hover effects premium</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Animaciones sincronizadas: El poder del delay</h3>
        <p>En "Breathe", las ondas concéntricas crean profundidad usando delays estratégicos:</p>

        <pre className="code-block bg3">
{`/* Ondas que se expanden en secuencia */
.wave:nth-child(1) { animation: waveExpand 4s ease-out infinite; }
.wave:nth-child(2) { animation: waveExpand 4s ease-out infinite 1s; }
.wave:nth-child(3) { animation: waveExpand 4s ease-out infinite 2s; }

@keyframes waveExpand {
  0% { transform: scale(0.8); opacity: 0.4; }
  100% { transform: scale(1.5); opacity: 0; }
}`}
        </pre>

        <h3>Variables CSS: Animaciones dinámicas</h3>
        <p>Las custom properties permiten animaciones que se adaptan:</p>

        <pre className="code-block bg3">
{`:root {
  --circle-size: 200px;
  --breathing-duration: 8s;
}

.breathing-circle {
  width: var(--circle-size);
  animation: breathe var(--breathing-duration) ease-in-out infinite;
}

/* JavaScript puede cambiar la duración dinámicamente */
// document.documentElement.style.setProperty('--breathing-duration', '4s');`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>🌟 3. Nivel Avanzado: Performance y optimización</h2>
        
        <h3>¿Qué propiedades animar? La regla de oro</h3>
        <p>No todas las propiedades CSS son iguales para el rendimiento:</p>
<br />
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>✅ Excelente (Composite)</th>
                <th>⚠️ Cuidado (Paint)</th>
                <th>❌ Evitar (Layout)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>transform</code></td>
                <td><code>filter</code></td>
                <td><code>width/height</code></td>
              </tr>
              <tr>
                <td><code>opacity</code></td>
                <td><code>box-shadow</code></td>
                <td><code>left/top/right/bottom</code></td>
              </tr>
              <tr>
                <td><code>clip-path</code></td>
                <td><code>background-size</code></td>
                <td><code>padding/margin</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <pre className="code-block bg3">
{`/* ❌ Mal: causa reflow en cada frame */
@keyframes malo {
  from { width: 100px; }
  to { width: 200px; }
}

/* ✅ Bien: solo afecta la capa de composición */
@keyframes bueno {
  from { transform: scaleX(1); }
  to { transform: scaleX(2); }
}`}
        </pre>

        <h3>Hardware acceleration: ¿Cuándo y cómo?</h3>
        <p>Activar la aceleración por hardware correctamente:</p>

        <pre className="code-block bg3">
{`/* Forzar hardware acceleration */
.elemento-animado {
  will-change: transform;
  transform: translateZ(0); /* Hack para crear capa */
}

/* ⚠️ IMPORTANTE: Limpiar después */
.elemento-animado.animation-finished {
  will-change: auto; /* Libera recursos de GPU */
}`}
        </pre>

        <div style={{
          backgroundColor: "rgba(255, 165, 0, 0.1)",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "15px",
          borderLeft: "4px solid #ffa500"
        }}>
          <p style={{ margin: "0" }}>
            <strong>⚠️ Cuidado:</strong> Demasiadas capas de composición consumen memoria. Usa hardware acceleration solo cuando realmente mejore el rendimiento.
          </p>
        </div>

        <h3>Responsive animations: Adaptarse a cada dispositivo</h3>
        <p>Las animaciones también deben ser responsivas:</p>

        <pre className="code-block bg3">
{`/* Base: mobile first */
@keyframes respiracion-movil {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Desktop: efecto más dramático */
@media (min-width: 768px) {
  @keyframes respiracion-desktop {
    0%, 100% { transform: scale(1) rotateX(0deg); }
    50% { transform: scale(1.3) rotateX(5deg); }
  }
  .breathing-circle { animation-name: respiracion-desktop; }
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  .breathing-circle { animation: none; }
  .breathing-circle::before { content: "🧘‍♀️"; }
}`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>⚡ 4. Integración inteligente: CSS + JavaScript</h2>
        
        <p>
          Las animaciones CSS alcanzan su máximo potencial cuando se combinan estratégicamente con JavaScript. En nuestro proyecto "Breathe", esta sinergia permite crear una experiencia interactiva sin sacrificar el rendimiento visual.
        </p>

        <h3>🎮 La filosofía: División inteligente de responsabilidades</h3>
        
        <p>El secreto está en que cada tecnología haga lo que mejor sabe hacer:</p>
        
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>JavaScript se encarga de</th>
                <th>CSS se encarga de</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lógica de estado (pausar/reanudar)</td>
                <td>Movimientos fluidos del círculo</td>
              </tr>
              <tr>
                <td>Timing de las fases de respiración</td>
                <td>Curvas de animación suaves</td>
              </tr>
              <tr>
                <td>Cambios de contenido de texto</td>
                <td>Efectos visuales y sombras</td>
              </tr>
              <tr>
                <td>Interacciones del usuario</td>
                <td>Performance optimizada</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>💡 La arquitectura del proyecto "Breathe"</h3>
        
        <p>Nuestro sistema gestiona <strong>tres tipos de ejercicios de respiración</strong> distintos, cada uno con su propia animación CSS y ciclo de texto sincronizado:</p>

        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">🌸 Respiración Relajante</h5>
            <ul>
              <li><strong>Duración:</strong> 8 segundos por ciclo</li>
              <li><strong>Fases:</strong> Inhalar (4s) → Exhalar (4s)</li>
              <li><strong>Ideal para:</strong> Relajación general y reducir estrés</li>
            </ul>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">💤 Técnica 4-7-8</h5>
            <ul>
              <li><strong>Duración:</strong> 19 segundos por ciclo</li>
              <li><strong>Fases:</strong> Inhalar (4s) → Retener (7s) → Exhalar (8s)</li>
              <li><strong>Ideal para:</strong> Dormir mejor y calmar la ansiedad</li>
            </ul>
          </div>

          <div className="recurso-item">
            <h5 className="tool-title">⚡ Box Breathing</h5>
            <ul>
              <li><strong>Duración:</strong> 16 segundos por ciclo</li>
              <li><strong>Fases:</strong> Inhalar (4s) → Retener (4s) → Exhalar (4s) → Vacío (4s)</li>
              <li><strong>Ideal para:</strong> Concentración y control mental</li>
            </ul>
          </div>
        </div>

        <h3>🔧 Los pilares técnicos clave</h3>

        <h4>1. Control de estado centralizado</h4>
        <p>Todo el estado de la aplicación se gestiona con variables JavaScript simples, sin frameworks complejos:</p>
        
        <pre className="code-block bg3">
{`let isPaused = false;
let currentExercise = 0;  // 0: Relajante, 1: 4-7-8, 2: Box
let currentPhase = 0;     // Fase actual del ejercicio`}
        </pre>

        <h4>2. Sincronización perfecta: texto + animación</h4>
        <p>El texto guía cambia automáticamente siguiendo las fases del ejercicio. JavaScript controla el timing, mientras CSS mantiene el círculo en movimiento fluido:</p>
        
        <pre className="code-block bg3">
{`// JavaScript controla CUÁNDO cambiar
function startTextCycle() {
  const exercise = exercises[currentExercise];
  
  breathingText.textContent = exercise.phases[currentPhase].text;
  
  // Ciclo automático de texto cada 100ms
  setInterval(() => {
    if (!isPaused && timeElapsed >= currentPhaseConfig.duration) {
      currentPhase = (currentPhase + 1) % exercise.phases.length;
      breathingText.textContent = exercise.phases[currentPhase].text;
    }
  }, 100);
}`}
        </pre>

        <h4>3. Control intuitivo de pausa</h4>
        <p>La funcionalidad de pausa es instantánea gracias a <code>animationPlayState</code>:</p>
        
        <pre className="code-block bg3">
{`// Pausa inmediata sin interrumpir la fluidez
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  
  // CSS maneja la pausa visual instantánea
  breathingCircle.style.animationPlayState = isPaused ? "paused" : "running";
  
  // JavaScript actualiza la interfaz
  pauseBtn.textContent = isPaused ? "Continuar" : "Pausar";
  breathingText.textContent = isPaused ? 
    "Pausado - Respira naturalmente" : 
    exercise.phases[currentPhase].text;
});`}
        </pre>

        <h3>🎯 ¿Por qué funciona tan bien esta arquitectura?</h3>
        
        <ul>
          <li><strong>Separación clara:</strong> JavaScript nunca interfiere con las animaciones CSS</li>
          <li><strong>Performance optimal:</strong> Las animaciones corren en el compositor del navegador</li>
          <li><strong>Estado predecible:</strong> Fácil de debuggear y extender</li>
          <li><strong>Experiencia fluida:</strong> Pausa/reanudación instantánea sin saltos</li>
        </ul>

        <div style={{
          backgroundColor: "rgba(34, 197, 94, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #22c55e"
        }}>
          <h4 style={{ margin: "0 0 10px 0", color: "#16a34a" }}>💡 Lección clave</h4>
          <p style={{ margin: "0" }}>
            No uses JavaScript para animar propiedades visuales. Usa JavaScript para <strong>controlar</strong> las animaciones CSS: cuándo empiezan, cuándo paran, y cómo cambia el contenido. El resultado es una experiencia más fluida y código más mantenible.
          </p>
        </div>

        <h3>🔬 Técnicas avanzadas: Event listeners de animación</h3>
        
        <p>Para casos más complejos, puedes escuchar los eventos nativos de las animaciones CSS:</p>

        <pre className="code-block bg3">
{`// Detectar cuándo una animación empieza, se repite o termina
breathingCircle.addEventListener('animationstart', () => {
  console.log('Nueva sesión de respiración iniciada');
});

breathingCircle.addEventListener('animationiteration', () => {
  console.log('Ciclo de respiración completado');
  // Útil para contadores de repeticiones
});

breathingCircle.addEventListener('animationend', () => {
  // Limpiar recursos cuando termine una animación finita
  element.style.willChange = 'auto';
});`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>♿ 5. Accesibilidad: Animaciones para todos</h2>
        
        <h3>Respetando las preferencias del usuario</h3>
        <p>No todos los usuarios disfrutan o pueden tolerar las animaciones. Es crucial respetar sus preferencias:</p>

        <pre className="code-block bg3">
{`/* Media query para movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .breathing-circle, .wave, .particle {
    animation: none;
  }
  
  .breathing-text {
    opacity: 1; /* Siempre visible */
  }
  
  .btn:hover {
    transition: all 0.1s ease; /* Transiciones rápidas */
  }
}`}
        </pre>

        <h3>Categorías de animaciones según accesibilidad</h3>
        <br />
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>✅ Seguras</th>
                <th>⚠️ Con cuidado</th>
                <th>❌ Problemáticas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fade in/out</td>
                <td>Rotaciones lentas</td>
                <td>Flashes rápidos</td>
              </tr>
              <tr>
                <td>Escalado suave</td>
                <td>Movimiento parallax</td>
                <td>Vibraciones intensas</td>
              </tr>
              <tr>
                <td>Hover effects sutiles</td>
                <td>Autoplay pausable</td>
                <td>Movimiento perpetuo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Mejores prácticas de accesibilidad</h3>
        <ul>
          <li><strong>Siempre incluye</strong> controles de pausa para animaciones largas</li>
          <li><strong>Evita flasheos</strong> más rápidos que 3 veces por segundo</li>
          <li><strong>Proporciona alternativas</strong> estáticas o simplificadas</li>
          <li><strong>Usa semántica correcta</strong> para lectores de pantalla</li>
        </ul>

        <pre className="code-block bg3">
{`/* Ejemplo de implementación accesible */
.breathing-container {
  role: "application";
  aria-label: "Ejercicio de respiración guiada";
}

@media (prefers-reduced-motion: reduce) {
  .breathing-text { animation: none; }
}`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>🔍 6. Debugging y herramientas</h2>
        
        <h3>DevTools para animaciones</h3>
        <p>Las herramientas de desarrollo son tu mejor aliado para perfeccionar animaciones:</p>

        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">Chrome DevTools</h5>
            <ul>
              <li><strong>Animations panel:</strong> Visualiza timing y curvas en tiempo real</li>
              <li><strong>Performance tab:</strong> Detecta jank y bottlenecks</li>
              <li><strong>Elements panel:</strong> Edita keyframes directamente</li>
              <li><strong>Coverage tab:</strong> Identifica CSS de animaciones no usado</li>
            </ul>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">Firefox DevTools</h5>
            <ul>
              <li><strong>Inspector:</strong> El mejor para visualizar animaciones complejas</li>
              <li><strong>Animations panel:</strong> Control de velocidad y pausa frame by frame</li>
              <li><strong>Console:</strong> Warnings útiles sobre performance</li>
            </ul>
          </div>
        </div>

        <h3>Problemas comunes y sus soluciones</h3>
        
        <h5>🐛 Problema: Animaciones que "saltan" o tiemblan</h5>
        <pre className="code-block bg3">
{`/* ❌ Problema: subpixel rendering */
.elemento { transform: translateX(10.5px); }

/* ✅ Solución: usar valores enteros */
.elemento { transform: translateX(10px) translateZ(0); }`}
        </pre>

        <h5>🐛 Problema: Animaciones lentas en móviles</h5>
        <pre className="code-block bg3">
{`/* ❌ Mal: animar propiedades costosas */
@keyframes malo {
  from { width: 100px; }
  to { width: 200px; }
}

/* ✅ Bien: solo transform y opacity */
@keyframes bueno {
  from { transform: scaleX(1); }
  to { transform: scaleX(2); }
}`}
        </pre>

        <h5>🐛 Problema: Memoria alta por demasiadas capas</h5>
        <pre className="code-block bg3">
{`/* ❌ Problema: will-change en todo */
* { will-change: transform; } /* ¡Nunca hagas esto! */

/* ✅ Solución: usar will-change estratégicamente */
.elemento-que-va-a-animar { will-change: transform; }
.elemento-que-ya-termino { will-change: auto; }`}
        </pre>

        <div style={{
          backgroundColor: "rgba(255, 0, 0, 0.1)",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "20px",
          borderLeft: "4px solid #ff0000"
        }}>
          <p style={{ margin: "0" }}>
            <strong>🚨 Red Flag:</strong> Si tu página se siente lenta durante las animaciones, probablemente estés animando propiedades que causan reflow. Usa las DevTools para identificar el cuello de botella.
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>🎯 7. Patrones de animación esenciales</h2>
        
        <p>
          Algunos patrones de animación aparecen una y otra vez en el desarrollo web. Dominar estos te dará una base sólida para cualquier proyecto.
        </p>

        <h3>🔄 Loading States</h3>
        
        <pre className="code-block bg3">
{`/* Dots loading (como nuestro proyecto) */
@keyframes dotPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.dot:nth-child(1) { animation: dotPulse 1.5s ease-in-out infinite; }
.dot:nth-child(2) { animation: dotPulse 1.5s ease-in-out 0.5s infinite; }`}
        </pre>

        <h3>✨ Entrance Animations</h3>
        
        <pre className="code-block bg3">
{`/* Fade in up (como en Breathe) */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}`}
        </pre>

        <h3>🎮 Microinteracciones</h3>
        
        <pre className="code-block bg3">
{`/* Button press (como los botones de Breathe) */
@keyframes buttonPress {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}
.btn:active { animation: buttonPress 0.15s ease-out; }`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>🌍 8. Casos de estudio: Animaciones en el mundo real</h2>
        
        <h3>🧘‍♀️ Nuestro proyecto "Breathe"</h3>
        
        <p>El proyecto que acompaña este post implementa múltiples técnicas de animación:</p>

        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">Animación principal de respiración</h5>
            <ul>
              <li><strong>Técnica:</strong> Keyframes con 5 puntos de control</li>
              <li><strong>Props animadas:</strong> Solo <code>transform</code> y <code>box-shadow</code></li>
              <li><strong>Timing:</strong> 8s con <code>ease-in-out</code> para naturalidad</li>
              <li><strong>Accesibilidad:</strong> Se desactiva con <code>prefers-reduced-motion</code></li>
            </ul>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">Sistema de ondas concéntricas</h5>
            <ul>
              <li><strong>Técnica:</strong> Misma animación, delays escalonados</li>
              <li><strong>Efecto:</strong> Ilusión de profundidad y expansión</li>
              <li><strong>Performance:</strong> Tres elementos máximo para evitar lag</li>
              <li><strong>Responsive:</strong> Se adapta al tamaño de pantalla</li>
            </ul>
          </div>
        </div>

        <h3>🎨 Inspiración del ecosistema web</h3>
        
        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">Stripe - Animaciones premium</h5>
            <br />
            <p>Maestros en crear sensación de calidad a través del movimiento</p>
            <ul>
              <li><strong>Curvas personalizadas:</strong> cubic-bezier únicos</li>
              <li><strong>Staging:</strong> Elementos que aparecen en secuencia lógica</li>
              <li><strong>Consistencia:</strong> Misma personalidad en toda la plataforma</li>
            </ul>
            <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="highlight-link">
              Estudiar en Stripe
            </a>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">Linear - Fluidez extrema</h5>
            <br />
            <p>La referencia en animaciones súper fluidas para productividad</p>
            <ul>
              <li><strong>60fps garantizados:</strong> Solo transform y opacity</li>
              <li><strong>Feedback inmediato:</strong> Respuesta en cada click</li>
              <li><strong>Transiciones inteligentes:</strong> Estados que se conectan lógicamente</li>
            </ul>
            <a href="https://linear.app" target="_blank" rel="noopener noreferrer" className="highlight-link">
              Analizar en Linear
            </a>
          </div>
        </div>

        <h3>📚 Recursos para experimentar</h3>
        
        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">Animista - Generador de animaciones</h5>
            <br />
            <p>Biblioteca visual de animaciones listas para usar</p>
            <ul>
              <li><strong>Preview en tiempo real:</strong> Ve antes de copiar</li>
              <li><strong>Customización:</strong> Ajusta timing y delays</li>
              <li><strong>CSS limpio:</strong> Código optimizado</li>
            </ul>
            <a href="https://animista.net/" target="_blank" rel="noopener noreferrer" className="highlight-link">
              Explorar en Animista
            </a>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">CodePen - Laboratorio creativo</h5>
            <br />
            <p>Miles de experimentos de la comunidad</p>
            <ul>
              <li><strong>Búsqueda recomendada:</strong> "CSS animations", "keyframes"</li>
              <li><strong>Autores destacados:</strong> Ana Tudor, Shaw, Amit Sheen</li>
              <li><strong>Filtros útiles:</strong> Most hearted, Most forked</li>
            </ul>
            <a href="https://codepen.io/search/pens?q=css+animations" target="_blank" rel="noopener noreferrer" className="highlight-link">
              Explorar en CodePen
            </a>
          </div>
        </div>

        <div style={{
          backgroundColor: "rgba(138, 43, 226, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #8a2be2"
        }}>
          <h4 style={{ margin: "0 0 10px 0", color: "#8a2be2" }}>🎯 Ejercicio práctico</h4>
          <p style={{ margin: "0" }}>
            Clona nuestro proyecto "Breathe" y experimenta: cambia las duraciones, modifica los keyframes, añade nuevos efectos. No hay mejor forma de aprender que ensuciándose las manos con código real.
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>📋 9. Checklist: Animaciones listas para producción</h2>
        
        <p>Antes de lanzar animaciones a producción, asegúrate de cumplir esta checklist:</p>

        <h3>✅ Performance</h3>
        <ul>
          <li>Solo animas <code>transform</code>, <code>opacity</code>, <code>filter</code> y <code>clip-path</code></li>
          <li>Usas <code>will-change</code> solo cuando es necesario y lo limpias después</li>
          <li>Tested en dispositivos de gama baja</li>
          <li>Ninguna animación causa scroll jank</li>
          <li>Duración total de animaciones críticas &lt; 500ms</li>
        </ul>

        <h3>♿ Accesibilidad</h3>
        <ul>
          <li>Respetas <code>prefers-reduced-motion</code></li>
          <li>No hay flasheos más rápidos que 3/segundo</li>
          <li>Animaciones auto-ejecutables tienen controles de pausa</li>
          <li>Alternativas estáticas para funcionalidades críticas</li>
          <li>Tested con lectores de pantalla</li>
        </ul>

        <h3>📱 Responsive</h3>
        <ul>
          <li>Animaciones se adaptan a diferentes tamaños de pantalla</li>
          <li>Tested en dispositivos táctiles</li>
          <li>Duraciones apropiadas para cada breakpoint</li>
          <li>Battery-friendly en móviles</li>
        </ul>

        <h3>🔧 Técnico</h3>
        <ul>
          <li>Prefijos de vendor cuando sea necesario</li>
          <li>Fallbacks para navegadores que no soportan animaciones</li>
          <li>CSS minificado y optimizado</li>
          <li>Documentación para el equipo</li>
        </ul>

        <pre className="code-block bg3">
{`/* Ejemplo de animación lista para producción */
@keyframes productionReady {
  0% { transform: translateY(100%) scale(0.8); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}

.element {
  animation: productionReady 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform; /* Hardware acceleration */
}

/* Accesibilidad first */
@media (prefers-reduced-motion: reduce) {
  .element { animation: none; will-change: auto; }
}

/* Cleanup después de la animación */
.element.animation-complete { will-change: auto; }`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>💡 Conclusión: Animaciones que importan</h2>
        
        <p>
          Las animaciones CSS no son solo "adornos" - son herramientas poderosas para comunicar, guiar y deleitar a tus usuarios. Desde un simple hover effect hasta sistemas complejos como nuestro "Breathe", cada animación cuenta una historia.
        </p>

        <p>
          <strong>¿El secreto del éxito?</strong> No está en usar todas las técnicas que conoces, sino en elegir la animación correcta para cada momento. Las mejores animaciones son aquellas que se sienten tan naturales que los usuarios no las notan conscientemente, pero su ausencia se sentiría extraña.
        </p>

        <h3>🎯 Tu hoja de ruta</h3>
        <ol>
          <li><strong>Experimenta</strong> con keyframes básicos hasta dominarlos</li>
          <li><strong>Practica</strong> timing functions hasta desarrollar intuición</li>
          <li><strong>Optimiza</strong> pensando siempre en performance</li>
          <li><strong>Testea</strong> en dispositivos reales, no solo en tu MacBook</li>
          <li><strong>Itera</strong> basándote en feedback real de usuarios</li>
        </ol>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "25px",
          borderRadius: "15px",
          textAlign: "center",
          margin: "30px 0",
          borderLeft: "5px solid #4737bb",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
        }}>
          <h3 style={{ color: "#6d2c95", marginTop: 0, fontSize: "2rem", marginBottom: "15px" }}>
            🌟 Tu momento de crear magia 🌟
          </h3>
          <p>
            Las animaciones CSS son tu varita mágica para transformar interfaces planas en experiencias que cobran vida. <strong>No te quedes solo leyendo - abre tu editor y empieza a experimentar.</strong>
          </p>
          <br />
          <p>
            Clona nuestro proyecto "Breathe", rompe cosas, arreglalas, mejóralas. Cada keyframe que escribas te acerca más a dominar este arte.
          </p>
          <br />
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#4737bb",
              color: "white",
              padding: "12px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(71, 55, 187, 0.3)"
            }}
          >
            💬 Comparte tus experimentos en la comunidad
          </a>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px", marginBottom: 0, color: "#2a2170" }}>
            El web del futuro se mueve. ¡Haz que se mueva contigo! ✨
          </p>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de FemCoders Club</p>
        <p>
          Fecha de publicación: <strong>1 de julio, 2025</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <CommentsSection postId={postId} />
    </div>
  );
};

export default AnimacionesCSS;