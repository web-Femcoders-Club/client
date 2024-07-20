import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FemCodersClubLogo from '/negativeLogo.png';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={FemCodersClubLogo} className="logo" alt="Fem Coders Club Logo" />
        </Link>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/sobrenosotras" className="nav-link">Sobre nosotras</Link>
          </li>
          <li>
            <Link to="/equipo" className="nav-link">Equipo</Link>
          </li>
          <li>
            <Link to="/eventos" className="nav-link">Eventos</Link>
          </li>
          <li>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
          <li className="blog">
          <Link to="/blog" className="nav-link" style={{ color: '#ea4f33' }}>Blog</Link>
          </li>
        </ul>
        <div className={`auth-buttons ${menuOpen ? 'open' : ''}`}>
          {/* <Link to="/login" className="nav-link primary-button">Iniciar sesión</Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

