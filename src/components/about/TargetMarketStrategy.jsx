import { motion } from "framer-motion";
import { Building2, User, Globe, MousePointer, Users, Monitor } from "lucide-react";

// Section animation (fade + y shift)
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

// Card animation with hover effect
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TargetMarketStrategy = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}  // 👈 animate every time in view
    >

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block"
          variants={cardVariants}
        >
          Our Target Market & Growth Strategy
          <span className="block w-20 h-1 bg-orange-500 mx-auto mt-2 rounded"></span>
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Target Market */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-left"
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-6">
              Target Market
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <Building2 size={24} className="text-orange-500 dark:text-orange-400" />,
                  title: "Small to Medium-Sized Businesses",
                  desc: "From startups to established companies, we help streamline financial processes and ensure financial stability.",
                },
                {
                  icon: <User size={24} className="text-orange-500 dark:text-orange-400" />,
                  title: "Entrepreneurs and Individuals",
                  desc: "Whether it’s personal financial planning or managing complex tax returns, we cater to individuals looking for professional advice.",
                },
                {
                  icon: <Globe size={24} className="text-orange-500 dark:text-orange-400" />,
                  title: "Nonprofits and Community Organizations",
                  desc: "We offer tailored services to ensure financial health and compliance in the nonprofit sector.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  variants={cardVariants}
                >
                  <span className="p-3 bg-orange-100 dark:bg-orange-600/30 rounded-xl">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-200">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Growth Strategy */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-left"
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-6">
              Growth Strategy
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <MousePointer size={24} className="text-orange-500 dark:text-orange-400" />,
                  title: "Client Acquisition",
                  desc: "Focus on digital marketing, including SEO, content marketing, and social media campaigns to generate leads and build brand awareness.",
                },
                {
                  icon: <Users size={24} className="text-orange-500 dark:text-orange-400" />,
                  title: "Partnerships",
                  desc: "Build relationships with other small business service providers to offer bundled services and expand our reach.",
                },
                {
                  icon: <Monitor size={24} className="text-orange-500 dark:text-orange-400" />,
                  title: "Technology Integration",
                  desc: "Continue to integrate advanced financial technologies and automation tools to enhance efficiency and scalability.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  variants={cardVariants}
                >
                  <span className="p-3 bg-orange-100 dark:bg-orange-600/30 rounded-xl">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-200">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TargetMarketStrategy;
