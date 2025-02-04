import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


// Usa la variable de entorno para la API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface JobOffer {
  id: number;
  title: string;
  company: string;
  pdf_url: string;
}

const JobOffers = () => {
  const [jobs, setJobs] = useState<JobOffer[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/jobs`)
      .then(response => setJobs(response.data))
      .catch(error => console.error("Error al obtener ofertas:", error));
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

      <h2 className="text-3xl font-bold text-center text-[#4737bb] mb-6">
        🚀 Oportunidades Exclusivas para la Comunidad FemCoders Club
      </h2>

      {/* Introducción con aria-live para cambios dinámicos */}
      <p className="styled-paragraph mb-6" aria-live="polite">
        En <span>FemCoders Club</span>, trabajamos para acercarte a oportunidades de empleo 
        de empresas que valoran el talento diverso en tecnología. Aquí encontrarás 
        ofertas personalizadas en áreas como desarrollo web, diseño UX/UI, 
        inteligencia artificial y más. ✨  
        <br />
        ¡Explora, postula y da el siguiente paso en tu carrera tech! 🚀
      </p>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-600" aria-live="polite">
          No hay ofertas activas en este momento.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <div key={job.id} className="bg-white shadow-lg p-10 rounded-lg border border-gray-200 min-h-[320px] flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-[#4737bb]">{job.title}</h3>
              <p className="text-gray-600 mt-2">
                🏢 
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
              <div className="mt-4 flex justify-between">
                <a 
                  href={`${API_URL}${job.pdf_url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="primary-button"
                  aria-label={`Ver la oferta de trabajo para ${job.title}`}
                >
                  <span aria-hidden="true">📄</span> Ver Oferta
                </a>
                <a 
                  href={`mailto:lexyjobs@mylexy.co?subject=Aplicación para ${job.title} - FemCoders Club`}
                  className="secondary-button"
                  aria-label={`Aplicar a la oferta de ${job.title} en ${job.company}`}
                >
                  <span aria-hidden="true">📩</span> Aplicar
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobOffers;






