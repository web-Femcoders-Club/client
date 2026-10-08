import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

const ColaboracionJune: React.FC = () => (
  <>
      <Helmet>
        <title>
          FemCoders Club colabora en el desarrollo de June, una plataforma
          contra la violencia digital de género | FemCoders Club
        </title>
        <meta
          name="description"
          content="FemCoders Club se suma como equipo de desarrollo al proyecto June, impulsado por la asociación In CoDe, una plataforma para documentar la violencia política de género y la censura digital en España."
        />
        <meta
          name="keywords"
          content="June, In CoDe, violencia digital de género, violencia política de género, censura digital, FemCoders Club, tecnología feminista, mujeres en tecnología, desarrollo web con impacto social"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/colaboracion-june"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club colabora en el desarrollo de June, una plataforma contra la violencia digital de género | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Nos sumamos como equipo de desarrollo al proyecto June, de la asociación In CoDe, para documentar la violencia política de género y la censura digital en España."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/colaboracion-june"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/colaboracion-june.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club colabora en el desarrollo de June, una plataforma contra la violencia digital de género"
        />
        <meta
          name="twitter:description"
          content="Nos sumamos como equipo de desarrollo al proyecto June, de la asociación In CoDe, para documentar la violencia política de género y la censura digital en España."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/colaboracion-june.png"
        />

        <meta
          property="article:published_time"
          content="2026-07-05T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="June" />
        <meta property="article:tag" content="In CoDe" />
        <meta property="article:tag" content="Violencia Digital de Género" />
        <meta property="article:tag" content="Tecnología Feminista" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/colaboracion-june",
              headline:
                "FemCoders Club colabora en el desarrollo de June, una plataforma contra la violencia digital de género",
              description:
                "FemCoders Club se suma como equipo de desarrollo al proyecto June, impulsado por la asociación In CoDe, una plataforma para documentar la violencia política de género y la censura digital en España.",
              image: "/assets/noticias/colaboracion-june.png",
              datePublished: "2026-07-05T10:00:00Z",
              about: {
                "@type": "Organization",
                name: "In CoDe",
                url: "https://www.incodeong.org/",
                foundingDate: "2024",
                areaServed: "ES",
                description:
                  "Organización feminista y tecnopolítica dedicada a repensar los procesos democráticos para garantizar la participación activa y transformadora de las mujeres en la toma de decisiones políticas.",
              },
              contributor: [
                {
                  "@type": "Person",
                  name: "Irina Ichim",
                  jobTitle: "Arquitecta de software y desarrolladora fullstack",
                  sameAs:
                    "https://www.linkedin.com/in/irina-ichim-desarrolladora/",
                },
                {
                  "@type": "Person",
                  name: "Gabriela Bustamante",
                  jobTitle: "Desarrolladora backend",
                  sameAs: "https://www.linkedin.com/in/gabriela-bustamante-/",
                },
                {
                  "@type": "Person",
                  name: "Elvia Benedith",
                  jobTitle: "Ingeniera civil y desarrolladora web",
                  sameAs: "https://www.linkedin.com/in/elvia-benedith/",
                },
                {
                  "@type": "Person",
                  name: "Silvina Lucero Calderón",
                  jobTitle: "QA funcional",
                  sameAs: "https://www.linkedin.com/in/silvina-lucero/",
                },
              ],
              keywords: [
                "June",
                "In CoDe",
                "violencia digital de género",
                "violencia política de género",
                "censura digital",
                "FemCoders Club",
                "tecnología feminista",
              ],
            })
          )}
        </script>
      </Helmet>

    <PlantillaPost
      ruta="/noticias/colaboracion-june"
      titulo="FemCoders Club colabora en el desarrollo de June, una plataforma para documentar la violencia digital y política de género"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={44}
      portadaConIA
      entradilla={
        <>
          <p>
            Tenemos una noticia que nos hace mucha ilusión compartir: FemCoders
            Club se incorpora como equipo de desarrollo al proyecto{" "}
            <strong>June</strong>, impulsado por la asociación{" "}
            <a
              href="https://www.incodeong.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>In CoDe</strong>
            </a>. Antes de nada, queremos agradecer a In CoDe la confianza que
            ha depositado en nuestra comunidad para dar forma técnica a un
            proyecto tan necesario. No es una colaboración cualquiera, y lo
            sabemos.
          </p>
          <p>
            June es una plataforma pensada para recopilar, organizar y
            visibilizar información sobre{" "}
            <strong>violencia política de género</strong> y{" "}
            <strong>censura digital</strong> en España.
          </p>
        </>
      }
    >
      <SeccionPost titulo="Quién está detrás: In CoDe">
        <p>
          <a
            href="https://www.incodeong.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            In CoDe
          </a>{" "}
          es una organización feminista y tecnopolítica, fundada en 2024 y con
          sede en España, dedicada a repensar los procesos democráticos para
          garantizar la participación activa y transformadora de las mujeres en
          la toma de decisiones políticas, con la inteligencia artificial y la
          tecnología como aliadas estratégicas.
        </p>
        <p>
          Su misión es crear espacios de participación ciudadana accesibles e
          inclusivos que impulsen la educación cívica digital y aseguren que la
          innovación tecnológica no reproduzca las desigualdades estructurales
          de género.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Por qué existe June">
        <p>
          La iniciativa nace de una necesidad muy concreta: gran parte de las
          experiencias de violencia digital hacia las mujeres quedan dispersas
          entre redes sociales, investigaciones aisladas y testimonios
          individuales, sin un espacio común donde documentarlas de forma
          ordenada y accesible.
        </p>
        <p>
          June busca cubrir ese vacío: una herramienta que combine rigor
          técnico con una atención muy cuidadosa a la privacidad de las
          personas que aportan su experiencia.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cómo está construida June: un stack pensado para la privacidad">
        <p>
          June es una aplicación <strong>React</strong> escrita en{" "}
          <strong>TypeScript</strong> en modo estricto, construida sobre{" "}
          <strong>Next.js</strong> con App Router. Los estilos se apoyan en{" "}
          <strong>Tailwind CSS</strong> sobre un design system propio de
          tokens, y la interfaz está disponible en castellano y catalán.
        </p>
        <p>
          No hay un backend separado: el mismo TypeScript se ejecuta en el
          servidor mediante Server Components, y la capa de datos se apoya en{" "}
          <strong>PostgreSQL</strong> a través de <strong>Prisma</strong>. Una
          sola base de código, un solo lenguaje, menos superficie donde algo
          pueda desalinearse.
        </p>

        <h3>La parte más interesante: mapas sin mapas</h3>
        <p>
          Aquí viene la decisión de la que más orgullosas estamos.{" "}
          <strong>June no usa ninguna librería de mapas ni de gráficos.</strong>{" "}
          Ni Leaflet, ni Mapbox, ni Chart.js. El mapa de España se proyecta a
          SVG en el servidor con <strong>d3-geo</strong> y{" "}
          <strong>topojson-client</strong>, a partir de las topologías
          abiertas de <strong>es-atlas</strong>. Los gráficos de barras y las
          series temporales están escritos a mano, directamente en SVG.
        </p>
        <p>
          Esto no es purismo técnico. Un mapa convencional carga sus imágenes
          desde los servidores de un tercero, lo que significa que ese tercero
          puede ver qué zonas del mapa consulta cada visitante. En una
          plataforma sobre violencia política de género, eso es inaceptable:
          revelaría el rastro de una mujer consultando datos sobre su propia
          provincia.
        </p>
        <p>
          Al generar el SVG en el servidor,{" "}
          <strong>
            el navegador de quien visita June no hace ni una sola petición a
            servidores externos
          </strong>. Nadie fuera del proyecto puede observar qué consulta. Es
          una decisión de privacidad antes que una decisión de arquitectura.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El equipo detrás del desarrollo">
        <p>Estas son las FemCoders que están dando forma a June:</p>
        <ul>
          <li>
            <img
              src="/public-optimized/mobile/assets/equipoFemCodersClub/Irina-Ichim-fundadora-femCodersClub.webp"
              alt=""
              loading="lazy"
            />
            <strong>
              <a
                href="https://www.linkedin.com/in/irina-ichim-desarrolladora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Irina Ichim
              </a>
            </strong>
            <p>
              Fundadora de FemCoders Club. Fullstack y arquitecta de software
              especializada en la creación de productos digitales end-to-end,
              con un enfoque claro en proyectos AI-first, automatización y
              sistemas escalables orientados a impacto real.
            </p>
          </li>
          <li>
            <img
              src="/public-optimized/mobile/assets/noticias/Gabriela-Bustamante-desarrolladora-backend.webp"
              alt=""
              loading="lazy"
            />
            <strong>
              <a
                href="https://www.linkedin.com/in/gabriela-bustamante-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gabriela Bustamante
              </a>
            </strong>
            <p>
              Desarrolladora backend con una mirada analítica, cuidadosa y
              orientada a construir soluciones seguras, mantenibles y con
              sentido. En June ha trabajado desde la arquitectura y la lógica
              de servidor, cuidando especialmente la calidad técnica, la
              privacidad de los datos y la coherencia del producto. Le interesa
              crear tecnología robusta que acompañe proyectos con impacto real.
            </p>
          </li>
          <li>
            <img
              src="/public-optimized/mobile/assets/equipoFemCodersClub/Elvia-Benedith-fundadora-femCodersClub.webp"
              alt=""
              loading="lazy"
            />
            <strong>
              <a
                href="https://www.linkedin.com/in/elvia-benedith/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elvia Benedith
              </a>
            </strong>
            <p>
              Ingeniera civil y desarrolladora web, cofundadora de FemCoders
              Club. Se considera una crafter o «manitas»: le encanta leer
              manuales, instalar cosas, programar y pensar. Es una persona muy
              observadora, siempre buscando aprender y mejorar continuamente.
            </p>
          </li>
          <li>
            <img
              src="/public-optimized/mobile/assets/noticias/Silvina-Lucero-QA-funcional.webp"
              alt=""
              loading="lazy"
            />
            <strong>
              <a
                href="https://www.linkedin.com/in/silvina-lucero/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Silvina Lucero Calderón
              </a>
            </strong>
            <p>
              Cofundadora de FemCoders Club. QA funcional, cree en el poder de
              la tecnología para transformar vidas de forma positiva. Su
              compromiso con el aprendizaje continuo la impulsa a seguir
              creciendo para contribuir al desarrollo de soluciones digitales
              más inclusivas, accesibles y de calidad.
            </p>
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Un proyecto que recién empieza">
        <p>
          El desarrollo se inició hace poco y avanza de forma progresiva, en
          estrecha coordinación con In CoDe. Iremos compartiendo novedades a
          medida que el proyecto tome forma.
        </p>
        <p>
          Gracias de nuevo a In CoDe por confiar en FemCoders Club para esta
          colaboración. Es exactamente el tipo de proyecto por el que existe
          nuestra comunidad: tecnología con impacto real, hecha por mujeres,
          para causas que importan.
        </p>

        <h3>¿Quieres seguir de cerca cómo avanza June?</h3>
        <p>
          Iremos publicando actualizaciones a medida que el proyecto crezca. Si
          quieres formar parte de proyectos como este, únete a nuestra
          comunidad.
        </p>
        <p>
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Únete a la comunidad
          </a>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ColaboracionJune;
