import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPastEvents, getUpcomingEvents } from '../../../api/eventsApi';
import FemSpinner from '../../../components/Spinner';
import CardEvent from '../components/CardEvent';
import './EventsPage.css';
import textofemcoders from '/textofemcodersclub.png';
import bg1 from '/bg4.png';

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const eventsPerPage = 3;

  const images = [
    "/doscomunidadestech.jpeg",
    "/comunidadfem.JPG",
    "/eventoAntesMuerta.jpg",
    "/comoesunevento.jpeg",
    "/evento8Marzo1.jpg",
    "/eventoCriteo.jpg",
    "/cordialidadCriteo.JPG",
    "/eventocomunidad.jpg",
    "/eventoData.jpg",
    "/eventocomunidadfemcodersclub.JPG",
    "/eventoGlovo.jpg",
    "/eventoFactoria1.jpg",
    "/iniciofemCoders.jpg",
    "/eventoFactoria2.jpg",
    "/eventoFactoria3.jpg",
    "/femcodersclubpresentacion.jpeg",
  ];

  const { data: pastEventsData, isLoading: isLoadingPastEvents, error: pastEventsError } = useQuery(
    {
      queryKey: ['pastEvents'],
      queryFn: getPastEvents,
    }
  );

  const { data: upcomingEventsData, isLoading: isLoadingUpcomingEvents, error: upcomingEventsError } = useQuery(
    {
      queryKey: ['upcomingEvents'],
      queryFn: getUpcomingEvents,
    }
  );

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [images.length]);

  if (pastEventsError || upcomingEventsError) {
    return <div>Error loading events. Please try again later.</div>;
  }

  const paginatedEvents = pastEventsData?.events.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const totalPages = Math.ceil((pastEventsData?.events.length || 0) / eventsPerPage);

  return (
    <>
      <section style={{ backgroundImage: `url(${textofemcoders})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', height: '250px' }}>
        <h1 className="text-eventos">Próximos eventos</h1>
      </section>

      <section>
        <div className='mt-16 flex items-center justify-center flex-col gap-y-8 p-5'>
          {isLoadingUpcomingEvents ? (
            <FemSpinner />
          ) : (
            upcomingEventsData?.events && upcomingEventsData.events.length > 0 ? (
              upcomingEventsData.events.map((event: { id: string, start: { local: string }, name: { text: string }, logo?: { original?: { url?: string } }, venue?: { address?: { localized_address_display?: string } }, description: { text: string }, url: string }) => {
                const date = new Date(event.start.local).toLocaleDateString('es-ES', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
                return (
                  <CardEvent
                    key={event.id}
                    title={event.name.text}
                    image={event.logo?.original?.url || ''}
                    date={date}
                    location={event.venue?.address?.localized_address_display || ''}
                    description={event.description.text}
                    eventUrl={event.url}
                  />
                );
              })
            ) : (
              <p>No hay próximos eventos disponibles</p>
            )
          )}
        </div>
      </section>

      <section className="parallax bg2">
        <div className="carousel-container">
          <h2 className="carousel-heading">Gracias a todas las ponentes que empoderan a nuestra comunidad</h2>
          <p className="carousel-subheading">
            Con la ayuda de estas ponentes, nuestra comunidad adquiere conocimiento, empoderamiento y conexión.
          </p>
          <div className="carousel">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === carouselIndex ? 'active' : ''}`}
              >
                <img src={image} alt={`Evento ${index + 1}`} />
              </div>
            ))}
            <button className="carousel-control prev" onClick={() => setCarouselIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>
              ❮
            </button>
            <button className="carousel-control next" onClick={() => setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length)}>
              ❯
            </button>
          </div>
        </div>
      </section>

      <section className="mb-20 pt-8 p-5" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-3xl font-bold text-secondary flex justify-center text-center mb-8">Eventos Pasados</h1>
        <div className='flex items-center justify-center flex-col gap-y-8'>
          {isLoadingPastEvents ? (
            <FemSpinner />
          ) : (
            paginatedEvents && paginatedEvents.length > 0 ? (
              paginatedEvents.map((event: { id: string, start: { local: string }, name: { text: string }, logo?: { original?: { url?: string } }, venue?: { address?: { localized_address_display?: string } }, description: { text: string }, url: string }) => {
                const date = new Date(event.start.local).toLocaleDateString("es-ES", { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true });
                return (
                  <CardEvent
                    key={event.id}
                    title={event.name.text}
                    image={event.logo?.original?.url || ''}
                    date={date}
                    location={event.venue?.address?.localized_address_display || ''}
                    description={event.description.text}
                    eventUrl={event.url}
                  />
                );
              })
            ) : (
              <p>No hay eventos pasados disponibles</p>
            )
          )}
        </div>
        
        <div className="flex justify-center mt-4">
          <div className="btn-group pagination-custom">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
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
}

export default EventsPage;

