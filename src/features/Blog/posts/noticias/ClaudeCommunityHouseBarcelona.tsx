import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../components/CommentsSection";
import "../../page/PostStyles.css";

import ShareButtons from "../../components/ShareButtons";
import PostImage from "../../components/PostImage";
import { articleSchema } from "../../components/articleSchema";

const ClaudeCommunityHouseBarcelona: React.FC = () => {
  const postId = 51;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          Claude Community House Barcelona: cuatro días de IA en Poblenou y un
          −20 % para nuestra comunidad | FemCoders Club
        </title>
        <meta
          name="description"
          content="Del 21 al 24 de septiembre, la comunidad europea de Claude toma un edificio de Poblenou: talleres, clínicas de proyectos, un hackathon de impacto y una azotea. Con el código FEMCODERS20 tienes un 20 % de descuento en las entradas del rooftop."
        />
        <meta
          name="keywords"
          content="Claude Community House, Claude Barcelona, claudebcn, inteligencia artificial Barcelona, Claude Code, Anthropic, eventos IA Barcelona, Poblenou, FEMCODERS20, FemCoders Club, mujeres en tecnología, The AI Afterwork"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/claude-community-house-barcelona"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Claude Community House Barcelona: cuatro días de IA en Poblenou y un −20 % para nuestra comunidad"
        />
        <meta
          property="og:description"
          content="Del 21 al 24 de septiembre, la comunidad europea de Claude toma un edificio de Poblenou: talleres, clínicas de proyectos, un hackathon de impacto y una azotea. Con el código FEMCODERS20 tienes un 20 % de descuento en las entradas del rooftop."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/claude-community-house-barcelona"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/claude-community-house-barcelona.jpg"
        />
        <meta
          property="og:image:alt"
          content="Cartel del Claude Community House Barcelona, del 21 al 24 de septiembre en B@B Bilbao 128. Una multitud dibujada en pixel art levanta pancartas con mensajes como «she codes with Claude» o «leave the desk», y una de ellas lleva el nombre de FemCoders Club"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Claude Community House Barcelona: cuatro días de IA en Poblenou"
        />
        <meta
          name="twitter:description"
          content="Del 21 al 24 de septiembre, la comunidad europea de Claude toma un edificio de Poblenou. Con el código FEMCODERS20 tienes un 20 % de descuento en las entradas del rooftop."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/claude-community-house-barcelona.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-09-16T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Claude Community House" />
        <meta property="article:tag" content="Inteligencia Artificial" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="Claude Code" />
        <meta property="article:tag" content="Eventos" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/claude-community-house-barcelona",
              headline:
                "Claude Community House Barcelona: cuatro días de IA en Poblenou y un −20 % para nuestra comunidad",
              description:
                "Del 21 al 24 de septiembre, la comunidad europea de Claude toma un edificio de Poblenou: talleres, clínicas de proyectos, un hackathon de impacto y una azotea. Con el código FEMCODERS20 tienes un 20 % de descuento en las entradas del rooftop.",
              image: "/assets/noticias/claude-community-house-barcelona.jpg",
              datePublished: "2026-09-16T10:00:00Z",
              about: {
                "@type": "Event",
                name: "Claude Community House Barcelona",
                url: "https://claudebcn.com/",
                startDate: "2026-09-21T10:00:00+02:00",
                endDate: "2026-09-24T22:00:00+02:00",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                location: {
                  "@type": "Place",
                  name: "B@B — Bilbao 128",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Carrer de Bilbao 128",
                    addressLocality: "Barcelona",
                    postalCode: "08018",
                    addressCountry: "ES",
                  },
                },
                organizer: [
                  {
                    "@type": "Organization",
                    name: "The Tech Nation",
                  },
                  {
                    "@type": "Organization",
                    name: "Happy Operators",
                  },
                  {
                    "@type": "Organization",
                    name: "Clauders",
                    url: "https://clauders.com/",
                  },
                ],
                description:
                  "Iniciativa comunitaria independiente en la que la comunidad europea de Claude se instala durante cuatro días en un mismo edificio de Barcelona con talleres, charlas, clínicas de proyectos y un hackathon de impacto.",
              },
              keywords: [
                "Claude Community House",
                "Claude Barcelona",
                "inteligencia artificial",
                "Claude Code",
                "Anthropic",
                "eventos tecnológicos Barcelona",
                "FemCoders Club",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
      </Helmet>

      {/* ── Hero image ── */}
      <PostImage
        src="/public-optimized/desktop/assets/noticias/claude-community-house-barcelona.webp"
        mobileSrc="/public-optimized/mobile/assets/noticias/claude-community-house-barcelona.webp"
        desktopSrc="/public-optimized/desktop/assets/noticias/claude-community-house-barcelona.webp"
        fallbackSrc="/assets/noticias/claude-community-house-barcelona.jpg"
        alt="Cartel del Claude Community House Barcelona, del 21 al 24 de septiembre en B@B Bilbao 128. Una multitud dibujada en pixel art llena la plaza y levanta pancartas con mensajes como «she codes with Claude», «leave the desk» o «4 days, no excuses»; una pancarta rosa grande lleva el nombre de FemCoders Club y, en una esquina, un código QR con el descuento FEMCODERS20"
      />

      <h1 className="blog-post-title">
        Claude Community House Barcelona: cuatro días de IA en Poblenou y un
        −20 % para nuestra comunidad
      </h1>

      <ShareButtons
        path="/noticias/claude-community-house-barcelona"
        title="Claude Community House Barcelona: cuatro días de IA en Poblenou y un −20 % para nuestra comunidad"
      />

      {/* ── Intro ── */}
      <div className="intro-text">
        <p>
          Del <strong>21 al 24 de septiembre</strong>, la comunidad europea de
          Claude se muda entera a un edificio de Poblenou. Se llama{" "}
          <strong>Claude Community House</strong>, dura cuatro días y ocupa{" "}
          <strong>B@B — Bilbao 128</strong>, aquí en Barcelona.
        </p>
        <br />
        <p>
          No es una conferencia al uso, y esa es justo la parte interesante:
          durante esos cuatro días hay talleres en paralelo, clínicas para
          desatascar proyectos, charlas de equipos que usan Claude en
          producción, un hackathon de impacto y una azotea. Y traemos un código
          de descuento para quien quiera subir a ella.
        </p>
      </div>

      {/* ── 1. Qué es exactamente ── */}
      <div className="highlight-box">
        <h2>Qué es exactamente</h2>
        <br />
        <p>
          <a
            href="https://claudebcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
            aria-label="Visitar la web del Claude Community House Barcelona"
          >
            <strong>Claude Community House</strong>
          </a>{" "}
          es una <strong>iniciativa comunitaria independiente</strong>. Lo
          organizan The Tech Nation, Happy Operators, clauders.com y la red
          europea de embajadores de Claude: alrededor de quince personas de
          distintos países que durante esa semana montan sus propias sesiones
          bajo el mismo techo.
        </p>
        <br />
        <p>
          Merece la pena entender la diferencia, porque cambia lo que te vas a
          encontrar. No hay un escenario único con ponencias magistrales: hay
          varias salas funcionando a la vez —auditorio, salas de reuniones, la
          zona de talleres de la cafetería— y cada sesión la lleva quien la ha
          propuesto. Te sientas al lado de quien la imparte.
        </p>
        <br />
        <p>
          El programa está <strong>en inglés</strong>, con gente que viene de
          toda Europa. Y el jueves cierra coincidiendo con{" "}
          <strong>La Mercè</strong>, que no es mala forma de acabar una semana
          en Barcelona.
        </p>
      </div>

      {/* ── 2. El descuento ── */}
      <div className="highlight-box">
        <h2>Nuestro código: FEMCODERS20</h2>
        <br />
        <p>
          Tenemos un <strong>20 % de descuento</strong> para la comunidad de
          FemCoders Club en las entradas de{" "}
          <strong>The AI Afterwork</strong>, la azotea del evento:
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
          <p style={{ marginTop: 0 }}>Código de descuento del rooftop</p>
          <br />
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              letterSpacing: "0.15em",
              color: "#4737bb",
              margin: 0,
            }}
          >
            FEMCODERS20
          </p>
          <br />
          <p style={{ margin: 0 }}>
            Un <strong>20 % menos</strong> en la entrada de The AI Afterwork.
          </p>
          <br />
          <a
            href="https://claudebcn.com/afterworks"
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
            aria-label="Ver las entradas de The AI Afterwork en la web del Claude Community House"
          >
            Ver las entradas del rooftop
          </a>
        </div>

        {/*
          Sin esta aclaración, el código se lee como «la entrada al evento» y
          quien no vaya al rooftop piensa que no puede entrar a nada. Las
          sesiones del día van por su cuenta, gratis y con registro propio.
        */}
        <p>
          Conviene decir qué cubre y qué no, para que nadie se quede fuera por
          un malentendido:
        </p>
        <br />
        <ul>
          <li>
            <strong>El código es para la azotea.</strong> The AI Afterwork es la
            parte con entrada de pago: lo gestiona The Tech Nation, con puerta y
            lista propias, y se vende a través de Luma. Funciona de{" "}
            <strong>18:00 a 22:00 cada noche</strong>, con DJ y bar.
          </li>
          <li>
            <strong>Las sesiones del día no necesitan ese código.</strong> Los
            talleres, las charlas y las clínicas son{" "}
            <strong>gratuitos</strong> y cada uno se reserva por separado en su
            propia página de Luma. Apuntarte a uno no te da acceso al resto de
            la semana: hay que registrarse en cada sesión a la que quieras ir.
          </li>
        </ul>
      </div>

      {/* ── 3. Sesiones recomendadas ── */}
      <div className="highlight-box">
        <h2>Lo que nos parece más interesante del programa</h2>
        <br />
        <p>
          El{" "}
          <a
            href="https://claudebcn.com/planning"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
            aria-label="Ver el programa completo del Claude Community House"
          >
            programa completo
          </a>{" "}
          tiene más de cuarenta sesiones en cuatro días, así que hemos
          rescatado unas cuantas que encajan especialmente con lo que solemos
          hacer en el club.
        </p>
        <br />

        <h3>Si escribes código</h3>
        <br />
        <ul>
          <li>
            <strong>How to become a power Claude Code user</strong> — lunes 21 a
            las 15:00, en el auditorio, con Julia Hernandez, del equipo de
            Applied AI de Anthropic. Va de los patrones que separan el trabajo
            con IA de un autocompletado algo más rápido.
          </li>
          <li>
            <strong>Harness &amp; Loop Engineering with Claude Code</strong> —
            miércoles 23, de 10:00 a 13:00, con Alexio. Tres horas de taller.
          </li>
          <li>
            <strong>Hands-on: Claude Code the PostHog way</strong> — miércoles
            23, de 12:00 a 14:00, con el equipo de PostHog. Y a las 14:00, en el
            auditorio, cuentan cómo lo usan en el día a día de un unicornio.
          </li>
          <li>
            <strong>Second Brain for Claude: LLM Wiki vs RAG</strong> — lunes 21
            a las 11:00, con Florian. Dos estrategias de memoria para IA,
            comparadas. Nivel intermedio.
          </li>
          <li>
            <strong>
              Beyond One Agent: Orchestrating Claude Multi-Agent Systems
            </strong>{" "}
            — miércoles 23 a las 17:00, con el equipo de Make. Subagentes,
            delegación y observabilidad.
          </li>
        </ul>
        <br />

        <h3>Si tienes un proyecto atascado</h3>
        <br />
        <ul>
          <li>
            <strong>Claude Clinic</strong> — lunes 21 y martes 22, de 10:00 a
            12:00, con Jeremie y Manar. La idea es literal: traes el proyecto
            que no avanza y sales con él desbloqueado.
          </li>
          <li>
            <strong>Claude Impact Lab</strong> — jueves 24, de 09:00 a 18:00.
            Un día entero de hackathon de impacto: se forman equipos por la
            mañana y se termina con algo funcionando.
          </li>
          <li>
            <strong>Claude Build Day</strong> — miércoles 23, de 09:00 a 17:00,
            con Michael. Una jornada completa para construir.
          </li>
        </ul>
        <br />

        <h3>Y el lado que no va de programar</h3>
        <br />
        <p>
          Hay una parte del programa marcada como <em>offtech</em> que nos ha
          hecho mucha gracia, y que dice bastante del ambiente que buscan:
        </p>
        <br />
        <ul>
          <li>
            <strong>Crochet Your Own Claude</strong> — lunes 21 a las 13:00.
            Tejer tu propio cangrejo de ganchillo.
          </li>
          <li>
            <strong>Stitch Club: Embroider Your Own Claude Patch</strong> —
            martes 22, de 10:00 a 13:00, con Émilie Bernard. Bordado, materiales
            incluidos y sin experiencia previa.
          </li>
          <li>
            <strong>Disconnect · The Human Reset</strong> — lunes 21 a las
            17:00, con Filip K. Una hora sin pantallas, respiración y poco más.
          </li>
          <li>
            <strong>Claude House x RunHack</strong> — jueves 24: se sale a
            correr a las 15:00 y a las 17:00 hay demos.
          </li>
        </ul>
      </div>

      {/* ── 4. Cómo ir ── */}
      <div className="highlight-box">
        <h2>Cómo apuntarte</h2>
        <br />
        <ul>
          <li>
            <strong>Cuándo:</strong> del lunes 21 al jueves 24 de septiembre de
            2026.
          </li>
          <li>
            <strong>Dónde:</strong> B@B — Bilbao 128, Carrer de Bilbao 128,
            08018 Barcelona (Poblenou).
          </li>
          <li>
            <strong>Sesiones del día:</strong> gratuitas, con registro
            individual en Luma desde el{" "}
            <a
              href="https://claudebcn.com/planning"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Abrir el programa del Claude Community House para registrarte en cada sesión"
            >
              programa
            </a>
            . Algunas tienen plazas muy limitadas.
          </li>
          <li>
            <strong>Rooftop:</strong> entrada aparte, con{" "}
            <strong>FEMCODERS20</strong> para el descuento.
          </li>
        </ul>
        <br />
        <p>
          Si te animas con alguna sesión, cuéntanoslo en los comentarios: quizá
          haya más gente de la comunidad mirando la misma y os encontráis allí.
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>16 de septiembre, 2026</strong>
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

export default ClaudeCommunityHouseBarcelona;
