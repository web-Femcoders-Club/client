import React from "react";
import { Helmet } from "react-helmet";
import "../../page/PostStyles.css";
import CommentsSection from "../../components/CommentsSection";

import ShareButtons from "../../components/ShareButtons";

const EntrevistaNadiaTesting: React.FC = () => {
  const postId = 20; 

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          Entrevista con Nadia Cavalleri: De psicóloga a líder en testing y QA | FemCoders Club
        </title>
        <meta
          name="description"
          content="Revive nuestra entrevista exclusiva con Nadia Soledad Cavalleri, experta en testing y QA. Descubre su transición profesional, consejos para el mundo tech y su visión sobre las mujeres en tecnología."
        />
        <meta
          name="keywords"
          content="Nadia Cavalleri, testing, QA, quality assurance, entrevista tech, mujeres en tecnología, FemCoders Club, psicología en tech, testing manual, automatización, shift-left testing, career change, testing exploratorio"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/EntrevistaNadiaTesting"
        />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Entrevista con Nadia Cavalleri: De psicóloga a líder en testing y QA"
        />
        <meta
          property="og:description"
          content="Una conversación inspiradora con una de las voces más influyentes en testing de Latinoamérica. Descubre su historia, consejos y visión del futuro del QA."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/EntrevistaNadiaTesting"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/nadiaCavalleri.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Entrevista con Nadia Cavalleri: De psicóloga a líder en testing y QA"
        />
        <meta
          name="twitter:description"
          content="Una historia inspiradora de transición profesional y liderazgo en el mundo del testing y la calidad de software."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/nadiaCavalleri.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-06-20T19:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Entrevistas Tech" />
        <meta property="article:tag" content="Testing" />
        <meta property="article:tag" content="QA" />
        <meta property="article:tag" content="Entrevistas" />
        <meta property="article:tag" content="Mujeres en Tech" />
        <meta property="article:tag" content="Career Change" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/Eventos2025/nadiaCavalleri.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/Eventos2025/nadiaCavalleri.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/Eventos2025/nadiaCavalleri.webp"
            alt="Nadia Soledad Cavalleri - Experta en testing y QA, entrevistada por FemCoders Club"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        🎙️ Nadia Cavalleri: "Soy perfeccionista,<br/>pero entendí que el testing es mucho más que encontrar errores"
      </h1>

      <ShareButtons path="/noticias/EntrevistaNadiaTesting" title="Entrevista con Nadia Cavalleri: De psicóloga a líder en testing y QA" />

      <div className="intro-text">
        <p>
          Anoche tuvimos el honor de conversar con <strong>Nadia Soledad Cavalleri</strong>, una de las voces más influyentes en el mundo del testing y QA en Latinoamérica y España. Su historia es inspiradora: de psicóloga a ingeniera, de novata en tech a líder internacional, creando contenido y abriendo caminos para miles de profesionales.
        </p>
        
        <div
          className="example-image"
          style={{ textAlign: "center", margin: "30px 0" }}
        >
          {/* Video de la entrevista completa */}
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/vG9hli0cFZc"
            title="Entrevista completa con Nadia Cavalleri - FemCoders Club"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}
          ></iframe>
          <p style={{ 
            fontSize: "14px", 
            color: "#888", 
            fontStyle: "italic",
            marginTop: "10px" 
          }}>
            🎥 Entrevista completa con Nadia Cavalleri en nuestro canal de YouTube
          </p>
        </div>
        
        <p>
          Con más de <strong>20 años de experiencia</strong> en testing, Nadia no solo es ingeniera en sistemas, sino también psicóloga, una combinación única que la ha convertido en una profesional excepcional. Es <strong>cofundadora de BoundLess</strong>, <strong>fundadora de Argentesting</strong>, creadora de contenido educativo y oradora internacional reconocida.
        </p>
      </div>

      <div className="highlight-box">
        <h2>👩‍💻 Su increíble recorrido profesional</h2>
        
        <h3>🔄 La combinación perfecta: psicología + ingeniería</h3>
        <br />
        <p>
          La verdadera magia de la formación dual de Nadia se reveló años más tarde. Como ella nos contó: <strong>"En los últimos años empecé a hacer sesiones de desarrollo profesional y simulacros de entrevista con seguidores y esos espacios fueron la combinación perfecta y natural, aquí yo puedo ayudar a las personas en su proceso de descubrimiento personal y profesional aportando mi experiencia de psicología al mismo tiempo que mis conocimientos de ingeniería"</strong>.
        </p>
<br />
        <h3>🌍 Una carrera internacional</h3>
        <br />
        <p>
          Nadia ha trabajado en múltiples países, acumulando experiencias que la han convertido en una profesional global. Su perspectiva internacional le permite entender diferentes enfoques culturales hacia la calidad de software y adaptarse a diversos equipos y metodologías.
        </p>
