import { useParams } from 'react-router-dom'
import { useGetPokemonDetailQuery } from '../../redux/pokemon/pokemon';
import PokeHeader from '../shared/pokeHeader';
import DetailCard from './DetailCard';
import DetailStats from './DetailStats';
const Details = () => {
    const { pokemonName } = useParams();
    const { data, error, isLoading 
    } = useGetPokemonDetailQuery(pokemonName);
    if (isLoading) return <div className='alert alert-info'>Loading...</div>
    if (error) return <div className='alert alert-danger'>Error: {error}</div>
    return (
        <main className='home-container'>
            <div className='alert alert-success d-flex gap-3 p-3 align-items-center justify-content-center'>
                <div>
                    <h2>Details of the</h2>
                </div>
                <PokeHeader pokeName={pokemonName} pokeImage={data?.image} />
            </div>
            <DetailCard {...data} />
            <DetailStats stat={data?.stats} />
        </main>
    )
}

export default Details