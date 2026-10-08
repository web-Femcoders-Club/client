import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost, TablaPost, TarjetasPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";
import { urlAbsoluta } from "../../components/siteUrl";

const HackBarnaAiSummit26DesdeDentro: React.FC = () => (
  <>
      <Helmet>
        <title>
          FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde
          dentro | FemCoders Club
        </title>
        <meta
          name="description"
          content="FemCoders Club vuelve a HackBarna AI Summit 26 como Community Partner y este año también participa en el hackathon con equipo propio. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona."
        />
        <meta
          name="keywords"
          content="hackbarna ai summit 26, hackathon ia barcelona, hackathon inteligencia artificial barcelona 2026, community partner, equipo femcoders, Lilibeth Bustos Linares, FemCoders Club, Norrsken House Barcelona, AI Summit Barcelona 2026, mujeres en tecnología"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/hackbarna-ai-summit-26-desde-dentro"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Volvemos como Community Partner y este año vamos un poco más allá: varias femcoders hemos formado equipo y también participaremos en el hackathon. 19 y 20 de septiembre en Norrsken House Barcelona."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/hackbarna-ai-summit-26-desde-dentro"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro"
        />
        <meta
          name="twitter:description"
          content="Community Partner y, además, equipo dentro del hackathon. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-09-09T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="HackBarna" />
        <meta property="article:tag" content="Hackathon" />
        <meta property="article:tag" content="Inteligencia Artificial" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="Community Partner" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/hackbarna-ai-summit-26-desde-dentro",
              headline:
                "FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro",
              description:
                "FemCoders Club vuelve a HackBarna AI Summit 26 como Community Partner y este año también participa en el hackathon con equipo propio. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona.",
              image: "/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg",
              datePublished: "2026-09-09T10:00:00Z",
              about: {
                "@type": "Event",
                name: "HackBarna AI Summit 26",
                // El `image` del artículo no lo hereda el evento: Google valida
                // el `Event` como entidad independiente de quien lo contiene.
                image: urlAbsoluta(
                  "/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg"
                ),
                description:
                  "Tercera edición del hackathon de inteligencia artificial de HackBarna, celebrada junto a AI Summit Barcelona 2026 en Norrsken House Barcelona.",
                startDate: "2026-09-19T09:00:00+02:00",
                endDate: "2026-09-20T20:00:00+02:00",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                url: "https://www.hackbcn.com/en/events/aisummit26",
                location: {
                  "@type": "Place",
                  name: "Norrsken House Barcelona",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Barcelona",
                    addressCountry: "ES",
                  },
                },
                organizer: {
                  "@type": "Organization",
                  name: "HackBarna",
                  url: "https://www.hackbcn.com/en",
                },
                // Un evento gratuito no se declara omitiendo `offers`, sino con
                // `price: "0"`: sin esto, un buscador no lee «gratis», lee «no
                // se sabe el precio».
                offers: {
                  "@type": "Offer",
                  url: "https://www.hackbcn.com/en/events/aisummit26",
                  price: "0",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
                // Sin `performer` a propósito: los jueces y mentoras los anuncia
                // HackBarna en su web, y no son un dato nuestro que podamos
                // sostener aquí. Search Console lo seguirá pidiendo — es un
                // aviso no crítico, y preferimos el hueco al dato inventado.
              },
              keywords: [
                "HackBarna AI Summit 26",
                "hackathon IA Barcelona",
                "Community Partner",
                "AI Summit Barcelona 2026",
                "Lilibeth Bustos Linares",
                "FemCoders Club",
                "Norrsken House Barcelona",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
      </Helmet>

    <PlantillaPost
      ruta="/noticias/hackbarna-ai-summit-26-desde-dentro"
      titulo="FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={48}
      entradilla={
        <>
          <p>
            Hay colaboraciones que crecen con el tiempo, y la nuestra con{" "}
            <strong>HackBarna</strong> es una de ellas.
          </p>
          <p>
            Los próximos <strong>19 y 20 de septiembre</strong>, FemCoders Club
            volverá a formar parte de{" "}
            <strong>HackBarna AI Summit 26 como Community Partner</strong>. Pero
            este año vamos un poco más allá: varias femcoders hemos formado
            equipo y también participaremos en el hackathon.
          </p>
          <p>
            Esta vez estaremos apoyando, compartiendo y animando a más mujeres a
            sumarse, como hemos hecho hasta ahora, pero también{" "}
            <strong>sentadas alrededor de una mesa, construyendo juntas</strong>.
          </p>
          <p>Y nos apetecía mucho contarlo.</p>
        </>
      }
    >
      <SeccionPost titulo="HackBarna AI Summit vuelve a Barcelona">
        <p>
          En pocas ediciones, HackBarna se ha hecho un sitio propio dentro del
          ecosistema tecnológico y de inteligencia artificial de Barcelona.
        </p>
        <p>
          Desde 2024, sus hackathons y Hack Nights han reunido a una comunidad
          creciente de developers, builders, perfiles de producto y
          profesionales de IA alrededor de algo que nos gusta especialmente:{" "}
          <strong>aprender tecnología construyendo con ella</strong>.
        </p>
        <p>
          Por sus anteriores ediciones han pasado nombres como{" "}
          <strong>
            Hugging Face, Mistral AI, Amazon, Vonage, n8n, Lovable o Netlify
          </strong>
          , y HackBarna AI Summit 26 vuelve con un ecosistema en el que
          encontramos a{" "}
          <strong>
            Vonage, Preply, Mastra, Nebius, Cognition, fal.ai, QualityClouds y
            Galtea
          </strong>
          , entre otros.
        </p>
        <p>
          Esta tercera edición se celebra junto a{" "}
          <strong>AI Summit Barcelona 2026</strong> y tendrá lugar en{" "}
          <strong>Norrsken House Barcelona</strong>.
        </p>
        <p>
          Dos días para compartir ideas, descubrir tecnologías, conocer gente y,
          sobre todo, construir.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Una conversación que terminó convirtiéndose en equipo">
        <p>
          El pasado <strong>3 de septiembre</strong> organizamos desde FemCoders
          Club una sesión con{" "}
          <strong>Lilibeth Bustos Linares, ganadora de HackBarna 2025</strong>,
          para conocer cómo se vive el hackathon desde dentro.
        </p>
        <p>
          Hablamos de cómo nace una idea en un entorno así, de equipos,
          organización, decisiones, tecnología, demos y de todo lo que puede
          ocurrir durante un fin de semana en el que el tiempo corre bastante
          más rápido de lo normal.
        </p>
        <p>
          La sesión nació precisamente para acercar esa experiencia a nuestra
          comunidad y resolver muchas de las dudas que aparecen antes de
          participar.
        </p>
        <p>Y tuvo un efecto que no habíamos planeado.</p>
        <p>Al terminar, varias compartíamos la misma sensación:</p>
        <p>
          <strong>queríamos estar allí construyendo.</strong>
        </p>
        <p>Y así nació nuestro equipo para HackBarna AI Summit 26.</p>
        <TarjetasPost
          titulo="Estas somos las cuatro que estaremos hackeando"
          tarjetas={[
            {
              titulo: "Irina Ichim",
              texto: (
                <>
                  <p>
                    Fullstack developer especializada en integración de IA y
                    mentora de backend con Java.
                  </p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/irina-ichim-desarrolladora"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver el perfil de LinkedIn de Irina Ichim"
                    >
                      LinkedIn
                    </a>
                  </p>
                </>
              ),
            },
            {
              titulo: "Elvia Benedith",
              texto: (
                <>
                  <p>Desarrolladora web full-stack e ingeniera civil.</p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/elvia-benedith"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver el perfil de LinkedIn de Elvia Benedith"
                    >
                      LinkedIn
                    </a>
                  </p>
                </>
              ),
            },
            {
              titulo: "Ana Lucía Silva Córdoba",
              texto: (
                <>
                  <p>
                    Fullstack developer, máster en Big Data &amp; Data Science y
                    formadora tecnológica.
                  </p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/ana-lucia-silva-cordoba"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver el perfil de LinkedIn de Ana Lucía Silva Córdoba"
                    >
                      LinkedIn
                    </a>
                  </p>
                </>
              ),
            },
            {
              titulo: "Silvina Lucero Calderón",
              texto: (
                <>
                  <p>Desarrolladora web full stack y QA tester funcional.</p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/silvina-lucero"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver el perfil de LinkedIn de Silvina Lucero Calderón"
                    >
                      LinkedIn
                    </a>
                  </p>
                </>
              ),
            },
          ]}
        />
        <p>
          Lo que empezó como una sesión para acercar la experiencia de HackBarna
          a la comunidad terminó despertando todavía más ganas de vivirla
          juntas. De compartir ideas, probar, equivocarnos, resolver problemas y
          disfrutar de todo lo que ocurre cuando varias femcoders se sientan
          alrededor de una misma mesa con algo por construir.
        </p>
        <p>
          Todavía no sabemos qué proyecto saldrá de ese fin de semana, y
          precisamente ahí está parte de la magia de un hackathon.
        </p>
        <p>
          Lo que sí sabemos es que esta vez{" "}
          <strong>FemCoders Club también estará allí construyendo</strong>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Si te perdiste la sesión con Lilibeth, ya puedes verla">
        <p>
          La conversación completa con <strong>Lilibeth Bustos Linares</strong>{" "}
          ya está disponible en nuestro canal de YouTube.
        </p>
        <p>
          Durante la sesión compartió su experiencia en HackBarna 2025 y
          hablamos de muchas de las preguntas que suelen aparecer antes de un
          hackathon: cómo organizar el tiempo, cómo trabajar en equipo, cómo
          decidir hasta dónde llevar una idea o qué importancia tiene la demo
          final.
        </p>
        <p>Pero hubo algo especialmente interesante en su experiencia.</p>
        <p>
          Lilibeth llegó a HackBarna desde el{" "}
          <strong>diseño de producto</strong> y terminó formando parte del
          equipo ganador de la edición de 2025.
        </p>
        <p>
          Es un buen ejemplo de algo que también defendemos mucho desde
          FemCoders Club: los proyectos tecnológicos se enriquecen cuando
          alrededor de la mesa hay perspectivas diferentes.
        </p>
        <p>
          Desarrollo, producto, diseño, datos, calidad, IA... un hackathon
          necesita código, por supuesto, pero también necesita entender qué
          estamos construyendo y para quién.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=pvStyYvl5io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Ver la sesión completa con Lilibeth Bustos Linares</strong>
          </a>
        </p>
        <p>
          Gracias, Lilibeth, por compartir la experiencia con tanta cercanía y
          por responder a todas las preguntas que fueron surgiendo durante la
          sesión.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Dos días para construir, probar y aprender">
        <p>
          Una de las cosas más interesantes de HackBarna es que no llegas
          simplemente a ejecutar una idea cerrada.
        </p>
        <p>
          La temática general es abierta y los sponsors plantean sus propios
          retos, tecnologías y herramientas, así que una parte importante del
          hackathon consiste precisamente en explorar posibilidades y decidir
          qué construir.
        </p>
        <p>Ahí empiezan las conversaciones.</p>
        <p>
          Qué problema queremos resolver. Qué idea merece la pena desarrollar.
          Qué podemos hacer durante el tiempo disponible. Qué tecnología encaja.
          Qué descartamos. Qué probamos. Qué funciona. Y qué parecía fantástico
          a primera hora y unas horas después descubrimos que quizá no lo era
          tanto.
        </p>
        <p>Eso también forma parte de construir.</p>
        <p>
          Durante el fin de semana habrá APIs, IA, agentes, infraestructura,
          comunicaciones, modelos y herramientas con las que experimentar,
          además de mentores y otros equipos trabajando alrededor.
        </p>
        <p>Nosotras iremos tomando decisiones sobre la marcha.</p>
        <p>Y cuando termine, queremos contar también esa parte.</p>
        <p>
          No únicamente enseñar el proyecto final, sino compartir{" "}
          <strong>cómo llegamos hasta él</strong>: qué tecnologías utilizamos,
          qué decisiones tomamos, qué tuvimos que cambiar y qué aprendimos
          durante el proceso.
        </p>
        <p>
          Porque muchas veces lo más interesante de un proyecto no está solo en
          el resultado.
        </p>
        <p>Está en todo lo que ocurrió antes de llegar a él.</p>
      </SeccionPost>

      <SeccionPost titulo="HackBarna AI Summit 26: datos clave">
        <TablaPost descripcion="Datos clave de HackBarna AI Summit 26">
          <table>
            <tbody>
              <tr>
                <th scope="row">Cuándo</th>
                <td>19 y 20 de septiembre de 2026</td>
              </tr>
              <tr>
                <th scope="row">Dónde</th>
                <td>Norrsken House Barcelona</td>
              </tr>
              <tr>
                <th scope="row">Evento</th>
                <td>HackBarna AI Summit 26</td>
              </tr>
              <tr>
                <th scope="row">Temática</th>
                <td>Inteligencia artificial</td>
              </tr>
              <tr>
                <th scope="row">Formato</th>
                <td>Hackathon por equipos</td>
              </tr>
              <tr>
                <th scope="row">Gold Sponsor</th>
                <td>Vonage</td>
              </tr>
              <tr>
                <th scope="row">Silver Sponsors</th>
                <td>
                  Preply, Mastra, Nebius, Cognition, fal.ai, QualityClouds y
                  Galtea
                </td>
              </tr>
              <tr>
                <th scope="row">Organizan</th>
                <td>HackBarna × AI Summit Barcelona</td>
              </tr>
              <tr>
                <th scope="row">Inscripción</th>
                <td>
                  <a
                    href="https://www.hackbcn.com/en/events/aisummit26"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HackBarna AI Summit 26
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </TablaPost>
      </SeccionPost>

      <SeccionPost titulo="Y ahora queremos que seamos muchas más">
        <p>
          Nuestra colaboración con HackBarna siempre ha tenido también ese
          objetivo.
        </p>
        <p>
          <strong>Queremos ver a más mujeres en estos espacios.</strong>
        </p>
        <p>
          Participando, formando equipos, proponiendo ideas, escribiendo código,
          diseñando productos, experimentando con nuevas tecnologías, tomando
          decisiones y enseñando lo que han construido.
        </p>
        <p>
          Por eso este año nos hace especialmente ilusión estar también dentro
          del hackathon.
        </p>
        <p>
          Pero todavía nos haría más ilusión llegar a Norrsken y encontrarnos
          allí con muchas más.
        </p>
        <p>
          Si ya estabas pensando en participar, quizá esta sea la señal que
          faltaba.
        </p>
        <p>
          Y si todavía no tienes equipo, una idea cerrada o no sabes exactamente
          qué vas a construir, no pasa nada. Parte de la experiencia está
          precisamente en todo lo que sucede cuando juntas personas, tecnología,
          ideas y dos días por delante.
        </p>
        <p>
          <strong>
            HackBarna AI Summit 26 se celebra el 19 y 20 de septiembre en
            Norrsken House Barcelona.
          </strong>
        </p>

        <h3>Quiero participar en HackBarna AI Summit 26</h3>
        <p>
          19 y 20 de septiembre de 2026 en Norrsken House Barcelona. Hackathon
          de inteligencia artificial por equipos.
        </p>
        <p>
          <a
            href="https://www.hackbcn.com/en/events/aisummit26"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Quiero participar en HackBarna AI Summit 26
          </a>
        </p>

        <p>
          Y si formas parte de FemCoders Club y vas a participar,{" "}
          <strong>cuéntanoslo en la comunidad</strong>. Queremos saber quiénes
          estaremos por allí, conectar a femcoders y llegar juntas al evento.
        </p>
        <p>Nosotras ya estamos preparando esos dos días.</p>
        <p>
          Ahora queremos llenar HackBarna de muchas más mujeres construyendo.
        </p>
        <p>
          <strong>Nos vemos el 19 de septiembre.</strong>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default HackBarnaAiSummit26DesdeDentro;
