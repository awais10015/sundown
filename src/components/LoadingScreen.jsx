import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["EXPERIENCE", "ENVIRONMENT", "CONTENT"];

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const LoadingScreen = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => setIndex((prev) => prev + 1), 1500);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => onFinish(), 1500);
      return () => clearTimeout(endTimer);
    }
  }, [index, onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center min-h-screen bg-black">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="
            text-orange-500 font-bold text-center break-words
            text-3xl sm:text-5xl md:text-7xl lg:text-8xl
          "
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;


