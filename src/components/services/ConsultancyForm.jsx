import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ConsultancyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    interest: "",
    location: "",
    reason: "",
    contactMethod: "Email",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // ✅ added state

  // ✅ generic handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("Sending...");

    emailjs
      .send(
        "service_1r0m7bd",
        "template_uppl4jn",
        formData,
        "ERJaUoiGczV87-InV"
      )
      .then(
        () => setStatus("✅ Your request has been sent successfully!"),
        () => setStatus("❌ Failed to send request. Try again later.")
      );
  };

  return (
    <motion.section
      className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Book Your Consultation
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Fill out the form below and our academic advisors will connect with you to
          guide your career journey.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 pb-3">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 pb-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 pb-3">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full p-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Education Level */}
        <div>
          <label className="block text-left text-gray-800 dark:text-gray-200 mb-2">
            Current Education Level
          </label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="12th">12th Grade</option>
            <option value="Diploma">Diploma</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
        </div>

        {/* Field of Interest */}
        <div>
          <label className="block text-left text-gray-800 dark:text-gray-200 mb-2">
            Interested Course / Field
          </label>
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g. Engineering, Management, Arts"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-left text-gray-800 dark:text-gray-200 mb-2">
            Preferred Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g. India, USA, UK"
          />
        </div>

        {/* Reason */}
        <div>
          <label className="block text-left text-gray-800 dark:text-gray-200 mb-2">
            Reason for Consultation
          </label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Tell us about your goals..."
          />
        </div>

        {/* Preferred Contact */}
        <div>
          <label className="block text-left text-gray-800 dark:text-gray-200 mb-2">
            Preferred Contact Method
          </label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg transition transform hover:scale-105"
        >
          Submit Request
        </button>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-800 dark:text-gray-300">
            {status}
          </p>
        )}
      </form>

    </motion.section>
  );
};

export default ConsultancyForm;
