import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Handshake, Sparkles } from "lucide-react";
import PlantillaPost from "../../components/post/PlantillaPost";
import {
  NotaPost,
  SeccionPost,
  TablaPost,
  TarjetasPost,
  VideoPost,
} from "../../components/post/PiezasPost";

const DataConnectEvento: React.FC = () => (
  <>
      <Helmet>
        <title>
          DataConnect: revive una tarde épica de comunidad tech en Barcelona | FemCoders Club
        </title>
        <meta
          name="description"
          content="Revive los mejores momentos del evento DataConnect en InfoJobs Barcelona. Más de 70 personas, charlas inspiradoras, networking con DJ y una comunidad diversa apasionada por el mundo data."
        />
        <meta
          name="keywords"
          content="DataConnect, evento tech Barcelona, FemCoders Club, InfoJobs, Le Wagon, Glovo, Big Data, análisis datos, visualización datos, women in tech, comunidad tech, networking Barcelona, Muntsa Padró, Laura Pourtier, Kevin Badia, Pia Trnovec"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/DataConnectEvento"
        />

        {/* Directivas para motores de búsqueda */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="FemCoders Club" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="DataConnect: revive una tarde épica de comunidad tech en Barcelona"
        />
        <meta
          property="og:description"
          content="Más de 70 personas se reunieron en InfoJobs Barcelona para una jornada increíble de Big Data, networking y comunidad. Revive los mejores momentos con nuestro video resumen."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/DataConnectEvento"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/comunidadData.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DataConnect: Una tarde épica de comunidad tech en Barcelona"
        />
        <meta
          name="twitter:description"
          content="Revive los mejores momentos del evento DataConnect: charlas inspiradoras, networking con DJ y una comunidad diversa apasionada por el mundo data."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/comunidadData.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-06-02T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Eventos Tech" />
        <meta property="article:tag" content="DataConnect" />
        <meta property="article:tag" content="Eventos" />
        <meta property="article:tag" content="Barcelona" />
        <meta property="article:tag" content="Big Data" />
        <meta property="article:tag" content="Comunidad" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/DataConnectEvento"
      titulo="Revive la magia del DataConnect: una tarde que marcó la diferencia"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={19}
      entradilla={
        <>
          <p>
            ¿Te perdiste nuestro evento DataConnect? No te preocupes, lo tenemos
            todo capturado en este vídeo que resume una jornada épica de
            comunidad, aprendizaje y networking que nos llenó el corazón.
          </p>
          <p>
            El pasado <strong>28 de mayo</strong>, las oficinas de{" "}
            <strong>InfoJobs</strong> en Barcelona se transformaron en el
            epicentro de la innovación data. Más de{" "}
            <strong>70 personas apasionadas</strong> por el Big Data, análisis y
            visualización de datos se reunieron para vivir una experiencia
            única que quedará en nuestros corazones para siempre.
          </p>
        </>
      }
    >
      <VideoPost
        src="/videoDataConnect-evento-femCodersClub.mp4"
        descripcion="Vídeo resumen del DataConnect en las oficinas de InfoJobs Barcelona: charlas, live coding y networking"
        pie="Revive los mejores momentos del DataConnect Barcelona."
      />

      <SeccionPost titulo="Lo que vivimos">
        <h3>Charlas que inspiraron</h3>
        <p>
          <strong>Muntsa Padró</strong>, <strong>Laura Pourtier</strong>,{" "}
          <strong>Kevin Badia Carballo</strong> y <strong>Pia Trnovec</strong>{" "}
          compartieron sus experiencias reales desde{" "}
          <a href="https://www.infojobs.net/" target="_blank" rel="noopener noreferrer">
            InfoJobs
          </a>
          ,{" "}
          <a href="https://www.lewagon.com/es" target="_blank" rel="noopener noreferrer">
            Le Wagon
          </a>{" "}
          y{" "}
          <a href="https://glovoapp.com/" target="_blank" rel="noopener noreferrer">
            Glovo
          </a>
          . Historias auténticas de profesionales que están liderando el cambio
          en el mundo data, contadas desde el corazón y con esa honestidad que
          solo sucede en comunidad.
        </p>

        <h3>Networking con energía</h3>
        <p>
          Con{" "}
          <a
            href="https://www.linkedin.com/in/karisssha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karisha Meléndez como DJ
          </a>
          , <strong>live coding</strong> y esa conexión especial que solo sucede
          cuando personas con la misma pasión se encuentran. Hubo risas,
          intercambio de contactos, ideas que nacieron en conversaciones
          espontáneas y esos momentos mágicos donde sientes que estás
          exactamente donde debes estar.
        </p>

        <h3>Comunidad diversa</h3>
        <p>
          El ingrediente secreto que hace que estos espacios sean únicos y
          transformadores. Desde estudiantes dando sus primeros pasos en data
          hasta profesionales con experiencia, todas las personas con ganas de
          aprender, compartir y crecer en comunidad.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Quieres profundizar más?">
        <p>
          Si las charlas del vídeo te dejaron con ganas de más, tenemos algo
          especial para ti. Puedes acceder a las{" "}
          <strong>presentaciones completas</strong> de Le Wagon y Glovo en
          nuestro repositorio de recursos:
        </p>
        <p>
          <Link to="/presentaciones-destacadas" className="fc-boton">
            Ver presentaciones destacadas
          </Link>{" "}
          <Link to="/register" className="fc-boton">
            Únete a FemCoders Club
          </Link>
        </p>
        <p>
          Allí encontrarás los slides completos, recursos adicionales y todo el
          material que compartieron quienes presentaron.{" "}
          <strong>¿Aún no eres parte de la comunidad?</strong> Regístrate gratis
          para acceder a recursos exclusivos, eventos futuros y conectar con una
          red increíble de personas apasionadas por la tecnología.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Momentos que quedarán para siempre">
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Highlights del evento",
              icono: <Sparkles aria-hidden="true" />,
              texto: (
                <ul>
                  <li>
                    <strong>70+ profesionales</strong> del mundo data reunidos
                    en un solo lugar
                  </li>
                  <li>
                    <strong>4 speakers inspiradores</strong> compartiendo
                    experiencias reales
                  </li>
                  <li>
                    <strong>Live coding en vivo</strong> que dejó a todo el
                    mundo con la boca abierta
                  </li>
                  <li>
                    <strong>Networking orgánico</strong> con conversaciones que
                    nacieron naturalmente
                  </li>
                  <li>
                    <strong>DJ set</strong> que creó el ambiente perfecto para
                    conectar
                  </li>
                </ul>
              ),
            },
            {
              titulo: "Nuestros increíbles aliados",
              icono: <Handshake aria-hidden="true" />,
              texto: (
                <ul>
                  <li>
                    <strong>InfoJobs:</strong> nos abrió las puertas de sus
                    increíbles oficinas.
                  </li>
                  <li>
                    <strong>Le Wagon Spain:</strong> compartió expertise en
                    coding y formación.
                  </li>
                  <li>
                    <strong>Glovo:</strong> nos mostró cómo usan data para
                    mejorar vidas.
                  </li>
                  <li>
                    <strong>FemCoders Club:</strong> tejió la red que hizo
                    posible esta magia.
                  </li>
                </ul>
              ),
            },
          ]}
        />

        <NotaPost titulo="Lo que nos dijo una participante">
          <p>
            «Eventos como este me recuerdan por qué amo tanto el mundo tech. La
            energía, las conexiones auténticas, las ganas de seguir creciendo...
            ¡Esto es comunidad de verdad!»
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Gracias infinitas">
        <p>
          A cada persona que hizo posible esta jornada: equipo organizador que
          trabajó incansablemente, speakers que compartieron su sabiduría con
          generosidad, equipo voluntario que estuvo en cada detalle, empresas
          colaboradoras que creyeron en la visión, y especialmente a cada una de
          las 70+ personas que vinieron con ganas de aprender, compartir y
          conectar.
        </p>
        <p>
          <strong>Y seguimos adelante con más fuerza que nunca.</strong>{" "}
          Continuamos trabajando para crear más espacios donde el talento
          diverso tenga visibilidad, oportunidades y, sobre todo, esa sensación
          de pertenencia que tanto necesitamos en el mundo tech.
        </p>

        <TablaPost descripcion="Lo que nos llevamos, lo que construimos y lo que viene después del DataConnect">
          <table>
            <thead>
              <tr>
                <th>Lo que nos llevamos</th>
                <th>Lo que construimos</th>
                <th>Lo que viene</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conocimientos técnicos</td>
                <td>Nuevas conexiones</td>
                <td>Más eventos épicos</td>
              </tr>
              <tr>
                <td>Inspiración renovada</td>
                <td>Confianza en comunidad</td>
                <td>Colaboraciones futuras</td>
              </tr>
              <tr>
                <td>Herramientas prácticas</td>
                <td>Red de apoyo</td>
                <td>Oportunidades laborales</td>
              </tr>
              <tr>
                <td>Energía positiva</td>
                <td>Sentido de pertenencia</td>
                <td>Crecimiento profesional</td>
              </tr>
            </tbody>
          </table>
        </TablaPost>
      </SeccionPost>

      <SeccionPost titulo="¿Te unes a la próxima aventura?">
        <p>
          Si este post te emocionó tanto como a nosotros nos emocionó vivir el
          evento, tenemos noticias increíbles: esto es solo el comienzo. En
          FemCoders Club estamos preparando más eventos, workshops y
          oportunidades para que nuestra comunidad siga creciendo y brillando.
        </p>

        <h3>Mantente conectado con nosotros</h3>
        <p>
          Síguenos en nuestras redes, únete a nuestro Slack y sé la primera
          persona en enterarte de próximos eventos que van a volar tu mente.
        </p>
        <p>
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Únete al Slack
          </a>{" "}
          <Link to="/eventos" className="fc-boton">
            Ver próximos eventos
          </Link>
        </p>
        <p>
          <strong>
            La comunidad tech más inspiradora te está esperando. ¡Ven a brillar
            con nosotros!
          </strong>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default DataConnectEvento;
