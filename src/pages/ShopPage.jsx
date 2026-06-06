import { paperEditions, goodies } from "../data/shop"
import ProductCard from "../components/ui/ProductCard"

export default function ShopPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            <section className="mb-16">
                <h1 className="font-display text-5xl text-bat-yellow mb-2 tracking-widest">
                    ÉDITIONS PAPIER
                </h1>
                <p className="text-bat-muted mb-8">Les grands classiques de Batman en version imprimée.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paperEditions.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section>
                <h1 className="font-display text-5xl text-bat-yellow mb-2 tracking-widest">
                    GOODIES
                </h1>
                <p className="text-bat-muted mb-8">Figurines, mugs, posters et bien plus pour les fans.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {goodies.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

        </div>
    )
}