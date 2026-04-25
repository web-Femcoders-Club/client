import { Calendar, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import OptimizedImage from "../../../components/OptimizedImage";

interface SponsorEvent {
  date: string;
  sponsor: string;
  event?: string;
  description: string;
  logo: string;
  website: string;
  backgroundImage: string;
}
interface JsonLdEvent {
  "@type": "Event";
  name: string;
  description: string;
  startDate: string;
  location: { "@type": "Place"; name: string };
  image: string;
  organizer: { "@type": "Organization"; name: string; url: string };
  position: number;
}

const SPONSOR_EVENTS: SponsorEvent[] = [
  {
    date: "2026-03-01",
    sponsor: "Extraordinary",
    event: "Alianza con Extraordinary: networking de calidad para mujeres en tecnología",
    description:
      "Desde marzo de 2026, FemCoders Club y Extraordinary unen fuerzas para acercar oportunidades reales a las mujeres en tecnología. Extraordinary es una app de networking que conecta a profesionales basándose en intereses y objetivos, no en casualidades. Gracias a esta colaboración, nuestra comunidad cuenta con mayor visibilidad profesional, conexiones de calidad y el apoyo de la red siempre a mano. Disponible en Google Play.",
    logo: "assets/equipoFemCodersClub/logoExtraordinary.png",
    website: "https://play.google.com/store/apps/details?id=com.extraordinayversion1&hl=es_419",
    backgroundImage: "assets/equipoFemCodersClub/extraordinary_women_in_barcelona.jpeg",
  },
  {
  date: "2025-10-29",
  sponsor: "InfoJobs & NTT DATA",
  event: "Liderar la revolución de la IA con talento femenino",
  description:
    "Un encuentro en las oficinas de InfoJobs, en colaboración con NTT DATA, donde mujeres referentes compartieron cómo están impulsando la innovación en inteligencia artificial desde el liderazgo y la tecnología.",
  logo: "/logoinfojobs.jpeg",
  website: "https://www.infojobs.net/",
  backgroundImage: "/NTTData-InfoJobs-FemCodersClub.jpg"
},
{
  date: "2025-10-11",
  sponsor: "HackBarna 2025",
  event: "FemCoders Club: Community Partner en HackBarna 2025",
  description:
    "HackBarna nos ha elegido como Community Partner para su edición 2025, un hackathon de alto nivel celebrado en el HQ de Glovo y centrado en inteligencia artificial. Una edición muy especial para nosotras, con Irina Ichim participando como mentora oficial.",
  logo: "/logoHackBarna.jpeg",
  website: "https://hackbarna.com/en/aisummit25",
  backgroundImage: "/oficinasGlovo.png"
}
,
  {
    date: "2025-07-05",
    sponsor: "SheHub",
    event: "Alianza con SheHub: Impulsando el talento femenino en tecnología",
    description:
      "SheHub es una plataforma de crecimiento profesional donde las mujeres obtienen experiencia laboral real trabajando en equipos tecnológicos lean y colaborativos guiados por mentoras. Las colaboradoras no solo practican — entregan resultados. A lo largo del camino, también fortalecen la confianza, la comunicación y las habilidades de resolución de problemas que importan en roles reales.",
    logo: "/logo-shehub.png",
    website: "https://shehub.es/",
    backgroundImage: "/comunidad-SheHub.png",
  },
  {
    date: "2025-05-28",
    sponsor: "InfoJobs, Glovo & LeWagon",
    event: "DataConnect: Inspire ideas. Learn from experts. Grow together!",
    description:
      "En colaboración con InfoJobs, Glovo y LeWagon, hemos organizado un evento único que reunió a profesionales del sector tecnológico para compartir conocimientos y experiencias. Este evento fue una oportunidad para aprender de expertos en el campo de los datos y la tecnología, inspirar nuevas ideas y fomentar el crecimiento profesional. Gracias a la participación de estas empresas, logramos crear un espacio enriquecedor para todas las asistentes.",
    logo: "/logoinfojobs.jpeg",
    website: "https://www.infojobs.net/",
    backgroundImage: "/eventos-femCodersClub-InfoJobs-leWagon-Glovo.jpg",
  },
  {
    date: "2025-03-13",
    sponsor: "InfoJobs",
    event: "El sector tecnológico necesita de más mujeres",
    description:
      "Gracias al apoyo de InfoJobs, hemos celebrado un evento centrado en la importancia de la presencia femenina en el sector tecnológico. En un entorno inspirador, profesionales compartieron sus experiencias y aprendizajes para fomentar la diversidad en la industria. InfoJobs reafirma su compromiso con la reducción de la brecha de género en tecnología y su apuesta por un futuro más inclusivo, en el que el talento femenino tenga cada vez más oportunidades para crecer y destacar.",
    logo: "/logoinfojobs.jpeg",
    website: "https://www.infojobs.net/",
    backgroundImage: "/oficinaInfoJobs.jpeg",
  },
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
      "FactoriaF5 ha sido un aliado fundamental en nuestro objetivo de empoderar a las mujeres en la tecnología. Gracias a talleres como 'Las skills que necesitas para ser una UX Engineer', impartido por la experta Carmen Ansio, hemos ayudado a nuestras miembros a adquirir las habilidades necesarias para destacar en el competitivo mundo del diseño de UX. Este evento fue un punto de inflexión para muchas de nosotras.",
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
    logo: "Factorial_logo_radical.png",
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
    event: "Essential Visualization and Metrics for Success 💻🚀",
    description:
      "La colaboración entre FemCoders Club y Dynatrace nos permitió ofrecer un evento de alta calidad donde los participantes pudieron ampliar sus conocimientos en un área tan importante como la visualización de datos. Gracias a Dynatrace por su apoyo y a todos los asistentes por su entusiasmo. ¡Juntos estamos construyendo una comunidad más fuerte y conocedora!",
    logo: "/logodynatrace.jpeg",
    website: "https://www.dynatrace.com/",
    backgroundImage: "/oficinaDynatrace.jpg",
  },
  {
    date: "2024-06-27",
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
    event: "Ciberseguridad - Catch Me If You Can: Malware Hide and Seek",
    description:
      "En colaboración con Codurance, exploramos el mundo del malware y sus efectos en nuestros dispositivos y datos. Descubrimos cómo operan estos programas maliciosos y cómo protegernos de ellos en plataformas digitales.",
    logo: "/logo-codurance.jpeg",
    website: "https://www.codurance.com/es/",
    backgroundImage: "/codurance-oficina.jpg",
  },
  {
    date: "2024-11-07",
    sponsor: "Semrush",
    event: "Estrategias Clave en Tecnología: Accesibilidad y POO",
    description:
      "Gracias a Semrush, pudimos organizar un evento extraordinario con la participación de Daria Naydikova y Cris Mouta.  Las asistentes aprendieron sobre herramientas y enfoques para mejorar la accesibilidad y prevenir errores en productos, así como conceptos de POO de una manera lúdica y entretenida.",
    logo: "assets/semRush/logoSemRush.png",
    website: "https://www.semrush.com/",
    backgroundImage: "assets/semRush/oficina-SemRush.jpg",
  },
  {
    date: "2024-11-28",
    sponsor: "SeatCode",
    event: "Diseño, Accesibilidad y Ciberseguridad en el desarollo web",
    description:
      "En colaboración con SeatCode, exploramos tres pilares fundamentales para el desarrollo web moderno: diseño intuitivo, accesibilidad inclusiva y ciberseguridad sólida. Este evento destacó cómo estas áreas se complementan para construir experiencias digitales seguras, funcionales y accesibles para todas las personas. Gracias a SeatCode, nuestras asistentes pudieron aprender de profesionales destacadas en un entorno dinámico y lleno de inspiración.",
    logo: "assets/UltimosEventos2024/logoSeatCode.jpg",
    website: "https://code.seat/",
    backgroundImage: "assets/UltimosEventos2024/oficinaSeatCode.jpg",
  },
];


