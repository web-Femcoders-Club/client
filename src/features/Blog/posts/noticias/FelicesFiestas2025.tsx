import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../Blog/components/CommentsSection";
import "../../page/PostStyles.css";

const FelicesFiestas2025: React.FC = () => {
  const postId = 32;
  const publicationDate = "28 de diciembre de 2025";
  const currentUrl = "https://www.femcodersclub.com/noticias/felices-fiestas-2025";

  return (
    <div className="blog-post">
      <Helmet>
        <title>Felices fiestas: FemCoders Club cierra 2025 y sigue | FemCoders Club</title>
        <meta
          name="description"
          content="FemCoders Club cierra 2025 con más de 1,300 mujeres en tech. Celebramos logros reales, conexiones auténticas y proyectamos un 2026 lleno de oportunidades."
        />
        <meta
          name="keywords"
          content="FemCoders Club, felices fiestas, 2025, 2026, comunidad mujeres tech, mentorías, eventos tech, JavaScript, IA, colaboración empresas"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/felices-fiestas-2025"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Felices fiestas: FemCoders Club cierra 2025 y sigue"
        />
        <meta
          property="og:description"
          content="Más de 1,300 mujeres en tech, logros reales y un 2026 lleno de proyectos. Así cierra FemCoders Club el año 2025."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/felices-fiestas-2025"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/felices-fiestas-2025.gif"
        />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Felices fiestas: FemCoders Club cierra 2025 y sigue"
        />
        <meta
          name="twitter:description"
          content="Cerramos 2025 con más de 1,300 mujeres en tech y proyectamos un 2026 lleno de oportunidades y colaboraciones."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/felices-fiestas-2025.gif"
        />
        <meta
          property="article:published_time"
          content="2025-12-28T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Comunidad" />
        <meta property="article:tag" content="Año nuevo" />
        <meta property="article:tag" content="Reflexión" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/noticias/felices-fiestas-2025.gif"
          alt="Felices fiestas de FemCoders Club 2025"
          className="blog-post-image"
          loading="lazy"
        />
      </div>

      <h1 className="blog-post-title">
        Felices fiestas: FemCoders Club cierra 2025 y sigue
      </h1>

      <div className="social-share">
        <div className="share-buttons">
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Facebook"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href={`https://www.instagram.com/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Instagram"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en LinkedIn"
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
            aria-label="Compartir este post en TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>

      <p className="intro-text">
        Las fiestas están aquí y es momento de parar un poco, mirar atrás y pensar en lo que viene. Este año que termina fue intenso, lleno de aprendizaje y, sobre todo, de conexiones reales.
      </p>

      <div className="highlight-box">
        <h2>Lo que construimos juntas en 2025</h2>
        <p>
          Ya somos más de 1,300 mujeres en FemCoders Club. Pero lo que realmente importa no es el número. Es que este año vimos a mujeres conseguir su primer trabajo en tech, otras cambiar de stack completamente, algunas lanzar sus propios proyectos. Mujeres participando en <Link to="/eventos" className="highlight-link">hackatones</Link>, dando sus charlas en eventos, haciendo de mentoras para otras que están empezando. Cada historia nos recuerda por qué existe este espacio.
        </p>
        <p>
          Como <Link to="/femcoders-quienes-somos" className="highlight-link">asociación oficial</Link>, consolidamos algo que va más allá de eventos y talleres. Creamos un lugar donde podemos ser nosotras mismas, aprender sin miedo a preguntar lo "obvio", y construir relaciones reales.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Lo que no se ve (pero existe)</h2>
        <p>
          FemCoders Club no es solo lo que pasa en los eventos presenciales. También es:
        </p>
        <ul>
          <li>El <a href="https://communityinviter.com/apps/femcodersclub/femcoders-club" target="_blank" rel="noopener noreferrer" className="highlight-link">canal de Slack</a> donde alguien resuelve una duda a las 11 de la noche.</li>
          <li>Las consultas que llegan por correo.</li>
          <li>Los meets que organizamos con distintos objetivos: preparar entrevistas, revisar CVs, hablar de cambios de carrera.</li>
          <li>Las recomendaciones de trabajo que nos pasamos entre nosotras.</li>
          <li>Esa confianza de preguntar sin sentir que la pregunta es tonta.</li>
          <li>Las amistades tech que nacen aquí y que duran.</li>
        </ul>
        <p>
          Lo que más me impacta no son las cifras. Es conocer mujeres increíbles a las que admiro, otras que ya considero amigas. Es recibir mensajes de "conseguí el trabajo" o "por fin entendí cómo funciona esto". Es sentir que construimos algo real.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Qué viene en 2026</h2>
        <p>
          Seguiremos creando contenido técnico. Los posts sobre <Link to="/blog/recursos" className="highlight-link">JavaScript</Link> van a continuar, los proyectos con IA también. Habrá <Link to="/eventos" className="highlight-link">más eventos</Link>, más talleres, más espacios para aprender juntas.
        </p>
        <p>
          Queremos abrir colaboraciones con otras comunidades tech. Crecer no solo en número, sino en diversidad de tecnologías, de proyectos, de formas de aprender.
        </p>
        <p>
          Las <Link to="/mentoria" className="highlight-link">mentorías</Link> siguen disponibles. Si necesitas orientación, alguien que te escuche, o simplemente otra perspectiva sobre tu carrera tech, estamos aquí.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Para las empresas que nos leen</h2>
        <p>
          Si quieren colaborar con una comunidad real, con mujeres que están aprendiendo, creciendo y aportando valor al sector tech, hablemos. No buscamos solo sponsors. Buscamos aliados que entiendan qué significa apoyar la diversidad de verdad.
        </p>
        <p>
          <Link to="/contacto" className="highlight-link">Contáctanos</Link> si estás interesado en crear puentes reales entre talento y oportunidades.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Lo que necesitamos de vosotras</h2>
        <p>
          Participad. Compartid. Preguntad. Recomendad FemCoders Club a otras mujeres que están empezando o que necesitan una comunidad donde sentirse cómodas.
        </p>
        <p>
          Si podéis mentorizar, hacedlo. Si tenéis dudas, preguntad. Si veis una oferta de trabajo interesante, compartidla en <a href="https://communityinviter.com/apps/femcodersclub/femcoders-club" target="_blank" rel="noopener noreferrer" className="highlight-link">Slack</a>. Así funciona esto.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Gracias y feliz 2026</h2>
        <p>
          Gracias por hacer de FemCoders Club este espacio tan especial. Por las preguntas, por compartir victorias y frustraciones, por estar ahí cuando otras lo necesitan.
        </p>
        <p>
          Que 2026 venga cargado de proyectos que terminamos y de los que nos sentimos orgullosas. De código que funciona (a la primera, ojalá). De trabajos que nos ilusionan y nos hacen crecer. De aprendizajes que nos abren puertas. De conexiones que se convierten en colaboraciones, en amistades, en oportunidades.
        </p>
        <p>
          Que este año que empieza traiga más mujeres atreviéndose a dar el salto al tech, más voces diversas en eventos, más mentoría entre nosotras, más proyectos colaborativos. Que sigamos construyendo este espacio donde todas tenemos lugar, donde todas aportamos, donde todas aprendemos.
        </p>
        <p>
          Felices fiestas para vosotras y vuestras familias. Descansad, desconectad si podéis, y nos vemos en 2026 con las mismas ganas de seguir construyendo juntas.
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Equipo FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <Link to="/blog" className="back-to-blog">
          Volver al Blog
        </Link>
      </div>

      <CommentsSection postId={postId} />
    </div>
  );
};

export default FelicesFiestas2025;
