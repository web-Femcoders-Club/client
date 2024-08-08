import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import './Recursos.css';

const Recursos: React.FC = () => {
  return (
    <div className="recursos">
      <h2>Recursos</h2>
      <p>Contenido de los recursos...</p>
      <div className="recurso-item">
        Recurso 1
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
      <div className="recurso-item">
        Recurso 2
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
      <div className="recurso-item">
        Recurso 3
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

export default Recursos;

