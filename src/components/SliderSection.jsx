import React from "react";
import { motion } from "framer-motion";

const SliderSection = () => {
  const items = ["ENVIRONMENTS", "EXPERIENCES", "CONTENT"];
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative z-10 bg-[#EFEAE3] w-full overflow-hidden py-6 sm:py-10">
      <motion.div
        className="flex gap-6 sm:gap-10 md:gap-16 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...repeatedItems, ...repeatedItems].map((text, index) => (
          <React.Fragment key={index}>
            <span
              className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black whitespace-nowrap"
            >
              {text}
            </span>
            <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-[#FE330A] rounded-full self-center" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderSection;
