import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ showSideBar }) => {
  return (
    <nav
      id="navbar"
      className=" w-full h-[10rem] flex items-center justify-between py-[2.25rem] px-[3rem] font-semibold tracking-wider bg-[#fff] fixed top-0 left-0 z-50 shadow-lg min400:py-[2.5rem] min400:px-[3rem]"
    >
      <h3 id="name" className=" text-[3.25rem] cursor-pointer">
        <a href="#home">Tahsin.dev</a>
      </h3>
      <ul id="pages" className=" flex gap-8 text-[2.25rem] ">
        <li className="hover:text-blue-600 ease-in duration-200 min900:hidden">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-blue-600 ease-in duration-200 min900:hidden">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-blue-600 ease-in duration-200 min900:hidden">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-blue-600 ease-in duration-200 min900:hidden">
          <a href="#contact">Contact</a>
        </li>

        {/* Mobile-Menu Start*/}
        <li
          className=" hidden min900:block min900:hover:text-blue-600 min900:ease-in min900:duration-200 min900:cursor-pointer"
          onClick={showSideBar}
        >
          <FaBars size={30} />
        </li>
        {/* Mobile-Menu End*/}
      </ul>
    </nav>
  );
};

export default Navbar;
