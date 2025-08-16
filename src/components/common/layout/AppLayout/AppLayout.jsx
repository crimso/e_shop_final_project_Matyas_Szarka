import React from "react";
import { Outlet } from "react-router";
import { NavigationBar } from "../Navbar/NavigationBar";
import { Footer } from "../Footer/Footer";

export const AppLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavigationBar />
      <main className="flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

