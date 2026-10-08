import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

const VonageCommunityPartnership: React.FC = () => (
  <>
      <Helmet>
        <title>
          FemCoders Club se une al Vonage Community Partnership Program |
          FemCoders Club
        </title>
        <meta
          name="description"
          content="Nos unimos al programa de Vonage (part of Ericsson). Ya hay novedades dentro para la comunidad, y queremos montar un proyecto en grupo con sus APIs de voz, vídeo, mensajería y verificación."
        />
        <meta
          name="keywords"
          content="Vonage Community Partnership Program, Vonage, Ericsson, APIs de comunicaciones, comunidad developer, FemCoders Club, Lucinda Abberley, Max Chambers, mujeres en tecnología, APIs de voz y vídeo, mensajería, verificación"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/vonage-community-partnership-program"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club se une al Vonage Community Partnership Program | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Nos unimos al programa de Vonage (part of Ericsson). Ya hay novedades dentro para la comunidad, y queremos montar un proyecto en grupo con sus APIs de voz, vídeo, mensajería y verificación."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/vonage-community-partnership-program"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/vonage-femcodersclub.jpg"
        />
        <meta
          property="og:image:alt"
          content="Vonage x fem Coders Club, colaboración para impulsar a las mujeres en tecnología. Los logotipos de Vonage —part of Ericsson— y de FemCoders Club, uno junto al otro"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club se une al Vonage Community Partnership Program"
        />
        <meta
          name="twitter:description"
          content="Nos unimos al programa de Vonage (part of Ericsson). Ya hay novedades dentro para la comunidad, y queremos montar un proyecto en grupo con sus APIs de voz, vídeo, mensajería y verificación."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/vonage-femcodersclub.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-09-10T10:00:00Z"
        />
        {/*
          El artículo se actualizó con las novedades que ya están disponibles.
          Sin `modified_time`, buscadores y agregadores siguen creyendo que lo
          último que se dijo aquí es «muy pronto habrá novedades».
        */}
        <meta
          property="article:modified_time"
          content="2026-09-13T12:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Vonage" />
        <meta property="article:tag" content="Community Partnership" />
        <meta property="article:tag" content="APIs" />
        <meta property="article:tag" content="Comunidad Developer" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/vonage-community-partnership-program",
              headline:
                "FemCoders Club se une al Vonage Community Partnership Program",
              description:
                "Nos unimos al programa de Vonage (part of Ericsson). Ya hay novedades dentro para la comunidad, y queremos montar un proyecto en grupo con sus APIs de voz, vídeo, mensajería y verificación.",
              image: "/assets/noticias/vonage-femcodersclub.jpg",
              datePublished: "2026-09-10T10:00:00Z",
              about: {
                "@type": "Organization",
                name: "Vonage",
                url: "https://www.vonage.com/",
                description:
                  "Compañía global de comunicaciones cloud y APIs, con un ecosistema de más de 1,8 millones de developers registrados.",
                parentOrganization: {
                  "@type": "Organization",
                  name: "Ericsson",
                },
              },
              contributor: [
                {
                  "@type": "Person",
                  name: "Lucinda Abberley",
                  affiliation: {
                    "@type": "Organization",
                    name: "Vonage",
                  },
                  sameAs:
                    "https://www.linkedin.com/in/lucinda-abberley-b1671744/",
                },
                {
                  "@type": "Person",
                  name: "Max Chambers",
                  affiliation: {
                    "@type": "Organization",
                    name: "Vonage",
                  },
                  sameAs: "https://www.linkedin.com/in/maxchambers/",
                },
              ],
              keywords: [
                "Vonage Community Partnership Program",
                "Vonage",
                "Ericsson",
                "APIs de comunicaciones",
                "comunidad developer",
                "FemCoders Club",
                "Lucinda Abberley",
                "Max Chambers",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
      </Helmet>

    <PlantillaPost
      ruta="/noticias/vonage-community-partnership-program"
      titulo="FemCoders Club se une al Vonage Community Partnership Program"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={49}
      portadaConIA
      entradilla={
        <>
          <p>
            Septiembre empieza con una noticia importante para FemCoders Club:{" "}
            <strong>nos unimos al Vonage Community Partnership Program</strong>,
            una colaboración que nos conecta con uno de los ecosistemas
            tecnológicos internacionales más importantes en el ámbito de las
            comunicaciones y las APIs.
          </p>
          <p>
            Para nosotras, esta alianza tiene mucho que ver con cómo entendemos
            el crecimiento profesional dentro de una comunidad tecnológica:
            conocer nuevas herramientas, experimentar con ellas y acercarnos a
            tecnologías que después encontramos en proyectos y entornos
            profesionales reales.
          </p>
        </>
      }
    >
      <SeccionPost titulo="De HackBarna a formar parte del programa">
        <p>
          Nuestro primer contacto con el ecosistema de{" "}
          <a
            href="https://www.vonage.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Vonage</strong>
          </a>{" "}
          llegó el año pasado a través de{" "}
          <Link to="/noticias/HackBarna2025">HackBarna 2025</Link>. Desde
          entonces hemos seguido de cerca su comunidad developer y todo lo que
          están construyendo alrededor de sus APIs y tecnologías de
          comunicación.
        </p>
        <p>
          Este año volvemos a coincidir: Vonage es Gold Sponsor de{" "}
          <Link to="/noticias/hackbarna-ai-summit-26-desde-dentro">
            HackBarna AI Summit 26
          </Link>
          , el hackathon en el que estaremos los días 19 y 20 de septiembre,
          esta vez también con equipo propio.
        </p>
        <p>
          Ahora damos un paso más y{" "}
          <strong>
            FemCoders Club pasa a formar parte de su Community Partnership
            Program
          </strong>
          .
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Por qué nos interesa especialmente Vonage?">
        <p>
          Vonage, parte de Ericsson, es una compañía global especializada en
          comunicaciones cloud y APIs, con un ecosistema que reúne a más de{" "}
          <strong>1,8 millones de developers registrados</strong>.
        </p>
        <p>
          Pero, más allá de las cifras, lo que realmente nos interesa es lo que
          podemos hacer con su tecnología.
        </p>
        <p>
          Sus APIs permiten integrar capacidades como{" "}
          <strong>
            voz, vídeo, mensajería o verificación directamente dentro de una
            aplicación
          </strong>
          , sin tener que construir desde cero toda la infraestructura necesaria
          para hacerlas funcionar.
        </p>
        <p>
          Para una developer, poder trabajar con este tipo de herramientas
          significa mucho más que conocerlas sobre el papel. Significa probarlas,
          integrarlas, entender cómo funcionan y descubrir qué podemos construir
          con ellas.
        </p>
        <p>
          Y precisamente ahí está una de las razones principales por las que
          esta colaboración nos ilusiona.
        </p>
        <p>
          Queremos que FemCoders Club siga siendo un espacio donde podamos
          crecer profesionalmente, pero también donde tengamos la oportunidad de{" "}
          <strong>
            trabajar con tecnología real, experimentar y salir de lo que ya
            conocemos
          </strong>
          .
        </p>
        <p>
          Formar parte del <strong>Vonage Community Partnership Program</strong>{" "}
          nos abre además la puerta a un ecosistema tecnológico internacional y
          a nuevas posibilidades para seguir creando oportunidades para nuestra
          comunidad.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Las personas detrás de esta colaboración">
        <p>
          En este camino hemos tenido la suerte de contar con dos personas del
          equipo de Vonage que desde el principio nos han recibido con muchísima
          cercanía y cariño, y con muchas ganas de construir cosas junto a
          nuestra comunidad:
        </p>
        <ul>
          <li>
            <strong>Lucinda Abberley</strong> — equipo de Vonage.{" "}
            <a
              href="https://www.linkedin.com/in/lucinda-abberley-b1671744/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver el perfil de LinkedIn de Lucinda Abberley"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Max Chambers</strong> — equipo de Vonage.{" "}
            <a
              href="https://www.linkedin.com/in/maxchambers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver el perfil de LinkedIn de Max Chambers"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p>
          Gracias especialmente a <strong>Lucinda y Max</strong> por la
          confianza en FemCoders Club y, sobre todo, por el cariño y la cercanía
          que nos habéis mostrado desde el primer momento.
        </p>
        <p>
          Para nosotras, la forma en la que empiezan estas colaboraciones
          también importa.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Lo que viene">
        <p>
          Cuando publicamos esta noticia dijimos que muy pronto habría
          novedades. Ya las hay:{" "}
          <strong>
            las primeras cosas de esta colaboración están disponibles para
            quien forma parte de la comunidad
          </strong>
          , dentro de la web.
        </p>
        <p>
          No lo contamos aquí en abierto porque son para las integrantes del
          club. Si tienes cuenta, las encuentras nada más entrar, en tu página
          de bienvenida.
        </p>
        <p>
          Y hay una segunda parte que sí podemos contar, porque depende de
          vosotras:{" "}
          <strong>
            queremos preparar para octubre un programa para construir uno o
            varios proyectos en grupo
          </strong>{" "}
          con las APIs de Vonage —voz, vídeo, mensajería y verificación—.
        </p>
        <p>
          No está decidido todavía, y preferimos decirlo a prometerlo. Antes de
          fijar fechas o formato necesitamos saber cuántas personas tendrían
          ganas de participar y con cuánto tiempo cuentan. Si sale adelante,
          será porque hay gente suficiente para que tenga sentido.
        </p>
        <p>
          Esa pregunta está dentro de la web, en tu página de bienvenida: son
          tres preguntas y se contestan en un minuto.
        </p>

        <h3>Ya está disponible</h3>
        <p>
          Regístrate en FemCoders Club y lo encontrarás dentro, en tu página de
          bienvenida. Si ya tienes cuenta, solo tienes que entrar.
        </p>
        <p>
          <Link to="/register" className="fc-boton">
            Registrarme en FemCoders Club
          </Link>
        </p>
        {/*
          Quien ya tiene cuenta no necesita registrarse, necesita entrar. Sin
          esta segunda puerta, el único botón la manda a un formulario de alta
          que va a rechazar su email y la deja sin saber qué hacer.
        */}
        <p>
          ¿Ya tienes cuenta? <Link to="/login">Entra aquí</Link>.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default VonageCommunityPartnership;
