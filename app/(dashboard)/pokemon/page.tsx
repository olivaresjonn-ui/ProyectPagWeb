import React from 'react'
import { obtenerPokemon } from '@/services/pokeApi'
import { PokemonCatalogo } from '@/componentes/PokemonCatalogo'

export default async function pokemonPage() {

    // IDs del 1 al 50
    const ids = Array.from({ length: 50 }, (_, i) => i + 1)

    // Obtener los 50 pokemones
    const pokemones = await Promise.all(
        ids.map((id) => obtenerPokemon(id.toString()))
    )

    // Eliminamos los que hayan fallado
    const pokemonesValidos = pokemones.filter(
        (pokemon) => pokemon !== null
    )

    return (
        <main className="min-h-screen bg-[#121417] p-8 font-sans">

            <h1 className="text-4xl text-white font-bold mb-8 text-center">
                Catálogo de Pokemon
            </h1>

            <PokemonCatalogo
                pokemones={pokemonesValidos}
            />

        </main>
    )
}