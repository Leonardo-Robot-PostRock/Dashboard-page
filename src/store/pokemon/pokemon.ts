import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

// const getInitialState = (): PokemonState => {
//     if (typeof localStorage === 'undefined') return {};
//     const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}')
//     return favourites;
// }

interface PokemonState {
    favourites: { [key: string]: SimplePokemon };
}

const initialState: PokemonState = {
    favourites: {}
    // ...getInitialState(),
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        //Este state evita errores al cargar un estado que puede entrar en conflicto con lo que
        //tiene Next del lado del servidor con el lado del cliente
        setFavouritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favourites = action.payload;
        },

        toggleFavourite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state.favourites[id]) {
                delete state.favourites[id];
                return;
            }

            state.favourites[id] = pokemon;
        }
    }
});

export const { toggleFavourite, setFavouritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;