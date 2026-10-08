import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { NotaPost, SeccionPost, TablaPost } from "../../components/post/PiezasPost";

const HackBarna2025Announcement: React.FC = () => (
  <>
      <Helmet>
        <title>¡FemCoders Club es Community Partner de HackBarna 2025! | FemCoders Club</title>
        <meta
          name="description"
          content="¡Increíble noticia! FemCoders Club es Community Partner oficial de HackBarna 2025, el hackathon de IA más importante de Barcelona. Únete del 11-12 de octubre en Glovo HQ."
        />
        <meta
          name="keywords"
          content="HackBarna 2025, hackathon Barcelona, femcoders club, community partner, IA, artificial intelligence, Glovo, hackathon mujeres tech, evento tech Barcelona"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/HackBarna2025"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="¡FemCoders Club es Community Partner de HackBarna 2025!"
        />
        <meta
          property="og:description"
          content="¡Una noticia que nos llena de orgullo! Somos Community Partner oficial del hackathon de IA más importante de Barcelona. ¡Te esperamos!"
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/HackBarna2025"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/hackbarna-2025-femcoders.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="¡FemCoders Club es Community Partner de HackBarna 2025!"
        />
        <meta
          name="twitter:description"
          content="El hackathon de IA más importante de Barcelona nos espera el 11-12 de octubre en Glovo HQ. ¡Únete a nuestra comunidad!"
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/hackbarna-2025-femcoders.webp"
        />
        <meta
          property="article:published_time"
          content="2025-09-30T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Eventos" />
        <meta property="article:tag" content="HackBarna" />
        <meta property="article:tag" content="Hackathon" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="IA" />
        <meta property="article:tag" content="Community Partner" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/HackBarna2025"
      titulo="¡Noticia que nos llena de orgullo! Somos community partner de HackBarna 2025"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={28}
      entradilla={
        <>
          <p>
            Algunas noticias te llegan y simplemente te sacan una sonrisa
            inmensa. Esta es una de esas.{" "}
            <strong>FemCoders Club es oficialmente Community Partner de HackBarna 2025</strong>,
            y no podemos estar más emocionadas de compartir esta noticia con
            toda nuestra comunidad.
          </p>
          <p>
            Cuando recibimos la invitación, no lo podíamos creer. Un hackathon
            de este calibre, en Barcelona, centrado en inteligencia artificial y
            con sponsors de la talla que tiene HackBarna... y nosotras formando
            parte como community partner. Ha sido uno de esos momentos donde
            dices «¡guau, hemos llegado lejos!».
          </p>
        </>
      }
    >
      <SeccionPost titulo="Irina Ichim: nuestra cofundadora como mentora del hackathon">
        <p>
          Y aquí viene algo que nos llena de orgullo de manera muy especial:{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/irina-ichim-desarrolladora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Irina Ichim
            </a>
          </strong>
          , una de las cofundadoras de FemCoders Club, ha sido invitada como{" "}
          <strong>mentora de HackBarna 2025</strong>.
        </p>
        <p>
          Irina viene del mundo del emprendimiento y trae esa visión
          estratégica y de negocio al desarrollo full-stack, con un enfoque
          especial en backend. Su experiencia combina lo mejor de ambos mundos:
          entender el producto desde la perspectiva empresarial mientras
          construye soluciones técnicas sólidas.
        </p>
        <p>
          Que una de nuestras cofundadoras esté como mentora oficial en
          HackBarna es la confirmación de que <Link to="/">FemCoders Club</Link>{" "}
          no solo habla de inclusión y diversidad, sino que está activamente
          construyéndola. Y desde aquí queremos animar a todas las chicas STEM
          a que se animen a participar en eventos como este. ¡Este es vuestro
          espacio también!
        </p>
      </SeccionPost>

      <SeccionPost titulo="Agradecimientos que nacen del corazón">
        <p>
          Esta oportunidad increíble no habría sido posible sin dos pilares
          fundamentales que queremos reconocer públicamente:
        </p>

        <h3>Gracias, Nicolas Grenie</h3>
        <p>
          Un agradecimiento muy especial para{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/nicolasgrenie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nicolas Grenie
            </a>
          </strong>
          , quien fue la persona que directamente nos extendió la invitación
          para ser community partners. Nicolas, tu confianza en nuestra
          comunidad y el reconocimiento de lo que representamos para las
          mujeres en tech significa muchísimo para nosotras. Personas como tú
          hacen que el ecosistema tecnológico sea más inclusivo y diverso.
        </p>

        <h3>Y, por supuesto, gracias, Glovo</h3>
        <p>
          No podemos olvidarnos de <strong>Glovo</strong>, la empresa que nos
          puso en contacto y que claramente entiende la importancia de apoyar
          comunidades como la nuestra. Glovo no solo será el anfitrión del
          evento en su increíble HQ de Barcelona, sino que ha sido clave para
          que esta colaboración sea posible.
        </p>

        <NotaPost titulo="Lo que nos llevamos">
          <p>
            <strong>
              Es increíble cómo las conexiones auténticas en el mundo tech
              pueden abrir puertas que jamás imaginaste. Esta es la prueba de
              que cuando construyes una comunidad con propósito, el
              reconocimiento llega.
            </strong>
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="HackBarna 2025: el evento que no te puedes perder">
        <p>
          Y ahora viene la parte que más nos emociona:{" "}
          <strong>¡invitar a toda nuestra comunidad a participar!</strong>{" "}
          Porque ser community partner no significa solo estar presentes,
          significa que queremos ver a nuestras femcoders brillando en este
          hackathon.
        </p>

        <TablaPost descripcion="Fechas, lugar y temática de HackBarna 2025">
          <table>
            <thead>
              <tr>
                <th>Detalles del evento</th>
                <th>Información</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Fechas de hackeo</strong>
                </td>
                <td>Sábado 11 y domingo 12 de octubre de 2025</td>
              </tr>
              <tr>
                <td>
                  <strong>Ubicación</strong>
                </td>
                <td>Glovo HQ, Barcelona</td>
              </tr>
              <tr>
                <td>
                  <strong>Demo Day y premios</strong>
                </td>
                <td>Domingo 12 de octubre</td>
              </tr>
              <tr>
                <td>
                  <strong>Temática</strong>
                </td>
                <td>Inteligencia artificial</td>
              </tr>
              <tr>
                <td>
                  <strong>Aplicaciones</strong>
                </td>
                <td>
                  <a
                    href="https://aisummitbarcelona.com/hackathon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aisummitbarcelona.com/hackathon
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </TablaPost>

        <h3>Los sponsors que te van a impresionar</h3>
        <p>
          Cuando veas la lista de empresas que están apoyando este hackathon,
          vas a entender por qué estamos tan emocionadas. Hablamos de nombres
          que están definiendo el futuro de la tecnología:
        </p>
        <ul>
          <li>Glovo</li>
          <li>Vonage</li>
          <li>Acai</li>
          <li>Linkup</li>
          <li>Veed.io</li>
          <li>Lingo.dev</li>
          <li>Hookdeck</li>
          <li>n8n</li>
          <li>slng</li>
          <li>Anthropic</li>
          <li>ElevenLabs</li>
          <li>Hugging Face</li>
          <li>Lovable</li>
          <li>Norrsken</li>
        </ul>
        <p>
          ¿Te das cuenta del nivel? Estas son empresas que están en la
          vanguardia de la inteligencia artificial, no es solo un hackathon
          más. Es una oportunidad de conectar con el ecosistema que está
          construyendo el futuro.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Por qué deberías aplicar ya?">
        <h3>Premios que valen la pena</h3>
        <p>
          No estamos hablando de premios simbólicos. HackBarna 2025 viene con
          recompensas increíbles y merchandising exclusivo que realmente vale
          la pena. Pero más allá de los premios materiales, estamos hablando de
          reconocimiento en un evento de primer nivel.
        </p>

        <h3>Oportunidades laborales reales</h3>
        <p>
          Aquí viene la parte que más nos motiva como comunidad:{" "}
          <strong>este hackathon puede cambiar tu carrera profesional</strong>.
          Con las empresas que están participando, no sería raro que salieras
          de ahí con ofertas de trabajo concretas. Hemos visto que pasa en
          eventos de este calibre, y queremos que nuestras femcoders estén ahí
          para aprovecharlo.
        </p>

        <h3>Colaborar con los mejores en IA</h3>
        <p>
          La oportunidad de trabajar codo a codo con expertos en inteligencia
          artificial no se presenta todos los días. Imagínate el aprendizaje,
          las conexiones, las ideas que van a surgir. Es el tipo de experiencia
          que te marca profesionalmente para siempre.
        </p>

        <NotaPost titulo="Nuestro mensaje para ti">
          <p>
            Si eres parte de nuestra comunidad, sabes que creemos en tu
            potencial. Este hackathon es tu momento de brillar en un escenario
            internacional. No dejes que la inseguridad te frene: aplica y
            demuestra de qué estás hecha.
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Esto es solo el comienzo">
        <p>
          Ser community partner de HackBarna 2025 representa mucho más que un
          título bonito para nosotras. Es el reconocimiento de años de trabajo
          construyendo una comunidad que realmente importa en el ecosistema
          tecnológico.
        </p>
        <p>
          Es la prueba de que cuando las mujeres nos unimos, cuando nos
          apoyamos, cuando construimos algo con propósito, las puertas se
          abren. Y no solo se abren para nosotras como organización, sino para
          cada una de las personas que forma parte de esta comunidad increíble.
        </p>

        <h3>¿Cómo aplicar?</h3>
        <p>
          Si ya estás convencida (y esperamos que sí), tienes toda la
          información que necesitas:
        </p>
        <ul>
          <li>
            <strong>Aplicar al hackathon:</strong>{" "}
            <a
              href="https://aisummitbarcelona.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
            >
              aisummitbarcelona.com/hackathon
            </a>
          </li>
          <li>
            <strong>Información completa del evento:</strong>{" "}
            <a
              href="https://www.hackbarna.com/en/aisummit25"
              target="_blank"
              rel="noopener noreferrer"
            >
              hackbarna.com/en/aisummit25
            </a>
          </li>
          <li>
            <strong>Dudas y networking:</strong>{" "}
            <a
              href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              Únete a nuestro Slack
            </a>
          </li>
        </ul>
        <p>
          Y por favor, cuando apliques, siéntete libre de mencionar que eres
          parte de FemCoders Club. Estamos orgullosas de nuestra comunidad y
          queremos que se note.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Una invitación desde el corazón">
        <p>
          Este post no es solo un anuncio, es una invitación sincera de toda
          nuestra comunidad para que vengas y demuestres el talento increíble
          que sabemos que tienes. Sabemos que muchas veces nos da vértigo
          aplicar a eventos grandes, que pensamos «no estoy preparada» o «no es
          para mí».
        </p>
        <p>
          Pero queremos recordarte algo: si estás leyendo esto, si formas parte
          de FemCoders Club, si estás en este camino del desarrollo y la
          tecnología, <strong>ya estás preparada</strong>. Solo necesitas dar
          el paso.
        </p>

        <h3>¿Lista para el hackathon?</h3>
        <p>
          Cuéntanos en los comentarios si vas a aplicar, si tienes dudas, o si
          simplemente quieres compartir tu emoción por esta noticia. ¡Queremos
          celebrar juntas!
        </p>
        <p>
          <a
            href="https://aisummitbarcelona.com/hackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Aplicar al hackathon
          </a>
        </p>
        <p>
          <a
            href="https://www.hackbarna.com/en/aisummit25"
            target="_blank"
            rel="noopener noreferrer"
          >
            Más información sobre HackBarna 2025
          </a>
        </p>
        <p>
          <strong>¡Nos vemos en Barcelona!</strong>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default HackBarna2025Announcement;
