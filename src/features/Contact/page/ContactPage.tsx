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
          content="Ponte en contacto con FemCoders Club. ¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti! Puedes encontrarnos en Spotify, Instagram, LinkedIn, YouTube, GitHub y Slack."
        />
        <meta
          name="keywords"
          content="contacto, FemCoders Club, mujeres en tecnología, comunidad tecnológica, preguntas, comentarios, redes sociales"
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
          <ContactForm recipientEmail={recipientEmail} />
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
