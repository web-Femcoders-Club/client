import { styles } from '../../../style';
import CardTeamMember from '../components/CardTeamMember';

const GradientOverlay = ({ height }: { height: string }) => (
  <div className={`absolute w-full h-${height} bottom-0 bg-gradient-to-t from-primary to-transparent`} />
);

const TeamPage = () => {
  return (
    <div className="relative" style={{ backgroundImage: 'url("/bg1.png")', backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center top" }}>
      <section className="relative flex justify-center text-center h-fit py-[100px] lg:py-[200px] xl:py-[250px] px-5">
        <GradientOverlay height="27%" />
        <GradientOverlay height="25%" />
        <GradientOverlay height="22%" />
        <GradientOverlay height="20%" />
        <GradientOverlay height="18%" />
        <GradientOverlay height="10%" />
        <GradientOverlay height="5%" />
        <h1 className={`${styles.heading3} font-headerText`}>Conoce nuestro equipo</h1>
      </section>
      <section className='w-full flex flex-col items-center py-10 lg:py-16 gap-10 xl:gap-20'>
        <h4 className="max-w-4xl text-center mx-4" style={{ color: '#4737bb', marginTop: '1rem' }}>
          Somos una vibrante comunidad de mujeres apasionadas por la tecnología, el crecimiento personal y el empoderamiento femenino.
          En FemCoders Club, nos dedicamos a crear un espacio seguro y enriquecedor donde mujeres tecnólogas puedan reunirse, colaborar y crecer juntas. Creemos firmemente en el poder de la diversidad y la fuerza colectiva para superar barreras y lograr un impacto significativo en la industria tecnológica.
        </h4>
        <CardTeamMember />
      </section>
    </div>
  );
}

export default TeamPage;



