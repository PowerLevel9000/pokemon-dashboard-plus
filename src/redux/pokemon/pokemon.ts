import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            queryFn: async (pName: string) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}`);
                const tempData = await res.json();
                const { id, name, abilities, sprites: {front_default, back_default, back_shiny, front_shiny} } = tempData;
                const typesArr = tempData.types.map((type: any) => type.type.name);
                const abilitiesArr = abilities.map((ability: any) => ability.ability.name);
                return { data: { id, name, typesArr, abilitiesArr, sprites: [front_default, back_default, back_shiny, front_shiny] } };
            },
        }),
        getPokemon: builder.query<ListResponse<PokemonList>, number | void>({
            query: (page: any = 1) => `pokemon?limit=25&offset=${page * 25 - 25}`,
        }),
        getPokemonType: builder.query({
            queryFn: async () => {
                try {
                    const res = await fetch('https://pokeapi.co/api/v2/type');
                    const tempData = await res.json();
                    return { data: tempData.results };
                } catch (error: any) {
                    throw Error(error);
                }
            }
        }),
        getPokemonByType: builder.query({
            queryFn: async (type: string) => {
                try {
                    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
                    const tempData = await res.json();
                    const { pokemon: { name } } = tempData.pokemon;
                    return { data: name };
                }catch (error: any) {
                    throw Error(error); 
                }
            },
        })
    }),
});

export const { useGetPokemonByNameQuery, useGetPokemonQuery, useGetPokemonByTypeQuery, useGetPokemonTypeQuery } = pokemonApi;