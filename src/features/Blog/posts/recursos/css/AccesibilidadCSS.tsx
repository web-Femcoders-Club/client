import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../../components/post/PlantillaPost";
import {
  ListaMarcadaPost,
  PasosPost,
  SeccionPost,
  TarjetasPost,
} from "../../../components/post/PiezasPost";

const AccesibilidadCSS: React.FC = () => (
  <>
      <Helmet>
        <title>
          Accesibilidad en CSS: Diseñando Experiencias Inclusivas | FemCoders Club
        </title>
        <meta
          name="description"
          content="Aprende a crear CSS accesible con contrastes adecuados, tipografía inclusiva, navegación por teclado y respeto por las preferencias del usuario. Guía completa con ejemplos reales."
        />
        <meta
          name="keywords"
          content="accesibilidad CSS, diseño inclusivo, contraste WCAG, tipografía accesible, navegación teclado, prefers-reduced-motion, femcoders club, desarrollo web accesible, UX inclusivo, ARIA CSS"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/css/accesibilidad-css"
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
          content="Accesibilidad en CSS: Diseñando Experiencias Inclusivas | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Domina la accesibilidad en CSS: contraste, tipografía, navegación por teclado y preferencias del usuario. Con ejemplos reales de sitios web."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/css/accesibilidad-css"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/Accesibilidad-CSS.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accesibilidad en CSS: Diseñando Experiencias Inclusivas"
        />
        <meta
          name="twitter:description"
          content="Aprende accesibilidad CSS con ejemplos reales: contraste, tipografía, navegación y preferencias del usuario."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/css/Accesibilidad-CSS.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-07-12T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="CSS" />
        <meta property="article:tag" content="Accesibilidad" />
        <meta property="article:tag" content="Diseño Inclusivo" />
        <meta property="article:tag" content="UX" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/recursos/css/accesibilidad-css"
      titulo="Accesibilidad en CSS: diseñando experiencias inclusivas"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={23}
      entradilla={
        <>
          <p>
            En el post anterior,{" "}
            <Link to="/recursos/css/responsive-design">
              Responsive design: de principiante a experta
            </Link>
            , hablamos de cómo crear diseños que se adapten perfectamente a
            cualquier dispositivo. Ahora vamos a seguir profundizando para
            asegurar que esos diseños sean realmente inclusivos y usables para
            todas las personas.
          </p>
          <p>
            Como ya exploramos en nuestro artículo{" "}
            <Link to="/recursos/html/html-seo-accesibilidad">
              HTML avanzado para SEO y accesibilidad
            </Link>
            , los atributos ARIA y el HTML semántico son la base. Pero CSS juega
            un papel igual de crucial: es la herramienta que convierte esa
            estructura accesible en una experiencia visual inclusiva, legible y
            usable para todos.
          </p>
          <p>
            ¿Quieres que tu página web destaque no solo por su diseño, sino por
            ser verdaderamente inclusiva? En este post te guiaremos por las
            mejores prácticas de CSS para accesibilidad. Aprenderás a manejar
            contrastes efectivos, tipografías legibles, navegación accesible y
            técnicas modernas como el respeto por las preferencias del usuario.
            ¡Comencemos a construir sitios web que sean bonitos y accesibles!
          </p>
        </>
      }
    >
      <SeccionPost titulo="¿Por qué la accesibilidad en CSS es fundamental?">
        <p>
          La accesibilidad web no es un «extra» ni una «mejora opcional». Es un
          derecho fundamental que garantiza que todas las personas,
          independientemente de sus capacidades, puedan acceder a nuestros
          sitios web y usarlos.
        </p>

        <TarjetasPost
          titulo="Datos que no podemos ignorar"
          columnas={3}
          tarjetas={[
            {
              titulo: "15 %",
              texto: "de la población mundial vive con algún tipo de discapacidad.",
            },
            { titulo: "253 millones", texto: "de personas tienen discapacidad visual." },
            { titulo: "466 millones", texto: "tienen pérdida auditiva." },
            { titulo: "75 millones", texto: "necesitan silla de ruedas." },
            { titulo: "200 millones", texto: "tienen discapacidad intelectual." },
          ]}
        />

        <TarjetasPost
          titulo="Beneficios de un CSS accesible"
          tarjetas={[
            {
              titulo: "Mejor SEO",
              texto: "Los motores de búsqueda valoran la accesibilidad.",
            },
            { titulo: "Mayor alcance", texto: "Más personas pueden usar tu sitio." },
            {
              titulo: "Experiencia mejorada",
              texto: "Beneficia a todo el mundo, no solo a las personas con discapacidad.",
            },
            {
              titulo: "Cumplimiento legal",
              texto: "Evita problemas legales por discriminación.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Contraste y color: la base de la accesibilidad visual">
        <p>
          Un contraste adecuado es fundamental para las personas con
          discapacidad visual o dislexia, y mejora la legibilidad en cualquier
          condición de luz.
        </p>

        <TarjetasPost
          titulo="Ejemplos reales de sitios con excelente contraste"
          columnas={3}
          tarjetas={[
            {
              titulo: "GitHub",
              enlace: "https://github.com",
              texto: (
                <ul>
                  <li>
                    Usa un contraste de 14,7:1 entre su texto casi negro
                    (#24292e) y el fondo blanco.
                  </li>
                  <li>Su modo oscuro mantiene un contraste de 13,6:1.</li>
                  <li>
                    Los enlaces tienen un azul (#0366d6) que da un contraste de
                    5,4:1.
                  </li>
                </ul>
              ),
            },
            {
              titulo: "Stripe",
              enlace: "https://stripe.com",
              texto: (
                <ul>
                  <li>Su texto principal (#425466) sobre fondo blanco da 7,8:1.</li>
                  <li>Los botones mantienen un contraste mínimo de 4,8:1.</li>
                  <li>Usa indicadores múltiples (color e iconos) para los errores.</li>
                </ul>
              ),
            },
            {
              titulo: "Linear",
              enlace: "https://linear.app",
              texto: (
                <ul>
                  <li>Contraste excepcional de 16,1:1 en el texto principal.</li>
                  <li>Estados de hover claramente diferenciados.</li>
                  <li>
                    Color secundario para la información menos crítica, que
                    mantiene 7,8:1.
                  </li>
                </ul>
              ),
            },
          ]}
        />

        <TarjetasPost
          titulo="Herramientas para verificar el contraste en tiempo real"
          columnas={3}
          tarjetas={[
            {
              titulo: "WebAIM Contrast Checker",
              enlace: "https://webaim.org/resources/contrastchecker/",
              texto: "El estándar de oro.",
            },
            {
              titulo: "Colour Contrast Analyser",
              enlace: "https://www.tpgi.com/color-contrast-checker/",
              texto: "Herramienta de escritorio gratuita.",
            },
            {
              titulo: "Stark",
              enlace: "https://www.getstark.co/",
              texto: "Plugin para Figma, Sketch y navegadores.",
            },
            {
              titulo: "Chrome DevTools",
              texto: "Auditoría automática con Lighthouse.",
            },
            {
              titulo: "Coolors",
              enlace: "https://coolors.co/contrast-checker",
              texto: "Verificador integrado en su generador de paletas.",
            },
          ]}
        />

        <TarjetasPost
          titulo="Ejemplos de indicadores múltiples en sitios reales"
          columnas={3}
          tarjetas={[
            {
              titulo: "Airbnb",
              texto: "Combina color rojo, icono y borde para mostrar errores en formularios.",
            },
            {
              titulo: "Shopify",
              texto: "Usa color, subrayado y negrita para los enlaces importantes.",
            },
            {
              titulo: "Medium",
              texto: "Emplea color, fondo e iconografía para categorizar contenido.",
            },
          ]}
        />

        <p>
          <a
            href="https://codepen.io/search/pens?q=css%2520contrast%2520accessibility"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ejemplos de contraste y color accesible en CodePen
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Tipografía accesible: legibilidad para todos">
        <TarjetasPost
          titulo="Casos de estudio: tipografía que funciona"
          columnas={3}
          tarjetas={[
            {
              titulo: "Medium",
              enlace: "https://medium.com",
              texto: (
                <ul>
                  <li>
                    <code>font-size</code> base de 20px (mayor que el estándar de
                    16px).
                  </li>
                  <li>
                    <code>line-height</code> de 1.58 para mayor legibilidad.
                  </li>
                  <li>Usa Georgia, serif para el cuerpo del texto.</li>
                  <li>Ancho máximo de línea de 680px (unos 75 caracteres).</li>
                </ul>
              ),
            },
            {
              titulo: "The Guardian",
              enlace: "https://theguardian.com",
              texto: (
                <ul>
                  <li>
                    <code>font-size</code> mínimo de 17px en móvil.
                  </li>
                  <li>Contraste superior a 12:1 en el texto principal.</li>
                  <li>Espaciado generoso entre párrafos.</li>
                  <li>Jerarquía clara con 6 niveles de encabezados.</li>
                </ul>
              ),
            },
            {
              titulo: "BBC",
              enlace: "https://bbc.com",
              texto: (
                <ul>
                  <li>Fuente Reith Sans optimizada para la legibilidad.</li>
                  <li>Tamaños mínimos de 18px en móvil.</li>
                  <li>Alto contraste en todas las combinaciones.</li>
                  <li>Tipografía responsive que escala suavemente.</li>
                </ul>
              ),
            },
          ]}
        />

        <p>
          <a
            href="https://codepen.io/search/pens?q=accessible%2520typography%2520css"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ejemplos de tipografía fluida en CodePen
          </a>
        </p>
        <p>Recuerda: para ver los ejemplos de CodePen necesitas iniciar sesión.</p>
      </SeccionPost>

      <SeccionPost titulo="Navegación accesible: estados de foco y navegación por teclado">
        <TarjetasPost
          titulo="Ejemplos destacados de gestión del foco"
          columnas={3}
          tarjetas={[
            {
              titulo: "GitHub",
              enlace: "https://github.com",
              texto: (
                <ul>
                  <li>Estados de foco muy visibles, con un outline azul de 2px.</li>
                  <li>Skip links funcionales para navegar por teclado.</li>
                  <li>Focus trapping en los modales.</li>
                  <li>Indicadores visuales claros en los desplegables.</li>
                </ul>
              ),
            },
            {
              titulo: "Atlassian",
              enlace: "https://atlassian.com",
              texto: (
                <ul>
                  <li>Focus rings personalizados que respetan la marca.</li>
                  <li>Navegación por teclado en todos los componentes.</li>
                  <li>Estados hover y focus claramente diferenciados.</li>
                  <li>Migas de pan navegables por teclado.</li>
                </ul>
              ),
            },
            {
              titulo: "Shopify",
              enlace: "https://shopify.com",
              texto: (
                <ul>
                  <li>Estados de foco que contrastan con el fondo.</li>
                  <li>Navegación principal totalmente operable por teclado.</li>
                  <li>Indicadores de la página actual en la navegación.</li>
                  <li>Foco visible en carruseles y galerías.</li>
                </ul>
              ),
            },
          ]}
        />

        <TarjetasPost
          titulo="Herramientas para probar la navegación"
          tarjetas={[
            {
              titulo: "WAVE",
              enlace: "https://wave.webaim.org/",
              texto: "Análisis visual de accesibilidad.",
            },
            {
              titulo: "aXe DevTools",
              enlace: "https://www.deque.com/axe/devtools/",
              texto: "Extensión para Chrome y Firefox.",
            },
            {
              titulo: "Tab Tester",
              texto: "Navega solo con el tabulador para identificar problemas.",
            },
            {
              titulo: "NVDA",
              enlace: "https://www.nvaccess.org/",
              texto: "Lector de pantalla gratuito para hacer pruebas.",
            },
          ]}
        />

        <p>
          <a
            href="https://codepen.io/search/pens?q=css%2520focus%2520keyboard%2520navigation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ejemplos de navegación por teclado en CodePen
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Estados interactivos y feedback visual">
        <TarjetasPost
          titulo="Casos de éxito en feedback visual"
          columnas={3}
          tarjetas={[
            {
              titulo: "Slack",
              enlace: "https://slack.com",
              texto: (
                <ul>
                  <li>Estados de carga con indicadores animados accesibles.</li>
                  <li>Feedback inmediato en formularios con validación en tiempo real.</li>
                  <li>Estados de error, aviso y éxito claramente diferenciados.</li>
                  <li>Estados de carga que funcionan con lectores de pantalla.</li>
                </ul>
              ),
            },
            {
              titulo: "Notion",
              enlace: "https://notion.so",
              texto: (
                <ul>
                  <li>Estados hover sutiles pero perceptibles.</li>
                  <li>Estados activos claramente marcados.</li>
                  <li>
                    Transiciones suaves que respetan{" "}
                    <code>prefers-reduced-motion</code>.
                  </li>
                  <li>Feedback táctil en dispositivos móviles.</li>
                </ul>
              ),
            },
            {
              titulo: "Figma",
              enlace: "https://figma.com",
              texto: (
                <ul>
                  <li>Estados deshabilitados claramente marcados con opacidad y cursor.</li>
                  <li>Estados activos en las herramientas de la barra lateral.</li>
                  <li>Tooltips informativos sin sobrecargar la interfaz.</li>
                  <li>Atajos de teclado visibles y accesibles.</li>
                </ul>
              ),
            },
          ]}
        />

        <p>
          <a
            href="https://codepen.io/search/pens?q=css%2520hover%2520focus%2520states"
            target="_blank"
            rel="noopener noreferrer"
          >
            Analiza ejemplos de estados interactivos en CodePen
          </a>{" "}
          (necesitas iniciar sesión con tu cuenta).
        </p>
      </SeccionPost>

      <SeccionPost titulo="Respetando las preferencias del usuario">
        <h3>
          Sitios que implementan <code>prefers-reduced-motion</code>
        </h3>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Linear",
              enlace: "https://linear.app",
              texto: (
                <ul>
                  <li>Reduce automáticamente las animaciones complejas.</li>
                  <li>Mantiene el feedback visual esencial.</li>
                  <li>Transiciones mínimas cuando se prefiere movimiento reducido.</li>
                </ul>
              ),
            },
            {
              titulo: "Framer",
              enlace: "https://framer.com",
              texto: (
                <ul>
                  <li>Animaciones que respetan por completo la preferencia del usuario.</li>
                  <li>Estados alternativos para personas sensibles al movimiento.</li>
                  <li>Mantiene la funcionalidad sin comprometer la accesibilidad.</li>
                </ul>
              ),
            },
          ]}
        />

        <h3>
          Implementaciones de <code>prefers-color-scheme</code>
        </h3>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Twitter",
              enlace: "https://twitter.com",
              texto: (
                <ul>
                  <li>Modo oscuro automático según las preferencias del sistema.</li>
                  <li>Contraste óptimo en ambos modos.</li>
                  <li>Transición suave entre temas.</li>
                </ul>
              ),
            },
            {
              titulo: "YouTube",
              enlace: "https://youtube.com",
              texto: (
                <ul>
                  <li>Tema oscuro que mantiene la accesibilidad.</li>
                  <li>Contraste adecuado en todos los elementos.</li>
                  <li>Iconografía adaptada a cada tema.</li>
                </ul>
              ),
            },
          ]}
        />

        <p>
          <a
            href="https://codepen.io/search/pens?q=css%2520dark%2520mode%2520accessibility"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ejemplos de modo oscuro accesible en CodePen
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Formularios accesibles con CSS">
        <TarjetasPost
          titulo="Ejemplos de formularios excepcionales"
          columnas={3}
          tarjetas={[
            {
              titulo: "Stripe Checkout",
              enlace: "https://checkout.stripe.com",
              texto: (
                <ul>
                  <li>Labels claramente asociados a sus campos.</li>
                  <li>Estados de error con varios indicadores visuales.</li>
                  <li>Validación en tiempo real sin ser intrusiva.</li>
                  <li>Campos de tamaño adecuado para dispositivos táctiles.</li>
                </ul>
              ),
            },
            {
              titulo: "Mailchimp",
              enlace: "https://mailchimp.com",
              texto: (
                <ul>
                  <li>Formularios con una jerarquía visual excelente.</li>
                  <li>Mensajes de ayuda contextuales.</li>
                  <li>Estados de carga accesibles.</li>
                  <li>Gestión de errores clara y accionable.</li>
                </ul>
              ),
            },
            {
              titulo: "Typeform",
              enlace: "https://typeform.com",
              texto: (
                <ul>
                  <li>Una pregunta por pantalla reduce la carga cognitiva.</li>
                  <li>Navegación clara entre pasos.</li>
                  <li>Indicadores de progreso accesibles.</li>
                  <li>Diseño responsive perfecto en móviles.</li>
                </ul>
              ),
            },
          ]}
        />

        <p>
          <a
            href="https://codepen.io/search/pens?q=accessible+forms+css"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ejemplos de formularios accesibles en CodePen
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Proyectos de FemCoders Club para practicar accesibilidad">
        <p>
          ¿Quieres poner en práctica todo lo que hemos aprendido? Hemos creado
          una serie de proyectos pensados para que puedas explorar,
          experimentar y contribuir con implementaciones reales de
          accesibilidad.
        </p>

        <TarjetasPost
          titulo="Repositorios para explorar y aprender"
          tarjetas={[
            {
              titulo: "cv4Coders",
              enlace: "https://github.com/femcodersclub/cv4Coders",
              texto:
                "Plantillas de CV que combinan un diseño atractivo con una accesibilidad cuidada. Observa cómo implementamos el contraste adecuado, la tipografía legible y la navegación por teclado.",
            },
            {
              titulo: "CssSelectors",
              enlace: "https://github.com/femcodersclub/CssSelectors",
              texto:
                "Ejemplos prácticos de cómo usar selectores CSS para crear interfaces más accesibles, incluidos los estados de foco y hover.",
            },
            {
              titulo: "demoFlexbox",
              enlace: "https://github.com/femcodersclub/demoFlexbox",
              texto:
                "Layouts flexibles que mantienen un orden lógico para los lectores de pantalla y ofrecen un diseño visual atractivo.",
            },
            {
              titulo: "Dashboard-de-Control-Futurista",
              enlace: "https://github.com/femcodersclub/Dashboard-de-Control-Futurista",
              texto:
                "Dashboard completo con modo oscuro accesible, indicadores de estado claros y navegación totalmente operable por teclado.",
            },
            {
              titulo: "AnimacionesCSS",
              enlace: "https://github.com/femcodersclub/AnimacionesCSS",
              texto: (
                <>
                  Colección de animaciones que respetan{" "}
                  <code>prefers-reduced-motion</code> y ofrecen alternativas
                  accesibles.
                </>
              ),
            },
            {
              titulo: "ResponsiveShowcase",
              enlace: "https://github.com/femcodersclub/ResponsiveShowcase",
              texto: (
                <>
                  Como mencionamos en nuestro{" "}
                  <Link to="/recursos/css/responsive-design">
                    post anterior sobre responsive design
                  </Link>
                  , este proyecto demuestra cómo crear layouts que son a la vez
                  responsive y accesibles.
                </>
              ),
            },
          ]}
        />

        <h3>Cómo usar estos proyectos para aprender</h3>
        <ol>
          <li>
            <strong>Explora el código:</strong> cada repositorio incluye
            ejemplos comentados de las técnicas que hemos visto.
          </li>
          <li>
            <strong>Practica modificaciones:</strong> cambia colores y tamaños, y
            observa cómo afecta a la accesibilidad.
          </li>
          <li>
            <strong>Usa las herramientas:</strong> pasa Lighthouse, WAVE y aXe
            por estos proyectos.
          </li>
          <li>
            <strong>Contribuye con mejoras:</strong> ¿ves algo que se pueda
            mejorar? ¡Envía un pull request!
          </li>
          <li>
            <strong>Crea variaciones:</strong> usa estos proyectos como base
            para tus propias implementaciones.
          </li>
        </ol>
      </SeccionPost>

      <SeccionPost titulo="Herramientas y testing de accesibilidad">
        <TarjetasPost
          titulo="Herramientas automatizadas esenciales"
          tarjetas={[
            {
              titulo: "Lighthouse",
              enlace: "https://developers.google.com/web/tools/lighthouse",
              texto: (
                <ul>
                  <li>Integrado en Chrome DevTools.</li>
                  <li>Auditorías automáticas de accesibilidad.</li>
                  <li>Puntuación y recomendaciones específicas.</li>
                </ul>
              ),
            },
            {
              titulo: "WAVE",
              enlace: "https://wave.webaim.org/",
              texto: (
                <ul>
                  <li>Análisis visual de los problemas de accesibilidad.</li>
                  <li>Extensión de navegador gratuita.</li>
                  <li>Feedback inmediato y contextual.</li>
                </ul>
              ),
            },
            {
              titulo: "aXe DevTools",
              enlace: "https://www.deque.com/axe/devtools/",
              texto: (
                <ul>
                  <li>La herramienta más precisa para desarrolladores.</li>
                  <li>Integración con los frameworks más populares.</li>
                  <li>Testing automatizado en CI/CD.</li>
                </ul>
              ),
            },
            {
              titulo: "Pa11y",
              enlace: "https://pa11y.org/",
              texto: (
                <ul>
                  <li>Testing de accesibilidad desde la línea de comandos.</li>
                  <li>Perfecto para la integración continua.</li>
                  <li>Genera informes detallados.</li>
                </ul>
              ),
            },
          ]}
        />

        <TarjetasPost
          titulo="Testing manual fundamental"
          columnas={3}
          tarjetas={[
            {
              titulo: "Navegación por teclado",
              texto: (
                <ul>
                  <li>Usa solo Tab, Mayús + Tab, Intro, Espacio y las flechas.</li>
                  <li>Verifica que todos los elementos interactivos sean accesibles.</li>
                  <li>Asegúrate de que el foco sea siempre visible.</li>
                </ul>
              ),
            },
            {
              titulo: "Lectores de pantalla",
              texto: (
                <ul>
                  <li>
                    <strong>NVDA</strong> (Windows, gratuito).
                  </li>
                  <li>
                    <strong>JAWS</strong> (Windows, de pago).
                  </li>
                  <li>
                    <strong>VoiceOver</strong> (macOS, incluido).
                  </li>
                  <li>
                    <strong>TalkBack</strong> (Android, incluido).
                  </li>
                </ul>
              ),
            },
            {
              titulo: "Testing con personas usuarias reales",
              texto: (
                <ul>
                  <li>La mejor validación viene de las personas con discapacidad.</li>
                  <li>
                    Servicios como{" "}
                    <a href="https://userway.org/" target="_blank" rel="noopener noreferrer">
                      UserWay
                    </a>{" "}
                    conectan con testers.
                  </li>
                  <li>Un feedback muy valioso que las herramientas no pueden dar.</li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Casos de estudio: sitios con accesibilidad excepcional">
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Gobierno del Reino Unido (gov.uk)",
              texto: (
                <>
                  <p>
                    <strong>Por qué es ejemplar:</strong>
                  </p>
                  <ul>
                    <li>Contraste mínimo de 4,5:1 en todos los elementos.</li>
                    <li>Tipografía optimizada para la dislexia (fuente GDS Transport).</li>
                    <li>Navegación extremadamente clara.</li>
                    <li>Formularios con labels perfectos y una gestión de errores excepcional.</li>
                  </ul>
                  <p>
                    <strong>Lecciones clave:</strong>
                  </p>
                  <ul>
                    <li>La simplicidad no significa falta de diseño.</li>
                    <li>La accesibilidad mejora la experiencia de todo el mundo.</li>
                    <li>Pruebas exhaustivas con personas usuarias reales.</li>
                  </ul>
                </>
              ),
            },
            {
              titulo: "Microsoft.com",
              texto: (
                <>
                  <p>
                    <strong>Por qué destaca:</strong>
                  </p>
                  <ul>
                    <li>Soporte completo para lectores de pantalla.</li>
                    <li>Estados de foco muy visibles.</li>
                    <li>Documentación de accesibilidad pública.</li>
                    <li>Herramientas internas compartidas con la comunidad.</li>
                  </ul>
                  <p>
                    <strong>Elementos destacados:</strong>
                  </p>
                  <ul>
                    <li>Skip links de navegación funcionales.</li>
                    <li>Texto alternativo descriptivo en todas las imágenes.</li>
                    <li>Vídeos con subtítulos automáticos.</li>
                    <li>Modo de alto contraste nativo.</li>
                  </ul>
                </>
              ),
            },
            {
              titulo: "BBC iPlayer",
              texto: (
                <>
                  <p>
                    <strong>Innovaciones en accesibilidad:</strong>
                  </p>
                  <ul>
                    <li>Subtítulos personalizables (tamaño, color, posición).</li>
                    <li>Audiodescripción disponible.</li>
                    <li>Controles de vídeo accesibles por teclado.</li>
                    <li>Interfaz adaptable a distintas necesidades.</li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <p>
          <a
            href="https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta los requisitos de accesibilidad de gov.uk para webs y apps
            del sector público
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Métricas y medición de accesibilidad">
        <TarjetasPost
          titulo="KPI de accesibilidad: métricas técnicas"
          columnas={3}
          tarjetas={[
            {
              titulo: "WCAG Compliance Score",
              texto: "Porcentaje de criterios cumplidos.",
            },
            {
              titulo: "Axe-core violations",
              texto: "Número de problemas detectables automáticamente.",
            },
            {
              titulo: "Lighthouse Accessibility Score",
              texto: "Puntuación de 0 a 100.",
            },
          ]}
        />

        <TarjetasPost
          titulo="KPI de accesibilidad: métricas de uso"
          columnas={3}
          tarjetas={[
            {
              titulo: "Keyboard Navigation Success Rate",
              texto: "Porcentaje de tareas que se pueden completar solo con el teclado.",
            },
            {
              titulo: "Screen Reader Completion Rate",
              texto: "Personas que completan los flujos con lectores de pantalla.",
            },
            {
              titulo: "Error Recovery Rate",
              texto: "Facilidad para corregir errores en los formularios.",
            },
          ]}
        />

        <TarjetasPost
          titulo="Herramientas de monitorización continua"
          tarjetas={[
            {
              titulo: "Siteimprove",
              enlace: "https://siteimprove.com",
              texto: (
                <ul>
                  <li>Monitorización automática de la accesibilidad.</li>
                  <li>Alertas cuando aparecen nuevos problemas.</li>
                  <li>Informes ejecutivos y técnicos.</li>
                </ul>
              ),
            },
            {
              titulo: "Deque WorldSpace",
              enlace: "https://www.deque.com/worldspace/",
              texto: (
                <ul>
                  <li>Testing integrado en el desarrollo.</li>
                  <li>Monitorización en producción.</li>
                  <li>Formación integrada para equipos.</li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Tendencias futuras en accesibilidad CSS">
        <TarjetasPost
          titulo="CSS moderno para accesibilidad"
          columnas={3}
          tarjetas={[
            {
              titulo: "Container queries y accesibilidad",
              texto:
                "Los container queries permiten adaptar los componentes según su contenedor, lo que mejora la experiencia en distintos contextos de uso.",
            },
            {
              titulo: "CSS Grid y Flexbox avanzado",
              texto:
                "Layouts más semánticos que mantienen un orden lógico independiente del orden visual.",
            },
            {
              titulo: "Custom properties para temas",
              texto: "Variables CSS que permiten cambios dinámicos de tema sin JavaScript.",
            },
          ]}
        />

        <TarjetasPost
          titulo="Nuevas especificaciones"
          tarjetas={[
            {
              titulo: "CSS Speech Module",
              texto: (
                <ul>
                  <li>Control sobre la pronunciación en los lectores de pantalla.</li>
                  <li>Pausas y énfasis programáticos.</li>
                  <li>Mejor experiencia auditiva.</li>
                </ul>
              ),
            },
            {
              titulo: "Media queries de nivel 5",
              texto: (
                <ul>
                  <li>
                    <code>prefers-contrast: more/less</code>
                  </li>
                  <li>
                    <code>prefers-reduced-transparency: reduce</code>
                  </li>
                  <li>
                    <code>forced-colors: active</code>
                  </li>
                </ul>
              ),
            },
          ]}
        />

        <TarjetasPost
          titulo="Inteligencia artificial y accesibilidad"
          tarjetas={[
            {
              titulo: "Texto alternativo automático",
              texto: (
                <ul>
                  <li>
                    <a
                      href="https://azure.microsoft.com/services/cognitive-services/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Microsoft Cognitive Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cloud.google.com/vision"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Cloud Vision
                    </a>
                  </li>
                </ul>
              ),
            },
            {
              titulo: "Análisis automático de contraste",
              texto: (
                <ul>
                  <li>
                    <a
                      href="https://www.getstark.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stark
                    </a>{" "}
                    integra IA para sugerir mejoras.
                  </li>
                  <li>
                    <a href="https://able.co" target="_blank" rel="noopener noreferrer">
                      Able
                    </a>{" "}
                    para auditorías automáticas.
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Recursos adicionales y comunidad">
        <TarjetasPost
          titulo="Documentación oficial y guías"
          columnas={3}
          tarjetas={[
            {
              titulo: "WCAG 2.1 Guidelines",
              enlace: "https://www.w3.org/WAI/WCAG21/quickref/",
              texto: (
                <ul>
                  <li>Referencia completa de criterios.</li>
                  <li>Ejemplos y técnicas específicas.</li>
                  <li>Casos de uso por tecnología.</li>
                </ul>
              ),
            },
            {
              titulo: "MDN Accessibility",
              enlace: "https://developer.mozilla.org/docs/Web/Accessibility",
              texto: (
                <ul>
                  <li>Guías técnicas detalladas.</li>
                  <li>Ejemplos de código accesible.</li>
                  <li>Testing y herramientas.</li>
                </ul>
              ),
            },
            {
              titulo: "A11y Project",
              enlace: "https://www.a11yproject.com/",
              texto: (
                <ul>
                  <li>Checklist práctica de accesibilidad.</li>
                  <li>Artículos de la comunidad.</li>
                  <li>Recursos organizados por tema.</li>
                </ul>
              ),
            },
          ]}
        />

        <TarjetasPost
          titulo="Comunidades y eventos"
          columnas={3}
          tarjetas={[
            {
              titulo: "Global Accessibility Awareness Day",
              enlace: "https://accessibility.day/",
              texto: (
                <ul>
                  <li>Evento anual mundial.</li>
                  <li>Recursos y talleres gratuitos.</li>
                  <li>Comunidad global activa.</li>
                </ul>
              ),
            },
            {
              titulo: "A11y Slack Community",
              enlace: "https://web-a11y.slack.com",
              texto: (
                <ul>
                  <li>Más de 13 000 profesionales.</li>
                  <li>Canales especializados por tecnología.</li>
                  <li>Apoyo entre pares.</li>
                </ul>
              ),
            },
            {
              titulo: "Deque University",
              enlace: "https://dequeuniversity.com/",
              texto: (
                <ul>
                  <li>Cursos certificados en accesibilidad.</li>
                  <li>Testing práctico con herramientas reales.</li>
                  <li>Certificaciones reconocidas en la industria.</li>
                </ul>
              ),
            },
          ]}
        />

        <TarjetasPost
          titulo="Recursos de FemCoders Club"
          tarjetas={[
            {
              titulo: "Slack de FemCoders Club",
              enlace: "https://communityinviter.com/apps/femcodersclub/femcoders-club",
              texto: (
                <ul>
                  <li>Canal #accessibility para debatir.</li>
                  <li>Apoyo de la comunidad hispanohablante.</li>
                  <li>Sesiones de mentoring sobre accesibilidad.</li>
                </ul>
              ),
            },
            {
              titulo: "Blog de FemCoders Club",
              enlace: "/blog",
              texto: (
                <ul>
                  <li>Más artículos técnicos sobre CSS y accesibilidad.</li>
                  <li>Casos de estudio de proyectos reales.</li>
                  <li>Tutoriales paso a paso.</li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Conclusión: construyendo una web más inclusiva">
        <p>
          La accesibilidad en CSS no consiste solo en cumplir estándares
          técnicos. Se trata de crear experiencias digitales que de verdad
          incluyan a todas las personas, independientemente de sus capacidades,
          dispositivos o contextos de uso.
        </p>

        <ListaMarcadaPost titulo="A lo largo de este artículo hemos explorado" tipo="bien">
          <li>
            <strong>Los fundamentos</strong> del contraste y el color accesible,
            con ejemplos de sitios reales.
          </li>
          <li>
            <strong>Tipografía inclusiva</strong> que mejora la legibilidad para
            todos.
          </li>
          <li>
            <strong>Navegación accesible</strong> con gestión del foco y
            navegación por teclado.
          </li>
          <li>
            <strong>Estados interactivos</strong> que dan un feedback claro.
          </li>
          <li>
            <strong>Respeto por las preferencias</strong> del usuario con CSS
            moderno.
          </li>
          <li>
            <strong>Formularios accesibles</strong> que facilitan la interacción.
          </li>
          <li>
            <strong>Herramientas de testing</strong> automático y manual.
          </li>
          <li>
            <strong>Casos de estudio</strong> de sitios con accesibilidad
            excepcional.
          </li>
        </ListaMarcadaPost>

        <h3>El impacto de tus decisiones CSS</h3>
        <p>
          Cada vez que eliges un color, defines un tamaño de fuente o creas un
          estado hover, estás tomando decisiones que afectan directamente a la
          capacidad de las personas para usar tu sitio web. La accesibilidad no
          es una checklist que completar al final del proyecto; es una
          mentalidad que debe guiar cada decisión de diseño desde el primer
          mockup.
        </p>

        <h3>Tu próximo paso</h3>
        <PasosPost
          pasos={[
            {
              etiqueta: "Paso 1",
              titulo: "Audita tu sitio actual",
              puntos: ["Con las herramientas que hemos mencionado."],
            },
            {
              etiqueta: "Paso 2",
              titulo: "Implementa una mejora cada semana",
              puntos: ["El progreso gradual es sostenible."],
            },
            {
              etiqueta: "Paso 3",
              titulo: "Involucra a personas usuarias reales",
              puntos: ["Su feedback es muy valioso."],
            },
            {
              etiqueta: "Paso 4",
              titulo: "Documenta tus decisiones",
              puntos: ["Crea guías de estilo accesibles para tu equipo."],
            },
            {
              etiqueta: "Paso 5",
              titulo: "Comparte tu conocimiento",
              puntos: ["Enseña accesibilidad a otras personas que desarrollan."],
            },
          ]}
        />

        <h3>Recuerda</h3>
        <p>
          La accesibilidad nos beneficia a todos. Un sitio más accesible es
          también más usable, más rápido, está mejor posicionado en los
          buscadores y demuestra un compromiso real con la inclusión digital.
        </p>
        <p>
          Como desarrolladoras, tenemos el poder y la responsabilidad de
          construir una web que de verdad sirva a todas las personas. Cada línea
          de CSS que escribimos es una oportunidad para hacer el mundo digital un
          poco más inclusivo.
        </p>
        <p>
          ¡La comunidad de FemCoders Club está aquí para apoyarte en este camino!
          Comparte tus implementaciones, haz preguntas y ayudemos juntas a crear
          una web más accesible para todas las personas.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default AccesibilidadCSS;
