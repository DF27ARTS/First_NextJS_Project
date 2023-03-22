import React from "react";
import Footer from "../footer/footer-page";
import Header from "../header/header-page";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