<br />
        <h3>🎯 Sobre la edad en el mundo tech</h3>
        <br />
        <p>
          Cuando le preguntamos sobre el perfil de una mamá de 40 años y cómo ve que se integre en el mundo de la tecnología en comparación con años atrás, Nadia fue muy clara: <strong>"Depende de cuántos años atrás estamos mirando, en sistemas no miramos mucho qué edad tiene la persona que estamos evaluando, en testing en particular y sistemas en general la edad no se mira"</strong>.
        </p>
      </div>



      <div className="highlight-box">
        <h2>💡 La evolución de Nadia: de perfeccionista a mentora</h2>
        
        <h3>🔍 Su descubrimiento del testing</h3>
        <br />
        <p>
          <strong>"Soy perfeccionista"</strong>, nos contó Nadia con una sonrisa. <strong>"En principio me atrapó esta parte de encontrar los errores, después entendí que es mucho más que esto"</strong>. Su historia es la de alguien que encontró en el testing la combinación perfecta: algo que le gusta naturalmente, que se le da bien, por lo que recibe felicitaciones y que se convirtió en su trabajo.
        </p>
<br />
        <h3>👥 Expandiendo su impacto: mentoría y desarrollo profesional</h3>
        <br />
        <p>
          En los últimos años, Nadia comenzó a hacer <strong>sesiones de desarrollo profesional y simulacros de entrevista con sus seguidores</strong>. Como ella misma dice: <em>"Esos espacios fueron la combinación perfecta y natural, aquí yo puedo ayudar a las personas en su proceso de descubrimiento personal y profesional, aportando mi experiencia de psicología al mismo tiempo que mis conocimientos de ingeniería"</em>.
        </p>

        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">🛠️ Sus herramientas favoritas</h5>
            <br />
            <ul>
              <li><strong>Framework de trabajo:</strong> Scrum para gestión ágil</li>
              <li><strong>Gestión de pruebas:</strong> Xray como herramienta principal de testing</li>
              <li><strong>Organización:</strong> Notion para documentación y seguimiento</li>
              <li><strong>Metodología:</strong> 5S para optimización de procesos</li>
              <li><strong>Ejecución:</strong> Herramientas para capturar pantallas y hacer videos</li>
            </ul>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">🌟 La fórmula del éxito según Nadia</h5>
            <br />
            <ul>
              <li><strong>Descubrir qué te gusta:</strong> Encontrar lo que te apasiona naturalmente</li>
              <li><strong>Desarrollar tus fortalezas:</strong> Potenciar aquello que se te da bien</li>
              <li><strong>Buscar reconocimiento:</strong> Validar que aportas valor real</li>
              <li><strong>Convertirlo en profesión:</strong> Transformar la pasión en carrera</li>
              <li><strong>Ayudar a otros:</strong> Compartir conocimiento y experiencia</li>
            </ul>
          </div>
        </div>

        <div style={{
          backgroundColor: "rgba(138, 43, 226, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #8a2be2"
        }}>
          <p style={{ margin: "0", fontStyle: "italic" }}>
            <strong>💭 "La combinación de psicología e ingeniería me permite ayudar a las personas en su proceso de descubrimiento personal y profesional"</strong> - Nadia Cavalleri
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>📚 Recursos y contenido de Nadia</h2>
        
        <p>
          Durante la entrevista, descubrimos que Nadia es una máquina de crear contenido educativo. Si quieres seguir aprendiendo de ella, aquí tienes todos sus canales:
        </p>

        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">🌐 Síguele en sus plataformas</h5>
            <br />
            <ul>
              <li><strong><a href="https://www.linkedin.com/in/ncavalleri/" target="_blank" rel="noopener noreferrer" className="highlight-link">LinkedIn</a>:</strong> Updates profesionales y insights de la industria</li>
              <li><strong><a href="https://nadiacavalleri.com.ar/" target="_blank" rel="noopener noreferrer" className="highlight-link">Web personal</a>:</strong> Recursos gratuitos y contenido premium</li>
              <li><strong><a href="https://www.youtube.com/@NadiaCavalleri" target="_blank" rel="noopener noreferrer" className="highlight-link">YouTube</a>:</strong> Tutoriales y charlas técnicas</li>
              <li><strong><a href="https://www.udemy.com/user/nadia-cavalleri-2/" target="_blank" rel="noopener noreferrer" className="highlight-link">Udemy</a>:</strong> Cursos completos de testing y QA</li>
              <li><strong><a href="https://www.instagram.com/nadia.cavalleri.test/" target="_blank" rel="noopener noreferrer" className="highlight-link">Instagram</a>:</strong> Tips rápidos y behind the scenes</li>
            </ul>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">📖 Sus cursos más populares</h5>
            <br />
            <ul>
              <li><strong>Introducción al Testing de Software:</strong> Perfecto para beginners</li>
              <li><strong>Testing Exploratorio:</strong> Técnicas avanzadas</li>
              <li><strong>API Testing con Postman:</strong> Pruebas de integración</li>
              <li><strong>Testing en Contextos Ágiles:</strong> Metodologías modernas</li>
              <li><strong>DevTools para Testers:</strong> Herramientas del navegador</li>
              <li><strong>🔥 Test Automation Engineering (NUEVO):</strong> Preparación para certificación - <a href="https://lnkd.in/dB72DXk4" target="_blank" rel="noopener noreferrer" className="highlight-link">Udemy</a> | <a href="https://lnkd.in/dUWgezky" target="_blank" rel="noopener noreferrer" className="highlight-link">Su sitio</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="highlight-box">
        <h2>🎉 Highlights de la entrevista</h2>
        
        <h3>📝 Preguntas desde nuestra comunidad</h3>
        <br />
        <p>
          Nuestra comunidad de FemCoders Club preparó preguntas increíbles que cubrieron todo el espectro de la experiencia de Nadia:
        </p>
