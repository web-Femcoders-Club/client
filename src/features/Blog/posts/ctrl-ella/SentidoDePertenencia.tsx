import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

/*
 * Ctrl+Ella, edición «No basta con estar en tecnología: también necesitamos
 * sentir que pertenecemos» (octubre de 2026). El texto es el de Ana Lucía,
 * entero y sin retocar; lo nuestro es el título para buscadores, la
 * descripción y las metas.
 *
 * Las metas que lee scripts/postsIndex.ts (og:*, keywords, article:*) van con
 * el texto escrito tal cual: el índice las saca del código fuente por regex y
 * no ve el valor de una constante.
 */

const RUTA = "/ctrl-ella/sentido-de-pertenencia-mujeres-en-tecnologia";
const TITULO_SEO = "Sentido de pertenencia de las mujeres en tecnología";
const DESCRIPCION =
  "Estar en tecnología no es lo mismo que sentirse parte. Por qué importa el sentido de pertenencia para las mujeres del sector y qué aporta una comunidad.";
const IMAGEN = "/assets/ctrl-ella/sentido-de-pertenencia-mujeres-en-tecnologia.jpg";
const PUBLICADO = "2026-11-01T10:00:00Z";

const AUTORA = {
  "@type": "Person",
  name: "Ana Lucía Silva Córdoba",
  url: "https://www.linkedin.com/in/ana-lucia-silva-cordoba/",
};

