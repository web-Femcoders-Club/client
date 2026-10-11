import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

/*
  El código promocional de Vonage y el formulario del piloto son solo para la
  comunidad: viven en /welcome, detrás del login. Este post no los nombra en
  abierto; manda a registrarse o a entrar.
*/

const ProyectoPilotoApisVonage: React.FC = () => (
  <>
      <Helmet>
        <title>
          De aprender a construir: nuestro primer programa piloto con las APIs
          de Vonage | FemCoders Club
        </title>
        <meta
          name="description"
          content="Abrimos nuestro primer programa piloto con las APIs de Vonage: seis semanas en pequeños equipos, online y con mentoras, para construir una aplicación real. Inscripciones hasta el 18 de octubre."
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
          content="De aprender a construir: nuestro primer programa piloto con las APIs de Vonage"
        />
        <meta
          property="og:description"
          content="Abrimos nuestro primer programa piloto con las APIs de Vonage: seis semanas en pequeños equipos, online y con mentoras, para construir una aplicación real. Inscripciones hasta el 18 de octubre."
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
          content="De aprender a construir: nuestro primer programa piloto con las APIs de Vonage. Tres chicas sonríen frente a sus portátiles, con los logotipos de FemCoders Club y Vonage, iconos de mensajes, llamada, vídeo y verificación, y unos libros con las palabras Build, Learn y Together"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="De aprender a construir: nuestro primer programa piloto con las APIs de Vonage"
        />
        <meta
          name="twitter:description"
          content="Seis semanas en pequeños equipos, online y con mentoras, para construir una aplicación real con las APIs de Vonage. Inscripciones hasta el 18 de octubre."
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
                "Abrimos nuestro primer programa piloto con las APIs de Vonage: seis semanas en pequeños equipos, online y con mentoras, para construir una aplicación real. Inscripciones hasta el 18 de octubre.",
              image: "/assets/noticias/proyecto-piloto-apis-vonage.jpg",
              datePublished: "2026-10-11T10:00:00Z",
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
            Un mes después, empezamos a convertir esa idea en algo concreto:{" "}
            <strong>
              nuestro primer programa piloto para crear aplicaciones con las
              APIs de Vonage
            </strong>
            .
          </p>
        </>
      }
    >
      <SeccionPost titulo="De una pregunta a un proyecto en equipo">
        <p>
          Todo empezó con tres preguntas que compartimos dentro de la comunidad:
          si os apetecía participar en un proyecto en grupo, cuántas horas
          podríais dedicarle cada semana y qué tecnologías os interesaban más,
          desde SMS y voz hasta vídeo, verificación o WhatsApp. Antes de definir
          el programa, queríamos escucharos y entender qué podía encajar con
          vuestro tiempo y vuestros intereses.
        </p>
        <p>
          Ahora damos el siguiente paso. Durante{" "}
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
          No hace falta tener años de experiencia programando. El programa está
          pensado tanto para quienes están dando sus primeros pasos como para
          quienes quieren seguir creciendo, probar nuevas herramientas o ganar
          experiencia colaborando en un proyecto. Lo importante son las ganas de
          aprender, compartir conocimientos y participar.
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

      <SeccionPost titulo="¿Te apetece participar?">
        <p>
          Las inscripciones están abiertas{" "}
          <strong>hasta el domingo 18 de octubre de 2026</strong>. Para
          participar, solo tienes que registrarte en FemCoders Club y responder
          las tres preguntas que encontrarás en tu página de bienvenida. Si ya
          tienes cuenta, puedes entrar directamente y completar el formulario.
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
