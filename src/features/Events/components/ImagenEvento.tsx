import OptimizedImage from "../../../components/OptimizedImage";

interface ImagenEventoProps {
  url: string;
  className?: string;
}

/*
 * La imagen de un evento llega de dos sitios:
 * - los de Eventbrite, con una URL absoluta de su CDN: se pinta tal cual;
 * - los creados a mano, con una ruta de public/ (a veces sin la barra
 *   inicial, a veces apuntando al .webp que solo existe en la versión
 *   optimizada): OptimizedImage la busca en public-optimized y, si no está,
 *   prueba la original.
 * Decorativa: el nombre del evento ya está en el título de la tarjeta.
 */
const ImagenEvento: React.FC<ImagenEventoProps> = ({ url, className }) =>
  /^https?:\/\//.test(url) ? (
    <img className={className} src={url} alt="" width={800} height={400} loading="lazy" decoding="async" />
  ) : (
    <OptimizedImage className={className} src={url.startsWith("/") ? url : `/${url}`} alt="" />
  );

export default ImagenEvento;
