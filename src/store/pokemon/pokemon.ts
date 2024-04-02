import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";

/*
    {
        '1' : {id:1, name: 'pikachu'},
        '2' : {id:1, name: 'pikachu'}
    }
*/

interface PokemonState {
    [key: string]: SimplePokemon;
}

const initialState: PokemonState = {
    '1': { id: '1', name: 'pikachu' }
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

    }
});

export const { } = pokemonSlice.actions;

export default pokemonSlice.reducer;