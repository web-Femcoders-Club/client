import { useQuery } from '@tanstack/react-query';
import bgEvents1 from '/bgEvents1.png';
import { getPastEvents, getUpcomingEvents } from '../../../api/eventsApi';
import FemSpinner from '../../../components/Spinner';
import CardPastEvents from '../components/CardPastEvents';
import CardUpcomingEvent from '../components/CardUpcomingEvent';

type Event = {
  start: {
    local: string | number | Date;
  };
  name: {
    text: string;
  };
  logo?: {
    original?: {
      url?: string;
    };
  };
  venue?: {
    address?: {
      localized_address_display?: string;
    };
  };
  description?: {
    text?: string;
  };
  id: string;
};

const EventsPage = () => {
  const { data: pastEventsData, isLoading: isLoadingPastEvents } = useQuery({
    queryKey: ['pastEvents'],
    queryFn: getPastEvents,
  });

  const { data: upcomingEventsData, isLoading: isLoadingUpcomingEvents } = useQuery({
    queryKey: ['upcomingEvents'],
    queryFn: getUpcomingEvents,
  });

  console.log('Upcoming events data:', upcomingEventsData);
  console.log('Past events data:', pastEventsData);

  return (
    <>
      <section className="flex justify-center text-center items-center bg-center bg-cover bg-no-repeat h-[500px]" style={{ backgroundImage: `url(${bgEvents1})` }}>
        <h1 className="text-4xl font-bold text-orange-500 shadow-lg">
          Próximos eventos
        </h1>
      </section>

      <section className='mb-16'>
        <div className='mt-16 flex items-center justify-center flex-col gap-y-8 p-5'>
          {isLoadingUpcomingEvents ? (
            <FemSpinner /> 
          ) : (
            upcomingEventsData?.events?.length > 0 ? (
              upcomingEventsData.events.map((event: Event) => {
                if (!event.name || !event.start) {
                  return null; // Skip rendering this event if name or start is missing
                }

                const date = new Date(event.start.local);
                const formattedDate = date.toLocaleDateString("es-ES", { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true });

                return (
                  <CardUpcomingEvent
                    key={event.id}
                    title={event.name.text}
                    image={event.logo?.original?.url ?? ''}
                    date={formattedDate}
                    location={event.venue?.address?.localized_address_display ?? ''}
                    description={event.description?.text ?? ''}
                    eventId={event.id}
                  />
                );
              })
            ) : (
              <p>No hay próximos eventos disponibles</p>
            )
          )}
        </div>
      </section>

      <section className="bg-gradient-to-b from-purple-200 to-blue-200 mb-20 pt-8 p-5">
        <h1 className="text-3xl font-bold text-secondary flex justify-center text-center mb-8">Eventos Pasados</h1>
        <div className='flex items-center justify-center flex-col gap-y-8'>
          {isLoadingPastEvents ? (
            <FemSpinner />
          ) : (
            pastEventsData?.events?.length > 0 ? (
              pastEventsData.events.map((event: Event) => {
                if (!event.name || !event.start) {
                  return null; // Skip rendering this event if name or start is missing
                }

                const date = new Date(event.start.local);
                const formattedDate = date.toLocaleDateString("es-ES", { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true });

                return (
                  <CardPastEvents
                    key={event.id}
                    title={event.name.text}
                    image={event.logo?.original?.url ?? ''}
                    date={formattedDate}
                    location={event.venue?.address?.localized_address_display ?? ''}
                    description={event.description?.text ?? ''}
                  />
                );
              })
            ) : (
              <p>No hay eventos pasados disponibles</p>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default EventsPage;






