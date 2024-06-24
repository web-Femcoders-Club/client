import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer /> {}
  </>
);

export default Layout;

