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
    <Helmet>
  <title>
    Nuestro Equipo - FemCoders Club | Mujeres Líderes en Tecnología
  </title>
  <meta
    name="description"
    content="Conoce a las cofundadoras de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón, Liliana Dalmarco e Isadora Matias. Líderes tech comprometidas con el empoderamiento femenino."
  />
  <meta
    name="keywords"
    content="FemCoders Club, cofundadoras, mujeres en tecnología, desarrolladoras, mentoras tech, Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón, Liliana Dalmarco, Isadora Matias, InfoJobs, Glovo, sponsors tech, empresas colaboradoras"
  />
  <link rel="canonical" href="https://www.femcodersclub.com/equipo" />
  
  {/* Open Graph */}
  <meta property="og:title" content="Equipo de FemCoders Club - Cofundadoras y Líderes Tech" />
  <meta property="og:description" content="Conoce al equipo de cofundadoras que lidera FemCoders Club: desarrolladoras, mentoras y profesionales tech comprometidas con la inclusión femenina en tecnología." />
  <meta property="og:url" content="https://www.femcodersclub.com/equipo" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.femcodersclub.com/FemCodersClubLogo.png" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Equipo de FemCoders Club - Cofundadoras y Líderes Tech" />
  <meta name="twitter:description" content="Conoce a las cofundadoras de FemCoders Club y su misión de empoderar a mujeres en tecnología." />
  <meta name="twitter:image" content="https://www.femcodersclub.com/FemCodersClubLogo.png" />

  {/* JSON-LD Organization con Cofundadoras */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FemCoders Club",
        "url": "https://www.femcodersclub.com",
        "logo": "https://www.femcodersclub.com/FemCodersClubLogo.png",
        "foundingDate": "2023",
        "description": "Asociación legalmente constituida dedicada a empoderar a mujeres en el ámbito tecnológico, ofreciendo espacios para aprender, crecer y destacar en la industria tech.",
        "founders": [
          {
            "@type": "Person",
            "name": "Elvia Benedith",
            "jobTitle": "Desarrolladora Web Full-stack e Ingeniera Civil",
            "description": "Desarrolladora Web Full-stack e Ingeniera Civil, enfocada en soluciones técnicas y pensamiento analítico",
            "url": "https://www.linkedin.com/in/elvia-benedith",
            "sameAs": "https://www.linkedin.com/in/elvia-benedith",
            "memberOf": {
              "@type": "Organization",
              "name": "FemCoders Club"
            }
          },
          {
            "@type": "Person",
            "name": "Ana Lucía Silva Córdoba",
            "jobTitle": "Master en Big Data & Data Science | Fullstack Developer | Formadora Tecnológica",
            "description": "Master en Big Data & Data Science, Fullstack Developer y formadora tecnológica. Premi DonaTIC 2024. Cofundadora de FemCoders Club",
            "url": "https://www.linkedin.com/in/ana-lucia-silva-cordoba",
            "sameAs": "https://www.linkedin.com/in/ana-lucia-silva-cordoba",
            "award": "Premi DonaTIC 2024",
            "memberOf": {
              "@type": "Organization",
              "name": "FemCoders Club"
            }
          },
          {
            "@type": "Person",
            "name": "Irina Ichim",
            "jobTitle": "Fullstack Software Developer | Especialista en IA | Mentora Backend Java",
            "description": "Fullstack Software Developer especializada en integración de IA en aplicaciones. Mentora de Backend con Java. Cofundadora de FemCoders Club",
            "url": "https://www.linkedin.com/in/irina-ichim-desarrolladora",
            "sameAs": "https://www.linkedin.com/in/irina-ichim-desarrolladora",
            "knowsAbout": ["Inteligencia Artificial", "Fullstack Development", "Backend Java", "Mentoría Tech"],
            "memberOf": {
              "@type": "Organization",
              "name": "FemCoders Club"
            }
          },
          {
            "@type": "Person",
            "name": "Silvina Lucero Calderón",
            "jobTitle": "Desarrolladora Web Full Stack | Q.A Tester Funcional",
            "description": "Desarrolladora Web Full Stack y Q.A Tester Funcional, comprometida con el crecimiento de mujeres en tech",
            "url": "https://www.linkedin.com/in/silvina-lucero",
            "sameAs": "https://www.linkedin.com/in/silvina-lucero",
            "memberOf": {
              "@type": "Organization",
              "name": "FemCoders Club"
            }
          },
          {
            "@type": "Person",
            "name": "Liliana Dalmarco",
            "jobTitle": "Fullstack Developer | Scrum Master | Project Manager",
            "description": "Fullstack Developer, Scrum Master y Project Manager, uniendo tecnología con arte y comunicación",
            "url": "https://www.linkedin.com/in/lilianadalmarco",
            "sameAs": "https://www.linkedin.com/in/lilianadalmarco",
            "memberOf": {
              "@type": "Organization",
              "name": "FemCoders Club"
            }
          },
          {
            "@type": "Person",
            "name": "Isadora Matias",
            "jobTitle": "Desarrolladora Full Stack | Diseñadora | Comunicación Visual",
            "description": "Desarrolladora Full Stack y diseñadora, gestiona la comunicación visual de FemCoders Club",
            "url": "https://www.linkedin.com/in/isadoramatias/",
            "sameAs": "https://www.linkedin.com/in/isadoramatias/",
            "memberOf": {
              "@type": "Organization",
              "name": "FemCoders Club"
            }
          }
        ],
        "sameAs": [
          "https://www.instagram.com/femcoders_club/",
          "https://www.linkedin.com/company/fem-coders-club/",
          "https://www.youtube.com/@FemcodersClub",
          "https://github.com/femcodersclub",
          "https://communityinviter.com/apps/femcodersclub/femcoders-club",
          "https://x.com/FemCodersClub"
        ]
      }
    `}
  </script>

  {/* JSON-LD Strategic Partners - InfoJobs y Glovo */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Strategic Partners de FemCoders Club",
        "description": "Empresas colaboradoras estratégicas que apoyan la misión de FemCoders Club",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Organization",
              "name": "InfoJobs",
              "url": "https://www.infojobs.net/",
              "description": "Apoya a FemCoders Club en su misión de impulsar a mujeres en STEM y tecnología",
              "sponsor": {
                "@type": "Organization",
                "name": "FemCoders Club"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Organization",
              "name": "Glovo",
              "url": "https://glovoapp.com/es/es/",
              "description": "Apoya a FemCoders Club en su misión de impulsar a mujeres en STEM y tecnología",
              "sponsor": {
                "@type": "Organization",
                "name": "FemCoders Club"
              }
            }
          }
        ]
      }
    `}
  </script>

  {/* JSON-LD Empresas Colaboradoras Generales */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Empresas Colaboradoras de FemCoders Club",
        "description": "Organizaciones que han colaborado con FemCoders Club en eventos, talleres y actividades para promover la diversidad en tecnología",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Organization",
              "name": "NTT DATA",
              "url": "https://www.nttdata.com/"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Organization",
              "name": "HackBarna",
              "url": "https://hackbarna.com/"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Organization",
              "name": "SheHub",
              "url": "https://shehub.es/"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Organization",
              "name": "Le Wagon",
              "url": "https://www.lewagon.com/es"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Organization",
              "name": "El Canòdrom",
              "url": "https://canodrom.barcelona/es"
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Organization",
              "name": "PokeCode",
              "url": "https://pokecode.net/"
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Organization",
              "name": "FactoriaF5",
              "url": "https://factoriaf5.org/"
            }
          },
          {
            "@type": "ListItem",
            "position": 8,
            "item": {
              "@type": "Organization",
              "name": "Adevinta",
              "url": "https://adevinta.com/es/quienes-somos/"
            }
          },
          {
            "@type": "ListItem",
            "position": 9,
            "item": {
              "@type": "Organization",
              "name": "Factorial HR",
              "url": "https://factorialhr.es/"
            }
          },
          {
            "@type": "ListItem",
            "position": 10,
            "item": {
              "@type": "Organization",
              "name": "Criteo",
              "url": "https://www.criteo.com/es/"
            }
          },
          {
            "@type": "ListItem",
            "position": 11,
            "item": {
              "@type": "Organization",
              "name": "Dynatrace",
              "url": "https://www.dynatrace.com/"
            }
          },
          {
            "@type": "ListItem",
            "position": 12,
            "item": {
              "@type": "Organization",
              "name": "Codurance",
              "url": "https://www.codurance.com/es/"
            }
          },
          {
            "@type": "ListItem",
            "position": 13,
            "item": {
              "@type": "Organization",
              "name": "Semrush",
              "url": "https://www.semrush.com/"
            }
          },
          {
            "@type": "ListItem",
            "position": 14,
            "item": {
              "@type": "Organization",
              "name": "SeatCode",
              "url": "https://code.seat/"
            }
          }
        ]
      }
    `}
  </script>

  {/* JSON-LD AboutPage */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Equipo de FemCoders Club",
        "url": "https://www.femcodersclub.com/equipo",
        "description": "Conoce a las cofundadoras y al equipo de liderazgo de FemCoders Club, asociación dedicada al empoderamiento de mujeres en tecnología",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Person",
                "name": "Equipo Actual - Cofundadoras",
                "description": "Cofundadoras activas que lideran las iniciativas de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón, Liliana Dalmarco e Isadora Matias"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Person",
                "name": "Cofundadoras Legacy",
                "description": "Mujeres que formaron parte fundamental de los inicios de FemCoders Club y sentaron las bases de la comunidad"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Organization",
                "name": "Strategic Partners",
                "description": "Empresas como InfoJobs y Glovo que apoyan estratégicamente la misión de FemCoders Club"
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Organization",
                "name": "Empresas Colaboradoras",
                "description": "Organizaciones tecnológicas que han colaborado en eventos y actividades con FemCoders Club"
              }
            }
          ]
        }
      }
    `}
  </script>

  {/* JSON-LD BreadcrumbList */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.femcodersclub.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Equipo",
            "item": "https://www.femcodersclub.com/equipo"
          }
        ]
      }
    `}
  </script>
</Helmet>

      {/* SECCIÓN 0 – Intro y Equipo Actual */}
      <section className="parallax bg1 w-full flex flex-col items-center py-2 lg:py-6 gap-5 xl:gap-10 px-4 md:px-8 lg:px-16 xl:px-32" aria-labelledby="team-intro-heading">
        <h1 id="team-intro-heading" className="team-main-heading">Nuestro Equipo de Liderazgo</h1>

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
          className="text-3xl font-semibold text-team-primary-heading mb-6"
          tabIndex={0}
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
      <section className="team-values-section bg2 py-12 px-4 md:px-8 lg:px-16 xl:px-32" aria-labelledby="team-values-heading">
        <div data-aos="fade-up" className="text-center mb-10">
          <h2 id="team-values-heading" className="sponsors-title" tabIndex={0}>
            Nuestros Valores
          </h2>
          <p style={{ color: "white", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
            Los principios que guían nuestro trabajo y definen quiénes somos como equipo
          </p>
        </div>
        
        <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "2rem" }} role="list" aria-label="Lista de valores del equipo">
          {teamValues.map((value, index) => (
            <div
              key={index}
              className="value-card"
              data-aos="flip-left"
              data-aos-delay={100 + index * 100}
              role="listitem"
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
              <div className="benefit-icon-container" aria-hidden="true">
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
      <section className="team-achievements-section bg1 py-10 px-4 md:px-8 lg:px-16 xl:px-32" aria-labelledby="team-impact-heading">
        <div data-aos="zoom-in" className="text-center mb-8">
          <h2 id="team-impact-heading" style={{ color: "var(--color-secondary)", fontSize: "2rem", marginBottom: "0.5rem" }} tabIndex={0}>
            Nuestro Impacto
          </h2>
          <p style={{ color: "var(--color-text-dark)", fontSize: "1rem" }}>
            Los números que reflejan nuestro compromiso y crecimiento
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }} role="list" aria-label="Estadísticas de logros">
          {teamAchievements.map((achievement, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              role="listitem"
              aria-label={`${achievement.number} ${achievement.label}`}
              style={{
                textAlign: "center",
                padding: "2rem 1rem",
                background: "white",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-soft)",
                transition: "transform 0.3s ease"
              }}
            >
              <div className="benefit-icon-container" aria-hidden="true">
                {achievement.icon}
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--color-secondary)", marginBottom: "0.5rem" }} aria-hidden="true">
                {achievement.number}
              </div>
              <div style={{ color: "var(--color-text-dark)", fontSize: "1rem", fontWeight: "500" }} aria-hidden="true">
                {achievement.label}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="parallax bg2" aria-labelledby="sponsors-heading">
        <div className="sponsors-container">
          <div className="sponsors-header" data-aos="fade-up">
            <h2 id="sponsors-heading" className="sponsors-title" tabIndex={0}>Empresas que Impulsan el Cambio</h2>

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
        aria-labelledby="become-sponsor-heading"
      >
        <h3 id="become-sponsor-heading" className="become-sponsor-title" tabIndex={0}>
          Sé parte del cambio en la industria tecnológica
        </h3>

        <div className="benefits-grid" role="list" aria-label="Beneficios de ser sponsor">
          {sponsorshipBenefits.map((benefit, index) => (
            <article
              key={index}
              className="benefit-card"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100}
              role="listitem"
            >
             
              <div className="benefit-icon-container" aria-hidden="true">{benefit.icon}</div>
              <h4 className="benefit-title">{benefit.title}</h4>
              <p className="benefit-description">{benefit.description}</p>
            </article>
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
              aria-label="Enviar correo para colaborar como partner de FemCoders Club"
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