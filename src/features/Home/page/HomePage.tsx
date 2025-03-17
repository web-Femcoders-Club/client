import { useState, useEffect, FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../Contact/components/ConfirmationModal";
import { Helmet } from "react-helmet";
import "./Home.css";
import CarouselWithText from "../components/CarouselWithText";
import { getUpcomingEvents } from "../../../api/eventsApi";
import AOS from "aos";
import "aos/dist/aos.css";
import OptimizedImage from "../../../../src/components/OptimizedImage";
// import { sourceMapsEnabled } from "process";

interface Event {
  start: {
    local: string;
  };
  id: string;
  name: {
    text: string;
  };
  logo?: {
    original?: {
      url?: string;
    };
  };
}

const HomePage: React.FC = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<Event | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-back",
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [carouselIndex, currentPhotoIndex]);

  const images = [
    {
      src: "/assets/home-images/infoJobsCelebracion.webp",
      alt: "Celebrando Dia de la Mujer en InfoJobs con FemCoders Club",
      title: "Celebrando el Día de la Mujer en InfoJobs",
    },
    {
      src: "/assets/home-images/mujereslideres.webp",
      alt: "Mujeres inspiradoras en un evento de FemCoders Club",
      title: "Mujeres que inspiran a la comunidad",
    },
    {
      src: "/assets/home-images/eventoCarmenAnsio.webp",
      alt: "Evento con Carmen Ansio en FemCoders Club",
      title: "Evento con Carmen Ansio",
    },
    {
      src: "/assets/UltimosEventos2024/LorenaSalvadorPonenteAccesibilidad.webp",
      alt: "Lorena Salvador hablando sobre accesibilidad en un evento de FemCoders Club",
      title: "Accesibilidad con Lorena Salvador",
    },
    {
      src: "/assets/home-images/eventoFactoriaF5.webp",
      alt: "Evento en Factoría F5 con desarrolladoras de FemCoders Club",
      title: "Evento en Factoría F5",
    },
    {
      src: "/assets/home-images/mujeresTech.webp",
      alt: "Grupo de mujeres en tecnología en un evento de FemCoders Club",
      title: "Mujeres en tecnología",
    },
    {
      src: "/assets/home-images/comunidadFemCodersClubEventoCriteo.webp",
      alt: "Miembros de FemCoders Club en un evento en Criteo",
      title: "Evento en Criteo con FemCoders Club",
    },
    {
      src: "/assets/home-images/doscomunidadestech.webp",
      alt: "Dos comunidades tecnológicas colaborando en un evento",
      title: "Colaboración entre comunidades tech",
    },
    {
      src: "/assets/home-images/eventoTecnologico8Marzo.webp",
      alt: "Evento tecnológico en el Día Internacional de la Mujer",
      title: "8M: Mujeres en Tecnología",
    },
    {
      src: "/assets/home-images/mujeresprogramadoras.webp",
      alt: "Mujeres programadoras en un evento de FemCoders Club",
      title: "Mujeres programadoras",
    },
    {
      src: "/assets/home-images/eventoUnlokingData.webp",
      alt: "Evento sobre datos e inteligencia artificial en FemCoders Club",
      title: "Evento: Unlocking Data",
    },
    {
      src: "/assets/home-images/mujeresFemCodersClub.webp",
      alt: "Mujeres en la comunidad de FemCoders Club",
      title: "Mujeres de FemCoders Club",
    },
    {
      src: "/assets/home-images/posit8Marzo.webp",
      alt: "Evento en el Día Internacional de la Mujer en FemCoders Club",
      title: "8M: Positividad y Empoderamiento",
    },
    {
      src: "/assets/home-images/evento_techFemCodersClub.webp",
      alt: "Evento tecnológico en FemCoders Club",
      title: "Evento Tech en FemCoders Club",
    },
    {
      src: "/assets/home-images/comunidadesMujeresTecnologas.webp",
      alt: "Comunidades de mujeres en tecnología colaborando en un evento",
      title: "Comunidades de Mujeres en Tecnología",
    },
    {
      src: "/assets/home-images/AureaRodriguez.webp",
      alt: "Aurea Rodríguez en un evento de FemCoders Club",
      title: "Aurea Rodríguez en FemCoders Club",
    },
    {
      src: "/assets/home-images/asistentesfemCodersClubCriteo.webp",
      alt: "Asistentes a un evento de FemCoders Club en Criteo",
      title: "Asistentes en Criteo",
    },
    {
      src: "/assets/home-images/apoyoMujeresTech.webp",
      alt: "Mujeres en tecnología apoyándose mutuamente en un evento",
      title: "Apoyo entre Mujeres Tech",
    },
    {
      src: "/assets/home-images/EventoFactorial.webp",
      alt: "Evento en Factorial con ponentes de FemCoders Club",
      title: "Evento en Factorial",
    },
    {
      src: "/assets/home-images/mujeresTechNetworking.webp",
      alt: "Mujeres en tecnología en un evento de networking",
      title: "Networking entre Mujeres Tech",
    },
    {
      src: "/assets/home-images/musicaconcodigo.webp",
      alt: "Evento de música y código en FemCoders Club",
      title: "Música con Código",
    },
    {
      src: "/assets/home-images/eventoLiderazgoMujer.webp",
      alt: "Evento sobre liderazgo femenino en FemCoders Club",
      title: "Liderazgo de la Mujer",
    },
    {
      src: "/assets/home-images/eventoUnlokingData.webp",
      alt: "Evento sobre datos e inteligencia artificial en FemCoders Club",
      title: "Evento: Unlocking Data",
    },
    {
      src: "/assets/home-images/mujeres-ciberseguridad-femcoders-evento.webp",
      alt: "Mujeres en ciberseguridad en un evento de FemCoders Club",
      title: "Mujeres en Ciberseguridad",
    },
    {
      src: "/assets/home-images/networkingEventosFemCodersClub.webp",
      alt: "Networking en eventos de FemCoders Club",
      title: "Networking en Eventos",
    },
    {
      src: "/assets/home-images/mujeresComunidadFemCodersClub.webp",
      alt: "Mujeres en la comunidad de FemCoders Club",
      title: "Mujeres en la Comunidad",
    },
    {
      src: "/assets/home-images/comunidadDeMujeres.webp",
      alt: "Mujeres en la comunidad de FemCoders Club",
      title: "Mujeres en la Comunidad",
    },
    {
      src: "/assets/home-images/mujeresFemCodersClub.webp",
      alt: "Mujeres en un evento de FemCoders Club",
      title: "Mujeres en FemCoders Club",
    },
    {
      src: "/assets/home-images/networking.webp",
      alt: "Networking en un evento de FemCoders Club",
      title: "Networking en Evento",
    },
    {
      src: "/assets/home-images/eventoAdevintaFemCodersClub.webp",
      alt: "Evento en Adevinta con ponentes de FemCoders Club",
      title: "Evento en Adevinta",
    },
    {
      src: "/assets/home-images/apoyomujeres.webp",
      alt: "Evento femCoders Club en Adevinta",
      title: "Evento en Adevinta",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/comunidadfemCodersClub-eventoML.webp",
      alt: "Evento de comunicación asertiva en FemCoders Club",
      title: "Evento de Comunicación Asertiva",
    },
    {
      src: "/assets/home-images/comunidadDeMujeres.webp",
      alt: "Comunidad de mujeres en un evento de FemCoders Club",
      title: "Comunidad de Mujeres",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/comunidadfemCodersClub-eventoML.webp",
      alt: "Evento de comunicación asertiva en FemCoders Club",
      title: "Evento de Comunicación Asertiva",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/desarrolladora-fullstack-Irina-femCodersClub.webp",
      alt: "Irina Ichim, desarrolladora fullstack y cofundadora de FemCoders Club",
      title: "Irina Ichim, Desarrolladora Fullstack",
    },
    {
      src: "/assets/home-images/LuciaCofundadora.webp",
      alt: "Lucía, cofundadora de FemCoders Club",
      title: "Lucía, Cofundadora",
    },
    {
      src: "/assets/semRush/AnaSemrush.webp",
      alt: "Ana organizadora del evento en Semrush",
      title: "Ana en Semrush",
    },
    {
      src: "/assets/semRush/eventoSemrush.webp",
      alt: "Evento en Semrush organizado por FemCoders Club",
      title: "Evento en Semrush",
    },
    {
      src: "/assets/UltimosEventos2024/eventoSeatCode.webp",
      alt: "Evento reciente en SeatCode con ponentes de FemCoders Club",
      title: "Evento en SeatCode",
    },
    {
      src: "/assets/UltimosEventos2024/eventoInteligenciaEmocional.webp",
      alt: "Evento sobre inteligencia emocional en FemCoders Club",
      title: "Inteligencia Emocional",
    },
    {
      src: "/assets/home-images/chicasComunidadFemCodersClub.webp",
      alt: "Chicas en la comunidad de FemCoders Club",
      title: "Chicas en la Comunidad",
    },
    {
      src: "/assets/home-images/NiltonInfoJobs.webp",
      alt: "Nilton Navarro Flores presentando el evento de InfoJobs",
      title: "Nilton Navarro Flores en InfoJobs",
    },
  ];

  const texts = [
    "Empoderamos a las Mujeres en Tecnología",
    "Participa en Nuestro Próximo Evento",
    "Conéctate y Crezcamos Juntas",
    "Sé una Líder en tu Vida y Profesión",
    "Construyendo la Comunidad Tech más Diversa",
    "Rompiendo Barreras en el Mundo Digital",
    "Desarrolla tu Potencial sin Límites",
    "Aprendizaje Colaborativo entre Mujeres",
    "Networking que Transforma Carreras",
    "Inspirando la Próxima Generación Tech",
    "Tu Talento es Nuestra Mayor Fortaleza",
    "Juntas Programamos un Futuro Mejor",
    "Innovación con Perspectiva Femenina",
    "Compartiendo Conocimiento, Creciendo Juntas",
    "De Principiante a Experta: Tu Comunidad de Apoyo",
  ];

  const calculateTimeLeft = (eventDate: Date | null) => {
    const now = new Date();
    if (!eventDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const difference = eventDate.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const fetchUpcomingEvent = async () => {
      try {
        const events = await getUpcomingEvents();
        if (events && events.length > 0) {
          const nextEvent = events[0];
          const adaptedEvent: Event = {
            id: nextEvent.id,
            start: {
              local: nextEvent.start_local,
            },
            name: {
              text: nextEvent.name,
            },
            logo: nextEvent.logo_url
              ? {
                  original: {
                    url: nextEvent.logo_url,
                  },
                }
              : undefined,
          };

          const eventDate = new Date(adaptedEvent.start.local);
          setUpcomingEvent(adaptedEvent);
          setTimeLeft(calculateTimeLeft(eventDate));
        }
      } catch (error) {
        console.error("Error fetching upcoming event:", error);
      }
    };

    fetchUpcomingEvent();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (upcomingEvent) {
        const eventDate = new Date(upcomingEvent.start.local);
        setTimeLeft(calculateTimeLeft(eventDate));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [upcomingEvent]);

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    return () => {
      clearInterval(photoInterval);
    };
  }, []);

  useEffect(() => {
    let carouselInterval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      carouselInterval = setInterval(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }

    return () => {
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
    };
  }, [isPlaying, images.length]);

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    setCarouselIndex(index);
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 5000);
    }
  };

  const handleCarouselKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      if (isPlaying) {
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 5000);
      }
    }

    switch (e.key) {
      case "ArrowLeft":
        prevSlide();
        e.preventDefault();
        break;
      case "ArrowRight":
        nextSlide();
        e.preventDefault();
        break;
      case "Home":
        goToSlide(0);
        e.preventDefault();
        break;
      case "End":
        goToSlide(images.length - 1);
        e.preventDefault();
        break;
      case " ":
      case "Enter":
        togglePlay();
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      throw new Error("The form element is not found");
    }

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/email-formulario/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error enviando el formulario.");
      }

      setShowMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>FemCoders Club | Comunidad Líder de Mujeres en Tecnología</title>

        {/* Meta básico */}
        <meta
          name="description"
          content="Comunidad dedicada a empoderar a mujeres en el sector tecnológico a través de eventos, talleres, mentorías y networking. Aprende, comparte y crece en el mundo de la programación."
        />
        <meta
          name="keywords"
          content="femcoders club, fem coders club, mujeres en tecnología, comunidad tech, eventos tecnológicos, talleres de programación, desarrollo web, mentorías tech, networking tecnológico, mujeres programadoras, formación en tecnología, diversidad en tech, oportunidades tech para mujeres"
        />
        <meta
          name="author"
          content="Irina Ichim, co-fundadora FemCoders Club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="FemCoders Club | Comunidad Líder de Mujeres en Tecnología"
        />
        <meta
          property="og:description"
          content="Comunidad dedicada a empoderar a mujeres en el sector tecnológico a través de eventos, talleres, mentorías y networking."
        />
        <meta property="og:url" content="https://www.femcodersclub.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/cofundadorasFemCodersClub.jpg"
        />
        <meta
          property="og:image:alt"
          content="Mujeres cofundadoras de FemCoders Club en un evento"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Enlaces a perfiles sociales */}
        <meta
          property="og:see_also"
          content="https://www.instagram.com/femcoders_club/"
        />
        <meta
          property="og:see_also"
          content="https://www.linkedin.com/company/fem-coders-club/"
        />
        <meta
          property="og:see_also"
          content="https://www.youtube.com/@FemcodersClub"
        />
        <meta
          property="og:see_also"
          content="https://github.com/femcodersclub"
        />
        <meta
          property="og:see_also"
          content="https://communityinviter.com/apps/femcodersclub/femcoders-club"
        />
        <meta property="og:see_also" content="https://x.com/FemCodersClub" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club | Comunidad Líder de Mujeres en Tecnología"
        />
        <meta
          name="twitter:description"
          content="Comunidad dedicada a empoderar a mujeres en tecnología"
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/cofundadorasFemCodersClub.jpg"
        />
        <meta name="twitter:site" content="@FemCodersClub" />

        {/* Schema.org para Organización */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FemCoders Club",
            alternateName: [
              "Fem Coders Club",
              "femcodersclub",
              "femCoders club",
              "FemCoders Club",
              "FEM CODERS CLUB",
            ],
            url: "https://www.femcodersclub.com",
            logo: "https://www.femcodersclub.com/FemCodersClubLogo.png",
            sameAs: [
              "https://www.instagram.com/femcoders_club/",
              "https://www.linkedin.com/company/fem-coders-club/",
              "https://www.youtube.com/@FemcodersClub",
              "https://github.com/femcodersclub",
              "https://communityinviter.com/apps/femcodersclub/femcoders-club",
              "https://x.com/FemCodersClub",
            ],
            description:
              "Una comunidad dedicada a empoderar a mujeres en tecnología a través de eventos, talleres y networking.",
            foundingDate: "2023-10-24",
            email: "info@femcodersclub.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "España",
            },
          })}
        </script>

        {/* Schema.org para Sitio Web */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FemCoders Club",
            url: "https://www.femcodersclub.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.femcodersclub.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        {/* Schema.org para Elementos de Navegación */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "SiteNavigationElement",
                position: 1,
                name: "Sobre Nosotras",
                description: "Conoce más sobre FemCoders Club y nuestra misión",
                url: "https://www.femcodersclub.com/sobrenosotras",
              },
              {
                "@type": "SiteNavigationElement",
                position: 2,
                name: "Equipo",
                description: "Conoce al equipo detrás de FemCoders Club",
                url: "https://www.femcodersclub.com/equipo",
              },
              {
                "@type": "SiteNavigationElement",
                position: 3,
                name: "Eventos",
                description:
                  "Próximos eventos y talleres para mujeres en tecnología",
                url: "https://www.femcodersclub.com/eventos",
              },
              {
                "@type": "SiteNavigationElement",
                position: 4,
                name: "Contacto",
                description: "Ponte en contacto con FemCoders Club",
                url: "https://www.femcodersclub.com/contacto",
              },
              {
                "@type": "SiteNavigationElement",
                position: 5,
                name: "Blog",
                description:
                  "Artículos, recursos y noticias sobre mujeres en tecnología",
                url: "https://www.femcodersclub.com/blog",
              },
              {
                "@type": "SiteNavigationElement",
                position: 6,
                name: "Iniciar Sesión",
                description: "Accede a tu cuenta de FemCoders Club",
                url: "https://www.femcodersclub.com/login",
              },
            ],
          })}
        </script>

        {/* Schema.org para FAQ basado en tu componente FaqModal */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es FemCoders Club?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FemCoders Club, una comunidad con sede en Barcelona, se estableció en 2023 con su lanzamiento oficial el 24 de octubre. Fundado por un grupo de mujeres apasionadas, este colectivo tiene un objetivo unificador: contribuir al empoderamiento de otras mujeres en el ámbito digital y tecnológico. La misión fundamental de FemCoders Club es proporcionar un espacio inclusivo donde las mujeres puedan colaborar, aprender y crecer en campos relacionados con la tecnología.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuáles son sus objetivos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Organizar masterclasses y sesiones inspiradoras, brindando oportunidades de aprendizaje y desarrollo personal a través de experiencias compartidas. Facilitar encuentros regulares donde las mujeres puedan conectarse, compartir experiencias y establecer conexiones significativas. Promover la inclusión y diversidad, asegurando que la comunidad sea acogedora para mujeres de diversos trasfondos y experiencias.",
                },
              },
              {
                "@type": "Question",
                name: "¿Por qué debería unirme a esta comunidad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Unirte a FemCoders Club te brinda acceso a networking con mujeres profesionales en tecnología, eventos y talleres, desarrollo personal, apoyo al emprendimiento, inclusión y apoyo mutuo, y la oportunidad de contribuir a la diversidad en el sector tecnológico.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo puedo unirme a la comunidad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si quieres formar parte de nuestra comunidad, puedes hacerlo a través de nuestro Slack. Puedes contactarnos por LinkedIn. También puedes hacerlo asistiendo a uno de nuestros eventos online o presencial.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo puedo enterarme de los eventos de FemCoders Club?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FemCoders Club publica todos sus eventos a través de nuestra página web, Linkedin y nuestro canal de #eventos en slack.",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <section className="parallax bg1">
        <div className="content-container">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            className="text-content"
            tabIndex={0}
            aria-label="Sección principal de FemCoders Club"
          >
            <h1 data-aos="fade-up" data-aos-delay="200" tabIndex={0}>
              femCoders Club
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400" tabIndex={0}>
              Tu comunidad de mujeres en tecnología
              <svg
                className="curved-line"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                data-aos="zoom-in"
                data-aos-delay="800"
                {...{ "aria-hidden": "true" }}
              >
                <path
                  d="M0 10 Q 50 0 100 10"
                  stroke="#EA4F33"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </h2>
            <p
              className="styled-paragraph"
              data-aos="fade-up"
              data-aos-delay="600"
              tabIndex={0}
            >
              <span> Juntas,</span> potenciamos el crecimiento y liderazgo de
              las mujeres tech. Descubre nuevas oportunidades, comparte
              conocimientos y crece profesionalmente en un entorno inclusivo y
              motivador.
              <br />
              Si compartes nuestra pasión por la tecnología, ¡únete a nosotras!
            </p>
            <div
              className="button-container"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Link to="/register">
                <button
                  className="primary-button"
                  aria-label="Unirse al club de mujeres programadoras"
                >
                  Unirse al club
                </button>
              </Link>

              <Link to="/eventos">
                <button
                  className="secondary-button"
                  aria-label="Ver eventos programados"
                >
                  Ver eventos
                </button>
              </Link>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            className="image-content"
            role="presentation"
          >
            <div className="photo-stack">
              <div
                className={`photo ${
                  currentPhotoIndex === 0 ? "photo-1" : "photo-2"
                }`}
                data-aos="zoom-in-up"
                data-aos-delay="300"
                aria-hidden="false"
              >
                <div className="photo-gradient"></div>
                <img
                  src="/cofundadorasFemCodersClub.jpg"
                  alt="varias de las cofundadoras de FemCoders Club"
                  className="photo-image"
                  title="Parte de las cofundadoras de FemCoders Club"
                  tabIndex={currentPhotoIndex === 0 ? 0 : -1}
                />
              </div>

              <div
                className={`photo ${
                  currentPhotoIndex === 1 ? "photo-1" : "photo-2"
                }`}
                data-aos="zoom-in-down"
                data-aos-delay="600"
                aria-hidden="true"
              >
                <div className="photo-gradient"></div>
                <OptimizedImage
                  src="/assets/home-images/femCodersClubCofundadoras.webp"
                  alt="Mujeres cofundadoras de FemCoders Club"
                  className="photo-image"
                  title="Parte de las cofundadoras de FemCoders Club"
                  tabIndex={currentPhotoIndex === 1 ? 0 : -1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax bg2 full-height">
        <div className="carousel-container">
          <p
            className="carousel-subheading"
            tabIndex={0}
            {...{ "aria-label": "Descripción de FemCoders Club y sus eventos" }}
          >
            En<span> FemCoders Club, </span>organizamos regularmente eventos que
            no solo son educativos, sino también una oportunidad increíble para
            conectar con otras mujeres en el <span>sector tech.</span> Nuestros
            eventos incluyen talleres, charlas inspiradoras, y sesiones de
            networking que te ayudarán a ampliar tus conocimientos y tu{" "}
            <span>red de contactos.</span>
            <br />
            Consulta la galería para ver eventos pasados y cómo nuestras
            miembros han crecido en{" "}
            <span>liderazgo femenino en tecnología.</span>
          </p>
          <p
            className="carousel-subheading-mobile"
            tabIndex={0}
            {...{
              "aria-label":
                "Descripción resumida de FemCoders Club y sus eventos",
            }}
          >
            Nuestros eventos incluyen talleres, charlas inspiradoras, y sesiones
            de networking que te ayudarán a ampliar tus conocimientos y tu{" "}
            <span>red de contactos.</span>
          </p>

          <div
            className="carousel"
            role="region"
            {...{ "aria-label": "Galería de eventos pasados" }}
            {...{ "aria-live": isPlaying ? "off" : "polite" }}
            tabIndex={0}
            onKeyDown={handleCarouselKeyDown}
          >
            <div className="sr-only" {...{ "aria-live": "polite" }}>
              {isPlaying
                ? "El carrusel está rotando automáticamente. Presiona la barra espaciadora para pausar."
                : "El carrusel está pausado. Presiona la barra espaciadora para reanudar la rotación. Usa las flechas izquierda y derecha para navegar."}
            </div>

            {images.map(({ src, alt, title }, index) => {
              const isActive = index === carouselIndex;

              if (isActive) {
                return (
                  <div
                    key={index}
                    className={`carousel-item active ${
                      !isPlaying ? "paused" : ""
                    }`}
                    role="group"
                    aria-label={`Evento ${index + 1}`}
                    aria-hidden="false"
                  >
                    <OptimizedImage
                      src={src}
                      alt={alt}
                      title={title}
                      className="carousel-image"
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="carousel-item"
                    role="group"
                    aria-label={`Evento ${index + 1}`}
                    aria-hidden="true"
                  >
                    <OptimizedImage
                      src={src}
                      alt={alt}
                      title={title}
                      className="carousel-image"
                    />
                  </div>
                );
              }
            })}

            <div
              role="complementary"
              {...{ "aria-label": "Textos descriptivos sobre FemCoders" }}
            >
              <CarouselWithText texts={texts} />
            </div>
          </div>

          <div className="carousel-controls">
            <div className="carousel-nav-controls">
              <button
                className="carousel-control prev"
                onClick={prevSlide}
                {...{ "aria-label": "Imagen anterior" }}
              >
                ❮
              </button>

              <button
                className="play-pause"
                onClick={togglePlay}
                {...{
                  "aria-label": isPlaying
                    ? "Pausar rotación automática"
                    : "Reanudar rotación automática",
                }}
              >
                {isPlaying ? "⏸️" : "▶️"}
              </button>

              <button
                className="carousel-control next"
                onClick={nextSlide}
                {...{ "aria-label": "Imagen siguiente" }}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax bg3">
        <div className="section-content">
          <div
            className="call-to-action"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2>Conócenos</h2>
            </div>

            <p data-aos="fade-up" data-aos-delay="300">
              Si compartes nuestra pasión por la tecnología y nuestra filosofía
              de <strong>visibilizar a las mujeres programadoras</strong>,
              promoviendo su desarrollo profesional, te invitamos a unirte a
              nuestra comunidad. Ya seas una mujer en tecnología que busca
              crecer profesionalmente o una líder con años de experiencia
              dispuesta a compartir tu conocimiento, hay un lugar para ti en{" "}
              <strong>FemCoders Club. </strong>
              <br />
              <br />
              <span
                className="highlight-text"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Además, extendemos una invitación a las empresas que se alinean
                con nuestros valores para que colaboren con nosotras.{" "}
                <strong>
                  Juntas, podemos crear un entorno más inclusivo y equitativo en
                  el sector tech.
                </strong>
              </span>
              <br />
              <br />
              <span
                className="cta-text"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                🚀 <span>¡No te lo pierdas!</span> Acompáñanos en este viaje de
                crecimiento profesional.
              </span>
            </p>
          </div>

          {/* <div
            className="section-countdown"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="countdown-content">
              <h2 data-aos="fade-down" data-aos-delay="300">
                ¡Próximo evento!
              </h2>
              {upcomingEvent ? (
                <div
                  className="countdown"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="500"
                  >
                    <span>{timeLeft.days}</span> días
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="600"
                  >
                    <span>{timeLeft.hours}</span> horas
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="700"
                  >
                    <span>{timeLeft.minutes}</span> minutos
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="800"
                  >
                    <span>{timeLeft.seconds}</span> segundos
                  </div>
                </div>
              ) : (
                <video
                  src={`${import.meta.env.BASE_URL}assets/videos/SinEvento.mp4`}
                  className="no-event-video"
                  autoPlay
                  muted
                  loop
                  onError={(e) => {
                    console.error("El video no se pudo cargar.");
                    (e.target as HTMLVideoElement).style.display = "none";
                  }}
                  data-aos="fade-in"
                  data-aos-delay="400"
                />
              )}
              <h3
                className="countdown-text"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {upcomingEvent
                  ? upcomingEvent.name.text
                  : "¡No te pierdas este evento especial!"}
              </h3>
            </div>
            {upcomingEvent && (
              <div
                className="event-card"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className="event-image-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <img
                    src={
                      upcomingEvent.logo?.original?.url || "/apoyomujeres.png"
                    }
                    alt="Próximo evento"
                    className="event-image"
                  />
                </div>
                <Link to="/eventos" data-aos="fade-up" data-aos-delay="800">
                  <button className="secondary-button pulse-effect">
                    Más información
                  </button>
                </Link>
              </div>
            )}
          </div> */}
          <div
            className="section-countdown"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="countdown-content">
              <h2 data-aos="fade-down" data-aos-delay="300">
                ¡Próximo evento!
              </h2>
              {upcomingEvent ? (
                <div
                  className="countdown"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="500"
                  >
                    <span>{timeLeft.days}</span> días
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="600"
                  >
                    <span>{timeLeft.hours}</span> horas
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="700"
                  >
                    <span>{timeLeft.minutes}</span> minutos
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="800"
                  >
                    <span>{timeLeft.seconds}</span> segundos
                  </div>
                </div>
              ) : (
                <div
                  className="no-event-container"
                  data-aos="fade-in"
                  data-aos-delay="400"
                >
                  <video
                    src={`${
                      import.meta.env.BASE_URL
                    }assets/videos/SinEvento.mp4`}
                    className="no-event-video"
                    autoPlay
                    muted
                    loop
                    onError={(e) => {
                      console.error("El video no se pudo cargar.");
                      (e.target as HTMLVideoElement).style.display = "none";
                    }}
                  />
                  <br />
                  <div
                    className="no-event-info text-left"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    style={{
                      color: "#2a2170",
                      lineHeight: 1.5,
                      fontSize: "1.2rem",
                    }}
                  >
                    <p>
                      Estamos preparando nuevos eventos emocionantes para la
                      comunidad.
                    </p>
                    <p>
                      Mientras tanto, te invitamos a explorar nuestros recursos
                      y materiales.{" "}
                    </p>
                  </div>
                  <br />
                </div>
              )}
              <br />
            </div>
            {upcomingEvent ? (
              <div
                className="event-card"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className="event-image-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <img
                    src={
                      upcomingEvent.logo?.original?.url || "/apoyomujeres.png"
                    }
                    alt="Próximo evento"
                    className="event-image"
                  />
                </div>
                <Link to="/eventos" data-aos="fade-up" data-aos-delay="800">
                  <button className="secondary-button pulse-effect">
                    Más información
                  </button>
                </Link>
              </div>
            ) : (
              <div
                className="event-placeholder-card"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className="event-buttons"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div
                    className="event-buttons"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    style={{
                      display: "flex",
                      gap: "15px",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/eventos">
                      <button className="secondary-button">
                        Ver eventos pasados
                      </button>
                    </Link>
                    <Link to="/blog">
                      <button className="primary-button">
                        Explorar recursos
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mantenemos los bloques comentados tal cual para que puedas recuperarlos cuando lo necesites */}
        {/* <div className="call-to-action">
    <h2>Conócenos</h2>
    <p>
      Si compartes nuestra pasión por la tecnología y nuestra filosofía
      de <strong>visibilizar a las mujeres programadoras </strong>y
      promover su desarrollo profesional, te invitamos a unirte a
      nuestra comunidad. Ya seas una mujer en tecnología que busca
      crecer profesionalmente o una líder con años de experiencia
      dispuesta a compartir tu conocimiento, hay un lugar para ti en{" "}
      <strong>FemCoders Club. </strong>
      <FaUserFriends color="#EA4F33" className="icon" />
      Además, extendemos una invitación a las empresas que se alinean
      con nuestros valores para que colaboren con nosotras.{" "}
      <strong>
        Juntas, podemos crear un entorno más inclusivo y equitativo en
        el sector tech.
      </strong>
      <FaBriefcase color="#4737BB" className="icon" />
      <br />
      Te invitamos a nuestro próximo evento, una oportunidad increíble
      para aprender, conectar y crecer. <br />
      Consulta los detalles a continuación y únete a nosotras en esta{" "}
      <strong>jornada de empoderamiento y aprendizaje. </strong>
      <br /> <FaStar color="#EA4F33" className="icon" />
    </p>
  </div> */}

        {/* 
  <div className="section-countdown">
    <div className="countdown-content">
      <h2>¡Próximo evento!</h2>
      <div className="countdown">
        <div className="countdown-item">
          <span>{timeLeft.days}</span> días
        </div>
        <div className="countdown-item">
          <span>{timeLeft.hours}</span> horas
        </div>
        <div className="countdown-item">
          <span>{timeLeft.minutes}</span> minutos
        </div>
        <div className="countdown-item">
          <span>{timeLeft.seconds}</span> segundos
        </div>
      </div>
      <h3 className="countdown-text">
        {upcomingEvent
          ? upcomingEvent.name.text
          : "¡No te pierdas este evento especial!"}
      </h3>
    </div>
    <div className="event-card">
      {upcomingEvent && (
        <img
          src={upcomingEvent.logo?.original?.url || "/apoyomujeres.png"}
          alt="Próximo evento"
        />
      )}
      <Link to="/eventos">
        <button className="secondary-button">Más información</button>
      </Link>
    </div>
  </div> */}
      </section>

      <section className="parallax bg5">
        <div
          className="content-text"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h4>
            Si tienes alguna pregunta o inquietud, o si estás interesada en cómo
            puedes contribuir a nuestra comunidad, por favor llena el
            formulario. Estamos aquí para asistirte y valoramos enormemente tu
            interés en apoyar a FemCoders Club. <br />
          </h4>
        </div>

        <div className="form-and-photos">
          <div
            className="form-container"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="form-card">
              <img
                src="/FemCodersClubLogo.png"
                alt="femCoders Club Logo"
                className="form-logo"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" id="name" name="name" required />
                  <label htmlFor="name">Nombre</label>
                </div>
                <div className="form-group">
                  <input type="text" id="last-name" name="last-name" required />
                  <label htmlFor="last-name">Apellidos</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="email" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-group">
                  <textarea id="message" name="message" required></textarea>
                  <label htmlFor="message">Mensaje</label>
                </div>
                <button type="submit" className="accent-button">
                  Enviar
                </button>
              </form>
            </div>
          </div>

          <div
            className="image-content"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            role="presentation"
          >
            <div className="photo-stack">
              {/* Renderizado condicional para cada imagen */}
              {currentPhotoIndex === 0 ? (
                <div
                  className="photo photo-1"
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  aria-hidden="false"
                >
                  <div className="photo-gradient"></div>
                  <OptimizedImage
                    src="/assets/home-images/fotoFemCodersClub.jpg"
                    alt="Cofundadoras de FemCoders Club con perfiles en STEM"
                    title="Cofundadoras de FemCoders Club con perfiles en STEM"
                    className="photo-image"
                    tabIndex={0}
                  />
                </div>
              ) : (
                <div
                  className="photo photo-2"
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  aria-hidden="true"
                >
                  <div className="photo-gradient"></div>
                  <OptimizedImage
                    src="/assets/home-images/fotoFemCodersClub.jpg"
                    alt="Cofundadoras de FemCoders Club con perfiles en STEM"
                    title="Cofundadoras de FemCoders Club con perfiles en STEM"
                    className="photo-image"
                    tabIndex={-1}
                  />
                </div>
              )}

              {/* Renderizado condicional para la segunda imagen */}
              {currentPhotoIndex === 1 ? (
                <div
                  className="photo photo-1 photo-event"
                  data-aos="zoom-in-down"
                  data-aos-delay="600"
                  aria-hidden="false"
                >
                  <div className="photo-gradient"></div>
                  <OptimizedImage
                    src="/assets/home-images/femcodersclubFinalEvento.jpg"
                    alt="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024 dedicado a las mujeres tech"
                    title="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024"
                    className="photo-image"
                    tabIndex={0}
                  />
                </div>
              ) : (
                <div
                  className="photo photo-2 photo-event"
                  data-aos="zoom-in-down"
                  data-aos-delay="600"
                  aria-hidden="true"
                >
                  <div className="photo-gradient"></div>
                  <OptimizedImage
                    src="/assets/home-images/femcodersclubFinalEvento.jpg"
                    alt="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024 dedicado a las mujeres tech"
                    title="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024"
                    className="photo-image"
                    tabIndex={-1}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ConfirmationModal
        isVisible={showMessage}
        onClose={() => setShowMessage(false)}
      />
    </>
  );
};

export default HomePage;
