import { Link } from 'react-router-dom'
import Button from '../components/UI/Button'
import Section from '../components/UI/Section'


export default function Home() {
    return (
        <>
            {/* Hero */}
            <Section className="pt-24 pb-16 bg-gradient-to-b from-brand-50 to-white">
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
                        Clarity after 12th — Choose the right path & college
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        We help students make confident career and college decisions with personalized guidance.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <Button as={Link} to="/contact">Get Free Consultation</Button>
                        <Link className="btn btn-outline" to="/services">View Services</Link>
                    </div>
                    <p className="mt-6 text-xs text-gray-500">Trusted by students & parents across India</p>
                </div>
            </Section>


            {/* Quick features */}
            <Section>
                <div className="grid sm:grid-cols-3 gap-6">
                    {[
                        { title: 'Career Counselling', desc: 'Stream & course selection based on your strengths.' },
                        { title: 'College Selection', desc: 'Shortlisting colleges that fit your goals & budget.' },
                        { title: 'Application Help', desc: 'Forms, documents & timelines — done right.' },
                    ].map((f) => (
                        <div key={f.title} className="rounded-2xl border p-6 shadow-sm">
                            <h3 className="font-semibold">{f.title}</h3>
                            <p className="text-gray-600 mt-1 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    )
}