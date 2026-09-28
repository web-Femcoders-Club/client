import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CommentsSection from "../../components/CommentsSection";
import "../../page/PostStyles.css";

import ShareButtons from "../../components/ShareButtons";
import PostImage from "../../components/PostImage";
import { articleSchema } from "../../components/articleSchema";

/*
  Todo lo técnico que se afirma aquí está comprobado contra la rama `dev` de
  github.com/ctrl-Ella/OffLoad el 29 de septiembre de 2026: las cifras del banco
  de pruebas, los siete pasos del workflow y los catorce tests.

  La invitación por SMS a la red de apoyo se vio funcionar en la demo con un
  móvil real. La pata SIP, que sería entrar a la sala con una llamada de voz,
  está prevista en las specs pero no construida, así que el post no la nombra.

  De Norma solo va la puntuación del primer análisis, el 75 %. La final no
  está registrada en ningún sitio y no la damos.
*/

const SLUG = "/noticias/offload-challenge-vonage-hackbarna-ai-summit-26";
const PORTADA = "/assets/noticias/offload-challenge-vonage-hackbarna-ai-summit-26.jpg";
const TITULO =
  "Nuestro equipo recibe el premio Best use of the Vonage Video API en HackBarna AI Summit 26";
const DESCRIPCION =
  "CTRL4ELLA, de FemCoders Club, recibe el premio Best use of the Vonage Video API con OFFLOAD, una agente de IA que sabe cuándo hablar en una videollamada.";
const REPO = "https://github.com/ctrl-Ella/OffLoad";
const DEMO = "https://offload-production-1c5b.up.railway.app/";

/*
  Las preguntas frecuentes se pintan y se declaran como FAQPage desde la misma
  lista, para que el texto visible y el de los datos estructurados no puedan
  separarse. Cada respuesta se sostiene sola: es la forma en que un buscador
  generativo la puede citar sin leer el resto del post.
*/
const PREGUNTAS = [
  {
    pregunta:
      "¿Por qué una sesión de Vonage Video API tiene que ser routed para usar transcripciones en directo?",
    respuesta:
      "Porque las transcripciones en directo leen el audio en el Media Router de Vonage, y el audio solo pasa por el Media Router si la sesión se crea con p2p.preference en disabled. En una sesión relayed el audio viaja de un navegador a otro. El modo se decide al crear la sesión y no se puede cambiar después.",
  },
  {
    pregunta:
      "¿Cómo se arrancan las transcripciones en directo si todas las personas de la llamada entran como publisher?",
    respuesta:
      "Arrancarlas exige un token con rol moderator. En OFFLOAD el servidor se firma ese token a sí mismo y lo usa solo para eso, de modo que las personas de la llamada entran todas con el mismo rol y el permiso extra lo tiene el proceso que orquesta.",
  },
  {
    pregunta: "¿Qué significa «el modelo interpreta, el workflow decide»?",
    respuesta:
      "Que al modelo de lenguaje solo se le pide lo que una máquina determinista no sabe hacer: entender una frase dicha en voz alta y elegir a quién conviene pedirle algo. Lo que se puede calcular, como si dos citas chocan en el tiempo, se calcula con aritmética. En OFFLOAD, de los siete pasos del workflow, dos pasan por un modelo.",
  },
  {
    pregunta:
      "¿Cuánta precisión pierde un clasificador de intención al pasar de texto escrito a voz?",
    respuesta:
      "En la medición de OFFLOAD, siete puntos: del 93,3 % sobre treinta frases escritas al 86,2 % sobre veintinueve de esas frases leídas en voz alta y transcritas por la ruta real del producto, con el mismo modelo y el mismo día.",
  },
];

