import React from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";


import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export const Footer = () => {
  return (
    <footer className="w-full bg-white text-indigo-600 font-medium py-8 px-4 md:px-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm mb-4 md:mb-0">© ACME. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4 md:mb-0">
          <NavLink
            className="text-sm hover:text-indigo-800 transition-colors"
            to=""
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className="text-sm hover:text-indigo-800 transition-colors"
            to=""
          >
            Terms of Service
          </NavLink>
          <NavLink
            className="text-sm hover:text-indigo-800 transition-colors"
            to=""
          >
            Contact Us
          </NavLink>
        </nav>
        <section className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" />
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-twitter"
              size="xl"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            />
          </a>
        </section>
      </div>
    </footer>
  );
};
