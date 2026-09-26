import React from "react";
import Image from 'next/image';

interface PokemonCardProps {
    name: string,
    image: string,
    types: string[]
}

export const PokemonCard = ({ name, image, types }: PokemonCardProps) => {
    return (
        <div className='bg-[#1e2333]
        rounded-2xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-lg
        border
        border-gray-400/40
        min-h-[250px]'>

            <div className='relative
            w-40
            h-40
            mb-4
            drop-shadow-[0_10px_10px_rgb(0,0,0,0.6)]'>

                <Image
                    src={image}
                    alt={name}
                    fill
                    className='object-contain'
                    priority
                />

            </div>

            <h3 className='text-gray-100
            text-lg
            font-medium
            capitalize
            tracking-wide
            mb-3'>
                {name}
            </h3>

            <div className='flex gap-2'>
                {types.map((type) => (
                    <span
                        key={type}
                        className='text-xs px-3 py-1
                        rounded-full
                        bg-[#151924]
                        text-gray-300'
                    >
                        {type}
                    </span>
                ))}
            </div>

        </div>
    );
};