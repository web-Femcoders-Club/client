import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowLeft, Github, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { esAdmin, haySesion } from "../../../utils/sesion";
import DiffComponent from "../components/DiffComponent";
import "./ComunityHub.css";

interface Resource {
  image1: string;
  title: string;
  description: string;
  githubLink: string;
  liveDemo?: string;
}

const ComunityHub: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  /*
   * Esta página es pública, así que el botón de volver solo aparece con sesión
   * abierta: quien llega desde fuera no tiene ningún panel al que regresar.
   *
   * El destino y el `state` se copian del desplegable del avatar en Header —
   * sin ese `state`, el saludo de bienvenida cae a «Usuario».
   */
  const conSesion = haySesion();
  const admin = esAdmin();

  const volver = () => {
    if (admin) {
      navigate("/admin");
      return;
    }
    navigate("/welcome", {
      state: {
        userName: sessionStorage.getItem("userName") || "Usuario",
        userId: Number(sessionStorage.getItem("userId")) || undefined,
      },
    });
  };

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

  const filteredResources = resources.filter((resource) =>
    `${resource.title} ${resource.description}`.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Recursos destacados - FemCoders Club</title>
        <meta
          name="description"
          content="Explora proyectos de FemCoders Club en GitHub y encuentra plantillas de CV y portafolios para practicar y adaptar a tu experiencia."
        />
        <meta
          name="keywords"
          content="FemCoders, recursos de programación, GitHub, frontend, backend, React, Node.js"
        />
        <meta property="og:title" content="Recursos destacados - FemCoders Club" />
        <meta
          property="og:description"
          content="Plantillas de CV y portafolios compartidas por FemCoders Club para aprender, practicar y dar a conocer tus proyectos."
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
        <div className="comunity-hub__contenedor">
        {conSesion && (
          <button
            type="button"
            className="comunity-hub__volver"
            onClick={volver}
          >
            <ArrowLeft className="comunity-hub__icono-volver" aria-hidden="true" />
            {admin ? "Volver al panel" : "Volver a mi perfil"}
          </button>
        )}

        <header className="comunity-hub-header">
          <h1>Recursos destacados</h1>
          <p className="comunity-hub__entrada">
            Aprende y practica con los proyectos que compartimos en FemCoders
            Club. Aquí encontrarás plantillas de CV y portafolios que puedes
            explorar, adaptar a tu estilo y usar como punto de partida para tus
            propias ideas.
          </p>
          <a
            href="https://github.com/femcodersclub"
            target="_blank"
            rel="noopener noreferrer"
            className="comunity-hub__github"
          >
            <Github size={20} aria-hidden="true" />
            Explorar nuestros repositorios en GitHub
          </a>
        </header>

        <section aria-labelledby="proyectos-titulo">
          <div className="comunity-hub__herramientas">
            <h2 id="proyectos-titulo">Proyectos de la comunidad</h2>
            <div className="comunity-hub__buscador">
              <label htmlFor="buscar-proyectos">Buscar proyectos</label>
              <div className="comunity-hub__campo">
                <Search size={20} aria-hidden="true" />
                <input
                  id="buscar-proyectos"
                  type="search"
                  placeholder="Nombre o tecnología…"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
            </div>
          </div>
          {filteredResources.length > 0 ? (
          <div className="comunity-hub-diffs">
            {filteredResources.map((resource) => (
              <DiffComponent
                key={resource.githubLink}
                image1={resource.image1}
                title={resource.title}
                description={resource.description}
                githubLink={resource.githubLink}
                liveDemo={resource.liveDemo}
              />
            ))}
          </div>
          ) : (
            <p className="comunity-hub__vacio" role="status">
              No encontramos proyectos con esa búsqueda. Prueba con otro nombre
              o una tecnología, como React o HTML.
            </p>
          )}
        </section>
        </div>
      </div>
    </>
  );
};

export default ComunityHub;
