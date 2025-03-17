import React from "react";

interface OptimizedImageProps {
  src: string; 
  alt: string;
  title?: string;
  className?: string;
  tabIndex?: number;  // 🔹 Agregamos el atributo tabIndex opcionalmente
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, title, className, tabIndex }) => {
  const isMobile = window.innerWidth <= 768;
  const isBackground = src.includes("bg");
  const basePath = "/public-optimized";
  const folder = isBackground ? "desktop" : isMobile ? "mobile" : "desktop";
  const optimizedSrc = `${basePath}/${folder}/${src.replace(/\.(jpg|jpeg|png)$/, ".webp")}`;

  return (
    <img 
      src={optimizedSrc} 
      alt={alt} 
      title={title}  
      className={className} 
      tabIndex={tabIndex}  // 🔹 Ahora tabIndex se pasa correctamente
      loading="lazy" 
    />
  );
};

export default OptimizedImage;


