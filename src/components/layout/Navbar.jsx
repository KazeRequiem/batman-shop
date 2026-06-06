import { useState } from 'react'
import { Link, useLocation } from 'wouter'

const links = [
    { path: "/", label: "Bibliothèque" },
    { path: "/shop", label: "Boutique" },
    { path: "/social", label: "Réseau social" },
]

export default function Navbar() {
    const [location] = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="bg-bat-dark border-b-2 border-bat-yellow">
            <div className="flex justify-between items-center px-8 py-4">
                <Link href="/" className="font-display text-2xl text-bat-yellow">
                    GOTHAM READS
                </Link>

                {/* Liens desktop */}
                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className={`${location === link.path ? "text-bat-yellow" : "text-bat-light"} font-body font-bold text-sm uppercase tracking-widest hover:text-bat-yellow transition-colors duration-200`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Bouton hamburger mobile */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span className={`block w-6 h-0.5 bg-bat-yellow transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-bat-yellow transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-bat-yellow transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Menu mobile déroulant */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
                <ul className="flex flex-col px-8 pb-4 gap-4 border-t border-bat-gray pt-4">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className={`${location === link.path ? "text-bat-yellow" : "text-bat-light"} font-body font-bold text-sm uppercase tracking-widest hover:text-bat-yellow transition-colors duration-200`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}