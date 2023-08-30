import React from "react";
import table from "../assets/tablo.webp";
import working from "../assets/working.png";
import text from "../assets/text.svg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#fff] py-[15rem] px-0 md1020:py-[8rem] md1020:px-0"
    >
      <div className="container my-0 mx-auto max-w-[135rem] py-0 px-[4rem] min460:py-0 min460:px-[2.5rem]  ">
        <div className="about-content grid grid-cols-2 justify-center items-center md1020:grid-cols-1 md1020:text-center md1020:justify-items-center md1020:gap-[5rem]">
          <div className="img-side relative">
            <img
              src={working}
              alt="working"
              className="absolute bottom-[3.5rem] right-[9.5rem] w-[7.5rem] z-10 md1020:bottom-[3.25rem] md1020:right-[-1.25rem] min750:hidden"
            />
            <img
              src={table}
              alt="table"
              className="rounded-[1.7rem] h-[42rem] w-[49rem] md1020:bottom-[3.5rem] min460:h-auto min460:w-[90%] min460:ml-[1.75rem]"
            />
            <span className="bg-[#fff] rounded-full bottom-[-3.3rem] h-[20rem] absolute right-[3.3rem] w-[20rem] md1020:h-[20rem] md1020:w-[20rem]  md1020:bottom-[-4.5rem] md1020:right-[-7.5rem] min750:hidden">
              <img
                src={text}
                alt="front end developer"
                className="w-[20rem] animate-spin-slow md1020:w-[20rem] md1020:h-[20rem] "
              />
            </span>
          </div>

          <div className="text-side pr-[1.5rem] md1020:my-0 md1020:mx-auto md1020:max-w-[54rem]  min400:pr-0">
            <h3 className="uppercase text-[#147efb] text-[2.25rem] font-bold mb-[1rem] min460:text-[2rem]">
              About Me
            </h3>
            <h4 className="text-[#2d2e32] text-[3rem] leading-normal mb-[2rem] font-bold min460:text-[2.25rem]">
              A dedicated Front-end Developer <br />
              based in Turkey 📍
            </h4>
            <p className="text-[#767676] text-[2.25rem] font-light leading-[1.7] min460:text-[1.75rem]">
              Hello, my name is Tahsin. I graduated from the Department of
              Geomatics Engineering and worked in that field. However, I made
              the decision to change my career and focused on developing myself
              in the frontend field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
