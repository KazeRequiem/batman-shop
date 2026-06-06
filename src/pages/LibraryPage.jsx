import { comics as comicsData } from "../data/comics"
import ComicCard from "../components/ui/ComicCard"
import { useState, useEffect } from 'react'

export default function LibraryPage() {
    const [comics, setComics] = useState([])
    const [loading, setLoading] = useState(true)
    const [error] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setComics(comicsData)
            setLoading(false)
        }, 1000)
    }, [])

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <p className="font-display text-2xl text-bat-yellow tracking-widest animate-pulse">
                CHARGEMENT...
            </p>
        </div>
    )

    if (error) return (
        <div className="flex justify-center items-center h-64">
            <p className="font-display text-2xl text-red-500 tracking-widest">
                ERREUR : {error}
            </p>
        </div>
    )

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="font-display text-5xl text-bat-yellow mb-8 tracking-widest">
                BIBLIOTHÈQUE
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comics.map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                ))}
            </div>
        </div>
    )
}