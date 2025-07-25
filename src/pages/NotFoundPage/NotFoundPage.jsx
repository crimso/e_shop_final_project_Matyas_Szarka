import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center p-4">
      <FontAwesomeIcon
        className="text-red-800 mb-4"
        icon="fa-solid fa-circle-info"
        size="3x"
      />
      <h1 className="font-bold text-4xl"> 404...Oops page not found...</h1>
      <p className="text-lg text-gray-600 mb-8">
        Redirecting to the homepage in 5 seconds...
      </p>
      <NavLink to="/" className="text-blue-600 hover:underline">
        Go to homepage Now
      </NavLink>
    </div>
  );
};
