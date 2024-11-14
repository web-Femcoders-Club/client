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

const HtmlAvanzado: React.FC = () => {
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
      postId: "6",
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
        <title>HTML Avanzado para SEO y Accesibilidad | femCoders Club</title>
        <meta
          name="description"
          content="Descubre cómo optimizar tu página web para SEO y accesibilidad utilizando HTML avanzado. Aprende sobre microdatos, RDFa, atributos ARIA y Lazy Loading para crear una web más inclusiva y eficiente."
        />
        <meta
          name="keywords"
          content="HTML avanzado, SEO, Accesibilidad, Microdatos, RDFa, Atributos ARIA, Lazy Loading, Desarrollo Web, femCoders Club, Web Components, WebAssembly, Mejores prácticas"
        />
        <meta
          property="og:title"
          content="HTML Avanzado para SEO y Accesibilidad | femCoders Club"
        />
        <meta
          property="og:description"
          content="Optimiza el SEO y la accesibilidad de tu web con HTML avanzado. Aprende sobre microdatos, RDFa, ARIA y técnicas de Lazy Loading."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="/assets/html/Introduccion-HTML.png"
        />
        <meta property="og:site_name" content="femCoders Club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HTML Avanzado para SEO y Accesibilidad | femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Explora técnicas avanzadas de HTML para mejorar el SEO y la accesibilidad de tu web. Aprende sobre microdatos, RDFa, ARIA y Lazy Loading."
        />
        <meta
          name="twitter:image"
          content="/assets/html/Introduccion-HTML.png"
        />
      </Helmet>
      <div className="post-image-container">
        <img
          src="/assets/html/Html-Accesibilidad-SEO.jpg"
          alt="HTML Avanzado para SEO y Accesibilidad"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">
        HTML Avanzado para SEO y Accesibilidad
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

      <p className="intro-text">
        ¿Quieres que tu página web destaque en los motores de búsqueda y sea
        accesible para todos los usuarios? En este post, te guiaremos a través
        de conceptos avanzados de HTML que te permitirán optimizar tu sitio web
        para SEO y accesibilidad. Aprenderás a utilizar microdatos estructurados
        como <strong>Schema.org </strong>para mejorar el posicionamiento de tu
        contenido, implementar <strong>atributos ARIA </strong>para hacer tu
        sitio más inclusivo, y optimizar el rendimiento de tu página con
        técnicas como <strong>Lazy Loading.</strong> <br />
        Descubre cómo estructurar tu código HTML de manera eficiente y efectiva
        para obtener mejores resultados. ¡Comencemos a construir sitios web más
        inteligentes y accesibles!
      </p>

      <div className="highlight-box">
        <h2>Microdatos y RDFa: Datos Estructurados para SEO 📊</h2>

        <p>
          Los <strong>microdatos</strong> y <strong>RDFa</strong> son como un
          "currículum" para tu contenido en línea. Al agregar datos
          estructurados a tu HTML, ayudas a los motores de búsqueda a comprender
          mejor tu página y a mostrarla de manera más atractiva en los
          resultados de búsqueda. Esto se traduce en un aumento de la tasa de
          clics y en una mejor posición en los rankings.
        </p>
        <p>
          Por ejemplo, si tienes una tienda en línea, puedes usar microdatos
          para especificar el precio, la disponibilidad y las reseñas de tus
          productos. Esto no solo mejora la visibilidad de tu tienda, sino que
          también facilita que los usuarios encuentren lo que buscan y tomen
          decisiones de compra más informadas.
        </p>
        <p>
          Además de los motores de búsqueda, los asistentes virtuales como
          Google Assistant y Siri utilizan los microdatos para proporcionar
          respuestas más precisas y relevantes a las preguntas de los usuarios.
        </p>
        <pre className="code-block bg3">
          {`<article itemscope itemtype="http://schema.org/Article">
  <h2 itemprop="headline">Cómo implementar Microdatos en HTML</h2>
  <p itemprop="author">Escrito por Maria Fernandez</p>
  <p itemprop="datePublished">2024-10-18</p>
</article>`}
        </pre>
        <p>
          ¿Quieres saber más? Visita la{" "}
          <strong>
            <a
              href="https://schema.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentación oficial de Schema.org
            </a>{" "}
          </strong>
          para explorar todas las posibilidades que ofrecen los microdatos.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Atributos ARIA para Mejorar la Accesibilidad♿️</h2>
        <p>
          Los{" "}
          <strong>
            atributos ARIA (Accessible Rich Internet Applications)
          </strong>{" "}
          se utilizan para hacer que las aplicaciones web sean más accesibles
          para las personas con discapacidades. Añaden descripciones adicionales
          a los elementos HTML para mejorar la interacción de los usuarios que
          usan lectores de pantalla, permitiendo que todos los usuarios tengan
          una experiencia más completa y equitativa.
        </p>
        <p>
          Por ejemplo, puedes usar
          <span>
            {" "}
            <code>aria-label</code>{" "}
          </span>
          para proporcionar una descripción a un botón que no tiene texto
          visible, o{" "}
          <span>
            <code>role</code>{" "}
          </span>
          para definir el propósito de un elemento, de manera que los usuarios
          que utilizan tecnologías de asistencia puedan entender mejor su
          función.
        </p>
        <pre className="code-block bg3">
          {`<button aria-label="Cerrar ventana">
  <svg aria-hidden="true" ...> <!-- Icono de cerrar -->
  </svg>
</button>`}
        </pre>
        <p>
          En el ejemplo anterior, el atributo{" "}
          <strong>
            <code>aria-label</code>
          </strong>{" "}
          se utiliza para proporcionar una descripción del botón, mientras que
          el atributo{" "}
          <strong>
            {" "}
            <code>aria-hidden="true"</code>
          </strong>{" "}
          asegura que el icono SVG no sea leído por el lector de pantalla,
          evitando información redundante.
        </p>
        <p>
          Otro ejemplo es el
          <strong>
            {" "}
            uso de <code>role</code> para definir el propósito de un contenedor
            como un <code>dialog</code> o un <code>alert</code>.
          </strong>{" "}
          <br />
          Esto ayuda a los lectores de pantalla a proporcionar a los usuarios
          una descripción más precisa del contenido.
        </p>
        <pre className="code-block bg3">
          {`<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description">
  <h2 id="dialog-title">Confirmación de Eliminación</h2>
  <p id="dialog-description">¿Estás segura de que deseas eliminar este elemento?</p>
</div>`}
        </pre>
        <p>
          En este ejemplo, el uso del atributo <code>role="dialog"</code> junto
          con <code>aria-labelledby</code> y <code>aria-describedby</code> ayuda
          a los usuarios de lectores de pantalla a entender claramente el
          propósito y el contenido del diálogo.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Implementación de Lazy Loading para Optimizar el Rendimiento 🚀</h2>
        <p>
          La <strong>carga diferida (Lazy Loading)</strong> es una técnica que
          revoluciona la forma en que cargamos los recursos de nuestras páginas
          web. En lugar de cargar todas las imágenes, videos y otros elementos
          al mismo tiempo, el Lazy Loading retrasa su carga hasta que son
          necesarios, es decir, cuando están a punto de entrar en la vista del
          usuario.
        </p>
        <p>¿Por qué es importante el Lazy Loading?</p>
        <ul>
          <li>
            <strong>Mayor velocidad de carga:</strong> Reduce significativamente
            el tiempo que tarda una página en cargarse, mejorando la experiencia
            del usuario.
          </li>
          <li>
            <strong>Menor consumo de datos:</strong> Ahorra ancho de banda,
            especialmente en dispositivos móviles.
          </li>
          <li>
            <strong>Mejor SEO:</strong> Los motores de búsqueda valoran la
            velocidad de carga de las páginas, por lo que el Lazy Loading puede
            contribuir a mejorar tu posicionamiento.
          </li>
        </ul>
        <p>
          Implementación sencilla:
          <br />
          Para implementar Lazy Loading en imágenes, simplemente añade el
          atributo <code>loading="lazy"</code> a tus etiquetas{" "}
          <code>&lt;img&gt;</code>:
        </p>
        <pre className="code-block bg3">
          {`<img src="imagen-ejemplo.jpg" alt="Ejemplo de lazy loading" loading="lazy" />`}
        </pre>
        <p>
          Esto asegura que la imagen solo se cargue cuando el usuario esté cerca
          de verla, lo que mejora tanto la experiencia como el rendimiento de tu
          página.
        </p>
        <p>¿Qué más puedes hacer?</p>
        <ul>
          <li>
            <strong>Lazy Loading para otros elementos:</strong> Aplica el Lazy
            Loading a iframes, videos y scripts para optimizar aún más la carga
            de tu página.
          </li>
          <li>
            <strong>Librerías y frameworks:</strong> Utiliza librerías como{" "}
            <a
              href="https://github.com/aFarkas/lazysizes"
              target="_blank"
              rel="noopener noreferrer"
            >
              lazysizes
            </a>{" "}
            para facilitar la implementación de Lazy Loading de manera más
            personalizada y sin complicaciones.
          </li>
          <li>
            <strong>Intersection Observer:</strong> Personaliza el
            comportamiento del Lazy Loading con la API de{" "}
            <a
              href="https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intersection Observer
            </a>{" "}
            de JavaScript, permitiendo tener un mayor control sobre cuándo y
            cómo se cargan los recursos.
          </li>
        </ul>
      </div>
      <div className="highlight-box">
        {" "}
        <h2>Accesibilidad en Formularios: Mejores Prácticas y Ejemplos 📝♿</h2>
{" "}
        <p>
          {" "}
          Los formularios son uno de los puntos de interacción más importantes
          entre los usuarios y una página web. Por ello, hacer que sean
          accesibles es crucial para garantizar que todas las personas,
          incluidas aquellas con discapacidades, puedan utilizarlos sin
          problemas. A continuación, exploraremos algunas mejores prácticas para
          lograr formularios accesibles utilizando atributos ARIA y otros
          métodos.{" "}
        </p>{" "}
        <h3>Importancia de los Formularios Accesibles</h3>{" "}
        <p>
          {" "}
          Para muchas personas, los formularios son la puerta de entrada a
          servicios, compras y comunicación en línea. Si no son accesibles,
          pueden ser una barrera significativa para los usuarios con
          discapacidades. Asegurarse de que los formularios sean accesibles
          ayuda a incluir a todos los usuarios, independientemente de sus
          capacidades.{" "}
        </p>{" "}
        <h3>Mejores Prácticas para Formularios Accesibles</h3>{" "}
        <p>
          {" "}
          Los atributos <strong>ARIA</strong> (Accessible Rich Internet
          Applications) permiten mejorar la accesibilidad de los formularios.
          Aquí algunos de los más útiles:{" "}
        </p>{" "}
        <ul>
          {" "}
          <li>
            <strong>aria-required</strong>: Indica que un campo es obligatorio.
          </li>{" "}
          <li>
            <strong>aria-invalid</strong>: Señala que un campo contiene un valor
            incorrecto.
          </li>{" "}
          <li>
            <strong>aria-describedby</strong>: Proporciona información adicional
            sobre el campo, como un mensaje de error o descripción.
          </li>{" "}
        </ul>{" "}
        <h3>Ejemplos de Implementación</h3>{" "}
        <p>
          Veamos algunos ejemplos de cómo utilizar estos atributos para mejorar
          la accesibilidad de nuestros formularios:
        </p>{" "}
        <pre className="code-block bg3">
          {" "}
          {`<form> <label for="nombre">Nombre:</label> <input type="text" id="nombre" aria-required="true" aria-describedby="nombre-help" /> <small id="nombre-help">Este campo es obligatorio.</small>
<label for="email">Email:</label> <input type="email" id="email" aria-required="true" aria-invalid="false" />

<label> <input type="checkbox" aria-required="true" /> Acepto los términos y condiciones </label> </form>`}{" "}
        </pre>{" "}
        <p>
          {" "}
          Al utilizar estos atributos, estamos proporcionando información clara
          y adicional a los lectores de pantalla, mejorando la experiencia de
          los usuarios con discapacidades visuales.{" "}
        </p>{" "}
      </div>

      <div className="highlight-box">
        <h2>
          Pruebas de Accesibilidad: Herramientas y Métodos para Garantizar la
          Inclusión 🎯
        </h2>
        <p>
          {" "}
          Asegurar la accesibilidad no solo implica la implementación de buenas
          prácticas, sino también realizar pruebas rigurosas para verificar que
          todos los usuarios puedan interactuar con la web sin problemas. Aquí
          discutiremos algunas herramientas y métodos que pueden ayudar a
          evaluar la accesibilidad.{" "}
        </p>{" "}
        <h3>Herramientas para Pruebas de Accesibilidad</h3>
        <ul>
          <li>
            <strong>
              <a
                href="https://wave.webaim.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WAVE
              </a>
            </strong>
            : Una extensión de navegador que permite analizar la accesibilidad
            de cualquier página web y señalar áreas problemáticas.
          </li>
          <li>
            <strong>
              <a
                href="https://www.deque.com/axe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                aXe
              </a>
            </strong>
            : Otra herramienta potente que analiza y genera reportes detallados
            sobre la accesibilidad del sitio.
          </li>
          <li>
            <strong>
              <a
                href="https://developers.google.com/web/tools/lighthouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lighthouse
              </a>
            </strong>
            : Integrada en Google Chrome, permite auditar la accesibilidad,
            rendimiento y otras métricas importantes de una página.
          </li>
        </ul>
        <h3>Pruebas Manuales: Ir Más Allá de las Herramientas Automáticas</h3>{" "}
        <p>
          {" "}
          Aunque las herramientas son muy útiles, las{" "}
          <strong>pruebas manuales</strong> siguen siendo esenciales. Trabajar
          directamente con usuarios con discapacidades proporciona información
          valiosa que las herramientas automáticas no pueden detectar, como la
          usabilidad y la experiencia real del usuario.{" "}
        </p>{" "}
      </div>
      <div className="highlight-box">
        {" "}
        <h2>Tendencias Futuras en HTML y Accesibilidad Web 🚀</h2>{" "}
        <p>
          {" "}
          La tecnología web está en constante evolución, y es importante estar
          al tanto de las tendencias emergentes para mantener nuestras páginas
          actualizadas y eficientes. A continuación, exploramos algunas
          tecnologías y características que están dando forma al futuro del
          desarrollo web.{" "}
        </p>{" "}
        <h3>Web Components</h3>{" "}
        <p>
          {" "}
          Los{" "}
          <strong>
            <a
              href="https://developer.mozilla.org/es/docs/Web/Web_Components"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Components
            </a>
          </strong>{" "}
          son una poderosa herramienta que permite crear componentes
          reutilizables y personalizados, como botones o menús. Estos
          componentes son nativos del navegador y facilitan la creación de
          interfaces de usuario consistentes y modulares.{" "}
        </p>{" "}
        <h3>WebAssembly</h3>{" "}
        <p>
          {" "}
          <strong>
            <a
              href="https://developer.mozilla.org/es/docs/WebAssembly"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebAssembly
            </a>
          </strong>{" "}
          es una tecnología que permite ejecutar código compilado en el
          navegador. Esto se traduce en un{" "}
          <strong>rendimiento significativamente mejorado</strong>,
          especialmente útil para aplicaciones web complejas, como videojuegos o
          herramientas de edición gráfica.{" "}
        </p>{" "}
        <h3>Nuevas Características de HTML</h3>{" "}
        <p>
          {" "}
          HTML sigue evolucionando, y cada versión trae consigo nuevas
          características que mejoran la accesibilidad y el rendimiento de las
          páginas web. Por ejemplo:{" "}
        </p>{" "}
        <ul>
          {" "}
          <li>
            <strong>Dialog element</strong>: La etiqueta{" "}
            <code>&lt;dialog&gt;</code> proporciona una forma fácil de
            implementar cuadros de diálogo modales o ventanas emergentes,
            mejorando tanto la accesibilidad como la experiencia de usuario.
          </li>{" "}
          <li>
            <strong>
              Etiqueta <code>details</code>
            </strong>
            : Permite crear secciones de contenido que se pueden expandir o
            contraer fácilmente, ofreciendo una mejor organización del contenido
            sin comprometer la accesibilidad.
          </li>{" "}
        </ul>{" "}
      </div>
      <div className="highlight-box conclusion-box">
        {" "}
        <h2>Construyendo una Web Más Inclusiva y Eficiente 🌐</h2>
        <p>
          {" "}
          Hemos recorrido conceptos esenciales de HTML avanzado, explorando cómo
          los <strong>microdatos</strong> y <strong>RDFa</strong> pueden mejorar
          la visibilidad de tus páginas web en los motores de búsqueda, cómo los{" "}
          <strong>atributos ARIA</strong> son fundamentales para garantizar la
          accesibilidad, y cómo técnicas como el <strong>Lazy Loading</strong>{" "}
          pueden optimizar el rendimiento de tu sitio web. También hemos tocado
          las <strong>mejores prácticas de accesibilidad en formularios</strong>{" "}
          y cómo <strong>realizar pruebas de accesibilidad</strong> para
          garantizar que nuestras páginas web sean inclusivas para todos.{" "}
        </p>{" "}
        <p>
          {" "}
          Recuerda que la accesibilidad y la optimización no solo mejoran la
          experiencia de tus usuarios, sino que también reflejan un compromiso
          con una web más inclusiva y útil para todas las personas. Ya sea
          implementando pequeñas mejoras como los atributos ARIA o grandes
          cambios como la optimización de recursos con Lazy Loading, cada
          detalle cuenta para hacer la web un espacio más accesible y eficiente.{" "}
        </p>{" "}
        <p>
          {" "}
          Si te ha resultado útil este post o tienes alguna experiencia que
          quieras compartir, ¡nos encantaría escuchar tu opinión! Deja tu
          comentario abajo y sigamos construyendo juntas una web mejor para
          todos.{" "}
        </p>{" "}
        <p>
          ¡Hasta el próximo post! Y recuerda: el futuro del desarrollo web lo
          construimos hoy, con cada línea de código que escribimos. 🌍✨
        </p>{" "}
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

export default HtmlAvanzado;
