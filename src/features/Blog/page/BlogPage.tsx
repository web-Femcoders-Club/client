import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Buscar from "../components/Buscar";
import "./PostStyles.css";
import Noticias from "./Noticias";
import Recursos from "./Recursos";

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showRecentPosts, setShowRecentPosts] = useState(true);
  const location = useLocation();
  const noticiasRef = useRef<HTMLDivElement>(null);
  const recursosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      location.pathname.includes("noticias") ||
      location.pathname.includes("recursos")
    ) {
      setShowRecentPosts(false);
      setCategoryFilter("");
    } else {
      setShowRecentPosts(true);
    }

    if (location.pathname.includes("noticias") && noticiasRef.current) {
      noticiasRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname.includes("recursos") && recursosRef.current) {
      recursosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCategoryFilter("");
  };

  const posts = [
    {
      id: 1,
      type: "noticia",
      category: "femCoders",
      title: "femCoders Club - Primer Aniversario",
      description: "Celebramos el primer aniversario de femCoders Club.",
      createdAt: new Date("2024-10-24"),
    },
    {
      id: 2,
      type: "recurso",
      category: "html",
      title: "Introducción a HTML",
      description: "Los fundamentos de HTML.",
      createdAt: new Date("2024-10-05"),
    },
    {
      id: 3,
      type: "recurso",
      category: "html",
      title: "Elementos HTML Clave",
      description: "Descubre los elementos más utilizados.",
      createdAt: new Date("2024-10-07"),
    },
    {
      id: 4,
      type: "recurso",
      category: "css",
      title: "¿Qué es CSS y por qué es esencial para el diseño web?",
      description: "Explora la importancia de CSS en el diseño web",
      createdAt: new Date("2024-10-10"),
    },
    {
      id: 5,
      type: "recurso",
      category: "html",
      title: "HTML Semántico y Diseño de Layout",
      description: "Aprende HTML semántico y layout.",
      createdAt: new Date("2024-10-12"),
    },
    {
      id: 6,
      type: "recurso",
      category: "html",
      title: "Formularios y Tablas en HTML",
      description: "Estructurar formularios, tablas en HTML.",
      createdAt: new Date("2024-10-14"),
    },
    {
      id: 7,
      type: "recurso",
      category: "html",
      title: "Introducción a las APIs en HTML",
      description: "Explora cómo las APIs de HTML pueden potenciar tus proyectos web.",
      createdAt: new Date("2024-10-15"),
    },
    {
      id: 8,
      type: "recurso",
      category: "html",
      title: "HTML Avanzado para SEO y Accesibilidad",
      description:
        "Explora técnicas avanzadas de HTML, como microdatos, atributos ARIA y lazy loading, para mejorar el SEO y la accesibilidad de tu web.",
      createdAt: new Date("2024-10-18"),
    },
    {
      id: 9,
      type: "recurso",
      category: "html",
      title: "Integración de Frameworks y Librerías",
      description:
        "Aprende cómo HTML se relaciona con frameworks modernos como React, Vue.js, Angular y Svelte para crear aplicaciones web dinámicas.",
      createdAt: new Date("2024-10-27"),
    },
    {
      id: 10,
      type: "noticia",
      category: "femCoders",
      title: "femCoders Club -🎄 Felicitación Navideña 2024",
      description:
        "Querida comunidad, os deseamos unas felices fiestas llenas de innovación y éxito.",
      createdAt: new Date("2024-12-22"),
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const normalizedTitle = post.title.toLowerCase();
    const normalizedDescription = post.description.toLowerCase();
    const normalizedSearchQuery = searchQuery.toLowerCase();
    const matchSearch =
      normalizedTitle.includes(normalizedSearchQuery) ||
      normalizedDescription.includes(normalizedSearchQuery);
    const matchCategory =
      !categoryFilter ||
      (categoryFilter === "femCoders Club"
        ? normalizedTitle.includes("femcoders")
        : post.category === categoryFilter);
    return matchSearch && matchCategory;
  });

  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
    setSearchQuery("");
  };

  const getPostLink = (post: { title: string }) => {
    switch (post.title) {
      case "femCoders Club - Primer Aniversario":
        return `/noticias/Aniversario`;
      case "femCoders Club -🎄 Felicitación Navideña 2024":
        return `/noticias/FelicitacionNavidad`;
      case "Introducción a HTML":
        return `/recursos/html/introduccion-html`;
      case "Elementos HTML Clave":
        return `/recursos/html/elementos-html-clave`;
      case "¿Qué es CSS y por qué es esencial para el diseño web?":
        return `/recursos/css/introduccion-css`;
      case "HTML Semántico y Diseño de Layout":
        return `/recursos/html/html-semantico`;
      case "Formularios y Tablas en HTML":
        return `/recursos/html/formularios-y-tablas`;
      case "Introducción a las APIs en HTML":
        return `/recursos/html/apis-html`;
      case "HTML Avanzado para SEO y Accesibilidad":
        return `/recursos/html/html-seo-accesibilidad`;
      case "Integración de Frameworks y Librerías":
        return `/recursos/html/integracion-frameworks`;
      default:
        return `/`;
    }
  };

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

        <link rel="canonical" href="https://femcodersclub.com/blog" />

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

      <header className="blog-header">
        <h1 className="blog-title">Bienvenidas al Blog de FemCoders Club</h1>
        <nav className="blog-nav">
          <ul className="blog-menu">
            <li className="blog-menu-item">
              <Link
                to="noticias"
                className="blog-menu-link"
                onClick={() => setShowRecentPosts(false)}
              >
                Noticias
              </Link>
            </li>
            <li className="blog-menu-item">
              <Link
                to="recursos"
                className="blog-menu-link"
                onClick={() => setShowRecentPosts(false)}
              >
                Recursos
              </Link>
            </li>
          </ul>
          <div className="buscar-container">
            <Buscar onSearch={handleSearch} />
          </div>
        </nav>
      </header>

      <section className="blog-section">
        <h2>Descubre lo Último sobre femCoders Club</h2>
        <p>Encuentra noticias, recursos, y más en nuestro blog.</p>
      </section>

      <section className="blog-content">
        <div ref={recursosRef} className="categories-section">
          <h3>Temas Populares</h3>
          <div className="category-buttons">
            {[
              "html",
              "javascript",
              "react",
              "css",
              "python",
              "femCoders Club",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className="button secondary-button"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {categoryFilter || searchQuery ? (
          <div className="filtered-posts">
            <div className="post-grid">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div key={post.id} className="post-card">
                    <h4>{post.title}</h4>
                    <p className="intro-text">{post.description}</p>
                    <Link
                      to={getPostLink(post)}
                      className={`button ${
                        post.type === "noticia"
                          ? "primary-button"
                          : "secondary-button"
                      }`}
                    >
                      {post.type === "noticia" ? "Leer más" : "Ver recurso"}
                    </Link>
                  </div>
                ))
              ) : (
                <p>No se encontraron publicaciones.</p>
              )}
            </div>
          </div>
        ) : (
          showRecentPosts && (
            <div className="featured-posts">
              <h3>Publicaciones Recientes</h3>
              <div className="post-grid">
                {posts
                  .sort(
                    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
                  )
                  .slice(0, 3)
                  .map((post) => (
                    <div key={post.id} className="post-card">
                      <h4>{post.title}</h4>
                      <p className="intro-text">{post.description}</p>
                      <Link
                        to={getPostLink(post)}
                        className={`button ${
                          post.type === "noticia"
                            ? "primary-button"
                            : "secondary-button"
                        }`}
                      >
                        {post.type === "noticia" ? "Leer más" : "Ver recurso"}
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          )
        )}

        <Routes>
          <Route path="noticias" element={<Noticias />} />
          <Route path="recursos" element={<Recursos />} />
        </Routes>
      </section>
    </>
  );
};

export default BlogPage;
