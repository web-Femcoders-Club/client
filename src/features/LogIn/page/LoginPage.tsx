import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
                userEmail: email, 
                userPassword: password
            });
            console.log('Login successful:', response.data);
            if (response.data.role === 'admin') {
                navigate('/admin', { state: { userName: response.data.name } });
            } else {
                navigate('/welcome', { state: { userName: response.data.name } });
            }
        } catch (error) {
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    return (
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <img src="/FemCodersClubLogo.png" alt="FemCoders Club Logo" style={{ display: 'block', margin: '0 auto 1rem', width: '100px' }} />
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="email" style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#821ad4' }}>Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '0.5rem', marginBottom: '1rem', border: '1px solid #4737bb', borderRadius: '5px' }}
                    required
                />
                <label htmlFor="password" style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#821ad4' }}>Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '0.5rem', marginBottom: '1rem', border: '1px solid #4737bb', borderRadius: '5px' }}
                    required
                />
                {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
                <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#4737bb', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Iniciar Sesión
                </button>
            </form>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <a href="/forgot-password" style={{ color: '#821ad4', textDecoration: 'none' }}>¿Olvidaste tu contraseña?</a>
                <br />
                <a href="/register" style={{ color: '#821ad4', textDecoration: 'none' }}>¿No tienes cuenta? Regístrate</a>
            </div>
        </div>
    );
};

export default LoginForm;






