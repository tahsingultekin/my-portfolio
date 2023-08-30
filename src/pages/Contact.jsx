import React from "react";
import { FaMapMarkedAlt, FaEnvelopeOpenText } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#fff] py-[12rem] px-0 md1020:py-[8rem]"
    >
      <div className="container my-0 mx-auto max-w-[120rem] py-0 px-[4rem] min460:py-0 min460:px-1.7rem ">
        <div className="contact-content flex flex-col">
          <div className="contact-title min750:text-center ">
            <p className="text-[#147efb] text-[2.25rem] font-bold mb-[1rem] uppercase min460:text-[2rem]">
              contact
            </p>
            <h3 className="text-[#2d2e32] text-[3rem] font-bold min460:text-[2.5rem]">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="contact-icons flex flex-wrap gap-[8rem] mt-[6rem] min750:flex-col min750:gap-[5rem] min750:items-center min750:text-center">
            <div className="contact__icon-box flex items-center gap-[1.5rem] min750:flex-col">
              <span className="bg-[#fff] rounded-full shadow-lg p-[2.5rem]">
                <FaMapMarkedAlt className="text-[#147efb] text-[4.5rem] " />
              </span>
              <div className="contact__info flex flex-col gap-[1rem]">
                <h3 className="text-[#2d2e32] text-[2rem] font-bold ">
                  Location
                </h3>
                <p className="text-[#767676] cursor-pointer text-[2.25rem]">
                  Based in Turkey
                </p>
              </div>
            </div>
            <div className="contact__icon-box flex items-center gap-[1.5rem] min750:flex-col">
              <span className="bg-[#fff] rounded-full shadow-lg p-[2.5rem]">
                <FaEnvelopeOpenText className="text-[#147efb] text-[4.5rem] " />
              </span>
              <div className="contact__info flex flex-col gap-[1rem]">
                <h3 className="text-[#2d2e32] text-[2rem] font-bold ">Mail</h3>
                <a
                  href="mailto:tahsingultekin55@gmail.com"
                  className="text-[#767676] cursor-pointer text-[2.25rem] hover:text-[#147efb] ease-in duration-150"
                >
                  tahsingultekin55@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
