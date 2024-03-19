import { Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { useGetPokemonByNameQuery } from '../../redux/pokemon/pokemon'
import Loader from './Loader'
import { showModal } from '../../redux/modalSlice'
import { Link } from 'react-router-dom'
import PokeHeader from './pokeHeader'

const PokemonCard = ({ pokemonName }) => {
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);
    const dispatch = useDispatch();

    if (error) return <div>Error: {error}</div>
    if (isLoading) return <Loader />

    return (
        <>
            <div className="card pokemon-card p-2">
                <PokeHeader pokeName={data.name} pokeImage={data.front_shiny} />
                <Suspense fallback={<Loader />}>
                    <img
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => dispatch(showModal({
                            title: data.name,
                            body: <img height="400px" width="100%" src={data.front_default} />,
                            image: data.front_default,
                        }))}
                        src={data.front_default} alt={data.name}
                        height="200px" className="card-img-top p-2 poke-img" />
                </Suspense>
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{data.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex gap-2">
                        Types:
                        {' '}
                        {
                            data.typesArr.map(type => (
                                <span className='badge bg-info text-capitalize'>
                                    {type}
                                </span>))
                        }
                    </li>
                </ul>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div className='w-50 d-flex gap-2'>
                        <Link to={`/pokemon/${pokemonName}`} className="card-link btn btn-primary fs-6">Details</Link>
                        <button
                            type="button" onClick={
                                () => dispatch(showModal({
                                    title: data.name,
                                    body: <img height="400px" width="100%" src={data.front_default} />,
                                    image: data.front_default,
                                }))
                            }
                            className="btn btn-success fs-6"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Preview
                        </button>
                    </div>
                    <i className='fa-regular fa-heart'></i>
                </div>
            </div>
        </>
    )

}

export default PokemonCard