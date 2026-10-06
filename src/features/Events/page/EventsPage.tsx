import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { getPastEvents, getUpcomingEvents } from "../../../api/eventsApi";
import FemSpinner from "../../../components/FemSpinner";
import { Event } from "../../../types/types";
import CardEvent from "../components/CardEvent";
import SeccionPonentes from "../components/SeccionPonentes";
import SeccionProximos from "../components/SeccionProximos";
import "./../../Home/page/Home.css";
import "./EventsPage.css";

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
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/eventos"
        />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta property="og:locale" content="es_ES" />
        {/*
          Apuntaba a `cofundadoras-femCoders-club.webp`, un archivo que no
          existe: el real es `cofundadoras-femCodersClub.webp` y vive en
          `public-optimized/`, no en la raíz.

          A quien lo comparte no le cambia nada: `prerenderMeta` solo cubre los
          posts del blog, así que WhatsApp y LinkedIn reciben el index.html
          genérico y usan el logo. Esta meta la lee Googlebot, que sí ejecuta
          JS. Se deja el .jpg y no el .webp por si algún día el prerender cubre
          esta ruta: WhatsApp aún no previsualiza WebP en `og:image`.
        */}
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/cofundadoras-femCodersClub.jpg"
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
          content="https://www.femcodersclub.com/cofundadoras-femCodersClub.jpg"
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
            // Sin `image`, Search Console avisa de que falta un campo
            // recomendado: `EventSeries` hereda de `Event` y se valida igual.
            image:
              "https://www.femcodersclub.com/cofundadoras-femCodersClub.jpg",
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
      <SeccionProximos
        eventos={upcomingEventsData ?? []}
        cargando={isLoadingUpcomingEvents}
      />

      <SeccionPonentes />

      <section id="eventos-pasados" className="pt-8 p-5 bg4">
        <h2 className="text-3xl font-bold text-secondary flex justify-center text-center mb-8">
          Eventos Pasados
        </h2>
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
