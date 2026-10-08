import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SimpleGridCarousel from "../../../components/SimpleGridCarousel";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ListaMarcadaPost,
  NotaPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const CssGrid: React.FC = () => (
  <>
     <Helmet>
  <title>CSS Grid: domina el sistema de cuadrículas en tu página web | FemCoders Club</title>
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
  <meta property="og:title" content="CSS Grid: domina el sistema de cuadrículas en tu página web" />
  <meta property="og:description" content="Aprende a usar CSS Grid para crear layouts web profesionales. Guía completa con ejemplos prácticos, compatibilidad con navegadores y optimización de rendimiento." />
  <meta property="og:url" content="https://www.femcodersclub.com/recursos/css/css-grid" />
  <meta property="og:image" content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CssGrid.webp" />
  <meta property="og:site_name" content="FemCoders Club" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CSS Grid: domina el sistema de cuadrículas en tu página web" />
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

    <PlantillaPost
      ruta="/recursos/css/css-grid"
      titulo="CSS Grid: domina el sistema de cuadrículas en tu página web"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={16}
      entradilla={
        <p>
          CSS Grid es una poderosa herramienta que revoluciona la forma en que
          diseñamos layouts para nuestros sitios web. En este artículo para la
          comunidad FemCoders Club exploraremos cómo dominar este sistema de
          rejillas y aprovecharlo al máximo en tus proyectos.
        </p>
      }
    >
      <SeccionPost titulo="Diferencia entre Flexbox y Grid">
        <p>
          Aunque tanto Flexbox como Grid son herramientas de diseño en CSS,
          tienen propósitos diferentes. Flexbox se adapta mejor a estructuras en
          una sola dirección, mientras que Grid permite organizar elementos en
          filas y columnas.
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Flexbox: diseño unidimensional",
              texto: (
                <ul>
                  <li>Se enfoca en distribuir elementos en un solo eje (horizontal o vertical).</li>
                  <li>Ideal para componentes de interfaz y pequeñas secciones de diseño.</li>
                  <li>Excelente para alinear elementos en una fila o columna.</li>
                  <li>Ejemplos de uso: barras de navegación, listas de elementos, alineación de botones.</li>
                </ul>
              ),
            },
            {
              titulo: "Grid: diseño bidimensional",
              texto: (
                <ul>
                  <li>Trabaja simultáneamente con filas y columnas.</li>
                  <li>Perfecto para diseñar layouts completos de páginas.</li>
                  <li>Permite colocar elementos exactamente donde se necesitan.</li>
                  <li>Ideal para maquetaciones complejas y asimétricas.</li>
                </ul>
              ),
            },
          ]}
        />
        <p>
          Si quieres profundizar más en cómo usar Flexbox en tus diseños, puedes
          leer nuestro post completo:{" "}
          <Link to="/recursos/css/flexbox">¿Qué es Flexbox y cómo utilizarlo?</Link>
        </p>

        <h3>¿Cuándo usar cada uno?</h3>
        <p>
          Utiliza Flexbox cuando necesites alinear elementos en una sola
          dirección, y Grid cuando necesites crear un layout completo con filas
          y columnas. Ambos pueden complementarse para lograr diseños más
          complejos.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Estructura básica de CSS Grid">
        <h3>Conceptos fundamentales</h3>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            { titulo: "Contenedor grid", texto: "El elemento padre que define la cuadrícula." },
            { titulo: "Items grid", texto: "Los hijos directos que se colocan en la cuadrícula." },
            {
              titulo: "Líneas grid",
              texto: "Las líneas que dividen la cuadrícula (horizontales y verticales).",
            },
            { titulo: "Tracks", texto: "Los espacios entre las líneas (filas o columnas)." },
            { titulo: "Celdas", texto: "Las unidades individuales de la cuadrícula." },
            {
              titulo: "Áreas grid",
              texto: "Grupos de celdas que forman una región rectangular.",
            },
          ]}
        />

        <h3>Sintaxis básica</h3>
        <CodigoPost lenguaje="CSS">{`.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;   /* Define 3 columnas */
  grid-template-rows: 100px auto 100px;   /* Define 3 filas */
  gap: 20px;                              /* Espacio entre filas y columnas */
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Ejemplos prácticos en nuestro repositorio de GitHub">
        <SimpleGridCarousel />
        <p>
          Para que puedas ver todos estos conceptos en acción, hemos creado un
          proyecto completo en GitHub con ejemplos interactivos. En este
          repositorio encontrarás:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "1. Página de inicio interactiva",
              texto:
                "Una página principal que muestra visualmente los conceptos fundamentales de CSS Grid mientras utiliza el propio sistema de rejillas para su diseño, para explorar la terminología y la estructura básica de manera práctica.",
            },
            {
              titulo: "2. Layout de página completa (Holy Grail)",
              texto:
                "Una implementación clásica del patrón «Holy Grail» con cabecera, pie, contenido principal y barras laterales.",
            },
            {
              titulo: "3. Galería de imágenes responsive",
              texto:
                "Una galería que se adapta a diferentes tamaños de pantalla y destaca ciertas imágenes.",
            },
            {
              titulo: "4. Grid implícito vs. Grid explícito",
              texto:
                "Ejemplos comparativos que muestran cómo funciona el grid cuando defines todas sus partes (explícito) frente a cuando permites que Grid maneje automáticamente el contenido adicional (implícito).",
            },
            {
              titulo: "5. Maquetación tipo revista o periódico",
              texto:
                "Un diseño editorial con áreas destacadas, como en un sitio de noticias profesional.",
            },
            {
              titulo: "6. Dashboard administrativo",
              texto:
                "Un panel de control completo con widgets de diferentes tamaños, ideal para aplicaciones de datos y estadísticas.",
            },
          ]}
        />
        <p>
          <a
            href="https://github.com/femcodersclub/femcoders-css-grid-examples"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explora el código en GitHub
          </a>{" "}
          o{" "}
          <a
            href="https://femcodersclub.github.io/femcoders-css-grid-examples/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mira el ejemplo en vivo
          </a>
          .
        </p>

        <h3>¿Cómo usar el proyecto?</h3>
        <ol>
          <li>
            <strong>Clona el repositorio.</strong> Usa este comando para
            descargar el proyecto en tu máquina local:
            <CodigoPost lenguaje="Bash">{`git clone https://github.com/femcodersclub/femcoders-css-grid-examples.git`}</CodigoPost>
          </li>
          <li>
            <strong>Abre el archivo index.html.</strong> Puedes abrirlo
            directamente en tu navegador para ver los ejemplos en acción.
          </li>
          <li>
            <strong>Explora y experimenta.</strong> Modifica el código y observa
            cómo cambian los diseños en tiempo real.
          </li>
        </ol>
      </SeccionPost>

      <SeccionPost titulo="Propiedades avanzadas de CSS Grid">
        <p>
          CSS Grid ofrece una variedad de propiedades avanzadas que te permiten
          personalizar aún más tus diseños. Algunas de ellas son:
        </p>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Alineación y justificación",
              texto: (
                <ul>
                  <li>
                    <code>justify-items</code> y <code>align-items</code>:
                    alinean los elementos dentro de sus celdas.
                  </li>
                  <li>
                    <code>justify-content</code> y <code>align-content</code>:
                    alinean toda la cuadrícula dentro del contenedor.
                  </li>
                </ul>
              ),
            },
            {
              titulo: "Posicionamiento específico",
              texto: (
                <ul>
                  <li>
                    <code>grid-column-start/end</code>: posiciona elementos por
                    número de línea en columnas.
                  </li>
                  <li>
                    <code>grid-row-start/end</code>: posiciona elementos por
                    número de línea en filas.
                  </li>
                  <li>
                    Atajo: <code>grid-column: 1 / 3;</code> (desde la línea 1
                    hasta la línea 3).
                  </li>
                </ul>
              ),
            },
            {
              titulo: "Funciones útiles",
              texto: (
                <ul>
                  <li>
                    <code>repeat()</code>: repite patrones de tracks (por
                    ejemplo, <code>repeat(3, 1fr)</code>).
                  </li>
                  <li>
                    <code>minmax()</code>: establece tamaños mínimos y máximos.
                  </li>
                  <li>
                    <code>auto-fill</code> y <code>auto-fit</code>: crean tracks
                    automáticos según el espacio disponible.
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Compatibilidad con navegadores y fallbacks">
        <h3>Tabla de compatibilidad actualizada</h3>
        <TablaPost descripcion="Compatibilidad de CSS Grid por navegador">
          <table>
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
        </TablaPost>

        <h3>Detección de soporte con @supports</h3>
        <p>
          Puedes usar la regla <code>@supports</code> para aplicar estilos
          condicionales según la compatibilidad del navegador:
        </p>
        <CodigoPost lenguaje="CSS">{`/* Fallback para todos los navegadores */
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
}`}</CodigoPost>

        <h3>Estrategias de fallback para navegadores antiguos</h3>
        <ol>
          <li>
            <strong>Enfoque progresivo:</strong> define primero un layout básico
            funcional y luego mejóralo con Grid.
          </li>
          <li>
            <strong>Modernizr:</strong> detecta características de CSS y aplica
            clases específicas al elemento HTML.
          </li>
          <li>
            <strong>Feature queries:</strong> usa <code>@supports</code> como
            se muestra arriba.
          </li>
          <li>
            <strong>Autoprefixer:</strong> genera automáticamente prefijos para
            una mayor compatibilidad.
          </li>
          <li>
            <strong>Polyfills:</strong> bibliotecas como css-grid-polyfill para
            IE11.
          </li>
        </ol>
      </SeccionPost>

      <SeccionPost titulo="Grid implícito vs. Grid explícito">
        <h3>Cómo funciona el Grid implícito</h3>
        <p>
          El <strong>Grid explícito</strong> es el que defines conscientemente
          con propiedades como <code>grid-template-columns</code> y{" "}
          <code>grid-template-rows</code>. Pero ¿qué ocurre cuando tus elementos
          exceden esas filas o columnas definidas?
        </p>
        <p>
          Aquí es donde entra el <strong>Grid implícito</strong>. CSS Grid crea
          automáticamente filas o columnas adicionales para acomodar el
          contenido excedente, siguiendo reglas predeterminadas o las que tú
          especifiques.
        </p>

        <h3>Propiedades para controlar el Grid implícito</h3>
        <CodigoPost lenguaje="CSS">{`.contenedor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* Grid explícito: 3 columnas */
  grid-template-rows: 100px 100px;        /* Grid explícito: 2 filas */

  /* Control del Grid implícito */
  grid-auto-rows: 150px;                  /* Altura para filas implícitas */
  grid-auto-columns: 2fr;                 /* Ancho para columnas implícitas */
  grid-auto-flow: row;                    /* Dirección: 'row' o 'column', con 'dense' opcional */
}`}</CodigoPost>

        <TarjetasPost
          titulo="Casos prácticos para el Grid implícito"
          tarjetas={[
            { titulo: "Galerías dinámicas", texto: "Cuando no sabes cuántos elementos tendrás." },
            {
              titulo: "Feeds de contenido",
              texto: "Para blogs o redes sociales donde el contenido se carga dinámicamente.",
            },
            {
              titulo: "Layouts responsivos avanzados",
              texto: "Combinados con media queries para reorganizar el contenido.",
            },
            {
              titulo: "Sistemas de dashboard",
              texto: "Para widgets o componentes que pueden cambiar en número.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Accesibilidad en layouts con CSS Grid">
        <h3>Orden visual vs. orden del DOM</h3>
        <p>
          CSS Grid permite crear diseños visuales que no siguen necesariamente
          el orden del código HTML. Esto puede crear discrepancias entre lo que
          se ve y lo que experimenta una persona que usa tecnologías de apoyo:
        </p>
        <CodigoPost lenguaje="CSS">{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item-1 { grid-column: 3; grid-row: 1; } /* Visualmente aparece a la derecha */
.item-2 { grid-column: 1; grid-row: 1; } /* Visualmente aparece a la izquierda */`}</CodigoPost>

        <ListaMarcadaPost titulo="Prácticas recomendadas para lectores de pantalla" tipo="bien">
          <li>Mantener un orden lógico en el HTML que coincida con el flujo natural de lectura.</li>
          <li>Usar ARIA landmarks para identificar las regiones importantes.</li>
          <li>Asegurar que los elementos interactivos sean accesibles por teclado.</li>
          <li>Probar con lectores de pantalla como NVDA, JAWS o VoiceOver.</li>
        </ListaMarcadaPost>

        <h3>Consideraciones para la navegación por teclado</h3>
        <ol>
          <li>
            <strong>Orden de tabulación:</strong> asegúrate de que el orden de
            tabulación sea lógico; corrígelo en el orden del HTML antes que con{" "}
            <code>tabindex</code> positivos.
          </li>
          <li>
            <strong>Elementos con foco:</strong> proporciona indicadores visuales
            claros para el foco.
          </li>
          <li>
            <strong>Accesos directos:</strong> considera añadir atajos de
            teclado para las funciones importantes.
          </li>
          <li>
            <strong>Skip links:</strong> incluye enlaces para saltar a las
            secciones principales.
          </li>
        </ol>
      </SeccionPost>

      <SeccionPost titulo="CSS Grid vs. frameworks">
        <h3>Comparativa con Bootstrap, Tailwind y otros frameworks</h3>
        <TablaPost descripcion="Comparativa de CSS Grid nativo con Bootstrap y Tailwind">
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th>CSS Grid nativo</th>
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
        </TablaPost>

        <h3>Cuándo combinar Grid nativo con frameworks</h3>
        <ol>
          <li>
            <strong>Para componentes específicos:</strong> usar Grid dentro de
            un sistema de Bootstrap.
          </li>
          <li>
            <strong>Prototipos rápidos:</strong> usar un framework y refinar con
            Grid.
          </li>
          <li>
            <strong>Proyectos híbridos:</strong> framework para el sistema
            general y Grid para las áreas complejas.
          </li>
          <li>
            <strong>Migración gradual:</strong> pasar partes de un sitio hecho
            con framework a Grid nativo.
          </li>
        </ol>

        <h3>Ventajas de usar Grid puro en proyectos personalizados</h3>
        <ol>
          <li>
            <strong>Menor tamaño de archivos:</strong> sin código CSS que no se
            utiliza.
          </li>
          <li>
            <strong>Mayor control:</strong> personalización exacta según las
            necesidades.
          </li>
          <li>
            <strong>Mejor rendimiento:</strong> optimizaciones específicas para
            el proyecto.
          </li>
          <li>
            <strong>Mantenibilidad:</strong> código más limpio y directo.
          </li>
          <li>
            <strong>Sin dependencias externas:</strong> menos problemas de
            compatibilidad.
          </li>
        </ol>
      </SeccionPost>

      <SeccionPost titulo="Optimización y rendimiento">
        <h3>Consejos para grids con mejor rendimiento</h3>
        <ol>
          <li>
            <strong>
              Prefiere <code>grid-template-areas</code> para layouts complejos:
            </strong>{" "}
            es más legible y mantenible.
          </li>
          <li>
            <strong>
              Usa <code>auto-fill</code> y <code>auto-fit</code> con precaución:
            </strong>{" "}
            pueden crear muchas columnas implícitas.
          </li>
          <li>
            <strong>Limita las animaciones:</strong> anima solo{" "}
            <code>opacity</code> y <code>transform</code> cuando sea posible.
          </li>
          <li>
            <strong>Evita los recálculos frecuentes:</strong> no cambies la
            estructura del grid constantemente.
          </li>
        </ol>

        <h3>Cómo evitar problemas de repintado (repainting)</h3>
        <ol>
          <li>
            <strong>
              Usa la propiedad <code>will-change</code>:
            </strong>{" "}
            indica al navegador qué propiedades cambiarán.
          </li>
          <li>
            <strong>Promueve elementos a su propia capa:</strong> con{" "}
            <code>transform: translateZ(0)</code> o <code>will-change</code>.
          </li>
          <li>
            <strong>Agrupa los cambios del DOM:</strong> usa fragmentos de
            documento para hacer varios cambios a la vez.
          </li>
          <li>
            <strong>Prefiere Grid a los cálculos manuales:</strong> Grid
            optimiza automáticamente el layout.
          </li>
        </ol>

        <h3>Estrategias para layouts complejos en dispositivos de bajo rendimiento</h3>
        <ol>
          <li>
            <strong>Simplifica en móviles:</strong> reduce columnas y
            complejidad.
          </li>
          <li>
            <strong>Carga progresiva:</strong> muestra primero el contenido
            esencial.
          </li>
          <li>
            <strong>Reduce el anidamiento:</strong> evita grids dentro de grids
            cuando sea posible.
          </li>
          <li>
            <strong>Considera Flexbox para las partes simples:</strong> a veces
            es más eficiente para layouts sencillos.
          </li>
        </ol>

        <NotaPost titulo="Consejo pro">
          <p>
            Utiliza las herramientas de desarrollo del navegador para
            monitorizar el rendimiento. Chrome DevTools ofrece el panel
            «Performance», que puede ayudarte a identificar cuellos de botella
            en tus layouts con CSS Grid.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Inspiración y ejemplos del mundo real">
        <h3>Sitios web destacados que utilizan CSS Grid</h3>
        <ul>
          <li>
            <a href="https://www.nytimes.com/" target="_blank" rel="noopener noreferrer">
              The New York Times
            </a>
            : layout tipo periódico.
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/" target="_blank" rel="noopener noreferrer">
              Smashing Magazine
            </a>
            : diseño editorial web.
          </li>
          <li>
            <a href="https://gridbyexample.com/" target="_blank" rel="noopener noreferrer">
              Grid by Example
            </a>
            : colección de patrones Grid.
          </li>
          <li>
            <a href="https://labs.jensimmons.com/" target="_blank" rel="noopener noreferrer">
              Jen Simmons Lab
            </a>
            : experimentos de diseño web.
          </li>
          <li>
            <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
              Mozilla Developer Network
            </a>
            : documentación técnica.
          </li>
        </ul>

        <h3>Herramientas de desarrollo</h3>
        <p>
          Las herramientas de desarrollo son esenciales para depurar y
          optimizar tus layouts con CSS Grid. Estas son algunas que
          recomendamos:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Firefox DevTools",
              texto: (
                <>
                  <p>Las más avanzadas para CSS Grid:</p>
                  <ul>
                    <li>Muestran líneas numeradas.</li>
                    <li>Visualizan las áreas con colores.</li>
                    <li>Muestran los nombres de las áreas.</li>
                  </ul>
                </>
              ),
            },
            {
              titulo: "Chrome DevTools",
              texto: (
                <ul>
                  <li>Activa la visualización de Grid desde el panel Layout.</li>
                  <li>Muestran líneas y áreas Grid.</li>
                  <li>Permiten experimentar con las propiedades.</li>
                </ul>
              ),
            },
          ]}
        />

        <h3>Extensiones útiles</h3>
        <ul>
          <li>
            <strong>CSS Grid Inspector:</strong> extensión para Firefox que
            mejora la visualización.
          </li>
          <li>
            <strong>Gridman:</strong> extensión de Chrome para superponer una
            cuadrícula personalizable.
          </li>
          <li>
            <strong>CSS Grid Cheat Sheet:</strong> referencia rápida de las
            propiedades Grid.
          </li>
        </ul>

        <h3>Generadores de código Grid</h3>
        <ul>
          <li>
            <a href="https://cssgrid-generator.netlify.app/" target="_blank" rel="noopener noreferrer">
              CSS Grid Generator
            </a>
            : interfaz visual para generar código.
          </li>
          <li>
            <a href="https://grid.layoutit.com/" target="_blank" rel="noopener noreferrer">
              Layoutit Grid
            </a>
            : creador visual de layouts Grid.
          </li>
          <li>
            <a href="https://cssgridgarden.com/" target="_blank" rel="noopener noreferrer">
              Grid Garden
            </a>
            : juego para aprender Grid de forma interactiva.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          CSS Grid es una herramienta indispensable para el desarrollo web
          moderno. Con su capacidad para crear layouts complejos y responsive,
          permite a las desarrolladoras implementar diseños que antes eran
          difíciles o imposibles. Dominar Grid te dará un control preciso sobre
          tus layouts y elevará tus habilidades de desarrollo frontend a un
          nuevo nivel.
        </p>
        <p>
          Este post se complementa con un proyecto en GitHub donde aplicamos
          todos estos conceptos en ejemplos prácticos y compartimos el código
          con la comunidad FemCoders Club.
        </p>

        <h3>¡Comparte tus creaciones con la comunidad!</h3>
        <NotaPost titulo="¿Te animas a contribuir con tu propio ejemplo de Grid?">
          <p>
            Haz un <strong>pull request</strong> a nuestro repositorio y añade
            tu ejemplo creativo al proyecto:{" "}
            <a
              href="https://github.com/femcodersclub/femcoders-css-grid-examples/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              contribuir al proyecto
            </a>
            .
          </p>
          <p>¡Hagamos crecer juntas la colección de ejemplos!</p>
        </NotaPost>
        <p>
          Recuerda que la práctica es la clave para dominar CSS Grid. No dudes
          en experimentar con los ejemplos del repositorio y adaptarlos a tus
          propios proyectos. ¡La comunidad FemCoders Club está aquí para
          apoyarte en tu camino de aprendizaje!
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default CssGrid;
