import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import OptimizedImage from "../../../../components/OptimizedImage";
import CommentsSection from "../CommentsSection";
import ShareButtons from "../ShareButtons";
import TarjetaPost from "../TarjetaPost";
import { POSTS_DEL_BLOG } from "../../postsDelBlog";
import "./Post.css";

type Autora = { nombre: string; rol?: string };

type PlantillaPostProps = {
  /** Ruta del post, la misma de Router.tsx: con ella se buscan fecha, tema e imagen. */
  ruta: string;
  /** El h1. Puede diferir del og:title del <Helmet>. */
  titulo: string;
  entradilla: React.ReactNode;
  autora: Autora;
  /** Identificador de los comentarios en el backend (no cambia aunque cambie la ruta). */
  idComentarios: number;
  children: React.ReactNode;
};

const PALABRAS_POR_MINUTO = 200;
const RELACIONADOS = 3;

const formatoFecha = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/*
 * La plantilla común de los posts del blog: un artículo en una columna.
 *
 * Cabecera: la portada primero y, debajo, migas, tema, título, entradilla y
 * una franja con autora, fecha y tiempo de lectura. Cuerpo: lo que escribe cada post con
 * SeccionPost, CodigoPost, NotaPost y TablaPost. Final: compartir y
 * comentarios, en la misma columna. Fuera del artículo, «Sigue aprendiendo»
 * con posts del mismo tema.
 *
 * Fecha, tema, sección e imagen salen de postsDelBlog.json (el <Helmet> de
 * cada post): el post no los repite. El <Helmet> se queda en cada post porque
 * es de ahí de donde lee el índice.
 */
const PlantillaPost: React.FC<PlantillaPostProps> = ({
  ruta,
  titulo,
  entradilla,
  autora,
  idComentarios,
  children,
}) => {
  const cuerpoRef = useRef<HTMLDivElement>(null);
  const [minutos, setMinutos] = useState<number | null>(null);
  const post = POSTS_DEL_BLOG.find((p) => p.ruta === ruta);

  useEffect(() => {
    const palabras = cuerpoRef.current?.textContent?.trim().split(/\s+/).length ?? 0;
    setMinutos(Math.max(1, Math.round(palabras / PALABRAS_POR_MINUTO)));
  }, [ruta]);

  if (!post) {
    // Un post que aún no está en postsDelBlog.json: falta `pnpm generate:posts`.
    console.warn(`PlantillaPost: ${ruta} no está en postsDelBlog.json; ejecuta pnpm generate:posts.`);
  }

  const esNoticia = post?.seccion === "noticia";
  const listado = esNoticia
    ? { ruta: "/blog/noticias", texto: "Noticias" }
    : { ruta: "/blog/recursos", texto: "Recursos" };
  const relacionados = post
    ? POSTS_DEL_BLOG.filter((p) => p.tema === post.tema && p.ruta !== ruta).slice(0, RELACIONADOS)
    : [];

  return (
    <>
      <article className="post">
        <header className="post__cabecera">
          {post && (
            <figure className="post__portada">
              <OptimizedImage src={post.imagen} alt="" loading="eager" fetchPriority="high" />
            </figure>
          )}
          <div className="post__columna">
            <nav className="post__migas" aria-label="Estás en">
              <ol>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to={listado.ruta}>{listado.texto}</Link>
                </li>
              </ol>
            </nav>
            {post && (
              <p className="post__tema">
                <span className={esNoticia ? "fc-chip fc-chip--naranja" : "fc-chip"}>{post.tema}</span>
              </p>
            )}
            <h1 className="post__titulo">{titulo}</h1>
            <div className="post__entradilla">{entradilla}</div>
            <div className="post__meta">
              <div className="post__autora">
                <span className="post__inicial" aria-hidden="true">
                  {autora.nombre.charAt(0)}
                </span>
                <p>
                  <strong>{autora.nombre}</strong>
                  {autora.rol && <small>{autora.rol}</small>}
                </p>
              </div>
              {post && (
                <p className="post__dato">
                  <CalendarDays aria-hidden="true" />
                  <time dateTime={post.fecha}>
                    {formatoFecha.format(new Date(`${post.fecha}T12:00:00`))}
                  </time>
                </p>
              )}
              {minutos !== null && (
                <p className="post__dato">
                  <Clock aria-hidden="true" />
                  {minutos} min de lectura
                </p>
              )}
            </div>
          </div>
        </header>

        <div className="post__cuerpo">
          <div className="post__columna post__contenido" ref={cuerpoRef}>
            {children}
          </div>
          <div className="post__columna post__final">
            <div className="post__compartir">
              <p className="post__compartir-texto">¿Te ha servido? Compártelo</p>
              <ShareButtons path={ruta} title={titulo} />
            </div>
            <CommentsSection postId={idComentarios} />
          </div>
        </div>
      </article>

      {relacionados.length > 0 && (
        <aside className="post__relacionados bg4" aria-labelledby="relacionados-titulo">
          <div className="post__relacionados-contenido">
            <div className="post__relacionados-cabecera">
              <h2 className="fc-titulo-seccion" id="relacionados-titulo">
                {esNoticia ? "Más noticias" : `Sigue aprendiendo ${post?.tema}`}
              </h2>
              <Link to={listado.ruta} className="fc-boton">
                {esNoticia ? "Todas las noticias" : "Todos los recursos"}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <ul className="post__relacionados-lista">
              {relacionados.map((p) => (
                <li key={p.ruta}>
                  <TarjetaPost post={p} />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default PlantillaPost;
