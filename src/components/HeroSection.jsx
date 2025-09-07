import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-[#EFEAE3] z-10 flex flex-col sm:flex-row w-full px-4 sm:px-6 md:px-10 lg:px-16 gap-8 md:gap-12 py-10 sm:py-16">
      {/* Left Text */}
      <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start">
        <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold md:font-black text-left leading-relaxed sm:leading-snug max-w-lg">
          Sundown is a multi-disciplinary studio focused on creating unique,
          end-to-end experiences and environments.
        </div>
      </div>

      {/* Right Headings */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end text-center sm:text-right space-y-2 sm:space-y-3 md:space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight">
          SPACES
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight">
          THAT
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight">
          INSPIRE
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
