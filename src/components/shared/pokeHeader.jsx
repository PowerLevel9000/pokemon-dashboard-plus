import { Link } from 'react-router-dom'

const PokeHeader = () => {
    return (
        <Link to={' '}>
            <div className='card-header d-flex gap-2'>
                <div className="logo-warper">
                    <img src={""} alt={"logo"} />
                </div>
                <h3 className='text-capitalize my-0'>Poked</h3>
            </div>
        </Link>
    )
}

export default PokeHeader