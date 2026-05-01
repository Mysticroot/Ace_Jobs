import React from "react";
import { Outlet } from "react-router";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
