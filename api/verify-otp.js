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
  const [token, setToken] = useState("");  // ✅ store token from backend

  // Send OTP
  const sendOtp = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      console.log("📩 sendOtp response:", data);
      if (data.ok && data.token) {   // ✅ get token
        setToken(data.token);
        alert("OTP sent to your email!");
        setOtpSent(true);
      } else {
        alert("Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!otp || !token) {
      alert("Missing OTP or token");
      return;
    }

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, otp }), // ✅ send token + otp
      });
      const data = await res.json();
      console.log("🔍 verifyOtp response:", data);

      if (data.ok && data.verified) {   // ✅ backend returns these keys
        alert("Email verified successfully!");
        setOtpVerified(true);
      } else {
        alert("Invalid OTP. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  // ... rest of your sendEmail and UI remains same ...
};

export default ContactSection;
