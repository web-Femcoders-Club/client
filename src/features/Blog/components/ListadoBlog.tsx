import React, { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import KitEntrevistas from "./KitEntrevistas";
import NavBlog from "./NavBlog";
import Paginacion from "./Paginacion";
import TarjetaPost from "./TarjetaPost";
import {
  POSTS_DEL_BLOG,
  POSTS_POR_PAGINA,
  TEMAS_DEL_BLOG,
  type PostDelBlog,
} from "../postsDelBlog";
import "./Blog.css";

const TODOS = "Todo";

const TEXTOS: Record<
  PostDelBlog["seccion"],
  {
    titulo: string;
    destacado: string;
    entradilla: string;
    singular: string;
    plural: string;
    todas: string;
  }
> = {
  noticia: {
    titulo: "Noticias de la",
    destacado: "comunidad",
    entradilla:
      "Lo que pasa en la comunidad: eventos, colaboraciones, entrevistas y aniversarios de FemCoders Club, contados desde dentro.",
    singular: "noticia",
    plural: "noticias",
    todas: "Todas las noticias",
  },
  recurso: {
    titulo: "Recursos para",
    destacado: "aprender",
    entradilla:
      "Artículos para aprender HTML, CSS, JavaScript y React a tu ritmo, con proyectos prácticos y quizzes para preparar entrevistas.",
    singular: "recurso",
    plural: "recursos",
    todas: "Todos los recursos",
  },
};

type ListadoBlogProps = { seccion: PostDelBlog["seccion"] };

/*
 * /blog/noticias y /blog/recursos: todos los posts de una sección, del más
 * nuevo al más antiguo, con las mismas tarjetas que la portada. Recursos
 * filtra además por tema. Sale de POSTS_DEL_BLOG: antes cada página tenía su
 * lista escrita a mano, y a la de recursos le faltaban ocho.
 *
 * Doce por página. La página va en la URL (?pagina=2): el botón Atrás y un
 * enlace compartido llevan a la misma página. Al cambiar de página, el foco
 * va al contador, para que el lector sepa dónde está y la vista suba.
 */
const ListadoBlog: React.FC<ListadoBlogProps> = ({ seccion }) => {
  const [tema, setTema] = useState<string>(TODOS);
  const [parametros, setParametros] = useSearchParams();
  const contadorRef = useRef<HTMLParagraphElement>(null);
  const textos = TEXTOS[seccion];

  const deLaSeccion = useMemo(
    () => POSTS_DEL_BLOG.filter((post) => post.seccion === seccion),
    [seccion],
  );
  // Solo los temas que tienen algún post en esta sección (en noticias, ninguno que filtrar).
  const temas = TEMAS_DEL_BLOG.filter((t) =>
    deLaSeccion.some((post) => post.tema === t),
  );
  const visibles =
    tema === TODOS
      ? deLaSeccion
      : deLaSeccion.filter((post) => post.tema === tema);
  const totalPaginas = Math.max(
    1,
    Math.ceil(visibles.length / POSTS_POR_PAGINA),
  );
  const pedida = Number(parametros.get("pagina")) || 1;
  const pagina = Math.min(Math.max(1, pedida), totalPaginas);
  const deEstaPagina = visibles.slice(
    (pagina - 1) * POSTS_POR_PAGINA,
    pagina * POSTS_POR_PAGINA,
  );
  const cuantos = `${visibles.length} ${visibles.length === 1 ? textos.singular : textos.plural}`;
  const donde =
    totalPaginas > 1 ? ` · página ${pagina} de ${totalPaginas}` : "";

  const irAPagina = (nueva: number) => {
    setParametros(nueva === 1 ? {} : { pagina: String(nueva) });
    contadorRef.current?.focus({ preventScroll: true });
    contadorRef.current?.scrollIntoView({ block: "start" });
  };

  const elegirTema = (opcion: string) => {
    setTema(opcion);
    setParametros({});
  };

  return (
    <>
      <section
        className="blog-portada bg1 fc-manchas"
        aria-labelledby="listado-titulo"
      >
        <div className="blog-portada__contenido">
          <div
            className={
              seccion === "recurso" ? "blog-listado__cabecera" : undefined
            }
          >
            <div className="blog-portada__texto">
              <p className="fc-antetitulo fc-antetitulo--naranja">Blog</p>
            <h1 className="blog-portada__titulo" id="listado-titulo">
                {textos.titulo}{" "}
                <span className="fc-rotulador">{textos.destacado}</span>
              </h1>
              <p className="blog-portada__entradilla">{textos.entradilla}</p>
              <NavBlog />
            </div>
            {seccion === "recurso" && <KitEntrevistas />}
          </div>

          {temas.length > 1 && (
            <div
              className="blog-temas"
              role="group"
              aria-label="Filtrar por tema"
            >
              {[TODOS, ...temas].map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className="blog-tema"
                  aria-pressed={tema === opcion}
                  onClick={() => elegirTema(opcion)}
                >
                  {opcion}
                  <span className="blog-tema__numero">
                    {opcion === TODOS
                      ? deLaSeccion.length
                      : deLaSeccion.filter((post) => post.tema === opcion)
                          .length}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="blog-bloque bg4" aria-label={textos.todas}>
        <div className="blog-portada__contenido">
          <p
            className="blog-bloque__contador blog-listado__contador"
            aria-live="polite"
            tabIndex={-1}
            ref={contadorRef}
          >
            {cuantos}
            {donde}
          </p>
          <ul className="blog-rejilla">
            {deEstaPagina.map((post) => (
              <li key={post.ruta}>
                <TarjetaPost post={post} nivel="h2" />
              </li>
            ))}
          </ul>
          <Paginacion
            pagina={pagina}
            totalPaginas={totalPaginas}
            onCambiar={irAPagina}
          />
        </div>
      </section>
    </>
  );
};

export default ListadoBlog;
