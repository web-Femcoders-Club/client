import React from "react";

/**
 * Tabla del panel: contenedor con scroll propio y cabecera consistente.
 *
 * El mismo `<thead>` estaba copiado 7 veces solo en CrmDashboard, con
 * variaciones sin criterio (`p-4` en unas, `p-3` en otras) y el color de marca
 * repetido en cada `<th>`. Los estilos viven ahora en admin-ui.css, con las
 * variables de color del proyecto.
 *
 * Las cabeceras llevan `scope="col"`, que faltaba en casi todas las tablas del
 * panel: sin él, un lector de pantalla no asocia cada celda con su columna.
 */

export interface AdminTableColumn {
  /** Texto de la cabecera. */
  label: string;
  /** Alineación del contenido de la columna. Por defecto, izquierda. */
  align?: "left" | "center" | "right";
}

interface AdminTableProps {
  columns: Array<AdminTableColumn | string>;
  children: React.ReactNode;
  /** Descripción de la tabla para lectores de pantalla. */
  caption?: string;
}

const AdminTable: React.FC<AdminTableProps> = ({
  columns,
  children,
  caption,
}) => (
  <div className="admin-table-wrap">
    <table className="admin-table">
      {caption && <caption className="sr-only">{caption}</caption>}
      <thead>
        <tr>
          {columns.map((col) => {
            const { label, align = "left" } =
              typeof col === "string" ? { label: col, align: "left" } : col;
            return (
              <th key={label} scope="col" style={{ textAlign: align }}>
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default AdminTable;
