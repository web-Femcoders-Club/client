import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getPastEvents, getUpcomingEvents } from "../../../api/eventsApi";
import FemSpinner from "../../../components/FemSpinner";
import { Event } from "../../../types/types";
import CardEvent from "../components/CardEvent";
import CustomCarousel from "../components/CustomCarousel";
import "./../../Home/page/Home.css";
import "./EventsPage.css";

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageFolder = isMobile ? "mobile" : "desktop";

  const {
    data: pastEventsData,
    isLoading: isLoadingPastEvents,
    error: pastEventsError,
  } = useQuery({
    queryKey: ["pastEvents"],
    queryFn: getPastEvents,
  });

  const {
    data: upcomingEventsData,
    isLoading: isLoadingUpcomingEvents,
    error: upcomingEventsError,
  } = useQuery({
    queryKey: ["upcomingEvents"],
    queryFn: getUpcomingEvents,
  });

  if (pastEventsError || upcomingEventsError) {
    return <div>Error loading events. Please try again later.</div>;
  }

  const sortedPastEvents = pastEventsData
    ? [...pastEventsData].sort(
        (a, b) =>
          new Date(b.start_local).getTime() - new Date(a.start_local).getTime()
      )
    : [];

  const paginatedEvents = sortedPastEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const totalPages = Math.ceil(sortedPastEvents.length / eventsPerPage);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Eventos Tech para Mujeres | FemCoders Club Barcelona</title>
        <meta
          name="description"
          content="Explora los mejores eventos tecnológicos para mujeres en Barcelona organizados por FemCoders Club. Talleres, conferencias, networking y oportunidades profesionales en el sector tech. Únete a la comunidad líder de mujeres en tecnología."
        />
        <meta
          name="keywords"
          content="FemCoders Club, comunidad tech mujeres Barcelona, eventos tecnológicos femeninos, femcoders, networking tech mujeres, talleres programación Barcelona, mujeres en tecnología, comunidad tech femenina, DataConnect, eventos diversidad tecnológica, desarrollo profesional tech, oportunidades laborales tecnología"
        />
        <link rel="canonical" href="https://femcodersclub.com/eventos" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Eventos Tech para Mujeres | FemCoders Club Barcelona"
        />
        <meta
          property="og:description"
          content="Descubre los mejores eventos tecnológicos para mujeres en Barcelona. Aprende, conecta y crece profesionalmente con la comunidad líder de mujeres en tech. ¡Únete a nosotras!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://femcodersclub.com/eventos" />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:image"
          content="https://femcodersclub.com/cofundadoras-femCoders-club.webp"
        />
        <meta
          property="og:image:alt"
          content="Evento de mujeres en tecnología organizado por FemCoders Club Barcelona"
        />

        {/* Twitter/X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Eventos Tech para Mujeres | FemCoders Club Barcelona"
        />
        <meta
          name="twitter:description"
          content="Únete a los mejores eventos tecnológicos para mujeres en Barcelona. Desarrollo profesional, networking y oportunidades en el sector tech."
        />
        <meta name="twitter:site" content="@FemCodersClub" />
        <meta
          name="twitter:image"
          content="https://femcodersclub.com/cofundadoras-femCoders-club.webp"
        />
        <meta name="twitter:creator" content="@FemCodersClub" />

        {/* Enlaces a redes sociales */}
        <link rel="me" href="https://x.com/FemCodersClub" />
        <link
          rel="me"
          href="https://www.linkedin.com/company/fem-coders-club/"
        />
        <link rel="me" href="https://www.instagram.com/femcoders_club/" />

        {/* Datos estructurados para eventos */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventSeries",
            name: "Eventos FemCoders Club Barcelona",
            description:
              "Serie de eventos tecnológicos para mujeres organizados por FemCoders Club, la comunidad líder de mujeres en tecnología en Barcelona",
            url: "https://www.femcodersclub.com/eventos",
            location: {
              "@type": "Place",
              name: "Barcelona, España",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barcelona",
                addressRegion: "Cataluña",
                addressCountry: "ES",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "FemCoders Club",
              url: "https://www.femcodersclub.com",
            },
          })}
        </script>
      </Helmet>
      <section
        className="background-image-mobile"
        style={{
          backgroundImage: `url(/public-optimized/${imageFolder}/textofemcodersclub.webp)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
      >
        <h1 className="text-eventos">Próximos eventos tech </h1>
        <h2 className="text-eventos">conectando talento en tecnología</h2>
      </section>

      <section>
        <div className="mt-16 flex items-center justify-center flex-col gap-y-8 p-5">
          {isLoadingUpcomingEvents ? (
            <FemSpinner />
          ) : upcomingEventsData && upcomingEventsData.length > 0 ? (
            upcomingEventsData.map((event: Event) => {
              const date = new Date(event.start_local).toLocaleDateString(
                "es-ES",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }
              );
              return (
                <CardEvent
                  key={event.id}
                  title={event.name}
                  image={event.logo_url || ""}
                  date={date}
                  location={event.location || ""}
                  description={event.description || ""}
                  eventUrl={event.event_url || "#"}
                  start={{ local: event.start_local }}
                />
              );
            })
          ) : (
            <div className="no-events">
              <video
                src="/assets/videos/SinEvento.mp4"
                className="custom-video"
                style={{ height: "350px", width: "auto" }}
                controls
                autoPlay
                loop
                muted
                aria-label="Video promocional: Próximamente más eventos de femCoders Club."
              ></video>
            </div>
          )}
        </div>
      </section>

      <section className="parallax bg2 centered-section">
        <h3>Expertas tecnológicas que lideran el cambio en el sector tech</h3>
        <p className="carousel-subheading-enhanced">
          <a
            href="https://femcodersclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            FemCoders Club
          </a>{" "}
          conecta a mujeres profesionales del sector tecnológico con talento
          emergente a través de eventos presenciales y online. Participan
          mujeres referentes que, desde distintos ámbitos de la tecnología,
          comparten conocimientos, experiencias y reflexiones para inspirar,
          visibilizar y apoyar el crecimiento profesional de otras mujeres en el
          sector.
        </p>

        <CustomCarousel />
      </section>

      <section
        className="pt-8 p-5"
        style={{
          backgroundImage: `url(/public-optimized/${imageFolder}/bg4.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold text-secondary flex justify-center text-center mb-8">
          Eventos Pasados
        </h1>
        <div className="flex items-center justify-center flex-col gap-y-8">
          {isLoadingPastEvents ? (
            <FemSpinner />
          ) : paginatedEvents && paginatedEvents.length > 0 ? (
            paginatedEvents.map((event: Event) => {
              const date = new Date(event.start_local).toLocaleDateString(
                "es-ES",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }
              );
              return (
                <CardEvent
                  key={event.id}
                  title={event.name}
                  image={event.logo_url || ""}
                  date={date}
                  location={event.location || ""}
                  description={event.description || ""}
                  eventUrl={event.event_url || "#"}
                  start={{ local: event.start_local }}
                />
              );
            })
          ) : (
            <p>No hay eventos pasados disponibles</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            <div className="btn-group pagination-custom">
              <button
                className={`btn ${currentPage === 1 ? "btn-disabled" : ""}`}
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                title="Previous Page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`btn ${
                    currentPage === index + 1 ? "btn-active" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`btn ${
                  currentPage === totalPages ? "btn-disabled" : ""
                }`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                title="Next Page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default EventsPage;
