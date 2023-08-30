import React from "react";
import Project from "../components/Project";
import Project_3 from "../components/Project_3";
import Project_2 from "../components/Project_2";

const Projects = () => {
  return (
    <section
      id="projects"
      className="Projects bg-[#f9f9f9] py-[15rem] px-0 md1020:py-[8rem] md1020:px-0"
    >
      <div className="container my-0 mx-auto max-w-[125rem] py-0 px-[4rem] min460:py-0 min460:px-[1.7rem] ">
        <div className="project-content flex flex-col min600:text-center">
          <p className="text-[#147efb] text-[2.25rem] font-bold mb-1rem uppercase">
            portfolio
          </p>
          <h3 className="text-[#2d2e32] text-[3rem] mb-[6rem] font-bold">
            Each project is a unique piece of development 🧩
          </h3>
          <div className="projects-grid grid grid-cols-1 auto-rows-auto h-auto w-full gap-[5rem] ">
            <Project />
            <Project_2 />
            <Project_3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
