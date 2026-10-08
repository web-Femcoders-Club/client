import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";

const FelicesFiestas2025: React.FC = () => (
  <>
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

    <PlantillaPost
      ruta="/noticias/felices-fiestas-2025"
      titulo="Felices fiestas: FemCoders Club cierra 2025 y sigue"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={32}
      entradilla={
        <p>
          Las fiestas están aquí y es momento de parar un poco, mirar atrás y
          pensar en lo que viene. Este año que termina fue intenso, lleno de
          aprendizaje y, sobre todo, de conexiones reales.
        </p>
      }
    >
      <SeccionPost titulo="Lo que construimos juntas en 2025">
        <p>
          Ya somos más de 1300 mujeres en FemCoders Club. Pero lo que realmente
          importa no es el número. Es que este año vimos a mujeres conseguir su
          primer trabajo en tech, otras cambiar de stack completamente, algunas
          lanzar sus propios proyectos. Mujeres participando en{" "}
          <Link to="/eventos">hackatones</Link>, dando sus charlas en eventos,
          haciendo de mentoras para otras que están empezando. Cada historia
          nos recuerda por qué existe este espacio.
        </p>
        <p>
          Como <Link to="/femcoders-quienes-somos">asociación oficial</Link>,
          consolidamos algo que va más allá de eventos y talleres. Creamos un
          lugar donde podemos ser nosotras mismas, aprender sin miedo a
          preguntar lo «obvio» y construir relaciones reales.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Lo que no se ve (pero existe)">
        <p>
          FemCoders Club no es solo lo que pasa en los eventos presenciales.
          También es:
        </p>
        <ul>
          <li>
            El{" "}
            <a href="https://communityinviter.com/apps/femcodersclub/femcoders-club" target="_blank" rel="noopener noreferrer">
              canal de Slack
            </a>{" "}
            donde alguien resuelve una duda a las 11 de la noche.
          </li>
          <li>Las consultas que llegan por correo.</li>
          <li>
            Los meets que organizamos con distintos objetivos: preparar
            entrevistas, revisar CVs, hablar de cambios de carrera.
          </li>
          <li>Las recomendaciones de trabajo que nos pasamos entre nosotras.</li>
          <li>Esa confianza de preguntar sin sentir que la pregunta es tonta.</li>
          <li>Las amistades tech que nacen aquí y que duran.</li>
        </ul>
        <p>
          Lo que más me impacta no son las cifras. Es conocer mujeres
          increíbles a las que admiro, otras que ya considero amigas. Es
          recibir mensajes de «conseguí el trabajo» o «por fin entendí cómo
          funciona esto». Es sentir que construimos algo real.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Qué viene en 2026">
        <p>
          Seguiremos creando contenido técnico. Los posts sobre{" "}
          <Link to="/blog/recursos">JavaScript</Link> van a continuar, los
          proyectos con IA también. Habrá <Link to="/eventos">más eventos</Link>,
          más talleres, más espacios para aprender juntas.
        </p>
        <p>
          Queremos abrir colaboraciones con otras comunidades tech. Crecer no
          solo en número, sino en diversidad de tecnologías, de proyectos, de
          formas de aprender.
        </p>
        <p>
          Las <Link to="/mentoria">mentorías</Link> siguen disponibles. Si
          necesitas orientación, alguien que te escuche o simplemente otra
          perspectiva sobre tu carrera tech, estamos aquí.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Para las empresas que nos leen">
        <p>
          Si queréis colaborar con una comunidad real, con mujeres que están
          aprendiendo, creciendo y aportando valor al sector tech, hablemos. No
          buscamos solo sponsors. Buscamos aliados que entiendan qué significa
          apoyar la diversidad de verdad.
        </p>
        <p>
          <Link to="/contacto">Escribidnos</Link> si os interesa crear puentes
          reales entre talento y oportunidades.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Lo que necesitamos de vosotras">
        <p>
          Participad. Compartid. Preguntad. Recomendad FemCoders Club a otras
          mujeres que están empezando o que necesitan una comunidad donde
          sentirse cómodas.
        </p>
        <p>
          Si podéis mentorizar, hacedlo. Si tenéis dudas, preguntad. Si veis
          una oferta de trabajo interesante, compartidla en{" "}
          <a href="https://communityinviter.com/apps/femcodersclub/femcoders-club" target="_blank" rel="noopener noreferrer">
            Slack
          </a>
          . Así funciona esto.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Gracias y feliz 2026">
        <p>
          Gracias por hacer de FemCoders Club este espacio tan especial. Por
          las preguntas, por compartir victorias y frustraciones, por estar ahí
          cuando otras lo necesitan.
        </p>
        <p>
          Que 2026 venga cargado de proyectos que terminamos y de los que nos
          sentimos orgullosas. De código que funciona (a la primera, ojalá). De
          trabajos que nos ilusionan y nos hacen crecer. De aprendizajes que
          nos abren puertas. De conexiones que se convierten en colaboraciones,
          en amistades, en oportunidades.
        </p>
        <p>
          Que este año que empieza traiga más mujeres atreviéndose a dar el
          salto al tech, más voces diversas en eventos, más mentoría entre
          nosotras, más proyectos colaborativos. Que sigamos construyendo este
          espacio donde todas tenemos lugar, donde todas aportamos, donde todas
          aprendemos.
        </p>
        <p>
          Felices fiestas para vosotras y vuestras familias. Descansad,
          desconectad si podéis, y nos vemos en 2026 con las mismas ganas de
          seguir construyendo juntas.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default FelicesFiestas2025;
