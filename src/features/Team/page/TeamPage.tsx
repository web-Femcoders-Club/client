import { Helmet } from "react-helmet";
import CardTeamMember from "../components/CardTeamMember";
import SponsorsARExperience from "../components/SponsorsARExperience";
import PromoterCard from "../components/PromoterCard";
import DaisyAvatars from "../components/DaisyAvatars";

const TeamPage = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'url("/bg1.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
    <Helmet>
        <title>Nuestro Equipo - FemCoders Club</title>
        <meta
          name="description"
          content="Conoce a las cofundadoras de FemCoders Club, una comunidad de mujeres apasionadas por la tecnología, el crecimiento personal y el empoderamiento femenino. Descubre sus historias y cómo están impulsando la inclusión en el sector tecnológico."
        />
        <meta
          name="keywords"
          content="FemCoders Club, mujeres en tecnología, empoderamiento femenino, cofundadoras, comunidad tecnológica, inclusión en tecnología, desarrollo personal, programación, liderazgo femenino"
        />
      </Helmet>

      <section className="parallax bg1 w-full flex flex-col items-center py-2 lg:py-6 gap-5 xl:gap-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <p
          className="w-full text-left styled-paragraph"
          style={{
            marginTop: "10rem",

            animation: "fadeIn 1.5s ease-in-out",
          }}
        >
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

        <CardTeamMember />
      </section>
      <section className="parallax bg2 w-full flex flex-col items-center py-2 lg:py-6 gap-5 xl:gap-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <h3 className="text-primary text-4xl font-semibold leading-9 mt-4 font-headerText text-center">
          Agradecimientos Especiales
        </h3>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:flex-1 flex justify-center">
            <PromoterCard
              imageSrc="/Isadora.jpeg"
              name="Isadora Matias"
              role="Promotora, Fotógrafa y Desarrolladora Full-Stack"
              description="Agradecemos a Isadora por su dedicación y apoyo a FemCoders Club. Isadora ha sido la mente maestra detrás de nuestra nueva plataforma online y ha capturado momentos inolvidables en cada evento. Su presencia infunde entusiasmo y motivación, siendo una profesional y amiga invaluable para nosotras. "
              linkedin="https://www.linkedin.com/in/isadoramatias/"
            />
          </div>
          <div className="md:flex-1 flex justify-center">
            <PromoterCard
              imageSrc="/Shima.png"
              name="Shima Naderi"
              role="Promotora y Desarrolladora Full-Stack"
              description="Agradecemos a Shima por su dedicación y alegría en cada evento de FemCoders Club. Su presencia siempre infunde una energía positiva que fortalece nuestra comunidad y nos empodera a todas a seguir persiguiendo nuestros sueños en el mundo de la tecnología.."
              linkedin="https://www.linkedin.com/in/shima-naderi/"
            />
          </div>
          <div className="md:flex-1 flex justify-center">
            <PromoterCard
              imageSrc="/Sablina.jpeg"
              name="Sablina Angulo"
              role="Promotora y Mentora de Inglés"
              description="Agradecemos a Sablina por su dedicación y apoyo a FemCoders Club. Sablina ha sido una mentora invaluable para nuestras miembros, brindando orientación y apoyo en el aprendizaje del inglés. Su pasión por la enseñanza y su compromiso con el crecimiento profesional de las mujeres son ejemplares."
              linkedin="https://www.linkedin.com/in/sablina-angulo-li/"
            />
          </div>
        </div>
      </section>

      <section className="parralax bg3">
        <h3 style={{ marginTop: "2rem" }}>Mención Especial </h3>
        <h5 className="textAvatars">
          {" "}
          a todas aquellas personas que han contribuido a dar vida a esta página
          web
        </h5>
        <DaisyAvatars />
      </section>

      <section className="parallax bg1 ">
        <div className="content-empresa">
          <p
            className="content-text"
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
              marginTop: "0",
            }}
          >
            Agradecemos sinceramente el valioso apoyo de diversas empresas y
            organizaciones que comparten nuestra misión de empoderar a las
            mujeres en el ámbito tecnológico. Queremos destacar especialmente a
            nuestros socios y patrocinadores, quienes son fundamentales para
            llevar a cabo nuestras iniciativas y eventos, y hacen posible
            nuestro impacto positivo en la comunidad. ¡Gracias por creer en
            nosotras y en nuestro trabajo!
          </p>

          <SponsorsARExperience />
          <div
            className="content-text"
            style={{
              marginTop: "5rem",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
              marginBottom: "0",
            }}
          >
            <h3 className="cta-banner-title">
              ¿Te gustaría que tu empresa sea parte de FemCoders Club?
            </h3>
            <p
              className="cta-banner-text"
              style={{
                textAlign: "center",
                fontSize: "1.3rem",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                top: "0",
              }}
            >
              Si compartes nuestra filosofía de visibilizar a las{" "}
              <strong>
                mujeres programadoras y promover su desarrollo profesional,
              </strong>{" "}
              ponté en contacto con nosotras. Juntas podemos crear un impacto
              significativo en la industria tecnológica.
            </p>
            <a
              href="mailto:info@femcodersclub.com"
              className="cta-banner-button"
            >
              <span>Escríbenos</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
