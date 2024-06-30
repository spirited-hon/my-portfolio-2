import React from "react";
import { education } from "../data";

export default function Education() {
    return (
      <section id="education">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
       <div classsName= "" ><a href="#education" className="font-extrabold text-white font-sans text-2xl ml-3 text-xl">
                Education
              </a>
              </div>
          {education.map((education) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-4 rounded">
               
              {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
              <div className="container ">
  

                  <p className="leading-relaxed mb-6  text-white display:inline-block ">
                    <img
                      alt="Master"
                      src={education.image}
    
                      className="w-12 h-16 img-thumbnail rounded-full inline flex-shrink-0 object-cover object-center mr-2"
                    />
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

          
        </div>
      </section>
    );
}