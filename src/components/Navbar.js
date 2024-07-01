import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-col  md:flex-row items-center">
        <a className="title-font font-large no-underline ">
          <a
            href="#about"
            className="grey ml-3 no-underline text-white text-2xl"
          >
            Arti Singh
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#education"
            className="mr-5 mb-1 grey no-underline hover:text-white "
          >
            Education
          </a>
          <a
            href="#projects"
            className="mr-5 mb-1 grey no-underline hover:text-white"
          >
            Past Work
          </a>
          <a
            href="#skills"
            className=" mr-5 mb-1 grey no-underline hover:text-white"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className=" mr-5 mb-1 grey no-underline hover:text-white"
          >
            Testimonials
          </a>
        </nav>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex no-underline text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Work With Me
          </a>
        </div>
      </div>
    </header>
  );
}
