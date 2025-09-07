import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full fixed z-0 bottom-0">
      {/* Top Section */}
      <div className="w-full p-4 sm:p-6 md:p-10 gap-5 flex flex-col sm:flex-row justify-between items-start sm:items-end bg-[#FE330A] text-white text-base sm:text-lg md:text-xl font-bold">
        {/* Left Links */}
        <div className="text-2xl sm:text-3xl">
          <h1>Work</h1>
          <h1>Studio</h1>
          <h1>Contact</h1>
        </div>

        {/* Right Text */}
        <div className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-lg">
          get industry insights and creative inspiration straight to your inbox.
        </div>
      </div>

      {/* Animated Section */}
      <div className="relative w-full h-24 sm:h-32 md:h-40 bg-black overflow-hidden flex items-center justify-center">
        <motion.div
          className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black whitespace-nowrap"
          animate={{
            x: [0, 100, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 4,
            ease: "easeInOut",
          }}
        >
          Sundown
        </motion.div>
      </div>

      <hr />
    </div>
  );
};

export default Footer;
