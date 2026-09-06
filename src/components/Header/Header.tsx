import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FemCodersClubLogo from "/logo-femcoders-club.jpg";
import "./Header.css";
import OptimizedImage from "../OptimizedImage";

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const avatarButtonRef = useRef<HTMLButtonElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateAuthState = async () => {
      const authToken = sessionStorage.getItem("authToken");
      const userId = sessionStorage.getItem("userId");

      if (authToken && userId) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/user/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );

          if (response.status === 200 && response.data) {
            setIsAuthenticated(true);
            // Sin avatar se guarda null, no una ruta por defecto: quien decide
            // la imagen de reserva es el render, y así hay un único sitio donde
            // mirarlo. Antes aquí se ponía "/default-avatar.png", un archivo
            // que nunca existió en public/; al ser una cadena truthy anulaba el
            // `|| "/FemCodersClubLogo.png"` de más abajo, y toda usuaria sin
            // avatar veía la imagen rota.
            setAvatar(response.data.userAvatar || null);
            setUserRole(sessionStorage.getItem("userRole"));
          } else {
            setIsAuthenticated(false);
            setAvatar(null);
            setUserRole(null);
          }
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
          setIsAuthenticated(false);
          setAvatar(null);
          setUserRole(null);
        }
      } else {
        setIsAuthenticated(false);
        setAvatar(null);
        setUserRole(null);
      }
    };

    updateAuthState();

    const handleStorageChange = () => {
      updateAuthState();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Publica la altura del header como variable CSS, para que los menús laterales
   * empiecen justo debajo en vez de quedar tapados por él (el header es `fixed`
   * con z-index 1000 y gana a cualquier menú).
   *
   * Se mide, no se escribe a mano: el logo pasa de 70px a 50px por debajo de
   * 768px y con el zoom del navegador crece todo. Cualquier número fijo aquí
   * volvería a esconder la parte alta del menú en cuanto cambie una de las dos
   * cosas, que es justo el fallo que se está corrigiendo.
   */
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const publishHeight = () => {
      document.documentElement.style.setProperty(
        "--fem-header-height",
        `${header.offsetHeight}px`
      );
    };

    publishHeight();
    const observer = new ResizeObserver(publishHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    // Escape cierra y devuelve el foco al avatar, no al principio de la página.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        avatarButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleAvatarClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const goToWelcomePage = () => {
    // WelcomePage lee `userName` y `userId` del state; `avatar` no lo mira nadie.
    // Y su reserva miraba en localStorage, donde el login no escribe nunca, así
    // que sin estos datos el saludo caía a "Usuario".
    navigate("/welcome", {
      state: {
        userName: sessionStorage.getItem("userName") || "Usuario",
        userId: Number(sessionStorage.getItem("userId")) || undefined,
      },
    });
    setDropdownOpen(false);
  };

  const goToAdminPanel = () => {
    navigate("/admin");
    setDropdownOpen(false);
  };

  const handleLogOut = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
    setAvatar(null);
    setUserRole(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <header ref={headerRef} className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <Link to="/" className="logo-link">
         <OptimizedImage
  src={FemCodersClubLogo}
  alt="Logo de FemCoders Club"
  className="logo"
  loading="eager"
/>

        </Link>

        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-icon"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {[
            { path: "/femcoders-quienes-somos", label: "Sobre Nosotras" },
            { path: "/equipo", label: "Equipo" },
            { path: "/eventos", label: "Eventos" },
            { path: "/contacto", label: "Contacto" },
            { path: "/blog", label: "Blog" },
          ].map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`nav-link ${
                  link.path === "/blog" ? "highlighted" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`auth-buttons ${menuOpen ? "open" : ""}`}>
          {isAuthenticated ? (
            <div className="user-avatar-dropdown" ref={dropdownRef}>
              {/*
                Se declara como desplegable (`aria-expanded` + `aria-controls`) y
                no como menú ARIA: un `role="menu"` promete navegación con las
                flechas, y esto es una lista de enlaces. Mejor no prometer lo que
                no se cumple.
              */}
              <button
                ref={avatarButtonRef}
                className="dropdown-toggle avatar-button"
                onClick={handleAvatarClick}
                aria-expanded={dropdownOpen}
                aria-controls="header-user-menu"
                aria-label="Menú de usuaria"
              >
                <OptimizedImage
                  src={avatar || "/FemCodersClubLogo.png"}
                  alt=""
                  className="avatar-icon"
                  loading="eager"
                />
              </button>

              {dropdownOpen && (
                <div
                  id="header-user-menu"
                  className={`dropdown-menu ${
                    isScrolled ? "scrolled-dropdown" : ""
                  }`}
                >
                  <button
                    onClick={goToWelcomePage}
                    className="dropdown-item nav-link"
                  >
                    Mi perfil
                  </button>
                  {/*
                    El panel tiene entrada propia y separada del perfil: sin ella
                    no había forma de volver a /admin desde ninguna pantalla —ni
                    aquí ni en ningún otro sitio de la web—, así que salir del
                    panel obligaba a escribir la URL o a reiniciar sesión
                    (client#21).
                  */}
                  {userRole === "admin" && (
                    <button
                      onClick={goToAdminPanel}
                      className="dropdown-item nav-link"
                    >
                      Panel de administración
                    </button>
                  )}
                  <button
                    onClick={handleLogOut}
                    className="dropdown-item logout-button"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="logout-button">
              Iniciar sesión
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
