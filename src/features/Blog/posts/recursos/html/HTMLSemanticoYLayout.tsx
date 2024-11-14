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

const HTMLSemanticoYLayout: React.FC = () => {
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
      postId: "8",
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
          postId: 8,
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
        <title>HTML Semántico y Diseño de Layout</title>
        <meta
          name="description"
          content="Explora el HTML semántico, su importancia para la accesibilidad y SEO, y cómo estructurar layouts de manera efectiva."
        />
        <meta
          name="keywords"
          content="HTML, semántica, diseño, accesibilidad, SEO, layout"
        />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/html/ejemplo-layout.png"
          alt="Ejemplo de layout en HTML"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">HTML Semántico y Diseño de Layout</h1>

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
          El HTML semántico y el diseño de layouts son conceptos fundamentales
          en la creación de páginas web efectivas. En este post, exploraremos
          qué es un layout, la importancia del HTML semántico, y cómo estas
          prácticas se relacionan para mejorar la accesibilidad y la experiencia
          del usuario.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¿Qué es un layout🏗️?</h2>
        <p>
          Un layout es la organización de los elementos visuales en una página
          web, determinando cómo se presenta la información al usuario. Es
          decir, cómo se organizan los diferentes bloques de contenido (texto,
          imágenes, videos, etc.) en la pantalla.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¿Cómo se crea un layout en HTML?</h2>
        <p>
          Para crear un layout en HTML, se utilizan principalmente las
          siguientes etiquetas:
        </p>
        <ul>
          <li>
            <span>
              Etiquetas de división (<code>div</code>):
            </span>{" "}
            Son como contenedores que agrupan otros elementos. Puedes asignar
            estilos CSS a estas divisiones para controlar su tamaño, posición y
            apariencia.
          </li>
          <li>
            <span>Etiquetas semánticas:</span> Etiquetas como{" "}
            <strong>
              <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
              <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>,{" "}
              <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>{" "}
            </strong>{" "}
            proporcionan una estructura semántica a tu contenido, lo que
            facilita tanto a los navegadores como a los motores de búsqueda
            entender la organización de tu página.
          </li>
          <li>
            <span>
              Tablas (<code>table</code>):
            </span>{" "}
            Aunque menos utilizadas en diseños modernos, las tablas siguen
            siendo útiles para organizar datos en filas y columnas.
          </li>
          <li>
            <span>Flexbox y Grid:</span> Son modelos de diseño más modernos y
            flexibles que permiten crear layouts complejos de manera más
            sencilla.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Ejemplo de Layout en HTML</h2>

        <p>
          En este diagrama textual, puedes ver cómo se utilizan diferentes
          secciones semánticas para organizar el contenido de manera coherente y
          accesible.
        </p>

        <pre className="code-block bg3">
          {`+---------------------------------------+
|        <header>                       | 🏠  // Define la cabecera de un documento o sección
|        Header                         |
+---------------------------------------+
|        <nav>                          | 📜  // Define un conjunto de enlaces de navegación
|        Navigation                     |
+---------------------------------------+
|        <main>                         | 📝  // Define el contenido principal
| +-----------------------------------+ |
| |    <aside>                          | 🖼️  // Define contenido secundario relacionado
| |      Sidebar                      | |
| +-----------------------------------+ |
| |   <article>                         | 📄  // Define un contenido independiente y autocontenido
| |     Main Area                     | |
| |  <section>                          | 📚  // Define una sección temática
| |    <h2>Título</h2>                  |
| |    <p>Contenido...</p>              |
| |  </section>                       | |
| +-----------------------------------+ |
| +-----------------------------------+ |
| |  <details>                          | 🔍  // Detalles adicionales que el usuario puede abrir
| |<summary>Más información</summary>   |     // Título para el contenido oculto
| |   <p>Contenido adicional.</p>       |
| |  </details>                       | |
| +-----------------------------------+ |
+---------------------------------------+
|        <footer>                       | 📜  // Define un pie de página para el documento
|        Footer                         |
+---------------------------------------+
`}
        </pre>
      </div>

      <div className="highlight-box">
        <h2>HTML Semántico: ¿Por qué es importante🔍?</h2>
        <p>
          El HTML semántico es una práctica que consiste en utilizar las
          etiquetas de HTML de manera significativa, es decir, asignando un
          significado específico a cada elemento. Esto no solo facilita la
          comprensión del contenido por parte de los desarrolladores, sino que
          también mejora la accesibilidad y el SEO del sitio web. Un layout bien
          diseñado con etiquetas semánticas ayuda a los usuarios y a los motores
          de búsqueda a entender la estructura y el propósito de cada sección de
          la página.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Etiquetas semánticas importantes💡</h2>
        <ul>
          <li>
            <span>
              <code>&lt;header&gt;</code>{" "}
            </span>
            - Define la cabecera de un documento o sección. Suele contener el
            título principal, el logotipo, el menú de navegación principal y
            otros elementos de identificación de la página o sección.
            <pre className="code-block bg3">
              {`<header>
  <h1>Bienvenidos a mi blog</h1>
  <nav>
    <ul>
      <li><a href="#home">Inicio</a></li>
      <li><a href="#about">Sobre mí</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
</header>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;nav&gt;</code>{" "}
            </span>
            - Define un conjunto de enlaces de navegación. Se utiliza para
            agrupar los enlaces principales que permiten al usuario navegar
            entre las diferentes secciones de un sitio web, facilitando la
            orientación y mejorando la experiencia del usuario.
            <pre className="code-block bg3">
              {`<nav>
  <ul>
    <li><a href="#home">Inicio</a></li>
    <li><a href="#services">Servicios</a></li>
    <li><a href="#portfolio">Portafolio</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</nav>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;section&gt;</code>{" "}
            </span>
            - Define una sección en un documento. Se utiliza para agrupar
            contenido temático relacionado dentro de una página. Por ejemplo,
            una sección de noticias, una sección de productos, etc.
            <pre className="code-block bg3">
              {`<section>
  <h2>Últimas Noticias</h2>
  <article>
    <h3>Título de la noticia</h3>
    <p>Descripción de la noticia...</p>
  </article>
</section>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;article&gt;</code>{" "}
            </span>
            - Define un contenido independiente y autocontenido. Se emplea para
            encapsular contenido que podría ser distribuido o reutilizado por sí
            solo, como una entrada de blog, un artículo de noticias, un
            comentario, etc.
            <pre className="code-block bg3">
              {`<article>
  <h2>Cómo aprender a programar</h2>
  <p>La programación es una habilidad valiosa en el mundo digital actual...</p>
</article>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;aside&gt;</code>{" "}
            </span>
            - Define contenido secundario relacionado. Sirve para contener
            contenido complementario, como barras laterales, citas, cuadros
            informativos, etc.
            <pre className="code-block bg3">
              {`<aside>
  <h3>Citas Destacadas</h3>
  <p>"El único modo de hacer un gran trabajo es amar lo que haces." - Steve Jobs</p>
</aside>`}
            </pre>
          </li>
          <li>
            <span>
              <code>&lt;footer&gt;</code>
            </span>{" "}
            - Define un pie de página para un documento o sección. Suele
            contener información de copyright, enlaces a políticas de
            privacidad, mapas del sitio, etc.
            <pre className="code-block bg3">
              {`<footer>
  <p>&copy; 2024 Mi Blog. Todos los derechos reservados.</p>
  <a href="#privacy-policy">Política de privacidad</a>
</footer>`}
            </pre>
          </li>
          <li>
            <span>
              <code>&lt;details&gt;</code>{" "}
            </span>
            - Define detalles adicionales que el usuario puede abrir y cerrar.
            Permite ocultar contenido adicional que el usuario puede expandir si
            lo desea, como una descripción detallada de un producto, una
            transcripción de un video, etc.
            <pre className="code-block bg3">
              {`<details>
  <summary>Más información sobre el curso</summary>
  <p>Este curso te enseñará los fundamentos de la programación...</p>
</details>`}
            </pre>
          </li>
          <li>
            <span>
              {" "}
              <code>&lt;summary&gt;</code>{" "}
            </span>
            - Define un encabezado para el elemento <code>&lt;details&gt;</code>
            . Sirve como un título o etiqueta para el contenido oculto dentro
            del elemento <code>&lt;details&gt;</code>. Al hacer clic en el{" "}
            <code>&lt;summary&gt;</code>, el contenido se expande o contrae.
            <pre className="code-block bg3">
              {`<details>
  <summary>Contenido Adicional</summary>
  <p>Más información detallada...</p>
</details>`}
            </pre>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>¿Por qué son importantes las etiquetas semánticas?</h2>
        <p>
          <strong>Accesibilidad:</strong> Las etiquetas semánticas proporcionan
          información adicional sobre la estructura y el propósito de cada
          elemento en la página, lo que facilita la navegación y la comprensión
          del contenido para las personas con discapacidades visuales o
          cognitivas.
        </p>
        <p>
          <strong>SEO:</strong> Los motores de búsqueda utilizan la estructura
          semántica de una página para comprender mejor su contenido y
          relevancia. Utilizar etiquetas semánticas correctamente puede mejorar
          la clasificación de tu sitio web en los resultados de búsqueda.
        </p>
        <p>
          <strong>Mantenimiento:</strong> Un código bien estructurado y
          semántico es más fácil de mantener y actualizar en el futuro, ya que
          facilita la identificación y modificación de diferentes secciones de
          la página.
        </p>
        <p>
          <strong>Mejores Prácticas de Diseño Web:</strong> El uso de etiquetas
          semánticas fomenta una estructura web más organizada y coherente, lo
          que mejora la experiencia del usuario.
        </p>
        <p>
          <strong>Utilizar etiquetas semánticas</strong> no solo mejora la
          accesibilidad y SEO, sino que también facilita la creación de un
          layout limpio y organizado. Cada etiqueta tiene un propósito, lo que
          permite a los desarrolladores y navegadores entender mejor la
          estructura de la página.
        </p>
      </div>

      <div className="highlight-box">
        <h2> Conclusión🌟</h2>
        <p>
          En resumen, el uso de etiquetas semánticas en HTML no solo mejora la
          accesibilidad de tus páginas web, sino que también facilita la
          comprensión del contenido por parte de los motores de búsqueda. Al
          utilizar etiquetas como <code>&lt;header&gt;</code>,{" "}
          <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>,{" "}
          <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, y{" "}
          <code>&lt;footer&gt;</code>, estás construyendo una estructura lógica
          y fácil de seguir para los usuarios.
        </p>
        <p>
          Recuerda que el uso de etiquetas semánticas no es solo una buena
          práctica, sino que es esencial para crear experiencias de usuario
          efectivas y accesibles.
        </p>

        <h2>Referencias</h2>
        <p>
          Para profundizar en el HTML semántico y el diseño de layouts, aquí
          tienes algunos recursos útiles:
        </p>
        <ul>
          <li>
            <span>
              <a
                href="https://www.w3schools.com/html/html_layout.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3Schools: HTML Layouts
              </a>
            </span>
          </li>
          <li>
            <span>
              {" "}
              <a
                href="https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Web Docs: Introducción a HTML
              </a>
            </span>
          </li>
        </ul>
        <p>
          Nos encantaría conocer tus experiencias y preguntas sobre HTML
          semántico y diseño de layouts. ¿Has implementado etiquetas semánticas
          en tus proyectos? ¿Qué desafíos has encontrado? ¡Comparte tus
          pensamientos en los comentarios a continuación!
        </p>
      </div>
      <div className="author-info">
  <p>Escrito por: <strong>Irina Ichim</strong></p>
  <p>Co-fundadora de femCoders Club</p>
  <p>Fecha de publicación: <strong>{new Date().toLocaleDateString()}</strong></p>
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

export default HTMLSemanticoYLayout;
