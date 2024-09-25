import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Buscar from "../components/Buscar";
import Aniversario from "../posts/noticias/Aniversario";
import Noticia2 from "../posts/noticias/Noticia2";
import Noticia3 from "../posts/noticias/Noticia3";
import "./BlogPage.css";
import Noticias from "./Noticias";
import Recursos from "./Recursos";

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showNoticias, setShowNoticias] = useState(false);
  const location = useLocation();
  const noticiasRef = useRef<HTMLDivElement>(null);
  const recursosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname.includes("noticias") && noticiasRef.current) {
      noticiasRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname.includes("recursos") && recursosRef.current) {
      recursosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCategoryFilter("");
    setShowNoticias(false);
  };

  const posts = [
    {
      id: 1,
      type: "noticia",
      category: "femCoders",
      title: "femCoders Club - Primer Aniversario",
      description: "Celebramos primer aniversario de femCoders Club",
    },
    {
      id: 2,
      type: "recurso",
      category: "html",
      title: "Introducción a HTML",
      description:
        "Aprende los fundamentos de HTML y cómo se usa para estructurar la web.",
    },
    {
      id: 3,
      type: "recurso",
      category: "css",
      title: "Guía de CSS",
      description: "Todo sobre diseño y estilos con CSS.",
    },
    {
      id: 4,
      type: "recurso",
      category: "javascript",
      title: "Guía de JavaScript",
      description: "Explora las funcionalidades avanzadas de JavaScript.",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchCategory = !categoryFilter || post.category === categoryFilter;
    const matchNoticias = !showNoticias || post.type === "noticia";
    return matchSearch && matchCategory && matchNoticias;
  });

  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
    setSearchQuery("");
    setShowNoticias(false);
  };

  const handleShowNoticias = () => {
    setCategoryFilter("");
    setSearchQuery("");
    setShowNoticias(true);
  };

  return (
    <>
      <Helmet>
        <title>Blog de FemCoders Club</title>
        <meta
          name="description"
          content="Descubre noticias y recursos en el blog de FemCoders Club"
        />
        <meta
          name="keywords"
          content="FemCoders, noticias, recursos, programación, tecnología"
        />
      </Helmet>

      <header className="blog-header">
        <h1 className="blog-title">Bienvenidas al Blog de FemCoders Club</h1>
        <nav className="blog-nav">
          <ul className="blog-menu">
            <li className="blog-menu-item">
              <Link to="noticias" className="blog-menu-link">
                Noticias
              </Link>
            </li>
            <li className="blog-menu-item">
              <Link to="recursos" className="blog-menu-link">
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
            <button
              onClick={() => handleCategoryFilter("html")}
              className="button secondary-button"
            >
              HTML
            </button>
            <button
              onClick={() => handleCategoryFilter("javascript")}
              className="button secondary-button"
            >
              JavaScript
            </button>
            <button
              onClick={() => handleCategoryFilter("react")}
              className="button secondary-button"
            >
              React
            </button>
            <button
              onClick={() => handleCategoryFilter("css")}
              className="button secondary-button"
            >
              CSS
            </button>
            <button
              onClick={() => handleCategoryFilter("python")}
              className="button secondary-button"
            >
              Python
            </button>
            <button
              onClick={handleShowNoticias}
              className="button secondary-button"
            >
              femCoders Club
            </button>
          </div>
        </div>

        <div ref={noticiasRef} className="featured-posts">
          <h3>Publicaciones Recientes</h3>
          <div className="post-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="post-card">
                  <h4>{post.title}</h4>
                  <p className="intro-text">{post.description}</p>
                  <Link
                    to={
                      post.title === "femCoders Club - Primer Aniversario"
                        ? "/noticias/Aniversario"
                        : `/blog/${post.type}/${post.id}`
                    }
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

        <Routes>
          <Route path="noticias" element={<Noticias />} />
          <Route path="recursos" element={<Recursos />} />
          <Route path="noticias/Aniversario" element={<Aniversario />} />
          <Route path="noticias/2" element={<Noticia2 />} />
          <Route path="noticias/3" element={<Noticia3 />} />
        </Routes>
      </section>
    </>
  );
};

export default BlogPage;
