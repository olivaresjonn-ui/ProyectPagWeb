'use client'

import React, { useState } from 'react'
import { PokemonCard } from './PokemonCard'
import { PokemonSearch } from './PokemonSearch'

interface PokemonCatalogoProps {
    pokemones: any[]
}

export const PokemonCatalogo = ({ pokemones }: PokemonCatalogoProps) => {

    const [busqueda, setBusqueda] = useState('')

    const pokemonesFiltrados = pokemones.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
    )

    return (
        <div>

            <PokemonSearch
                value={busqueda}
                onChange={setBusqueda}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {pokemonesFiltrados.map((pokemon) => (

                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}//esta la cambie porque no me cargaban las imaganes con el artwork
                        types={pokemon.types.map((t: any) => t.type.name)}
                    />

                ))}

            </div>

            {pokemonesFiltrados.length === 0 && (
                <p className="text-center text-gray-400 mt-8">
                    No se encontró ningún pokemon
                </p>
            )}

        </div>
    )
}