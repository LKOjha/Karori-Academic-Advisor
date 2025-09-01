import React from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/about/AboutSection";
import Services from "../components/services/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import NumbersSection from "../components/home/NumbersSection";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/contact/ContactSection";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />
      <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>

      {/* Services */}
      <Services />
      <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>

      {/* Why Choose Us */}
      <WhyChooseUs />
      <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>

      {/* Testimonials */}
      <Testimonials />

      {/* Numbers Section */}
      <NumbersSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
