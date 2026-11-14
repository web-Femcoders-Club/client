import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";

/*
 * Ctrl+Ella, ediciones «CV tech: cómo transformar tu experiencia en
 * oportunidades» y «Tu CV no tiene que ser bonito. Tiene que funcionar.»
 * (septiembre de 2026), una detrás de otra. El texto es el de Ana Lucía,
 * entero y sin retocar; lo nuestro es el título para buscadores, la
 * descripción, las metas y el enlace a la edición anterior.
 *
 * Las metas que lee scripts/postsIndex.ts (og:*, keywords, article:*) van con
 * el texto escrito tal cual: el índice las saca del código fuente por regex y
 * no ve el valor de una constante.
 */

const RUTA = "/ctrl-ella/cv-tech-como-hacer-un-cv-para-tecnologia";
const TITULO_SEO = "Cómo hacer un CV para tecnología: guía con ejemplos y checklist";
const DESCRIPCION =
  "Aprende a hacer un CV para tecnología: convierte tareas en logros, adáptalo a cada oferta, cuida el ATS y repasa tu CV con una checklist final.";
const IMAGEN = "/assets/ctrl-ella/portada-por-defecto.webp";
const PUBLICADO = "2026-11-14T10:00:00Z";

const AUTORA = {
  "@type": "Person",
  name: "Ana Lucía Silva Córdoba",
  url: "https://www.linkedin.com/in/ana-lucia-silva-cordoba/",
};

