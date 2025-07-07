import React from 'react';
import CompPic from '../assets/images/CompPic.webp';

const AboutCompany = () => {
  return (
    <div className="z-10   flex flex-col sm:flex-row md:flex-row px-6 gap-10 py-10 bg-[#EFEAE3] text-gray-800">
     
      <div className="ml-5 max-w-2xl mx-auto text-3xl md:text-5xl sm:text-5xl font-bold md:font-black  sm:font-black mb-8 text-start">
        We are a group of design-driven, goal-focused creators and producers who believe that the details make all the difference.
      </div>

      
      <div className="mr-15 flex flex-col  items-end  max-w-5xl mx-auto">
        <img
          src={CompPic}
          alt="Our Company"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="mt-5 text-lg font-black sm:text-lg text-start md:w-1/2">
          We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
