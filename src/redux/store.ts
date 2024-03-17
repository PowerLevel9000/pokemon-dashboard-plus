import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemon/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pokemonApi.middleware);
    }
});

setupListeners(store.dispatch);

export default store;
