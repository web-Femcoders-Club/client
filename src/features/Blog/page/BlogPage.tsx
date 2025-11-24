import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Buscar from "../components/Buscar";
import Noticias from "./Noticias";
import "./PostStyles.css";
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
      description:
        "Explora cómo las APIs de HTML pueden potenciar tus proyectos web.",
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
    {
      id: 11,
      type: "noticia",
      category: "femCoders",
      title: "¡Bienvenidas a 2025 con FemCoders Club! 🎉",
      description:
        "Descubre los emocionantes planes y eventos que tenemos preparados para este nuevo año. 🌟",
      createdAt: new Date("2025-01-03"),
    },
    {
      id: 12,
      type: "recurso",
      category: "css",
      title: "Domina los Selectores en CSS",
      description:
        "Aprende a usar selectores básicos, avanzados y combinados en CSS con ejemplos prácticos y visuales.",
      createdAt: new Date("2025-01-17"),
    },
    {
      id: 13,
      type: "recurso",
      category: "css",
      title: "Box Model en CSS | Guía Completa para Frontend",
      description:
        "Aprende a dominar el Box Model en CSS para mejorar el diseño y la maquetación web.",
      createdAt: new Date("2025-02-16"),
    },
    {
      id: 14,
      type: "recurso",
      category: "css",
      title: "Flexbox: El poder de crear layouts flexibles",
      description:
        "Descubre cómo Flexbox facilita la creación de diseños modernos y responsivos con ejemplos prácticos.",
      createdAt: new Date("2025-03-05"),
    },

    {
      id: 15,
      type: "recurso",
      category: "react",
      title: "Réplica de Nike Store: E-commerce con React",
      description:
        "Almudena Rendón Fernández te muestra cómo crear una réplica profesional de Nike Store con React, incluyendo carrito de compras, localStorage y formularios avanzados.",
      createdAt: new Date("2025-03-16"),
    },
    {
      id: 16,
      type: "recurso",
      category: "css",
      title: "CSS Grid: Domina el sistema de cuadrículas en tu página web",
      description:
        "Aprende cómo usar CSS Grid para crear layouts modernos, flexibles y precisos en tus proyectos web.",
      createdAt: new Date("2025-04-03"),
    },
    {
      id: 17,
      type: "recurso",
      category: "css",
      title: "Estrategias avanzadas: Combinando Grid y Flexbox en CSS",
      description:
        "Domina el arte de combinar CSS Grid y Flexbox para crear layouts modernos, flexibles y responsivos.",
      createdAt: new Date("2025-04-27"),
    },
    {
      id: 18,
      type: "recurso",
      category: "css",
      title: "Transiciones y Transformaciones CSS en 2D y 3D",
      description:
        "Aprende a crear efectos visuales impactantes combinando transiciones CSS con transformaciones 2D y 3D. Ideal para interfaces modernas.",
      createdAt: new Date("2025-05-24"),
    },
    {
      id: 19,
      type: "noticia",
      category: "femCoders",
      title:
        "🎬 Revive la magia del DataConnect: una tarde que marcó la diferencia",
      description:
        "Más de 70 personas se reunieron en InfoJobs Barcelona para una jornada épica de Big Data, networking y comunidad. Revive los mejores momentos con nuestro video resumen y accede a las presentaciones completas.",
      createdAt: new Date("2025-06-02"),
    },
    {
      id: 20,
      type: "noticia",
      category: "femCoders",
      title:
        '🎙️ Nadia Cavalleri: "El testing no es solo técnico, requiere pensamiento crítico y empatía"',
      description:
        "Revive nuestra entrevista exclusiva con Nadia Soledad Cavalleri, una de las voces más influyentes en testing de Latinoamérica y España. Descubre su transición de psicóloga a líder en QA, consejos para automatización y su visión del futuro del testing con IA.",
      createdAt: new Date("2025-06-20"),
    },
    {
      id: 21,
      type: "recurso",
      category: "css",
      title: "Domina las Animaciones CSS: De Básico a Avanzado",
      description:
        "Aprende animaciones CSS desde keyframes básicos hasta técnicas avanzadas. Incluye performance, accesibilidad y ejemplos reales con el proyecto 'Breathe' de mindfulness.",
      createdAt: new Date("2025-07-01"),
    },
    {
      id: 22,
      type: "recurso",
      category: "css",
      title: "Responsive Design: De Principiante a Experta",
      description:
        "Domina el responsive design desde conceptos básicos hasta técnicas avanzadas. Comparación desktop-first vs mobile-first, breakpoints y container queries con ejemplos reales.",
      createdAt: new Date("2025-07-04"),
    },
    {
      id: 23,
      type: "recurso",
      category: "css",
      title: "Accesibilidad en CSS: Diseñando Experiencias Inclusivas",
      description:
        "Aprende a crear CSS accesible con contrastes adecuados, tipografía inclusiva, navegación por teclado y respeto por las preferencias del usuario. Guía completa con ejemplos reales.",
      createdAt: new Date("2025-07-12"),
    },
    {
      id: 24,
      type: "recurso",
      category: "css",
      title: "SASS: Lleva tu CSS al siguiente nivel",
      description:
        "Domina SASS desde variables básicas hasta arquitectura 7-1 profesional. Tutorial completo con proyecto interactivo FemPalette, comparación con CSS Custom Properties y ejemplos reales.",
      createdAt: new Date("2025-07-20"),
    },
    {
      id: 25,
      type: "recurso",
      category: "css",
      title: "CSS Variables vs Sass: Cuándo usar cada una para máximo impacto",
      description:
        "Descubre cuándo usar CSS Custom Properties y cuándo Sass variables. Guía completa con ejemplos prácticos, arquitectura híbrida y migración estratégica.",
      createdAt: new Date("2025-07-28"),
    },
    {
      id: 26,
      type: "recurso",
      category: "css",
      title:
        "El Lado Oculto del CSS: Cómo tus estilos están saboteando la performance",
      description:
        "Descubre cómo optimizar CSS para mejorar performance web. De 81 a 97 en PageSpeed: técnicas avanzadas, Critical CSS, selectores eficientes y herramientas de medición 2025.",
      createdAt: new Date("2025-08-02"),
    },
{
  id: 27,
  type: "recurso",
  category: "html",
  title: "🎯 Quiz HTML para Entrevistas Técnicas",
  description: "Prepárate para entrevistas técnicas con 30 preguntas interactivas de HTML. 3 niveles de dificultad, explicaciones detalladas y feedback personalizado.",
  createdAt: new Date("2025-09-15"),
},
{
  id: 28,
  type: "noticia",
  category: "femCoders Club",
  title: "🎉 ¡Noticia que nos llena de orgullo! Somos Community Partner de HackBarna 2025",
  description: "FemCoders Club es oficialmente Community Partner de HackBarna 2025, el hackathon de IA más importante de Barcelona. Una oportunidad única para nuestra comunidad del 11-12 de octubre en Glovo HQ.",
  createdAt: new Date("2025-09-30"),
},
{
  id: 29,
  type: "recurso",
  category: "css",
  title: "🎯 Quiz CSS para Entrevistas Técnicas",
  description: "Prepárate para entrevistas técnicas con 30 preguntas interactivas de CSS. Desde Box Model hasta Grid, Custom Properties y Performance optimization.",
  createdAt: new Date("2025-10-17"),
},
{
  id: 30,
  type: "noticia",
  category: "femCoders",
  title: "🎂 Segundo Aniversario de FemCoders Club: Nuestra historia, nuestro equipo y el futuro",
  description: "Celebramos dos años de FemCoders Club: de un espacio seguro a una Asociación con +1.300 mujeres, +35 eventos y +30 empresas. Descubre nuestro equipo fundador, logros y visión tecnológica con IA.",
  createdAt: new Date("2025-10-24"),
},
{
  id: 31,
  type: "recurso",
  category: "javascript",
  title: "De HTML y CSS a JavaScript: Cuando Tu Web Cobra Vida",
  description: "El salto de maquetadora a programadora explicado con fundamentos profundos: execution context, closures, event loop, prototypes. De HTML/CSS a programación real con ejemplos del día a día.",
  createdAt: new Date("2025-11-25"),
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
      case "¡Bienvenidas a 2025 con FemCoders Club! 🎉":
        return `/noticias/Bienvenido2025`;
      case "Domina los Selectores en CSS":
        return `/recursos/css/selectores-css`;
      case "Box Model en CSS | Guía Completa para Frontend":
        return `/recursos/css/box-model`;
      case "Flexbox: El poder de crear layouts flexibles":
        return `/recursos/css/flexbox`;
      case "Réplica de Nike Store: E-commerce con React":
        return `/recursos/react/nike-store-replica`;
      case "CSS Grid: Domina el sistema de cuadrículas en tu página web":
        return `/recursos/css/css-grid`;
      case "Estrategias avanzadas: Combinando Grid y Flexbox en CSS":
        return `/recursos/css/css-grid-flexbox`;
      case "Transiciones y Transformaciones CSS en 2D y 3D":
        return `/recursos/css/transiciones-transformaciones`;
      case "🎬 Revive la magia del DataConnect: una tarde que marcó la diferencia":
        return `/noticias/DataConnectEvento`;
      case '🎙️ Nadia Cavalleri: "El testing no es solo técnico, requiere pensamiento crítico y empatía"':
        return `/noticias/EntrevistaNadiaTesting`;
      case "Domina las Animaciones CSS: De Básico a Avanzado":
        return `/recursos/css/animaciones-css`;
      case "Responsive Design: De Principiante a Experta":
        return `/recursos/css/responsive-design`;
      case "Accesibilidad en CSS: Diseñando Experiencias Inclusivas":
        return `/recursos/css/accesibilidad-css`;
      case "SASS: Lleva tu CSS al siguiente nivel":
        return `/recursos/css/sass-next-level`;
      case "CSS Variables vs Sass: Cuándo usar cada una para máximo impacto":
        return `/recursos/css/css-variables-vs-sass`;
      case "El Lado Oculto del CSS: Cómo tus estilos están saboteando la performance":
        return `/recursos/css/css-performance-optimization`;
        case "🎯 Quiz HTML para Entrevistas Técnicas":
  return `/recursos/html/quiz-html-entrevistas`;
  case "🎉 ¡Noticia que nos llena de orgullo! Somos Community Partner de HackBarna 2025":
  return `/noticias/HackBarna2025`;
  case "🎯 Quiz CSS para Entrevistas Técnicas":
  return `/recursos/css/quiz-css-entrevistas`;
 case "🎂 Segundo Aniversario de FemCoders Club: Nuestra historia, nuestro equipo y el futuro":
  return `/noticias/segundo-aniversario`;
 case "De HTML y CSS a JavaScript: Cuando Tu Web Cobra Vida":
  return `/recursos/js/fundamentos-javascript-profundos`;
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

        <link
          rel="canonical"
          href={`https://femcodersclub.com${location.pathname}`}
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
        <br />
        <p>
          Encuentra{" "}
          <Link to="/blog/noticias" className="inline-link">
            noticias
          </Link>
          ,{" "}
          <Link to="/blog/recursos" className="inline-link">
            recursos
          </Link>{" "}
          y más en nuestro blog. Aprende, comparte y crece con nosotras en el
          mundo tech.
        </p>
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
                className={categoryFilter === category ? "active" : ""}
              >
                <span className="button-content">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
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
                  .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
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