<br />
        <div className="tools-container">
          <div className="recurso-item">
            <h5 className="tool-title">🎯 Sobre su recorrido profesional</h5>
            <br />
            <ul>
              <li>Su llegada al mundo del testing</li>
              <li>Lo que más la atrapó del rol de QA</li>
              <li>Cómo unificó psicología e ingeniería</li>
              <li>Su experiencia trabajando en múltiples países</li>
            </ul>
          </div>
          
          <div className="recurso-item">
            <h5 className="tool-title">🔧 Aspectos técnicos desde la comunidad</h5>
            <br />
            <ul>
              <li><strong>Shift-left testing:</strong> ¿Realmente funciona en la práctica?</li>
              <li><strong>Testing manual vs automatizado:</strong> ¿Cuál seguirá siendo más valioso?</li>
              <li><strong>Roadmaps para QA:</strong> Tanto para desarrollo como automatización</li>
              <li><strong>Futuro con IA:</strong> Qué habilidades blandas serán clave</li>
              <li><strong>¿Hay cabida para QA manual sin automatizar?</strong> Una duda muy común</li>
            </ul>
          </div>
        </div>
<br />
        <h3>🤔 ¿Es necesario automatizar para ser QA?</h3>
        <br />
        <p>
          Una pregunta clave de nuestra comunidad fue si hay cabida para QA de testing manual y analistas funcionales sin necesidad de automatizar. La respuesta de Nadia fue muy tranquilizadora: <strong>"Aporta mucho saber programar, ni siquiera automatizar pruebas, al menos para entender cómo es la lógica detrás de lo que estamos construyendo. No es imprescindible, pero sí es bueno saber automatizar. Hay más ramas, por ejemplo accesibilidad, por poner un ejemplo de uno donde puede ir sin necesidad de automatización"</strong>.
        </p>
<br />
        <h3>💡 Un consejo valioso para principiantes</h3>
        <br />
        <p>
          Uno de los momentos más reveladores fue cuando Nadia nos contó sobre <strong>un error muy común cuando empiezas en testing: "pensar en todo lo que puede fallar, y es un error. Primero pensemos cómo debe funcionar"</strong>. Un cambio de mindset que marca la diferencia entre un tester novato y uno experimentado.
        </p>

        <div style={{
          backgroundColor: "rgba(0, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          borderLeft: "4px solid #00ffff"
        }}>
          <p style={{ margin: "0", fontStyle: "italic" }}>
            <strong>🗣️ "Que se animen, que es un mundo fascinante, hay mucho contenido mío en el canal de YouTube, hay oportunidades, al principio cuesta un poco más, que no se detengan, que sean perseverantes"</strong> - Consejo de Nadia para las mujeres que se inician en testing
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <h2>💜 Gracias, Nadia</h2>
        
        <p>
          Esta entrevista nos llenó de inspiración y conocimiento. Nadia no solo compartió su expertise técnico, sino que nos recordó por qué la diversidad en tech es tan importante y cómo cada una de nosotras puede aportar valor único al mundo de la tecnología.
        </p>
<br />
        <p>
          Su generosidad al compartir conocimiento, su honestidad sobre los desafíos y su visión optimista del futuro del testing nos motivaron a seguir creciendo y apoyándonos mutuamente en esta comunidad increíble.
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
            🚀 ¿Te inspiró la historia de Nadia?
          </h3>
          <p>
            Comparte en los comentarios qué fue lo que más te resonó de la entrevista o cuéntanos si estás considerando dar el salto al mundo del testing.
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
            💜 Sé parte de la comunidad
          </a>
          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px", marginBottom: 0, color: "#2a2170" }}>
            ¡Gracias por ser parte de FemCoders Club! 💜
          </p>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Equipo FemCoders Club</strong>
        </p>
        <p>Con cariño desde nuestra comunidad 💜</p>
        <p>
          Fecha de publicación: <strong>20 de junio, 2025</strong>
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

export default EntrevistaNadiaTesting;