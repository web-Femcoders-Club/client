import React from "react";

/**
 * Controles de paginación del panel.
 *
 * El mismo bloque estaba repetido en CrmDashboard, ManageUsers,
 * ConsentOverview y UserStats, con dos variantes de clases que solo se
 * diferenciaban en `disabled:opacity-40` frente a `disabled:opacity-50`.
 *
 * Incluye el comportamiento que hay que acordarse de repetir en cada copia: si
 * un filtro reduce el número de páginas, la actual se ajusta sola. Sin eso,
 * filtrar desde una página alta deja una tabla vacía sin explicación.
 */

interface AdminPaginationProps {
  paginaActual: number;
  totalPaginas: number;
  onCambiar: (pagina: number) => void;
  /** Total de elementos, para el "· N resultados". */
  totalElementos?: number;
  /** Nombre de lo que se lista, en singular. Ej: "usuaria", "contacto". */
  nombreElemento?: string;
  /** Etiqueta del <nav> para lectores de pantalla. */
  etiqueta?: string;
}

const AdminPagination: React.FC<AdminPaginationProps> = ({
  paginaActual,
  totalPaginas,
  onCambiar,
  totalElementos,
  nombreElemento = "resultado",
  etiqueta = "Paginación",
}) => {
  // Con una sola página los controles no aportan nada.
  if (totalPaginas <= 1) return null;

  return (
    <nav className="admin-pagination" aria-label={etiqueta}>
      <button
        type="button"
        className="admin-pagination__btn"
        onClick={() => onCambiar(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        Anterior
      </button>

      {/* aria-live: al cambiar de página la tabla se sustituye entera, y sin
          esto un lector de pantalla no anuncia nada. */}
      <p className="admin-pagination__info" aria-live="polite">
        Página {paginaActual} de {totalPaginas}
        {typeof totalElementos === "number" && (
          <span>
            {" · "}
            {totalElementos} {nombreElemento}
            {totalElementos === 1 ? "" : "s"}
          </span>
        )}
      </p>

      <button
        type="button"
        className="admin-pagination__btn"
        onClick={() => onCambiar(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >
        Siguiente
      </button>
    </nav>
  );
};

export default AdminPagination;
