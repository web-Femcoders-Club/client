import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import TarjetaPost from "./TarjetaPost";
import { POSTS_DEL_BLOG, TEMAS_DEL_BLOG, type PostDelBlog } from "../postsDelBlog";
import "./PortadaBlog.css";

const TODOS = "Todo";
const DESTACADOS = 4;
const POR_COLUMNA = 3;

const normalizar = (texto: string) =>
  texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const contarPorTema = (tema: string) =>
  POSTS_DEL_BLOG.filter((post) => post.tema === tema).length;

/*
 * Portada de /blog.
 *
 * Sin filtros: «Lo último» con los cuatro posts más nuevos (noticias o
 * recursos) y debajo dos columnas, Noticias y Recursos, con los tres
 * siguientes de cada una, sin repetir los de arriba. Todo sale de
 * POSTS_DEL_BLOG, ya ordenado por fecha: un post nuevo entra el primero.
 *
 * Con un tema o una búsqueda: una rejilla con todo lo que coincide.
 */
const PortadaBlog: React.FC = () => {
  const [tema, setTema] = useState<string>(TODOS);
  const [busqueda, setBusqueda] = useState("");

  const filtrando = tema !== TODOS || busqueda.trim() !== "";

  const resultados = useMemo(() => {
    const termino = normalizar(busqueda.trim());
    return POSTS_DEL_BLOG.filter(
      (post) =>
        (tema === TODOS || post.tema === tema) &&
        (!termino || normalizar(`${post.titulo} ${post.descripcion}`).includes(termino))
    );
  }, [tema, busqueda]);

  const destacados = POSTS_DEL_BLOG.slice(0, DESTACADOS);
  const siguientes = (seccion: PostDelBlog["seccion"]) =>
    POSTS_DEL_BLOG.slice(DESTACADOS)
      .filter((post) => post.seccion === seccion)
      .slice(0, POR_COLUMNA);

  return (
    <>
      <section className="blog-portada bg1 fc-manchas" aria-labelledby="blog-titulo">
        <div className="blog-portada__contenido">
          <div className="blog-portada__cabecera">
            <div className="blog-portada__texto">
              <p className="fc-antetitulo fc-antetitulo--naranja">Blog</p>
              <h1 className="blog-portada__titulo" id="blog-titulo">
                Aprende y comparte con la <span className="fc-rotulador">comunidad</span>
              </h1>
              <p className="blog-portada__entradilla">
                Noticias de FemCoders Club y recursos para aprender desarrollo web:
                HTML, CSS, JavaScript y más.
              </p>
            </div>

            <form className="blog-buscador" role="search" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="blog-buscar">Busca en el blog</label>
              <div className="blog-buscador__campo">
                <Search aria-hidden="true" />
                <input
                  type="search"
                  id="blog-buscar"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Por ejemplo, flexbox o HackBarna"
                />
              </div>
            </form>
          </div>

          <div className="blog-temas" role="group" aria-label="Filtrar por tema">
            {[TODOS, ...TEMAS_DEL_BLOG].map((opcion) => (
              <button
                key={opcion}
                type="button"
                className="blog-tema"
                aria-pressed={tema === opcion}
                onClick={() => setTema(opcion)}
              >
                {opcion}
                <span className="blog-tema__numero">
                  {opcion === TODOS ? POSTS_DEL_BLOG.length : contarPorTema(opcion)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {filtrando ? (
        <section className="blog-bloque bg4" aria-labelledby="blog-resultados-titulo">
          <div className="blog-portada__contenido">
            <div className="blog-bloque__cabecera">
              <h2 className="fc-titulo-seccion blog-bloque__titulo" id="blog-resultados-titulo">
                {tema === TODOS ? "Resultados" : tema}
              </h2>
              <p className="blog-bloque__contador" aria-live="polite">
                {resultados.length === 1 ? "1 publicación" : `${resultados.length} publicaciones`}
              </p>
            </div>
            {resultados.length > 0 ? (
              <ul className="blog-rejilla">
                {resultados.map((post) => (
                  <li key={post.ruta}>
                    <TarjetaPost post={post} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="blog-vacio">
                No hay publicaciones con ese filtro. Prueba con otro tema o con otra palabra.
              </p>
            )}
          </div>
        </section>
      ) : (
        <>
          <section className="blog-bloque bg4" aria-labelledby="blog-ultimo-titulo">
            <div className="blog-portada__contenido">
              <div className="blog-bloque__cabecera">
                <h2 className="fc-titulo-seccion blog-bloque__titulo" id="blog-ultimo-titulo">
                  Lo último
                </h2>
              </div>
              <ul className="blog-rejilla blog-rejilla--cuatro">
                {destacados.map((post) => (
                  <li key={post.ruta}>
                    <TarjetaPost post={post} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="blog-bloque bg1 fc-manchas" aria-label="Noticias y recursos">
            <div className="blog-portada__contenido blog-columnas">
              <div className="blog-columna">
                <h2 className="fc-titulo-seccion blog-bloque__titulo">Noticias</h2>
                <ul className="blog-columna__lista">
                  {siguientes("noticia").map((post) => (
                    <li key={post.ruta}>
                      <TarjetaPost post={post} />
                    </li>
                  ))}
                </ul>
                <Link to="/blog/noticias" className="fc-boton fc-boton--noche">
                  Todas las noticias
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
              <div className="blog-columna">
                <h2 className="fc-titulo-seccion blog-bloque__titulo">Recursos</h2>
                <ul className="blog-columna__lista">
                  {siguientes("recurso").map((post) => (
                    <li key={post.ruta}>
                      <TarjetaPost post={post} />
                    </li>
                  ))}
                </ul>
                <Link to="/blog/recursos" className="fc-boton">
                  Todos los recursos
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PortadaBlog;
