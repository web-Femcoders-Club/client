import { useState, useEffect } from "react";
import "./CarouselWithText.css";
import "aos/dist/aos.css";

interface CarouselWithTextProps {
  texts: string[];
  currentImageIndex?: number;
}

const CarouselWithText: React.FC<CarouselWithTextProps> = ({
  texts,
  currentImageIndex = 0,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const textIndex = currentImageIndex % texts.length;
    setCurrentTextIndex(textIndex);
  }, [currentImageIndex, texts.length]);

  return (
    <div
      className="carousel-text-container"
      role="region"
      aria-label="Frases destacadas"
      aria-live="polite"
    >
      {texts.map((text: string, index: number) => {
        const isActive = index === currentTextIndex;
        return (
          <div
            key={index}
            className={`carousel-text ${isActive ? "active" : ""}`}
            data-aos={isActive ? "fade-up" : ""}
            data-aos-duration="800"
            tabIndex={isActive ? 0 : -1}
            {...{ "aria-hidden": !isActive }}
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
            className={`indicator ${
              index === currentTextIndex ? "active" : ""
            }`}
            onClick={() => setCurrentTextIndex(index)}
            role="button"
            tabIndex={-1}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselWithText;
