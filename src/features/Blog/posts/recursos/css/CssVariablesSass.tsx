import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BookOpen, Wrench } from "lucide-react";
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

const CssVariablesSass: React.FC = () => (
  <>
      <Helmet>
        <title>CSS Variables vs Sass: Cuándo usar cada una para máximo impacto | femCoders Club</title>
        <meta
          name="description"
          content="Descubre cuándo usar CSS Custom Properties y cuándo Sass variables. Guía completa con ejemplos prácticos, arquitectura híbrida y migración estratégica para desarrollo frontend moderno."
        />
        <meta
          name="keywords"
          content="CSS Variables, Sass variables, CSS Custom Properties, preprocesador CSS, theming dinámico, modo oscuro, arquitectura CSS, femcoders club, desarrollo frontend, variables CSS"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/css-variables-vs-sass"
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
          content="CSS Variables vs Sass: Cuándo usar cada una para máximo impacto | femCoders Club"
        />
        <meta
          property="og:description"
          content="Guía completa para combinar CSS Variables y Sass: arquitectura híbrida, theming dinámico y casos de uso reales para desarrollo frontend moderno."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/css-variables-vs-sass"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CSS-Variables-Sass.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CSS Variables vs Sass: Cuándo usar cada una para máximo impacto"
        />
        <meta
          name="twitter:description"
          content="Aprende a combinar CSS Variables y Sass estratégicamente para crear arquitecturas CSS escalables y sistemas de theming dinámicos."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/CSS-Variables-Sass.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-07-29T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Sass" />
        <meta property="article:tag" content="Variables CSS" />
        <meta property="article:tag" content="Frontend" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/css/css-variables-vs-sass"
      titulo="CSS Variables vs Sass: cuándo usar cada una para máximo impacto"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={25}
      entradilla={
        <>
          <p>
            ¿Alguna vez te has preguntado por qué tu tema oscuro tarda una eternidad en cambiar o por qué necesitas recompilar todo tu CSS cada vez que quieres ajustar un color? La respuesta está en entender cuándo usar{" "}
            <strong>CSS Custom Properties</strong> (variables CSS) y cuándo quedarte con las clásicas{" "}
            <strong>variables de Sass</strong>.
          </p>
          <p>
            Después de años trabajando con ambas tecnologías, he descubierto que el secreto no está en elegir una sobre la otra, sino en{" "}
            <strong>combinarlas estratégicamente</strong>. En este post te voy a mostrar exactamente cuándo usar cada una para que tu código sea más eficiente, mantenible y, sobre todo, ¡que funcione como esperas!
          </p>
        </>
      }
    >
      <SeccionPost titulo="¿Por qué importa esta diferencia?">
        <p>
          Imagínate esto: estás desarrollando un dashboard corporativo que necesita cambiar entre tema claro y oscuro al instante. Con Sass variables, cada cambio requiere recompilación. Con CSS Variables, el cambio es inmediato.{" "}
          <strong>Pero aquí viene el plot twist</strong>: para un sistema de espaciado consistente, Sass variables son más eficientes.
        </p>
        <p>La clave está en entender que <strong>no es una batalla</strong>, es una colaboración.</p>
      </SeccionPost>

      <SeccionPost titulo="Errores comunes que debes evitar">
        <p>
          Después de años trabajando con ambas tecnologías, he visto estos errores una y otra vez. Te ahorro tiempo y frustración:
        </p>

        <h3>1. Usar CSS Variables en media queries</h3>
        <CodigoPost lenguaje="CSS">{`/* ❌ Esto NO funciona */
@media (min-width: var(--breakpoint-md)) {
  .container { width: 100%; }
}

/* ✅ Esto SÍ funciona */
@media (min-width: 768px) {
  .container {
    width: var(--container-width); /* Variables dentro sí funcionan */
  }
}`}</CodigoPost>

        <h3>2. Migrar todas las variables de Sass de una vez</h3>
        <p>
          <strong>Error típico:</strong> «Voy a convertir todas mis 200 variables de Sass a CSS Variables este fin de semana».
        </p>
        <p>
          <strong>Enfoque correcto:</strong> migra gradualmente, empezando por colores y valores que realmente necesitan ser dinámicos.
        </p>

        <h3>3. No considerar fallbacks para navegadores antiguos</h3>
        <CodigoPost lenguaje="CSS">{`/* ❌ Sin fallback */
.button {
  background: var(--primary-color);
}

/* ✅ Con fallback */
.button {
  background: #3b82f6; /* Fallback */
  background: var(--primary-color, #3b82f6); /* Con valor por defecto */
}`}</CodigoPost>

        <h3>4. Usar CSS Variables para valores que nunca cambian</h3>
        <p>
          Si tu <code>--border-radius: 8px</code> nunca va a cambiar dinámicamente, mejor usa una variable de Sass. Es más eficiente.
        </p>

        <h3>5. Olvidar la cascada de CSS Variables</h3>
        <CodigoPost lenguaje="CSS">{`/* Las CSS Variables respetan la cascada */
:root { --color: blue; }
.card { --color: red; } /* Sobrescribe la de :root */
.card .title { color: var(--color); } /* Será roja, no azul */`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Casos de uso reales en producción">
        <p>
          Aquí tienes ejemplos concretos de cómo grandes empresas y proyectos reales implementan esta arquitectura híbrida:
        </p>

        <h3>E-commerce multitienda (Shopify, WooCommerce)</h3>
        <TablaPost descripcion="Qué va en Sass y qué en CSS Variables en un e-commerce multitienda">
          <table>
            <thead>
              <tr>
                <th>Sass Variables</th>
                <th>CSS Variables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grid systems y breakpoints</td>
                <td>Colores de marca por tienda</td>
              </tr>
              <tr>
                <td>Espaciado consistente</td>
                <td>Tipografía personalizable</td>
              </tr>
              <tr>
                <td>Componentes base</td>
                <td>Temas estacionales dinámicos</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <h3>Dashboards corporativos (Analytics, CRM)</h3>
        <CodigoPost lenguaje="SCSS">{`// Sass: Estructura fija del dashboard
$sidebar-width: 280px;
$header-height: 64px;
$card-padding: 24px;

// CSS Variables: Personalización por cliente
:root {
  --brand-primary: var(--client-primary, #3b82f6);
  --brand-secondary: var(--client-secondary, #64748b);
  --dashboard-theme: var(--client-theme, 'light');
}`}</CodigoPost>
        <CodigoPost lenguaje="JavaScript">{`// JavaScript cambia los valores según el cliente logueado
document.documentElement.style.setProperty('--client-primary', clientConfig.primaryColor);`}</CodigoPost>

        <TarjetasPost
          titulo="Aplicaciones educativas (Moodle, Canvas)"
          columnas={3}
          tarjetas={[
            { titulo: "Sass", texto: "Layout responsive y componentes educativos." },
            {
              titulo: "CSS Variables",
              texto: "Temas de accesibilidad (alto contraste, tamaño de fuente, modo dislexia).",
            },
            {
              titulo: "Beneficio",
              texto: "Cambios instantáneos sin recargar la página para una mejor experiencia de aprendizaje.",
            },
          ]}
        />

        <h3>Aplicaciones SaaS (Notion, Figma, Linear)</h3>
        <CodigoPost lenguaje="SCSS">{`// Respuesta a preferencias del sistema
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --text-primary: #f8fafc;
  }
}

// Respuesta a preferencias de movimiento
@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-duration: 0ms;
    --animation-duration: 0ms;
  }
}`}</CodigoPost>

        <h3>Design systems empresariales</h3>
        <p>
          Empresas como GitHub, Shopify y Atlassian usan esta arquitectura híbrida en sus design systems:
        </p>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            { titulo: "Sass", texto: "Tokens de espaciado, tipografía y breakpoints." },
            { titulo: "CSS Variables", texto: "Paletas de color, estados de componentes y temas." },
            { titulo: "Resultado", texto: "Consistencia visual y flexibilidad de theming." },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Herramientas y recursos recomendados">
        <p>
          Estas herramientas te harán la vida mucho más fácil al trabajar con la arquitectura híbrida:
        </p>

        <TarjetasPost
          titulo="Para desarrollo y debugging"
          columnas={3}
          tarjetas={[
            {
              titulo: "CSS Viewer (extensión de Chrome)",
              texto: "Inspecciona CSS Variables en tiempo real.",
              enlace: "https://chrome.google.com/webstore/detail/css-viewer/ggfgijbpiheegefliciemofobhmofgce",
              icono: <Wrench aria-hidden="true" />,
            },
            {
              titulo: "Firefox DevTools",
              texto: "La mejor herramienta nativa para depurar CSS Variables (muestra los valores computados).",
              icono: <Wrench aria-hidden="true" />,
            },
            {
              titulo: "Extensión de Sass para VS Code",
              texto: "Resaltado de sintaxis y autocompletado.",
              enlace: "https://marketplace.visualstudio.com/items?itemName=syler.sass-indented",
              icono: <Wrench aria-hidden="true" />,
            },
          ]}
        />

        <TarjetasPost
          titulo="Generadores y herramientas online"
          columnas={3}
          tarjetas={[
            {
              titulo: "Coolors.co",
              texto: "Genera paletas de colores y las exporta como CSS Variables.",
              enlace: "https://coolors.co",
              icono: <Wrench aria-hidden="true" />,
            },
            {
              titulo: "Fluid Type Scale",
              texto: "Crea escalas tipográficas fluidas con CSS Variables.",
              enlace: "https://www.fluid-type-scale.com",
              icono: <Wrench aria-hidden="true" />,
            },
            {
              titulo: "CSS Variables Generator",
              texto: "Convierte colores Sass a CSS Variables automáticamente.",
              enlace: "https://css-variables-generator.netlify.app",
              icono: <Wrench aria-hidden="true" />,
            },
          ]}
        />

        <TarjetasPost
          titulo="Testing y performance"
          columnas={3}
          tarjetas={[
            {
              titulo: "Lighthouse",
              texto: "Mide el impacto de tu CSS en el rendimiento.",
              enlace: "https://developer.chrome.com/docs/lighthouse/overview",
              icono: <Wrench aria-hidden="true" />,
            },
            {
              titulo: "WebPageTest",
              texto: "Compara la velocidad de carga entre diferentes enfoques.",
              enlace: "https://www.webpagetest.org",
              icono: <Wrench aria-hidden="true" />,
            },
            {
              titulo: "Can I Use",
              texto: "Verifica la compatibilidad con los navegadores.",
              enlace: "https://caniuse.com/?search=css%20custom%20properties",
              icono: <Wrench aria-hidden="true" />,
            },
          ]}
        />

        <TarjetasPost
          titulo="Design systems y documentación"
          columnas={3}
          tarjetas={[
            {
              titulo: "Storybook",
              texto: "Documenta tus componentes con diferentes temas.",
              enlace: "https://storybook.js.org",
              icono: <Wrench aria-hidden="true" />,
            },
            {
              titulo: "Primer CSS (GitHub)",
              texto: "Ejemplo real de design system híbrido.",
              enlace: "https://github.com/primer/css",
              icono: <Wrench aria-hidden="true" />,
            },
            {
              titulo: "Shopify Polaris",
              texto: "Otro excelente ejemplo de arquitectura híbrida.",
              enlace: "https://polaris.shopify.com",
              icono: <Wrench aria-hidden="true" />,
            },
          ]}
        />

        <NotaPost titulo="Pro tip">
          <p>
            Crea un snippet de VS Code con tu estructura base de CSS Variables para nuevos proyectos. Te ahorra tiempo y asegura consistencia.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Nivel básico: las diferencias que cambiarán tu perspectiva">
        <h3>Sass Variables: los cimientos sólidos</h3>
        <p>
          Las variables de Sass son como <strong>constantes matemáticas</strong>: se definen una vez durante la compilación y se «imprimen» en todos los lugares donde las uses.
        </p>

        <ImagenPost
          src="/public-optimized/desktop/assets/css/sass-variables-demo.webp"
          alt="Demo en CodePen que compara dos tarjetas: las variables de Sass se procesan al compilar, para valores que no cambian; las CSS Custom Properties, en tiempo de ejecución, para temas dinámicos"
          pie={
            <>
              Sass Variables compilándose a valores fijos. CodePen:{" "}
              <a href="https://codepen.io/IrinaIchim/pen/MYajExj" target="_blank" rel="noopener noreferrer">
                «Sass vs CSS Variables Demo»
              </a>
            </>
          }
        />

        <CodigoPost lenguaje="SCSS">{`// Sass - Compile time
$primary-color: #3b82f6;
$spacing-unit: 1rem;
$border-radius: 8px;

.card {
  background: $primary-color; // Se convierte en: background: #3b82f6;
  padding: calc($spacing-unit * 2); // Se convierte en: padding: 2rem;
}`}</CodigoPost>

        <ListaMarcadaPost titulo="¿Cuándo usar Sass variables?" tipo="bien">
          <li>Sistemas de espaciado consistentes</li>
          <li>Cálculos matemáticos complejos</li>
          <li>Configuraciones que no cambiarán en runtime</li>
          <li>Valores que necesitas en media queries</li>
        </ListaMarcadaPost>

        <h3>CSS Custom Properties: la magia dinámica</h3>
        <p>
          Las CSS Variables son como <strong>variables de JavaScript</strong>: existen en el navegador y pueden cambiar en tiempo real.
        </p>

        <ImagenPost
          src="/public-optimized/desktop/assets/css/css-variables-demo.webp"
          alt="Demo en CodePen en modo oscuro: con Sass hacen falta clases separadas por tema (.card y .card--dark); con CSS Custom Properties, un mismo componente cambia de tema al redefinir sus variables"
          pie={
            <>
              CSS Variables funcionando dinámicamente. CodePen:{" "}
              <a href="https://codepen.io/IrinaIchim/pen/NPGRaVW" target="_blank" rel="noopener noreferrer">
                «Dark Mode: Sass vs CSS Variables»
              </a>
            </>
          }
        />

        <CodigoPost lenguaje="CSS">{`/* CSS Variables - Runtime */
:root {
  --primary-color: #3b82f6;
  --text-color: #1a202c;
}

.dark-theme {
  --primary-color: #63b3ed;
  --text-color: #f7fafc;
}

.card {
  background: var(--primary-color); /* Cambia dinámicamente */
  color: var(--text-color);
  transition: all 0.3s ease; /* ¡Y puede animarse! */
}`}</CodigoPost>

        <ListaMarcadaPost titulo="¿Cuándo usar CSS Variables?" tipo="bien">
          <li>Temas dinámicos (modo oscuro/claro)</li>
          <li>Componentes que cambian según el contexto</li>
          <li>Valores que necesitas modificar con JavaScript</li>
          <li>Animaciones y transiciones de propiedades</li>
        </ListaMarcadaPost>

        <h3>El momento «¡Ajá!»</h3>
        <p>Aquí está la diferencia clave que muchas desarrolladoras no captan al principio:</p>

        <TablaPost descripcion="Diferencias clave entre Sass Variables y CSS Variables">
          <table>
            <thead>
              <tr>
                <th>Sass Variables</th>
                <th>CSS Variables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Se «escriben» durante la compilación</td>
                <td>Viven en el navegador</td>
              </tr>
              <tr>
                <td>Súper rápidas (ya están calculadas)</td>
                <td>Pueden cambiar dinámicamente</td>
              </tr>
              <tr>
                <td>No funcionan con JavaScript</td>
                <td>JavaScript puede modificarlas</td>
              </tr>
              <tr>
                <td>Disponibles en media queries</td>
                <td>No en media queries</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>
      </SeccionPost>

      <SeccionPost titulo="Nivel intermedio: arquitectura híbrida que escalará contigo">
        <p>
          Aquí es donde la magia realmente sucede. En lugar de elegir uno u otro,{" "}
          <strong>combinas ambos</strong> para obtener lo mejor de ambos mundos.
        </p>

        <h3>La estrategia ganadora: Sass para estructura, CSS Variables para theming</h3>

        <ImagenPost
          src="/public-optimized/desktop/assets/css/hybrid-architecture-demo.webp"
          alt="Demo en CodePen de la arquitectura híbrida: selectores de modo claro u oscuro y de color, y tres tarjetas que reparten el trabajo entre los design tokens de Sass, las CSS Custom Properties y la combinación de ambas"
          pie={
            <>
              Arquitectura híbrida en acción. CodePen:{" "}
              <a href="https://codepen.io/IrinaIchim/pen/yyYaPLV" target="_blank" rel="noopener noreferrer">
                «Hybrid Architecture: Sass + CSS Variables»
              </a>
            </>
          }
        />

        <CodigoPost lenguaje="SCSS">{`// Sass: Define la estructura (compile-time)
$space-xs: 0.25rem;
$space-sm: 0.5rem;
$space-md: 1rem;
$space-lg: 1.5rem;
$space-xl: 2rem;

$radius-sm: 0.25rem;
$radius-md: 0.5rem;
$radius-lg: 0.75rem;

// CSS Variables: Define la apariencia (runtime)
:root {
  --primary: #3b82f6;
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  --border-primary: #e2e8f0;
}

.card {
  // Sass para estructura que no cambia
  padding: $space-lg;
  border-radius: $radius-lg;
  margin-bottom: $space-md;

  // CSS Variables para theming dinámico
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);

  // ¡Y puede transicionar suavemente entre temas!
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}`}</CodigoPost>

        <h3>Theming dinámico que impresiona</h3>
        <p>El poder real viene cuando implementas cambios de tema que se sienten <strong>instantáneos y fluidos</strong>.</p>
        <p>
          Transición suave entre temas en CodePen:{" "}
          <a href="https://codepen.io/IrinaIchim/pen/NPGRaVW" target="_blank" rel="noopener noreferrer">
            «Dark Mode: Sass vs CSS Variables»
          </a>
        </p>

        <CodigoPost lenguaje="CSS">{`/* Tema base */
.theme-container {
  --transition-duration: 0.4s;
  --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);

  transition:
    background-color var(--transition-duration) var(--transition-timing),
    color var(--transition-duration) var(--transition-timing),
    border-color var(--transition-duration) var(--transition-timing);
}`}</CodigoPost>
        <CodigoPost lenguaje="JavaScript">{`/* Cambio de tema con JavaScript */
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  // ¡Instantáneo! No hay recompilación
});`}</CodigoPost>

        <TarjetasPost
          titulo="Casos de uso reales que verás en producción"
          columnas={3}
          tarjetas={[
            {
              titulo: "Dashboards empresariales",
              texto: "Sass para el grid system, CSS Variables para el branding por cliente.",
            },
            {
              titulo: "E-commerce",
              texto: "Sass para componentes, CSS Variables para colores de marca dinámicos.",
            },
            {
              titulo: "Aplicaciones educativas",
              texto: "Sass para responsive design, CSS Variables para temas de accesibilidad.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Nivel avanzado: migración estratégica y optimización">
        <h3>Migración inteligente: de Sass-only a arquitectura híbrida</h3>
        <p>
          Si ya tienes un proyecto con muchas variables de Sass,{" "}
          <strong>no migres todo de una vez</strong>. Aquí tienes una estrategia probada:
        </p>

        <p><strong>Fase 1: identifica candidatos a migración</strong></p>
        <CodigoPost lenguaje="SCSS">{`// ❌ Mantén en Sass (estructura fija)
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px
);

$spacing-scale: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 1.5rem
);

// ✅ Migra a CSS Variables (valores dinámicos)
$colors: (
  primary: #3b82f6,
  secondary: #64748b,
  success: #10b981
);`}</CodigoPost>

        <p><strong>Fase 2: implementa el puente</strong></p>
        <CodigoPost lenguaje="SCSS">{`// Crea CSS Variables desde Sass
:root {
  @each $name, $color in $colors {
    --color-#{$name}: #{$color};
  }
}

// Ahora puedes usar ambas
.component {
  padding: $space-lg; // Sass (fijo)
  background: var(--color-primary); // CSS Variable (dinámico)
}`}</CodigoPost>

        <h3>Optimización de performance: los detalles que marcan la diferencia</h3>
        <p>
          La combinación de Sass y CSS Variables no solo mejora la mantenibilidad, sino que también puede optimizar la performance de tu sitio. Aquí te dejo algunos tips.
        </p>
        <p>
          Comparación visual de CSS generado en CodePen:{" "}
          <a href="https://codepen.io/IrinaIchim/pen/MYajExj" target="_blank" rel="noopener noreferrer">
            «Sass vs CSS Variables Demo»
          </a>
        </p>

        <CodigoPost lenguaje="CSS">{`/* Sass genera esto (más compacto): */
.card { background: #ffffff; color: #1a202c; }
.card-dark { background: #1a202c; color: #ffffff; }

/* CSS Variables genera esto (más flexible): */
.card {
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}`}</CodigoPost>

        <TarjetasPost
          titulo="Métricas que importan"
          columnas={3}
          tarjetas={[
            { titulo: "Sass", texto: "Menor tamaño de CSS final, carga más rápida." },
            { titulo: "CSS Variables", texto: "Mayor flexibilidad, mejor UX en cambios dinámicos." },
            { titulo: "Híbrido", texto: "El equilibrio perfecto entre performance y funcionalidad." },
          ]}
        />

        <h3>Debugging y herramientas de desarrollo</h3>
        <p>Una gran ventaja de las CSS Variables: <strong>puedes modificarlas en DevTools en tiempo real</strong>.</p>

        <CodigoPost lenguaje="JavaScript">{`// Debugging dinámico en la consola
document.documentElement.style.setProperty('--primary-color', '#ff6b6b');

// Útil para testing de accesibilidad
document.documentElement.style.setProperty('--font-size-base', '18px');`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="Conectando con el ecosistema CSS">
        <p>Esta estrategia híbrida se complementa perfectamente con otras técnicas avanzadas que ya conoces en femCoders Club:</p>

        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Selectores CSS avanzados",
              texto: "Combínalos con CSS Variables para targeting dinámico.",
              enlace: "/recursos/css/selectores-css",
              icono: <BookOpen aria-hidden="true" />,
            },
            {
              titulo: "Responsive Design",
              texto: "Usa Sass para breakpoints y CSS Variables para valores adaptables.",
              enlace: "/recursos/css/responsive-design",
              icono: <BookOpen aria-hidden="true" />,
            },
            {
              titulo: "Accesibilidad CSS",
              texto: (
                <>
                  CSS Variables son perfectas para implementar <code>prefers-color-scheme</code> y{" "}
                  <code>prefers-reduced-motion</code>.
                </>
              ),
              enlace: "/recursos/css/accesibilidad-css",
              icono: <BookOpen aria-hidden="true" />,
            },
          ]}
        />

        <p>
          Si aún no has profundizado en Sass, te recomiendo nuestro post{" "}
          <Link to="/recursos/css/sass-next-level">SASS: Lleva tu CSS al siguiente nivel</Link>{" "}
          para dominar las bases antes de implementar esta arquitectura híbrida.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Tu plan de acción (que puedes implementar hoy)">
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Checklist para proyectos nuevos",
              texto: (
                <ul>
                  <li>Define tu sistema de espaciado con Sass variables</li>
                  <li>Implementa colores y temas con CSS Variables</li>
                  <li>Configura transiciones suaves entre temas</li>
                  <li>Testea el cambio dinámico de variables con JavaScript</li>
                </ul>
              ),
            },
            {
              titulo: "Para proyectos existentes",
              texto: (
                <ul>
                  <li>Audita tus variables actuales (¿cuáles cambian dinámicamente?)</li>
                  <li>Migra colores de tema a CSS Variables primero</li>
                  <li>Mantén spacing y breakpoints en Sass</li>
                  <li>Implementa el cambio de tema como mejora progresiva</li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="¿Y tú, cómo las usas?">
        <p>
          La combinación de Sass variables y CSS Custom Properties ha revolucionado la forma en que estructuramos CSS escalable. Cada proyecto es único, y me encantaría conocer tu experiencia.
        </p>

        <p>
          <strong>¿Ya has experimentado con esta arquitectura híbrida? ¿Qué desafíos has encontrado al implementar temas dinámicos?</strong>
        </p>

        <p>
          Comparte tu experiencia en la <Link to="/">comunidad de femCoders Club</Link> o escríbenos por{" "}
          <Link to="/contacto">nuestros canales</Link>. Siempre estamos aprendiendo juntas y estas conversaciones nos ayudan a crear mejores recursos para toda la comunidad.
        </p>
      </SeccionPost>

      <p>
        <em>
          ¿Te ha resultado útil este post? En femCoders Club creamos contenido práctico y actualizado para que domines las tecnologías que realmente importan en tu carrera.{" "}
          <Link to="/">Únete a nuestra comunidad</Link> y mantente al día con las últimas tendencias en desarrollo frontend.
        </em>
      </p>
    </PlantillaPost>
  </>
);

export default CssVariablesSass;
