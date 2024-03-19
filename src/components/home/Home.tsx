import { Suspense, useEffect, useState } from 'react';
import { useGetPokemonQuery } from '../../redux/pokemon/pokemon';
import Button from '../Button';
import PokemonCard from '../shared/PokemonCard';
import TypeFilter from './TypeFilter';
import Loader from '../shared/Loader';
import Hero from '../Hero';
import Error from '../shared/Error';

const Home = () => {
    const [page, setPage] = useState(1);
    const { data, error, isFetching } = useGetPokemonQuery(page);
    const [scrollLength, setScrollLength] = useState(0)

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setScrollLength(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollLength]);

    // Increment and decrement page
    const incrementor = () => {
        if (data && data.count / 25 > 0) {
            setPage(page + 1)
        };
    }

    const decrementor = () => {
        if (page > 1) {
            setPage(page - 1)
        };
    }

    return (
        <main className='home-container'>
            <Hero />
            {/* Setter function would be used in future feature */}
            <TypeFilter setterFunction={() => console.log} fixed={scrollLength > 650} />
            {error && <Error error={error} data={"Pokemon"} />}
            <div className='pokemon-container'>
                <div className="container  my-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        <Suspense fallback={<Loader />}>
                            {data && data.results.map((pokemon: Pokemon) => (
                                <div className="col" key={pokemon.name}>
                                    <PokemonCard pokemonName={pokemon.name} />
                                </div>
                            ))}
                        </Suspense>
                    </div>
                </div>
                <Button
                    title={page === 1 ? "Back" : "disable"}
                    type="button"
                    className={scrollLength > 650 ? "btn btn-primary position-fixed top-50 start-0" : "hidden"}
                    button={"<<Back"} onClick={() => decrementor()}
                    isLoading={isFetching}
                    disabled={page === 1}
                />
                <Button
                    type="button"
                    tile={data && data.count / 25 < page? "next" : "disable"}
                    className={scrollLength > 650 ? "btn btn-primary position-fixed top-50 end-0" : "hidden"}
                    button={"next>>"}
                    onClick={() => incrementor()}
                    isLoading={isFetching}
                    disabled={data && data.count / 25 < page}
                />
            </div>
        </main>
    );
};

export default Home;