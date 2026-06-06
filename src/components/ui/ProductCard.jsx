export default function ProductCard({ product }) {
    return (
        <div className="bg-bat-dark rounded-lg overflow-hidden shadow-bat hover:shadow-bat-lg transition-all duration-300 cursor-pointer flex flex-col">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
                <h2 className="font-display text-xl text-bat-light mb-1">{product.name}</h2>
                <p className="text-sm text-bat-muted flex-1">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-bat-yellow font-bold text-lg">{product.price.toFixed(2)} €</span>
                    <button className="px-4 py-2 bg-bat-yellow text-bat-black font-bold text-xs uppercase tracking-widest hover:bg-bat-gold transition-colors duration-200">
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
    )
}