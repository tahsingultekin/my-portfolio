import React from "react";
import { icons } from "../assets/assetData";

const TechStack = () => {
  return (
    <div
      id="tech-stack"
      className="flex items-center text-[#767676] text-[1.6rem]  justify-center w-full mt-[9rem] min900:flex-col min900:static"
    >
      <p className=" border-r-2 border-[rgba(45,46,50,.5)] text-[#2d2e32] font-normal mr-28 pr-8 text-[2.25rem] min900:border-r-0  min900:border-b-2 min900:mb-[3rem] min900:mr-0 min900:pb-[1rem] min900:pr-0">
        Tech Stack
      </p>
      <ul className="flex flex-wrap gap-10 list-none min900:justify-center min900:pb-[7rem] ">
        {icons.map((img, index) => {
          return (
            <li className="flex items-center bg-[#fff] rounded-full shadow-lg cursor-pointer h-[8.5rem] w-[8.5rem] justify-center ">
              <img src={img.icon} alt="icon" className=" h-24 w-24" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechStack;
