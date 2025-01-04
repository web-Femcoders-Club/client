import React from "react";
import { Link } from "react-router-dom";
import "./PostStyles.css";

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

      <div className="noticia-item bg1">
        <div className="noticia-content">
          <div>
            <h2>Querida comunidad femCoders Club, ¡felices fiestas! 👩‍💻🎄</h2>
            <p className="intro-text">
              Querida comunidad, os deseamos unas felices fiestas llenas de
              innovación y éxito...
            </p>
          </div>
          <Link to="/noticias/FelicitacionNavidad" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>

      <div className="noticia-item bg1">
        <div className="noticia-content">
          <div>
            <h2>¡Bienvenidas a 2025 con FemCoders Club! 🎉</h2>
            <p className="intro-text">
              Comenzamos el año con grandes expectativas y nuevos retos para
              nuestra comunidad. Descubre qué tenemos preparado...
            </p>
          </div>
          <Link to="/noticias/Bienvenido2025" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
