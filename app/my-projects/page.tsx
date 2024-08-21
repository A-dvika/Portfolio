"use client";

import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';
import React from 'react';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover"
    >
      <div className="text-center mt-16 mb-8 px-4">
        <h1 className="font-semibold text-white text-[36px] md:text-[50px]">
          Innovations{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
            {" "}
            &{" "}
          </span>
          Creations
        </h1>
        <p className="text-gray-400 text-[16px] md:text-[20px] mt-2">
          Dive into my projects and discover the technology behind the magic!
        </p>
      </div>

      <div
        className="scrollable-container w-full max-w-[90%] h-full max-h-[80%] overflow-y-auto p-4 pt-8 flex flex-col items-center"
      >
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              imageFront={project.srcFront}
              imageBack={project.srcBack}
              github={project.github} // Pass the GitHub link to the ProjectCard component
            />
          ))}
        </div>
        {/* Add extra space at the bottom for additional scrolling */}
        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default Page;
