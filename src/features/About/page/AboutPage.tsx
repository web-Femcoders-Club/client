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
        <title>FemCoders Club | Comunidad para Mujeres en Tecnología</title>

        <meta
          name="description"
          content="FemCoders Club es una comunidad que empodera a mujeres en el mundo tecnológico, cerrando la brecha de género digital. Conoce nuestra misión, visión y valores, y únete a nuestra comunidad inclusiva."
        />

        <meta
          name="keywords"
          content="FemCoders Club, mujeres en tecnología, inclusión en TI, liderazgo femenino, comunidad tech, empoderamiento femenino, desarrollo web, talleres de programación, igualdad de género en tecnología, misión y visión FemCoders"
        />

        <meta
          property="og:title"
          content="FemCoders Club | Comunidad para Mujeres en Tecnología"
        />
        <meta
          property="og:description"
          content="FemCoders Club es una comunidad que empodera a mujeres en el mundo tecnológico, cerrando la brecha de género digital. Conoce nuestra misión, visión y valores, y únete a nuestra comunidad inclusiva."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/femcoders-quienes-somos"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/FemCodersClubLogo.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club | Comunidad para Mujeres en Tecnología"
        />
        <meta
          name="twitter:description"
          content="FemCoders Club es una comunidad que empodera a mujeres en el mundo tecnológico, cerrando la brecha de género digital. Conoce nuestra misión, visión y valores, y únete a nuestra comunidad inclusiva."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/FemCodersClubLogo.png"
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
