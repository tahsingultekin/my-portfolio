import React from "react";
import hand from "../assets/hand.png";

import profile from "../assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-[#f9f9f9] h-screen w-full overflow-x-hidden min900:h-auto min900:py-12rem min900:px-0 "
    >
      <div
        id="container"
        className=" my-0 mx-auto max-w-[120rem] py-0 px-4 min460:py-0 min460:px-[2rem]"
      >
        <div className="content flex flex-col  h-[65rem] items-center   justify-center relative mt-[14rem] min900:flex-col min900:gap-[3rem] min900:h-auto min900:text-center ">
          <div
            id="hero-main"
            className="flex justify-center items-center gap-[15rem] mt-[13rem] min900:flex-col-reverse min900:gap-[3rem] min900:h-auto min900:text-center"
          >
            <div
              id="hero-text"
              className="flex flex-col max-w-[50rem] relative gap-7"
            >
              <h1 className=" text-[6.5rem] font-bold leading-[1.2] my-8 text-[#2d2e32] min500:text-[4rem]">
                Front-End React Developer
              </h1>
              <img
                src={hand}
                alt="hand"
                className="absolute top-44 right-48 h-24 w-24 min900:right-[3rem] min500:h-[4.5rem] min500:top-[6.4rem] min500:w-[4.5rem] min400:right-[3rem]"
              />

              <p
                id="title-2"
                className="text-[#555] text-[2.25rem] font-medium leading-relaxed min900:mb-[3rem]"
              >
                Hi, I'm Tahsin Gültekin. A passionate Front-end React Developer
                based in Turkey. 📍
              </p>
              <div
                id="links"
                className="flex gap-6 my-10 mx-0 min900:gap-[2rem] min900:justify-center min900:mb-[4rem]"
              >
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/in/tahsin-g%C3%BCltekin-b38a26282/"
                  target="_blank"
                  className="cursor-pointer  text-[#2d2e32] hover:text-blue-600 duration-200 ease-in"
                >
                  <FaLinkedin size={38} />
                </a>
                <a
                  id="github"
                  href="https://github.com/tahsingultekin"
                  target="_blank"
                  className="cursor-pointer  text-[#2d2e32] hover:text-blue-600 duration-200 ease-in"
                >
                  <FaGithub size={36} />
                </a>
              </div>
            </div>
            <img
              id="hero-img"
              src={profile}
              alt="photo"
              className=" w-[36rem] h-[38rem]  rounded-full "
            />
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Home;
