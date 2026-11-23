import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

/*
 * Ctrl+Ella, ediciones «Haz visible todo lo que sabes hacer» y «Marca personal
 * más allá del CV» (septiembre y octubre de 2026), juntas en un solo post. El
 * texto es el de Ana Lucía, entero y sin retocar; lo nuestro es el título para
 * buscadores, la descripción y las metas.
 *
 * Las metas que lee scripts/postsIndex.ts (og:*, keywords, article:*) van con
 * el texto escrito tal cual: el índice las saca del código fuente por regex y
 * no ve el valor de una constante.
 */

const RUTA = "/ctrl-ella/marca-personal-tecnologia-linkedin-visibilidad";
const TITULO_SEO = "Marca personal en tecnología: cómo hacerte visible";
const DESCRIPCION =
  "Cómo construir tu marca personal en tecnología: mejora tu LinkedIn, haz networking sin sentir que te vendes y deja señales útiles de lo que sabes hacer.";
const IMAGEN = "/assets/ctrl-ella/portada-por-defecto.webp";
const PUBLICADO = "2026-11-21T10:00:00Z";

const AUTORA = {
  "@type": "Person",
  name: "Ana Lucía Silva Córdoba",
  url: "https://www.linkedin.com/in/ana-lucia-silva-cordoba/",
};

