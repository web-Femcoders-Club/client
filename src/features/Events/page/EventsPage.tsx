import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { getPastEvents, getUpcomingEvents } from "../../../api/eventsApi";
import SeccionPasados from "../components/SeccionPasados";
import SeccionPonentes from "../components/SeccionPonentes";
import SeccionProximos from "../components/SeccionProximos";
import { PRESENTACION_EVENTOS } from "../contenido";
import { leerFecha } from "../fecha";
import "./../../Home/page/Home.css";

const EventsPage = () => {
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

  const hayError = Boolean(pastEventsError || upcomingEventsError);

  const sortedPastEvents = pastEventsData
    ? [...pastEventsData].sort(
        (a, b) =>
          leerFecha(b.start_local).getTime() - leerFecha(a.start_local).getTime()
      )
    : [];

  return (
    <>
      <Helmet>
        {/*
          Los mismos textos que escribe el prerender en el HTML servido
          (scripts/spaRoutesMeta.ts, entrada "/eventos"): si se cambian aquí,
          hay que cambiarlos también allí. El título coincide con el h1.

          El JSON-LD de esta página (la página, cada evento y la miga de pan)
          no va aquí: lo escribe el prerender en el HTML servido, desde la base
          de datos (scripts/contenidoEventos.ts), para que lo lean también los
          rastreadores que no ejecutan JavaScript.
        */}
        <title>Eventos para mujeres en tecnología | FemCoders Club</title>
        <meta name="description" content="Charlas, talleres, encuentros y networking sobre tecnología, IA y desarrollo profesional, presenciales en Barcelona y online. Más de 40 eventos de FemCoders Club." />
        <link rel="canonical" href="https://www.femcodersclub.com/eventos" />

        <meta property="og:title" content="Eventos para mujeres en tecnología | FemCoders Club" />
        <meta property="og:description" content="Charlas, talleres, encuentros y networking sobre tecnología, IA y desarrollo profesional, presenciales en Barcelona y online. Más de 40 eventos de FemCoders Club." />
        <meta property="og:url" content="https://www.femcodersclub.com/eventos" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.femcodersclub.com/og-eventos.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Asistentes y organizadoras de un taller de FemCoders Club posan sonriendo en el Canòdrom de Barcelona" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eventos para mujeres en tecnología | FemCoders Club" />
        <meta name="twitter:description" content="Charlas, talleres, encuentros y networking sobre tecnología, IA y desarrollo profesional, presenciales en Barcelona y online. Más de 40 eventos de FemCoders Club." />
        <meta name="twitter:image" content="https://www.femcodersclub.com/og-eventos.jpg" />
        <meta name="twitter:image:alt" content="Asistentes y organizadoras de un taller de FemCoders Club posan sonriendo en el Canòdrom de Barcelona" />
      </Helmet>
      {/*
        Si la API falla, la página conserva su título y su h1 (lo que ve
        Google, que ejecuta JS) y en lugar de los eventos sale el aviso.
      */}
      {hayError ? (
        <section className="eventos-proximos bg1" aria-labelledby="eventos-titulo">
          <h1 className="eventos-proximos__titulo" id="eventos-titulo">
            {PRESENTACION_EVENTOS.titulo.texto}{" "}
            <span className="fc-rotulador">{PRESENTACION_EVENTOS.titulo.destacado}</span>
          </h1>
          <p className="eventos-proximos__texto" role="alert">
            No hemos podido cargar los eventos. Vuelve a intentarlo en unos minutos.
          </p>
        </section>
      ) : (
        <>
          <SeccionProximos
            eventos={upcomingEventsData ?? []}
            cargando={isLoadingUpcomingEvents}
          />

          <SeccionPonentes />

          <SeccionPasados eventos={sortedPastEvents} cargando={isLoadingPastEvents} />
        </>
      )}
    </>
  );
};

export default EventsPage;
