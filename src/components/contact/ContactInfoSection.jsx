import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactInfoSection = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6 mt-10">
        {/* Section Title */}
        <div className="flex justify-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block text-center"
            variants={fadeUpVariant}
            custom={0}
          >
            Get In Touch
            <span className="block w-20 h-1 bg-orange-500 mx-auto mt-2 rounded"></span>
          </motion.h2>
        </div>



        {/* Row 1 - Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <MapPin size={28} className="text-orange-500 dark:text-orange-400" />,
              title: "Our Office",
              desc: "54 Bhinder, Gangadevi Nagar, behind Radisson Blu, 452010, Indore, (M.P)",
              link: "https://maps.app.goo.gl/W95iDitHz8pMbMUA7",
            },
            {
              icon: <Phone size={28} className="text-orange-500 dark:text-orange-400" />,
              title: "Phone",
              desc: "+91 72408-20997, +91 94798-99710",
              link: "tel:+917240820997",
            },
            {
              icon: <Mail size={28} className="text-orange-500 dark:text-orange-400" />,
              title: "Email",
              desc: "karoriacademicadvisor@gmail.com",
              link: "mailto:karoriacademicadvisor@gmail.com",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:scale-105"
              variants={fadeUpVariant}
              custom={i + 1}
            >
              <div className="p-4 bg-orange-100 dark:bg-orange-600/30 rounded-full mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
            </motion.a>
          ))}

        </div>

        {/* Row 2 - Social Media */}
        <motion.div
          className="flex justify-center gap-8 mb-12"
          variants={fadeUpVariant}
          custom={4}
        >
          {[
            {
              icon: <Instagram size={28} />,
              href: "https://instagram.com",
            },
            {
              icon: <Facebook size={28} />,
              href: "https://facebook.com",
            },
            {
              icon: <Linkedin size={28} />,
              href: "https://linkedin.com",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition"
              variants={fadeUpVariant}
              custom={i + 5}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Row 3 - Map */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          variants={fadeUpVariant}
          custom={7}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d847.9843677864137!2d75.899738!3d22.750911!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ1JzA0LjAiTiA3NcKwNTMnNTkuNyJF!5e1!3m2!1sen!2sin!4v1756814086088!5m2!1sen!2sin"

            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactInfoSection;
