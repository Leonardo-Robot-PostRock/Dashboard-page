import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localstorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);

        if (action.type.includes('pokemons/toggleFavourite')) {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favourite-pokemons', JSON.stringify(pokemons));
            return;
        }
        // console.log({state:state.getState()});
    }
}
