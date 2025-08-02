import React, { Suspense, lazy, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import CookiePolicyModal from "../components/Footer/Modals/Cookies";
import FaqModal from "../components/Footer/Modals/FaqModal";
import PrivacyPolicyModal from "../components/Footer/Modals/Privacidad";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader";
import { ModalContext } from "../context/ModalContext";
import AboutPage from "../features/About/page/AboutPage";
import CssGrid from "../features/Blog/posts/recursos/css/CssGrid";
import ElementosHTMLClave from "../features/Blog/posts/recursos/html/ElementosHTMLClave";
import HtmlSemantico from "../features/Blog/posts/recursos/html/HTMLSemanticoYLayout";
import EventsPage from "../features/Events/page/EventsPage";
import useIdleTimer from "../hooks/useIdleTimer";
import logPageView from "../utils/logPageView";
const HomePage = lazy(() => import("../features/Home/page/HomePage"));
const ContactPage = lazy(() => import("../features/Contact/page/ContactPage"));

const BlogPage = lazy(() => import("../features/Blog/page/BlogPage"));
const Aniversario = lazy(
  () => import("../features/Blog/posts/noticias/Aniversario")
);
const IntroduccionHTML = lazy(
  () => import("../features/Blog/posts/recursos/html/IntroduccionHTML")
);
const IntroduccionCSS = lazy(
  () => import("../features/Blog/posts/recursos/css/IntroduccionCss")
);
const Stats = lazy(() => import("../components/Stats"));
const TeamPage = lazy(() => import("../features/Team/page/TeamPage"));
const LogIn = lazy(() => import("../features/LogIn/page/LoginPage"));
const ManageComments = lazy(
  () => import("../features/Admin/components/comment/ManageComments")
);
const Admin = lazy(() => import("../features/Admin/page/Admin"));
const RegisterForm = lazy(() => import("../features/User/page/RegisterForm"));
const ForgotPasswordForm = lazy(
  () => import("../features/ForgotPassword/components/ForgotPasswordForm")
);
const ResetPasswordForm = lazy(
  () => import("../features/ForgotPassword/page/ResetPasswordForm")
);
const FormAndTablePost = lazy(
  () => import("../features/Blog/posts/recursos/html/FormandTablePost")
);
const APIsHtml = lazy(
  () => import("../features/Blog/posts/recursos/html/ApisHtml")
);
const HtmlAvanzado = lazy(
  () => import("../features/Blog/posts/recursos/html/HtmlAvanzado")
);
const WelcomePage = lazy(() => import("../features/Welcome/page/WelcomePage"));
const Bienvenido2025 = lazy(
  () => import("../features/Blog/posts/noticias/Bienvenido2025")
);
const CSSSelectors = lazy(
  () => import("../features/Blog/posts/recursos/css/CSSSelectors")
);

const PersonalizaPerfil = lazy(
  () => import("../features/PersonalizaPerfil/page/PersonalizaPerfil")
);
const FrameworksIntegration = lazy(
  () => import("../features/Blog/posts/recursos/html/FrameworksIntegration")
);
const MentorshipPage = lazy(
  () => import("../features/Mentorship/page/Mentorship")
);
const SendDocumentation = lazy(
  () => import("../features/SendingDocument/page/SendDocumentation")
);
const FeaturedPresentation = lazy(
  () => import("../features/FeaturedPresentations/page/FeaturedPresentations")
);
const ManageAchievements = lazy(
  () => import("../features/Achievements/page/ManageAchievements")
);
const FelicitacionNavidad = lazy(
  () => import("../features/Blog/posts/noticias/FelicitacionNavidad")
);
const JobOffers = lazy(() => import("../features/JobOffers/page/JobOffers"));
const BoxModel = lazy(
  () => import("../features/Blog/posts/recursos/css/BoxModels")
);

const Flexbox = lazy(
  () => import("../features/Blog/posts/recursos/css/Flexbox")
);

const ComunityHub = lazy(
  () => import("../features/CommunityHub/page/ComunityHub")
);
const ReplicaNike = lazy(
  () => import("../features/Blog/posts/recursos/react/ReplicaNike")
);
const CssGridFlexbox = lazy(
  () => import("../features/Blog/posts/recursos/css/CssGridFlexbox")
);
const TransicionesyTransformaciones = lazy(
  () =>
    import("../features/Blog/posts/recursos/css/TransicionesyTransformaciones")
);
const DataConnectEvento = lazy(
  () => import("../features/Blog/posts/noticias/DataConnectEvento")
);
const EntrevistaNadiaTesting = lazy(
  () => import("../features/Blog/posts/noticias/EntrevistaNadiaTesting")
);
const AnimacionesCSS = lazy(
  () => import("../features/Blog/posts/recursos/css/AnimacionesCSS")
);
const ResponsiveDesign = lazy(
  () => import("../features/Blog/posts/recursos/css/ResponsiveDesign")
);
const AccesibilidadCSS = lazy(
  () => import("../features/Blog/posts/recursos/css/AccesibilidadCSS")
);
const SassNextLevel = lazy(
  () => import("../features/Blog/posts/recursos/css/SassNextLevel")
);
const CssVariablesSass = lazy(
  () => import("../features/Blog/posts/recursos/css/CssVariablesSass")
);
const CssPerformancePost = lazy(
  () => import("../features/Blog/posts/recursos/css/CssPerformancePost")
);

const RouterComponent: React.FC = () => {
  const location = useLocation();
  const { modalType, closeModal } = useContext(ModalContext);

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  useIdleTimer(300000);

  return (
    <>
      <Suspense fallback={<Loader />}>
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
            path="/femcoders-quienes-somos"
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
            path="/ofertas-de-trabajo"
            element={
              <Layout>
                <JobOffers />
              </Layout>
            }
          />
          <Route
            path="/recursos/css/box-model"
            element={
              <Layout>
                <BoxModel />
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
            path="/noticias/DataConnectEvento"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <DataConnectEvento />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/html/introduccion-html"
            element={
              <Layout>
                <IntroduccionHTML />
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
            path="/recursos/html/elementos-html-clave"
            element={
              <Layout>
                <ElementosHTMLClave />
              </Layout>
            }
          />
          <Route
            path="/recursos/html/html-semantico"
            element={
              <Layout>
                <HtmlSemantico />
              </Layout>
            }
          />
          <Route
            path="/recursos/css/introduccion-css"
            element={
              <Layout>
                <IntroduccionCSS />
              </Layout>
            }
          />
          <Route
            path="/recursos/html/formularios-y-tablas"
            element={
              <Layout>
                <FormAndTablePost />
              </Layout>
            }
          />
          <Route
            path="/recursos/html/apis-html"
            element={
              <Layout>
                <APIsHtml />
              </Layout>
            }
          />
          <Route
            path="/recursos/html/html-seo-accesibilidad"
            element={
              <Layout>
                <HtmlAvanzado />
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
          <Route
            path="/personaliza-perfil"
            element={
              <Layout>
                <PersonalizaPerfil />
              </Layout>
            }
          />
          <Route
            path="/mentoria"
            element={
              <Layout>
                <MentorshipPage />
              </Layout>
            }
          />
          <Route
            path="/enviar-documentacion"
            element={
              <Layout>
                <SendDocumentation />
              </Layout>
            }
          />
          <Route
            path="/recursos-comunidad-femcoders-club"
            element={
              <Layout>
                <ComunityHub />
              </Layout>
            }
          />
          <Route
            path="/admin/achievements"
            element={
              <Layout>
                <ManageAchievements />
              </Layout>
            }
          />
          <Route
            path="/recursos/html/integracion-frameworks"
            element={
              <Layout>
                <FrameworksIntegration />
              </Layout>
            }
          />
          <Route
            path="/presentaciones-destacadas"
            element={
              <Layout>
                <FeaturedPresentation />
              </Layout>
            }
          />
          <Route
            path="/noticias/FelicitacionNavidad"
            element={
              <Layout>
                <FelicitacionNavidad />
              </Layout>
            }
          />
          <Route
            path="/recursos/css/selectores-css"
            element={
              <Layout>
                <CSSSelectors />
              </Layout>
            }
          />

          <Route
            path="/noticias/Bienvenido2025"
            element={
              <Layout>
                <Bienvenido2025 />
              </Layout>
            }
          />
          <Route
            path="/recursos/css/flexbox"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <Flexbox />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/react/nike-store-replica"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <ReplicaNike />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/css-grid"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <CssGrid />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/css-grid-flexbox"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <CssGridFlexbox />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/transiciones-transformaciones"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <TransicionesyTransformaciones />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/noticias/EntrevistaNadiaTesting"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <EntrevistaNadiaTesting />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/animaciones-css"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <AnimacionesCSS />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/responsive-design"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <ResponsiveDesign />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/accesibilidad-css"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <AccesibilidadCSS />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/sass-next-level"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <SassNextLevel />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/css-variables-vs-sass"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <CssVariablesSass />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/recursos/css/css-performance-optimization"
            element={
              <Layout>
                <Suspense fallback={<Loader />}>
                  <CssPerformancePost />
                </Suspense>
              </Layout>
            }
          />
        </Routes>
      </Suspense>

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
