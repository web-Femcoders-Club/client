import React, { useState, useContext, useEffect } from 'react';
import { ModalContext } from '../context/ModalContext';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
        const cookiesRejected = localStorage.getItem('cookiesRejected') === 'true';
        console.log('Initial check - cookiesAccepted:', cookiesAccepted, 'cookiesRejected:', cookiesRejected);
        return !cookiesAccepted && !cookiesRejected;
    });

    const { openModal } = useContext(ModalContext);

    const handleAccept = () => {
        console.log('Cookies accepted');
        setIsVisible(false);
        localStorage.setItem('cookiesAccepted', 'true');
    };

    const handleReject = () => {
        console.log('Cookies rejected');
        setIsVisible(false);
        localStorage.setItem('cookiesRejected', 'true');
    };

    const handlePolicyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        console.log('Policy link clicked');
        openModal('cookiePolicy'); 
    };

    useEffect(() => {
        console.log('Banner visibility:', isVisible);
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div style={bannerStyle}>
            <h4>
                Usamos cookies para mejorar tu experiencia en nuestro sitio. Al usar nuestro sitio, aceptas las cookies. Lee nuestra <a href="#" onClick={handlePolicyClick} style={linkStyle}>Política de Cookies</a>.
            </h4>
            <div>
                <button onClick={handleAccept} style={acceptButtonStyle}>Aceptar</button>
                <button onClick={handleReject} style={rejectButtonStyle}>Rechazar</button>
            </div>
        </div>
    );
};

const bannerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    background: 'linear-gradient(to right, #6d2c95, #4737bb)',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    zIndex: 1000,
};

const linkStyle: React.CSSProperties = {
    color: '#ea4f33',
    textDecoration: 'underline',
};

const acceptButtonStyle: React.CSSProperties = {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#821ad4',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
};

const rejectButtonStyle: React.CSSProperties = {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#ea4f33',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
};

export default CookieBanner;






