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
            <h3>Introducción a HTML: La base de la web</h3>
            <p className="intro-text">
              Aprende los fundamentos de HTML y cómo se usa para estructurar la
              web.
            </p>
          </div>
          <Link
            to="/recursos/html/introduccion-html"
            className="secondary-button"
            aria-label="Leer más sobre Introducción a HTML"
          >
            Leer más
          </Link>
        </div>
      </div>

      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>
              Elementos HTML Clave: Encabezados, Párrafos, Enlaces e Imágenes
            </h3>
            <p className="intro-text">
              Descubre los elementos más utilizados en HTML, la importancia del
              atributo alt y el uso de videos y emojis.
            </p>
          </div>
          <Link
            to="/recursos/html/elementos-html-clave"
            className="secondary-button"
            aria-label="Leer más sobre Elementos HTML Clave"
          >
            Leer más
          </Link>
        </div>
      </div>

      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>¿Qué es CSS y por qué es esencial para el diseño web?</h3>
            <p className="intro-text">
              Descubre qué es CSS y su importancia en el diseño web.
            </p>
          </div>
          <Link
            to="/recursos/css/introduccion-css"
            className="secondary-button"
            aria-label="Leer más sobre ¿Qué es CSS y por qué es esencial para el diseño web?"
          >
            Leer más
          </Link>
        </div>
      </div>

      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>HTML Semántico y Diseño de Layout</h3>
            <p className="intro-text">
              Aprende sobre HTML semántico y cómo estructurar layouts de forma
              efectiva.
            </p>
          </div>
          <Link
            to="/recursos/html/html-semantico"
            className="secondary-button"
            aria-label="Leer más sobre HTML Semántico y Diseño de Layout"
          >
            Leer más
          </Link>
        </div>
      </div>

      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Formularios y Tablas en HTML</h3>
            <p className="intro-text">
              Aprende a estructurar formularios y tablas en HTML. Descubre
              etiquetas importantes y casos de uso comunes.
            </p>
          </div>
          <Link
            to="/recursos/html/formularios-y-tablas"
            className="secondary-button"
            aria-label="Leer más sobre Formularios y Tablas en HTML"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Introducción a las APIs en HTML: Potencia tus Proyectos Web</h3>
            <p className="intro-text">
              Aprende a utilizar APIs en HTML para añadir funcionalidades avanzadas como geolocalización, almacenamiento y gráficos interactivos.
            </p>
          </div>
          <Link
            to="/recursos/html/apis-html"
            className="secondary-button"
            aria-label="Leer más sobre Introducción a las APIs en HTML"
          >
            Leer más
          </Link>
        </div>
      </div>
    </div>

    
  );
};

export default Recursos;
