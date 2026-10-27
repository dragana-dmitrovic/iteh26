"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { mockDecks, mockSubjects } from "@/mock/data"
import { FullDeckDto } from "@/shared/types"

export default function DeckBrowser() {
    const [decks, setDecks] = useState<FullDeckDto[]>(mockDecks);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        console.log(search)
        let data = mockDecks;

        if (search.trim()) {
            data = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
        }
        setDecks(data)
    }, [search])

    return (
        <div className="mx-auto max-w-7xl p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold">Špilovi kartica</h1>
                <p className="mt-2 text-gray-500">Pretraži špil po nazivu.</p>
            </header>
            <div className="flex flex-col gap-8 md:flex-row">
                <aside className="md:w-64">
                    <input
                        type="text"
                        placeholder="Pretraga spilova"
                        className="w-full rounded-lg border border-gray-200 p-3 shadow-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </aside>
                <section className="flex-1">
                    {decks.length === 0 ? <p>Nema takvih spilova</p> :
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {decks.map((deck) => (
                                <article key={deck.id} className="overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                                    <div className="overflow-hidden">
                                        <Image src={"https://picsum.photos/400/300"} alt="Slika" width={400} height={300} className="w-full transition-transform duration-300 ease-out hover:scale-110" />
                                    </div>
                                    <div className="p-4">
                                        <p className="text-sm text-gray-500">{deck.subject.name}</p>
                                        <h3 className="mt-1 text-lg font-medium">{deck.name}</h3>
                                        <p className="mt-2 text-sm">{deck.cardsCount} kartica</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    }
                </section>
            </div>
        </div>
    )
}