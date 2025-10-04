import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import contactImg from "/contact.jpg";

const ContactSection = () => {
  const form = useRef();
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [otpMessage, setOtpMessage] = useState("");

  const sendOtp = async () => {
    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.ok && data.token) {
      setToken(data.token);
      setOtpSent(true);
    }
  };

  const verifyOtp = async () => {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, otp }),
    });
    const data = await res.json();

    if (data.ok && data.verified) {
      setOtpVerified(true);
      setOtpMessage("✅ Email Verified!");
      setSubmissionMessage("");
    } else {
      setOtpVerified(false);
      setOtpMessage("❌ Invalid OTP. Please try again.");
    }

  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setSubmissionMessage("Please verify your email first.");
      return;
    }

    emailjs
      .sendForm(
        "service_1r0m7bd",
        "template_4z8h6ie",
        form.current,
        "ERJaUoiGczV87-InV"
      )
      .then(
        () => {
          setSubmissionMessage("Message sent successfully!");
          form.current.reset();
          setOtpSent(false);
          setOtpVerified(false);
          setOtp("");
          setEmail("");
        },
        (error) => {
          setSubmissionMessage("Failed to send message, try again later.");
          console.error("❌ EmailJS Error:", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-80 md:w-96 drop-shadow-2xl rounded-2xl"
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="flex-1 bg-gray-50 dark:bg-gray-800 shadow-2xl rounded-2xl p-8 transition-colors duration-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Get in Touch
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="user_phone"
                required
                pattern="[6-9][0-9]{9}"
                title="Enter a valid 10-digit phone number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>

            {/* Email + OTP */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Email
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <button
                  type="button"
                  onClick={sendOtp}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full sm:w-auto"
                >
                  Send OTP
                </button>
              </div>

              {otpSent && !otpVerified && (
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <button
                    type="button"
                    onClick={verifyOtp}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
                  >
                    Verify
                  </button>
                </div>
              )}

              {otpMessage && (
                <p
                  className={`mt-2 text-center text-sm ${otpVerified ? "text-green-600" : "text-red-500"
                    }`}
                >
                  {otpMessage}
                </p>
              )}


            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!otpVerified}
                className={`px-6 py-3 rounded-lg shadow-md transition duration-300 ${otpVerified
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
              >
                Send Message
              </button>
              {submissionMessage && (
                <p className="text-center mt-4 text-green-600 dark:text-green-400">
                  {submissionMessage}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
