import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const CssPerformancePost: React.FC = () => {
  const postId = 26;
  const publicationDate = "02 de agosto de 2025";

  const downloadActionPlanPDF = () => {
    const actionPlanContent = `
PLAN DE ACCIÓN: EL CHALLENGE DE 7 DÍAS
CSS Performance Optimization - femCoders Club

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
    <div className="blog-post">
      <Helmet>
        <title>El Lado Oculto del CSS: Cómo tus estilos están saboteando la performance | femCoders Club</title>
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
          content="El Lado Oculto del CSS: Cómo tus estilos están saboteando la performance | femCoders Club"
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
          content="El Lado Oculto del CSS: Optimización de Performance Web"
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

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/css/CSS-Performance-Optimization.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/css/CSS-Performance-Optimization.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/css/CSS-Performance-Optimization.webp"
            alt="CSS Performance Optimization - De 81 a 97 PageSpeed femCoders Club"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        El Lado Oculto del CSS
        <br />
        Cómo tus estilos están saboteando la performance
      </h1>

      <ShareButtons path="/recursos/css/css-performance-optimization" title="El Lado Oculto del CSS: Cómo tus estilos están saboteando la performance" />

      <p className="intro-text">
        Mientras celebras ese diseño pixel-perfect, tu CSS podría estar costándote usuarios sin que te des cuenta. 
        <strong> Los datos no mienten:</strong> CSS puede representar hasta <strong>30% del tiempo de carga inicial</strong>, 
        y cada <strong>0.1 segundos</strong> de CLS significa <strong>7% menos conversiones</strong>.
      </p>

      <p className="intro-text">
        En este post te comparto cómo hemos mejorado femCoders Club de <strong>81 a 97 puntos</strong> en PageSpeed 
        a lo largo de estos meses, y las técnicas que hemos ido aplicando y que tú también puedes probar en tu web.
      </p>

      <div className="highlight-box">
        <h2>🎯 Mi Caso Real: femCoders Club</h2>
        
        <div className="post-image-container">
          <picture>
            <source
              srcSet="/public-optimized/mobile/assets/css/pagespeed-before-after-femcoders.webp"
              media="(max-width: 768px)"
            />
            <source
              srcSet="/public-optimized/desktop/assets/css/pagespeed-before-after-femcoders.webp"
              media="(min-width: 769px)"
            />
            <img
              src="/public-optimized/desktop/assets/css/pagespeed-before-after-femcoders.webp"
              alt="PageSpeed Performance: De 81 a 97 - femCoders Club optimization journey"
              className="blog-post-image"
              loading="lazy"
            />
          </picture>
        </div>
        <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "1rem" }}>
          PageSpeed Insights: De 81 a 97 - Optimización real de femCoders Club
        </p>

        <p>
          <strong>¿El resultado?</strong> +16 puntos mejorando progresivamente con las técnicas que te comparto aquí.
        </p>

        <p>
          <em>En los próximos minutos vas a ver qué cambios han tenido más impacto y cómo puedes aplicarlos.</em>
        </p>
      </div>

      <div className="highlight-box">
        <h2>🐌 Los Selectores que Están Matando tu Performance</h2>
        <p><strong>Anatomía de los villanos del CSS:</strong></p>

        <h3>❌ El Selector Glotón - Devora CPU</h3>
        <pre className="code-block bg3">
{`/* Estos selectores son lentos de procesar */
div > ul > li > a:hover { }
[class*="widget"] .title { }
.sidebar .content .post .meta .author a:hover { }`}
        </pre>

        <h3>✅ El Selector Inteligente - Rápido y directo</h3>
        <pre className="code-block bg3">
{`/* Selectores optimizados */
.nav-link:hover { }
.widget-title { }
.author-link:hover { }`}
        </pre>

        <h3>Cómo Medir el Impacto Real</h3>
        <p><strong>Chrome DevTools → Performance tab:</strong></p>
        <ul>
          <li>Graba mientras cargas tu página</li>
          <li>Busca "Recalculate Style" en el timeline</li>
          <li>Identifica selectores que toman 50ms</li>
        </ul>

        <p>
          <em>Si quieres profundizar en cómo funcionan los diferentes tipos de selectores y su especificidad, echa un vistazo a nuestro post completo: </em>
          <a
            href="https://www.femcodersclub.com/recursos/css/selectores-css"
            className="highlight-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Selectores CSS: Guía Completa con Ejemplos Prácticos
          </a>
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "20px",
          borderLeft: "4px solid #4737bb"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>🧠 MINDSET:</strong> <em>Performance CSS no se trata de escribir menos código, sino de escribirlo con intención. 
            Selectores simples = más velocidad = mejor UX.</em>
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>⚡ Critical CSS: La Técnica que Puede Ahorrarte 1.2 Segundos</h2>

        <h3>El Problema: Render Blocking</h3>
        <p>Tu CSS completo bloquea el renderizado hasta que se descarga completamente.</p>

        <h3>La Solución: Critical CSS + Lazy Loading</h3>
        <p><strong>Estrategia ninja - Carga diferida:</strong></p>

        <pre className="code-block bg3">
{`<!-- Critical CSS inline en el <head> -->
<style>
  .hero { display: flex; justify-content: center; }
  .nav { position: fixed; top: 0; }
</style>

<!-- CSS no crítico cargado después -->
<link rel="preload" href="non-critical.css" as="style" 
      onload="this.onload=null;this.rel='stylesheet'">`}
        </pre>

        <h3>Herramientas que Funcionan</h3>
        <ul>
          <li><strong>Manual:</strong> Para sitios pequeños, identifica estilos above-the-fold</li>
          <li><strong>Automatizado:</strong> Critters, Critical para automatizar el proceso</li>
          <li><strong>SPAs:</strong> Code splitting por rutas (React.lazy, Vue async components)</li>
        </ul>

        <p><strong>Métricas de éxito:</strong> Reducción de 1-2s en FCP (First Contentful Paint)</p>
      </div>

      <div className="highlight-box">
        <h2>🎬 De 15fps a 60fps: La Magia del GPU</h2>

        <h3>Layer Promotion Estratégica</h3>
        <p><strong>El truco que cambia todo:</strong></p>

        <pre className="code-block bg3">
{`.optimized-animation {
  will-change: transform; /* Avisa al browser */
  transform: translateZ(0); /* Force GPU layer */
  transition: transform 0.3s ease;
}

/* Evita esto - Paint operations costosas */
.slow-animation {
  transition: width 0.3s ease; /* ❌ Triggers layout */
  transition: background-color 0.3s; /* ❌ Triggers paint */
}`}
        </pre>

        <h3>Animation Performance Budget</h3>
        <p><strong>Target: 16.67ms por frame</strong> para mantener 60fps</p>

        <h3>Debugging Avanzado</h3>
        <p><strong>Chrome DevTools → Performance:</strong></p>
        <ul>
          <li>Enable "Paint" en settings</li>
          <li>Graba una animación</li>
          <li>Busca barras rojas (layout thrashing)</li>
          <li>Identifica repaints innecesarios</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🔧 Las Armas Secretas del CSS Performance</h2>

        <h3>CSS Containment - Aísla y Vencerás</h3>
        <pre className="code-block bg3">
{`.component {
  contain: layout style paint;
  /* Aísla este componente del resto del DOM */
}

.card-list {
  contain: layout;
  /* Solo layout containment para listas */
}`}
        </pre>

        <h3>Font Loading Strategies</h3>
        <pre className="code-block bg3">
{`@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* Muestra fallback inmediatamente */
}`}
        </pre>

        <h3>CSS Purging en Acción</h3>
        <pre className="code-block bg3">
{`# PurgeCSS elimina estilos no usados
npx purgecss --css style.css --content index.html --output clean.css`}
        </pre>
        <p><strong>Resultado típico:</strong> De 847KB a 180KB (-79% size)</p>

        <p>
          <em>Si quieres profundizar en CSS Custom Properties y su impacto en performance, echa un vistazo a nuestro análisis detallado: </em>
          <a
            href="https://www.femcodersclub.com/recursos/css/css-variables-vs-sass"
            className="highlight-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Variables vs Sass: ¿Cuál elegir en 2025?
          </a>
        </p>
      </div>

      <div className="highlight-box">
        <h2>🛠️ Tu Arsenal de Herramientas 2025</h2>

        <h3>Stack Completo de Medición</h3>
        <ul>
          <li><strong>PageSpeed Insights:</strong> Métricas reales de usuarios</li>
          <li><strong>Lighthouse CI:</strong> Monitoreo continuo automatizado</li>
          <li><strong>Chrome DevTools:</strong> Performance y Rendering tabs</li>
          <li><strong>WebPageTest:</strong> Análisis profundo con filmstrip</li>
        </ul>

        <h3>Real User Monitoring</h3>
        <pre className="code-block bg3">
{`// Mide Core Web Vitals en producción
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

getCLS(console.log);
getFID(console.log);  
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);`}
        </pre>

        <div style={{
          backgroundColor: "rgba(234, 79, 51, 0.1)",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "20px",
          borderLeft: "4px solid #ea4f33"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>🧠 MINDSET:</strong> <em>No optimices para las métricas, optimiza para tus usuarios. 
            Las métricas son solo el termómetro.</em>
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>📊 Casos de Éxito que Puedes Replicar</h2>

        <h3>Nuestro Journey: femCoders Club</h3>
        <ul>
          <li><strong>Punto de partida:</strong> Performance 81, algunos render-blocking issues</li>
          <li><strong>Técnicas que fuimos aplicando:</strong> Critical CSS, selector optimization, font loading strategy</li>
          <li><strong>Resultado actual:</strong> Performance 97, mucho mejor que antes</li>
          <li><strong>Aprendizaje:</strong> Mejora notable en Core Web Vitals y experiencia de usuario</li>
        </ul>

        <h3>Patrones que Veo en Auditorías Reales</h3>
        <ul>
          <li><strong>89% de sitios</strong> tienen 30% CSS no usado</li>
          <li><strong>Selectores complejos</strong> añaden 200-400ms parse time</li>
          <li><strong>Critical CSS mal implementado</strong> cuesta 1-2s LCP</li>
          <li><strong>Animaciones sin GPU</strong> causan jank perceptible</li>
        </ul>
      </div>
 <div className="highlight-box">
        <h2>📱 Próximo Desafío: Mobile Performance</h2>

        <h3>El Reto que Viene</h3>
        <p>
          Los resultados que hemos compartido son principalmente de <strong>desktop performance</strong>. 
          Sabemos que la verdadera prueba de fuego está en <strong>mobile</strong>, donde las condiciones son mucho más exigentes:
        </p>

        <ul>
          <li><strong>CPU más limitada</strong> - Los selectores complejos impactan 3x más</li>
          <li><strong>Conexiones más lentas</strong> - Cada KB de CSS cuenta el doble</li>
          <li><strong>Memoria restringida</strong> - Layer promotion debe ser más estratégica</li>
        </ul>

        <h3>Nuestro Compromiso</h3>
        <p>
          <strong>La optimización mobile de femCoders Club será nuestro siguiente paso.</strong> 
          Nos comprometemos a documentar todo el proceso y mostrar los resultados reales - 
          tanto los éxitos como los desafíos que encontremos en el camino.
        </p>

        <div style={{
          backgroundColor: "rgba(234, 179, 51, 0.1)",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "20px",
          borderLeft: "4px solid #eab333"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>📱 PRÓXIMAMENTE:</strong> <em>"Mobile CSS Performance: El journey real de femCoders Club" 
            - Seguiremos compartiendo métricas, técnicas específicas y lessons learned.</em>
          </p>
        </div>
      </div>
      <div className="highlight-box">
        <h2>📋 Tu Plan de Acción: El Challenge de 7 Días</h2>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <button 
            onClick={downloadActionPlanPDF}
            style={{
              backgroundColor: "#4737bb",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#3d2ea1"}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#4737bb"}
          >
            📄 Descargar Challenge de 7 Días
          </button>
          <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "8px" }}>
            Descarga tu checklist personalizable en formato texto
          </p>
        </div>

        <h3>Checklist Paso a Paso</h3>

        <p><strong>Día 1:</strong> 🔍 <strong>Análisis de CSS no usado</strong></p>
        <ul>
          <li>Usa Chrome DevTools → Coverage tab</li>
          <li>Target: &lt;20% código no usado</li>
        </ul>

        <p><strong>Día 2:</strong> 🎯 <strong>Audit de selectores complejos</strong></p>
        <ul>
          <li>Identifica selectores con 3 niveles</li>
          <li>Simplifica los más problemáticos</li>
        </ul>

        <p><strong>Día 3:</strong> ⚡ <strong>Implementación Critical CSS</strong></p>
        <ul>
          <li>Inline estilos above-the-fold</li>
          <li>Lazy load el resto</li>
        </ul>

        <p><strong>Día 4:</strong> 🎬 <strong>Optimización de animaciones</strong></p>
        <ul>
          <li>Transform y opacity únicamente</li>
          <li>will-change strategic usage</li>
        </ul>

        <p><strong>Día 5:</strong> 🔤 <strong>Font loading strategy</strong></p>
        <ul>
          <li>font-display: swap</li>
          <li>Preload fonts críticas</li>
        </ul>

        <p><strong>Día 6:</strong> 🧪 <strong>Testing y métricas</strong></p>
        <ul>
          <li>Before/after Lighthouse comparison</li>
          <li>Real device testing</li>
        </ul>

        <p><strong>Día 7:</strong> 📊 <strong>Monitoreo continuo setup</strong></p>
        <ul>
          <li>Lighthouse CI o similar</li>
          <li>Real User Monitoring</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🧪 Tabla Resumen de Impacto</h2>

        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Técnica</th>
                <th>Impacto Estimado</th>
                <th>Dificultad</th>
                <th>Tiempo</th>
                <th>Herramienta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Purgar CSS no usado</td>
                <td>-20/30% CSS size</td>
                <td>🟢 Fácil</td>
                <td>30min</td>
                <td>PurgeCSS</td>
              </tr>
              <tr>
                <td>Implementar Critical CSS</td>
                <td>-1.2s FCP</td>
                <td>🟡 Media</td>
                <td>2h</td>
                <td>Critters</td>
              </tr>
              <tr>
                <td>Selector optimization</td>
                <td>-15% parse time</td>
                <td>🟢 Fácil</td>
                <td>1h</td>
                <td>Manual audit</td>
              </tr>
              <tr>
                <td>Layer promotion</td>
                <td>+60fps smooth</td>
                <td>🟡 Media</td>
                <td>45min</td>
                <td>DevTools</td>
              </tr>
              <tr>
                <td>Font loading strategy</td>
                <td>-800ms render block</td>
                <td>🔴 Difícil</td>
                <td>3h</td>
                <td>font-display</td>
              </tr>
              <tr>
                <td>CSS Containment</td>
                <td>-25% layout time</td>
                <td>🟡 Media</td>
                <td>1.5h</td>
                <td>Manual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="highlight-box">
        <h2>🎯 Próximos Pasos</h2>

        <h3>CTAs Accionables:</h3>
        <ul>
          <li><strong>🔥 Audita tu CSS ahora</strong> → Usa PageSpeed Insights en tu web</li>
          <li><strong>⚡ Implementa una técnica hoy</strong> → Empieza por purgar CSS no usado</li>
          <li><strong>🚀 Únete al #7DaysCSSChallenge</strong> → Comparte tu progreso</li>
        </ul>

        <h3>📚 Recursos Relacionados:</h3>
        <ul>
          <li>
            <strong>
              <a
                href="https://www.femcodersclub.com/recursos/css/sass-next-level"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sass al Siguiente Nivel: Técnicas Avanzadas
              </a>
            </strong> - Optimiza tu workflow de desarrollo
          </li>
          <li>
            <strong>
              <a
                href="https://www.femcodersclub.com/recursos/css/css-variables-vs-sass"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Variables vs Sass: ¿Cuál elegir en 2025?
              </a>
            </strong> - Análisis profundo de performance
          </li>
        </ul>
      </div>

      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          borderLeft: "5px solid #4737bb"
        }}>
          <p style={{ margin: "0", fontSize: "1.2rem", fontStyle: "italic" }}>
            <strong>🧠 MINDSET FINAL:</strong> <em>Performance no es una restricción creativa, es el canvas donde tu creatividad puede brillar sin límites. 
            Cada milisegundo que ahorras es una oportunidad más para que tus usuarios se enamoren de tu producto.</em>
          </p>
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: "1.3rem", marginTop: "2rem" }}>
        <strong>¿Cuál va a ser tu primera optimización? 👇</strong>
      </p>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de FemCoders Club</p>
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
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

export default CssPerformancePost;