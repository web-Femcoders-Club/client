import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "../../../components/OptimizedImage";
import type { PostDelBlog } from "../postsDelBlog";
import "./TarjetaPost.css";

type TarjetaPostProps = {
  post: PostDelBlog;
  /** Nivel del título según la página donde va la tarjeta. */
  nivel?: "h2" | "h3";
};

const formatoFecha = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

/*
 * Tarjeta de un post: foto apaisada arriba, tema, fecha, título y entradilla.
 *
 * Toda la tarjeta es clicable, pero el único enlace es el título (su ::after
 * cubre la tarjeta): el lector de pantalla oye un enlace por post, no tres.
 * La foto es decorativa: el título ya dice de qué va.
 */
const TarjetaPost: React.FC<TarjetaPostProps> = ({ post, nivel = "h3" }) => {
  const Titulo = nivel;
  const esNoticia = post.seccion === "noticia";
  const claseTema = esNoticia
    ? "fc-chip fc-chip--naranja"
    : post.tema === "JavaScript"
      ? "fc-chip fc-chip--lila"
      : "fc-chip";

  return (
    <article className="fc-tarjeta tarjeta-post">
      <OptimizedImage src={post.imagen} alt="" className="tarjeta-post__imagen" />
      <div className="tarjeta-post__cuerpo">
        <div className="tarjeta-post__meta">
          <span className={claseTema}>{post.tema}</span>
          <time className="tarjeta-post__fecha" dateTime={post.fecha}>
            {formatoFecha.format(new Date(`${post.fecha}T12:00:00`))}
          </time>
        </div>
        <Titulo className="tarjeta-post__titulo">
          <Link to={post.ruta}>{post.titulo}</Link>
        </Titulo>
        <p className="tarjeta-post__texto">{post.descripcion}</p>
        <p className="tarjeta-post__leer" aria-hidden="true">
          {esNoticia ? "Leer la noticia" : "Ver el recurso"}
          <ArrowRight />
        </p>
      </div>
    </article>
  );
};

export default TarjetaPost;
