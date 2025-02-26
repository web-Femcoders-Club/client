import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

// Usa la variable de entorno para la API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface JobOffer {
  id: number;
  title: string;
  company: string;
  pdf_url: string;
}

interface EventDetails {
  title: string;
  date: string;
  time: string;
  location: string;
  registrationUrl: string;
  infojobsProfileUrl: string;
  specialAnnouncementUrl: string;
}

const InfoJobsEventSection = () => {
  const eventDetails: EventDetails = {
    title: "El sector tecnológico necesita de más mujeres",
    date: "13 de marzo de 2025",
    time: "18:00",
    location: "Calle Ciutat De Granada 150",
    registrationUrl: "https://www.eventbrite.es/e/entradas-el-sector-tecnologico-necesita-de-mas-mujeres-celebra-con-nosotras-1256699043669",
    infojobsProfileUrl: "https://www.infojobs.net",
    specialAnnouncementUrl: "",
  };

  return (
    <div
      className="border-l-4 p-10 mt-4 transition-all duration-300 hover:shadow-2xl"
      style={{
        background: "rgba(247, 243, 252, 0.9)",
        borderColor: "#4737bb",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(31, 38, 135, 0.2)",
        borderRadius: "10px",
        borderStyle: "solid",
      }}
      role="alert"
    >
      <Helmet>
        <title>El sector tecnológico necesita de más mujeres - FemCoders Club</title>
        <meta name="description" content="Únete al evento especial con InfoJobs para mujeres en tecnología. Conéctate, aprende y crece con FemCoders Club." />
      </Helmet>

      <div className="flex justify-between items-center">
      <h3 className="font-bold">El sector tecnológico necesita de más mujeres</h3>

        <img
          src="/assets/Eventos2025/Infojobs.png"
          alt="Logo InfoJobs"
          width="120"
          height="60"
          className="object-contain"
        />
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <p className="styled-paragraph mt-2">
            Únete al evento <strong>{eventDetails.title}</strong> y participa en dinámicas exclusivas de reclutamiento. 🚀
          </p>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 ">
              <Calendar className="w-4 h-4"style={{ color: "#4737bb" }} />
              <span><strong>{eventDetails.date}</strong></span>
            </div>
            <div className="flex items-center gap-2 ">
              <Clock className="w-4 h-4" style={{ color: "#4737bb" }}/>
              <span><strong>{eventDetails.time}</strong></span>
            </div>
            <div className="flex items-center gap-2 ">
              <MapPin className="w-4 h-4" style={{ color: "#4737bb" }} />
              <span><strong>{eventDetails.location}</strong></span>
            </div>
            <div className="flex items-center gap-2 ">
              <Users className="w-4 h-4" style={{ color: "#4737bb" }} />
              <span><strong>Plazas limitadas</strong></span>
            </div>
          </div>
        </div>

        <div className="bg1  p-4 rounded-lg">
          <h3 className="font-semibold">💼 ¿Cómo participar?</h3>
          <ol className="list-decimal list-inside mt-2 space-y-2">
            <li className="flex items-start gap-2">
              <span> 🎟️</span>
              <div>
                <strong className="styled-paragraph">Regístrate al evento:</strong>
                <a
                  href={eventDetails.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline block"
                >
                  Reserva tu entrada en Eventbrite
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="min-w-[24px]">👩‍💻</span>
              <div>
                <strong className="styled-paragraph">Crea tu perfil:</strong>
                <a
                  href={eventDetails.infojobsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline block"
                >
                  Regístrate en InfoJobs
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
            <span>📄</span>
            <div>
              <strong className="styled-paragraph">Presenta tu CV actualizado:</strong>
              <p className="text-blue-700">
                Se recomienda llevar varias copias impresas de tu CV actualizado para presentarlo a las empresas participantes durante el evento.
              </p>
            </div>
          </li>
          </ol>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">🎤 Acerca de este evento:</h3>
        <p className="styled-paragraph mt-2">
          ¡El sector tecnológico necesita de más mujeres! Únete a nosotras el <strong>{eventDetails.date}</strong> a las <strong>{eventDetails.time}</strong> en las oficinas de <strong>InfoJobs,</strong> {eventDetails.location}, para celebrar la importancia de la presencia de mujeres en el sector tecnológico.
        </p>
        <ul className="mt-4 space-y-2 text-lg" style={{ color: "#4737bb" }}>
          <li>💡 Disfruta de charlas inspiradoras de mujeres líderes en tecnología:
            <ul className="list-disc list-inside ml-6">
              <li>Marta Ros - InfoJobs Head of Product</li>
              <li>Gabriela Pineda - Lead Product Designer, Manager de Marketing y Comunicaciones y Periodista</li>
              <li>Raquel Allepuz - Between Head of IT Solutions</li>
              <li>Nerea Tomás - Backend Engineer en coches.net</li>
              <li>Karolina Ostrowska - Team Enabler & Project Facilitator. Empowering Women In Tech</li>
            </ul>
          </li>
          <li>🤝 Conéctate con profesionales a través de networking y participa en actividades dinámicas.</li>
        </ul>

        <h3 className="font-semibold mt-6">⚡ Durante el evento:</h3>
<ul className="mt-2 space-y-2 text-lg" style={{ color: "#4737bb" }}>
  <li>🚀 Participa en <strong>charlas inspiradoras</strong> lideradas por mujeres referentes en tecnología.</li>
  <li>💼 Conéctate con <strong>empresas tech</strong> y accede a oportunidades laborales inscribiéndote a las ofertas en <strong>InfoJobs</strong>.</li>
  <li>📝 Obtén <strong>consejos prácticos</strong> para potenciar tu carrera en el sector tecnológico.</li>
  <li>👩‍💻 <strong>Amplía tu red</strong> con otras mujeres en tecnología y comparte experiencias.</li>
  <li>🤝 Disfruta de sesiones de <strong>networking</strong> con profesionales del sector.</li>
</ul>


        <p className="styled-paragraph mt-4 text-[#2a2170]">
          🙏 Agradecemos a <strong>InfoJobs</strong> y a las empresas participantes por hacer posible este evento y por su compromiso en acercar más mujeres al mundo tech. 💜
        </p>

        <div className="mt-4 flex justify-center md:justify-start">
          <a
            href={eventDetails.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            🎟️ Reservar mi entrada
          </a>
        </div>
      </div>
    </div>
  );
};

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

      <h2 className="text-4xl font-bold text-center mb-2">
        🚀 Oportunidades Exclusivas para la Comunidad FemCoders Club
      </h2>

      <InfoJobsEventSection />

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








