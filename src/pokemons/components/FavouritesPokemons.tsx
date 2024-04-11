"use client"
import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid";

export const FavouritesPokemons = () => {
    const favouritesPokemons = useAppSelector(state => Object.values(state.pokemons));

    return (
        <PokemonGrid pokemons={favouritesPokemons} />
    )
}
