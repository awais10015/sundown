import React from "react";
import { motion } from "framer-motion";

const SliderSection = () => {
  const items = ["ENVIRONMENTS", "EXPERIENCES", "CONTENT"];
  const repeatedItems = [...items, ...items, ...items, ...items, ...items]; 

  return (
    <div className="z-10 bg-[#EFEAE3] w-full overflow-hidden  ">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...repeatedItems, ...repeatedItems].map((text, index) => (
          <React.Fragment key={index}>
            <span className="text-9xl font-black whitespace-nowrap">
              {text}
            </span>
            <div className="w-20 h-20 bg-[#FE330A] rounded-full self-center" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderSection;
