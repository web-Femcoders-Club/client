import { Helmet } from "react-helmet";
import { Calendar, Download, Eye, PresentationIcon } from "lucide-react";
import { useState } from "react";

interface Presentation {
  title: string;
  date: string;
  description: string;
  fileUrl: string;
  projectZipUrl?: string;
}

const TimelineEvent = ({
  presentation,
  index,
}: {
  presentation: Presentation;
  index: number;
}) => {
  const isLeftAligned = index % 2 === 0;

  return (
    <div
      className={`group relative flex flex-col md:flex-row ${
        isLeftAligned ? "" : "md:flex-row-reverse"
      } items-center mb-16 hover:transform hover:scale-[1.02] transition-all duration-300`}
    >
      <div
        className="absolute left-1/2 h-full w-px -translate-x-1/2 hidden md:block"
        style={{ backgroundColor: "#4737bb " }}
      />
      <div
        className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block
  before:absolute before:w-8 before:h-8 before:rounded-full before:-left-2 before:-top-2 before:opacity-50
  group-hover:scale-110 transition-all duration-300"
        style={{
          backgroundColor: "#ea4f33",
        }}
      ></div>

      <div
        className={`md:w-1/2 p-6 ${isLeftAligned ? "md:pr-12" : "md:pl-12"}`}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mt">
          <h3>{presentation.title}</h3>
          <div className="flex items-center gap-2 text-sm mt-2">
            <Calendar className="h-4 w-4" style={{ color: "#ea4f33" }} />
            <time
              dateTime={presentation.date}
              style={{
                color: "#2a2170",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {new Date(presentation.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <div
            className="styled-paragraph"
            dangerouslySetInnerHTML={{ __html: presentation.description }}
          ></div>
          <div className="flex gap-4 mt-4 flex-wrap">
            <a
              href={presentation.fileUrl}
              className="primary-button flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              download
            >
              <Download className="h-5 w-5 mr-2" />
              Descargar PDF
            </a>
            <a
              href={presentation.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <Eye className="h-5 w-5 mr-2" />
              Ver Presentación
            </a>
            {presentation.projectZipUrl && (
              <a
                href={presentation.projectZipUrl}
                className="flex items-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
                download
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar Proyecto (RAR)
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-6">
        <div className="transform transition-all duration-300 hover:scale-[1.02]">
          <iframe
            src={presentation.fileUrl}
            title={presentation.title}
            className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ height: "350px" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const FeaturedPresentation = () => {
  // Añadir estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const presentationsPerPage = 2;

  const presentations: Presentation[] = [
    {
      title: "DataConnect: De la Comunicación a Data Analytics - Le Wagon",
      date: "2025-05-31",
      description: `
        Presentación de <strong>Laura Pourtier</strong>, Data Analytics Teacher & Batch Manager en Le Wagon.
        Descubre la inspiradora historia de transformación profesional de Laura, quien pasó de trabajar 
        en comunicación y ONGs a convertirse en experta en análisis de datos. En esta charla, Laura 
        comparte su experiencia como estudiante de Le Wagon y su evolución hasta convertirse en profesora, 
        demostrando que "nunca pensé que trabajaría en tech, ahora enseño datos a personas como tú".
        Incluye insights sobre el mercado laboral actual, estadísticas clave del sector tech, y cómo 
        las habilidades técnicas son ahora esenciales en roles no técnicos como marketing, UX/UI, 
        finanzas y RRHH.
      `,
      fileUrl: "/MaterialesEventos/LeWagonDataConnect.pdf",
    },
    {
      title: "Bridging Worlds: Cómo la Cultura de Glovo Potencia el Talento en Data",
      date: "2025-05-31", 
      description: `
        Presentación de <strong>Kevin Badía</strong> (Senior Data Analyst) y <strong>Pia Trnovec</strong> 
        (Data Analyst) de Glovo. Explora cómo Glovo utiliza los datos en el core de sus operaciones para 
        optimizar entregas en más de 1,500 ciudades y 23 países. Los ponentes comparten casos prácticos 
        del equipo de Operations, incluyendo proyectos de Rider Demand Coverage, Courier Compensation 
        y Delivery Assignations. Descubre su stack tecnológico (BigQuery, Looker, dbt, Airflow), 
        la arquitectura Data Mesh, y cómo equilibran delivery time vs efficiency para maximizar el ROI.
        Una perspectiva única sobre el uso de datos en una empresa multinacional de delivery.
      `,
      fileUrl: "/MaterialesEventos/GlovoDataConnect.pdf",
    },
    {
      title: "Réplica de Nike Store con React y JavaScript",
      date: "2025-03-10",
      description: `
        Proyecto de <a href="https://www.linkedin.com/in/almudena-rendon-fernandez/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 font-medium">Almudena Rendón Fernández</a>, Software Developer y Top 10 Women in IT & Tech LinkedIn Spain. <br>
        Esta réplica de Nike Store incluye diseño responsivo, carrito de compra con persistencia de datos, 
        formularios con validación en tiempo real y envío de emails de confirmación.
        Desarrollado principalmente con React, JavaScript y Node.js. Un excelente ejemplo de desarrollo web moderno enfocado en la experiencia de usuario.
      `,
      fileUrl: "/MaterialesEventos/NikeStoreAlmudenaRendon.pdf",
      projectZipUrl: "/MaterialesEventos/NikeStoreAlmudenaRendon.rar",
    },
    {
      title: "Accesibilidad y Ciberseguridad en el Desarrollo Web",
      date: "2024-11-20",
      description: `
        Descubre cómo implementar accesibilidad desde el inicio del desarrollo web y su relación con la ciberseguridad. 
        Rocío Cejudo aborda elementos clave como semántica en HTML, ARIA, validación y mensajes claros, 
        y explica cómo evitar errores comunes. También se exploran amenazas de ciberseguridad como Malware, 
        SQL Injection y estrategias de mitigación.`,
      fileUrl: "/MaterialesEventos/presentaciónRocioCejudo.pdf",
    },
    {
      title:
        "Cómo Hacemos Nuestros Productos Accesibles: Retos y Enfoques de Pruebas",
      date: "2024-11-07",
      description:
        "Descubre el enfoque de Semrush para mejorar la accesibilidad de sus productos. En esta presentación en inglés, Daria Naidikova aborda los principales desafíos, herramientas y metodologías utilizadas, como Lighthouse, axe-core y pruebas manuales, para garantizar una experiencia inclusiva para todos los usuarios",
      fileUrl: "/MaterialesEventos/SemrushAccesibilidad.pdf",
    },
    {
      title: "Cómo Personalizar tu Perfil de GitHub",
      date: "2024-03-18",
      description:
        "Aprende a transformar tu perfil de GitHub en una herramienta profesional y atractiva con esta presentación de Mari Carmen Chueco Oviedo. Descubre consejos prácticos, recursos esenciales y herramientas clave para editar tu perfil desde cero, mejorar tu imagen profesional y optimizar tu README.md. Esta presentación está diseñada para diseñadores, desarrolladores y profesionales que buscan destacar en el mundo digital..",
      fileUrl: "/MaterialesEventos/CustomizaPerfilGithub.pdf",
    },
    {
      title:
        "Desbloqueando el Potencial de la Inteligencia Artificial: Del Problema al Impacto",
      date: "2024-09-19",
      description:
        "En esta charla, Anna Via, Machine Learning Product Manager, comparte un enfoque práctico sobre cómo identificar problemas, proponer soluciones y evaluar el impacto utilizando inteligencia artificial. La presentación, impartida en inglés, incluye estrategias como prompting, fine-tuning, RAG, y agentes para abordar desafíos reales y garantizar resultados efectivos. ¡Descubre cómo la IA puede transformar tu proceso de desarrollo!",
      fileUrl: "/MaterialesEventos/AnnaViaCharlaInteligenciaArtificial.pdf",
    },
    {
      title: "Atrápame si Puedes: Malware - Escondite y Búsqueda",
      date: "2024-09-05",
      description:
        "Aprende sobre las amenazas más comunes de malware, casos reales de ciberataques y estrategias de protección en este taller interactivo presentado en español. Impartido por Daniela Trifu y Yeraldin Salazar, incluye un ejercicio práctico para explorar técnicas avanzadas de detección y respuesta ante el malware. ¡Descubre cómo proteger tus sistemas y datos de las amenazas digitales!",
      fileUrl: "/MaterialesEventos/TallerMalware.pdf",
    },
  ];

  const sortedPresentations = [...presentations].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const indexOfLastPresentation = currentPage * presentationsPerPage;
  const indexOfFirstPresentation =
    indexOfLastPresentation - presentationsPerPage;
  const currentPresentations = sortedPresentations.slice(
    indexOfFirstPresentation,
    indexOfLastPresentation
  );

  const totalPages = Math.ceil(
    sortedPresentations.length / presentationsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Timeline de Presentaciones - FemCoders Club</title>
        <meta
          name="description"
          content="Descubre las presentaciones más destacadas de los eventos organizados por FemCoders Club en un formato de línea de tiempo vertical."
        />
      </Helmet>
      <section
        className="container mx-auto p-8"
        aria-labelledby="presentations-title"
      >
        <div className="text-center mt-24 mb-8">
          <div className="flex items-center gap-4 justify-center">
            <h1>Presentaciones Destacadas</h1>
            <PresentationIcon
              className="h-12 w-12"
              aria-hidden="true"
              style={{ color: "#ea4f33" }}
            />
          </div>
          <p className="styled-paragraph">
            Descubre las presentaciones más destacadas de los eventos
            organizados por FemCoders Club. Explora contenido exclusivo diseñado
            para inspirar y potenciar tus habilidades técnicas. ¡Empieza a
            aprender hoy mismo descargando los recursos de nuestras ponentes!
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 hidden md:block"
            style={{ backgroundColor: "#4737bb " }}
          />
          {currentPresentations.map((presentation, index) => (
            <TimelineEvent
              key={presentation.title + index}
              presentation={presentation}
              index={index}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <div className="btn-group pagination-custom">
              <button
                className={`btn ${currentPage === 1 ? "btn-disabled" : ""}`}
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                aria-label="Página anterior"
                title="Página anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span className="sr-only">Anterior</span>
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`btn ${
                    currentPage === index + 1 ? "btn-active" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`btn ${
                  currentPage === totalPages ? "btn-disabled" : ""
                }`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                aria-label="Página siguiente"
                title="Página siguiente"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="sr-only">Siguiente</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default FeaturedPresentation;
