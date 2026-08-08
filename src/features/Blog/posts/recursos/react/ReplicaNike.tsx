import React from "react";
import { Helmet } from "react-helmet";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

import ShareButtons from "../../../components/ShareButtons";

const ReplicaNike: React.FC = () => {
  const publicationDate = "16 de marzo de 2025";

  return (
    <div className="blog-post">
      <Helmet>
        <title>Réplica de Nike Store con React: Un Proyecto E-commerce Completo | FemCoders Club</title>
        <meta
          name="description"
          content="Descubre cómo Almudena Rendón ha creado una impresionante réplica de Nike Store usando React, con carrito de compras, diseño responsivo y funcionalidades avanzadas."
        />
        <meta
          name="keywords"
          content="Nike Store, React, e-commerce, desarrollo web, carrito de compras, Almudena Rendón, useContext, useReducer, localStorage, responsive design, React Hook Form"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/recursos/react/nike-store-replica"
        />

        {/* Directivas para motores de búsqueda */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Irina Ichim" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Réplica de Nike Store con React: Un Proyecto E-commerce Completo | FemCoders Club" />
        <meta property="og:description" content="Descubre cómo Almudena Rendón ha creado una impresionante réplica de Nike Store usando React, con carrito de compras, diseño responsivo y funcionalidades avanzadas." />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/recursos/react/nike-store-replica"
        />
        <meta property="og:image" content="https://www.femcodersclub.com/assets/react/nike-store-replica.jpg" />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Réplica de Nike Store con React: Un Proyecto E-commerce Completo" />
        <meta name="twitter:description" content="Proyecto e-commerce completo con React, carrito de compras, diseño responsivo y funcionalidades avanzadas por Almudena Rendón." />
        <meta name="twitter:image" content="https://www.femcodersclub.com/assets/react/nike-store-replica.jpg" />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-03-16T12:00:00Z"
        />
        <meta property="article:author" content="Irina Ichim" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="React" />
        <meta property="article:tag" content="E-commerce" />
        <meta property="article:tag" content="Nike Store" />
        <meta property="article:tag" content="JavaScript" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/react/nike-store-replica.jpg"
          alt="Réplica de Nike Store desarrollada con React por Almudena Rendón"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
        Réplica de Nike Store con React: Un Proyecto E-commerce Completo
      </h1>

      <ShareButtons path="/recursos/react/nike-store-replica" title="Réplica de Nike Store con React: Un Proyecto E-commerce Completo" />

      <div className="intro-text">
        <p>
          ¡Estamos emocionadas de presentar un impresionante proyecto que han compartido con nuestra comunidad! <span><a href="https://www.linkedin.com/in/almudena-rendon-fernandez/" target="_blank" rel="noopener noreferrer" className="underline">Almudena Rendón Fernández</a></span>, Software Developer y Top 10 Women in IT & Tech LinkedIn Spain, ha desarrollado una increíble réplica de la Nike Store utilizando tecnologías modernas de desarrollo web. Este proyecto es un excelente ejemplo de las capacidades de React para crear experiencias de e-commerce completas y profesionales.
        </p>
      </div>

      <div className="highlight-box">
        <h2>👟 Réplica de Nike Store: Demo y Características</h2>
        <p>
          Almudena ha compartido con nuestra comunidad FemCoders Club su proyecto de réplica de Nike Store, una tienda online con todas las funcionalidades esenciales de un e-commerce moderno. Puedes ver la demo en vivo aquí: <a href="https://lnkd.in/dHytgcnB" target="_blank" rel="noopener noreferrer" className="underline font-medium">Ver Demo</a>
        </p>
      </div>
<div className="highlight-box">
      <h2>Características Principales del Proyecto:</h2>
      <br />
      <h3>1️⃣ Diseño cuidado y responsivo</h3>
      < br/>
      <ul>
        <li>Diseño realizado por Almudena inspirado en la Nike Store oficial</li>
        <li>Elección meticulosa de paleta de colores y diseño de la web</li>
        <li>Selección cuidadosa de imágenes y vídeos</li>
        <li>Creación de imágenes de zapatillas con herramientas de IA de Freepik</li>
        <li>Diseño totalmente responsivo que se adapta a todo tipo de pantallas</li>
      </ul>

      <h3>2️⃣ Stack Tecnológico Moderno</h3>
        <br />
      <ul className="styled-list">
        <li>Vite como build tool para un desarrollo rápido y eficiente</li>
        <li>React para la construcción de interfaces de usuario</li>
        <li>JavaScript como lenguaje principal</li>
        <li>CSS para estilos personalizados</li>
        <li>React Hot Toast para notificaciones elegantes</li>
        <li>Axios para peticiones HTTP</li>
        <li>React Scroll para navegación fluida</li>
        <li>React Hook Form para gestión avanzada de formularios</li>
        <li>Node.js y Nodemailer para funcionalidad de backend</li>
      </ul>

      <div className="code-example-box">
        <h3>3️⃣ Carrito de compra con persistencia de datos</h3>
        <br />
        <p>El proyecto implementa un sistema de carrito de compras completo con las siguientes características:</p>
        <br />
        <ul className="styled-list">
          <li><strong>CreateContext:</strong> Para crear un contexto que permite compartir el estado del carrito en toda la aplicación</li>
          <li><strong>useReducer:</strong> Para manejar el estado del carrito al que se pueden añadir o eliminar elementos</li>
          <li><strong>useEffect:</strong> Para sincronizar el carrito con localStorage, de modo que los datos persistan guardados aunque el usuario cierre la página</li>
        </ul>
      </div>

      <div className="code-example-box">
        <h3>4️⃣ Gestión avanzada de formularios</h3>
        <br />
        <p>El manejo de formularios utiliza react-hook-form con las siguientes ventajas:</p>
        <br />
        <ul className="styled-list">
          <li>Manejo de los inputs de forma controlada y validación en tiempo real</li>
          <li>No permite avanzar en el formulario a menos que el usuario haya rellenado todos los campos requeridos</li>
          <li>Reset de valores una vez el usuario cierra el formulario</li>
        </ul>
      </div>

      <div className="code-example-box">
        <h3>5️⃣ Sistema de envío de email al realizar pedidos</h3>
    <br />
        <p>Cuando el usuario finaliza su compra:</p>
        <br />
        <ul className="styled-list">
          <li>Se envían los datos del pedido a la API</li>
          <li>El usuario recibe un correo electrónico con su nombre y los detalles completos del pedido</li>
        </ul>
      </div>
</div>
<div className="highlight-box">
        <h2>🎯 Conclusión</h2>
        <p>
          El proyecto de Almudena es un excelente ejemplo de cómo se puede crear una experiencia de e-commerce completa utilizando tecnologías web modernas. La atención al detalle en el diseño, combinada con la implementación de funcionalidades avanzadas como la persistencia de datos y la validación de formularios, demuestra un nivel profesional de desarrollo frontend.
        </p>
        <p>
          Agradecemos enormemente a Almudena por compartir este valioso recurso con femCoders Club. Su trabajo inspira a otras mujeres desarrolladoras a crear proyectos ambiciosos y de alta calidad.
        </p>
        
        <div className="resource-links mt-4">
          <p>
            <strong>Recursos disponibles:</strong>
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>
              🔗 <a href="/presentaciones-destacadas" className="text-blue-600 hover:text-blue-800 font-medium">Descarga el proyecto completo</a> en nuestra sección de Presentaciones Destacadas
            </li>
            <li>
              👩‍💻 Conéctate con <a href="https://www.linkedin.com/in/almudena-rendon-fernandez/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Almudena en LinkedIn</a> para seguir su trabajo
            </li>
          </ul>
        </div>

        <h3 className="mt-6">💜 Forma parte de nuestra comunidad</h3>
        <br />
        <p>
          En <strong>FemCoders Club</strong>, creemos en el aprendizaje
          colaborativo y en el crecimiento conjunto. Invitamos a todas las mujeres interesadas en tecnología a unirse a nuestra comunidad donde compartimos recursos, experiencias y oportunidades de crecimiento profesional.
        </p>
        <p className="mt-2">
          Visítanos en{" "}
          <a
            href="https://www.femcodersclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            FemCoders Club
          </a>{" "}
          y síguenos en nuestras redes sociales para estar al día de nuestras actividades y recursos.
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de femCoders Club</p>
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <CommentsSection postId={15} />
    </div>
  );
};

export default ReplicaNike;