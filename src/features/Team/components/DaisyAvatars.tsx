import React, { useState } from "react";
import OptimizedImage from "../../../components/OptimizedImage";
import { FaLinkedin, FaCode, FaToolbox } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import "../page/DaisyAvatars.css";

const contributorProfiles = [
  {
    url: "https://www.linkedin.com/in/disofiareynoso/",
    name: "Sofia Reynoso",
    img: "/sofi.jpeg",
    specialty: "UIX Designer",
  },
  {
    url: "https://www.linkedin.com/in/belen-alonso-peral/",
    name: "Belen Alonso Peral",
    img: "/Belen.jpeg",
    specialty: "Desarrolladora Full Stack",
  },
  {
    url: "https://www.linkedin.com/in/josealbertoperezrego/",
    name: "Jose Alberto Perez Rego",
    img: "/Jose.jpeg",
    specialty: "Google Cloud / Google for Startups Cloud Program",
  },
  {
    url: "https://www.linkedin.com/in/ruth-daniela-aguirre/",
    name: "Ruth Daniela Aguirre",
    img: "/Daniela.jpeg",
    specialty: "Desarrolladora DAM | Full Stack Developer",
  },
  {
    url: "https://www.linkedin.com/in/ana-maria-hg/",
    name: "Ana Maria HG",
    img: "/AnaMaria.jpeg",
    specialty: "Front-end developer and UX/UI designer",
  },
  {
    url: "https://www.linkedin.com/in/karyoli-nieves/",
    name: "Karyoli Nieves",
    img: "/Karyoly.jpeg",
    specialty: "Full Stack Developer",
  },
];

const DaisyAvatars = () => {
  const [activeContributor, setActiveContributor] = useState<number | null>(
    null
  );

  const showContributorInfo = (index: number) => {
    setActiveContributor(index);
  };

  const hideContributorInfo = () => {
    setActiveContributor(null);
  };

  const getSpecialtyIcon = (specialty: string) => {
    if (specialty.toLowerCase().includes("frontend")) {
      return <FaCode className="specialty-icon" />;
    } else if (specialty.toLowerCase().includes("backend")) {
      return <FaToolbox className="specialty-icon" />;
    } else if (
      specialty.toLowerCase().includes("design") ||
      specialty.toLowerCase().includes("ux")
    ) {
      return <MdOutlineDesignServices className="specialty-icon" />;
    } else {
      return <FaCode className="specialty-icon" />;
    }
  };

  return (
    <div className="contributors-section">
      <div className="contributors-header" data-aos="fade-up">
        <h3 className="contributors-title">Mención Especial</h3>
        <p className="contributors-subtitle">
          A todas aquellas personas que han contribuido a dar vida a esta página
          web
        </p>
        <p className="contributors-description">
          Esta plataforma digital parte de una idea inicial desarrollada como
          proyecto en un bootcamp, y ha evolucionado gracias a quienes
          participaron en aquel primer impulso. Agradecemos su tiempo,
          motivación y ganas de aportar desde distintas disciplinas.
        </p>
      </div>

      <div className="daisy-avatars" data-aos="fade-up" data-aos-delay="200">
        {contributorProfiles.map((profile, index) => (
          <div
            key={index}
            className="avatar-card"
            onMouseEnter={() => showContributorInfo(index)}
            onMouseLeave={hideContributorInfo}
            onFocus={() => showContributorInfo(index)}
            onBlur={hideContributorInfo}
            data-aos="fade-up"
            data-aos-delay={100 + index * 50}
          >
            <div className="avatar-image-container">
              <OptimizedImage
                src={profile.img}
                alt={`Foto de ${profile.name}`}
                className="avatar-image"
              />
              {getSpecialtyIcon(profile.specialty)}
            </div>
            <h4 className="avatar-name">{profile.name}</h4>
            <p className="avatar-specialty">{profile.specialty}</p>

            <div
              className={`avatar-details ${
                activeContributor === index ? "active" : ""
              }`}
            >
              <p className="avatar-contribution"></p>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="avatar-linkedin"
                aria-label={`Perfil de LinkedIn de ${profile.name}`}
              >
                <FaLinkedin /> Conectar
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className="contributors-footer"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p>
          ¿Te gustaría practicar tus habilidades en desarrollo y contribuir en
          un entorno colaborativo? Únete a{" "}
          <a
            href="https://github.com/femcodersclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            nuestro GitHub
          </a>{" "}
          y empieza a participar.
        </p>

        <a
          href="https://github.com/femcodersclub"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          Contribuir en GitHub
        </a>
      </div>
    </div>
  );
};

export default DaisyAvatars;
