import React, { useRef, useState } from 'react';
import { useGetPokemonQuery } from '../../redux/pokemon/pokemon';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Home = () => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isFetching } = useGetPokemonQuery(page);
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {data && data.results.map((pokemon: Pokemon) => (
                <Link className='d-block' to={`/pokemon/${pokemon.name}`} key={pokemon.name}>{pokemon.name}</Link>
            ))}
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