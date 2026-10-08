import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";

const TalentArenaPartnership: React.FC = () => (
  <>
      <Helmet>
        <title>
          FemCoders Club es Community Partner de Talent Arena 2026 | FemCoders Club
        </title>
        <meta
          name="description"
          content="Celebramos que FemCoders Club es oficialmente Community Partner de Talent Arena. Una alianza basada en valores compartidos: diversidad, talento colectivo e innovación."
        />
        <meta
          name="keywords"
          content="FemCoders Club, Talent Arena, Community Partner, mujeres en tecnología, diversidad tech, comunidad tech, networking, eventos tech Barcelona, talento femenino, innovación"
        />

        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/talent-arena-2026-partnership"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club es Community Partner de Talent Arena 2026"
        />
        <meta
          property="og:description"
          content="Una alianza que celebra la diversidad y el poder del talento colectivo. Descubre qué significa esta colaboración para nuestra comunidad."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/talent-arena-2026-partnership"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/femCodersClub-talentArena.png"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club es Community Partner de Talent Arena 2026"
        />
        <meta
          name="twitter:description"
          content="Celebramos esta alianza basada en valores compartidos: diversidad, talento e innovación."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/femCodersClub-talentArena.png"
        />

        <meta
          property="article:published_time"
          content="2026-02-02T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Community Partner" />
        <meta property="article:tag" content="Talent Arena" />
        <meta property="article:tag" content="Diversidad" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/talent-arena-2026-partnership"
      titulo="Hoy celebramos juntas: FemCoders Club es Community Partner de Talent Arena"
      autora={{ nombre: "Ana Lucía Silva Córdoba", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={21}
      entradilla={
        <>
          <p>
            Hay momentos que te hacen pausar, respirar hondo y sentir que todo
            el camino recorrido cobra sentido. Hoy vivimos uno de esos
            momentos.
          </p>
          <p>
            En FemCoders Club siempre hemos creído en algo profundo y
            transformador: que cuando las mujeres nos unimos, nos apoyamos y
            creamos comunidad, no solo cambiamos nuestras propias historias,
            también transformamos la industria que nos rodea. Y hoy queremos
            compartir con todas ustedes una noticia que nos llena de emoción:{" "}
            <strong>
              somos Community Partner de{" "}
              <a
                href="https://talentarena.tech/es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talent Arena
              </a>
            </strong>
            .
          </p>
        </>
      }
    >
      <SeccionPost titulo="Nuestra historia, nuestra esencia">
        <p>
          Desde el primer día, FemCoders Club nació del corazón. Nació de la
          necesidad de encontrarnos, de acompañarnos, de saber que no estamos
          solas en este camino tecnológico que a veces puede sentirse
          solitario. Queríamos crear un espacio donde cada mujer, sin importar
          si está dando sus primeros pasos en programación o si lleva años
          escribiendo código, pudiera sentirse vista, escuchada y valorada.
        </p>
        <p>
          Y lo hemos hecho. Juntas hemos construido una comunidad basada en la
          colaboración genuina, en el apoyo incondicional y en la certeza de
          que <strong>todas merecemos un lugar en la tecnología</strong>. Si
          quieres conocer más sobre nuestra historia y logros, te invitamos a
          leer sobre nuestro{" "}
          <Link to="/noticias/segundo-aniversario">segundo aniversario</Link>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Un encuentro de valores">
        <p>
          Conocer a{" "}
          <a
            href="https://talentarena.tech/es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talent Arena
          </a>{" "}
          fue como reconocernos en un espejo. Ellos también creen en la
          diversidad, en el poder del talento colectivo, en que la innovación
          nace cuando abrimos puertas y construimos puentes. Esta alianza no es
          solo una colaboración profesional, es un encuentro de propósitos
          compartidos.
        </p>
        <p>Como Community Partner, podremos:</p>
        <ul>
          <li>Participar en iniciativas que amplifican nuestra voz.</li>
          <li>Colaborar en eventos que nos conectan con el ecosistema tech.</li>
          <li>Generar contenidos que inspiran a más mujeres.</li>
          <li>
            Seguir creando esos espacios seguros de aprendizaje y networking
            que tanto necesitamos y merecemos.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Esto es nuestro, de todas">
        <p>
          Si hoy estamos aquí es por cada una de ustedes. Por cada mujer que se
          atrevió a asistir a su primer <Link to="/eventos">evento</Link>{" "}
          aunque le temblaran las manos. Por cada mentora que compartió su
          experiencia con generosidad. Por cada conversación en los descansos
          del café, cada duda resuelta, cada victoria celebrada juntas.
        </p>
        <p>
          Esta alianza con{" "}
          <a
            href="https://talentarena.tech/es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talent Arena
          </a>{" "}
          es el reflejo de lo que hemos construido juntas:{" "}
          <strong>
            una comunidad real, con impacto tangible y un propósito que nos
            mueve cada día
          </strong>
          .
        </p>
        <p>
          <em>
            Gracias, Talent Arena, por vernos, por valorarnos y por abrirnos
            sus puertas. Nos emociona profundamente todo lo que construiremos
            juntas.
          </em>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Lo que viene nos tiene el corazón acelerado">
        <p>
          Estamos emocionadas, ilusionadas, llenas de ideas y energía. Porque
          sabemos que esta es solo una página más en una historia que
          escribimos juntas cada día. Una historia donde la tecnología tiene
          rostro de mujer, donde la diversidad no es una casilla que marcar,
          sino una realidad viva, donde cada una de nosotras importa.
        </p>
        <p>
          <strong>Seguimos comprometidas con nuestra esencia:</strong>{" "}
          construir un ecosistema tecnológico más humano, más diverso, más
          nuestro.
        </p>

        <h3>Y esto, queridas compañeras, apenas comienza</h3>
        <p>
          ¿Quieres ser parte de esta aventura? Únete a nuestra comunidad y sé
          parte del cambio.
        </p>
        <p>
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Únete al Slack
          </a>
        </p>
        <p>
          <Link to="/login">Sé parte de la comunidad</Link>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default TalentArenaPartnership;
