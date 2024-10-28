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

const FormandTablePost: React.FC = () => {
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
          src="/assets/html/Formularios-Tablas-HTML.png"
          alt="Formularios y Tablas en HTML"
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
        En esta sección, exploraremos a fondo cómo crear formularios y tablas en
        HTML, dos elementos fundamentales para construir páginas web
        interactivas y presentar información de manera organizada. Aprenderás a
        estructurar formularios así como a crear tablas de datos para mostrar
        información de forma clara y concisa. Descubrirás los elementos HTML
        esenciales, los atributos más utilizados y las mejores prácticas para
        garantizar una experiencia de usuario óptima y una correcta
        accesibilidad. Además, te mostraremos cómo combinar HTML con CSS para
        darle estilo a tus formularios y tablas y hacer que se integren
        perfectamente en tu diseño web.
      </p>

      <div className="highlight-box">
        <h2>¿Qué son los formularios y tablas en HTML? </h2>
        <p>
          Los formularios son como los cuestionarios digitales de una página
          web. Nos permiten recopilar datos de los usuarios, como su nombre,
          correo electrónico o preferencias. Por otro lado, las tablas son como
          hojas de cálculo dentro de una página. Sirven para organizar
          información de manera clara y concisa, como listas de precios,
          horarios o resultados de una búsqueda. En conjunto, formularios y
          tablas son herramientas indispensables para crear páginas web
          dinámicas y que ofrecen una buena experiencia al usuario. Los
          formularios permiten la interacción y la recopilación de datos,
          mientras que las tablas facilitan la presentación de esa información
          de manera organizada y fácil de entender.
        </p>
      </div>
      <div className="highlight-box">
        <h2>Elementos Clave Para Crear Formularios HTML</h2>
        <p>
          Para crear un formulario en HTML, necesitas utilizar las siguientes
          etiquetas y atributos:
        </p>
        <ul>
          <li>
            <strong>
              <code>&lt;form&gt;</code>:
            </strong>
            <ul>
              <li>Define el inicio y el fin del formulario.</li>
              <li>
                Atributos clave: <code>action</code> (URL de envío),{" "}
                <code>method</code> (GET o POST), <code>name</code>.
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <strong>
              <code>&lt;input&gt;</code>:
            </strong>
            <ul>
              <li>
                Crea diversos tipos de campos de entrada (texto, contraseña,
                correo electrónico, número, fecha, etc.).
              </li>
              <li>
                Atributos clave: <code>type</code>, <code>name</code>,{" "}
                <code>value</code>, <code>placeholder</code>,{" "}
                <code>required</code>, <code>maxlength</code>,{" "}
                <code>pattern</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <code>&lt;textarea&gt;</code>:
            </strong>
            <ul>
              <li>Crea áreas de texto multi-línea.</li>
              <li>
                Atributos clave: <code>rows</code>, <code>cols</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <code>&lt;label&gt;</code>:
            </strong>
            <ul>
              <li>Asocia un texto descriptivo a un campo de entrada.</li>
              <li>
                Atributo clave: <code>for</code> (debe coincidir con el id del
                elemento).
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <code>&lt;select&gt;</code>:
            </strong>
            <ul>
              <li>Crea listas desplegables.</li>
              <li>
                Elementos internos: <code>&lt;option&gt;</code> para definir
                cada opción.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <code>&lt;button&gt;</code>:
            </strong>
            <ul>
              <li>
                Crea botones para enviar, reiniciar o realizar otras acciones.
              </li>
              <li>
                Atributo clave: <code>type</code> (submit, reset, button).
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <code>&lt;fieldset&gt;</code> y <code>&lt;legend&gt;</code>:
            </strong>
            <ul>
              <li>Agrupan elementos relacionados dentro del formulario.</li>
            </ul>
          </li>
        </ul>
        <h3>**Otros elementos y atributos importantes:</h3>
        <ul>
          <li>
            <strong>
              <code>&lt;fieldset&gt;</code> y <code>&lt;legend&gt;</code>
            </strong>
            : Para agrupar elementos relacionados.
          </li>
          <li>
            <strong>
              <code>required</code>
            </strong>
            : Indica que un campo es obligatorio.
          </li>
          <li>
            <strong>
              <code>pattern</code>
            </strong>
            : Define una expresión regular para validar el formato de los datos.
          </li>
          <li>
            <strong>
              <code>minlength</code> y <code>maxlength</code>
            </strong>
            : Establecen la longitud mínima y máxima permitida para un campo.
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
            <strong>
              <code>&lt;table&gt;</code>
            </strong>
            : Define la tabla completa.
          </li>
          <li>
            <strong>
              <code>&lt;thead&gt;</code>
            </strong>
            : Contiene el encabezado de la tabla.
          </li>
          <li>
            <strong>
              <code>&lt;tbody&gt;</code>
            </strong>
            : Contiene el cuerpo de la tabla.
          </li>
          <li>
            <strong>
              <code>&lt;tr&gt;</code>
            </strong>
            : Define una fila.
          </li>
          <li>
            <strong>
              <code>&lt;td&gt;</code>
            </strong>
            : Define una celda de datos.
          </li>
          <li>
            <strong>
              <code>&lt;th&gt;</code>
            </strong>
            : Define una celda de encabezado.
          </li>
        </ul>

        <h3>**Estilos y atributos adicionales:</h3>
        <ul>
          <li>
            <strong>
              <code>colspan</code> y <code>rowspan</code>
            </strong>
            : Permiten que una celda ocupe múltiples columnas o filas.
          </li>
          <li>
            <strong>
              <code>&lt;caption&gt;&lt;/caption&gt;</code>
            </strong>
            : Proporciona un título descriptivo para la tabla.
          </li>
        </ul>

        <h3>**Estilo con CSS:</h3>
        <p>
          El estilo de las tablas se define principalmente con CSS. Puedes
          utilizar propiedades como
          <strong>`border`, `padding`, `margin` y `text-align`</strong> para
          personalizar su apariencia.
        </p>
      </div>
      <div className="highlight-box">
        <h2>Casos de uso comunes de formularios y tablas</h2>
        <p>
          Los formularios y tablas son herramientas esenciales en el desarrollo
          web, utilizados para crear interfaces interactivas y presentar
          información de manera organizada. Algunos ejemplos comunes incluyen:
        </p>
        <ul>
          <li>
            <strong>Formularios de registro y login</strong>: Recolectan datos
            personales para crear cuentas de usuario.
          </li>
          <li>
            <strong>Formularios de contacto</strong>: Permiten a los usuarios
            enviar mensajes a través de un sitio web.
          </li>
          <li>
            <strong>Encuestas y cuestionarios</strong>: Recolectan datos de
            usuarios para realizar investigaciones o análisis de mercado.
          </li>
          <li>
            <strong>Formularios de pago</strong>: Facilitan el proceso de compra
            en línea.
          </li>
          <li>
            <strong>Tablas de productos</strong>: Presentan de manera organizada
            los productos disponibles en una tienda en línea.
          </li>
          <li>
            <strong>Listas de resultados de búsqueda</strong>: Muestra los
            resultados de una búsqueda en un formato tabular.
          </li>
          <li>
            <strong>Calendarios</strong>: Organizan eventos y fechas
            importantes.
          </li>
          <li>
            <strong>Tablas comparativas</strong>: Comparan diferentes opciones o
            productos.
          </li>
        </ul>
        <p>
          Estos son solo algunos ejemplos de cómo se utilizan los formularios y
          tablas en el desarrollo web. La versatilidad de estas herramientas las
          hace indispensables para crear sitios web dinámicos y funcionales.
        </p>
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
      <td>10€</td>
      <td>En stock</td>
    </tr>
    <tr>
      <td>Producto 2</td>
      <td>15€</td>
      <td>Agotado</td>
    </tr>
  </tbody>
</table>`}
        </pre>
      </div>
      <div className="highlight-box">
        <h2>Mejores Prácticas para Formularios y Tablas en HTML</h2>

        <h3>Formularios</h3>
        <ul>
          <li>
            <strong>Etiquetas Asociadas:</strong> Utiliza{" "}
            <code>&lt;label&gt;</code> para cada campo, mejorando la
            accesibilidad y la usabilidad.
          </li>
          <li>
            <strong>Validación:</strong> Implementa validaciones utilizando
            atributos como <code>required</code> y <code>pattern</code> para
            garantizar que se ingresen datos correctos.
          </li>
          <li>
            <strong>Diseño Responsive:</strong> Asegúrate de que los formularios
            se vean bien en dispositivos móviles usando CSS.
          </li>
          <li>
            <strong>Mensajes de Error Claros:</strong> Proporciona
            retroalimentación clara cuando se producen errores.
          </li>
          <li>
            <strong>Usabilidad:</strong> Organiza los campos de manera lógica y
            utiliza espacios adecuados entre ellos.
          </li>
        </ul>

        <h3>Tablas</h3>
        <ul>
          <li>
            <strong>Encabezados de Tabla:</strong> Usa <code>&lt;th&gt;</code>{" "}
            para los encabezados, lo que mejora la semántica y la accesibilidad.
          </li>
          <li>
            <strong>
              Atributos <code>scope</code>:
            </strong>{" "}
            Define el ámbito de los encabezados utilizando el atributo{" "}
            <code>scope</code>.
          </li>
          <li>
            <strong>Diseño Limpio:</strong> Mantén un diseño simple y legible;
            evita el uso excesivo de líneas divisorias.
          </li>
          <li>
            <strong>Evita el Uso de Tablas para Layouts:</strong> Usa tablas
            solo para datos, no para el diseño de la página.
          </li>
          <li>
            <strong>Diseño Responsive:</strong> Utiliza CSS para asegurar que
            las tablas se ajusten correctamente en diferentes pantallas.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
        <h2>Sugerencias para Mejorar</h2>

        <h3>Profundizar en la Accesibilidad</h3>
        <ul>
          <li>
            <strong>ARIA:</strong> Utiliza atributos ARIA para mejorar la
            accesibilidad, especialmente para lectores de pantalla.
          </li>
          <li>
            <strong>Contraste de Colores:</strong> Emplea herramientas como
            Contrast Checker para garantizar un contraste suficiente en los
            elementos visuales.
          </li>
          <li>
            <strong>Foco de Teclado:</strong> Asegúrate de que el foco se maneje
            correctamente en los formularios para facilitar la navegación con el
            teclado.
          </li>
        </ul>

        <h3>Validación Avanzada</h3>
        <ul>
          <li>
            <strong>JavaScript:</strong> Utiliza JavaScript para realizar
            validaciones personalizadas y ofrecer retroalimentación instantánea.
          </li>
          <li>
            <strong>Librerías de Validación:</strong> Considera usar librerías
            como Formik o Yup para crear formularios con validación más fácil.
          </li>
        </ul>

        <h3>Diseño Responsivo</h3>
        <ul>
          <li>
            <strong>Media Queries:</strong> Usa media queries para adaptar el
            diseño de formularios y tablas a diferentes tamaños de pantalla.
          </li>
          <li>
            <strong>Flexbox y Grid:</strong> Implementa Flexbox y Grid para
            crear diseños más flexibles y responsivos.
          </li>
        </ul>

        <h3>Rendimiento</h3>
        <ul>
          <li>
            <strong>Optimización:</strong> Minimiza el uso de tablas anidadas y
            evita el exceso de JavaScript para mejorar el rendimiento.
          </li>
        </ul>

        <h3>Seguridad</h3>
        <ul>
          <li>
            <strong>Prevención de Ataques:</strong> Toma precauciones contra
            ataques como XSS al sanitizar entradas.
          </li>
          <li>
            <strong>Encriptación:</strong> Recomienda encriptar datos sensibles
            enviados a través de formularios.
          </li>
        </ul>
      </div>
      <div className="highlight-box">
        <h2>Herramientas y Librerías</h2>
        <ul>
          <li>
            <strong>Form Builders:</strong> Herramientas como
            <span>
              {" "}
              <a
                href="https://www.typeform.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Typeform
              </a>{" "}
              y{" "}
              <a
                href="https://www.jotform.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JotForm
              </a>{" "}
            </span>
            permiten crear formularios visuales sin necesidad de escribir
            código, facilitando el proceso de diseño.
          </li>
          <li>
            <strong>Librerías de Tablas:</strong> Librerías como{" "}
            <span>
              <a
                href="https://datatables.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DataTables
              </a>{" "}
              y{" "}
              <a
                href="https://www.ag-grid.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ag-Grid
              </a>{" "}
            </span>
            ofrecen funcionalidades avanzadas para crear tablas interactivas,
            personalizables y eficientes para la visualización de datos.
          </li>
        </ul>
      </div>

      <div className="highlight-box">
  <h2>¿Te gustaría practicar lo aprendido?</h2>
  <p>
    Te invitamos a explorar un{" "}<span>
    <a href="https://github.com/femcodersclub/Formularios-Tablas-HTML-CSS" target="_blank" rel="noopener noreferrer">
      ejemplo práctico de formularios y tablas
    </a>{" "}</span>
    que hemos preparado. ¡Pon en práctica tus conocimientos de HTML y CSS de una forma visual y dinámica!
  </p>
</div>

      <div className="highlight-box conclusion">
        <h2>Conclusión</h2>
        <p>
          La correcta estructuración de formularios y tablas en HTML no solo
          mejora la usabilidad y accesibilidad de las páginas web, sino que
          también contribuye a una mejor experiencia del usuario. Al seguir las
          mejores prácticas y utilizar herramientas adecuadas, puedes crear
          interfaces intuitivas y atractivas que faciliten la interacción y la
          presentación de datos. Mantente al tanto de las novedades en
          accesibilidad y diseño para garantizar que tus formularios y tablas
          sigan siendo relevantes y funcionales en un entorno web en constante
          evolución.
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

export default FormandTablePost;
