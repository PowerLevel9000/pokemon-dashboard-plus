import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name: string) => `pokemon/${name}`,
        }),
        getPokemon: builder.query<ListResponse<PokemonList>, number | void>({
            query: (page: any = 1) => `pokemon?limit=100&offset=${page * 100 - 100}`,
        }),
        getPokemonByType: builder.query({
            query: (type: string) => `type/${type}`,
        })
    }),
});

export const { useGetPokemonByNameQuery, useGetPokemonQuery, useGetPokemonByTypeQuery } = pokemonApi;