import CardTeamMember from "./CardTeamMember";
import "./SeccionEquipo.css";

/*
 * Primera sección de /equipo: título de la página, presentación y el equipo
 * actual, que llega de la base de datos (CardTeamMember). Mismo patrón que la
 * primera sección de «Quiénes somos», sobre el fondo de la portada (`bg1`).
 */
const SeccionEquipo: React.FC = () => (
  <section className="equipo bg1 fc-manchas" aria-labelledby="equipo-titulo">
    <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
    <div className="equipo__contenedor">
      <div className="equipo__cabeza">
        <div data-aos="fade-right">
          <p className="fc-antetitulo">Nuestro equipo</p>
          <h1 className="equipo__titulo" id="equipo-titulo">
            <span className="equipo__marca">FemCoders Club</span> Nuestro equipo de{" "}
            <span className="fc-rotulador">liderazgo</span>
          </h1>
          <p className="equipo__lema">¡Conoce a las líderes de FemCoders Club!</p>
        </div>
        <div className="equipo__texto">
          <p>
            Nuestro equipo de cofundadoras, mentoras y colaboradoras es el motor de esta iniciativa. Lo que
            nació como una comunidad apasionada hoy se ha formalizado como una{" "}
            <strong>asociación legalmente constituida</strong>.
          </p>
          <p>
            Este paso administrativo es la prueba de nuestro compromiso a largo plazo: nos da la{" "}
            <strong>estructura necesaria</strong> para impulsar proyectos de gran escala y ofrecer una
            plataforma estable donde todas puedan crecer.
          </p>
          <p>
            Cada miembro de nuestro liderazgo aporta una trayectoria sólida y una visión estratégica para
            asegurar que FemCoders Club continúe siendo el referente de la inclusión y el empoderamiento
            femenino en el sector tech.
          </p>
        </div>
      </div>

      <div className="equipo__actual">
        <h2 className="equipo__subtitulo" id="equipo-actual">
          Nuestro equipo actual
        </h2>
        <p className="equipo__intro">
          Estás a punto de conocer a las profesionales que están marcando el camino.
        </p>
        <CardTeamMember filter="active" />
      </div>
    </div>
  </section>
);

export default SeccionEquipo;
