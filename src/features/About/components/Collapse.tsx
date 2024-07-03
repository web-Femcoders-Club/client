import React, { useState } from "react";
import iconIdea from "/iconIdea.png";
import "../page/AboutPage.css";

interface Idea {
  title: string;
  content: string;
}

const IdeasSection: React.FC = () => {
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
    <section className="parallax bg4 full-height">
      <div className="h-full md:mt-16 bg-gradient-to-r from-secondary to-accent lg:py-16">
        <div className="flex flex-col items-center px-2 py-16 lg:flex lg:items-center lg:pt-8 gap-6">
          <img src={iconIdea} className="w-[50px]" alt="Icono Ideas" />
          <h3>Nuestras Ideas</h3>
          <div className="max-w-6xl text-primary text-base font-textBody space-y-4 mx-8">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className={`idea-card ${
                  expandedIndex === index ? "expanded" : ""
                }`}
                onClick={() => handleExpand(index)}
              >
                <div className="idea-card-title text-xl font-medium">
                  {idea.title}
                </div>
                {expandedIndex === index && (
                  <div className="idea-card-content">
                    <p
                      className="text-white"
                      style={{
                        fontSize: "1.2rem",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      {idea.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeasSection;
