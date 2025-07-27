import React from "react";
import Navbar from "../pages/Home/Shared/Navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <header className="shadow-sm bg-base-100 ">
        <Navbar className="max-w-7xl"></Navbar>
      </header>
      <main className="my-10">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
