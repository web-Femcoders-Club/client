import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Code, Cog, Eye, MousePointerClick, Zap } from "lucide-react";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ImagenPost,
  ListaMarcadaPost,
  NotaPost,
  SeccionPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const ManipulacionDomIngeniera: React.FC = () => (
  <>
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
        <link rel="canonical" href="https://www.femcodersclub.com/recursos/js/manipulacion-dom-ingeniera" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Manipulaci&oacute;n del DOM como una Ingeniera | femCoders Club"
        />
        <meta
          property="og:description"
          content="Event Delegation, Performance, IntersectionObserver, MutationObserver y Custom Events. Construye sistemas robustos con manipulaci&oacute;n del DOM."
        />
        <meta property="og:url" content="https://www.femcodersclub.com/recursos/js/manipulacion-dom-ingeniera" />
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

    <PlantillaPost
      ruta="/recursos/js/manipulacion-dom-ingeniera"
      titulo="Manipulación del DOM como una ingeniera"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={35}
      entradilla={
        <p>
          Imagina un e-commerce en pleno Black Friday. Miles de usuarios
          navegando, añadiendo productos al carrito… pero el botón de «Comprar»
          no responde. Está ahí, visible, pero los clics no hacen nada. Los
          usuarios hacen clic una, dos, tres veces. Frustrados, abandonan. Y
          cada minuto que pasa sin detectar el problema son{" "}
          <strong>ventas perdidas</strong>.
        </p>
      }
    >
      <SeccionPost titulo="Cuando un botón deja de funcionar, el negocio se detiene">
        <ImagenPost
          src="/assets/javascript/boton-roto.webp"
          alt="La demo del Smart Analytics Tracker: tras varios clics seguidos en un «Botón roto» aparece el aviso «¡Rage click detectado! El usuario está frustrado», y el panel «Analytics en vivo» cuenta 27 clics y 3 rage clicks."
        />

        <p>
          Este escenario es más común de lo que parece. Un event listener mal
          gestionado, miles de listeners acumulados en memoria, elementos
          dinámicos sin tracking… y de repente tu interfaz deja de responder
          bajo carga. Si tuvieras <strong>event delegation</strong>{" "}
          correctamente implementado y un sistema para detectar{" "}
          <strong>rage clicks</strong> (esos clics desesperados que hacemos
          cuando algo no funciona), identificarías el problema en minutos, no
          en horas.
        </p>

        <p>
          La manipulación del DOM no es solo mover elementos de un lado a otro.
          Es entender cómo el navegador procesa cada interacción, optimizar
          para que tu app no se congele con miles de usuarios simultáneos, y
          construir sistemas que te avisen cuando algo va mal.
        </p>

        <p>
          Hoy vamos a ver la manipulación del DOM desde la perspectiva de una
          ingeniera de software que construye <strong>sistemas robustos</strong>,
          no solo páginas bonitas.
        </p>

        <NotaPost titulo="Para seguir este tutorial de forma práctica">
          <p>
            Hemos creado un{" "}
            <a
              href="https://github.com/femcodersclub/smart-analytics-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smart Analytics Tracker en GitHub
            </a>{" "}
            que demuestra todos estos conceptos en acción: event delegation,
            detección de rage clicks, IntersectionObserver, MutationObserver y
            Custom Events.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="1. Event delegation: el arte de escuchar inteligentemente">
        <h3>El problema del millón de listeners</h3>

        <p>
          Imagina una aplicación de e-commerce con 1.000 productos en pantalla.
          Cada producto tiene un botón «Agregar al carrito». La forma «obvia»
          sería:
        </p>

        <CodigoPost lenguaje="JavaScript">{`// ❌ Enfoque ingenuo
productos.forEach(producto => {
  producto.querySelector('.btn-comprar')
    .addEventListener('click', agregarAlCarrito);
});`}</CodigoPost>

        <p>
          <strong>¿Qué acabas de hacer?</strong> Crear 1.000 event listeners en
          memoria.
        </p>

        <p><strong>Consecuencias:</strong></p>
        <ul>
          <li>Cada listener ocupa ~50 bytes → 50 KB solo en listeners.</li>
          <li>El navegador tiene que registrar y mantener 1.000 listeners.</li>
          <li>Si agregas productos dinámicamente, necesitas recordar agregar nuevos listeners.</li>
          <li>Si olvidas quitarlos, tienes un <strong>memory leak</strong>.</li>
        </ul>

        <h3>La solución: un solo listener para gobernarlos a todos</h3>

        <p>
          Event delegation aprovecha un concepto fundamental del DOM:{" "}
          <strong>event bubbling</strong>.
        </p>

        <NotaPost titulo="Analogía del edificio">
          <p>
            Imagina un edificio de oficinas con 100 empresas. Si cada empresa
            contrata su propio guardia de seguridad en su puerta, necesitas 100
            guardias. Pero si pones un solo guardia en la entrada principal que
            pregunta «¿A qué empresa vas?», solo necesitas uno.
          </p>
        </NotaPost>

        <CodigoPost lenguaje="JavaScript">{`// ✅ Enfoque ingenieril
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-comprar')) {
    agregarAlCarrito(e);
  }
}, true); // ← Capturing phase`}</CodigoPost>

        <ListaMarcadaPost titulo="Beneficios medibles" tipo="bien">
          <li>De 1.000 listeners a 1 → <strong>99,9 % menos memoria</strong>.</li>
          <li>Funciona automáticamente con elementos agregados dinámicamente.</li>
          <li>Un solo punto de mantenimiento.</li>
          <li>Más rápido en dispositivos con recursos limitados.</li>
        </ListaMarcadaPost>

        <h3>Bubbling vs. capturing: el viaje del evento</h3>

        <p>
          Cuando haces clic en un botón que está dentro de un div, que está
          dentro del body, el evento hace un <strong>viaje de ida y vuelta</strong>:
        </p>

        <CodigoPost lenguaje="Texto">{`// Fase 1: Capturing (De afuera hacia adentro)
window → document → html → body → div → button

// Fase 2: Target (Llega al elemento clickeado)
button ← estamos aquí

// Fase 3: Bubbling (De adentro hacia afuera)
button → div → body → html → document → window`}</CodigoPost>

        <p>
          Si quieres interceptar un evento <strong>antes</strong> que cualquier
          otro listener (por ejemplo, para analytics), usas la{" "}
          <strong>capturing phase</strong>. Ese <code>true</code> en{" "}
          <code>addEventListener(..., true)</code> activa capturing.
        </p>

        <NotaPost titulo="Analogía del correo">
          <p>
            <em>Capturing</em> es el cartero bajando del camión, entrando al
            edificio, subiendo al piso, llegando a tu puerta. <em>Bubbling</em>{" "}
            es el camino de vuelta. La mayoría del código usa bubbling (el valor
            por defecto), pero para tracking o debugging, capturing es tu mejor
            amigo.
          </p>
        </NotaPost>

        <ImagenPost
          src="/assets/javascript/dashboard-metricas.webp"
          alt="La portada de la demo del Smart Analytics Tracker con una fila de seis botones de prueba bajo «Event Delegation» y, a la derecha, el panel «Analytics en vivo» con el contador de clics, rage clicks, profundidad de scroll y elementos visibles."
        />
      </SeccionPost>

      <SeccionPost titulo="2. Performance: porque los usuarios no esperan">
        <h3>El enemigo invisible: reflow y repaint</h3>

        <p>Cada vez que modificas el DOM, el navegador puede necesitar:</p>
        <ol>
          <li><strong>Reflow</strong> (recalcular posiciones): caro.</li>
          <li><strong>Repaint</strong> (redibujar píxeles): menos caro.</li>
        </ol>

        <p><strong>El reflow se dispara cuando:</strong></p>
        <ul>
          <li>Agregas o quitas elementos.</li>
          <li>Cambias tamaños, márgenes, padding.</li>
          <li>Modificas clases que afectan al layout.</li>
          <li>Accedes a ciertas propiedades (<code>offsetWidth</code>, <code>scrollTop</code>).</li>
        </ul>

        <p>
          El problema: <strong>los reflows son síncronos</strong>. Bloquean
          todo.
        </p>

        <h3>DocumentFragment: el escenario de ensayo</h3>

        <NotaPost titulo="Analogía del teatro">
          <p>
            En lugar de que cada actor suba al escenario uno por uno (y el
            público espere entre cada uno), primero ensayas toda la escena
            detrás del telón, y luego subes el telón con toda la escena ya
            lista.
          </p>
        </NotaPost>

        <CodigoPost lenguaje="JavaScript">{`// ❌ 1000 reflows
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
container.appendChild(fragment); // UN solo reflow`}</CodigoPost>

        <p><strong>Impacto real:</strong></p>
        <ul>
          <li>Sin fragment: ~150 ms para 1.000 elementos.</li>
          <li>Con fragment: ~15 ms para 1.000 elementos.</li>
          <li><strong>10 veces más rápido.</strong></li>
        </ul>

        <h3>requestAnimationFrame: sincroniza con el monitor</h3>

        <p>
          El navegador actualiza la pantalla ~60 veces por segundo (60 fps).
          Cada frame dura ~16,67 ms. Si haces actualizaciones del DOM fuera de
          sincronía con estos frames, creas <strong>jank</strong> (esos saltos
          visuales feos).
        </p>

        <p>
          <code>requestAnimationFrame</code> te dice: «Oye, voy a redibujar la
          pantalla ahora; si tienes cambios visuales, este es el momento
          perfecto».
        </p>

        <CodigoPost lenguaje="JavaScript">{`// ❌ Se ejecuta descontroladamente (100+ veces/segundo)
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
});`}</CodigoPost>

        <p><strong>Por qué funciona:</strong></p>
        <ul>
          <li>El navegador agrupa todos los cambios visuales del frame.</li>
          <li>Evitas cálculos desperdiciados entre frames.</li>
          <li>Animaciones fluidas a 60 fps.</li>
          <li>Ahorras batería en móviles.</li>
        </ul>

        <ImagenPost
          src="/assets/javascript/renderizado-optimizado-javascript.webp"
          alt="La demo de renderizado optimizado: tras pulsar «Renderizar 1000 elementos» aparece la lista Item 1, Item 2… y el mensaje «Renderizados 1000 elementos en 1.30ms usando DocumentFragment + rAF»."
        />
      </SeccionPost>

      <SeccionPost titulo="3. IntersectionObserver: visibilidad eficiente">
        <h3>El problema del scroll listener</h3>

        <p>Antes de IntersectionObserver, para saber si un elemento era visible hacías:</p>

        <CodigoPost lenguaje="JavaScript">{`window.addEventListener('scroll', () => {
  const rect = elemento.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // ¡Elemento visible!
  }
});`}</CodigoPost>

        <p><strong>Problemas:</strong></p>
        <ul>
          <li><code>getBoundingClientRect()</code> causa reflow.</li>
          <li>Se ejecuta en cada píxel de scroll.</li>
          <li>Tú calculas manualmente la visibilidad.</li>
          <li>Consume batería en móviles.</li>
        </ul>

        <h3>IntersectionObserver: el navegador hace el trabajo</h3>

        <NotaPost titulo="Analogía del vigilante">
          <p>
            En lugar de que tú te levantes cada 5 segundos a mirar por la
            ventana si llegó el cartero, el cartero toca el timbre cuando llega.
            IntersectionObserver es el timbre.
          </p>
        </NotaPost>

        <CodigoPost lenguaje="JavaScript">{`const observer = new IntersectionObserver((entries) => {
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

observer.observe(miElemento);`}</CodigoPost>

        <TarjetasPost
          titulo="Casos de uso reales"
          tarjetas={[
            {
              titulo: "Lazy loading",
              texto: <p>Carga imágenes solo cuando están cerca del viewport. Ahorra MB en conexiones lentas.</p>,
            },
            {
              titulo: "Analytics de visibilidad",
              texto: <p>¿Cuánto tiempo ven realmente los usuarios un elemento? No solo el scroll, sino el tiempo real.</p>,
            },
            {
              titulo: "Infinite scroll",
              texto: <p>Detecta cuándo llegas al final y carga más contenido automáticamente.</p>,
            },
            {
              titulo: "Animaciones al hacer scroll",
              texto: <p>Activa animaciones cuando el elemento entra. Ahorra CPU al no animar lo que está fuera de la vista.</p>,
            },
          ]}
        />

        <p><strong>Ventaja de performance:</strong></p>
        <ul>
          <li>CPU: ~0,1 ms por comprobación frente a ~5 ms con cálculos manuales.</li>
          <li>Batería: el navegador optimiza internamente.</li>
          <li>Código: menos líneas, más declarativo.</li>
        </ul>

        <ImagenPost
          src="/assets/javascript/intersection-observer-js.webp"
          alt="La demo de IntersectionObserver: tarjetas de productos con un contador «Visible: 23s» cada una y, en el panel de analytics, la pestaña Scroll con el patrón detectado, la velocidad media y los hitos del 25 % al 100 %."
        />
      </SeccionPost>

      <SeccionPost titulo="4. MutationObserver: vigilante de cambios dinámicos">
        <h3>El desafío de las SPA</h3>

        <p>
          En aplicaciones modernas (React, Vue, Svelte), el DOM cambia
          constantemente sin recargar la página. ¿Cómo detectas estos cambios?
        </p>

        <CodigoPost lenguaje="JavaScript">{`// ❌ Polling (preguntar cada X tiempo)
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
});`}</CodigoPost>

        <NotaPost titulo="Analogía del notario">
          <p>
            Un notario documenta cambios legales. MutationObserver documenta
            cambios en el DOM. No previene cambios, solo te informa de que
            ocurrieron.
          </p>
        </NotaPost>

        <h3>Casos de uso</h3>
        <ul>
          <li><strong>Auto-tracking en SPA:</strong> se agregan productos nuevos dinámicamente y tu analytics los trackea automáticamente, sin hooks en React o Vue.</li>
          <li><strong>Detección de cambios por terceros:</strong> scripts externos modifican tu DOM y quieres saber qué tocaron.</li>
          <li><strong>Debugging:</strong> «¿Quién está cambiando este atributo?». MutationObserver te dice exactamente qué cambió.</li>
          <li><strong>Sincronización:</strong> mantener dos partes de la UI sincronizadas observando cambios en A y actualizando B.</li>
        </ul>

        <p>
          En nuestro proyecto, el <strong>MutationManager</strong> detecta
          cuándo se agregan nuevos elementos con{" "}
          <code>data-track-visibility</code> y automáticamente empieza a
          observarlos con IntersectionObserver. ¿Magia? No, ingeniería.
        </p>

        <h3>Precaución: performance</h3>
        <p>MutationObserver puede dispararse muchísimo en apps dinámicas. Por eso:</p>
        <ul>
          <li>Usa <code>debounce</code> para agrupar mutaciones.</li>
          <li>Observa solo lo necesario (no <code>document.body</code> si puedes evitarlo).</li>
          <li>Desconéctalo cuando no lo necesites.</li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="5. Custom events: arquitectura desacoplada">
        <h3>El problema del código acoplado</h3>

        <p>
          Imagina que tu ClickCollector necesita avisar al Dashboard cuando
          detecta un rage click:
        </p>

        <CodigoPost lenguaje="JavaScript">{`// ❌ Acoplamiento directo
class ClickCollector {
  detectRageClick() {
    // ...
    dashboard.showAlert('Rage click!'); // ¡Depende de Dashboard!
  }
}`}</CodigoPost>

        <p><strong>Problemas:</strong></p>
        <ul>
          <li>ClickCollector conoce a Dashboard.</li>
          <li>Si cambia Dashboard, rompes ClickCollector.</li>
          <li>No puedes usar ClickCollector sin Dashboard.</li>
          <li>El testing es un infierno.</li>
        </ul>

        <h3>Custom events: el sistema de mensajería</h3>

        <NotaPost titulo="Analogía de la radio">
          <p>
            Una estación de radio transmite sin saber quién escucha. Puede que
            nadie, puede que millones. Le da igual: su trabajo es transmitir.
            Los custom events funcionan igual: el <strong>Publisher</strong>{" "}
            emite eventos sin saber quién escucha, y el{" "}
            <strong>Subscriber</strong> escucha sin saber quién los emite.
          </p>
        </NotaPost>

        <CodigoPost lenguaje="JavaScript">{`// Patrón EventBus
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
}`}</CodigoPost>

        <CodigoPost lenguaje="JavaScript">{`const bus = new EventBus();

// ClickCollector emite
class ClickCollector {
  constructor(eventBus) {
    this.eventBus = eventBus;
  }

  detectRageClick(data) {
    this.eventBus.emit('rage:detected', data);
  }
}

const clickCollector = new ClickCollector(bus);

// Dashboard escucha
bus.on('rage:detected', (data) => {
  showAlert(data);
});

// Logger también escucha (¡nuevo módulo sin tocar ClickCollector!)
bus.on('rage:detected', (data) => {
  logToServer(data);
});`}</CodigoPost>

        <h3>Arquitectura del proyecto</h3>

        <CodigoPost lenguaje="Texto">{`TrackerEngine
    │
 EventBus (centro de comunicación)
    │
    ├─ ClickCollector emite → 'click:registered', 'rage:detected'
    ├─ ScrollCollector emite → 'milestone:reached', 'scroll:detected'
    ├─ VisibilityCollector emite → 'visibility:update'
    └─ Dashboard escucha → TODOS los eventos anteriores`}</CodigoPost>

        <ListaMarcadaPost titulo="Beneficios" tipo="bien">
          <li><strong>Desacoplamiento:</strong> módulos independientes.</li>
          <li><strong>Extensibilidad:</strong> agregar listeners sin modificar emisores.</li>
          <li><strong>Testing:</strong> mock del EventBus, tests aislados.</li>
          <li><strong>Mantenibilidad:</strong> cambios localizados.</li>
        </ListaMarcadaPost>

        <ImagenPost
          src="/assets/javascript/custom-events.webp"
          alt="El registro «Eventos del sistema» de la demo: una lista con hora de eventos Rage Click y Scroll Milestone, cada uno con sus datos en JSON (posición, selector, número de clics, hito alcanzado), emitidos por módulos distintos a través del EventBus."
        />
      </SeccionPost>

      <SeccionPost titulo="El proyecto: donde todo se une">
        <p>
          Nuestro <strong>Smart Analytics Tracker</strong> no es un proyecto de
          ejemplo cualquiera. Es una demostración de cómo estas técnicas
          resuelven problemas reales:
        </p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Detección de rage clicks",
              icono: <MousePointerClick aria-hidden="true" />,
              texto: <p>EventBus comunica entre ClickCollector y la UI. Event delegation captura todos los clics. Performance optimizada con buffers y debouncing.</p>,
            },
            {
              titulo: "Tracking de visibilidad real",
              icono: <Eye aria-hidden="true" />,
              texto: <p>IntersectionObserver mide el tiempo real de visualización. No solo «hizo scroll hasta aquí», sino «miró esto X segundos».</p>,
            },
            {
              titulo: "Analytics de scroll inteligente",
              icono: <Zap aria-hidden="true" />,
              texto: <p>requestAnimationFrame limita los callbacks a 60 fps. Detecta patrones: ¿lectura lenta?, ¿escaneo rápido?, ¿abandono?</p>,
            },
            {
              titulo: "Contenido dinámico",
              icono: <Cog aria-hidden="true" />,
              texto: <p>MutationObserver detecta nuevos elementos. IntersectionObserver los trackea automáticamente. Sin configuración manual.</p>,
            },
            {
              titulo: "Arquitectura escalable",
              icono: <Code aria-hidden="true" />,
              texto: <p>Un solo event listener global (delegation). Módulos desacoplados con EventBus. Es fácil agregar nuevos collectors.</p>,
            },
          ]}
        />

        <h3>Instalación rápida</h3>
        <CodigoPost lenguaje="Bash">{`git clone https://github.com/femcodersclub/smart-analytics-tracker.git
cd smart-analytics-tracker
npm install
npm start`}</CodigoPost>

        <TarjetasPost
          titulo="Por qué vale la pena explorarlo"
          columnas={3}
          tarjetas={[
            {
              titulo: "Para principiantes",
              texto: <p>Conceptos abstractos (delegation, observers) aplicados en código real.</p>,
            },
            {
              titulo: "Para nivel intermedio",
              texto: <p>Patrones de arquitectura desacoplada con EventBus y observers.</p>,
            },
            {
              titulo: "Para avanzadas",
              texto: <p>Un sistema de analytics listo para producción que puedes usar en tus proyectos.</p>,
            },
          ]}
        />

        <p>
          <a
            href="https://github.com/femcodersclub/smart-analytics-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Ver proyecto en GitHub
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conclusión: de código a sistemas">
        <p>
          La diferencia entre «hacer que funcione» y «construir un sistema»
          está en entender <strong>por qué</strong> las cosas funcionan como
          funcionan.
        </p>

        <ul>
          <li>
            <strong>Event delegation</strong> no es solo «un truco para ahorrar
            memoria». Es entender cómo el navegador propaga eventos y usar eso
            a tu favor.
          </li>
          <li>
            <strong>IntersectionObserver</strong> no es solo «una API nueva». Es
            delegar al navegador trabajo que él hace mejor que tú.
          </li>
          <li>
            <strong>Custom events</strong> no son solo «desacoplamiento fancy».
            Son arquitectura que escala cuando tu app crece de 3 a 30 módulos.
          </li>
          <li>
            <strong>Performance</strong> no es solo «usar DocumentFragment». Es
            entender reflows, repaints y el rendering pipeline del navegador.
          </li>
        </ul>

        <p>
          Cuando manejas millones de interacciones diarias, cuando cada
          milisegundo importa, cuando tu app no puede fallar… estas técnicas
          dejan de ser «buenas prácticas» y se vuelven{" "}
          <strong>requisitos mínimos</strong>.
        </p>

        <p>
          El proyecto está en GitHub. Clónalo, rómpelo, mejóralo. Pero sobre
          todo: <strong>entiende por qué cada decisión se tomó así</strong>.
        </p>

        <p>
          <strong>
            <em>Porque esa es la diferencia entre copiar código y pensar como ingeniera.</em>
          </strong>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Recursos">
        <ul>
          <li>
            <strong>Proyecto:</strong>{" "}
            <a
              href="https://github.com/femcodersclub/smart-analytics-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/femcodersclub/smart-analytics-tracker
            </a>
          </li>
          <li>
            <strong>Demo en vivo:</strong> clónalo y ejecútalo en local.
          </li>
          <li>
            <strong>Documentación técnica:</strong> revisa ARCHITECTURE.md en el
            repositorio.
          </li>
        </ul>

        <h3>Únete a la comunidad</h3>
        <p>
          ¿Preguntas? ¿Quieres profundizar en algún tema? Únete a FemCoders
          Club, una comunidad de más de 1.600 mujeres en tecnología donde
          aprendemos y crecemos juntas. Escríbenos o abre un issue en el
          proyecto.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Necesitas apoyo personalizado?">
        <p>
          Si estos conceptos te resultan desafiantes o quieres profundizar más
          con orientación personalizada, en FemCoders Club ofrecemos{" "}
          <Link to="/login">mentorías individuales</Link> donde podemos
          trabajar juntas en tus dudas específicas. (Requiere{" "}
          <Link to="/register">registro gratuito</Link>).
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ManipulacionDomIngeniera;
