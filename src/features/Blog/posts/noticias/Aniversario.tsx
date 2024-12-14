import React from "react";
import { Helmet } from "react-helmet";
import "../../page/PostStyles.css";
import CommentsSection from "../../../Blog/components/CommentsSection";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsSpotify,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Aniversario: React.FC = () => {
  const currentUrl = window.location.href;
  const publicationDate = "24 de octubre de 2023";

  return (
    <div className="blog-post">
      <Helmet>
        <title>femCoders Club - Primer Aniversario</title>
        <meta
          name="description"
          content="Celebramos el primer aniversario de femCoders Club, una comunidad para mujeres en tecnología donde compartir, aprender y crecer juntas."
        />
        <meta
          name="keywords"
          content="femCoders Club, mujeres en tecnología, comunidad de programación, aniversario, inclusión, innovación, mentoring"
        />
      </Helmet>
      <div className="post-image-container">
        <img
          src="/femCodersClubpost.png"
          alt="Celebración del primer aniversario de femCoders Club, mujeres programadoras unidas."
          className="blog-post-image"
          role="img"
        />
      </div>

      <h1 className="blog-post-title">
        🎉 ¡Un año innovando juntas! - Celebramos el primer aniversario de
        femCoders Club
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
            href={`https://www.tiktok.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en TikTok"
          >
            <FaTiktok className="social-icon" />
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
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>
        </div>
      </div>

      <p className="intro-text">
        🌟 ¡Bienvenida a la celebración! En <span>femCoders Club</span>, hoy, 24
        de octubre, celebramos nuestro primer aniversario y estamos más
        emocionadas que nunca. 🎉 Este año ha sido un viaje increíble, donde
        hemos creado un espacio seguro y acogedor, permitiendo que más de 1500
        mujeres encuentren apoyo, inspiración y oportunidades para crecer juntas
        en el mundo de la programación.
      </p>

      <p className="intro-text">
        A lo largo del año, hemos organizado más de 15 eventos, tanto
        presenciales como virtuales, conectando a cientos de mujeres apasionadas
        por la programación. Nuestro <strong>canal de Slack,</strong> con más de
        200 miembros activos, es un lugar vibrante donde el intercambio de
        conocimientos y el apoyo mutuo son la clave. Desde nuestras primeras
        charlas hasta hoy, hemos visto cómo una pequeña idea se ha convertido en
        una gran comunidad que sigue creciendo y evolucionando. 💜
      </p>

      <div className="highlight-box">
        <h2>¿Quiénes somos? 👩‍💻</h2>
        <p>
          <strong>femCoders Club</strong> es una comunidad inclusiva y
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
      </div>

      <div className="highlight-box">
        <h2>¿Cómo puedes unirte? 🤝</h2>
        <p>
          ¡Nos encantaría que formes parte de esta comunidad increíble! Únete a
          nuestro canal de{" "}
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack
          </a>
          , donde mujeres programadoras de todo el mundo comparten ideas,
          colaboran en proyectos y se apoyan mutuamente. 💬
        </p>
        <p>
          Además, síguenos en nuestras redes sociales para estar al tanto de
          nuestras novedades, eventos y oportunidades de networking. ¡Estamos en
          varias plataformas, así que elige la que más te guste! 💜
        </p>

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
              aria-label="Compartir en LinkedIn"
            >
              <BsLinkedin className="social-icon" />
            </a>

            <a
              href="https://www.youtube.com/@FemcodersClub"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="social-icon" />
            </a>
            <a
              href="https://github.com/femcodersclub"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="social-icon" />
            </a>
            <a
              href="https://open.spotify.com/user/31wgl44unbqdv6nh4igsgw5pp6t4?si=29d0152b29404e44"
              aria-label="Spotify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSpotify className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="highlight-box">
        <h2>¡Lo mejor está por venir! 🚀</h2>
        <p>
          Este es solo el comienzo. Muy pronto estaremos lanzando nuevos
          recursos y herramientas en nuestra página web{" "}
          <a href="https://www.femcodersclub.com">www.femcodersclub.com</a>,
          incluyendo documentación técnica, tutoriales interactivos y muchas
          sorpresas más.
        </p>
        <p>
          Si tienes alguna sugerencia, idea o recursos interesantes que creas
          que puedan aportar valor a la comunidad, ¡nos encantaría que nos lo
          hagas saber! No dudes en escribirnos a{" "}
          <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.
          Juntas seguiremos creciendo y creando una comunidad aún más fuerte.
        </p>
      </div>

      <div className="intro-text">
        <h3>¡Gracias por ser parte de femCoders Club! 💜</h3>
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
          <span>
            <a
              href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Slack
            </a>
          </span>
          . ¡Estamos deseando ver todo lo que lograremos en el futuro!
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>femCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <CommentsSection postId={1} />
    </div>
  );
};

export default Aniversario;
