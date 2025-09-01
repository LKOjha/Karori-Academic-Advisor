import React from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/about/AboutSection";
import About from "./About";
import Services from "../components/services/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import NumbersSection from "../components/home/NumbersSection";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/contact/ContactSection";
import WhatsAppButton from "../components/home/WhatsAppButton";


export default function Home() {
  return (
    <main > {/* gap for navbar */}
      <Hero />
      
      <AboutSection />
      {/* Divider */}
      <div className="border-t-2 border-black my-12 w-full"></div>

      <Services />
      <div className="border-t-2 border-black my-12 w-full"></div>

      <WhyChooseUs />
      <div className="border-t-2 border-black my-12 w-full"></div>
      
      <Testimonials />
      
      <NumbersSection />

      <ContactSection/>
      <WhatsAppButton/>
      


    </main>
  );
}