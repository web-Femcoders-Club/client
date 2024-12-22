import { Helmet } from "react-helmet";
import { Calendar, Download, Eye, PresentationIcon } from "lucide-react";

interface Presentation {
  title: string;
  date: string;
  description: string;
  fileUrl: string;
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

          <p className="styled-paragraph">{presentation.description}</p>
          <div className="flex gap-4 mt-4">
            <a
              href={presentation.fileUrl}
              className="primary-button flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              download
            >
              <Download className="h-5 w-5 mr-2" />
              Descargar
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
  const presentations: Presentation[] = [
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
        "Aprende a transformar tu perfil de GitHub en una herramienta profesional y atractiva con esta presentación de Maricarmen Chueco. Descubre consejos prácticos, recursos esenciales y herramientas clave para editar tu perfil desde cero, mejorar tu imagen profesional y optimizar tu README.md. Esta presentación está diseñada para diseñadores, desarrolladores y profesionales que buscan destacar en el mundo digital..",
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
          {presentations.map((presentation, index) => (
            <TimelineEvent
              key={presentation.title + index}
              presentation={presentation}
              index={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedPresentation;
