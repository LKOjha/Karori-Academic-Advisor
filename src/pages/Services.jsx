import Section from '../components/UI/Section'


const items = [
    { title: 'Career Counselling', desc: 'Identify interests & strengths; decide on stream & course after 12th.' },
    { title: 'College Selection', desc: 'Shortlist colleges based on merit, budget, location & placements.' },
    { title: 'Application Assistance', desc: 'Form filling, SOPs, timelines & document checklist.' },
    { title: 'Scholarship Guidance', desc: 'Find suitable scholarships and prepare required documents.' },
]


export default function Services() {
    return (
        <Section>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold">Our Services</h1>
                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    {items.map(i => (
                        <div key={i.title} className="rounded-2xl border p-6 shadow-sm">
                            <h3 className="font-semibold">{i.title}</h3>
                            <p className="text-gray-600 mt-1 text-sm">{i.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
};
