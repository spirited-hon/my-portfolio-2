import React from "react";
import { education } from "../data";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-left text-white">
            Hi, I'm Arti Singh.
            <br className="hidden sm:inline-block lg:inline-block text-left" />I
            build awesome websites.
          </h1>
          <p className="mb-8 leading-relaxed w-2/3 text-left">
            I have almost a decade of experience building websites. This website
            is built from scratch using React, JSON, Bootstrap, Node and other
            technologies.
          </p>

          <a
            href="https://github.com/spirited-hon/my-portfolio-2"
            className="inline-flex no-underline text-white bg-green-500 border-0 w-2/3 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            <button
              type="button"
              className="text-white bg-green-500 w-full border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Go to website's code.
            </button>
          </a>
        </div>
        <div className="flex justify- right lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Profile Pic"
            src="./blackNWhite.png"
          />
        </div>
      </div>
    </section>
  );
}
