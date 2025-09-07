import React from "react";
import CompPic from "../assets/images/CompPic.webp";

const AboutCompany = () => {
  return (
    <div className="relative w-full z-10 flex flex-col md:flex-row px-4 sm:px-6 md:px-10 gap-8 md:gap-12 py-10 bg-[#EFEAE3] text-gray-800">
     
      <div className="max-w-2xl mx-auto text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold md:font-black mb-6 md:mb-0 text-start leading-snug">
        We are a group of design-driven, goal-focused creators and producers who
        believe that the details make all the difference.
      </div>

     
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
        <img
          src={CompPic}
          alt="Our Company"
          className="w-full sm:w-3/4 md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="mt-5 text-base sm:text-lg md:text-xl font-medium sm:font-semibold md:font-bold text-center md:w-3/4">
          We love to create, we love to solve, we love to collaborate, and we
          love to turn amazing ideas into reality. We’re here to partner with
          you through every step of the process and know that relationships are
          the most important things we build.
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
