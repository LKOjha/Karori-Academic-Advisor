import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom hook for counting animation
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const NumbersSection = () => {
  const years = useCounter(7);
  const alumni = useCounter(250);
  const partners = useCounter(50);

  return (
    <motion.section
      className="w-full relative border-2 border-black py-16 my-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Graph.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-12">
          We’re Good with Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-5xl font-extrabold text-white drop-shadow-lg">
              {years}
            </p>
            <p className="text-lg font-medium text-gray-200 drop-shadow-md">
              Years of Experience
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-5xl font-extrabold text-white drop-shadow-lg">
              {alumni}+
            </p>
            <p className="text-lg font-medium text-gray-200 drop-shadow-md">
              Alumni
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <p className="text-5xl font-extrabold text-white drop-shadow-lg">
              {partners}+
            </p>
            <p className="text-lg font-medium text-gray-200 drop-shadow-md">
              Partners
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default NumbersSection;
