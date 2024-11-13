import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FemCodersClubLogo from "/logo-femcoders-club.jpg";
import "./Header.css";

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogOut = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("userAvatar");
    setIsAuthenticated(false);
    setAvatar(null);
    navigate("/login");
  };

  const handleAvatarClick = () => {
    setShowUploadModal(true);
  };

  const closeModal = () => {
    setShowUploadModal(false);
    setPreviewImage(null);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmUpload = () => {
    if (previewImage) {
      setAvatar(previewImage);
      localStorage.setItem("userAvatar", previewImage);
    }
    closeModal();
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
            <Link to="/sobrenosotras" className="nav-link">
              Sobre nosotras
            </Link>
          </li>
          <li>
            <Link to="/equipo" className="nav-link">
              Equipo
            </Link>
          </li>
          <li>
            <Link to="/eventos" className="nav-link">
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="nav-link">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link" style={{ color: "#ea4f33" }}>
              Blog
            </Link>
          </li>
        </ul>
        <div className={`auth-buttons ${menuOpen ? "open" : ""}`}>
  {isAuthenticated ? (
    <div className="avatar-container">
      <img
        src={avatar || "/default-avatar.png"}
        alt="User Avatar"
        className="avatar"
        onClick={handleAvatarClick}
      />
      <button onClick={handleLogOut} className="logout-button">
        Cerrar sesión
      </button>
    </div>
  ) : (
    <Link to="/login" className="logout-button">
      Iniciar sesión
    </Link>
  )}
</div>

       
        {showUploadModal && (
          <div className="upload-modal">
            <div className="modal-content">
            <h3>Selecciona tu Imagen de Perfil</h3>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                title="Upload your avatar"
              />
              {previewImage && (
                <img src={previewImage} alt="Avatar Preview" className="avatar-preview" />
              )}
              <button onClick={confirmUpload}>Confirmar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
