import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const arrOutput = (arr: any, property: any) => {
    return arr.map((item: any) => item[property].name);
}

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            queryFn: async (pName: string) => {
                try {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}`);
                    if (!res.ok) {
                        throw new Error(`Network response was not ok ${res.status} ${res.statusText}`);
                    }
                    const tempData = await res.json();
                    const { id, name, abilities, sprites: { front_shiny, other: { dream_world: { front_default } } } } = tempData;
                    const typesArr = tempData.types.map((type: any) => type.type.name);
                    const abilitiesArr = abilities.map((ability: any) => ability.ability.name);
                    return { data: { id, name, typesArr, abilitiesArr, front_default, front_shiny } };
                } catch (error: any) {
                    return { error: error.message };
                }
            },
        }),
        getPokemon: builder.query<ListResponse<PokemonList>, number | void>({
            query: (page: any = 1) => `pokemon?limit=25&offset=${page * 25 - 25}`,
        }),
        getPokemonType: builder.query({
            queryFn: async () => {
                try {
                    const res = await fetch('https://pokeapi.co/api/v2/type');
                    if (!res.ok) {
                        throw new Error(`Network response was not ok ${res.status} ${res.statusText}`);
                    }
                    const tempData = await res.json();
                    return { data: tempData.results };
                } catch (error: any) {
                    return { error: error };
                }
            }
        }),
        getPokemonByType: builder.query({
            queryFn: async (type: string) => {
                try {
                    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
                    if (!res.ok) {
                        throw new Error(`Network response was not ok ${res.status} ${res.statusText}`);
                    }
                    const tempData = await res.json();
                    const { pokemon: { name } } = tempData.pokemon;
                    return { data: name };
                } catch (error: any) {
                    return { error: error.message };
                }
            },
        }),
        getPokemonDetail: builder.query({
            // query: (name: string) => `pokemon/${name}`,
            // transformResponse: (response: any) => {
            //     // if (!response.ok) {
            //     //     // Handle network error
            //     //     return { error: `Network response was not ok ${response.status} ${response.statusText}` };
            //     // }
            
            //     try {
            //         const {
            //             id,
            //             name,
            //             height,
            //             weight,
            //             base_experience,
            //             types,
            //             moves,
            //             held_items,
            //             stats,
            //             abilities,
            //             sprites: {
            //                 front_shiny,
            //                 other: {
            //                     dream_world: { front_default: image }
            //                 }
            //             }
            //         } = response;
            
            //         const typesArr = arrOutput(types, "type");
            //         const abilitiesArr = arrOutput(abilities, "ability");
            //         const moveArr = arrOutput(moves, "move");
            //         const itemsArr = arrOutput(held_items, "item");
            
            //         return {
            //             id,
            //             name,
            //             image,
            //             front_shiny,
            //             height,
            //             weight,
            //             base_experience,
            //             typesArr,
            //             abilitiesArr,
            //             moveArr,
            //             itemsArr,
            //             stats,
            //         };
            //     } catch (error: any) {
            //         // Handle any other errors that might occur during response transformation
            //         return { error: `Error processing response: ${error.message}` };
            //     }
            // }
            queryFn: async (pokeName: string) => {
                try {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
                    if (!res.ok) {
                        throw new Error(`Network response was not ok ${res.status} ${res.statusText}`);
                    }
                    const tempData = await res.json();
                    const {
                        id,
                        name,
                        height,
                        weight,
                        base_experience,
                        types,
                        moves,
                        held_items,
                        stats,
                        abilities,
                        sprites: {
                            front_shiny,
                            other: {
                                dream_world: { front_default: image }
                            }
                        }
                    } = tempData;
                    const typesArr = arrOutput(types, "type");
                    const abilitiesArr = arrOutput(abilities, "ability");
                    const moveArr = arrOutput(moves, "move");
                    const itemsArr = arrOutput(held_items, "item");
                    return {data:{
                        id,
                        name,
                        image,
                        front_shiny,
                        height,
                        weight,
                        base_experience,
                        typesArr,
                        abilitiesArr,
                        moveArr,
                        itemsArr,
                        stats,
                    }};
                } catch (error: any) {
                    return { error: error.message };
                }
            },
            
        })
    }),
});

export const { useGetPokemonByNameQuery, useGetPokemonQuery, useGetPokemonByTypeQuery, useGetPokemonTypeQuery, useGetPokemonDetailQuery } = pokemonApi;