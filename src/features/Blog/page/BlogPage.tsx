import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router-dom";
import PortadaBlog from "../components/PortadaBlog";
import Noticias from "./Noticias";
import Recursos from "./Recursos";

/*
 * /blog y sus dos secciones. La portada lee los posts de postsDelBlog.json,
 * que se genera en el prebuild: publicar un post ya no exige tocar este
 * archivo. Noticias y Recursos todavía tienen sus listas propias.
 */
const BlogPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>
          {location.pathname.includes("noticias")
            ? "Noticias - FemCoders Club"
            : location.pathname.includes("recursos")
            ? "Recursos - FemCoders Club"
            : "Blog de FemCoders Club"}
        </title>

        <meta
          name="description"
          content="Descubre noticias y recursos sobre programación, tecnología, y más en el blog de FemCoders Club. Aprende y crece con nuestra comunidad."
        />

        <meta
          name="keywords"
          content="FemCoders, blog de programación, recursos de desarrollo, noticias de tecnología, mujeres en tecnología, HTML, CSS, React, Python"
        />

        {/*
          Con `www`: sin él, el canonical apuntaba a una URL que responde 301
          hacia la versión con www. Un canonical que redirige es una señal débil
          —se le está diciendo al buscador "la buena es esta otra", y esa otra
          contesta "en realidad es aquella"—. El resto del sitio ya usa www.
        */}
        <link
          rel="canonical"
          href={`https://www.femcodersclub.com${location.pathname}`}
        />

        <meta property="og:title" content="Blog de FemCoders Club" />
        <meta
          property="og:description"
          content="Encuentra noticias, recursos y consejos sobre programación en el blog de FemCoders Club."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://femcodersclub.com${location.pathname}`}
        />
        <meta
          property="og:image"
          content="/assets/femcoders-blog-thumbnail.jpg"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de FemCoders Club" />
        <meta
          name="twitter:description"
          content="Explora recursos y noticias del mundo tech en el blog de FemCoders Club."
        />
        <meta
          name="twitter:image"
          content="/assets/femcoders-blog-thumbnail.jpg"
        />
      </Helmet>

      <Routes>
        <Route index element={<PortadaBlog />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="recursos" element={<Recursos />} />
      </Routes>
    </>
  );
};

export default BlogPage;
