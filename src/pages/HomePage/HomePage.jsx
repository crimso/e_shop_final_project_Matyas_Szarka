import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white rounded-lg shadow-xl m-4 md:m-8 lg:m-12 flex-grow">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left p-4">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Your Vision, Our Expertise
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl mx-auto lg:mx-0">
                Crafting innovative solutions that drive success. Let's build
                something amazing together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                to="/get-started" // Example path
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
                to="/learn-more" // Example path
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex justify-center p-4">
            <img
              src="https://placehold.co/600x400/E0E7FF/4338CA?text=Hero+Image" // Placeholder image
              alt="Hero Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last border border-gray-200 shadow-md"
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if fallback also fails
                e.target.src =
                  "https://placehold.co/600x400/E0E7FF/4338CA?text=Image+Not+Found"; // Fallback image
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
