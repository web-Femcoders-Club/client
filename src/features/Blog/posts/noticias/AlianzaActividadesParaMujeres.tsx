import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

const AlianzaActividadesParaMujeres: React.FC = () => (
  <>
      <Helmet>
        <title>
          Alianza con Actividades para Mujeres | FemCoders Club
        </title>
        <meta
          name="description"
          content="Nuestras actividades se suman al calendario de Actividades para Mujeres, la plataforma de Marta Gimeno Robles. Qué ofrece y cómo publicar las vuestras gratis."
        />
        <meta
          name="keywords"
          content="Actividades para Mujeres, Marta Gimeno Robles, alianza, actividades para mujeres, agenda de actividades, networking, eventos para mujeres, Ciencia y Tecnología, FemCoders Club, mujeres en tecnología"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/alianza-actividades-para-mujeres"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club y Actividades para Mujeres consolidan una alianza"
        />
        <meta
          property="og:description"
          content="Nuestras actividades se suman al calendario de Actividades para Mujeres, la plataforma de Marta Gimeno Robles. Qué ofrece y cómo publicar las vuestras gratis."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/alianza-actividades-para-mujeres"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/alianza-actividades-para-mujeres.jpg"
        />
        <meta
          property="og:image:alt"
          content="Alianza de impacto. Los logotipos de FemCoders Club y de Actividades para Mujeres, uno junto al otro, y el lema «Juntas para poner a la mujer en el centro»"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club y Actividades para Mujeres consolidan una alianza"
        />
        <meta
          name="twitter:description"
          content="Nuestras actividades se suman al calendario de Actividades para Mujeres, la plataforma de Marta Gimeno Robles. Qué ofrece y cómo publicar las vuestras gratis."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/alianza-actividades-para-mujeres.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-10-19T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Actividades para Mujeres" />
        <meta property="article:tag" content="Alianzas" />
        <meta property="article:tag" content="Comunidad" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/alianza-actividades-para-mujeres",
              headline:
                "FemCoders Club y Actividades para Mujeres consolidan una alianza para impulsar el talento femenino",
              description:
                "Nuestras actividades se suman al calendario de Actividades para Mujeres, la plataforma de Marta Gimeno Robles. Qué ofrece y cómo publicar las vuestras gratis.",
              image: "/assets/noticias/alianza-actividades-para-mujeres.jpg",
              datePublished: "2026-10-19T10:00:00Z",
              about: {
                "@type": "Organization",
                name: "Actividades para Mujeres",
                url: "https://www.actividadesparamujeres.com/",
                description:
                  "Plataforma que conecta a mujeres de habla hispana con iniciativas y eventos dirigidos a mujeres en sus ciudades.",
                founder: {
                  "@type": "Person",
                  name: "Marta Gimeno Robles",
                  sameAs: "https://www.linkedin.com/in/mgimeno/",
                },
                sameAs: [
                  "https://www.instagram.com/actividadesparamujeres",
                  "https://www.linkedin.com/company/actividadesparamujeres/",
                ],
              },
              keywords: [
                "Actividades para Mujeres",
                "Marta Gimeno Robles",
                "alianza",
                "agenda de actividades para mujeres",
                "FemCoders Club",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
      </Helmet>

    <PlantillaPost
      ruta="/noticias/alianza-actividades-para-mujeres"
      titulo="FemCoders Club y Actividades para Mujeres consolidan una alianza para impulsar el talento femenino"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={55}
      entradilla={
        <>
          <p>
            Nos alegra anunciar que la Asociación FemCoders Club y{" "}
            <strong>Actividades para Mujeres</strong> han formalizado un acuerdo
            de colaboración estratégico. Actividades para Mujeres es la
            plataforma fundada por{" "}
            <a
              href="https://www.linkedin.com/in/mgimeno/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marta Gimeno Robles
            </a>{" "}
            diseñada para conectar a mujeres de habla hispana con iniciativas y
            eventos dirigidos a mujeres en sus ciudades. Este acuerdo marca el
            inicio de la nueva línea de alianzas del portal con entidades sin
            ánimo de lucro, y nos llena de entusiasmo ser sus primeras
            compañeras en este camino.
          </p>
          <p>
            A partir de ahora, las actividades de nuestra comunidad estarán
            integradas en su calendario junto a un centenar de propuestas
            diversas. Gracias a esta integración, cualquier mujer que explore el
            portal en busca de un taller, una red de networking o un espacio de
            desarrollo personal podrá descubrir la propuesta de FemCoders Club y
            acercarse a la tecnología de forma accesible e inclusiva.
          </p>
          <p>
            En este artículo os contamos en detalle qué ofrece Actividades para
            Mujeres, el propósito detrás de la plataforma, el alcance de nuestra
            alianza y cómo podéis aprovechar sus herramientas, tanto para
            participar en iniciativas como para difundir las vuestras.
          </p>
        </>
      }
    >
      <SeccionPost titulo="¿Qué es Actividades para Mujeres?">
        <p>
          <a
            href="https://www.actividadesparamujeres.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Actividades para Mujeres</strong>
          </a>{" "}
          es un espacio centralizado que reúne y visibiliza iniciativas
          dirigidas a mujeres en diversos puntos geográficos. Como concibe su
          fundadora, la plataforma nace con la vocación de convertirse en un
          punto de referencia accesible al que acudir para descubrir agendas
          locales, crear redes de apoyo y compartir experiencias.
        </p>
        <p>
          Su oferta destaca por la pluralidad de propuestas que recopila: desde
          equipamientos públicos y agendas municipales hasta colectivos y
          entidades diversas, además de iniciativas independientes. Esta
          riqueza colectiva abarca ámbitos como la capacitación profesional, el
          emprendimiento, la cultura y el bienestar en distintas etapas vitales.
        </p>
        <p>
          El portal permite filtrar por ubicación y temática, e incluye la
          opción de suscribirse a un boletín periódico con novedades locales
          (actualmente disponible para Barcelona, Madrid y Valencia). Os
          invitamos a explorar la plataforma para descubrir todas las propuestas
          disponibles en vuestro entorno.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El liderazgo detrás del proyecto">
        <p>
          <strong>Marta Gimeno Robles</strong> es emprendedora con una
          trayectoria centrada en el tecnohumanismo, el desarrollo de
          comunidades y el impacto social. Su liderazgo une el alcance
          tecnológico con el fortalecimiento del tejido asociativo femenino,
          orientando la tecnología a generar conexiones humanas de valor.{" "}
          <a
            href="https://www.linkedin.com/in/mgimeno/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver el perfil de LinkedIn de Marta Gimeno Robles"
          >
            LinkedIn
          </a>
        </p>
        <p>
          Esta alianza responde a una visión compartida: entendemos la
          tecnología como una herramienta clave para abrir oportunidades,
          facilitar el aprendizaje continuo y potenciar el encuentro entre
          personas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Impacto de la alianza para FemCoders Club">
        <p>
          Por un lado, nuestras iniciativas estarán disponibles de forma
          continua en la sección de <strong>Ciencia y Tecnología</strong> del
          portal. Esto permitirá que nuevas profesionales y personas interesadas
          en el sector tecnológico conozcan la propuesta de la comunidad y
          puedan sumarse a nuestros encuentros.
        </p>
        <p>
          Por otro lado, la difusión cruzada facilitará que perfiles diversos
          encuentren un punto de entrada sencillo a nuestra red, fortaleciendo
          el intercambio de conocimientos y la colaboración activa entre
          comunidades.
        </p>
        <p>
          Para FemCoders Club, este acuerdo supone un paso natural en nuestra
          estrategia de crecimiento, enriqueciendo la oferta tecnológica
          disponible en el ecosistema asociativo femenino.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cómo difundir vuestras propias iniciativas en la plataforma">
        <p>
          Si organizáis proyectos, grupos de estudio, sesiones de mentoría o
          encuentros profesionales, Actividades para Mujeres pone a disposición
          su espacio de forma <strong>totalmente gratuita</strong> para ampliar
          la difusión de vuestras convocatorias y conectar con más
          participantes.
        </p>
        <p>La plataforma contempla tres modalidades principales de publicación:</p>
        <ul>
          <li>
            <strong>Iniciativas profesionales</strong>: formaciones, talleres y
            actividades orientadas al desarrollo de competencias.
          </li>
          <li>
            <strong>Encuentros informales</strong>: espacios de trabajo
            conjunto, networking o asistencia a eventos grupales.
          </li>
          <li>
            <strong>Difusión de terceros</strong>: eventos o conferencias
            externas de interés para la comunidad que merezcan mayor
            visibilidad.
          </li>
        </ul>
        <p>
          El proceso de publicación es sencillo, gratuito y no requiere registro
          previo:
        </p>
        <ol>
          <li>
            Acceder al formulario en la sección{" "}
            <a
              href="https://www.actividadesparamujeres.com/publicar-actividad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Publicar actividad
            </a>{" "}
            del portal.
          </li>
          <li>
            Seleccionar la categoría adecuada (utilizando «Ciencia y
            Tecnología» para iniciativas de carácter tecnológico).
          </li>
          <li>
            Completar la modalidad (presencial u online), fecha, ubicación y
            enlace de inscripción.
          </li>
          <li>Añadir la descripción y una imagen gráfica promocional.</li>
        </ol>
        <p>
          Las actividades publicadas deben orientarse principalmente a mujeres.
          Si requerís asesoramiento para definir la categoría o preparar la
          descripción de vuestra propuesta, podéis contactar con el equipo a
          través de nuestros canales habituales.
        </p>
        <p>
          Para instituciones o colectivos interesados en acordar colaboraciones
          institucionales con el portal, es posible enviar propuestas
          directamente a{" "}
          <a href="mailto:hola@actividadesparamujeres.com">
            hola@actividadesparamujeres.com
          </a>
          .
        </p>
      </SeccionPost>

      <SeccionPost titulo="Dónde seguir nuestras próximas actividades">
        <p>
          Nuestras convocatorias oficiales seguirán estando disponibles de forma
          prioritaria en nuestra{" "}
          <Link to="/eventos">página de eventos</Link> y mediante nuestro
          boletín{" "}
          <a
            href="https://www.linkedin.com/newsletters/ctrl-ella-7494407888552169472/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ctrl+Ella
          </a>{" "}
          en LinkedIn. Asimismo, podréis consultar toda la programación
          actualizada en el{" "}
          <a
            href="https://www.actividadesparamujeres.com/actividades/"
            target="_blank"
            rel="noopener noreferrer"
          >
            calendario de Actividades para Mujeres
          </a>{" "}
          y seguir las novedades en sus perfiles oficiales de{" "}
          <a
            href="https://www.instagram.com/actividadesparamujeres"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          y{" "}
          <a
            href="https://www.linkedin.com/company/actividadesparamujeres/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          Expresamos nuestro agradecimiento a{" "}
          <strong>Marta Gimeno Robles</strong> por confiar en FemCoders Club
          para inaugurar esta etapa de alianzas. Seguimos trabajando juntas para
          fortalecer las oportunidades de las mujeres en el entorno digital.
        </p>
        <p>
          Asimismo, al ser nuestra comunidad un espacio multicultural, queremos
          recordar que Actividades para Mujeres está disponible en todo el mundo
          para cualquier mujer de habla hispana, facilitando que amigas o
          familiares en sus países de origen también puedan aprovechar sus
          recursos y conectar con iniciativas locales.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default AlianzaActividadesParaMujeres;
