import { Suspense, useState } from 'react';
import { useGetPokemonQuery } from '../../redux/pokemon/pokemon';
import Button from '../Button';
import { Link } from 'react-router-dom';
import PokemonCard from '../shared/PokemonCard';
import TypeFilter from '../shared/TypeFilter';
import Loader from '../shared/Loader';

const Home = () => {
    const [page, setPage] = useState(1);
    const { data, error, isFetching } = useGetPokemonQuery(page);
    return (
        <div>
            <TypeFilter setterFunction={() => console.log("setter")} />
            {error && <div>Error</div>}
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    <Suspense fallback={<Loader />}>
                        {data && data.results.map((pokemon: Pokemon) => (
                            <div className="col" key={pokemon.name}>
                                <PokemonCard  pokemonName={pokemon.name} />
                            </div>
                        ))}
                    </Suspense>
                </div>
            </div>

            <Button type="button" onClick={() => setPage(page - 1)} isLoading={isFetching}>
                Previous
            </Button>
            <Button type="button" onClick={() => setPage(page + 1)} isLoading={isFetching}>
                Next
            </Button>
        </div>
    );
};

export default Home;