import React from "react";
import Footer from "./Footer/Footer";
import CustomNavbar from "./Navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <CustomNavbar />
      <div style={{ textAlign: "center" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
