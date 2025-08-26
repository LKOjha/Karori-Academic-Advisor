import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutSection from "../components/about/AboutSection";
import AboutHero from "../components/about/AboutHero";


export default function About() {
  return (
    <main > {/* gap for navbar */}
      
      <AboutHero />
      <AboutSection />

    </main>
  );
}