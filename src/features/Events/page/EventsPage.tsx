import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPastEvents, getUpcomingEvents } from "../../../api/eventsApi";
import FemSpinner from "../../../components/Spinner";
import CardEvent from "../components/CardEvent";
import CustomCarousel from "../components/CustomCarousel";
import "./EventsPage.css";
import textofemcoders from "/textofemcodersclub.png";
import bg4 from "/bg4.png";
import { Helmet } from "react-helmet";
import "./../../Home/page/Home.css";
import { Event } from "../../../types/types";

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

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

  const paginatedEvents = pastEventsData?.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const totalPages = Math.ceil((pastEventsData?.length || 0) / eventsPerPage);

  return (
    <>
      <Helmet>
        <title>Eventos - FemCoders Club</title>
        <meta
          name="description"
          content="Explora los próximos y pasados eventos organizados por FemCoders Club. Una comunidad para mujeres apasionadas por la tecnología."
        />
        <meta
          name="keywords"
          content="FemCoders, eventos tecnológicos, mujeres en tecnología, programación, talleres de tecnología, comunidad tecnológica, eventos de coding, desarrollo web"
        />
        <link rel="canonical" href="https://femcodersclub.com/eventos" />

        <meta property="og:title" content="Eventos - FemCoders Club" />
        <meta
          property="og:description"
          content="Descubre eventos pasados y próximos organizados por FemCoders Club. Únete a nuestra comunidad y participa en eventos tecnológicos únicos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://femcodersclub.com/eventos" />
        <meta
          property="og:image"
          content="https://femcodersclub.com/assets/event-thumbnail.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eventos - FemCoders Club" />
        <meta
          name="twitter:description"
          content="Participa en eventos organizados por FemCoders Club, una comunidad dedicada a empoderar a mujeres en tecnología."
        />
        <meta
          name="twitter:image"
          content="https://femcodersclub.com/assets/event-thumbnail.jpg"
        />
      </Helmet>

      <section
        style={{
          backgroundImage: `url(${textofemcoders})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
        className="background-image-mobile"
      >
        <h1 className="text-eventos">Próximos eventos</h1>
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
                controls
                autoPlay
                loop
                muted
                aria-label="Video promocional: Próximamente más eventos de femCoders Club."
              ></video>
            </div>
            // <p>No hay eventos próximos disponibles</p>
          )}
        </div>
      </section>

      <section className="parallax bg2 centered-section">
        <h3 className="carousel-heading">
          Gracias a todas las ponentes que empoderan a nuestra comunidad
        </h3>
        <p className="carousel-subheading">
          Gracias a la colaboración de estas ponentes, nuestra comunidad se
          fortalece a través del conocimiento, el empoderamiento y la conexión.
        </p>
        <CustomCarousel />
      </section>

      <section
        className="pt-8 p-5"
        style={{
          backgroundImage: `url(${bg4})`,
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

        <div className="flex justify-center mt-4">
          <div className="btn-group pagination-custom">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
