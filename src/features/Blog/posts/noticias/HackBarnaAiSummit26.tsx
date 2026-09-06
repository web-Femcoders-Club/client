import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../components/CommentsSection";
import PostImage from "../../components/PostImage";
import "../../page/PostStyles.css";

import ShareButtons from "../../components/ShareButtons";
import { articleSchema } from "../../components/articleSchema";

const HackBarnaAiSummit26: React.FC = () => {
  const postId = 46;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          FemCoders Club vuelve a ser Community Partner de HackBarna AI Summit
          26 | FemCoders Club
        </title>
        <meta
          name="description"
          content="FemCoders Club repite como community partner de HackBarna AI Summit 26, el hackathon de inteligencia artificial de Barcelona. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona."
        />
        <meta
          name="keywords"
          content="HackBarna AI Summit 26, hackathon Barcelona, hackathon inteligencia artificial, FemCoders Club, community partner, Norrsken House Barcelona, mujeres en tecnología, eventos tech Barcelona 2026, hackathon IA España"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/hackbarna-ai-summit-26"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club vuelve a ser Community Partner de HackBarna AI Summit 26 | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Repetimos como community partner del hackathon de IA de Barcelona. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona, con más de 200 hackers. ¿Te apuntas?"
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/hackbarna-ai-summit-26"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/hackbarna-ai-summit-26.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club vuelve a ser Community Partner de HackBarna AI Summit 26"
        />
        <meta
          name="twitter:description"
          content="19 y 20 de septiembre de 2026 en Norrsken House Barcelona. Más de 200 hackers, 48 horas y un objetivo: construir algo que funcione."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/hackbarna-ai-summit-26.png"
        />

        <meta
          property="article:published_time"
          content="2026-08-07T10:00:00Z"
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
              path: "/noticias/hackbarna-ai-summit-26",
              headline:
                "FemCoders Club vuelve a ser Community Partner de HackBarna AI Summit 26",
              description:
                "FemCoders Club repite como community partner de HackBarna AI Summit 26, el hackathon de inteligencia artificial de Barcelona que se celebra el 19 y 20 de septiembre de 2026 en Norrsken House Barcelona.",
              image: "/assets/noticias/hackbarna-ai-summit-26.png",
              datePublished: "2026-08-07T10:00:00Z",
              about: {
                "@type": "Event",
                name: "HackBarna AI Summit 26",
                description:
                  "Tercera edición del hackathon de inteligencia artificial de Barcelona, con más de 200 hackers y 48 horas para construir un proyecto funcional.",
                startDate: "2026-09-19T09:00:00+02:00",
                endDate: "2026-09-20T17:30:00+02:00",
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
                "hackathon Barcelona",
                "inteligencia artificial",
                "FemCoders Club",
                "community partner",
                "Norrsken House Barcelona",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
      </Helmet>

      {/* ── Hero image ── */}
      <PostImage
        src="/public-optimized/desktop/assets/noticias/hackbarna-ai-summit-26.webp"
        mobileSrc="/public-optimized/mobile/assets/noticias/hackbarna-ai-summit-26.webp"
        desktopSrc="/public-optimized/desktop/assets/noticias/hackbarna-ai-summit-26.webp"
        fallbackSrc="/assets/noticias/hackbarna-ai-summit-26.png"
        alt="FemCoders Club, community partner de HackBarna AI Summit 26, hackathon de inteligencia artificial en Norrsken House Barcelona"
        aiGenerated
      />

      <h1 className="blog-post-title">
        FemCoders Club vuelve a ser Community Partner de HackBarna AI Summit 26
      </h1>

      <ShareButtons path="/noticias/hackbarna-ai-summit-26" title="FemCoders Club vuelve a ser Community Partner de HackBarna AI Summit 26" />

      {/* ── Intro ── */}
      <div className="intro-text">
        <p>
          El año pasado{" "}
          <a
            href="https://www.femcodersclub.com/noticias/HackBarna2025"
            className="highlight-link"
          >
            contamos aquí
          </a>{" "}
          lo que sentimos cuando nos invitaron a ser community partner de
          HackBarna por primera vez. Ese "¡guau, hemos llegado lejos!" no se ha
          ido: este año repetimos, y queremos que esta vez seáis muchas más las
          que os apuntéis.
        </p>
        <br />
        <p>
          FemCoders Club es de nuevo community partner de{" "}
          <a
            href="https://www.hackbcn.com/en/events/aisummit26"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            <strong>HackBarna AI Summit 26</strong>
          </a>
          , la tercera edición de este hackathon centrado en inteligencia
          artificial que se celebra en Barcelona. Y si el año pasado ya nos
          pareció un evento de primer nivel, esta edición viene con más hackers,
          más sponsors y un espacio nuevo: Norrsken House Barcelona.
        </p>
      </div>

      {/* ── 1. Qué vas a encontrar ── */}
      <div className="highlight-box">
        <h2>Lo que vas a encontrar en HackBarna AI Summit 26</h2>
        <br />
        <p>
          Un fin de semana entero para construir. Nada de charlas interminables
          ni networking vacío: se trata de sentarte a programar junto a más de
          200 hackers, con mentoras y mentores que están un paso por delante en
          IA y con un objetivo claro, demostrar algo funcionando en 48 horas.
        </p>
        <br />

        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Detalles del evento</th>
                <th>Información</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Fechas</strong>
                </td>
                <td>Sábado 19 y domingo 20 de septiembre de 2026</td>
              </tr>
              <tr>
                <td>
                  <strong>Sede</strong>
                </td>
                <td>Norrsken House Barcelona</td>
              </tr>
              <tr>
                <td>
                  <strong>Temática</strong>
                </td>
                <td>Inteligencia artificial</td>
              </tr>
              <tr>
                <td>
                  <strong>Participantes</strong>
                </td>
                <td>Más de 200 hackers</td>
              </tr>
              <tr>
                <td>
                  <strong>Inscripción</strong>
                </td>
                <td>
                  <a
                    href="https://www.hackbcn.com/en/events/aisummit26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight-link"
                  >
                    hackbcn.com/en/events/aisummit26
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <p>
          El sábado arranca con el registro a las 9:00, la keynote de apertura a
          las 10:00 y el pistoletazo de salida a las 11:00. El domingo el código
          se entrega a las 11:00, las demos son a las 14:00 y a las 16:00
          empieza la ronda de jurado que cierra con la entrega de premios a las
          17:30. Dos días, sin pausa, con el reloj corriendo de verdad.
        </p>
      </div>

      {/* ── 2. Quién está detrás ── */}
      <div className="highlight-box">
        <h2>Quién está detrás este año</h2>
        <br />
        <p>
          Por ahora, HackBarna AI Summit 26 cuenta con <strong>Vonage</strong>{" "}
          como sponsor gold y con <strong>Preply</strong>,{" "}
          <strong>Mastra</strong>, <strong>Nebius</strong>,{" "}
          <strong>Cognition</strong>, <strong>Fal.ai</strong>,{" "}
          <strong>QualityClouds</strong> y <strong>Galtea</strong> como sponsors
          silver. Como community partner, compartimos cartel con{" "}
          <strong>Le Wagon Barcelona</strong>. Y esto es solo el punto de
          partida: tanto los sponsors como las comunidades participantes se van
          confirmando semana a semana, así que esta lista todavía va a crecer.
        </p>
        <br />
        <p>
          Que sigamos ahí, edición tras edición, no es casualidad. Es la
          confirmación de que cuando una comunidad demuestra lo que sus
          femcoders son capaces de construir, la vuelven a invitar.
        </p>
      </div>

      {/* ── 3. Por qué aplicar ── */}
      <div className="highlight-box">
        <h2>Por qué merece la pena aplicar</h2>
        <br />
        <p>
          Cuarenta y ocho horas suenan a poco tiempo hasta que te sientas a
          construir algo real junto a gente que sabe tanto o más que tú. Ahí es
          donde se aprende de verdad, no en el tutorial número quince.
        </p>
        <br />
        <p>
          Vas a compartir espacio con equipos de empresas que están definiendo
          cómo se construye con IA ahora mismo. Esa conversación con un mentor
          de Vonage o de Cognition durante el hackathon no la consigues mandando
          un mensaje por LinkedIn. Y lo que construyas ese fin de semana es algo
          que puedes enseñar después en una entrevista, no una línea más en el
          CV.
        </p>
        <br />
        <p>
          Si te da vértigo aplicar porque piensas que no estás a la altura, esa
          duda la tenemos todas la primera vez. Si programas, ya tienes lo que
          hace falta para estar ahí. Lo demás se construye en las 48 horas.
        </p>
      </div>

      {/* ── 4. Cómo aplicar ── */}
      <div className="highlight-box">
        <h2>Cómo aplicar</h2>
        <br />
        <p>
          La inscripción se hace en pocos minutos a través de Luma, y jueces y
          mentoras todavía se están confirmando, así que si tienes experiencia y
          te apetece mentorizar, también hay hueco para ti.
        </p>
        <br />
        <ul>
          <li>
            <strong>Aplicar al hackathon:</strong>{" "}
            <a
              href="https://www.hackbcn.com/en/events/aisummit26"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              hackbcn.com/en/events/aisummit26
            </a>
          </li>
          <li>
            <strong>Toda la información del evento:</strong>{" "}
            <a
              href="https://www.hackbcn.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              hackbcn.com/en
            </a>
          </li>
        </ul>
        <br />
        <p>
          Cuando apliques, menciona que vienes de FemCoders Club. Nos gusta que
          se note cuántas somos.
        </p>
        <br />
        <p>
          Y esto no se queda aquí. Estamos preparando algo más para seguir
          conectando con toda la comunidad antes del hackathon. Todavía estamos
          cuadrando los detalles, pero muy pronto os contamos más.
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
            ¿Te apuntas?
          </h3>
          <p>
            Cuéntanoslo en nuestro Slack, nos encanta saber quién va a estar
            allí representando a FemCoders Club.
          </p>
          <br />
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
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
            Únete a nuestro Slack
          </a>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>7 de agosto, 2026</strong>
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

export default HackBarnaAiSummit26;
