import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import student from "../assets/student_form.png";

const Project_3 = () => {
  return (
    <div className="review bg-[#fff] rounded-[2rem] shadow-lg flex justify-evenly gap-[8rem] h-[50rem] p-[2rem] md1020:flex-col md1020:gap-[1.75rem] md1020:h-[85rem] md1020:my-0 md1020:mx-auto md1020:w-fit min400:w-full">
      <div className="review-img bg-[hsla(0,0%,46%,.2] rounded-[2rem] shadow-md h-auto overflow-hidden w-[53rem] min650:w-full">
        <img
          src={student}
          alt="student form"
          className="bg-center bg-cover h-full md1020:h-auto"
        />
      </div>
      <div className="review-text flex flex-col h-auto justify-center text-center w-[45rem] md1020:my-0 md1020:mx-auto min400:w-full">
        <h3 className="text-[#2d2e32] text-[2.25rem] mb-[2rem] relative uppercase font-bold">
          Student Form 🧑‍🎓
        </h3>
        <p className="text-[#767676] text-[2.25rem] font-normal  text-center min460:text-[2rem]">
          You can add, delete, and search for students using the student form
          application. GET, PUT, POST, and DELETE API requests are performed
          using the "dummyjson" API. Additionally, API requests to the
          "dummyjson" API are used for pagination through Limit and Skip, as
          well as for searching operations.This project is NOT RESPONSIVE.
        </p>
        <div className="stack flex gap-[3rem] justify-center mt-[1rem]">
          <p className="text-[#2d2e32] text-[2.25rem] font-semibold text-center bg-[#fff] shadow-md  py-[1rem] px-[1.3rem] cursor-pointer">
            React
          </p>
          <p className="text-[#2d2e32] text-[2.25rem] font-semibold text-center bg-[#fff] shadow-md  py-[1rem] px-[1.3rem] cursor-pointer">
            Redux
          </p>
          <p className="text-[#2d2e32] text-[2.25rem] font-semibold text-center bg-[#fff] shadow-md  py-[1rem] px-[1.3rem] cursor-pointer">
            Tailwind
          </p>
        </div>
        <div className="links flex items-center gap-[1rem] justify-evenly mt-[3rem]">
          <a
            href="https://github.com/tahsingultekin/student-form-with-redux-toolkit"
            target="_blank"
            className="text-[#2d2e32] text-[2.25rem] font-medium gap-[1rem] flex items-center hover:text-[#147efb] ease-in duration-200 min460:text-[2rem]"
          >
            Code <FaGithub size={33} />
          </a>
          <a
            href="https://student-form-app.netlify.app/"
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

export default Project_3;
