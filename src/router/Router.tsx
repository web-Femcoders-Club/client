import React, { useContext, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import HomePage from '../features/Home/page/HomePage';
import ContactPage from "../features/Contact/page/ContactPage";
import AboutPage from "../features/About/page/AboutPage";
import EventsPage from "../features/Events/page/EventsPage";
import FaqsPage from "../features/Faqs/page/FaqsPage";
import Stats from '../components/Stats';
import Layout from '../components/Layout/Layout';
import useIdleTimer from '../hooks/useIdleTimer';
import logPageView from '../utils/logPageView';
import { ModalContext } from '../context/ModalContext';
import CookiePolicyModal from '../components/Footer/Modals/Cookies';
import PrivacyPolicyModal from '../components/Footer/Modals/Privacidad';
import TeamPage from '../features/Team/page/TeamPage'; 

const RouterComponent: React.FC = () => {
    const location = useLocation();
    const { modalType, closeModal } = useContext(ModalContext);

    useEffect(() => {
        logPageView(location.pathname);
    }, [location]);

    useIdleTimer(300000); 

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/contacto" element={<Layout><ContactPage /></Layout>} />
                <Route path="/eventos" element={<Layout><EventsPage /></Layout>} />
                <Route path="/sobrenosotras" element={<Layout><AboutPage /></Layout>} />
                <Route path="/faqs" element={<Layout><FaqsPage /></Layout>} />
                <Route path="/stats" element={<Layout><Stats /></Layout>} />
                <Route path="/equipo" element={<Layout><TeamPage /></Layout>} />
            </Routes>
            {modalType === 'cookiePolicy' && <CookiePolicyModal closeModal={closeModal} />}
            {modalType === 'privacyPolicy' && <PrivacyPolicyModal closeModal={closeModal} />}
        </>
    );
};

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <RouterComponent />
        </BrowserRouter>
    );
};

export default Router;