/**
 * Dominio canónico del sitio.
 *
 * Vive aquí y no en cada archivo porque se usa para construir URLs que salen
 * fuera —lo que se comparte en redes y lo que leen los buscadores— y ahí una
 * copia desactualizada no da error: da un enlace roto que nadie ve hasta que
 * alguien lo pincha.
 */
export const SITE_URL = "https://www.femcodersclub.com";

/** Devuelve una URL absoluta a partir de una ruta del sitio o de una URL ya absoluta. */
export const urlAbsoluta = (rutaOUrl: string): string =>
  rutaOUrl.startsWith("http") ? rutaOUrl : `${SITE_URL}${rutaOUrl}`;
