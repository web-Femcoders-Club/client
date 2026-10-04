import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus } from "lucide-react";
import "./SeccionIdeas.css";

interface Idea {
  id: string;
  titulo: string;
  descripcion: ReactNode;
}

const enlace = (to: string, texto: string) => (
  <Link to={to} className="ideas__enlace">
    {texto}
  </Link>
);

const EN_MARCHA: Idea[] = [
  {
    id: "mentorias",
    titulo: "Mentorías",
    descripcion: (
      <>
        Mujeres con experiencia acompañan a quienes empiezan o quieren dar el
        siguiente paso. {enlace("/mentoria", "Ver mentorías (con tu cuenta)")}
      </>
    ),
  },
  {
    id: "recursos",
    titulo: "Recursos y herramientas",
    descripcion: (
      <>
        Artículos y materiales gratuitos para aprender a tu ritmo.{" "}
        {enlace("/blog/recursos", "Ver recursos")}
      </>
    ),
  },
  {
    id: "eventos",
    titulo: "Eventos tecnológicos",
    descripcion: (
      <>
        Charlas, talleres y hackathons, presenciales y online.{" "}
        {enlace("/eventos", "Ver eventos")}
      </>
    ),
  },
  {
    id: "networking",
    titulo: "Espacios de networking",
    descripcion:
      "Encuentros para conectar, compartir experiencias y crear relaciones profesionales.",
  },
  {
    id: "alianzas",
    titulo: "Alianzas con empresas",
    descripcion:
      "Colaboramos con empresas y organizaciones que comparten nuestra misión.",
  },
  {
    id: "comunidad-virtual",
    titulo: "Comunidad virtual",
    descripcion:
      "Un espacio en línea para hacer preguntas, compartir recursos y apoyarnos.",
  },
];

const EN_EL_HORIZONTE: Idea[] = [
  {
    id: "directorio",
    titulo: "Directorio de miembros",
    descripcion:
      "Un directorio de mujeres de la comunidad, para darse a conocer y encontrarse.",
  },
  {
    id: "coworking",
    titulo: "Coworking y laboratorios",
    descripcion: "Espacios de trabajo colaborativo donde crear y diseñar juntas.",
  },
  {
    id: "grupos",
    titulo: "Grupos de interés",
    descripcion:
      "Grupos sobre inteligencia artificial, ciberseguridad u otras áreas, para profundizar juntas.",
  },
  {
    id: "emprendimiento",
    titulo: "Programas de emprendimiento",
    descripcion:
      "Asesoramiento y contactos para mujeres que emprenden en tecnología.",
  },
  {
    id: "concienciacion",
    titulo: "Campañas de concienciación",
    descripcion:
      "Campañas sobre la importancia de la diversidad de género en la tecnología.",
  },
];

const Grupo: React.FC<{
  id: string;
  titulo: string;
  ideas: Idea[];
  abiertas: Set<string>;
  alternar: (id: string) => void;
}> = ({ id, titulo, ideas, abiertas, alternar }) => (
  <div className="ideas__grupo">
    <h3 className="ideas__grupo-titulo" id={id}>
      {titulo}
    </h3>
    <ul className="ideas__lista" aria-labelledby={id}>
      {ideas.map((idea) => {
        const abierta = abiertas.has(idea.id);
        const panel = `idea-${idea.id}`;
        return (
          <li key={idea.id}>
            <button
              type="button"
              className="fc-desplegable"
              aria-expanded={abierta}
              aria-controls={panel}
              onClick={() => alternar(idea.id)}
            >
              {idea.titulo}
              <span className="fc-desplegable__signo" aria-hidden="true">
                {abierta ? <Minus /> : <Plus />}
              </span>
            </button>
            <p className="ideas__respuesta" id={panel} hidden={!abierta}>
              {idea.descripcion}
            </p>
          </li>
        );
      })}
    </ul>
  </div>
);

/*
 * Última sección de «Quiénes somos»: lo que la comunidad ya hace y lo que
 * quiere construir. Fondo `bg2`, como el cierre de la home, con los
 * desplegables de las preguntas frecuentes del pie (`fc-desplegable`)
 * directamente sobre el azul. Cada idea se abre y se cierra por separado.
 */
const SeccionIdeas: React.FC = () => {
  const [abiertas, setAbiertas] = useState<Set<string>>(new Set());

  const alternar = (id: string) =>
    setAbiertas((previas) => {
      const siguientes = new Set(previas);
      if (siguientes.has(id)) siguientes.delete(id);
      else siguientes.add(id);
      return siguientes;
    });

  return (
    <section className="ideas bg2 fc-sobre-oscuro" aria-labelledby="ideas-titulo">
      <div className="ideas__contenedor">
        <div className="ideas__cabeza">
          <div>
            <p className="fc-antetitulo fc-antetitulo--naranja">Nuestras ideas</p>
            <h2 className="fc-titulo-seccion ideas__titulo" id="ideas-titulo">
              Lo que ya hacemos y lo que{" "}
              <span className="fc-rotulador">queremos construir</span>
            </h2>
          </div>
          <p className="ideas__entradilla">
            Muchas de las ideas con las que empezamos ya son una realidad. Otras
            siguen en camino, y la comunidad puede ayudarnos a hacerlas posibles.
          </p>
        </div>

        <div className="ideas__grupos">
            <Grupo
              id="ideas-en-marcha"
              titulo="Ya en marcha"
              ideas={EN_MARCHA}
              abiertas={abiertas}
              alternar={alternar}
            />
            <Grupo
              id="ideas-en-el-horizonte"
              titulo="En el horizonte"
              ideas={EN_EL_HORIZONTE}
              abiertas={abiertas}
              alternar={alternar}
            />
        </div>

        <div className="ideas__llamada">
          <p>¿Te gustaría participar en nuestras iniciativas o proponer una idea nueva?</p>
          <div className="ideas__botones">
            <Link to="/register" className="fc-boton">
              Únete a FemCoders Club
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contacto" className="fc-enlace fc-enlace--siempre fc-enlace--texto ideas__proponer">
              Proponer una idea
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionIdeas;
