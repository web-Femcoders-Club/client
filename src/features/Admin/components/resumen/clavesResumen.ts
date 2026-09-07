/*
 * Claves de React Query del resumen del panel.
 *
 * Están centralizadas porque una clave se escribe dos veces: donde se lee el
 * dato y donde se invalida tras cambiarlo. Con los arrays sueltos, una errata
 * en el segundo sitio no da error de compilación ni de ejecución — simplemente
 * el contador deja de actualizarse y nadie se entera. Aquí un nombre mal
 * escrito lo caza TypeScript.
 */
export const clavesResumen = {
  stats: ["admin", "stats"] as const,
  crmStats: ["admin", "crm", "stats"] as const,
  resumenContactos: ["admin", "contacts", "summary"] as const,
  comentariosPendientes: ["admin", "comments", "pending"] as const,
  bajasPendientes: ["admin", "unsubscribed", "pending"] as const,
};
