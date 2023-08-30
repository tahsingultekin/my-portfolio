import React from "react";
import fitness from "../assets/fitness.png";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Project_2 = () => {
  return (
    <div className="review bg-[#fff] rounded-[2rem] shadow-lg flex justify-evenly gap-[8rem] h-[48rem] p-[2rem] md1020:flex-col md1020:gap-[1.75rem] md1020:h-[85rem] md1020:my-0 md1020:mx-auto md1020:w-fit min400:w-full">
      <div className="review-img bg-[hsla(0,0%,46%,.2] rounded-[2rem] shadow-md h-auto overflow-hidden w-[53rem] min650:w-full">
        <img
          src={fitness}
          alt="cars"
          className="bg-center bg-cover h-full md1020:h-auto"
        />
      </div>
      <div className="review-text flex flex-col h-auto justify-center text-center w-[30rem] md1020:my-0 md1020:mx-auto min400:w-full">
        <h3 className="text-[#2d2e32] text-[2.25rem] mb-[2rem] relative uppercase font-bold">
          Fitness 🏋️
        </h3>
        <p className="text-[#767676] text-[2.25rem] font-normal text-center min460:text-[2rem]">
          A fitness website serves as a holistic platform that provides users
          with an array of fitness-related details, class timetables, membership
          choices, and utilities tailored to assist individuals in attaining
          their fitness objectives.
        </p>
        <div className="stack flex gap-[3rem] justify-center mt-[1rem]">
          <p className="text-[#2d2e32] text-[2.25rem] font-semibold text-center bg-[#fff] shadow-md  py-[1rem] px-[1.3rem] cursor-pointer">
            React
          </p>
          <p className="text-[#2d2e32] text-[2.25rem] font-semibold text-center bg-[#fff] shadow-md  py-[1rem] px-[1.3rem] cursor-pointer">
            Tailwind
          </p>
        </div>
        <div className="links flex items-center gap-[1rem] justify-evenly mt-[3rem]">
          <a
            href="https://github.com/tahsingultekin/healthylife"
            target="_blank"
            className="text-[#2d2e32] text-[2.25rem] font-medium gap-[1rem] flex items-center hover:text-[#147efb] ease-in duration-200 min460:text-[2rem]"
          >
            Code <FaGithub size={33} />
          </a>
          <a
            href="https://fitness-club-site.netlify.app/"
            target="_blank"
            className="text-[#2d2e32] text-[2.25rem] font-medium gap-[1rem] flex items-center hover:text-[#147efb] ease-in duration-200 min460:text-[2rem]"
          >
            Live Demo <BsBoxArrowUpRight size={33} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project_2;
