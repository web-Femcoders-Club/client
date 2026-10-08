import React from "react";
import { NavLink } from "react-router-dom";
import { POSTS_DEL_BLOG } from "../postsDelBlog";

const SECCIONES = [
  { ruta: "/blog", texto: "Todo el blog", total: POSTS_DEL_BLOG.length },
  {
    ruta: "/blog/noticias",
    texto: "Noticias",
    total: POSTS_DEL_BLOG.filter((post) => post.seccion === "noticia").length,
  },
  {
    ruta: "/blog/recursos",
    texto: "Recursos",
    total: POSTS_DEL_BLOG.filter((post) => post.seccion === "recurso").length,
  },
];

/*
 * Las tres páginas del blog, a la vista en las tres: sin esto, Noticias y
 * Recursos solo aparecían al final de cada columna de la portada. NavLink
 * pone aria-current="page" en la actual. Estilos en Blog.css.
 */
const NavBlog: React.FC = () => (
  <nav className="blog-secciones" aria-label="Secciones del blog">
    <ul className="blog-secciones__lista">
      {SECCIONES.map(({ ruta, texto, total }) => (
        <li key={ruta}>
          <NavLink to={ruta} end className="blog-secciones__enlace">
            {texto}{" "}
            <span className="blog-secciones__numero">{total}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBlog;
