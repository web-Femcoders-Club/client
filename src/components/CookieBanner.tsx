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

    const handlePolicyClick = () => {
        openModal('cookiePolicy');
    };

    if (!isVisible) return null;

    /*
      `role="banner"` es la cabecera del sitio, y ya la tiene el <header>.
      Declarado aquí la página acaba con dos, y el lector de pantalla ofrece dos
      "banner" idénticos en el índice de regiones sin decir cuál es la cabecera y
      cuál el aviso. Una región con nombre propio dice lo que es.
    */
    return (
        <div
            style={bannerStyle}
            role="region"
            aria-label="Aviso sobre cookies"
        >
            <div style={contentWrapperStyle}>
                <p style={textStyle}>
                    🍪 Este sitio utiliza únicamente <strong>cookies técnicas necesarias</strong> para 
                    su correcto funcionamiento. <br /><strong>No realizamos seguimiento</strong> ni usamos 
                    cookies de análisis o publicidad.{" "}
                    {/* No lleva a otra página: abre una ventana sobre esta. */}
                    <button
                        type="button"
                        onClick={handlePolicyClick}
                        style={linkStyle}
                    >
                        Consulta la política de cookies completa
                    </button>
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

/*
  Era #ea4f33 sobre el degradado morado del aviso: 2,3:1 de contraste, por debajo
  incluso del 4,5:1 de AA. En blanco sube a 8,3:1 en el extremo más claro del
  degradado, que cumple AAA (7:1) en todo el ancho.

  Sigue en negrita y subrayado, así que no depende del color para distinguirse
  del texto de alrededor. El resto son los apagados de rigor del <button>, que
  antes era un <a>.
*/
const linkStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    padding: '0',
    // Por separado y no con el atajo `font`, que al ir después borraría el
    // `fontWeight` de abajo: en un objeto de estilos gana la última clave.
    fontFamily: 'inherit',
    fontSize: 'inherit',
    color: '#ffffff',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
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





