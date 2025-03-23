import React, { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  tabIndex?: number;
  loading?: "lazy" | "eager";
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  title,
  className,
  tabIndex,
  loading = "lazy",
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const isBackground = src.includes("bg");
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Elegir carpeta basada en tipo de imagen y dispositivo
  const folder = isBackground ? "desktop" : isMobile ? "mobile" : "desktop";
  
  // Limpiar la ruta de entrada (quitar barra inicial si existe)
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // Construir la ruta a la versión optimizada
  const optimizedSrc = `/public-optimized/${folder}/${cleanSrc}`
    .replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")
    .replace(/\/{2,}/g, "/");
  
  return (
    <img
      src={optimizedSrc}
      alt={alt}
      title={title}
      className={className}
      tabIndex={tabIndex}
      loading={loading}
      decoding="async"
      onError={(e) => {
        // Si la imagen optimizada falla, intentar con la original
        const imgElement = e.target as HTMLImageElement;
        imgElement.src = src;
        imgElement.onerror = null;
      }}
    />
  );
};

export default OptimizedImage;

