/*
 * Cifras de la comunidad que muestra la web, en un solo sitio: la portada de
 * Inicio y «Nuestro impacto» de /equipo leen de aquí.
 *
 * Se escriben a mano. La página «Comunidad real» del panel calcula las cifras
 * de la comunidad y más adelante saldrán de ahí.
 */
export const CIFRAS_COMUNIDAD = {
  mujeres: 1600,
  eventos: 40,
  empresas: 30,
} as const;

/*
 * Recursos abiertos para aprender. Comprobado el 5 de octubre de 2026:
 * repositorios públicos de github.com/femcodersclub y artículos publicados en
 * /recursos (sin contar noticias). No se piden a GitHub al cargar la página
 * para no depender de un servicio externo; hay que actualizarlos a mano.
 */
export const RECURSOS_ABIERTOS = {
  repositoriosGithub: 29,
  articulosTecnicos: 34,
} as const;

export const ANIO_FUNDACION = 2023;
