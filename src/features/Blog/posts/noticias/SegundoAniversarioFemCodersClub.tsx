import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { CalendarDays, Handshake, Landmark, Users } from "lucide-react";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost, TarjetasPost } from "../../components/post/PiezasPost";

const SegundoAniversarioFemCoders: React.FC = () => (
  <>
      <Helmet>
        <title>Segundo Aniversario de FemCoders Club: Nuestra historia, nuestro equipo y el futuro tecnológico | FemCoders Club</title>
        <meta
          name="description"
          content="Celebramos 2 años de FemCoders Club: de un espacio seguro a una Asociación con +1.300 mujeres. Conoce nuestro equipo, logros y visión de futuro con IA y tecnología."
        />
        <meta
          name="keywords"
          content="FemCoders Club, aniversario, asociación mujeres tech, comunidad desarrolladoras, mentorías programación, eventos tech Barcelona, mujeres en tecnología, IA, inteligencia artificial"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/segundo-aniversario"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Segundo Aniversario de FemCoders Club: Nuestra historia, nuestro equipo y el futuro tecnológico"
        />
        <meta
          property="og:description"
          content="De un espacio seguro a una Asociación con +1.300 mujeres en tech. Celebramos 2 años de crecimiento, comunidad y futuro tecnológico."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/segundo-aniversario"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/segundoAniversario-femCodersClub.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Segundo Aniversario de FemCoders Club: Nuestra historia y futuro"
        />
        <meta
          name="twitter:description"
          content="Celebramos 2 años de FemCoders Club: +1.300 mujeres, +35 eventos, +30 empresas. Una Asociación que transforma el futuro tech."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/segundoAniversario-femCodersClub.webp"
        />
        <meta
          property="article:published_time"
          content="2025-10-24T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Comunidad" />
        <meta property="article:tag" content="Aniversario" />
        <meta property="article:tag" content="Comunidad" />
        <meta property="article:tag" content="Mujeres en Tech" />
        <meta property="article:tag" content="Asociación" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/segundo-aniversario"
      titulo="Segundo aniversario de FemCoders Club: nuestra historia, nuestro equipo y el futuro tecnológico que construimos"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={30}
      entradilla={
        <>
          <p>
            El pasado 24 de octubre no fue un día más para nosotras.{" "}
            <strong>FemCoders Club cumplió dos años</strong>.
          </p>
          <p>
            Puede parecer poco tiempo, pero cuando miras atrás y ves todo lo
            que hemos construido, la sensación es de vértigo y emoción a partes
            iguales. Lo que nació de una necesidad personal y compartida —la de
            tener un <strong>espacio seguro</strong> donde{" "}
            <Link to="/femcoders-quienes-somos">mujeres en tecnología</Link>{" "}
            pudiéramos reunirnos, colaborar y crecer sin juicios— se ha
            transformado en una realidad tangible y sólida.
          </p>
          <p>
            No nacimos con un plan de negocios complejo. Nuestro objetivo era
            mucho más humano y necesario: crear un lugar donde derribar
            barreras y estereotipos a través de diálogos abiertos y apoyo
            mutuo. Hoy, ese espacio no solo se ha consolidado, sino que se ha
            convertido en un motor de cambio real para mujeres en tecnología.
          </p>
        </>
      }
    >
      <SeccionPost titulo="El impacto en números: la fuerza de la comunidad">
        <p>
          A veces es difícil dimensionar lo que hemos logrado hasta que lo
          vemos escrito. Estos números no son solo cifras; son pruebas de que la
          colaboración y la diversidad funcionan:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "+1.300 mujeres",
              icono: <Users aria-hidden="true" />,
              texto: "Forman parte activa de nuestra comunidad, apoyándose día a día.",
            },
            {
              titulo: "+35 eventos y talleres",
              icono: <CalendarDays aria-hidden="true" />,
              texto: "Organizados para visibilizar el talento femenino y compartir conocimiento.",
            },
            {
              titulo: "+30 empresas aliadas",
              icono: <Handshake aria-hidden="true" />,
              texto: "Que apuestan por la inclusión y el talento diverso.",
            },
            {
              titulo: "Asociación legalmente constituida",
              icono: <Landmark aria-hidden="true" />,
              texto: "Un hito que nos da fuerza institucional y estructura para el futuro.",
            },
          ]}
        />
        <p>
          Pero detrás de cada cifra hay historias que no aparecen en ninguna
          estadística: una oportunidad laboral compartida en{" "}
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack
          </a>{" "}
          que llegó en el momento justo; una mujer que, gracias a uno de
          nuestros{" "}
          <a
            href="https://github.com/femcodersclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            miniproyectos de GitHub
          </a>
          , recuperó la confianza en su capacidad técnica; alguien que encontró
          a su primera referente escuchando una charla en uno de{" "}
          <Link to="/eventos">nuestros eventos</Link>; o aquella que se acercó
          tímida a un encuentro y terminó saliendo con contactos, claridad y un
          impulso nuevo. También están quienes solicitan mentoría a través de
          la web y reciben una orientación personalizada, o quienes, gracias a
          nuestro networking —en línea y presencial—, descubren recursos, ideas
          y herramientas que no habrían encontrado por su cuenta. Son pequeñas
          historias que, juntas, explican por qué esta comunidad sigue
          creciendo con tanta fuerza.
        </p>
      </SeccionPost>

      <SeccionPost titulo="De una idea a una asociación: el equipo fundador">
        <p>
          Este segundo aniversario trae consigo nuestro hito más importante a
          nivel institucional:{" "}
          <strong>
            FemCoders Club ya es una asociación legalmente constituida.
          </strong>
        </p>
        <p>
          Este paso es vital para garantizar que nuestra misión perdure. Y esta
          misión es sostenida por un equipo de cofundadoras multidisciplinar que
          refleja la diversidad del sector tech:
        </p>
        <ul>
          <li>
            <img src="https://i.imgur.com/A0aHHDx.png" alt="" loading="lazy" />
            <strong>Elvia Benedith</strong>
            <p>Ingeniera Civil & Full-stack Developer</p>
            <p>Enfocada en soluciones técnicas y pensamiento analítico.</p>
          </li>
          <li>
            <img src="https://i.imgur.com/DinP3KD.png" alt="" loading="lazy" />
            <strong>Ana Lucía Silva Córdoba</strong>
            <p>Data Scientist & Fullstack Developer</p>
            <p>
              Máster en Big Data & Data Science, formadora tecnológica.{" "}
              <strong>
                <a
                  href="https://donadigital.cat/ana-lucia-silva-de-la-docencia-rural-a-la-tecnologia-inclusiva-amb-una-xarxa-femenina-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Premi DonaTIC 2024
                </a>.
              </strong>
            </p>
          </li>
          <li>
            <img src="https://i.imgur.com/HYnCfpv.png" alt="" loading="lazy" />
            <strong>Irina Ichim</strong>
            <p>Fullstack Developer & Especialista en IA</p>
            <p>
              Especializada en integración de IA en aplicaciones. Mentora de
              Backend con Java.
            </p>
          </li>
          <li>
            <img src="https://i.imgur.com/pmmaRaT.png" alt="" loading="lazy" />
            <strong>Silvina Lucero Calderón</strong>
            <p>Full Stack Developer & QA Tester</p>
            <p>
              Desarrolladora Full Stack y QA Tester Funcional, comprometida con
              el crecimiento de mujeres en tech.
            </p>
          </li>
          <li>
            <img src="https://i.imgur.com/HW59kiG.png" alt="" loading="lazy" />
            <strong>Liliana Dalmarco</strong>
            <p>Fullstack Developer & Scrum Master</p>
            <p>
              Fullstack Developer, Scrum Master y Project Manager, uniendo
              tecnología con gestión de proyectos.
            </p>
          </li>
          <li>
            <img src="https://i.imgur.com/JW2fsQh.jpeg" alt="" loading="lazy" />
            <strong>Isadora Matias</strong>
            <p>Full Stack Developer & Diseñadora</p>
            <p>
              Desarrolladora Full Stack y diseñadora, gestiona la comunicación
              visual de FemCoders Club.
            </p>
          </li>
        </ul>
        <p>
          Juntas, cubrimos todas las áreas necesarias para gestionar una
          asociación tecnológica: desde el código y los datos hasta la gestión
          de proyectos, el testing y el diseño.{" "}
          <Link to="/equipo">Conoce más sobre nuestro equipo aquí</Link>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El corazón de FemCoders: eventos y comunidad">
        <p>
          Si algo nos define, es la calidad humana que hemos logrado reunir.
          Nuestro punto más fuerte son, sin duda, los{" "}
          <Link to="/eventos">eventos online y presenciales</Link>.
        </p>
        <p>
          Nos hemos esforzado mucho en invitar a{" "}
          <strong>mujeres líderes del sector tecnológico</strong>, referentes
          reales que inspiran y rompen techos de cristal. En nuestros eventos no
          solo hablamos de código; hablamos de realidad. Abordamos desde las
          últimas tendencias técnicas hasta las <strong>soft skills</strong>{" "}
          (habilidades blandas), que son vitales para navegar entrevistas
          técnicas y liderar equipos en el mundo laboral.
        </p>
        <p>
          Además, hemos tejido alianzas sólidas colaborando con{" "}
          <strong>otras comunidades de mujeres en tecnología</strong>. En
          FemCoders Club no creemos en la competencia; creemos en sumar fuerzas
          para que nuestro mensaje llegue más lejos y nuestro impacto sea mayor.
        </p>

        <h3>Lo que pasa dentro de la plataforma</h3>
        <p>
          Pero la comunidad no vive solo de eventos puntuales. En el día a día,{" "}
          <Link to="/">nuestra web</Link> y nuestros canales de comunicación (
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/company/100394366/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/femcoders_club/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          ) son espacios vivos donde compartimos{" "}
          <strong>ofertas de trabajo reales</strong>, oportunidades de
          colaboración, dudas técnicas, ideas y noticias del sector.
        </p>
        <p>
          Es un ecosistema donde intentamos conectar el talento de nuestras
          miembros con empresas que realmente valoran la diversidad.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Recursos reales y prácticos para programadoras">
        <p>
          En FemCoders Club apostamos por el trabajo honesto. No somos una
          escuela formal ni una academia; somos compañeras compartiendo lo que
          sabemos, muchas veces dedicando nuestro tiempo libre por pura pasión.
        </p>
        <ul>
          <li>
            <strong>Mentorías 1:1:</strong> ofrecemos acompañamiento
            personalizado tanto en <strong>frontend</strong> como en{" "}
            <strong>backend</strong>. Son espacios para desbloquear dudas,
            revisar código y orientar carreras, hechos desde la cercanía.
          </li>
          <li>
            <strong>Recursos técnicos y práctica:</strong> sabemos que la mejor
            forma de aprender a programar es practicando. Por eso creamos{" "}
            <strong>quizzes técnicos</strong> con «preguntas trampa» (esas que
            suelen caer en las entrevistas reales) y proponemos{" "}
            <strong>miniproyectos en GitHub</strong> para que practiquéis,
            construyáis un portafolio sólido y perdáis el miedo al código.
          </li>
          <li>
            <strong>La hoja de ruta:</strong> tenemos recursos gratuitos de{" "}
            <Link to="/blog/recursos">HTML y CSS</Link>, y esta misma semana
            hemos arrancado con <strong>JavaScript</strong>. Pero no nos
            quedaremos ahí; nuestro objetivo es seguir ampliando a más lenguajes
            y herramientas, mejorando constantemente la calidad de lo que
            ofrecemos.
          </li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Colaboración con empresas: conectando talento con oportunidades">
        <p>
          Actualmente colaboramos con más de 30 empresas que apuestan por la
          diversidad y el talento femenino en tecnología. Nuestro objetivo es
          seguir ampliando esta red de alianzas para crear puentes reales entre
          talento y oportunidades.
        </p>
        <p>
          Si conoces empresas comprometidas con la inclusión en tech, o si
          trabajas en una y queréis explorar colaboraciones,{" "}
          <Link to="/contacto">nos encantaría conoceros</Link>. Juntas podemos
          conectar talento real con oportunidades reales y construir un
          ecosistema tecnológico más diverso y equitativo.
        </p>
      </SeccionPost>

      <SeccionPost titulo="El futuro: IA, data y una web más inteligente">
        <p>
          Tenemos claro que nuestra plataforma debe crecer al ritmo de la
          innovación. El futuro de nuestra comunidad es tecnológico y ambicioso:
        </p>
        <h3>Estamos trabajando activamente en:</h3>
        <ul>
          <li>
            <strong>
              Integración de{" "}
              <a
                href="https://es.wikipedia.org/wiki/Inteligencia_artificial"
                target="_blank"
                rel="noopener noreferrer"
              >
                inteligencia artificial
              </a>:
            </strong>{" "}
            no solo para usarla en nuestra web, sino para crear recursos
            educativos sobre IA para toda la comunidad.
          </li>
          <li>
            <strong>Data analytics y automatización:</strong> usaremos los datos
            para entender mejor qué necesitáis y desarrollaremos automatizaciones
            internas que nos permitan ser más eficientes y dedicar más tiempo a
            lo importante: vosotras.
          </li>
          <li>
            <strong>Ampliación de recursos:</strong> más allá del stack básico,
            queremos cubrir nuevas demandas del mercado y ofrecer herramientas
            desarrolladas por nosotras, para nosotras.
          </li>
        </ul>
        <p>
          Queremos que la web de FemCoders Club sea un recurso vivo, útil y
          tecnológicamente avanzado.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Gracias">
        <p>
          Para cerrar, necesito dar las gracias, porque estos números (+1.300
          mujeres, +35 eventos, +30 empresas) no se consiguen solas.
        </p>
        <p>
          Gracias a las empresas colaboradoras que han confiado en nosotras para
          apoyar el talento femenino.
        </p>
        <p>
          Gracias a todas las ponentes y speakers, mujeres increíbles que nos han
          regalado su tiempo y su sabiduría en cada charla.
        </p>
        <p>
          Gracias a las mentoras que dedican su tiempo libre a acompañar a otras
          mujeres en su crecimiento profesional.
        </p>
        <p>
          Gracias a las personas voluntarias que trabajan desde la sombra para
          que cada evento salga perfecto.
        </p>
        <p>
          Y gracias a ti, que lees esto, que te unes a los directos, que
          participas en los eventos, que lees nuestros recursos, que haces los
          ejercicios en GitHub, que te has registrado en la web o que recomiendas
          la comunidad.{" "}
          <strong>
            Gracias también a los aliados que apoyan nuestra misión desde el
            principio.
          </strong>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Nuestra promesa">
        <p>
          Vamos a seguir abriendo puertas. Vamos a seguir creando espacios donde
          cada mujer pueda aprender, crecer y brillar sin pedir permiso.
        </p>
        <p>
          Seguiremos promoviendo la inclusión y la equidad con acciones
          concretas: con más código, más eventos y más apoyo mutuo.
        </p>
        <p>
          Vamos a seguir construyendo un futuro más inclusivo y equitativo en el
          mundo de la tecnología.
        </p>
        <h3>Gracias por estos dos años increíbles</h3>
        <p>
          <strong>A por muchos más, juntas.</strong>
        </p>
        <p>
          <Link to="/register" className="fc-boton">
            Únete a FemCoders Club
          </Link>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default SegundoAniversarioFemCoders;
