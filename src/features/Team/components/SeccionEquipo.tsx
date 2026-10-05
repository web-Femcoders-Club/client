import TextoRico from "../../About/components/TextoRico";
import { PRESENTACION_EQUIPO as P } from "../contenido";
import CardTeamMember from "./CardTeamMember";
import "./SeccionEquipo.css";

/*
 * Primera sección de /equipo: título de la página, presentación y el equipo
 * actual, que llega de la base de datos (CardTeamMember). Mismo patrón que la
 * primera sección de «Quiénes somos», sobre el fondo de la portada (`bg1`).
 * Los textos viven en ../contenido.ts.
 */
const SeccionEquipo: React.FC = () => (
  <section className="equipo bg1 fc-manchas" aria-labelledby="equipo-titulo">
    <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
    <div className="equipo__contenedor">
      <div className="equipo__cabeza">
        <div data-aos="fade-right">
          <p className="fc-antetitulo">{P.antetitulo}</p>
          <h1 className="equipo__titulo" id="equipo-titulo">
            <span className="equipo__marca">{P.marca}</span> {P.titulo.texto}{" "}
            <span className="fc-rotulador">{P.titulo.destacado}</span>
          </h1>
          <p className="equipo__lema">{P.lema}</p>
        </div>
        <div className="equipo__texto">
          {P.parrafos.map((parrafo, i) => (
            <p key={i}>
              <TextoRico fragmentos={parrafo} claseEnlace="fc-enlace fc-enlace--siempre fc-enlace--texto" />
            </p>
          ))}
        </div>
      </div>

      <div className="equipo__actual">
        <h2 className="equipo__subtitulo" id="equipo-actual">
          {P.subtitulo}
        </h2>
        <p className="equipo__intro">{P.intro}</p>
        <CardTeamMember filter="active" />
      </div>
    </div>
  </section>
);

export default SeccionEquipo;
