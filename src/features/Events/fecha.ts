/*
 * La API trae `start_local` como «2026-09-03T19:30:00», pero algún evento
 * antiguo llega como «2024-01-21 00:00:00», con espacio. Chrome lo entiende;
 * Safari devuelve una fecha inválida. Con la «T» lo leen todos.
 */
export const leerFecha = (startLocal: string) => new Date(startLocal.replace(" ", "T"));

/** Para el atributo `dateTime` de <time>, que pide el formato con «T». */
export const fechaIso = (startLocal: string) => startLocal.replace(" ", "T");
