import React, { useState } from "react";
import OptimizedImage from "../../../components/OptimizedImage"; 
import iconIdea from "/iconIdea.png";
import "../page/AboutPage.css";

interface Idea {
  title: string;
  content: string;
}

const Collapse: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const ideas: Idea[] = [
    {
      title: "Directorio de Miembros",
      content:
        "Crear un directorio de mujeres que pertenecen a nuestra comunidad brindando un lugar más donde autopromocionarse.",
    },
    {
      title: "Espacios de Colaboración y Desarrollo",
      content:
        "Plantear espacios de Coworking y Laboratorios de Creación donde el trabajo colaborativo fomenta la innovación y el diseño.",
    },
    {
      title: "Alianzas Estratégicas",
      content:
        "Buscar la colaboración con empresas que apoyen nuestra misión y visión.",
    },
    {
      title: "Eventos Tecnológicos en Vivo",
      content:
        "Una celebración de la creación de código, donde todos están invitados a unirse y experimentar la magia de la tecnología.",
    },
    {
      title: "Mentorías",
      content:
        "Establecer programas de mentorías donde mujeres con experiencia en tecnología puedan guiar y apoyar a aquellas que están comenzando o buscando avanzar en sus carreras.",
    },
    {
      title: "Recursos y Herramientas",
      content:
        "Proporcionar acceso a recursos y herramientas útiles para el desarrollo profesional de las mujeres en tecnología, como cursos en línea, plataformas de aprendizaje, bibliotecas de código abierto, etc.",
    },
    {
      title: "Espacios de Networking",
      content:
        "Crear eventos regulares, tanto virtuales como presenciales, donde las mujeres en tecnología puedan reunirse para conectar, compartir experiencias y establecer relaciones profesionales significativas.",
    },
    {
      title: "Grupos de Interés Especial",
      content:
        "Crear grupos de interés especial dentro de la comunidad, centrados en áreas específicas de la tecnología o en temas relevantes para las mujeres, como inteligencia artificial, ciberseguridad, tecnología blockchain, etc.",
    },
    {
      title: "Programas de Emprendimiento",
      content:
        "Ofrecer programas de apoyo para mujeres emprendedoras en tecnología, que incluyan asesoramiento, oportunidades de networking y acceso a inversores.",
    },
    {
      title: "Actividades de Concientización",
      content:
        "Organizar campañas y eventos para concientizar sobre la importancia de la diversidad de género en la tecnología y abogar por cambios positivos en la industria y en la sociedad en general.",
    },
    {
      title: "Comunidad Virtual",
      content:
        "Establecer una plataforma en línea donde las miembros de FemCoders Club puedan conectarse, compartir recursos, colaborar en proyectos, hacer preguntas y recibir apoyo continuo.",
    },
  ];

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <OptimizedImage 
          src={iconIdea} 
          className="icon-idea icon-float" 
          alt="Icono Ideas" 
        />
        <h3>Nuestras Ideas</h3>
      </div>
      
      <div className="ideas-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
        {ideas.map((idea, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
            <div
              key={index}
              className={`idea-card ${isExpanded ? "expanded" : ""}`}
              onClick={() => handleExpand(index)}
              style={{ 
                background: isExpanded 
                  ? "rgba(71, 55, 187, 0.7)" 
                  : "rgba(71, 55, 187, 0.3)",
                ...(isExpanded ? { gridColumn: "1 / -1" } : {}),
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: isExpanded 
                  ? "0 10px 20px rgba(0, 0, 0, 0.2)" 
                  : "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleExpand(index);
                }
              }}
              role="button"
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="idea-card-title" style={{ 
                  color: "#fdfdfd" 
                }}>
                  {idea.title}
                </div>
                <div style={{ 
                  color: "#fdfdfd",
                  fontSize: "1.5rem",
                  fontWeight: "bold" 
                }}>
                  {isExpanded ? '−' : '+'}
                </div>
              </div>
              
              {isExpanded && (
                <div className="idea-card-content">
                  <p style={{ 
                    fontSize: "1rem", 
                    marginTop: "1rem",
                    color: "#fdfdfd" 
                  }}>
                    {idea.content}
                  </p> 
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collapse;
