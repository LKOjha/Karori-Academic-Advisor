// src/components/Services.jsx
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Compass, Users } from "lucide-react";

const services = [
  {
    title: "Profile Building",
    description:
      "Strong profiles get noticed; we help you build one with the right skills, activities, and achievements.",
    icon: GraduationCap,
  },
  {
    title: "Application & Interview Support",
    description:
      "From forms to final interview, we guide you at every step to boost your selection chances.",
    icon: Compass,
  },
  {
    title: "One-on-One Support",
    description:
      "Dedicated expert support to solve your doubts, plan smart, and stay on track.",
    icon: Users,
  },
  {
    title: "Course Selection",
    description:
      "Guidance to select the best courses aligned with your interests and goals.",
    icon: BookOpen,
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

const Services = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6 text-center mt-10">
        <motion.p
          variants={sectionVariants}
          className="text-lg font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-8"
        >
          Services
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={sectionVariants}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
        >
          Trusted by students. Recommended by results.
        </motion.h2>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={sectionVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition"
              >
                <div className="flex justify-center">
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
