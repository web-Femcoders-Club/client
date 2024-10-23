import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Comment } from "../../../../../types/types";
import { getApprovedComments } from "../../../../../api/commentApi";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Helmet } from "react-helmet";
import "../../../page/PostStyles.css";
import { FaSquareXTwitter } from "react-icons/fa6";

const IntroduccionHTML: React.FC = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [approvedComments, setApprovedComments] = useState<Comment[]>([]);
  const form = useRef<HTMLFormElement | null>(null);

  const currentUrl = window.location.href;

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

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) {
      throw new Error("El formulario no fue encontrado");
    }

    const serviceId = import.meta.env.VITE_API_SERVICE_ID;
    const templateId = import.meta.env.VITE_API_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_API_EMAILJS_KEY;

    const templateParams = {
      from_name: name,
      message: comment,
      to_name: "femCoders",
      postId: "2",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, apiKey);
      setSubmitted(true);
      setComment("");
      setName("");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: 2,
          content: comment,
          userEmail: "",
        }),
      });
      await response.json();
    } catch (error) {
      console.error("Error enviando comentario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-post">
      <Helmet>
        <title>Formularios y Tablas en HTML</title>
        <meta
          name="description"
          content="Aprende a estructurar formularios y tablas en HTML. Descubre etiquetas importantes y casos de uso comunes."
        />
        <meta
          name="keywords"
          content="HTML, formularios, tablas, estructura HTML, tablas en HTML, formularios en HTML"
        />
      </Helmet>
      <div className="post-image-container">
        <img
          src="/assets/html/Introduccion-HTML.png"
          alt="Introducción a HTML"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">Formularios y Tablas en HTML</h1>

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

      <p className="intro-text">
        En esta sección, exploraremos cómo estructurar formularios y tablas en
        HTML, lo que es fundamental para crear una experiencia de usuario
        efectiva en la web.
      </p>

      <div className="highlight-box">
        <h2>Introducción a los formularios</h2>
        <p>
          Los formularios son una parte esencial de cualquier página web que
          requiere la interacción del usuario. A continuación, discutiremos las
          etiquetas más comunes utilizadas en los formularios:
        </p>
        <ul>
          <li>
            <code>&lt;form&gt;</code>: La etiqueta principal que agrupa todos
            los elementos del formulario.
          </li>
          <li>
            <code>&lt;input&gt;</code>: Se utiliza para crear campos de entrada,
            con varios tipos como text, password, email, etc.
          </li>
          <li>
            <code>&lt;label&gt;</code>: Se utiliza para etiquetar los elementos
            de entrada, mejorando la accesibilidad.
          </li>
          <li>
            <code>&lt;button&gt;</code>: Se utiliza para crear botones dentro
            del formulario, como el de enviar.{" "}
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Construcción de tablas</h2>
        <p>
          Las tablas son útiles para presentar datos en filas y columnas. Aquí
          están las etiquetas clave para construir tablas en HTML:
        </p>
        <ul>
          <li>
            <code>&lt;table&gt;</code>: La etiqueta principal que define una
            tabla.
          </li>
          <li>
            <code>&lt;thead&gt;</code>: Agrupa el contenido del encabezado de la
            tabla.
          </li>
          <li>
            <code>&lt;tbody&gt;</code>: Agrupa el cuerpo de la tabla.
          </li>
          <li>
            <code>&lt;tr&gt;</code>: Define una fila en la tabla.
          </li>
          <li>
            <code>&lt;td&gt;</code>: Define una celda en una fila.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Casos de uso comunes de formularios y tablas</h2>
        <p>
          Los formularios y tablas se utilizan en diversas situaciones en la
          web, como:
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
        <pre className="code-block bg3">
          {`<form action="/submit" method="POST">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name" required />

   <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />
  <button type="submit">Enviar</button>
</form>`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>Ejemplo práctico de una tabla</h2>
        <pre className="code-block bg3">
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
          La correcta estructuración de formularios y tablas en HTML es
          fundamental para mejorar la usabilidad y accesibilidad de las páginas
          web. Asegúrate de utilizar las etiquetas adecuadas para facilitar la
          navegación y la comprensión del contenido por parte de los usuarios.
        </p>
      </div>

      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <div className="comments-section">
        <h3>¡Queremos saber de ti! 💬</h3>
        <form ref={form} onSubmit={handleSubmit} className="comment-form">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Tu nombre"
            required
            aria-label="Escribe tu nombre"
            aria-required="true"
            className="comment-input"
          />
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Escribe tu comentario aquí..."
            required
            aria-label="Escribe tu comentario"
            aria-required="true"
            className="comment-textarea"
          />
          <button type="submit" disabled={loading} className="comment-button">
            {loading ? "Enviando..." : "Enviar comentario"}
          </button>
        </form>
        {submitted && (
          <p className="success-message">
            Tu comentario ha sido enviado y está pendiente de moderación.
            ¡Gracias por participar!
          </p>
        )}
      </div>

      <div className="approved-comments" role="complementary">
        <h3>Lo que dicen nuestras lectoras 🌸</h3>
        <ul className="comments-list">
          {approvedComments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <strong>{comment.userEmail}</strong>
              <p>{comment.content}</p>
              <small>
                {format(new Date(comment.createdAt), "d 'de' MMMM 'de' yyyy", {
                  locale: es,
                })}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IntroduccionHTML;