const MarcaPersonal: React.FC = () => (
  <>
    <Helmet>
      <title>{TITULO_SEO} | FemCoders Club</title>
      <meta name="description" content={DESCRIPCION} />
      <meta
        name="keywords"
        content="marca personal en tecnología, LinkedIn para programadoras, networking, visibilidad profesional, mujeres en tecnología, Ctrl+Ella, FemCoders Club"
      />
      <link rel="canonical" href={`https://www.femcodersclub.com${RUTA}`} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content="Marca personal en tecnología: cómo hacerte visible" />
      <meta
        property="og:description"
        content="Cómo construir tu marca personal en tecnología: mejora tu LinkedIn, haz networking sin sentir que te vendes y deja señales útiles de lo que sabes hacer."
      />
      <meta
        property="og:url"
        content="https://www.femcodersclub.com/ctrl-ella/marca-personal-tecnologia-linkedin-visibilidad"
      />
      <meta
        property="og:image"
        content="https://www.femcodersclub.com/assets/ctrl-ella/portada-por-defecto.webp"
      />
      <meta
        property="og:image:alt"
        content="Banner de Ctrl+Ella, la newsletter de FemCoders Club: tecnología, aprendizaje, carrera y comunidad"
      />
      <meta property="og:site_name" content="FemCoders Club" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITULO_SEO} />
      <meta name="twitter:description" content={DESCRIPCION} />
      <meta
        name="twitter:image"
        content="https://www.femcodersclub.com/assets/ctrl-ella/portada-por-defecto.webp"
      />

      <meta property="article:published_time" content="2026-11-21T10:00:00Z" />
      <meta property="article:author" content="Ana Lucía Silva Córdoba" />
      <meta property="article:section" content="Ctrl+Ella" />
      <meta property="article:tag" content="Mujeres en Tech" />
      <meta property="article:tag" content="Carrera profesional" />
      <meta property="article:tag" content="Marca personal" />

      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify(
          articleSchema({
            type: "Article",
            path: RUTA,
            headline: "Haz visible todo lo que sabes hacer",
            description: DESCRIPCION,
            image: IMAGEN,
            datePublished: PUBLICADO,
            author: AUTORA,
            keywords: [
              "marca personal en tecnología",
              "LinkedIn para programadoras",
              "networking",
              "visibilidad profesional",
              "mujeres en tecnología",
            ],
          })
        )}
      </script>
    </Helmet>

    <PlantillaPost
      ruta={RUTA}
      titulo="Haz visible todo lo que sabes hacer"
      autora={{ nombre: "Ana Lucía Silva Córdoba", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={61}
      portadaConIA
      entradilla={
        <>
          <p>
            <em>Resumen</em>
          </p>
          <p>
            Ya trabajamos tus objetivos, tu experiencia y tu CV tech. Ahora toca el siguiente paso: que
            se note. Puedes tener un buen CV, proyectos interesantes y muchas ganas de crecer, pero si
            nadie sabe quién eres ni hacia dónde vas, muchas oportunidades pasan de largo sin que te
            enteres.
          </p>
          <p>
            Ahí es donde LinkedIn puede jugar a tu favor. No hace falta convertirte en creadora de
            contenido, publicar cada día ni acumular miles de contactos. Basta con construir una
            presencia que explique quién eres y qué puedes aportar.
          </p>
        </>
      }
    >
      <SeccionPost titulo="El titular importa más de lo que parece">
        <p>
          Un error habitual es usarlo solo para poner el puesto: &quot;Junior Developer&quot;. No está
          mal, pero no cuenta gran cosa. Puedes aprovechar ese espacio mejor:
        </p>
        <p>
          <em>
            &quot;Frontend Developer | React &amp; JavaScript | Creando productos digitales centrados
            en las personas&quot;
          </em>
        </p>
        <p>O, en transición:</p>
        <p>
          <em>
            &quot;En transición a Data Analytics | SQL · Python · Power BI | Background en
            Marketing&quot;
          </em>
        </p>
        <p>No se trata de exagerar, sino de dejar claro hacia dónde vas.</p>
      </SeccionPost>

      <SeccionPost titulo="El &quot;Acerca de&quot; no es tu biografía" id="el-acerca-de-no-es-tu-biografia">
        <p>
          No necesitas contarlo todo. Una estructura sencilla funciona bien: quién eres → qué sabes
          hacer → qué te interesa → hacia dónde vas. Por ejemplo:
        </p>
        <p>
          <em>
            &quot;Soy profesional de marketing en transición hacia Data Analytics. Trabajando con
            campañas digitales desarrollé interés por el análisis de datos y las decisiones basadas en
            métricas. Ahora profundizo en SQL, Python y Power BI con proyectos propios, y me interesa
            especialmente convertir datos en decisiones útiles.&quot;
          </em>
        </p>
        <p>Con que alguien te entienda en pocas líneas, es suficiente.</p>
      </SeccionPost>

      <SeccionPost titulo="Tu experiencia también necesita contexto">
        <p>
          Igual que en el CV: no basta con &quot;gestión de redes sociales&quot;, cuenta qué hiciste y
          qué impacto tuvo (&quot;diseñé una estrategia de contenidos que aumentó el alcance orgánico un
          35% en seis meses&quot;). LinkedIn no debería ser solo un listado de puestos, sino una muestra
          de tu evolución.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿No tienes experiencia tech todavía?">
        <p>
          Sí tienes algo que mostrar: proyectos personales, formaciones, hackathons, certificaciones,
          voluntariado, contribuciones a open source. No hace falta esperar al primer trabajo
          tecnológico para demostrar que ya estás construyendo experiencia. Un proyecto de análisis de
          datos con Python y SQL, por pequeño que sea, ya cuenta una historia: no dice &quot;quiero
          entrar en tecnología&quot;, dice &quot;estoy aprendiendo y esto es lo que construyo&quot;.
        </p>
      </SeccionPost>

      <SeccionPost titulo="No necesitas ser creadora de contenido">
        <p>
          Si pensar en publicar te genera rechazo, no pasa nada: puedes compartir solo cuando de verdad
          tengas algo que aportar. Algo que aprendiste, un proyecto terminado, un recurso útil, una
          reflexión sobre tu cambio de sector. No hace falta ser experta para compartir; también puedes
          compartir el proceso de convertirte en una.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Visibilidad no es exponerte">
        <p>
          Construir marca profesional no significa contarlo todo. Decides qué compartir, qué no, con qué
          frecuencia y qué temas te representan. Tu presencia puede ser auténtica sin dejar de ser
          profesional; los límites los pones tú.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Conectar no es coleccionar contactos">
        <p>
          Una red no se construye acumulando gente, sino creando relaciones. Empieza siguiendo a
          personas de tu sector, compañeras de formación, mentoras, recruiters especializados o
          empresas que te interesen. Luego participa: comenta, pregunta, comparte algo, felicita un
          proyecto. No hace falta pedir trabajo en el primer mensaje; a veces basta con abrir una
          conversación.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Networking sin sentir que te estás &quot;vendiendo&quot;" id="networking-sin-sentir-que-te-estas-vendiendo">
        <p>No tiene que ser un &quot;hola, contrátame&quot; a un desconocido. Puede ser tan simple como:</p>
        <p>
          <em>
            &quot;Hola, Marta. Vi que trabajas como Data Analyst y estoy haciendo esa transición. Me
            pareció interesante tu experiencia en proyectos de datos, gracias por compartirlo.&quot;
          </em>
        </p>
        <p>
          No pides nada, solo abres una relación que con el tiempo puede convertirse en conversación,
          recomendación o incluso oportunidad.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Tu perfil habla cuando tú no estás">
        <p>
          Si alguien busca tu nombre y encuentra un perfil actualizado, con proyectos, tecnologías y
          alguna publicación que muestre lo que estás aprendiendo, puede hacerse una idea de quién eres
          en minutos. Eso es visibilidad: no perseguir oportunidades, sino facilitar que te encuentren.
        </p>
      </SeccionPost>

      <SeccionPost titulo="LinkedIn no sustituye tu CV">
        <p>
          Cada uno cumple una función distinta. El CV está pensado para una candidatura concreta;
          LinkedIn muestra una visión más amplia de tu trayectoria e intereses. Tu portfolio enseña lo
          que sabes construir, tu GitHub cómo trabajas, tu red abre conversaciones. Todo forma parte de
          la misma historia, y esa historia debería ser coherente.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Tu reto: 30 minutos para mejorar tu perfil">
        <ul>
          <li>
            <strong>10 min</strong>: Revisa tu titular: ¿explica quién eres y hacia dónde vas?
          </li>
          <li>
            <strong>10 min</strong>: Reescribe el &quot;Acerca de&quot;: quién eres, qué sabes hacer, qué
            estás aprendiendo, qué te interesa.
          </li>
          <li>
            <strong>5 min</strong>: Añade un proyecto, formación o experiencia que lo demuestre.
          </li>
          <li>
            <strong>5 min</strong>: Busca y sigue a tres profesionales del área que te interesa, y
            participa si tienes algo que aportar.
          </li>
        </ul>
        <p>No hace falta hacerlo todo hoy, pero sí puedes empezar hoy.</p>
      </SeccionPost>

      <SeccionPost titulo="Y si te da vergüenza publicar">
        <p>
          Es normal, sobre todo al principio. No necesitas presentarte como experta: puedes decir
          &quot;estoy aprendiendo&quot;, &quot;esto es lo que he descubierto&quot; o &quot;esto es lo
          que todavía intento entender&quot;. Compartir no significa tener todas las respuestas.
        </p>
      </SeccionPost>

      <p>
        Tu próxima oportunidad puede empezar antes de que exista una oferta: alguien que descubre tu
        perfil, lee algo que compartiste, o una conversación que se convierte en entrevista. No podemos
        controlar cuándo llega, pero sí prepararnos para cuando lo haga.
      </p>
      <p>
        No se trata de estar en todas partes, sino de estar donde están las oportunidades que te
        interesan, a tu manera: un perfil, un proyecto, una publicación, una conversación. Un paso
        pequeño cada vez.
      </p>

      <SeccionPost titulo="Marca personal más allá del CV">
        <p>
          <em>Resumen</em>
        </p>
        <p>
          Tu CV cuenta dónde has estado. Tu marca personal deja pistas sobre quién eres profesionalmente.
          En esta edición hablamos de por qué importa construirla antes de necesitarla, sin publicar
          constantemente y sin dejar de lado el miedo que da exponerse.
        </p>
        <p>
          Ya hablamos de cómo conseguir un puesto: CV, LinkedIn, entrevistas, salario, rechazos. Ese
          camino se cierra con un sí. Y ahí es donde muchas dejamos de pensar en nuestra carrera hacia
          fuera. Es un error, no porque debas buscar trabajo todo el tiempo, sino porque:
        </p>
        <blockquote>
          <p>
            <strong>
              La empleabilidad no se activa cuando la necesitas: se construye antes, cuando no tienes
              prisa.
            </strong>
          </p>
        </blockquote>

        <h3>No es lo mismo que publicar en LinkedIn</h3>
        <p>
          Cuando hablamos de marca personal, la mente va directa a &quot;publicar posts&quot;. Pero es
          mucho más amplio: cómo explicas un problema técnico en tu equipo, una contribución a un
          repositorio open source, una charla en un meetup, ayudar a alguien en un canal de Slack,
          mentorizar a una compañera. Ninguna de esas cosas pasa por LinkedIn, y todas dejan huella.
        </p>
        <p>
          No necesitas convertirte en creadora de contenido (aunque a nosotras nos encanta). Necesitas
          dejar señales útiles de lo que sabes, haces y aprendes — donde ya estás, no en un escenario
          nuevo.
        </p>

        <h3>Un ejemplo, no una teoría</h3>
        <p>
          Una integrante de nuestro equipo de FemCoders Club, estuvo tres horas atascada intentando
          entender por qué una API le devolvía un error 403 solo en producción. Al final era un problema
          de permisos en las variables de entorno. Lo escribió en cuatro líneas en el canal de la
          comunidad de{" "}
          <a
            href="https://join.slack.com/t/femcodersclub/shared_invite/zt-47yf8x0sj-tHKJCU~JOthpDhUthksMHg"
            target="_blank"
            rel="noopener noreferrer"
          >
            slack
          </a>
          : qué pasó, qué probó, qué lo resolvió. Un tiempo después, alguien la etiquetó en ese mismo
          hilo porque le había resuelto el mismo problema. Eso es marca personal: no el post perfecto,
          es un rastro útil.
        </p>
        <p>
          Aquí está lo que casi no se dice en voz alta: da miedo exponerse. Pensar &quot;¿quién soy yo
          para hablar de esto?&quot;, temer equivocarte en público, sentir que todo el mundo sabe más
          que tú. No es una barrera que debas eliminar antes de empezar, solo es parte del proceso.
          Compartir lo que acabas de aprender, todavía insegura, suele conectar más que una lección
          desde el pedestal: es más honesto.
        </p>

        <h3>Tu reto: una señal, no un post perfecto</h3>
        <p>
          Piensa en un problema técnico o profesional que resolviste recientemente, por pequeño que sea.
          Escribe cuatro frases siguiendo esta estructura:
        </p>
        <ol>
          <li>
            <strong>Qué pasó:</strong> el problema, en una frase.
          </li>
          <li>
            <strong>Qué probé:</strong> el camino, aunque incluya errores.
          </li>
          <li>
            <strong>Qué aprendí:</strong> la clave que lo resolvió.
          </li>
          <li>
            <strong>A quién le puede servir:</strong> quién se topará con esto después que tú.
          </li>
        </ol>
        <p>No hace falta publicarlo hoy.</p>
        <p>Guárdalo.</p>
        <p>Esa es tu primera señal.</p>
      </SeccionPost>

      <SeccionPost titulo="Sigue la serie">
        <ul>
          <li>
            Edición anterior:{" "}
            <Link to="/ctrl-ella/cv-tech-como-hacer-un-cv-para-tecnologia">
              CV tech: cómo transformar tu experiencia en oportunidades
            </Link>
          </li>
        </ul>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default MarcaPersonal;
