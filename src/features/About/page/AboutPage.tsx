import React from "react";
import { Link } from "react-router-dom";
import iconMission from "/iconMission.png";
import iconVision from "/iconVision.png";
import FemCodersClubLogo from "/FemCodersClubLogo.png";
import "./AboutPage.css";
import CarouselValues from "../components/CarouselValues";
import iconCommitment from "/iconCommitment.png";
import VideoInicialComunidad from "/VideoInicialComunidad.mp4";
import Collapse from "../components/Collapse";
import { Helmet } from "react-helmet";

const linkStyle = {
  color: "#ea4f33",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.2s ease",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FemCoders Club | Comunidad para Mujeres en Tecnología</title>

        <meta
          name="description"
          content="FemCoders Club es una comunidad que empodera a mujeres en el mundo tecnológico, cerrando la brecha de género digital. Conoce nuestra misión, visión y valores, y únete a nuestra comunidad inclusiva."
        />

        <meta
          name="keywords"
          content="FemCoders Club, mujeres en tecnología, inclusión en TI, liderazgo femenino, comunidad tech, empoderamiento femenino, desarrollo web, talleres de programación, igualdad de género en tecnología, misión y visión FemCoders"
        />

        <meta
          property="og:title"
          content="FemCoders Club | Comunidad para Mujeres en Tecnología"
        />
        <meta
          property="og:description"
          content="Conoce cómo FemCoders Club está transformando el panorama tecnológico con una comunidad inclusiva de mujeres apasionadas por la programación y la tecnología."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/femcoders-quienes-somos"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/FemCodersClubLogo.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club | Comunidad para Mujeres en Tecnología"
        />
        <meta
          name="twitter:description"
          content="FemCoders Club promueve la inclusión y empoderamiento de mujeres en la tecnología. Únete a nuestra misión y sé parte del cambio."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/FemCodersClubLogo.png"
        />

        <link
          rel="canonical"
          href="https://www.femcodersclub.com/femcoders-quienes-somos"
        />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FemCoders Club",
              "url": "https://www.femcodersclub.com",
              "logo": "https://www.femcodersclub.com/FemCodersClubLogo.png",
              "description": "Comunidad que empodera a mujeres en el sector tecnológico, cerrando la brecha de género digital."
            }
          `}
        </script>
      </Helmet>

      <section className="parallax bg1 full-height">
        <div className="contenedor">
          <h1
            className="hide-on-mobile"
            style={{
              fontSize: "2rem",
              color: "#4737bb",
              textAlign: "center",
              marginBottom: "2rem",
              fontFamily: "Asap, sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            FemCoders Club: Empoderando Mujeres en Tecnología
          </h1>

          <div className="contenido-seccion animate-fade-in">
            <div className="banner-quienes-somos text-left">
              <p className="text-animate">
                El objetivo principal de <strong>femCoders Club</strong> es
                cerrar la brecha de género en el ámbito digital y ser un
                referente que promueva la inclusión femenina en el mundo
                tecnológico. <br />
                Somos un grupo de mujeres apasionadas por la tecnología que{" "}
                <strong className="highlight-text">
                  trabajamos para fomentar la participación activa de las
                  mujeres en el sector de TI.
                </strong>{" "}
                Descubre nuestros{" "}
                <Link to="/eventos" style={linkStyle}>
                  próximos eventos
                </Link>{" "}
                y conoce a nuestro{" "}
                <Link to="/equipo" style={linkStyle}>
                  increíble equipo
                </Link>
                .
              </p>
            </div>

            <div className="compromise-video">
              <video
                src={VideoInicialComunidad}
                className="video video-hover-effect"
                controls
                preload="metadata"
                width="560"
                height="315"
                aria-label="Video inicial de la comunidad FemCoders Club, mostrando nuestras actividades y eventos"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="parallax bg2 full-height">
        <div className="container-bg-3">
          <div className="card-container">
            <div className="card-about">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={iconMission}
                    alt="Icono Misión"
                    className="icon-mision-vision"
                  />

                  <h3>Misión</h3>
                </div>
                <div className="flip-card-back">
                  <img
                    src={FemCodersClubLogo}
                    alt="femCoders Club logo"
                    width="150"
                    height="150"
                  />
                  <p>
                    <strong>
                      Nuestra misión es empoderar y elevar a las mujeres en el
                      campo del desarrollo web.
                    </strong>{" "}
                    Trabajamos intensamente para cerrar la brecha de género en
                    la tecnología, fomentando una comunidad que fortalece
                    habilidades, conocimientos y confianza. Nos esforzamos
                    incansablemente por tener un impacto positivo tanto en el
                    sector tecnológico como en el desarrollo personal de
                    nuestras miembros, a través de{" "}
                    <strong>
                      <Link to="/eventos" style={linkStyle}>
                        eventos
                      </Link>
                      , talleres y{" "}
                      <Link to="/blog/recursos" style={linkStyle}>
                        recursos
                      </Link>{" "}
                      que promueven la inclusión, la equidad y la diversidad.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-about">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{ height: "100px", marginTop: "7rem" }}
                >
                  <img
                    src={iconVision}
                    alt="Icono Visión"
                    className="icon-mision-vision"
                  />

                  <h3>Visión</h3>
                </div>
                <div className="flip-card-back">
                  <img
                    src={FemCodersClubLogo}
                    alt="logo femCoders Club"
                    width="150"
                    height="150"
                  />
                  <p>
                    <strong>
                      Nuestra visión es un futuro donde las mujeres
                      desarrolladoras web lideren, innoven y den forma al
                      panorama digital.
                    </strong>{" "}
                    Aspiramos a un sector IT equitativo e inclusivo, donde la
                    diversidad y la inclusión sean principios fundamentales que
                    impulsen el progreso tecnológico. Nuestro club aspira a ser
                    el catalizador del cambio, donde cada mujer, sin importar su
                    origen, encuentre estímulo, recursos y{" "}
                    <strong>
                      una comunidad vibrante para destacarse como codificadora y
                      líder.
                    </strong>{" "}
                    Lee más sobre nuestros{" "}
                    <Link to="/noticias/Bienvenido2025" style={linkStyle}>
                      objetivos para 2025
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-quienes-somos">
            <p className="description text-left">
              <strong>
                Nuestro objetivo es crear un espacio seguro donde podamos
                reunirnos y colaborar para crecer juntas.
              </strong>{" "}
              Para lograrlo, organizamos actividades que visibilizan a las
              mujeres programadoras y promovemos su desarrollo profesional. A
              través de diálogos abiertos y respetuosos, buscamos derribar
              barreras y estereotipos, empoderando a todas las mujeres para
              prosperar en sus carreras tecnológicas. Mediante{" "}
              <Link to="/eventos" style={linkStyle}>
                eventos
              </Link>
              , talleres y recursos, trabajamos unidas para generar un impacto
              duradero en la industria de la tecnología.
            </p>
            <p className="description text-right">
              En <span>FemCoders Club </span>nos enfocamos en impulsar la
              inclusión, equidad y visibilidad de las mujeres en el sector de
              TI. Creemos en la diversidad y en la fuerza colectiva para superar
              obstáculos y lograr un impacto positivo en la industria
              tecnológica. Promovemos la colaboración y el apoyo mutuo,
              ofreciendo una plataforma donde las mujeres pueden compartir sus
              conocimientos, experiencias y recursos. Explora nuestros{" "}
              <Link to="/blog/recursos" style={linkStyle}>
                recursos educativos gratuitos
              </Link>{" "}
              sobre programación.{" "}
              <strong>
                Juntas, estamos construyendo un futuro más inclusivo y
                equitativo en el mundo de la tecnología.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section className="parallax bg3">
        <div className="bg3-content">
          <div className="commitment-section">
            <div className="compromise-text">
              <img
                src={iconCommitment}
                alt="Icono Compromiso"
                width={33}
                height={33}
              />
              <h3>Nuestro Compromiso</h3>
              <p className="mx-8 mb-16 text-bodyText text-base text-contrast text-justify md:w-[550px]">
                Nuestra comunidad se compromete a realizar un esfuerzo real por
                disminuir la brecha de género digital, a fomentar la inclusión y
                a generar oportunidades para que las mujeres encuentren su lugar
                en la industria tecnológica. Nos comprometemos a ser el espacio
                en el cual las mujeres encuentren motivación y recursos que les
                permitan crecer personal y profesionalmente, donde puedan y
                elijan crear comunidad para potenciar todo tipo de crecimiento.
                Si quieres saber más sobre nuestras iniciativas, visita nuestra
                sección de{" "}
                <Link to="/blog" style={linkStyle}>
                  blog
                </Link>{" "}
                o{" "}
                <Link to="/contacto" style={linkStyle}>
                  contáctanos
                </Link>
                .
              </p>
            </div>
            <div className="values-section">
              <CarouselValues />
            </div>
          </div>
        </div>
      </section>

      <section className="parallax bg4">
        <div style={{ width: "85%", margin: "0 auto", padding: "1rem 0" }}>
          <Collapse />
          <div
            className="show-on-mobile"
            style={{
              width: "85%",
              textAlign: "center",
              margin: "0 auto",
              backgroundColor: "rgba(71, 55, 187, 0.4)",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                color: "#fdfdfd",
                fontSize: "1.2rem",
                marginBottom: "1rem",
              }}
            >
              ¿Te gustaría participar en nuestras iniciativas o proponer nuevas
              ideas?
            </p>
            <Link
              to="/register"
              style={{
                display: "inline-block",
                background: "#ea4f33",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
            >
              Únete a FemCoders Club
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
