export default function Section({ id, className = '', children }) {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container mx-auto px-4">{children}</div>
        </section>
    )
}