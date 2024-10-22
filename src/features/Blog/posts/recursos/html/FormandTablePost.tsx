import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../../page/PostStyles.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import CommentsSection from "../../../components/CommentsSection"; // Asegúrate de que la ruta sea correcta
import { Comment } from "../../../../../types/types"; // Asegúrate de que la ruta sea correcta
import { getApprovedComments } from "../../../../../api/commentApi"; // Asegúrate de que la ruta sea correcta

const currentUrl = window.location.href;

const FormAndTablePost: React.FC = () => {
  const [approvedComments, setApprovedComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const approved = await getApprovedComments();
        setApprovedComments(approved);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="blog-post">
      <Helmet>
        <title>Formularios y Tablas en HTML</title>
        <meta
          name="description"
          content="Aprende cómo estructurar formularios y tablas en HTML para mejorar la usabilidad y accesibilidad de tus páginas web."
        />
        <meta name="keywords" content="HTML, formularios, tablas" />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/html/ejemplo-layout.png"
          alt="Ejemplo de formularios y tablas en HTML"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">Formularios y Tablas en HTML (Parte 4)</h1>

      <div className="post-info">
        <span className="post-date">Publicado el 22/10/2024</span>
        <span className="post-author">Autor: Irina Ichim</span>
      </div>

      <div className="social-share">
        <div className="share-buttons">
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Facebook"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href={`https://www.instagram.com/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Instagram"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en LinkedIn"
          >
            <BsLinkedin className="social-icon" />
          </a>
          <a
            href={`https://twitter.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en Twitter"
          >
            <FaSquareXTwitter className="social-icon" />
          </a>
          <a
            href={`https://www.tiktok.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir este post en TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>

      <div className="intro-text">
        <p>
          En esta sección, exploraremos cómo estructurar formularios y tablas en HTML, lo que es fundamental para crear una experiencia de usuario efectiva en la web.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Introducción a los formularios</h2>
        <p>
          Los formularios son una parte esencial de cualquier página web que requiere la interacción del usuario. A continuación, discutiremos las etiquetas más comunes utilizadas en los formularios:
        </p>
        <ul>
          <li><code>&lt;form&gt;</code>: La etiqueta principal que agrupa todos los elementos del formulario.</li>
          <li><code>&lt;input&gt;</code>: Se utiliza para crear campos de entrada, con varios tipos como text, password, email, etc.</li>
          <li><code>&lt;label&gt;</code>: Se utiliza para etiquetar los elementos de entrada, mejorando la accesibilidad.</li>
          <li><code>&lt;button&gt;</code>: Se utiliza para crear botones dentro del formulario, como el de enviar.</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Construcción de tablas</h2>
        <p>
          Las tablas son útiles para presentar datos en filas y columnas. Aquí están las etiquetas clave para construir tablas en HTML:
        </p>
        <ul>
          <li><code>&lt;table&gt;</code>: La etiqueta principal que define una tabla.</li>
          <li><code>&lt;thead&gt;</code>: Agrupa el contenido del encabezado de la tabla.</li>
          <li><code>&lt;tbody&gt;</code>: Agrupa el cuerpo de la tabla.</li>
          <li><code>&lt;tr&gt;</code>: Define una fila en la tabla.</li>
          <li><code>&lt;td&gt;</code>: Define una celda en una fila.</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Casos de uso comunes de formularios y tablas</h2>
        <p>
          Los formularios y tablas se utilizan en diversas situaciones en la web, como:
        </p>
        <ul>
          <li>Formularios de registro de usuarios.</li>
          <li>Formularios de contacto y retroalimentación.</li>
          <li>Tablas de productos en un ecommerce.</li>
          <li>Listas de resultados de búsqueda.</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Ejemplo práctico de un formulario</h2>
        <pre className="code-block">
          {`<form action="/submit" method="POST">
  <label htmlFor="name">Nombre:</label>
  <input type="text" id="name" name="name" required />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <button type="submit">Enviar</button>
</form>`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>Ejemplo práctico de una tabla</h2>
        <pre className="code-block">
          {`<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
      <th>Disponibilidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Producto 1</td>
      <td>$10</td>
      <td>En stock</td>
    </tr>
    <tr>
      <td>Producto 2</td>
      <td>$15</td>
      <td>Agotado</td>
    </tr>
  </tbody>
</table>`}
        </pre>
      </div>

      <div className="highlight-box conclusion">
        <h2>Conclusión</h2>
        <p>
          La correcta estructuración de formularios y tablas en HTML es fundamental para mejorar la usabilidad y accesibilidad de las páginas web. Asegúrate de utilizar las etiquetas adecuadas para facilitar la navegación y la comprensión del contenido por parte de los usuarios.
        </p>
      </div>

      <CommentsSection approvedComments={approvedComments} />
    </div>
  );
};

export default FormAndTablePost;



