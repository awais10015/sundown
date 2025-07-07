import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["EXPERIENCE", "ENVIRONMENT", "CONTENT"];

const LoadingScreen = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => {
        onFinish();
      }, 1500);
      return () => clearTimeout(endTimer);
    }
  }, [index]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black text-orange-500 text-6xl sm:text-8xl font-bold">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;
