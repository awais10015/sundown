import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full fixed z-1 bottom-0  ">
      <div className="w-full p-10 gap-5 flex justify-between items-end bg-[#FE330A] text-white text-xl font-bold">
        <div className="text-3xl">
          <h1>Work</h1>
          <h1>Studio</h1>
          <h1>Contact</h1>
        </div>
        <div>
          get industry insights and creative inspiration straight to your inbox.
        </div>
      </div>

     <div className="relative w-full h-40 bg-black overflow-hidden flex items-center justify-center">
  <motion.div
    className="text-white text-9xl font-black whitespace-nowrap"
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
