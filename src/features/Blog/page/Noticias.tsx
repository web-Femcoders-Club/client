import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import './Noticias.css';

const Noticias: React.FC = () => {
  return (
    <div className="noticias">
      <h2>Noticias</h2>
      <p>Contenido de las noticias...</p>
      <div className="noticia-item">
        Noticia 1
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
        Noticia 2
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
        Noticia 3
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




