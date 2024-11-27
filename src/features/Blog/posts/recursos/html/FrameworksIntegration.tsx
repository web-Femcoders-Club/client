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

const FrameworksIntegration: React.FC = () => {
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
      postId: "9",
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
        <title>Integración de Frameworks y Librerías | femCoders Club</title>
        <meta
          name="description"
          content="Descubre la relación entre HTML y frameworks modernos como React, Vue.js, Angular y Svelte. Aprende cómo estas herramientas transforman el desarrollo web."
        />
        <meta
          name="keywords"
          content="HTML, Frameworks, React, Angular, Vue.js, Svelte, Desarrollo Web, femCoders Club, Comparativa de Frameworks, Librerías, Programación Frontend"
        />
        <meta
          property="og:title"
          content="Integración de Frameworks y Librerías | femCoders Club"
        />
        <meta
          property="og:description"
          content="Explora cómo combinar HTML con frameworks modernos como React y Svelte para crear aplicaciones dinámicas y escalables."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="/assets/html/Frameworks-Integracion.png"
        />
        <meta property="og:site_name" content="femCoders Club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Integración de Frameworks y Librerías | femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Aprende cómo HTML sigue siendo la base fundamental de los frameworks modernos y explora su integración con herramientas como React, Angular y más."
        />
        <meta
          name="twitter:image"
          content="/assets/html/Frameworks-Integracion.png"
        />
      </Helmet>

      <div className="post-image-container">
        <img
          src="/assets/html/htmlFrameworks.jpg"
          alt="Imagen de frameworks y librerías"
          className="blog-post-image"
        />
      </div>

      <h1 className="blog-post-title">Integración de Frameworks y Librerías</h1>

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
      <h2 style={{ textAlign: "center" }}>
        Relación entre HTML y frameworks modernos como React, Vue.js, Angular,
        Svelte y SvelteKit.
      </h2>
      <br />

      <div className="intro-text">
        <p>
          HTML ha sido el pilar fundamental de la web durante décadas. Sin
          embargo, el panorama del desarrollo web ha evolucionado
          significativamente. Hoy en día, la creación de aplicaciones web
          sofisticadas requiere más que un simple conocimiento de HTML. Los
          frameworks y librerías han surgido como herramientas indispensables
          para agilizar el desarrollo y mejorar la experiencia del usuario. En
          este post, exploraremos cómo estos elementos trabajan en conjunto con
          HTML.
        </p>
      </div>

      <div className="highlight-box">
        <h2>¿Qué son los frameworks y librerías en el desarrollo web?</h2>
        <p>
          En el desarrollo web, los frameworks populares como{" "}
          <strong>React, Angular, Vue.js, Svelte</strong> ofrecen componentes
          prediseñados (botones, formularios, etc.), gestión de estado y
          enrutamiento, entre otras características. Las librerías como
          <a
            href="https://jquery.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 5px", color: "#ea4f33" }}
          >
            jQuery
          </a>
          o
          <a
            href="https://lodash.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 5px", color: "#ea4f33" }}
          >
            Lodash
          </a>
          , por su parte, proporcionan funciones útiles para manipular el DOM,
          realizar operaciones con arrays y objetos, y más.
        </p>
        <br />

        <p>
          En resumen:
          <ul>
            <li>
              <strong>Frameworks:</strong> Proporcionan una estructura completa
              para desarrollar aplicaciones web, agilizando el proceso y
              asegurando una arquitectura coherente.
            </li>
            <li>
              <strong>Librerías:</strong> Ofrecen funciones y herramientas
              reutilizables que puedes incorporar a tus proyectos para resolver
              tareas específicas.
            </li>
          </ul>
        </p>
      </div>

      <div className="highlight-box">
        <h2>¿Cuál es la relación entre HTML y los frameworks modernos?</h2>
        <p>
          HTML sigue siendo la piedra angular del desarrollo web, incluso en la
          era de frameworks avanzados. Aunque estos frameworks introducen nuevas
          sintaxis y características, todos se apoyan en HTML para estructurar
          el contenido y definir las interfaces de usuario. Al combinar HTML con
          las funcionalidades adicionales de los frameworks, los desarrolladores
          pueden crear aplicaciones dinámicas y escalables con mayor facilidad.
        </p>
        <p>
          <strong>Relación entre frameworks y HTML:</strong>
        </p>
        <ul>
          <li>
            <strong>React:</strong> Emplea <code>JSX</code>, una extensión de
            JavaScript que combina lógica y estructura similar a HTML. Esto
            facilita la creación de componentes reutilizables que representan la
            UI de manera declarativa.
            <pre className="code-block bg3">
              {`import React from "react";

const Greeting = ({ name }) => (
  <div>
    <h1>Hola, {name}!</h1>
  </div>
);

export default Greeting;`}
            </pre>
          </li>
          <li>
            <strong>Vue.js:</strong> Utiliza plantillas HTML enriquecidas con
            directivas reactivas como <code>v-bind</code> y <code>v-if</code>{" "}
            para enlazar datos y manejar eventos. Esto permite una estructura
            clara y eficiente.
            <pre className="code-block bg3">
              {`<template>
  <div>
    <h1>Hola, {{ name }}!</h1>
    <input v-model="name" placeholder="Escribe tu nombre" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Mundo",
    };
  },
};
</script>`}
            </pre>
          </li>
          <li>
            <strong>Angular:</strong> Aprovecha plantillas HTML enriquecidas con
            directivas como <code>*ngFor</code> y <code>*ngIf</code>, junto con
            un fuerte sistema de tipado a través de TypeScript. Es ideal para
            aplicaciones empresariales de gran escala.
            <pre className="code-block bg3">
              {`<div>
  <h1>Hola, {{ name }}!</h1>
  <input [(ngModel)]="name" placeholder="Escribe tu nombre" />
</div>

<script>
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  name: string = 'Mundo';
}
</script>`}
            </pre>
          </li>
          <li>
            <strong>Svelte y SvelteKit:</strong> Adopta un enfoque minimalista,
            generando código altamente optimizado basado en HTML, CSS y
            JavaScript puro. Su ventaja radica en la simplicidad y el
            rendimiento.
            <pre className="code-block bg3">
              {`<script>
  let name = "Mundo";
</script>

<h1>Hola, {name}!</h1>
<input bind:value={name} placeholder="Escribe tu nombre" />`}
            </pre>
          </li>
        </ul>
        <p>
          Aunque cada framework introduce su propia sintaxis y características,
          todos se fundamentan en HTML como base para organizar y estructurar
          las interfaces de usuario. Esta relación permite a los desarrolladores
          aprovechar la familiaridad y simplicidad de HTML mientras integran
          funcionalidades avanzadas para crear aplicaciones modernas.
        </p>
      </div>

      <div className="highlight-box">
        <h2>Beneficios de Comprender HTML y Utilizar Frameworks y Librerías</h2>
        <p>
          Los frameworks y librerías modernos simplifican el desarrollo web y
          ofrecen herramientas poderosas para crear aplicaciones escalables y
          funcionales. Sin embargo, para aprovecharlos al máximo, es fundamental
          comprender HTML, ya que permite:
        </p>{" "}
        <br />
        <ul>
          {" "}
          <li>
            Comprender la estructura y el funcionamiento interno de las
            aplicaciones web.
          </li>{" "}
          <li>
            Personalizar y optimizar el código generado por los frameworks.
          </li>{" "}
          <li>Mejorar la accesibilidad y el SEO de tus proyectos.</li>{" "}
          <li>Resolver problemas y depurar errores con mayor eficacia.</li>{" "}
        </ul>{" "}
        <p>
          {" "}
          Por otro lado, al utilizar frameworks y librerías, también obtienes
          los siguientes beneficios:
        </p>{" "}
        <br />
        <ul>
          {" "}
          <li>
            <strong>Ahorro de tiempo:</strong> Reutilización de código y
            componentes prediseñados.
          </li>{" "}
          <li>
            <strong>Mayor consistencia:</strong> Estructura y convenciones
            predefinidas.
          </li>{" "}
          <li>
            <strong>Mejor rendimiento:</strong> Optimizaciones y técnicas
            avanzadas integradas.
          </li>{" "}
          <li>
            <strong>Facilidad de aprendizaje:</strong> Gran comunidad y recursos
            disponibles para guiarte.
          </li>{" "}
        </ul>{" "}
      </div>
      <div className="highlight-box">
        <h2>Desventajas y Consideraciones</h2>
        <p>
          Aunque los frameworks y librerías modernos ofrecen numerosas ventajas,
          también es importante tener en cuenta algunas desventajas y
          limitaciones que podrían influir en tu decisión de utilizarlos:
        </p>
        <br />
        <ul>
          <li>
            <strong>Curva de aprendizaje:</strong> Algunos frameworks, como
            Angular, tienen una curva de aprendizaje más pronunciada. Es
            necesario invertir tiempo para comprender sus conceptos,
            convenciones y herramientas asociadas.
          </li>
          <li>
            <strong>Tamaño de los proyectos:</strong> Para proyectos pequeños o
            simples, el uso de frameworks completos como React o Angular puede
            ser excesivo. En estos casos, opciones más ligeras como Svelte o
            incluso HTML puro con pequeñas librerías pueden ser más eficientes.
          </li>
          <li>
            <strong>Dependencias:</strong> La integración de frameworks
            introduce dependencias externas que pueden afectar la velocidad de
            carga de la página y, en algunos casos, la seguridad de la
            aplicación si no se manejan correctamente.
          </li>
          <li>
            <strong>Mantenimiento:</strong> Los frameworks evolucionan
            constantemente, lo que puede requerir actualizaciones frecuentes y
            ajustes en tu código para mantenerlo compatible con las nuevas
            versiones.
          </li>
        </ul>
        <p>
          Antes de elegir un framework, evalúa cuidadosamente las necesidades de
          tu proyecto y considera estos factores para asegurarte de que la
          solución seleccionada sea la más adecuada.
        </p>
      </div>
      <div className="highlight-box">
        <h2>Comparativa entre los Frameworks Modernos</h2>
        <p>
          Cada framework tiene sus propias características y ventajas, lo que
          los hace adecuados para diferentes tipos de proyectos. A continuación,
          presentamos una comparativa rápida para ayudarte a entender cuál
          podría ser la mejor opción según tus necesidades:
        </p>
        <br />
        <br />
        <table className="framework-comparison-table">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Relación con HTML</th>
              <th>Ventajas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>React</strong>
              </td>
              <td>JSX (JavaScript + XML)</td>
              <td>
                Gran comunidad y ecosistema extenso, ideal para proyectos de
                cualquier tamaño.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Vue.js</strong>
              </td>
              <td>HTML con directivas reactivas</td>
              <td>
                Simplicidad, fácil de aprender, ideal para principiantes y
                proyectos medianos.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Angular</strong>
              </td>
              <td>HTML enriquecido con directivas</td>
              <td>
                Completo y robusto, ideal para aplicaciones empresariales de
                gran escala.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Svelte</strong>
              </td>
              <td>HTML puro con lógica compilada</td>
              <td>
                Rendimiento optimizado, código limpio y fácil de entender.
              </td>
            </tr>
            <tr>
              <td>
                <strong>SvelteKit</strong>
              </td>
              <td>Basado en Svelte con herramientas adicionales</td>
              <td>
                Ideal para aplicaciones modernas con enrutamiento y renderizado
                en servidor.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          La elección del framework dependerá de factores como el tamaño del
          proyecto, la experiencia del equipo y los requisitos específicos:
        </p>
        <ul>
          <li>
            <strong>Svelte:</strong> Ideal para quienes buscan rendimiento y
            simplicidad.
          </li>
          <li>
            <strong>Angular:</strong> Perfecto para proyectos empresariales
            escalables por su estructura completa.
          </li>
          <li>
            <strong>React:</strong> Excelente para startups y proyectos grandes
            gracias a su flexibilidad y ecosistema amplio.
          </li>
          <li>
            <strong>Vue.js:</strong> Recomendado para proyectos pequeños a
            medianos por su facilidad de uso y rápida implementación.
          </li>
        </ul>
        <p>
          Cada framework tiene fortalezas únicas, pero es crucial evaluar tus
          objetivos, recursos y posibles limitaciones como la curva de
          aprendizaje o el impacto en proyectos pequeños.
        </p>
      </div>
      <div className="highlight-box resources-box">
        <h2>Recursos Recomendados para Aprender Frameworks</h2>
        <p>
          Aquí tienes una selección de recursos recomendados para aprender más
          sobre los frameworks mencionados. Estos tutoriales y guías provienen
          de profesionales destacados en la comunidad de desarrollo web:
        </p>
        <br />
        <ul>
          <li>
            <strong>React:</strong>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=yIr_1CasXkM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introducción a React por Nicolás Schurmann
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=7iobxzd_2wY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curso de React en Español por midudev
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=pFyAu4R684s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aprende React en 1 Hora por MoureDev
                </a>
              </li>
              <li>
                <a
                  href="https://carlosazaustre.es/react-tutorial-modern"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tutorial Moderno de React por Carlos Azaustre
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Vue.js:</strong>
            <ul>
              <li>
                <a
                  href="https://vuejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentación Oficial de Vue.js
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=FXpIoQ_rT_c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curso Vue 3 para Principiantes por Academind
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Angular:</strong>
            <ul>
              <li>
                <a
                  href="https://angular.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentación Oficial de Angular
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=3qBXWUpoPHo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Angular Crash Course por Traversy Media
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Svelte:</strong>
            <ul>
              <li>
                <a
                  href="https://svelte.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentación Oficial de Svelte
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Xsxm8_BI63s&list=PLV8x_i1fqBw2QScggh0pw2ATSJg_WHqUN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aprende Svelte desde Cero por midudev
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <p>
          Estos recursos cubren desde conceptos básicos hasta avanzados, ideales
          para principiantes y desarrolladores que buscan mejorar sus
          habilidades. No puedo dejar de mencionar lo agradecida que estoy con
          estos creadores:
        </p>
        <br />
        <br />
        <ul>
          <li className="creator-item">
            <div className="creator-content">
              <img
                src="/assets/html/nicolas.jpeg"
                alt="Nicolás Schurmann"
                className="creator-avatar"
              />
              <div>
                <strong>Nicolás Schurmann:</strong>
                <p>
                  Su estilo único, cálido y didáctico ha sido clave en mi
                  aprendizaje. Nicolás no solo explica con claridad, sino que
                  inspira a seguir creciendo y disfrutando el proceso de
                  aprender. Sus tutoriales son un tesoro para cualquier
                  programadora en formación. Nicolás no solo explica conceptos
                  complejos de forma sencilla, sino que también fomenta una
                  comunidad inclusiva y acogedora, al igual que nosotras en
                  femCoders Club.
                </p>
              </div>
            </div>
          </li>

          <li className="creator-item">
            <div className="creator-content">
              <img
                src="/assets/html/midudev.jpeg"
                alt="midudev"
                className="creator-avatar"
              />
              <div>
                <strong>midudev:</strong>
                <p>
                  Un verdadero referente en la comunidad tech, midudev inspira a
                  miles de personas, especialmente a mujeres, a perseguir sus
                  sueños en el mundo de la programación. Su pasión por enseñar y
                  su compromiso con la diversidad son un ejemplo a seguir.
                  Midudev es una fuente de inspiración y motivación para mí y
                  para muchas otras mujeres en la industria.
                </p>
              </div>
            </div>
          </li>

          <li className="creator-item">
            <div className="creator-content">
              <img
                src="/assets/html/moure.jpeg"
                alt="MoureDev"
                className="creator-avatar"
              />
              <div>
                <strong>MoureDev:</strong>
                <p>
                  La dedicación de Moure por crear contenido de calidad y
                  accesible ha sido una gran fuente de motivación para muchas
                  desarrolladoras. Sus tutoriales prácticos y bien estructurados
                  son ideales para quienes quieren aprender haciendo. Moure es
                  un ejemplo de perseverancia y pasión por la enseñanza, y su
                  trabajo ha impactado positivamente a la comunidad de
                  desarrollo web en español.
                </p>
              </div>
            </div>
          </li>

          <li className="creator-item">
            <div className="creator-content">
              <img
                src="/assets/html/carlos.jpeg"
                alt="Carlos Azaustre"
                className="creator-avatar"
              />
              <div>
                <strong>Carlos Azaustre:</strong>
                <p>
                  Carlos es un referente clave en la comunidad de desarrollo web
                  en español. Su enfoque profesional y su habilidad para
                  explicar conceptos avanzados de manera sencilla lo convierten
                  en un aliado invaluable para cualquier programadora. Carlos es
                  un mentor y guía para muchos desarrolladores en su camino
                  hacia la excelencia técnica y profesional.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <p>
          Quiero invitar a todas las miembros de femCoders Club a seguir a estos
          increíbles creadores, participar en sus cursos y compartir sus
          experiencias. ¡Juntas podemos construir una comunidad cada vez más
          fuerte y empoderada!
        </p>
      </div>

      <div className="highlight-box conclusion">
        <h2>Conclusión</h2>
        <p>
          Los frameworks y librerías han transformado el desarrollo web,
          haciendo que HTML sea más poderoso que nunca. Desde React hasta
          Svelte, cada herramienta tiene su lugar. Elige la que se adapte mejor
          a tus necesidades y no olvides apoyarte en los recursos y la comunidad
          para seguir aprendiendo. ¡La tecnología no tiene límites, y tú
          tampoco💻✨!
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

export default FrameworksIntegration;
