/*
 * Vídeo de presentación de «Quiénes somos». Fuente única: lo leen la sección,
 * el JSON-LD que escribe el prerender (scripts/spaRoutesMeta.ts) y la entrada
 * de vídeo del sitemap. Si cambian por separado, Google ve dos vídeos distintos.
 *
 * Duración y tamaño leídos del propio MP4 (52,5 s, 1280×720). La miniatura es
 * la de YouTube, guardada en public/ para no pedir nada a terceros al cargar.
 */
export const VIDEO_COMUNIDAD = {
  titulo: "Así es FemCoders Club",
  descripcion:
    "Quiénes somos y por qué existe FemCoders Club, la comunidad de mujeres en tecnología nacida en Barcelona, contado en menos de un minuto.",
  archivo: "/VideoInicialComunidad.mp4",
  miniatura: "/video-comunidad-poster.jpg",
  ancho: 1280,
  alto: 720,
  duracionSegundos: 53,
  // Primera publicación, la de YouTube, con zona horaria (Google la recomienda).
  fechaSubida: "2024-02-03T14:32:53-08:00",
  youtube: "https://www.youtube.com/watch?v=4k3q03neEA4",
} as const;
