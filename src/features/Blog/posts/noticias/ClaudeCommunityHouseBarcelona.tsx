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
        {/*
          Las descripciones se quedan cortas a propósito: los primeros ~158
          caracteres son lo que Google enseña, y aquí caen justo al final de
          una frase completa. Alargarlas parte la enumeración a la mitad.
        */}
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
          Del <strong>21 al 24 de septiembre</strong>, Claude se muda a
          Poblenou. Y no viene solo. Durante cuatro días,{" "}
          <strong>B@B — Bilbao 128</strong> reunirá a la comunidad europea de
          Claude para aprender, construir y compartir bajo un mismo techo.
        </p>
        <br />
        <p>
          <strong>Claude Community House</strong> no se plantea como una
          conferencia al uso. Habrá talleres en paralelo, clínicas para dar un
          nuevo impulso a proyectos, conversaciones con equipos que ya usan
          Claude en producción, un hackathon de impacto y tiempo para conocer a
          las personas que están construyendo alrededor de esta tecnología. Y
          traemos un código de descuento para quien quiera subir a la azotea al
          terminar el día.
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
          es una <strong>iniciativa comunitaria independiente</strong>,
          coproducida por The Tech Nation, Happy Operators y clauders.com junto
          a la red europea de embajadores de Claude. Quince embajadores de
          distintas ciudades se reunirán en Barcelona para compartir cómo
          trabajan, abrir conversaciones y acompañar a quienes quieran probar
          nuevas formas de crear con Claude.
        </p>
        <br />
        <p>
          Entre quienes están dando forma a estos cuatro días se encuentra{" "}
          <a
            href="https://www.linkedin.com/in/jbenhamou/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
            aria-label="Ver el perfil de Jérémie Benhamou en LinkedIn"
          >
            <strong>Jérémie Benhamou</strong>
          </a>
          , anfitrión y embajador de Claude en Barcelona, que además ha querido
          acercar esta experiencia a la comunidad de FemCoders Club. El formato
          invita a participar de verdad: varias salas estarán activas al mismo
          tiempo y cada sesión estará guiada por las personas que la han
          propuesto, con espacio para preguntar, probar y trabajar a su lado.
        </p>
        <br />
        <p>
          El programa será <strong>en inglés</strong> y reunirá a participantes
          de distintos puntos de Europa. La última jornada coincidirá además con{" "}
          <strong>La Mercè</strong>: un cierre muy barcelonés para cuatro días
          pensados en comunidad.
        </p>
      </div>

      {/* ── 2. El descuento ── */}
      <div className="highlight-box">
        <h2>Nuestro código: FEMCODERS20</h2>
        <br />
        <p>
          Al terminar las sesiones del día, la conversación continuará en la
          azotea con <strong>The AI Afterwork</strong>. La comunidad de
          FemCoders Club tiene un <strong>20 % de descuento</strong> en sus
          entradas:
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
          {/*
            El QR va en WebP sin pérdida y a doble resolución a propósito: es
            la única imagen del post que alguien tiene que apuntar con la
            cámara. Pasada por el pipeline de `optimize` saldría a 800 px y
            calidad 70, que le come el borde a los módulos.
          */}
          <img
            src="/assets/noticias/claude-community-house-qr-femcoders20.webp"
            alt="Código QR que lleva a claudebcn.com. Debajo, el código de descuento FEMCODERS20 para un 20 % menos en las entradas del rooftop"
            width={248}
            height={330}
            loading="lazy"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px",
            }}
          />
          <br />
          {/*
            El QR no le sirve a quien lee esto desde el móvil, que no puede
            escanear su propia pantalla, ni a quien usa lector de pantalla. El
            código en texto y el enlace son la misma puerta por otro sitio.
          */}
          <p style={{ margin: 0 }}>
            Escanea el QR, o usa el código{" "}
            <strong style={{ letterSpacing: "0.08em" }}>FEMCODERS20</strong> al
            comprar la entrada de The AI Afterwork.
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
          quien no vaya al rooftop piensa que no puede entrar a nada. Y sin la
          última frase del segundo punto, alguien se apunta a un taller, cree
          que tiene pase de semana y se planta el miércoles sin estar en lista.
        */}
        <p>
          Para organizar tu visita, solo tienes que tener en cuenta que las
          actividades del día y el encuentro de la azotea funcionan de manera
          independiente:
        </p>
        <br />
        <ul>
          <li>
            <strong>The AI Afterwork</strong> se celebrará de{" "}
            <strong>18:00 a 22:00 cada noche</strong>, con DJ, bar y vistas a la
            ciudad. Lo gestiona The Tech Nation, con puerta y lista propias, y
            las entradas se venden a través de Luma: es aquí donde puedes
            utilizar el código <strong>FEMCODERS20</strong>.
          </li>
          <li>
            <strong>
              Las sesiones del día son gratuitas y no necesitan ese código.
            </strong>{" "}
            Como el programa permite crear una agenda a medida, cada taller,
            charla o clínica se reserva por separado desde su propia página de
            Luma. Apuntarte a una no te da acceso al resto de la semana: hay que
            registrarse en cada sesión a la que quieras ir.
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
          reúne más de cuarenta sesiones en cuatro días. Hemos seleccionado
          algunas que conectan especialmente bien con los intereses y proyectos
          que solemos compartir en FemCoders Club.
        </p>
        <br />

        <h3>Si escribes código</h3>
        <br />
        <ul>
          <li>
            <strong>How to become a power Claude Code user</strong> — lunes 21 a
            las 15:00, en el auditorio, con Julia Hernandez, del equipo de
            Applied AI de Anthropic. Una sesión sobre los patrones de trabajo
            que permiten aprovechar Claude Code mucho más allá del
            autocompletado.
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
            12:00, con Jérémie y Manar. Puedes llevar un proyecto o flujo de
            trabajo que se te resista y revisarlo junto a personas con
            experiencia práctica en Claude.
          </li>
          <li>
            <strong>Claude Impact Lab</strong> — jueves 24, de 09:00 a 18:00. Un
            día entero de hackathon de impacto: se forman equipos por la mañana
            y se termina con algo funcionando.
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
          El programa también reserva espacio para propuestas <em>offtech</em>.
          Son actividades sencillas y creativas que invitan a descansar de la
          pantalla y conocer a la comunidad desde otro lugar:
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
            17:00, con Filip K. Una pausa de una hora sin pantallas para
            respirar, bajar el ritmo y volver con otra energía.
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
          Si alguna sesión te llama la atención, cuéntanoslo en los comentarios.
          Quizá otras personas de la comunidad estén pensando en asistir a la
          misma y podáis encontraros allí.
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
