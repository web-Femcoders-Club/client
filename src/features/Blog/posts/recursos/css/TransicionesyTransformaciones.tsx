import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ImagenPost,
  NotaPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const TransicionesyTransformaciones: React.FC = () => (
  <>
      <Helmet>
        <title>
          Domina las transformaciones y transiciones CSS 2D/3D: guía avanzada | FemCoders Club
        </title>
        <meta
          name="description"
          content="Guía completa de transformaciones y transiciones CSS 2D y 3D. Aprende rendering pipeline, hardware acceleration, timing functions avanzadas, debugging y ejemplos reales con Dashboard futurista."
        />
        <meta
          name="keywords"
          content="CSS transformaciones, CSS transiciones, transform 2D, transform 3D, perspective CSS, cubic-bezier, timing functions, hardware acceleration, debugging CSS, dashboard futurista, femcoders club, desarrollo web para mujeres"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/transiciones-transformaciones"
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
          content="Domina las transformaciones y transiciones CSS 2D/3D: guía avanzada"
        />
        <meta
          property="og:description"
          content="Guía completa de transformaciones y transiciones CSS 2D y 3D. Aprende rendering pipeline, hardware acceleration, timing functions avanzadas, debugging y ejemplos reales con Dashboard futurista."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/transiciones-transformaciones"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/TransformacionesCSS.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Transformaciones y transiciones CSS 2D/3D: guía avanzada"
        />
        <meta
          name="twitter:description"
          content="Aprende transformaciones CSS 2D/3D, timing functions avanzadas, debugging y técnicas de optimización con ejemplos prácticos de Dashboard futurista."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/TransformacionesCSS.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-05-25T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Transformaciones" />
        <meta property="article:tag" content="Transiciones" />
        <meta property="article:tag" content="Animaciones" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/css/transiciones-transformaciones"
      titulo="Transiciones y transformaciones CSS en 2D y 3D"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={18}
      entradilla={
        <p>
          ¿Te has preguntado cómo crear esas interfaces futuristas que parecen
          salidas de una película de ciencia ficción? En este artículo
          exploramos las transformaciones y transiciones CSS desde un enfoque
          práctico y avanzado, con ejemplos reales de un dashboard futurista.
        </p>
      }
    >
      <ImagenPost
        src="/assets/css/dashboard-futurista-completo.webp"
        alt="Dashboard de control futurista con paneles inclinados en perspectiva, interruptores y gráficos sobre fondo oscuro, construido con transformaciones CSS 2D y 3D"
      />
      <p>
        Hemos creado un proyecto práctico que puedes explorar en nuestro{" "}
        <a
          href="https://github.com/femcodersclub/Dashboard-de-Control-Futurista"
          target="_blank"
          rel="noopener noreferrer"
        >
          repositorio de GitHub
        </a>
        . También tienes la{" "}
        <a
          href="https://femcodersclub.github.io/Dashboard-de-Control-Futurista/"
          target="_blank"
          rel="noopener noreferrer"
        >
          demo en vivo
        </a>
        . Te invitamos a clonarlo y experimentar con él mientras lees este post.
      </p>

      <SeccionPost titulo="¿Qué vamos a aprender?">
        <p>Al final de este tutorial, dominarás:</p>
        <ul>
          <li>Transformaciones 2D: rotación, escalado y traslación</li>
          <li>Transformaciones 3D: perspectiva y profundidad</li>
          <li>Transiciones avanzadas con curvas de animación personalizadas</li>
          <li>Interactividad que combina CSS y JavaScript</li>
          <li>Técnicas de debugging y optimización</li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Transform vs. transition: la diferencia clave">
        <p>Antes de profundizar, es crucial entender la diferencia fundamental:</p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Transform",
              texto: "Define QUÉ cambio visual ocurre (rotar, escalar, mover).",
            },
            {
              titulo: "Transition",
              texto: "Define CÓMO ocurre ese cambio (duración, velocidad, retraso).",
            },
          ]}
        />

        <CodigoPost lenguaje="CSS">{`/* Transform define el estado final */
.elemento {
  transform: rotate(45deg) scale(1.2);
}

/* Transition define cómo llegar ahí */
.elemento {
  transition: transform 0.3s ease-in-out;
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Conceptos fundamentales">
        <h3>¿Qué son las transformaciones CSS?</h3>
        <p>
          Las transformaciones CSS nos permiten modificar la posición, tamaño,
          rotación y forma de los elementos sin afectar el flujo del documento.
          Es como tener superpoderes para manipular elementos en el espacio.
        </p>
      </SeccionPost>

      <SeccionPost titulo="2D vs. 3D: ¿cuándo usar cada una?" id="2d-vs-3d">
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Transformaciones 2D",
              texto: (
                <ul>
                  <li>Perfectas para hover effects y animaciones sutiles</li>
                  <li>Ideales para botones, cards y elementos de interfaz</li>
                  <li>Menos recursos computacionales</li>
                  <li>Compatibles con dispositivos más antiguos</li>
                </ul>
              ),
            },
            {
              titulo: "Transformaciones 3D",
              texto: (
                <ul>
                  <li>Crean ilusión de profundidad y espacio</li>
                  <li>Perfectas para dashboards, portfolios y experiencias inmersivas</li>
                  <li>Más impacto visual, pero requieren más procesamiento</li>
                  <li>Ideales para dispositivos modernos</li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="1. Fundamentos sólidos">
        <h3>El rendering pipeline: ¿por qué transform es más eficiente?</h3>
        <p>
          Las transformaciones CSS operan en la <strong>capa de composición</strong>{" "}
          del navegador y evitan costosos recálculos de layout y repaint:
        </p>
        <TablaPost descripcion="Fases del renderizado que activa cada método">
          <table>
            <thead>
              <tr>
                <th>Método</th>
                <th>Layout</th>
                <th>Paint</th>
                <th>Composite</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cambiar <code>left/top</code></td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>🐌 Lenta</td>
              </tr>
              <tr>
                <td>Cambiar <code>width/height</code></td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>🐌 Lenta</td>
              </tr>
              <tr>
                <td>Usar <code>transform</code></td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
                <td>🚀 Rápida</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <h3>Hardware acceleration: ¿cuándo se activa?</h3>
        <p>El navegador crea una nueva capa de composición cuando detecta:</p>
        <ul>
          <li><code>transform: translateZ(0)</code> o cualquier transform 3D</li>
          <li><code>will-change: transform</code></li>
          <li><code>opacity</code> con transition/animation</li>
          <li><code>position: fixed</code></li>
        </ul>

        <NotaPost titulo="Cuidado" tipo="aviso">
          <p>
            Demasiadas capas consumen memoria. Usa hardware acceleration solo
            cuando sea necesario.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="2. Transformaciones 2D avanzadas">
        <h3>Orden de las funciones: ¿por qué importa?</h3>
        <p>
          Las transformaciones se aplican de <strong>derecha a izquierda</strong>.
          El orden cambia completamente el resultado:
        </p>

        <CodigoPost lenguaje="CSS">{`/* Primero rota, después traslada */
transform: translate(100px, 0) rotate(45deg);

/* Primero traslada, después rota */
transform: rotate(45deg) translate(100px, 0);`}</CodigoPost>

        <h3>Transform-origin: más allá del centro</h3>
        <p>Define el punto de referencia para las transformaciones:</p>

        <CodigoPost lenguaje="CSS">{`/* Casos de uso específicos */
.flip-card {
  transform-origin: left center; /* Voltear desde el lado izquierdo */
  transform: rotateY(180deg);
}

.scale-corner {
  transform-origin: top left; /* Escalar desde esquina */
  transform: scale(1.5);
}`}</CodigoPost>

        <h3>Matrix transformations: control total</h3>
        <p>Para efectos complejos, las matrices ofrecen control absoluto:</p>

        <CodigoPost lenguaje="CSS">{`/* Equivale a: skewX(20deg) */
transform: matrix(1, 0, 0.36, 1, 0, 0);

/* Para 3D: matrix3d() con 16 valores */
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);`}</CodigoPost>

        <h3>Ejemplo del proyecto: hover effect de los paneles</h3>
        <p>En nuestro dashboard, cada panel combina varias transformaciones:</p>

        <CodigoPost lenguaje="CSS">{`.control-panel:hover {
  /* Orden estratégico: elevar → rotar → escalar */
  transform: translateY(-10px) rotateX(5deg) rotateY(2deg);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="3. Transformaciones 3D profundas">
        <h3>Perspective: a nivel de elemento o de padre</h3>
        <p>
          <strong>Diferencia clave:</strong> dónde aplicas la perspectiva
          cambia todo el efecto.
        </p>

        <CodigoPost lenguaje="CSS">{`/* Parent-level: todos los hijos comparten la misma perspectiva */
.container {
  perspective: 1000px;
}

/* Element-level: cada elemento tiene su propia perspectiva */
.element {
  transform: perspective(1000px) rotateY(45deg);
}`}</CodigoPost>

        <h3>Transform-style: preserve-3d y sus limitaciones</h3>
        <p>Determina si los elementos hijos participan en el espacio 3D:</p>

        <ul>
          <li><code>flat</code> (por defecto): los hijos se aplanan al plano del padre.</li>
          <li><code>preserve-3d</code>: los hijos mantienen su posición 3D.</li>
        </ul>

        <p>
          <strong>Limitaciones:</strong> <code>preserve-3d</code> se cancela
          con <code>overflow: hidden</code>, <code>clip</code> o{" "}
          <code>filter</code>.
        </p>

        <h3>Stacking contexts en 3D: problemas comunes</h3>
        <p>
          Las transformaciones 3D crean nuevos stacking contexts, lo que afecta
          al <code>z-index</code>:
        </p>

        <CodigoPost lenguaje="CSS">{`/* Problema: z-index no funciona como esperas */
.elemento-3d {
  transform: rotateY(45deg);
  z-index: 999; /* Puede no tener efecto */
}

/* Solución: usar translateZ para controlar profundidad */
.adelante { transform: translateZ(50px); }
.atras { transform: translateZ(-50px); }`}</CodigoPost>

        <h3>Ejemplo del proyecto: profundidad visual</h3>
        <p>
          En el dashboard creamos profundidad con <code>perspective</code> y{" "}
          <code>translateZ</code>:
        </p>

        <CodigoPost lenguaje="CSS">{`.dashboard-container {
  perspective: 1000px; /* Perspectiva compartida */
}

.control-panel {
  transform-style: preserve-3d;
}

.control-panel:hover {
  transform: translateZ(30px) rotateX(10deg);
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="4. Transiciones avanzadas">
        <h3>Timing functions personalizadas y su impacto visual</h3>
        <p>
          Las curvas de animación determinan cómo se siente una transición.
          Cada una transmite una sensación diferente:
        </p>
        <TablaPost descripcion="Timing functions, su curva cubic-bezier y cuándo usarlas">
          <table>
            <thead>
              <tr>
                <th>Timing function</th>
                <th>Cubic-bezier</th>
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
                <td>Botones, interacciones</td>
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

        <h3>Transiciones interrumpidas: ¿qué hace el navegador?</h3>
        <p>
          Cuando una transición se interrumpe (por ejemplo, con un hover
          rápido), el navegador:
        </p>
        <ul>
          <li><strong>Calcula el estado actual</strong> de la propiedad en ese momento.</li>
          <li><strong>Inicia una nueva transición</strong> desde ese punto al nuevo destino.</li>
          <li><strong>Mantiene la fluidez</strong> sin saltos bruscos.</li>
        </ul>

        <h3>Performance: ¿qué propiedades transicionar?</h3>
        <p>
          <strong>Regla de oro:</strong> transiciona solo propiedades que no
          causen reflow o repaint.
        </p>

        <TablaPost descripcion="Propiedades según su coste al transicionarlas">
          <table>
            <thead>
              <tr>
                <th>✅ Excelente</th>
                <th>⚠️ Cuidado</th>
                <th>❌ Evitar</th>
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

        <h3>Ejemplo del proyecto: toggle switches</h3>
        <p>
          Los interruptores del dashboard usan la curva «bounce» para
          sentirse físicos:
        </p>

        <CodigoPost lenguaje="CSS">{`.toggle-switch::before {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.toggle-switch.active::before {
  transform: translateX(30px) rotateY(180deg);
  /* El elemento "rebota" sutilmente al final */
}`}</CodigoPost>

        <NotaPost>
          <p>
            Los valores negativos en cubic-bezier crean el efecto «overshoot»,
            que hace que las animaciones se sientan más naturales.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="5. Interactividad: CSS + JavaScript">
        <p>
          Las transformaciones CSS alcanzan su máximo potencial cuando se
          combinan con JavaScript. Esta sinergia permite crear interfaces que
          responden inteligentemente a las acciones de quien las usa.
        </p>

        <TarjetasPost
          titulo="Principios clave de la combinación"
          tarjetas={[
            {
              titulo: "JavaScript controla el timing",
              texto: "Cuándo activar las transformaciones.",
            },
            {
              titulo: "CSS maneja las transiciones",
              texto: "Qué tan suave se ve el cambio.",
            },
            {
              titulo: "Feedback inmediato",
              texto: "Respuesta visual instantánea a cada acción.",
            },
            {
              titulo: "Estados coordinados",
              texto: "Varios elementos que cambian en armonía.",
            },
          ]}
        />

        <h3>Ejemplo práctico: nuestro dashboard</h3>
        <p>
          En el{" "}
          <a
            href="https://femcodersclub.github.io/Dashboard-de-Control-Futurista/"
            target="_blank"
            rel="noopener noreferrer"
          >
            proyecto completo
          </a>
          , cada botón responde con transformaciones que se sienten físicas,
          los datos se actualizan con microanimaciones y el modo automático
          coordina efectos visuales en todo el sistema.
        </p>

        <p>
          <strong>La fórmula:</strong> JavaScript decide qué animar y cuándo;
          CSS hace que se vea fluido y natural.
        </p>
      </SeccionPost>

      <SeccionPost titulo="6. Técnicas de debugging y optimización">
        <p>
          Las herramientas de desarrollo son esenciales para depurar
          transformaciones complejas:
        </p>

        <TarjetasPost
          titulo="DevTools para inspeccionar transforms complejas"
          tarjetas={[
            {
              titulo: "Chrome DevTools",
              texto: (
                <ul>
                  <li><strong>Elements panel:</strong> edita transforms en tiempo real.</li>
                  <li><strong>Animations panel:</strong> visualiza timing y curvas.</li>
                  <li><strong>Layers panel:</strong> identifica capas de composición.</li>
                  <li><strong>Performance tab:</strong> detecta jank y cuellos de botella.</li>
                </ul>
              ),
            },
            {
              titulo: "Firefox DevTools",
              texto: (
                <ul>
                  <li><strong>Inspector:</strong> el mejor para transformaciones 3D.</li>
                  <li><strong>Animaciones:</strong> control de velocidad y pausa.</li>
                  <li><strong>Computed:</strong> muestra el resultado final de los transforms.</li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Problemas comunes y sus soluciones">
        <h3>Problema: elementos que «tiemblan» durante la animación</h3>
        <CodigoPost lenguaje="CSS">{`/* ❌ Problema: subpixel rendering */
.elemento {
  transform: translateX(10.5px);
}

/* ✅ Solución: usar valores enteros o translateZ */
.elemento {
  transform: translateX(10px) translateZ(0);
}`}</CodigoPost>

        <h3>Problema: z-index no funciona con elementos transformados</h3>
        <CodigoPost lenguaje="CSS">{`/* ❌ Problema: nuevo stacking context */
.card {
  transform: rotateY(10deg);
  z-index: 999; /* No tendrá efecto */
}

/* ✅ Solución: usar translateZ para profundidad */
.card-adelante { transform: translateZ(10px); }
.card-atras { transform: translateZ(-10px); }`}</CodigoPost>

        <NotaPost titulo="Red flag" tipo="aviso">
          <p>
            Si tu animación causa scroll jank o la página se siente lenta,
            probablemente estés animando propiedades que causan reflow (
            <code>width</code>, <code>height</code>, <code>padding</code>,{" "}
            <code>margin</code>).
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="7. Ejemplos reales en acción">
        <p>
          Las transformaciones CSS brillan cuando se aplican en proyectos
          reales. Veamos cómo diferentes sitios web implementan estas técnicas
          de forma efectiva.
        </p>

        <TarjetasPost
          titulo="Proyectos de FemCoders Club"
          tarjetas={[
            {
              titulo: "Página de eventos: flip cards",
              enlace: "/eventos",
              texto: (
                <>
                  <p>Tarjetas que se voltean para revelar información adicional del evento.</p>
                  <ul>
                    <li><strong>Técnica:</strong> <code>rotateY(180deg)</code> con <code>backface-visibility</code></li>
                    <li><strong>Timing:</strong> <code>transition: 0.6s ease-in-out</code></li>
                    <li><strong>UX:</strong> hover en escritorio, tap en móvil</li>
                  </ul>
                </>
              ),
            },
            {
              titulo: "Página «Quiénes somos»",
              enlace: "/femcoders-quienes-somos",
              texto: (
                <>
                  <p>Animaciones sutiles que guían la atención.</p>
                  <ul>
                    <li><strong>Técnica:</strong> <code>translateY()</code> y <code>scale()</code> en scroll</li>
                    <li><strong>Performance:</strong> Intersection Observer + <code>will-change</code></li>
                    <li><strong>Accesibilidad:</strong> respeta <code>prefers-reduced-motion</code></li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <TarjetasPost
          titulo="Inspiración del ecosistema web"
          tarjetas={[
            {
              titulo: "GitHub: hover effects",
              enlace: "https://github.com",
              texto: (
                <>
                  <p>Microinteracciones en botones y elementos de navegación.</p>
                  <ul>
                    <li><strong>Sutil pero efectivo:</strong> <code>transform: translateY(-1px)</code></li>
                    <li><strong>Consistencia:</strong> mismo timing en toda la plataforma</li>
                    <li><strong>Performance:</strong> solo transform y opacity</li>
                  </ul>
                </>
              ),
            },
            {
              titulo: "Stripe: animaciones premium",
              enlace: "https://stripe.com",
              texto: (
                <>
                  <p>Transiciones sofisticadas que transmiten calidad.</p>
                  <ul>
                    <li><strong>Curvas personalizadas:</strong> cubic-bezier propio</li>
                    <li><strong>Staging:</strong> elementos que aparecen en secuencia</li>
                    <li><strong>3D sutil:</strong> <code>translateZ()</code> para dar profundidad</li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <TarjetasPost
          titulo="Laboratorio de experimentación"
          tarjetas={[
            {
              titulo: "CodePen: galería de transforms",
              enlace: "https://codepen.io/search/pens?q=css+3d+transform",
              texto: (
                <>
                  <p>Miles de ejemplos creativos de la comunidad.</p>
                  <ul>
                    <li><strong>Búsqueda recomendada:</strong> «CSS 3D transforms»</li>
                    <li><strong>Autores destacados:</strong> Ana Tudor, Shaw, Amit Sheen</li>
                    <li><strong>Filtros útiles:</strong> Most hearted, Recent</li>
                  </ul>
                </>
              ),
            },
            {
              titulo: "CSS-Tricks: almacén de técnicas",
              enlace: "https://css-tricks.com/almanac/properties/t/transform/",
              texto: (
                <>
                  <p>Artículos en profundidad sobre implementación.</p>
                  <ul>
                    <li><strong>Transform Guide:</strong> referencia completa</li>
                    <li><strong>Performance:</strong> qué animar y qué evitar</li>
                    <li><strong>Browser Support:</strong> compatibilidad actualizada</li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <h3>Qué aprender de cada ejemplo</h3>
        <p>
          Cada uno de estos sitios aplica transformaciones y transiciones de
          forma única, pero todos comparten principios clave:
        </p>
        <ul>
          <li><strong>Consistencia:</strong> usan las mismas técnicas en toda la plataforma.</li>
          <li><strong>Performance:</strong> evitan reflow y repaint innecesarios.</li>
          <li><strong>Interactividad:</strong> responden a cada acción de forma fluida.</li>
          <li><strong>Estética:</strong> las animaciones cuentan una historia visual.</li>
        </ul>

        <TablaPost descripcion="Técnica destacada y lección clave de cada sitio">
          <table>
            <thead>
              <tr>
                <th>Sitio</th>
                <th>Técnica destacada</th>
                <th>Lección clave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>FemCoders Eventos</strong></td>
                <td>Flip cards 3D</td>
                <td>UX diferente para escritorio y móvil</td>
              </tr>
              <tr>
                <td><strong>GitHub</strong></td>
                <td>Hover sutiles</td>
                <td>Menos es más, consistencia total</td>
              </tr>
              <tr>
                <td><strong>Stripe</strong></td>
                <td>Staging animations</td>
                <td>Las animaciones cuentan una historia</td>
              </tr>
              <tr>
                <td><strong>Apple</strong></td>
                <td>Parallax scroll</td>
                <td>Performance en dispositivos diversos</td>
              </tr>
              <tr>
                <td><strong>CodePen</strong></td>
                <td>Experimentos creativos</td>
                <td>Límites de lo que es posible</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <NotaPost titulo="Ejercicio práctico">
          <p>
            Visita cada uno de estos sitios con las DevTools abiertas. En el
            panel Elements, inspecciona los elementos que se animan y observa
            qué propiedades CSS cambian. ¡Es la mejor forma de aprender de las
            profesionales!
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Conclusión: tu momento de brillar">
        <p>
          Las transformaciones y transiciones CSS son mucho más que efectos
          visuales: son tu herramienta para crear experiencias web que inspiran
          y sorprenden. Desde el render pipeline hasta las curvas cubic-bezier,
          cada concepto que hemos explorado te acerca más a dominar el arte de
          la animación web.
        </p>

        <p>
          <strong>¿El secreto?</strong> No está en usar todas las técnicas a la
          vez, sino en elegir la correcta para cada momento. Las mejores
          interfaces son aquellas en las que las transformaciones pasan
          desapercibidas porque se sienten naturales.
        </p>

        <h3>Ahora es tu turno de brillar</h3>
        <p>
          No te quedes solo leyendo.{" "}
          <strong>Experimenta, crea, rompe cosas y vuélvelas a armar.</strong>{" "}
          Cada transform que escribas, cada transition que ajustes, te convierte
          en una desarrolladora más completa.
        </p>
        <p>
          ¿Tu próximo desafío? Toma una de estas técnicas y aplícala en tu
          proyecto actual. No importa si es pequeño: los grandes cambios
          empiezan con pequeños experimentos.
        </p>
        <p>
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comparte tu creación en la comunidad
          </a>
        </p>
        <p>
          <strong>El futuro de la web está en tus manos. ¡Hazla brillar!</strong>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default TransicionesyTransformaciones;
