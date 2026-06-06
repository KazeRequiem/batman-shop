import { Link } from 'wouter'
import { socials } from '../../data/socials'

const links = [
    { path: "/", label: "Bibliothèque" },
    { path: "/shop", label: "Boutique" },
    { path: "/social", label: "Réseau social" },
]

export default function Footer() {
    return (
        <footer className="bg-bat-dark border-t border-bat-gray mt-auto">
            <div className="max-w-7xl mx-auto px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link href="/" className="font-display text-2xl text-bat-yellow">
                            GOTHAM READS
                        </Link>
                        <p className="text-white text-sm mt-3 leading-relaxed">
                            La référence Batman pour les fans de comics, de culture et de Gotham City.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-display text-lg text-bat-light tracking-widest mb-4">NAVIGATION</h3>
                        <ul className="flex flex-col gap-3">
                            {links.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-white text-sm hover:text-bat-yellow transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-display text-lg text-bat-light tracking-widest mb-4">NOUS SUIVRE</h3>
                        <div className="flex flex-col gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 group"
                                >
                                    <span
                                        className="flex-shrink-0 [&_svg]:w-5 [&_svg]:h-5"
                                        style={{ color: social.color }}
                                    >
                                        {social.icon}
                                    </span>
                                    <span className="text-bat-light text-sm group-hover:text-bat-yellow transition-colors duration-200">
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="border-t border-bat-gray mt-8 pt-6 text-center">
                    <p className="text-white text-xs">
                        © {new Date().getFullYear()} Gotham Reads — Tous droits réservés
                    </p>
                </div>
            </div>
        </footer>
    )
}
