// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";

const features = [
  {
    title: "Personalized Guidance",
    description:
      "Get tailored advice based on your interests, strengths, and career goals to choose the right academic path.",
    image: "/wcu3.png",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn directly from experienced advisors who understand the challenges students face after 12th grade.",
    image: "/wcu1.png",
  },
  {
    title: "Career Clarity",
    description:
      "Clear the confusion and gain confidence with structured plans and resources for your future career.",
    image: "/wcu2.png",
  },
];

// Animation Variants (same style as Services)
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
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          variants={sectionVariants}
          className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Why Choose Our Services
        </motion.h2>
        <motion.p
          variants={sectionVariants}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          We provide expert guidance, mentorship, and support to help you take
          the right step toward your academic and career journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-gray-800 h-[520px]
                         shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition"
            >
              {/* Image on top */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-50 h-50 object-contain mb-6"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
