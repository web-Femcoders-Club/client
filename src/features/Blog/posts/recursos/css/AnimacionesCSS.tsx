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

const AnimacionesCSS: React.FC = () => (
  <>
      <Helmet>
        <title>
          Domina las animaciones CSS: de básico a avanzado | FemCoders Club
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
          content="Domina las animaciones CSS: de básico a avanzado"
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
          content="Animaciones CSS: de básico a avanzado"
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

    <PlantillaPost
      ruta="/recursos/css/animaciones-css"
      titulo="Domina las animaciones CSS: de básico a avanzado"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={21}
      entradilla={
        <>
          <p>
            ¿Alguna vez has querido dar vida a tus páginas web pero no sabías
            por dónde empezar con las animaciones? En este artículo exploramos
            las animaciones CSS desde los conceptos más básicos hasta técnicas
            avanzadas, usando ejemplos reales de nuestro proyecto «Breathe»: una
            aplicación de mindfulness creada completamente con CSS.
          </p>
          <p>
            Hemos creado un proyecto práctico que puedes explorar en nuestro{" "}
            <a
              href="https://github.com/femcodersclub/AnimacionesCSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              repositorio de GitHub
            </a>{" "}
            y ver en esta{" "}
            <a
              href="https://femcodersclub.github.io/AnimacionesCSS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              demo en vivo
            </a>
            . Te invitamos a clonarlo y experimentar con él mientras lees este
            post.
          </p>
        </>
      }
    >
      <ImagenPost
        src="/assets/css/breathe-app-demo.webp"
        alt="La aplicación Breathe: un círculo translúcido sobre un degradado azul y violeta, con el texto «Exhala suavemente», el ejercicio «Respiración relajante» y los botones para pausar y cambiar de ejercicio."
      />

      <SeccionPost titulo="¿Qué vamos a aprender?">
        <p>Al final de este tutorial, dominarás:</p>
        <ul>
          <li>Keyframes y propiedades básicas de animación</li>
          <li>Timing functions y curvas de animación personalizadas</li>
          <li>Animaciones complejas con múltiples elementos sincronizados</li>
          <li>Performance y optimización para producción</li>
          <li>Accesibilidad en animaciones y respeto por las preferencias del usuario</li>
          <li>Integración inteligente de CSS y JavaScript</li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Animations vs. transitions: ¿cuál elegir?">
        <p>Antes de empezar, es fundamental entender cuándo usar cada herramienta:</p>

        <NotaPost titulo="¿Quieres profundizar en las transiciones?">
          <p>
            Lee nuestro post completo sobre{" "}
            <Link to="/recursos/css/transiciones-transformaciones">
              transformaciones y transiciones CSS 2D/3D
            </Link>
            , donde exploramos en detalle las transiciones, los transforms y los
            efectos 3D.
          </p>
        </NotaPost>

        <TablaPost descripcion="Diferencias entre transitions y animations">
          <table>
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
        </TablaPost>

        <CodigoPost lenguaje="CSS">{`/* Transition: reactiva a eventos */
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
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="1. Nivel básico: tus primeras animaciones">
        <h3>Anatomía de una animación CSS</h3>
        <p>Toda animación CSS consta de dos partes esenciales:</p>

        <CodigoPost lenguaje="CSS">{`/* 1. Definición de keyframes */
@keyframes nombre-animacion {
  0% { /* Estado inicial */ }
  50% { /* Estado intermedio */ }
  100% { /* Estado final */ }
}

/* 2. Aplicación al elemento */
.elemento {
  animation: nombre-animacion 2s ease-in-out infinite;
}`}</CodigoPost>

        <h3>Las 8 propiedades de animation</h3>
        <TablaPost descripcion="Las 8 propiedades de animation">
          <table>
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
        </TablaPost>

        <h3>Ejemplo del proyecto: entrada suave del header</h3>
        <p>En nuestra app «Breathe», el header aparece progresivamente:</p>

        <CodigoPost lenguaje="CSS">{`@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

.app-header {
  animation: fadeInDown 1s ease-out 0.5s forwards;
}`}</CodigoPost>

        <p>
          <strong>¿Por qué funciona tan bien?</strong> Combina dos efectos,
          desvanecimiento y movimiento vertical, y crea una sensación natural
          de «aterrizaje».
        </p>
      </SeccionPost>

      <SeccionPost titulo="2. Nivel intermedio: sincronización y complejidad">
        <h3>Múltiples keyframes para movimientos naturales</h3>
        <p>La clave de unas animaciones convincentes está en los estados intermedios:</p>

        <CodigoPost lenguaje="CSS">{`/* La animación principal de respiración del proyecto */
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}`}</CodigoPost>

        <h3>Timing functions: la diferencia entre amateur y profesional</h3>
        <TablaPost descripcion="Timing functions, su curva cubic-bezier y su uso ideal">
          <table>
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
                <td><code>(0, 0, 0.58, 1)</code></td>
                <td>Natural, suave</td>
                <td>Elementos que entran</td>
              </tr>
              <tr>
                <td><code>ease-in</code></td>
                <td><code>(0.42, 0, 1, 1)</code></td>
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
        </TablaPost>

        <h3>Animaciones sincronizadas: el poder del delay</h3>
        <p>En «Breathe», las ondas concéntricas crean profundidad usando delays estratégicos:</p>

        <CodigoPost lenguaje="CSS">{`/* Ondas que se expanden en secuencia */
.wave:nth-child(1) { animation: waveExpand 4s ease-out infinite; }
.wave:nth-child(2) { animation: waveExpand 4s ease-out infinite 1s; }
.wave:nth-child(3) { animation: waveExpand 4s ease-out infinite 2s; }

@keyframes waveExpand {
  0% { transform: scale(0.8); opacity: 0.4; }
  100% { transform: scale(1.5); opacity: 0; }
}`}</CodigoPost>

        <h3>Variables CSS: animaciones dinámicas</h3>
        <p>Las custom properties permiten animaciones que se adaptan:</p>

        <CodigoPost lenguaje="CSS">{`:root {
  --circle-size: 200px;
  --breathing-duration: 8s;
}

.breathing-circle {
  width: var(--circle-size);
  animation: breathe var(--breathing-duration) ease-in-out infinite;
}

/* JavaScript puede cambiar la duración dinámicamente:
   document.documentElement.style.setProperty('--breathing-duration', '4s'); */`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="3. Nivel avanzado: performance y optimización">
        <h3>¿Qué propiedades animar? La regla de oro</h3>
        <p>No todas las propiedades CSS son iguales para el rendimiento:</p>
        <TablaPost descripcion="Propiedades según su coste de rendimiento al animarlas">
          <table>
            <thead>
              <tr>
                <th>Excelente (composite)</th>
                <th>Cuidado (paint)</th>
                <th>Evitar (layout)</th>
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
        </TablaPost>

        <CodigoPost lenguaje="CSS">{`/* ❌ Mal: causa reflow en cada frame */
@keyframes malo {
  from { width: 100px; }
  to { width: 200px; }
}

/* ✅ Bien: solo afecta la capa de composición */
@keyframes bueno {
  from { transform: scaleX(1); }
  to { transform: scaleX(2); }
}`}</CodigoPost>

        <h3>Hardware acceleration: ¿cuándo y cómo?</h3>
        <p>Activar la aceleración por hardware correctamente:</p>

        <CodigoPost lenguaje="CSS">{`/* Forzar hardware acceleration */
.elemento-animado {
  will-change: transform;
  transform: translateZ(0); /* Hack para crear capa */
}

/* ⚠️ IMPORTANTE: Limpiar después */
.elemento-animado.animation-finished {
  will-change: auto; /* Libera recursos de GPU */
}`}</CodigoPost>

        <NotaPost titulo="Cuidado" tipo="aviso">
          <p>
            Demasiadas capas de composición consumen memoria. Usa hardware
            acceleration solo cuando realmente mejore el rendimiento.
          </p>
        </NotaPost>

        <h3>Responsive animations: adaptarse a cada dispositivo</h3>
        <p>Las animaciones también deben ser responsivas:</p>

        <CodigoPost lenguaje="CSS">{`/* Base: mobile first */
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
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="4. Integración inteligente: CSS + JavaScript">
        <p>
          Las animaciones CSS alcanzan su máximo potencial cuando se combinan
          estratégicamente con JavaScript. En nuestro proyecto «Breathe», esta
          sinergia permite crear una experiencia interactiva sin sacrificar el
          rendimiento visual.
        </p>

        <h3>La filosofía: división inteligente de responsabilidades</h3>
        <p>El secreto está en que cada tecnología haga lo que mejor sabe hacer:</p>

        <TablaPost descripcion="Qué hace JavaScript y qué hace CSS en el proyecto Breathe">
          <table>
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
        </TablaPost>

        <h3>La arquitectura del proyecto «Breathe»</h3>
        <p>
          Nuestro sistema gestiona <strong>tres tipos de ejercicios de
          respiración</strong> distintos, cada uno con su propia animación CSS y
          ciclo de texto sincronizado:
        </p>

        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Respiración relajante",
              texto: (
                <ul>
                  <li><strong>Duración:</strong> 8 segundos por ciclo</li>
                  <li><strong>Fases:</strong> inhalar (4 s) → exhalar (4 s)</li>
                  <li><strong>Ideal para:</strong> relajación general y reducir el estrés</li>
                </ul>
              ),
            },
            {
              titulo: "Técnica 4-7-8",
              texto: (
                <ul>
                  <li><strong>Duración:</strong> 19 segundos por ciclo</li>
                  <li><strong>Fases:</strong> inhalar (4 s) → retener (7 s) → exhalar (8 s)</li>
                  <li><strong>Ideal para:</strong> dormir mejor y calmar la ansiedad</li>
                </ul>
              ),
            },
            {
              titulo: "Box breathing",
              texto: (
                <ul>
                  <li><strong>Duración:</strong> 16 segundos por ciclo</li>
                  <li><strong>Fases:</strong> inhalar (4 s) → retener (4 s) → exhalar (4 s) → vacío (4 s)</li>
                  <li><strong>Ideal para:</strong> concentración y control mental</li>
                </ul>
              ),
            },
          ]}
        />

        <h3>Los pilares técnicos clave</h3>

        <h4>1. Control de estado centralizado</h4>
        <p>
          Todo el estado de la aplicación se gestiona con variables JavaScript
          simples, sin frameworks complejos:
        </p>

        <CodigoPost lenguaje="JavaScript">{`let isPaused = false;
let currentExercise = 0;  // 0: Relajante, 1: 4-7-8, 2: Box
let currentPhase = 0;     // Fase actual del ejercicio`}</CodigoPost>

        <h4>2. Sincronización perfecta: texto + animación</h4>
        <p>
          El texto guía cambia automáticamente siguiendo las fases del
          ejercicio. JavaScript controla el timing, mientras CSS mantiene el
          círculo en movimiento fluido:
        </p>

        <CodigoPost lenguaje="JavaScript">{`// JavaScript controla CUÁNDO cambiar
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
}`}</CodigoPost>

        <h4>3. Control intuitivo de pausa</h4>
        <p>
          La funcionalidad de pausa es instantánea gracias a{" "}
          <code>animationPlayState</code>:
        </p>

        <CodigoPost lenguaje="JavaScript">{`// Pausa inmediata sin interrumpir la fluidez
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;

  // CSS maneja la pausa visual instantánea
  breathingCircle.style.animationPlayState = isPaused ? "paused" : "running";

  // JavaScript actualiza la interfaz
  pauseBtn.textContent = isPaused ? "Continuar" : "Pausar";
  breathingText.textContent = isPaused ?
    "Pausado - Respira naturalmente" :
    exercise.phases[currentPhase].text;
});`}</CodigoPost>

        <ListaMarcadaPost titulo="¿Por qué funciona tan bien esta arquitectura?" tipo="bien">
          <li><strong>Separación clara:</strong> JavaScript nunca interfiere con las animaciones CSS.</li>
          <li><strong>Rendimiento óptimo:</strong> las animaciones corren en el compositor del navegador.</li>
          <li><strong>Estado predecible:</strong> fácil de depurar y de ampliar.</li>
          <li><strong>Experiencia fluida:</strong> pausa y reanudación instantáneas, sin saltos.</li>
        </ListaMarcadaPost>

        <NotaPost titulo="Lección clave">
          <p>
            No uses JavaScript para animar propiedades visuales. Usa JavaScript
            para <strong>controlar</strong> las animaciones CSS: cuándo
            empiezan, cuándo paran y cómo cambia el contenido. El resultado es
            una experiencia más fluida y un código más mantenible.
          </p>
        </NotaPost>

        <h3>Técnicas avanzadas: event listeners de animación</h3>
        <p>
          Para casos más complejos, puedes escuchar los eventos nativos de las
          animaciones CSS:
        </p>

        <CodigoPost lenguaje="JavaScript">{`// Detectar cuándo una animación empieza, se repite o termina
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
});`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="5. Accesibilidad: animaciones para todos">
        <h3>Respetando las preferencias del usuario</h3>
        <p>
          No todos los usuarios disfrutan de las animaciones o pueden
          tolerarlas. Es crucial respetar sus preferencias:
        </p>

        <CodigoPost lenguaje="CSS">{`/* Media query para movimiento reducido */
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
}`}</CodigoPost>

        <h3>Categorías de animaciones según accesibilidad</h3>
        <TablaPost descripcion="Animaciones seguras, con cuidado y problemáticas para la accesibilidad">
          <table>
            <thead>
              <tr>
                <th>Seguras</th>
                <th>Con cuidado</th>
                <th>Problemáticas</th>
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
        </TablaPost>

        <h3>Mejores prácticas de accesibilidad</h3>
        <ul>
          <li><strong>Incluye siempre</strong> controles de pausa para las animaciones largas.</li>
          <li><strong>Evita los destellos</strong> de más de 3 por segundo.</li>
          <li><strong>Proporciona alternativas</strong> estáticas o simplificadas.</li>
          <li><strong>Usa la semántica correcta</strong> para los lectores de pantalla.</li>
        </ul>

        <p>
          La semántica va en el HTML, con atributos; las preferencias de
          movimiento, en el CSS:
        </p>

        <CodigoPost lenguaje="HTML">{`<!-- Ejemplo de implementación accesible -->
<section class="breathing-container" aria-label="Ejercicio de respiración guiada">
  ...
</section>`}</CodigoPost>

        <CodigoPost lenguaje="CSS">{`@media (prefers-reduced-motion: reduce) {
  .breathing-text { animation: none; }
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="6. Debugging y herramientas">
        <h3>DevTools para animaciones</h3>
        <p>Las herramientas de desarrollo son tu mejor aliado para perfeccionar animaciones:</p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Chrome DevTools",
              texto: (
                <ul>
                  <li><strong>Animations panel:</strong> visualiza timing y curvas en tiempo real.</li>
                  <li><strong>Performance tab:</strong> detecta jank y cuellos de botella.</li>
                  <li><strong>Elements panel:</strong> edita keyframes directamente.</li>
                  <li><strong>Coverage tab:</strong> identifica el CSS de animaciones que no se usa.</li>
                </ul>
              ),
            },
            {
              titulo: "Firefox DevTools",
              texto: (
                <ul>
                  <li><strong>Inspector:</strong> el mejor para visualizar animaciones complejas.</li>
                  <li><strong>Animations panel:</strong> control de velocidad y pausa fotograma a fotograma.</li>
                  <li><strong>Console:</strong> avisos útiles sobre el rendimiento.</li>
                </ul>
              ),
            },
          ]}
        />

        <h3>Problemas comunes y sus soluciones</h3>

        <h4>Problema: animaciones que «saltan» o tiemblan</h4>
        <CodigoPost lenguaje="CSS">{`/* ❌ Problema: subpixel rendering */
.elemento { transform: translateX(10.5px); }

/* ✅ Solución: usar valores enteros */
.elemento { transform: translateX(10px) translateZ(0); }`}</CodigoPost>

        <h4>Problema: animaciones lentas en móviles</h4>
        <CodigoPost lenguaje="CSS">{`/* ❌ Mal: animar propiedades costosas */
@keyframes malo {
  from { width: 100px; }
  to { width: 200px; }
}

/* ✅ Bien: solo transform y opacity */
@keyframes bueno {
  from { transform: scaleX(1); }
  to { transform: scaleX(2); }
}`}</CodigoPost>

        <h4>Problema: memoria alta por demasiadas capas</h4>
        <CodigoPost lenguaje="CSS">{`/* ❌ Problema: will-change en todo */
* { will-change: transform; } /* ¡Nunca hagas esto! */

/* ✅ Solución: usar will-change estratégicamente */
.elemento-que-va-a-animar { will-change: transform; }
.elemento-que-ya-termino { will-change: auto; }`}</CodigoPost>

        <NotaPost titulo="Red flag" tipo="aviso">
          <p>
            Si tu página se siente lenta durante las animaciones, probablemente
            estés animando propiedades que causan reflow. Usa las DevTools para
            identificar el cuello de botella.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="7. Patrones de animación esenciales">
        <p>
          Algunos patrones de animación aparecen una y otra vez en el
          desarrollo web. Dominarlos te dará una base sólida para cualquier
          proyecto.
        </p>

        <h3>Loading states</h3>
        <CodigoPost lenguaje="CSS">{`/* Dots loading (como nuestro proyecto) */
@keyframes dotPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.dot:nth-child(1) { animation: dotPulse 1.5s ease-in-out infinite; }
.dot:nth-child(2) { animation: dotPulse 1.5s ease-in-out 0.5s infinite; }`}</CodigoPost>

        <h3>Entrance animations</h3>
        <CodigoPost lenguaje="CSS">{`/* Fade in up (como en Breathe) */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}`}</CodigoPost>

        <h3>Microinteracciones</h3>
        <CodigoPost lenguaje="CSS">{`/* Button press (como los botones de Breathe) */
@keyframes buttonPress {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}
.btn:active { animation: buttonPress 0.15s ease-out; }`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="8. Casos de estudio: animaciones en el mundo real">
        <h3>Nuestro proyecto «Breathe»</h3>
        <p>El proyecto que acompaña este post implementa múltiples técnicas de animación:</p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Animación principal de respiración",
              texto: (
                <ul>
                  <li><strong>Técnica:</strong> keyframes con 5 puntos de control.</li>
                  <li><strong>Propiedades animadas:</strong> solo <code>transform</code> y <code>box-shadow</code>.</li>
                  <li><strong>Timing:</strong> 8 s con <code>ease-in-out</code> para que resulte natural.</li>
                  <li><strong>Accesibilidad:</strong> se desactiva con <code>prefers-reduced-motion</code>.</li>
                </ul>
              ),
            },
            {
              titulo: "Sistema de ondas concéntricas",
              texto: (
                <ul>
                  <li><strong>Técnica:</strong> la misma animación, con delays escalonados.</li>
                  <li><strong>Efecto:</strong> ilusión de profundidad y expansión.</li>
                  <li><strong>Performance:</strong> tres elementos como máximo para evitar lag.</li>
                  <li><strong>Responsive:</strong> se adapta al tamaño de pantalla.</li>
                </ul>
              ),
            },
          ]}
        />

        <h3>Inspiración del ecosistema web</h3>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Stripe: animaciones premium",
              enlace: "https://stripe.com",
              texto: (
                <>
                  <p>Maestros en crear sensación de calidad a través del movimiento.</p>
                  <ul>
                    <li><strong>Curvas personalizadas:</strong> cubic-bezier únicos.</li>
                    <li><strong>Staging:</strong> elementos que aparecen en una secuencia lógica.</li>
                    <li><strong>Consistencia:</strong> la misma personalidad en toda la plataforma.</li>
                  </ul>
                </>
              ),
            },
            {
              titulo: "Linear: fluidez extrema",
              enlace: "https://linear.app",
              texto: (
                <>
                  <p>La referencia en animaciones súper fluidas para productividad.</p>
                  <ul>
                    <li><strong>60 fps garantizados:</strong> solo transform y opacity.</li>
                    <li><strong>Feedback inmediato:</strong> respuesta en cada clic.</li>
                    <li><strong>Transiciones inteligentes:</strong> estados que se conectan con lógica.</li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <h3>Recursos para experimentar</h3>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Animista: generador de animaciones",
              enlace: "https://animista.net/",
              texto: (
                <>
                  <p>Biblioteca visual de animaciones listas para usar.</p>
                  <ul>
                    <li><strong>Vista previa en tiempo real:</strong> ve el resultado antes de copiar.</li>
                    <li><strong>Personalización:</strong> ajusta timing y delays.</li>
                    <li><strong>CSS limpio:</strong> código optimizado.</li>
                  </ul>
                </>
              ),
            },
            {
              titulo: "CodePen: laboratorio creativo",
              enlace: "https://codepen.io/search/pens?q=css+animations",
              texto: (
                <>
                  <p>Miles de experimentos de la comunidad.</p>
                  <ul>
                    <li><strong>Búsquedas recomendadas:</strong> «CSS animations», «keyframes».</li>
                    <li><strong>Autores destacados:</strong> Ana Tudor, Shaw, Amit Sheen.</li>
                    <li><strong>Filtros útiles:</strong> Most hearted, Most forked.</li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <NotaPost titulo="Ejercicio práctico">
          <p>
            Clona nuestro proyecto «Breathe» y experimenta: cambia las
            duraciones, modifica los keyframes, añade nuevos efectos. No hay
            mejor forma de aprender que ensuciarse las manos con código real.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="9. Checklist: animaciones listas para producción">
        <p>Antes de lanzar animaciones a producción, asegúrate de cumplir esta checklist:</p>

        <ListaMarcadaPost titulo="Performance" tipo="bien">
          <li>Solo animas <code>transform</code>, <code>opacity</code>, <code>filter</code> y <code>clip-path</code>.</li>
          <li>Usas <code>will-change</code> solo cuando es necesario y lo limpias después.</li>
          <li>Lo has probado en dispositivos de gama baja.</li>
          <li>Ninguna animación causa scroll jank.</li>
          <li>La duración total de las animaciones críticas es menor de 500 ms.</li>
        </ListaMarcadaPost>

        <ListaMarcadaPost titulo="Accesibilidad" tipo="bien">
          <li>Respetas <code>prefers-reduced-motion</code>.</li>
          <li>No hay más de 3 destellos por segundo.</li>
          <li>Las animaciones que se ejecutan solas tienen controles de pausa.</li>
          <li>Hay alternativas estáticas para las funcionalidades críticas.</li>
          <li>Lo has probado con lectores de pantalla.</li>
        </ListaMarcadaPost>

        <ListaMarcadaPost titulo="Responsive" tipo="bien">
          <li>Las animaciones se adaptan a diferentes tamaños de pantalla.</li>
          <li>Lo has probado en dispositivos táctiles.</li>
          <li>Las duraciones son apropiadas para cada breakpoint.</li>
          <li>Cuidan la batería en móviles.</li>
        </ListaMarcadaPost>

        <ListaMarcadaPost titulo="Técnico" tipo="bien">
          <li>Prefijos de vendor cuando sea necesario.</li>
          <li>Fallbacks para navegadores que no soportan animaciones.</li>
          <li>CSS minificado y optimizado.</li>
          <li>Documentación para el equipo.</li>
        </ListaMarcadaPost>

        <CodigoPost lenguaje="CSS">{`/* Ejemplo de animación lista para producción */
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
.element.animation-complete { will-change: auto; }`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Conclusión: animaciones que importan">
        <p>
          Las animaciones CSS no son solo «adornos»: son herramientas poderosas
          para comunicar, guiar y deleitar a tus usuarios. Desde un simple
          hover effect hasta sistemas complejos como nuestro «Breathe», cada
          animación cuenta una historia.
        </p>

        <p>
          <strong>¿El secreto del éxito?</strong> No está en usar todas las
          técnicas que conoces, sino en elegir la animación correcta para cada
          momento. Las mejores animaciones son aquellas que se sienten tan
          naturales que los usuarios no las notan conscientemente, pero cuya
          ausencia se sentiría extraña.
        </p>

        <h3>Tu hoja de ruta</h3>
        <ol>
          <li><strong>Experimenta</strong> con keyframes básicos hasta dominarlos.</li>
          <li><strong>Practica</strong> timing functions hasta desarrollar intuición.</li>
          <li><strong>Optimiza</strong> pensando siempre en el rendimiento.</li>
          <li><strong>Prueba</strong> en dispositivos reales, no solo en tu MacBook.</li>
          <li><strong>Itera</strong> a partir del feedback real de usuarios.</li>
        </ol>
      </SeccionPost>

      <SeccionPost titulo="Tu momento de crear magia">
        <p>
          Las animaciones CSS son tu varita mágica para transformar interfaces
          planas en experiencias que cobran vida.{" "}
          <strong>No te quedes solo leyendo: abre tu editor y empieza a
          experimentar.</strong>
        </p>
        <p>
          Clona nuestro proyecto «Breathe», rompe cosas, arréglalas, mejóralas.
          Cada keyframe que escribas te acerca más a dominar este arte.
        </p>
        <p>
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Comparte tus experimentos en la comunidad
          </a>
        </p>
        <p>
          La web del futuro se mueve. ¡Haz que se mueva contigo!
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default AnimacionesCSS;
