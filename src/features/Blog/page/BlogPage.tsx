import React, { useState, useRef, useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Noticias from './Noticias';
import Recursos from './Recursos';
import Buscar from '../components/Buscar';
import './BlogPage.css';
import { Helmet } from 'react-helmet';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const noticiasRef = useRef<HTMLDivElement>(null);
  const recursosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname.includes('noticias') && noticiasRef.current) {
      noticiasRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname.includes('recursos') && recursosRef.current) {
      recursosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const posts = [
    { id: 1, type: 'noticia', title: 'Noticia Reciente 1', description: 'Breve descripción de la noticia...' },
    { id: 2, type: 'recurso', title: 'Recurso Reciente 1', description: 'Breve descripción del recurso...' },
    
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     <Helmet>
        <title>Blog de FemCoders Club</title>
        <meta name="description" content="Descubre noticias y recursos en el blog de FemCoders Club" />
        <meta name="keywords" content="FemCoders, noticias, recursos, programación, tecnología" />
      </Helmet>
      <header className="blog-header">
        <h1 className="blog-title">Bienvenidas al Blog de FemCoders Club</h1>
        <nav className="blog-nav">
          <ul className="blog-menu">
            <li className="blog-menu-item">
              <Link to="noticias" className="blog-menu-link">Noticias</Link>
            </li>
            <li className="blog-menu-item">
              <Link to="recursos" className="blog-menu-link">Recursos</Link>
            </li>
          </ul>
          <div className="buscar-container">
            <Buscar onSearch={handleSearch} />
          </div>
        </nav>
      </header>
      <section className="hero-section">
        <h3>Descubre lo Último sobre femCoders Club</h3>
        <p>Encuentra noticias, recursos, y más en nuestro blog.</p>
      </section>
      <section className="blog-content">
        <div ref={noticiasRef} className="featured-posts">
          <h3>Publicaciones Recientes</h3>
          <div className="post-grid">
            {filteredPosts.map(post => (
              <div key={post.id} className="post-card">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <Link to={`/blog/${post.type}/${post.id}`} className={`button ${post.type === 'noticia' ? 'primary-button' : 'secondary-button'}`}>
                  {post.type === 'noticia' ? 'Leer más' : 'Ver recurso'}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div ref={recursosRef} className="categories-section">
          <h3>Temas Populares</h3>
          <div className="category-buttons">
            <Link to="/blog/categoria/javascript" className="button secondary-button">JavaScript</Link>
            <Link to="/blog/categoria/react" className="button secondary-button">React</Link>
            <Link to="/blog/categoria/css" className="button secondary-button">CSS</Link>
            <Link to="/blog/categoria/python" className="button secondary-button">Python</Link>
          </div>
        </div>
        <Routes>
          <Route path="noticias" element={<Noticias />} />
          <Route path="recursos" element={<Recursos />} />
        </Routes>
      </section>
    </>
  );
};

export default BlogPage;













