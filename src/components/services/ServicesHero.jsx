import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-white px-4"
      style={{
        height: "100dvh", // fills viewport
        backgroundImage: "url('/serviceshero.jpg')", // change this image path as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Services
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Expert academic guidance to help you choose the right career path,
          courses, and opportunities after 12th.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;
