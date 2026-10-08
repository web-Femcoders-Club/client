import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BookOpen, Globe, MessageCircleQuestion, Route, Sparkles, Wrench } from "lucide-react";
import PlantillaPost from "../../components/post/PlantillaPost";
import { NotaPost, SeccionPost, TarjetasPost } from "../../components/post/PiezasPost";

const EntrevistaNadiaTesting: React.FC = () => (
  <>
      <Helmet>
        <title>
          Entrevista con Nadia Cavalleri: De psicóloga a líder en testing y QA | FemCoders Club
        </title>
        <meta
          name="description"
          content="Revive nuestra entrevista exclusiva con Nadia Soledad Cavalleri, experta en testing y QA. Descubre su transición profesional, consejos para el mundo tech y su visión sobre las mujeres en tecnología."
        />
        <meta
          name="keywords"
          content="Nadia Cavalleri, testing, QA, quality assurance, entrevista tech, mujeres en tecnología, FemCoders Club, psicología en tech, testing manual, automatización, shift-left testing, career change, testing exploratorio"
        />

        {/* Metadatos canónicos */}
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/EntrevistaNadiaTesting"
        />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Entrevista con Nadia Cavalleri: De psicóloga a líder en testing y QA"
        />
        <meta
          property="og:description"
          content="Una conversación inspiradora con una de las voces más influyentes en testing de Latinoamérica. Descubre su historia, consejos y visión del futuro del QA."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/EntrevistaNadiaTesting"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/nadiaCavalleri.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Entrevista con Nadia Cavalleri: De psicóloga a líder en testing y QA"
        />
        <meta
          name="twitter:description"
          content="Una historia inspiradora de transición profesional y liderazgo en el mundo del testing y la calidad de software."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/public-optimized/desktop/assets/Eventos2025/nadiaCavalleri.webp"
        />

        {/* Metadatos de artículo */}
        <meta
          property="article:published_time"
          content="2025-06-20T19:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Entrevistas Tech" />
        <meta property="article:tag" content="Testing" />
        <meta property="article:tag" content="QA" />
        <meta property="article:tag" content="Entrevistas" />
        <meta property="article:tag" content="Mujeres en Tech" />
        <meta property="article:tag" content="Career Change" />

        {/* Metadatos adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/EntrevistaNadiaTesting"
      titulo="Nadia Cavalleri: «Soy perfeccionista, pero entendí que el testing es mucho más que encontrar errores»"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={20}
      entradilla={
        <>
          <p>
            Anoche tuvimos el honor de conversar con{" "}
            <strong>Nadia Soledad Cavalleri</strong>, una de las voces más
            influyentes en el mundo del testing y QA en Latinoamérica y España.
            Su historia es inspiradora: de psicóloga a ingeniera, de novata en
            tech a líder internacional, creando contenido y abriendo caminos
            para miles de profesionales.
          </p>
          <p>
            Con más de <strong>20 años de experiencia</strong> en testing, Nadia
            no solo es ingeniera en sistemas, sino también psicóloga, una
            combinación única que la ha convertido en una profesional
            excepcional. Es <strong>cofundadora de BoundLess</strong>,{" "}
            <strong>fundadora de Argentesting</strong>, creadora de contenido
            educativo y oradora internacional reconocida.
          </p>
        </>
      }
    >
      <iframe
        src="https://www.youtube.com/embed/vG9hli0cFZc"
        title="Entrevista completa con Nadia Cavalleri - FemCoders Club"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <SeccionPost titulo="Su increíble recorrido profesional">
        <h3>La combinación perfecta: psicología + ingeniería</h3>
        <p>
          La verdadera magia de la formación dual de Nadia se reveló años más
          tarde. Como ella nos contó:{" "}
          <strong>
            «En los últimos años empecé a hacer sesiones de desarrollo
            profesional y simulacros de entrevista con seguidores y esos
            espacios fueron la combinación perfecta y natural, aquí yo puedo
            ayudar a las personas en su proceso de descubrimiento personal y
            profesional aportando mi experiencia de psicología al mismo tiempo
            que mis conocimientos de ingeniería»
          </strong>
          .
        </p>

        <h3>Una carrera internacional</h3>
        <p>
          Nadia ha trabajado en múltiples países, acumulando experiencias que la
          han convertido en una profesional global. Su perspectiva
          internacional le permite entender diferentes enfoques culturales
          hacia la calidad de software y adaptarse a diversos equipos y
          metodologías.
        </p>

        <h3>Sobre la edad en el mundo tech</h3>
        <p>
          Cuando le preguntamos sobre el perfil de una mamá de 40 años y cómo ve
          que se integre en el mundo de la tecnología en comparación con años
          atrás, Nadia fue muy clara:{" "}
          <strong>
            «Depende de cuántos años atrás estamos mirando, en sistemas no
            miramos mucho qué edad tiene la persona que estamos evaluando, en
            testing en particular y sistemas en general la edad no se mira»
          </strong>
          .
        </p>
      </SeccionPost>

      <SeccionPost titulo="La evolución de Nadia: de perfeccionista a mentora">
        <h3>Su descubrimiento del testing</h3>
        <p>
          <strong>«Soy perfeccionista»</strong>, nos contó Nadia con una
          sonrisa. <strong>«En principio me atrapó esta parte de encontrar los
          errores, después entendí que es mucho más que esto»</strong>. Su
          historia es la de alguien que encontró en el testing la combinación
          perfecta: algo que le gusta naturalmente, que se le da bien, por lo
          que recibe felicitaciones y que se convirtió en su trabajo.
        </p>

        <h3>Expandiendo su impacto: mentoría y desarrollo profesional</h3>
        <p>
          En los últimos años, Nadia comenzó a hacer{" "}
          <strong>
            sesiones de desarrollo profesional y simulacros de entrevista con
            sus seguidores
          </strong>
          . Como ella misma dice:{" "}
          <em>
            «Esos espacios fueron la combinación perfecta y natural, aquí yo
            puedo ayudar a las personas en su proceso de descubrimiento personal
            y profesional, aportando mi experiencia de psicología al mismo
            tiempo que mis conocimientos de ingeniería»
          </em>
          .
        </p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Sus herramientas favoritas",
              icono: <Wrench aria-hidden="true" />,
              texto: (
                <ul>
                  <li>
                    <strong>Framework de trabajo:</strong> Scrum para gestión
                    ágil.
                  </li>
                  <li>
                    <strong>Gestión de pruebas:</strong> Xray como herramienta
                    principal de testing.
                  </li>
                  <li>
                    <strong>Organización:</strong> Notion para documentación y
                    seguimiento.
                  </li>
                  <li>
                    <strong>Metodología:</strong> 5S para optimización de
                    procesos.
                  </li>
                  <li>
                    <strong>Ejecución:</strong> herramientas para capturar
                    pantallas y hacer vídeos.
                  </li>
                </ul>
              ),
            },
            {
              titulo: "La fórmula del éxito según Nadia",
              icono: <Sparkles aria-hidden="true" />,
              texto: (
                <ul>
                  <li>
                    <strong>Descubrir qué te gusta:</strong> encontrar lo que te
                    apasiona naturalmente.
                  </li>
                  <li>
                    <strong>Desarrollar tus fortalezas:</strong> potenciar
                    aquello que se te da bien.
                  </li>
                  <li>
                    <strong>Buscar reconocimiento:</strong> validar que aportas
                    valor real.
                  </li>
                  <li>
                    <strong>Convertirlo en profesión:</strong> transformar la
                    pasión en carrera.
                  </li>
                  <li>
                    <strong>Ayudar a otros:</strong> compartir conocimiento y
                    experiencia.
                  </li>
                </ul>
              ),
            },
          ]}
        />

        <NotaPost titulo="En palabras de Nadia">
          <p>
            «La combinación de psicología e ingeniería me permite ayudar a las
            personas en su proceso de descubrimiento personal y profesional».
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Recursos y contenido de Nadia">
        <p>
          Durante la entrevista, descubrimos que Nadia es una máquina de crear
          contenido educativo. Si quieres seguir aprendiendo de ella, aquí
          tienes todos sus canales:
        </p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Síguela en sus plataformas",
              icono: <Globe aria-hidden="true" />,
              texto: (
                <ul>
                  <li>
                    <strong>
                      <a
                        href="https://www.linkedin.com/in/ncavalleri/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      :
                    </strong>{" "}
                    updates profesionales e insights de la industria.
                  </li>
                  <li>
                    <strong>
                      <a
                        href="https://nadiacavalleri.com.ar/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Web personal
                      </a>
                      :
                    </strong>{" "}
                    recursos gratuitos y contenido premium.
                  </li>
                  <li>
                    <strong>
                      <a
                        href="https://www.youtube.com/@NadiaCavalleri"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                      :
                    </strong>{" "}
                    tutoriales y charlas técnicas.
                  </li>
                  <li>
                    <strong>
                      <a
                        href="https://www.udemy.com/user/nadia-cavalleri-2/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Udemy
                      </a>
                      :
                    </strong>{" "}
                    cursos completos de testing y QA.
                  </li>
                  <li>
                    <strong>
                      <a
                        href="https://www.instagram.com/nadia.cavalleri.test/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                      :
                    </strong>{" "}
                    tips rápidos y behind the scenes.
                  </li>
                </ul>
              ),
            },
            {
              titulo: "Sus cursos más populares",
              icono: <BookOpen aria-hidden="true" />,
              texto: (
                <ul>
                  <li>
                    <strong>Introducción al Testing de Software:</strong>{" "}
                    perfecto para beginners.
                  </li>
                  <li>
                    <strong>Testing Exploratorio:</strong> técnicas avanzadas.
                  </li>
                  <li>
                    <strong>API Testing con Postman:</strong> pruebas de
                    integración.
                  </li>
                  <li>
                    <strong>Testing en Contextos Ágiles:</strong> metodologías
                    modernas.
                  </li>
                  <li>
                    <strong>DevTools para Testers:</strong> herramientas del
                    navegador.
                  </li>
                  <li>
                    <strong>Test Automation Engineering (nuevo):</strong>{" "}
                    preparación para certificación, en{" "}
                    <a href="https://lnkd.in/dB72DXk4" target="_blank" rel="noopener noreferrer">
                      el curso de Udemy
                    </a>{" "}
                    o en{" "}
                    <a href="https://lnkd.in/dUWgezky" target="_blank" rel="noopener noreferrer">
                      su web
                    </a>
                    .
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Highlights de la entrevista">
        <h3>Preguntas desde nuestra comunidad</h3>
        <p>
          Nuestra comunidad de FemCoders Club preparó preguntas increíbles que
          cubrieron todo el espectro de la experiencia de Nadia:
        </p>

        <TarjetasPost
          tarjetas={[
            {
              titulo: "Sobre su recorrido profesional",
              icono: <Route aria-hidden="true" />,
              texto: (
                <ul>
                  <li>Su llegada al mundo del testing</li>
                  <li>Lo que más la atrapó del rol de QA</li>
                  <li>Cómo unificó psicología e ingeniería</li>
                  <li>Su experiencia trabajando en múltiples países</li>
                </ul>
              ),
            },
            {
              titulo: "Aspectos técnicos desde la comunidad",
              icono: <MessageCircleQuestion aria-hidden="true" />,
              texto: (
                <ul>
                  <li>
                    <strong>Shift-left testing:</strong> ¿realmente funciona en
                    la práctica?
                  </li>
                  <li>
                    <strong>Testing manual vs. automatizado:</strong> ¿cuál
                    seguirá siendo más valioso?
                  </li>
                  <li>
                    <strong>Roadmaps para QA:</strong> tanto para desarrollo
                    como automatización.
                  </li>
                  <li>
                    <strong>Futuro con IA:</strong> qué habilidades blandas
                    serán clave.
                  </li>
                  <li>
                    <strong>¿Hay cabida para QA manual sin automatizar?</strong>{" "}
                    Una duda muy común.
                  </li>
                </ul>
              ),
            },
          ]}
        />

        <h3>¿Es necesario automatizar para ser QA?</h3>
        <p>
          Una pregunta clave de nuestra comunidad fue si hay cabida para QA de
          testing manual y analistas funcionales sin necesidad de automatizar.
          La respuesta de Nadia fue muy tranquilizadora:{" "}
          <strong>
            «Aporta mucho saber programar, ni siquiera automatizar pruebas, al
            menos para entender cómo es la lógica detrás de lo que estamos
            construyendo. No es imprescindible, pero sí es bueno saber
            automatizar. Hay más ramas, por ejemplo accesibilidad, por poner un
            ejemplo de uno donde puede ir sin necesidad de automatización»
          </strong>
          .
        </p>

        <h3>Un consejo valioso para principiantes</h3>
        <p>
          Uno de los momentos más reveladores fue cuando Nadia nos contó sobre{" "}
          <strong>
            un error muy común cuando empiezas en testing: «pensar en todo lo
            que puede fallar, y es un error. Primero pensemos cómo debe
            funcionar»
          </strong>
          . Un cambio de mindset que marca la diferencia entre un tester novato
          y uno experimentado.
        </p>

        <NotaPost titulo="Consejo de Nadia para las mujeres que se inician en testing">
          <p>
            «Que se animen, que es un mundo fascinante, hay mucho contenido mío
            en el canal de YouTube, hay oportunidades, al principio cuesta un
            poco más, que no se detengan, que sean perseverantes».
          </p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="Gracias, Nadia">
        <p>
          Esta entrevista nos llenó de inspiración y conocimiento. Nadia no solo
          compartió su expertise técnico, sino que nos recordó por qué la
          diversidad en tech es tan importante y cómo cada una de nosotras puede
          aportar valor único al mundo de la tecnología.
        </p>
        <p>
          Su generosidad al compartir conocimiento, su honestidad sobre los
          desafíos y su visión optimista del futuro del testing nos motivaron a
          seguir creciendo y apoyándonos mutuamente en esta comunidad
          increíble.
        </p>

        <h3>¿Te inspiró la historia de Nadia?</h3>
        <p>
          Comparte en los comentarios qué fue lo que más te resonó de la
          entrevista o cuéntanos si estás considerando dar el salto al mundo del
          testing.
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
          <Link to="/login" className="fc-boton">
            Sé parte de la comunidad
          </Link>
        </p>
        <p>
          <strong>¡Gracias por ser parte de FemCoders Club!</strong>
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default EntrevistaNadiaTesting;