const CvTech: React.FC = () => (
  <>
    <Helmet>
      <title>{TITULO_SEO} | FemCoders Club</title>
      <meta name="description" content={DESCRIPCION} />
      <meta
        name="keywords"
        content="CV tech, cómo hacer un CV para tecnología, CV para ATS, currículum de programadora, cambiar a tecnología, mujeres en tecnología, Ctrl+Ella, FemCoders Club"
      />
      <link rel="canonical" href={`https://www.femcodersclub.com${RUTA}`} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content="Cómo hacer un CV para tecnología: guía con ejemplos y checklist" />
      <meta
        property="og:description"
        content="Aprende a hacer un CV para tecnología: convierte tareas en logros, adáptalo a cada oferta, cuida el ATS y repasa tu CV con una checklist final."
      />
      <meta
        property="og:url"
        content="https://www.femcodersclub.com/ctrl-ella/cv-tech-como-hacer-un-cv-para-tecnologia"
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

      <meta property="article:published_time" content="2026-11-14T10:00:00Z" />
      <meta property="article:author" content="Ana Lucía Silva Córdoba" />
      <meta property="article:section" content="Ctrl+Ella" />
      <meta property="article:tag" content="Mujeres en Tech" />
      <meta property="article:tag" content="Carrera profesional" />
      <meta property="article:tag" content="CV tech" />

      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify(
          articleSchema({
            type: "Article",
            path: RUTA,
            headline: "CV tech: cómo transformar tu experiencia en oportunidades",
            description: DESCRIPCION,
            image: IMAGEN,
            datePublished: PUBLICADO,
            author: AUTORA,
            keywords: [
              "CV tech",
              "CV para tecnología",
              "CV para ATS",
              "cambiar a tecnología",
              "mujeres en tecnología",
            ],
          })
        )}
      </script>
    </Helmet>

    <PlantillaPost
      ruta={RUTA}
      titulo="Cómo hacer un CV tech que funcione: de tu experiencia a tus oportunidades"
      autora={{ nombre: "Ana Lucía Silva Córdoba", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={60}
      portadaConIA
      entradilla={
        <>
          <p><em>Resumen:</em></p>
          <p>Si estás intentando entrar en tecnología, es fácil pensar que tu experiencia anterior no cuenta. Y si llevas años trabajando pero no consigues que una oferta te encaje del todo, el problema no suele ser lo que sabes hacer, sino cómo lo estás contando.</p>
          <p>Un buen CV no es una lista de todo lo que has hecho. Es una herramienta para mostrar, en pocos segundos, qué puedes aportar. Y en tecnología, aprender a traducir la experiencia previa marca una diferencia enorme.</p>
        </>
      }
    >
      <SeccionPost titulo="No empiezas de cero">
        <p>Cambiar de sector no borra lo que ya has construido. Si vienes de educación, marketing, administración, atención al cliente, diseño, ventas o cualquier otro ámbito, seguramente has gestionado proyectos, resuelto problemas, trabajado con datos, coordinado equipos, automatizado procesos o aprendido herramientas nuevas bajo presión. Todo eso son competencias transferibles. Lo que falta, muchas veces, es saber traducirlas.</p>
      </SeccionPost>

      <SeccionPost titulo="De tareas a logros">
        <p>Uno de los errores más habituales en un CV es describir solo lo que hacíamos, sin contar el resultado. "Gestionaba las redes sociales de la empresa" describe una tarea, pero no dice nada del impacto. Una versión más útil sería: "Diseñé y ejecuté la estrategia de contenidos en redes sociales, aumentando el alcance orgánico un 35% en seis meses."</p>
        <p>La diferencia está en incluir qué hiciste, cómo lo hiciste y qué conseguiste. Eso es lo que realmente le interesa a quien está mirando tu candidatura.</p>
      </SeccionPost>

      <SeccionPost titulo="Los números cuentan">
        <p>Cuando puedas, cuantifica. No para convertir todo en una métrica, sino porque los datos ayudan a visualizar el impacto real de tu trabajo.</p>
        <ul>
          <li>En lugar de "atendía a clientes": "Gestionaba una cartera de más de 80 clientes, con un índice de satisfacción superior al 95%."</li>
          <li>En lugar de "organizaba eventos": "Coordiné 12 eventos con más de 500 asistentes en total."</li>
          <li>En lugar de "mejoré un proceso": "Rediseñé el proceso de gestión de incidencias y reduje el tiempo de respuesta un 30%."</li>
        </ul>
        <p>Tu trabajo produjo resultados. No hace falta esconderlos.</p>
      </SeccionPost>

      <SeccionPost titulo="¿Y si estás cambiando a tecnología?">
        <p>La duda más común es "no tengo experiencia en tecnología". Puede que no la tengas en el puesto exacto al que aplicas, pero eso no significa que partas de cero.</p>
        <p>Si quieres entrar en Data, tu experiencia con informes o análisis probablemente es relevante. Si vas hacia Project Management, coordinar personas y plazos ya es parte del trabajo. Si te interesa UX, investigar necesidades de usuarios y entender problemas también cuenta. Y si apuntas a IA, quizá ya has automatizado procesos o usado herramientas digitales para resolver algo concreto.</p>
        <p>No se trata de inventar experiencia, sino de identificar las conexiones que ya existen.</p>
      </SeccionPost>

      <SeccionPost titulo="Tu CV no tiene que contarlo todo">
        <p>Meter más información no siempre ayuda. Un CV eficaz no necesita resumir toda tu trayectoria: necesita mostrar la parte que es relevante para la oportunidad concreta que buscas.</p>
        <p>Antes de enviarlo, lee la oferta y pregúntate qué está buscando realmente esa empresa: qué tecnologías, conocimientos, competencias y palabras clave menciona. Luego revisa tu CV y comprueba si esas competencias aparecen cuando de verdad las tienes. Si no aparecen, el problema casi nunca es falta de contenido, sino que hay que reformular lo que ya tienes.</p>
      </SeccionPost>

      <SeccionPost titulo="El ATS tiene que encontrarte primero">
        <p>Muchas empresas usan sistemas ATS (Applicant Tracking Systems) para gestionar candidaturas, que analizan el CV buscando información relacionada con la oferta. Un diseño muy vistoso puede jugar en tu contra si dificulta esa lectura automática.</p>
        <p>Algunas recomendaciones básicas:</p>
        <ul>
          <li>Usa títulos claros y estándar: "Experiencia profesional", "Formación", "Habilidades", "Proyectos".</li>
          <li>Incluye las palabras clave reales de la oferta si de verdad tienes esa experiencia (por ejemplo, Python, SQL, Git).</li>
          <li>Evita columnas excesivas, gráficos de habilidades o elementos puramente decorativos.</li>
          <li>Adapta el CV según cada oferta, priorizando la información más relevante, sin necesidad de reescribirlo entero cada vez.</li>
        </ul>
      </SeccionPost>

      <SeccionPost titulo="Tu portfolio puede hablar por ti">
        <p>Si estás empezando en tecnología o haciendo una transición, tus proyectos pueden ser tan importantes como tu CV. No hacen falta veinte: bastan los que demuestren qué problema identificaste, qué tecnología usaste, qué decisiones tomaste y qué aprendiste. Con GitHub o una demo, mejor todavía.</p>
        <p>Decir "sé Python" no es lo mismo que poder mostrar un proyecto concreto que lo demuestre. Las evidencias siempre pesan más que la afirmación.</p>
      </SeccionPost>

      <SeccionPost titulo="La IA puede ayudarte a mejorar tu CV">
        <p>La IA es útil para analizar una oferta, detectar puntos débiles en tu CV, proponer formas más claras de explicar tus logros, adaptar tu candidatura a una posición concreta o practicar preguntas de entrevista.</p>
        <p>Pero hay una regla que no conviene saltarse: no dejes que invente tu experiencia. Que reformule algo real de forma más profesional, bien. Que añada tecnologías que nunca has usado o responsabilidades que nunca tuviste, no. Tu CV puede ser estratégico, pero tiene que seguir siendo verdad.</p>
      </SeccionPost>

      <SeccionPost titulo="Tu CV es solo una parte de tu marca profesional">
        <p>La candidatura no termina en el PDF. Tu perfil de LinkedIn, tu GitHub, los proyectos que compartes, los eventos a los que vas, las comunidades en las que participas: todo eso construye una imagen profesional.</p>
        <p>No esperes a necesitar trabajo para empezar a construir visibilidad. Comparte lo que estás aprendiendo, habla de tus proyectos, conecta con otras personas del sector, pregunta, ayuda. Facilita que se sepa quién eres y qué haces.</p>
      </SeccionPost>

      <SeccionPost titulo="El ejercicio: reescribe una experiencia">
        <p>Coge una experiencia de tu CV, solo una, y responde:</p>
        <ol>
          <li>¿Qué hice?</li>
          <li>¿Cómo lo hice?</li>
          <li>¿Qué resultado conseguí?</li>
          <li>¿Qué competencia demuestra?</li>
        </ol>
        <p>Une las respuestas en una sola frase (qué hice + cómo lo hice + resultado) y compárala con la que tenías antes. Es probable que descubras que tu experiencia ya era valiosa; solo hacía falta contarla mejor.</p>
      </SeccionPost>

      <SeccionPost titulo="No estás empezando de cero">
        <p>Estés entrando en tecnología, cambiando de especialidad o dando el siguiente paso tras años de trayectoria, intenta no mirar solo lo que te falta. Mira también lo que ya sabes hacer: las habilidades que has construido, los problemas que has resuelto, los proyectos que sacaste adelante, las veces que aprendiste algo desde cero. Todo eso forma parte de tu perfil profesional, y tu CV debería reflejarlo.</p>
      </SeccionPost>

      <SeccionPost titulo="Tu próximo paso">
        <p>Esta semana no hace falta rehacer todo el CV. Elige una experiencia, reescríbela, añade contexto, busca el resultado, cuantifica cuando puedas y conéctala con el puesto que quieres. Después haz lo mismo con otra. Un buen CV no se construye acumulando palabras, sino aprendiendo a reconocer y comunicar tu valor.</p>
        <p><em>Tu experiencia tiene valor. Aprende a ponerla en palabras.</em></p>
      </SeccionPost>


      <SeccionPost titulo="Tu CV no tiene que ser bonito. Tiene que funcionar.">
        <p>Puedes tener una formación increíble, años de experiencia, proyectos interesantes y dominar Python, JavaScript, SQL, Git o IA. Pero si nada de eso queda claro en tu CV, es muy posible que quien está seleccionando nunca llegue a descubrirlo. Esto no significa que necesites un CV lleno de colores y diseños imposibles. En tecnología, muchas veces menos es más. Tu CV tiene una única misión: conseguir que quieran conocerte.</p>
        <p>En esta edición vamos a ver cómo construir un CV tech que sea claro para los sistemas de selección, útil para quien recluta y, sobre todo, fiel a lo que realmente puedes aportar.</p>
      </SeccionPost>

      <SeccionPost titulo="Antes que una persona, puede leerte un ATS">
        <p>Si has buscado trabajo alguna vez, seguramente conoces los ATS: los sistemas que muchas empresas usan para gestionar y filtrar candidaturas. Eso significa que tu CV puede pasar primero por un sistema antes de llegar a alguien.</p>
        <p>No estás escribiendo solo para la persona que lo lea al final, sino para que la información se encuentre y se entienda fácilmente. Por eso importa tanto la claridad: títulos reconocibles, experiencia bien estructurada, tecnologías identificables, información concreta. Nada de esconder tus skills dentro de una infografía preciosa pero imposible de interpretar.</p>
        <p>Tu CV puede ser bonito, pero antes tiene que ser legible.</p>
      </SeccionPost>

      <SeccionPost titulo="¿Qué busca realmente un recruiter IT?">
        <p>Alguien que recibe decenas de candidaturas no va a leer tu vida profesional entera. Necesita responder rápido a unas pocas preguntas: qué perfil tienes, qué sabes hacer, qué tecnologías conoces, qué experiencia tienes, si has trabajado en problemas parecidos y si puedes encajar en esa posición.</p>
        <p>Cuando alguien abre tu CV, debería entender en segundos quién eres, qué haces, qué sabes y qué puedes aportar. Si para descubrirlo hay que leer tres páginas y descifrar una nube de iconos, hay un problema.</p>
      </SeccionPost>

      <SeccionPost titulo="Las skills no son una lista de palabras">
        <p>Una sección de habilidades llena de tecnologías —Python, SQL, Git, Docker, AWS, React, Java, Jira, Figma, Linux, IA— puede parecer impresionante, pero enseguida surge la pregunta: ¿y qué has hecho con ellas? Decir que sabes algo vale mucho menos que demostrar cómo lo has usado.</p>
        <p>En vez de escribir solo "Python", puedes darle contexto: <em>"Python: análisis y transformación de datos para proyectos personales."</em> O <em>"SQL: consultas y análisis de bases de datos en proyectos de reporting."</em> No hace falta explicar cada tecnología en diez líneas, basta con contextualizarla. Una skill sin evidencia es una afirmación; una skill aplicada es una señal de capacidad.</p>
      </SeccionPost>

      <SeccionPost titulo="De &quot;responsabilidades&quot; a &quot;resultados&quot;">
        <p>Esta es una de las transformaciones más importantes que puedes hacer en tu CV. Escribir "responsable de gestionar proyectos" es correcto, pero no dice casi nada: ¿qué proyectos, cuántos, qué hiciste tú, qué problemas resolviste, qué conseguiste?</p>
        <p>Podría convertirse en: <em>"Coordiné proyectos digitales con equipos multidisciplinares de hasta 8 personas, cumpliendo plazos y reduciendo un 20% el tiempo de entrega."</em> Ahora sí se puede visualizar el impacto.</p>
        <p>Una fórmula que funciona: qué hiciste + cómo lo hiciste + qué conseguiste. Y siempre que puedas, añade datos: porcentajes, número de personas, clientes, proyectos, tiempo ahorrado, ingresos, usuarios, tickets. Cualquier cifra que ayude a dimensionar tu trabajo.</p>
      </SeccionPost>

      <SeccionPost titulo="¿Estás cambiando de sector? Tu experiencia sigue contando">
        <p>Quizá estás intentando entrar en tecnología después de trabajar en otro sector y, al leer una oferta, piensas "no tengo experiencia". Pero probablemente no sea del todo cierto: no tienes experiencia exactamente en ese puesto, pero seguramente sí en resolver problemas.</p>
        <p>Si has coordinado equipos, tienes experiencia en coordinación. Si has trabajado con clientes, tienes experiencia comunicando y entendiendo necesidades. Si has gestionado proyectos, tienes experiencia organizando recursos y plazos. Si has trabajado con datos, tienes experiencia analítica. Si has automatizado tareas, tienes experiencia mejorando procesos. Si has aprendido herramientas nuevas por tu cuenta, tienes evidencia de aprendizaje autónomo.</p>
        <p>No se trata de inventar experiencia, sino de traducir la que ya tienes.</p>
      </SeccionPost>

      <SeccionPost titulo="Adapta tu CV: no envíes el mismo a todo">
        <p>Uno de los errores más frecuentes es tener un único CV y mandarlo idéntico a cada oferta. Pero un puesto de Data Analyst y uno de Project Manager IT no deberían recibir el mismo documento, no porque tengas que inventarte una personalidad distinta, sino porque cada puesto busca cosas diferentes.</p>
        <p>Antes de enviar tu CV, lee la oferta con atención: busca las tecnologías, identifica las responsabilidades, fíjate en qué requisitos se repiten. Luego pregúntate dónde está eso en tu experiencia. Si realmente lo tienes, asegúrate de que sea visible. Adaptar no es inventar, es priorizar lo relevante.</p>
      </SeccionPost>

      <SeccionPost titulo="Tu propuesta de valor">
        <p>Hay una pregunta que puede ayudarte mucho: ¿por qué deberían conocerte? No en el sentido de por qué eres mejor que las demás candidatas, sino qué combinación de conocimientos, experiencia y perspectiva puedes aportar tú.</p>
        <p>Quizá seas desarrolladora con experiencia en educación, data analyst con experiencia en marketing, o vengas del diseño y ahora te dediques a UX. Esas combinaciones pueden ser justo lo que te diferencia. No escondas tu trayectoria anterior: puede convertirse en una ventaja competitiva. Tu perfil no tiene que parecerse al de todo el mundo.</p>
      </SeccionPost>

      <SeccionPost titulo="¿Y el diseño?">
        <p>Una opinión que quizá no sea muy popular: tu CV no necesita parecer un cartel de Behance. Sobre todo si aplicas a posiciones tecnológicas, el orden de prioridad debería ser claridad, estructura, legibilidad, contenido y, al final, diseño.</p>
        <p>No hacen falta barras de porcentaje indicando que sabes Python "al 80%", ni diez iconos distintos para tus herramientas, ni cinco columnas de información, ni gráficos decorativos, ni tipografías difíciles de leer. Puedes tener personalidad y cuidar la estética, pero nunca a costa de que se entienda tu CV.</p>
      </SeccionPost>

      <SeccionPost titulo="IA: tu copiloto, no la autora de tu CV">
        <p>La IA puede ayudarte mucho. Puedes pedirle que analice una oferta y te diga cuáles son las competencias y palabras clave más importantes, que compare esas competencias con tu experiencia, o que te ayude a convertir una responsabilidad en un logro cuantificable sin inventar nada. Eso ahorra tiempo de verdad.</p>
        <p>Pero hay una línea que no conviene cruzar: no dejes que la IA invente una profesional que no eres. Si nunca has trabajado con Kubernetes, no lo pongas porque aparece cinco veces en la oferta. Si nunca has liderado un equipo de 15 personas, no conviertas una colaboración en liderazgo. Si no tienes una certificación, no la insinúes. El CV puede ser estratégico, pero también tiene que ser verdad.</p>
      </SeccionPost>

      <SeccionPost titulo="El CV no es toda tu candidatura">
        <p>Tu CV importa, pero no está solo. Tu GitHub puede demostrar cómo trabajas, tu portfolio puede enseñar tus proyectos, LinkedIn puede mostrar tu trayectoria. Un proyecto personal demuestra iniciativa, una charla muestra comunicación, una contribución open source muestra colaboración. Un evento puede llevarte a una conversación, y una conversación puede llevarte a una oportunidad. Tu perfil profesional es mucho más grande que un PDF; el CV es solo una de las puertas de entrada.</p>
      </SeccionPost>

      <SeccionPost titulo="Checklist: ¿funciona tu CV tech?">
        <p>Antes de enviar una candidatura, revisa:</p>
        <ul>
          <li>¿Se entiende rápido qué perfil profesional tienes?</li>
          <li>¿Tu experiencia está relacionada con el puesto?</li>
          <li>¿Has usado palabras clave relevantes que realmente dominas?</li>
          <li>¿Tus skills tienen contexto?</li>
          <li>¿Has convertido tareas en logros?</li>
          <li>¿Has añadido resultados o métricas cuando podías?</li>
          <li>¿Es fácil de leer?</li>
          <li>¿Es compatible con sistemas ATS?</li>
          <li>¿Has adaptado la información a esta oferta concreta?</li>
          <li>¿Tu experiencia anterior está bien aprovechada?</li>
          <li>¿Queda clara tu propuesta de valor?</li>
          <li>¿Todo lo que aparece es verdad?</li>
        </ul>
        <p>Si respondes sí a la mayoría, vas por buen camino.</p>
      </SeccionPost>

      <SeccionPost titulo="Mira tu CV con otros ojos">
        <p>Ábrelo. No lo leas como quien lo escribió, léelo como si fueras recruiter con solo treinta segundos. ¿Qué ves primero? ¿Se entiende qué perfil tienes delante? ¿Encuentras rápido tus tecnologías? ¿Aparecen tus logros? ¿Se entiende qué tipo de problemas sabes resolver? ¿Hay algo que haga pensar "quiero hablar con esta persona"?</p>
        <p>Si la respuesta es no, no significa que tu trayectoria no sea suficiente. Puede que simplemente necesites comunicarla mejor.</p>
      </SeccionPost>

      <SeccionPost titulo="Tu CV no tiene que demostrar que sabes hacerlo todo">
        <p>Y queremos cerrar con algo importante: no necesitas tener todas las tecnologías, ni cumplir el 100% de una oferta para atreverte a aplicar, ni que tu trayectoria sea perfecta, ni compararte con todo el mundo en LinkedIn.</p>
        <p>Necesitas saber qué aportas, qué has aprendido, qué problemas sabes resolver, qué quieres seguir aprendiendo y cómo puedes ayudar al equipo al que aplicas. Tu CV no es una lista de razones por las que deberían contratarte: es una invitación a conocerte.</p>
        <p>Así que la próxima vez que vayas a enviar una candidatura, en lugar de preguntarte "¿cómo hago que mi CV parezca impresionante?", pregúntate: ¿cómo hago que mi valor sea imposible de pasar por alto?</p>
        <p><em>Tu experiencia merece ser vista.</em></p>
      </SeccionPost>


      <SeccionPost titulo="Sigue la serie">
        <ul>
          <li>
            Edición anterior:{" "}
            <Link to="/ctrl-ella/objetivos-smart-metas-plan-crecer-en-tecnologia">
              ¿Cómo convertir tus metas en un plan real para crecer en tecnología?
            </Link>
          </li>
        </ul>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default CvTech;
