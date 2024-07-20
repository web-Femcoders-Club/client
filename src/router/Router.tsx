import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import CookiePolicyModal from '../components/Footer/Modals/Cookies';
import PrivacyPolicyModal from '../components/Footer/Modals/Privacidad';
import Layout from '../components/Layout/Layout';
import Stats from '../components/Stats';
import { ModalContext } from '../context/ModalContext';
import AboutPage from "../features/About/page/AboutPage";
import BlogPage from '../features/Blog/page/BlogPage';
import ContactPage from "../features/Contact/page/ContactPage";
import EventsPage from "../features/Events/page/EventsPage";
import HomePage from '../features/Home/page/HomePage';
import TeamPage from '../features/Team/page/TeamPage';
import useIdleTimer from '../hooks/useIdleTimer';
import logPageView from '../utils/logPageView';
import FaqModal from '../components/Footer/Modals/FaqModal';
// import LoginPage from '../features/LogIn/page/LoginPage';
import WelcomePage from '../features/Welcome/page/WelcomePage';

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
                <Route path="/blog/*" element={<Layout><BlogPage /></Layout>} />
                <Route path="/stats" element={<Layout><Stats /></Layout>} />
                <Route path="/equipo" element={<Layout><TeamPage /></Layout>} />
                {/* <Route path="/login" element={<Layout><LoginPage /></Layout>} /> */}
                <Route path="/welcome" element={<Layout><WelcomePage /></Layout>} />
            </Routes>
            {modalType === 'cookiePolicy' && <CookiePolicyModal closeModal={closeModal} />}
            {modalType === 'privacyPolicy' && <PrivacyPolicyModal closeModal={closeModal} />}
            {modalType === "faq" && <FaqModal closeModal={closeModal} />}
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

