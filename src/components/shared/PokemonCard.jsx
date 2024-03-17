import React from 'react'
import { useGetPokemonByNameQuery } from '../../redux/pokemon/pokemon'

const PokemonCard = ({ pokemonName }) => {
    const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(pokemonName)
    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <pre>
                    {JSON.stringify(data)}
                </pre>
            )}
        </>
    )
}

export default PokemonCard