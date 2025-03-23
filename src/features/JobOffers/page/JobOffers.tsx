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
              <h3 className=" font-semibold mb-2">Oxigent</h3>
              <p className="text-lg mb-2" style={{color: '#2a2170'}}>
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
              <p className="text-lg mb-2" style={{color: '#2a2170'}}>
                Escanea el código QR o visita su portal:
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
  <a href="https://talento.between.tech/" 
     target="_blank"
     rel="noopener noreferrer"
     className="inline-block mb-4 md:mb-0 bg1 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
    <span className="flex items-center">
      <span className="mr-2">🌐</span>
      talento.between.tech
    </span>
  </a>
  
  <div className="hidden md:block p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      data-aos="zoom-in"
      data-aos-delay="300">
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
      className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">Nueva</span>
        </div>
        
        <p className="text-gray-600 mt-2 flex items-center">
          <span className="mr-2" aria-hidden="true">🏢</span>
          <a
            href="https://www.mylexy.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            aria-label={`Visitar el sitio web de ${job.company}`}
          >
            {job.company}
          </a>
        </p>
        
        <div className="mt-4 text-gray-500 text-sm flex items-center">
          <span className="mr-2" aria-hidden="true">📅</span>
          <span>Publicada recientemente</span>
        </div>
      </div>
      
      <div className="p-4 bg1 border-t border-gray-200 flex justify-between">
        <a
          href={`${API_URL}${job.pdf_url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 text-white font-medium rounded-lg "
          aria-label={`Ver la oferta de trabajo para ${job.title}`}
          style={{background:'#4737bb'}}
        >
          <span aria-hidden="true" className="mr-2">📄</span> Ver Oferta
        </a>
        <a
          href={`mailto:lexyjobs@mylexy.co?subject=Aplicación para ${job.title} - FemCoders Club`}
          className="inline-flex items-center justify-center px-4 py-2 border border-[#4737bb] font-medium rounded-lg hover:bg-purple-50 transition-colors"
          aria-label={`Aplicar a la oferta de ${job.title} en ${job.company}`}
          style={{color: '#2a2170'}}
        >
          <span aria-hidden="true" className="mr-2">📩</span> Aplicar
        </a>
      </div>
    </div>
  );
};

// Componente principal
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
        setError("No pudimos cargar las ofertas en este momento. Por favor, inténtalo más tarde.");
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
        <meta name="description" content="Explora oportunidades laborales exclusivas en tecnología para la comunidad de FemCoders Club. Encuentra ofertas de desarrollo web, UX/UI, IA y más." />
        <meta property="og:title" content="Ofertas de Trabajo - FemCoders Club" />
        <meta property="og:description" content="Encuentra oportunidades laborales en tecnología con FemCoders Club. Postula a empleos exclusivos para nuestra comunidad." />
        <meta property="og:image" content="https://www.femcodersclub.com/assets/img/ofertas-trabajo.png" />
        <meta property="og:url" content="https://www.femcodersclub.com/ofertas-de-trabajo" />
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
          className="text-xl  max-w-3xl mx-auto"
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.05)', color:'#2a2170' }}
        >
          Descubre vacantes exclusivas en el sector tech seleccionadas especialmente para la comunidad de FemCoders Club.
        </p>
      </div>

      {/* Company Links Section */}
      <CompanyLinksSection />

      {/* Description */}
      <div 
  className="my-16 p-8 rounded-xl shadow-sm"
  data-aos="fade-up"
  data-aos-duration="800"
  style={{ 
    background: 'rgba(71, 55, 187, 0.7)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
  }}
>
        <p className=" text-xl text-white leading-relaxed" aria-live="polite">
          En <span >FemCoders Club</span>, trabajamos para acercarte a oportunidades de empleo
          de empresas que valoran el talento diverso en tecnología. Aquí encontrarás
          ofertas personalizadas en áreas como desarrollo web, diseño UX/UI,
          inteligencia artificial y más. ✨
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
            <h3 className="text-xl font-semibold mb-2 text-[#4737bb]">No hay ofertas activas en este momento</h3>
            <p className="text-gray-600">
              Estamos trabajando para traerte nuevas oportunidades pronto. Te invitamos a explorar los portales de empleo de nuestras empresas colaboradoras.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map(job => (
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
        <h2 className="text-2xl font-bold mb-4 ">¿Eres una empresa y quieres publicar tu oferta?</h2>
        <p className=" styled-paragraph text-lg mb-6">
          Si tu empresa valora la diversidad y quiere acceder a talento tecnológico femenino, contáctanos para publicar tus vacantes.
        </p>
        <a 
          href="mailto:info@femcodersclub.com?subject=Publicación de oferta laboral"
          className="inline-block font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
          style={{background:'#4737bb', color:'white'}}
        >
          Contactar para publicar ofertas
        </a>
      </div>
    </div>
  );
};

export default JobOffers;











