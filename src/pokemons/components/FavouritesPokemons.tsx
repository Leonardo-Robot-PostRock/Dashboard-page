/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

export const FavouritesPokemons = () => {
    const favouritesPokemons = useAppSelector(state => Object.values(state.pokemons.favourites));
    const [pokemons, setPokemons] = useState(favouritesPokemons)

    return (
        <>
            {
                !pokemons.length
                    ? <NoFavourites />
                    : <PokemonGrid pokemons={pokemons} />
            }
        </>
    )
}

export default function NoFavourites() {
    return (
        <div className='flex flex-col h-[50vh] items-center justify-center'>
            <IoHeartOutline size={100} className='text-red-500' />
            <span>No hay favoritos</span>
        </div>
    )
}
