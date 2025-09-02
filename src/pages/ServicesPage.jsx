import { div } from 'framer-motion/client';
import Section from '../components/UI/Section'
import Services from "../components/services/Services";
import ServicesIntro from '../components/services/ServicesHero';


export default function ServicesPage() {
    return (
        <div>
            <ServicesIntro/>
            <Services />
        </div>
    )
};
