import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "../../page/PostStyles.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import CommentsSection from "../../components/CommentsSection";

const MarzoEventos2026: React.FC = () => {
  const currentUrl = window.location.href;
  const postId = 36;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          El mes en que dejamos de pedir permiso para ocupar espacio | FemCoders Club
        </title>
        <meta
          name="description"
          content="Marzo 2026 en FemCoders Club: 150 mujeres en Talent Arena, el primer evento de Claude en Barcelona, una invitación inesperada del Gobierno y una tarde con InfoJobs. Os contamos todo."
        />
        <meta
          name="keywords"
          content="FemCoders Club, mujeres en tecnología Barcelona, Talent Arena 2026, Claude Barcelona, Anthropic, InfoJobs, eventos tech Barcelona marzo 2026, comunidad tech mujeres, mujeres programadoras Barcelona, diversidad tecnología"
        />

        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/marzo-2026-eventos"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="El mes en que dejamos de pedir permiso para ocupar espacio | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Talent Arena, Claude en Barcelona e InfoJobs: marzo 2026 ha sido un mes que deja huella. Y aún no ha terminado."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/marzo-2026-eventos"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/talent-arena-2026-partnership.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="El mes en que dejamos de pedir permiso para ocupar espacio | FemCoders Club"
        />
        <meta
          name="twitter:description"
          content="Talent Arena, Claude en Barcelona e InfoJobs: marzo 2026 ha sido un mes que deja huella."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/talent-arena-2026-partnership.png"
        />

        <meta
          property="article:published_time"
          content="2026-03-06T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Talent Arena" />
        <meta property="article:tag" content="Claude Barcelona" />
        <meta property="article:tag" content="InfoJobs" />
        <meta property="article:tag" content="Mujeres en Tech" />
        <meta property="article:tag" content="Eventos Marzo 2026" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source srcSet="/public-optimized/mobile/femCodersClub-talentArena.webp" media="(max-width: 768px)" />
          <source srcSet="/public-optimized/desktop/femCodersClub-talentArena.webp" media="(min-width: 769px)" />
          <img
            src="/public-optimized/desktop/femCodersClub-talentArena.webp"
            alt="FemCoders Club en Talent Arena 2026 — El mes en que dejamos de pedir permiso para ocupar espacio"
            className="blog-post-image"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = "/femCodersClub-talentArena.png"; (e.target as HTMLImageElement).onerror = null; }}
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        El mes en que dejamos de pedir permiso para ocupar espacio
      </h1>

      <div className="social-share">
        <div className="share-buttons">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Facebook"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href={`https://www.instagram.com/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Instagram"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en LinkedIn"
          >
            <BsLinkedin className="social-icon" />
          </a>
          <a
            href={`https://twitter.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Twitter"
          >
            <FaSquareXTwitter className="social-icon" />
          </a>
          <a
            href={`https://www.tiktok.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>
        </div>
      </div>

      <div className="intro-text">
        <p>
          Hay meses que pasan. Y hay meses que dejan huella.
        </p>
        <br />
        <p>
          Marzo empezó con 150 mujeres en tecnología entrando a Talent Arena con entrada PRO, siguió con el primer evento de la comunidad de Claude en Barcelona, y antes de que acabe todavía nos queda una tarde con InfoJobs que tiene muy buena pinta. En medio de todo eso, llegó una invitación que no esperábamos y que nos hizo parar un momento a asimilar lo que estamos construyendo.
        </p>
        <br />
        <p>
          Porque FemCoders Club lleva más de dos años siendo un espacio donde las <strong>mujeres en tecnología de Barcelona y de toda España</strong> se encuentran, aprenden y crecen juntas. Y a veces, en medio del día a día, hay semanas que te recuerdan que todo eso tiene más impacto del que imaginas.
        </p>
        <br />
        <p>
          Os contamos todo.
        </p>
      </div>

      {/* Sección 1: Talent Arena */}
      <div className="post-image-container">
        <picture>
          <source srcSet="/public-optimized/mobile/reunion-femCodersClub-administracion-gob-es.webp" media="(max-width: 768px)" />
          <source srcSet="/public-optimized/desktop/reunion-femCodersClub-administracion-gob-es.webp" media="(min-width: 769px)" />
          <img
            src="/public-optimized/desktop/reunion-femCodersClub-administracion-gob-es.webp"
            alt="Reunión de FemCoders Club con la Subdirección General de Ciudadanía, Talento y Emprendimiento Digital"
            className="blog-post-image"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = "/reunion-femCodersClub-administracion-gob-es.jpeg"; (e.target as HTMLImageElement).onerror = null; }}
          />
        </picture>
      </div>

      <div className="highlight-box">
        <h2>Talent Arena: cuando tu comunidad llena una sala</h2>
        <br />
        <p>
          <a
            href="https://talentarena.tech/es/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Talent Arena
          </a>{" "}
          es uno de esos eventos que cada año coincide con el Mobile World Congress y convierte Barcelona en el centro de la conversación tech europea. Empresas, proyectos, talento y comunidades durante tres días en el mismo espacio.
        </p>
        <br />
        <p>
          Este año estuvimos como <strong>Community Partners</strong> y fue una experiencia que no olvidamos fácilmente. Regalamos 150 entradas PRO a mujeres de la comunidad, nos reencontramos con caras conocidas que siempre alegran, llenamos páginas de notas en charlas que valieron mucho la pena, y vimos proyectos de empresas que nos dejaron con ganas de más. El networking fue real, de esos que acaban en conversaciones largas y en "oye, tenemos que seguir hablando".
        </p>
        <br />
        <p>
          Pero lo que más nos marcó fue algo que no esperábamos: una invitación de la{" "}
          <a
            href="https://administracion.gob.es/pagFront/espanaAdmon/directorioOrganigrama/fichaUnidadOrganica.htm?codigoUnidad=EA0056327"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            <strong>Subdirección General de Ciudadanía, Talento y Emprendimiento Digital</strong>
          </a>{" "}
          para participar en el diseño de nuevos programas de capacitación digital dirigidos a mujeres. Nos pidieron nuestra visión como comunidad del sector.
        </p>
        <br />
        <p>
          Fue un momento de mucha responsabilidad. Que desde el sector público quieran escuchar a una comunidad como la nuestra — que comparte lo que aprende y acompaña a las <strong>mujeres en tecnología</strong> en su camino — es una oportunidad que tomamos muy en serio. Esperamos poder aportar algo que valga la pena, y seguir construyendo esa relación desde la honestidad y el trabajo real.
        </p>
        <br />
        <p>
          Si quieres leer el momento en que nos anunciamos como Community Partners de Talent Arena,{" "}
          <a href="/noticias/talent-arena-2026-partnership" className="highlight-link">
            aquí está ese post
          </a>
          .
        </p>
      </div>

      {/* Sección 2: Claude en Barcelona */}
      <div className="post-image-container">
        <picture>
          <source srcSet="/public-optimized/mobile/eventoClaude.webp" media="(max-width: 768px)" />
          <source srcSet="/public-optimized/desktop/eventoClaude.webp" media="(min-width: 769px)" />
          <img
            src="/public-optimized/desktop/eventoClaude.webp"
            alt="FemCoders Club en el primer evento de la comunidad Claude en Barcelona"
            className="blog-post-image"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = "/eventoClaude.jpeg"; (e.target as HTMLImageElement).onerror = null; }}
          />
        </picture>
      </div>

      <div className="highlight-box">
        <h2>Claude en Barcelona: IA que nos gusta de verdad</h2>
        <br />
        <p>
          También fuimos parte del primer evento de la comunidad de Claude en Barcelona, y eso para nosotras tiene significado especial.
        </p>
        <br />
        <p>
          Claude es el asistente de IA de{" "}
          <a
            href="https://www.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Anthropic
          </a>
          , y en FemCoders Club llevamos tiempo trabajando con él en proyectos reales. Lo que nos gusta no es solo lo que hace, sino cómo está construido: con criterio, con cuidado en los detalles, y con una manera de razonar que se nota diferente. Es de esas herramientas que cuando las integras en tu flujo de trabajo, no quieres volver atrás.
        </p>
        <br />
        <p>
          El evento fue una tarde de conversaciones honestas sobre IA, con gente que la está usando de verdad y no solo hablando de ella. Exactamente el tipo de espacio que nos gusta.
        </p>
        <br />
        <p>
          En FemCoders Club creemos que la inteligencia artificial no es el futuro, es el presente. Y que las <strong>mujeres en tecnología</strong> tenemos que estar en esa conversación desde el principio, no como espectadoras sino como creadoras. Por eso seguimos explorando estas herramientas, compartiéndolas en nuestra comunidad y formando parte de espacios donde se debate su uso real.
        </p>
        <br />
        <p>
          Si tienes curiosidad sobre cómo usamos la IA en proyectos concretos, estamos preparando contenido sobre eso — sigue atenta a{" "}
          <a
            href="https://www.femcodersclub.com/blog"
            className="highlight-link"
          >
            nuestro blog
          </a>
          .
        </p>
      </div>

      {/* Sección 3: InfoJobs */}
      <div className="post-image-container">
        <picture>
          <source srcSet="/public-optimized/mobile/evento-mujeres-transforman-futuro.webp" media="(max-width: 768px)" />
          <source srcSet="/public-optimized/desktop/evento-mujeres-transforman-futuro.webp" media="(min-width: 769px)" />
          <img
            src="/public-optimized/desktop/evento-mujeres-transforman-futuro.webp"
            alt="Evento FemCoders Club con InfoJobs — Mujeres que Transforman el Futuro, 26 de marzo 2026"
            className="blog-post-image"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = "/evento-mujeres-transforman-futuro.png"; (e.target as HTMLImageElement).onerror = null; }}
          />
        </picture>
      </div>

      <div className="highlight-box">
        <h2>26 de marzo: nos vemos en InfoJobs</h2>
        <br />
        <p>
          Y el mes todavía tiene más. El <strong>26 de marzo</strong> celebramos el Día de la Mujer junto a{" "}
          <a
            href="https://www.infojobs.net"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            <strong>InfoJobs</strong>
          </a>{" "}
          con una tarde de charlas que hemos organizado con mucho cariño.
        </p>
        <br />
        <p>
          La idea es sencilla: reunir a mujeres que están liderando proyectos tecnológicos reales, para que cuenten cómo lo están haciendo. Sin postureo, sin elevator pitch. Solo experiencia, aprendizaje y conversación.
        </p>
        <br />
        <p>Las ponentes hablan por sí solas:</p>
        <ul>
          <li>
            <strong>Marta Gimeno</strong> — Emprendedora, advisor social, technohumanista y feminista. CEO de startups.
          </li>
          <li>
            <strong>Sheila Guirado</strong> — Estratega de IA aplicada al negocio.
          </li>
          <li>
            <strong>Carolina Romero Cruz</strong> — Directora de Producto en Decidim.
          </li>
          <li>
            <strong>Irene Amo</strong> — Senior Product Manager en InfoJobs.
          </li>
        </ul>
        <br />
        <p>
          Cuatro mujeres que están construyendo desde la estrategia, el producto y la innovación. Va a ser una tarde que merece la pena.
        </p>
      </div>

      <div className="highlight-box">
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
            26 de marzo — InfoJobs, Barcelona
          </h3>
          <p>
            Tres eventos, muchos contactos, una invitación que no esperábamos y una comunidad que no para de crecer.
          </p>
          <br />
          <p>
            Gracias a todas las que estáis ahí, en los eventos, en los grupos, mandando mensajes, compartiendo oportunidades. FemCoders Club somos todas.
          </p>
          <br />
          <a
            href="https://www.eventbrite.es/e/entradas-estructuras-en-movimiento-mujeres-que-transforman-el-futuro-1984505957741?aff=oddtdtcreator"
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
              marginRight: "15px",
            }}
          >
            Reserva tu sitio
          </a>
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#8a2be2",
              color: "white",
              padding: "12px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(138, 43, 226, 0.3)",
            }}
          >
            Únete a la comunidad
          </a>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>6 de marzo, 2026</strong>
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

export default MarzoEventos2026;
