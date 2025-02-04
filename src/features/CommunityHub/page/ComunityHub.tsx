import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DiffComponent from "../components/DiffComponent";
import Buscar from "../../Blog/components/Buscar";
import "./ComunityHub.css";
import "../../Blog/page/PostStyles.css";

interface Resource {
  image1: string;
  title: string;
  description: string;
  githubLink: string;
  liveDemo?: string;
}

const ComunityHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const resources: Resource[] = [
    {
      image1: "/assets/ComunityHub/collage.png",
      title: "Cv4Coders",
      description:
        "Plantillas de CV personalizables creadas con HTML, CSS y JavaScript, diseñadas para profesionales del sector tecnológico. Crea currículums únicos y adapta cada plantilla a tu estilo y necesidades.",
      githubLink: "https://github.com/femcodersclub/cv4Coders",
      liveDemo: "https://femcodersclub.github.io/cv4Coders/",
    },
    {
      image1: "/assets/ComunityHub/portfolios.png",
      title: "Coders Portfolio",
      description:
        "Plantillas de portafolios para desarrolladoras web, diseñadas con React, TypeScript, TailwindCSS. Personaliza tu portafolio y destaca tus proyectos y habilidades técnicas.",
      githubLink: "https://github.com/femcodersclub/CodersPortfolio.git",
      liveDemo: "https://femcodersclub.github.io/CodersPortfolio/",
    },
  ];

  const handleSearch = (query: string) => setSearchQuery(query);

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const customRows = [
    filteredResources.slice(0, 3),
    filteredResources.slice(3, 5),
    filteredResources.slice(5, 8),
  ];

  return (
    <>
      <Helmet>
        <title>Community Hub - FemCoders Club</title>
        <meta
          name="description"
          content="Descubre recursos y repositorios en GitHub compartidos por nuestra comunidad. Potencia tus habilidades técnicas con FemCoders Club."
        />
        <meta
          name="keywords"
          content="FemCoders, recursos de programación, GitHub, frontend, backend, React, Node.js"
        />
        <meta property="og:title" content="Community Hub - FemCoders Club" />
        <meta
          property="og:description"
          content="Explora proyectos de frontend, backend, APIs y más en el Community Hub de FemCoders Club."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://femcodersclub.com/comunity-hub"
        />
        <meta
          property="og:image"
          content="/assets/community-hub-thumbnail.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />
      </Helmet>

      <div className="comunity-hub">
        <header className="comunity-hub-header">
          <h1>¡Potencia tu código con FemCoders Club!</h1>
          <Buscar onSearch={handleSearch} />
          <p className="styled-paragraph">
            ¡Empodera tus habilidades técnicas con FemCoders Club! En nuestros{" "}
            <span>
              <a
                href="https://github.com/femcodersclub"
                target="_blank"
                rel="noopener noreferrer "
                className="underline"
              >
                repositorios de GitHub
              </a>{" "}
            </span>
            encontrarás una comunidad de mujeres programadoras que comparten sus
            conocimientos y proyectos. Desde tutoriales para principiantes hasta
            desafíos para desarrolladoras experimentadas, ¡aquí encontrarás el
            espacio perfecto para crecer y conectar con otras mujeres
            apasionadas por la tecnología.
          </p>
        </header>

        {customRows.map((row, rowIndex) => (
          <div key={rowIndex} className="comunity-hub-diffs custom-row">
            {row.map((resource, index) => (
              <DiffComponent
                key={index}
                image1={resource.image1}
                title={resource.title}
                description={resource.description}
                githubLink={resource.githubLink}
                liveDemo={resource.liveDemo}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ComunityHub;