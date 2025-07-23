import React from "react";
import { Outlet } from "react-router";
import { NavigationBar } from "../Navbar/NavigationBar";
import { Footer } from "../Footer/Footer";

export const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="bg-gray-50 flex-grow items-center justify-center font-sans">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
