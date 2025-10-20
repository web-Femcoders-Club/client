import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import InfoJobsBanner from "../components/InfoJobsBanner";
import OptimizedImage from "../../../components/OptimizedImage";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface JobOffer {
  id: number;
  title: string;
  company: string;
  pdf_url: string;
}

// Nueva sección para recursos de búsqueda de empleo
const JobSearchResourcesSection = () => {
  return (
    <div className="my-12">
      <h2
        className="text-3xl font-bold mb-8 text-[#4737bb] text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        📱 Recursos para tu búsqueda de empleo
      </h2>

      <div
        className="bg1 p-8 rounded-xl shadow-lg border-l-4 border-[#25D366] hover:shadow-xl transition-all duration-300"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <img 
              src="https://media.licdn.com/dms/image/v2/C4D03AQEPEQNKkYk-Mw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516927817715?e=1762387200&v=beta&t=NzlgjPB4PDanspT-t0BcIqZuCX_YpH6oWVw2osoFNa4"
              alt="Daniel García Baena"
              className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-[#25D366]"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center mb-3 flex-wrap gap-2">
              <span className="bg-[#25D366] text-white text-xs font-bold px-3 py-1 rounded-full">
                WHATSAPP
              </span>
              <span className="text-sm font-medium" style={{ color: "#25D366" }}>
                Actualizado cada domingo
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3" style={{ color: "#25D366" }}>
              Canal de WhatsApp: JuniorJobs
            </h3>
            
            <p className="text-lg mb-2 font-semibold" style={{ color: "#2a2170" }}>
              Ofertas gratuitas para developers junior (España y LATAM)
            </p>
            
            <p className="mb-4 leading-relaxed" style={{ color: "#2a2170" }}>
              Cada domingo, <strong>Daniel García Baena</strong> selecciona a mano las mejores ofertas 
              para candidatos junior o con poca experiencia. Un recurso 100% gratuito 
              pensado para ahorrar tiempo buscando entre cientos de portales.
            </p>

            <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-inner mb-4">
              <h4 className="font-semibold mb-2 text-[#ea4f33]">
                ¿Qué encontrarás?
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center" style={{ color: "#2a2170" }}>
                  <span className="mr-2 text-[#4737bb]">✓</span> Ofertas seleccionadas cada domingo
                </li>
                <li className="flex items-center" style={{ color: "#2a2170" }}>
                  <span className="mr-2 text-[#4737bb]">✓</span> Para España y LATAM
                </li>
                <li className="flex items-center" style={{ color: "#2a2170" }}>
                  <span className="mr-2 text-[#4737bb]">✓</span> Empresas que desarrollan software
                </li>
                <li className="flex items-center" style={{ color: "#2a2170" }}>
                  <span className="mr-2 text-[#4737bb]">✓</span> Posiciones junior verificadas
                </li>
              </ul>
            </div>

            <div className="bg-[#4737bb] bg-opacity-10 p-3 rounded-lg mb-4">
              <p className="font-medium flex items-center text-sm">
                <span className="text-[#ea4f33] mr-2">⭐</span>
                <span style={{ color: "#2a2170" }}>
                  Recomendado por Brais Moure (MoureDev), Linkfy y Genbeta
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.whatsapp.com/channel/0029Vav2hfgKGGGCberYwN2I"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-white hover:bg-gray-50 transition-all shadow-md border-2 border-[#25D366]"
                style={{ color: "#25D366" }}
              >
                <svg 
                  className="mr-2 w-6 h-6" 
                  fill="#25D366" 
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Unirme al Canal
              </a>
              <a
                href="https://www.linkedin.com/in/danielgbaena"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-[#4737bb] hover:bg-purple-50 transition-all"
                style={{ color: "#4737bb" }}
              >
                <span className="mr-2">👨‍🏫</span> Perfil de Daniel G. Baena
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyLinksSection = () => {
  return (
    <div className="mt-12">
      <InfoJobsBanner />
      <h2
        className="text-3xl font-bold mb-10 text-[#4737bb] text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Empresas que apoyan el talento femenino
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Oxigent */}
        <div
          className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <OptimizedImage
                src="/assets/joboffers/logoOxigent.webp"
                alt="Logo de Oxigent"
                className="w-32 h-auto"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Oxigent</h3>
              <p className="text-lg mb-2" style={{ color: "#2a2170" }}>
                Descubre oportunidades en su portal de empleo:
              </p>
            </div>
          </div>
          <a
            href="https://oxigent.io/apply-for-a-job/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg1 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <span className="flex items-center">
              <span className="mr-2">🔍</span>
              oxigent.io/apply-for-a-job
            </span>
          </a>
        </div>

        {/* Between */}
        <div
          className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <OptimizedImage
                src="/assets/joboffers/logoBetween.webp"
                alt="Logo de Between"
                className="w-32 h-auto"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Between</h3>
              <p className="text-lg mb-2" style={{ color: "#2a2170" }}>
                Escanea el código QR o visita su portal:
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <a
              href="https://talento.between.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 md:mb-0 bg1 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <span className="flex items-center">
                <span className="mr-2">🌐</span>
                talento.between.tech
              </span>
            </a>

            <div
              className="hidden md:block p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <OptimizedImage
                src="/assets/joboffers/QRBetween.webp"
                alt="Código QR para aplicar a Between"
                className="w-28 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para mostrar una oferta de trabajo individual
const JobCard = ({ job }: { job: JobOffer }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] opacity-60"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="p-6 flex-grow relative">
        <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-300">
          YA NO DISPONIBLE
        </div>
        
        <div className="flex justify-between items-start mb-4 pr-32">
          <h3 className="text-xl font-semibold text-gray-500">{job.title}</h3>
        </div>

        <p className="text-gray-400 mt-2 flex items-center">
          <span className="mr-2" aria-hidden="true">
            🏢
          </span>
          <span className="line-through">{job.company}</span>
        </p>

        <div className="mt-4 text-gray-400 text-sm flex items-center">
          <span className="mr-2" aria-hidden="true">
            📅
          </span>
          <span>Oferta cerrada</span>
        </div>
      </div>

      <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-center">
        <button
          disabled
          className="inline-flex items-center justify-center px-4 py-2 text-gray-500 font-medium rounded-lg cursor-not-allowed bg-gray-200"
          aria-label="Oferta no disponible"
        >
          <span aria-hidden="true" className="mr-2">
            🚫
          </span>
          Oferta cerrada
        </button>
      </div>
    </div>
  );
};

// Componente principal para mostrar todas las ofertas de trabajo
const JobOffers = () => {
  const [jobs, setJobs] = useState<JobOffer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/jobs`);
        setJobs(response.data);
        setError(null);
      } catch (error) {
        console.error("Error al obtener ofertas:", error);
        setError(
          "No pudimos cargar las ofertas en este momento. Por favor, inténtalo más tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-8 mt-28">
      <Helmet>
        <title>Ofertas de Trabajo - FemCoders Club</title>
        <meta
          name="description"
          content="Explora oportunidades laborales exclusivas en tecnología para la comunidad de FemCoders Club. Encuentra ofertas de desarrollo web, UX/UI, IA y más."
        />
        <meta
          property="og:title"
          content="Ofertas de Trabajo - FemCoders Club"
        />
        <meta
          property="og:description"
          content="Encuentra oportunidades laborales en tecnología con FemCoders Club. Postula a empleos exclusivos para nuestra comunidad."
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/img/ofertas-trabajo.png"
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/ofertas-de-trabajo"
        />
      </Helmet>

      {/* Hero section */}
      <div
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4737bb]">
          🚀 Oportunidades laborales en tecnología
        </h1>
        <p
          className="text-xl max-w-3xl mx-auto"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.05)",
            color: "#2a2170",
          }}
        >
          Descubre vacantes exclusivas en el sector tech seleccionadas
          especialmente para la comunidad de FemCoders Club.
        </p>
      </div>

      {/* Nueva sección de recursos */}
      <JobSearchResourcesSection />

      {/* Company Links Section */}
      <CompanyLinksSection />

      {/* Description */}
      <div
        className="my-16 p-8 rounded-xl shadow-sm"
        data-aos="fade-up"
        data-aos-duration="800"
        style={{
          background: "rgba(71, 55, 187, 0.7)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <p className="text-xl text-white leading-relaxed" aria-live="polite">
          En <span>FemCoders Club</span>, trabajamos para acercarte a
          oportunidades de empleo de empresas que valoran el talento diverso en
          tecnología. Aquí encontrarás ofertas personalizadas en áreas como
          desarrollo web, diseño UX/UI, inteligencia artificial y más. ✨
          <br />
          ¡Explora, postula y da el siguiente paso en tu carrera tech! 🚀
        </p>
      </div>

      {/* Jobs listing */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold mb-8"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          📋 Ofertas disponibles
        </h2>

        {loading ? (
          <div className="flex justify-center items-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4737bb]"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-lg text-red-800 text-center">
            {error}
          </div>
        ) : jobs.length === 0 ? (
          <div
            className="bg-white shadow-md rounded-lg p-8 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#4737bb]">
              No hay ofertas activas en este momento
            </h3>
            <p className="text-gray-600">
              Estamos trabajando para traerte nuevas oportunidades pronto. Te
              invitamos a explorar los portales de empleo de nuestras empresas
              colaboradoras y el canal de WhatsApp de JuniorJobs.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>

      {/* Call to action */}
      <div
        className="text-center mb-12 p-8 bg-white rounded-xl shadow-md"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl font-bold mb-4">
          ¿Eres una empresa y quieres publicar tu oferta?
        </h2>
        <p className="styled-paragraph text-lg mb-6">
          Si tu empresa valora la diversidad y quiere acceder a talento
          tecnológico femenino, contáctanos para publicar tus vacantes.
        </p>
        <a
          href="mailto:info@femcodersclub.com?subject=Publicación de oferta laboral"
          className="inline-block font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
          style={{ background: "#4737bb", color: "white" }}
        >
          Contactar para publicar ofertas
        </a>
      </div>
    </div>
  );
};

export default JobOffers;