import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BotonRotacion from "../../Home/components/BotonRotacion";
import {
  ANIO_FUNDACION,
  CIFRAS_COMUNIDAD,
  RECURSOS_ABIERTOS,
} from "../../../data/cifrasComunidad";
import "./SeccionImpacto.css";

const CIFRAS = [
  { numero: `${CIFRAS_COMUNIDAD.mujeres}+`, rotulo: "mujeres en STEM forman la comunidad" },
  { numero: `${CIFRAS_COMUNIDAD.eventos}+`, rotulo: "eventos realizados" },
  { numero: `${CIFRAS_COMUNIDAD.empresas}+`, rotulo: "empresas colaboradoras" },
  { numero: `${RECURSOS_ABIERTOS.repositoriosGithub}`, rotulo: "proyectos en GitHub para practicar" },
  { numero: `${RECURSOS_ABIERTOS.articulosTecnicos}`, rotulo: "artículos técnicos en el blog" },
  { numero: `${ANIO_FUNDACION}`, rotulo: "nace la comunidad en Barcelona" },
];

/* Cada alianza dice qué papel tiene FemCoders Club y lleva a su noticia. */
const ALIANZAS = [
  { papel: "Community Partner", nombre: "Talent Arena 2026", enlace: "/noticias/talent-arena-2026-partnership" },
  { papel: "Community Partner", nombre: "HackBarna AI Summit", enlace: "/noticias/hackbarna-ai-summit-26" },
  { papel: "Ambassador", nombre: "Barcelona Cybersecurity Congress 2026", enlace: "/noticias/barcelona-cybersecurity-congress-2026" },
  { papel: "Community Partnership Program", nombre: "Vonage", enlace: "/noticias/vonage-community-partnership-program" },
  { papel: "Equipo de desarrollo", nombre: "June, con In CoDe", enlace: "/noticias/colaboracion-june" },
  { papel: "Comunidad colaboradora", nombre: "Claude Community House Barcelona", enlace: "/noticias/claude-community-house-barcelona" },
  { papel: "Y las que vienen", nombre: "Síguelas en las noticias", enlace: "/noticias", porVenir: true },
];

const ID_CINTA = "impacto-alianzas";

/*
 * La cinta lleva la lista dos veces seguidas y se desplaza la mitad de su
 * ancho, así el final empalma con el principio. La segunda copia va oculta al
 * lector y fuera del orden de tabulación: cada alianza se anuncia una vez.
 */
const ListaAlianzas: React.FC<{ copia?: boolean }> = ({ copia = false }) => (
  <ul className="impacto__alianzas-lista" aria-hidden={copia || undefined}>
    {ALIANZAS.map(({ papel, nombre, enlace, porVenir }) => (
      <li key={nombre}>
        <Link
          to={enlace}
          className={`impacto__ficha${porVenir ? " impacto__ficha--por-venir" : ""}`}
          tabIndex={copia ? -1 : undefined}
        >
          <span className="impacto__papel">{papel}</span>
          <span className="impacto__nombre">{nombre}</span>
          <ArrowRight className="impacto__flecha" aria-hidden="true" />
        </Link>
      </li>
    ))}
  </ul>
);

/*
 * Tercera sección de /equipo: cifras de la comunidad y alianzas. Fondo `bg4`,
 * el de «Conócenos» en Inicio, que empieza en el lavanda en que termina `bg3`.
 *
 * La cinta de alianzas se mueve sola: se para con el ratón encima, con el
 * foco dentro (CSS) y con el botón (WCAG 2.2.2). Con «reducir movimiento» no
 * se mueve y se desplaza a mano.
 */
const SeccionImpacto: React.FC = () => {
  const [detenida, setDetenida] = useState(false);

  return (
    <section className="impacto bg4 fc-manchas" aria-labelledby="impacto-titulo">
      <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
      <div className="impacto__contenedor">
        <div className="impacto__arriba">
          <div data-aos="fade-right">
            <p className="fc-antetitulo">Nuestro impacto</p>
            <h2 className="fc-titulo-seccion impacto__titulo" id="impacto-titulo">
              Una comunidad real que <span className="fc-rotulador">no para de crecer</span>
            </h2>
            <p className="impacto__parrafo">
              Eventos, empresas que nos acompañan, recursos para aprender y proyectos con impacto
              social. Esto es lo que hemos construido juntas desde {ANIO_FUNDACION}.
            </p>
          </div>

          <ul className="impacto__cifras" data-aos="fade-up">
            {CIFRAS.map(({ numero, rotulo }) => (
              <li key={rotulo} className="impacto__cifra">
                <p className="impacto__numero">{numero}</p>
                <p className="impacto__rotulo">{rotulo}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="impacto__alianzas">
          <div className="impacto__alianzas-cabeza">
            <h3 className="impacto__alianzas-titulo">Alianzas y colaboraciones</h3>
            <div className="impacto__alianzas-derecha">
              <p className="impacto__alianzas-nota">
                Congresos, hackathons y proyectos en los que participamos.
              </p>
              <div className="impacto__boton">
                <BotonRotacion
                  girando={!detenida}
                  alAlternar={() => setDetenida((valor) => !valor)}
                  de="alianzas"
                  controla={ID_CINTA}
                />
              </div>
            </div>
          </div>

          <div
            className={`impacto__cinta${detenida ? " impacto__cinta--detenida" : ""}`}
            id={ID_CINTA}
          >
            <div className="impacto__pista">
              <ListaAlianzas />
              <ListaAlianzas copia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionImpacto;
