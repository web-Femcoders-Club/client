/*
 * Metas de /register. Las leen el <Helmet> de RegisterForm.tsx y el prerender
 * (scripts/spaRoutesMeta.ts): un solo sitio para no tener dos copias.
 */
export const META_REGISTRO = {
  titulo: "Únete a FemCoders Club",
  descripcion:
    "Crea tu cuenta para apuntarte a los eventos, guardar tus recursos favoritos y formar parte de la comunidad de mujeres en tecnología.",
} as const;
