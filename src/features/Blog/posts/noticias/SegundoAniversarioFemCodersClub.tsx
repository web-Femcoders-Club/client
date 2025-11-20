import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaChartLine, FaFistRaised, FaGraduationCap, FaHandshake, FaHandsHelping, FaHeart, FaRocket, FaSlack, FaStar, FaTiktok, FaUsers } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../Blog/components/CommentsSection";
import "../../page/PostStyles.css";

const SegundoAniversarioFemCoders: React.FC = () => {
  const postId = 30;
  const publicationDate = "24 de octubre de 2025";
  const currentUrl = "https://www.femcodersclub.com/noticias/segundo-aniversario";

  return (
    <div className="blog-post">
      <Helmet>
        <title>Segundo Aniversario de FemCoders Club: Nuestra historia, nuestro equipo y el futuro tecnológico | FemCoders Club</title>
        <meta
          name="description"
          content="Celebramos 2 años de FemCoders Club: de un espacio seguro a una Asociación con +1.300 mujeres. Conoce nuestro equipo, logros y visión de futuro con IA y tecnología."
        />
        <meta
          name="keywords"
          content="FemCoders Club, aniversario, asociación mujeres tech, comunidad desarrolladoras, mentorías programación, eventos tech Barcelona, mujeres en tecnología, IA, inteligencia artificial"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/segundo-aniversario"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Segundo Aniversario de FemCoders Club: Nuestra historia, nuestro equipo y el futuro tecnológico"
        />
        <meta
          property="og:description"
          content="De un espacio seguro a una Asociación con +1.300 mujeres en tech. Celebramos 2 años de crecimiento, comunidad y futuro tecnológico."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/segundo-aniversario"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/segundoAniversario-femCodersClub.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Segundo Aniversario de FemCoders Club: Nuestra historia y futuro"
        />
        <meta
          name="twitter:description"
          content="Celebramos 2 años de FemCoders Club: +1.300 mujeres, +35 eventos, +30 empresas. Una Asociación que transforma el futuro tech."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/segundoAniversario-femCodersClub.webp"
        />
        <meta
          property="article:published_time"
          content="2025-10-24T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Comunidad" />
        <meta property="article:tag" content="Aniversario" />
        <meta property="article:tag" content="Comunidad" />
        <meta property="article:tag" content="Mujeres en Tech" />
        <meta property="article:tag" content="Asociación" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/Eventos2025/segundoAniversario-femCodersClub.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/Eventos2025/segundoAniversario-femCodersClub.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/Eventos2025/segundoAniversario-femCodersClub.webp"
            alt="Segundo Aniversario de FemCoders Club - Celebrando nuestra comunidad y logros"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Segundo Aniversario de FemCoders Club
      </h1>
      <br />
      <h2 >
        Nuestra historia, nuestro equipo y el futuro tecnológico que construimos
      </h2>

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
        El pasado 24 de octubre no fue un día más para nosotras. <strong>FemCoders Club cumplió dos años</strong>.
      </p>

      <p className="intro-text">
        Puede parecer poco tiempo, pero cuando miras atrás y ves todo lo que hemos construido, la sensación es de vértigo y emoción a partes iguales. Lo que nació de una necesidad personal y compartida —la de tener un <strong>espacio seguro</strong> donde <Link to="/femcoders-quienes-somos" className="highlight-link">mujeres en tecnología</Link> pudiéramos reunirnos, colaborar y crecer sin juicios— se ha transformado en una realidad tangible y sólida.
      </p>

      <p className="intro-text">
        No nacimos con un plan de negocios complejo. Nuestro objetivo era mucho más humano y necesario: crear un lugar donde derribar barreras y estereotipos a través de diálogos abiertos y apoyo mutuo. Hoy, ese espacio no solo se ha consolidado, sino que se ha convertido en un motor de cambio real para mujeres en tecnología.
      </p>

      <div className="highlight-box">
        <h2>
          <FaChartLine style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          El impacto en números: La fuerza de la comunidad
        </h2>
        
        <p>
          A veces es difícil dimensionar lo que hemos logrado hasta que lo vemos escrito. Estos números no son solo cifras; son pruebas de que la colaboración y la diversidad funcionan:
        </p>

        <ul>
          <li><strong>+1.300 mujeres</strong> forman parte activa de nuestra comunidad, apoyándose día a día.</li>
          <li><strong>+35 eventos y talleres</strong> organizados para visibilizar el talento femenino y compartir conocimiento.</li>
          <li><strong>+30 empresas aliadas</strong> que apuestan por la inclusión y el talento diverso.</li>
          <li><strong>Asociación legalmente constituida</strong>, un hito que nos da fuerza institucional y estructura para el futuro.</li>
        </ul>

        <p>
         Pero detrás de cada cifra hay historias que no aparecen en ninguna estadística: una oportunidad laboral compartida en <a href="https://communityinviter.com/apps/femcodersclub/femcoders-club" target="_blank" rel="noopener noreferrer" className="highlight-link">Slack</a> que llegó en el momento justo; una mujer que, gracias a uno de nuestros <a href="https://github.com/femcodersclub" target="_blank" rel="noopener noreferrer" className="highlight-link">mini-proyectos de GitHub</a>, recuperó la confianza en su capacidad técnica; alguien que encontró a su primera referente escuchando una charla en uno de <Link to="/eventos" className="highlight-link">nuestros eventos</Link>; o aquella que se acercó tímida a un encuentro y terminó saliendo con contactos, claridad y un impulso nuevo. También están quienes solicitan mentoría a través de la web y reciben una orientación personalizada, o quienes, gracias a nuestro networking —en línea y presencial—, descubren recursos, ideas y herramientas que no habrían encontrado por su cuenta. Son pequeñas historias que, juntas, explican por qué esta comunidad sigue creciendo con tanta fuerza.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaUsers style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          De una idea a una Asociación: El equipo fundador
        </h2>
        
        <p>
          Este segundo aniversario trae consigo nuestro hito más importante a nivel institucional: <strong>FemCoders Club ya es una Asociación legalmente constituida.</strong>
        </p>

        <p>
          Este paso es vital para garantizar que nuestra misión perdure. Y esta misión es sostenida por un equipo de cofundadoras multidisciplinar que refleja la diversidad del sector tech:
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "30px",
          marginBottom: "30px"
        }}>
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "4px solid #4737bb",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img 
              src="https://i.imgur.com/A0aHHDx.png" 
              alt="Elvia Benedith"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #4737bb",
                marginBottom: "15px"
              }}
            />
            <h3 style={{ color: "#4737bb", marginTop: 0, fontSize: "1.3rem" }}>Elvia Benedith</h3>
            <p style={{ fontSize: "0.95rem", color: "#6d2c95", fontWeight: "bold", marginBottom: "10px" }}>
              Ingeniera Civil & Full-stack Developer
            </p>
            <p style={{ margin: 0, lineHeight: "1.6" }}>
              Enfocada en soluciones técnicas y pensamiento analítico.
            </p>
          </div>

          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "4px solid #4737bb",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img 
              src="https://i.imgur.com/DinP3KD.png" 
              alt="Ana Lucía Silva Córdoba"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #4737bb",
                marginBottom: "15px"
              }}
            />
            <h3 style={{ color: "#4737bb", marginTop: 0, fontSize: "1.3rem" }}>Ana Lucía Silva Córdoba</h3>
            <p style={{ fontSize: "0.95rem", color: "#6d2c95", fontWeight: "bold", marginBottom: "10px" }}>
              Data Scientist & Fullstack Developer
            </p>
            <p style={{ margin: 0, lineHeight: "1.6" }}>
              Master en Big Data & Data Science, formadora tecnológica. <strong><a href="https://donadigital.cat/ana-lucia-silva-de-la-docencia-rural-a-la-tecnologia-inclusiva-amb-una-xarxa-femenina-global/" target="_blank" rel="noopener noreferrer" className="highlight-link">Premi DonaTIC 2024</a>.</strong>
            </p>
          </div>

          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "4px solid #4737bb",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img 
              src="https://i.imgur.com/HYnCfpv.png" 
              alt="Irina Ichim"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #4737bb",
                marginBottom: "15px"
              }}
            />
            <h3 style={{ color: "#4737bb", marginTop: 0, fontSize: "1.3rem" }}>Irina Ichim</h3>
            <p style={{ fontSize: "0.95rem", color: "#6d2c95", fontWeight: "bold", marginBottom: "10px" }}>
              Fullstack Developer & Especialista en IA
            </p>
            <p style={{ margin: 0, lineHeight: "1.6" }}>
              Especializada en integración de IA en aplicaciones. Mentora de Backend con Java.
            </p>
          </div>

          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "4px solid #4737bb",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img 
              src="https://i.imgur.com/pmmaRaT.png" 
              alt="Silvina Lucero Calderón"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #4737bb",
                marginBottom: "15px"
              }}
            />
            <h3 style={{ color: "#4737bb", marginTop: 0, fontSize: "1.3rem" }}>Silvina Lucero Calderón</h3>
            <p style={{ fontSize: "0.95rem", color: "#6d2c95", fontWeight: "bold", marginBottom: "10px" }}>
              Full Stack Developer & QA Tester
            </p>
            <p style={{ margin: 0, lineHeight: "1.6" }}>
              Desarrolladora Full Stack y QA Tester Funcional, comprometida con el crecimiento de mujeres en tech.
            </p>
          </div>

          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "4px solid #4737bb",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img 
              src="https://i.imgur.com/HW59kiG.png" 
              alt="Liliana Dalmarco"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #4737bb",
                marginBottom: "15px"
              }}
            />
            <h3 style={{ color: "#4737bb", marginTop: 0, fontSize: "1.3rem" }}>Liliana Dalmarco</h3>
            <p style={{ fontSize: "0.95rem", color: "#6d2c95", fontWeight: "bold", marginBottom: "10px" }}>
              Fullstack Developer & Scrum Master
            </p>
            <p style={{ margin: 0, lineHeight: "1.6" }}>
              Fullstack Developer, Scrum Master y Project Manager, uniendo tecnología con gestión de proyectos.
            </p>
          </div>

          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "4px solid #4737bb",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img 
              src="https://i.imgur.com/JW2fsQh.jpeg" 
              alt="Isadora Matias"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #4737bb",
                marginBottom: "15px"
              }}
            />
            <h3 style={{ color: "#4737bb", marginTop: 0, fontSize: "1.3rem" }}>Isadora Matias</h3>
            <p style={{ fontSize: "0.95rem", color: "#6d2c95", fontWeight: "bold", marginBottom: "10px" }}>
              Full Stack Developer & Diseñadora
            </p>
            <p style={{ margin: 0, lineHeight: "1.6" }}>
              Desarrolladora Full Stack y diseñadora, gestiona la comunicación visual de FemCoders Club.
            </p>
          </div>
        </div>

        <p>
          Juntas, cubrimos todas las áreas necesarias para gestionar una asociación tecnológica: desde el código y los datos hasta la gestión de proyectos, el testing y el diseño. <Link to="/equipo" className="highlight-link">Conoce más sobre nuestro equipo aquí</Link>.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaHeart style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-primary)', verticalAlign: 'middle' }} />
          El corazón de FemCoders: Eventos y Comunidad
        </h2>
        
        <p>
          Si algo nos define, es la calidad humana que hemos logrado reunir. Nuestro punto más fuerte son, sin duda, los <Link to="/eventos" className="highlight-link">eventos online y presenciales</Link>.
        </p>

        <p>
          Nos hemos esforzado mucho en invitar a <strong>mujeres líderes del sector tecnológico</strong>, referentes reales que inspiran y rompen techos de cristal. En nuestros eventos no solo hablamos de código; hablamos de realidad. Abordamos desde las últimas tendencias técnicas hasta las <strong>soft skills</strong> (habilidades blandas), que son vitales para navegar entrevistas técnicas y liderar equipos en el mundo laboral.
        </p>

        <p>
          Además, hemos tejido alianzas sólidas colaborando con <strong>otras comunidades de mujeres en tecnología</strong>. En FemCoders Club no creemos en la competencia; creemos en sumar fuerzas para que nuestro mensaje llegue más lejos y nuestro impacto sea mayor.
        </p>

        <h3>Lo que pasa dentro de la plataforma</h3>
        <p>
          Pero la comunidad no vive solo de eventos puntuales. En el día a día, <a href="https://femcodersclub.com" target="_blank" rel="noopener noreferrer" className="highlight-link">nuestra web</a> y nuestros canales de comunicación (<a href="https://communityinviter.com/apps/femcodersclub/femcoders-club" target="_blank" rel="noopener noreferrer" className="highlight-link">Slack</a>, <a href="https://www.linkedin.com/company/100394366/" target="_blank" rel="noopener noreferrer" className="highlight-link">LinkedIn</a>, <a href="https://www.instagram.com/femcoders_club/" target="_blank" rel="noopener noreferrer" className="highlight-link">Instagram</a>) son espacios vivos donde compartimos <strong>ofertas de trabajo reales</strong>, oportunidades de colaboración, dudas técnicas, ideas y noticias del sector.
        </p>

        <p>
          Es un ecosistema donde intentamos conectar el talento de nuestras miembros con empresas que realmente valoran la diversidad.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaGraduationCap style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          Recursos reales y prácticos para programadoras
        </h2>
        
        <p>
          En FemCoders Club apostamos por el trabajo honesto. No somos una escuela formal ni una academia; somos compañeras compartiendo lo que sabemos, muchas veces dedicando nuestro tiempo libre por pura pasión.
        </p>

        <ul>
          <li>
            <strong>Mentorías 1:1:</strong> Ofrecemos acompañamiento personalizado tanto en <strong>Frontend</strong> como en <strong>Backend</strong>. Son espacios para desbloquear dudas, revisar código y orientar carreras, hechos desde la cercanía.
          </li>
          <li>
            <strong>Recursos Técnicos y Práctica:</strong> Sabemos que la mejor forma de aprender a programar es practicando. Por eso creamos <strong>quizzes técnicos</strong> con "preguntas trampa" (esas que suelen caer en las entrevistas reales) y proponemos <strong>miniproyectos en GitHub</strong> para que practiquéis, construyáis un portafolio sólido y perdáis el miedo al código.
          </li>
          <li>
            <strong>La Hoja de Ruta:</strong> Tenemos recursos gratuitos de <Link to="/blog/recursos" className="highlight-link">HTML y CSS</Link>, y esta misma semana hemos arrancado con <strong>JavaScript</strong>. Pero no nos quedaremos ahí; nuestro objetivo es seguir ampliando a más lenguajes y herramientas, mejorando constantemente la calidad de lo que ofrecemos.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>
          <FaHandshake style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          Colaboración con empresas: Conectando talento con oportunidades
        </h2>
        
        <p>
          Actualmente colaboramos con más de 30 empresas que apuestan por la diversidad y el talento femenino en tecnología. Nuestro objetivo es seguir ampliando esta red de alianzas para crear puentes reales entre talento y oportunidades.
        </p>

        <p>
          Si conoces empresas comprometidas con la inclusión en tech, o si trabajas en una y queréis explorar colaboraciones, <Link to="/contacto" className="highlight-link">nos encantaría conoceros</Link>. Juntas podemos conectar talento real con oportunidades reales y construir un ecosistema tecnológico más diverso y equitativo.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaRocket style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          El futuro: IA, Data y una web más inteligente
        </h2>
        
        <p>
          Tenemos claro que nuestra plataforma debe crecer al ritmo de la innovación. El futuro de nuestra comunidad es tecnológico y ambicioso:
        </p>

        <h3>Estamos trabajando activamente en:</h3>
        <ul>
          <li>
            <strong>Integración de <a href="https://es.wikipedia.org/wiki/Inteligencia_artificial" target="_blank" rel="noopener noreferrer" className="highlight-link">Inteligencia Artificial</a>:</strong> No solo para usarla en nuestra web, sino para crear recursos educativos sobre IA para toda la comunidad.
          </li>
          <li>
            <strong>Data Analytics y Automatización:</strong> Usaremos los datos para entender mejor qué necesitáis y desarrollaremos automatizaciones internas que nos permitan ser más eficientes y dedicar más tiempo a lo importante: vosotras.
          </li>
          <li>
            <strong>Ampliación de recursos:</strong> Más allá del stack básico, queremos cubrir nuevas demandas del mercado y ofrecer herramientas desarrolladas por nosotras, para nosotras.
          </li>
        </ul>

        <p>
          Queremos que la web de FemCoders Club sea un recurso vivo, útil y tecnológicamente avanzado.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaHandsHelping style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          Gracias
        </h2>
        
        <p>
          Para cerrar, necesito dar las gracias, porque estos números (+1.300 mujeres, +35 eventos, +30 empresas) no se consiguen solas.
        </p>

        <p>
          Gracias a las empresas colaboradoras que han confiado en nosotras para apoyar el talento femenino.
        </p>

        <p>
          Gracias a todas las ponentes y speakers, mujeres increíbles que nos han regalado su tiempo y su sabiduría en cada charla.
        </p>

        <p>
          Gracias a las mentoras que dedican su tiempo libre a acompañar a otras mujeres en su crecimiento profesional.
        </p>

        <p>
          Gracias a las personas voluntarias que trabajan desde la sombra para que cada evento salga perfecto.
        </p>

        <p>
          Y gracias a ti, que lees esto, que te unes a los directos, que participas en los eventos, que lees nuestros recursos, que haces los ejercicios en GitHub, que te has registrado en la web o que recomiendas la comunidad. <strong>Gracias también a los aliados que apoyan nuestra misión desde el principio.</strong>
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          <FaFistRaised style={{ display: 'inline-block', marginRight: '10px', color: 'var(--color-secondary)', verticalAlign: 'middle' }} />
          Nuestra promesa
        </h2>
        
        <p>
          Vamos a seguir abriendo puertas. Vamos a seguir creando espacios donde cada mujer pueda aprender, crecer y brillar sin pedir permiso.
        </p>

        <p>
          Seguiremos promoviendo la inclusión y la equidad con acciones concretas: con más código, más eventos y más apoyo mutuo.
        </p>

        <p>
          Vamos a seguir construyendo un futuro más inclusivo y equitativo en el mundo de la tecnología.
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
            <FaStar style={{ display: 'inline-block', marginRight: '8px', color: 'var(--color-primary)', verticalAlign: 'middle' }} /> Gracias por estos dos años increíbles
          </h3>
          <p style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "15px", color: "#2a2170" }}>
            A por muchos más, juntas. <FaHeart style={{ color: 'var(--color-primary)', display: 'inline-block', marginLeft: '5px', verticalAlign: 'middle' }} />
          </p>
          <Link to="/register" style={{
            display: "inline-block",
            backgroundColor: "#4737bb",
            color: "white",
            padding: "12px 30px",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginTop: "10px",
            boxShadow: "0 4px 10px rgba(71, 55, 187, 0.3)",
            transition: "all 0.3s ease"
          }}>
            <FaRocket style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} /> Únete a FemCoders Club
          </Link>
        </div>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Equipo FemCoders Club</strong>
        </p>
        <p>Con mucha ilusión y gratitud <FaHeart style={{ color: 'var(--color-primary)', display: 'inline-block', verticalAlign: 'middle' }} /></p>
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

export default SegundoAniversarioFemCoders;