const normalizeImagePath = (path: string) => path.startsWith("/") ? path : `/${path}`;

const SponsorsARExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const [isUserInteracting, setIsUserInteracting] = useState(false); 
  const intervalRef = useRef<number | null>(null);
  
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const sponsorEvents = SPONSOR_EVENTS;
  const totalEvents = sponsorEvents.length;

  useEffect(() => {
    if (typeof window === "undefined") return;
    let t: number | undefined;
    const onResize = () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => setIsMobile(window.innerWidth <= 768), 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (t) window.clearTimeout(t);
    };
  }, []);


  const optimizedBackgrounds = useMemo(
    () =>
      sponsorEvents.map((ev) => {
        const raw = ev.backgroundImage.startsWith("/")
          ? ev.backgroundImage.slice(1)
          : ev.backgroundImage;
        const folder = isMobile ? "mobile" : "desktop";
        return `/public-optimized/${folder}/${raw.replace(
          /\.(jpg|jpeg|png)$/i,
          ".webp"
        )}`;
      }),
    [isMobile, sponsorEvents]
  );
  
  const activeEvent = sponsorEvents[activeIndex];

  const next = useCallback(
    () => setActiveIndex((prev) => (prev + 1) % totalEvents),
    [totalEvents]
  );
  const prev = useCallback(
    () => setActiveIndex((prev) => (prev - 1 + totalEvents) % totalEvents),
    [totalEvents]
  );

  const startLoop = useCallback(() => {
    if (intervalRef.current !== null) return;
    
    intervalRef.current = window.setInterval(() => {
      if (isAutoPlaying && !isHovered && !isUserInteracting) next();
    }, 5000);
  }, [isAutoPlaying, isHovered, isUserInteracting, next]);

  const stopLoop = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  
  useEffect(() => {
    if (isAutoPlaying && !isUserInteracting && !isHovered) {
      startLoop();
    } else {
      stopLoop();
    }
    return () => stopLoop();
  }, [isAutoPlaying, isUserInteracting, isHovered, startLoop, stopLoop]);
  
  const temporaryPause = () => {
    setIsAutoPlaying(false);
    setIsUserInteracting(true);
    
    setTimeout(() => {
      setIsUserInteracting(false);
      setIsAutoPlaying(true);
    }, 6000); 
  };
  
  const handlePrev = () => {
    prev();
    temporaryPause();
  };
  
  const handleNext = () => {
    next();
    temporaryPause();
  };
  
  const goTo = (idx: number) => {
    setActiveIndex(idx);
    temporaryPause();
  };
  
  const togglePlay = () => {
    const newPlayingState = !isAutoPlaying;
    setIsAutoPlaying(newPlayingState);
    
    setIsUserInteracting(true); 
    
    setTimeout(() => {
        setIsUserInteracting(false);
    }, 50); 
  };

  const progressPercent = useMemo(
    () => ((activeIndex + 1) / totalEvents) * 100,
    [activeIndex, totalEvents]
  );

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        handlePrev();
        e.preventDefault();
        break;
      case "ArrowRight":
        handleNext();
        e.preventDefault();
        break;
      case "Home":
        goTo(0);
        e.preventDefault();
        break;
      case "End":
        goTo(totalEvents - 1);
        e.preventDefault();
        break;
      case " ":
      case "Enter":
        togglePlay();
        e.preventDefault();
        break;
    }
  };

  const jsonLd: { "@context": string; "@type": string; itemListElement: JsonLdEvent[] } =
    useMemo(
      () => ({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: sponsorEvents.map((ev, i) => ({
            "@type": "Event",
            name: ev.event || ev.sponsor,
            description: ev.description,
            startDate: ev.date,
            location: { "@type": "Place", name: "España" },
            image: `https://www.femcodersclub.com${
              ev.backgroundImage.startsWith("/")
                ? ev.backgroundImage
                : "/" + ev.backgroundImage
            }`,
            organizer: {
              "@type": "Organization",
              name: "FemCoders Club",
              url: "https://www.femcodersclub.com",
            },
            position: i + 1,
          })),
      }),
      [sponsorEvents]
    );

  return (
    <div
      className="mx-auto p-4 sponsor-experience-carousel"
      style={{
        maxWidth: "1200px",
        backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(${optimizedBackgrounds[activeIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        borderRadius: "var(--radius-sm)", 
        boxShadow: "var(--shadow-medium)", 
        color: "var(--color-white)",
      }}
      role="region"
      aria-roledescription="Carrusel de empresas colaboradoras"
      aria-label={`Patrocinador ${activeIndex + 1} de ${totalEvents}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div
        className="relative"
        onKeyDown={handleKey}
        tabIndex={0}
        role="group"
        aria-roledescription="slide"
        aria-label={`Evento con ${activeEvent.sponsor}. Puedes navegar con las flechas del teclado.`} 
      >
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {`Mostrando Patrocinador ${activeIndex + 1} de ${totalEvents}: ${
            activeEvent.event || activeEvent.sponsor
          }. ${isAutoPlaying ? "Rotación automática." : "Rotación pausada."}`}
        </div>

        <div className="absolute top-0 left-0 w-full h-2 bg-gray-200" aria-hidden="true">
          <div
            className="h-full"
            style={{
              backgroundColor: "var(--color-secondary)",
              transition: "width .5s var(--transition-fast)", 
              width: `${progressPercent}%`,
            }}
          />
        </div>

        <div className="mt-8 bg-white bg-opacity-80 rounded-lg shadow-lg p-6" id={`slide-${activeIndex}`}>
          <div className="flex items-center justify-between mb-4 gap-2 text-gray-800">
            <button 
                onClick={handlePrev} 
                aria-controls={`slide-${activeIndex}`}
                aria-label="Anterior patrocinador"
                style={{ color: "var(--color-text-dark)" }} 
            >
              <ChevronLeft />
            </button>

            <button
              onClick={togglePlay}
              aria-label={isAutoPlaying ? "Pausar rotación" : "Reanudar rotación"}
              className="play-pause-button" 
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: "var(--color-secondary)",
                color: "var(--color-white)",
                padding: "6px 12px",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.8rem",
              }}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />} 
              {isAutoPlaying ? "Pausar" : "Play"}
            </button>

            <button 
                onClick={handleNext} 
                aria-controls={`slide-${activeIndex}`}
                aria-label="Siguiente patrocinador"
                style={{ color: "var(--color-text-dark)" }}
            >
              <ChevronRight />
            </button>
          </div>

          <div className="text-center">
            <p
              className="text-sm mb-2 flex items-center justify-center"
              style={{ color: "var(--color-accent)" }}
            >
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(activeEvent.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
            <a
              href={activeEvent.website}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visitar sitio de ${activeEvent.sponsor}`}
              style={{ textDecoration: "none" }}
            >
              <OptimizedImage
                src={normalizeImagePath(activeEvent.logo)}
                alt={`Logo de ${activeEvent.sponsor}`}
                className="w-36 h-28 mx-auto mb-2 object-contain"
                loading="lazy"
              />
            </a>
            <h3 style={{ color: "var(--color-secondary)", marginBottom: "0.25rem" }}>
              {activeEvent.sponsor}
            </h3>
            {activeEvent.event && (
              <h4
                style={{
                
                  color: "var(--color-text-dark)",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {activeEvent.event}
              </h4>
            )}
           
            <p style={{ color: "var(--color-text-dark)", lineHeight: 1.4 }}>
              {activeEvent.description}
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                opacity: 0.7,
                marginTop: "0.75rem",
                color: "var(--color-text-dark)"
              }}
            >
              {activeIndex + 1} / {totalEvents}
            </p>
          </div>
        </div>
      </div>

      <ol
        className="mt-6 flex justify-center flex-wrap gap-2"
        aria-label="Paginación del carrusel"
        style={{ listStyle: "none", padding: 0, margin: "1.5rem 0 0" }}
      >
        {sponsorEvents.map((ev, index) => {
          const selected = index === activeIndex;
          return (
            <li key={`${ev.sponsor}-${index}`} role="presentation">
              <button
                type="button"
                aria-current={selected ? "true" : undefined}
                aria-controls={`slide-${index}`}
                aria-label={`Ir al patrocinador ${index + 1}: ${ev.sponsor}`}
                onClick={() => goTo(index)}
                className="rounded-full"
                style={{
                  width: selected ? 14 : 10,
                  height: selected ? 14 : 10,
               
                  background: selected ? "var(--color-secondary)" : "#d1d5db",
                  border: selected ? "2px solid var(--color-text-dark)" : "1px solid #cbd5e1",
                  transition: "all .3s",
                }}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SponsorsARExperience;
