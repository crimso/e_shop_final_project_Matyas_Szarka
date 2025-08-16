import React from "react";
import { Outlet } from "react-router";


export const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <main className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <Outlet />
      </main>
    </div>
  );
};
