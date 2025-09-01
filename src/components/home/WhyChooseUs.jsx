// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Handshake, Target } from "lucide-react";

const reasons = [
    {
        title: "Trusted Guidance",
        description: "Backed by years of experience, we provide reliable academic and career advice.",
        icon: ShieldCheck,
    },
    {
        title: "Personalized Approach",
        description: "Every student’s journey is unique. We tailor guidance based on your goals.",
        icon: Lightbulb,
    },
    {
        title: "Strong Network",
        description: "Connections with colleges and professionals to help you at every step.",
        icon: Handshake,
    },
    {
        title: "Focused on Results",
        description: "We aim to provide clarity and confidence for your future decisions.",
        icon: Target,
    },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const WhyChooseUs = () => {
  return (
    <motion.section
      className="py-16 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: false }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          variants={sectionVariants}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          variants={sectionVariants}
          className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          At Karori Academic Advisor, we stand out because of our commitment to
          providing trusted, personalized, and result-oriented guidance.
        </motion.p>

        {/* Reasons Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={sectionVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex justify-center">
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;