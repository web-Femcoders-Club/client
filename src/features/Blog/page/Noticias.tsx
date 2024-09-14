import React from 'react';
import { Link } from 'react-router-dom';
import './Noticias.css';

const Noticias: React.FC = () => {
  return (
    <div className="noticias">
      <h2>Noticias</h2>
      <div className="noticia-item bg1">
        <div className="noticia-content">
          <div>
            <h2>femCoders Club - Primer Aniversario</h2>
            <p className="intro-text">
              Celebramos nuestro primer aniversario en femCoders Club...
            </p>
          </div>
          <Link to="/noticias/Aniversario" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Noticias;










