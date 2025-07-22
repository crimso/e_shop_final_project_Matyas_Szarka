import React from "react";
import { Outlet } from "react-router";
import { NavigationBar } from "../Navbar/NavigationBar";
import { Footer } from "../Footer/Footer";

export const AppLayout = () => {
  return (
    <div className="">
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
