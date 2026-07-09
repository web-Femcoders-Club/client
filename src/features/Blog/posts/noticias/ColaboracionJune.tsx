import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CommentsSection from "../../components/CommentsSection";
import "../../page/PostStyles.css";

const ColaboracionJune: React.FC = () => {
  const currentUrl = window.location.href;
  const postId = 44;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          FemCoders Club colabora en el desarrollo de June, una plataforma
          contra la violencia digital de género | FemCoders Club
        </title>
        <meta
          name="description"
          content="FemCoders Club se suma como equipo de desarrollo al proyecto June, impulsado por la asociación In CoDe, una plataforma para documentar la violencia política de género y la censura digital en España."
        />
        <meta
          name="keywords"
          content="June, In CoDe, violencia digital de género, violencia política de género, censura digital, FemCoders Club, tecnología feminista, mujeres en tecnología, desarrollo web con impacto social"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/colaboracion-june"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club colabora en el desarrollo de June, una plataforma contra la violencia digital de género | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Nos sumamos como equipo de desarrollo al proyecto June, de la asociación In CoDe, para documentar la violencia política de género y la censura digital en España."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/colaboracion-june"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/colaboracion-june.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club colabora en el desarrollo de June, una plataforma contra la violencia digital de género"
        />
        <meta
          name="twitter:description"
          content="Nos sumamos como equipo de desarrollo al proyecto June, de la asociación In CoDe, para documentar la violencia política de género y la censura digital en España."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/colaboracion-june.png"
        />

        <meta
          property="article:published_time"
          content="2026-07-05T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="June" />
        <meta property="article:tag" content="In CoDe" />
        <meta property="article:tag" content="Violencia Digital de Género" />
        <meta property="article:tag" content="Tecnología Feminista" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "FemCoders Club colabora en el desarrollo de June, una plataforma contra la violencia digital de género",
            description:
              "FemCoders Club se suma como equipo de desarrollo al proyecto June, impulsado por la asociación In CoDe, una plataforma para documentar la violencia política de género y la censura digital en España.",
            image:
              "https://www.femcodersclub.com/assets/noticias/colaboracion-june.png",
            datePublished: "2026-07-05T10:00:00Z",
            dateModified: "2026-07-05T10:00:00Z",
            inLanguage: "es-ES",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.femcodersclub.com/noticias/colaboracion-june",
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
              "@type": "Organization",
              name: "In CoDe",
              url: "https://www.incodeong.org/",
              foundingDate: "2024",
              areaServed: "ES",
              description:
                "Organización feminista y tecnopolítica dedicada a repensar los procesos democráticos para garantizar la participación activa y transformadora de las mujeres en la toma de decisiones políticas.",
            },
            contributor: [
              {
                "@type": "Person",
                name: "Irina Ichim",
                jobTitle: "Arquitecta de software y desarrolladora fullstack",
                sameAs:
                  "https://www.linkedin.com/in/irina-ichim-desarrolladora/",
              },
              {
                "@type": "Person",
                name: "Gabriela Bustamante",
                jobTitle: "Desarrolladora backend",
                sameAs: "https://www.linkedin.com/in/gabriela-bustamante-/",
              },
              {
                "@type": "Person",
                name: "Elvia Benedith",
                jobTitle: "Ingeniera civil y desarrolladora web",
                sameAs: "https://www.linkedin.com/in/elvia-benedith/",
              },
              {
                "@type": "Person",
                name: "Silvina Lucero Calderón",
                jobTitle: "QA funcional",
                sameAs: "https://www.linkedin.com/in/silvina-lucero/",
              },
            ],
            keywords: [
              "June",
              "In CoDe",
              "violencia digital de género",
              "violencia política de género",
              "censura digital",
              "FemCoders Club",
              "tecnología feminista",
            ],
          })}
        </script>
      </Helmet>

      {/* ── Hero image ── */}
      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/noticias/colaboracion-june.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/noticias/colaboracion-june.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/noticias/colaboracion-june.webp"
            alt="FemCoders Club colabora en el desarrollo de June, plataforma de In CoDe contra la violencia digital de género"
            className="blog-post-image"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/assets/noticias/colaboracion-june.png";
              (e.target as HTMLImageElement).onerror = null;
            }}
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        FemCoders Club colabora en el desarrollo de June, una plataforma para
        documentar la violencia digital y política de género
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
          Tenemos una noticia que nos hace mucha ilusión compartir: FemCoders
          Club se incorpora como equipo de desarrollo al proyecto{" "}
          <strong>June</strong>, impulsado por la asociación{" "}
          <a
            href="https://www.incodeong.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            <strong>In CoDe</strong>
          </a>
          . Antes de nada, queremos agradecer a In CoDe la confianza que ha
          depositado en nuestra comunidad para dar forma técnica a un proyecto
          tan necesario — no es una colaboración cualquiera, y lo sabemos.
        </p>
        <br />
        <p>
          June es una plataforma pensada para recopilar, organizar y
          visibilizar información sobre <strong>violencia política de género</strong> y{" "}
          <strong>censura digital</strong> en España.
        </p>
      </div>

      {/* ── 1. Quién es In CoDe ── */}
      <div className="highlight-box">
        <h2>Quién está detrás: In CoDe</h2>
        <br />
        <p>
          <a
            href="https://www.incodeong.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            In CoDe
          </a>{" "}
          es una organización feminista y tecnopolítica, fundada en 2024 y con
          sede en España, dedicada a repensar los procesos democráticos para
          garantizar la participación activa y transformadora de las mujeres en
          la toma de decisiones políticas, con la inteligencia artificial y la
          tecnología como aliadas estratégicas.
        </p>
        <br />
        <p>
          Su misión es crear espacios de participación ciudadana accesibles e
          inclusivos que impulsen la educación cívica digital y aseguren que la
          innovación tecnológica no reproduzca las desigualdades estructurales
          de género.
        </p>
      </div>

      {/* ── 2. Qué es June ── */}
      <div className="highlight-box">
        <h2>Por qué existe June</h2>
        <br />
        <p>
          La iniciativa nace de una necesidad muy concreta: gran parte de las
          experiencias de violencia digital hacia las mujeres quedan dispersas
          entre redes sociales, investigaciones aisladas y testimonios
          individuales, sin un espacio común donde documentarlas de forma
          ordenada y accesible.
        </p>
        <br />
        <p>
          June busca cubrir ese vacío: una herramienta que combine rigor
          técnico con una atención muy cuidadosa a la privacidad de las
          personas que aportan su experiencia.
        </p>
      </div>

      {/* ── 3. Stack técnico ── */}
      <div className="highlight-box">
        <h2>Cómo está construida June: un stack pensado para la privacidad</h2>
        <br />
        <p>
          June es una aplicación <strong>React</strong> escrita en{" "}
          <strong>TypeScript</strong> en modo estricto, construida sobre{" "}
          <strong>Next.js</strong> con App Router. Los estilos se apoyan en{" "}
          <strong>Tailwind CSS</strong> sobre un design system propio de
          tokens, y la interfaz está disponible en castellano y catalán.
        </p>
        <br />
        <p>
          No hay un backend separado: el mismo TypeScript se ejecuta en el
          servidor mediante Server Components, y la capa de datos se apoya en{" "}
          <strong>PostgreSQL</strong> a través de <strong>Prisma</strong>. Una
          sola base de código, un solo lenguaje, menos superficie donde algo
          pueda desalinearse.
        </p>
        <br />

        <h3>La parte más interesante: mapas sin mapas</h3>
        <br />
        <p>
          Aquí viene la decisión de la que más orgullosas estamos.{" "}
          <strong>
            June no usa ninguna librería de mapas ni de gráficos.
          </strong>{" "}
          Ni Leaflet, ni Mapbox, ni Chart.js. El mapa de España se proyecta a
          SVG en el servidor con <strong>d3-geo</strong> y{" "}
          <strong>topojson-client</strong>, a partir de las topologías
          abiertas de <strong>es-atlas</strong>. Los gráficos de barras y las
          series temporales están escritos a mano, directamente en SVG.
        </p>
        <br />
        <p>
          Esto no es purismo técnico. Un mapa convencional carga sus imágenes
          desde los servidores de un tercero, lo que significa que ese tercero
          puede ver qué zonas del mapa consulta cada visitante. En una
          plataforma sobre violencia política de género, eso es inaceptable:
          revelaría el rastro de una mujer consultando datos sobre su propia
          provincia.
        </p>
        <br />
        <p>
          Al generar el SVG en el servidor,{" "}
          <strong>
            el navegador de quien visita June no hace ni una sola petición a
            servidores externos
          </strong>
          . Nadie fuera del proyecto puede observar qué consulta. Es una
          decisión de privacidad antes que una decisión de arquitectura.
        </p>
      </div>

      {/* ── 4. Equipo ── */}
      <div className="highlight-box">
        <h2>El equipo detrás del desarrollo</h2>
        <br />
        <p>Estas son las FemCoders que están dando forma a June:</p>
        <br />
        <ul>
          <li className="creator-item">
            <div className="creator-content">
              <picture>
                <source
                  srcSet="/public-optimized/mobile/assets/equipoFemCodersClub/Irina-Ichim-fundadora-femCodersClub.webp"
                  media="(max-width: 768px)"
                />
                <source
                  srcSet="/public-optimized/desktop/assets/equipoFemCodersClub/Irina-Ichim-fundadora-femCodersClub.webp"
                  media="(min-width: 769px)"
                />
                <img
                  src="/assets/equipoFemCodersClub/Irina-Ichim-fundadora-femCodersClub.png"
                  alt="Irina Ichim, fundadora de FemCoders Club"
                  className="creator-avatar"
                  loading="lazy"
                />
              </picture>
              <div>
                <a
                  href="https://www.linkedin.com/in/irina-ichim-desarrolladora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  <strong>Irina Ichim</strong>
                </a>
                <p>
                  Fundadora de FemCoders Club. Fullstack y arquitecta de
                  software especializada en la creación de productos
                  digitales end-to-end, con un enfoque claro en proyectos
                  AI-first, automatización y sistemas escalables orientados a
                  impacto real.
                </p>
              </div>
            </div>
          </li>

          <li className="creator-item">
            <div className="creator-content">
              <picture>
                <source
                  srcSet="/public-optimized/mobile/assets/noticias/Gabriela-Bustamante-desarrolladora-backend.webp"
                  media="(max-width: 768px)"
                />
                <source
                  srcSet="/public-optimized/desktop/assets/noticias/Gabriela-Bustamante-desarrolladora-backend.webp"
                  media="(min-width: 769px)"
                />
                <img
                  src="/assets/noticias/Gabriela-Bustamante-desarrolladora-backend.png"
                  alt="Gabriela Bustamante, desarrolladora backend en el proyecto June"
                  className="creator-avatar"
                  loading="lazy"
                />
              </picture>
              <div>
                <a
                  href="https://www.linkedin.com/in/gabriela-bustamante-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  <strong>Gabriela Bustamante</strong>
                </a>
                <p>
                  Desarrolladora backend con una mirada analítica, cuidadosa y
                  orientada a construir soluciones seguras, mantenibles y con
                  sentido. En June ha trabajado desde la arquitectura y la
                  lógica de servidor, cuidando especialmente la calidad
                  técnica, la privacidad de los datos y la coherencia del
                  producto. Le interesa crear tecnología robusta que acompañe
                  proyectos con impacto real.
                </p>
              </div>
            </div>
          </li>

          <li className="creator-item">
            <div className="creator-content">
              <picture>
                <source
                  srcSet="/public-optimized/mobile/assets/equipoFemCodersClub/Elvia-Benedith-fundadora-femCodersClub.webp"
                  media="(max-width: 768px)"
                />
                <source
                  srcSet="/public-optimized/desktop/assets/equipoFemCodersClub/Elvia-Benedith-fundadora-femCodersClub.webp"
                  media="(min-width: 769px)"
                />
                <img
                  src="/assets/equipoFemCodersClub/Elvia-Benedith-fundadora-femCodersClub.png"
                  alt="Elvia Benedith, cofundadora de FemCoders Club"
                  className="creator-avatar"
                  loading="lazy"
                />
              </picture>
              <div>
                <a
                  href="https://www.linkedin.com/in/elvia-benedith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  <strong>Elvia Benedith</strong>
                </a>
                <p>
                  Ingeniera Civil y desarrolladora web, cofundadora de
                  FemCoders Club. Se considera una crafter o «manitas»: le
                  encanta leer manuales, instalar cosas, programar y pensar.
                  Es una persona muy observadora, siempre buscando aprender y
                  mejorar continuamente.
                </p>
              </div>
            </div>
          </li>

          <li className="creator-item">
            <div className="creator-content">
              <picture>
                <source
                  srcSet="/public-optimized/mobile/assets/noticias/Silvina-Lucero-QA-funcional.webp"
                  media="(max-width: 768px)"
                />
                <source
                  srcSet="/public-optimized/desktop/assets/noticias/Silvina-Lucero-QA-funcional.webp"
                  media="(min-width: 769px)"
                />
                <img
                  src="/assets/noticias/Silvina-Lucero-QA-funcional.png"
                  alt="Silvina Lucero Calderón, cofundadora de FemCoders Club"
                  className="creator-avatar"
                  loading="lazy"
                />
              </picture>
              <div>
                <a
                  href="https://www.linkedin.com/in/silvina-lucero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  <strong>Silvina Lucero Calderón</strong>
                </a>
                <p>
                  Cofundadora de FemCoders Club. QA funcional, cree en el
                  poder de la tecnología para transformar vidas de forma
                  positiva. Su compromiso con el aprendizaje continuo la
                  impulsa a seguir creciendo para contribuir al desarrollo de
                  soluciones digitales más inclusivas, accesibles y de
                  calidad.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* ── Cierre ── */}
      <div className="highlight-box">
        <h2>Un proyecto que recién empieza</h2>
        <br />
        <p>
          El desarrollo se inició hace poco y avanza de forma progresiva, en
          estrecha coordinación con In CoDe. Iremos compartiendo novedades a
          medida que el proyecto tome forma.
        </p>
        <br />
        <p>
          Gracias de nuevo a In CoDe por confiar en FemCoders Club para esta
          colaboración. Es exactamente el tipo de proyecto por el que existe
          nuestra comunidad: tecnología con impacto real, hecha por mujeres,
          para causas que importan.
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
            ¿Quieres seguir de cerca cómo avanza June?
          </h3>
          <p>
            Iremos publicando actualizaciones a medida que el proyecto crezca.
            Si quieres formar parte de proyectos como este, únete a nuestra
            comunidad.
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
          Fecha de publicación: <strong>5 de julio, 2026</strong>
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

export default ColaboracionJune;
