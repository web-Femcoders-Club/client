import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../components/CommentsSection";
import "../../page/PostStyles.css";

import ShareButtons from "../../components/ShareButtons";

const SesionInformativaHackBarnaAiSummit26: React.FC = () => {
  const postId = 47;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          HackBarna AI Summit 26: cómo se gana un hackathon de IA | FemCoders
          Club
        </title>
        <meta
          name="description"
          content="Sesión informativa online sobre HackBarna AI Summit 26 con Lilibeth Bustos Linares, ganadora de 2025. Jueves 3 de septiembre, 18:30 h. Inscripción gratuita."
        />
        <meta
          name="keywords"
          content="hackbarna ai summit 26, hackathon ia barcelona, hackathon inteligencia artificial barcelona 2026, sesión informativa hackbarna, Lilibeth Bustos Linares, FemCoders Club, Norrsken House Barcelona, mujeres en tecnología"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/sesion-informativa-hackbarna-ai-summit-26"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Sesión informativa HackBarna AI Summit 26: la ganadora de 2025 cuenta cómo se gana un hackathon de IA | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Lilibeth Bustos Linares, ganadora del hackathon en 2025, se sienta con nosotras a contar cómo se viven esas 48 horas. Jueves 3 de septiembre, 18:30 h. Online y gratuita."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/sesion-informativa-hackbarna-ai-summit-26"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HackBarna AI Summit 26: cómo se gana un hackathon de IA"
        />
        <meta
          name="twitter:description"
          content="La ganadora de 2025 cuenta qué pasa de verdad durante las 48 horas. Jueves 3 de septiembre, 18:30 h. Online, abierta y gratuita."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-08-17T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="HackBarna" />
        <meta property="article:tag" content="Hackathon" />
        <meta property="article:tag" content="Inteligencia Artificial" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="Sesión informativa" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Sesión informativa HackBarna AI Summit 26: la ganadora de 2025 cuenta cómo se gana un hackathon de IA",
            description:
              "Sesión informativa online sobre HackBarna AI Summit 26 con Lilibeth Bustos Linares, ganadora de la edición de 2025. Jueves 3 de septiembre de 2026 a las 18:30 h. Inscripción gratuita.",
            image:
              "https://www.femcodersclub.com/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.jpg",
            datePublished: "2026-08-17T10:00:00Z",
            dateModified: "2026-08-17T10:00:00Z",
            inLanguage: "es-ES",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.femcodersclub.com/noticias/sesion-informativa-hackbarna-ai-summit-26",
            },
            author: {
              "@type": "Organization",
              name: "FemCoders Club",
              url: "https://www.femcodersclub.com",
            },
            publisher: {
              "@type": "Organization",
              name: "FemCoders Club",
              url: "https://www.femcodersclub.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.femcodersclub.com/FemCodersClubLogo.png",
              },
            },
            about: {
              "@type": "Event",
              name: "Sesión informativa HackBarna AI Summit 26 con Lilibeth Bustos Linares",
              description:
                "Sesión online y gratuita con Lilibeth Bustos Linares, ganadora del AI Summit Hackathon Barcelona 2025, para contar cómo se vive un hackathon de IA desde dentro.",
              startDate: "2026-09-03T18:30:00+02:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OnlineEventAttendanceMode",
              url: "https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516",
              location: {
                "@type": "VirtualLocation",
                url: "https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516",
              },
              organizer: {
                "@type": "Organization",
                name: "FemCoders Club",
                url: "https://www.femcodersclub.com",
              },
              performer: {
                "@type": "Person",
                name: "Lilibeth Bustos Linares",
              },
            },
            keywords: [
              "HackBarna AI Summit 26",
              "hackathon IA Barcelona",
              "sesión informativa hackbarna",
              "Lilibeth Bustos Linares",
              "FemCoders Club",
              "Norrsken House Barcelona",
              "mujeres en tecnología",
            ],
          })}
        </script>
      </Helmet>

      {/* ── Hero image ── */}
      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.webp"
            alt="Cartel de la sesión informativa HackBarna AI Summit 26 con Lilibeth Bustos Linares, fundadora y CEO de SOMA AI y SoulDoodles. Online, 3 de septiembre a las 18:30"
            className="blog-post-image"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.jpg";
              (e.target as HTMLImageElement).onerror = null;
            }}
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Sesión informativa HackBarna AI Summit 26: la ganadora de 2025 cuenta
        cómo se gana un hackathon de IA
      </h1>

      <ShareButtons
        path="/noticias/sesion-informativa-hackbarna-ai-summit-26"
        title="Sesión informativa HackBarna AI Summit 26: la ganadora de 2025 cuenta cómo se gana un hackathon de IA"
      />

      {/* ── Intro ── */}
      <div className="intro-text">
        <p>
          HackBarna arrancó en 2024 y este septiembre celebra su tercer
          hackathon en Barcelona. Entre hackathons y hack nights ya han pasado
          por sus eventos más de 400 hackers y se han construido más de 200
          proyectos. En la última edición, el pasado octubre en el Glovo Yellow
          Park, el primer premio se lo llevó Lilibeth Bustos Linares.
        </p>
        <br />
        <p>
          Este año queremos que en esa sala haya muchas más mujeres. Así que le
          hemos pedido a Lilibeth que se siente un rato con nosotras antes de
          HackBarna AI Summit 26 y nos cuente cómo se vive un hackathon de IA
          desde dentro: qué pasa de verdad durante las 48 horas, cómo se llega
          al domingo con algo que funciona y qué convence a un jurado cuando
          llega la hora de las demos.
        </p>
        <br />
        <p>
          La cita es el jueves 3 de septiembre a las 18:30. Online, abierta y
          gratuita.
        </p>
        <br />
        <p>
          Hace unas semanas os contamos aquí toda la logística de la edición de
          este año, cuando anunciamos que{" "}
          <a
            href="https://www.femcodersclub.com/noticias/hackbarna-ai-summit-26"
            className="highlight-link"
          >
            FemCoders Club vuelve a ser community partner del hackathon
          </a>
          : 19 y 20 de septiembre en Norrsken House Barcelona, más de 200
          hackers y una lista de patrocinadores que sigue creciendo. Lo que no
          teníamos hasta ahora es a alguien que ya haya pasado por ahí y se
          siente contigo a responder.
        </p>
      </div>

      <div className="intro-text">
        <p>
          <em>
            Lilibeth Bustos Linares, ganadora del hackathon en su edición de
            2025, estará con nosotras el 3 de septiembre.
          </em>
        </p>
      </div>

      {/* ── 1. Quién es Lilibeth ── */}
      <div className="highlight-box">
        <h2>Quién es Lilibeth Bustos Linares</h2>
        <br />

        <div className="post-image-container">
          <picture>
            <source
              srcSet="/public-optimized/mobile/assets/noticias/Lilibeth-Bustos-Linares.webp"
              media="(max-width: 768px)"
            />
            <source
              srcSet="/public-optimized/desktop/assets/noticias/Lilibeth-Bustos-Linares.webp"
              media="(min-width: 769px)"
            />
            <img
              src="/public-optimized/desktop/assets/noticias/Lilibeth-Bustos-Linares.webp"
              alt="Retrato de Lilibeth Bustos Linares, fundadora y CEO de SOMA AI y SoulDoodles y ganadora del AI Summit Hackathon Barcelona 2025"
              className="blog-post-image"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/noticias/Lilibeth-Bustos-Linares.jpg";
                (e.target as HTMLImageElement).onerror = null;
              }}
            />
          </picture>
        </div>
        <br />

        <p>
          Fundadora y CEO de{" "}
          <a
            href="https://somaai.earth/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            SOMA AI
          </a>{" "}
          y de{" "}
          <a
            href="https://www.souldoodles.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            SoulDoodles
          </a>
          . Más de diez años diseñando productos digitales en el sector
          tecnológico entre Nueva York y San Francisco. Ha sido docente de
          Product Design y ha dado charlas en conferencias internacionales.
        </p>
        <br />
        <p>
          Y, sobre todo para lo que nos ocupa aquí, ganadora del AI Summit
          Hackathon Barcelona 2025.
        </p>
        <br />
        <p>
          Fíjate en ese recorrido, porque dice más de lo que parece. Lilibeth no
          llegó al hackathon desde la investigación en machine learning ni desde
          un doctorado. Llegó desde el diseño de producto, sabiendo mirar un
          problema y construir algo que se entiende en cuatro minutos. Eso es
          exactamente lo que se premia en un fin de semana así.
        </p>
        <br />
        <p>
          Y esa es la diferencia entre leer cómo funciona un hackathon y que te
          lo cuente de primera mano quien salió de la última edición con el
          primer premio. Lilibeth sabe qué se siente al llegar el sábado por la
          mañana sin equipo cerrado. Sabe qué se descarta a las tres de la
          madrugada del domingo. Y sabe qué mira un jurado cuando ya lleva diez
          demos vistas.
        </p>
      </div>

      {/* ── 2. Ven con tus preguntas ── */}
      <div className="highlight-box">
        <h2>Ven con tus preguntas</h2>
        <br />
        <p>
          La sesión no es una charla con turno de dudas al final. Es un rato con
          Lilibeth para preguntarle lo que quieras: sobre el hackathon, sobre
          cómo se construye algo en 48 horas o sobre su propio camino hasta
          llegar ahí.
        </p>
        <br />
        <p>
          Puedes preguntar en directo o dejarlo escrito en el chat, como te
          resulte más cómodo. Y si prefieres solo escuchar, también.
        </p>
      </div>

      {/* ── 3. Las dos fechas ── */}
      <div className="highlight-box">
        <h2>Las dos fechas de HackBarna AI Summit 26 que te tienes que apuntar</h2>
        <br />

        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Qué</th>
                <th>Cuándo</th>
                <th>Dónde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Sesión informativa con Lilibeth Bustos Linares</strong>
                </td>
                <td>Jueves 3 de septiembre de 2026, 18:30 h</td>
                <td>Online</td>
              </tr>
              <tr>
                <td>
                  <strong>HackBarna AI Summit 26</strong>
                </td>
                <td>Sábado 19 y domingo 20 de septiembre de 2026</td>
                <td>Norrsken House Barcelona</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <p>
          Entre una fecha y otra hay algo más de dos semanas. Y aquí va la parte
          importante: el orden natural es justo el contrario del que parece.
        </p>
        <br />
        <p>
          Inscríbete al hackathon ahora. Hoy, mientras lees esto. No esperes al
          3 de septiembre para decidir, porque si esperas te quedarán dos
          semanas escasas para buscar equipo, mirar qué APIs te interesan y
          llegar con algo pensado. La sesión no es el filtro por el que hay que
          pasar antes de apuntarse: es la preparación de quien ya está dentro.
        </p>
        <br />
        <p>
          Le sacarás mucho más partido preguntándole a Lilibeth teniendo la
          plaza pedida. Las dudas se escuchan distinto cuando ya vas.
        </p>
      </div>

      {/* ── 4. Lo que te llevas ── */}
      <div className="highlight-box">
        <h2>Lo que te llevas de esas 48 horas</h2>
        <br />
        <p>
          El hackathon es uno de los pocos sitios donde puedes construir algo
          real junto a equipos de Vonage, Cognition o Nebius, y enseñarlo
          después en una entrevista. Esa conversación con un mentor mientras los
          dos miráis el mismo error en pantalla no la consigues por LinkedIn.
        </p>
        <br />
        <p>
          Cuarenta y ocho horas dan para mucho más de lo que parece cuando estás
          rodeada de gente que sabe tanto o más que tú.
        </p>
        <br />
        <p>
          Y de ese fin de semana se sale sabiendo bastante más de lo que sabías
          el viernes. Eso pasa siempre, ganes o no.
        </p>
      </div>

      {/* ── 5. Cómo apuntarte ── */}
      <div className="highlight-box">
        <h2>Cómo apuntarte a las dos</h2>
        <br />
        <p>
          <strong>Primero, el hackathon.</strong> Se tarda unos minutos y es el
          paso que de verdad cuenta:
        </p>
        <br />
        <ul>
          <li>
            <strong>Inscripción al hackathon:</strong>{" "}
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
            <strong>Inscripción a la sesión informativa:</strong>{" "}
            <a
              href="https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              gratuita y online en Eventbrite
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
          Cuando te inscribas, menciona que vienes de FemCoders Club. Nos gusta
          que se note cuántas somos.
        </p>
        <br />
        <p>
          La sesión te va a servir en cualquier caso, porque vas a entender cómo
          funciona esto por dentro. Pero pide plaza primero: siempre se puede
          dar un paso atrás, y lo que no se puede es participar en un evento al
          que no te has inscrito.
        </p>
        <br />
        <p>
          Gracias al equipo de HackBarna por volver a contar con la comunidad, y
          a Lilibeth por regalarnos un rato antes del fin de semana grande.
        </p>
        <br />
        <p>
          Nos vemos el 3 de septiembre a las 18:30 con Lilibeth. Y cuando pidas
          plaza en el hackathon, dilo en{" "}
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            nuestro Slack
          </a>
          : vamos formando equipos desde ya.
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
            Reserva tu plaza en la sesión
          </h3>
          <p>
            Jueves 3 de septiembre, 18:30 h. Online, abierta y gratuita, con
            Lilibeth Bustos Linares.
          </p>
          <br />
          <a
            href="https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516"
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
            Inscribirme en Eventbrite
          </a>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>17 de agosto, 2026</strong>
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

export default SesionInformativaHackBarnaAiSummit26;
