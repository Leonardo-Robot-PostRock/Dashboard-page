import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

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
        toggleFavourite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state[id]) {
                delete state[id];
                return;
            }

            state[id] = pokemon;
        }
    }
});

export const { toggleFavourite } = pokemonSlice.actions;

export default pokemonSlice.reducer;