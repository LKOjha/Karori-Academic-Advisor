export default function Footer() {
return (
<footer className="border-t py-8">
<div className="container mx-auto px-4 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
<p>© {new Date().getFullYear()} Karori Academic Advisor</p>
<p>Guiding students to the right path.</p>
</div>
</footer>
)
}