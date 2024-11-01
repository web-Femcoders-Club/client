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

const ApisHtml: React.FC = () => {
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
      postId: "",
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
    <title>Guía Completa: APIs en HTML para Proyectos Web - femCoders Club</title>
    <meta 
      name="description" 
      content="Explora cómo integrar y aprovechar APIs en HTML para mejorar la funcionalidad de tus proyectos web. Aprende sobre Geolocalización, Web Storage, Canvas, WebRTC, y más. Una guía esencial para desarrolladoras de femCoders Club."
    />
    <meta 
      name="keywords" 
      content="HTML, APIs HTML, Geolocalización, Web Storage, Canvas, WebRTC, WebSockets, Desarrollo Web, Programación, femCoders Club"
    />
    <meta property="og:title" content="Guía Completa: APIs en HTML para Proyectos Web - femCoders Club" />
    <meta property="og:description" content="Descubre cómo las APIs en HTML pueden potenciar tus proyectos. Guía de Geolocalización, Canvas, y mucho más para desarrolladoras." />
    <meta property="og:image" content="/assets/html/Elementos-HTML-Clave.png" />
    <meta property="og:url" content={currentUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Guía Completa: APIs en HTML para Proyectos Web - femCoders Club" />
    <meta name="twitter:description" content="Guía para dominar APIs en HTML y mejorar tus proyectos con Geolocalización, Web Storage, Canvas y WebRTC." />
    <meta name="twitter:image" content="/assets/html/Elementos-HTML-Clave.png" />
  </Helmet>


      <div className="post-image-container">
        <img
          src="/assets/html/ApisHtml.png"
          alt="Elementos HTML Clave"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
      Introducción a las APIs en HTML: Potencia tus Proyectos Web
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
         <strong> Una API (Interfaz de Programación de Aplicaciones, por sus siglas en
          inglés) </strong>es un conjunto de herramientas y reglas que permite que dos
          aplicaciones o componentes de software se comuniquen entre sí. En
          otras palabras, las APIs facilitan la interacción entre diferentes
          sistemas o servicios, permitiendo que, por ejemplo, una página web
          pueda acceder a funciones avanzadas como la ubicación del usuario, el
          almacenamiento de datos en el navegador o la reproducción de contenido
          multimedia.
        </p>
      </div>

      <div className="highlight-box">
        <p>
          Dentro del entorno HTML, existen varias APIs que podemos utilizar
          directamente, o con la ayuda de JavaScript, para añadir
          funcionalidades avanzadas y mejorar la interactividad y experiencia de
          usuario en nuestras páginas web. Algunas de las APIs más útiles y
          comunes en HTML son:
        </p>

        <ul>
          <li>
            <span>Geolocalización:</span>
            <p>
              Permite obtener la ubicación del usuario, ideal para servicios de
              mapas o aplicaciones que requieren ubicaciones en tiempo real.
            </p>
          </li>
          <li>
            <span>Almacenamiento de datos:</span>
            <p>
              A través de elementos como <strong><code>&lt;canvas&gt;</code> y SVG, </strong>
               podemos crear animaciones y visualizaciones interactivas.
            </p>
          </li>
          <li>
            <span>Acceso a dispositivos:</span>
            <p>
              Ofrece acceso a dispositivos como la cámara y el micrófono, útil
              para aplicaciones de videollamadas o grabaciones.
            </p>
          </li>
          <li>
            <span>Integración con servicios externos:</span>
            <p>
              Permite conectar la página con aplicaciones externas, como redes
              sociales, servicios de mapas, etc., para acceder a sus datos o
              funcionalidades.
            </p>
          </li>
        </ul>
      </div>

      <div className="highlight-box">
      <h2>📍 Geolocalización: Acceso a la Ubicación del Usuario</h2>

        <p>
          La API de Geolocalización permite a las aplicaciones obtener la
          ubicación del usuario, ideal para servicios de mapas y recomendaciones
          basadas en la localización.
        </p>
        <pre className="code-block bg3">
          <code>
            {`
const latitudBarcelona = 41.3851;  // Latitud de Barcelona
const longitudBarcelona = 2.1734;  // Longitud de Barcelona

console.log("Latitud de Barcelona:", latitudBarcelona);
console.log("Longitud de Barcelona:", longitudBarcelona);
    `}
          </code>
        </pre>
        <p>
          En este ejemplo, se muestra la latitud y longitud de Barcelona, pero
          en una aplicación real, estos valores se obtendrían automáticamente
          del dispositivo del usuario.
        </p>
      </div>

      <div className="highlight-box">
      <h2>💾 Almacenamiento en el Navegador: Web Storage</h2>

        <p>
          La API de Web Storage permite almacenar datos localmente en el
          navegador mediante <span><code>localStorage</code> y{" "}
          <code>sessionStorage</code></span>, ideal para guardar configuraciones o
          preferencias del usuario.
        </p>
        <p>
          A continuación, te mostramos algunos consejos para utilizar{" "}
          <code>localStorage</code> de manera eficiente:
        </p>

        <ul>
          <li>
            <strong>Uso de claves descriptivas:</strong> Es recomendable
            utilizar nombres de claves claros y específicos para organizar mejor
            los datos. Por ejemplo:
            <pre className="code-block bg3">
              <code>
                {`
localStorage.setItem("femCodersClub_userName", "femCodersClubUser");
localStorage.setItem("femCodersClub_theme", "dark");
          `}
              </code>
            </pre>
          </li>

          <li>
            <strong>Eliminación de datos:</strong> Si necesitas borrar datos
            específicos, puedes usar{" "}
            <code>localStorage.removeItem("clave")</code>. Para borrar todos los
            datos almacenados en <code>localStorage</code>, puedes utilizar{" "}
            <code>localStorage.clear()</code>.
            <pre className="code-block bg3">
              <code>
                {`
// Eliminar un solo dato
localStorage.removeItem("femCodersClub_userName");

// Eliminar todos los datos
localStorage.clear();
          `}
              </code>
            </pre>
          </li>

          <li>
            <strong>Detección de cambios:</strong> Puedes utilizar eventos para
            detectar cualquier cambio en <code>localStorage</code>. Esto es útil
            cuando quieres sincronizar datos en tiempo real en distintas
            pestañas del navegador:
            <pre className="code-block bg3">
              <code>
                {`
window.addEventListener("storage", (event) => {
  if (event.key === "femCodersClub_theme") {
    console.log("El tema se ha cambiado a:", event.newValue);
  }
});
          `}
              </code>
            </pre>
          </li>
        </ul>

        <p>
          Con estos consejos, puedes optimizar el uso de{" "}
          <code>localStorage</code> para que tu aplicación sea más organizada y
          eficiente.
        </p>
      </div>

      <div className="highlight-box">
      <h2>🎨 Uso del Elemento Canvas para Crear Gráficos Dinámicos</h2>

        <p>
          El elemento <code>&lt;canvas&gt;</code> es una herramienta poderosa en
          HTML que permite generar gráficos, animaciones y visualizaciones
          interactivas mediante JavaScript. Es especialmente útil en
          aplicaciones que requieren gráficos dinámicos, como videojuegos,
          paneles de estadísticas y visualizaciones de datos.
        </p>
        <p>
          A continuación, te mostramos un ejemplo sencillo en el que se dibuja
          un círculo púrpura en un lienzo usando JavaScript:
        </p>
        <pre className="code-block bg3">
          <code>
            {`
<canvas id="miCanvas" width="200" height="200"></canvas>
<script>
  // Selecciona el elemento canvas del DOM y establece el contexto en 2D
  const canvas = document.getElementById("miCanvas");
  const ctx = canvas.getContext("2d");

  // Define el color y el estilo del círculo
  ctx.fillStyle = "purple";

  // Dibuja un círculo con la función arc()
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.fill();
</script>
      `}
          </code>
        </pre>
        <p>
          En este ejemplo, se obtiene el contexto de dibujo en 2D del elemento{" "}
          <code>&lt;canvas&gt;</code> mediante <code>getContext("2d")</code>.
          Luego, se define el color de relleno como púrpura y se utiliza el
          método <code>arc()</code> para dibujar un círculo en el centro del
          lienzo.
        </p>
        <p>
          Esta técnica es ideal para crear gráficos interactivos y es compatible
          con múltiples estilos y animaciones, permitiendo desarrollar
          visualizaciones dinámicas en tu aplicación web.
        </p>
      </div>

      <div className="highlight-box">
      <h2>💬 WebRTC y WebSockets para Comunicación en Tiempo Real</h2>

        <p>
          Las APIs WebRTC y WebSockets permiten la transmisión de datos en
          tiempo real en aplicaciones web, habilitando funciones como
          videollamadas, chats y otras interacciones en vivo sin necesidad de
          complementos externos. Sin embargo, es importante entender sus
          diferencias clave:
        </p>

        <ul>
          <li>
            <strong>WebRTC</strong>: Diseñado principalmente para comunicaciones{" "}
            <em>peer-to-peer</em> (P2P), WebRTC permite la transmisión de audio,
            video y datos directamente entre navegadores. Es ideal para
            videollamadas y aplicaciones en las que los usuarios se comunican
            directamente entre sí, sin necesidad de pasar por un servidor
            intermedio.
          </li>
          <li>
            <strong>WebSockets</strong>: Este protocolo está orientado a la
            comunicación bidireccional entre un cliente y un servidor, lo que
            permite mantener conexiones abiertas y enviar mensajes de un lado a
            otro en tiempo real. WebSockets es más adecuado para aplicaciones de
            mensajería en tiempo real y actualizaciones de datos en vivo, como
            chats de soporte o paneles de notificaciones.
          </li>
        </ul>

        <p>
          Es importante señalar que tanto WebRTC como WebSockets pueden resultar
          complejos de implementar, especialmente en aplicaciones de gran
          escala, debido a factores como el manejo de conexiones múltiples, la
          latencia y la seguridad.
        </p>

        <pre className="code-block bg3">
          <code>
            {`
const socket = new WebSocket("wss://mi-servidor.com/socket");

socket.onopen = () => {
  console.log("Conectado al servidor WebSocket");
  socket.send("¡Hola, servidor!");
};

socket.onmessage = (event) => {
  console.log("Mensaje del servidor:", event.data);
};
      `}
          </code>
        </pre>

        <p>
          En este ejemplo, se muestra cómo establecer una conexión con un
          servidor WebSocket y enviar/recibir mensajes en tiempo real. Al
          abrirse la conexión, el cliente envía un mensaje al servidor, y este
          escucha y muestra los mensajes recibidos.
        </p>
      </div>
<div className="highlight-box">
<h2>⚠️ Errores Comunes y Soluciones</h2>

  <p>Aquí te mostramos algunos errores comunes que pueden surgir al utilizar las APIs en HTML y cómo solucionarlos:</p>
  
  <ul>
    <li>
      <strong>Error de permisos en Geolocalización:</strong> En algunos navegadores, el usuario debe conceder permisos explícitos para acceder a su ubicación. Si la API no obtiene permisos, se disparará un error. Solución: Asegúrate de manejar el error en tu código y, si es posible, informa al usuario que debe conceder permisos.
      <pre className="code-block bg3">
        <code>
          {`
navigator.geolocation.getCurrentPosition(
  (position) => { /* Código para manejar la posición */ },
  (error) => {
    console.error("Permiso denegado o error en la geolocalización:", error);
  }
);
          `}
        </code>
      </pre>
    </li>

    <li>
      <strong>Almacenamiento excedido en Web Storage:</strong> Tanto <code>localStorage</code> como <code>sessionStorage</code> tienen límites de capacidad. Si intentas almacenar más datos de los permitidos, se producirá un error. Solución: Comprueba el tamaño de los datos y utiliza compresión si es necesario.
    </li>

    <li>
      <strong>Compatibilidad de WebRTC y WebSockets:</strong> No todos los navegadores admiten WebRTC o WebSockets de la misma manera, y en conexiones inestables podrían surgir problemas de latencia. Solución: Siempre verifica la compatibilidad del navegador y, si es posible, proporciona una alternativa o maneja los errores de conexión en tiempo real.
    </li>
  </ul>
</div>

<div className="highlight-box">
<h2>📚 Referencias y Enlaces Útiles</h2>

  <p>Para aquellas personas interesadas en profundizar en el uso de APIs en HTML, aquí te dejamos algunos enlaces a la documentación oficial y otros recursos:</p>
  
  <ul>
    <li>
      <strong>Geolocalización API: </strong> 
      <span><a href="https://developer.mozilla.org/es/docs/Web/API/Geolocation_API" target="_blank" rel="noopener noreferrer">
        Documentación en MDN
      </a></span>
    </li>
    <li>
      <strong>Web Storage API: </strong> 
     <span><a href="https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API" target="_blank" rel="noopener noreferrer">
        Documentación en MDN
      </a></span> 
    </li>
    <li>
      <strong>Canvas API: </strong> 
    <span> <a href="https://developer.mozilla.org/es/docs/Web/API/Canvas_API" target="_blank" rel="noopener noreferrer">
        Documentación en MDN
      </a></span> 
    </li>
    <li>
      <strong>WebRTC API: </strong> 
     <span> <a href="https://developer.mozilla.org/es/docs/Web/API/WebRTC_API" target="_blank" rel="noopener noreferrer">
        Documentación en MDN
      </a></span>
    </li>
    <li>
      <strong>WebSockets API: </strong> 
     <span> <a href="https://developer.mozilla.org/es/docs/Web/API/WebSockets_API" target="_blank" rel="noopener noreferrer">
        Documentación en MDN
      </a></span>
    </li>
  </ul>
  
  <p>Esperamos que estos recursos te ayuden a profundizar en el uso de las APIs y a aplicarlas exitosamente en tus proyectos web.</p>
<p>💬 Nos encantaría conocer tu opinión y escuchar tus experiencias usando estas APIs. ¡Deja tus comentarios abajo y comparte tus ideas con la comunidad de femCoders Club!</p>

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

export default ApisHtml;
