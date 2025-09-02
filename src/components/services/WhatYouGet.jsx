// src/components/WhatYouGet.jsx
import { motion } from "framer-motion";
import { BookOpen, Calendar, Users, MapPin, PenTool, Camera, Lightbulb, Settings } from "lucide-react";

const features = [
  {
    title: "Personalized Guidance",
    description: "Tailored advice to match your goals, strengths, and academic journey.",
    icon: Lightbulb,
  },
  {
    title: "Application Strategy",
    description: "Step-by-step support to craft strong applications and stand out.",
    icon: Settings,
  },
  {
    title: "College Mapping",
    description: "Helping you shortlist the right universities based on profile and interests.",
    icon: MapPin,
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews and expert tips to boost your confidence and performance.",
    icon: PenTool,
  },
  {
    title: "Timeline Planning",
    description: "Organized schedules so you never miss a deadline or opportunity.",
    icon: Calendar,
  },
  {
    title: "Exclusive Workshops",
    description: "Engaging sessions on skills, applications, and career pathways.",
    icon: Users,
  },
  {
    title: "Resource Library",
    description: "Access to curated materials, guides, and success templates.",
    icon: BookOpen,
  },
  {
    title: "Memorable Portfolio",
    description: "Build a profile that showcases your achievements creatively.",
    icon: Camera,
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const WhatYouGet = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={sectionVariants}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
        >
          What You’ll Get
        </motion.h2>
        <motion.p
          variants={sectionVariants}
          className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg"
        >
          Comprehensive academic support designed to guide you at every step of your journey.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={sectionVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 text-left"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatYouGet;
