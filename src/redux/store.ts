import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemon/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";
import modalSlice from "./modalSlice";

const store = configureStore({
    reducer: {
        modal: modalSlice,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    
    // Add the API middleware to the store
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            // Disable the Serializability check
            serializableCheck: false,
        }).concat(pokemonApi.middleware);
    }
});

setupListeners(store.dispatch);

export default store;
