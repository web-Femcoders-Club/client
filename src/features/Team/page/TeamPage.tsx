import { Helmet } from "react-helmet";
import {
  FaAward,
  FaBuilding,
  FaGlobe,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import CardTeamMember from "../components/CardTeamMember";
import SponsorsARExperience from "../components/SponsorsARExperience";
import "./../../Home/page/Home.css";
import "./TeamPage.css";

const TeamPage = () => {
  const teamValues = [
    {
      icon: <FaUsers className="value-icon" />,
      title: "Colaboración",
      description: "Trabajamos juntas para crear un ecosistema tecnológico más inclusivo."
    },
    {
      icon: <FaRocket className="value-icon" />,
      title: "Innovación",
      description: "Impulsamos el talento femenino con metodologías actuales y proyectos reales."
    },
    {
      icon: <FaHeart className="value-icon" />,
      title: "Empoderamiento",
      description: "Creamos espacios seguros donde cada mujer puede brillar y crecer profesionalmente."
    },
    {
      icon: <FaGlobe className="value-icon" />,
      title: "Comunidad Global",
      description: "Conectamos mujeres tech de diferentes países, culturas y experiencias."
    },
  ];

  const teamAchievements = [
    {
      number: "1300+",
      label: "Miembros activas",
      icon: <FaUsers />
    },
    {
      number: "40+",
      label: "Eventos realizados",
      icon: <FaTrophy />
    },
    {
      number: "30+",
      label: "Empresas colaboradoras",
      icon: <FaBuilding />
    },
    {
      number: "15+",
      label: "Proyectos impulsados",
      icon: <FaAward />
    },
  ];

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
      {/* Sección SEO/Meta Tags (Se mantiene sin cambios, es correcta) */}
      <Helmet>
        <title>
          Nuestro Equipo - FemCoders Club | Mujeres Líderes en Tecnología
        </title>
        {/* ... (resto de meta tags) ... */}
        {/* Los scripts JSON-LD también se mantienen */}
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

      {/* SECCIÓN 0 – Intro y Equipo Actual */}
      <section className="parallax bg1 w-full flex flex-col items-center py-2 lg:py-6 gap-5 xl:gap-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="sr-only">Nuestro Equipo de Liderazgo - FemCoders Club, Asociación</h1>

        <div data-aos="fade-up" data-aos-delay="100" className="w-full mt-20">
          <p className="styled-paragraph">
            <span>¡Conoce a las líderes de FemCoders Club!</span>
            <br />
            <br />
            Nuestro equipo de cofundadoras, mentoras y colaboradoras es el motor de esta iniciativa. Lo que nació como una
            comunidad apasionada, hoy se ha formalizado como una <strong>Asociación legalmente constituida</strong>.
            <br />
            <br />
            Este paso administrativo es la prueba de nuestro compromiso a largo plazo: nos da la <strong>estructura necesaria</strong> para
            impulsar proyectos de gran escala y ofrecer una plataforma estable donde todas puedan crecer.
            <br />
            <br />
            Cada miembro de nuestro liderazgo aporta una trayectoria sólida y una visión estratégica para asegurar que
            FemCoders Club continúe siendo el referente de la inclusión y el empoderamiento femenino en el sector tech.
            <br />
            <br />
            Estás a punto de conocer a las profesionales que están marcando el camino.
          </p>
        </div>

        <h2
          id="equipo-actual"
          // Usando una clase (asumiendo que la defines en tu CSS para usar var(--color-primary))
          className="text-3xl font-semibold text-team-primary-heading mb-6"
        >
          Nuestro Equipo Actual
        </h2>

        <div className="w-full" data-aos="fade-up" data-aos-delay="200">
          <div className="active-members-container">
            <CardTeamMember filter="active" />
          </div>
        </div>
      </section>

      {/* SECCIÓN - Valores del Equipo */}
      <section className="team-values-section bg2 py-12 px-4 md:px-8 lg:px-16 xl:px-32">
        <div data-aos="fade-up" className="text-center mb-10">
          <h2 className="sponsors-title">
            Nuestros Valores
          </h2>
          <p style={{ color: "white", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
            Los principios que guían nuestro trabajo y definen quiénes somos como equipo
          </p>
        </div>
        
        <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
          {teamValues.map((value, index) => (
            <div
              key={index}
              className="value-card"
              data-aos="flip-left"
              data-aos-delay={100 + index * 100}
              style={{
                background: "white",
                borderRadius: "var(--radius-lg)",
                padding: "2rem 1.5rem",
                textAlign: "center",
                boxShadow: "var(--shadow-medium)",
                transition: "all 0.3s ease",
                border: "2px solid transparent"
              }}
            >
              <div className="benefit-icon-container">
                {value.icon}
              </div>
              <h3 style={{ color: "var(--color-primary)", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "600" }}>
                {value.title}
              </h3>
              <p style={{ color: "var(--color-text-dark)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN - Logros del Equipo */}
      <section className="team-achievements-section bg1 py-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <div data-aos="zoom-in" className="text-center mb-8">
          <h2 style={{ color: "var(--color-secondary)", fontSize: "2rem", marginBottom: "0.5rem" }}>
            Nuestro Impacto
          </h2>
          <p style={{ color: "var(--color-text-dark)", fontSize: "1rem" }}>
            Los números que reflejan nuestro compromiso y crecimiento
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
          {teamAchievements.map((achievement, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              style={{
                textAlign: "center",
                padding: "2rem 1rem",
                background: "white",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-soft)",
                transition: "transform 0.3s ease"
              }}
            >
              <div className="benefit-icon-container">
                {achievement.icon}
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--color-secondary)", marginBottom: "0.5rem" }}>
                {achievement.number}
              </div>
              <div style={{ color: "var(--color-text-dark)", fontSize: "1rem", fontWeight: "500" }}>
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="parallax bg2">
        <div className="sponsors-container">
          <div className="sponsors-header" data-aos="fade-up">
            {/* El color del título ya se define en .sponsors-title en TeamPage.css usando var(--color-primary) */}
            <h2 className="sponsors-title">Empresas que Impulsan el Cambio</h2>

            <div className="sponsors-intro">
              <p>
                Estas organizaciones apoyan a FemCoders Club en distintos momentos y
                comparten nuestra visión de un futuro tecnológico más diverso e
                inclusivo. A través de su participación en iniciativas como eventos,
                talleres, charlas, mentorías y recursos, ayudan a promover un entorno
                donde más mujeres puedan desarrollarse en el sector tech.
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
        </div>
      </section>

      <section
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
            la inclusión de mujeres en tecnología. Tu apoyo puede ser el catalizador
            para nuevas oportunidades y un futuro tecnológico más diverso.
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
      </section>
    </>
  );
};

export default TeamPage;