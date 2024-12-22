import React from "react";
import { Helmet } from "react-helmet";
import "../../page/PostStyles.css";
import CommentsSection from "../../../Blog/components/CommentsSection";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FelicitacionNavidad: React.FC = () => {
  const currentUrl = window.location.href;
  const publicationDate = "22 de diciembre de 2024";

  return (
    <div className="blog-post">
      <Helmet>
        <title>femCoders Club - Felices Fiestas 2024</title>
        <meta
          name="description"
          content="Felicitamos la Navidad y Año Nuevo desde femCoders Club, celebrando los logros del 2024 y mirando hacia un 2025 lleno de innovación y empoderamiento."
        />
        <meta
          name="keywords"
          content="femCoders Club, Navidad, Año Nuevo, comunidad de programación, mujeres en tecnología, inclusión, innovación, mentoring"
        />
      </Helmet>
<div className="video-container">
        <video
          src="/assets/videos/FelizNavidad.mp4"
          className="custom-video desktop-video"
          controls
          autoPlay
          loop
          muted
          aria-label="Felicitación navideña de femCoders Club, comunidad de mujeres programadoras."
        ></video>
        <video
          src="/assets/videos/FelizNavidadMovil.mp4"
          className="custom-video mobile-video"
          controls
          autoPlay
          loop
          muted
          aria-label="Felicitación navideña de femCoders Club para dispositivos móviles."
        ></video>
      </div>


      <h1 className="blog-post-title">
        🎄👩‍💻 Querida comunidad femCoders Club, ¡Felices Fiestas! 👩‍💻🎄
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
        En esta época especial, queremos hacer una pausa en nuestro código para
        compartir con ustedes los mejores deseos para estas fiestas. 💻✨
      </p>
      <p className="intro-text">
        El 2024 ha sido un año lleno de retos, aprendizajes y logros para{" "}
        <strong>femCoders Club</strong>. Mientras nos preparamos para cerrar el
        año, reflexionamos sobre el camino recorrido y, sobre todo, queremos
        agradeceros por ser parte de este proyecto que busca empoderar a las
        mujeres en el mundo de la tecnología 💪. Cada workshop, cada encuentro,
        cada mensaje de apoyo ha sido como un commit que ha mejorado nuestra
        versión colectiva.
      </p>

      <div className="highlight-box">
        <h2>
          ✨ Queremos aprovechar este momento para expresar nuestra más profunda
          gratitud a ...
        </h2>
        <ul>
          <li>
            👩‍💻 <strong>Nuestra comunidad increíble:</strong> Gracias por asistir
            a cada evento con entusiasmo, compartir experiencias y
            conocimientos, y crear un ambiente tan especial de apoyo mutuo.
          </li>
          <li>
            🌟 <strong>Nuestras extraordinarias ponentes:</strong> Gracias por
            compartir generosamente su expertise, por inspirar a otras mujeres
            con sus historias y por demostrar que el mundo tech es un espacio
            para todas. Sus charlas y workshops han sido fundamentales para el
            crecimiento profesional de nuestra comunidad.
          </li>
          <li>
            🏢 <strong>Las empresas colaboradoras:</strong> Gracias por creer en
            nuestra misión y apoyar la diversidad en tech. Su respaldo ha sido
            crucial para hacer realidad nuestros eventos y proyectos, abriendo
            puertas para más mujeres en el sector tecnológico.
          </li>
          <li>
            🌐 <strong> Las promotoras:</strong> Gracias por su dedicación, su
            tiempo y su energía para hacer que cada evento sea un éxito. Su
            compromiso es un pilar fundamental de nuestra comunidad.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>🎉Para el 2025 deseamos:</h2>
        <p>
          ✨ Que vuestros proyectos se compilen sin errores y sus ideas se
          desplieguen con éxito.
        </p>
        <p>
          🔒 Que vuestros códigos sean seguros y vuestros datos estén
          protegidos.
        </p>
        <p>
          💪 Que sigamos rompiendo juntas los estereotipos en el mundo tech.
        </p>
        <p>
          🌟 Que la comunidad femCoders Club siga creciendo y empoderando a más
          mujeres.
        </p>
        <p>
          🌈 Que la diversidad y la inclusión sean el estándar en la industria.
        </p>

        <p>🌐 Que sigamos conectadas, aprendiendo y compartiendo juntas.</p>
        <p>
          ✨ Que esta Navidad les traiga la paz del código bien escrito 💻 y que
          el Año Nuevo venga cargado de nuevas funcionalidades para sus vidas.
          🎉
        </p>
      </div>

      <div className="intro-text">
        <p>
          En <strong>femCoders Club</strong>, no solo compartimos conocimiento
          técnico; construimos una comunidad donde cada mujer puede desarrollar
          su propio algoritmo y brillar con luz propia. 💡 Estas fiestas,
          celebremos juntas la alegría de nuestros logros, la magia de la
          innovación y los momentos que nos inspiran a seguir creciendo. <br />
          🎄✨ ¡Felices fiestas y que el Año Nuevo traiga nuevas oportunidades y
          éxitos para todas! 🎉💻
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

      <CommentsSection postId={10} />
    </div>
  );
};

export default FelicitacionNavidad;
