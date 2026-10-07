import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginacionProps = {
  pagina: number;
  totalPaginas: number;
  onCambiar: (pagina: number) => void;
};

/*
 * Anterior, números y Siguiente. La página actual lleva aria-current y no se
 * desactiva (algunos lectores no anuncian aria-current en un botón disabled);
 * en los extremos, Anterior o Siguiente sí. Estilos en Blog.css.
 */
const Paginacion: React.FC<PaginacionProps> = ({ pagina, totalPaginas, onCambiar }) => {
  if (totalPaginas <= 1) return null;

  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <nav className="blog-paginacion" aria-label="Paginación">
      <button
        type="button"
        className="blog-paginacion__boton"
        onClick={() => onCambiar(pagina - 1)}
        disabled={pagina === 1}
      >
        <ChevronLeft aria-hidden="true" />
        <span className="blog-paginacion__texto">Anterior</span>
      </button>

      <ol className="blog-paginacion__lista">
        {paginas.map((numero) => (
          <li key={numero}>
            <button
              type="button"
              className="blog-paginacion__numero"
              onClick={() => numero !== pagina && onCambiar(numero)}
              aria-current={numero === pagina ? "page" : undefined}
              aria-label={`Página ${numero}`}
            >
              {numero}
            </button>
          </li>
        ))}
      </ol>

      <button
        type="button"
        className="blog-paginacion__boton"
        onClick={() => onCambiar(pagina + 1)}
        disabled={pagina === totalPaginas}
      >
        <span className="blog-paginacion__texto">Siguiente</span>
        <ChevronRight aria-hidden="true" />
      </button>
    </nav>
  );
};

export default Paginacion;
