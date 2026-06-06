import { socials } from "../data/socials.jsx"

export default function SocialPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">

            <h1 className="font-display text-5xl text-bat-yellow mb-2 tracking-widest">
                RÉSEAU SOCIAL
            </h1>
            <p className="text-bat-muted mb-12">
                Suivez Gotham Reads sur vos plateformes préférées et rejoignez la communauté.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-bat-dark rounded-lg p-6 flex items-start gap-5 border border-bat-gray hover:border-opacity-80 transition-all duration-300 hover:-translate-y-1"
                        style={{ "--social-color": social.color }}
                    >
                        <div
                            className="p-3 rounded-lg flex-shrink-0 transition-colors duration-300"
                            style={{ backgroundColor: social.color + "22", color: social.color }}
                        >
                            {social.icon}
                        </div>
                        <div className="flex-1">
                            <h2
                                className="font-display text-2xl tracking-wide mb-1 transition-colors duration-300"
                                style={{ color: social.color }}
                            >
                                {social.name}
                            </h2>
                            <p className="text-bat-muted text-xs font-bold mb-2 uppercase tracking-widest">
                                {social.handle}
                            </p>
                            <p className="text-bat-light text-sm">
                                {social.description}
                            </p>
                        </div>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-5 h-5 text-bat-gray group-hover:text-bat-yellow transition-colors duration-300 flex-shrink-0 mt-1"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                ))}
            </div>
        </div>
    )
}