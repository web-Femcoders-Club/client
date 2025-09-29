import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CommentsSection from "../../../Blog/components/CommentsSection";
import "../../page/PostStyles.css";

const HackBarna2025Announcement: React.FC = () => {
  const postId = 28;
  const publicationDate = "29 de septiembre de 2025";
  const currentUrl = "https://www.femcodersclub.com/blog/femcoders-club-community-partner-hackbarna-2025";

  return (
    <div className="blog-post">
      <Helmet>
        <title>¡FemCoders Club es Community Partner de HackBarna 2025! | FemCoders Club</title>
        <meta
          name="description"
          content="¡Increíble noticia! FemCoders Club es Community Partner oficial de HackBarna 2025, el hackathon de IA más importante de Barcelona. Únete del 11-12 de octubre en Glovo HQ."
        />
        <meta
          name="keywords"
          content="HackBarna 2025, hackathon Barcelona, femcoders club, community partner, IA, artificial intelligence, Glovo, hackathon mujeres tech, evento tech Barcelona"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/blog/femcoders-club-community-partner-hackbarna-2025"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="¡FemCoders Club es Community Partner de HackBarna 2025!"
        />
        <meta
          property="og:description"
          content="¡Una noticia que nos llena de orgullo! Somos Community Partner oficial del hackathon de IA más importante de Barcelona. ¡Te esperamos!"
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/blog/femcoders-club-community-partner-hackbarna-2025"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/hackbarna-2025-femcoders.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="¡FemCoders Club es Community Partner de HackBarna 2025!"
        />
        <meta
          name="twitter:description"
          content="El hackathon de IA más importante de Barcelona nos espera el 11-12 de octubre en Glovo HQ. ¡Únete a nuestra comunidad!"
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/hackbarna-2025-femcoders.webp"
        />
        <meta
          property="article:published_time"
          content="2025-09-30T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Eventos" />
        <meta property="article:tag" content="HackBarna" />
        <meta property="article:tag" content="Hackathon" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="IA" />
        <meta property="article:tag" content="Community Partner" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>
      
      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/Eventos2025/hackbarna-2025-femcoders.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/Eventos2025/hackbarna-2025-femcoders.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/Eventos2025/hackbarna-2025-femcoders.webp"
            alt="FemCoders Club Community Partner HackBarna 2025 - Hackathon IA Barcelona"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        🎉 ¡Noticia que nos llena de orgullo!<br/>
        Somos Community Partner de HackBarna 2025
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
        Algunas noticias te llegan y simplemente te sacan una sonrisa inmensa. Esta es una de esas. 
        <strong> FemCoders Club es oficialmente Community Partner de HackBarna 2025</strong>, y no podemos estar más emocionadas de compartir esta noticia con toda nuestra comunidad.
      </p>

      <p className="intro-text">
        Cuando recibimos la invitación, no lo podíamos creer. Un hackathon de este calibre, en Barcelona, 
        centrado en inteligencia artificial y con sponsors de la talla que tiene HackBarna... y nosotras 
        formando parte como community partner. Ha sido uno de esos momentos donde dices "¡guau, hemos llegado lejos!"
      </p>

      <div className="highlight-box">
        <h2>🤝 Agradecimientos que nacen del corazón</h2>
        
        <p>
          Esta oportunidad increíble no habría sido posible sin dos pilares fundamentales que queremos reconocer públicamente:
        </p>

        <h3>🙏 Gracias, Nicolas Grenie</h3>
        <p>
          Un agradecimiento muy especial para <strong>
          <a 
            href="https://www.linkedin.com/in/nicolasgrenie/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Nicolas Grenie
          </a></strong>, quien fue la persona que directamente nos extendió la invitación para ser community partners. 
          Nicolas, tu confianza en nuestra comunidad y el reconocimiento de lo que representamos para las mujeres en tech 
          significa muchísimo para nosotras. Personas como tú hacen que el ecosistema tecnológico sea más inclusivo y diverso.
        </p>

        <h3>💜 Y por supuesto, gracias Glovo</h3>
        <p>
          No podemos olvidarnos de <strong>Glovo</strong>, la empresa que nos puso en contacto y que claramente 
          entiende la importancia de apoyar comunidades como la nuestra. Glovo no solo será el anfitrión del evento 
          en su increíble HQ de Barcelona, sino que ha sido clave para que esta colaboración sea posible.
        </p>

        <div style={{
          backgroundColor: "rgba(71, 55, 187, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #4737bb"
        }}>
          <p style={{ margin: "0", fontSize: "1.1rem", fontStyle: "italic" }}>
            <strong>Es increíble cómo las conexiones auténticas en el mundo tech pueden abrir puertas que jamás imaginaste. 
            Esta es la prueba de que cuando construyes una comunidad con propósito, el reconocimiento llega.</strong>
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>🚀 HackBarna 2025: El evento que no te puedes perder</h2>
        
        <p>
          Y ahora viene la parte que más nos emociona: <strong>¡invitar a toda nuestra comunidad a participar!</strong> 
          Porque ser community partner no significa solo estar presentes, significa que queremos ver a nuestras femcoders 
          brillando en este hackathon.
        </p>

        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>📅 Detalles del Evento</th>
                <th>📍 Información</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fechas de Hackeo</strong></td>
                <td>Sábado 11 - Domingo 12 de octubre, 2025</td>
              </tr>
              <tr>
                <td><strong>Ubicación</strong></td>
                <td>Glovo HQ, Barcelona</td>
              </tr>
              <tr>
                <td><strong>Demo Day & Premios</strong></td>
                <td>Domingo 12 de octubre</td>
              </tr>
              <tr>
                <td><strong>Temática</strong></td>
                <td>Inteligencia Artificial</td>
              </tr>
              <tr>
                <td><strong>Aplicaciones</strong></td>
                <td><a href="https://aisummitbarcelona.com/hackathon" target="_blank" rel="noopener noreferrer" className="highlight-link">aisummitbarcelona.com/hackathon</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>✨ Los sponsors que te van a impresionar</h3>
        <p>
          Cuando veas la lista de empresas que están apoyando este hackathon, vas a entender por qué estamos tan emocionadas. 
          Hablamos de nombres que están definiendo el futuro de la tecnología:
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "20px",
          marginBottom: "20px"
        }}>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🍕 Glovo</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>📞 Vonage</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🥤 Acai</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🔗 Linkup</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🎥 Veed.io</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🌐 Lingo.dev</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🪝 Hookdeck</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>⚡ n8n</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>💬 slng</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🤖 Anthropic</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🎤 ElevenLabs</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🤗 Hugging Face</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>💕 Lovable</strong>
          </div>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #4737bb"
          }}>
            <strong style={{ color: "#4737bb" }}>🌟 Norrsken</strong>
          </div>
        </div>

        <p>
          ¿Te das cuenta del nivel? Estas son empresas que están en la vanguardia de la inteligencia artificial, 
          no es solo un hackathon más. Es una oportunidad de conectar con el ecosistema que está construyendo el futuro.
        </p>
      </div>

      <div className="highlight-box">
        <h2>🎁 ¿Por qué deberías aplicar YA?</h2>
        
        <h3>🏆 Premios que valen la pena</h3>
        <p>
          No estamos hablando de premios simbólicos. HackBarna 2025 viene con recompensas increíbles y merchandising 
          exclusivo que realmente vale la pena. Pero más allá de los premios materiales, estamos hablando de reconocimiento 
          en un evento de primer nivel.
        </p>

        <h3>💼 Oportunidades laborales reales</h3>
        <p>
          Aquí viene la parte que más nos motiva como comunidad: <strong>este hackathon puede cambiar tu carrera profesional</strong>. 
          Con las empresas que están participando, no sería raro que salieras de ahí con ofertas de trabajo concretas. 
          Hemos visto que pasa en eventos de este calibre, y queremos que nuestras femcoders estén ahí para aprovecharlo.
        </p>

        <h3>🧠 Colaborar con los mejores en IA</h3>
        <p>
          La oportunidad de trabajar codo a codo con expertos en inteligencia artificial no se presenta todos los días. 
          Imagínate el aprendizaje, las conexiones, las ideas que van a surgir. Es el tipo de experiencia que te marca 
          profesionalmente para siempre.
        </p>

        <div style={{
          backgroundColor: "rgba(234, 79, 51, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #ea4f33"
        }}>
          <h4 style={{ color: "#ea4f33", marginTop: "0" }}>💪 Nuestro mensaje para ti:</h4>
          <p style={{ margin: "0", fontSize: "1.1rem" }}>
            Si eres parte de nuestra comunidad, sabes que creemos en tu potencial. Este hackathon es tu momento de brillar 
            en un escenario internacional. No dejes que la inseguridad te frene, aplica y demuestra de qué estás hecha.
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>🌟 Esto es solo el comienzo</h2>
        
        <p>
          Ser community partner de HackBarna 2025 representa mucho más que un título bonito para nosotras. 
          Es el reconocimiento de años de trabajo construyendo una comunidad que realmente importa en el ecosistema tecnológico.
        </p>

        <p>
          Es la prueba de que cuando las mujeres nos unimos, cuando nos apoyamos, cuando construimos algo con propósito, 
          las puertas se abren. Y no solo se abren para nosotras como organización, sino para cada una de las personas 
          que forma parte de esta comunidad increíble.
        </p>

        <h3>📋 ¿Cómo aplicar?</h3>
        <p>
          Si ya estás convencida (y esperamos que sí), tienes toda la información que necesitas:
        </p>

        <ul>
          <li><strong>📝 Aplicar al hackathon:</strong> <a href="https://aisummitbarcelona.com/hackathon" target="_blank" rel="noopener noreferrer" className="highlight-link">aisummitbarcelona.com/hackathon</a></li>
          <li><strong>📚 Información completa del evento:</strong> <a href="https://www.hackbarna.com/en/aisummit25" target="_blank" rel="noopener noreferrer" className="highlight-link">hackbarna.com/en/aisummit25</a></li>
          <li><strong>💬 Dudas y networking:</strong> <a href="https://communityinviter.com/apps/femcodersclub/femcoders-club" target="_blank" rel="noopener noreferrer" className="highlight-link">Únete a nuestro Slack</a></li>
        </ul>

        <p>
          Y por favor, cuando apliques, siéntete libre de mencionar que eres parte de FemCoders Club. 
          Estamos orgullosas de nuestra comunidad y queremos que se note.
        </p>
      </div>

      <div className="highlight-box">
        <h2>💜 Una invitación desde el corazón</h2>
        
        <p>
          Este post no es solo un anuncio, es una invitación sincera de toda nuestra comunidad para que vengas 
          y demuestres el talento increíble que sabemos que tienes. Sabemos que muchas veces nos da vértigo aplicar 
          a eventos grandes, que pensamos "no estoy preparada" o "no es para mí".
        </p>

        <p>
          Pero queremos recordarte algo: si estás leyendo esto, si formas parte de FemCoders Club, si estás en este 
          camino del desarrollo y la tecnología, <strong>ya estás preparada</strong>. Solo necesitas dar el paso.
        </p>

        <div style={{
          backgroundColor: "rgba(138, 43, 226, 0.1)",
          padding: "25px",
          borderRadius: "15px",
          textAlign: "center",
          margin: "30px 0",
          borderLeft: "5px solid #8a2be2",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
        }}>
          <h3 style={{ color: "#6d2c95", marginTop: 0, fontSize: "1.8rem", marginBottom: "15px" }}>
            🚀 ¿Lista para el hackathon?
          </h3>
          <p>
            Cuéntanos en los comentarios si vas a aplicar, si tienes dudas, o si simplemente quieres compartir 
            tu emoción por esta noticia. ¡Queremos celebrar juntas!
          </p>
          <div style={{ marginTop: "20px" }}>
            <a
              href="https://aisummitbarcelona.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#4737bb",
                color: "white",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(71, 55, 187, 0.3)",
                marginRight: "15px",
                marginBottom: "10px"
              }}
            >
              🎯 Aplicar al Hackathon
            </a>
            <a
              href="https://www.hackbarna.com/en/aisummit25"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#ea4f33",
                color: "white",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(234, 79, 51, 0.3)",
                marginBottom: "10px"
              }}
            >
              📖 Más Información
            </a>
          </div>
          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px", marginBottom: 0, color: "#2a2170" }}>
            ¡Nos vemos en Barcelona! 🇪🇸
          </p>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Equipo FemCoders Club</strong>
        </p>
        <p>Con mucha ilusión y orgullo 💜</p>
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

export default HackBarna2025Announcement;