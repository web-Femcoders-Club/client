import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { ImagenPost, NotaPost, SeccionPost, TablaPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";
import { urlAbsoluta } from "../../components/siteUrl";

const SesionInformativaHackBarnaAiSummit26: React.FC = () => (
  <>
      <Helmet>
        <title>
          HackBarna AI Summit 26: cómo se gana un hackathon de IA | FemCoders
          Club
        </title>
        <meta
          name="description"
          content="Sesión informativa online sobre HackBarna AI Summit 26 con Lilibeth Bustos Linares, ganadora de 2025. Jueves 3 de septiembre, 19:30 h. Inscripción gratuita."
        />
        <meta
          name="keywords"
          content="hackbarna ai summit 26, hackathon ia barcelona, hackathon inteligencia artificial barcelona 2026, sesión informativa hackbarna, Lilibeth Bustos Linares, FemCoders Club, Norrsken House Barcelona, mujeres en tecnología"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/sesion-informativa-hackbarna-ai-summit-26"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Sesión informativa HackBarna AI Summit 26: la ganadora de 2025 cuenta cómo se gana un hackathon de IA | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Lilibeth Bustos Linares, ganadora del hackathon en 2025, se sienta con nosotras a contar cómo se viven esas 48 horas. Jueves 3 de septiembre, 19:30 h. Online y gratuita."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/sesion-informativa-hackbarna-ai-summit-26"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HackBarna AI Summit 26: cómo se gana un hackathon de IA"
        />
        <meta
          name="twitter:description"
          content="La ganadora de 2025 cuenta qué pasa de verdad durante las 48 horas. Jueves 3 de septiembre, 19:30 h. Online, abierta y gratuita."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-08-17T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="HackBarna" />
        <meta property="article:tag" content="Hackathon" />
        <meta property="article:tag" content="Inteligencia Artificial" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="Sesión informativa" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/sesion-informativa-hackbarna-ai-summit-26",
              headline:
                "Sesión informativa HackBarna AI Summit 26: la ganadora de 2025 cuenta cómo se gana un hackathon de IA",
              description:
                "Sesión informativa online sobre HackBarna AI Summit 26 con Lilibeth Bustos Linares, ganadora de la edición de 2025. Jueves 3 de septiembre de 2026 a las 19:30 h. Inscripción gratuita.",
              image:
                "/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.jpg",
              datePublished: "2026-08-17T10:00:00Z",
              dateModified: "2026-09-09T10:00:00Z",
              about: {
                "@type": "Event",
                name: "Sesión informativa HackBarna AI Summit 26 con Lilibeth Bustos Linares",
                // El `image` del artículo no lo hereda el evento: Google valida
                // el `Event` como entidad independiente de quien lo contiene.
                image: urlAbsoluta(
                  "/assets/noticias/sesion-informativa-hackbarna-ai-summit-26.jpg"
                ),
                description:
                  "Sesión online y gratuita con Lilibeth Bustos Linares, ganadora del AI Summit Hackathon Barcelona 2025, para contar cómo se vive un hackathon de IA desde dentro.",
                startDate: "2026-09-03T19:30:00+02:00",
                endDate: "2026-09-03T20:30:00+02:00",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode:
                  "https://schema.org/OnlineEventAttendanceMode",
                url: "https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516",
                location: {
                  "@type": "VirtualLocation",
                  url: "https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516",
                },
                organizer: {
                  "@type": "Organization",
                  name: "FemCoders Club",
                  url: "https://www.femcodersclub.com",
                },
                performer: {
                  "@type": "Person",
                  name: "Lilibeth Bustos Linares",
                },
                // Era gratuita, y eso se dice con `price: "0"`, no callándolo.
                // `SoldOut` en vez de `InStock` porque la sesión ya se celebró:
                // marcarla disponible sería anunciar una inscripción cerrada.
                offers: {
                  "@type": "Offer",
                  url: "https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516",
                  price: "0",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/SoldOut",
                  validThrough: "2026-09-03T19:30:00+02:00",
                },
              },
              keywords: [
                "HackBarna AI Summit 26",
                "hackathon IA Barcelona",
                "sesión informativa hackbarna",
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
      ruta="/noticias/sesion-informativa-hackbarna-ai-summit-26"
      titulo="Sesión informativa HackBarna AI Summit 26: la ganadora de 2025 cuenta cómo se gana un hackathon de IA"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={47}
      entradilla={
        <>
          <p>
            HackBarna arrancó en 2024 y este septiembre celebra su tercer
            hackathon en Barcelona. Entre hackathons y hack nights ya han pasado
            por sus eventos más de 400 hackers y se han construido más de 200
            proyectos. En la última edición, el pasado octubre en el Glovo
            Yellow Park, el primer premio se lo llevó Lilibeth Bustos Linares.
          </p>
          <p>
            Este año queremos que en esa sala haya muchas más mujeres. Así que
            le hemos pedido a Lilibeth que se siente un rato con nosotras antes
            de HackBarna AI Summit 26 y nos cuente cómo se vive un hackathon de
            IA desde dentro: qué pasa de verdad durante las 48 horas, cómo se
            llega al domingo con algo que funciona y qué convence a un jurado
            cuando llega la hora de las demos.
          </p>
          <p>
            La cita es el jueves 3 de septiembre a las 19:30. Online, abierta y
            gratuita.
          </p>
          <p>
            Hace unas semanas os contamos aquí toda la logística de la edición
            de este año, cuando anunciamos que{" "}
            <Link to="/noticias/hackbarna-ai-summit-26">
              FemCoders Club vuelve a ser community partner del hackathon
            </Link>
            : 19 y 20 de septiembre en Norrsken House Barcelona, más de 200
            hackers y una lista de patrocinadores que sigue creciendo. Lo que no
            teníamos hasta ahora es a alguien que ya haya pasado por ahí y se
            siente contigo a responder.
          </p>
          <p>
            <em>
              Lilibeth Bustos Linares, ganadora del hackathon en su edición de
              2025, estará con nosotras el 3 de septiembre.
            </em>
          </p>
        </>
      }
    >
      <NotaPost titulo="Actualización: ya puedes ver la sesión completa">
        <p>
          La sesión se celebró el 3 de septiembre y la conversación completa
          con Lilibeth Bustos Linares ya está disponible en nuestro canal de
          YouTube. Si no pudiste conectarte en directo, aquí la tienes entera.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=pvStyYvl5io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Ver la grabación de la sesión con Lilibeth Bustos Linares en YouTube</strong>
          </a>
        </p>
        <p>
          Y desde entonces han pasado más cosas: varias femcoders hemos formado
          equipo y también participaremos en el hackathon. Lo contamos en{" "}
          <Link to="/noticias/hackbarna-ai-summit-26-desde-dentro">
            FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también
            desde dentro
          </Link>
          .
        </p>
      </NotaPost>

      <SeccionPost titulo="Quién es Lilibeth Bustos Linares">
        <ImagenPost
          src="/assets/noticias/Lilibeth-Bustos-Linares.jpg"
          alt="Retrato de Lilibeth Bustos Linares, fundadora y CEO de SOMA AI y SoulDoodles y ganadora del AI Summit Hackathon Barcelona 2025"
        />
        <p>
          Fundadora y CEO de{" "}
          <a href="https://somaai.earth/" target="_blank" rel="noopener noreferrer">
            SOMA AI
          </a>{" "}
          y de{" "}
          <a href="https://www.souldoodles.org/" target="_blank" rel="noopener noreferrer">
            SoulDoodles
          </a>
          . Más de diez años diseñando productos digitales en el sector
          tecnológico entre Nueva York y San Francisco. Ha sido docente de
          Product Design y ha dado charlas en conferencias internacionales.
        </p>
        <p>
          Y, sobre todo para lo que nos ocupa aquí, ganadora del AI Summit
          Hackathon Barcelona 2025.
        </p>
        <p>
          Fíjate en ese recorrido, porque dice más de lo que parece. Lilibeth
          no llegó al hackathon desde la investigación en machine learning ni
          desde un doctorado. Llegó desde el diseño de producto, sabiendo mirar
          un problema y construir algo que se entiende en cuatro minutos. Eso
          es exactamente lo que se premia en un fin de semana así.
        </p>
        <p>
          Y esa es la diferencia entre leer cómo funciona un hackathon y que te
          lo cuente de primera mano quien salió de la última edición con el
          primer premio. Lilibeth sabe qué se siente al llegar el sábado por la
          mañana sin equipo cerrado. Sabe qué se descarta a las tres de la
          madrugada del domingo. Y sabe qué mira un jurado cuando ya lleva diez
          demos vistas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Ven con tus preguntas">
        <p>
          La sesión no es una charla con turno de dudas al final. Es un rato
          con Lilibeth para preguntarle lo que quieras: sobre el hackathon,
          sobre cómo se construye algo en 48 horas o sobre su propio camino
          hasta llegar ahí.
        </p>
        <p>
          Puedes preguntar en directo o dejarlo escrito en el chat, como te
          resulte más cómodo. Y si prefieres solo escuchar, también.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Las dos fechas de HackBarna AI Summit 26 que te tienes que apuntar">
        <TablaPost descripcion="Fechas y lugar de la sesión informativa y del hackathon">
          <table>
            <thead>
              <tr>
                <th>Qué</th>
                <th>Cuándo</th>
                <th>Dónde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Sesión informativa con Lilibeth Bustos Linares</strong>
                </td>
                <td>Jueves 3 de septiembre de 2026, 19:30 h</td>
                <td>Online</td>
              </tr>
              <tr>
                <td>
                  <strong>HackBarna AI Summit 26</strong>
                </td>
                <td>Sábado 19 y domingo 20 de septiembre de 2026</td>
                <td>Norrsken House Barcelona</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>
        <p>
          Entre una fecha y otra hay algo más de dos semanas. Y aquí va la
          parte importante: el orden natural es justo el contrario del que
          parece.
        </p>
        <p>
          Inscríbete al hackathon ahora. Hoy, mientras lees esto. No esperes al
          3 de septiembre para decidir, porque si esperas te quedarán dos
          semanas escasas para buscar equipo, mirar qué APIs te interesan y
          llegar con algo pensado. La sesión no es el filtro por el que hay que
          pasar antes de apuntarse: es la preparación de quien ya está dentro.
        </p>
        <p>
          Le sacarás mucho más partido preguntándole a Lilibeth teniendo la
          plaza pedida. Las dudas se escuchan distinto cuando ya vas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Lo que te llevas de esas 48 horas">
        <p>
          El hackathon es uno de los pocos sitios donde puedes construir algo
          real junto a equipos de Vonage, Cognition o Nebius, y enseñarlo
          después en una entrevista. Esa conversación con un mentor mientras
          los dos miráis el mismo error en pantalla no la consigues por
          LinkedIn.
        </p>
        <p>
          Cuarenta y ocho horas dan para mucho más de lo que parece cuando
          estás rodeada de gente que sabe tanto o más que tú.
        </p>
        <p>
          Y de ese fin de semana se sale sabiendo bastante más de lo que sabías
          el viernes. Eso pasa siempre, ganes o no.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cómo apuntarte a las dos">
        <p>
          <strong>Primero, el hackathon.</strong> Se tarda unos minutos y es el
          paso que de verdad cuenta:
        </p>
        <ul>
          <li>
            <strong>Inscripción al hackathon:</strong>{" "}
            <a
              href="https://www.hackbcn.com/en/events/aisummit26"
              target="_blank"
              rel="noopener noreferrer"
            >
              hackbcn.com/en/events/aisummit26
            </a>
          </li>
          <li>
            <strong>Inscripción a la sesión informativa:</strong>{" "}
            <a
              href="https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516"
              target="_blank"
              rel="noopener noreferrer"
            >
              gratuita y online en Eventbrite
            </a>
          </li>
          <li>
            <strong>Toda la información del evento:</strong>{" "}
            <a href="https://www.hackbcn.com/en" target="_blank" rel="noopener noreferrer">
              hackbcn.com/en
            </a>
          </li>
        </ul>
        <p>
          Cuando te inscribas, menciona que vienes de FemCoders Club. Nos gusta
          que se note cuántas somos.
        </p>
        <p>
          La sesión te va a servir en cualquier caso, porque vas a entender
          cómo funciona esto por dentro. Pero pide plaza primero: siempre se
          puede dar un paso atrás, y lo que no se puede es participar en un
          evento al que no te has inscrito.
        </p>
        <p>
          Gracias al equipo de HackBarna por volver a contar con la comunidad,
          y a Lilibeth por regalarnos un rato antes del fin de semana grande.
        </p>
        <p>
          Nos vemos el 3 de septiembre a las 19:30 con Lilibeth. Y cuando pidas
          plaza en el hackathon, dilo en{" "}
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            nuestro Slack
          </a>
          : vamos formando equipos desde ya.
        </p>

        <h3>Reserva tu plaza en la sesión</h3>
        <p>
          Jueves 3 de septiembre, 19:30 h. Online, abierta y gratuita, con
          Lilibeth Bustos Linares.
        </p>
        <p>
          <a
            href="https://www.eventbrite.es/e/entradas-sesion-informativa-hackbarna-ai-summit-26-1997980184516"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Inscribirme en Eventbrite
          </a>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default SesionInformativaHackBarnaAiSummit26;
