import React from 'react';
import { useLocation } from 'react-router-dom';

interface LocationState {
    userName: string;
}

const WelcomePage: React.FC = () => {
    const location = useLocation();
    const state = location.state as LocationState;
    const { userName } = state || { userName: 'Usuario' };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
            <h1>Hola 👋 {userName}, <br />Bienvenida a tu comunidad!</h1>
        </div>
    );
};

export default WelcomePage;



