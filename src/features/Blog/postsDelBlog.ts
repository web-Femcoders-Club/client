import posts from "./postsDelBlog.json";

/*
 * Los posts del blog, de más nuevo a más antiguo. El JSON lo genera
 * scripts/generatePostsBlog.ts en el prebuild a partir de Router.tsx y del
 * <Helmet> de cada post: para que un post salga aquí basta con publicarlo.
 */
export type PostDelBlog = {
  ruta: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  seccion: "noticia" | "recurso";
  tema: string;
  /** Portada generada con IA: las tarjetas y el post muestran el distintivo (AI Act art. 50). */
  imagenConIA?: true;
};

export const POSTS_DEL_BLOG = posts as PostDelBlog[];

/** Doce caben sin huecos en filas de 4, 3, 2 y 1 tarjetas. */
export const POSTS_POR_PAGINA = 12;

/** Temas del filtro, en este orden; cada uno con su número real de posts. */
export const TEMAS_DEL_BLOG = ["FemCoders Club", "JavaScript", "CSS", "HTML", "React"] as const;
