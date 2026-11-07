import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../components/post/PlantillaPost";
import { NotaPost, SeccionPost, TarjetasPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

/*
 * Ctrl+Ella, edición «¿Cómo convertir tus metas en un plan real para crecer en
 * tecnología?» (septiembre de 2026). El texto es el de Ana Lucía, entero y sin
 * retocar; lo nuestro es el título para buscadores, la descripción y las metas.
 *
 * Las metas que lee scripts/postsIndex.ts (og:*, keywords, article:*) van con
 * el texto escrito tal cual: el índice las saca del código fuente por regex y
 * no ve el valor de una constante.
 */

const RUTA = "/ctrl-ella/objetivos-smart-metas-plan-crecer-en-tecnologia";
const TITULO_SEO = "Objetivos SMART para crecer en tecnología: guía con ejemplos";
const DESCRIPCION =
  "Convierte tus metas en objetivos SMART, con ejemplos para aprender tecnología, cambiar de trabajo, crear tu portfolio o hacer networking a tu ritmo.";
const IMAGEN = "/assets/ctrl-ella/portada-por-defecto.webp";
const PUBLICADO = "2026-11-07T10:00:00Z";

const AUTORA = {
  "@type": "Person",
  name: "Ana Lucía Silva Córdoba",
  url: "https://www.linkedin.com/in/ana-lucia-silva-cordoba/",
};

const ObjetivosSmart: React.FC = () => (
  <>
    <Helmet>
      <title>{TITULO_SEO} | FemCoders Club</title>
      <meta name="description" content={DESCRIPCION} />
      <meta
        name="keywords"
        content="objetivos SMART, metas profesionales, plan de carrera en tecnología, mujeres en tecnología, aprender a programar, Ctrl+Ella, FemCoders Club"
      />
      <link rel="canonical" href={`https://www.femcodersclub.com${RUTA}`} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content="Objetivos SMART para crecer en tecnología: guía con ejemplos" />
      <meta
        property="og:description"
        content="Convierte tus metas en objetivos SMART, con ejemplos para aprender tecnología, cambiar de trabajo, crear tu portfolio o hacer networking a tu ritmo."
      />
      <meta
        property="og:url"
        content="https://www.femcodersclub.com/ctrl-ella/objetivos-smart-metas-plan-crecer-en-tecnologia"
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

      <meta property="article:published_time" content="2026-11-07T10:00:00Z" />
      <meta property="article:author" content="Ana Lucía Silva Córdoba" />
      <meta property="article:section" content="Ctrl+Ella" />
      <meta property="article:tag" content="Mujeres en Tech" />
      <meta property="article:tag" content="Carrera profesional" />
      <meta property="article:tag" content="Objetivos SMART" />

      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify(
          articleSchema({
            type: "Article",
            path: RUTA,
            headline: "¿Cómo convertir tus metas en un plan real para crecer en tecnología?",
            description: DESCRIPCION,
            image: IMAGEN,
            datePublished: PUBLICADO,
            author: AUTORA,
            keywords: [
              "objetivos SMART",
              "metas profesionales",
              "plan de carrera en tecnología",
              "mujeres en tecnología",
              "aprender a programar",
            ],
          })
        )}
      </script>
    </Helmet>

    <PlantillaPost
      ruta={RUTA}
      titulo="¿Cómo convertir tus metas en un plan real para crecer en tecnología?"
      autora={{ nombre: "Ana Lucía Silva Córdoba", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={58}
      portadaConIA
      entradilla={
        <>
          <p>
            <strong>En esta edición...</strong>
          </p>
          <p>
            Decir <em>“quiero aprender programación”</em>, <em>“quiero mejorar mi perfil”</em> o{" "}
            <em>“quiero trabajar en tecnología”</em> es un buen comienzo. Pero una meta necesita algo
            más para convertirse en realidad: <strong>dirección, acción y un plan</strong>.
          </p>
          <p>
            En esta edición hablamos de los objetivos SMART, una herramienta sencilla para transformar
            nuestras intenciones en objetivos concretos y alcanzables.
          </p>
        </>
      }
    >
      <SeccionPost titulo="¿TIENES UNA META? CONVIÉRTELA EN UN OBJETIVO SMART">
        <ul>
          <li>“Quiero cambiar de trabajo.”</li>
          <li>“Quiero mejorar mi portfolio.”</li>
          <li>“Quiero crecer profesionalmente.”</li>
          <li>“Quiero aprender IA.”</li>
        </ul>
        <p>
          Seguro que alguna de estas frases te resulta familiar. Son metas completamente válidas. El
          problema es que, por sí solas, no nos dicen qué tenemos que hacer mañana. Y ahí es donde
          entra una herramienta sencilla, pero muy potente: SMART.
        </p>
        <p>
          Porque una meta nos marca una dirección. Un objetivo SMART nos ayuda a{" "}
          <strong>convertir esa dirección en acción</strong>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿QUÉ SIGNIFICA SMART?">
        <p>SMART es un acrónimo que nos ayuda a comprobar si un objetivo está suficientemente definido:</p>
        <ul>
          <li>S: Specific → Específico</li>
          <li>M: Measurable → Medible</li>
          <li>A: Achievable → Alcanzable</li>
          <li>R: Relevant → Relevante</li>
          <li>T: Time-bound → Temporal</li>
        </ul>
        <p>La idea no es complicarnos la vida con otra metodología. Todo lo contrario.</p>
        <h3>SMART sirve para responder a cinco preguntas:</h3>
        <ul>
          <li>¿Qué quiero conseguir?</li>
          <li>¿Cómo sabré que estoy avanzando?</li>
          <li>¿Es posible conseguirlo?</li>
          <li>¿Por qué es importante para mí?</li>
          <li>¿Cuándo quiero conseguirlo?</li>
        </ul>
        <p>
          Cuando podemos responder a las cinco, dejamos de tener solamente una intención. Tenemos un
          plan.
        </p>
      </SeccionPost>

      <SeccionPost titulo="01 · S — ESPECÍFICO">
        <h3>“Quiero aprender programación” no es suficiente.</h3>
        <p>¿Programación para qué? ¿Frontend? ¿Backend? ¿Data? ¿Automatización? ¿IA?</p>
        <p>
          Cuanto más concreta sea nuestra meta, más fácil será decidir qué aprender y, sobre todo,{" "}
          <strong>qué NO</strong> necesitamos aprender todavía.
        </p>
        <h3>❌ Demasiado amplio</h3>
        <p>“Quiero aprender Python.”</p>
        <h3>✅ Más específico</h3>
        <p>“Quiero aprender Python para poder crear pequeños proyectos de análisis de datos.”</p>
        <p>
          La diferencia parece pequeña, pero cambia completamente el camino. Ahora sabemos qué buscamos
          aprender y para qué queremos utilizarlo.
        </p>
        <NotaPost titulo="PREGÚNTATE: ¿Qué quiero conseguir exactamente?">
          <p>Si no puedes explicarlo en una frase sencilla, probablemente todavía necesites concretarlo.</p>
        </NotaPost>
      </SeccionPost>

      <SeccionPost titulo="02 · M — MEDIBLE">
        <h3>¿Cómo sabrás que lo has conseguido?</h3>
        <p>“Quiero mejorar mis conocimientos de IA.”</p>
        <p>Perfecto.</p>
        <p>
          Pero… ¿cómo medimos <em>mejorar</em>?. Podemos convertirlo en algo observable:
        </p>
        <p>“Completaré una formación de IA y desarrollaré dos proyectos propios.”</p>
        <p>Ahora tenemos indicadores de progreso. Podemos medirlo con:</p>
        <p>
          <strong>
            proyectos · cursos · certificaciones · candidaturas · publicaciones · presentaciones ·
            contribuciones · entrevistas
          </strong>
        </p>
        <p>
          No todo tiene que convertirse en un número. Medir significa simplemente tener{" "}
          <strong>alguna evidencia de que estamos avanzando</strong>. Y hay algo importante:
        </p>
        <h3>No midas solamente el resultado final.</h3>
        <p>
          Mide también los pequeños avances. Porque pasar de: <strong>“No sé hacerlo”</strong> a:{" "}
          <strong>“Ya sé hacerlo, aunque todavía necesito practicar”</strong> también es progreso.
        </p>
      </SeccionPost>

      <SeccionPost titulo="03 · A — ALCANZABLE">
        <h3>Ambicioso sí. Imposible no.</h3>
        <p>Aquí hay una idea que queremos subrayar:</p>
        <h3>“Alcanzable” no significa “pensar en pequeño”.</h3>
        <p>
          Puedes tener grandes objetivos. Pero necesitas construir un camino que tenga sentido teniendo
          en cuenta tu tiempo, tus recursos y tu punto de partida.
        </p>
        <p>Por ejemplo:</p>
        <p>“Quiero convertirme en desarrolladora frontend.”</p>
        <p>
          Puede ser una meta perfectamente válida. Pero probablemente no sea un objetivo para conseguir
          en dos semanas. Podemos dividirlo:
        </p>
        <p>
          <strong>HTML + CSS → JavaScript → proyectos → Git → portfolio → entrevistas → oportunidades</strong>
        </p>
        <p>Y aquí entra algo fundamental:</p>
        <h3>No tienes que hacerlo todo sola.</h3>
        <p>
          Una mentora, una comunidad, una compañera de aprendizaje, una formación o un evento también
          pueden formar parte de tu estrategia. Pedir ayuda{" "}
          <strong>no hace que tu objetivo sea menos tuyo</strong>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="04 · R — RELEVANTE">
        <h3>Esta quizá sea la pregunta más importante:</h3>
        <h3>¿Por qué quiero conseguirlo?</h3>
        <p>
          Porque podemos estar muy ocupadas y, aun así, no estar avanzando hacia donde realmente
          queremos. Puedes hacer cinco cursos, aprender tres herramientas nuevas, conseguir una
          certificación, actualizar tu LinkedIn y todavía sentir que no sabes hacia dónde vas.
        </p>
        <p>Antes de fijar un objetivo, pregúntate:</p>
        <p>
          <strong>¿Esto me acerca a la profesional que quiero ser?</strong>
        </p>
        <p>Por ejemplo:</p>
        <p>“Quiero aprender cloud porque quiero orientar mi carrera hacia DevOps.”</p>
        <p>Eso tiene una conexión clara. Pero:</p>
        <p>“Quiero aprender cloud porque todo el mundo habla de ello.”</p>
        <p>quizá no sea una razón suficiente.</p>
        <blockquote>
          <p>
            <strong>
              Tu carrera no tiene que convertirse en una colección de tecnologías. Tiene que ayudarte a
              construir el futuro profesional que tú quieres.
            </strong>
          </p>
        </blockquote>
      </SeccionPost>

      <SeccionPost titulo="05 · T — TIME-BOUND">
        <h3>Ponle fecha.</h3>
        <p>“Algún día haré mi portfolio.”</p>
        <p>“Algún día aprenderé IA.”</p>
        <p>“Algún día empezaré a hacer networking.”</p>
        <p>El problema de “algún día” es que nunca llega al calendario.</p>
        <p>Por eso necesitamos una fecha.</p>
        <p>❌ “Quiero crear mi portfolio.”</p>
        <p>✅ “Antes del 30 de noviembre publicaré mi portfolio con tres proyectos propios.”</p>
        <p>Ahora podemos trabajar hacia atrás.</p>
        <p>
          <strong>Septiembre:</strong> definir estructura y proyecto 1.
        </p>
        <p>
          <strong>Octubre:</strong> terminar proyectos 2 y 3.
        </p>
        <p>
          <strong>Noviembre:</strong> publicar, revisar y compartir.
        </p>
        <p>Una fecha convierte una intención en algo que podemos organizar.</p>
        <p>
          <strong>…</strong>
        </p>
      </SeccionPost>

      <SeccionPost titulo="UN EJEMPLO">
        <h3>DE “QUIERO” A “VOY A”</h3>
        <p>Veamos un ejemplo completo.</p>
        <p>
          <strong>❌ META</strong>
        </p>
        <p>“Quiero mejorar profesionalmente en IA.”</p>
        <p>Es una buena intención pero todavía no sabemos exactamente qué hacer con ella.</p>
        <p>
          <strong>OBJETIVO SMART</strong>
        </p>
        <blockquote>
          <p>
            <strong>
              “Durante los próximos tres meses completaré una formación introductoria en IA, desarrollaré
              dos pequeños proyectos y publicaré uno de ellos en GitHub para aplicar lo aprendido y
              reforzar mi portfolio profesional.”
            </strong>
          </p>
        </blockquote>
        <p>Ahora tenemos:</p>
        <ul>
          <li>
            <strong>S · Específico:</strong> aprender IA aplicada mediante proyectos.
          </li>
          <li>
            <strong>M · Medible:</strong> una formación + dos proyectos + una publicación.
          </li>
          <li>
            <strong>A · Alcanzable:</strong> tiene un alcance concreto.
          </li>
          <li>
            <strong>R · Relevante:</strong> mejora conocimientos y portfolio.
          </li>
          <li>
            <strong>T · Temporal:</strong> tres meses.
          </li>
        </ul>
        <h3>Eso es SMART.</h3>
      </SeccionPost>

      <SeccionPost titulo="Y AQUÍ VIENE LO IMPORTANTE: NO LO CONVIERTAS EN UNA PRISIÓN">
        <p>
          Los objetivos SMART tienen que ayudarnos a avanzar. <strong>No a castigarnos.</strong>
        </p>
        <p>
          Especialmente cuando hablamos de desarrollo profesional, es fácil convertir cualquier
          metodología de productividad en una nueva fuente de presión.
        </p>
        <ul>
          <li>“Debería haber avanzado más.”</li>
          <li>“Debería haber terminado ya.”</li>
          <li>“Debería saber esto.”</li>
          <li>“Debería estar más adelante.”</li>
        </ul>
        <p>No.</p>
        <p>
          Tu objetivo es una herramienta. Si cambian tus circunstancias, puedes reajustarlo. Si descubres
          que ya no quieres aquello, puedes cambiar de dirección. Si necesitas más tiempo, puedes modificar
          la fecha.
        </p>
        <blockquote>
          <p>
            <strong>
              Revisar un objetivo no es fracasar. Es utilizar nueva información para tomar una mejor
              decisión.
            </strong>
          </p>
        </blockquote>
      </SeccionPost>

      <SeccionPost titulo="SMART TAMBIÉN PUEDE AYUDARTE A CRECER PROFESIONALMENTE">
        <p>No pienses solamente en aprender tecnología.</p>
        <p>Puedes utilizar SMART para prácticamente cualquier objetivo profesional.</p>
        <h3>CAMBIAR DE TRABAJO</h3>
        <p>
          “Durante los próximos dos meses actualizaré mi CV y portfolio, contactaré con cinco
          profesionales de mi sector y enviaré cinco candidaturas personalizadas cada semana.”
        </p>
        <h3>CREAR UN PORTFOLIO</h3>
        <p>“Antes del 30 de noviembre publicaré un portfolio con tres proyectos que demuestren mis conocimientos de desarrollo web.”</p>
        <h3>MEJORAR TU VISIBILIDAD</h3>
        <p>“Durante los próximos tres meses publicaré dos veces al mes sobre lo que estoy aprendiendo en tecnología.”</p>
        <h3>HACER NETWORKING</h3>
        <p>“Durante este mes asistiré a un evento tecnológico y hablaré con al menos tres profesionales con intereses similares a los míos.”</p>
        <h3>APRENDER UNA TECNOLOGÍA</h3>
        <p>
          “Durante las próximas ocho semanas dedicaré cuatro horas semanales a aprender JavaScript y
          crearé un proyecto final para aplicar lo aprendido.”
        </p>
        <p>La clave es siempre la misma:</p>
        <p>
          <strong>menos “algún día” y más “qué, cómo, por qué y cuándo”.</strong>
        </p>
      </SeccionPost>

      <SeccionPost titulo="TU RETO SMART">
        <p>Ahora te toca a ti.</p>
        <p>Busca una meta que tengas en mente.</p>
        <p>Puede ser profesional, tecnológica o personal.</p>
        <p>Y completa:</p>
        <TarjetasPost
          tarjetas={[
            { titulo: "S · ESPECÍFICO", texto: <strong>Quiero conseguir exactamente…</strong> },
            { titulo: "M · MEDIBLE", texto: <strong>Sabré que estoy avanzando cuando…</strong> },
            { titulo: "A · ALCANZABLE", texto: <strong>Para conseguirlo necesito…</strong> },
            { titulo: "R · RELEVANTE", texto: <strong>Esto es importante para mí porque…</strong> },
            { titulo: "T · TEMPORAL", texto: <strong>Quiero conseguirlo antes de…</strong> },
          ]}
        />
        <p>Ahora junta todas tus respuestas.</p>
        <h3>¿Puedes convertirlas en una sola frase?</h3>
        <p>
          Si puedes, acabas de transformar una intención en un <strong>objetivo SMART</strong>.
        </p>
      </SeccionPost>

      <SeccionPost titulo="Y RECUERDA">
        <p>No necesitas tener toda tu carrera resuelta.</p>
        <p>No necesitas saber exactamente dónde estarás dentro de cinco años.</p>
        <p>No necesitas dominar todas las tecnologías.</p>
        <p>Y tampoco necesitas esperar a sentirte completamente preparada.</p>
        <h3>Solo necesitas identificar tu siguiente paso.</h3>
        <p>Porque crecer profesionalmente no siempre significa dar un salto enorme.</p>
        <p>A veces significa:</p>
        <p>
          <strong>hacer ese curso.</strong>
        </p>
        <p>
          <strong>crear ese proyecto.</strong>
        </p>
        <p>
          <strong>enviar esa candidatura.</strong>
        </p>
        <p>
          <strong>pedir ayuda.</strong>
        </p>
        <p>
          <strong>ir a ese evento.</strong>
        </p>
        <p>
          <strong>atreverte a hablar.</strong>
        </p>
        <p>
          <strong>empezar.</strong>
        </p>
        <p>
          Y quizá dentro de unos meses mires atrás y descubras que todos esos pequeños pasos te llevaron
          mucho más lejos de lo que imaginabas.
        </p>
        <h3>Define tu objetivo. Empieza. Y crece a tu manera.</h3>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default ObjetivosSmart;
