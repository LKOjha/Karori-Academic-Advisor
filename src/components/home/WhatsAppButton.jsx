// src/components/WhatsAppButton.jsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "919479899710"; // replace with your WhatsApp number
    const message = "Hello! I would like to know more about Karori Academic Advisor."; // your pre-written message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};


export default WhatsAppButton;
