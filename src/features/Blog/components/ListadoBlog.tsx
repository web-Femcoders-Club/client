import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TarjetaPost from "./TarjetaPost";
import { POSTS_DEL_BLOG, TEMAS_DEL_BLOG, type PostDelBlog } from "../postsDelBlog";
import "./Blog.css";

const TODOS = "Todo";

const TEXTOS: Record<
  PostDelBlog["seccion"],
  { titulo: string; destacado: string; entradilla: string; singular: string; plural: string }
> = {
  noticia: {
    titulo: "Noticias de la",
    destacado: "comunidad",
    entradilla:
      "Lo que pasa en la comunidad: eventos, colaboraciones, entrevistas y aniversarios de FemCoders Club, contados desde dentro.",
    singular: "noticia",
    plural: "noticias",
  },
  recurso: {
    titulo: "Recursos para",
    destacado: "aprender",
    entradilla:
      "Artículos para aprender HTML, CSS, JavaScript y React a tu ritmo, con proyectos prácticos y quizzes para preparar entrevistas.",
    singular: "recurso",
    plural: "recursos",
  },
};

type ListadoBlogProps = { seccion: PostDelBlog["seccion"] };

/*
 * /blog/noticias y /blog/recursos: todos los posts de una sección, del más
 * nuevo al más antiguo, con las mismas tarjetas que la portada. Recursos
 * filtra además por tema. Sale de POSTS_DEL_BLOG: antes cada página tenía su
 * lista escrita a mano, y a la de recursos le faltaban ocho.
 */
const ListadoBlog: React.FC<ListadoBlogProps> = ({ seccion }) => {
  const [tema, setTema] = useState<string>(TODOS);
  const textos = TEXTOS[seccion];

  const deLaSeccion = useMemo(
    () => POSTS_DEL_BLOG.filter((post) => post.seccion === seccion),
    [seccion]
  );
  // Solo los temas que tienen algún post en esta sección (en noticias, ninguno que filtrar).
  const temas = TEMAS_DEL_BLOG.filter((t) => deLaSeccion.some((post) => post.tema === t));
  const visibles = tema === TODOS ? deLaSeccion : deLaSeccion.filter((post) => post.tema === tema);
  const cuantos = `${visibles.length} ${visibles.length === 1 ? textos.singular : textos.plural}`;

  return (
    <>
      <section className="blog-portada bg1 fc-manchas" aria-labelledby="listado-titulo">
        <div className="blog-portada__contenido">
          <div className="blog-portada__texto">
            <Link to="/blog" className="fc-enlace fc-enlace--texto blog-volver">
              <ArrowLeft aria-hidden="true" />
              Volver al blog
            </Link>
            <h1 className="blog-portada__titulo" id="listado-titulo">
              {textos.titulo} <span className="fc-rotulador">{textos.destacado}</span>
            </h1>
            <p className="blog-portada__entradilla">{textos.entradilla}</p>
          </div>

          {temas.length > 1 && (
            <div className="blog-temas" role="group" aria-label="Filtrar por tema">
              {[TODOS, ...temas].map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className="blog-tema"
                  aria-pressed={tema === opcion}
                  onClick={() => setTema(opcion)}
                >
                  {opcion}
                  <span className="blog-tema__numero">
                    {opcion === TODOS
                      ? deLaSeccion.length
                      : deLaSeccion.filter((post) => post.tema === opcion).length}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="blog-bloque bg4" aria-label={`Todas las ${textos.plural}`}>
        <div className="blog-portada__contenido">
          <p className="blog-bloque__contador blog-listado__contador" aria-live="polite">
            {cuantos}
          </p>
          <ul className="blog-rejilla">
            {visibles.map((post) => (
              <li key={post.ruta}>
                <TarjetaPost post={post} nivel="h2" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ListadoBlog;
