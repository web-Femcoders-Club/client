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
            <h2>El mes en que dejamos de pedir permiso para ocupar espacio</h2>
            <p className="intro-text">
              Talent Arena, el primer evento de Claude en Barcelona, una invitación que no esperábamos y una tarde con InfoJobs. Marzo 2026 ha sido un mes que deja huella...
            </p>
          </div>
          <Link to="/noticias/marzo-2026-eventos" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>

      <div className="noticia-item bg1">
        <div className="noticia-content">
          <div>
            <h2>FemCoders Club es Community Partner de Talent Arena</h2>
            <p className="intro-text">
              Celebramos una alianza basada en valores compartidos: diversidad, talento colectivo e innovación. Descubre qué significa esta colaboración para nuestra comunidad...
            </p>
          </div>
          <Link to="/noticias/talent-arena-2026-partnership" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>

      <div className="noticia-item bg1">
        <div className="noticia-content">
          <div>
            <h2>Felices fiestas: FemCoders Club cierra 2025 y sigue</h2>
            <p className="intro-text">
              Las fiestas están aquí. Cerramos 2025 con más de 1,300 mujeres, logros reales y conexiones auténticas. Proyectamos un 2026 lleno de oportunidades...
            </p>
          </div>
          <Link to="/noticias/felices-fiestas-2025" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>

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
            <h2>
              🎬 Revive la magia del DataConnect: una tarde que marcó la
              diferencia
            </h2>
            <p className="intro-text">
              Más de 70 personas se reunieron en InfoJobs Barcelona para una
              jornada épica de Big Data, networking y comunidad. Revive los
              mejores momentos con nuestro video resumen y accede a las
              presentaciones completas...
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
            <h2>
              🎙️ Nadia Cavalleri: "El testing no es solo técnico, requiere
              pensamiento crítico y empatía"
            </h2>
            <p className="intro-text">
              Revive nuestra entrevista exclusiva con Nadia Soledad Cavalleri,
              una de las voces más influyentes en testing de Latinoamérica y
              España. Descubre su transición de psicóloga a líder en QA,
              consejos para automatización y su visión del futuro del testing
              con IA...
            </p>
          </div>
          <Link
            to="/noticias/EntrevistaNadiaTesting"
            className="secondary-button"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="noticia-item bg1">
        <div className="noticia-content">
          <div>
            <h2>
              🎉 ¡Noticia que nos llena de orgullo! Somos Community Partner de
              HackBarna 2025
            </h2>
            <p className="intro-text">
              FemCoders Club es oficialmente Community Partner de HackBarna
              2025, el hackathon de IA más importante de Barcelona. Una
              oportunidad única para nuestra comunidad del 11-12 de octubre en
              Glovo HQ...
            </p>
          </div>
          <Link to="/noticias/HackBarna2025" className="secondary-button">
            Leer más
          </Link>
        </div>
      </div>
    <div className="noticia-item bg1">
  <div className="noticia-content">
    <div>
      <h2>
        Segundo Aniversario de FemCoders Club: Nuestra historia, nuestro
        equipo y el futuro
      </h2>
      <p className="intro-text">
        Celebramos dos años de FemCoders Club: de un espacio seguro a una
        Asociación con +1.300 mujeres, +35 eventos y +30 empresas.
        Descubre nuestro equipo fundador, logros y visión tecnológica con
        IA...
      </p>
    </div>
    <Link to="/noticias/segundo-aniversario" className="secondary-button">
      Leer más
    </Link>
  </div>
</div>
    </div>
  );
};

export default Noticias;
