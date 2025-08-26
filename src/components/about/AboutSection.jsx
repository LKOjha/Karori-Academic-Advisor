import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const AboutSection = () => {


    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">

                {/* Left Content */}
                <div className="space-y-6 max-w-lg">
                    <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                        About Us
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                        Your journey, our expertise
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        Karori Academic Advisor is a trusted career mentorship platform that helps ambitious students
                        and working professionals shape their future through the right academic choices.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        We specialize in guiding students toward India’s top postgraduate programs in management,
                        business, and leadership, helping them make informed decisions, build strong profiles,
                        and confidently crack college admissions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        At Karori, we don’t just guide; we walk the journey with you. Whether you're confused about your next step or aiming for a competitive B-school, we ensure you get clarity, direction, and results.
                        Let’s build your future smartly, strategically, and confidently.          </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src="/about-hero1.jpg"
                        alt="About us"
                        className="w-full max-w-md object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
