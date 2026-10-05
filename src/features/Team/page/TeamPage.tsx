import { Helmet } from "react-helmet";
import {
  FaBuilding,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import SeccionEquipo from "../components/SeccionEquipo";
import SeccionImpacto from "../components/SeccionImpacto";
import SeccionValores from "../components/SeccionValores";
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
    content="Conoce a las cofundadoras de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón e Isadora Matias. Líderes tech comprometidas con el empoderamiento femenino."
  />
  <meta
    name="keywords"
    content="FemCoders Club, cofundadoras, mujeres en tecnología, desarrolladoras, mentoras tech, Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón, Isadora Matias"
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

  {/*
    * JSON-LD Organization con las fundadoras.
    *
    * Liliana Dalmarco sigue en esta lista a propósito, aunque haya salido del
    * equipo visible (EQ1, issue #18). En schema.org, `founder` es quien fundó
    * la organización: un hecho histórico, no un estado actual. Quitarla
    * declararía a los buscadores que fueron cinco cuando fueron seis — y
    * AboutPage declara numberOfEmployees: 6.
    *
    * Lo que sí se retiró es donde figuraba como equipo ACTUAL: la meta
    * description, las keywords y la descripción del ItemList.
    *
    * La propiedad es `founder`, en singular y repetida dentro del array.
    * `founders` existe en schema.org pero está SUPERSEDIDA por `founder`, así
    * que hasta ahora este bloque no lo procesaba nadie: se declaraba a las
    * fundadoras y los buscadores lo ignoraban en silencio (#62).
    */}
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
        "founder": [
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

  {/*
    * JSON-LD AboutPage.
    *
    * «Equipo Actual - Cofundadoras» es un grupo, no una persona: se declara como
    * `Organization` (#62). schema.org no tiene un tipo para «equipo dentro de
    * una organización» y es lo más cercano. A las personas se las describe una
    * a una en el bloque de `founder` de arriba.
    *
    * Las empresas colaboradoras ya no se declaran aquí: desde octubre de 2026
    * se muestran en Inicio, y Google pide que lo que dicen los datos
    * estructurados se vea en la página. Su JSON-LD lo escribe el prerender en
    * la portada, desde src/data/colaboradoras.ts.
    */}
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
                "@type": "Organization",
                "name": "Equipo Actual - Cofundadoras",
                "description": "Cofundadoras activas que lideran las iniciativas de FemCoders Club: Elvia Benedith, Ana Lucía Silva Córdoba, Irina Ichim, Silvina Lucero Calderón e Isadora Matias"
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

      {/* Cada fondo empieza en el color en que acaba el anterior: bg1 → bg3 → bg4. */}
      <SeccionEquipo />

      <SeccionValores />

      <SeccionImpacto />

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
