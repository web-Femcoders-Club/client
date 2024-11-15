// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import FemCodersClubLogo from "/logo-femcoders-club.jpg";
// import "./Header.css";

// const Header: React.FC = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [avatar, setAvatar] = useState<string | null>(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const authStatus = localStorage.getItem("isAuthenticated") === "true";
//     const storedAvatar = localStorage.getItem("userAvatar");

//     setIsAuthenticated(authStatus);
//     setAvatar(storedAvatar);

//     const handleStorageChange = () => {
//       const updatedAuthStatus =
//         localStorage.getItem("isAuthenticated") === "true";
//       const updatedAvatar = localStorage.getItem("userAvatar");
//       setIsAuthenticated(updatedAuthStatus);
//       setAvatar(updatedAvatar);
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const handleAvatarClick = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       setDropdownOpen(false);
//     }, 300);
//   };

//   const handleLogOut = () => {
//     localStorage.setItem("isAuthenticated", "false");
//     localStorage.removeItem("userAvatar");
//     setIsAuthenticated(false);
//     setAvatar(null);
//     setDropdownOpen(false);
//     navigate("/login");
//   };

//   return (
//     <header className={`header ${isScrolled ? "scrolled" : ""}`}>
//       <nav className="navbar">
//         <Link to="/" className="logo-link">
//           <img
//             src={FemCodersClubLogo}
//             className="logo"
//             alt="Fem Coders Club Logo"
//           />
//         </Link>

//         <div
//           className={`menu-toggle ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         >
//           <div className="menu-icon"></div>
//         </div>

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li>
//             <Link
//               to="/sobrenosotras"
//               className="nav-link"
//               onClick={() => setMenuOpen(false)}
//             >
//               Sobre nosotras
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/equipo"
//               className="nav-link"
//               onClick={() => setMenuOpen(false)}
//             >
//               Equipo
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/eventos"
//               className="nav-link"
//               onClick={() => setMenuOpen(false)}
//             >
//               Eventos
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contacto"
//               className="nav-link"
//               onClick={() => setMenuOpen(false)}
//             >
//               Contacto
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/blog"
//               className="nav-link"
//               style={{ color: "#ea4f33" }}
//               onClick={() => setMenuOpen(false)}
//             >
//               Blog
//             </Link>
//           </li>
//         </ul>

//         <div className={`auth-buttons ${menuOpen ? "open" : ""}`}>
//   {isAuthenticated ? (
//     <div className="user-avatar-dropdown" onMouseLeave={handleMouseLeave}>
//       {/* Avatar del usuario que despliega el menú */}
//       <button
//         className="dropdown-toggle avatar-button"
//         onClick={handleAvatarClick}
//       >
//         <img
//           src={avatar || "/default-avatar.png"}
//           alt="User Avatar"
//           className="avatar-icon"
//         />
//       </button>

    
//       {dropdownOpen && (
//         <div
//           className={`dropdown-menu ${isScrolled ? "scrolled-dropdown" : ""}`}
//         >
//           <Link
//             to="/personaliza-perfil"
//             className="nav-link"
//             onClick={() => setMenuOpen(false)}
//           >
//             Mi Perfil
//           </Link>
//           <button
//             onClick={handleLogOut}
//             className="dropdown-item logout-button"
//           >
//             Cerrar sesión
//           </button>
//         </div>
//       )}
//     </div>
//   ) : (
//     <Link to="/login" className="logout-button">
//       Iniciar sesión
//     </Link>
//   )}
// </div>

//       </nav>
//     </header>
//   );
// };

// export default Header;


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

  // Obtener información de autenticación al cargar el componente
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    const storedAvatar = localStorage.getItem("userAvatar");

    setIsAuthenticated(authStatus);
    setAvatar(storedAvatar);

    const handleStorageChange = () => {
      const updatedAuthStatus =
        localStorage.getItem("isAuthenticated") === "true";
      const updatedAvatar = localStorage.getItem("userAvatar");
      setIsAuthenticated(updatedAuthStatus);
      setAvatar(updatedAvatar);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Detectar el scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detectar clics fuera del dropdown para cerrarlo
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

  // Alternar la apertura/cierre del menú hamburguesa
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Alternar la apertura/cierre del menú desplegable del avatar
  const handleAvatarClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Manejar el cierre de sesión del usuario
  const handleLogOut = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("userAvatar");
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
              {/* Avatar del usuario que despliega el menú */}
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

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div
                  className={`dropdown-menu ${
                    isScrolled ? "scrolled-dropdown" : ""
                  }`}
                >
                  <Link
                    to="/personaliza-perfil"
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    Mi Perfil
                  </Link>
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

