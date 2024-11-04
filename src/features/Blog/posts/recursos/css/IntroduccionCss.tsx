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

const IntroduccionCSS: React.FC = () => {
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
      postId: "4",
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
          postId: 4,
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
        <title>¿Qué es CSS y por qué es esencial para el diseño web?</title>
        <meta
          name="description"
          content="Descubre qué es CSS, su importancia en el diseño web y cómo utilizarlo para estilizar tus páginas."
        />
        <meta
          name="keywords"
          content="CSS, diseño web, estilos, separación de contenido, tutorial CSS"
        />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/css/IntroduccionCss.png"
          alt="CSS Design"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
        ¿Qué es CSS y por qué es esencial para el diseño web?
      </h1>

      <div className="social-share">
        <div className="share-buttons">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Facebook"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href={`https://www.instagram.com/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Instagram"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en LinkedIn"
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
            aria-label="Compartir en TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>
        </div>
      </div>

      <div className="intro-text">
        <p>
          <strong> CSS (Cascading Style Sheets) </strong>es un lenguaje de
          estilo que se utiliza para describir la presentación de un documento
          escrito en HTML. A través de CSS, puedes definir colores, fuentes,
          márgenes y posiciones, lo que te permite dar vida a tus páginas web.
        </p>
        <p>
          Separar la estructura del contenido (HTML) del estilo (CSS) es
          fundamental para mantener un código limpio y facilitar el
          mantenimiento de tus proyectos.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Ejemplos básicos de CSS</h2>
        <p>
          Con CSS, puedes cambiar el color del texto, la fuente y el espacio
          entre elementos. Por ejemplo:
        </p>
        <pre className="code-block bg3">
          {`body {
  background-color: #f0f0f0;
  color: #333;
}

h1 {
  font-family: Arial, sans-serif;
  color: #4737bb;
  margin: 20px 0;
}

p {
  line-height: 1.6;
}`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>Primeros pasos: Inline, Internal y External CSS</h2>
        <p>Hay tres formas de aplicar CSS a un documento HTML:</p>
        <ul>
          <li>
            <span>Inline CSS:</span> Se aplica directamente en el elemento HTML
            utilizando el atributo <code>style</code>.
            <pre className="code-block bg3">
              {`<h1 style="color: blue;">Este es un título en azul</h1>`}
            </pre>
          </li>
          <li>
            <span>Internal CSS:</span> Se incluye en la sección{" "}
            <code>&lt;head&gt;</code> del HTML.
            <pre className="code-block bg3">
              {`<style>
h1 {
  color: blue;
}
</style>`}
            </pre>
          </li>
          <li>
            <span>External CSS:</span> Se enlaza a un archivo CSS externo.
            <pre className="code-block bg3">
              {`<link rel="stylesheet" href="styles.css">`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Uso de Selectores en CSS</h2>
        <p>
          En CSS, los selectores son fundamentales para aplicar estilos a
          elementos específicos. Aquí tienes un ejemplo de cómo aplicar un
          estilo a un párrafo:
        </p>
        <pre className="code-block bg3">
          {`p {
  color: red;
}`}
        </pre>
        <p>
          Si quieres aplicar un estilo a un elemento con una clase, debes
          utilizar el punto <code>.</code>
          antes del nombre de la clase. Por ejemplo:
        </p>
        <pre className="code-block bg3">
          {`.mi-clase {
  color: blue;
}`}
        </pre>
        <p>
          De manera similar, si deseas aplicar estilos a un elemento con un ID,
          debes utilizar el símbolo de almohadilla <code>#</code> antes del
          nombre del ID. Por ejemplo:
        </p>
        <pre className="code-block bg3">
          {`#mi-id {
  font-size: 20px;
}`}
        </pre>
        <p>
          Recuerda que el uso correcto de selectores es esencial para aplicar
          estilos de manera efectiva en tus documentos HTML. Utiliza selectores
          de clase para estilos que se aplican a múltiples elementos y
          selectores de ID para estilos únicos.
        </p>
      </div>

      <h3>Ejemplo práctico de cómo enlazar una hoja de CSS</h3>

      <pre className="code-block bg3">
        {`<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>Bienvenidas a femCoders Club</h1>
<p>En femCoders Club, apoyamos a las mujeres en la tecnología.</p>

</body>
</html>`}
      </pre>

      <div className="highlight-box">
        <h2>Comentarios en CSS</h2>
        <p>Puedes hacer comentarios en CSS utilizando el siguiente formato:</p>
        <pre className="code-block bg3">
          {`/* Este es un comentario en CSS */`}
        </pre>
        <p>
          Para quitar un comentario, puedes usar los atajos de teclado:
          <ul>
            <li>
              <span>Ctrl + K:</span> Agregar comentario.
            </li>
            <li>
              <span>Ctrl + K + U:</span> Para deshacer el comentario.
            </li>
          </ul>
        </p>
        <p>
          Sin embargo, es importante no dejar demasiados comentarios en tu
          código. Los comentarios excesivos pueden hacer que el código sea más
          difícil de leer y mantener. Utiliza los comentarios de manera efectiva
          para explicar partes complejas, pero evita la sobrecarga de
          información.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¡Explora el proyecto! 🚀</h2>
        <p className="intro-text">
          Para que entiendas mejor y para que puedas practicar, hemos creado un
          ejemplo básico. Visita el proyecto en:{" "}
          <span>
            <a
              href="https://femcodersclub.github.io/IntroduccionCSS/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
            >
              👉 GitHub Pages{" "}
            </a>
          </span>
          o accede al repositorio en
          <span>
            {" "}
            <a
              href="https://github.com/femcodersclub/IntroduccionCSS"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
            >
              👉 GitHub.
            </a>
          </span>
        </p>
      </div>

      <div className="highlight-box">
        <h2>Conclusión</h2>
        <p>
          En este post, hemos aprendido sobre los conceptos básicos de CSS y
          cómo aplicarlo a nuestros proyectos web. En futuros artículos,
          profundizaremos en técnicas más avanzadas y en el uso de CSS para
          crear diseños atractivos y responsivos. ¡Esperamos que te unas a
          nosotras en este viaje!
        </p>
      </div>
      <div className="author-info">
        <p>
          Escrito por: <strong>Irina Ichim</strong>
        </p>
        <p>Co-fundadora de femCoders Club</p>
        <p>
          Fecha de publicación:{" "}
          <strong>{new Date().toLocaleDateString()}</strong>
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
            className="comment-input"
          />
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Escribe tu comentario aquí..."
            required
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

      <div className="approved-comments">
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

export default IntroduccionCSS;
