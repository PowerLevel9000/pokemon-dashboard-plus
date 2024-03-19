import { useParams } from 'react-router-dom'
import { useGetPokemonDetailQuery } from '../../redux/pokemon/pokemon';
import PokeHeader from '../shared/pokeHeader';
import DetailCard from './DetailCard';
import DetailStats from './DetailStats';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
const Details = () => {
    const { pokemonName } = useParams();
    const { data, error, isLoading
    } = useGetPokemonDetailQuery(pokemonName || '');

    // if loading, show loader
    if (isLoading) return <Loader />
    // if error, show error
    if (error) return <Error error={error} data={"Details"} />
    // if no loading and no error, show data
    return (
        <main className='home-container'>
            <div title={`Detail title of ${pokemonName}`} className='alert alert-success d-flex gap-3 p-3 align-items-center justify-content-center'>
                <div>
                    <h2>Details of the</h2>
                </div>
                <PokeHeader pokeName={pokemonName} pokeImage={data&& 'image' in data && data?.image} />
            </div>
            <DetailCard {...data} />
            {data && 'stats' in data && <DetailStats stat={data.stats} />}
        </main>
    )
}

export default Details