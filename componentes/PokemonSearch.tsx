'use client'

import React from 'react'

interface PokemonSearchProps {
    value: string
    onChange: (value: string) => void
}

export const PokemonSearch = ({ value, onChange }: PokemonSearchProps) => {
    return (
        <div className="flex justify-center mb-8">
            <input
                type="text"
                placeholder="Buscar Pokemon..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full max-w-md p-3 rounded-xl
                bg-[#1e2333]
                text-white
                border border-gray-700
                outline-none
                focus:border-blue-500"
            />
        </div>
    )
}
