import { useState, useEffect, FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../Contact/components/ConfirmationModal";
import { Helmet } from "react-helmet";
import "./Home.css";
import CarouselWithText from "../components/CarouselWithText";
import { getUpcomingEvents } from "../../../api/eventsApi";
import AOS from "aos";
import "aos/dist/aos.css";

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
    "/eventoCarmenAnsio.jpg",
    "/assets/UltimosEventos2024/LorenaSalvadorPonenteAccesibilidad.jpg",
    "/eventoFactoriaF5.jpg",
    "/mujeresTech.jpg",
    "/comunidadFemCodersClubEventoCriteo.jpg",
    "/doscomunidadestech.jpeg",
    "/eventoTecnologico8Marzo.jpg",
    "/mujeresprogramadoras.jpg",
    "/posit8Marzo.jpg",
    "evento_techFemCodersClub.jpg",
    "/comunidadesMujeresTecnologas.jpg",
    "/AureaRodriguez.jpg",
    "/asistentesfemCodersClubCriteo.jpg",
    "/eventobufet.JPG",
    "/apoyoMujeresTech.jpg",
    "/EventoFactorial.jpg",
    "/mujeresTechNetworking.jpg",
    "/musicaconcodigo.jpeg",
    "/eventoUnlokingData.jpg",
    "/eventoLiderazgoMujer.jpg",
    "/mujeres-ciberseguridad-femcoders-evento.png",
    "/mujeresFemCodersClub.png",
    "/networkingEventosFemCodersClub.png",
    "/mujeresComunidadFemCodersClub.png",
    "/networking.png",
    "/eventoAdevintaFemCodersClub.png",
    "/apoyomujeres.png",
    "/comunidadDeMujeres.png",
    "/assets/ML-ComunicacionAcertiva/comunidadfemCodersClub-eventoML.png",
    "/assets/ML-ComunicacionAcertiva/EventoFemCodersClub-ComunicacionAcertiva.png",
    "/assets/ML-ComunicacionAcertiva/desarolladora-fullstack-Irina-femCodersClub.png",
    "/assets/ML-ComunicacionAcertiva/femcodersclubyponentes.png",
    "/assets/semRush/AnaSemrush.jpg",
    "/assets/semRush/eventoSemrush.jpg",
    "/assets/UltimosEventos2024/eventoSeatCode.jpg",
    "/assets/UltimosEventos2024/eventoInteligenciaEmocional.jpg",
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

        <meta
          name="description"
          content="femCoders club: Una comunidad dedicada a empoderar a mujeres en tecnología. Únete a nuestros eventos, talleres y redes de networking para crecer en el sector tecnológico."
        />

        <meta
          name="keywords"
          content="FemCoders Club,femCoders club, femcodersclub,  mujeres en tecnología, comunidad tech, eventos tecnológicos, talleres de programación, liderazgo femenino, networking, desarrollo web, empoderamiento mujeres tech"
        />

        <meta
          name="author"
          content="Irina Ichim, co-fundadora FemCoders Club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com" />

        <meta
          property="og:title"
          content="FemCoders Club | Comunidad Líder de Mujeres en Tecnología"
        />
        <meta
          property="og:description"
          content="FemCoders Club: Una comunidad dedicada a empoderar a mujeres en tecnología. Únete a nuestros eventos, talleres y redes de networking para crecer en el sector tecnológico."
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

        {/* Schema.org para Organización */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FemCoders Club",
            url: "https://www.femcodersclub.com",
            logo: "https://www.femcodersclub.com/FemCodersClubLogo.png",
            sameAs: [
              "https://www.instagram.com/femcoders_club/",
              "https://www.linkedin.com/company/fem-coders-club/",
              "https://www.youtube.com/@FemcodersClub",
              "https://github.com/femcodersclub",
              "https://communityinviter.com/apps/femcodersclub/femcoders-club",
            ],
            description:
              "Una comunidad dedicada a empoderar a mujeres en tecnología a través de eventos, talleres y networking.",
          })}
        </script>

        {/* Schema.org para Sitio Web */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FemCoders Club",
            url: "https://www.femcodersclub.com",
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
              {(() => {
                return (
                  <div
                    className={`photo ${
                      currentPhotoIndex === 0 ? "photo-1" : "photo-2"
                    }`}
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    {...{
                      "aria-hidden": currentPhotoIndex !== 0 ? "true" : "false",
                    }}
                  >
                    <div className="photo-gradient"></div>
                    <img
                      src="/cofundadorasFemCodersClub.jpg"
                      alt="varias de las cofundadoras de FemCoders Club"
                      title="Parte de las cofundadoras de FemCoders Club"
                      tabIndex={currentPhotoIndex === 0 ? 0 : -1}
                    />
                  </div>
                );
              })()}

              {(() => {
                return (
                  <div
                    className={`photo ${
                      currentPhotoIndex === 1 ? "photo-1" : "photo-2"
                    }`}
                    data-aos="zoom-in-down"
                    data-aos-delay="600"
                    {...{
                      "aria-hidden": currentPhotoIndex !== 1 ? "true" : "false",
                    }}
                  >
                    <div className="photo-gradient"></div>
                    <img
                      src="/femCodersClubCofundadoras.png"
                      alt="Mujeres cofundadoras de FemCoders Club"
                      title="Parte de las cofundadoras de FemCoders Club"
                      tabIndex={currentPhotoIndex === 1 ? 0 : -1}
                    />
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>
      <section className="parallax bg2 full-height">
        <div
          className="carousel-container"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <p
            className="carousel-subheading"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
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
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
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
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1200"
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

            {images.map((image, index) => {
              const isActive = index === carouselIndex;
              return (
                <div
                  key={index}
                  className={`carousel-item ${isActive ? "active" : ""} ${
                    !isPlaying && isActive ? "paused" : ""
                  }`}
                  role="group"
                  {...{ "aria-label": `Evento ${index + 1}` }}
                  {...{ "aria-hidden": isActive ? "false" : "true" }}
                >
                  <img
                    src={image}
                    alt={`Evento ${index + 1} de FemCoders Club`}
                    tabIndex={isActive ? 0 : -1}
                  />
                </div>
              );
            })}

            <div
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-anchor=".carousel"
              role="complementary"
              {...{ "aria-label": "Textos descriptivos sobre FemCoders" }}
            >
              <CarouselWithText texts={texts} />
            </div>
          </div>

          <div
            className="carousel-controls"
            data-aos="fade-up"
            data-aos-delay="700"
          >
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
              <h2>🚀 ¡Impulsa tu carrera en programación con</h2>
              <img
                src="/assets/Eventos2025/Infojobs.png"
                alt="Logo InfoJobs"
                className="sponsor-logo"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
            </div>

            <p
              className="text-lg leading-relaxed text-gray-800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Gracias al apoyo de{" "}
              <strong>
                InfoJobs, el portal líder para encontrar oportunidades
                laborales,
              </strong>{" "}
              este evento está diseñado para conectar a mujeres en tecnología
              con empresas que buscan talento. 💡
              <br />
              <span>
                <a
                  href="https://www.infojobs.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  InfoJobs
                </a>
              </span>{" "}
              apuesta por <em>impulsar la diversidad</em> en el sector tech,
              creando espacios donde más mujeres puedan crecer profesionalmente.
              <br />
              <br />
              <span
                className="highlight-text"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Durante el evento, tendrás la oportunidad de{" "}
                <strong>
                  escuchar a mujeres talentosas y experimentadas en tecnología
                </strong>
                , quienes compartirán su conocimiento y experiencias para
                inspirar a la próxima generación de profesionales tech.
              </span>
              <br />
              <br />
              Además, empresas como
              <span>
                {" "}
                <a
                  href="https://www.between.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  Between
                </a>{" "}
              </span>
              estarán presentes, brindando la oportunidad de conectar con
              recruiters y explorar nuevas oportunidades laborales.
              <br />
              Si estás buscando dar un paso más en tu carrera,{" "}
              <strong>
                te recomendamos llevar tu CV actualizado en formato digital.
              </strong>
              <br />
              <br />
              <span
                className="cta-text"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                🚀 <span>¡No te lo pierdas!</span> Inscríbete y forma parte de
                este evento con <strong>InfoJobs</strong>.
              </span>
            </p>
          </div>

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
              {(() => {
                return (
                  <div
                    className={`photo ${
                      currentPhotoIndex === 0 ? "photo-1" : "photo-2"
                    }`}
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    {...{
                      "aria-hidden": currentPhotoIndex !== 0 ? "true" : "false",
                    }}
                  >
                    <div className="photo-gradient"></div>
                    <img
                      src="/fotoFemCodersClub.jpg"
                      alt="Cofundadoras de FemCoders Club con perfiles en STEM"
                      title="Cofundadoras de FemCoders Club con perfiles en STEM"
                      tabIndex={currentPhotoIndex === 0 ? 0 : -1}
                    />
                  </div>
                );
              })()}

              {(() => {
                return (
                  <div
                    className={`photo ${
                      currentPhotoIndex === 1 ? "photo-1" : "photo-2"
                    } photo-event`}
                    data-aos="zoom-in-down"
                    data-aos-delay="600"
                    {...{
                      "aria-hidden": currentPhotoIndex !== 1 ? "true" : "false",
                    }}
                  >
                    <div className="photo-gradient"></div>
                    <img
                      src="/femcodersclubFinalEvento.jpg"
                      alt="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024 dedicado a las mujeres tech"
                      title="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024"
                      tabIndex={currentPhotoIndex === 1 ? 0 : -1}
                    />
                  </div>
                );
              })()}
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
