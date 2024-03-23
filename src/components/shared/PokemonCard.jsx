import { useDispatch, useSelector } from 'react-redux'
import { useGetPokemonByNameQuery } from '../../redux/pokemon/pokemon'
import Loader from './Loader'
import { showModal } from '../../redux/feature/modalSlice'
import { Link, useNavigate } from 'react-router-dom'
import PokeHeader from './pokeHeader'
import Error from './Error'
import { setPage, setType } from '../../redux/feature/typeFilterSlice'

const PokemonCard = ({ pokemonName }) => {
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);
    const { type } = useSelector((store) => store.typeFilter);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const typeRender = (query) => {
        if (query === type) return
        dispatch(setType(query))
        dispatch(setPage(1));
        if (window.location.pathname !== "/") {
            console.log("navigation")
            navigate('/#filter')
        }
    }
    // if loading, show loader
    if (isLoading) return <Loader />
    // if error, show error
    if (error) return <Error error={error} data={pokemonName} />

    return (
        <div className="col" key={pokemonName}>
            <div className="card pokemon-card p-2">
                <PokeHeader pokeName={data.name} pokeImage={data.front_shiny} />
                <img
                    data-bs-toggle="modal"
                    title={`Preview of ${data.name}`}
                    data-bs-target="#exampleModal"
                    onClick={() => dispatch(showModal({
                        title: data.name,
                        body: <img height="400px" width="100%" src={data.front_default || data.front_shiny} alt={data.name} />,
                        image: data.front_default,
                    }))}
                    src={data.front_default || data.front_shiny}
                    alt={data.name}
                    height="200px"
                    className="card-img-top courser-pointer p-2 poke-img"
                />
                <div className="card-body">
                    <h5 title={data.name} className="card-title text-capitalize">{data.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex gap-2">
                        Types:
                        {' '}
                        {
                            data.typesArr.map(type => (
                                <button
                                    className='badge bg-info text-capitalize'
                                    onClick={() => typeRender(type)}
                                >
                                    {type}
                                </button>))
                        }
                    </li>
                </ul>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div className='w-50 d-flex gap-2'>
                        <Link title={`See Details of ${pokemonName}`} to={`/pokemon/${pokemonName}`} className="card-link btn btn-primary fs-6">Details</Link>
                        <button
                            type="button" onClick={
                                () => dispatch(showModal({
                                    title: data.name,
                                    body: <img height="400px" width="100%" src={data.front_default || data.front_shiny} alt={data.name} />,
                                    image: data.front_default,
                                }))
                            }
                            className="btn btn-success fs-6"
                            title={`Preview of ${data.name}`}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Preview
                        </button>
                    </div>
                    <i
                        className='fa-regular fa-heart'
                    ></i>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard