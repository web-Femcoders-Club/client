import { Helmet } from "react-helmet";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { esAdmin, haySesion } from "../../../utils/sesion";
import "./materiales.css";

type TipoDeMaterial = "charla" | "plantilla" | "guia" | "taller";

interface Material {
  titulo: string;
  /** Quién lo preparó. Sale de dentro de cada PDF. */
  autoria: string;
  fecha: string;
  tipo: TipoDeMaterial;
  resumen: string;
  archivo: string;
  /** Primera página del PDF, generada aparte y servida como webp. */
  portada: string;
  /** Tamaño ya redondeado: se enseña para que nadie se lleve 40 MB sin saberlo. */
  peso: string;
  /** Solo cuando no está en español. */
  idioma?: string;
  proyecto?: string;
}

const ETIQUETA_TIPO: Record<TipoDeMaterial, string> = {
  charla: "Charla",
  plantilla: "Plantilla",
  guia: "Guía",
  taller: "Taller",
};

/*
 * Los trece materiales, del más reciente al más antiguo.
 *
 * `tipo` importa porque no todos son charlas: hay un CV de ejemplo que sirve de
 * plantilla, instrucciones para montar un proyecto y un taller con ejercicio.
 * Llamarlos a todos «presentaciones» escondía justo lo más útil.
 */
const MATERIALES: Material[] = [
  {
    titulo: "Taller de propuesta de valor: cómo funciona la selección IT",
    autoria: "Jennifer Neyra · IT Talent & HR Consultant",
    fecha: "2026-02-26",
    tipo: "taller",
    resumen:
      "Conoce los procesos de selección IT y el papel de los sistemas de seguimiento de candidaturas (ATS). Esta segunda sesión del taller ofrece ideas para presentar tu experiencia y tu propuesta de valor con claridad.",
    archivo: "/MaterialesEventos/propuesta-de-valor.pdf",
    portada: "/assets/presentaciones/propuesta-de-valor.webp",
    peso: "6,3 MB",
  },
  {
    titulo: "CV Tech vs Selección IT",
    autoria: "Jennifer Neyra · IT Talent & HR Consultant",
    fecha: "2026-02-12",
    tipo: "charla",
    resumen:
      "Jennifer comparte pautas para estructurar tu CV y comunicar tu experiencia en los procesos de selección IT, teniendo en cuenta los sistemas ATS y la revisión de los equipos de selección. En colaboración con Canòdrom.",
    archivo: "/MaterialesEventos/cv-tech.pdf",
    portada: "/assets/presentaciones/cv-tech.webp",
    peso: "40 MB",
  },
  {
    titulo: "CV de ejemplo optimizado para ATS",
    autoria: "Jennifer Neyra",
    fecha: "2026-02-12",
    tipo: "plantilla",
    resumen:
      "Un ejemplo de CV de perfil fullstack junior con una estructura orientada a la lectura por sistemas ATS. Puedes usarlo como referencia y adaptarlo a tu experiencia al preparar una candidatura.",
    archivo: "/MaterialesEventos/ats-cv-tech.pdf",
    portada: "/assets/presentaciones/ats-cv-tech.webp",
    peso: "76 KB",
  },
  {
    titulo: "Accesibilidad en el ciclo de QA: estrategias y herramientas",
    autoria: "Ana Lucía Silva · cofundadora de FemCoders Club",
    fecha: "2025-06-27",
    tipo: "charla",
    resumen:
      "El modelo VISTA QA, una forma de incorporar la accesibilidad a todo el ciclo de calidad. Incluye herramientas, métricas y prácticas que van desde los requisitos hasta las pruebas.",
    archivo: "/MaterialesEventos/AnaLuciaSilvaMQA.pdf",
    portada: "/assets/presentaciones/AnaLuciaSilvaMQA.webp",
    peso: "13 MB",
  },
  {
    titulo: "Del requisito al éxito",
    autoria: "Silvina Lucero",
    fecha: "2025-06-27",
    tipo: "charla",
    resumen:
      "Silvina explica cómo identificar y validar los requisitos de un proyecto desde las pruebas funcionales (QA), y cómo conectarlos con los objetivos del negocio desde el inicio del desarrollo.",
    archivo: "/MaterialesEventos/SilvinaLuceroMQA.pdf",
    portada: "/assets/presentaciones/SilvinaLuceroMQA.webp",
    peso: "312 KB",
  },
  {
    titulo: "DataConnect: de la comunicación a Data Analytics",
    autoria: "Laura Pourtier · Data Analytics Teacher en Le Wagon",
    fecha: "2025-05-31",
    tipo: "charla",
    resumen:
      "Laura comparte su transición de la comunicación y el trabajo en ONG al análisis de datos. Una experiencia para conocer cómo estas habilidades pueden complementar trayectorias en marketing, UX, finanzas o recursos humanos.",
    archivo: "/MaterialesEventos/LeWagonDataConnect.pdf",
    portada: "/assets/presentaciones/LeWagonDataConnect.webp",
    peso: "828 KB",
  },
  {
    titulo: "Bridging Worlds: cómo la cultura de Glovo potencia el talento en datos",
    autoria: "Kevin Badía y Pia Trnovec · Glovo",
    fecha: "2025-05-31",
    tipo: "charla",
    resumen:
      "Kevin y Pia comparten cómo el equipo de operaciones de Glovo trabaja con datos para coordinar entregas. Presentan proyectos, herramientas como BigQuery, Looker, dbt y Airflow, y la arquitectura Data Mesh.",
    archivo: "/MaterialesEventos/GlovoDataConnect.pdf",
    portada: "/assets/presentaciones/GlovoDataConnect.webp",
    peso: "816 KB",
  },
  {
    titulo: "Réplica de Nike Store con React y JavaScript",
    autoria: "Almudena Rendón Fernández · Software Developer",
    fecha: "2025-03-10",
    tipo: "guia",
    resumen:
      "Almudena comparte un proyecto de tienda online y los pasos para ejecutarlo en tu ordenador. Incluye diseño adaptable, un carrito que conserva los productos añadidos, validación en tiempo real y correos de confirmación.",
    archivo: "/MaterialesEventos/NikeStoreAlmudenaRendon.pdf",
    portada: "/assets/presentaciones/NikeStoreAlmudenaRendon.webp",
    peso: "124 KB",
    proyecto: "/MaterialesEventos/NikeStoreAlmudenaRendon.rar",
  },
  {
    titulo: "Accesibilidad y ciberseguridad en el desarrollo web",
    autoria: "Rocío Cejudo",
    fecha: "2024-11-20",
    tipo: "charla",
    resumen:
      "Una introducción a la accesibilidad y la ciberseguridad en el desarrollo web: HTML semántico, ARIA y mensajes claros, junto con conceptos sobre malware, inyección SQL y medidas de protección.",
    archivo: "/MaterialesEventos/presentaciónRocioCejudo.pdf",
    portada: "/assets/presentaciones/presentacionRocioCejudo.webp",
    peso: "8 MB",
  },
  {
    titulo: "Cómo hacemos accesibles nuestros productos: retos y enfoques de prueba",
    autoria: "Daria Naidikova · Frontend Developer en Semrush",
    fecha: "2024-11-07",
    tipo: "charla",
    idioma: "En inglés",
    resumen:
      "Daria comparte la experiencia de su equipo al mejorar la accesibilidad de sus productos, con ejemplos de cómo combinar Lighthouse, axe-core y pruebas manuales para detectar y resolver barreras.",
    archivo: "/MaterialesEventos/SemrushAccesibilidad.pdf",
    portada: "/assets/presentaciones/SemrushAccesibilidad.webp",
    peso: "636 KB",
  },
  {
    titulo: "Desbloqueando el potencial de la inteligencia artificial",
    autoria: "Anna Via · Machine Learning Product Manager",
    fecha: "2024-09-19",
    tipo: "charla",
    idioma: "En inglés",
    resumen:
      "Una guía para explorar soluciones de inteligencia artificial a partir de un problema concreto. Incluye prompting, fine-tuning, RAG y agentes, junto con criterios para evaluar los resultados.",
    archivo: "/MaterialesEventos/AnnaViaCharlaInteligenciaArtificial.pdf",
    portada: "/assets/presentaciones/AnnaViaCharlaInteligenciaArtificial.webp",
    peso: "540 KB",
  },
  {
    titulo: "Atrápame si puedes: malware, escondite y búsqueda",
    autoria: "Daniela Trifu y Yeraldin Salazar",
    fecha: "2024-09-05",
    tipo: "taller",
    resumen:
      "Daniela y Yeraldin presentan amenazas habituales y casos reales de ciberataques. El material incluye un ejercicio práctico para explorar la detección y la respuesta ante estas amenazas.",
    archivo: "/MaterialesEventos/TallerMalware.pdf",
    portada: "/assets/presentaciones/TallerMalware.webp",
    peso: "12,7 MB",
  },
  {
    titulo: "Cómo personalizar tu perfil de GitHub",
    autoria: "Mari Carmen Chueco Oviedo",
    fecha: "2024-03-18",
    tipo: "guia",
    resumen:
      "Recursos y herramientas para personalizar tu perfil de GitHub y presentar tus proyectos. Incluye ideas para crear un README que refleje tus intereses y tu experiencia.",
    archivo: "/MaterialesEventos/CustomizaPerfilGithub.pdf",
    portada: "/assets/presentaciones/CustomizaPerfilGithub.webp",
    peso: "6,3 MB",
  },
];

const formatoDeDia = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "short",
});

