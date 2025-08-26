import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion scroll-based transforms
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 300], [0, -120]); // text goes up
  const opacity = useTransform(scrollY, [0, 250], [1, 0]); // fade out smoothly

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh" }}
    >

      {/* Background Video with parallax */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ y: offsetY * 0.3 }} // parallax effect
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-20">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">

            Advice that moves <br /> you forward
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Your career deserves clarity. We bring it!
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
