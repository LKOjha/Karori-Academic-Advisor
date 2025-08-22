import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'


const links = [
{ to: '/', label: 'Home' },
{ to: '/about', label: 'About' },
{ to: '/services', label: 'Services' },
{ to: '/contact', label: 'Contact' },
]


export default function Navbar() {
const [open, setOpen] = useState(false)


return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
<div className="container mx-auto px-4 h-16 flex items-center justify-between">
<Link to="/" className="font-semibold text-lg tracking-tight">Karori Academic Advisor</Link>


<button className="sm:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Menu">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
</button>


<nav className={`sm:flex gap-6 ${open ? 'block' : 'hidden'} sm:block`}>
{links.map(l => (
<NavLink
key={l.to}
to={l.to}
className={({ isActive }) =>
`py-2 hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`
}
onClick={() => setOpen(false)}
>
{l.label}
</NavLink>
))}
</nav>
</div>
</header>
)
}