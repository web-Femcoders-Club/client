/**
 * Rutas que no deben publicarse: no van al sitemap, no se prerenderizan y no se
 * materializan como fichero en dist/.
 *
 * Fuente única para el sitemap y para el prerender. Duplicar la lista haría que
 * las dos copias divergieran en cuanto se añadiera una ruta privada nueva, y el
 * síntoma sería que esa ruta acaba publicada sin que nadie se dé cuenta.
 */
export const PRIVATE_ROUTES = [
  "/ofertas-de-trabajo",
  "/personaliza-perfil",
  "/presentaciones-destacadas",
  "/recursos-comunidad-femcoders-club",
  "/mentoria",
  "/enviar-documentacion",
  "/welcome",
  "/forgot-password",
  "/reset-password",
  "/admin",
  "/stats",
] as const;

/** True si la ruta es privada o cuelga de una ruta privada (/admin/crm). */
export function isPrivateRoute(route: string): boolean {
  return PRIVATE_ROUTES.some(
    (prefix) => route === prefix || route.startsWith(`${prefix}/`)
  );
}
