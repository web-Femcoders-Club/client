import { FC } from 'react';
import './InfoJobsBanner.css';
import OptimizedImage from '../../../components/OptimizedImage';

interface Step {
  icon: string;
  title: string;
  text: string;
}

const InfoJobsBanner: FC = () => {
  const steps: Step[] = [
    {
      icon: '🔐',
      title: 'Regístrate en InfoJobs',
      text: 'Crea una cuenta para acceder a vacantes del sector tecnológico.'
    },
    {
      icon: '📝',
      title: 'Actualiza tu perfil',
      text: 'Destaca tus habilidades y los proyectos tech que has desarrollado.'
    },
    {
      icon: '📤',
      title: 'Sube tu CV actualizado',
      text: 'Un CV en PDF bien diseñado puede abrirte muchas puertas.'
    },
    {
      icon: '🔔',
      title: 'Activa alertas personalizadas',
      text: 'Recibe notificaciones con ofertas que encajen con tu perfil.'
    }
  ];

  return (
    <div className=" rounded-lg shadow-md p-6 mb-10 infojobs-banner">
      <div className="text-center mb-6">
        <h3 className="font-semibold mb-4" data-aos="fade-down" data-aos-duration="1000">
          ✨ Potencia tu carrera tech con InfoJobs
        </h3>
        <div className="mb-4 flex justify-center">
        <OptimizedImage
  src="/assets/joboffers/logoinfojobs.webp"
  alt="Logo InfoJobs"
  className="h-12 w-auto animated-logo"
  loading="eager"
  title="InfoJobs"
/>
        </div>
        <p className="text-white mb-6 text-xl" data-aos="fade-up" data-aos-delay="500" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
          <span>InfoJobs</span> apuesta por el talento femenino en programación
          y ofrece oportunidades exclusivas para desarrolladoras. Encuentra vacantes que valoran la diversidad
          y potencian tus habilidades tech.¡Es tu momento de brillar en el sector tecnológico! 💜🚀
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-aos="fade-up" data-aos-duration="800">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4  hover:shadow-md transition-shadow animated-step"
            data-aos="fade-up" 
            data-aos-delay={200 + (index * 100)}
            style={{ borderLeftColor: '#ea4f33' }}
          >
            <div className="text-2xl mr-3 step-icon">{step.icon}</div>
            <div>
              <h5 className="font-semibold  mb-1">{step.title}</h5>
              <p className="text-lg" style={{color:'#2a2170'}}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
        <a
          href="https://www.infojobs.net/jobsearch/search-results/list.xhtml?keyword=tecnologia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all animated-button hover:bg-[#ea4f33]"
          aria-label="Explorar ofertas tecnológicas en InfoJobs"
          style={{ 
            background: 'rgba(71, 55, 187, 0.7)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          🔍 Ver ofertas tech en InfoJobs
        </a>
      </div>
    </div>
  );
};

export default InfoJobsBanner;




