import React from "react";
import { motion } from "framer-motion";


const AboutHero = () => {
  return (
    <section
  className="relative flex flex-col items-center justify-center text-center text-white px-4"
  style={{
    height: "100dvh",
    backgroundImage: "url('/about-main2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">

        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <img
            src="/logo.jpg"
            alt="Company Logo"
            className="w-20 h-20 object-contain"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About Karori
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg md:text-xl leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Trusted by students. Recommended by results.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
