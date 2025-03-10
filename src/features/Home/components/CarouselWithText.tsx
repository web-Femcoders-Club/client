import { useState, useEffect } from 'react';
import './CarouselWithText.css';
import 'aos/dist/aos.css';

interface CarouselWithTextProps {
  texts: string[];
}

const CarouselWithText: React.FC<CarouselWithTextProps> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    
    return () => {
      clearInterval(textInterval);
    };
  }, [texts.length]);
  
  return (
    <div 
      className="carousel-text-container"
      role="region"
      aria-label="Frases destacadas"
      aria-live="polite" // Notifica cambios a lectores de pantalla
    >
      {texts.map((text: string, index: number) => {
        const isActive = index === currentTextIndex;
        return (
          <div
            key={index}
            className={`carousel-text ${isActive ? 'active' : ''}`}
            data-aos={isActive ? "fade-up" : ""} 
            data-aos-duration="800"
            tabIndex={isActive ? 0 : -1}
            {...{ 'aria-hidden': !isActive ? 'true' : 'false' }}
            role="text"
          >
            {text}
          </div>
        );
      })}
      <div className="carousel-indicators" aria-hidden="true">
        {texts.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentTextIndex ? 'active' : ''}`} 
            onClick={() => setCurrentTextIndex(index)}
            role="button"
            tabIndex={-1} // No focusable por teclado para evitar duplicación
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselWithText;


