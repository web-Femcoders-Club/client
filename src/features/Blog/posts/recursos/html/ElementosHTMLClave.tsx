import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Comment } from "../../../../../types/types";
import { getApprovedComments } from "../../../../../api/commentApi";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaSlack, FaTiktok } from "react-icons/fa";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Helmet } from "react-helmet";
import "../../../page/PostStyles.css";

const ElementosHTMLClave: React.FC = () => {
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
      postId: "3",
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
          postId: 3,
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
        <title>
          Elementos HTML Clave: Encabezados, Párrafos, Enlaces e Imágenes
        </title>
        <meta
          name="description"
          content="Descubre cómo usar los encabezados, párrafos, enlaces, imágenes y más en HTML. Aprende la importancia del atributo alt y cómo usar emojis y videos en HTML."
        />
        <meta
          name="keywords"
          content="HTML, encabezados, párrafos, enlaces, imágenes, video, emojis"
        />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/public/assets/html/Elementos-HTML-Clave.png"
          alt="Elementos HTML Clave"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
        Elementos HTML Clave: Encabezados, Párrafos, Enlaces e Imágenes
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

      <div className="intro-text">
        <p>
          ¿Alguna vez te has preguntado cómo los encabezados organizan la
          información en una página o cómo se crean enlaces que llevan a otros
          sitios? En esta sección, exploraremos los elementos esenciales de HTML
          que te permitirán estructurar tu contenido de forma clara y efectiva.
          Además, aprenderás a añadir imágenes, videos y emojis para hacer tu
          página más atractiva y accesible. ¡Vamos a sumergirnos en el mundo de
          los elementos HTML clave!
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          1. Encabezados (<code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code>)
        </h2>
        <p>
          Comenzaremos por los encabezados (<code>&lt;h1&gt;</code> a{" "}
          <code>&lt;h6&gt;</code>), que sirven para organizar el contenido
          jerárquicamente. Los encabezados no solo hacen que tu página sea más
          fácil de leer, sino que también ayudan a los motores de búsqueda a
          entender el contenido de tu página.
        </p>
      </div>

      <div className="highlight-box">
        <h2>
          2. Párrafos (<code>&lt;p&gt;</code>) y otras etiquetas de texto
        </h2>
        <p>
          El elemento <code>&lt;p&gt;</code> define un párrafo. Para darle
          formato al texto dentro de un párrafo, podemos utilizar diferentes
          etiquetas:
        </p>

        <ul>
          <li>
            <strong>
              <code>&lt;strong&gt;</code>
            </strong>
            : Resalta texto importante, como palabras clave. Por ejemplo:{" "}
            <strong>Este es el texto más importante</strong>.
          </li>
          <li>
            <strong>
              <code>&lt;em&gt;</code>
            </strong>
            : Enfatiza una palabra o frase. Por ejemplo:{" "}
            <em>Este texto debe destacar</em>.
          </li>
          <li>
            <strong>
              <code>&lt;blockquote&gt;</code>
            </strong>
            : Cita un bloque de texto de otra fuente. Por ejemplo:
            <blockquote>
              "La mejor forma de aprender es haciendo." - Confucio
            </blockquote>
          </li>
          <li>
            <strong>
              <code>&lt;pre&gt;</code>
            </strong>
            : Muestra texto preformateado, ideal para código:
            <pre>
              function saludar(nombre) {"{"}
              console.log("Hola, " + nombre + "!");
              {"}"}
            </pre>
          </li>
          <li>
            <strong>
              <code>&lt;code&gt;</code>
            </strong>
            : Resalta fragmentos de código dentro de un párrafo. Por ejemplo:{" "}
            <br />
            Utiliza el método <code>console.log()</code> para mostrar mensajes
            en la consola.
          </li>
          <li>
            <strong>
              <code>&lt;mark&gt;</code>
            </strong>
            : Destaca texto, como en una búsqueda:{" "}
            <mark>Este texto ha sido encontrado en la búsqueda</mark>.
          </li>
          <li>
            <strong>
              <code>&lt;abbr&gt;</code>
            </strong>
            : Define una abreviatura: HTML significa{" "}
            <abbr title="HyperText Markup Language">
              HyperText Markup Language
            </abbr>
            .
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>
          3. Enlaces (<code>&lt;a&gt;</code>)
        </h2>
        <p>
          Los enlaces (<code>&lt;a&gt;</code>) son fundamentales para conectar
          diferentes páginas web. Aprenderás cómo crear enlaces internos y
          externos, y cómo utilizar atributos como target para controlar dónde
          se abre un enlace.
        </p>
        <pre className="code-block bg3">
          {`<a href="https://www.femcodersclub.com" target="_blank">Visita femCoders Club</a>`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>
          4. Imágenes (<code>&lt;img&gt;</code>) y la importancia del atributo{" "}
          <code>alt</code>
        </h2>
        <p>
          Las imágenes (<code>&lt;img&gt;</code>) añaden vida a tus páginas web.
          Descubrirás cómo insertar imágenes y la importancia del atributo alt
          para la accesibilidad. El atributo alt describe el contenido de la
          imagen para las personas que utilizan lectores de pantalla.
        </p>
        <pre className="code-block bg3">
          {`<img src="/FemCodersClubLogo.png" alt="Logo femCoders Club">`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>5. Usando Emojis en HTML</h2>
        <p>
          ¡Los emojis pueden hacer que tu página sea más atractiva y amigable!
          Puedes añadirlos directamente en el texto como cualquier otro
          carácter.
        </p>
        <p>
          ¿Sabías que los emojis tienen códigos específicos? Por ejemplo, el
          emoji de pulgar hacia arriba (👍) se representa como{" "}
          <code>&#128077;</code>. Aunque puedes copiar y pegar emojis
          directamente, conocer su código puede ser útil en ciertas situaciones.
        </p>
        <p>
          ¡Atención a la cultura! El significado de los emojis puede variar
          según el país o la región. Lo que en un lugar es un gesto positivo, en
          otro puede ser negativo. ¡Elige tus emojis con cuidado!
        </p>
        <pre className="code-block bg3">
          {`<p>🌟 ¡Aprender HTML es divertido y esencial! 💻🚀</p>`}
        </pre>

        <p>
          Aquí tienes algunos ejemplos de cómo puedes usar emojis en diferentes
          contextos:
        </p>
        <ul>
          <li>
            <strong>En listas de características:</strong>
          </li>
          <li>
            <pre className="code-block bg3">
              {`<ul>
  <li>💻 Curso de programación</li>
  <li>📚 Documentación completa</li>
  <li>🌍 Comunidad internacional</li>
</ul>`}
            </pre>
          </li>

          <li>
            <strong>En botones de acción:</strong>
          </li>
          <li>
            <pre className="code-block bg3">
              {`<button>📥 Descargar ahora</button>`}
            </pre>
          </li>

          <li>
            <strong>Para mejorar la accesibilidad:</strong>
          </li>
          <li>
            <p>
              Emojis pueden ser útiles para usuarios con lectores de pantalla.
              Asegúrate de incluir una descripción en texto alternativo para
              mejorar la accesibilidad. Por ejemplo:
            </p>
            <pre className="code-block bg3">
              {`<p><span role="img" aria-label="estrella">🌟</span> ¡Este es un contenido destacado!</p>`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>
          6. Videos en HTML (<code>&lt;video&gt;</code>)
        </h2>
        <p>
          El contenido multimedia es esencial hoy en día para captar la atención
          de tus visitantes. La etiqueta <code>&lt;video&gt;</code> te permite
          integrar videos en tu página web de manera sencilla. Asegúrate de que
          tus videos estén en un formato compatible como MP4, WebM o Ogg.
        </p>

        <p>
          Para agregar controles de reproducción (play, pause, volumen), utiliza
          el atributo <code>controls</code>:
        </p>

        <pre className="code-block bg3">
          {`<video controls>
  <source src="/VideoInicialComunidad.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta video.
</video>`}
        </pre>
      </div>
      <div className="highlight-box">
        <p>
          Aquí tienes un ejemplo de cómo puedes incrustar un video de YouTube:
        </p>

        <p>
          Además de cargar videos locales, también puedes incrustar videos de
          plataformas externas como YouTube o Vimeo usando un{" "}
          <span>iframe</span>.{" "}
          <p>
            Esto es especialmente útil si quieres compartir contenido de estas
            plataformas directamente en tu página web. Ejemplo de cómo incrustar
            un video de YouTube:
          </p>
        </p>
        <br />

        <pre className="code-block bg3">
          {`<iframe width="560" height="315"  
      src="https://www.youtube.com/embed/fluYWEn7d5g" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>`}
        </pre>

        <br />

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/fluYWEn7d5g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="highlight-box conclusion">
        <h2>Conclusión</h2>
        <p>
          Ahora que conoces los elementos clave de HTML, tienes una sólida base
          para estructurar y enriquecer cualquier página web. Encabezados,
          párrafos, enlaces, imágenes, videos y emojis te ayudarán a crear
          contenido accesible, atractivo y funcional para los usuarios.
        </p>
        <p>
          HTML no solo es la base del diseño web, sino que también juega un
          papel crucial en la accesibilidad y la optimización para motores de
          búsqueda (SEO). Comprender cómo usar estas etiquetas correctamente es
          fundamental para crear experiencias web de calidad.
        </p>
        <p>
          Recuerda que, como en cualquier aspecto de la programación, la
          práctica es clave. Experimenta con estos elementos, incrusta contenido
          multimedia, y no dudes en compartir tus descubrimientos con la
          comunidad. ¡Estamos emocionadas de ver lo que construirás!
        </p>
        <p>
          ¿Tienes alguna duda o te gustaría compartir algo? No olvides dejar un
          comentario o seguirnos en nuestras redes sociales para más contenido
          interesante.
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

export default ElementosHTMLClave;
