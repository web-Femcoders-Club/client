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
              Aprende a utilizar APIs en HTML para añadir funcionalidades
              avanzadas como geolocalización, almacenamiento y gráficos
              interactivos.
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

      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>HTML Avanzado para SEO y Accesibilidad</h3>
            <p className="intro-text">
              Explora técnicas avanzadas de HTML, como microdatos, atributos
              ARIA y lazy loading, para mejorar el SEO y la accesibilidad de tu
              web.
            </p>
          </div>
          <Link
            to="/recursos/html/html-seo-accesibilidad"
            className="secondary-button"
            aria-label="Leer más sobre HTML Avanzado para SEO y Accesibilidad"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Integración de Frameworks y Librerías</h3>
            <p className="intro-text">
              Aprende cómo HTML se relaciona con frameworks modernos como React,
              Vue.js, Angular y Svelte para crear aplicaciones web dinámicas.
            </p>
          </div>
          <Link
            to="/recursos/html/integracion-frameworks"
            className="secondary-button"
            aria-label="Leer más sobre Integración de Frameworks y Librerías"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Domina los Selectores en CSS</h3>
            <p className="intro-text">
              Aprende a usar selectores básicos, avanzados y combinados en CSS
              con ejemplos prácticos y visuales.
            </p>
          </div>
          <Link
            to="/recursos/css/selectores-css"
            className="secondary-button"
            aria-label="Leer más sobre Domina los Selectores en CSS"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Box Model en CSS | Guía Completa para Frontend </h3>
            <p className="intro-text">
              Aprende a dominar el Box Model en CSS para mejorar el diseño y la
              maquetación web.
            </p>
          </div>
          <Link
            to="/recursos/css/box-model"
            className="secondary-button"
            aria-label="Leer más sobre el Box Model en CSS"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Flexbox: El poder de crear layouts flexibles</h3>
            <p className="intro-text">
              Aprende cómo Flexbox facilita la creación de diseños web flexibles
              y responsivos con propiedades clave y ejemplos prácticos.
            </p>
          </div>
          <Link
            to="/recursos/css/flexbox"
            className="secondary-button"
            aria-label="Leer más sobre Flexbox: El poder de crear layouts flexibles"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Réplica de Nike Store: E-commerce con React</h3>
            <p className="intro-text">
              Almudena Rendón Fernández te muestra cómo crear una réplica
              profesional de Nike Store con React, incluyendo carrito de
              compras, localStorage y formularios avanzados.
            </p>
          </div>
          <Link
            to="/recursos/react/nike-store-replica"
            className="secondary-button"
            aria-label="Leer más sobre la réplica de Nike Store con React"
          >
            Leer más
          </Link>
        </div>
      </div>

      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>CSS Grid: Domina el sistema de cuadrículas en tu página web</h3>
            <p className="intro-text">
              Aprende cómo usar CSS Grid para crear layouts modernos, flexibles
              y precisos en tus proyectos web.
            </p>
          </div>
          <Link
            to="/recursos/css/css-grid"
            className="secondary-button"
            aria-label="Leer más sobre CSS Grid: Domina el sistema de cuadrículas en tu página web"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Estrategias avanzadas: Combinando Grid y Flexbox en CSS</h3>
            <p className="intro-text">
              Domina el arte de crear layouts modernos combinando CSS Grid y
              Flexbox con ejemplos prácticos y estrategias clave.
            </p>
          </div>
          <Link
            to="/recursos/css/css-grid-flexbox"
            className="secondary-button"
            aria-label="Leer más sobre estrategias avanzadas combinando Grid y Flexbox"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Transiciones y Transformaciones CSS en 2D y 3D</h3>
            <p className="intro-text">
              Aprende a crear efectos visuales impactantes combinando
              transiciones CSS con transformaciones en 2D y 3D. Ideal para
              proyectos modernos y dinámicos.
            </p>
          </div>
          <Link
            to="/recursos/css/transiciones-transformaciones"
            className="secondary-button"
            aria-label="Leer más sobre Transiciones y Transformaciones CSS en 2D y 3D"
          >
            Leer más
          </Link>
        </div>
      </div>
       <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Domina las Animaciones CSS: De Básico a Avanzado</h3>
            <p className="intro-text">
              Aprende animaciones CSS desde keyframes básicos hasta técnicas avanzadas. 
              Incluye performance, accesibilidad y ejemplos reales con el proyecto 
              "Breathe" de mindfulness.
            </p>
          </div>
          <Link
            to="/recursos/css/animaciones-css"
            className="secondary-button"
            aria-label="Leer más sobre Domina las Animaciones CSS: De Básico a Avanzado"
          >
            Leer más
          </Link>
        </div>
      </div>
         <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>Responsive Design: De Principiante a Experta</h3>
            <p className="intro-text">
              Domina el responsive design desde conceptos básicos hasta técnicas 
              avanzadas. Comparación desktop-first vs mobile-first, breakpoints, 
              container queries y tipografía fluida con ejemplos del proyecto ResponsiveShowcase.
            </p>
          </div>
          <Link
            to="/recursos/css/responsive-design"
            className="secondary-button"
            aria-label="Leer más sobre Responsive Design: De Principiante a Experta"
          >
            Leer más
          </Link>
        </div>
      </div>
      <div className="recurso-item bg1">
 <div className="noticia-content">
   <div>
     <h3>Accesibilidad en CSS: Diseñando Experiencias Inclusivas</h3>
     <p className="intro-text">
       Aprende a crear CSS accesible con contrastes adecuados, tipografía inclusiva, 
       navegación por teclado y respeto por las preferencias del usuario. Guía completa 
       con ejemplos reales de sitios web y proyectos prácticos.
     </p>
   </div>
   <Link
     to="/recursos/css/accesibilidad-css"
     className="secondary-button"
     aria-label="Leer más sobre Accesibilidad en CSS: Diseñando Experiencias Inclusivas"
   >
     Leer más
   </Link>
 </div>
