import React from "react";
import SeccionPresentacion from "../components/SeccionPresentacion";
import SeccionProposito from "../components/SeccionProposito";
import SeccionComoLoHacemos from "../components/SeccionComoLoHacemos";
import SeccionCompromiso from "../components/SeccionCompromiso";
import SeccionIdeas from "../components/SeccionIdeas";
import { Helmet } from "react-helmet";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quiénes somos: misión, visión y valores | FemCoders Club</title>

        <meta
          name="description"
          content="Somos una comunidad de mujeres en tecnología nacida en Barcelona en 2023. Conoce nuestra misión, nuestra visión y los valores con los que trabajamos juntas."
        />

        <meta
          name="keywords"
          content="FemCoders Club, mujeres en tecnología, inclusión en TI, liderazgo femenino, comunidad tech, empoderamiento femenino, desarrollo web, talleres de programación, igualdad de género en tecnología, misión y visión FemCoders"
        />

        <meta
          property="og:title"
          content="Quiénes somos: misión, visión y valores | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Somos una comunidad de mujeres en tecnología nacida en Barcelona en 2023. Conoce nuestra misión, nuestra visión y los valores con los que trabajamos juntas."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/femcoders-quienes-somos"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/og-quienes-somos.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quiénes somos: misión, visión y valores | FemCoders Club"
        />
        <meta
          name="twitter:description"
          content="Somos una comunidad de mujeres en tecnología nacida en Barcelona en 2023. Conoce nuestra misión, nuestra visión y los valores con los que trabajamos juntas."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/og-quienes-somos.jpg"
        />

        <link
          rel="canonical"
          href="https://www.femcodersclub.com/femcoders-quienes-somos"
        />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        {/*
          Los JSON-LD de esta página (Organization, AboutPage y VideoObject)
          los escribe el prerender en el HTML servido: scripts/spaRoutesMeta.ts.
        */}
      </Helmet>

      <SeccionPresentacion />

      <SeccionProposito />
      <SeccionComoLoHacemos />

      <SeccionCompromiso />

      <SeccionIdeas />
    </>
  );
};

export default AboutPage;
