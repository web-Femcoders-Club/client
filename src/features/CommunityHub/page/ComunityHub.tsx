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
      liveDemo: "https://femcodersclub.github.io/cv4Coders/", // Enlace correcto
    },
    // {
    //   image1:
    //     "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    //   title: "Backend Sólido",
    //   description: "APIs robustas construidas con Node.js y NestJS.",
    //   githubLink: "https://github.com/tu-proyecto/backend",
    // },
    // {
    //   image1:
    //     "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    //   title: "Aplicaciones Fullstack",
    //   description: "Desarrollo de aplicaciones completas con React y Node.js.",
    //   githubLink: "https://github.com/tu-proyecto/fullstack",
    // },
    // {
    //   image1:
    //     "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
    //   title: "HTML Semántico",
    //   description: "Prácticas accesibles con HTML5 y SEO.",
    //   githubLink: "https://github.com/tu-proyecto/html-semantico",
    // },
    // {
    //   image1:
    //     "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    //   title: "Backend Avanzado",
    //   description: "Microservicios avanzados con NestJS y Docker.",
    //   githubLink: "https://github.com/tu-proyecto/backend-avanzado",
    // },
    // {
    //   image1:
    //     "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    //   title: "APIs RESTful",
    //   description: "Crea APIs RESTful robustas usando Express.js.",
    //   githubLink: "https://github.com/tu-proyecto/apis-rest",
    // },
    // {
    //   image1:
    //     "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
    //   title: "Diseño UI/UX",
    //   description: "Interfaces atractivas y funcionales.",
    //   githubLink: "https://github.com/tu-proyecto/uiux",
    // },
    // {
    //   image1:
    //     "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    //   title: "Pruebas Unitarias",
    //   description: "Escribe tests unitarios con Jest.",
    //   githubLink: "https://github.com/tu-proyecto/tests",
    // },
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
        <meta property="og:url" content="https://femcodersclub.com/comunity-hub" />
        <meta property="og:image" content="/assets/community-hub-thumbnail.jpg" />
        <meta property="og:site_name" content="FemCoders Club" />
      </Helmet>

      <div className="comunity-hub">
        <header className="comunity-hub-header">
          <h1>¡Potencia tu código con FemCoders Club!</h1>
          <Buscar onSearch={handleSearch} />
          <p className="styled-paragraph">
            ¡Empodera tus habilidades técnicas con FemCoders Club! En nuestros <span><a href="https://github.com/femcodersclub" target="_blank" rel="noopener noreferrer " className="underline">repositorios de GitHub</a> </span>encontrarás una comunidad de mujeres
            programadoras que comparten sus conocimientos y proyectos. Desde
            tutoriales para principiantes hasta desafíos para desarrolladoras
            experimentadas, ¡aquí encontrarás el espacio perfecto para crecer y
            conectar con otras mujeres apasionadas por la tecnología.
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

