import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4 mt-12 border-t-2 border-[#6e6b6b] ">

      {/* <div className="border-t-2 border-black my-12 w-full"></div> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Company Info */}
        <div>
          <h2 className="text-xl font-bold">Karori Academic Advisor</h2>
          <p className="mt-2 text-sm">
            Guiding students towards a brighter academic and professional future.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-col space-y-2">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
        </div>

        {/* Right - Social Media */}
        <div className="flex space-x-4 justify-start md:justify-end">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-blue-600 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-sky-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-6 border-t pt-4">
        © {new Date().getFullYear()} Karori Academic Advisor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
