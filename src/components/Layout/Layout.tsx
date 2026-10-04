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
      {/*
        Justo después del salto y no al final: con el teclado se llega a él
        y se cierra antes de recorrer toda la página. Aunque se ve abajo, es
        un aviso de una sola vez, así que anunciarlo primero es aceptable.
      */}
      <CookieBanner />
      <Header />
      <main
        id={ID_CONTENIDO_PRINCIPAL}
        ref={referenciaPrincipal}
        tabIndex={-1}
        aria-label="Contenido principal"
      >
        {children}
        {/*
          Al final del contenido y no después del pie: va en un ancla `sticky`,
          así flota abajo mientras se hace scroll y se para justo encima del
          pie en vez de taparlo.
        */}
        <BackToTop />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
