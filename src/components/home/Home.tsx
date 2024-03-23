import { Suspense, useEffect, useRef, useState } from 'react';
import { useGetPokemonQuery } from '../../redux/pokemon/pokemon';
import Button from '../Button';
import PokemonCard from '../shared/PokemonCard';
import TypeFilter from './TypeFilter';
import Loader from '../shared/Loader';
import Hero from '../Hero';
import Error from '../shared/Error';
import { useDispatch, useSelector } from 'react-redux';
import TypePokemon from './TypePokemon';
import { setNext, setPage, setPrevious } from '../../redux/feature/typeFilterSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { type, next, previous, page, inMobile: isMobile } = useSelector((state: any) => state.typeFilter);
    const { data, error, isFetching } = useGetPokemonQuery(page);
    const dispatch = useDispatch();
    const [scrollLength, setScrollLength] = useState<number>(0)
    const navigate = useNavigate()
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
    const nextPagination = (): void => {
        if ((data && data.count / 25 > 0)) {
            dispatch(setPage(page + 1))
            dispatch(setPrevious(false))
        } else if (data && data.results.length < 25) {
            dispatch(setPage(1))
            dispatch(setNext(true))
        }
        navigate('/#filter')
    }

    const decrementor = (): void => {
        if (page > 1) {
            dispatch(setPage(page - 1))
            dispatch(setPrevious(false))
        } else if (page === 2) {
            dispatch(setPrevious(true))
        }
        navigate('/#filter')
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
                    className={scrollLength > 650 ? "btn btn-secondary paginator position-fixed top-50 start-0" : "hidden"}
                    button={isMobile ? "<<" : "<<Back"} onClick={() => decrementor()}
                    isLoading={isFetching}
                    disabled={page === 1 || previous}
                />
                <Button
                    type="button"
                    tile={next ? "next" : "disable"}
                    className={scrollLength > 650 ? "btn btn-secondary paginator position-fixed top-50 end-0" : "hidden"}
                    button={isMobile ? ">>" : "next>>"}
                    onClick={() => nextPagination()}
                    isLoading={isFetching}
                    disabled={next}
                />
            </div>
        </main>
    );
};

export default Home;