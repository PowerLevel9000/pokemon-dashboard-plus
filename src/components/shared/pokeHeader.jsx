import { Link } from 'react-router-dom'

const PokeHeader = ({pokeName, pokeImage}) => {
    return (
        <Link to={`/pokemon/${pokeName}`}>
            <div className='card-header d-flex justify-content-between'>
                <div className="logo-warper">
                    <img  src={pokeImage} alt={"logo"} />
                </div>
                <h3 className='text-capitalize text-center my-0'>{pokeName}</h3>
            </div>
        </Link>
    )
}

export default PokeHeader