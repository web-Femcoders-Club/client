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
       <div className="noticia-item bg1">
        <div className="noticia-content">
          <div>
            <h2>🎬 Revive la magia del DataConnect: una tarde que marcó la diferencia</h2>
            <p className="intro-text">
              Más de 70 personas se reunieron en InfoJobs Barcelona para una jornada épica de Big Data, networking y comunidad. Revive los mejores momentos con nuestro video resumen y accede a las presentaciones completas...
            </p>
          </div>
          <Link to="/noticias/DataConnectEvento" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>
       <div className="noticia-item bg1">
        <div className="noticia-content">
          <div>
            <h2>🎙️ Nadia Cavalleri: "El testing no es solo técnico, requiere pensamiento crítico y empatía"</h2>
            <p className="intro-text">
              Revive nuestra entrevista exclusiva con Nadia Soledad Cavalleri, una de las voces más influyentes en testing de Latinoamérica y España. Descubre su transición de psicóloga a líder en QA, consejos para automatización y su visión del futuro del testing con IA...
            </p>
          </div>
          <Link to="/noticias/EntrevistaNadiaTesting" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
