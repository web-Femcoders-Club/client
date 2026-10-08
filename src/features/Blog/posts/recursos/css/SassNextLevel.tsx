import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  CodigoPost,
  ImagenPost,
  ListaMarcadaPost,
  NotaPost,
  PasosPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const SassNextLevel: React.FC = () => (
  <>
      <Helmet>
        <title>SASS: Lleva tu CSS al siguiente nivel | femCoders Club</title>
        <meta
          name="description"
          content="Domina SASS desde variables básicas hasta arquitectura 7-1 profesional. Tutorial completo con proyecto interactivo FemPalette, comparación con CSS Custom Properties y ejemplos reales."
        />
        <meta
          name="keywords"
          content="SASS, SCSS, preprocesador CSS, variables SASS, mixins, funciones SASS, arquitectura 7-1, femcoders club, FemPalette, CSS preprocesador, desarrollo web, frontend, anidación CSS"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/sass-next-level"
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
          content="SASS: Lleva tu CSS al siguiente nivel | femCoders Club"
        />
        <meta
          property="og:description"
          content="Tutorial completo de SASS: desde variables hasta arquitectura 7-1. Incluye proyecto FemPalette interactivo y comparación con CSS moderno."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/sass-next-level"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/SASS-Next-Level.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SASS: Lleva tu CSS al siguiente nivel"
        />
        <meta
          name="twitter:description"
          content="Aprende SASS desde cero hasta arquitectura profesional. Tutorial con proyecto interactivo FemPalette y ejemplos reales."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/SASS-Next-Level.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-07-20T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="SASS" />
        <meta property="article:tag" content="Preprocesadores" />
        <meta property="article:tag" content="Frontend" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/css/sass-next-level"
      titulo="Sass: lleva tu CSS al siguiente nivel"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={24}
      entradilla={
        <>
          <p>
            En nuestro artículo anterior,{" "}
            <Link to="/recursos/css/responsive-design">
              Responsive Design: de principiante a experta
            </Link>, aprendimos a crear diseños que se adaptan perfectamente a
            cualquier dispositivo. Ahora vamos a dar un paso más allá:
            descubrir cómo Sass puede revolucionar por completo tu flujo de
            trabajo con CSS.
          </p>
          <p>
            Como base sólida, en nuestro post{" "}
            <Link to="/recursos/css/selectores-css">
              Selectores CSS: guía completa
            </Link>{" "}
            cubrimos los fundamentos de CSS que necesitas dominar antes de
            adentrarte en los preprocesadores.
          </p>
          <p>
            ¿Te has enfrentado a un cambio de colores de último minuto que te
            lleva horas? ¿Sientes que repites el mismo código CSS una y otra
            vez? Sass es la solución que transformará tu forma de escribir
            estilos. En este tutorial no solo aprenderás la teoría: también
            experimentarás con nuestro proyecto interactivo FemPalette mientras
            dominas desde las variables básicas hasta la arquitectura
            profesional 7-1.
          </p>
        </>
      }
    >
      <SeccionPost
        titulo="«¿Puedes cambiar todos los azules por violeta? Es urgente»"
        id="cambiar-todos-los-azules"
      >
        <p>
          <strong>Son las seis de la tarde de un viernes.</strong> Tu cliente
          acaba de enviar ese mensaje que todas tememos. En tu mente calculas
          rápidamente: 15 archivos CSS, cientos de líneas, múltiples tonos de
          azul…
        </p>
        <p>
          <strong>Con CSS tradicional:</strong> tres horas de buscar y
          reemplazar, el riesgo de romper algo y estrés garantizado.
        </p>
        <p>
          <strong>Con Sass:</strong> cambias <strong>una</strong> línea.
          Compilas. <strong>¡Listo en 30 segundos!</strong>
        </p>
        <CodigoPost lenguaje="SCSS">{`// Antes: Pesadilla de viernes por la tarde
// .header { color: #3498db; }
// .button { border: #3498db; }
// .link { color: #3498db; }
// ... x100 líneas más

// Después: Libertad en 30 segundos ⚡
$primary-color: #8e44ad; // Solo esto. En serio.`}</CodigoPost>
        <p>
          <strong>¿Te has encontrado en esta situación?</strong> Sigue leyendo
          y nunca más volverás a sufrir por un cambio de colores.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Variables Sass: tu nuevo superpoder">
        <h3>Del caos al orden en segundos</h3>
        <p>
          Con Sass, ese mismo cambio de color se convierte en una tarea
          trivial:
        </p>
        <CodigoPost lenguaje="SCSS">{`// Antes: Pesadilla de mantenimiento
.header { background-color: #3498db; }
.button { border-color: #3498db; }
.link { color: #3498db; }
.icon { fill: #3498db; }

// Después: Una sola línea cambia todo
$primary-color: #8e44ad; // ¡Listo! 🎉

.header { background-color: $primary-color; }
.button { border-color: $primary-color; }
.link { color: $primary-color; }
.icon { fill: $primary-color; }`}</CodigoPost>

        <h3>Demostración en vivo: FemPalette, un curso completo de Sass</h3>
        <p>
          Para mostrarte el poder real de Sass, creé{" "}
          <strong>FemPalette</strong>: no solo un generador de colores, sino un{" "}
          <strong>minicurso interactivo completo</strong> que implementa una
          arquitectura profesional.
        </p>
        <ImagenPost
          src="/assets/css/fempalette-generator.webp"
          alt="FemPalette, el generador interactivo de variables Sass con su tutorial integrado"
          pie="FemPalette: variables Sass en acción y arquitectura profesional"
        />

        <TarjetasPost
          titulo="Lo que FemPalette te enseña"
          tarjetas={[
            {
              titulo: "Generador interactivo",
              texto: "Variables Sass en acción real.",
            },
            {
              titulo: "Tutorial paso a paso",
              texto: "Conceptos explicados visualmente.",
            },
            {
              titulo: "Arquitectura 7-1",
              texto: "Una implementación profesional completa.",
            },
            {
              titulo: "Flujo de desarrollo",
              texto: "Scripts npm, watch mode y live server.",
            },
          ]}
        />

        <p>
          <strong>Lo que está pasando por debajo:</strong>
        </p>
        <ul>
          <li>Arquitectura modular real con 7 carpetas organizadas</li>
          <li>Sistema profesional de variables, funciones y mixins</li>
          <li>
            Compilación automática con <code>npm run dev</code>
          </li>
          <li>
            <strong>¡Todo el código fuente disponible para estudiar!</strong>
          </li>
        </ul>
        <p>
          <a
            href="https://femcodersclub.github.io/sass-color-generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prueba FemPalette en vivo
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Más allá de las variables: funciones y mapas">
        <h3>El nivel intermedio que marca la diferencia</h3>
        <p>
          Las variables son el primer paso; las{" "}
          <strong>funciones y los mapas</strong> te llevan al siguiente nivel:
        </p>
        <CodigoPost lenguaje="SCSS">{`// Sistema de colores profesional
$colors: (
  primary: #821ad4,
  secondary: #ea4f33,
  accent: #4737bb,
  neutral: #ffffff,
  success: #28a745,
  warning: #ffc107,
  error: #dc3545
);

@function color($name) {
  @return map-get($colors, $name);
}

// Uso súper limpio
.alert-success {
  background: color(success);
  color: color(neutral);
}`}</CodigoPost>
        <ImagenPost
          src="/public-optimized/desktop/assets/css/sass-functions-tutorial.webp"
          alt="Tutorial de FemPalette que explica las funciones y los mapas de Sass"
          pie="FemPalette: tutorial de funciones y mapas de Sass"
        />

        <h3>Funciones inteligentes que hacen el trabajo por ti</h3>
        <CodigoPost lenguaje="SCSS">{`@function get-contrast($color) {
  @if (lightness($color) > 50%) {
    @return #000000;
  } @else {
    @return #ffffff;
  }
}

.button {
  background: $primary-color;
  color: get-contrast($primary-color); // ¡Contraste automático!
}`}</CodigoPost>
        <NotaPost titulo="Consejo">
          <p>
            Esta función se vuelve súper útil cuando trabajas con{" "}
            <Link to="/recursos/css/accesibilidad-css">accesibilidad en CSS</Link>:
            elige automáticamente un texto claro u oscuro según el fondo.
            Comprueba igualmente el contraste final con una herramienta, porque
            la luminosidad por sí sola no garantiza que se lea bien.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Arquitectura escalable: el patrón 7-1 en acción">
        <h3>De principiante a profesional</h3>
        <p>
          El <strong>patrón 7-1</strong> es el estándar de la industria para
          organizar proyectos Sass grandes. FemPalette lo implementa por
          completo:
        </p>
        <CodigoPost lenguaje="Texto">{`styles/
├── abstracts/     # Variables, funciones, mixins
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _placeholders.scss
├── base/          # Reset, tipografía base
│   ├── _reset.scss
│   └── _typography.scss
├── layout/        # Estructura de página
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
├── components/    # Componentes reutilizables
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _forms.scss
│   └── _notifications.scss
├── pages/         # Estilos específicos de página
│   └── _home.scss
├── utilities/     # Clases utilitarias
│   └── _utilities.scss
└── main.scss      # Punto de entrada`}</CodigoPost>

        <h3>Flujo de desarrollo profesional</h3>
        <p>
          FemPalette incluye todo lo que necesitas para un flujo profesional:
        </p>
        <CodigoPost lenguaje="Bash">{`# Modo desarrollo completo (watch + server)
npm run dev

# Solo compilar SASS
npm run build:sass

# Watch automático
npm run watch:sass`}</CodigoPost>
        <p>
          <strong>¿Lo mejor?</strong> Todo está documentado y listo para que lo
          clones y experimentes.
        </p>

        <h3>Mixins que ahorran horas de trabajo</h3>
        <CodigoPost lenguaje="SCSS">{`// Un mixin, infinitas posibilidades
@mixin media($breakpoint) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

.container {
  width: 100%;

  @include media(tablet) {
    max-width: 768px;
  }

  @include media(desktop) {
    max-width: 1024px;
  }
}`}</CodigoPost>
        <ImagenPost
          src="/public-optimized/desktop/assets/css/sass-mixins-examples.webp"
          alt="Ejemplos de mixins responsivos de Sass en FemPalette"
          pie="FemPalette: mixins responsivos en acción"
        />
        <NotaPost titulo="Consejo">
          <p>
            En FemPalette puedes ver estos mixins funcionando en el código real.
            Clona el proyecto y experimenta modificando los breakpoints en{" "}
            <code>styles/abstracts/_variables.scss</code>.
          </p>
        </NotaPost>
        <NotaPost titulo="¿Necesitas repasar responsive?">
          <p>
            Revisa nuestro post sobre{" "}
            <Link to="/recursos/css/responsive-design">
              Responsive Design con media queries
            </Link>{" "}
            para dominar los conceptos base antes de automatizarlos con Sass.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Setup moderno (actualizado en 2025)">
        <h3>La forma correcta de instalar Sass hoy</h3>
        <p>
          <strong>Recomendado: Dart Sass</strong> (la implementación oficial)
        </p>
        <CodigoPost lenguaje="Bash">{`# Instalación global
npm install -g sass

# En tu proyecto
npm install --save-dev sass

# Compilación con watch
sass src/scss:dist/css --watch`}</CodigoPost>

        <h3>Integración con herramientas modernas</h3>
        <p>
          <strong>Con Vite (súper popular en 2025):</strong>
        </p>
        <CodigoPost lenguaje="JavaScript">{`// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@use "src/scss/abstracts" as *;\`
      }
    }
  }
}`}</CodigoPost>
        <p>
          <strong>Con webpack o Create React App:</strong>
        </p>
        <CodigoPost lenguaje="Bash">{`npm install sass
# ¡Y ya está! Importa archivos .scss directamente`}</CodigoPost>
      </SeccionPost>

      <SeccionPost titulo="CSS vs Sass: la comparativa definitiva">
        <TablaPost descripcion="Comparativa entre CSS tradicional y Sass">
          <table>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>CSS tradicional</th>
                <th>Sass</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Variables</strong>
                </td>
                <td>CSS Custom Properties limitadas</td>
                <td>Variables potentes y funciones</td>
              </tr>
              <tr>
                <td>
                  <strong>Reutilización</strong>
                </td>
                <td>Copiar y pegar a mano</td>
                <td>Mixins y herencia</td>
              </tr>
              <tr>
                <td>
                  <strong>Organización</strong>
                </td>
                <td>Archivos monolíticos</td>
                <td>Modularidad total</td>
              </tr>
              <tr>
                <td>
                  <strong>Mantenimiento</strong>
                </td>
                <td>Buscar y reemplazar</td>
                <td>Cambio centralizado</td>
              </tr>
              <tr>
                <td>
                  <strong>Escalabilidad</strong>
                </td>
                <td>Se vuelve inmanejable</td>
                <td>Arquitectura robusta</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>
      </SeccionPost>

      <SeccionPost titulo="Próximo nivel: CSS Custom Properties vs variables Sass">
        <p>
          Este post es la preparación perfecta para nuestro próximo tema:{" "}
          <strong>«CSS Custom Properties vs Sass Variables»</strong>. Ahora que
          dominas las variables Sass, podremos comparar:
        </p>
        <ul>
          <li>Cuándo usar cada una</li>
          <li>Las ventajas únicas de cada enfoque</li>
          <li>Cómo combinarlas para sacarles el máximo partido</li>
          <li>El futuro de los estilos en 2025</li>
        </ul>
        <NotaPost titulo="Ejemplo real">
          <p>
            FemCoders Club utiliza un enfoque mixto, mientras que sitios como
            Stripe o Linear implementan estrategias híbridas. En nuestro
            proyecto FemPalette puedes ver cómo combinar ambos enfoques.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Tu plan de acción">
        <PasosPost
          pasos={[
            {
              etiqueta: "Nivel 1",
              titulo: "Experimenta con FemPalette",
              puntos: [
                <>
                  <a
                    href="https://femcodersclub.github.io/sass-color-generator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abre la demo en vivo
                  </a>{" "}
                  y explora las tres pestañas.
                </>,
                <>
                  Genera tu primera paleta y descarga el archivo{" "}
                  <code>.scss</code>.
                </>,
                "Estudia el tutorial integrado para entender cada concepto.",
              ],
            },
            {
              etiqueta: "Nivel 2",
              titulo: "Clona y experimenta",
              puntos: [
                <>
                  <a
                    href="https://github.com/femcodersclub/sass-color-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Clona el repositorio
                  </a>{" "}
                  completo.
                </>,
                <>
                  Ejecuta <code>npm run dev</code> para ver la magia del watch
                  mode.
                </>,
                <>
                  Modifica las variables en{" "}
                  <code>styles/abstracts/_variables.scss</code> y ve los cambios
                  en tiempo real.
                </>,
              ],
            },
            {
              etiqueta: "Nivel 3",
              titulo: "Adopta la arquitectura profesional",
              puntos: [
                "Implementa el patrón 7-1 en un proyecto nuevo usando FemPalette como referencia.",
                "Crea tu biblioteca de mixins basándote en los ejemplos del proyecto.",
                "Integra el flujo npm en tus proyectos reales.",
              ],
            },
            {
              etiqueta: "Nivel 4",
              titulo: "Comparte y aprende",
              puntos: [
                <>
                  <a
                    href="https://github.com/femcodersclub/sass-color-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contribuye al proyecto
                  </a>{" "}
                  con mejoras o nuevas funcionalidades.
                </>,
                "Comparte tu progreso en la comunidad FemCoders Club.",
                "Adapta los conceptos a tus proyectos personales.",
              ],
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Recursos de la comunidad FemCoders Club">
        <TarjetasPost
          titulo="CSS"
          tarjetas={[
            {
              titulo: "Selectores CSS: guía completa",
              texto: "Domina la base antes de anidar en Sass.",
              enlace: "/recursos/css/selectores-css",
            },
            {
              titulo: "Box Model en CSS",
              texto: "Entiende cómo calcula Sass los espaciados.",
              enlace: "/recursos/css/box-model",
            },
            {
              titulo: "Responsive Design",
              texto: "Perfecto para crear mixins responsivos.",
              enlace: "/recursos/css/responsive-design",
            },
            {
              titulo: "Animaciones CSS",
              texto: "Combínalas con variables Sass para crear animaciones dinámicas.",
              enlace: "/recursos/css/animaciones-css",
            },
            {
              titulo: "Accesibilidad CSS",
              texto: "Usa funciones Sass para automatizar buenas prácticas.",
              enlace: "/recursos/css/accesibilidad-css",
            },
          ]}
        />
        <TarjetasPost
          titulo="Proyecto completo y código"
          columnas={3}
          tarjetas={[
            {
              titulo: "FemPalette: demo en vivo",
              texto: "Curso interactivo completo de Sass.",
              enlace: "https://femcodersclub.github.io/sass-color-generator/",
            },
            {
              titulo: "Código fuente en GitHub",
              texto: "Arquitectura 7-1 real para estudiar y clonar.",
              enlace: "https://github.com/femcodersclub/sass-color-generator",
            },
            {
              titulo: "Documentación completa",
              texto: "Setup, scripts npm y guías paso a paso.",
              enlace: "https://github.com/femcodersclub/sass-color-generator#readme",
            },
          ]}
        />
        <TarjetasPost
          titulo="Únete a la comunidad"
          tarjetas={[
            {
              titulo: "Regístrate en FemCoders Club",
              texto: "Accede a contenido exclusivo y conecta con otras desarrolladoras.",
              enlace: "/register",
            },
            {
              titulo: "Únete al Slack",
              texto: "Pregunta dudas y comparte proyectos.",
              enlace: "https://communityinviter.com/apps/femcodersclub/femcoders-club",
            },
            {
              titulo: "Síguenos en X",
              texto: "Consejos diarios y recursos.",
              enlace: "https://x.com/FemCodersClub",
            },
            {
              titulo: "LinkedIn",
              texto: "Conecta profesionalmente.",
              enlace: "https://www.linkedin.com/company/100394366/",
            },
            {
              titulo: "Instagram",
              texto: "Contenido visual y lo que pasa entre bastidores.",
              enlace: "https://www.instagram.com/femcoders_club/",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Ejemplos prácticos: casos de uso reales">
        <h3>Sistema de colores completo</h3>
        <p>
          Observa cómo los sitios profesionales implementan sistemas de colores
          con Sass:
        </p>
        <CodigoPost lenguaje="SCSS">{`// _colors.scss
$colors: (
  primary: #821ad4,
  secondary: #ea4f33,
  accent: #4737bb,
  neutral: #ffffff,
  success: #28a745,
  warning: #ffc107,
  error: #dc3545
);

@function color($name) {
  @return map-get($colors, $name);
}

// Uso en componentes
.button-primary {
  background-color: color(primary);
  color: color(neutral);

  &:hover {
    background-color: darken(color(primary), 10%);
  }
}`}</CodigoPost>

        <h3>Breakpoints responsivos</h3>
        <p>
          Una de las implementaciones más útiles de Sass en proyectos reales:
        </p>
        <CodigoPost lenguaje="SCSS">{`// _breakpoints.scss
$breakpoints: (
  mobile: 480px,
  tablet: 768px,
  desktop: 1024px,
  wide: 1200px
);

@mixin media($breakpoint) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

// Uso práctico
.container {
  width: 100%;
  padding: 1rem;

  @include media(tablet) {
    max-width: 768px;
    margin: 0 auto;
  }

  @include media(desktop) {
    max-width: 1200px;
    padding: 2rem;
  }
}`}</CodigoPost>

        <h3>Componentes reutilizables</h3>
        <p>Sass permite crear bibliotecas de componentes mantenibles:</p>
        <CodigoPost lenguaje="SCSS">{`// _button-mixins.scss
@mixin button-base {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

@mixin button-variant($bg-color, $text-color: white) {
  @include button-base;
  background-color: $bg-color;
  color: $text-color;

  &:hover {
    background-color: darken($bg-color, 10%);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
}

// Implementación
.btn-primary { @include button-variant(color(primary)); }
.btn-secondary { @include button-variant(color(secondary)); }
.btn-success { @include button-variant(color(success)); }`}</CodigoPost>
        <p>
          <a
            href="https://codepen.io/search/pens?q=sass%20scss%20examples"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más ejemplos de Sass en CodePen
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Consejos pro de Sass">
        <ListaMarcadaPost titulo="Buenas prácticas que marcan la diferencia" tipo="bien">
          <li>
            <strong>No anides más de tres niveles de profundidad:</strong>{" "}
            mantén legible el CSS compilado.
          </li>
          <li>
            <strong>Usa una arquitectura modular (patrón 7-1):</strong> como la
            que implementamos en FemPalette.
          </li>
          <li>
            <strong>Aprovecha las funciones integradas:</strong>{" "}
            <code>lighten()</code>, <code>darken()</code>, <code>mix()</code>.
          </li>
          <li>
            <strong>
              Usa <code>@use</code> en lugar de <code>@import</code>:
            </strong>{" "}
            es más moderno y eficiente.
          </li>
          <li>
            <strong>Combina Sass con CSS Custom Properties:</strong> para lograr
            la máxima flexibilidad.
          </li>
        </ListaMarcadaPost>

        <ListaMarcadaPost titulo="Errores comunes que conviene evitar" tipo="mal">
          <li>
            <strong>Anidación excesiva:</strong> no reproduzcas toda la
            estructura del HTML.
          </li>
          <li>
            <strong>Variables mal organizadas:</strong> agrúpalas de forma
            lógica.
          </li>
          <li>
            <strong>Mixins demasiado específicos:</strong> mantén la
            reutilización.
          </li>
          <li>
            <strong>Falta de documentación:</strong> comenta tus funciones
            complejas.
          </li>
        </ListaMarcadaPost>

        <TarjetasPost
          titulo="Herramientas recomendadas"
          columnas={3}
          tarjetas={[
            {
              titulo: "Sass Guidelines",
              texto: "La guía de estilo definitiva.",
              enlace: "https://sass-guidelin.es/",
            },
            {
              titulo: "SassMeister",
              texto: "Un playground en línea para experimentar.",
              enlace: "https://www.sassmeister.com/",
            },
            {
              titulo: "Extensión de Sass para VS Code",
              texto: "Resaltado de sintaxis y autocompletado.",
              enlace:
                "https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="¡El momento es ahora!">
        <p>
          Sass no es solo una herramienta más: es{" "}
          <strong>
            tu puerta de entrada al desarrollo frontend profesional
          </strong>. Cada variable que creas y cada mixin que escribes te acercan a la
          desarrolladora que quieres ser.
        </p>

        <h3>¿Lista para dar el salto?</h3>
        <ol>
          <li>
            <a
              href="https://femcodersclub.github.io/sass-color-generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Experimenta con FemPalette
            </a>: un curso interactivo completo.
          </li>
          <li>
            <a
              href="https://github.com/femcodersclub/sass-color-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clona el proyecto
            </a>: estudia una arquitectura profesional real.
          </li>
          <li>
            <Link to="/register">Regístrate en FemCoders Club</Link>: únete a
            nuestra comunidad de desarrolladoras.
          </li>
          <li>
            <strong>Comparte tu primer proyecto con arquitectura 7-1</strong>{" "}
            etiquetando a @FemCodersClub.
          </li>
          <li>
            <strong>Prepárate para el próximo post</strong> sobre CSS Custom
            Properties vs variables Sass.
          </li>
        </ol>

        <NotaPost titulo="¿Tienes ideas para FemPalette?">
          <p>
            ¡Nos encantaría recibir tus contribuciones! ¿Exportar a CSS Custom
            Properties? ¿Un generador de degradados? ¿Temas predefinidos?{" "}
            <a
              href="https://github.com/femcodersclub/sass-color-generator/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribuir al proyecto
            </a>
          </p>
        </NotaPost>

        <p>
          <em>
            ¿Te ha sido útil este post? ¡Compártelo con otras compañeras
            desarrolladoras y hagamos crecer la comunidad!
          </em>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default SassNextLevel;
