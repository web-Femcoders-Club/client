import React, { useState, useEffect } from 'react';
import './NewsSlider.css';

export interface NewsItem {
  id: string;
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  link?: string;
  /** Texto del enlace. Por defecto "Leer más"; concretarlo cuando el destino no sea un artículo del blog. */
  linkLabel?: string;
  /** Imagen generada con IA: muestra el distintivo (AI Act art. 50). */
  aiGenerated?: boolean;
}

/** Distintivo de imagen generada con IA, superpuesto sobre la imagen. */
const AiBadge: React.FC = () => (
  <span className="news-ai-badge">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
    Generada con IA
  </span>
);

interface NewsSliderProps {
  newsItems: NewsItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

const NewsSlider: React.FC<NewsSliderProps> = ({
  newsItems = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const latestNews = newsItems.slice(0, 5);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying && latestNews.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % latestNews.length);
      }, autoPlayInterval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, latestNews.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % latestNews.length);
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 3000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + latestNews.length) % latestNews.length);
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 3000);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 3000);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        prevSlide();
        e.preventDefault();
        break;
      case 'ArrowRight':
        nextSlide();
        e.preventDefault();
        break;
      case ' ':
      case 'Enter':
        togglePlay();
        e.preventDefault();
        break;
    }
  };

  // Función para determinar si es una URL externa
  const isExternalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  // Función para obtener la ruta de la imagen
  const getImagePath = (image: string, size: 'mobile' | 'desktop') => {
    if (isExternalUrl(image)) {
      return image;
    }
    const imagePath = image.startsWith('/') ? image.slice(1) : image;
    return `/public-optimized/${size}/${imagePath}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp");
  };

  if (!latestNews.length) {
    return (
      <section className="news-slider-container">
        <div className="news-slider-empty">
          <h3>Próximamente nuevas actualizaciones</h3>
          <p>Mantente atenta a las últimas noticias de FemCoders Club</p>
        </div>
      </section>
    );
  }

  return (
    <section className="news-slider-container" data-aos="fade-up">
      <div className="news-slider-header">
        <h2>Últimas Noticias</h2>
        <p>Mantente al día con las novedades de nuestra comunidad</p>
      </div>

      <div 
        className="news-slider"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="region"
        aria-label="Carrusel de noticias"
      >
        {latestNews.map((news, index) => {
          const isActive = index === currentSlide;
          const isImageLeft = index % 2 === 0;
          const isExternal = isExternalUrl(news.image);

          return (
            <div
              key={news.id}
              className={`news-slide ${isActive ? 'active' : ''} ${isImageLeft ? 'image-left' : 'image-right'}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <div className="news-slide-content">
                <div className="news-image-container">
                  {isExternal ? (
                    // Para URLs externas, usar img directo con estilo de perfil
                    <>
                      <img
                        src={news.image}
                        alt={news.imageAlt}
                        className="news-image news-image-external"
                        loading="lazy"
                      />
                      <div className="news-image-overlay"></div>
                      {news.aiGenerated && <AiBadge />}
                    </>
                  ) : (
                    // Para imágenes locales, usar picture con optimización
                    <>
                      <picture>
                        <source
                          srcSet={getImagePath(news.image, 'mobile')}
                          media="(max-width: 768px)"
                        />
                        <source
                          srcSet={getImagePath(news.image, 'desktop')}
                          media="(min-width: 769px)"
                        />
                        <img
                          src={getImagePath(news.image, 'desktop')}
                          alt={news.imageAlt}
                          className="news-image"
                          loading="lazy"
                          onError={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.src = news.image;
                            imgElement.onerror = null;
                          }}
                        />
                        {news.aiGenerated && <AiBadge />}
                      </picture>
                      <div className="news-image-overlay"></div>
                    </>
                  )}
                </div>

                <div className="news-text-container">
                  <div className="news-meta">
                    <span className="news-category">{news.category}</span>
                    <span className="news-date">{news.date}</span>
                  </div>
                  
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-description">{news.description}</p>
                  
                  {news.link && (
                    <a 
                      href={news.link} 
                      className="news-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {news.linkLabel ?? 'Leer más'}
                      <span className="news-link-arrow">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {showArrows && latestNews.length > 1 && (
          <div className="news-controls">
            <button
              className="news-control news-prev"
              onClick={prevSlide}
              aria-label="Noticia anterior"
            >
              ←
            </button>
            <button
              className="news-control news-next"
              onClick={nextSlide}
              aria-label="Siguiente noticia"
            >
              →
            </button>
          </div>
        )}

        {autoPlay && latestNews.length > 1 && (
          <button
            className="news-play-pause"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        )}
      </div>

      {showDots && latestNews.length > 1 && (
        <div className="news-indicators">
          {latestNews.map((_, index) => (
            <button
              key={index}
              className={`news-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a noticia ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewsSlider;