import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import SimpleGridCarousel from "../../../components/SimpleGridCarousel";
import "../../../page/PostStyles.css";


import ShareButtons from "../../../components/ShareButtons";

const CssGrid: React.FC = () => {
  const postId = 16;

  return (
    <div className="blog-post">
     <Helmet>
  <title>CSS Grid: Domina el sistema de cuadrículas en tu página web | FemCoders Club</title>
  <meta
    name="description"
    content="Aprende a usar CSS Grid para crear layouts web profesionales. Descubre diferencias con Flexbox, propiedades avanzadas, ejemplos prácticos y optimizaciones de rendimiento."
  />
  <meta
    name="keywords"
    content="CSS Grid, grid layout, diseño web, frontend, cuadrículas CSS, grid vs flexbox, maquetación web, femcoders club, desarrollo web para mujeres, CSS avanzado"
  />
  
  {/* Metadatos canónicos */}
  <link rel="canonical" href="https://www.femcodersclub.com/recursos/css/css-grid" />
  
  {/* Directivas para motores de búsqueda */}
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow" />
  <meta name="bingbot" content="index, follow" />
  <meta name="author" content="Irina Ichim" />
  
  {/* Open Graph para compartir en redes sociales */}
  <meta property="og:type" content="article" />
  <meta property="og:title" content="CSS Grid: Domina el sistema de cuadrículas en tu página web" />
  <meta property="og:description" content="Aprende a usar CSS Grid para crear layouts web profesionales. Guía completa con ejemplos prácticos, compatibilidad con navegadores y optimización de rendimiento." />
  <meta property="og:url" content="https://www.femcodersclub.com/recursos/css/css-grid" />
  <meta property="og:image" content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CssGrid.webp" />
  <meta property="og:site_name" content="FemCoders Club" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CSS Grid: Domina el sistema de cuadrículas en tu página web" />
  <meta name="twitter:description" content="Guía completa de CSS Grid: desde conceptos básicos hasta técnicas avanzadas para desarrolladoras web. Con ejemplos prácticos y código." />
  <meta name="twitter:image" content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CssGrid.webp" />
  
  {/* Metadatos de artículo */}
  <meta property="article:published_time" content="2025-01-15T12:00:00Z" />
  <meta property="article:author" content="Irina Ichim" />
  <meta property="article:section" content="Desarrollo Web" />
  <meta property="article:tag" content="CSS" />
  <meta property="article:tag" content="Grid" />
  <meta property="article:tag" content="Frontend" />
  <meta property="article:tag" content="Layout" />
  
  {/* Metadatos adicionales */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="language" content="Spanish" />
</Helmet>

      <div className="post-image-container">
  <picture>
    <source
      srcSet="/public-optimized/mobile/assets/css/CssGrid.webp"
      media="(max-width: 768px)"
    />
    <source
      srcSet="/public-optimized/desktop/assets/css/CssGrid.webp"
      media="(min-width: 769px)"
    />
    <img
      src="/public-optimized/desktop/assets/css/CssGrid.webp"
      alt="CSS Grid Layout - Estructura con header, sidebar, contenido principal y footer"
      className="blog-post-image"
      loading="lazy"
    />
  </picture>
</div>


      <h1 className="blog-post-title">
      CSS Grid: Domina el sistema de cuadrículas en tu página web
      </h1>

      <ShareButtons path="/recursos/css/css-grid" title="CSS Grid: Domina el sistema de cuadrículas en tu página web" />

      <div className="intro-text">
        <p>
          CSS Grid es una poderosa herramienta que revoluciona la forma en que diseñamos layouts para nuestros sitios web. En este artículo para la comunidad FemCoders Club, exploraremos cómo dominar este sistema de rejillas y aprovecharlo al máximo en tus proyectos.
        </p>
       
      </div>

      <div className="highlight-box">
  <h2>Diferencia entre Flexbox y Grid</h2>
  <p>
    Aunque tanto Flexbox como Grid son herramientas de diseño en CSS, tienen propósitos diferentes. Flexbox se adapta mejor a estructuras en una sola dirección, mientras que Grid permite organizar elementos en filas y columnas.
  </p>
<br />
  <h3>Flexbox: diseño unidimensional</h3>
  <ul>
    <li>Se enfoca en distribuir elementos en un solo eje (horizontal o vertical).</li>
    <li>Ideal para componentes de interfaz y pequeñas secciones de diseño.</li>
    <li>Excelente para alinear elementos en una fila o columna.</li>
    <li>Ejemplo de uso: barras de navegación, listas de elementos, alineación de botones.</li>
  </ul>

  <p>
    Si quieres profundizar más sobre cómo usar Flexbox en tus diseños, puedes leer nuestro post completo:&nbsp;
   <strong> <a
      href="https://www.femcodersclub.com/recursos/css/flexbox"
      target="_blank"
      rel="noopener noreferrer"
      className="highlight underline"
    >
      ¿Qué es Flexbox y cómo utilizarlo?
    </a></strong>
  </p>
  <br />
    <h3>Grid: diseño bidimensional</h3>
    <ul>
        <li>Trabaja simultáneamente con filas y columnas.</li>
        <li>Perfecto para diseñar layouts completos de páginas.</li>
        <li>Permite colocar elementos exactamente donde se necesitan.</li>
        <li>Ideal para maquetaciones complejas y asimétricas.</li>
     </ul>
<h3>¿Cuándo usar cada uno?</h3>
<p>
    Utiliza Flexbox cuando necesites alinear elementos en una sola dirección y Grid cuando necesites crear un layout completo con filas y columnas. Ambos pueden complementarse para lograr diseños más complejos.
  </p>
</div>




      <div className="highlight-box">
        <h2>Estructura básica de CSS Grid</h2>
        <h3>Conceptos fundamentales</h3>
      
        <ul>
          <li>
            <strong>Contenedor grid:</strong>  el elemento padre que define la cuadrícula.
          </li>
          <li>
            <strong>Items grid</strong> los hijos directos que se colocan en la cuadrícula.
           
          </li>
          <li>
            <strong>Líneas grid:</strong> las líneas que dividen la cuadrícula (horizontales y verticales).
           
          </li>
            <li>
                <strong>Tracks:</strong> los espacios entre las líneas (filas o columnas).
            </li>
            <li><strong>Celdas:</strong>las unidades individuales de la cuadrícula.</li>
          <li>
            <strong>Áreas grid:</strong>  grupos de celdas que forman una región rectangular.
          </li>

        </ul>
        <h3>Sintaxis básica</h3>
        <pre className="code-block bg3">
          {`.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;   /* Define 3 columnas */
  grid-template-rows: 100px auto 100px;   /* Define 3 filas */
  gap: 20px;                              /* Espacio entre filas y columnas */
}`}
        </pre>
      </div>

      <div className="highlight-box">

  <h2>Ejemplos prácticos en nuestro repositorio de GitHub</h2>
  <SimpleGridCarousel />
  <p>
    Para que puedas ver todos estos conceptos en acción, hemos creado un proyecto completo en GitHub con ejemplos interactivos. En este repositorio encontrarás:
  </p>
  <ul>
  <li><strong>1. Página de inicio interactiva:</strong> Una página principal que muestra visualmente los conceptos fundamentales de CSS Grid mientras utiliza el propio sistema de rejillas para su diseño, permitiendo explorar la terminología y estructura básica de manera práctica.</li>
  <li><strong>2. Layout de página completa (Holy Grail):</strong> Una implementación clásica del patrón "Holy Grail" con cabecera, pie, contenido principal y barras laterales.</li>
    <li><strong>3. Galería de imágenes responsive:</strong> Una galería que se adapta a diferentes tamaños de pantalla y destaca ciertas imágenes.</li>
    <li><strong>4. Grid implícito vs. Grid explícito:</strong> Ejemplos comparativos que muestran cómo funciona el grid cuando defines todas sus partes (explícito) versus cuando permites que Grid maneje automáticamente el contenido adicional (implícito).</li>
    <li><strong>5. Maquetación tipo revista/periódico:</strong> Un diseño editorial con áreas destacadas, como en un sitio de noticias profesional.</li>
    <li><strong>6. Dashboard administrativo:</strong> Un panel de control completo con widgets de diferentes tamaños, ideal para aplicaciones de datos y estadísticas.</li>
  </ul>

  <div className="styled-paragraph" style={{textAlign: "center"}}>
   <span> <a
      href="https://github.com/femcodersclub/femcoders-css-grid-examples"
      className="highlight underline"
      target="_blank"
      rel="noopener noreferrer"
    >
     ✨ Explora el código en GitHub 📂 ✨
    </a></span>
    <br />
 <span>   <a href="https://femcodersclub.github.io/femcoders-css-grid-examples/"
   target="_blank"
   rel="noopener noreferrer">
   Ver ejemplo en vivo
</a></span>
  </div>
  <br /><br />
  <h3>¿Cómo usar el proyecto?</h3>
  <ul>
    <li>
      <strong>1. Clona el repositorio:</strong> Usa el comando <pre className="code-block bg3">git clone https://github.com/femcoders-club/css-grid-examples.git</pre> para descargar el proyecto en tu máquina local.
    </li>
    <li>
      <strong>2. Abre el archivo index.html:</strong> Puedes abrirlo directamente en tu navegador para ver los ejemplos en acción.
    </li>
    <li>
      <strong>3. Explora y experimenta:</strong> Modifica el código y observa cómo cambian los diseños en tiempo real.
    </li>
  </ul>
</div>



<div className="highlight-box">
  <h2>Propiedades avanzadas de CSS Grid</h2>
  <p>
    CSS Grid ofrece una variedad de propiedades avanzadas que te permiten personalizar aún más tus diseños. Algunas de estas propiedades incluyen:
  </p>
  <br />
  <h3>Alineación y justificación</h3>
  <ul>
    <li><strong>justify-items</strong> y <strong>align-items</strong>: alinea elementos dentro de sus celdas</li>
    <li><strong>justify-content</strong> y <strong>align-content</strong>: alinea toda la cuadrícula dentro del contenedor</li>
  </ul>
  
  <h3>Posicionamiento específico</h3>
  <ul>
    <li><strong>grid-column-start/end</strong>: posiciona elementos por número de línea en columnas</li>
    <li><strong>grid-row-start/end</strong>: posiciona elementos por número de línea en filas</li>
    <li> <strong>Atajo: grid-column: 1 / 3;</strong> (desde línea 1 hasta línea 3)</li>
  </ul>
  
  <h3>Funciones útiles</h3>
  <ul>
    <li><strong>repeat()</strong>: repite patrones de tracks (ej: <code>repeat(3, 1fr)</code>)</li>
    <li><strong>minmax()</strong>: establece tamaños mínimos y máximos</li>
    <li><strong>auto-fill</strong> y <strong>auto-fit</strong>: crea tracks automáticos según el espacio disponible</li>
  </ul>
</div>

<div className="highlight-box">
  <h2>Compatibilidad con navegadores y fallbacks</h2>
  
  <h3>Tabla de compatibilidad actualizada</h3>
  <div className="table-container">
    <table className="framework-comparison-table">
      <thead>
        <tr>
          <th>Navegador</th>
          <th>Versión</th>
          <th>Soporte de CSS Grid</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chrome</td>
          <td>57+</td>
          <td>Completo</td>
        </tr>
        <tr>
          <td>Firefox</td>
          <td>52+</td>
          <td>Completo</td>
        </tr>
        <tr>
          <td>Safari</td>
          <td>10.1+</td>
          <td>Completo</td>
        </tr>
        <tr>
          <td>Edge</td>
          <td>16+</td>
          <td>Completo</td>
        </tr>
        <tr>
          <td>Opera</td>
          <td>44+</td>
          <td>Completo</td>
        </tr>
        <tr>
          <td>iOS Safari</td>
          <td>10.3+</td>
          <td>Completo</td>
        </tr>
        <tr>
          <td>Android Browser</td>
          <td>81+</td>
          <td>Completo</td>
        </tr>
        <tr>
          <td>Samsung Internet</td>
          <td>6.2+</td>
          <td>Completo</td>
        </tr>
        <tr>
          <td>Internet Explorer</td>
          <td>11</td>
          <td>Parcial (prefijos)</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <h3>Detección de soporte con @supports</h3>
  <p>Puedes usar la regla <code>@supports</code> para aplicar estilos condicionales según la compatibilidad del navegador:</p>
  <pre className="code-block bg3">
{`/* Fallback para todos los navegadores */
.container {
  display: flex;
  flex-wrap: wrap;
}

/* Versión con Grid solo si es compatible */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}`}
  </pre>
  
  <h3>Estrategias de fallback para navegadores antiguos</h3> <br />
  <ol>
    <li><strong>Enfoque progresivo</strong>: Define primero un layout básico funcional y luego mejóralo con Grid</li>
    <li><strong>Modernizr</strong>: Detecta características de CSS y aplica clases específicas al elemento HTML</li>
    <li><strong>Feature Queries</strong>: Usa @supports como se muestra arriba</li>
    <li><strong>Autoprefixer</strong>: Genera automáticamente prefijos para mayor compatibilidad</li>
    <li><strong>Polyfills</strong>: Bibliotecas como css-grid-polyfill para IE11</li>
  </ol>
</div>
<div className="highlight-box">
  <h2>Grid implícito vs. Grid explícito</h2>
  <h3>Cómo funciona el Grid implícito</h3>
  <p>
    El <strong>Grid explícito</strong> es el que defines conscientemente con propiedades como <code>grid-template-columns</code> y <code>grid-template-rows</code>. Pero, ¿qué ocurre cuando tus elementos exceden esas filas o columnas definidas?
    <br /><br />
    Aquí es donde entra el <strong>Grid implícito</strong>. CSS Grid automáticamente crea filas o columnas adicionales para acomodar el contenido excedente, siguiendo reglas predeterminadas o las que tú especifiques.
  </p>
  <h3>Propiedades para controlar el Grid implícito</h3>
  <pre className="code-block bg3">
{`.contenedor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* Grid explícito: 3 columnas */
  grid-template-rows: 100px 100px;        /* Grid explícito: 2 filas */
  
  /* Control del Grid implícito */
  grid-auto-rows: 150px;                  /* Altura para filas implícitas */
  grid-auto-columns: 2fr;                 /* Ancho para columnas implícitas */
  grid-auto-flow: row;                    /* Dirección: 'row', 'column' o 'dense' */
}`}
  </pre>
  <h3>Casos prácticos para el Grid implícito</h3>
  <ul>
  <li><strong>Galerías dinámicas</strong>: Cuando no sabes cuántos elementos tendrás</li>
  <li><strong>Feeds de contenido</strong>: Para blogs o redes sociales donde el contenido se carga dinámicamente</li>
  <li><strong>Layouts responsivos avanzados</strong>: Combinados con media queries para reorganizar contenido</li>
  <li><strong>Sistemas de dashboard</strong>: Para widgets o componentes que pueden cambiar en número</li>
</ul>
</div>
<div className="highlight-box">
  <h2>Accesibilidad en layouts con CSS Grid</h2>
  
  <h3>Orden visual vs. orden del DOM</h3>
  <p>
    CSS Grid permite crear diseños visuales que no necesariamente siguen el orden del código HTML. Esto puede crear discrepancias entre lo que se ve y lo que experimenta un usuario de tecnologías asistivas:
  </p>
  
  <pre className="code-block bg3">
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item-1 { grid-column: 3; grid-row: 1; } /* Visualmente aparece a la derecha */
.item-2 { grid-column: 1; grid-row: 1; } /* Visualmente aparece a la izquierda */`}
  </pre>
  
  <h3>Prácticas recomendadas para lectores de pantalla</h3>
  <ul>
    <li>Mantener un orden lógico en el HTML que coincida con el flujo natural de lectura</li>
    <li>Usar ARIA landmarks para identificar regiones importantes</li>
    <li>Asegurar que los elementos interactivos sean accesibles por teclado</li>
    <li>Probar con lectores de pantalla como NVDA, JAWS o VoiceOver</li>
  </ul>
  
  <h3>Consideraciones para navegación por teclado</h3>
  <ol>
    <li><strong>Orden de tabulación</strong>: Asegurarse de que el orden de tabulación (<code>tabindex</code>) sea lógico</li>
    <li><strong>Elementos focusables</strong>: Proporcionar indicadores visuales claros para el foco</li>
    <li><strong>Accesos directos</strong>: Considerar agregar atajos de teclado para funciones importantes</li>
    <li><strong>Skip links</strong>: Incluir enlaces para saltar a secciones principales</li>
  </ol>
</div>

<div className="highlight-box">
  <h2>CSS Grid vs. frameworks</h2>
  
  <h3>Comparativa con Bootstrap, Tailwind y otros frameworks</h3>
  <br />
  <div className="table-container">
    <table className="framework-comparison-table">
      <thead>
        <tr>
          <th>Característica</th>
          <th>CSS Grid Nativo</th>
          <th>Bootstrap</th>
          <th>Tailwind</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Flexibilidad</td>
          <td>Alta</td>
          <td>Media</td>
          <td>Alta</td>
        </tr>
        <tr>
          <td>Curva de aprendizaje</td>
          <td>Media</td>
          <td>Baja</td>
          <td>Media</td>
        </tr>
        <tr>
          <td>Peso del código</td>
          <td>Ligero</td>
          <td>Pesado</td>
          <td>Personalizable</td>
        </tr>
        <tr>
          <td>Personalización</td>
          <td>Completa</td>
          <td>Limitada</td>
          <td>Alta</td>
        </tr>
        <tr>
          <td>Soporte móvil</td>
          <td>Nativo</td>
          <td>Excelente</td>
          <td>Excelente</td>
        </tr>
        <tr>
          <td>Convenciones</td>
          <td>Crear propias</td>
          <td>Predefinidas</td>
          <td>Utilitarias</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <h3>Cuándo combinar Grid nativo con frameworks</h3>
  <ol>
    <li><strong>Para componentes específicos</strong>: Usar Grid dentro de un sistema de Bootstrap</li>
    <li><strong>Prototipos rápidos</strong>: Usar un framework y refinar con Grid</li>
    <li><strong>Proyectos híbridos</strong>: Framework para el sistema general, Grid para áreas complejas</li>
    <li><strong>Migración gradual</strong>: Actualizar partes de un sitio con framework a Grid nativo</li>
  </ol>
  
  <h3>Ventajas de usar Grid puro para proyectos personalizados</h3>
  <ol>
    <li><strong>Menor tamaño de archivos</strong>: Sin código CSS no utilizado</li>
    <li><strong>Mayor control</strong>: Personalización exacta según necesidades</li>
    <li><strong>Mejor rendimiento</strong>: Optimizaciones específicas para el proyecto</li>
    <li><strong>Mantenibilidad</strong>: Código más limpio y directo</li>
    <li><strong>Sin dependencias externas</strong>: Menos problemas de compatibilidad</li>
  </ol>
</div>
<div className="highlight-box">
  <h2>Optimización y rendimiento</h2>
  
  <h3>Consejos para grids con mejor rendimiento</h3>
  <ol>
    <li><strong>Preferir <code>grid-template-areas</code> para layouts complejos</strong>: Más legible y mantenible</li>
    <li><strong>Usar <code>auto-fill</code> y <code>auto-fit</code> con precaución</strong>: Pueden crear muchas columnas implícitas</li>
    <li><strong>Limitar animaciones</strong>: Animar solo <code>opacity</code> y <code>transform</code> cuando sea posible</li>
    <li><strong>Evitar recálculos frecuentes</strong>: No cambiar la estructura del grid constantemente</li>
  </ol>
  
  <h3>Cómo evitar problemas de repintado (repainting)</h3>
  <ol>
    <li><strong>Usar la propiedad <code>will-change</code></strong>: Indica al navegador qué propiedades cambiarán</li>
    <li><strong>Promover elementos a su propia capa</strong>: Con <code>transform: translateZ(0)</code> o <code>will-change</code></li>
    <li><strong>Agrupar cambios de DOM</strong>: Usar fragmentos de documento para múltiples cambios</li>
    <li><strong>Preferir Grid sobre cálculos manuales</strong>: Grid optimiza automáticamente el layout</li>
  </ol>
  
  <h3>Estrategias para layouts complejos en dispositivos de bajo rendimiento</h3>
  <ol>
    <li><strong>Simplificar en móviles</strong>: Reducir columnas y complejidad</li>
    <li><strong>Carga progresiva</strong>: Mostrar contenido esencial primero</li>
    <li><strong>Reducir anidamiento</strong>: Evitar grids dentro de grids cuando sea posible</li>
    <li><strong>Considerar Flexbox para partes simples</strong>: A veces es más eficiente para layouts sencillos</li>
  </ol>
  
  <div className="performance-tip" style={{
    backgroundColor: "rgba(234, 79, 51, 0.1)",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "20px",
    borderLeft: "4px solid #ea4f33"
  }}>
    <p style={{ margin: "0", fontSize: "1.1rem" }}>
      <strong>💡 Consejo pro:</strong> Utiliza las herramientas de desarrollo del navegador para monitorear el rendimiento. 
      Chrome DevTools ofrece una herramienta de "Performance" que puede ayudarte a identificar cuellos de botella en tus layouts con CSS Grid.
    </p>
  </div>
</div>
<div className="highlight-box">
  <h2>Inspiración y ejemplos del mundo real</h2>
  
  <h3>Sitios web destacados que utilizan CSS Grid</h3>
  <ol>
    <li><strong><a href="https://www.nytimes.com/" target="_blank" rel="noopener noreferrer">The New York Times</a></strong>: Layout tipo periódico</li>
    <li><strong><a href="https://www.smashingmagazine.com/" target="_blank" rel="noopener noreferrer">Smashing Magazine</a></strong>: Diseño editorial web</li>
    <li><strong><a href="https://gridbyexample.com/" target="_blank" rel="noopener noreferrer">Grid by Example</a></strong>: Colección de patrones Grid</li>
    <li><strong><a href="https://labs.jensimmons.com/" target="_blank" rel="noopener noreferrer">Jen Simmons Lab</a></strong>: Experimentos de diseño web</li>
    <li><strong><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Mozilla Developer Network</a></strong>: Documentación técnica</li>
  </ol>
  
  <h3>Herramientas de desarrollo</h3>
  
  <p>
    Las herramientas de desarrollo son esenciales para depurar y optimizar tus layouts con CSS Grid. Aquí hay algunas que recomendamos:
  </p>
<div className="tools-container">
  <div className="recurso-item">
    <h5 className="tool-title">Firefox DevTools</h5>
    <p>Las más avanzadas para CSS Grid</p>
    <ul>
      <li>Muestra líneas numeradas</li>
      <li>Visualiza áreas con colores</li>
      <li>Muestra nombres de áreas</li>
    </ul>
  </div>
  
  <div className="recurso-item">
    <h5 className="tool-title">Chrome DevTools</h5>
    <ul>
      <li>Activa la visualización de Grid desde el panel Layouts</li>
      <li>Muestra líneas y áreas Grid</li>
      <li>Permite experimentar con propiedades</li>
    </ul>
  </div>
</div>
  
  <h5>Extensiones útiles</h5>
  <br />
  <ol>
    <li><strong>CSS Grid Inspector</strong>: Extensión para Firefox que mejora la visualización</li>
    <li><strong>Gridman</strong>: Extensión de Chrome para superponer una cuadrícula personalizable</li>
    <li><strong>CSS Grid Cheat Sheet</strong>: Referencia rápida de propiedades Grid</li>
  </ol>
  
  <h5>Generadores de código Grid</h5>
  <br />
  <ol>
    <li><strong><a href="https://cssgrid-generator.netlify.app/" target="_blank" rel="noopener noreferrer">CSS Grid Generator</a></strong>: Interfaz visual para generar código</li>
    <li><strong><a href="https://grid.layoutit.com/" target="_blank" rel="noopener noreferrer">Layoutit Grid</a></strong>: Creador visual de layouts Grid</li>
    <li><strong><a href="https://cssgridgarden.com/" target="_blank" rel="noopener noreferrer">Grid Garden</a></strong>: Juego para aprender Grid interactivamente</li>
  </ol>
</div>

<div className="highlight-box">
  <h2>Conclusión</h2>
  <p>
    CSS Grid es una herramienta indispensable para el desarrollo web moderno. Con su capacidad para crear layouts complejos y responsive, permite a las desarrolladoras implementar diseños que antes eran difíciles o imposibles. Dominar Grid te dará un control preciso sobre tus layouts y elevará tus habilidades de desarrollo frontend a un nuevo nivel.
  </p>
  <p>
    Como mencionaste, este blog será complementado con un proyecto en GitHub donde podremos aplicar todos estos conceptos en ejemplos prácticos y compartir el código con la comunidad FemCoders.
  </p>

  <h3>¡Comparte tus creaciones con la comunidad! 👩‍💻</h3>

  <div style={{
  backgroundColor: "rgba(71, 55, 187, 0.1)", 
  padding: "20px", 
  borderRadius: "10px", 
  textAlign: "center", 
  margin: "30px 0",
  borderLeft: "5px solid #4737bb",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
}}>
  <h3 style={{color: "#6d2c95", marginTop: 0, fontSize: "1.8rem"}}>¿Te animas a contribuir con tu propio ejemplo de Grid? 💡</h3>
  <p style={{fontSize: "18px", marginBottom: "15px", color: "#2a2170"}}>
    Haz un <strong>Pull Request</strong> a nuestro repositorio y añade tu ejemplo creativo al proyecto
  </p>
  <a 
    href="https://github.com/femcodersclub/femcoders-css-grid-examples/pulls"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#4737bb",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "16px",
      transition: "background-color 0.3s ease, transform 0.3s ease"
    }}
    onMouseOver={(e) => {e.currentTarget.style.backgroundColor = "#6d2c95"; e.currentTarget.style.transform = "scale(1.05)"}}
    onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "#4737bb"; e.currentTarget.style.transform = "scale(1)"}}
  >
    🚀 Contribuir al proyecto
  </a>
  <p style={{fontSize: "20px", fontWeight: "bold", marginTop: "15px", marginBottom: 0, color: "#2a2170"}}>
    ¡Hagamos crecer juntas la colección de ejemplos! 💪
  </p>
</div>

  <p>
    Recuerda que la práctica es la clave para dominar CSS Grid. No dudes en experimentar con los ejemplos del repositorio y adaptarlos a tus propios proyectos. ¡La comunidad FemCoders Club está aquí para apoyarte en tu camino de aprendizaje!
  </p>
</div>
      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de femCoders Club</p>
        <p>
          Fecha de publicación:{" "}
          <strong>{new Date().toLocaleDateString()}</strong>
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

export default CssGrid;