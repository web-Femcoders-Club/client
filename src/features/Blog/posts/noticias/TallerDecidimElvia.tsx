import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../components/post/PlantillaPost";
import { CodigoPost, SeccionPost } from "../../components/post/PiezasPost";

const TallerDecidimElvia: React.FC = () => (
  <>
      <Helmet>
        <title>
          Dentro de Decidim: lo que aprendimos explorando su arquitectura con
          Ruby on Rails | FemCoders Club
        </title>
        <meta
          name="description"
          content="El 27 de mayo nos reunimos en el Canòdrom para explorar Decidim por dentro con Elvia Benedith (Pokecode). Docker, Ruby on Rails, arquitectura modular y una comunidad con ganas de aprender y contribuir al open source."
        />
        <meta
          name="keywords"
          content="Decidim, Ruby on Rails, open source, taller programación Barcelona, FemCoders Club, Canòdrom, Elvia Benedith, Pokecode, participación ciudadana, tecnología cívica, contribuir open source, mujeres tecnología Barcelona"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/taller-decidim-hacks"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Dentro de Decidim: lo que aprendimos explorando su arquitectura con Ruby on Rails | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Crónica del taller práctico sobre Decidim en el Canòdrom: entorno local, arquitectura Rails, personalización y comunidad."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/taller-decidim-hacks"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/taller-decidim-elvia.jpeg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dentro de Decidim: lo que aprendimos explorando su arquitectura con Ruby on Rails"
        />
        <meta
          name="twitter:description"
          content="Taller práctico sobre Decidim en el Canòdrom con Elvia Benedith (Pokecode). Docker, Rails, arquitectura modular y open source."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/taller-decidim-elvia.jpeg"
        />

        <meta
          property="article:published_time"
          content="2026-06-03T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Decidim" />
        <meta property="article:tag" content="Ruby on Rails" />
        <meta property="article:tag" content="Open Source" />
        <meta property="article:tag" content="Canòdrom" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/taller-decidim-hacks"
      titulo="Dentro de Decidim: lo que aprendimos explorando su arquitectura con Ruby on Rails"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={41}
      entradilla={
        <>
          <p>
            El pasado 27 de mayo nos reunimos en el{" "}
            <strong>Canòdrom de Barcelona</strong> para explorar una de las
            plataformas de participación ciudadana más importantes del
            ecosistema open source:{" "}
            <a href="https://decidim.org" target="_blank" rel="noopener noreferrer">
              Decidim
            </a>.
          </p>
          <p>
            De la mano de <strong>Elvia Benedith</strong> de{" "}
            <a href="https://pokecode.net" target="_blank" rel="noopener noreferrer">
              Pokecode
            </a>{" "}
            —empresa colaboradora oficial de Decidim especializada en
            soluciones de participación ciudadana y democracia digital— y junto
            a personas con perfiles muy diversos, dedicamos una mañana a
            descubrir cómo hackear Decidim desde dentro: levantar un entorno
            local, explorar su arquitectura y realizar pequeñas
            personalizaciones en un entorno seguro.
          </p>
          <p>
            El evento estaba abierto a cualquier persona interesada,
            independientemente de su experiencia o trayectoria profesional. No
            fue un taller de diapositivas. Fue un taller de terminal abierta,
            preguntas reales y aprendizaje compartido.
          </p>
        </>
      }
    >
      <SeccionPost titulo="¿Qué es Decidim y por qué importa?">
        <p>
          Decidim es una plataforma de{" "}
          <strong>participación ciudadana digital</strong> nacida en Barcelona,
          construida como software libre y utilizada hoy por ayuntamientos,
          universidades y organizaciones de todo el mundo. La ciudad de
          Barcelona, Helsinki, la Comisión Europea y decenas de instituciones
          más la usan para articular procesos participativos reales:
          presupuestos participativos, consultas ciudadanas, planes
          estratégicos.
        </p>
        <p>
          Lo que la hace especialmente interesante desde el punto de vista
          técnico es que{" "}
          <strong>
            toda esa infraestructura de democracia digital está construida en
            Ruby on Rails
          </strong>, con una arquitectura modular que permite a cualquier
          organización personalizar, extender y contribuir al proyecto.
        </p>
        <p>
          Para muchas de las asistentes, Decidim era una caja negra: algo que
          habían visto en las webs municipales pero nunca desde dentro. Ese fue
          exactamente el punto de partida del taller.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Lo que pasó cuando levantamos Decidim en local">
        <p>
          La primera parte del taller fue práctica desde el minuto uno: levantar
          un entorno de desarrollo local con{" "}
          <strong>Docker, Git y VS Code</strong>. Porque entender una plataforma
          de verdad empieza por tenerla corriendo en tu máquina.
        </p>
        <p>
          Elvia y el equipo de{" "}
          <a href="https://pokecode.net/" target="_blank" rel="noopener noreferrer">
            Pokecode
          </a>{" "}
          estuvieron atentas a cualquier duda o incidencia que pudiera surgir,
          resolviendo cada situación con una calma y una claridad que se nota
          solo en quien entiende la tecnología desde dentro. Explicaron el
          porqué de cada paso, no solo el cómo.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Entendiendo la arquitectura: Rails, módulos y componentes">
        <p>
          Una vez el entorno estaba en marcha, llegó la parte más reveladora:
          ver cómo está organizado Decidim por dentro.
        </p>
        <p>
          La arquitectura de Decidim se basa en{" "}
          <strong>motores de Ruby on Rails</strong>. Cada funcionalidad
          —procesos participativos, consultas, presupuestos, iniciativas
          ciudadanas— vive en su propio módulo, relativamente independiente del
          núcleo. Esto tiene una implicación directa: puedes activar o
          desactivar funcionalidades, personalizarlas o crear las tuyas propias
          sin tocar el código central del proyecto.
        </p>
        <p>
          Vimos cómo modificar vistas, cómo entender el flujo de datos entre
          componentes y cómo experimentar con la plataforma sin poner en riesgo
          ninguna instalación real. El entorno local era exactamente para eso:
          para romper cosas sin miedo y entender qué pasa cuando lo haces.
        </p>
        <p>
          Para quienes no habían trabajado antes con Rails, fue una
          introducción muy tangible: no como framework abstracto, sino como la
          estructura concreta que sostiene una plataforma que millones de
          personas usan para ejercer su participación democrática.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El momento que lo cambió todo">
        <p>Hubo un momento en el taller que se notó en la sala.</p>
        <p>
          Fue cuando varias personas se dieron cuenta de que detrás de una
          plataforma utilizada por instituciones de todo el mundo —por
          ayuntamientos, por la Comisión Europea, por universidades— existe una
          arquitectura <strong>accesible para cualquier desarrolladora</strong>{" "}
          que quiera aprender, experimentar o contribuir.
        </p>
        <p>
          No hacía falta ser experta en Ruby on Rails ni tener años de
          experiencia en open source. Hacía falta curiosidad, un entorno
          funcionando y alguien que te explicara por dónde empezar. Y eso es
          exactamente lo que Elvia trajo ese día.
        </p>
        <p>
          Ese es el tipo de momento que nos recuerda por qué organizamos este
          tipo de talleres: porque hay tecnología con impacto real en la
          sociedad que merece ser conocida, explorada y mejorada por más
          personas, y en particular por más mujeres.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Aprender en comunidad: lo que no se puede replicar online">
        <p>
          Más allá del código, el taller volvió a demostrar algo que vemos
          constantemente en FemCoders Club: aprender en comunidad acelera el
          aprendizaje.
        </p>
        <p>
          Durante la sesión surgieron preguntas técnicas que abrieron hilos de
          conversación sobre tecnología cívica, sobre las diferencias entre
          contribuir a proyectos institucionales y a proyectos puramente
          comunitarios, sobre el ecosistema Ruby en España, sobre cómo empezar
          a contribuir a open source cuando sientes que aún no estás lista.
        </p>
        <p>
          Esa última conversación fue especialmente interesante. Porque la
          respuesta corta es: nunca se está del todo lista, y ese es
          precisamente el momento de empezar. Y tener a alguien como Elvia en
          la sala, contando su propia experiencia, hace que esa respuesta pese
          diferente.
        </p>
        <p>
          Hubo un momento en que alguien miró el reloj y ya habían pasado dos
          horas sin que nadie se hubiera dado cuenta. Esa es la mejor medida de
          que algo funcionó.
        </p>
        <p>
          El Canòdrom, como espacio, acompañó perfectamente: mesas largas donde
          cabía la colaboración, luz natural, y ese ambiente que tiene cuando la
          gente lleva los portátiles en serio y no de adorno.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Quieres seguir explorando? Clona el repositorio">
        <p>
          Elvia mantiene{" "}
          <a
            href="https://github.com/openpoke/decidim-hacks"
            target="_blank"
            rel="noopener noreferrer"
          >
            decidim-hacks
          </a>, un repositorio con ejemplos prácticos, personalizaciones y
          ejercicios estructurados para practicar a tu propio ritmo. Es el mismo
          entorno que usamos en el taller y el punto de partida más accesible
          para adentrarse en el ecosistema Decidim.
        </p>
        <p>Para reproducir el entorno exacto que usamos durante la sesión:</p>
        <CodigoPost lenguaje="Bash">{`git clone https://github.com/openpoke/decidim-hacks.git
cd decidim-hacks
git pull
docker compose up`}</CodigoPost>
        <p>
          Una vez iniciado, accede a <code>localhost:3000</code> y{" "}
          <code>localhost:8080</code>. Dentro del repositorio encontrarás los
          ejercicios para seguir explorando a tu ritmo.
        </p>
        <p>
          Si quieres leer la experiencia en primera persona, Elvia la cuenta en
          su propio blog:{" "}
          <a
            href="https://pokecode.net/es/blog/es/hacking-decidim-la-master-class-que-mai-vaig-imaginar-impartir"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacking Decidim: la master class que mai vaig imaginar impartir
          </a>.
        </p>
        <p>
          Si te quedaste con ganas de más o quieres que organicemos esta sesión
          de nuevo, no dudes en escribirnos:
        </p>
        <p>
          <a
            href="https://github.com/openpoke/decidim-hacks"
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            openpoke/decidim-hacks
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Gracias, Elvia">
        <p>
          Queremos agradecer especialmente a{" "}
          <a
            href="https://www.linkedin.com/in/elvia-benedith/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Elvia Benedith</strong>
          </a>{" "}
          y al equipo de{" "}
          <a href="https://pokecode.net" target="_blank" rel="noopener noreferrer">
            Pokecode
          </a>{" "}
          por compartir su experiencia, preparar el entorno de trabajo y
          acercarnos al ecosistema Decidim desde una perspectiva práctica y
          cercana.
        </p>
        <p>
          También gracias al{" "}
          <a
            href="https://canodrom.barcelona"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canòdrom
          </a>{" "}
          por acoger este encuentro y a todas las personas que participaron con
          curiosidad, preguntas y ganas de aprender.
        </p>
        <p>
          Este tipo de taller solo funciona cuando hay alguien que comparte lo
          que sabe sin guardarse nada. Elvia lo hizo, y se notó.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El conocimiento crece cuando se comparte">
        <p>
          En FemCoders Club creemos que el código con impacto real en la
          sociedad merece ser conocido, explorado y mejorado por más personas.
        </p>
        <p>
          Este taller nos permitió acercarnos a una tecnología que sostiene
          procesos democráticos en todo el mundo y descubrir que contribuir al
          software libre está más cerca de lo que parece.
        </p>
        <p>
          Esperamos seguir creando espacios donde la tecnología, la
          colaboración y el aprendizaje abierto se encuentren.
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

export default TallerDecidimElvia;
