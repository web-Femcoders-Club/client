import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import OptimizedImage from "../../../components/OptimizedImage";
import BotonRotacion from "./BotonRotacion";
import { useRotacion } from "./useRotacion";
import { CATEGORIAS, PROYECTOS, type Categoria, type Proyecto } from "./proyectos";
import "./SeccionProyectos.css";

const TODOS = "Todos";

/** Cada cuánto avanza solo el carrusel. */
const INTERVALO_ROTACION = 6000;
type Filtro = Categoria | typeof TODOS;

/** Etiquetas visibles en la tarjeta; el resto se resume en «+N». */
const TECNOLOGIAS_VISIBLES = 3;

/** Color del chip por categoría; las que no están aquí usan el lavanda por defecto. */
const CHIP_POR_CATEGORIA: Partial<Record<Categoria, string>> = {
  Comunidad: "fc-chip--naranja",
  IA: "fc-chip--lila",
};

const GITHUB_FEMCODERS = "https://github.com/femcodersclub";

/** Solo los filtros que algún proyecto usa: un filtro vacío no se pinta. */
const FILTROS: Filtro[] = [
  TODOS,
  ...CATEGORIAS.filter((c) => PROYECTOS.some((p) => p.categorias.includes(c))),
];

const reducirMovimiento = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Si solo hay versión optimizada, la ruta ya apunta a public-optimized y se pinta tal cual. */
const ImagenProyecto: React.FC<{ proyecto: Proyecto }> = ({ proyecto }) =>
  proyecto.imagen.startsWith("/public-optimized/") ? (
    <img src={proyecto.imagen} alt={proyecto.imagenAlt} loading="lazy" decoding="async" />
  ) : (
    <OptimizedImage src={proyecto.imagen} alt={proyecto.imagenAlt} loading="lazy" />
  );

/*
 * Enlace principal de la tarjeta: el post si existe (ruta interna, con <Link>,
 * sin recargar la web), si no la demo y, si no, el repositorio. Ocupa toda la
 * tarjeta; los enlaces de código y demo quedan por encima.
 */
const EnlacePrincipal: React.FC<{ proyecto: Proyecto }> = ({ proyecto }) => {
  const contenido = (
    <>
      {proyecto.nombre}
      <ArrowRight className="proyectos__flechita" aria-hidden="true" />
    </>
  );
  if (proyecto.post) {
    return (
      <Link to={proyecto.post} className="proyectos__enlace">
        {contenido}
      </Link>
    );
  }
  const externo = proyecto.demo ?? proyecto.repo;
  if (!externo) return <>{proyecto.nombre}</>;
  return (
    <a href={externo} className="proyectos__enlace" target="_blank" rel="noopener noreferrer">
      {contenido}
      <span className="fc-solo-lector"> (se abre en una pestaña nueva)</span>
    </a>
  );
};

