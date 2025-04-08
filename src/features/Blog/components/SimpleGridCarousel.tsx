import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SimpleGridCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slides = [
    {
      image: "/assets/css/homepage-concepts.webp",
      title: "Página de inicio interactiva",
      description: "Muestra visualmente los conceptos fundamentales de CSS Grid.",
    },
    {
      image: "/assets/css/holyGrail.webp",
      title: "Layout Holy Grail",
      description: "Diseño clásico con cabecera, pie, contenido principal y barras laterales.",
    },
    {
      image: "/assets/css/grid-gallery.webp",
      title: "Galería de imágenes responsive",
      description: "Galería que adapta su diseño a diferentes tamaños de pantalla.",
    },
    {
      image: "/assets/css/implicit-vs-explicit.webp",
      title: "Grid implícito vs. explícito",
      description: "Comparación visual de ambos enfoques de grid.",
    },
    {
      image: "/assets/css/magazine-layout.webp",
      title: "Maquetación tipo revista",
      description: "Diseño editorial con áreas destacadas para contenido principal.",
    },
    {
      image: "/assets/css/dashboard-layout.webp",
      title: "Dashboard administrativo",
      description: "Panel con widgets de diferentes tamaños para aplicaciones de datos.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: number | undefined;
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, slides.length]);

  return (
    <div
      className="grid-carousel"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="grid-carousel-slide">
        <picture>
          <source
            srcSet={slides[currentIndex].image.replace(
              "/assets/",
              "/public-optimized/mobile/assets/"
            )}
            media="(max-width: 768px)"
          />
          <source
            srcSet={slides[currentIndex].image.replace(
              "/assets/",
              "/public-optimized/desktop/assets/"
            )}
            media="(min-width: 769px)"
          />
          <img
            src={slides[currentIndex].image.replace(
              "/assets/",
              "/public-optimized/desktop/assets/"
            )}
            alt={slides[currentIndex].title}
            className="grid-carousel-image"
            loading="lazy"
          />
        </picture>
        <div className="grid-carousel-caption">
          <h3>{slides[currentIndex].title}</h3>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>

      <div className="grid-carousel-controls">
        <button
          onClick={prevSlide}
          className="grid-carousel-button"
          aria-label="Anterior slide"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          className="grid-carousel-button"
          aria-label="Siguiente slide"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="grid-carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`grid-carousel-dot ${
              index === currentIndex ? "active" : ""
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleGridCarousel;
