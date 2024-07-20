import { useState, useEffect } from 'react';
import './CarouselWithText.css';

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
    <div className="carousel-text-container">
      {texts.map((text: string, index: number) => (
        <div
          key={index}
          className={`carousel-text ${index === currentTextIndex ? 'active' : ''}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default CarouselWithText;


