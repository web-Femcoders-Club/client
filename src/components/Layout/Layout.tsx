import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CookieBanner from "../CookieBanner";
import BackToTop from "../ui/BackToTop";
import SaltarAlContenido, {
  ID_CONTENIDO_PRINCIPAL,
} from "../a11y/SaltarAlContenido";
import { useEnfoqueDeRuta } from "../../hooks/useEnfoqueDeRuta";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const referenciaPrincipal = useEnfoqueDeRuta();

  return (
    <>
      {/* Primero en el DOM porque tiene que ser el primero en recibir el Tab. */}
      <SaltarAlContenido />
      <Header />
      <main
        id={ID_CONTENIDO_PRINCIPAL}
        ref={referenciaPrincipal}
        tabIndex={-1}
        aria-label="Contenido principal"
      >
        {children}
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </>
  );
};

export default Layout;
