export default function ComicCard({ comic }) {
    return (
        <div className="bg-bat-dark rounded-lg overflow-hidden shadow-bat hover:shadow-bat-lg transition-all duration-300 cursor-pointer">

            <img
                src={comic.cover}
                alt={comic.title}
                className="w-full h-64 object-cover"
            />

            <div className="p-4">
                <h2 className="font-display text-xl text-bat-light mb-1">{comic.title}</h2>
                <p className="text-sm text-bat-muted">{comic.author}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-bat-yellow/10 text-bat-yellow text-xs font-bold rounded">
                    {comic.genre}
                </span>
                <button className="mt-4 w-full py-2 bg-bat-yellow text-bat-black font-bold text-sm uppercase tracking-widest hover:bg-bat-gold transition-colors duration-200">
                    Lire
                </button>
            </div>
        </div>
    )
}