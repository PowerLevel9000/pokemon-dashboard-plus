import { Suspense, useEffect, useState } from 'react';
import { useGetPokemonQuery } from '../../redux/pokemon/pokemon';
import Button from '../Button';
import PokemonCard from '../shared/PokemonCard';
import TypeFilter from './TypeFilter';
import Loader from '../shared/Loader';
import Hero from '../Hero';
import Error from '../shared/Error';
import { useDispatch, useSelector } from 'react-redux';
import TypePokemon from './TypePokemon';
import { toggleNext, togglePrevious } from '../../redux/feature/typeFilterSlice';

const Home = () => {
    const [page, setPage] = useState<number>(1);
    const { data, error, isFetching } = useGetPokemonQuery(page);
    const { type, next, previous } = useSelector((state: any) => state.typeFilter);
    const dispatch = useDispatch();
    const [scrollLength, setScrollLength] = useState<number>(0)

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

    const controlDisable = () => {
        if (type === "all" && data && data.results.length < 25) {
            return next
        }
        if (type !== "all" && page > 6) {
            return true
        }
    }

    // Increment and decrement page
    const nextPagination = (): void => {
        if ((data && data.count / 25 > 0)) {
            setPage(page + 1)
            dispatch(togglePrevious(false))
        } else if (data && data.results.length < 25) {
            setPage(1)
            dispatch(toggleNext(true))
        }
    }

    const decrementor = (): void => {
        if (page > 1) {
            setPage(page - 1)
            dispatch(togglePrevious(false))
        } else if (page === 2) {
            dispatch(togglePrevious(true))
        }
    }

    return (
        <main className='home-container'>
            <Hero />
            {/* Setter function would be used in future feature */}
            <TypeFilter fixed={scrollLength > 650} />
            {error && <Error error={error} data={"Pokemon"} />}
            <div className='pokemon-container'>
                <div className="container  my-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        <Suspense fallback={<Loader />}>
                            {type === "all" && data && data.results.map((pokemon: Pokemon) => (
                                <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
                            ))}
                            {type !== "all" && data && <TypePokemon type={type} page={page} />}
                        </Suspense>
                    </div>
                </div>
                <Button
                    title={previous ? "Back" : "disable"}
                    type="button"
                    className={scrollLength > 650 ? "btn btn-primary position-fixed top-50 start-0" : "hidden"}
                    button={"<<Back"} onClick={() => decrementor()}
                    isLoading={isFetching}
                    disabled={previous}
                />
                <Button
                    type="button"
                    tile={next ? "next" : "disable"}
                    className={scrollLength > 650 ? "btn btn-primary position-fixed top-50 end-0" : "hidden"}
                    button={"next>>"}
                    onClick={() => nextPagination()}
                    isLoading={isFetching}
                    disabled={controlDisable()}
                />
            </div>
        </main>
    );
};

export default Home;