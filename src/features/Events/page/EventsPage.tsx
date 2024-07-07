import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPastEvents, getUpcomingEvents } from "../../../api/eventsApi";
import FemSpinner from "../../../components/Spinner";
import CardEvent from "../components/CardEvent";
import "./EventsPage.css";
import textofemcoders from "/textofemcodersclub.png";
import bg1 from "/bg4.jpg";

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

  // Paginated Events
  const paginatedEvents = pastEventsData?.events.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const totalPages = Math.ceil(
    (pastEventsData?.events.length || 0) / eventsPerPage
  );

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${textofemcoders})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          height: "300px",
        }}
      >
        <h1 className="text-eventos">Próximos eventos</h1>
      </section>

      <section>
        <div className=" flex items-center justify-center flex-col gap-y-8 p-5">
          {isLoadingUpcomingEvents ? (
            <FemSpinner />
          ) : upcomingEventsData?.events &&
            upcomingEventsData.events.length > 0 ? (
            upcomingEventsData.events.map(
              (event: {
                id: string;
                start: { local: string };
                name: { text: string };
                logo?: { original?: { url?: string } };
                venue?: { address?: { localized_address_display?: string } };
                description: { text: string };
                url: string;
              }) => {
                const date = new Date(event.start.local).toLocaleDateString(
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
                    title={event.name.text}
                    image={event.logo?.original?.url || ""}
                    date={date}
                    location={
                      event.venue?.address?.localized_address_display || ""
                    }
                    description={event.description.text}
                    eventUrl={event.url}
                  />
                );
              }
            )
          ) : (
            <p>No hay próximos eventos disponibles</p>
          )}
        </div>
      </section>

      <section
        className="mb-20 pt-8 p-5"
        style={{
          backgroundImage: `url(${bg1})`,
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
            paginatedEvents.map(
              (event: {
                id: string;
                start: { local: string };
                name: { text: string };
                logo?: { original?: { url?: string } };
                venue?: { address?: { localized_address_display?: string } };
                description: { text: string };
                url: string;
              }) => {
                const date = new Date(event.start.local).toLocaleDateString(
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
                    title={event.name.text}
                    image={event.logo?.original?.url || ""}
                    date={date}
                    location={
                      event.venue?.address?.localized_address_display || ""
                    }
                    description={event.description.text}
                    eventUrl={event.url}
                  />
                );
              }
            )
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