</div>
      <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>SASS: Lleva tu CSS al siguiente nivel</h3>
            <p className="intro-text">
              Domina SASS desde variables básicas hasta arquitectura 7-1 profesional. 
              Tutorial completo con proyecto interactivo FemPalette, comparación con CSS 
              Custom Properties y ejemplos reales para revolucionar tu flujo de trabajo.
            </p>
          </div>
          <Link
            to="/recursos/css/sass-next-level"
            className="secondary-button"
            aria-label="Leer más sobre SASS: Lleva tu CSS al siguiente nivel"
          >
            Leer más
          </Link>
        </div>
      </div>

       <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>🎯 Quiz HTML para Entrevistas Técnicas</h3>
            <p className="intro-text">
              Prepárate para entrevistas técnicas con 30 preguntas interactivas de HTML. 
              3 niveles de dificultad, explicaciones detalladas y feedback personalizado 
              para dominar los conceptos clave.
            </p>
          </div>
          <Link
            to="/recursos/html/quiz-html-entrevistas"
            className="secondary-button"
            aria-label="Hacer el Quiz HTML para Entrevistas Técnicas"
          >
            Hacer Quiz
          </Link>
        </div>
      </div>
        <div className="recurso-item bg1">
        <div className="noticia-content">
          <div>
            <h3>🎯 Quiz CSS para Entrevistas Técnicas</h3>
            <p className="intro-text">
              Prepárate para entrevistas técnicas con 30 preguntas interactivas de CSS. 
              Desde Box Model hasta CSS Grid, Custom Properties y Performance. 
              3 niveles de dificultad con explicaciones detalladas.
            </p>
          </div>
          <Link
            to="/recursos/css/quiz-css-entrevistas"
            className="secondary-button"
            aria-label="Hacer el Quiz CSS para Entrevistas Técnicas"
          >
            Hacer Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recursos;
