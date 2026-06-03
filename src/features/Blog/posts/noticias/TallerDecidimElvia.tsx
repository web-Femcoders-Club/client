import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaSlack, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CommentsSection from "../../components/CommentsSection";
import "../../page/PostStyles.css";

const TallerDecidimElvia: React.FC = () => {
  const currentUrl = window.location.href;
  const postId = 41;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          Dentro de Decidim: lo que aprendimos explorando su arquitectura con
          Ruby on Rails | FemCoders Club
        </title>
        <meta
          name="description"
          content="El 27 de mayo nos reunimos en el Canòdrom para explorar Decidim por dentro con Elvia Benedith (Pokecode). Docker, Ruby on Rails, arquitectura modular y una comunidad con ganas de aprender y contribuir al open source."
        />
        <meta
          name="keywords"
          content="Decidim, Ruby on Rails, open source, taller programación Barcelona, FemCoders Club, Canòdrom, Elvia Benedith, Pokecode, participación ciudadana, tecnología cívica, contribuir open source, mujeres tecnología Barcelona"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/taller-decidim-elvia"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Dentro de Decidim: lo que aprendimos explorando su arquitectura con Ruby on Rails | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Crónica del taller práctico sobre Decidim en el Canòdrom: entorno local, arquitectura Rails, personalización y comunidad."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/taller-decidim-elvia"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/taller-decidim-elvia.jpeg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dentro de Decidim: lo que aprendimos explorando su arquitectura con Ruby on Rails"
        />
        <meta
          name="twitter:description"
          content="Taller práctico sobre Decidim en el Canòdrom con Elvia Benedith (Pokecode). Docker, Rails, arquitectura modular y open source."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/taller-decidim-elvia.jpeg"
        />

        <meta
          property="article:published_time"
          content="2026-06-03T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Decidim" />
        <meta property="article:tag" content="Ruby on Rails" />
        <meta property="article:tag" content="Open Source" />
        <meta property="article:tag" content="Canòdrom" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

      {/* ── Hero image ── */}
      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/noticias/taller-decidim-elvia.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/noticias/taller-decidim-elvia.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/noticias/taller-decidim-elvia.webp"
            alt="Taller de Decidim en el Canòdrom con Elvia Benedith — FemCoders Club, mayo 2026"
            className="blog-post-image"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/assets/noticias/taller-decidim-elvia.jpeg";
              (e.target as HTMLImageElement).onerror = null;
            }}
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Dentro de Decidim: lo que aprendimos explorando su arquitectura con
        Ruby on Rails
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
            aria-label="Compartir en Twitter"
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

      {/* ── Intro ── */}
      <div className="intro-text">
        <p>
          El pasado 27 de mayo nos reunimos en el{" "}
          <strong>Canòdrom de Barcelona</strong> para explorar una de las
          plataformas de participación ciudadana más importantes del ecosistema
          open source:{" "}
          <a
            href="https://decidim.org"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Decidim
          </a>
          .
        </p>
        <br />
        <p>
          De la mano de{" "}
          <strong>Elvia Benedith</strong> de{" "}
          <a
            href="https://pokecode.net"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Pokecode
          </a>{" "}
          y junto a personas con perfiles muy diversos, dedicamos una mañana a
          descubrir cómo funciona la plataforma por dentro, cómo levantar un
          entorno local y qué posibilidades ofrece para quienes desean
          contribuir o personalizar sus instalaciones.
        </p>
        <br />
        <p>
          No fue un taller de diapositivas. Fue un taller de terminal abierta,
          preguntas reales y aprendizaje compartido.
        </p>
      </div>

      {/* ── 1. Qué es Decidim ── */}
      <div className="highlight-box">
        <h2>¿Qué es Decidim y por qué importa?</h2>
        <br />
        <p>
          Decidim es una plataforma de{" "}
          <strong>participación ciudadana digital</strong> nacida en Barcelona,
          construida como software libre y utilizada hoy por ayuntamientos,
          universidades y organizaciones de todo el mundo. La ciudad de
          Barcelona, Helsinki, la Comisión Europea y decenas de instituciones
          más la usan para articular procesos participativos reales: presupuestos
          participativos, consultas ciudadanas, planes estratégicos.
        </p>
        <br />
        <p>
          Lo que la hace especialmente interesante desde el punto de vista
          técnico es que{" "}
          <strong>
            toda esa infraestructura de democracia digital está construida en
            Ruby on Rails
          </strong>
          , con una arquitectura modular que permite a cualquier organización
          personalizar, extender y contribuir al proyecto.
        </p>
        <br />
        <p>
          Para muchas de las asistentes, Decidim era una caja negra: algo que
          habían visto en las webs municipales pero nunca desde dentro. Ese fue
          exactamente el punto de partida del taller.
        </p>
      </div>

      {/* ── 2. El entorno ── */}
      <div className="highlight-box">
        <h2>Lo que pasó cuando levantamos Decidim en local</h2>
        <br />
        <p>
          La primera parte del taller fue práctica desde el minuto uno: levantar
          un entorno de desarrollo local con{" "}
          <strong>Docker, Git y VS Code</strong>. Porque entender una plataforma
          de verdad empieza por tenerla corriendo en tu máquina.
        </p>
        <br />
        <p>
          Elvia y el equipo de{" "}
          <a
            href="https://pokecode.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Pokecode
          </a>{" "}
          estuvieron atentas a cualquier duda o incidencia que pudiera surgir,
          resolviendo cada situación con una calma y una claridad que se nota
          solo en quien entiende la tecnología desde dentro. Explicaron el porqué
          de cada paso, no solo el cómo.
        </p>
      </div>

      {/* ── 3. Arquitectura ── */}
      <div className="highlight-box">
        <h2>Entendiendo la arquitectura: Rails, módulos y componentes</h2>
        <br />
        <p>
          Una vez el entorno estaba en marcha, llegó la parte más reveladora: ver
          cómo está organizado Decidim por dentro.
        </p>
        <br />
        <p>
          La arquitectura de Decidim se basa en{" "}
          <strong>motores de Ruby on Rails</strong>. Cada funcionalidad
          —procesos participativos, consultas, presupuestos, iniciativas
          ciudadanas— vive en su propio módulo, relativamente independiente del
          núcleo. Esto tiene una implicación directa: puedes activar o desactivar
          funcionalidades, personalizarlas o crear las tuyas propias sin tocar el
          código central del proyecto.
        </p>
        <br />
        <p>
          Vimos cómo modificar vistas, cómo entender el flujo de datos entre
          componentes y cómo experimentar con la plataforma sin poner en riesgo
          ninguna instalación real. El entorno local era exactamente para eso:
          para romper cosas sin miedo y entender qué pasa cuando lo haces.
        </p>
        <br />
        <p>
          Para quienes no habían trabajado antes con Rails, fue una introducción
          muy tangible: no como framework abstracto, sino como la estructura
          concreta que sostiene una plataforma que millones de personas usan para
          ejercer su participación democrática.
        </p>
      </div>

      {/* ── 4. El momento que sorprendió ── */}
      <div className="highlight-box">
        <h2>El momento que lo cambió todo</h2>
        <br />
        <p>
          Hubo un momento en el taller que se notó en la sala.
        </p>
        <br />
        <p>
          Fue cuando varias personas se dieron cuenta de que detrás de una
          plataforma utilizada por instituciones de todo el mundo —por
          ayuntamientos, por la Comisión Europea, por universidades— existe una
          arquitectura <strong>accesible para cualquier desarrolladora</strong>{" "}
          que quiera aprender, experimentar o contribuir.
        </p>
        <br />
        <p>
          No hacía falta ser experta en Ruby on Rails ni tener años de
          experiencia en open source. Hacía falta curiosidad, un entorno
          funcionando y alguien que te explicara por dónde empezar. Y eso es
          exactamente lo que Elvia trajo ese día.
        </p>
        <br />
        <p>
          Ese es el tipo de momento que nos recuerda por qué organizamos este
          tipo de talleres: porque hay tecnología con impacto real en la
          sociedad que merece ser conocida, explorada y mejorada por más personas,
          y en particular por más mujeres.
        </p>
      </div>

      {/* ── 5. Comunidad ── */}
      <div className="highlight-box">
        <h2>Aprender en comunidad: lo que no se puede replicar online</h2>
        <br />
        <p>
          Más allá del código, el taller volvió a demostrar algo que vemos
          constantemente en FemCoders Club: aprender en comunidad acelera el
          aprendizaje.
        </p>
        <br />
        <p>
          Durante la sesión surgieron preguntas técnicas que abrieron hilos de
          conversación sobre tecnología cívica, sobre las diferencias entre
          contribuir a proyectos institucionales y a proyectos puramente
          comunitarios, sobre el ecosistema Ruby en España, sobre cómo empezar
          a contribuir a open source cuando sientes que aún no estás lista.
        </p>
        <br />
        <p>
          Esa última conversación fue especialmente interesante. Porque la
          respuesta corta es: nunca se está del todo lista, y ese es precisamente
          el momento de empezar. Y tener a alguien como Elvia en la sala,
          contando su propia experiencia, hace que esa respuesta pese diferente.
        </p>
        <br />
        <p>
          El Canòdrom, como espacio, acompañó perfectamente: mesas largas donde
          cabía la colaboración, luz natural, y ese ambiente que tiene cuando la
          gente lleva los portátiles en serio y no de adorno.
        </p>
      </div>

      {/* ── Repositorio ── */}
      <div className="highlight-box">
        <h2>¿Quieres seguir explorando? Clona el repositorio</h2>
        <br />
        <p>
          Elvia mantiene{" "}
          <a
            href="https://github.com/openpoke/decidim-hacks"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            decidim-hacks
          </a>
          , un repositorio con ejemplos prácticos, personalizaciones y hacks
          útiles para quien quiera adentrarse en el ecosistema Decidim. Es un
          punto de partida mucho más accesible que empezar desde cero con la
          documentación oficial.
        </p>
        <br />
        <p>
          Si el taller te despertó curiosidad y quieres trastear por tu
          cuenta, este es el sitio:
        </p>
        <br />
        <a
          href="https://github.com/openpoke/decidim-hacks"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#2a2170",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem",
          }}
        >
          <FaGithub />
          openpoke/decidim-hacks
        </a>
      </div>

      {/* ── 6. Gracias ── */}
      <div className="highlight-box">
        <h2>Gracias, Elvia</h2>
        <br />
        <p>
          Queremos agradecer especialmente a{" "}
          <a
            href="https://www.linkedin.com/in/elvia-benedith/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            <strong>Elvia Benedith</strong>
          </a>{" "}
          y al equipo de{" "}
          <a
            href="https://pokecode.net"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Pokecode
          </a>{" "}
          por compartir su experiencia, preparar el entorno de trabajo y
          acercarnos al ecosistema Decidim desde una perspectiva práctica y
          cercana.
        </p>
        <br />
        <p>
          También gracias al{" "}
          <a
            href="https://canodrom.barcelona"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Canòdrom
          </a>{" "}
          por acoger este encuentro y a todas las personas que participaron con
          curiosidad, preguntas y ganas de aprender.
        </p>
        <br />
        <p>
          Este tipo de taller solo funciona cuando hay alguien que comparte lo
          que sabe sin guardarse nada. Elvia lo hizo, y se notó.
        </p>
      </div>

      {/* ── Cierre ── */}
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
            El conocimiento crece cuando se comparte
          </h3>
          <p>
            En FemCoders Club creemos que el código con impacto real en la
            sociedad merece ser conocido, explorado y mejorado por más personas.
          </p>
          <br />
          <p>
            Este taller nos permitió acercarnos a una tecnología que sostiene
            procesos democráticos en todo el mundo y descubrir que contribuir al
            software libre está más cerca de lo que parece.
          </p>
          <br />
          <p>
            Esperamos seguir creando espacios donde la tecnología, la
            colaboración y el aprendizaje abierto se encuentren.
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
            Únete a la comunidad
          </a>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>3 de junio, 2026</strong>
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

export default TallerDecidimElvia;
