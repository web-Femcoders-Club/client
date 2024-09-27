import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";

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
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          <Link to="/" className="logo-link">
            <img
              src="/negativeLogo.png"
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
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>

          <div className={`auth-buttons ${menuOpen ? "open" : ""}`}>
            {isAuthenticated ? (
              <div className="user-avatar">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="User Avatar"
                    className="avatar-icon"
                    onClick={handleAvatarClick}
                  />
                ) : (
                  <User
                    size={24}
                    className="avatar-icon"
                    onClick={handleAvatarClick}
                  />
                )}

                <button className="logout-button" onClick={handleLogOut}>
                  <LogOut size={24} className="logout-icon" /> Cerrar sesión
                </button>
              </div>
            ) : (
              <Link to="/login" className="nav-link primary-button">
                Iniciar sesión
              </Link>
            )}
          </div>
        </nav>
      </header>

      {showUploadModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-close">
              <button onClick={closeModal}>x</button>
            </div>
            <div className="modal-header">
              <h3>Subir imagen de avatar</h3>
            </div>

            <div className="modal-body">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                title="Upload your avatar image"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Vista previa"
                  className="preview-image"
                />
              )}
            </div>
            <div className="modal-footer">
              <button onClick={confirmUpload} className="confirm-button">
                Confirmar
              </button>
              <button onClick={closeModal} className="cancel-button">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
