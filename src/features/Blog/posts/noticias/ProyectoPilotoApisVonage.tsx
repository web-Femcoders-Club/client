import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { NotaPost, SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

/*
  El código promocional de Vonage y la lista de espera son solo para la
  comunidad: viven en /vonage y /welcome, detrás del login. Este post no los nombra en
  abierto; manda a registrarse o a entrar. Las inscripciones al piloto cerraron
  el 18 de octubre de 2026 (server#147).
*/

/*
  Las preguntas frecuentes se pintan y se declaran como FAQPage desde la misma
  lista, para que el texto visible y el de los datos estructurados no puedan
  separarse. Cada respuesta se sostiene sola y solo dice lo que ya cuenta el
  post: un buscador generativo puede citarla sin leer el resto.
*/
const PREGUNTAS = [
  {
    pregunta: "¿Qué es el programa piloto de FemCoders Club con las APIs de Vonage?",
    respuesta:
      "Es la primera edición de un programa en el que integrantes de FemCoders Club trabajan en pequeños equipos para desarrollar una aplicación real con las APIs de Vonage, con el acompañamiento de mentoras de la comunidad. Nace de la colaboración de FemCoders Club con el Vonage Community Partnership Program.",
  },
  {
    pregunta: "¿Cuánto dura el programa piloto y cómo se organiza?",
    respuesta:
      "Dura unas seis semanas y es 100 % online, con flexibilidad para que cada equipo se organice según su disponibilidad. No es un curso tradicional: cada equipo explora ideas, toma decisiones y resuelve problemas mientras construye su aplicación.",
  },
  {
    pregunta: "¿Para quién es el programa piloto con las APIs de Vonage?",
    respuesta:
      "Para quienes están dando sus primeros pasos, para quienes quieren seguir creciendo o probar nuevas herramientas y también para quienes ya tienen experiencia y les apetece construir algo en comunidad. No hace falta tener años de experiencia programando: lo importante son las ganas de aprender, compartir conocimientos y participar.",
  },
  {
    pregunta: "¿Qué incluye el programa piloto con las APIs de Vonage?",
    respuesta:
      "El acompañamiento de mentoras de FemCoders Club y créditos para utilizar las APIs de Vonage durante el desarrollo del proyecto.",
  },
  {
    pregunta: "¿Todavía puedo apuntarme al programa piloto?",
    respuesta:
      "Las inscripciones al programa piloto cerraron el domingo 18 de octubre de 2026. Para participar en los próximos proyectos de FemCoders Club, hay que registrarse en la web, o entrar con tu cuenta si ya la tienes, y apuntarse a la lista de espera de la página de bienvenida.",
  },
];

const ProyectoPilotoApisVonage: React.FC = () => (
  <>
      <Helmet>
        <title>
          Primer programa piloto con las APIs de Vonage | FemCoders Club
        </title>
        <meta
          name="description"
          content="Seis semanas en pequeños equipos, 100 % online y con mentoras, para crear una aplicación con las APIs de Vonage. Inscripciones cerradas; lista de espera abierta."
        />
        <meta
          name="keywords"
          content="programa piloto Vonage, APIs de Vonage, Vonage Community Partnership Program, proyecto en equipo, mentoras, SMS, voz, vídeo, verificación, WhatsApp, FemCoders Club, mujeres en tecnología, aprender construyendo"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/proyecto-piloto-apis-vonage"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Primer programa piloto con las APIs de Vonage"
        />
        <meta
          property="og:description"
          content="Seis semanas en pequeños equipos, 100 % online y con mentoras, para crear una aplicación con las APIs de Vonage. Inscripciones cerradas; lista de espera abierta."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/proyecto-piloto-apis-vonage"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/proyecto-piloto-apis-vonage.jpg"
        />
        <meta
          property="og:image:alt"
          content="Ilustración generada con IA: tres chicas sonríen frente a sus portátiles, con los logotipos de FemCoders Club y Vonage, iconos de mensajes, llamada, vídeo y verificación, y libros con las palabras Build, Learn y Together"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Primer programa piloto con las APIs de Vonage"
        />
        <meta
          name="twitter:description"
          content="Seis semanas en pequeños equipos, 100 % online y con mentoras, para crear una aplicación con las APIs de Vonage. Inscripciones cerradas; lista de espera abierta."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/proyecto-piloto-apis-vonage.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-10-11T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Vonage" />
        <meta property="article:tag" content="APIs" />
        <meta property="article:tag" content="Proyecto en equipo" />
        <meta property="article:tag" content="Mentoría" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/proyecto-piloto-apis-vonage",
              headline:
                "De aprender a construir: nuestro primer programa piloto con las APIs de Vonage",
              description:
                "Seis semanas en pequeños equipos, 100 % online y con mentoras, para crear una aplicación con las APIs de Vonage. Inscripciones cerradas; lista de espera abierta.",
              image: "/assets/noticias/proyecto-piloto-apis-vonage.jpg",
              datePublished: "2026-10-11T10:00:00Z",
              // Aviso de inscripciones cerradas y lista de espera (server#147).
              dateModified: "2026-10-19T10:00:00Z",
              about: {
                "@type": "Organization",
                name: "Vonage",
                url: "https://www.vonage.com/",
                parentOrganization: {
                  "@type": "Organization",
                  name: "Ericsson",
                },
              },
              keywords: [
                "programa piloto Vonage",
                "APIs de Vonage",
                "Vonage Community Partnership Program",
                "proyecto en equipo",
                "mentoras",
                "FemCoders Club",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: PREGUNTAS.map(({ pregunta, respuesta }) => ({
              "@type": "Question",
              name: pregunta,
              acceptedAnswer: { "@type": "Answer", text: respuesta },
            })),
          })}
        </script>
      </Helmet>

    <PlantillaPost
      ruta="/noticias/proyecto-piloto-apis-vonage"
      titulo="De aprender a construir: nuestro primer programa piloto con las APIs de Vonage"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={54}
      portadaConIA
      entradilla={
        <>
          <p>
            Cuando en septiembre anunciamos que FemCoders Club se incorporaba al{" "}
            <Link to="/noticias/vonage-community-partnership-program">
              Vonage Community Partnership Program
            </Link>
            , compartimos una colaboración que nos abría nuevas posibilidades
            para acercar herramientas y tecnologías reales a nuestra comunidad.
            Nos interesaba que no se quedara únicamente en conocer nuevas APIs,
            sino que también pudiéramos experimentar con ellas, desarrollar
            proyectos y seguir creciendo profesionalmente.
          </p>
          <p>
            De ahí nació la idea de crear proyectos juntas, y hoy abrimos las
            inscripciones de{" "}
            <strong>
              nuestro primer programa piloto para crear aplicaciones con las
              APIs de Vonage
            </strong>
            .
          </p>
        </>
      }
    >
      {/*
        Va antes del primer apartado porque la entradilla dice «hoy abrimos las
        inscripciones»: quien llega ahora tiene que saber lo primero que ya
        cerraron, y qué puede hacer en su lugar.
      */}
      <NotaPost titulo="Actualización: inscripciones cerradas">
        <p>
          Las inscripciones al programa piloto cerraron el{" "}
          <strong>domingo 18 de octubre de 2026</strong>. Gracias a todas las
          personas que os habéis sumado a esta primera edición.
        </p>
        <p>
          Si te gustaría participar en los próximos proyectos de la comunidad,{" "}
          <Link to="/register">regístrate en FemCoders Club</Link> y completa el
          formulario de la lista de espera que encontrarás en tu página de
          bienvenida. Si ya tienes cuenta, <Link to="/login">entra</Link> y lo
          tendrás ahí.
        </p>
      </NotaPost>

      <SeccionPost titulo="Un proyecto en equipo">
        <p>
          Durante{" "}
          <strong>unas seis semanas</strong>, las participantes trabajarán en
          pequeños equipos para desarrollar una aplicación real utilizando las
          APIs de Vonage. Será una experiencia <strong>100 % online</strong>,
          con flexibilidad para organizarse según su disponibilidad y con el
          acompañamiento de mentoras de FemCoders Club. La propuesta no consiste
          en seguir un curso tradicional: queremos que cada equipo pueda
          explorar ideas, tomar decisiones, resolver problemas y aprender
          construyendo algo en común.
        </p>
        <p>
          No hace falta tener años de experiencia programando, y tenerla
          tampoco deja a nadie fuera. El programa está pensado para quienes
          están dando sus primeros pasos, para quienes quieren seguir creciendo
          o probar nuevas herramientas y también para quienes ya tienen
          experiencia y les apetece construir algo en comunidad. Lo importante
          son las ganas de aprender, compartir conocimientos y participar.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Dos maneras de acercarse a las APIs de Vonage">
        <p>
          Esta colaboración también permite que cada integrante de FemCoders
          Club explore recursos y herramientas de Vonage a su ritmo, de manera
          autónoma. Quien prefiera experimentar por su cuenta puede acceder a la
          información disponible dentro de su espacio privado en nuestra web,
          sin necesidad de participar en el piloto.
        </p>
        <p>
          Y quienes tengan ganas de construir en equipo pueden apuntarse al
          programa. Las participantes contarán con{" "}
          <strong>créditos para utilizar las APIs de Vonage</strong> durante el
          desarrollo de sus proyectos, lo que les permitirá probar integraciones
          y llevar sus ideas a la práctica. Además, habrá alguna sorpresa más
          que compartiremos cuando llegue el momento.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Una colaboración que empieza a tomar forma">
        <p>
          Para FemCoders Club, el valor de esta iniciativa está en ofrecer
          oportunidades para aprender haciendo, trabajar con otras
          desarrolladoras y acercarse a tecnologías que se utilizan en proyectos
          reales. El apoyo de Vonage nos ayuda a dar ese paso, mientras que la
          organización y el acompañamiento del programa nacen de nuestra propia
          comunidad.
        </p>
        <p>
          Nos gustaría que esta primera edición fuera también el comienzo de una
          historia que podamos contar juntas: conocer a los equipos, seguir la
          evolución de las aplicaciones y compartir lo que aprendamos durante el
          proceso. Más adelante podremos mostrar los proyectos terminados y dar
          voz a las participantes que quieran contar su experiencia.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Preguntas frecuentes">
        {PREGUNTAS.map(({ pregunta, respuesta }) => (
          <React.Fragment key={pregunta}>
            <h3>{pregunta}</h3>
            <p>{respuesta}</p>
          </React.Fragment>
        ))}
      </SeccionPost>

      <SeccionPost titulo="¿Te apetece participar?">
        <p>
          Las inscripciones al programa piloto cerraron el{" "}
          <strong>domingo 18 de octubre de 2026</strong>. Gracias a todas las
          personas que os habéis apuntado: con vuestras respuestas estamos
          organizando los equipos, y os escribiremos para contaros los
          siguientes pasos.
        </p>
        <p>
          Si te apetece participar en los próximos proyectos de la comunidad,
          puedes apuntarte a nuestra lista de espera desde tu página de
          bienvenida. Te preguntamos con qué tecnologías has trabajado o te gustaría trabajar,
          si te gustaría acompañar a un equipo como mentora y, si tienes una, tu
          idea de proyecto. El equipo se pondrá en contacto contigo cuando haya
          un proyecto nuevo.
        </p>
        <p>
          <Link to="/register" className="fc-boton">
            Registrarme en FemCoders Club
          </Link>
        </p>
        <p>
          ¿Ya tienes cuenta? <Link to="/login">Entra aquí</Link>.
        </p>
        <p>
          Gracias a Vonage por su apoyo y por ayudarnos a acercar nuevas
          oportunidades de aprendizaje y desarrollo a nuestra comunidad.
        </p>
        <p>
          Si quieres conocer el origen de esta colaboración, puedes leer{" "}
          <Link to="/noticias/vonage-community-partnership-program">
            nuestra noticia de septiembre
          </Link>
          .
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ProyectoPilotoApisVonage;
