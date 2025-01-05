import React from "react";
import {
  BsSpotify,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsGithub,
} from "react-icons/bs";
import { FaSlack } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import "./ContactPage.css";
import { Helmet } from "react-helmet";

const ContactPage: React.FC = () => {
  const recipientEmail = "info@femcodersclub.com";

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contacto - FemCoders Club</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotras en FemCoders Club. Participa, consulta o colabora con nuestra comunidad de mujeres apasionadas por la tecnología."
        />
        <meta
          name="keywords"
          content="contacto, FemCoders Club, mujeres en tecnología, comunidad tecnológica, redes sociales, consulta, colaboración, empoderamiento femenino, desarrollo web"
        />
        <link rel="canonical" href="https://femcodersclub.com/contacto" />

        <meta property="og:title" content="Contacto - FemCoders Club" />
        <meta
          property="og:description"
          content="Ponte en contacto con FemCoders Club y colabora con nuestra comunidad de mujeres en tecnología."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://femcodersclub.com/contacto" />
        <meta
          property="og:image"
          content="/assets/femcoders-contact-thumbnail.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto - FemCoders Club" />
        <meta
          name="twitter:description"
          content="Consulta, participa o colabora con FemCoders Club, una comunidad para mujeres apasionadas por la tecnología."
        />
        <meta
          name="twitter:image"
          content="/assets/femcoders-contact-thumbnail.jpg"
        />
      </Helmet>

      <main className="contact-main">
        <section className="contact-info">
          <h2>Información de contacto</h2>
          <p>
            ¿Tienes alguna pregunta o comentario? <br />
            ¡Nos encantaría saber de ti! No dudes en ponerte en contacto <br />
            con nosotras a través de cualquiera de los siguientes medios:
          </p>
          <ul>
            <li>
              <span>
                {" "}
                Email:{" "}
                <a href={`mailto:${recipientEmail}`} aria-label="Email">
                  {recipientEmail}
                </a>
              </span>
            </li>
          </ul>
          <div className="social-links">
            <a
              href="https://open.spotify.com/user/31wgl44unbqdv6nh4igsgw5pp6t4?si=29d0152b29404e44"
              aria-label="Spotify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSpotify className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/femcoders_club/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/fem-coders-club/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
              aria-label="Slack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSlack className="social-icon" />
            </a>
          </div>
        </section>

        <section className="contact-form-section">
          {/* <ContactForm recipientEmail={recipientEmail} /> */}
          <ContactForm recipientEmail="info@femcodersclub.com" />

        </section>
      </main>
    </div>
  );
};

export default ContactPage;
