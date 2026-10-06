import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { getPastEvents, getUpcomingEvents } from "../../../api/eventsApi";
import SeccionPasados from "../components/SeccionPasados";
import SeccionPonentes from "../components/SeccionPonentes";
import SeccionProximos from "../components/SeccionProximos";
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

  if (pastEventsError || upcomingEventsError) {
    return (
      <section className="eventos-proximos bg1">
        <p className="eventos-proximos__texto" role="alert">
          No hemos podido cargar los eventos. Vuelve a intentarlo en unos minutos.
        </p>
      </section>
    );
  }

  const sortedPastEvents = pastEventsData
    ? [...pastEventsData].sort(
        (a, b) =>
          leerFecha(b.start_local).getTime() - leerFecha(a.start_local).getTime()
      )
    : [];

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

      <SeccionPasados eventos={sortedPastEvents} cargando={isLoadingPastEvents} />
    </>
  );
};

export default EventsPage;
