import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";

const Aniversario: React.FC = () => (
  <>
      <Helmet>
        <title>FemCoders Club: primer aniversario</title>
        <meta
          name="description"
          content="Celebramos el primer aniversario de femCoders Club, una comunidad para mujeres en tecnología donde compartir, aprender y crecer juntas."
        />
        <meta
          name="keywords"
          content="femCoders Club, mujeres en tecnología, comunidad de programación, aniversario, inclusión, innovación, mentoring"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/Aniversario"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club: primer aniversario"
        />
        <meta
          property="og:description"
          content="Celebramos el primer aniversario de femCoders Club, una comunidad para mujeres en tecnología donde compartir, aprender y crecer juntas."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/Aniversario"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/femCodersClubpost.png"
        />
        <meta
          property="og:image:alt"
          content="femCoders Club celebra su primer aniversario como comunidad de mujeres en tecnología"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club: primer aniversario"
        />
        <meta
          name="twitter:description"
          content="Un año de comunidad, aprendizaje y mujeres impulsando la tecnología."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/femCodersClubpost.png"
        />

        <meta
          property="article:published_time"
          content="2023-10-24T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/Aniversario"
      titulo="¡Un año innovando juntas! Celebramos el primer aniversario de FemCoders Club"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={1}
      entradilla={
        <>
          <p>
            ¡Bienvenida a la celebración! En <strong>FemCoders Club</strong>,
            hoy, 24 de octubre, celebramos nuestro primer aniversario y estamos
            más emocionadas que nunca. Este año ha sido un viaje increíble,
            donde hemos creado un espacio seguro y acogedor, permitiendo que más
            de 1500 mujeres encuentren apoyo, inspiración y oportunidades para
            crecer juntas en el mundo de la programación.
          </p>
          <p>
            A lo largo del año, hemos organizado más de 15 eventos, tanto
            presenciales como virtuales, conectando a cientos de mujeres
            apasionadas por la programación. Nuestro{" "}
            <strong>canal de Slack</strong>, con más de 200 miembros activos, es
            un lugar vibrante donde el intercambio de conocimientos y el apoyo
            mutuo son la clave. Desde nuestras primeras charlas hasta hoy, hemos
            visto cómo una pequeña idea se ha convertido en una gran comunidad
            que sigue creciendo y evolucionando.
          </p>
        </>
      }
    >
      <SeccionPost titulo="¿Quiénes somos?">
        <p>
          <strong>FemCoders Club</strong> es una comunidad inclusiva y
          apasionada por la tecnología, cuyo objetivo es empoderar a las mujeres
          y transformar el sector tecnológico. Creemos en la colaboración, el
          respeto y la innovación como pilares fundamentales para alcanzar la
          igualdad de oportunidades. Al unirte a nuestra comunidad, tendrás
          acceso a una red de mentoras que te apoyarán en tu camino,
          participarás en talleres y eventos exclusivos, y desarrollarás
          proyectos innovadores junto a otras mujeres talentosas. Juntas,
          estamos construyendo un futuro más inclusivo y tecnológico, donde cada
          una de nosotras tiene un lugar para crecer.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Cómo puedes unirte?">
        <p>
          ¡Nos encantaría que formaras parte de esta comunidad increíble! Únete
          a nuestro canal de{" "}
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack
          </a>
          , donde mujeres programadoras de todo el mundo comparten ideas,
          colaboran en proyectos y se apoyan mutuamente.
        </p>
        <p>
          Además, síguenos en nuestras redes sociales para estar al tanto de
          nuestras novedades, eventos y oportunidades de networking. ¡Estamos en
          varias plataformas, así que elige la que más te guste!
        </p>
        <ul>
          <li>
            <a
              href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slack
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/femcoders_club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/fem-coders-club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@FemcodersClub"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a href="https://github.com/femcodersclub" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/user/31wgl44unbqdv6nh4igsgw5pp6t4?si=29d0152b29404e44"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify
            </a>
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="¡Lo mejor está por venir!">
        <p>
          Este es solo el comienzo. Muy pronto estaremos lanzando nuevos
          recursos y herramientas en nuestra página web{" "}
          <Link to="/">www.femcodersclub.com</Link>, incluyendo documentación
          técnica, tutoriales interactivos y muchas sorpresas más.
        </p>
        <p>
          Si tienes alguna sugerencia, idea o recursos interesantes que creas
          que puedan aportar valor a la comunidad, ¡nos encantaría que nos lo
          hicieras saber! No dudes en escribirnos a{" "}
          <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.
          Juntas seguiremos creciendo y creando una comunidad aún más fuerte.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¡Gracias por ser parte de FemCoders Club!">
        <p>
          Sabemos que este es solo el principio de todo lo que podemos lograr
          juntas. Tu participación es fundamental para seguir construyendo un
          espacio donde cada mujer en tecnología se sienta bienvenida, apoyada y
          empoderada. ¡Te invitamos a seguir conectada, a compartir tus ideas y
          a crecer junto a nosotras!
        </p>
        <p>
          No olvides seguirnos en nuestras redes sociales y unirte a las
          conversaciones en{" "}
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack
          </a>
          . ¡Estamos deseando ver todo lo que lograremos en el futuro!
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default Aniversario;
