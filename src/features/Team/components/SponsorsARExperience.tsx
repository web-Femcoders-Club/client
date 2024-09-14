import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const SponsorsTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sponsorEvents = [
    {
      date: "2023-11-24",
      sponsor: "El Canòdrom",
      event: "Presentación FemCoders Club: Música y Código en directo",
      description:
        "El Canòdrom se convirtió en el escenario perfecto para nuestra primera presentación presencial. Con un evento que combinó la creatividad del código con la emoción de la música en vivo, creamos una experiencia inolvidable para nuestras asistentes. Gracias a la colaboración con El Canòdrom, pudimos ofrecer un espacio único y acogedor para nuestra comunidad.",
      logo: "/logocanodrom.jpeg",
      website: "https://canodrom.barcelona/es",
      backgroundImage: "/ImagenCanodrom.png",
    },

    {
      date: "2024-01-01",
      sponsor: "PokeCode",
      description:
        "PokeCode ha sido fundamental para construir una comunidad fuerte y unida alrededor de FemCoders Club. Su plataforma nos ha permitido facilitar la colaboración entre nuestras miembros, compartir conocimientos y recursos, y crear un espacio seguro para aprender y crecer juntas. Gracias a PokeCode, nuestra comunidad sigue creciendo y floreciendo.",
      logo: "/logoPokeCode.png",
      website: "https://pokecode.net/",
      backgroundImage: "/pokeCode.jpg",
    },

    {
      date: "2024-02-20",
      sponsor: "FactoriaF5",
      event: "Las skills que necesitas para ser una UX Engineer",
      description:
        "FactoriaF5 ha sido un aliado fundamental en nuestro objetivo de empoderar a las mujeres en la tecnología. Gracias a talleres como 'Las skills que necesitas para ser una UX Engineer', impartido por la experta Carmen Ansio, hemos ayudado a nuestras miembros a adquirir las habilidades necesarias para destacar en el competitivo mundo del diseño de UX. Este evento fue un punto de inflexión para muchas de nosotras",
      logo: "/logoFactoriaF5.jpg",
      website: "https://factoriaf5.org/",
      backgroundImage: "/factoriaF5.png",
    },

    {
      date: "2024-03-07",
      sponsor: "Adevinta",
      event:
        "Día Internacional de la Mujer y Mujeres en Tecnología: Retos y Oportunidades",
      description:
        "Adevinta ha sido un aliado fundamental para FemCoders Club en nuestra misión de promover la igualdad de género en la tecnología. Su apoyo nos ha permitido organizar eventos que han dejado una huella imborrable en nuestras vidas. Desde la celebración del Día Internacional de la Mujer hasta nuestra Mesa Redonda, cada iniciativa ha sido una fuente de inspiración y motivación para todas las participantes.",
      logo: "/logoAdevinta.png",
      website: "https://adevinta.com/es/quienes-somos//",
      backgroundImage: "/adevinta4.jpeg",
    },

    {
      date: "2024-04-22",
      sponsor: "Glovo",
      event:
        "Más allá de la superficie: Backend Testing & Scalability Pitfalls",
      description:
        "En colaboración con Glovo, organizamos un evento enfocado en un análisis profundo sobre el Testing en Backend y los Obstáculos de Escalabilidad. La experiencia y el conocimiento de Glovo en estas áreas proporcionaron una visión valiosa y práctica para todos los participantes.",
      logo: "/glovoLogo.png",
      website: "https://glovoapp.com/es/es/",
      backgroundImage: "/oficinasGlovo.png",
    },
    {
      date: "2024-05-16",
      sponsor: "Factorial HR",
      event: "Green Software",
      description:
        "Factorial HR fue nuestro patrocinador en un evento clave para promover el desarrollo de software sostenible. Gracias a la experiencia de María Alexandra Galarza, exploramos cómo reducir el impacto ambiental de nuestros proyectos tecnológicos. ¡Juntas estamos construyendo un futuro más verde!",
      logo: "/logoFactorial.jpg",
      website: "https://factorialhr.es/",
      backgroundImage: "/eventoFactorial.png",
    },
    {
      date: "2024-05-29",
      sponsor: "Criteo",
      event: "Antes muerta que sin IA",
      description:
        "Criteo nos acompañó en un evento inolvidable dedicado a la inteligencia artificial. La charla de Àurea Rodríguez, una de las voces femeninas más destacadas en el sector, nos dejó profundamente inspiradas. Gracias al apoyo de Criteo, pudimos crear un espacio de encuentro para todas aquellas interesadas en la IA.",
      logo: "/logoCriteo.png",
      website: "https://www.criteo.com/es/",
      backgroundImage: "/oficinasCriteo.jpg",
    },
    {
      date: "2024-06-19",
      sponsor: "Dynatrace",
      event: " Essential Visualization and Metrics for Success 💻🚀",
      description:
        "La colaboración entre FemCoders Club y Dynatrace nos permitió ofrecer un evento de alta calidad donde los participantes pudieron ampliar sus conocimientos en un área tan importante como la visualización de datos. Gracias a Dynatrace por su apoyo y a todos los asistentes por su entusiasmo. ¡Juntos estamos construyendo una comunidad más fuerte y conocedora!",
      logo: "/logodynatrace.jpeg",
      website: "https://www.dynatrace.com/",
      backgroundImage: "/oficinaDynatrace.jpg",
    },
    {
      date: "2024-06-27 ",

      sponsor: "Le wagon",
      event:
        "Predict the gender pay gap with AI, Analyze Walmart’s profitability using Tableau.",
      description:
        "En colaboración con Le Wagon, hemos organizado workshops intensivos de Data Analysis, como Analyze Walmart’s profitability using Tableau y Predict the gender pay gap with AI. Gracias a su expertise, nuestras alumnas han adquirido habilidades prácticas y valiosas para impulsar sus carreras en el mundo de los datos.",
      logo: "/LogoLeWagon.png",
      website: "https://www.lewagon.com/es",
      backgroundImage: "/leWagon.jpg",
    },
    {
      date: "2024-09-05",

      sponsor: "Codurance",
      event:
        "Ciberseguridad - Catch Me If You Can: Malware Hide and Seek",
      description:
        "En colaboración con Codurance, exploramos el mundo del malware y sus efectos en nuestros dispositivos y datos. Descubrimos cómo operan estos programas maliciosos y cómo protegernos de ellos en plataformas digitales.",
      logo: "/logo-codurance.jpeg",
      website: "https://www.codurance.com/es/",
      backgroundImage: "/codurance-oficina.jpg",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : sponsorEvents.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < sponsorEvents.length - 1 ? prevIndex + 1 : 0
    );
  };

  const activeEvent = sponsorEvents[activeIndex];

  return (
    <div
      className="max-w-4xl mx-auto p-4"
      style={{
        backgroundImage: `url(${activeEvent.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
          <div
            className="h-full"
            style={{
              backgroundColor: "#4737bb",
              transition: "all 0.3s ease-in-out",
              width: `${(activeIndex / (sponsorEvents.length - 1)) * 100}%`,
            }}
          ></div>
        </div>

        <div className="mt-8 bg-white bg-opacity-75 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handlePrev} aria-label="Evento anterior">
              <ChevronLeft />
            </button>
            <div className="text-center">
              <a
                href={activeEvent.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={activeEvent.logo}
                  alt={activeEvent.sponsor}
                  className="w-25 h-20 mx-auto mb-2"
                />
              </a>
              <h3>{activeEvent.sponsor}</h3>
            </div>
            <button onClick={handleNext} aria-label="Próximo evento">
              <ChevronRight />
            </button>
          </div>

          <div className="text-center">
            <p
              className="text-sm mb-2 flex items-center justify-center"
              style={{ color: "#821ad4" }}
            >
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(activeEvent.date).toLocaleDateString()}
            </p>
            <h4 style={{ color: "#4737bb" }}>{activeEvent.event}</h4>
            <p style={{ color: "#2a2170" }}>{activeEvent.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        {sponsorEvents.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === activeIndex ? "bg-[#4737bb]" : "bg-gray-200"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir al evento ${index + 1}`}
            style={{
              backgroundColor: index === activeIndex ? "#4737bb" : "gray",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SponsorsTimeline;
