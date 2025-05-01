import { Helmet } from "react-helmet";
import CardTeamMember from "../components/CardTeamMember";
import SponsorsARExperience from "../components/SponsorsARExperience";
import DaisyAvatars from "../components/DaisyAvatars";
import SpecialThanksSection from "../components/SpecialThanksSection";
import {
  FaHandshake,
  FaLightbulb,
  FaBuilding,
  FaStar,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import "./../../Home/page/Home.css";
import "./TeamPage.css";

const TeamPage = () => {
  const sponsorshipBenefits = [
    {
      icon: <FaUsers className="benefit-icon" />,
      title: "Visibiliza a tu equipo femenino",
      description:
        "Da protagonismo a las mujeres que forman parte de tu empresa y muéstralas como referentes del sector tech.",
    },
    {
      icon: <FaStar className="benefit-icon" />,
      title: "Visibilidad destacada",
      description:
        "Tu marca estará presente en eventos, redes y materiales oficiales, ganando visibilidad ante una audiencia tech comprometida.",
    },
    {
      icon: <FaHandshake className="benefit-icon" />,
      title: "Networking estratégico",
      description:
        "Conecta con profesionales tecnológicas y expande tu red de contactos en el sector.",
    },
    {
      icon: <FaLightbulb className="benefit-icon" />,
      title: "Innovación y talento",
      description:
        "Accede a talento femenino diverso y altamente cualificado para impulsar la innovación.",
    },
    {
      icon: <FaBuilding className="benefit-icon" />,
      title: "Imagen corporativa",
      description:
        "Refuerza tu compromiso con la diversidad y la inclusión en tecnología.",
    },
    {
      icon: <FaHeart className="benefit-icon" />,
      title: "Impacto social real",
      description:
        "Forma parte activa del cambio hacia un sector tecnológico más inclusivo, justo y representativo.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Nuestro Equipo - FemCoders Club | Mujeres Líderes en Tecnología
        </title>
        <meta
          name="description"
          content="Conoce a las cofundadoras, mentoras y colaboradoras de FemCoders Club, una comunidad de mujeres apasionadas por la tecnología que están impulsando la inclusión y el empoderamiento femenino en el sector tecnológico. Descubre sus historias, experiencias y contribuciones."
        />
        <meta
          name="keywords"
          content="FemCoders Club, mujeres en tecnología, empoderamiento femenino, cofundadoras tech, comunidad tecnológica, inclusión en tecnología, desarrollo personal, programación, liderazgo femenino, mentoras tech, colaboradoras tech, diversidad digital, equipo FemCoders"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <link rel="canonical" href="https://www.femcodersclub.com/equipo" />
        <meta name="author" content="FemCoders Club" />

        <meta
          property="og:title"
          content="Nuestro Equipo - FemCoders Club | Mujeres Líderes en Tecnología"
        />
        <meta
          property="og:description"
          content="Conoce al increíble equipo de mujeres que lideran FemCoders Club, impulsando la inclusión y diversidad en el sector tecnológico a través de mentorías, eventos y apoyo mutuo."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/equipo"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/cofundadoras-femCoders-club.webp"
        />
        <meta
          property="og:image:alt"
          content="Equipo de FemCoders Club reunido en un evento tecnológico"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta
          property="og:see_also"
          content="https://www.instagram.com/femcoders_club/"
        />
        <meta
          property="og:see_also"
          content="https://www.linkedin.com/company/fem-coders-club/"
        />
        <meta
          property="og:see_also"
          content="https://www.youtube.com/@FemcodersClub"
        />
        <meta
          property="og:see_also"
          content="https://github.com/femcodersclub"
        />
        <meta
          property="og:see_also"
          content="https://communityinviter.com/apps/femcodersclub/femcoders-club"
        />
        <meta property="og:see_also" content="https://x.com/FemCodersClub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nuestro Equipo - FemCoders Club | Mujeres Líderes en Tecnología"
        />
        <meta
          name="twitter:description"
          content="Conoce al equipo que impulsa la inclusión de mujeres en tecnología a través de FemCoders Club"
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/cofundadoras-femCoders-club.webp"
        />
        <meta name="twitter:site" content="@FemCodersClub" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FemCoders Club",
        "url": "https://www.femcodersclub.com",
        "logo": "https://www.femcodersclub.com/FemCodersClubLogo.png",
        "foundingDate": "2023",
        "founders": [
          {
            "@type": "Person",
            "name": "Irina Ichim",
            "jobTitle": "Desarrolladora Fullstack"
          },
          {
            "@type": "Person",
            "name": "Lucía",
            "jobTitle": "Cofundadora FemCoders Club"
          }
        ],
        "description": "FemCoders Club es una comunidad dedicada a empoderar a mujeres en el ámbito tecnológico, ofreciendo espacios para aprender, crecer y destacar en la industria tech.",
        "sameAs": [
          "https://www.instagram.com/femcoders_club/",
          "https://www.linkedin.com/company/fem-coders-club/",
          "https://www.youtube.com/@FemcodersClub",
          "https://github.com/femcodersclub",
          "https://communityinviter.com/apps/femcodersclub/femcoders-club",
          "https://x.com/FemCodersClub"
        ],
        "member": {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Miembros del Equipo FemCoders"
          },
          "roleName": "Cofundadoras, mentoras y colaboradoras",
          "description": "Grupo de profesionales en tecnología comprometidas con el empoderamiento femenino en el sector digital"
        }
      }
    `}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Equipo de FemCoders Club",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Person",
                "name": "Equipo Actual",
                "description": "Cofundadoras y colaboradoras activas que lideran las iniciativas actuales de FemCoders Club"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Person",
                "name": "Cofundadoras de Legado",
                "description": "Mujeres que formaron parte fundamental de los inicios de FemCoders Club y sentaron las bases de la comunidad"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Person",
                "name": "Colaboradores y Sponsors",
                "description": "Personas y empresas que apoyan la misión de FemCoders Club para empoderar a las mujeres en tecnología"
              }
            }
          ]
        }
      }
    `}
        </script>
      </Helmet>

      <section className="parallax bg1 w-full flex flex-col items-center py-2 lg:py-6 gap-5 xl:gap-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="sr-only">Nuestro Equipo - FemCoders Club</h1>

        <div data-aos="fade-up" data-aos-delay="100" className="w-full mt-20">
          <p className="w-full styled-paragraph">
            <span>En FemCoders Club,</span> nos enorgullece presentar a nuestras
            cofundadoras, un grupo de mujeres extraordinarias que lideran con
            pasión y dedicación. Cada una de ellas aporta una visión única y una
            riqueza de experiencias en el campo de la tecnología.{" "}
            <strong>
              Juntas, están comprometidas a construir un espacio inclusivo donde
              las mujeres puedan aprender, crecer y destacar en la industria
              tecnológica.{" "}
            </strong>
            <br />
            Conoce a las líderes que están marcando la diferencia y llevando
            nuestra comunidad hacia un futuro prometedor.
          </p>
        </div>

        <h2
          id="equipo-actual"
          className="text-3xl font-semibold text-primary mb-6"
        >
          Nuestro Equipo Actual
        </h2>

        <div className="w-full" data-aos="fade-up" data-aos-delay="200">
          <div className="active-members-container">
            <CardTeamMember filter="active" />
          </div>
        </div>

        <div
          className="cofundadoras-previas-wrapper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="cofundadoras-divider">
            <span>Cofundadoras de Legado</span>
          </div>
          <p className="cofundadoras-previas-texto">
            Reconocemos el valioso aporte de estas extraordinarias mujeres que
            formaron parte de los inicios de FemCoders Club. Su visión,
            dedicación y trabajo fueron fundamentales para sentar las bases de
            lo que somos hoy. Aunque actualmente siguen otros caminos
            profesionales, su legado perdura en nuestra comunidad.
          </p>

          <div className="inactive-members-container">
            <CardTeamMember filter="inactive" />
          </div>
        </div>
      </section>

      <SpecialThanksSection />

      <section className="parallax bg3">
        <DaisyAvatars />
      </section>

      <section className="parallax bg2">
        <div className="sponsors-container">
          <div className="sponsors-header" data-aos="fade-up">
            <h2 className="sponsors-title">Empresas que Impulsan el Cambio</h2>
            <div className="sponsors-intro">
              <p>
                <p>
                  Estas organizaciones apoyan a FemCoders Club en distintos
                  momentos y comparten nuestra visión de un futuro tecnológico
                  más diverso e inclusivo. A través de su participación en
                  iniciativas como eventos, talleres, charlas, mentorías y
                  recursos, ayudan a promover un entorno donde más mujeres
                  puedan desarrollarse en el sector tech.
                </p>
              </p>
            </div>
          </div>

          <div
            className="sponsors-timeline-wrapper"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <SponsorsARExperience />
          </div>

          <div
            className="become-sponsor-section bg1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="become-sponsor-title">
              Sé parte del cambio en la industria tecnológica
            </h3>

            <div className="benefits-grid">
              {sponsorshipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-card"
                  data-aos="zoom-in"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="benefit-icon-container">{benefit.icon}</div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="sponsor-cta">
              <p className="sponsor-message">
                Únete a las empresas líderes que están marcando la diferencia en
                la inclusión de mujeres en tecnología. Tu apoyo puede ser el
                catalizador para nuevas oportunidades y un futuro tecnológico
                más diverso.
              </p>

              <div className="cta-buttons">
                <a
                  href="mailto:partnerships@femcodersclub.com"
                  className="partnership-button"
                >
                  <p>Quiero colaborar</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