const Externo: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const SentidoDePertenencia: React.FC = () => (
  <>
    <Helmet>
      <title>{TITULO_SEO} | FemCoders Club</title>
      <meta name="description" content={DESCRIPCION} />
      <meta
        name="keywords"
        content="sentido de pertenencia, mujeres en tecnología, comunidad de mujeres en tecnología, espacio seguro, diversidad en tecnología, Ctrl+Ella, FemCoders Club"
      />
      <link rel="canonical" href={`https://www.femcodersclub.com${RUTA}`} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content="Sentido de pertenencia de las mujeres en tecnología" />
      <meta
        property="og:description"
        content="Estar en tecnología no es lo mismo que sentirse parte. Por qué importa el sentido de pertenencia para las mujeres del sector y qué aporta una comunidad."
      />
      <meta
        property="og:url"
        content="https://www.femcodersclub.com/ctrl-ella/sentido-de-pertenencia-mujeres-en-tecnologia"
      />
      <meta
        property="og:image"
        content="https://www.femcodersclub.com/assets/ctrl-ella/sentido-de-pertenencia-mujeres-en-tecnologia.jpg"
      />
      <meta
        property="og:image:alt"
        content="Portada de la edición número 11 de Ctrl+Ella, octubre de 2026: «No basta con estar en tecnología: también necesitamos sentir que pertenecemos», en letras violetas sobre fondo naranja"
      />
      <meta property="og:site_name" content="FemCoders Club" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITULO_SEO} />
      <meta name="twitter:description" content={DESCRIPCION} />
      <meta
        name="twitter:image"
        content="https://www.femcodersclub.com/assets/ctrl-ella/sentido-de-pertenencia-mujeres-en-tecnologia.jpg"
      />

      <meta property="article:published_time" content="2026-11-01T10:00:00Z" />
      <meta property="article:author" content="Ana Lucía Silva Córdoba" />
      <meta property="article:section" content="Ctrl+Ella" />
      <meta property="article:tag" content="Mujeres en Tech" />
      <meta property="article:tag" content="Comunidad" />
      <meta property="article:tag" content="Pertenencia" />

      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify(
          articleSchema({
            type: "Article",
            path: RUTA,
            headline: "No basta con estar en tecnología: también necesitamos sentir que pertenecemos",
            description: DESCRIPCION,
            image: IMAGEN,
            datePublished: PUBLICADO,
            author: AUTORA,
            keywords: [
              "sentido de pertenencia",
              "mujeres en tecnología",
              "comunidad de mujeres en tecnología",
              "espacio seguro",
              "diversidad en tecnología",
            ],
          })
        )}
      </script>
    </Helmet>

    <PlantillaPost
      ruta={RUTA}
      titulo="No basta con estar en tecnología: también necesitamos sentir que pertenecemos"
      autora={{ nombre: "Ana Lucía Silva Córdoba", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={56}
      entradilla={
        <p>
          <em>
            Hay una diferencia entre conseguir un sitio en el sector tecnológico y sentir que ese
            sitio también es tuyo. Y quizá ahí es donde empieza el verdadero valor de una comunidad.
          </em>
        </p>
      }
    >
      <p>
        Cuando hablamos de mujeres en tecnología, solemos hablar de formación, de oportunidades
        laborales, de referentes, de salarios o de cómo seguir creciendo profesionalmente. Son temas
        importantes, por supuesto. Pero hay una pregunta que no siempre nos hacemos:
      </p>
      <p>
        <strong>¿cómo nos sentimos mientras intentamos encontrar nuestro lugar en este sector?</strong>
      </p>
      <p>
        Porque una cosa es aprender a programar, conseguir un empleo o participar en un proyecto
        tecnológico. Y otra, muy distinta, es sentir que puedes hacer preguntas sin miedo, compartir
        tus dudas sin tener que demostrar constantemente lo que sabes y ser tú misma sin sentir que
        tienes que justificar tu presencia.
      </p>
      <p>
        ¿Te has encontrado alguna vez en una reunión en la que eras la única mujer? ¿Has dudado antes
        de hacer una pregunta por miedo a que pareciera demasiado básica? ¿Has sentido que
        necesitabas saber un poco más, prepararte un poco mejor o demostrar algo más antes de
        atreverte a participar?
      </p>
      <p>Si te ha pasado, no estás sola.</p>
      <p>
        Y no, la solución no siempre consiste en estudiar más, trabajar más duro o ganar más
        confianza individualmente. A veces, también necesitamos cambiar el entorno en el que
        aprendemos, trabajamos y nos relacionamos.
      </p>

      <SeccionPost titulo="Estar presente no es lo mismo que sentirse parte">
        <p>
          La tecnología es un sector lleno de posibilidades, pero también puede ser un espacio
          exigente. Evoluciona constantemente, aparecen herramientas nuevas cada semana y parece que
          siempre hay algo más que deberíamos conocer.
        </p>
        <p>
          En ese contexto, es fácil caer en la comparación. Miramos a quienes llevan más tiempo, a
          quienes parecen dominar cualquier conversación técnica o a quienes comparten sus logros
          profesionales, y podemos terminar pensando que todavía nos falta mucho para estar a la
          altura.
        </p>
        <p>
          Pero no todas partimos del mismo lugar. No tenemos las mismas oportunidades, las mismas
          experiencias ni las mismas circunstancias. Y tampoco necesitamos recorrer el mismo camino.
        </p>
        <p>
          Sentir que pertenecemos no significa saberlo todo, encajar en un perfil determinado o tener
          una trayectoria impecable. Significa poder participar, aprender, aportar y equivocarnos sin
          que nuestra presencia esté constantemente en cuestión.
        </p>
        <p>
          <strong>
            No necesitamos ser las personas que más saben de una sala para tener derecho a estar en
            ella.
          </strong>{" "}
          Y tampoco necesitamos esperar a sentirnos completamente preparadas para empezar a formar
          parte de una comunidad.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Lo que cambia cuando encuentras a otras personas que te entienden">
        <p>
          Hay algo especialmente valioso en compartir espacio con personas que conocen, de primera
          mano, algunas de las situaciones que estás viviendo. Y en{" "}
          <Externo href="https://www.linkedin.com/company/fem-coders-club/">
            Asociación FemCoders Club
          </Externo>{" "}
          ¡hacemos énfasis en ello!
        </p>
        <p>
          A veces es una conversación después de una charla. Otras, alguien que te explica cómo
          resolvió un problema con el que llevabas días peleándote o puede ser una persona que te
          cuenta que también tuvo dudas al empezar, que cambió de especialidad después de varios años
          o que todavía está aprendiendo algo que tú dabas por hecho que todo el mundo dominaba.
        </p>
        <p>
          <strong>
            Esos encuentros no solucionan todos los obstáculos, pero pueden cambiar la forma en que
            los interpretamos.
          </strong>
        </p>
        <p>
          Una dificultad deja de parecer una prueba de que no servimos para esto y se convierte en
          algo que podemos analizar, compartir y afrontar con ayuda. Una pregunta que nos daba
          vergüenza hacer puede abrir una conversación de la que aprendan varias personas.
        </p>
        <p>
          Y ahí aparece una de las cosas que más valoramos de construir comunidad:{" "}
          <strong>no tenemos que descubrirlo todo por nuestra cuenta</strong>.
        </p>
        <p>
          Podemos aprender de la experiencia de otras mujeres, compartir lo que nos ha funcionado y
          reconocer que cada una tiene algo que aportar, independientemente de los años que lleve en
          el sector o del puesto que ocupe.
        </p>
        <p>
          Porque una comunidad no se construye reuniendo únicamente a personas que ya lo tienen todo
          resuelto. Se construye cuando hay espacio para aprender, preguntar, compartir y crecer
          juntas.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Un espacio seguro no significa un espacio sin retos">
        <p>Hablar de pertenencia también implica hablar de cómo queremos relacionarnos.</p>
        <p>
          Para nosotras, crear un espacio seguro no significa que todas tengamos que pensar igual,
          que no podamos discrepar o que las conversaciones deban ser siempre cómodas. Significa que
          podamos participar desde el respeto, que nuestras aportaciones se escuchen y que podamos
          expresar dudas o desacuerdos sin miedo a ser ridiculizadas.
        </p>
        <p>
          Significa entender que detrás de cada perfil profesional hay una persona con su propio
          recorrido, sus circunstancias y sus tiempos.
        </p>
        <p>
          También significa reconocer que la diversidad no consiste únicamente en reunir personas
          diferentes. Se trata de crear condiciones para que esas diferencias tengan espacio, sean
          escuchadas y puedan enriquecer lo que hacemos juntas.
        </p>
        <p>
          Y esto no sucede automáticamente por organizar un evento, abrir un canal de comunicación o
          reunir a un grupo de personas con intereses similares. Requiere atención, escucha y una
          voluntad real de cuidar las relaciones que construimos y por ello con{" "}
          <Externo href="https://www.linkedin.com/in/irina-ichim-desarrolladora/">Irina Ichim</Externo>,{" "}
          <Externo href="https://www.linkedin.com/in/silvina-lucero/">Silvina Lucero Calderón</Externo>,{" "}
          <Externo href="https://www.linkedin.com/in/elvia-benedith/">Elvia Benedith</Externo>,{" "}
          <Externo href="https://www.linkedin.com/in/ana-lucia-silva-cordoba/">
            Ana Lucía Silva Córdoba
          </Externo>{" "}
          e <Externo href="https://www.linkedin.com/in/isadoramatias/">Isadora Matias</Externo>{" "}
          estamos construyendo una comunidad que no es solo el espacio que compartimos, sino también
          la manera en que hacemos sentir a quienes llegan por primera vez.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Por eso existe Asociación FemCoders Club">
        <p>
          En FemCoders Club creemos que impulsar la presencia de las mujeres en tecnología va más allá
          de facilitar recursos para aprender o compartir oportunidades profesionales. También
          queremos contribuir a crear espacios en los que podamos visibilizar el talento femenino,
          encontrarnos, intercambiar conocimientos, descubrir otras experiencias y establecer
          relaciones que tengan sentido más allá de una actividad concreta.
        </p>
        <p>
          Un lugar donde una mujer que está empezando pueda hacer preguntas; donde alguien con más
          experiencia pueda compartir lo que ha aprendido; donde una persona que está cambiando de
          rumbo encuentre otras perspectivas, y donde cada una pueda participar desde lo que sabe y
          desde lo que le apetece aportar.
        </p>
        <p>
          No esperamos que todas tengamos las mismas motivaciones ni que participemos de la misma
          manera. Hay quien disfruta organizando actividades, quien prefiere compartir recursos, quien
          se anima a hablar en público y quien empieza escuchando. Todo eso puede tener valor.
        </p>
        <p>Porque pertenecer no debería convertirse en otra exigencia que cumplir.</p>
        <p>
          Queremos que la comunidad sea una oportunidad para conectar, no una obligación de estar
          siempre presente. Un lugar al que puedas acercarte, encontrar algo que te aporte y, cuando
          te apetezca, contribuir a que también aporte a otras personas.
        </p>
        <p>
          Y, sobre todo, queremos recordar algo importante: no hace falta esperar a tener una
          trayectoria extraordinaria para formar parte de algo. Tu curiosidad, tus preguntas, tus
          conocimientos y tu experiencia son importantes.
        </p>
      </SeccionPost>

      <SeccionPost titulo="La comunidad empieza mucho antes de conocernos">
        <p>
          A veces pensamos que construir comunidad requiere grandes iniciativas, eventos
          multitudinarios o proyectos ambiciosos pero no... Con responder a alguien que acaba de
          llegar. Con compartir un recurso que te ha resultado útil. Con reconocer el trabajo de otra
          compañera. Con presentar a dos personas que podrían ayudarse mutuamente. Con hacer una
          pregunta que permita a alguien participar en una conversación.
        </p>
        <p>Y también con atrevernos a pedir ayuda.</p>
        <p>
          No siempre tenemos que ser quienes saben, quienes organizan o quienes ofrecen soluciones. A
          veces, participar consiste simplemente en decir: «No conozco esto, ¿me lo puedes
          explicar?». Esos pequeños intercambios son los que permiten que un espacio deje de ser un
          grupo de personas reunidas por un interés común y empiece a convertirse en una comunidad.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Qué te ha hecho sentir que perteneces?">
        <p>
          Nos gustaría terminar con una pregunta, porque esta conversación no tendría mucho sentido
          si solo habláramos nosotras.
        </p>
        <p>
          Quizá hubo una persona que confió en ti cuando todavía dudabas de tus capacidades o tal vez
          una conversación te ayudó a descubrir una posibilidad que no habías considerado o
          simplemente encontraste un lugar donde no tenías que demostrar constantemente que merecías
          estar.
        </p>
        <p>
          <strong>¿Qué ha hecho que te sientas parte de una comunidad tecnológica?</strong>
        </p>
        <p>
          <strong>¿Qué te gustaría encontrar en un espacio como FemCoders Club?</strong>
        </p>
        <p>
          Nos encantará conocer tu experiencia, porque las comunidades no se construyen únicamente a
          partir de una misión o de una idea. Se construyen escuchando a las personas que las forman
          y a quienes todavía están buscando su lugar. Coméntanos lo que desees porque de esta manera
          nuestra comunidad crece.
        </p>
        <p>
          <strong>Aprende. Comparte. Conecta. Construye.</strong>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Bibliografía">
        <ul>
          <li>
            Widdicks, K., Ashcroft, A., Winter, E., & Blair, L. (2021). “Women’s Sense of Belonging
            in Computer Science Education: The Need for a Collective Response.” Proceedings of the
            2021 Conference on United Kingdom & Ireland Computing Education Research (UKICER ’21),
            artículo 4, pp. 1–7.{" "}
            <Externo href="https://doi.org/10.1145/3481282.3481288">
              https://doi.org/10.1145/3481282.3481288
            </Externo>
          </li>
          <li>
            Gold, J. A., Jia, L., Bentzley, J. P., Bonnet, K. A., Franciscus, A. M., Denduluri, M.
            S., & Zappert, L. T. (2021). “WISE: A Support Group for Graduate and Post-Graduate Women
            in STEM.” International Journal of Group Psychotherapy, 71(1), 81–115.{" "}
            <Externo href="https://doi.org/10.1080/00207284.2020.1722674">
              https://doi.org/10.1080/00207284.2020.1722674
            </Externo>
          </li>
          <li>
            UNESCO. (2017). Cracking the Code: Girls’ and Women’s Education in Science, Technology,
            Engineering and Mathematics (STEM). París: UNESCO.{" "}
            <Externo href="https://unesdoc.unesco.org/ark:/48223/pf0000253479">
              https://unesdoc.unesco.org/ark:/48223/pf0000253479
            </Externo>
          </li>
          <li>
            FemCoders Club. Quiénes somos: misión, visión y compromiso.{" "}
            <a href="https://www.femcodersclub.com/femcoders-quienes-somos">
              https://www.femcodersclub.com/femcoders-quienes-somos
            </a>
          </li>
          <li>
            FemCoders Club. Nuestro equipo y nuestros valores.{" "}
            <a href="https://www.femcodersclub.com/equipo">https://www.femcodersclub.com/equipo</a>
          </li>
          <li>
            FemCoders Club. Página principal de la comunidad.{" "}
            <a href="https://www.femcodersclub.com/">https://www.femcodersclub.com/</a>
          </li>
        </ul>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default SentidoDePertenencia;
