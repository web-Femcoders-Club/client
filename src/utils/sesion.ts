/*
 * Qué cuenta como «tener sesión», en un solo sitio.
 *
 * Existe porque la respuesta estaba escrita dos veces y divergió. Header mira
 * si hay `authToken` y `userId` en sessionStorage; unas pantallas nuevas
 * miraban la clave `isAuthenticated`, que el login también escribe. Resultado:
 * con una sesión donde faltaba esa clave, el avatar salía en la cabecera y el
 * botón de volver de esas pantallas no, sin ningún error de por medio.
 *
 * Es duplicación de CONOCIMIENTO, no de texto: la pregunta «¿hay sesión?» tiene
 * una sola respuesta y este es su sitio.
 *
 * Header no usa esto todavía: además de comprobar las claves, valida el token
 * contra el servidor. Cuando se toque, puede apoyarse aquí para la primera
 * parte.
 */

/** Hay sesión si están las dos piezas con las que se habla con la API. */
export const haySesion = (): boolean =>
  Boolean(
    sessionStorage.getItem("authToken") && sessionStorage.getItem("userId"),
  );

/** El panel solo existe para administradoras. */
export const esAdmin = (): boolean =>
  sessionStorage.getItem("userRole") === "admin";
