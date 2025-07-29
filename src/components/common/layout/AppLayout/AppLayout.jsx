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

//min-h-screen bg-gray-50 flex flex-col items-center justify-between font-sans px-4 md:px-8 lg:px-12 overflow-x-hidden
