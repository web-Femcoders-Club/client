import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "../../page/PostStyles.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import CommentsSection from "../../components/CommentsSection";

const DataConnectEvento: React.FC = () => {
  const currentUrl = window.location.href;
  const postId = 19; 

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          DataConnect: Revive una tarde épica de comunidad tech en Barcelona | FemCoders Club
        </title>
        <meta
          name="description"
          content="Revive los mejores momentos del evento DataConnect en InfoJobs Barcelona. Más de 70 personas, charlas inspiradoras, networking con DJ y una comunidad diversa apasionada por el mundo data."
        />
        <meta
          name="keywords"
          content="DataConnect, evento tech Barcelona, FemCoders Club, InfoJobs, Le Wagon, Glovo, Big Data, análisis datos, visualización datos, women in tech, comunidad tech, networking Barcelona, Muntsa Padró, Laura Pourtier, Kevin Badia, Pia Trnovec"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/blog/dataconnect-evento-barcelona-mayo-2025"
        />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="DataConnect: Revive una tarde épica de comunidad tech en Barcelona"
        />
        <meta
          property="og:description"
          content="Más de 70 personas se reunieron en InfoJobs Barcelona para una jornada increíble de Big Data, networking y comunidad. Revive los mejores momentos con nuestro video resumen."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/blog/dataconnect-evento-barcelona-mayo-2025"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/comunidadData.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DataConnect: Una tarde épica de comunidad tech en Barcelona"
        />
        <meta
          name="twitter:description"
          content="Revive los mejores momentos del evento DataConnect: charlas inspiradoras, networking con DJ y una comunidad diversa apasionada por el mundo data."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/comunidadData.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-06-02T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Eventos Tech" />
        <meta property="article:tag" content="DataConnect" />
        <meta property="article:tag" content="Eventos" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="Big Data" />
        <meta property="article:tag" content="Comunidad" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/Eventos2025/comunidadData.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/Eventos2025/comunidadData.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/Eventos2025/comunidadData.webp"
            alt="DataConnect Barcelona - Evento tech en InfoJobs con más de 70 personas de la comunidad data"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        🎬 Revive la magia del DataConnect:<br/>una tarde que marcó la diferencia
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
          ¿Te perdiste nuestro evento DataConnect? No te preocupes, lo tenemos todo capturado en este video que resume una jornada épica de comunidad, aprendizaje y networking que nos llenó el corazón.
        </p>
        
             <div
          className="example-image"
          style={{ textAlign: "center", margin: "30px 0" }}
        >
          {/* Video del evento DataConnect incrustado */}
          <video
            controls
            width="100%"
            style={{
              maxWidth: "800px",
              height: "auto",
              marginLeft:"10%",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
            }}
            poster="/assets/eventos/dataconnect-thumbnail.jpg"
          >
            <source src="/videoDataConnect-evento-femCodersClub.mp4" type="video/mp4" />
            <p style={{ fontSize: "18px", color: "#666", padding: "20px" }}>
              Tu navegador no soporta la reproducción de video HTML5.
            </p>
          </video>
          <p style={{ 
            fontSize: "14px", 
            color: "#888", 
            fontStyle: "italic",
            marginTop: "10px" 
          }}>
            📹 Revive los mejores momentos del DataConnect Barcelona
          </p>
        </div>
        
        <p>
          El pasado <strong>28 de mayo</strong>, las oficinas de <strong>InfoJobs</strong> en Barcelona se transformaron en el epicentro de la innovación data. Más de <strong>70 personas apasionadas</strong> por el Big Data, análisis y visualización de datos se reunieron para vivir una experiencia única que quedará en nuestros corazones para siempre.
        </p>
      </div>

      <div className="highlight-box">
        <h2>🌟 Lo que vivimos</h2>
        
        <h3>🎤 Charlas que inspiraron</h3>
        <br />
        <p>
          <strong>Muntsa Padró</strong>, <strong>Laura Pourtier</strong>, <strong>Kevin Badia Carballo</strong> y <strong>Pia Trnovec</strong> compartieron sus experiencias reales desde{" "}
          <a 
            href="https://www.infojobs.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="highlight-link"
          >
            InfoJobs
          </a>, {" "}
          <a 
            href="https://www.lewagon.com/es" 
            target="_blank" 
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Le Wagon
          </a> y {" "}
          <a 
            href="https://glovoapp.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Glovo
          </a>. Historias auténticas de profesionales que están liderando el cambio en el mundo data, contadas desde el corazón y con esa honestidad que solo sucede en comunidad.
        </p>
<br />
        <h3>🎵 Networking con energía</h3>
        <br />
       <p>
          Con{" "}
          <a 
            href="https://www.linkedin.com/in/karisha-mel%C3%A9ndez/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Karisha Meléndez como DJ
          </a>, <strong>Live Coding</strong> y esa conexión especial que solo sucede cuando personas con la misma pasión se encuentran. Hubo risas, intercambio de contactos, ideas que nacieron en conversaciones espontáneas y esos momentos mágicos donde sientes que estás exactamente donde debes estar.
        </p>
<br />
        <h3>👥 Comunidad diversa</h3>
        <br />
        <p>
          El ingrediente secreto que hace que estos espacios sean únicos y transformadores. Desde estudiantes dando sus primeros pasos en data hasta profesionales con experiencia, todas las personas con ganas de aprender, compartir y crecer en comunidad.
        </p>
      </div>

       <div className="highlight-box">
        <h2>📚 ¿Quieres profundizar más?</h2>
        
        <p>
          Si las charlas del video te dejaron con ganas de más, tenemos algo especial para ti. Puedes acceder a las <strong>presentaciones completas</strong> de Le Wagon y Glovo en nuestro repositorio de recursos:
        </p>
        
        <div style={{
          textAlign: "center",
          margin: "25px 0",
          padding: "20px",
          backgroundColor: "rgba(138, 43, 226, 0.1)",
          borderRadius: "10px",
          border: "2px solid #8a2be2"
        }}>
          <a
            href="https://www.femcodersclub.com/presentaciones-destacadas"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#8a2be2",
              color: "white",
              padding: "15px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              transition: "all 0.3s ease",
              marginRight: "15px",
              marginBottom: "10px"
            }}
          >
            📊 Ver presentaciones destacadas
          </a>
          <a
            href="/register"
            style={{
              display: "inline-block",
              backgroundColor: "#4737bb",
              color: "white",
              padding: "15px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              transition: "all 0.3s ease",
              marginBottom: "10px"
            }}
          >
            👩‍💻 Únete a FemCoders Club
          </a>
        </div>
        
        <p>
          Allí encontrarás los slides completos, recursos adicionales y todo el material que compartieron quienes presentaron. <strong>¿Aún no eres parte de la comunidad?</strong> Regístrate gratis para acceder a recursos exclusivos, eventos futuros y conectar con una red increíble de personas apasionadas por la tecnología.
        </p>
      </div>

      <div className="highlight-box">
        <h2>📸 Momentos que quedarán para siempre</h2>
        
        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">🎯 Highlights del evento</h5>
            <br />
            <ul>
              <li><strong>70+ profesionales</strong> del mundo data reunidos en un solo lugar</li>
              <li><strong>4 speakers inspiradores</strong> compartiendo experiencias reales</li>
              <li><strong>Live Coding en vivo</strong> que dejó a todo el mundo con la boca abierta</li>
              <li><strong>Networking orgánico</strong> con conversaciones que nacieron naturalmente</li>
              <li><strong>DJ set</strong> que creó el ambiente perfecto para conectar</li>
            </ul>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">🤝 Nuestros increíbles aliados</h5>
            <br />
            <ul>
              <li><strong>InfoJobs:</strong> Nos abrió las puertas de sus increíbles oficinas</li>
              <li><strong>Le Wagon Spain:</strong> Compartió expertise en coding y formación</li>
              <li><strong>Glovo:</strong> Nos mostró cómo usan data para mejorar vidas</li>
              <li><strong>FemCoders Club:</strong> Tejió la red que hizo posible esta magia</li>
            </ul>
          </div>
        </div>

        <div style={{
          backgroundColor: "rgba(0, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #00ffff"
        }}>
          <p style={{ margin: "0", fontStyle: "italic" }}>
            <strong>💭 "Eventos como este me recuerdan por qué amo tanto el mundo tech. La energía, las conexiones auténticas, las ganas de seguir creciendo... ¡Esto es comunidad de verdad!"</strong> - Participante del DataConnect
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>💜 Gracias infinitas</h2>
        
        <p>
          A cada persona que hizo posible esta jornada: equipo organizador que trabajó incansablemente, speakers que compartieron su sabiduría con generosidad, equipo voluntario que estuvo en cada detalle, empresas colaboradoras que creyeron en la visión, y especialmente a cada una de las 70+ personas que vinieron con ganas de aprender, compartir y conectar.
        </p>
