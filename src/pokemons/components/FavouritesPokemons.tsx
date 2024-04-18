/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export const FavouritesPokemons = () => {
    const favouritesPokemons = useAppSelector(state => state.pokemons.favourites);
    //Redux crea una nueva referencia cada vez que se actualiza el estado.
    //Por ende, la solución es pasarle los valores del objeto del estado de redux al useState.
    const [pokemons, setPokemons] = useState(Object.values(favouritesPokemons));

    useEffect(() => {
        setPokemons(Object.values(favouritesPokemons));
    }, [favouritesPokemons]);

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
