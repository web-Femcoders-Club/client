import React, { useState, useEffect } from 'react';
import './GitHubProjects.css';

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  imageAlt: string;
  author: string;
  authorAvatar: string;
  lastUpdated: string;
  stars: number;
  language: string;
  postUrl?: string;
  postTitle?: string;
  difficulty: string; 
}

interface GitHubProjectsProps {
  projects: Project[];
  maxProjects?: number;
  showFilters?: boolean;
  autoRotate?: boolean;
  rotateInterval?: number;
}

const GitHubProjects: React.FC<GitHubProjectsProps> = ({
  projects = [],
  maxProjects = 6, 
  showFilters = true,
  autoRotate = false,
  rotateInterval = 8000,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Tecnologías específicas de FemCoders Club repositories
  const technologies = ['SASS', 'Svelte', 'JavaScript', 'CSS', 'TypeScript', 'React'];

  // Filtrar proyectos según la selección
  const filteredProjects = selectedFilter === 'Todos' 
    ? projects 
    : projects.filter(project => {
        // Buscar en techStack o language
        const hasInTechStack = project.techStack.includes(selectedFilter);
        const hasInLanguage = project.language === selectedFilter;
        
        return hasInTechStack || hasInLanguage;
      });

  const displayedProjects = filteredProjects.slice(0, maxProjects);

  // Auto-rotate para el proyecto destacado
  useEffect(() => {
    if (autoRotate && displayedProjects.length > 1) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentProjectIndex(prev => (prev + 1) % displayedProjects.length);
          setIsAnimating(false);
        }, 300);
      }, rotateInterval);

      return () => clearInterval(interval);
    }
  }, [autoRotate, displayedProjects.length, rotateInterval]);

  const handleFilterChange = (filter: string) => {
    console.log('Filtro seleccionado:', filter); // Para debug
    console.log('Proyectos filtrados:', filteredProjects.length); // Para debug
    setSelectedFilter(filter);
    setCurrentProjectIndex(0);
  };

  const featuredProject = displayedProjects[currentProjectIndex];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante': return '#10b981';
      case 'Básico': return '#10b981';
      case 'Intermedio': return '#f59e0b';
      case 'Avanzado': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <section className="github-projects-container" data-aos="fade-up">
      <div className="projects-header">
        <h2>Proyectos de la Comunidad</h2>
        <p>Descubre los proyectos desarrollados por nuestras femCoders</p>
      </div>

      {/* Filtros por tecnología */}
      {showFilters && (
        <div className="projects-filters">
          <button
            className={`filter-btn ${selectedFilter === 'Todos' ? 'active' : ''}`}
            onClick={() => handleFilterChange('Todos')}
          >
            Todos
          </button>
          {technologies.map(tech => (
            <button
              key={tech}
              className={`filter-btn ${selectedFilter === tech ? 'active' : ''}`}
              onClick={() => handleFilterChange(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      )}

      {/* Solo Proyecto Destacado */}
      {featuredProject && (
        <div className={`featured-project ${isAnimating ? 'animating' : ''}`}>
          <div className="featured-project-image">
            {/* Manejo diferenciado para GIFs vs otras imágenes */}
            {featuredProject.image.endsWith('.gif') ? (
              <img
                src={`/${featuredProject.image}`}
                alt={featuredProject.imageAlt}
                className="featured-image"
                loading="lazy"
              />
            ) : (
              <picture>
                <source
                  srcSet={`/public-optimized/mobile/${featuredProject.image.startsWith('/') ? featuredProject.image.slice(1) : featuredProject.image}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                  media="(max-width: 768px)"
                />
                <source
                  srcSet={`/public-optimized/desktop/${featuredProject.image.startsWith('/') ? featuredProject.image.slice(1) : featuredProject.image}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                  media="(min-width: 769px)"
                />
                <img
                  src={`/public-optimized/desktop/${featuredProject.image.startsWith('/') ? featuredProject.image.slice(1) : featuredProject.image}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                  alt={featuredProject.imageAlt}
                  className="featured-image"
                  loading="lazy"
                  onError={(e) => {
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.src = `/${featuredProject.image}`;
                    imgElement.onerror = null;
                  }}
                />
              </picture>
            )}
            
            {/* Overlay superior con badge y stats */}
            <div className="featured-overlay">
              <span className="featured-badge">Destacado</span>
              <div className="project-stats">
                <span className="stars">⭐ {featuredProject.stars}</span>
                <span className="language">{featuredProject.language}</span>
              </div>
            </div>

            {/* Overlay inferior con colaboración (aparece en hover) */}
            <div className="collaboration-overlay">
              <h4>¿Tienes una idea de proyecto?</h4>
              <p>Únete a nuestra comunidad y colabora con otras femCoders en proyectos increíbles</p>
              <a 
                href="mailto:femcodersclub@gmail.com?subject=Propuesta de Proyecto Colaborativo"
                className="btn-collaborate-overlay"
              >
                Proponer Proyecto
              </a>
            </div>
          </div>

          <div className="featured-project-content">
            <div className="project-meta">
              <div className="author-info">
                {/* Manejo diferenciado para avatares GIF vs otras imágenes */}
                {featuredProject.authorAvatar.endsWith('.gif') ? (
                  <img
                    src={`/${featuredProject.authorAvatar}`}
                    alt={`Avatar de ${featuredProject.author}`}
                    className="author-avatar"
                    loading="lazy"
                  />
                ) : (
                  <picture>
                    <source
                      srcSet={`/public-optimized/mobile/${featuredProject.authorAvatar.startsWith('/') ? featuredProject.authorAvatar.slice(1) : featuredProject.authorAvatar}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                      media="(max-width: 768px)"
                    />
                    <source
                      srcSet={`/public-optimized/desktop/${featuredProject.authorAvatar.startsWith('/') ? featuredProject.authorAvatar.slice(1) : featuredProject.authorAvatar}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                      media="(min-width: 769px)"
                    />
                    <img
                      src={`/public-optimized/desktop/${featuredProject.authorAvatar.startsWith('/') ? featuredProject.authorAvatar.slice(1) : featuredProject.authorAvatar}`.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")}
                      alt={`Avatar de ${featuredProject.author}`}
                      className="author-avatar"
                      loading="lazy"
                      onError={(e) => {
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.src = `/${featuredProject.authorAvatar}`;
                        imgElement.onerror = null;
                      }}
                    />
                  </picture>
                )}
                <div>
                  <span className="author-name">{featuredProject.author}</span>
                  <span className="last-updated">{featuredProject.lastUpdated}</span>
                </div>
              </div>
              <span 
                className="difficulty-badge"
                style={{ backgroundColor: getDifficultyColor(featuredProject.difficulty) }}
              >
                {featuredProject.difficulty}
              </span>
            </div>

            <h3 className="project-title">{featuredProject.name}</h3>
            <p className="project-description">{featuredProject.description}</p>

            <div className="tech-stack">
              {featuredProject.techStack.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              <a 
                href={featuredProject.githubUrl}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Código
              </a>
              {featuredProject.demoUrl && (
                <a 
                  href={featuredProject.demoUrl}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Demo
                </a>
              )}
              {featuredProject.postUrl && (
                <a 
                  href={featuredProject.postUrl}
                  className="btn-post"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer Tutorial
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Indicadores para el proyecto destacado */}
      {displayedProjects.length > 1 && (
        <div className="featured-indicators">
          {displayedProjects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
              onClick={() => setCurrentProjectIndex(index)}
              aria-label={`Ver proyecto ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default GitHubProjects;