import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import FemCodersClubLogo from "/logo-femcoders-club.jpg";
import "./Header.css";

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const updateAuthState = () => {
    const authStatus = sessionStorage.getItem("authToken") !== null;
    const storedAvatar = sessionStorage.getItem("userAvatar");

    setIsAuthenticated(authStatus);
    setAvatar(storedAvatar);
  };

  useEffect(() => {
    updateAuthState();

    const handleAuthStateChange = () => {
      updateAuthState();
    };

    window.addEventListener("authStateChange", handleAuthStateChange);
    window.addEventListener("storage", updateAuthState);

    return () => {
      window.removeEventListener("authStateChange", handleAuthStateChange);
      window.removeEventListener("storage", updateAuthState);
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
    const userAvatar = sessionStorage.getItem("userAvatar");

    navigate("/welcome", {
      state: {
        userName: userName,
        avatar: userAvatar,
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
          <img
            src={FemCodersClubLogo}
            className="logo"
            alt="Fem Coders Club Logo"
          />
        </Link>

        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-icon"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/sobrenosotras"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Sobre nosotras
            </Link>
          </li>
          <li>
            <Link
              to="/equipo"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Equipo
            </Link>
          </li>
          <li>
            <Link
              to="/eventos"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Eventos
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="nav-link"
              style={{ color: "#ea4f33" }}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className={`auth-buttons ${menuOpen ? "open" : ""}`}>
          {isAuthenticated ? (
            <div className="user-avatar-dropdown" ref={dropdownRef}>
              <button
                className="dropdown-toggle avatar-button"
                onClick={handleAvatarClick}
              >
                <img
                  src={avatar || "/default-avatar.png"}
                  alt="User Avatar"
                  className="avatar-icon"
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
