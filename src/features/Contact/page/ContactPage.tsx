import React from "react";
import { Helmet } from "react-helmet";
import { FaLightbulb, FaRocket, FaSlack, FaUsers } from "react-icons/fa";
import SeccionEscribenos from "../components/SeccionEscribenos";
import { SLACK_INVITE_URL } from "../../../utils/constants";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contacto - FemCoders Club | Únete a Nuestra Comunidad Tech</title>
        <meta
          name="description"
          content="Conéctate con FemCoders Club. Únete a nuestra comunidad de mujeres en tecnología, participa en eventos, recibe mentoring o colabora en proyectos. ¡Tu voz importa!"
        />
        <meta
          name="keywords"
          content="contacto femcoders club, mujeres tecnología, comunidad tech, mentoring, eventos tecnología, colaboración, slack femcoders, networking mujeres"
        />
        <link rel="canonical" href="https://www.femcodersclub.com/contacto" />

        <meta property="og:title" content="Contacto - FemCoders Club | Únete a Nuestra Comunidad" />
        <meta
          property="og:description"
          content="Conecta con la mayor comunidad hispanohablante de mujeres en tecnología. Eventos, mentoring, networking y oportunidades de crecimiento profesional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.femcodersclub.com/contacto" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/femcoders-contact-social.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto - FemCoders Club" />
        <meta
          name="twitter:description"
          content="Únete a la comunidad de mujeres tech más grande en español. Networking, mentoring y oportunidades de crecimiento."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/femcoders-contact-social.jpg"
        />
      </Helmet>

      <SeccionEscribenos />

      <section className="contact-reasons-wrapper">
        <div className="contact-reasons-container">
          <h2 className="contact-reasons-title">¿Por qué contactarnos?</h2>
          <div className="contact-reasons-grid">
            <div className="contact-reason-item">
              <FaRocket className="contact-reason-icon" />
              <h3>Impulsa tu carrera</h3>
              <p>
                Conecta con profesionales de la industria, descubre oportunidades laborales 
                y recibe mentoring para acelerar tu crecimiento profesional en tecnología.
              </p>
            </div>
            
            <div className="contact-reason-item">
              <FaUsers className="contact-reason-icon" />
              <h3>Networking auténtico</h3>
              <p>
                Forma parte de una red de apoyo genuina donde compartir experiencias, 
                colaborar en proyectos y crear conexiones duraderas con mujeres de tu sector.
              </p>
            </div>
            
            <div className="contact-reason-item">
              <FaLightbulb className="contact-reason-icon" />
              <h3>Aprende y enseña</h3>
              <p>
                Participa en workshops, talks y eventos donde podrás aprender nuevas 
                habilidades y compartir tu conocimiento con la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Slack */}
      <section className="contact-slack-wrapper">
        <div className="contact-slack-container">
          <FaSlack className="contact-slack-icon" />
          <h3>Únete a nuestra comunidad en Slack</h3>
          <p>
            Más de 1000 mujeres compartiendo conocimiento, oportunidades y apoyo mutuo. 
            Un espacio seguro para hacer preguntas, celebrar logros y crecer juntas.
          </p>
          <a
            href={SLACK_INVITE_URL}
            className="contact-slack-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Únete a Slack
          </a>
        </div>
      </section>

      <section className="contact-cta-wrapper">
        <div className="contact-cta-container">
          <h2>¿Lista para dar el siguiente paso?</h2>
          <p>
            Únete a miles de mujeres que ya forman parte del cambio en la industria tecnológica
          </p>
          <div className="contact-cta-buttons">
            <a href="/register" className="contact-cta-btn contact-cta-primary">
              Crear cuenta gratuita
            </a>
            <a href="/eventos" className="contact-cta-btn contact-cta-secondary">
              Ver próximos eventos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
