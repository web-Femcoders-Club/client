import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import CookiePolicyModal from "../components/Footer/Modals/Cookies";
import FaqModal from "../components/Footer/Modals/FaqModal";
import PrivacyPolicyModal from "../components/Footer/Modals/Privacidad";
import Layout from "../components/Layout/Layout";
import Stats from "../components/Stats";
import { ModalContext } from "../context/ModalContext";
import AboutPage from "../features/About/page/AboutPage";
import ManageComments from "../features/Admin/components/comment/ManageComments";
import Admin from "../features/Admin/page/Admin";
import BlogPage from "../features/Blog/page/BlogPage";
import Noticia2 from "../features/Blog/posts/Noticia2";
import Noticia3 from "../features/Blog/posts/Noticia3";
import ContactPage from "../features/Contact/page/ContactPage";
import EventsPage from "../features/Events/page/EventsPage";
import ForgotPasswordForm from "../features/ForgotPassword/components/ForgotPasswordForm";
import ResetPasswordForm from "../features/ForgotPassword/page/ResetPasswordForm";
import HomePage from "../features/Home/page/HomePage";
import LogIn from "../features/LogIn/page/LoginPage";
import TeamPage from "../features/Team/page/TeamPage";
import RegisterForm from "../features/User/page/RegisterForm";
import WelcomePage from "../features/Welcome/page/WelcomePage";
import useIdleTimer from "../hooks/useIdleTimer";
import logPageView from "../utils/logPageView";
import Aniversario from "../features/Blog/posts/Aniversario";

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
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/contacto"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/eventos"
          element={
            <Layout>
              <EventsPage />
            </Layout>
          }
        />
        <Route
          path="/sobrenosotras"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/blog/*"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />

        <Route
          path="/stats"
          element={
            <Layout>
              <Stats />
            </Layout>
          }
        />
        <Route
          path="/equipo"
          element={
            <Layout>
              <TeamPage />
            </Layout>
          }
        />
        <Route
          path="/noticias/Aniversario"
          element={
            <Layout>
              <Aniversario />
            </Layout>
          }
        />
        <Route
          path="/noticias/2"
          element={
            <Layout>
              <Noticia2 />
            </Layout>
          }
        />
        <Route
          path="/noticias/3"
          element={
            <Layout>
              <Noticia3 />
            </Layout>
          }
        />
        <Route
          path="/admin/comments"
          element={
            <Layout>
              <ManageComments />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LogIn />
            </Layout>
          }
        />
        <Route
          path="/admin/*"
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        />
        <Route
          path="/register/*"
          element={
            <Layout>
              <RegisterForm />
            </Layout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Layout>
              <ForgotPasswordForm />
            </Layout>
          }
        />

        <Route
          path="/reset-password"
          element={
            <Layout>
              <ResetPasswordForm />
            </Layout>
          }
        />

        <Route
          path="/welcome"
          element={
            <Layout>
              <WelcomePage />
            </Layout>
          }
        />
      </Routes>
      {modalType === "cookiePolicy" && (
        <CookiePolicyModal closeModal={closeModal} />
      )}
      {modalType === "privacyPolicy" && (
        <PrivacyPolicyModal closeModal={closeModal} />
      )}
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