const TarjetaProyecto: React.FC<{ proyecto: Proyecto }> = ({ proyecto }) => {
  const visibles = proyecto.tecnologias.slice(0, TECNOLOGIAS_VISIBLES);
  const ocultas = proyecto.tecnologias.length - visibles.length;
  /* Con post, el título ya lleva al post: aquí van código y demo. Sin post, el
     título ya es la demo (o el repo), así que solo falta lo que no cubre. */
  const enlaceTitulo = proyecto.post ? undefined : proyecto.demo ?? proyecto.repo;
  const secundarios = [
    proyecto.repo && proyecto.repo !== enlaceTitulo && { href: proyecto.repo, texto: "Código" },
    proyecto.demo && proyecto.demo !== enlaceTitulo && { href: proyecto.demo, texto: "Demo" },
  ].filter(Boolean) as { href: string; texto: string }[];

  return (
    <article className="proyectos__tarjeta">
      <figure className="proyectos__imagen">
        <ImagenProyecto proyecto={proyecto} />
        <span className={`fc-chip proyectos__chip ${CHIP_POR_CATEGORIA[proyecto.categorias[0]] ?? ""}`}>
          {proyecto.categorias[0]}
        </span>
        {proyecto.imagenIA && <span className="proyectos__ia">Generada con IA</span>}
      </figure>

      <div className="proyectos__texto">
        <h3 className="proyectos__nombre">
          <EnlacePrincipal proyecto={proyecto} />
        </h3>
        <p className="proyectos__autoria">Por {proyecto.autoria}</p>
        <p className="proyectos__descripcion">{proyecto.descripcion}</p>

        <ul className="proyectos__tecnologias" aria-label="Tecnologías">
          {visibles.map((t) => (
            <li key={t}>{t}</li>
          ))}
          {ocultas > 0 && (
            <li title={proyecto.tecnologias.slice(TECNOLOGIAS_VISIBLES).join(", ")}>
              <span className="fc-texto-neutro" aria-hidden="true">+{ocultas}</span>
              <span className="fc-solo-lector">
                y {proyecto.tecnologias.slice(TECNOLOGIAS_VISIBLES).join(", ")}
              </span>
            </li>
          )}
        </ul>

        {secundarios.length > 0 && (
          <div className="proyectos__secundarios">
            {secundarios.map(({ href, texto }) => (
              <a key={texto} href={href} target="_blank" rel="noopener noreferrer">
                {texto}
                <span className="fc-solo-lector">
                  {" "}de {proyecto.nombre} (se abre en una pestaña nueva)
                </span>
                <ExternalLink aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

/*
 * Sección de proyectos de la home.
 *
 * El carrusel es una lista con scroll horizontal y scroll-snap: se desliza con
 * el dedo, con las flechas o con los puntos, y el foco del teclado trae a la
 * vista la tarjeta que lo recibe. Avanza solo y en bucle (useRotacion): se
 * para con el ratón encima o el foco dentro, y el botón junto a los puntos
 * lo detiene del todo. Las tarjetas por vista las decide el CSS (3, 2 o 1);
 * aquí solo se miden para saber cuántas páginas hay.
 *
 * Los datos viven en proyectos.ts. Fondo, manchas y retícula son los
 * compartidos del rediseño, los mismos de «Conócenos».
 */
const SeccionProyectos: React.FC = () => {
  const [filtro, setFiltro] = useState<Filtro>(TODOS);
  const [pagina, setPagina] = useState(0);
  const [paginas, setPaginas] = useState(1);
  const pista = useRef<HTMLUListElement>(null);

  const proyectos =
    filtro === TODOS ? PROYECTOS : PROYECTOS.filter((p) => p.categorias.includes(filtro));

  /** Ancho de una página: lo que avanza cada flecha. */
  const anchoPagina = useCallback(() => {
    const el = pista.current;
    const primera = el?.firstElementChild as HTMLElement | null;
    if (!el || !primera) return { paso: 0, porVista: 1 };
    const hueco = parseFloat(getComputedStyle(el).columnGap) || 0;
    const ancho = primera.offsetWidth + hueco;
    const porVista = Math.max(1, Math.round((el.clientWidth + hueco) / ancho));
    return { paso: porVista * ancho, porVista };
  }, []);

  const medir = useCallback(() => {
    const el = pista.current;
    if (!el) return;
    const { paso, porVista } = anchoPagina();
    const total = Math.max(1, Math.ceil(el.children.length / porVista));
    setPaginas(total);
    // Al final del todo, la última página aunque no esté llena.
    const alFinal = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    setPagina(alFinal ? total - 1 : paso ? Math.round(el.scrollLeft / paso) : 0);
  }, [anchoPagina]);

  useEffect(() => {
    const el = pista.current;
    if (!el) return;
    let cuadro = 0;
    const alDesplazar = () => {
      cancelAnimationFrame(cuadro);
      cuadro = requestAnimationFrame(medir);
    };
    const observador = new ResizeObserver(medir);
    observador.observe(el);
    el.addEventListener("scroll", alDesplazar, { passive: true });
    return () => {
      cancelAnimationFrame(cuadro);
      observador.disconnect();
      el.removeEventListener("scroll", alDesplazar);
    };
  }, [medir]);

  // Con otro filtro cambian las tarjetas: se vuelve al principio y se mide de nuevo.
  useEffect(() => {
    pista.current?.scrollTo({ left: 0 });
    medir();
  }, [filtro, medir]);

  // En bucle: después de la última página viene la primera, y al revés.
  const irA = (p: number) => {
    const destino = (p + paginas) % paginas;
    pista.current?.scrollTo({
      left: destino * anchoPagina().paso,
      behavior: reducirMovimiento() ? "auto" : "smooth",
    });
  };

  const rotacion = useRotacion(() => irA(pagina + 1), INTERVALO_ROTACION, paginas > 1);

  return (
    <section
      className="proyectos bg4 fc-manchas"
      aria-labelledby="proyectos-titulo"
    >
      <span className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />

      <div className="proyectos__contenedor">
        <div className="proyectos__cabecera">
          <div>
            <p className="fc-antetitulo fc-antetitulo--naranja">Proyectos</p>
            <h2 className="fc-titulo-seccion proyectos__titulo" id="proyectos-titulo">
              Proyectos de la <span className="fc-rotulador">comunidad</span>
            </h2>
            <p className="proyectos__entradilla">
              Descubre los proyectos desarrollados por nuestras femCoders:
              herramientas, tutoriales con código abierto y trabajos en equipo.
            </p>
          </div>
          <a
            href={GITHUB_FEMCODERS}
            className="fc-boton fc-boton--borde"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todos los proyectos <ArrowRight aria-hidden="true" />
            <span className="fc-solo-lector"> en GitHub (se abre en una pestaña nueva)</span>
          </a>
        </div>

        <div className="proyectos__filtros" role="group" aria-label="Filtrar proyectos">
          {FILTROS.map((f) => (
            <button
              key={f}
              type="button"
              className="proyectos__filtro"
              aria-pressed={filtro === f}
              onClick={() => setFiltro(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="fc-solo-lector" aria-live="polite">
          {proyectos.length === 1 ? "1 proyecto" : `${proyectos.length} proyectos`}
        </p>

        <div className="proyectos__zona-carrusel" {...rotacion.pausaAlInteractuar}>
        <div className="proyectos__carrusel">
          <ul className="proyectos__pista" ref={pista} id="proyectos-pista" aria-label="Proyectos">
            {proyectos.map((p) => (
              <li key={p.id} className="proyectos__celda">
                <TarjetaProyecto proyecto={p} />
              </li>
            ))}
          </ul>

          {paginas > 1 && (
            <>
              <button
                type="button"
                className="fc-boton-redondo proyectos__flecha proyectos__flecha--anterior"
                onClick={() => irA(pagina - 1)}
                aria-label="Proyectos anteriores"
                aria-controls="proyectos-pista"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="fc-boton-redondo proyectos__flecha proyectos__flecha--siguiente"
                onClick={() => irA(pagina + 1)}
                aria-label="Proyectos siguientes"
                aria-controls="proyectos-pista"
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {paginas > 1 && (
          <div className="proyectos__puntos">
            {Array.from({ length: paginas }, (_, i) => (
              <button
                key={i}
                type="button"
                className="proyectos__punto"
                onClick={() => irA(i)}
                aria-label={`Página ${i + 1} de ${paginas}`}
                aria-current={i === pagina}
                aria-controls="proyectos-pista"
              />
            ))}
            <BotonRotacion
              girando={rotacion.girando}
              alAlternar={rotacion.alternar}
              de="proyectos"
              controla="proyectos-pista"
            />
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default SeccionProyectos;
