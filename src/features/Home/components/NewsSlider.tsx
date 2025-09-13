import React, { useState, useEffect } from 'react';
import './NewsSlider.css';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  link?: string;
}

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

  const latestNews = newsItems.slice(0, 3);

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

  if (!latestNews.length) {
    return (
      <section className="news-slider-container ">
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
                  <picture>
                    <source
                      srcSet={`/public-optimized/mobile/${news.image.startsWith('/') ? news.image.slice(1) : news.image}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                      media="(max-width: 768px)"
                    />
                    <source
                      srcSet={`/public-optimized/desktop/${news.image.startsWith('/') ? news.image.slice(1) : news.image}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                      media="(min-width: 769px)"
                    />
                    <img
                      src={`/public-optimized/desktop/${news.image.startsWith('/') ? news.image.slice(1) : news.image}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                      alt={news.imageAlt}
                      className="news-image"
                      loading="lazy"
                      onError={(e) => {
                  
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.src = news.image;
                        imgElement.onerror = null;
                      }}
                    />
                  </picture>
                  <div className="news-image-overlay"></div>
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
                      Leer más
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