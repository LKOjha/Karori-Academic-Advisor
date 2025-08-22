import Section from '../components/UI/Section'


export default function Contact() {
    return (
        <Section>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold">Contact Karori Academic Advisor</h1>
                <p className="mt-4 text-gray-700">
                    We specialize in guiding 12th-pass students through the critical decisions of choosing the right stream,
                    course, and college. Our approach blends aptitude understanding, market trends, and practical advice.
                </p>
                <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
                    <li>Personalized counselling sessions</li>
                    <li>College & course shortlisting</li>
                    <li>Application & documentation assistance</li>
                </ul>
            </div>
        </Section>
    )
}