import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { ImagenPost, SeccionPost, TarjetasPost } from "../../components/post/PiezasPost";

const MarzoEventos2026: React.FC = () => (
  <>
      <Helmet>
        <title>
          El mes en que dejamos de pedir permiso para ocupar espacio | FemCoders Club
        </title>
        <meta
          name="description"
          content="Marzo 2026 en FemCoders Club: 150 mujeres en Talent Arena, el primer evento de Claude en Barcelona, una invitación inesperada del Gobierno y una tarde con InfoJobs. Os contamos todo."
        />
        <meta
          name="keywords"
          content="FemCoders Club, mujeres en tecnología Barcelona, Talent Arena 2026, Claude Barcelona, Anthropic, InfoJobs, eventos tech Barcelona marzo 2026, comunidad tech mujeres, mujeres programadoras Barcelona, diversidad tecnología"
        />

        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/marzo-2026-eventos"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="El mes en que dejamos de pedir permiso para ocupar espacio | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Talent Arena, Claude en Barcelona e InfoJobs: marzo 2026 ha sido un mes que deja huella. Y aún no ha terminado."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/marzo-2026-eventos"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/talent-arena-2026-partnership.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="El mes en que dejamos de pedir permiso para ocupar espacio | FemCoders Club"
        />
        <meta
          name="twitter:description"
          content="Talent Arena, Claude en Barcelona e InfoJobs: marzo 2026 ha sido un mes que deja huella."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/talent-arena-2026-partnership.png"
        />

        <meta
          property="article:published_time"
          content="2026-03-06T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Talent Arena" />
        <meta property="article:tag" content="Claude Barcelona" />
        <meta property="article:tag" content="InfoJobs" />
        <meta property="article:tag" content="Mujeres en Tech" />
        <meta property="article:tag" content="Eventos Marzo 2026" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/marzo-2026-eventos"
      titulo="El mes en que dejamos de pedir permiso para ocupar espacio"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={36}
      entradilla={
        <>
          <p>Hay meses que pasan. Y hay meses que dejan huella.</p>
          <p>
            Marzo empezó con 150 mujeres en tecnología entrando a Talent Arena
            con entrada PRO, siguió con el primer evento de la comunidad de
            Claude en Barcelona, y antes de que acabe todavía nos queda una tarde
            con InfoJobs que tiene muy buena pinta. En medio de todo eso, llegó
            una invitación que no esperábamos y que nos hizo parar un momento a
            asimilar lo que estamos construyendo.
          </p>
          <p>
            Porque FemCoders Club lleva más de dos años siendo un espacio donde
            las <strong>mujeres en tecnología de Barcelona y de toda España</strong>{" "}
            se encuentran, aprenden y crecen juntas. Y a veces, en medio del día
            a día, hay semanas que te recuerdan que todo eso tiene más impacto
            del que imaginas.
          </p>
          <p>Os contamos todo.</p>
        </>
      }
    >
      <SeccionPost titulo="Talent Arena: cuando tu comunidad llena una sala">
        <ImagenPost
          src="/reunion-femCodersClub-administracion-gob-es.jpeg"
          alt="Reunión de FemCoders Club con la Subdirección General de Ciudadanía, Talento y Emprendimiento Digital"
        />
        <p>
          <a href="https://talentarena.tech/es/" target="_blank" rel="noopener noreferrer">
            Talent Arena
          </a>{" "}
          es uno de esos eventos que cada año coincide con el Mobile World
          Congress y convierte Barcelona en el centro de la conversación tech
          europea. Empresas, proyectos, talento y comunidades durante tres días
          en el mismo espacio.
        </p>
        <p>
          Este año estuvimos como <strong>Community Partners</strong> y fue una
          experiencia que no olvidamos fácilmente. Regalamos 150 entradas PRO a
          mujeres de la comunidad, nos reencontramos con caras conocidas que
          siempre alegran, llenamos páginas de notas en charlas que valieron
          mucho la pena, y vimos proyectos de empresas que nos dejaron con ganas
          de más. El networking fue real, de esos que acaban en conversaciones
          largas y en «oye, tenemos que seguir hablando».
        </p>
        <p>
          Pero lo que más nos marcó fue algo que no esperábamos: una invitación
          de la{" "}
          <a
            href="https://administracion.gob.es/pagFront/espanaAdmon/directorioOrganigrama/fichaUnidadOrganica.htm?codigoUnidad=EA0056327"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Subdirección General de Ciudadanía, Talento y Emprendimiento Digital</strong>
          </a>{" "}
          para participar en el diseño de nuevos programas de capacitación
          digital dirigidos a mujeres. Nos pidieron nuestra visión como
          comunidad del sector.
        </p>
        <p>
          Fue un momento de mucha responsabilidad. Que desde el sector público
          quieran escuchar a una comunidad como la nuestra —que comparte lo que
          aprende y acompaña a las <strong>mujeres en tecnología</strong> en su
          camino— es una oportunidad que tomamos muy en serio. Esperamos poder
          aportar algo que valga la pena, y seguir construyendo esa relación
          desde la honestidad y el trabajo real.
        </p>
        <p>
          Si quieres leer el momento en que nos anunciamos como Community
          Partners de Talent Arena,{" "}
          <Link to="/noticias/talent-arena-2026-partnership">aquí está ese post</Link>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Claude en Barcelona: IA que nos gusta de verdad">
        <ImagenPost
          src="/eventoClaude.jpeg"
          alt="FemCoders Club junto al cartel de Claude Barcelona en el primer evento de la comunidad de Claude en la ciudad"
        />
        <p>
          También fuimos parte del primer evento de la comunidad de Claude en
          Barcelona, y eso para nosotras tiene un significado especial.
        </p>
        <p>
          Claude es el asistente de IA de{" "}
          <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer">
            Anthropic
          </a>
          , y en FemCoders Club llevamos tiempo trabajando con él en proyectos
          reales. Lo que nos gusta no es solo lo que hace, sino cómo está
          construido: con criterio, con cuidado en los detalles, y con una
          manera de razonar que se nota diferente. Es de esas herramientas que
          cuando las integras en tu flujo de trabajo, no quieres volver atrás.
        </p>
        <p>
          El evento fue una tarde de conversaciones honestas sobre IA, con gente
          que la está usando de verdad y no solo hablando de ella. Exactamente
          el tipo de espacio que nos gusta. Si quieres estar al tanto de los
          próximos eventos de la comunidad,{" "}
          <a href="https://luma.com/claudecommunity" target="_blank" rel="noopener noreferrer">
            síguelos aquí
          </a>
          .
        </p>
        <p>
          En FemCoders Club creemos que la inteligencia artificial no es el
          futuro, es el presente. Y que las <strong>mujeres en tecnología</strong>{" "}
          tenemos que estar en esa conversación desde el principio, no como
          espectadoras sino como creadoras. Por eso seguimos explorando estas
          herramientas, compartiéndolas en nuestra comunidad y formando parte de
          espacios donde se debate su uso real.
        </p>
        <p>
          Si tienes curiosidad sobre cómo usamos la IA en proyectos concretos,
          estamos preparando contenido sobre eso: sigue atenta a{" "}
          <Link to="/blog">nuestro blog</Link>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="26 de marzo: nos vemos en InfoJobs">
        <ImagenPost
          src="/evento-mujeres-transforman-futuro.png"
          alt="Cartel de «Estructuras en movimiento: mujeres que transforman el futuro», de InfoJobs y FemCoders Club, con las cuatro ponentes; 26 de marzo a las 18:00 en InfoJobs, Carrer de la Ciutat de Granada, 150"
        />
        <p>
          Y el mes todavía tiene más. El <strong>26 de marzo</strong> celebramos
          el Día de la Mujer junto a{" "}
          <a href="https://www.infojobs.net" target="_blank" rel="noopener noreferrer">
            <strong>InfoJobs</strong>
          </a>{" "}
          con una tarde de charlas que hemos organizado con mucho cariño.
        </p>
        <p>
          La idea es sencilla: reunir a mujeres que están liderando proyectos
          tecnológicos reales, para que cuenten cómo lo están haciendo. Sin
          postureo, sin elevator pitch. Solo experiencia, aprendizaje y
          conversación.
        </p>
        <p>Las ponentes hablan por sí solas:</p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Marta Gimeno",
              texto: "Emprendedora, advisor social, technohumanista y feminista. CEO de startups.",
            },
            {
              titulo: "Sheila Guirado",
              texto: "Estratega de IA aplicada al negocio.",
            },
            {
              titulo: "Carolina Romero Cruz",
              texto: "Directora de Producto en Decidim.",
            },
            {
              titulo: "Irene Amo",
              texto: "Senior Product Manager en InfoJobs.",
            },
          ]}
        />
        <p>
          Cuatro mujeres que están construyendo desde la estrategia, el producto
          y la innovación. Va a ser una tarde que merece la pena.
        </p>

        <h3>26 de marzo, InfoJobs Barcelona</h3>
        <p>
          Tres eventos, muchos contactos, una invitación que no esperábamos y una
          comunidad que no para de crecer.
        </p>
        <p>
          Gracias a todas las que estáis ahí, en los eventos, en los grupos,
          mandando mensajes, compartiendo oportunidades. FemCoders Club somos
          todas.
        </p>
        <p>
          <a
            href="https://www.eventbrite.es/e/entradas-estructuras-en-movimiento-mujeres-que-transforman-el-futuro-1984505957741?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Reserva tu sitio
          </a>{" "}
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

export default MarzoEventos2026;
