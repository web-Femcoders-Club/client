import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { NotaPost, SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

/*
 * Ctrl+Ella, edición «Y ahora: la entrevista» (septiembre de 2026). El texto
 * es el de Ana Lucía, entero y sin retocar; lo nuestro es el título para
 * buscadores, la descripción, las metas y el enlace a la serie.
 *
 * Las metas que lee scripts/postsIndex.ts (og:*, keywords, article:*) van con
 * el texto escrito tal cual: el índice las saca del código fuente por regex y
 * no ve el valor de una constante.
 */

const RUTA = "/ctrl-ella/entrevista-tech-como-prepararla";
const TITULO_SEO = "Cómo preparar una entrevista tech: guía con método STAR";
const DESCRIPCION =
  "Prepara una entrevista tech sin parecer otra persona: cómo responder «háblame de ti», contar tus proyectos, usar el método STAR y hacer tus preguntas.";
const IMAGEN = "/assets/ctrl-ella/portada-por-defecto.webp";
const PUBLICADO = "2026-11-28T10:00:00Z";

const AUTORA = {
  "@type": "Person",
  name: "Ana Lucía Silva Córdoba",
  url: "https://www.linkedin.com/in/ana-lucia-silva-cordoba/",
};

const EntrevistaTech: React.FC = () => (
  <>
    <Helmet>
      <title>{TITULO_SEO} | FemCoders Club</title>
      <meta name="description" content={DESCRIPCION} />
      <meta
        name="keywords"
        content="entrevista tech, cómo preparar una entrevista de trabajo en tecnología, método STAR, háblame de ti, entrevista técnica, mujeres en tecnología, Ctrl+Ella, FemCoders Club"
      />
      <link rel="canonical" href={`https://www.femcodersclub.com${RUTA}`} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content="Cómo preparar una entrevista tech: guía con método STAR" />
      <meta
        property="og:description"
        content="Prepara una entrevista tech sin parecer otra persona: cómo responder «háblame de ti», contar tus proyectos, usar el método STAR y hacer tus preguntas."
      />
      <meta
        property="og:url"
        content="https://www.femcodersclub.com/ctrl-ella/entrevista-tech-como-prepararla"
      />
      <meta
        property="og:image"
        content="https://www.femcodersclub.com/assets/ctrl-ella/portada-por-defecto.webp"
      />
      <meta
        property="og:image:alt"
        content="Banner de Ctrl+Ella, la newsletter de FemCoders Club: tecnología, aprendizaje, carrera y comunidad"
      />
      <meta property="og:site_name" content="FemCoders Club" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITULO_SEO} />
      <meta name="twitter:description" content={DESCRIPCION} />
      <meta
        name="twitter:image"
        content="https://www.femcodersclub.com/assets/ctrl-ella/portada-por-defecto.webp"
      />

      <meta property="article:published_time" content="2026-11-28T10:00:00Z" />
      <meta property="article:author" content="Ana Lucía Silva Córdoba" />
      <meta property="article:section" content="Ctrl+Ella" />
      <meta property="article:tag" content="Mujeres en Tech" />
      <meta property="article:tag" content="Carrera profesional" />
      <meta property="article:tag" content="Entrevista tech" />

      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify(
          articleSchema({
            type: "Article",
            path: RUTA,
            headline: "Y ahora: la entrevista. Cómo afrontar una entrevista tech sin intentar parecer otra persona",
            description: DESCRIPCION,
            image: IMAGEN,
            datePublished: PUBLICADO,
            author: AUTORA,
            keywords: [
              "entrevista tech",
              "preparar una entrevista de trabajo en tecnología",
              "método STAR",
              "háblame de ti",
              "mujeres en tecnología",
            ],
          })
        )}
      </script>
    </Helmet>

    <PlantillaPost
      ruta={RUTA}
      titulo="Y ahora: la entrevista. Cómo afrontar una entrevista tech sin intentar parecer otra persona"
      autora={{ nombre: "Ana Lucía Silva Córdoba", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={62}
      portadaConIA
      entradilla={
        <p>Después de trabajar tus objetivos, tu experiencia, tu CV y tu presencia en LinkedIn, llega el momento que más nervios suele generar: la entrevista. Y aquí conviene cambiar el enfoque. La pregunta no es "¿cómo consigo que me contraten?", sino "¿cómo explico con claridad lo que sé, lo que puedo aportar y lo que quiero seguir aprendiendo?".</p>
      }
    >
      <SeccionPost titulo="La entrevista no es un examen">
        <p>También tú estás evaluando a la empresa. No tienes que demostrar que eres perfecta: una entrevista sirve para conocer tus conocimientos, tu forma de resolver problemas, tu experiencia, tu capacidad de aprendizaje, tu motivación y si encajas con el equipo y el puesto. No necesitas saberlo todo para ser una buena candidata.</p>
      </SeccionPost>

      <SeccionPost titulo={'"Háblame de ti"'}>
        <p>Es la pregunta que parece sencilla y que más bloquea. Una estructura que funciona bien: quién eres → qué has hecho → qué sabes hacer → qué buscas.</p>
        <p>Evita contar toda tu vida profesional, repetir literalmente el CV o empezar con información que no aporta al puesto. El objetivo es una presentación de 60-90 segundos, clara y adaptada a esa oportunidad concreta.</p>
      </SeccionPost>

      <SeccionPost titulo="Habla de tus proyectos como una profesional">
        <p>Esto es especialmente importante si eres junior o estás en transición. No basta con decir "hice un proyecto con Python". Es mejor explicarlo siguiendo el hilo: problema → decisión → acción → resultado → aprendizaje.</p>
        <p>Por ejemplo: <em>"Quería analizar [algo], así que utilicé Python y Pandas para [acción]. Encontré [resultado], y uno de los aprendizajes principales fue [...]."</em> Un proyecto pequeño puede decir mucho si sabes contarlo bien.</p>
      </SeccionPost>

      <SeccionPost titulo="¿Qué haces cuando no sabes la respuesta?">
        <p>No inventes, y no entres en pánico: razona en voz alta. Sirve algo como <em>"no he trabajado directamente con esta tecnología, pero conozco X y creo que el enfoque sería..."</em>, o <em>"no recuerdo la respuesta exacta, pero intentaría resolverlo así..."</em>.</p>
        <p>Lo que se valora ahí es curiosidad, razonamiento y capacidad de aprendizaje. Decir "todavía no lo sé" también puede ser una respuesta profesional.</p>
      </SeccionPost>

      <SeccionPost titulo="Las preguntas de experiencia: el método STAR">
        <p>Cuando te pregunten por una situación concreta, puedes apoyarte en esta estructura:</p>
        <ul>
          <li><strong>Situación</strong> — ¿qué estaba ocurriendo?</li>
          <li><strong>Tarea</strong> — ¿qué responsabilidad tenías?</li>
          <li><strong>Acción</strong> — ¿qué hiciste tú?</li>
          <li><strong>Resultado</strong> — ¿qué ocurrió después?</li>
        </ul>
        <p>Sirve para hablar de conflictos, errores, trabajo en equipo, liderazgo, presión o problemas difíciles. Y, como ya vimos en la edición sobre el CV, no te quedes solo en lo que hiciste: cuenta qué cambió gracias a ello.</p>
      </SeccionPost>

      <SeccionPost titulo="No todo es tecnología">
        <p>Una entrevista tech también explora comunicación, resolución de problemas, trabajo en equipo, aprendizaje, organización y gestión de conflictos. Tus habilidades profesionales no desaparecen porque cambies de sector: tu experiencia anterior puede darte ejemplos muy buenos para responder a este tipo de preguntas conductuales.</p>
      </SeccionPost>

      <SeccionPost titulo="Las preguntas técnicas">
        <p>No hace falta memorizar un manual entero, sino prepararte con cabeza: revisa la oferta, identifica las tecnologías que menciona, repasa los fundamentos y practica explicándolo en voz alta.</p>
        <p>Lo importante es entender los conceptos, no memorizar respuestas. Si te preguntan algo distinto a lo que preparaste, poder razonar es lo que te salva de quedarte en blanco.</p>
      </SeccionPost>

      <SeccionPost titulo="Tú también puedes hacer preguntas">
        <p>Una entrevista no es un interrogatorio en un solo sentido. Prepara entre 3 y 5 preguntas, por ejemplo: cómo es el día a día del equipo, cómo funciona el onboarding, cómo se mide el éxito en el puesto, qué proyectos tendrías los primeros meses o qué oportunidades de aprendizaje existen.</p>
        <p>No solo estás intentando conseguir el puesto. También estás descubriendo si quieres ese puesto.</p>
      </SeccionPost>

      <SeccionPost titulo="Señales a las que prestar atención">
        <p>Que te entrevisten no significa que tengas que aceptar cualquier oportunidad. Presta atención si:</p>
        <ul>
          <li>No pueden explicar con claridad las responsabilidades del puesto.</li>
          <li>El proceso cambia constantemente sin explicación.</li>
          <li>Te piden trabajar gratis como "prueba".</li>
          <li>Evitan responder preguntas básicas sobre condiciones.</li>
          <li>Hablan de "somos una familia" sin concretar nada real.</li>
          <li>Dan por hecho una disponibilidad permanente.</li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Después de la entrevista">
        <p>No termina cuando cuelgas la llamada. Haz una pequeña revisión: qué preguntas respondiste bien, dónde te bloqueaste, qué concepto necesitas repasar, qué pregunta te sorprendió y qué aprendiste sobre la empresa. Así cada entrevista se convierte en práctica para la siguiente. Y si tiene sentido, un mensaje breve de agradecimiento nunca sobra.</p>
      </SeccionPost>

      <SeccionPost titulo="Tu reto: prepara tu respuesta en 15 minutos">
        <NotaPost titulo="Tu reto">
          <p>Escribe y practica tu "háblame de ti" en 60-90 segundos, siguiendo el hilo: quién eres → qué has hecho → qué sabes hacer → qué buscas.</p>
          <p>Luego grábate, escúchate y ajusta. No para sonar perfecta, sino para sonar como tú, con más seguridad.</p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="No tienes que parecer perfecta">
        <p>Tienes que poder explicar qué sabes, qué has aprendido, cómo resuelves problemas, qué todavía no sabes y hacia dónde quieres crecer. Una entrevista no debería consistir en demostrar que lo sabes todo, sino en dejar que conozcan a la profesional que hay detrás del CV.</p>
      </SeccionPost>

      <SeccionPost titulo="El camino hasta aquí">
        <p>Ctrl + Ella lleva varias ediciones construyendo lo mismo, pieza a pieza:</p>
        <ul>
          <li><strong>03</strong> Define tu dirección</li>
          <li><strong>04</strong> Reconoce tu experiencia</li>
          <li><strong>05</strong> Comunica tu valor en el CV</li>
          <li><strong>06</strong> Haz visible tu perfil</li>
          <li><strong>07</strong> Aprende a defender tu valor en una entrevista.</li>
        </ul>
        <p>Y el siguiente paso natural, después de trabajar CV → LinkedIn → entrevista, es hablar de condiciones, salario y valor profesional.</p>
        <p>Y de eso hablaremos en la próxima edición.</p>
      </SeccionPost>

      <SeccionPost titulo="Sigue la serie">
        <ul>
          <li>
            Antes en la serie:{" "}
            <Link to="/ctrl-ella/cv-tech-como-hacer-un-cv-para-tecnologia">
              Cómo hacer un CV tech que funcione: de tu experiencia a tus oportunidades
            </Link>
          </li>
        </ul>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default EntrevistaTech;
