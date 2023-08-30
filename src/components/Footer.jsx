import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2d2e32] py-[5rem] px-0 w-full">
      <div className="container my-0 mx-auto max-w-[120rem] py-0 px-[4rem]">
        <div className="footerc flex items-center justify-between min550:flex-wrap min550:gap-[2rem] min550:justify-center min550:text-center">
          <h3 className="text-[#fff] text-[2.25rem] ">
            Copyright © 2023. All rights are reserved
          </h3>
          <div className="footerc__socials flex gap-[2.25rem]">
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/tahsin-g%C3%BCltekin-b38a26282/"
              target="_blank"
              className="cursor-pointer  text-[#fff] hover:scale-125 duration-200 ease-out"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              id="github"
              href="https://github.com/tahsingultekin"
              target="_blank"
              className="cursor-pointer  text-[#fff] hover:scale-125 duration-200 ease-out"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
