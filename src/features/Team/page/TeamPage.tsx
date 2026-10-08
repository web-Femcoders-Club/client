import { Helmet } from "react-helmet";
import SeccionCambio from "../components/SeccionCambio";
import SeccionEquipo from "../components/SeccionEquipo";
import SeccionImpacto from "../components/SeccionImpacto";
import SeccionValores from "../components/SeccionValores";

const TeamPage = () => {
  return (
    <>
      <Helmet>
        {/*
          Los mismos textos que escribe el prerender en el HTML servido
          (scripts/spaRoutesMeta.ts, entrada "/equipo"): si se cambian aquí,
          hay que cambiarlos también allí. El título coincide con el h1.

          El JSON-LD de esta página (AboutPage, las personas del equipo actual
          y la miga de pan) no va aquí: lo escribe el prerender en el HTML
          servido, desde la base de datos y scripts/fundadoras.ts, para que lo
          lean también los rastreadores que no ejecutan JavaScript.
        */}
        <title>Nuestro equipo de liderazgo | FemCoders Club</title>
        <meta name="description" content="Conoce a las cofundadoras de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón e Isadora Matias." />
        <link rel="canonical" href="https://www.femcodersclub.com/equipo" />

        <meta property="og:title" content="Nuestro equipo de liderazgo | FemCoders Club" />
        <meta property="og:description" content="Conoce a las cofundadoras de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón e Isadora Matias." />
        <meta property="og:url" content="https://www.femcodersclub.com/equipo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.femcodersclub.com/og-equipo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Las cinco cofundadoras de FemCoders Club se hacen un selfi sonriendo al sol en Barcelona durante HackBarna AI Summit 2026" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuestro equipo de liderazgo | FemCoders Club" />
        <meta name="twitter:description" content="Conoce a las cofundadoras de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón e Isadora Matias." />
        <meta name="twitter:image" content="https://www.femcodersclub.com/og-equipo.jpg" />
        <meta name="twitter:image:alt" content="Las cinco cofundadoras de FemCoders Club se hacen un selfi sonriendo al sol en Barcelona durante HackBarna AI Summit 2026" />
      </Helmet>

      {/* Cada fondo empieza en el color en que acaba el anterior: bg1 → bg3 → bg4 → bg2. */}
      <SeccionEquipo />

      <SeccionValores />

      <SeccionImpacto />

      <SeccionCambio />
    </>
  );
};

export default TeamPage;
