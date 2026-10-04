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
          content="Conoce cómo FemCoders Club está transformando el panorama tecnológico con una comunidad inclusiva de mujeres apasionadas por la programación y la tecnología."
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
          content="FemCoders Club promueve la inclusión y empoderamiento de mujeres en la tecnología. Únete a nuestra misión y sé parte del cambio."
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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FemCoders Club",
            "alternateName": ["Fem Coders Club", "femcodersclub", "femCoders Club"],
            "url": "https://www.femcodersclub.com",
            "logo": "https://www.femcodersclub.com/FemCodersClubLogo.png",
            "description": "Comunidad y asociación registrada que empodera a mujeres en el sector tecnológico, cerrando la brecha de género digital. Fundada en Barcelona en octubre de 2023, con más de 1.500 miembros y 40 eventos organizados.",
            "foundingDate": "2023-10-24",
            "email": "info@femcodersclub.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barcelona",
              "addressCountry": "ES"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 6,
              "description": "Co-fundadoras"
            },
            "sameAs": [
              "https://www.instagram.com/femcoders_club/",
              "https://www.linkedin.com/company/fem-coders-club/",
              "https://www.youtube.com/@FemcodersClub",
              "https://github.com/femcodersclub",
              "https://x.com/FemCodersClub"
            ],
            // Liliana Dalmarco se mantiene aquí a propósito, aunque haya salido
            // del equipo visible (EQ1, issue #18): `founder` es quien fundó la
            // organización, un hecho histórico que no cambia. Son seis, y así
            // lo declara también numberOfEmployees arriba.
            "founder": [
              { "@type": "Person", "name": "Irina Ichim", "jobTitle": "Fullstack Software Developer & AI Specialist", "sameAs": "https://www.linkedin.com/in/irina-ichim-desarrolladora" },
              { "@type": "Person", "name": "Ana Lucía Silva Córdoba", "jobTitle": "Fullstack Developer & Data Science", "sameAs": "https://www.linkedin.com/in/ana-lucia-silva-cordoba" },
              { "@type": "Person", "name": "Elvia Benedith", "jobTitle": "Full-stack Web Developer", "sameAs": "https://www.linkedin.com/in/elvia-benedith" },
              { "@type": "Person", "name": "Silvina Lucero Calderón", "jobTitle": "Full Stack Developer & QA", "sameAs": "https://www.linkedin.com/in/silvina-lucero" },
              { "@type": "Person", "name": "Liliana Dalmarco", "jobTitle": "Fullstack Developer & Scrum Master", "sameAs": "https://www.linkedin.com/in/lilianadalmarco" },
              { "@type": "Person", "name": "Isadora Matias", "jobTitle": "Full Stack Developer & Designer", "sameAs": "https://www.linkedin.com/in/isadoramatias/" }
            ],
            "knowsAbout": [
              "mujeres en tecnología", "diversidad en tech", "desarrollo web", "JavaScript", "CSS", "HTML", "React", "inteligencia artificial", "open source"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Quiénes somos — FemCoders Club",
            "url": "https://www.femcodersclub.com/femcoders-quienes-somos",
            "description": "FemCoders Club es una asociación registrada fundada en Barcelona en octubre de 2023. Misión, visión, valores y equipo fundador de la comunidad de mujeres en tecnología con más de 1.500 miembros.",
            "inLanguage": "es",
            "isPartOf": { "@type": "WebSite", "url": "https://www.femcodersclub.com" },
            "about": {
              "@type": "Organization",
              "name": "FemCoders Club",
              "url": "https://www.femcodersclub.com"
            }
          })}
        </script>
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