/** Los materiales agrupados por año, del más reciente al más antiguo. */
const porAnio = () => {
  const ordenados = [...MATERIALES].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
  const grupos = new Map<string, Material[]>();
  for (const material of ordenados) {
    const anio = material.fecha.slice(0, 4);
    grupos.set(anio, [...(grupos.get(anio) ?? []), material]);
  }
  return [...grupos.entries()];
};

const FichaDeMaterial = ({ material }: { material: Material }) => (
  <article className="material">
    <p className="material__fecha">
      <time dateTime={material.fecha}>
        {formatoDeDia.format(new Date(material.fecha)).replace(".", "")}
      </time>
    </p>

    <div>
      <h3 className="material__titulo">{material.titulo}</h3>
      <p className="material__autoria">{material.autoria}</p>
      <p className="material__resumen">{material.resumen}</p>

      <div className="material__fila">
        <span className={`material__tipo material__tipo--${material.tipo}`}>
          {ETIQUETA_TIPO[material.tipo]}
        </span>
        {material.idioma && (
          <span className="material__idioma">{material.idioma}</span>
        )}
        <a
          className="material__accion"
          href={material.archivo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver PDF
        </a>
        <a className="material__accion" href={material.archivo} download>
          Descargar PDF
        </a>
        {material.proyecto && (
          <a className="material__accion" href={material.proyecto} download>
            Descargar proyecto
          </a>
        )}
        <span className="material__peso">PDF · {material.peso}</span>
      </div>
    </div>

    {/*
      La portada es la primera página del PDF. Antes aquí había un iframe con el
      archivo entero: los trece suman unos 90 MB, y en Safari de iPhone un PDF
      dentro de un iframe ni siquiera llega a mostrarse.

      Va como `img` y no con OptimizedImage a propósito: ese componente busca una
      copia dentro de public-optimized y estas portadas ya nacen en webp al
      tamaño justo, así que solo añadiría una petición fallida por imagen.
    */}
    <img
      className="material__portada"
      src={material.portada}
      alt={`Primera página de «${material.titulo}»`}
      loading="lazy"
      width="148"
    />
  </article>
);

/*
 * Materiales de los eventos.
 *
 * Antes era una línea de tiempo en zigzag paginada de cuatro en cuatro: la
 * línea arrancaba y se cortaba en cada página. Son trece materiales, así que
 * caben en una sola vista y la secuencia se sigue de un tirón, con el año como
 * único hito.
 */
const FeaturedPresentations = () => {
  const navigate = useNavigate();

  /*
   * Esta página es pública: el botón de volver solo aparece con sesión abierta,
   * porque quien entra desde fuera no tiene ningún panel al que regresar. El
   * destino y el `state` se copian del desplegable del avatar en Header.
   */
  const conSesion = haySesion();
  const admin = esAdmin();

  const volver = () => {
    if (admin) {
      navigate("/admin");
      return;
    }
    navigate("/welcome", {
      state: {
        userName: sessionStorage.getItem("userName") || "Usuario",
        userId: Number(sessionStorage.getItem("userId")) || undefined,
      },
    });
  };

  const grupos = porAnio();

  return (
    <div className="materiales">
      <Helmet>
        <title>Materiales de nuestros eventos - FemCoders Club</title>
        <meta
          name="description"
          content="Sigue aprendiendo con las presentaciones, plantillas y guías de los eventos de FemCoders Club. Consúltalas a tu ritmo y descárgalas sin registro."
        />
        <meta
          property="og:title"
          content="Materiales de nuestros eventos - FemCoders Club"
        />
        <meta
          property="og:description"
          content="Explora las presentaciones, plantillas y guías de nuestros eventos para seguir aprendiendo y poner en práctica nuevas ideas."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/presentaciones-destacadas"
        />
      </Helmet>

      <div className="materiales__contenedor">
        {conSesion && (
          <button type="button" className="materiales__volver" onClick={volver}>
            <ArrowLeft className="materiales__icono-volver" aria-hidden="true" />
            {admin ? "Volver al panel" : "Volver a mi perfil"}
          </button>
        )}

        <h1 className="materiales__titulo">Materiales de nuestros eventos</h1>
        <p className="materiales__entrada">
          Cada encuentro nos deja ideas para seguir aprendiendo. Aquí encontrarás
          presentaciones, plantillas y guías que las personas ponentes han
          compartido con la comunidad. Puedes consultarlas a tu ritmo y
          descargarlas sin necesidad de registrarte.
        </p>

        {grupos.map(([anio, materiales]) => (
          <section key={anio} aria-labelledby={`materiales-${anio}`}>
            <div className="materiales__anio">
              <h2 id={`materiales-${anio}`} className="materiales__anio-numero">
                {anio}
              </h2>
              <span className="materiales__anio-regla" aria-hidden="true" />
              <p className="materiales__anio-cuenta">
                {materiales.length}{" "}
                {materiales.length === 1 ? "material" : "materiales"}
              </p>
            </div>

            {materiales.map((material) => (
              <FichaDeMaterial key={material.archivo} material={material} />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPresentations;
