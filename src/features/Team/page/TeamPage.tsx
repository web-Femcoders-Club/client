import { Helmet } from "react-helmet";
import CardTeamMember from "../components/CardTeamMember";

const GradientOverlay = ({ height }: { height: string }) => (
  <div
    className={`absolute w-full h-${height} bottom-0 bg-gradient-to-t from-primary to-transparent`}
  />
);

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
          content="Conoce a las cofundadoras de FemCoders Club, una comunidad de mujeres apasionadas por la tecnología, el crecimiento personal y el empoderamiento femenino."
        />
      </Helmet>
      <section className="relative flex justify-center text-center h-fit py-[100px] lg:py-[200px] xl:py-[250px] px-5">
        <GradientOverlay height="27%" />
        <GradientOverlay height="25%" />
        <GradientOverlay height="22%" />
        <GradientOverlay height="20%" />
        <GradientOverlay height="18%" />
        <GradientOverlay height="10%" />
        <GradientOverlay height="5%" />
        <h1 className="text-primary text-5xl font-semibold leading-9 mt-4 font-headerText">
          Conoce nuestro equipo
        </h1>
      </section>
      <section className="w-full flex flex-col items-center py-2 lg:py-6 gap-5 xl:gap-10">
        <p
          className="max-w-4xl text-center mx-2"
          style={{
            fontFamily: "Roboto, sans-serif",
            color: "#4737bb",
            lineHeight: "1.2",
            fontSize: "1.3rem",
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
          Conoce a las líderes que están marcando la diferencia y llevando
          nuestra comunidad hacia un futuro prometedor.
        </p>

        <CardTeamMember />
      </section>
    </div>
  );
};

export default TeamPage;
