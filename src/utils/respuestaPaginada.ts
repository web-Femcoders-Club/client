/**
 * Lee una respuesta del panel que puede venir paginada o como array suelto.
 *
 * Los listados del backend pasaron a devolver `{ data, pagination }` en vez de
 * un array (server#27). Aceptar las dos formas evita que el panel dependa de
 * qué se despliegue antes: con el backend viejo sigue funcionando, y con el
 * nuevo también.
 *
 * Es transitorio. Cuando el backend nuevo esté desplegado y estable, esto se
 * simplifica a leer `data` y ya.
 */
export interface Paginacion {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface RespuestaPaginada<T> {
  data: T[];
  pagination: Paginacion;
}

/** Las filas, venga como venga la respuesta. */
export function filasDe<T>(respuesta: T[] | RespuestaPaginada<T> | null | undefined): T[] {
  if (Array.isArray(respuesta)) return respuesta;
  if (respuesta && Array.isArray((respuesta as RespuestaPaginada<T>).data)) {
    return (respuesta as RespuestaPaginada<T>).data;
  }
  return [];
}

/** Los metadatos de paginación, si los hay. */
export function paginacionDe<T>(
  respuesta: T[] | RespuestaPaginada<T> | null | undefined,
): Paginacion | null {
  if (!respuesta || Array.isArray(respuesta)) return null;
  return (respuesta as RespuestaPaginada<T>).pagination ?? null;
}
