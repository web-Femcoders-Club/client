import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const useIdleTimer = (timeout: number) => {
    const navigate = useNavigate();
    const idleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const resetTimer = () => {
            if (idleTimeout.current) {
                clearTimeout(idleTimeout.current);
            }
            idleTimeout.current = setTimeout(() => {
                navigate('/');
            }, timeout);
        };

        const handleActivity = () => resetTimer();

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keypress', handleActivity);

        resetTimer();

        return () => {
            if (idleTimeout.current) {
                clearTimeout(idleTimeout.current);
            }
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keypress', handleActivity);
        };
    }, [timeout, navigate]);

    return null;
};

export default useIdleTimer;

