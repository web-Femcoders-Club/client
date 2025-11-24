import React, { useState, useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(() => {
        return localStorage.getItem('cookieBannerDismissed') !== 'true';
    });

    const { openModal } = useContext(ModalContext);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('cookieBannerDismissed', 'true');
    };

    const handlePolicyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        openModal('cookiePolicy');
    };

    if (!isVisible) return null;

    return (
        <div 
            style={bannerStyle}
            role="banner"
            aria-label="Información sobre cookies"
        >
            <div style={contentWrapperStyle}>
                <p style={textStyle}>
                    🍪 Este sitio utiliza únicamente <strong>cookies técnicas necesarias</strong> para 
                    su correcto funcionamiento. <br /><strong>No realizamos seguimiento</strong> ni usamos 
                    cookies de análisis o publicidad.{" "}
                    <a 
                        href="#" 
                        onClick={handlePolicyClick} 
                        style={linkStyle}
                        aria-label="Ver política de cookies completa"
                    >
                        Más información
                    </a>
                </p>
                <button 
                    onClick={handleDismiss} 
                    style={dismissButtonStyle}
                    aria-label="Cerrar aviso de cookies"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#bb3f28'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ea4f33'}
                >
                    Entendido
                </button>
            </div>
        </div>
    );
};

const bannerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    background: 'linear-gradient(135deg, #4737bb 0%, #6d2c95 100%)',
    color: '#fff',
    padding: '16px 20px',
    zIndex: 1000,
    boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.15)',
    animation: 'slideUp 0.5s ease-out',
};

const contentWrapperStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
};

const textStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    fontWeight: 'normal',
    margin: '0',
    lineHeight: '1.6',
    flex: '1',
    minWidth: '280px',
};

const linkStyle: React.CSSProperties = {
    color: '#ea4f33',
    textDecoration: 'underline',
    fontWeight: 'bold',
    cursor: 'pointer',
};

const dismissButtonStyle: React.CSSProperties = {
    padding: '10px 24px',
    backgroundColor: '#ea4f33',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(234, 79, 51, 0.3)',
};

export default CookieBanner;





