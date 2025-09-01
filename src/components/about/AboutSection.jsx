import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const AboutSection = () => {
  return (
    <motion.section
      className="w-full bg-gray-50 py-16 dark:bg-gray-900 transition-colors"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 ">
        
        {/* Left Content */}
        <motion.div
          className="space-y-6 max-w-lg"
          variants={sectionVariants}
        >
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
            About Us
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug dark:text-white">
            Your journey, our expertise
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify dark:text-gray-300">
            Karori Academic Advisor is a trusted career mentorship platform dedicated
            to helping ambitious students and working professionals shape their
            future through the right academic choices.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify dark:text-gray-300">
            We specialize in guiding learners toward India’s top graduation and
            post-graduation programs in management, business, and leadership — 
            empowering them to make informed decisions, build strong profiles,
            and achieve their career goals with confidence.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify dark:text-gray-300">
            At Karori, we don’t just guide — we walk the journey with you.
            Whether you're exploring the right path after school, planning your
            higher studies, or aiming for a competitive program, we ensure you
            gain clarity, direction, and results.
          </p>
        </motion.div>

        {/* Right Image with hover + motion */}
        <motion.div
          className="flex justify-center"
          variants={sectionVariants}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/about-hero1.jpg"
            alt="About us"
            className="w-full max-w-sm object-cover rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
