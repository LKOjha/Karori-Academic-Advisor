import { div } from 'framer-motion/client';
import Section from '../components/UI/Section'
import Services from "../components/services/Services";
import ServicesIntro from '../components/services/ServicesHero';
import WhyChooseUs from '../components/services/WhyChooseUs';
import WhatYouGet from '../components/services/WhatYouGet';
import ConsultancyForm from '../components/services/ConsultancyForm';


export default function ServicesPage() {
    return (
         <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <ServicesIntro/>
            
            <Services />
            
            <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>
            <WhyChooseUs />

            <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>
            <WhatYouGet />

            <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12 w-full"></div>
            <ConsultancyForm/>

        </main>
    )
};
