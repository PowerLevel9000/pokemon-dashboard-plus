import { Suspense, useEffect } from 'react'
import Loader from '../shared/Loader';
import PokemonCard from '../shared/PokemonCard';
import { useGetPokemonByTypeQuery } from '../../redux/pokemon/pokemon';
import Error from '../shared/Error';
import { setNext } from '../../redux/feature/typeFilterSlice';

const TypePokemon = ({ type, page }) => {
    const { data, error, isLoading } = useGetPokemonByTypeQuery(type);
    const paginateData = data && data.slice((page-1) * 10, page * 10);
    useEffect(() => {
        if(data && paginateData.length < 10) {
            setNext(true)
        }
    }, [paginateData]);

    if (isLoading) return <Loader />
    if (error) return <Error error={error} data={type} />
    return (
        <Suspense fallback={<Loader />}>
            {data && paginateData.map((pokemonName) => (
                <PokemonCard key={pokemonName} pokemonName={pokemonName} />
            ))}
        </Suspense>
    )
}

export default TypePokemon