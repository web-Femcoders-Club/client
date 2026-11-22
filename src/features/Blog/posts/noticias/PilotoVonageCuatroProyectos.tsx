import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { RespuestaPost, SeccionPost, VideoPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

/*
 * Avance del piloto con Vonage, tres semanas después de arrancar. Sigue al
 * post del 11 de octubre («De aprender a construir…»): cuatro proyectos,
 * cuatro mentoras, el vídeo con los equipos, el learning path con
 * certificado, las sesiones de Vonage y la demo final del 4 de diciembre.
 * Sin detalle técnico ni capturas: las aplicaciones se enseñan en la demo.
 *
 * Nombres: todas las personas del vídeo dieron permiso para el vídeo. Una de
 * ellas pidió no aparecer en el texto, así que en la transcripción se la
 * menciona como «una compañera más».
 */

const RUTA = "/noticias/piloto-vonage-cuatro-proyectos";

const PROYECTOS = [
  {
    nombre: "Averías del hogar por vídeo",
    equipo: "Carol Azparrent, Miranda Callejón y Carolina Kaechele, acompañadas por Mariellys Soto, están desarrollando una aplicación para facilitar la comunicación entre las personas implicadas en una reparación de una vivienda.",
    descripcion: "La propuesta combina videollamadas, avisos y seguimiento de incidencias para ayudar a coordinar la reparación y disponer de la información necesaria antes de una visita.",
    apis: "Video, Voice y Messages",
    repositorio: "homefix-connect",
  },
  {
    nombre: "Recepcionista de voz para restaurantes",
    equipo: "Joana Jané, Inés Salvans y Andrea Ros, acompañadas por Gabriela Bustamante, trabajan en una aplicación para atender reservas telefónicas cuando el personal del restaurante está ocupado.",
    descripcion: "La propuesta guía la llamada, comprueba la disponibilidad y envía la confirmación de la reserva por mensaje.",
    apis: "Voice y Messages",
    repositorio: "restaurant-receptionist",
  },
  {
    nombre: "Atención al cliente de una tienda de moda",
    equipo: "Paula García Iglesias, Alba Riera y Violeta Cobo forman parte del equipo acompañado por Elvia Benedith, que está construyendo una aplicación para facilitar la atención de incidencias con los pedidos.",
    descripcion: "La propuesta conecta a quien compra, al equipo de atención y al transporte mediante verificación de identidad, mensajes, llamadas y vídeo.",
    apis: "Verify, Messages, Voice y Video",
    repositorio: "customer-support-logistics",
  },
  {
    nombre: "Visitas de pisos sin estafas",
    equipo: "Cande Zamora, Damaris Castro, Kat Leverton, Mayleth Carrascal y Viviana Andrango, acompañadas por Irina Ichim, están desarrollando una propuesta para reducir riesgos en las visitas de alquiler.",
    descripcion: "El proyecto incorpora verificación de identidad, visitas en directo por vídeo y mensajes de confirmación y recordatorio.",
    apis: "Verify, Video, Messages y Voice",
    repositorio: "secure-property-viewing",
  },
];

const PilotoVonageCuatroProyectos: React.FC = () => (
  <>
    <Helmet>
      <title>Construimos juntas: el piloto con Vonage | FemCoders Club</title>
      <meta
        name="description"
        content="Quince mujeres y cuatro mentoras de FemCoders Club construyen cuatro aplicaciones con las APIs de Vonage. Te presentamos los equipos antes de la demo final."
      />
      <meta
        name="keywords"
        content="programa piloto Vonage, APIs de Vonage, Vonage Developer, learning path, certificado, mentoras, proyectos en equipo, mujeres en tecnología, FemCoders Club"
      />
      <link rel="canonical" href="https://www.femcodersclub.com/noticias/piloto-vonage-cuatro-proyectos" />

      <meta property="og:type" content="article" />
      <meta property="og:title" content="Construimos juntas: el piloto con Vonage" />
      <meta
        property="og:description"
        content="Quince mujeres y cuatro mentoras de FemCoders Club construyen cuatro aplicaciones con las APIs de Vonage. Te presentamos los equipos antes de la demo final."
      />
      <meta property="og:url" content="https://www.femcodersclub.com/noticias/piloto-vonage-cuatro-proyectos" />
      <meta
        property="og:image"
        content="https://www.femcodersclub.com/assets/noticias/piloto-vonage-cuatro-proyectos.jpg"
      />
      <meta
        property="og:image:alt"
        content="Imagen creada con IA: los logotipos de FemCoders Club y Vonage sobre el texto «Programa piloto. Tres semanas construyendo con las APIs de Vonage. Cuatro equipos de mujeres desarrollando aplicaciones reales, cada uno con una mentora como tech lead»"
      />
      <meta property="og:site_name" content="FemCoders Club" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Construimos juntas: el piloto con Vonage" />
      <meta
        name="twitter:description"
        content="Quince mujeres y cuatro mentoras de FemCoders Club construyen cuatro aplicaciones con las APIs de Vonage. Te presentamos los equipos antes de la demo final."
      />
      <meta
        name="twitter:image"
        content="https://www.femcodersclub.com/assets/noticias/piloto-vonage-cuatro-proyectos.jpg"
      />

      <meta property="article:published_time" content="2026-11-22T10:00:00Z" />
      <meta property="article:author" content="FemCoders Club" />
      <meta property="article:section" content="Noticias" />
      <meta property="article:tag" content="Vonage" />
      <meta property="article:tag" content="Programa piloto" />
      <meta property="article:tag" content="Comunidad" />
      <meta property="article:tag" content="Mujeres en Tech" />

      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify(
          articleSchema({
            type: "NewsArticle",
            path: RUTA,
            headline: "Construimos juntas: el piloto con Vonage",
            description:
              "Quince mujeres y cuatro mentoras de FemCoders Club construyen cuatro aplicaciones con las APIs de Vonage. Te presentamos los equipos antes de la demo final.",
            image: "/assets/noticias/piloto-vonage-cuatro-proyectos.jpg",
            datePublished: "2026-11-22T10:00:00Z",
            about: { "@type": "Organization", name: "Vonage", url: "https://www.vonage.com" },
            video: {
              "@type": "VideoObject",
              name: "Programa piloto FemCoders Club × Vonage: los cuatro equipos",
              description:
                "Vídeo de 44 segundos que presenta el programa piloto, sus cifras, los cuatro proyectos y a las personas de cada equipo.",
              thumbnailUrl: "https://www.femcodersclub.com/assets/videos/piloto-vonage-equipos-2026-poster.jpg",
              contentUrl: "https://www.femcodersclub.com/assets/videos/piloto-vonage-equipos-2026.mp4",
              uploadDate: "2026-11-18T12:00:00+01:00",
              duration: "PT44S",
              inLanguage: "es",
            },
            keywords: ["programa piloto Vonage", "APIs de Vonage", "learning path", "mentoras", "FemCoders Club"],
          })
        )}
      </script>
    </Helmet>

    <PlantillaPost
      ruta={RUTA}
      titulo="Tres semanas construyendo con las APIs de Vonage: así avanza nuestro programa piloto"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={61}
      portadaConIA
      entradilla={
        <>
          <p>
            Hoy queremos contarte cómo avanza{' '}
            <Link to="/noticias/proyecto-piloto-apis-vonage">
              nuestro primer programa piloto con las APIs de Vonage
            </Link>{' '}
            y presentarte a las mujeres que lo están haciendo posible.
          </p>
          <p>
            Quince participantes, cuatro mentoras de nuestra comunidad y cuatro proyectos que parten
            de necesidades cotidianas. Detrás de cada aplicación hay tiempo dedicado a aprender,
            decisiones que tomar y conocimientos que compartir entre compañeras. Desde FemCoders
            Club queremos dar visibilidad a ese trabajo y celebrar con ellas este recorrido.
          </p>
          <p>
            El 18 de noviembre de 2026 cumplimos tres semanas de programa. Hoy te acercamos a los equipos y
            a lo que están construyendo, con el acompañamiento de las mentoras y el apoyo de Vonage.
          </p>
        </>
      }
    >
      <SeccionPost titulo="Conoce a los equipos" id="video">
        <VideoPost
          src="/assets/videos/piloto-vonage-equipos-2026.mp4"
          poster="/assets/videos/piloto-vonage-equipos-2026-poster.jpg"
          subtitulos="/assets/videos/piloto-vonage-equipos-2026.vtt"
          descripcion="Vídeo de presentación del programa piloto FemCoders Club × Vonage, con los cuatro proyectos y las personas de cada equipo. Solo música, sin voz."
          pie="Presentación de los cuatro equipos del programa piloto, 18 de noviembre de 2026. El vídeo solo lleva música: todo lo que aparece en pantalla está transcrito justo debajo."
        />

        <RespuestaPost resumen="Leer lo que aparece en el vídeo">
          <p>
            <strong>Programa piloto · FemCoders Club × Vonage.</strong> Tres semanas construyendo con
            las APIs de Vonage. Cuatro equipos de mujeres desarrollando aplicaciones reales, cada uno
            con una mentora como tech lead.
          </p>
          <p>
            <strong>El talento se construye en equipo.</strong> 15 mujeres. 4 equipos. 4 proyectos
            reales.
          </p>
          <p>
            <strong>El programa: un piloto para aprender construyendo.</strong> Las participantes
            completan un learning path de Vonage y después desarrollan en equipo una aplicación con
            sus APIs. En remoto, desde cualquier lugar y a un ritmo compatible con el trabajo o los
            estudios. De 4 a 6 semanas: primero la base técnica y después el proyecto completo. En
            equipo: cada grupo trabaja con una mentora que hace de tech lead.
          </p>
          <p>
            <strong>En cifras, así arrancó el piloto:</strong> 34 personas inscritas, 15
            participantes, 4 mentoras, 4 proyectos y 3 personas de apoyo.
          </p>
          <p>
            <strong>Cuatro proyectos sobre problemas reales.</strong> Visitas de pisos sin estafas:
            verificación de agencia e interesada, y visita en directo por vídeo (Verify, Video,
            Messages, Voice). Recepcionista de voz para restaurantes: un menú de voz que toma la
            reserva y la confirma por mensaje (Voice, Messages). Atención al cliente de una tienda de
            moda: atención verificada que puede pasar a videollamada (Video, Verify, Messages, Voice).
            Averías del hogar por vídeo: inquilina, propietaria y técnico en una sola videollamada
            (Video, Voice, Messages).
          </p>
          <p>
            <strong>Los equipos.</strong> Averías del hogar por vídeo: Mariellys Soto, mentora, con
            Carol Azparrent, Miranda Callejón y Carolina Kaechele. Recepcionista de voz para
            restaurantes: Gabriela Bustamante, mentora, con Joana Jané, Inés Salvans y Andrea Ros.
            Atención al cliente de una tienda de moda: Elvia Benedith, mentora, con Paula García
            Iglesias, Alba Riera, Violeta Cobo y una compañera más. Visitas de pisos sin estafas:
            Irina Ichim, mentora, con Cande Zamora, Damaris Castro, Kat Leverton, Mayleth Carrascal y
            Viviana Andrango.
          </p>
          <p>
            <strong>La idea:</strong> cada equipo construye una aplicación real, de la idea al código.
          </p>
          <p>
            <strong>Cómo se trabaja, de la formación al portfolio.</strong> 1. Learning path de
            Vonage: cada participante completa al menos uno y obtiene el certificado. 2. Aplicación
            en equipo: desarrollo con las APIs de Vonage y mentoría semanal. 3. Proyecto en GitHub:
            para el portfolio y para explicarlo en entrevistas.
          </p>
          <p>
            <strong>Código abierto: los cuatro proyectos, en público.</strong>{" "}
            github.com/femCodersClub-vonage-program: secure-property-viewing,
            restaurant-receptionist, customer-support-logistics y homefix-connect.
          </p>
          <p>
            <strong>El siguiente paso:</strong> enseñarte lo que hemos construido.
            femcodersclub.com
          </p>
        </RespuestaPost>
      </SeccionPost>

      <SeccionPost titulo="Aprender con Vonage y llevarlo a la práctica" id="learning-path">
        <p>
          El programa comienza con los <em>learning paths</em> de Vonage: itinerarios de formación
          para aprender a trabajar con sus APIs y obtener un certificado que las participantes
          pueden incorporar al CV, compartir en LinkedIn y mostrar en otros perfiles profesionales.
        </p>
        <p>
          Esa formación es el punto de partida para desarrollar una aplicación en equipo. Los
          proyectos permiten aplicar lo aprendido, trabajar con GitHub y contar con una experiencia
          propia que después podrán enseñar en su portfolio y explicar en una entrevista.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El acompañamiento de los equipos de Vonage" id="sesiones-vonage">
        <p>
          Vonage también nos apoya con créditos para usar sus APIs y poner en práctica lo aprendido
          en los proyectos. Puedes consultar la información en la{' '}
          <a
            href="https://developer.vonage.com/en/events/register/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            página de Vonage para la comunidad de FemCoders Club
          </a>
          .
        </p>
        <p>
          Además, durante el programa contamos con sesiones online con los equipos de Vonage que
          trabajan con las APIs que están utilizando las participantes. Poder plantearles dudas
          sobre sus aplicaciones acerca la formación a los retos que van encontrando durante el
          desarrollo. Gran parte de este acompañamiento es posible gracias a Lucinda Abberley,
          Global Community Manager de Developer Relations en Vonage.
        </p>
        <p>
          Agradecemos mucho esta implicación: disponer de formación y poder conversar con los
          equipos técnicos aporta un acompañamiento muy valioso al programa.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Cuatro equipos que están dando forma a sus ideas" id="proyectos">
        <p>
          Cada grupo cuenta con una mentora de la comunidad como <em>tech lead</em>, que acompaña
          las decisiones técnicas y los encuentros semanales para compartir avances, resolver
          dudas y preparar los siguientes pasos.
        </p>
        <p>Estos son los cuatro proyectos:</p>
        {PROYECTOS.map((p) => (
          <div key={p.repositorio}>
            <h3>{p.nombre}</h3>
            <p>{p.equipo}</p>
            <p>{p.descripcion} Utiliza las APIs {p.apis} de Vonage.</p>
            <p>
              <a
                href={`https://github.com/femCodersClub-vonage-program/${p.repositorio}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conoce el proyecto {p.nombre} en GitHub
              </a>
              .
            </p>
          </div>
        ))}
      </SeccionPost>

      <SeccionPost titulo="Gracias por construir este camino con nosotras" id="agradecimientos">
        <p>
          A las participantes: gracias por el tiempo que estáis dedicando, por lo que aportáis a
          vuestros equipos y por compartir este aprendizaje con la comunidad.
        </p>
        <p>
          A las mentoras y al equipo de apoyo: gracias por poner vuestro conocimiento y vuestro
          tiempo al servicio de este recorrido.
        </p>
        <p>
          Y a Vonage, gracias por ayudarnos a hacerlo posible. Queremos agradecer especialmente a
          Lucinda Abberley su cercanía y todo el apoyo que nos está dando para sacar adelante el
          programa. Para FemCoders Club significa mucho contar con esta colaboración y poder
          acercar estas oportunidades a las mujeres de nuestra comunidad.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El 4 de diciembre, los equipos nos enseñan sus proyectos" id="demo-final">
        <p>
          El 4 de diciembre de 2026 los equipos presentarán sus aplicaciones en la demo final y compartirán
          cómo las han construido. Tenemos muchas ganas de ver sus proyectos y seguir dando
          visibilidad a su trabajo. 💜
        </p>
      </SeccionPost>
      <SeccionPost titulo="¿Te apetece construir en comunidad?" id="proximos-proyectos">
        <p>
          Las inscripciones a este piloto ya están cerradas, pero puedes apuntarte a la lista de
          espera para los próximos proyectos de FemCoders Club.
        </p>
        <p>
          Para acceder a la lista de espera necesitas una cuenta en nuestra web. Después de
          registrarte, encontrarás el formulario en tu página de bienvenida, donde podrás contarnos
          con qué tecnologías te gustaría trabajar y si tienes alguna idea de proyecto.
        </p>
        <p>
          <Link to="/register" className="fc-boton">
            Registrarme en FemCoders Club
          </Link>
        </p>
        <p>
          Si ya tienes cuenta, <Link to="/login">inicia sesión</Link> y ve a la{' '}
          <Link to="/welcome#lista-espera">lista de espera para próximos proyectos</Link>.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default PilotoVonageCuatroProyectos;
