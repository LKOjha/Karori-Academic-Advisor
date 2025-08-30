import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-gray-700 pt-10 pb-4 px-6 relative z-10 border-t-2 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-start"> */}

        {/* 1st Section - Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700">
            <a href="/">
            Karori Academic Advisor

            </a>
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Guiding students towards a brighter academic and professional future
            with expert advice and personalized mentoring.
          </p>
        </div>

        {/* 2nd Section - Quick Links */}
        <div >
          <h3 className="text-lg font-semibold text-blue-700 mb-3 ">Explore</h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* 3rd Section - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a
                href="mailto:karoriacademicadvisor@gmail.com"
                className="hover:text-blue-600"
              >
                karoriacademicadvisor@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:+917240820997" className="hover:text-blue-600">
                +91 72408-20997
              </a>
              <a href="tel:+919479899710" className="hover:text-blue-600">
                +91 94798-99710
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <a href="https://maps.app.goo.gl/W95iDitHz8pMbMUA7" className="hover:text-blue-600">
               
                54 Bhinder, Gangadevi Nagar, behind Radisson Blu, 452010, Indore, (M.P)
              </a>
            </li>
          </ul>
        </div>

        {/* 4th Section - Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Get Updates</h3>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-700 transition shadow-sm">
              →
            </button>
          </div>

          <h3 className="text-lg font-semibold text-blue-700 mb-3">Be Social</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-600 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 hover:text-blue-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-700 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-6 border-t border-gray-400 pt-3 text-gray-500">
        {/* © {new Date().getFullYear()} Karori Academic Advisor. All rights reserved. */}
        Karori Academic Advisor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
