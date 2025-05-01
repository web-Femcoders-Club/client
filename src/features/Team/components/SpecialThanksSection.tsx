import React from "react";
import { IoMdHeart } from "react-icons/io";
import PromoterCard from "./PromoterCard";
import "./SpecialThanksSection.css";

const SpecialThanksSection: React.FC = () => {
  const promotersData = [
    {
      imageSrc: "/Isadora.jpeg",
      name: "Isadora Matias",
      role: "Promotora, Fotógrafa y Desarrolladora Full-Stack",
      description:
        "Gracias, Isadora, por tu entrega y apoyo a FemCoders Club. Eres clave en nuestra nueva plataforma y en inmortalizar cada evento. Tu energía y compromiso nos inspiran.",
      specialty: "Desarrollo Web y Fotografía de Eventos",
      contribution:
        "Desarrollo de nuestra plataforma web, documentación fotográfica de eventos y apoyo en talleres técnicos.",
      linkedin: "https://www.linkedin.com/in/isadoramatias/",
    },
    {
      imageSrc: "/Shima.png",
      name: "Shima Naderi",
      role: "Promotora y Desarrolladora Full-Stack",
      description:
        "Gracias, Shima, por tu alegría y apoyo en los eventos de FemCoders Club. Tu energía positiva siempre fue un impulso para la comunidad.",
      specialty: "Desarrollo Full-Stack y Mentoría",
      contribution: "Apoyo en eventos con actitud cercana y positiva.",
      linkedin: "https://www.linkedin.com/in/shima-naderi/",
    },
    {
      imageSrc: "/Sablina.jpeg",
      name: "Sablina Angulo",
      role: "Promotora y Mentora de Inglés",
      description:
        "Agradecemos a Sablina por su dedicación y apoyo a FemCoders Club. Ha sido una mentora clave para nuestras miembros, ofreciendo orientación en el aprendizaje del inglés.",
      specialty: "Enseñanza de Inglés Técnico",
      contribution:
        "Talleres de inglés técnico y apoyo en la comunicación profesional.",
      linkedin: "https://www.linkedin.com/in/sablina-angulo-li/",
    },
  ];

  return (
    <section className="special-thanks-section parallax bg2">
      <div className="special-thanks-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Agradecimientos Especiales
            <IoMdHeart className="heart-icon" aria-hidden="true" />
          </h2>

          <div className="section-intro">
            <p>
              En{" "}
              <a
                href="https://www.femcodersclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a la página principal de FemCoders Club"
              >
                FemCoders Club
              </a>{" "}
              contamos con el impulso de mujeres comprometidas que apoyan
              activamente el crecimiento de nuestra comunidad como promotoras.
              Su participación en eventos, actividades y espacios de aprendizaje
              es clave para seguir avanzando juntas.
            </p>
            <p>
              Puedes conocer más sobre nuestra comunidad, iniciativas y espíritu
              colaborativo en nuestra página{" "}
              <a
                href="https://www.femcodersclub.com/femcoders-quienes-somos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a la página Quiénes Somos de FemCoders Club"
              >
                Quiénes Somos
              </a>
              , donde compartimos parte de este camino colectivo.
            </p>
          </div>
        </div>

        <div
          className="promoters-cards-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {promotersData.map((promoter, index) => (
            <div
              key={index}
              className="promoter-card-wrapper"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <PromoterCard
                imageSrc={promoter.imageSrc}
                name={promoter.name}
                role={promoter.role}
                description={promoter.description}
                specialty={promoter.specialty}
                contribution={promoter.contribution}
                linkedin={promoter.linkedin}
              />
            </div>
          ))}
        </div>

        <div
          className="special-thanks-footer bg1"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            ¿Conoces a alguien con pasión por empoderar a mujeres en tecnología?
            Invítale a formar parte de nuestra red de mentoras y promotoras.
          </p>
          <a
            href="https://www.femcodersclub.com/contacto"
            className="collaborate-button"
            aria-label="Ir al formulario de contacto de FemCoders Club para colaborar"
          >
            Quiero colaborar
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialThanksSection;
