import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

const getInitialState = () => {
    const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}')
    return favourites;
}

interface PokemonState {
    [key: string]: SimplePokemon;
}

const initialState: PokemonState = {
    ...getInitialState(),
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