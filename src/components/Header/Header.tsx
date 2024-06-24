import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FemCodersClubLogo from '../../../public/negativeLogo.png';
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
          <li className="faqs-link">
            <Link to="/faqs" className="nav-link">FAQs</Link>
          </li>
        </ul>
        <div className={`auth-buttons ${menuOpen ? 'open' : ''}`}>
          <Link to="/login">
            <button className="secondary-button">Iniciar sesión</button>
          </Link>
          <Link to="/signup">
            <button className="primary-button">Registrarme</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;