<br />
        <p>
          <strong>Y seguimos adelante con más fuerza que nunca.</strong> Continuamos trabajando para crear más espacios donde el talento diverso tenga visibilidad, oportunidades y, sobre todo, esa sensación de pertenencia que tanto necesitamos en el mundo tech.
        </p>
<br />
        <div className="table-container">
          <table className="framework-comparison-table">
            <thead>
              <tr>
                <th>Lo que nos llevamos</th>
                <th>Lo que construimos</th>
                <th>Lo que viene</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conocimientos técnicos</td>
                <td>Nuevas conexiones</td>
                <td>Más eventos épicos</td>
              </tr>
              <tr>
                <td>Inspiración renovada</td>
                <td>Confianza en comunidad</td>
                <td>Colaboraciones futuras</td>
              </tr>
              <tr>
                <td>Herramientas prácticas</td>
                <td>Red de apoyo</td>
                <td>Oportunidades laborales</td>
              </tr>
              <tr>
                <td>Energía positiva</td>
                <td>Sentido de pertenencia</td>
                <td>Crecimiento profesional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="highlight-box">
        <h2>🚀 ¿Te unes a la próxima aventura?</h2>
        
        <p>
          Si este post te emocionó tanto como a nosotros nos emocionó vivir el evento, tenemos noticias increíbles: esto es solo el comienzo. En FemCoders Club estamos preparando más eventos, workshops y oportunidades para que nuestra comunidad siga creciendo y brillando.
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
            💫 Mantente conectado con nosotros
          </h3>
          <p>
            Síguenos en nuestras redes, únete a nuestro Slack y sé la primera persona en enterarte de próximos eventos que van a volar tu mente.
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
            💬 Únete al Slack
          </a>
          <a
            href="/eventos"
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
            📅 Ver próximos eventos
          </a>
          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px", marginBottom: 0, color: "#2a2170" }}>
            La comunidad tech más inspiradora te está esperando. ¡Ven a brillar con nosotros! ✨
          </p>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Equipo FemCoders Club</strong>
        </p>
        <p>Con amor desde Barcelona 💜</p>
        <p>
          Fecha de publicación: <strong>2 de junio, 2025</strong>
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

export default DataConnectEvento;