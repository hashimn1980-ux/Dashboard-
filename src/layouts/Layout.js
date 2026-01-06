import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-background-dark text-white min-h-screen font-display">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
