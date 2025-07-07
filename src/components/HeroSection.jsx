import React from "react";

const HeroSection = () => {
  return (
    <div className=" bg-[#EFEAE3] z-10  flex flex-col sm:flex-row w-full pl-6 pr-8 gap-6">
     
      <div className="w-full bg-[#EFEAE3] sm:w-1/2 flex items-end">
        <div className="text-lg sm:text-2xl font-black text-left">
          Sundown is a multi-disciplinary studio focused on creating unique,
          end-to-end experiences and environments.
        </div>
      </div>

      
      <div className="w-full bg-[#EFEAE3] sm:w-1/2 flex flex-col items-end sm:items-end text-right">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight">
          SPACES
        </h1>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight">
          THAT
        </h1>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight">
          INSPIRE
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
