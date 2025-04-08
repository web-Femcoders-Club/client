import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FemCodersClubLogo from "/logo-femcoders-club.jpg";
import "./Header.css";
import OptimizedImage from "../OptimizedImage";

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
            setAvatar(response.data.userAvatar || "/default-avatar.png");
          } else {
            setIsAuthenticated(false);
            setAvatar(null);
          }
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
          setIsAuthenticated(false);
          setAvatar(null);
        }
      } else {
        setIsAuthenticated(false);
        setAvatar(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleAvatarClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const goToWelcomePage = () => {
    const userName = sessionStorage.getItem("userName") || "Usuario";
    navigate("/welcome", {
      state: {
        userName: userName,
        avatar: avatar,
      },
    });
    setDropdownOpen(false);
  };

  const handleLogOut = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
    setAvatar(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
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
              <button
                className="dropdown-toggle avatar-button"
                onClick={handleAvatarClick}
                title="User Avatar"
              >
                <OptimizedImage
                  src={avatar || "/FemCodersClubLogo.png"}
                  alt="User Avatar"
                  className="avatar-icon"
                  title="Avatar de usuario"
                  loading="eager"
                />
              </button>

              {dropdownOpen && (
                <div
                  className={`dropdown-menu ${
                    isScrolled ? "scrolled-dropdown" : ""
                  }`}
                >
                  <button
                    onClick={goToWelcomePage}
                    className="dropdown-item nav-link"
                  >
                    Mi Perfil
                  </button>
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
