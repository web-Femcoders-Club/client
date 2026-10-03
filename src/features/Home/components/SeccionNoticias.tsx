import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OptimizedImage from "../../../components/OptimizedImage";
import "./SeccionNoticias.css";

export interface NewsItem {
  id: string;
  title: string;
  description: string | ReactNode;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  link?: string;
  /** Texto del enlace. Por defecto "Leer más"; concretarlo cuando el destino no sea un artículo del blog. */
  linkLabel?: string;
  /** Imagen generada con IA: muestra el distintivo (AI Act art. 50). */
  aiGenerated?: boolean;
}

const DESTACADAS = 3;
const EN_TARJETA = 3;

/** Color del chip por categoría; las que no están aquí usan el lavanda por defecto. */
const CHIP_POR_CATEGORIA: Record<string, string> = {
  Noticias: "fc-chip--naranja",
  Eventos: "fc-chip--lila",
  Colaboraciones: "fc-chip--neutro",
};

const esExterna = (url: string) => /^https?:\/\//.test(url);

const ImagenNoticia: React.FC<{ noticia: NewsItem }> = ({ noticia }) => (
  <>
    {esExterna(noticia.image) ? (
      <img src={noticia.image} alt={noticia.imageAlt} loading="lazy" />
    ) : (
      <OptimizedImage src={noticia.image} alt={noticia.imageAlt} loading="lazy" />
    )}
    {noticia.aiGenerated && <span className="noticias__ia">Generada con IA</span>}
  </>
);

const Meta: React.FC<{ noticia: NewsItem }> = ({ noticia }) => (
  <div className="noticias__meta">
    <span className={`fc-chip ${CHIP_POR_CATEGORIA[noticia.category] ?? ""}`}>
      {noticia.category}
    </span>
    <span className="noticias__fecha">{noticia.date}</span>
  </div>
);

/*
 * Enlace a la noticia. Las rutas internas van con <Link>: antes se abrían en
 * pestaña nueva y recargaban la web entera. Las externas siguen abriéndose
 * aparte.
 */
const EnlaceNoticia: React.FC<{
  href: string;
  className: string;
  children: ReactNode;
}> = ({ href, className, children }) =>
  esExterna(href) ? (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link to={href} className={className}>
      {children}
    </Link>
  );

/*
 * Sección de noticias de la home: las tres más recientes en un carrusel
 * destacado y las tres siguientes en tarjetas.
 *
 * El carrusel solo avanza con flechas, puntos o teclado: nada se mueve solo,
 * así que no necesita botón de pausa. Debajo de la destacada asoman dos
 * tarjetas «apiladas» que indican que hay más.
 *
 * Fondo, manchas y retícula son los compartidos del rediseño
 * (`fc-fondo-claro`, `fc-manchas`, `fc-puntos`): no hay fondo propio.
 */
const SeccionNoticias: React.FC<{ noticias: NewsItem[] }> = ({ noticias }) => {
  const destacadas = noticias.slice(0, DESTACADAS);
  const tarjetas = noticias.slice(DESTACADAS, DESTACADAS + EN_TARJETA);
  const [actual, setActual] = useState(0);

  if (noticias.length === 0) return null;

  const irA = (i: number) => setActual((i + destacadas.length) % destacadas.length);

  const alPulsarTecla = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      irA(actual - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      irA(actual + 1);
    }
  };

  return (
    <section className="noticias fc-fondo-claro fc-manchas" aria-labelledby="noticias-titulo">
      <span className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />

      <div className="noticias__contenedor">
        <div className="noticias__cabecera">
          <div>
            <p className="fc-antetitulo fc-antetitulo--naranja">Novedades</p>
            <h2 className="noticias__titulo" id="noticias-titulo">
              Últimas <em>noticias</em>
            </h2>
            <p className="noticias__entradilla">
              Mantente al día con las novedades, logros y actividades de nuestra comunidad.
            </p>
          </div>
          <div className="noticias__todas">
            <svg className="noticias__chispas" viewBox="0 0 60 60" aria-hidden="true">
              <path d="M10 30 L6 4" />
              <path d="M24 34 L44 8" />
              <path d="M30 50 L56 36" />
            </svg>
            <Link to="/blog/noticias" className="fc-boton fc-boton--borde">
              Ver todas las noticias <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div
          className="noticias__carrusel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Noticias destacadas"
          onKeyDown={alPulsarTecla}
        >
          <div className="noticias__ventana" id="noticias-destacadas" aria-live="polite">
            {destacadas.map((noticia, i) => (
              <article
                key={noticia.id}
                className={`noticias__destacada${i === actual ? " noticias__destacada--activa" : ""}`}
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${destacadas.length}`}
                aria-hidden={i !== actual}
              >
                <figure className="noticias__destacada-imagen">
                  <ImagenNoticia noticia={noticia} />
                </figure>
                <div className="noticias__destacada-texto">
                  <Meta noticia={noticia} />
                  <h3 className="noticias__destacada-titulo">{noticia.title}</h3>
                  <p className="noticias__resumen">{noticia.description}</p>
                  {noticia.link && (
                    <EnlaceNoticia
                      href={noticia.link}
                      className="fc-boton fc-boton--borde fc-boton--compacto noticias__leer-destacada"
                    >
                      {noticia.linkLabel ?? "Leer más"} <ArrowRight aria-hidden="true" />
                    </EnlaceNoticia>
                  )}
                </div>
              </article>
            ))}
          </div>

          {destacadas.length > 1 && (
            <>
              <button
                type="button"
                className="fc-boton-redondo noticias__flecha noticias__flecha--anterior"
                onClick={() => irA(actual - 1)}
                aria-label="Noticia anterior"
                aria-controls="noticias-destacadas"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="fc-boton-redondo noticias__flecha noticias__flecha--siguiente"
                onClick={() => irA(actual + 1)}
                aria-label="Noticia siguiente"
                aria-controls="noticias-destacadas"
              >
                <ArrowRight aria-hidden="true" />
              </button>
              <div className="noticias__puntos-carrusel">
                {destacadas.map((noticia, i) => (
                  <button
                    key={noticia.id}
                    type="button"
                    className={`noticias__punto${i === actual ? " noticias__punto--activo" : ""}`}
                    onClick={() => irA(i)}
                    aria-label={`Noticia destacada ${i + 1}: ${noticia.title}`}
                    aria-current={i === actual}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {tarjetas.length > 0 && (
          <ul className="noticias__tarjetas">
            {tarjetas.map((noticia) => {
              const contenido = (
                <>
                  <figure className="noticias__tarjeta-imagen">
                    <ImagenNoticia noticia={noticia} />
                  </figure>
                  <div className="noticias__tarjeta-texto">
                    <Meta noticia={noticia} />
                    <h3 className="noticias__tarjeta-titulo">{noticia.title}</h3>
                    {noticia.link && (
                      <span className="noticias__tarjeta-leer fc-texto-neutro">
                        {noticia.linkLabel ?? "Leer más"} →
                      </span>
                    )}
                  </div>
                </>
              );
              return (
                <li key={noticia.id}>
                  {noticia.link ? (
                    <EnlaceNoticia href={noticia.link} className="noticias__tarjeta">
                      {contenido}
                    </EnlaceNoticia>
                  ) : (
                    <div className="noticias__tarjeta">{contenido}</div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default SeccionNoticias;
