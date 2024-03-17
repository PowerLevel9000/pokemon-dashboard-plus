import { useParams } from 'react-router-dom'
import PokemonCard from '../shared/PokemonCard';

const Details = () => {
    const { pokemonName } = useParams();

    return (
        <>
            Welcome to the details page
            <p>Details for {pokemonName}</p>
            <PokemonCard pokemonName={pokemonName} />
        </>
    )
}

export default Details