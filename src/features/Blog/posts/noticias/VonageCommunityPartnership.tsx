import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CommentsSection from "../../components/CommentsSection";
import "../../page/PostStyles.css";

import ShareButtons from "../../components/ShareButtons";
import PostImage from "../../components/PostImage";
import { articleSchema } from "../../components/articleSchema";

const VonageCommunityPartnership: React.FC = () => {
  const postId = 49;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          FemCoders Club se une al Vonage Community Partnership Program |
          FemCoders Club
        </title>
        <meta
          name="description"
          content="Nos unimos al programa de Vonage (part of Ericsson) para comunidades de developers: APIs de voz, vídeo, mensajería y verificación con las que experimentar."
        />
        <meta
          name="keywords"
          content="Vonage Community Partnership Program, Vonage, Ericsson, APIs de comunicaciones, comunidad developer, FemCoders Club, Lucinda Abberley, Max Chambers, mujeres en tecnología, APIs de voz y vídeo, mensajería, verificación"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/vonage-community-partnership-program"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club se une al Vonage Community Partnership Program | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Nos unimos al programa de Vonage (part of Ericsson) para comunidades de developers: APIs de voz, vídeo, mensajería y verificación con las que experimentar."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/vonage-community-partnership-program"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/vonage-femcodersclub.jpg"
        />
        <meta
          property="og:image:alt"
          content="Vonage x fem Coders Club, colaboración para impulsar a las mujeres en tecnología. Los logotipos de Vonage —part of Ericsson— y de FemCoders Club, uno junto al otro"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club se une al Vonage Community Partnership Program"
        />
        <meta
          name="twitter:description"
          content="Nos unimos al programa de Vonage (part of Ericsson) para comunidades de developers: APIs de voz, vídeo, mensajería y verificación con las que experimentar."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/vonage-femcodersclub.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-09-10T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Vonage" />
        <meta property="article:tag" content="Community Partnership" />
        <meta property="article:tag" content="APIs" />
        <meta property="article:tag" content="Comunidad Developer" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/vonage-community-partnership-program",
              headline:
                "FemCoders Club se une al Vonage Community Partnership Program",
              description:
                "Nos unimos al programa de Vonage (part of Ericsson) para comunidades de developers: APIs de voz, vídeo, mensajería y verificación con las que experimentar.",
              image: "/assets/noticias/vonage-femcodersclub.jpg",
              datePublished: "2026-09-10T10:00:00Z",
              about: {
                "@type": "Organization",
                name: "Vonage",
                url: "https://www.vonage.com/",
                description:
                  "Compañía global de comunicaciones cloud y APIs, con un ecosistema de más de 1,8 millones de developers registrados.",
                parentOrganization: {
                  "@type": "Organization",
                  name: "Ericsson",
                },
              },
              contributor: [
                {
                  "@type": "Person",
                  name: "Lucinda Abberley",
                  affiliation: {
                    "@type": "Organization",
                    name: "Vonage",
                  },
                  sameAs:
                    "https://www.linkedin.com/in/lucinda-abberley-b1671744/",
                },
                {
                  "@type": "Person",
                  name: "Max Chambers",
                  affiliation: {
                    "@type": "Organization",
                    name: "Vonage",
                  },
                  sameAs: "https://www.linkedin.com/in/maxchambers/",
                },
              ],
              keywords: [
                "Vonage Community Partnership Program",
                "Vonage",
                "Ericsson",
                "APIs de comunicaciones",
                "comunidad developer",
                "FemCoders Club",
                "Lucinda Abberley",
                "Max Chambers",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
      </Helmet>

      {/* ── Hero image ── */}
      <PostImage
        src="/public-optimized/desktop/assets/noticias/vonage-femcodersclub.webp"
        mobileSrc="/public-optimized/mobile/assets/noticias/vonage-femcodersclub.webp"
        desktopSrc="/public-optimized/desktop/assets/noticias/vonage-femcodersclub.webp"
        fallbackSrc="/assets/noticias/vonage-femcodersclub.jpg"
        alt="Vonage x fem Coders Club, colaboración para impulsar a las mujeres en tecnología. Los logotipos de Vonage —part of Ericsson— y de FemCoders Club, uno junto al otro, sobre un fondo claro con una red de nodos rosa y la silueta de un rostro de mujer formada por circuitos violetas"
        aiGenerated
      />

      <h1 className="blog-post-title">
        FemCoders Club se une al Vonage Community Partnership Program
      </h1>

      <ShareButtons
        path="/noticias/vonage-community-partnership-program"
        title="FemCoders Club se une al Vonage Community Partnership Program"
      />

      {/* ── Intro ── */}
      <div className="intro-text">
        <p>
          Septiembre empieza con una noticia importante para FemCoders Club:{" "}
          <strong>nos unimos al Vonage Community Partnership Program</strong>,
          una colaboración que nos conecta con uno de los ecosistemas
          tecnológicos internacionales más importantes en el ámbito de las
          comunicaciones y las APIs.
        </p>
        <br />
        <p>
          Para nosotras, esta alianza tiene mucho que ver con cómo entendemos el
          crecimiento profesional dentro de una comunidad tecnológica: conocer
          nuevas herramientas, experimentar con ellas y acercarnos a tecnologías
          que después encontramos en proyectos y entornos profesionales reales.
        </p>
      </div>

      {/* ── 1. De HackBarna a formar parte del programa ── */}
      <div className="highlight-box">
        <h2>De HackBarna a formar parte del programa</h2>
        <br />
        <p>
          Nuestro primer contacto con el ecosistema de{" "}
          <a
            href="https://www.vonage.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
            aria-label="Visitar la web de Vonage"
          >
            <strong>Vonage</strong>
          </a>{" "}
          llegó el año pasado a través de{" "}
          <Link to="/noticias/HackBarna2025" className="highlight-link">
            HackBarna 2025
          </Link>
          . Desde entonces hemos seguido de cerca su comunidad developer y todo
          lo que están construyendo alrededor de sus APIs y tecnologías de
          comunicación.
        </p>
        <br />
        <p>
          Este año volvemos a coincidir: Vonage es Gold Sponsor de{" "}
          <Link
            to="/noticias/hackbarna-ai-summit-26-desde-dentro"
            className="highlight-link"
          >
            HackBarna AI Summit 26
          </Link>
          , el hackathon en el que estaremos los días 19 y 20 de septiembre,
          esta vez también con equipo propio.
        </p>
        <br />
        <p>
          Ahora damos un paso más y{" "}
          <strong>
            FemCoders Club pasa a formar parte de su Community Partnership
            Program
          </strong>
          .
        </p>
      </div>

      {/* ── 2. ¿Por qué nos interesa especialmente Vonage? ── */}
      <div className="highlight-box">
        <h2>¿Por qué nos interesa especialmente Vonage?</h2>
        <br />
        <p>
          Vonage, parte de Ericsson, es una compañía global especializada en
          comunicaciones cloud y APIs, con un ecosistema que reúne a más de{" "}
          <strong>1,8 millones de developers registrados</strong>.
        </p>
        <br />
        <p>
          Pero más allá de las cifras, lo que realmente nos interesa es lo que
          podemos hacer con su tecnología.
        </p>
        <br />
        <p>
          Sus APIs permiten integrar capacidades como{" "}
          <strong>
            voz, vídeo, mensajería o verificación directamente dentro de una
            aplicación
          </strong>
          , sin tener que construir desde cero toda la infraestructura necesaria
          para hacerlas funcionar.
        </p>
        <br />
        <p>
          Para una developer, poder trabajar con este tipo de herramientas
          significa mucho más que conocerlas sobre el papel. Significa probarlas,
          integrarlas, entender cómo funcionan y descubrir qué podemos construir
          con ellas.
        </p>
        <br />
        <p>
          Y precisamente ahí está una de las razones principales por las que
          esta colaboración nos ilusiona.
        </p>
        <br />
        <p>
          Queremos que FemCoders Club siga siendo un espacio donde podamos
          crecer profesionalmente, pero también donde tengamos la oportunidad de{" "}
          <strong>
            trabajar con tecnología real, experimentar y salir de lo que ya
            conocemos
          </strong>
          .
        </p>
        <br />
        <p>
          Formar parte del <strong>Vonage Community Partnership Program</strong>{" "}
          nos abre además la puerta a un ecosistema tecnológico internacional y
          a nuevas posibilidades para seguir creando oportunidades para nuestra
          comunidad.
        </p>
      </div>

      {/* ── 3. Las personas detrás de esta colaboración ── */}
      <div className="highlight-box">
        <h2>Las personas detrás de esta colaboración</h2>
        <br />
        <p>
          En este camino hemos tenido la suerte de contar con dos personas del
          equipo de Vonage que desde el principio nos han recibido con muchísima
          cercanía y cariño, y con muchas ganas de construir cosas junto a
          nuestra comunidad:
        </p>
        <br />
        <ul>
          <li>
            <strong>Lucinda Abberley</strong> — equipo de Vonage.{" "}
            <a
              href="https://www.linkedin.com/in/lucinda-abberley-b1671744/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Lucinda Abberley"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Max Chambers</strong> — equipo de Vonage.{" "}
            <a
              href="https://www.linkedin.com/in/maxchambers/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Max Chambers"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <br />
        <p>
          Gracias especialmente a <strong>Lucinda y Max</strong> por la
          confianza en FemCoders Club y, sobre todo, por el cariño y la cercanía
          que nos habéis mostrado desde el primer momento.
        </p>
        <br />
        <p>
          Para nosotras, la forma en la que empiezan estas colaboraciones
          también importa.
        </p>
      </div>

      {/* ── 4. Lo que viene ── */}
      <div className="highlight-box">
        <h2>Lo que viene</h2>
        <br />
        <p>
          No queremos adelantar demasiado todavía, pero sí podemos contaros una
          cosa:{" "}
          <strong>
            ya estamos trabajando junto al equipo de Vonage en las primeras
            iniciativas para FemCoders Club
          </strong>
          .
        </p>
        <br />
        <p>Y muy pronto habrá novedades.</p>
        <br />
        <p>
          Esta colaboración acaba de empezar y tenemos muchas ganas de ver hasta
          dónde podemos llevarla.
        </p>
        <br />
        <p>
          Si quieres enterarte de lo próximo que estamos preparando junto a
          Vonage, regístrate en FemCoders Club. Las próximas novedades para la
          comunidad llegarán muy pronto.
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
            Quiero enterarme de lo próximo
          </h3>
          <p>
            Regístrate en FemCoders Club y te contamos las novedades de esta
            colaboración en cuanto haya algo que compartir.
          </p>
          <br />
          <Link
            to="/register"
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
            Registrarme en FemCoders Club
          </Link>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>10 de septiembre, 2026</strong>
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

export default VonageCommunityPartnership;
