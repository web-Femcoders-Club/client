import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "../../page/PostStyles.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import CommentsSection from "../../components/CommentsSection";

const TalentArenaPartnership: React.FC = () => {
  const currentUrl = window.location.href;
  const postId = 21;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          FemCoders Club es Community Partner de Talent Arena 2026 | FemCoders Club
        </title>
        <meta
          name="description"
          content="Celebramos que FemCoders Club es oficialmente Community Partner de Talent Arena. Una alianza basada en valores compartidos: diversidad, talento colectivo e innovación."
        />
        <meta
          name="keywords"
          content="FemCoders Club, Talent Arena, Community Partner, mujeres en tecnología, diversidad tech, comunidad tech, networking, eventos tech Barcelona, talento femenino, innovación"
        />

        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/talent-arena-2026-partnership"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club es Community Partner de Talent Arena 2026"
        />
        <meta
          property="og:description"
          content="Una alianza que celebra la diversidad y el poder del talento colectivo. Descubre qué significa esta colaboración para nuestra comunidad."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/talent-arena-2026-partnership"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/femCodersClub-talentArena.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club es Community Partner de Talent Arena 2026"
        />
        <meta
          name="twitter:description"
          content="Celebramos esta alianza basada en valores compartidos: diversidad, talento e innovación."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/femCodersClub-talentArena.png"
        />

        <meta
          property="article:published_time"
          content="2026-02-02T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Community Partner" />
        <meta property="article:tag" content="Talent Arena" />
        <meta property="article:tag" content="Diversidad" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/noticias/femCodersClub-talentArena.png"
          alt="FemCoders Club es Community Partner de Talent Arena 2026"
          className="blog-post-image"
          loading="lazy"
        />
      </div>

      <h1 className="blog-post-title">
        Hoy celebramos juntas: FemCoders Club es Community Partner de Talent Arena
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
          Hay momentos que te hacen pausar, respirar hondo y sentir que todo el camino recorrido cobra sentido. Hoy vivimos uno de esos momentos.
        </p>
        <br />
        <p>
          En FemCoders Club siempre hemos creído en algo profundo y transformador: que cuando las mujeres nos unimos, nos apoyamos y creamos comunidad, no solo cambiamos nuestras propias historias, también transformamos la industria que nos rodea. Y hoy queremos compartir con todas ustedes una noticia que nos llena de emoción: <strong>somos Community Partner de <a href="https://talentarena.tech/es/" target="_blank" rel="noopener noreferrer" className="highlight-link">Talent Arena</a></strong>.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Nuestra historia, nuestra esencia</h2>
        <br />
        <p>
          Desde el primer día, FemCoders Club nació del corazón. Nació de la necesidad de encontrarnos, de acompañarnos, de saber que no estamos solas en este camino tecnológico que a veces puede sentirse solitario. Queríamos crear un espacio donde cada mujer, sin importar si está dando sus primeros pasos en programación o si lleva años escribiendo código, pudiera sentirse vista, escuchada y valorada.
        </p>
        <br />
        <p>
          Y lo hemos hecho. Juntas hemos construido una comunidad basada en la colaboración genuina, en el apoyo incondicional y en la certeza de que <strong>todas merecemos un lugar en la tecnología</strong>. Si quieres conocer más sobre nuestra historia y logros, te invitamos a leer sobre nuestro <a href="/noticias/segundo-aniversario" className="highlight-link">segundo aniversario</a>.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Un encuentro de valores</h2>
        <br />
        <p>
          Conocer a <a href="https://talentarena.tech/es/" target="_blank" rel="noopener noreferrer" className="highlight-link">Talent Arena</a> fue como reconocernos en un espejo. Ellos también creen en la diversidad, en el poder del talento colectivo, en que la innovación nace cuando abrimos puertas y construimos puentes. Esta alianza no es solo una colaboración profesional, es un encuentro de propósitos compartidos.
        </p>
        <br />
        <p>
          Como Community Partner, podremos:
        </p>
        <ul>
          <li>Participar en iniciativas que amplifican nuestra voz</li>
          <li>Colaborar en eventos que nos conectan con el ecosistema tech</li>
          <li>Generar contenidos que inspiran a más mujeres</li>
          <li>Seguir creando esos espacios seguros de aprendizaje y networking que tanto necesitamos y merecemos</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Esto es nuestro, de todas</h2>
        <br />
        <p>
          Si hoy estamos aquí es por cada una de ustedes. Por cada mujer que se atrevió a asistir a su primer <a href="/eventos" className="highlight-link">evento</a> aunque le temblaran las manos. Por cada mentora que compartió su experiencia con generosidad. Por cada conversación en los descansos del café, cada duda resuelta, cada victoria celebrada juntas.
        </p>
        <br />
        <p>
          Esta alianza con <a href="https://talentarena.tech/es/" target="_blank" rel="noopener noreferrer" className="highlight-link">Talent Arena</a> es el reflejo de lo que hemos construido juntas: <strong>una comunidad real, con impacto tangible y un propósito que nos mueve cada día</strong>.
        </p>
        <br />
        <p style={{ fontStyle: "italic", color: "#6d2c95" }}>
          Gracias, Talent Arena, por vernos, por valorarnos y por abrirnos sus puertas. Nos emociona profundamente todo lo que construiremos juntas.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Lo que viene nos tiene el corazón acelerado</h2>
        <br />
        <p>
          Estamos emocionadas, ilusionadas, llenas de ideas y energía. Porque sabemos que esta es solo una página más en una historia que escribimos juntas cada día. Una historia donde la tecnología tiene rostro de mujer, donde la diversidad no es una casilla a marcar sino una realidad viva, donde cada una de nosotras importa.
        </p>
        <br />
        <p>
          <strong>Seguimos comprometidas con nuestra esencia:</strong> construir un ecosistema tecnológico más humano, más diverso, más nuestro.
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "25px",
          borderRadius: "15px",
          textAlign: "center",
          margin: "30px 0",
          borderLeft: "5px solid #4737bb",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
        }}>
          <h3 style={{ color: "#6d2c95", marginTop: 0, fontSize: "1.8rem", marginBottom: "15px" }}>
            Y esto, queridas compañeras, apenas comienza.
          </h3>
          <p>
            ¿Quieres ser parte de esta aventura? Únete a nuestra comunidad y sé parte del cambio.
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
              marginRight: "15px"
            }}
          >
            Únete al Slack
          </a>
          <a
            href="/login"
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
              boxShadow: "0 4px 15px rgba(138, 43, 226, 0.3)"
            }}
          >
            Sé parte de la comunidad
          </a>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Ana Lucía Silva Córdoba</strong>
        </p>
        <p>Cofundadora de FemCoders Club</p>
        <p>
          Fecha de publicación: <strong>2 de febrero, 2026</strong>
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

export default TalentArenaPartnership;
