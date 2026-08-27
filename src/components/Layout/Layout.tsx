import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CookieBanner from "../CookieBanner";
import BackToTop from "../ui/BackToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <BackToTop />
    <CookieBanner />
  </>
);

export default Layout;


