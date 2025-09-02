import { div } from "framer-motion/client";
import React from "react";
import ContactSection from "../components/contact/ContactSection";
import ConsultancyForm from "../components/services/ConsultancyForm";
import ContactInfo from "../components/contact/ContactInfoSection";

const Contact = () => {
    return (
        <main className="bg-white dark:bg-gray-900 transition-colors duration-300">

            <ContactInfo/>
            <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>

            <ContactSection/>
            <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>

            <ConsultancyForm/>

        </main>
        
    );
};

export default Contact;
