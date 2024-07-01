import React from "react";
import { education } from "../data";
import { experience } from "../data";
export default function Education() {
  return (
    <section
      id="education"
      className="container mx-auto flex px-50 py-20 md:flex-row flex-col items-center"
    >
      <div classsName="p-4 md:w-2/3 w-full">
        <a
          href="#education"
          className="font-extraboldtext-white no-underline  text-white    font-sans text-2xl  text-xl"
        >
          Education
        </a>
      </div>
      <div className="container mx-auto flex px-50 py-20 md:flex-row flex-col items-center">
        {education.map((education) => (
          <div className="p-4 md:w-2/3 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-4 rounded">
              {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
              <div className="container ">
                <img
                  alt="Master"
                  src={education.image}
                  className="w-12 h-16 img-thumbnail rounded-full inline flex-shrink-0 object-cover object-center mr-2"
                />
                <p className=" mb-6  text-white inline ">
                  {" "}
                  {education.university}
                </p>
              </div>
              <div className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                  {education.degree}
                  <span className="title-font font-medium text-white">
                    {education.major}
                  </span>
                  <span className="text-gray-500 text-sm uppercase">
                    {education.duration}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="p-4 md:w-1/3 w-full">
          <div className="h-full bg-gray-800 bg-opacity-40 p-4 rounded">
            <div className="container ">
              <p className="leading-relaxed mb-6  text-white display:inline-block ">
                {experience.text}
              </p>
            </div>
            <div className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-white">
                  {experience.number} years.
                </span>
                <span className="text-gray-500 text-sm uppercase"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
