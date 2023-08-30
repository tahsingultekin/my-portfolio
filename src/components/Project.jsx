import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import cars from "../assets/cars.png";

const Project = () => {
  return (
    <div className="review bg-[#fff] rounded-[2rem] shadow-lg flex justify-evenly gap-[8rem] h-[48rem] p-[2rem] md1020:flex-col md1020:gap-[1.75rem] md1020:h-[85rem] md1020:my-0 md1020:mx-auto md1020:w-fit min400:w-full">
      <div className="review-img bg-[hsla(0,0%,46%,.2] rounded-[2rem] shadow-md h-auto overflow-hidden w-[53rem] min650:w-full">
        <img
          src={cars}
          alt="cars"
          className="bg-center bg-cover h-full md1020:h-auto"
        />
      </div>
      <div className="review-text flex flex-col h-auto justify-center text-center w-[35rem] md1020:my-0 md1020:mx-auto min400:w-full">
        <h3 className="text-[#2d2e32] text-[2.25rem] mb-[2rem] relative uppercase font-bold">
          rent a car 🚗
        </h3>
        <p className="text-[#767676] text-[2.25rem] font-normal text-center min460:text-[2rem]">
          A vehicle rental website functions as a virtual hub enabling users to
          lease automobiles for personal or business purposes. The platform
          delivers an intuitive interface for exploring, contrasting, and
          securing car reservations.
        </p>
        <div className="stack flex gap-[3rem] justify-center mt-[1rem]">
          <p className="text-[#2d2e32] text-[2.25rem] font-semibold text-center bg-[#fff] shadow-md  py-[1rem] px-[1.3rem] cursor-pointer">
            React
          </p>
          <p className="text-[#2d2e32] text-[2.25rem] font-semibold text-center bg-[#fff] shadow-md  py-[1rem] px-[1.3rem] cursor-pointer">
            SCSS
          </p>
        </div>
        <div className="links flex items-center gap-[1rem] justify-evenly mt-[3rem]">
          <a
            href="https://github.com/tahsingultekin/vehicles/tree/main"
            target="_blank"
            className="text-[#2d2e32] text-[2.25rem] font-medium gap-[1rem] flex items-center hover:text-[#147efb] ease-in duration-200 min460:text-[2rem]"
          >
            Code <FaGithub size={33} />
          </a>
          <a
            href="https://vehicles-rent.netlify.app/"
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

export default Project;