const OffloadChallengeVonageHackBarna26: React.FC = () => {
  const postId = 52;

  return (
    <div className="blog-post">
      <Helmet>
        {/*
          Los metadatos van como literales y no desde las constantes de
          arriba: scripts/postsIndex.ts los lee del código fuente con regex
          para validar el post y generar llms.txt y el sitemap.
        */}
        <title>
          CTRL4ELLA recibe el premio Best use of the Vonage Video API | FemCoders
          Club
        </title>
        <meta
          name="description"
          content="CTRL4ELLA, de FemCoders Club, recibe el premio Best use of the Vonage Video API con OFFLOAD, una agente de IA que sabe cuándo hablar en una videollamada."
        />
        <meta
          name="keywords"
          content="OFFLOAD, CTRL4ELLA, Vonage Video API, Best use of the Vonage Video API, HackBarna AI Summit 26, agente de IA en una videollamada, transcripciones en directo, live captions, Mastra, Nebius, SLNG, Norma, QualityClouds, FemCoders Club, mujeres en tecnología"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/offload-challenge-vonage-hackbarna-ai-summit-26"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="CTRL4ELLA recibe el premio Best use of the Vonage Video API"
        />
        <meta
          property="og:description"
          content="CTRL4ELLA, de FemCoders Club, recibe el premio Best use of the Vonage Video API con OFFLOAD, una agente de IA que sabe cuándo hablar en una videollamada."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/offload-challenge-vonage-hackbarna-ai-summit-26"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/offload-challenge-vonage-hackbarna-ai-summit-26.jpg"
        />
        <meta
          property="og:image:alt"
          content="Collage de OFFLOAD en HackBarna AI Summit 26: el equipo CTRL4ELLA en el escenario con el premio de Vonage, el equipo trabajando, el público del evento y pantallas de la aplicación con Mia"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CTRL4ELLA recibe el premio Best use of the Vonage Video API"
        />
        <meta
          name="twitter:description"
          content="OFFLOAD, de CTRL4ELLA, recibe el premio Best use of the Vonage Video API: una agente de IA que escucha la videollamada y solo habla cuando hace falta."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/offload-challenge-vonage-hackbarna-ai-summit-26.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-09-29T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="HackBarna" />
        <meta property="article:tag" content="Vonage" />
        <meta property="article:tag" content="Hackathon" />
        <meta property="article:tag" content="Inteligencia Artificial" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: SLUG,
              headline: TITULO,
              description: DESCRIPCION,
              image: PORTADA,
              datePublished: "2026-09-29T10:00:00Z",
              about: {
                "@type": "SoftwareSourceCode",
                name: "OFFLOAD",
                description:
                  "Aplicación familiar que reparte la carga mental de una casa, con una agente de IA que escucha una videollamada de Vonage y solo interviene cuando hace falta.",
                codeRepository: REPO,
                programmingLanguage: "TypeScript",
              },
              keywords: [
                "OFFLOAD",
                "CTRL4ELLA",
                "Vonage Video API",
                "HackBarna AI Summit 26",
                "agente de IA en una videollamada",
                "transcripciones en directo",
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

      {/* ── Hero image ── */}
      <PostImage
        src="/public-optimized/desktop/assets/noticias/offload-challenge-vonage-hackbarna-ai-summit-26.webp"
        mobileSrc="/public-optimized/mobile/assets/noticias/offload-challenge-vonage-hackbarna-ai-summit-26.webp"
        desktopSrc="/public-optimized/desktop/assets/noticias/offload-challenge-vonage-hackbarna-ai-summit-26.webp"
        fallbackSrc={PORTADA}
        alt="Collage de OFFLOAD en HackBarna AI Summit 26. El equipo CTRL4ELLA posa en el escenario de Norrsken House con el premio de Vonage, junto a otras personas del evento; el equipo trabaja alrededor de una mesa con portátiles; el público llena la grada; y varias pantallas de la aplicación muestran a Mia, la agente, con el lema «Less mental load. More time to live.», el SMS que invita a unirse a la llamada y una videollamada en la que Mia escucha"
      />

      <h1 className="blog-post-title">{TITULO}</h1>

      <ShareButtons path={SLUG} title={TITULO} />

      {/*
        El `speakable` del prerender apunta a `.blog-post-title` y a
        `.intro-text`: la intro lleva el premio, el equipo, el evento y qué
        hace OFFLOAD, que es lo que un asistente tiene que poder contar.
      */}
      <div className="intro-text">
        <p>
          El equipo <strong>CTRL4ELLA</strong>, formado por cuatro femcoders,
          presentó <strong>OFFLOAD</strong> en{" "}
          <strong>HackBarna AI Summit 26</strong> y el proyecto recibió el
          premio del challenge <strong>Best use of the Vonage Video API</strong>
          . Nos hace especial ilusión contarlo porque este equipo nació en la
          propia comunidad: al salir de la{" "}
          <Link
            to="/noticias/sesion-informativa-hackbarna-ai-summit-26"
            className="highlight-link"
          >
            sesión del 3 de septiembre con Lilibeth Bustos Linares
          </Link>
          , varias decidimos que queríamos estar allí construyendo. Dos semanas
          después, el 19 y 20 de septiembre, estábamos en Norrsken House
          Barcelona haciéndolo.
        </p>
        <br />
        <p>
          OFFLOAD es una aplicación familiar que reparte la carga mental de una
          casa. La sostiene una agente de IA, Mia, que entra en una videollamada
          de Vonage, escucha lo que se dice y solo pide la palabra cuando las
          dos personas que hablan se han quedado sin opciones. El código es
          público, así que podéis clonarlo, abrirlo y llevaros a vuestros
          proyectos lo que os sirva.
        </p>
        <br />
        <p>
          Hay una idea que puede ser útil a cualquiera que esté montando algo
          con agentes. De los siete pasos que da el sistema para resolver un
          choque de agendas, solo dos pasan por un modelo de lenguaje, y la
          decisión de cuándo interviene Mia no pasa por ninguno. En este post
          contamos cómo está construido por dentro y qué papel tiene cada
          tecnología, empezando por Vonage.
        </p>
      </div>

      {/* ── 1. Qué resuelve OFFLOAD ── */}
      <div className="highlight-box">
        <h2>Qué resuelve OFFLOAD</h2>
        <br />
        <p>
          La carga mental de una casa está en acordarse de que las cosas
          existen: quién lleva a la niña a la piscina el jueves si esa tarde hay
          reunión, o a quién se le puede pedir ayuda. Una lista compartida
          ayuda a apuntarlo, pero también hay que mantenerla.
        </p>
        <br />
        <p>
          OFFLOAD pone en ese lugar a Mia, que mira las agendas de la familia y
          se hace una sola pregunta cada vez que encuentra algo: ¿esto cambia el
          plan de alguien? Si no lo cambia, lo resuelve sola y lo cuenta. Si lo
          cambia, prepara la propuesta entera y pide un sí o un no. Y cuando un
          sí o un no no basta, abre una videollamada para hablarlo. Ahí es donde
          entra Vonage.
        </p>
      </div>

      {/* ── 2. Vonage ── */}
      <div className="highlight-box">
        <h2>Vonage, en el centro de OFFLOAD</h2>
        <br />
        <p>
          El challenge pedía usar la Vonage Video API para resolver un problema
          real, y en OFFLOAD la videollamada es el momento en que la familia se
          pone de acuerdo. El proyecto usa tres capacidades de Vonage, y las
          tres están construidas y funcionando:
        </p>
        <br />
        <ul>
          <li>
            <strong>La sesión de vídeo con transcripciones en directo.</strong>{" "}
            Todo lo que se dice en la llamada lo transcribe Vonage Live
            Captions, y ese texto es el único sentido de Mia: no oye el audio
            ni ve el vídeo, lee lo que Vonage le pone delante, con el dato de
            quién lo ha dicho.
          </li>
          <li>
            <strong>Silent Auth.</strong> Para entrar basta con el número de
            teléfono, sin teclear ningún código, porque la verificación la hace
            la propia operadora a través de su red.
          </li>
          <li>
            <strong>SMS.</strong> Durante la llamada, y cuando se le pide, Mia
            manda a alguien de la red de apoyo un enlace firmado que caduca a
            los treinta minutos y que le deja entrar en la sala sin registrarse
            en nada. En la demo lo vimos funcionar con un móvil real: llegó el
            mensaje, la persona tocó el enlace y apareció en la videollamada.
          </li>
        </ul>
        <br />
        <p>
          Para que Mia pueda escuchar, la sesión se crea en modo{" "}
          <strong>routed</strong>, con el audio pasando por el Media Router de
          Vonage, que es donde se leen las transcripciones. Es una decisión que
          se toma al crear la sesión, y el equipo la tomó desde el principio.
          Las llamadas a la Video API se hacen por REST, con un JWT de
          aplicación contra <code>video.api.vonage.com</code>:
        </p>
        <br />
        <div className="code-block bg3">
          <pre>
            {`// p2p.preference=disabled pone el Media Router en medio:
// ahí se leen las transcripciones en directo.
const response = await fetch(\`\${videoBase}/session/create\`, {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${applicationJwt(applicationId, privateKey)}\`,
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
  body: "archiveMode=manual&p2p.preference=disabled",
});`}
          </pre>
        </div>
        <br />
        <p>
          Dentro de la sala no hay jerarquía: las dos personas de la familia
          entran con el mismo rol, publisher. Como arrancar las transcripciones
          pide un rol de moderator, el servidor se firma ese token a sí mismo y
          lo usa solo para eso. Es un patrón que sirve para cualquier sala de
          vídeo en la que un proceso automático necesite más permisos que las
          personas: el permiso lo tiene quien orquesta.
        </p>
      </div>

      {/* ── 3. Cuándo habla Mia ── */}
      <div className="highlight-box">
        <h2>Cómo decide Mia cuándo hablar en la videollamada</h2>
        <br />
        <p>
          Esta es la parte del proyecto que más nos gusta contar. Cuándo
          interviene Mia lo decide una función pura de pocas líneas, sin ningún
          modelo de por medio. Mientras las dos personas lo están hablando entre
          ellas, lo que Mia podría aportar es lo que acaban de decirse. Lo que
          ella tiene y ellas no es la red de apoyo, y eso hace falta cuando en
          casa ya no queda nadie disponible. Así que Mia pide la palabra cuando
          las dos han dicho que no pueden.
        </p>
        <br />
        <div className="code-block bg3">
          <pre>
            {`/** Lo que dice alguien cuando no puede. Español de España, como se habla. */
const REFUSALS = [
  "no puedo", "no voy a poder", "no llego", "no me da tiempo",
  "no me cuadra", "imposible", "no hay manera", "estoy liada",
  // … la lista completa está en src/mastra/listening.ts
];

export function bothHaveRuledItOut(said: Utterance[]): boolean {
  const whoSaidNo = new Set(
    said.filter((line) => isARefusal(line.text)).map((line) => line.who)
  );

  return whoSaidNo.size >= 2;
}`}
          </pre>
        </div>
        <br />
        <p>
          Lo importante es que cuenta <strong>personas distintas</strong>, no
          negativas. Quien dice «no puedo, de verdad que no puedo» ha dicho que
          no una sola vez, y Mia sigue esperando. Cada línea sabe quién la ha
          dicho gracias al stream del que viene, un dato que la propia sesión de
          Vonage ya da.
        </p>
      </div>

      {/* ── 4. El resto del stack ── */}
      <div className="highlight-box">
        <h2>Mastra, Nebius, SLNG y Norma: qué hace cada una</h2>
        <br />
        <p>
          Alrededor de la videollamada trabajan otras cuatro tecnologías de las
          empresas que acompañaron el hackathon, y cada una tiene un papel
          concreto.
        </p>
        <br />
        <p>
          <strong>Mastra</strong> orquesta el proceso. Resolver un choque de
          agendas es un workflow de siete pasos, y su estado vive en Postgres:
          cuando Mia espera a que alguien conteste, el proceso se suspende y
          continúa en el paso exacto en el que se quedó, incluso si el servidor
          se reinicia entretanto.
        </p>
        <br />
        <p>
          <strong>Nebius Token Factory</strong> pone el razonamiento, con dos
          modelos de distinto tamaño. El pequeño saca eventos y tareas de una
          frase dictada, y el grande decide a quién conviene pedirle qué y
          redacta la propuesta. Los dos responden con un esquema JSON fijo. Qué
          modelo iba en cada sitio se decidió midiendo: un banco de pruebas de
          36 casos reales del producto, con cinco modelos comparados. El
          clasificador de intención acierta el 93,3 % sobre treinta frases
          escritas, y el modelo grande no se inventa nada en 6 de 6 casos.
        </p>
        <br />
        <p>
          Como el producto se usa hablando, el equipo volvió a medir por el
          camino real: veintinueve de esas frases leídas en voz alta,
          transcritas por la ruta del propio producto y pasadas por el mismo
          clasificador. El acierto queda en el 86,2 %. Las dos mediciones están
          publicadas en el repositorio, del mismo día y con el mismo modelo, y
          esos siete puntos de diferencia son una referencia útil para quien
          monte algo parecido con voz.
        </p>
        <br />
        <p>
          <strong>SLNG</strong> pone la voz de Mia, tanto en los mensajes
          cortos como cuando habla dentro de la videollamada, y convierte en
          texto las notas de voz que se dictan fuera de ella. Lo que se dice
          durante la llamada lo transcribe Vonage.
        </p>
        <br />
        <p>
          <strong>Norma</strong>, de QualityClouds, la conocimos allí mismo,
          porque tenía su propio challenge, «Production Ready», y la
          incorporamos durante el fin de semana. Nos gustó porque analiza el
          código real y te dice qué le falta para estar listo para producción.
          El primer análisis dio un 75 %, y a partir de ahí el equipo corrigió
          lo que señalaba: rutas que solo gestionaban el error de su primera
          llamada externa y peticiones de red sin tiempo límite. Cada aviso se
          comprobó contra el código antes de tocarlo, y lo que se decidió
          aceptar a conciencia está explicado en{" "}
          <a
            href={`${REPO}/blob/dev/DEFENCE.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            DEFENCE.md
          </a>
          .
        </p>
      </div>

      {/* ── 5. Reglas convertidas en tests ── */}
      <div className="highlight-box">
        <h2>Las reglas del producto, convertidas en tests</h2>
        <br />
        <p>
          OFFLOAD distingue dos círculos de personas. El núcleo conecta su
          cuenta de Google y Mia ve sus agendas. La red de apoyo, una abuela, un
          amigo o una vecina, solo está en la lista de contactos, así que Mia
          no puede saber si están libres. De ahí sale una de las seis reglas del
          proyecto: fuera del núcleo, Mia nunca afirma que alguien está
          disponible.
        </p>
        <br />
        <p>
          Durante el banco de pruebas, un modelo dijo que la abuela estaba
          libre sin tener forma de saberlo, y ese caso concreto es hoy un test
          que bloquea la integración de cualquier cambio que lo rompa:
        </p>
        <br />
        <div className="code-block bg3">
          <pre>
            {`it("degrada a «llamar» cuando el modelo propone a alguien de la red", () => {
  const r = correctInventedAvailability(
    proposal("propose", "Abuela Rosa"),
    SUPPORT_NETWORK
  );

  assert.equal(r.proposal.decision, "call");
  assert.equal(r.inventedAvailability, true);
});`}
          </pre>
        </div>
        <br />
        <p>
          Son catorce tests de este tipo, y cada uno lleva el nombre de la
          regla que protege, para que un fallo diga qué principio se ha roto.
        </p>
      </div>

      {/* ── 6. El proyecto está publicado ── */}
      <div className="highlight-box">
        <h2>El proyecto está publicado</h2>
        <br />
        <p>
          El repositorio es público y la aplicación está desplegada, así que
          podéis verla y clonarla:
        </p>
        <br />
        <ul>
          <li>
            Repositorio:{" "}
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              github.com/ctrl-Ella/OffLoad
            </a>
          </li>
          <li>
            Aplicación desplegada:{" "}
            <a
              href={DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              offload-production-1c5b.up.railway.app
            </a>
          </li>
        </ul>
        <br />
        <p>
          Está construido con Next.js 16, React 19, Prisma 7 y Tailwind 4, todo
          en TypeScript, y necesita Node 22.13 o superior y una base de datos
          Postgres. El listón de accesibilidad es la norma EN 301 549, que
          remite a WCAG 2.1 nivel AA, y cada color lleva anotado su contraste
          medido. Hay una desviación conocida y documentada: en la demo, la
          propuesta que Mia dice en voz alta no aparece escrita en pantalla. Se
          decidió así el 19 de septiembre para que no se leyera antes de que
          ella terminara de hablar, y el arreglo previsto, explicado en{" "}
          <code>docs/guides/accessibility.md</code>, es mostrar el texto cuando
          la voz no suena.
        </p>
        <br />
        <p>
          Aunque no lo levantéis, hay tres carpetas que puede merecer la pena
          abrir: <code>docs/specs/</code>, con una spec por tarea escrita antes
          del código; <code>docs/decisions/</code>, con las decisiones de
          arquitectura y las alternativas que se descartaron; y{" "}
          <code>bench/results/</code>, con las mediciones del banco de pruebas y
          su fecha.
        </p>
      </div>

      {/* ── 7. Preguntas frecuentes ── */}
      <div className="highlight-box">
        <h2>Preguntas frecuentes</h2>
        <br />
        {PREGUNTAS.map(({ pregunta, respuesta }) => (
          <React.Fragment key={pregunta}>
            <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>
              {pregunta}
            </h3>
            <p>{respuesta}</p>
            <br />
          </React.Fragment>
        ))}
      </div>

      {/* ── 8. El equipo y las gracias ── */}
      <div className="highlight-box">
        <h2>El equipo</h2>
        <br />
        <p>OFFLOAD lo construyó el equipo CTRL4ELLA:</p>
        <br />
        <ul>
          <li>
            <strong>Irina Ichim</strong>{" "}
            <a
              href="https://www.linkedin.com/in/irina-ichim-desarrolladora"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Irina Ichim"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Elvia Benedith</strong>{" "}
            <a
              href="https://www.linkedin.com/in/elvia-benedith"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Elvia Benedith"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Ana Lucía Silva Córdoba</strong>{" "}
            <a
              href="https://www.linkedin.com/in/ana-lucia-silva-cordoba"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Ana Lucía Silva Córdoba"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Silvina Lucero Calderón</strong>{" "}
            <a
              href="https://www.linkedin.com/in/silvina-lucero"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
              aria-label="Ver el perfil de LinkedIn de Silvina Lucero Calderón"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <br />
        <p>
          Gracias a <strong>Vonage</strong> por el challenge y por una Video API
          con la que se puede construir algo así en un fin de semana, y a{" "}
          <strong>HackBarna</strong> por organizar HackBarna AI Summit 26 y
          abrirnos la puerta, esta vez también para participar. Gracias también
          a <strong>Mastra</strong>, <strong>Nebius</strong>,{" "}
          <strong>SLNG</strong> y <strong>QualityClouds</strong>, cuyas
          herramientas forman parte de OFFLOAD.
        </p>
        <br />
        <p>
          Si os apetece probar la Video API, os contamos en{" "}
          <Link
            to="/noticias/vonage-community-partnership-program"
            className="highlight-link"
          >
            la noticia del Vonage Community Partnership Program
          </Link>{" "}
          qué tenéis disponible desde la comunidad. Y si estáis montando algo
          con agentes y os ronda la misma pregunta de dónde poner el modelo y
          dónde no, el razonamiento entero está en el repositorio, y podéis
          abrir una issue o escribirnos para comentarlo.
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>29 de septiembre, 2026</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <CommentsSection postId={postId} />
    </div>
  );
};

export default OffloadChallengeVonageHackBarna26;
