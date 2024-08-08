import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import './Noticias.css';

const Noticias: React.FC = () => {
  return (
    <div className="noticias">
      <h2>Noticias</h2>
      <p>Contenido de las noticias...</p>
      <div className="noticia-item">
        <Link to="/noticias/1">
          Bienvenidas a femCoders Club: Innovación, Inclusión y Comunidad en la Programación
        </Link>
        <div className="compartir">
          <a
            href="https://www.instagram.com/femcoders_club/"
            className="icon"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="compartir-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/fem-coders-club/"
            className="icon"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="compartir-icon" />
          </a>
        </div>
      </div>
      <div className="noticia-item">
        <Link to="/noticias/2">Ejemplo Post Noticia</Link>
        <div className="compartir">
          <a
            href="https://www.instagram.com/femcoders_club/"
            className="icon"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="compartir-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/fem-coders-club/"
            className="icon"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="compartir-icon" />
          </a>
        </div>
      </div>
      <div className="noticia-item">
        <Link to="/noticias/3">Noticia 3</Link>
        <div className="compartir">
          <a
            href="https://www.instagram.com/femcoders_club/"
            className="icon"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="compartir-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/fem-coders-club/"
            className="icon"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="compartir-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticias;





