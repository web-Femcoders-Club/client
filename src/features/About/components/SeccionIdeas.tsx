import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { IDEAS, type Idea } from "../contenido";
import TextoRico from "./TextoRico";
import "./SeccionIdeas.css";

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
              <TextoRico
                fragmentos={idea.descripcion}
                claseEnlace="ideas__enlace"
              />
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
    <section
      className="ideas bg2 fc-sobre-oscuro"
      aria-labelledby="ideas-titulo"
    >
      <div className="ideas__contenedor">
        <div className="ideas__cabeza">
          <div>
            <p className="fc-antetitulo fc-antetitulo--naranja">
              {IDEAS.antetitulo}
            </p>
            <h2 className="fc-titulo-seccion ideas__titulo" id="ideas-titulo">
              {IDEAS.titulo.texto}{" "}
              <span className="fc-rotulador">{IDEAS.titulo.destacado}</span>
            </h2>
          </div>
          <p className="ideas__entradilla">{IDEAS.entradilla}</p>
        </div>

        <div className="ideas__grupos">
          <Grupo
            id="ideas-en-marcha"
            titulo={IDEAS.enMarcha.titulo}
            ideas={IDEAS.enMarcha.lista}
            abiertas={abiertas}
            alternar={alternar}
          />
          <Grupo
            id="ideas-en-el-horizonte"
            titulo={IDEAS.enElHorizonte.titulo}
            ideas={IDEAS.enElHorizonte.lista}
            abiertas={abiertas}
            alternar={alternar}
          />
        </div>

        <div className="ideas__llamada">
          <p>{IDEAS.llamada}</p>
          <div className="ideas__botones">
            <Link to="/register" className="fc-boton">
              Únete a FemCoders Club
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              to="/contacto"
              className="fc-enlace fc-enlace--siempre fc-enlace--texto ideas__proponer"
            >
              Proponer una idea
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionIdeas;
