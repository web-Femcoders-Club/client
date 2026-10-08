import React from "react";
import { Helmet } from "react-helmet";
import { CalendarDays, Globe, HeartHandshake, Mic, PenLine, Users } from "lucide-react";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost, TarjetasPost } from "../../components/post/PiezasPost";

const Bienvenido2025: React.FC = () => (
  <>
      <Helmet>
        <title>FemCoders Club - ¡Bienvenidas a 2025! 🎉</title>
        <meta
          name="description"
          content="Explora los logros de 2024 y nuestras emocionantes iniciativas para 2025 en FemCoders Club. Aprende, conecta y crece en nuestra comunidad."
        />
        <meta
          name="keywords"
          content="femCoders,femCoders Club, comunidad de tecnología, mentorías, programación, HTML, CSS, React, eventos 2025"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/Bienvenido2025"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="¡Bienvenidas a 2025 con FemCoders Club! 🎉"
        />
        <meta
          property="og:description"
          content="Explora los logros de 2024 y nuestras iniciativas para 2025 en FemCoders Club. Aprende, conecta y crece en nuestra comunidad."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/Bienvenido2025"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/bienvenido2025.jpg"
        />
        <meta
          property="og:image:alt"
          content="FemCoders Club da la bienvenida a 2025 con nuevos retos para la comunidad"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="¡Bienvenidas a 2025 con FemCoders Club! 🎉"
        />
        <meta
          name="twitter:description"
          content="Los logros de 2024 y lo que viene en 2025 para la comunidad de FemCoders Club."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/bienvenido2025.jpg"
        />

        <meta
          property="article:published_time"
          content="2025-01-03T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/Bienvenido2025"
      titulo="¡Bienvenidas a 2025 con FemCoders Club!"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={11}
      entradilla={
        <>
          <p>Querida comunidad:</p>
          <p>
            Con inmensa alegría y gratitud, les damos la bienvenida a un nuevo
            año cargado de posibilidades y retos inspiradores. En FemCoders
            Club, 2025 marca el inicio de un emocionante capítulo para todas las
            mujeres apasionadas por la tecnología.
          </p>
          <p>
            Este año, seguimos fortaleciendo nuestra comunidad, un espacio donde
            cada una puede crecer, aprender y encontrar apoyo. Gracias por ser
            parte de este viaje tan especial. Juntas, exploraremos nuevas
            tecnologías, compartiremos conocimientos y celebraremos cada logro.
            ¡Prepárense para un año lleno de sorpresas, aprendizajes y grandes
            momentos!
          </p>
        </>
      }
    >
      <SeccionPost titulo="Recordando nuestros logros en 2024">
        <p>
          2024 fue un año lleno de hitos que marcaron nuestra historia. Desde el
          lanzamiento de nuestra página web hasta la realización de eventos
          inolvidables, logramos crear un espacio donde mujeres de todas partes
          pudieron aprender, compartir y crecer juntas.
        </p>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Lanzamiento de la página web",
              texto: "Un proyecto que refleja el talento y la dedicación de nuestra comunidad.",
              icono: <Globe aria-hidden="true" />,
            },
            {
              titulo: "Eventos, charlas y talleres",
              texto:
                "Espacios para explorar tecnologías emergentes, habilidades blandas y herramientas clave para desarrolladoras.",
              icono: <CalendarDays aria-hidden="true" />,
            },
            {
              titulo: "Crecimiento de la comunidad",
              texto:
                "Más mujeres se unieron, trayendo consigo nuevas perspectivas y oportunidades de colaboración.",
              icono: <Users aria-hidden="true" />,
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Lo que nos emociona de 2025">
        <p>
          ¡El futuro de la tecnología es femenino y está lleno de posibilidades!
          Este año, en FemCoders Club, te invitamos a explorar nuevas fronteras,
          a aprender de las mejores y a construir un futuro tecnológico más
          inclusivo. Prepárate para un año lleno de sorpresas, aprendizajes y
          grandes momentos.
        </p>
        <ol>
          <li>Nuevos eventos y actividades emocionantes.</li>
          <li>Ampliación de nuestra sección de recursos educativos.</li>
          <li>Mejoras en nuestra página web, incluyendo mentorías.</li>
        </ol>
      </SeccionPost>

      <SeccionPost titulo="Nuestra misión sigue intacta: empoderarnos juntas">
        <p>
          Este año, queremos seguir construyendo un espacio donde todas podamos
          crecer profesionalmente, sentirnos apoyadas y crear una red de
          contactos que nos impulse a alcanzar nuestras metas. Al participar
          activamente, tendrás acceso a oportunidades únicas de networking,
          mentorship y desarrollo profesional.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Cómo puedes participar este año?">
        <p>
          ¡Hagamos de este año un capítulo aún más inspirador para nuestra
          comunidad! Tu contribución es clave para construir un espacio más
          fuerte, inclusivo y empoderado. Aquí tienes formas de involucrarte y
          dejar tu huella:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Comparte tus conocimientos",
              texto:
                "Escribe un blog post, crea un tutorial o lidera un taller. Comparte lo que sabes y ayuda a otras a crecer mientras fortaleces tu propia experiencia.",
              icono: <PenLine aria-hidden="true" />,
            },
            {
              titulo: "Conéctate con otras miembros",
              texto:
                "Participa en nuestros eventos, ya sean virtuales o presenciales. Contribuye en los foros de Slack y comparte tus historias y aprendizajes en nuestras redes sociales. ¡Cada conexión suma!",
              icono: <Users aria-hidden="true" />,
            },
            {
              titulo: "Sé mentora o mentoreada",
              texto:
                "Únete a nuestra red de mentorías. Ayuda a otras miembros a superar desafíos y alcanzar metas, o encuentra a alguien que te guíe en tu camino hacia el éxito profesional.",
              icono: <HeartHandshake aria-hidden="true" />,
            },
            {
              titulo: "Sé ponente",
              texto:
                "¡Inspira a nuestra comunidad compartiendo tus conocimientos y experiencias en nuestros eventos! Ser ponente es una excelente oportunidad para fortalecer tu perfil profesional, enseñar lo que sabes y empoderar a otras mujeres en tecnología.",
              icono: <Mic aria-hidden="true" />,
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Nuestros mejores deseos para ti en 2025">
        <blockquote>
          <p>«La tecnología debe ser un puente hacia la igualdad, no una barrera».</p>
          <p>— FemCoders Club</p>
        </blockquote>
        <p>
          Que esta frase te inspire a seguir creciendo y a marcar
          la diferencia en el mundo tecnológico. Este año, exploraremos nuevas
          fronteras en la programación, la inteligencia artificial y mucho más.
          ¡Estamos emocionadas por ver todo lo que lograremos juntas!
        </p>
        <p>
          Gracias por hacer de FemCoders Club un espacio tan especial. Vuestros
          logros en 2024 nos inspiran cada día. Que este nuevo año esté lleno de
          proyectos exitosos, aprendizajes constantes y momentos inolvidables.
          ¡Juntas, podemos lograr todo lo que nos propongamos!
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default Bienvenido2025;
