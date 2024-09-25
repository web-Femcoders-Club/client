import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Comment } from "../../../../../types/types";
import { getApprovedComments } from "../../../../../api/commentApi";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Helmet } from "react-helmet";

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
        <title>Introducción a HTML: La base de la web</title>
        <meta
          name="description"
          content="Conoce los fundamentos de HTML, su importancia y cómo se relaciona con CSS y JavaScript para crear páginas web modernas."
        />
        <meta
          name="keywords"
          content="HTML, programación, web, recursos, introducción"
        />
      </Helmet>
      <div className="post-image-container">
        <img
          src="/src/assets/Introduccion-HTML.png"
          alt="Introducción a HTML"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
        Introducción a HTML: La base de la web
      </h1>

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
            <BsTwitter className="social-icon" />
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
        <strong>HTML (HyperText Markup Language)</strong> es el lenguaje que da
        estructura a todas las páginas web. Es el esqueleto que define los
        elementos y el contenido de una página, permitiendo que navegadores como
        Chrome o Firefox lo interpreten y muestren la información de manera
        visual.
      </p>

      <div className="highlight-box">
        <h2>¿Qué es HTML y por qué es importante?</h2>
        <p>
          HTML es un lenguaje de marcado, cuyo propósito es organizar el
          contenido en la web. Los elementos HTML están formados por etiquetas
          que definen el tipo de contenido (texto, imágenes, enlaces) y su
          estructura (párrafos, encabezados, listas).
        </p>
      </div>

      <div className="code-box">
        <h3>Ejemplo básico de HTML:</h3>
        <pre className="code-block bg3">
          {`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página HTML</title>
  </head>
  <body>
    <h1>Bienvenidos a femCoders Club</h1>
    <p>Este es un ejemplo básico de HTML.</p>
    <a href="https://www.femcodersclub.com">Visita nuestra web</a>
  </body>
</html>`}
        </pre>
      </div>

      <div className="intro-text">
        <h2>
          Entendiendo más sobre el <code>&lt;head&gt;</code> de un documento
          HTML
        </h2>
        <p>
          El <code>&lt;head&gt;</code> de un documento HTML contiene información
          importante que no es visible en la página, pero es esencial para su
          correcto funcionamiento. Aquí te explicamos algunos de los elementos
          clave:
        </p>

        <h3>
          1. <code>charset="UTF-8"</code>
        </h3>
        <p>
          La metaetiqueta <code>charset="UTF-8"</code> especifica la
          codificación de caracteres que usará el navegador para mostrar
          correctamente el texto de la página web. UTF-8 es una codificación
          estándar que permite representar prácticamente todos los caracteres de
          los idiomas del mundo, incluidos símbolos, emojis, y más. Usar UTF-8
          asegura que tu página será legible correctamente en cualquier
          navegador y región.
        </p>

        <h3>
          2. <code>lang="es"</code>
        </h3>
        <p>
          El atributo <code>lang="es"</code> en la etiqueta{" "}
          <code>&lt;html&gt;</code> le indica al navegador y a los motores de
          búsqueda qué idioma predomina en la página. Esto es útil para la
          accesibilidad, ya que ayuda a los lectores de pantalla a pronunciar
          correctamente las palabras y también para el SEO, ya que los
          buscadores pueden indexar mejor tu contenido.
        </p>

        <h3>3. Metaetiquetas</h3>
        <p>
          Las metaetiquetas son elementos dentro del <code>&lt;head&gt;</code>{" "}
          que proporcionan metadatos sobre la página. Estos datos no se muestran
          en la página web, pero son importantes para los motores de búsqueda y
          redes sociales. Algunos ejemplos son:
        </p>
        <pre className="code-block bg3">
          <ul>
            <li>
              <code>
                &lt;meta name="description" content="Descripción de tu
                sitio"&gt;
              </code>{" "}
              – Proporciona una descripción de la página para los motores de
              búsqueda.
            </li>
            <li>
              <code>
                &lt;meta name="keywords" content="HTML, programación,
                tutorial"&gt;
              </code>{" "}
              – Lista de palabras clave para SEO.
            </li>
            <li>
              <code>&lt;meta name="author" content="Tu nombre"&gt;</code> –
              Especifica el autor de la página.
            </li>
          </ul>
        </pre>
        <h3>4. Favicon</h3>
        <p>
          El <strong>favicon</strong> es el pequeño icono que aparece en la
          pestaña del navegador cuando se abre tu página web. Este se puede
          agregar en el <code>&lt;head&gt;</code> usando el siguiente código:
        </p>
        <pre className="code-block bg3">
          {`<link rel="icon" href="/ruta/del/favicon.ico" type="image/x-icon">`}
        </pre>

        <h3>5. Incluir CSS y JavaScript</h3>
        <p>
          Dentro del <code>&lt;head&gt;</code>, también puedes incluir hojas de
          estilo CSS y archivos JavaScript que definan el diseño y
          comportamiento de tu sitio web. Aquí tienes un ejemplo:
        </p>
        <pre className="code-block bg3">
          {`<link rel="stylesheet" href="styles.css">
<script src="script.js" defer></script>`}
          <br /> <br />
          El atributo <code>defer</code> en la etiqueta{" "}
          <code>&lt;script&gt;</code> indica al navegador que el archivo
          JavaScript se debe cargar después de que se haya analizado el HTML.
          Esto ayuda a mejorar el rendimiento de la página, ya que el script no
          bloquea la renderización del contenido visible.
        </pre>

        <h3>6. Lo que viene en futuros posts</h3>
        <p>
          En este post hemos cubierto los conceptos básicos de HTML, pero hay
          mucho más que se puede agregar en el <code>&lt;head&gt;</code>. En
          futuros posts, exploraremos temas como:
        </p>

        <pre className="code-block bg3">
          <ul>
            <li>
              Cómo optimizar el <code>&lt;head&gt;</code> para mejorar la
              velocidad de carga del sitio.
            </li>
            <li>
              La importancia de los favicons, archivos robots.txt, y sitemaps.
            </li>
            <li>
              Incorporación de bibliotecas externas, como Google Fonts o
              frameworks de JavaScript.
            </li>
            <li>
              Optimización SEO avanzada utilizando metaetiquetas y datos
              estructurados.
            </li>
          </ul>
        </pre>
      </div>

      <div className="highlight-box">
        <h2>HTML, CSS y JavaScript: Trabajando juntos</h2>
        <p>
          <strong>HTML</strong> da la estructura a la página web, mientras que{" "}
          <strong>CSS</strong> se encarga del diseño y estilo (colores, fuentes,
          márgenes), y <strong>JavaScript</strong> añade interactividad
          (formularios dinámicos, botones, etc.). Estos tres lenguajes se
          complementan para crear sitios web completos y modernos.
        </p>
      </div>

      <div className="intro-text">
        <p>
          <strong>HTML</strong> es la piedra angular de cualquier página web. Al
          dominar sus conceptos básicos, estarás en camino a crear sitios web
          bien estructurados y accesibles. En los próximos posts,
          profundizaremos en <strong>CSS</strong> y <strong>JavaScript</strong>,
          herramientas que te permitirán transformar tu estructura HTML en una
          web moderna e interactiva.
        </p>
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
