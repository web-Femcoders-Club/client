import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Download, Linkedin } from "lucide-react";
import PlantillaPost from "../../../components/post/PlantillaPost";
import { SeccionPost, TarjetasPost } from "../../../components/post/PiezasPost";

const ReplicaNike: React.FC = () => (
  <>
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

    <PlantillaPost
      ruta="/recursos/react/nike-store-replica"
      titulo="Réplica de Nike Store con React: un proyecto e-commerce completo"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={15}
      entradilla={
        <p>
          ¡Estamos emocionadas de presentar un proyecto que han compartido con
          nuestra comunidad!{" "}
          <a
            href="https://www.linkedin.com/in/almudena-rendon-fernandez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Almudena Rendón Fernández
          </a>
          , Software Developer y Top 10 Women in IT &amp; Tech LinkedIn Spain,
          ha desarrollado una réplica de la Nike Store con tecnologías modernas
          de desarrollo web. Es un excelente ejemplo de lo que React permite
          hacer para crear experiencias de e-commerce completas y
          profesionales.
        </p>
      }
    >
      <SeccionPost titulo="Réplica de Nike Store: demo y características">
        <p>
          Almudena ha compartido con FemCoders Club su réplica de Nike Store,
          una tienda online con todas las funcionalidades esenciales de un
          e-commerce moderno. Puedes{" "}
          <a href="https://lnkd.in/dHytgcnB" target="_blank" rel="noopener noreferrer">
            ver la demo en vivo
          </a>
          .
        </p>
      </SeccionPost>

      <SeccionPost titulo="Características principales del proyecto">
        <h3>1. Diseño cuidado y adaptable</h3>
        <ul>
          <li>Diseño de Almudena, inspirado en la Nike Store oficial.</li>
          <li>Elección meticulosa de la paleta de colores y del diseño de la web.</li>
          <li>Selección cuidadosa de imágenes y vídeos.</li>
          <li>Imágenes de zapatillas creadas con las herramientas de IA de Freepik.</li>
          <li>Diseño totalmente adaptable a todo tipo de pantallas.</li>
        </ul>

        <h3>2. Stack tecnológico moderno</h3>
        <ul>
          <li>Vite como herramienta de build, para un desarrollo rápido y eficiente.</li>
          <li>React para construir la interfaz.</li>
          <li>JavaScript como lenguaje principal.</li>
          <li>CSS para los estilos personalizados.</li>
          <li>React Hot Toast para las notificaciones.</li>
          <li>Axios para las peticiones HTTP.</li>
          <li>React Scroll para la navegación fluida.</li>
          <li>React Hook Form para la gestión de formularios.</li>
          <li>Node.js y Nodemailer para el backend.</li>
        </ul>

        <h3>3. Carrito de compra con persistencia de datos</h3>
        <p>El carrito se apoya en tres piezas de React:</p>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "createContext",
              texto: "Crea un contexto para compartir el estado del carrito en toda la aplicación.",
            },
            {
              titulo: "useReducer",
              texto: "Gestiona el estado del carrito: añadir y eliminar productos.",
            },
            {
              titulo: "useEffect",
              texto: "Sincroniza el carrito con localStorage, para que no se pierda aunque cierres la página.",
            },
          ]}
        />

        <h3>4. Gestión avanzada de formularios</h3>
        <p>Los formularios usan react-hook-form, que permite:</p>
        <ul>
          <li>Manejar los inputs de forma controlada y validarlos en tiempo real.</li>
          <li>No avanzar en el formulario hasta rellenar todos los campos obligatorios.</li>
          <li>Reiniciar los valores al cerrar el formulario.</li>
        </ul>

        <h3>5. Correo de confirmación al hacer un pedido</h3>
        <p>Cuando alguien finaliza su compra:</p>
        <ul>
          <li>Los datos del pedido se envían a la API.</li>
          <li>Recibe un correo con su nombre y todos los detalles del pedido.</li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Conclusión">
        <p>
          El proyecto de Almudena es un excelente ejemplo de cómo crear una
          experiencia de e-commerce completa con tecnologías web modernas. La
          atención al detalle en el diseño, junto con funcionalidades como la
          persistencia de datos y la validación de formularios, demuestra un
          nivel profesional de desarrollo frontend.
        </p>
        <p>
          Agradecemos enormemente a Almudena que comparta este recurso con
          FemCoders Club. Su trabajo inspira a otras mujeres desarrolladoras a
          crear proyectos ambiciosos y de calidad.
        </p>
        <TarjetasPost
          titulo="Recursos disponibles"
          tarjetas={[
            {
              titulo: "Descarga el proyecto completo",
              texto: "En nuestra sección de Presentaciones destacadas.",
              enlace: "/presentaciones-destacadas",
              icono: <Download aria-hidden="true" />,
            },
            {
              titulo: "Almudena en LinkedIn",
              texto: "Conecta con ella para seguir su trabajo.",
              enlace: "https://www.linkedin.com/in/almudena-rendon-fernandez/",
              icono: <Linkedin aria-hidden="true" />,
            },
          ]}
        />

        <h3>Forma parte de nuestra comunidad</h3>
        <p>
          En <strong>FemCoders Club</strong> creemos en el aprendizaje
          colaborativo y en crecer juntas. Invitamos a todas las mujeres
          interesadas en la tecnología a unirse a una comunidad donde
          compartimos recursos, experiencias y oportunidades de crecimiento
          profesional.
        </p>
        <p>
          <Link to="/register" className="fc-boton">
            Únete a la comunidad
          </Link>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ReplicaNike;
