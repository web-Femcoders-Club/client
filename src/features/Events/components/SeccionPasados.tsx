import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FemSpinner from "../../../components/FemSpinner";
import { Event } from "../../../types/types";
import { EVENTOS_PASADOS as P } from "../contenido";
import EntradaEvento from "./EntradaEvento";
import "./SeccionPasados.css";

const POR_PAGINA = 6;

interface SeccionPasadosProps {
  /** Ya ordenados del más reciente al más antiguo. */
  eventos: Event[];
  cargando: boolean;
}

/*
 * Tercera sección de /eventos: eventos pasados, sobre el azul noche (`bg2`),
 * en rejilla y paginados. Solo pinta: la petición y el orden siguen en
 * EventsPage. Al cambiar de página se vuelve al principio de la sección y el
 * lector anuncia «Página 2 de 6».
 */
const SeccionPasados: React.FC<SeccionPasadosProps> = ({ eventos, cargando }) => {
  const [pagina, setPagina] = useState(1);
  const seccion = useRef<HTMLElement>(null);
  const totalPaginas = Math.ceil(eventos.length / POR_PAGINA);
  const visibles = eventos.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA);

  const irA = (destino: number) => {
    setPagina(destino);
    const reducir = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    seccion.current?.scrollIntoView({ behavior: reducir ? "auto" : "smooth" });
  };

  return (
    <section
      ref={seccion}
      id="eventos-pasados"
      className="pasados bg2 fc-sobre-oscuro"
      aria-labelledby="pasados-titulo"
    >
      <div className="pasados__contenedor">
        <div className="pasados__cabeza">
          <div data-aos="fade-right">
            <p className="fc-antetitulo fc-antetitulo--naranja">{P.antetitulo}</p>
            <h2 className="fc-titulo-seccion pasados__titulo" id="pasados-titulo">
              {P.titulo.texto} <span className="fc-rotulador">{P.titulo.destacado}</span>
            </h2>
          </div>
          <p className="pasados__texto">{P.texto}</p>
        </div>

        {cargando ? (
          <FemSpinner />
        ) : visibles.length === 0 ? (
          <p className="pasados__texto">{P.sinEventos}</p>
        ) : (
          <ul className="pasados__lista" data-aos="fade-up">
            {visibles.map((evento) => (
              <li key={evento.id}>
                <EntradaEvento evento={evento} />
              </li>
            ))}
          </ul>
        )}

        {totalPaginas > 1 && (
          <nav className="paginas" aria-label="Páginas de eventos pasados">
            <button
              type="button"
              className="fc-boton-redondo"
              onClick={() => irA(pagina - 1)}
              disabled={pagina === 1}
              aria-label="Página anterior"
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numero) => (
              <button
                key={numero}
                type="button"
                className="fc-boton-redondo paginas__numero"
                onClick={() => irA(numero)}
                aria-label={`Página ${numero}`}
                aria-current={numero === pagina ? "page" : undefined}
              >
                {numero}
              </button>
            ))}
            <button
              type="button"
              className="fc-boton-redondo"
              onClick={() => irA(pagina + 1)}
              disabled={pagina === totalPaginas}
              aria-label="Página siguiente"
            >
              <ArrowRight aria-hidden="true" />
            </button>
            <p className="paginas__estado" role="status">
              Página {pagina} de {totalPaginas}
            </p>
          </nav>
        )}
      </div>
    </section>
  );
};

export default SeccionPasados;
