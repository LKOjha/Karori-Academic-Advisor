// src/components/ContactSection.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactPart = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxxx", // 🔹 replace with your EmailJS service ID
        "template_xxxxx", // 🔹 replace with your EmailJS template ID
        form.current,
        "public_key_xxxxx" // 🔹 replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6 pt-[104px]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="mt-2 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have questions about your academic journey? We’d love to hear from you.
          </motion.p>
        </div>

        {/* Layout: Form (Left) + Info (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  title="Phone number must be 10 digits"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Reach out to us directly via phone, email, or visit us at our office.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-medium">📍 Address:</span> 54 bhinder, gangadevi nagar,
                behind radisson blu, 452010, Indore, (M.P)
              </li>
              <li>
                <span className="font-medium">📞 Phone:</span> +91 72408-20997, +91 94798-99710
              </li>
              <li>
                <span className="font-medium">✉️ Email:</span> karoriacademicadvisor@gmail.com
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 pt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3391.9323301862914!2d75.89734807530571!3d22.751118079365025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ1JzA0LjAiTiA3NcKwNTMnNTkuNyJF!5e1!3m2!1sen!2sin!4v1756189494978!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPart;
