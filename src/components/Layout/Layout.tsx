import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CookieBanner from "../CookieBanner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <CookieBanner />
  </>
);

export default Layout;


