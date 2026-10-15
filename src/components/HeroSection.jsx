import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-[#EFEAE3] z-10 flex flex-col items-center justify-center sm:flex-row h-screen w-full px-4 sm:px-6 md:px-10 lg:px-16 gap-8 md:gap-12 py-10 sm:py-16">
      <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start">
        <p className="hero-body max-w-lg sm:max-w-xl font-bold md:font-black text-left text-black">
          Sundown is a multi-disciplinary studio focused on creating unique,
          end-to-end experiences and environments.
        </p>
      </div>

      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end text-center sm:text-right">
        <h1 className="hero-headline font-black uppercase text-black">
          <span className="block">SPACES</span>
          <span className="block">THAT</span>
          <span className="block">INSPIRE</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
