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
  // Si la versión optimizada falla, se recuerda en estado de React y no
  // escribiendo en el DOM. Antes el onError hacía `imgElement.src = src`: el
  // navegador cargaba la original, pero al siguiente render React devolvía el
  // atributo a la ruta optimizada —el DOM es suyo— y el `onerror = null`
  // desaparecía con él. La imagen volvía a fallar en cada render, y como el
  // componente se rerenderiza con cada resize, la misma petición fallida se
  // repetía una y otra vez en la consola. Lo que se veía como "un 404" eran
  // decenas del mismo.
  const [optimizadaFallo, setOptimizadaFallo] = useState(false);
  const isBackground = src.includes("bg");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Una src nueva merece otro intento con su versión optimizada: sin esto, una
  // imagen que falló dejaría al componente sirviendo siempre originales.
  useEffect(() => {
    setOptimizadaFallo(false);
  }, [src]);

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
      src={optimizadaFallo ? src : optimizedSrc}
      alt={alt}
      title={title}
      className={className}
      tabIndex={tabIndex}
      loading={loading}
      decoding="async"
      onError={() => {
        // Si la original también falla, este setState repite el valor y React
        // no rerenderiza: se queda en un 404 por imagen, no en un bucle.
        setOptimizadaFallo(true);
      }}
    />
  );
};

export default OptimizedImage;

