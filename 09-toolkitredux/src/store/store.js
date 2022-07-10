import { configureStore} from '@reduxjs/toolkit';
import { toDosApi } from './apis/toDosApi';
import {counterSlice} from './Slice/counter';
import { pokemonSlice } from './Slice/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [toDosApi.reducerPath]: toDosApi.reducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
    .concat( toDosApi.middleware ) 
})