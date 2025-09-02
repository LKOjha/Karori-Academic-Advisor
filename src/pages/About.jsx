import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutSection from "../components/about/AboutSection";
import AboutHero from "../components/about/AboutHero";
import Testimonials from "../components/home/Testimonials";
import TargetMarketStrategy from "../components/about/TargetMarketStrategy";


export default function About() {
  return (
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
  
      <AboutHero />

      <AboutSection />
      <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>
      
      <TargetMarketStrategy/>
      <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>

      <Testimonials />
      

    </main>
  );
}