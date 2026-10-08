import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ImagenPost,
  NotaPost,
  PasosPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const CssPerformancePost: React.FC = () => {
  const downloadActionPlanPDF = () => {
    const actionPlanContent = `
PLAN DE ACCIÓN: EL CHALLENGE DE 7 DÍAS
CSS Performance Optimization - FemCoders Club

═══════════════════════════════════════════════════════════

📋 CHECKLIST PASO A PASO

DÍA 1: 🔍 Análisis de CSS no usado
□ Usa Chrome DevTools → Coverage tab
□ Target: <20% código no usado

DÍA 2: 🎯 Audit de selectores complejos  
□ Identifica selectores con 3+ niveles
□ Simplifica los más problemáticos

DÍA 3: ⚡ Implementación Critical CSS
□ Inline estilos above-the-fold
□ Lazy load el resto

DÍA 4: 🎬 Optimización de animaciones
□ Transform y opacity únicamente
□ will-change strategic usage

DÍA 5: 🔤 Font loading strategy
□ font-display: swap
□ Preload fonts críticas

DÍA 6: 🧪 Testing y métricas
□ Before/after Lighthouse comparison
□ Real device testing

DÍA 7: 📊 Monitoreo continuo setup
□ Lighthouse CI o similar
□ Real User Monitoring

═══════════════════════════════════════════════════════════

📝 NOTAS PERSONALES:
____________________________________________________
____________________________________________________
____________________________________________________
____________________________________________________

🎯 META: Mejorar PageSpeed de ___ a ___ puntos

📅 FECHA INICIO: _______________
📅 FECHA FIN: _______________

═══════════════════════════════════════════════════════════
Descargado desde: femcodersclub.com
    `;

    const blob = new Blob([actionPlanContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CSS-Performance-Challenge-7-Dias-femCoders.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>El Lado Oculto del CSS: Cómo tus estilos están saboteando la performance | FemCoders Club</title>
        <meta
          name="description"
          content="Descubre cómo optimizar CSS para mejorar performance web. De 81 a 97 en PageSpeed: técnicas avanzadas, Critical CSS, selectores eficientes y herramientas de medición 2025."
        />
        <meta
          name="keywords"
          content="CSS performance, optimización CSS, Core Web Vitals, Critical CSS, selectores CSS, PageSpeed Insights, LCP, CLS, femcoders club, desarrollo frontend, CSS avanzado"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/css-performance-optimization"
        />

        {/* Directivas para motores de búsqueda */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina Ichim" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="El Lado Oculto del CSS: Cómo tus estilos están saboteando la performance | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Tutorial completo de optimización CSS: mejora tu PageSpeed de 81 a 97 con técnicas avanzadas, Critical CSS y herramientas de medición profesionales."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/css-performance-optimization"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CSS-Performance-Optimization.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="El lado oculto del CSS: optimización de performance web"
        />
        <meta
          name="twitter:description"
          content="Aprende a optimizar CSS para máxima performance: Critical CSS, selectores eficientes y técnicas avanzadas con caso real de mejora."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CSS-Performance-Optimization.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-08-02T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Performance" />
        <meta property="article:tag" content="Optimización" />
        <meta property="article:tag" content="Frontend" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <PlantillaPost
        ruta="/recursos/css/css-performance-optimization"
        titulo="El lado oculto del CSS: cómo tus estilos están saboteando la performance"
        autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
        idComentarios={26}
        entradilla={
          <>
            <p>
              Mientras celebras ese diseño pixel-perfect, tu CSS podría estar
              costándote usuarios sin que te des cuenta.{" "}
              <strong>Los datos no mienten:</strong> CSS puede representar
              hasta <strong>el 30 % del tiempo de carga inicial</strong>, y cada{" "}
              <strong>0,1 segundos</strong> de CLS significa{" "}
              <strong>un 7 % menos de conversiones</strong>.
            </p>
            <p>
              En este post te comparto cómo hemos mejorado femCoders Club de{" "}
              <strong>81 a 97 puntos</strong> en PageSpeed a lo largo de estos
              meses, y las técnicas que hemos ido aplicando y que tú también
              puedes probar en tu web.
            </p>
          </>
        }
      >
        <SeccionPost titulo="Mi caso real: femCoders Club">
          <ImagenPost
            src="/public-optimized/desktop/assets/css/pagespeed-before-after-femcoders.webp"
            alt="Dos informes de PageSpeed Insights de femcodersclub.com en ordenador: el de noviembre de 2024 da 81 en rendimiento y el de agosto de 2025, 97."
            pie="PageSpeed Insights: de 81 a 97. Optimización real de femCoders Club."
          />

          <p>
            <strong>¿El resultado?</strong> +16 puntos mejorando
            progresivamente con las técnicas que te comparto aquí.
          </p>

          <p>
            <em>
              En los próximos minutos vas a ver qué cambios han tenido más
              impacto y cómo puedes aplicarlos.
            </em>
          </p>
        </SeccionPost>

        <SeccionPost titulo="Los selectores que están matando tu performance">
          <p><strong>Anatomía de los villanos del CSS:</strong></p>

          <h3>El selector glotón: devora CPU</h3>
          <CodigoPost lenguaje="CSS">{`/* Estos selectores son lentos de procesar */
div > ul > li > a:hover { }
[class*="widget"] .title { }
.sidebar .content .post .meta .author a:hover { }`}</CodigoPost>

          <h3>El selector inteligente: rápido y directo</h3>
          <CodigoPost lenguaje="CSS">{`/* Selectores optimizados */
.nav-link:hover { }
.widget-title { }
.author-link:hover { }`}</CodigoPost>

          <h3>Cómo medir el impacto real</h3>
          <p><strong>Chrome DevTools → Performance tab:</strong></p>
          <ul>
            <li>Graba mientras cargas tu página.</li>
            <li>Busca «Recalculate Style» en el timeline.</li>
            <li>Identifica los selectores que tardan 50 ms.</li>
          </ul>

          <p>
            Si quieres profundizar en cómo funcionan los diferentes tipos de
            selectores y su especificidad, echa un vistazo a nuestro post
            completo:{" "}
            <Link to="/recursos/css/selectores-css">
              Selectores CSS: guía completa con ejemplos prácticos
            </Link>
            .
          </p>

          <NotaPost titulo="Mindset">
            <p>
              Performance CSS no se trata de escribir menos código, sino de
              escribirlo con intención. Selectores simples = más velocidad =
              mejor UX.
            </p>
          </NotaPost>
        </SeccionPost>

        <SeccionPost titulo="Critical CSS: la técnica que puede ahorrarte 1,2 segundos">
          <h3>El problema: render blocking</h3>
          <p>Tu CSS completo bloquea el renderizado hasta que se descarga completamente.</p>

          <h3>La solución: Critical CSS + lazy loading</h3>
          <p><strong>Estrategia ninja, carga diferida:</strong></p>

          <CodigoPost lenguaje="HTML">{`<!-- Critical CSS inline en el <head> -->
<style>
  .hero { display: flex; justify-content: center; }
  .nav { position: fixed; top: 0; }
</style>

<!-- CSS no crítico cargado después -->
<link rel="preload" href="non-critical.css" as="style"
      onload="this.onload=null;this.rel='stylesheet'">`}</CodigoPost>

          <h3>Herramientas que funcionan</h3>
          <TarjetasPost
            columnas={3}
            tarjetas={[
              {
                titulo: "Manual",
                texto: "Para sitios pequeños, identifica los estilos above-the-fold.",
              },
              {
                titulo: "Automatizado",
                texto: "Critters o Critical para automatizar el proceso.",
              },
              {
                titulo: "SPA",
                texto: "Code splitting por rutas (React.lazy, componentes asíncronos de Vue).",
              },
            ]}
          />

          <p>
            <strong>Métricas de éxito:</strong> una reducción de 1-2 s en el FCP
            (First Contentful Paint).
          </p>
        </SeccionPost>

        <SeccionPost titulo="De 15 fps a 60 fps: la magia de la GPU">
          <h3>Layer promotion estratégica</h3>
          <p><strong>El truco que cambia todo:</strong></p>

          <CodigoPost lenguaje="CSS">{`.optimized-animation {
  will-change: transform; /* Avisa al browser */
  transform: translateZ(0); /* Force GPU layer */
  transition: transform 0.3s ease;
}

/* Evita esto - Paint operations costosas */
.slow-animation {
  transition: width 0.3s ease; /* ❌ Triggers layout */
  transition: background-color 0.3s; /* ❌ Triggers paint */
}`}</CodigoPost>

          <h3>Animation performance budget</h3>
          <p>
            <strong>Objetivo: 16,67 ms por frame</strong> para mantener 60 fps.
          </p>

          <h3>Debugging avanzado</h3>
          <p><strong>Chrome DevTools → Performance:</strong></p>
          <ul>
            <li>Activa «Paint» en los ajustes.</li>
            <li>Graba una animación.</li>
            <li>Busca barras rojas (layout thrashing).</li>
            <li>Identifica los repaints innecesarios.</li>
          </ul>
        </SeccionPost>

        <SeccionPost titulo="Las armas secretas del CSS performance">
          <h3>CSS containment: aísla y vencerás</h3>
          <CodigoPost lenguaje="CSS">{`.component {
  contain: layout style paint;
  /* Aísla este componente del resto del DOM */
}

.card-list {
  contain: layout;
  /* Solo layout containment para listas */
}`}</CodigoPost>

          <h3>Font loading strategies</h3>
          <CodigoPost lenguaje="CSS">{`@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* Muestra fallback inmediatamente */
}`}</CodigoPost>

          <h3>CSS purging en acción</h3>
          <CodigoPost lenguaje="Bash">{`# PurgeCSS elimina estilos no usados
npx purgecss --css style.css --content index.html --output clean.css`}</CodigoPost>
          <p>
            <strong>Resultado típico:</strong> de 847 KB a 180 KB (un 79 % menos).
          </p>

          <p>
            Si quieres profundizar en CSS Custom Properties y su impacto en
            performance, echa un vistazo a nuestro análisis detallado:{" "}
            <Link to="/recursos/css/css-variables-vs-sass">
              CSS Variables vs Sass: ¿cuál elegir en 2025?
            </Link>
          </p>
        </SeccionPost>

        <SeccionPost titulo="Tu arsenal de herramientas 2025">
          <h3>Stack completo de medición</h3>
          <TarjetasPost
            tarjetas={[
              { titulo: "PageSpeed Insights", texto: "Métricas reales de usuarios." },
              { titulo: "Lighthouse CI", texto: "Monitoreo continuo automatizado." },
              { titulo: "Chrome DevTools", texto: "Las pestañas Performance y Rendering." },
              { titulo: "WebPageTest", texto: "Análisis profundo con filmstrip." },
            ]}
          />

          <h3>Real User Monitoring</h3>
          <CodigoPost lenguaje="JavaScript">{`// Mide Core Web Vitals en producción
import {onCLS, onINP, onFCP, onLCP, onTTFB} from 'web-vitals';

onCLS(console.log);
onINP(console.log);
onFCP(console.log);
onLCP(console.log);
onTTFB(console.log);`}</CodigoPost>

          <NotaPost titulo="Mindset">
            <p>
              No optimices para las métricas, optimiza para tus usuarios. Las
              métricas son solo el termómetro.
            </p>
          </NotaPost>
        </SeccionPost>

        <SeccionPost titulo="Casos de éxito que puedes replicar">
          <h3>Nuestro journey: femCoders Club</h3>
          <TarjetasPost
            tarjetas={[
              {
                titulo: "Punto de partida",
                texto: "Performance 81, con algunos problemas de render-blocking.",
              },
              {
                titulo: "Técnicas que fuimos aplicando",
                texto: "Critical CSS, optimización de selectores y estrategia de carga de fuentes.",
              },
              {
                titulo: "Resultado actual",
                texto: "Performance 97, mucho mejor que antes.",
              },
              {
                titulo: "Aprendizaje",
                texto: "Una mejora notable en Core Web Vitals y en la experiencia de usuario.",
              },
            ]}
          />

          <h3>Patrones que veo en auditorías reales</h3>
          <ul>
            <li><strong>El 89 % de los sitios</strong> tiene un 30 % de CSS sin usar.</li>
            <li><strong>Los selectores complejos</strong> añaden 200-400 ms de parse time.</li>
            <li><strong>Un Critical CSS mal implementado</strong> cuesta 1-2 s de LCP.</li>
            <li><strong>Las animaciones sin GPU</strong> causan un jank perceptible.</li>
          </ul>
        </SeccionPost>

        <SeccionPost titulo="Próximo desafío: mobile performance">
          <h3>El reto que viene</h3>
          <p>
            Los resultados que hemos compartido son principalmente de{" "}
            <strong>desktop performance</strong>. Sabemos que la verdadera
            prueba de fuego está en <strong>mobile</strong>, donde las
            condiciones son mucho más exigentes:
          </p>

          <ul>
            <li><strong>CPU más limitada:</strong> los selectores complejos impactan 3 veces más.</li>
            <li><strong>Conexiones más lentas:</strong> cada KB de CSS cuenta el doble.</li>
            <li><strong>Memoria restringida:</strong> la layer promotion debe ser más estratégica.</li>
          </ul>

          <h3>Nuestro compromiso</h3>
          <p>
            <strong>
              La optimización mobile de femCoders Club será nuestro siguiente
              paso.
            </strong>{" "}
            Nos comprometemos a documentar todo el proceso y mostrar los
            resultados reales: tanto los éxitos como los desafíos que
            encontremos en el camino.
          </p>

          <NotaPost titulo="Próximamente">
            <p>
              «Mobile CSS Performance: el journey real de femCoders Club».
              Seguiremos compartiendo métricas, técnicas específicas y lessons
              learned.
            </p>
          </NotaPost>
        </SeccionPost>

        <SeccionPost titulo="Tu plan de acción: el challenge de 7 días">
          <p>
            <button type="button" className="fc-boton" onClick={downloadActionPlanPDF}>
              <Download aria-hidden="true" />
              Descargar el challenge de 7 días
            </button>
          </p>
          <p>Descarga tu checklist personalizable en formato texto.</p>

          <h3>Checklist paso a paso</h3>
          <PasosPost
            pasos={[
              {
                etiqueta: "Día 1",
                titulo: "Análisis de CSS no usado",
                puntos: [
                  "Usa Chrome DevTools → Coverage tab.",
                  "Objetivo: menos del 20 % de código sin usar.",
                ],
              },
              {
                etiqueta: "Día 2",
                titulo: "Audit de selectores complejos",
                puntos: [
                  "Identifica los selectores con 3 niveles o más.",
                  "Simplifica los más problemáticos.",
                ],
              },
              {
                etiqueta: "Día 3",
                titulo: "Implementación de Critical CSS",
                puntos: ["Estilos above-the-fold en línea.", "Lazy load para el resto."],
              },
              {
                etiqueta: "Día 4",
                titulo: "Optimización de animaciones",
                puntos: ["Únicamente transform y opacity.", "Uso estratégico de will-change."],
              },
              {
                etiqueta: "Día 5",
                titulo: "Font loading strategy",
                puntos: [<code key="swap">font-display: swap</code>, "Preload de las fuentes críticas."],
              },
              {
                etiqueta: "Día 6",
                titulo: "Testing y métricas",
                puntos: ["Comparación de Lighthouse antes y después.", "Pruebas en dispositivos reales."],
              },
              {
                etiqueta: "Día 7",
                titulo: "Monitoreo continuo",
                puntos: ["Lighthouse CI o similar.", "Real User Monitoring."],
              },
            ]}
          />
        </SeccionPost>

        <SeccionPost titulo="Tabla resumen de impacto">
          <TablaPost descripcion="Impacto, dificultad, tiempo y herramienta de cada técnica de optimización">
            <table>
              <thead>
                <tr>
                  <th>Técnica</th>
                  <th>Impacto estimado</th>
                  <th>Dificultad</th>
                  <th>Tiempo</th>
                  <th>Herramienta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Purgar CSS no usado</td>
                  <td>-20/30 % CSS size</td>
                  <td>Fácil</td>
                  <td>30 min</td>
                  <td>PurgeCSS</td>
                </tr>
                <tr>
                  <td>Implementar Critical CSS</td>
                  <td>-1,2 s FCP</td>
                  <td>Media</td>
                  <td>2 h</td>
                  <td>Critters</td>
                </tr>
                <tr>
                  <td>Selector optimization</td>
                  <td>-15 % parse time</td>
                  <td>Fácil</td>
                  <td>1 h</td>
                  <td>Manual audit</td>
                </tr>
                <tr>
                  <td>Layer promotion</td>
                  <td>+60 fps smooth</td>
                  <td>Media</td>
                  <td>45 min</td>
                  <td>DevTools</td>
                </tr>
                <tr>
                  <td>Font loading strategy</td>
                  <td>-800 ms render block</td>
                  <td>Difícil</td>
                  <td>3 h</td>
                  <td>font-display</td>
                </tr>
                <tr>
                  <td>CSS Containment</td>
                  <td>-25 % layout time</td>
                  <td>Media</td>
                  <td>1,5 h</td>
                  <td>Manual</td>
                </tr>
              </tbody>
            </table>
          </TablaPost>
        </SeccionPost>

        <SeccionPost titulo="Próximos pasos">
          <h3>Pasa a la acción</h3>
          <TarjetasPost
            columnas={3}
            tarjetas={[
              { titulo: "Audita tu CSS ahora", texto: "Usa PageSpeed Insights en tu web." },
              { titulo: "Implementa una técnica hoy", texto: "Empieza por purgar el CSS no usado." },
              { titulo: "Únete al #7DaysCSSChallenge", texto: "Comparte tu progreso." },
            ]}
          />

          <h3>Recursos relacionados</h3>
          <TarjetasPost
            tarjetas={[
              {
                titulo: "Sass al siguiente nivel: técnicas avanzadas",
                texto: "Optimiza tu workflow de desarrollo.",
                enlace: "/recursos/css/sass-next-level",
              },
              {
                titulo: "CSS Variables vs Sass: ¿cuál elegir en 2025?",
                texto: "Análisis profundo de performance.",
                enlace: "/recursos/css/css-variables-vs-sass",
              },
            ]}
          />

          <NotaPost titulo="Mindset final">
            <p>
              Performance no es una restricción creativa, es el canvas donde tu
              creatividad puede brillar sin límites. Cada milisegundo que
              ahorras es una oportunidad más para que tus usuarios se enamoren
              de tu producto.
            </p>
          </NotaPost>

          <p>
            <strong>¿Cuál va a ser tu primera optimización?</strong> Cuéntanoslo
            en los comentarios.
          </p>
        </SeccionPost>
      </PlantillaPost>
    </>
  );
};

export default CssPerformancePost;
