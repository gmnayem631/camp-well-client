import React from "react";
import Navbar from "../pages/Home/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/Home/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <header className="bg-[#fffaf0]">
        <Navbar className=""></Navbar>
      </header>
      <main className="my-10">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
