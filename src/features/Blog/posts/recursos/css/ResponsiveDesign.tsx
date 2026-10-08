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

const ResponsiveDesign: React.FC = () => (
  <>
      <Helmet>
        <title>
          Responsive design: de principiante a experta con media queries | FemCoders Club
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
          content="Responsive design: de principiante a experta con media queries"
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
          content="Responsive design: de principiante a experta"
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

    <PlantillaPost
      ruta="/recursos/css/responsive-design"
      titulo="Responsive design: de principiante a experta"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={22}
      entradilla={
        <p>
          El responsive design es una metodología fundamental en el desarrollo
          web moderno que permite que nuestros sitios se adapten perfectamente a
          cualquier dispositivo. En este artículo de FemCoders Club
          exploraremos desde los conceptos básicos hasta las técnicas más
          avanzadas, con ejemplos visuales de nuestro proyecto
          ResponsiveShowcase.
        </p>
      }
    >
      <SeccionPost titulo="¿Qué es responsive design y por qué es crucial?">
        <p>
          El responsive design es una metodología de diseño web que hace que
          las páginas se adapten automáticamente a diferentes tamaños de
          pantalla y dispositivos. Con más del 60 % del tráfico web proveniente
          de dispositivos móviles, es imprescindible que nuestros sitios
          ofrezcan una experiencia óptima en todos los dispositivos.
        </p>
        <TarjetasPost
          titulo="Beneficios clave del responsive design"
          columnas={3}
          tarjetas={[
            {
              titulo: "Mejor experiencia de usuario",
              texto:
                "Quien te visita puede navegar cómodamente desde cualquier dispositivo.",
            },
            {
              titulo: "SEO mejorado",
              texto:
                "Google prioriza los sitios mobile-friendly en sus resultados.",
            },
            {
              titulo: "Mantenimiento eficiente",
              texto: "Una sola base de código para todos los dispositivos.",
            },
            {
              titulo: "Mayor alcance",
              texto:
                "Accesible para personas con diferentes tipos de dispositivos.",
            },
            {
              titulo: "Mejor conversión",
              texto:
                "Quien navega a gusto tiene más probabilidad de completar acciones.",
            },
          ]}
        />
        <p>
          Explora nuestro proyecto{" "}
          <a
            href="https://github.com/femcodersclub/ResponsiveShowcase"
            target="_blank"
            rel="noopener noreferrer"
          >
            ResponsiveShowcase en GitHub
          </a>{" "}
          o{" "}
          <a
            href="https://femcodersclub.github.io/ResponsiveShowcase/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mira los ejemplos en vivo
          </a>
          .
        </p>
      </SeccionPost>

      <SeccionPost titulo="Nivel básico: desktop-first vs. mobile-first">
        <p>
          Existen dos enfoques principales para implementar responsive design.
          Analicemos cada uno con ejemplos visuales de nuestro proyecto{" "}
          <strong>ResponsiveShowcase</strong>.
        </p>

        <h3>Enfoque desktop-first (tradicional)</h3>
        <p>
          El enfoque desktop-first diseña primero para pantallas grandes y
          luego adapta hacia dispositivos más pequeños usando media queries con{" "}
          <code>max-width</code>. Observemos cómo la web de FemCoders Club
          implementa este enfoque:
        </p>
        <ImagenPost
          src="/public-optimized/desktop/assets/css/femcoders-desktop-first.webp"
          alt="La portada de la web de FemCoders Club en un monitor, una tableta y un móvil: la misma composición de texto y foto se reorganiza y estrecha en cada pantalla"
        />
        <CodigoPost lenguaje="CSS">{`/* DESKTOP-FIRST: Empezamos con desktop */
.features-grid {
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
}

/* Adaptamos hacia móvil con max-width */
@media screen and (max-width: 767px) {
  .features-grid {
    grid-template-columns: 1fr; /* 1 columna en móvil */
  }
}`}</CodigoPost>

        <h3>Enfoque mobile-first (moderno)</h3>
        <p>
          El enfoque mobile-first diseña primero para dispositivos móviles y
          luego mejora progresivamente hacia pantallas más grandes usando media
          queries con <code>min-width</code>.
        </p>
        <ImagenPost
          src="/public-optimized/desktop/assets/css/mobile-first-example.webp"
          alt="Ilustración del enfoque mobile-first: una flecha va de un móvil con el contenido en una columna a un monitor con el contenido repartido en varias columnas"
        />
        <CodigoPost lenguaje="CSS">{`/* MOBILE-FIRST: Empezamos con móvil */
.features-grid {
  grid-template-columns: 1fr; /* 1 columna por defecto */
}

/* Mejoramos para desktop con min-width */
@media screen and (min-width: 992px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  }
}`}</CodigoPost>

        <h3>Comparativa: desktop-first vs. mobile-first</h3>
        <TablaPost descripcion="Comparativa entre los enfoques desktop-first y mobile-first">
          <table>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Desktop-first</th>
                <th>Mobile-first</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Filosofía de diseño</strong></td>
                <td>Diseño para desktop, adaptar a móvil</td>
                <td>Diseño para móvil, mejorar en desktop</td>
              </tr>
              <tr>
                <td><strong>Media queries</strong></td>
                <td>max-width (descendente)</td>
                <td>min-width (ascendente)</td>
              </tr>
              <tr>
                <td><strong>Performance en móvil</strong></td>
                <td>CSS innecesario cargado</td>
                <td>Solo CSS necesario</td>
              </tr>
              <tr>
                <td><strong>Experiencia en móvil</strong></td>
                <td>Adaptación, no optimización</td>
                <td>Nativa y optimizada</td>
              </tr>
              <tr>
                <td><strong>SEO en móvil</strong></td>
                <td>Penalización por velocidad</td>
                <td>Mejor ranking móvil</td>
              </tr>
              <tr>
                <td><strong>Casos de uso</strong></td>
                <td>Sitios legacy, aplicaciones desktop</td>
                <td>Nuevos proyectos, sitios públicos</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <NotaPost titulo="Ejemplo real">
          <p>
            La web de FemCoders Club utiliza un enfoque desktop-first
            tradicional, mientras que sitios como Stripe o Linear implementan
            mobile-first. En nuestro proyecto ResponsiveShowcase puedes comparar
            ambos enfoques lado a lado.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Breakpoints fundamentales">
        <p>
          Los breakpoints son los puntos específicos donde el diseño cambia para
          adaptarse a diferentes tamaños de pantalla. Nuestro debug panel
          muestra cómo funcionan en tiempo real.
        </p>
        <CodigoPost lenguaje="CSS">{`/* BREAKPOINTS MOBILE-FIRST ESENCIALES */
/* Mobile: 320px+ (estilos base) */

@media screen and (min-width: 768px) {
  /* Tablets */
}

@media screen and (min-width: 992px) {
  /* Desktop */
}`}</CodigoPost>

        <h3>Análisis de breakpoints en frameworks populares</h3>
        <TablaPost descripcion="Breakpoints de Bootstrap 5, Tailwind CSS y ResponsiveShowcase">
          <table>
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
        </TablaPost>

        <ImagenPost
          src="/public-optimized/desktop/assets/css/responsiveshowcase-overview.webp"
          alt="ResponsiveShowcase abierto junto a Chrome DevTools: la ventana estrecha muestra el panel de depuración con un viewport de 826 px y el breakpoint Tablet/Laptop"
          pie="Chrome DevTools: testing de breakpoints"
        />
      </SeccionPost>

      <SeccionPost titulo="Nivel intermedio: layouts flexibles">
        <h3>Grid adaptativo inteligente</h3>
        <p>
          Una de las técnicas más poderosas en responsive design es crear grids
          que se adapten automáticamente según el espacio disponible. Observa
          cómo nuestro proyecto ResponsiveShowcase implementa esta técnica:
        </p>
        <CodigoPost lenguaje="CSS">{`/* GRID QUE SE ADAPTA AUTOMÁTICAMENTE */
.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing);
}

/* Ventajas de auto-fit + minmax():
   - Se adapta fluidamente al espacio disponible
   - Mantiene tamaño mínimo legible (400px)
   - No hay breakpoints rígidos */`}</CodigoPost>

        <NotaPost titulo="¿Quieres dominar CSS Grid?">
          <p>
            Consulta nuestro artículo completo:{" "}
            <Link to="/recursos/css/css-grid">
              CSS Grid: domina el sistema de cuadrículas en tu página web
            </Link>
            .
          </p>
        </NotaPost>

        <h3>Navegación responsive: de horizontal a menú hamburguesa</h3>
        <p>
          La navegación es crítica en responsive design. Mira cómo evoluciona
          nuestra navegación de horizontal en desktop a menú hamburguesa en
          móvil:
        </p>
        <ImagenPost
          src="/assets/css/navigation-evolution.webp"
          alt="Animación de ResponsiveShowcase: al estrecharse la ventana, la barra de navegación horizontal se convierte en un menú hamburguesa"
        />

        <h3>Layouts flexibles con Flexbox</h3>
        <p>
          Flexbox es fundamental para crear componentes responsive que se
          adapten fluidamente. Es especialmente útil para navegaciones, barras
          de herramientas y layouts de una dimensión.
        </p>
        <NotaPost titulo="Profundiza en Flexbox">
          <p>
            Lee nuestro artículo detallado{" "}
            <Link to="/recursos/css/flexbox">
              Flexbox: el poder de crear layouts flexibles
            </Link>{" "}
            para dominar los layouts unidimensionales.
          </p>
        </NotaPost>

        <h3>Combinando Grid y Flexbox para layouts perfectos</h3>
        <p>
          La verdadera magia del responsive design moderno ocurre cuando
          combinas CSS Grid para el layout principal con Flexbox para los
          componentes internos. Esta estrategia híbrida te da lo mejor de ambos
          mundos.
        </p>
        <NotaPost titulo="Estrategias avanzadas">
          <p>
            Descubre cómo combinar ambas técnicas en nuestro artículo{" "}
            <Link to="/recursos/css/css-grid-flexbox">
              Estrategias avanzadas: combinando Grid y Flexbox en CSS
            </Link>
            .
          </p>
        </NotaPost>

        <h3>Imágenes responsivas en acción</h3>
        <p>
          Las imágenes responsivas van más allá del simple{" "}
          <code>max-width: 100%</code>. Incluyen técnicas como{" "}
          <code>aspect-ratio</code>, <code>object-fit</code> y carga
          condicional según el dispositivo:
        </p>
        <ImagenPost
          src="/public-optimized/desktop/assets/css/responsive-images.webp"
          alt="El logotipo de FemCoders Club en un monitor, una tableta y un móvil: la misma imagen se escala para ocupar cada pantalla sin deformarse"
          pie="Imágenes responsivas: escalado inteligente vs. recorte controlado"
        />
      </SeccionPost>

      <SeccionPost titulo="Nivel avanzado: técnicas modernas">
        <h3>Container queries: la evolución de las media queries</h3>
        <p>
          En nuestro proyecto{" "}
          <a
            href="https://femcodersclub.github.io/ResponsiveShowcase/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ResponsiveShowcase
          </a>{" "}
          se puede observar cómo las <strong>container queries</strong>{" "}
          representan el futuro del responsive design. Los componentes se
          adaptan a <em>su contenedor</em>, no al viewport.
        </p>
        <CodigoPost lenguaje="CSS">{`/* CONTAINER QUERIES: El componente se adapta a SU contenedor */
.card-container {
  container-type: inline-size;
}

@container (min-width: 350px) {
  .card {
    display: flex; /* Cambia cuando el contenedor es ≥350px */
    gap: 1rem;
  }
}`}</CodigoPost>

        <h3>Tipografía fluida con clamp()</h3>
        <p>
          Con{" "}
          <a
            href="https://github.com/femcodersclub/ResponsiveShowcase/blob/main/styles.css#L41"
            target="_blank"
            rel="noopener noreferrer"
          >
            ResponsiveShowcase
          </a>{" "}
          puedes observar cómo el texto escala fluidamente sin necesidad de
          breakpoints gracias a <code>clamp()</code>.
        </p>
        <CodigoPost lenguaje="CSS">{`/* TIPOGRAFÍA QUE ESCALA AUTOMÁTICAMENTE */
.hero-title {
  font-size: clamp(1.8rem, 4.5vw, 3.5rem);
  /* Mínimo: 1.8rem, Máximo: 3.5rem, Preferido: 4.5vw */
}

/* Sin clamp() necesitarías múltiples media queries */`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Herramientas de desarrollo y debugging">
        <h3>Debug panel en tiempo real</h3>
        <p>
          El proyecto incluye un <strong>debug panel</strong> que muestra
          información útil como el tamaño del viewport, el breakpoint activo, el
          tipo de dispositivo y la orientación. Puedes ver cómo está
          implementado en el siguiente fragmento de código:{" "}
          <a
            href="https://github.com/femcodersclub/ResponsiveShowcase/blob/main/styles.css#L170"
            target="_blank"
            rel="noopener noreferrer"
          >
            ver la implementación del debug panel en GitHub
          </a>
          .
        </p>

        <h3>Chrome DevTools para responsive design</h3>
        <p>
          Chrome DevTools es una herramienta imprescindible para testear y
          depurar diseño responsive. Permite simular distintos dispositivos,
          tamaños de pantalla, resoluciones y orientaciones, todo en tiempo real
          y sin necesidad de usar un móvil físico. Además, puedes inspeccionar
          cómo se comportan tus media queries, container queries y layouts en
          diferentes condiciones, lo que acelera el proceso de diseño y
          validación.
        </p>

        <TarjetasPost
          titulo="Herramientas recomendadas"
          columnas={3}
          tarjetas={[
            {
              titulo: "Responsively App",
              texto: "Visualiza múltiples dispositivos simultáneamente.",
              enlace: "https://responsively.app/",
            },
            {
              titulo: "Chrome DevTools",
              texto: (
                <>
                  Device Mode (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd>)
                  para simular dispositivos.
                </>
              ),
            },
            {
              titulo: "Firefox DevTools",
              texto: "Excelente Responsive Design Mode.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Performance y optimización">
        <h3>Testing de performance responsive</h3>
        <p>
          <a
            href="https://developer.chrome.com/docs/lighthouse/overview/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lighthouse
          </a>{" "}
          es una herramienta integrada en Chrome que permite auditar el
          rendimiento, la accesibilidad y las buenas prácticas de tu sitio web,
          especialmente en dispositivos móviles. Es muy útil para detectar
          problemas como imágenes pesadas, tiempos de carga lentos, falta de
          adaptabilidad o malas prácticas en CSS y JavaScript.
        </p>
        <p>
          Al usar Lighthouse, puedes optimizar tu diseño responsive asegurando
          una experiencia rápida y eficiente en cualquier dispositivo.
        </p>

        <h3>Consejos para mejorar la performance en móviles</h3>
        <ul>
          <li>
            <strong>Optimizar imágenes:</strong> usar formatos modernos (WebP,
            AVIF) y tamaños apropiados.
          </li>
          <li>
            <strong>Critical CSS:</strong> cargar solo el CSS necesario para el
            viewport inicial.
          </li>
          <li>
            <strong>Lazy loading:</strong> cargar imágenes solo cuando sean
            necesarias.
          </li>
          <li>
            <strong>Reducir peticiones HTTP:</strong> combinar archivos CSS
            cuando sea posible.
          </li>
          <li>
            <strong>Respetar las preferencias de cada persona:</strong>{" "}
            <code>prefers-reduced-motion</code>.
          </li>
        </ul>
        <CodigoPost lenguaje="CSS">{`/* RESPETO POR PREFERENCIAS DE ACCESIBILIDAD */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Casos reales y mejores prácticas">
        <h3>Análisis: FemCoders Club vs. sitios mobile-first</h3>
        <TablaPost descripcion="Enfoque responsive de FemCoders Club, Stripe y Linear">
          <table>
            <thead>
              <tr>
                <th>Sitio web</th>
                <th>Enfoque</th>
                <th>Características</th>
                <th>Performance en móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>FemCoders Club</strong></td>
                <td>Desktop-first</td>
                <td>Navegación horizontal → hamburguesa; grid que se colapsa</td>
                <td>Buena con optimizaciones</td>
              </tr>
              <tr>
                <td><strong>Stripe</strong></td>
                <td>Mobile-first</td>
                <td>Diseño progresivo; componentes modulares</td>
                <td>Excelente</td>
              </tr>
              <tr>
                <td><strong>Linear</strong></td>
                <td>Mobile-first</td>
                <td>Tipografía fluida; container queries</td>
                <td>Excelente</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <ListaMarcadaPost titulo="Checklist para un responsive design perfecto" tipo="bien">
          <li>
            <strong>Viewport meta tag:</strong>{" "}
            <code>
              &lt;meta name="viewport" content="width=device-width,
              initial-scale=1.0"&gt;
            </code>
          </li>
          <li>
            <strong>Imágenes flexibles:</strong> usar{" "}
            <code>max-width: 100%</code> como mínimo.
          </li>
          <li>
            <strong>Texto legible:</strong> un <code>font-size</code> mínimo de
            16px en móvil.
          </li>
          <li>
            <strong>Áreas táctiles:</strong> un mínimo de 44px para botones y
            enlaces.
          </li>
          <li>
            <strong>Testing real:</strong> probar en dispositivos físicos.
          </li>
          <li>
            <strong>Performance:</strong> optimizar para conexiones lentas.
          </li>
          <li>
            <strong>Accesibilidad:</strong> tener en cuenta los lectores de
            pantalla.
          </li>
        </ListaMarcadaPost>
      </SeccionPost>

      <SeccionPost titulo="Proyecto ResponsiveShowcase: tu laboratorio de aprendizaje">
        <p>
          Hemos creado un proyecto completo que implementa todas las técnicas
          que hemos cubierto en este artículo. Es tu laboratorio personal para
          experimentar y aprender.
        </p>
        <ImagenPost
          src="/public-optimized/desktop/assets/css/devtools-breakpoints.webp"
          alt="ResponsiveShowcase en un monitor, una tableta y un móvil: la cabecera con el título, las secciones por niveles y la navegación adaptada a cada pantalla"
        />

        <TarjetasPost
          titulo="¿Qué encontrarás en el proyecto?"
          tarjetas={[
            {
              titulo: "Desktop-first vs. mobile-first",
              texto: "Dos versiones del mismo diseño para compararlas.",
            },
            {
              titulo: "Debug panel interactivo",
              texto: "Información en tiempo real sobre breakpoints.",
            },
            {
              titulo: "Ejemplos de Grid adaptativo",
              texto: "De 4 → 2 → 1 columna.",
            },
            {
              titulo: "Navegación responsive",
              texto: "De horizontal a menú hamburguesa.",
            },
            {
              titulo: "Tipografía fluida",
              texto: (
                <>
                  Implementación con <code>clamp()</code>.
                </>
              ),
            },
            {
              titulo: "Container queries",
              texto: "Ejemplos funcionando.",
            },
            {
              titulo: "Documentación completa",
              texto: "README con explicaciones detalladas.",
            },
          ]}
        />

        <h3>Cómo usar el proyecto para aprender</h3>
        <ol>
          <li>
            <strong>Clona el repositorio:</strong>{" "}
            <code>
              git clone https://github.com/femcodersclub/ResponsiveShowcase.git
            </code>
          </li>
          <li>
            <strong>Abre index.html:</strong> explora los diferentes ejemplos.
          </li>
          <li>
            <strong>Examina el código:</strong> <code>styles.css</code> y{" "}
            <code>main.js</code> contienen todas las técnicas.
          </li>
          <li>
            <strong>Experimenta:</strong> modifica valores y observa los
            cambios.
          </li>
          <li>
            <strong>Toma capturas:</strong> usa el proyecto para tus propios
            artículos o presentaciones.
          </li>
        </ol>

        <NotaPost titulo="¡Contribuye al proyecto!">
          <p>
            ¿Tienes ideas para mejorar ResponsiveShowcase? ¡Nos encantaría
            recibir tu{" "}
            <a
              href="https://github.com/femcodersclub/ResponsiveShowcase/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              pull request
            </a>
            !
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Técnicas avanzadas para 2025">
        <h3>CSS moderno para responsive design</h3>
        <p>
          CSS moderno: <code>aspect-ratio</code>, logical properties y
          funciones avanzadas.
        </p>
        <CodigoPost lenguaje="CSS">{`/* CSS MODERNO PARA RESPONSIVE DESIGN */

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
}`}</CodigoPost>

        <TarjetasPost
          titulo="Tendencias emergentes"
          tarjetas={[
            {
              titulo: "Intrinsic Web Design",
              texto: "Layouts que se adaptan al contenido de forma natural.",
            },
            {
              titulo: "Component-Driven Design",
              texto: "Componentes que son responsive por defecto.",
            },
            {
              titulo: "Progressive Enhancement",
              texto:
                "Mejoras graduales según las capacidades del dispositivo.",
            },
            {
              titulo: "Contextual Design",
              texto:
                "Adaptación según el contexto de uso, no solo según el tamaño.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales para seguir aprendiendo">
        <TarjetasPost
          titulo="Documentación oficial y guías"
          columnas={3}
          tarjetas={[
            {
              titulo: "MDN Web Docs",
              texto:
                "Documentación completa sobre media queries y responsive design.",
              enlace: "https://developer.mozilla.org/docs/Web/CSS/Media_Queries",
            },
            {
              titulo: "Web.dev",
              texto: "Guías modernas de Google sobre responsive web design.",
              enlace: "https://web.dev/responsive-web-design-basics/",
            },
            {
              titulo: "CSS-Tricks",
              texto: "Artículos detallados sobre técnicas CSS responsive.",
              enlace: "https://css-tricks.com/guides/",
            },
          ]}
        />

        <TarjetasPost
          titulo="Herramientas para generar código"
          tarjetas={[
            {
              titulo: "Fluid Type Calculator",
              texto: (
                <>
                  Genera funciones <code>clamp()</code> automáticamente.
                </>
              ),
              enlace: "https://fluid-typography.netlify.app/",
            },
            {
              titulo: "CSS Grid Generator",
              texto: "Crea layouts Grid visualmente.",
              enlace: "https://grid.layoutit.com/",
            },
            {
              titulo: "Grid Garden",
              texto: "Aprende Grid jugando.",
              enlace: "https://cssgridgarden.com/",
            },
            {
              titulo: "Flexbox Froggy",
              texto: "Aprende Flexbox de forma divertida.",
              enlace: "https://flexboxfroggy.com/",
            },
          ]}
        />

        <TarjetasPost
          titulo="Comunidad y recursos de FemCoders Club"
          columnas={3}
          tarjetas={[
            {
              titulo: "Slack de FemCoders Club",
              texto: "Únete a nuestra comunidad.",
              enlace:
                "https://communityinviter.com/apps/femcodersclub/femcoders-club",
            },
            {
              titulo: "Blog de FemCoders Club",
              texto: "Más artículos técnicos.",
              enlace: "/blog",
            },
            {
              titulo: "GitHub de FemCoders Club",
              texto: "Proyectos open source.",
              enlace: "https://github.com/femcodersclub",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          El responsive design ha evolucionado de una «buena práctica» a una
          necesidad absoluta en el desarrollo web moderno. Desde los conceptos
          básicos de media queries hasta las técnicas más avanzadas como
          container queries y tipografía fluida, dominar estas habilidades te
          convertirá en una desarrolladora frontend más competente y versátil.
        </p>
        <ListaMarcadaPost titulo="Lo que hemos explorado en este artículo" tipo="bien">
          <li>
            <strong>Los fundamentos</strong> del responsive design y por qué es
            crucial.
          </li>
          <li>
            <strong>La comparación práctica</strong> entre desktop-first y
            mobile-first.
          </li>
          <li>
            <strong>Breakpoints estratégicos</strong> y cómo elegirlos.
          </li>
          <li>
            <strong>Técnicas intermedias</strong> para layouts flexibles.
          </li>
          <li>
            <strong>Técnicas avanzadas</strong> con CSS moderno.
          </li>
          <li>
            <strong>Herramientas de debugging</strong> y optimización.
          </li>
          <li>
            <strong>Ejemplos visuales reales</strong> con nuestro proyecto
            ResponsiveShowcase.
          </li>
        </ListaMarcadaPost>
        <p>
          El proyecto ResponsiveShowcase está diseñado para ser tu compañero de
          aprendizaje. Úsalo para experimentar, tomar capturas para tus propios
          proyectos y como referencia cuando implementes responsive design en
          sitios reales.
        </p>

        <NotaPost titulo="Recuerda">
          <p>
            El responsive design no consiste solo en hacer que las cosas «se
            vean bien» en móvil. Se trata de crear experiencias optimizadas y
            accesibles para cada contexto de uso. Cada decisión de diseño debe
            considerar no solo el tamaño de pantalla, sino también la velocidad
            de conexión, el método de entrada y las necesidades de cada persona.
          </p>
        </NotaPost>

        <h3>¿Cuál es tu próximo paso?</h3>
        <ol>
          <li>
            <strong>Practica con el proyecto:</strong> clona ResponsiveShowcase
            y experimenta.
          </li>
          <li>
            <strong>Aplica en proyectos reales:</strong> implementa mobile-first
            en tu próximo desarrollo.
          </li>
          <li>
            <strong>Comparte con la comunidad:</strong> sube tus experimentos a
            GitHub.
          </li>
          <li>
            <strong>Mantente actualizada:</strong> las especificaciones CSS
            evolucionan constantemente.
          </li>
        </ol>
        <p>
          ¡La comunidad de FemCoders Club está aquí para apoyarte en tu camino!
          No dudes en compartir tus proyectos, hacer preguntas o contribuir con
          nuevos ejemplos al repositorio.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ResponsiveDesign;
