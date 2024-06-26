import { configureStore, Middleware } from '@reduxjs/toolkit';
import counterReducer from './counter/counter';
import pokemonReducer from './pokemon/pokemon';

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { localstorageMiddleware } from './middlewares/localstorage-middleware';
// import { localstorageMiddleware } from './middlewares/localstorage-middleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localstorageMiddleware as Middleware)

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
