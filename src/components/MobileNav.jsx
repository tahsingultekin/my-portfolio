import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = ({ showSideBar, toggle }) => {
  return (
    <div
      className={`min900:flex min900:items-center min900:justify-center min900:bg-[#fff] min900:h-screen min900:w-full min900:fixed min900:text-center min900:top-0  min900:ease-out min900:duration-300 min900:z-[300] ${
        toggle ? "translate-x-0" : "-translate-x-full hidden"
      }`}
    >
      <span
        className="cursor-pointer text-[4rem] absolute right-[4rem] top-[2rem] hover:text-[#147efb] ease-in duration-200"
        onClick={showSideBar}
      >
        <AiOutlineClose />
      </span>

      <ul className="flex flex-col text-[3rem] gap-[4rem]">
        <li>
          <a
            href="#home"
            className="text-[#000] font-semibold hover:text-[#147efb] ease-in duration-200"
            onClick={showSideBar}
          >
            Home
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#about"
            className="text-[#000] font-semibold hover:text-[#147efb] ease-in duration-200"
            onClick={showSideBar}
          >
            About
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#projects"
            className="text-[#000] font-semibold hover:text-[#147efb] ease-in duration-200"
            onClick={showSideBar}
          >
            Projects
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#contact"
            className="text-[#000] font-semibold hover:text-[#147efb] ease-in duration-200"
            onClick={showSideBar}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
