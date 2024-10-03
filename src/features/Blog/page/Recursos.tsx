import React from "react";
import { Link } from "react-router-dom";
import "./PostStyles.css";

const Recursos: React.FC = () => {
  return (
    <div className="recursos">
      <h2>Recursos</h2>

      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h2>Introducción a HTML: La base de la web</h2>
            <p className="intro-text">
              Aprende los fundamentos de HTML y cómo se usa para estructurar la
              web.
            </p>
          </div>
          <Link
            to="/recursos/html/introduccion-html"
            className="secondary-button"
          >
            Leer más
          </Link>
        </div>
      </div>

      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h2>
              Elementos HTML Clave: Encabezados, Párrafos, Enlaces e Imágenes
            </h2>
            <p className="intro-text">
              Descubre los elementos más utilizados en HTML, la importancia del
              atributo alt y el uso de videos y emojis.
            </p>
          </div>
          <Link
            to="/recursos/html/elementos-html-clave"
            className="secondary-button"
          >
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recursos;
