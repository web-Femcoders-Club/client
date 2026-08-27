import React from "react";
import "./PostImage.css";

interface PostImageProps {
  src: string;
  alt: string;
  /**
   * Marca la imagen como generada por IA: muestra el distintivo visible que
   * exige la transparencia del AI Act (Reglamento UE 2024/1689, art. 50).
   *
   * Cuenta como generada por IA una imagen creada o manipulada con un modelo
   * generativo (Midjourney, DALL·E, Magic Media de Canva, Gemini…). NO cuenta
   * un diseño compuesto a mano en Canva/Figma con plantillas, stock y texto,
   * ni una captura de pantalla real.
   */
  aiGenerated?: boolean;
  /** Pie de foto opcional, debajo de la imagen. */
  caption?: React.ReactNode;
  loading?: "lazy" | "eager";
  /** Rutas responsive opcionales (variantes móvil/escritorio). */
  mobileSrc?: string;
  desktopSrc?: string;
}

/**
 * Imagen de un post del blog. Unifica el patrón que hasta ahora se repetía a
 * mano en cada post (.post-image-container + .blog-post-image) y añade el
 * distintivo de imagen generada por IA.
 */
const PostImage: React.FC<PostImageProps> = ({
  src,
  alt,
  aiGenerated = false,
  caption,
  loading = "lazy",
  mobileSrc,
  desktopSrc,
}) => {
  const image = (
    <picture>
      {mobileSrc && <source srcSet={mobileSrc} media="(max-width: 768px)" />}
      {desktopSrc && <source srcSet={desktopSrc} media="(min-width: 769px)" />}
      <img
        src={src}
        alt={alt}
        className="blog-post-image"
        loading={loading}
        decoding="async"
        onError={(e) => {
          // Si falla la variante optimizada, caer a la original.
          const img = e.target as HTMLImageElement;
          img.src = src;
          img.onerror = null;
        }}
      />
    </picture>
  );

  // Sin distintivo ni pie: se mantiene el marcado histórico de los posts.
  if (!aiGenerated && !caption) {
    return <div className="post-image-container">{image}</div>;
  }

  return (
    <figure className="post-image-container post-figure">
      {image}
      <figcaption className="post-image-caption">
        {aiGenerated && (
          <span className="ai-badge">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            Imagen generada con IA
          </span>
        )}
        {caption}
      </figcaption>
    </figure>
  );
};

export default PostImage;
