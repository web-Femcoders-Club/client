import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../components/CommentsSection";
import "../../page/PostStyles.css";

import ShareButtons from "../../components/ShareButtons";
import PostImage from "../../components/PostImage";
import { articleSchema } from "../../components/articleSchema";

const HackBarnaAiSummit26DesdeDentro: React.FC = () => {
  const postId = 48;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde
          dentro | FemCoders Club
        </title>
        <meta
          name="description"
          content="FemCoders Club vuelve a HackBarna AI Summit 26 como Community Partner y este año también participa en el hackathon con equipo propio. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona."
        />
        <meta
          name="keywords"
          content="hackbarna ai summit 26, hackathon ia barcelona, hackathon inteligencia artificial barcelona 2026, community partner, equipo femcoders, Lilibeth Bustos Linares, FemCoders Club, Norrsken House Barcelona, AI Summit Barcelona 2026, mujeres en tecnología"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/hackbarna-ai-summit-26-desde-dentro"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Volvemos como Community Partner y este año vamos un poco más allá: varias femcoders hemos formado equipo y también participaremos en el hackathon. 19 y 20 de septiembre en Norrsken House Barcelona."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/hackbarna-ai-summit-26-desde-dentro"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro"
        />
        <meta
          name="twitter:description"
          content="Community Partner y, además, equipo dentro del hackathon. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-09-09T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="HackBarna" />
        <meta property="article:tag" content="Hackathon" />
        <meta property="article:tag" content="Inteligencia Artificial" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="Community Partner" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/hackbarna-ai-summit-26-desde-dentro",
              headline:
                "FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro",
              description:
                "FemCoders Club vuelve a HackBarna AI Summit 26 como Community Partner y este año también participa en el hackathon con equipo propio. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona.",
              image: "/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg",
              datePublished: "2026-09-09T10:00:00Z",
              about: {
                "@type": "Event",
                name: "HackBarna AI Summit 26",
                description:
                  "Tercera edición del hackathon de inteligencia artificial de HackBarna, celebrada junto a AI Summit Barcelona 2026 en Norrsken House Barcelona.",
                startDate: "2026-09-19T09:00:00+02:00",
                endDate: "2026-09-20T20:00:00+02:00",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                url: "https://www.hackbcn.com/en/events/aisummit26",
                location: {
                  "@type": "Place",
                  name: "Norrsken House Barcelona",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Barcelona",
                    addressCountry: "ES",
                  },
                },
                organizer: {
                  "@type": "Organization",
                  name: "HackBarna",
                  url: "https://www.hackbcn.com/en",
                },
              },
              keywords: [
                "HackBarna AI Summit 26",
                "hackathon IA Barcelona",
                "Community Partner",
                "AI Summit Barcelona 2026",
                "Lilibeth Bustos Linares",
                "FemCoders Club",
                "Norrsken House Barcelona",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
      </Helmet>

      {/* ── Hero image ── */}
      <PostImage
        src="/public-optimized/desktop/assets/noticias/hackbarna-ai-summit-26-desde-dentro.webp"
        mobileSrc="/public-optimized/mobile/assets/noticias/hackbarna-ai-summit-26-desde-dentro.webp"
        desktopSrc="/public-optimized/desktop/assets/noticias/hackbarna-ai-summit-26-desde-dentro.webp"
        fallbackSrc="/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg"
        alt="Cuatro tarjetas «¡vengo a hackear!» de HackBarna AI Summit 26 con las fotos de las femcoders del equipo —Irina Ichim, Elvia Benedith, Ana Lucía Silva Córdoba y Silvina Lucero Calderón—, sobre la playa de Barcelona y el logotipo de hackbarna ai summit 26. Cada tarjeta indica Sep 19-20, Norrsken House Barcelona"
        aiGenerated
      />

      <h1 className="blog-post-title">
        FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde
        dentro
      </h1>

      <ShareButtons
        path="/noticias/hackbarna-ai-summit-26-desde-dentro"
        title="FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro"
      />

      {/* ── Intro ── */}
      <div className="intro-text">
        <p>
          Hay colaboraciones que crecen con el tiempo, y la nuestra con{" "}
          <strong>HackBarna</strong> es una de ellas.
        </p>
        <br />
        <p>
          Los próximos <strong>19 y 20 de septiembre</strong>, FemCoders Club
          volverá a formar parte de{" "}
          <strong>HackBarna AI Summit 26 como Community Partner</strong>. Pero
          este año vamos un poco más allá: varias femcoders hemos formado equipo
          y también participaremos en el hackathon.
        </p>
        <br />
        <p>
          Esta vez estaremos apoyando, compartiendo y animando a más mujeres a
          sumarse, como hemos hecho hasta ahora, pero también{" "}
          <strong>sentadas alrededor de una mesa, construyendo juntas</strong>.
        </p>
        <br />
        <p>Y nos apetecía mucho contarlo.</p>
      </div>

      {/* ── 1. HackBarna AI Summit vuelve a Barcelona ── */}
      <div className="highlight-box">
        <h2>HackBarna AI Summit vuelve a Barcelona</h2>
        <br />
        <p>
          En pocas ediciones, HackBarna se ha hecho un sitio propio dentro del
          ecosistema tecnológico y de inteligencia artificial de Barcelona.
        </p>
        <br />
        <p>
          Desde 2024, sus hackathons y Hack Nights han reunido a una comunidad
          creciente de developers, builders, perfiles de producto y
          profesionales de IA alrededor de algo que nos gusta especialmente:{" "}
          <strong>aprender tecnología construyendo con ella</strong>.
        </p>
        <br />
        <p>
          Por sus anteriores ediciones han pasado nombres como{" "}
          <strong>
            Hugging Face, Mistral AI, Amazon, Vonage, n8n, Lovable o Netlify
          </strong>
          , y HackBarna AI Summit 26 vuelve con un ecosistema en el que
          encontramos a{" "}
          <strong>
            Vonage, Preply, Mastra, Nebius, Cognition, fal.ai, QualityClouds y
            Galtea
          </strong>
          , entre otros.
        </p>
        <br />
        <p>
          Esta tercera edición se celebra junto a{" "}
          <strong>AI Summit Barcelona 2026</strong> y tendrá lugar en{" "}
          <strong>Norrsken House Barcelona</strong>.
        </p>
        <br />
        <p>
          Dos días para compartir ideas, descubrir tecnologías, conocer gente y,
          sobre todo, construir.
        </p>
      </div>

      {/* ── 2. Una conversación que terminó convirtiéndose en equipo ── */}
      <div className="highlight-box">
        <h2>Una conversación que terminó convirtiéndose en equipo</h2>
        <br />
        <p>
          El pasado <strong>3 de septiembre</strong> organizamos desde FemCoders
          Club una sesión con{" "}
          <strong>Lilibeth Bustos Linares, ganadora de HackBarna 2025</strong>,
          para conocer cómo se vive el hackathon desde dentro.
        </p>
        <br />
        <p>
          Hablamos de cómo nace una idea en un entorno así, de equipos,
          organización, decisiones, tecnología, demos y de todo lo que puede
          ocurrir durante un fin de semana en el que el tiempo corre bastante
          más rápido de lo normal.
        </p>
        <br />
        <p>
          La sesión nació precisamente para acercar esa experiencia a nuestra
          comunidad y resolver muchas de las dudas que aparecen antes de
          participar.
        </p>
        <br />
        <p>Y tuvo un efecto que no habíamos planeado.</p>
        <br />
        <p>Al terminar, varias compartíamos la misma sensación:</p>
        <br />
        <p>
          <strong>queríamos estar allí construyendo.</strong>
        </p>
        <br />
        <p>Y así nació nuestro equipo para HackBarna AI Summit 26.</p>
        <br />
        <p>
          <strong>Estas somos las cuatro que estaremos hackeando:</strong>
        </p>
        <br />
        <ul>
          <li>
            <strong>Irina Ichim</strong> — Fullstack developer especializada en
            integración de IA y mentora de backend con Java.{" "}
            <a
              href="https://www.linkedin.com/in/irina-ichim-desarrolladora"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Irina Ichim"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Elvia Benedith</strong> — Desarrolladora web full-stack e
            ingeniera civil.{" "}
            <a
              href="https://www.linkedin.com/in/elvia-benedith"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Elvia Benedith"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Ana Lucía Silva Córdoba</strong> — Fullstack developer,
            máster en Big Data &amp; Data Science y formadora tecnológica.{" "}
            <a
              href="https://www.linkedin.com/in/ana-lucia-silva-cordoba"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Ana Lucía Silva Córdoba"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Silvina Lucero Calderón</strong> — Desarrolladora web full
            stack y QA tester funcional.{" "}
            <a
              href="https://www.linkedin.com/in/silvina-lucero"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Silvina Lucero Calderón"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <br />
        <p>
          Lo que empezó como una sesión para acercar la experiencia de HackBarna
          a la comunidad terminó despertando todavía más ganas de vivirla
          juntas. De compartir ideas, probar, equivocarnos, resolver problemas y
          disfrutar de todo lo que ocurre cuando varias femcoders se sientan
          alrededor de una misma mesa con algo por construir.
        </p>
        <br />
        <p>
          Todavía no sabemos qué proyecto saldrá de ese fin de semana, y
          precisamente ahí está parte de la magia de un hackathon.
        </p>
        <br />
        <p>
          Lo que sí sabemos es que esta vez{" "}
          <strong>FemCoders Club también estará allí construyendo</strong>.
        </p>
      </div>

      {/* ── 3. Si te perdiste la sesión con Lilibeth, ya puedes verla ── */}
      <div className="highlight-box">
        <h2>Si te perdiste la sesión con Lilibeth, ya puedes verla</h2>
        <br />
        <p>
          La conversación completa con <strong>Lilibeth Bustos Linares</strong>{" "}
          ya está disponible en nuestro canal de YouTube.
        </p>
        <br />
        <p>
          Durante la sesión compartió su experiencia en HackBarna 2025 y
          hablamos de muchas de las preguntas que suelen aparecer antes de un
          hackathon: cómo organizar el tiempo, cómo trabajar en equipo, cómo
          decidir hasta dónde llevar una idea o qué importancia tiene la demo
          final.
        </p>
        <br />
        <p>Pero hubo algo especialmente interesante en su experiencia.</p>
        <br />
        <p>
          Lilibeth llegó a HackBarna desde el{" "}
          <strong>diseño de producto</strong> y terminó formando parte del
          equipo ganador de la edición de 2025.
        </p>
        <br />
        <p>
          Es un buen ejemplo de algo que también defendemos mucho desde
          FemCoders Club: los proyectos tecnológicos se enriquecen cuando
          alrededor de la mesa hay perspectivas diferentes.
        </p>
        <br />
        <p>
          Desarrollo, producto, diseño, datos, calidad, IA... un hackathon
          necesita código, por supuesto, pero también necesita entender qué
          estamos construyendo y para quién.
        </p>
        <br />
        <p>
          <a
            href="https://www.youtube.com/watch?v=pvStyYvl5io"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            <strong>Ver la sesión completa con Lilibeth Bustos Linares</strong>
          </a>
        </p>
        <br />
        <p>
          Gracias, Lilibeth, por compartir la experiencia con tanta cercanía y
          por responder a todas las preguntas que fueron surgiendo durante la
          sesión.
        </p>
      </div>

      {/* ── 4. Dos días para construir, probar y aprender ── */}
      <div className="highlight-box">
        <h2>Dos días para construir, probar y aprender</h2>
        <br />
        <p>
          Una de las cosas más interesantes de HackBarna es que no llegas
          simplemente a ejecutar una idea cerrada.
        </p>
        <br />
        <p>
          La temática general es abierta y los sponsors plantean sus propios
          retos, tecnologías y herramientas, así que una parte importante del
          hackathon consiste precisamente en explorar posibilidades y decidir
          qué construir.
        </p>
        <br />
        <p>Ahí empiezan las conversaciones.</p>
        <br />
        <p>
          Qué problema queremos resolver. Qué idea merece la pena desarrollar.
          Qué podemos hacer durante el tiempo disponible. Qué tecnología encaja.
          Qué descartamos. Qué probamos. Qué funciona. Y qué parecía fantástico
          a primera hora y unas horas después descubrimos que quizá no lo era
          tanto.
        </p>
        <br />
        <p>Eso también forma parte de construir.</p>
        <br />
        <p>
          Durante el fin de semana habrá APIs, IA, agentes, infraestructura,
          comunicaciones, modelos y herramientas con las que experimentar,
          además de mentores y otros equipos trabajando alrededor.
        </p>
        <br />
        <p>Nosotras iremos tomando decisiones sobre la marcha.</p>
        <br />
        <p>Y cuando termine, queremos contar también esa parte.</p>
        <br />
        <p>
          No únicamente enseñar el proyecto final, sino compartir{" "}
          <strong>cómo llegamos hasta él</strong>: qué tecnologías utilizamos,
          qué decisiones tomamos, qué tuvimos que cambiar y qué aprendimos
          durante el proceso.
        </p>
        <br />
        <p>
          Porque muchas veces lo más interesante de un proyecto no está solo en
          el resultado.
        </p>
        <br />
        <p>Está en todo lo que ocurrió antes de llegar a él.</p>
      </div>

      {/* ── 5. Datos clave ── */}
      <div className="highlight-box">
        <h2>HackBarna AI Summit 26: datos clave</h2>
        <br />

        <div className="table-container">
          <table className="framework-comparison-table key-value-table">
            <caption className="visually-hidden">
              Datos clave de HackBarna AI Summit 26
            </caption>
            <tbody>
              <tr>
                <th scope="row">Cuándo</th>
                <td>19 y 20 de septiembre de 2026</td>
              </tr>
              <tr>
                <th scope="row">Dónde</th>
                <td>Norrsken House Barcelona</td>
              </tr>
              <tr>
                <th scope="row">Evento</th>
                <td>HackBarna AI Summit 26</td>
              </tr>
              <tr>
                <th scope="row">Temática</th>
                <td>Inteligencia artificial</td>
              </tr>
              <tr>
                <th scope="row">Formato</th>
                <td>Hackathon por equipos</td>
              </tr>
              <tr>
                <th scope="row">Gold Sponsor</th>
                <td>Vonage</td>
              </tr>
              <tr>
                <th scope="row">Silver Sponsors</th>
                <td>
                  Preply, Mastra, Nebius, Cognition, fal.ai, QualityClouds y
                  Galtea
                </td>
              </tr>
              <tr>
                <th scope="row">Organizan</th>
                <td>HackBarna × AI Summit Barcelona</td>
              </tr>
              <tr>
                <th scope="row">Inscripción</th>
                <td>
                  <a
                    href="https://www.hackbcn.com/en/events/aisummit26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight-link"
                  >
                    HackBarna AI Summit 26
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 6. Y ahora queremos que seamos muchas más ── */}
      <div className="highlight-box">
        <h2>Y ahora queremos que seamos muchas más</h2>
        <br />
        <p>
          Nuestra colaboración con HackBarna siempre ha tenido también ese
          objetivo.
        </p>
        <br />
        <p>
          <strong>Queremos ver a más mujeres en estos espacios.</strong>
        </p>
        <br />
        <p>
          Participando, formando equipos, proponiendo ideas, escribiendo código,
          diseñando productos, experimentando con nuevas tecnologías, tomando
          decisiones y enseñando lo que han construido.
        </p>
        <br />
        <p>
          Por eso este año nos hace especialmente ilusión estar también dentro
          del hackathon.
        </p>
        <br />
        <p>
          Pero todavía nos haría más ilusión llegar a Norrsken y encontrarnos
          allí con muchas más.
        </p>
        <br />
        <p>
          Si ya estabas pensando en participar, quizá esta sea la señal que
          faltaba.
        </p>
        <br />
        <p>
          Y si todavía no tienes equipo, una idea cerrada o no sabes exactamente
          qué vas a construir, no pasa nada. Parte de la experiencia está
          precisamente en todo lo que sucede cuando juntas personas, tecnología,
          ideas y dos días por delante.
        </p>
        <br />
        <p>
          <strong>
            HackBarna AI Summit 26 se celebra el 19 y 20 de septiembre en
            Norrsken House Barcelona.
          </strong>
        </p>
        <br />

        <div
          style={{
            backgroundColor: "rgba(71, 55, 187, 0.1)",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            margin: "30px 0",
            borderLeft: "5px solid #4737bb",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          <h3
            style={{
              color: "#6d2c95",
              marginTop: 0,
              fontSize: "1.6rem",
              marginBottom: "15px",
            }}
          >
            Quiero participar en HackBarna AI Summit 26
          </h3>
          <p>
            19 y 20 de septiembre de 2026 en Norrsken House Barcelona. Hackathon
            de inteligencia artificial por equipos.
          </p>
          <br />
          <a
            href="https://www.hackbcn.com/en/events/aisummit26"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#4737bb",
              color: "white",
              padding: "12px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(71, 55, 187, 0.3)",
            }}
          >
            Quiero participar en HackBarna AI Summit 26
          </a>
        </div>

        <p>
          Y si formas parte de FemCoders Club y vas a participar,{" "}
          <strong>cuéntanoslo en la comunidad</strong>. Queremos saber quiénes
          estaremos por allí, conectar a femcoders y llegar juntas al evento.
        </p>
        <br />
        <p>Nosotras ya estamos preparando esos dos días.</p>
        <br />
        <p>
          Ahora queremos llenar HackBarna de muchas más mujeres construyendo.
        </p>
        <br />
        <p>
          <strong>Nos vemos el 19 de septiembre.</strong>
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>9 de septiembre, 2026</strong>
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

export default HackBarnaAiSummit26DesdeDentro;
