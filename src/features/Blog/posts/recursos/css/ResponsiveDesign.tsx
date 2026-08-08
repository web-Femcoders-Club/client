import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const ResponsiveDesign: React.FC = () => {
  const postId = 22;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          Responsive Design: De Principiante a Experta con Media Queries | FemCoders Club
        </title>
        <meta
          name="description"
          content="Guía completa de responsive design y media queries desde desktop-first hasta mobile-first. Aprende breakpoints, técnicas modernas y mejores prácticas con ejemplos reales."
        />
        <meta
          name="keywords"
          content="responsive design, media queries, mobile-first, desktop-first, breakpoints CSS, diseño adaptativo, comunidad femcoders club, desarrollo web responsive, CSS viewport, clamp, container queries"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/responsive-design"
        />
        
        {/* Directivas para motores de búsqueda */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Responsive Design: De Principiante a Experta con Media Queries"
        />
        <meta
          property="og:description"
          content="Domina el responsive design desde conceptos básicos hasta técnicas avanzadas. Comparación desktop-first vs mobile-first con ejemplos prácticos."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/responsive-design"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/ResponsiveDesign.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Responsive Design: De Principiante a Experta"
        />
        <meta
          name="twitter:description"
          content="Aprende responsive design con media queries, mobile-first vs desktop-first, breakpoints y técnicas modernas con ejemplos reales."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/ResponsiveDesign.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-01-04T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Responsive Design" />
        <meta property="article:tag" content="Media Queries" />
        <meta property="article:tag" content="Mobile-First" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/css/ResponsiveDesign.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/css/ResponsiveDesign.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/css/ResponsiveDesign.webp"
            alt="Responsive Design - Sitio web adaptándose de desktop a tablet y móvil"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Responsive Design<br/> De Principiante a Experta
      </h1>

      <ShareButtons path="/recursos/css/responsive-design" title="Responsive Design: De Principiante a Experta con Media Queries" />

      <div className="intro-text">
        <p>
          El responsive design es una metodología fundamental en el desarrollo web moderno que permite que nuestros sitios se adapten perfectamente a cualquier dispositivo. En este artículo de femCodersClub, exploraremos desde los conceptos básicos hasta las técnicas más avanzadas, con ejemplos visuales de nuestro proyecto ResponsiveShowcase.
        </p>
      </div>
      <div className="highlight-box">
        <h2>¿Qué es Responsive Design y por qué es crucial?</h2>
        <p>
          El responsive design es una metodología de diseño web que hace que las páginas se adapten automáticamente a diferentes tamaños de pantalla y dispositivos. Con más del 60% del tráfico web proveniente de dispositivos móviles, es imprescindible que nuestros sitios ofrezcan una experiencia óptima en todos los dispositivos.
        </p>
        <br />
        <h3>Beneficios clave del responsive design:</h3>
        <ul>
          <li><strong>Mejor experiencia de usuario:</strong> Los visitantes pueden navegar cómodamente desde cualquier dispositivo</li>
          <li><strong>SEO mejorado:</strong> Google prioriza sitios mobile-friendly en sus resultados</li>
          <li><strong>Mantenimiento eficiente:</strong> Una sola base de código para todos los dispositivos</li>
          <li><strong>Mayor alcance:</strong> Accesible para usuarios con diferentes tipos de dispositivos</li>
          <li><strong>Mejor conversión:</strong> Usuarios satisfechos tienen más probabilidad de completar acciones</li>
        </ul>

        <div className="styled-paragraph" style={{textAlign: "center", marginTop: "2rem"}}>
          <span>
            <a
              href="https://github.com/femcodersclub/ResponsiveShowcase"
              className="highlight underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌟 Explora nuestro proyecto ResponsiveShowcase en GitHub 📂
            </a>
          </span>
          <br />
          <span>
            <a 
              href="https://femcodersclub.github.io/ResponsiveShowcase/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ejemplos en vivo
            </a>
          </span>
        </div>
      </div>

      <div className="highlight-box">
        <h2>📱 Nivel Básico: Desktop-First vs Mobile-First</h2>
        <p>
          Existen dos enfoques principales para implementar responsive design. Analicemos cada uno con ejemplos visuales de nuestro proyecto <strong>ResponsiveShowcase. </strong>
        </p>
<br />
        <h3>🖥️ Enfoque Desktop-First (Tradicional)</h3>
        <br />
        <p>
          El enfoque desktop-first diseña primero para pantallas grandes y luego adapta hacia dispositivos más pequeños usando media queries con <code>max-width</code>. Observemos cómo femCodersClub implementa este enfoque:
        </p>
        <div className="post-image-container">
          <img
            src="/public-optimized/desktop/assets/css/femcoders-desktop-first.webp"
            alt="femCodersClub adaptándose de desktop a tablet y móvil con enfoque desktop-first"
            className="blog-post-image"
            loading="lazy"
          />
        </div>
        
        <pre className="code-block bg3">
{`/* DESKTOP-FIRST: Empezamos con desktop */
.features-grid {
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
}

/* Adaptamos hacia móvil con max-width */
@media screen and (max-width: 767px) {
  .features-grid {
    grid-template-columns: 1fr; /* 1 columna en móvil */
  }
}`}
        </pre>

        <h3>📱 Enfoque Mobile-First (Moderno)</h3>
        <p>
          El enfoque mobile-first diseña primero para dispositivos móviles y luego mejora progresivamente hacia pantallas más grandes usando media queries con <code>min-width</code>.
        </p>

        <div className="post-image-container">
          <img
            src="/public-optimized/desktop/assets/css/mobile-first-example.webp"
            alt="Ejemplo de diseño mobile-first mostrando la progresión de móvil a desktop"
            className="blog-post-image"
            loading="lazy"
          />
        </div>

        <pre className="code-block bg3">
{`/* MOBILE-FIRST: Empezamos con móvil */
.features-grid {
  flex-direction: column; /* 1 columna por defecto */
}

/* Mejoramos para desktop con min-width */
@media screen and (min-width: 992px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  }
}`}
        </pre>

       <h3>Comparativa: Desktop-First vs Mobile-First</h3>
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>🖥️ Desktop-First</th>
                <th>📱 Mobile-First</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Filosofía de Diseño</strong></td>
                <td>Diseño para desktop, adaptar a móvil</td>
                <td>Diseño para móvil, mejorar en desktop</td>
              </tr>
              <tr>
                <td><strong>Media Queries</strong></td>
                <td>max-width (descendente)</td>
                <td>min-width (ascendente)</td>
              </tr>
              <tr>
                <td><strong>Performance Móvil</strong></td>
                <td>CSS innecesario cargado</td>
                <td>Solo CSS necesario</td>
              </tr>
              <tr>
                <td><strong>Experiencia Móvil</strong></td>
                <td>Adaptación, no optimización</td>
                <td>Nativo y optimizado</td>
              </tr>
              <tr>
                <td><strong>SEO Móvil</strong></td>
                <td>Penalización por velocidad</td>
                <td>Mejor ranking móvil</td>
              </tr>
              <tr>
                <td><strong>Casos de Uso</strong></td>
                <td>Sitios legacy, aplicaciones desktop</td>
                <td>Nuevos proyectos, sitios públicos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="performance-tip" style={{
          backgroundColor: "rgba(234, 79, 51, 0.1)",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #ea4f33"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>💡 Ejemplo real:</strong> femCodersClub utiliza un enfoque desktop-first tradicional, mientras que sitios como Stripe o Linear implementan mobile-first. En nuestro proyecto ResponsiveShowcase puedes comparar ambos enfoques lado a lado.
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>📏 Breakpoints Fundamentales</h2>
        <p>
          Los breakpoints son los puntos específicos donde el diseño cambia para adaptarse a diferentes tamaños de pantalla. Nuestro debug panel muestra cómo funcionan en tiempo real.
        </p>

        <pre className="code-block bg3">
{`/* BREAKPOINTS MOBILE-FIRST ESENCIALES */
/* Mobile: 320px+ (estilos base) */

@media screen and (min-width: 768px) {
  /* Tablets */
}

@media screen and (min-width: 992px) {
  /* Desktop */
}`}
        </pre>

        <h3>Análisis de breakpoints en frameworks populares:</h3>
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Framework</th>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>Extra Large</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bootstrap 5</strong></td>
                <td>≥576px</td>
                <td>≥768px</td>
                <td>≥992px</td>
                <td>≥1200px</td>
              </tr>
              <tr>
                <td><strong>Tailwind CSS</strong></td>
                <td>≥640px</td>
                <td>≥768px</td>
                <td>≥1024px</td>
                <td>≥1280px</td>
              </tr>
              <tr>
                <td><strong>ResponsiveShowcase</strong></td>
                <td>≥481px</td>
                <td>≥768px</td>
                <td>≥992px</td>
                <td>≥1200px</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="post-image-container">
          <img
            src="/public-optimized/desktop/assets/css/devtools-breakpoints.webp"
            alt="Chrome DevTools mostrando diferentes breakpoints en acción"
            className="blog-post-image"
            loading="lazy"
          />
          <p className="image-caption">Chrome DevTools: testing de breakpoints</p>
        </div>
      </div>

     <div className="highlight-box">
        <h2>🏗️ Nivel Intermedio: Layouts Flexibles</h2>
        
        <h3>Grid Adaptativo Inteligente</h3>
        <p>
          Una de las técnicas más poderosas en responsive design es crear grids que se adapten automáticamente según el espacio disponible. Observa cómo nuestro proyecto ResponsiveShowcase implementa esta técnica:
        </p>

        <pre className="code-block bg3">
{`/* GRID QUE SE ADAPTA AUTOMÁTICAMENTE */
.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing);
}

/* Ventajas de auto-fit + minmax():
   - Se adapta fluidamente al espacio disponible
   - Mantiene tamaño mínimo legible (400px)
   - No hay breakpoints rígidos */`}
        </pre>

        <div className="performance-tip" style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #4737bb"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>💡 ¿Quieres dominar CSS Grid?</strong> Consulta nuestro artículo completo: <a href="/recursos/css/css-grid" className="highlight underline">CSS Grid: Domina el sistema de cuadrículas en tu página web</a>
          </p>
        </div>
 <br />
        <h3>Navegación Responsive: Horizontal → Hamburguesa</h3>
       
        <p>
          La navegación es crítica en responsive design. Mira cómo evoluciona nuestra navegación de horizontal en desktop a menú hamburguesa en móvil:
        </p>

        <div className="post-image-container">
          <img
            src="/assets/css/navigation-evolution.gif"
            alt="Navegación cambiando de horizontal en desktop a hamburger en móvil"
            className="blog-post-image"
            loading="lazy"
          />
         
        </div>
<br />
        <h3>Layouts Flexibles con Flexbox</h3>
        <p>
          Flexbox es fundamental para crear componentes responsive que se adapten fluidamente. Es especialmente útil para navegaciones, barras de herramientas y layouts de una dimensión.
        </p>

        <div className="performance-tip" style={{
          backgroundColor: "rgba(234, 79, 51, 0.1)",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #ea4f33"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>🚀 Profundiza en Flexbox:</strong> Lee nuestro artículo detallado <a href="/recursos/css/flexbox" className="highlight underline">Flexbox: El poder de crear layouts flexibles</a> para dominar los layouts unidimensionales.
          </p>
        </div>
 <br />
        <h3>Combinando Grid y Flexbox para Layouts Perfectos</h3>
        <p>
          La verdadera magia del responsive design moderno ocurre cuando combinas CSS Grid para el layout principal con Flexbox para los componentes internos. Esta estrategia híbrida te da lo mejor de ambos mundos.
        </p>

        <div className="performance-tip" style={{
          backgroundColor: "rgba(130, 26, 212, 0.1)",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #821ad4"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>⚡ Estrategias avanzadas:</strong> Descubre cómo combinar ambas técnicas en nuestro artículo <a href="/recursos/css/css-grid-flexbox" className="highlight underline">Estrategias avanzadas: Combinando Grid y Flexbox en CSS</a>
          </p>
        </div>
 <br />
        <h3>Imágenes Responsivas en Acción</h3>
        <p>
          Las imágenes responsivas van más allá del simple <code>max-width: 100%</code>. Incluyen técnicas como <code>aspect-ratio</code>, <code>object-fit</code> y carga condicional según el dispositivo:
        </p>
        
        <div className="post-image-container">
          <img
            src="/public-optimized/desktop/assets/css/responsive-images.webp"
            alt="Imágenes adaptándose con diferentes aspect ratios según el dispositivo"
            className="blog-post-image"
            loading="lazy"
          />
          <p className="image-caption">Imágenes responsivas: escalado inteligente vs recorte controlado</p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>🚀 Nivel Avanzado: Técnicas Modernas</h2>
        
        <h3>Container Queries: La Evolución de las Media Queries</h3>
      <p>
  En nuestro proyecto <span><a href="https://femcodersclub.github.io/ResponsiveShowcase/" target="_blank" rel="noopener">ResponsiveShowcase</a></span> se puede observar cómo las <strong>container queries</strong> representan el futuro del responsive design. Los componentes se adaptan a <em>su contenedor</em>, no al viewport.
</p>


        <pre className="code-block bg3">
{`/* CONTAINER QUERIES: El componente se adapta a SU contenedor */
.card-container {
  container-type: inline-size;
}

@container (min-width: 350px) {
  .card {
    display: flex; /* Cambia cuando el contenedor es ≥350px */
    gap: 1rem;
  }
}`}
        </pre>

        <h3>Tipografía Fluida con clamp()</h3>
      <p>
  Con <span><a href="https://github.com/femcodersclub/ResponsiveShowcase/blob/main/styles.css#L41" target="_blank" rel="noopener">ResponsiveShowcase</a> </span> puedes observar cómo el texto escala fluidamente sin necesidad de breakpoints gracias a <code>clamp()</code>.
</p>



        <pre className="code-block bg3">
{`/* TIPOGRAFÍA QUE ESCALA AUTOMÁTICAMENTE */
.hero-title {
  font-size: clamp(1.8rem, 4.5vw, 3.5rem);
  /* Mínimo: 1.8rem, Máximo: 3.5rem, Preferido: 4.5vw */
}

/* Sin clamp() necesitarías múltiples media queries */`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>🔧 Herramientas de Desarrollo y Debugging</h2>
        
     <h3>Debug Panel en Tiempo Real</h3>
     <br/>
<p>
  El proyecto incluye un <strong>debug panel</strong> que muestra información útil como el tamaño del viewport, el breakpoint activo, el tipo de dispositivo y la orientación.  
  Puedes ver cómo está implementado en el siguiente fragmento de código: 
 <strong> <a href="https://github.com/femcodersclub/ResponsiveShowcase/blob/main/styles.css#L170" target="_blank" rel="noopener">
    Ver implementación del Debug Panel en GitHub
  </a></strong>
</p>
  <br/>
<h3>Chrome DevTools para Responsive Design</h3>
  <br/>
<p>
  Chrome DevTools es una herramienta imprescindible para testear y depurar diseño responsive.  
  Permite simular distintos dispositivos, tamaños de pantalla, resoluciones y orientaciones,  
  todo en tiempo real y sin necesidad de usar un móvil físico.  
  Además, puedes inspeccionar cómo se comportan tus media queries, container queries y layouts  
  en diferentes condiciones, lo que acelera el proceso de diseño y validación.
</p>


        <h3>Herramientas Recomendadas</h3>
        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">Responsively App</h5>
            <p>Visualiza múltiples dispositivos simultáneamente</p>
            <a href="https://responsively.app/" target="_blank" rel="noopener noreferrer">Descargar</a>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">Chrome DevTools</h5>
            <p>Device Mode (Ctrl+Shift+M) para simular dispositivos</p>
          </div>

          <div className="recurso-item">
            <h5 className="tool-title">Firefox DevTools</h5>
            <p>Excelente Responsive Design Mode</p>
          </div>
        </div>
      </div>

      <div className="highlight-box">
        <h2>⚡ Performance y Optimización</h2>
        <h3>Testing de Performance Responsive</h3>
        <br />
<p>
 <strong> <a href="https://developer.chrome.com/docs/lighthouse/overview/" target="_blank" rel="noopener">Lighthouse</a> </strong>es una herramienta integrada en Chrome que permite auditar el rendimiento, la accesibilidad y las buenas prácticas de tu sitio web, especialmente en dispositivos móviles.  <br />
  Es muy útil para detectar problemas como imágenes pesadas, tiempos de carga lentos, falta de adaptabilidad o malas prácticas en CSS y JavaScript.  <br />
  Al usar Lighthouse, puedes optimizar tu diseño responsive asegurando una experiencia rápida y eficiente en cualquier dispositivo.
</p>
  <br />


        <h3>Consejos para mejor performance en móviles</h3>
          <br />
        <ul>
          <li><strong>Optimizar imágenes:</strong> Usar formatos modernos (WebP, AVIF) y tamaños apropiados</li>
          <li><strong>Critical CSS:</strong> Cargar solo el CSS necesario para el viewport inicial</li>
          <li><strong>Lazy loading:</strong> Cargar imágenes solo cuando sean necesarias</li>
          <li><strong>Reduce HTTP requests:</strong> Combinar archivos CSS cuando sea posible</li>
          <li><strong>Respetar preferencias de usuario:</strong> <code>prefers-reduced-motion</code></li>
        </ul>

        <pre className="code-block bg3">
{`/* RESPETO POR PREFERENCIAS DE ACCESIBILIDAD */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>🌍 Casos Reales y Mejores Prácticas</h2>
        
        <h3>Análisis: femCodersClub vs Sitios Mobile-First</h3>

        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Sitio Web</th>
                <th>Enfoque</th>
                <th>Características</th>
                <th>Performance Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>femCodersClub</strong></td>
                <td>Desktop-First</td>
                <td>Navegación horizontal → hamburger<br/>Grid que se colapsa</td>
                <td>Buena con optimizaciones</td>
              </tr>
              <tr>
                <td><strong>Stripe</strong></td>
                <td>Mobile-First</td>
                <td>Diseño progresivo<br/>Componentes modulares</td>
                <td>Excelente</td>
              </tr>
              <tr>
                <td><strong>Linear</strong></td>
                <td>Mobile-First</td>
                <td>Tipografía fluida<br/>Container queries</td>
                <td>Excelente</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Checklist para responsive design perfecto</h3>
        <ul>
          <li>✅ <strong>Viewport meta tag:</strong> <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></li>
          <li>✅ <strong>Imágenes flexible:</strong> Usar <code>max-width: 100%</code> como mínimo</li>
          <li>✅ <strong>Texto legible:</strong> Minimum 16px font-size en móvil</li>
          <li>✅ <strong>Áreas táctiles:</strong> Minimum 44px para botones y enlaces</li>
          <li>✅ <strong>Testing real:</strong> Probar en dispositivos físicos</li>
          <li>✅ <strong>Performance:</strong> Optimizar para conexiones lentas</li>
          <li>✅ <strong>Accesibilidad:</strong> Considerar lectores de pantalla</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🚀 Proyecto ResponsiveShowcase: Tu Laboratorio de Aprendizaje</h2>
        <p>
          Hemos creado un proyecto completo que implementa todas las técnicas que hemos cubierto en este artículo. Es tu laboratorio personal para experimentar y aprender.
        </p>

        <div className="post-image-container">
          <img
            src="/public-optimized/desktop/assets/css/responsiveshowcase-overview.webp"
            alt="Vista general del proyecto ResponsiveShowcase con todas sus características"
            className="blog-post-image"
            loading="lazy"
          />
        </div>
<br />
        <h3>¿Qué encontrarás en el proyecto?</h3>
        <br />
        <ul>
          <li><strong>Comparación Desktop-First vs Mobile-First:</strong> Dos versiones del mismo diseño</li>
          <li><strong>Debug panel interactivo:</strong> Información en tiempo real sobre breakpoints</li>
          <li><strong>Ejemplos de Grid adaptativo:</strong> De 4 → 2 → 1 columna</li>
          <li><strong>Navegación responsive:</strong> Horizontal → hamburger</li>
          <li><strong>Tipografía fluida:</strong> Implementación con clamp()</li>
          <li><strong>Container queries:</strong> Ejemplos funcionando</li>
          <li><strong>Documentación completa:</strong> README con explicaciones detalladas</li>
        </ul>
<br />
        <h3>Cómo usar el proyecto para aprender</h3>
        <br />
        <ol>
          <li><strong>Clona el repositorio:</strong> <code>git clone https://github.com/femcodersclub/ResponsiveShowcase.git</code></li>
          <li><strong>Abre index.html:</strong> Explora los diferentes ejemplos</li>
          <li><strong>Examina el código:</strong> styles.css y main.js contienen todas las técnicas</li>
          <li><strong>Experimenta:</strong> Modifica valores y observa los cambios</li>
          <li><strong>Toma capturas:</strong> Usa el proyecto para tus propios artículos o presentaciones</li>
        </ol>

        <div style={{
          backgroundColor: "rgba(130, 26, 212, 0.1)", 
          padding: "20px", 
          borderRadius: "10px", 
          textAlign: "center", 
          margin: "30px 0",
          borderLeft: "5px solid #821ad4",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}>
          <h3 style={{color: "#821ad4", marginTop: 0, fontSize: "1.8rem"}}>🌟 ¡Contribuye al proyecto! 💜</h3>
          <p style={{fontSize: "18px", marginBottom: "15px", color: "#6d2c95"}}>
            ¿Tienes ideas para mejorar ResponsiveShowcase? ¡Nos encantaría recibir tu <strong>Pull Request</strong>!
          </p>
          <a 
            href="https://github.com/femcodersclub/ResponsiveShowcase/pulls"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#821ad4",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "all 0.3s ease"
            }}
          >
            🚀 Hacer Pull Request
          </a>
        </div>
      </div>

      <div className="highlight-box">
        <h2>🎯 Técnicas Avanzadas para 2025</h2>
        
        <h3>CSS Moderno para Responsive Design</h3>
      
          <p className="image-caption">CSS moderno: aspect-ratio, logical properties, funciones avanzadas</p>

        <pre className="code-block bg3">
{`/* CSS MODERNO PARA RESPONSIVE DESIGN */

/* 1. Tipografía y espaciado fluido */
.responsive-spacing {
  margin: clamp(1rem, 4vw, 3rem);
  padding: max(1rem, 2vw);
}

/* 2. Aspect ratio nativo */
.video-container {
  aspect-ratio: 16/9;
  width: 100%;
}

/* 3. Logical properties para mejor internacionalización */
.content {
  margin-inline: auto;
  padding-block: 2rem;
  border-inline-start: 4px solid #ea4f33;
}`}
        </pre>

        <h3>Tendencias emergentes</h3>
        <ul>
          <li><strong>Intrinsic Web Design:</strong> Layouts que se adaptan al contenido naturalmente</li>
          <li><strong>Component-Driven Design:</strong> Componentes que son responsive por defecto</li>
          <li><strong>Progressive Enhancement:</strong> Mejoras graduales según capacidades del dispositivo</li>
          <li><strong>Contextual Design:</strong> Adaptación según contexto de uso, no solo tamaño</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>📚 Recursos Adicionales para Seguir Aprendizando</h2>
        
        <h3>Documentación oficial y guías</h3>
        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">MDN Web Docs</h5>
            <p>Documentación completa sobre media queries y responsive design</p>
            <a href="https://developer.mozilla.org/docs/Web/CSS/Media_Queries" target="_blank" rel="noopener noreferrer">Explorar</a>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">Web.dev</h5>
            <p>Guías modernas de Google sobre responsive web design</p>
            <a href="https://web.dev/responsive-web-design-basics/" target="_blank" rel="noopener noreferrer">Leer</a>
          </div>

          <div className="recurso-item">
            <h5 className="tool-title">CSS-Tricks</h5>
            <p>Artículos detallados sobre técnicas CSS responsive</p>
            <a href="https://css-tricks.com/guides/" target="_blank" rel="noopener noreferrer">Explorar</a>
          </div>
        </div>

        <h3>Herramientas para generar código</h3>
        <ul>
          <li><strong><a href="https://fluid-typography.netlify.app/" target="_blank" rel="noopener noreferrer">Fluid Type Calculator</a>:</strong> Genera funciones clamp() automáticamente</li>
          <li><strong><a href="https://grid.layoutit.com/" target="_blank" rel="noopener noreferrer">CSS Grid Generator</a>:</strong> Crea layouts Grid visualmente</li>
          <li><strong><a href="https://cssgridgarden.com/" target="_blank" rel="noopener noreferrer">Grid Garden</a>:</strong> Aprende Grid jugando</li>
          <li><strong><a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">Flexbox Froggy</a>:</strong> Aprende Flexbox de forma divertida</li>
        </ul>

        <h3>Comunidades y recursos de femCodersClub</h3>
        <ul>
          <li><strong><a href="https://communityinviter.com/apps/femcodersclub/femcoders-club" target="_blank" rel="noopener noreferrer">Slack de femCodersClub</a>:</strong> Únete a nuestra comunidad</li>
          <li><strong><a href="https://femcodersclub.com/blog" target="_blank" rel="noopener noreferrer">Blog femCodersClub</a>:</strong> Más artículos técnicos</li>
          <li><strong><a href="https://github.com/femcodersclub" target="_blank" rel="noopener noreferrer">GitHub femCodersClub</a>:</strong> Proyectos open source</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🎯 Conclusión</h2>
        <p>
          El responsive design ha evolucionado de una "buena práctica" a una necesidad absoluta en el desarrollo web moderno. Desde los conceptos básicos de media queries hasta las técnicas más avanzadas como container queries y tipografía fluida, dominar estas habilidades te convertirá en una desarrolladora frontend más competente y versátil.
        </p>

        <p>
          A lo largo de este artículo hemos explorado:
        </p>
        <br />
        <ul>
          <li>✅ <strong>Los fundamentos</strong> del responsive design y por qué es crucial</li>
          <li>✅ <strong>La comparación práctica</strong> entre desktop-first y mobile-first</li>
          <li>✅ <strong>Breakpoints estratégicos</strong> y cómo elegirlos</li>
          <li>✅ <strong>Técnicas intermedias</strong> para layouts flexibles</li>
          <li>✅ <strong>Técnicas avanzadas</strong> con CSS moderno</li>
          <li>✅ <strong>Herramientas de debugging</strong> y optimización</li>
          <li>✅ <strong>Ejemplos visuales reales</strong> con nuestro proyecto ResponsiveShowcase</li>
        </ul>

        <p>
          El proyecto ResponsiveShowcase está diseñado para ser tu compañero de aprendizaje. Úsalo para experimentar, tomar capturas para tus propios proyectos, y como referencia cuando implementes responsive design en sitios reales.
        </p>

        <div className="performance-tip" style={{
          backgroundColor: "rgba(234, 79, 51, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #ea4f33"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            <strong>💡 Recuerda:</strong> El responsive design no es solo sobre hacer que las cosas "se vean bien" en móvil. Es sobre crear experiencias optimizadas y accesibles para cada contexto de uso. Cada decisión de diseño debe considerar no solo el tamaño de pantalla, sino también la velocidad de conexión, el método de input, y las necesidades del usuario.
          </p>
        </div>
<br />
        <h3>¿Cuál es tu próximo paso?</h3>
        <br />
        <ol>
          <li><strong>Practica con el proyecto:</strong> Clona ResponsiveShowcase y experimenta</li>
          <li><strong>Aplica en proyectos reales:</strong> Implementa mobile-first en tu próximo desarrollo</li>
          <li><strong>Comparte con la comunidad:</strong> Sube tus experimentos a GitHub</li>
          <li><strong>Mantente actualizada:</strong> Las especificaciones CSS evolucionan constantemente</li>
        </ol>

        <p>
          ¡La comunidad femCodersClub está aquí para apoyarte en tu camino! No dudes en compartir tus proyectos, hacer preguntas, o contribuir con nuevos ejemplos al repositorio.
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de femCoders Club</p>
        <p>
          Fecha de publicación:{" "}
          <strong>4 de enero, 2025</strong>
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

export default ResponsiveDesign;