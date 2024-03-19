import { useGetPokemonTypeQuery } from '../../redux/pokemon/pokemon'
import Loader from '../shared/Loader'

const TypeFilter = ({ setterFunction, fixed }) => {
  const { data, error, isLoading } = useGetPokemonTypeQuery()
  return (
    <div>
      {
        isLoading ? (
          <Loader />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className={`d-flex py-3 ${fixed && "fixed-top"} flex-wrap justify-content-around badge-bg`}>
            <span className='badge bg-success text-capitalize' onClick={setterFunction("")}>
              All
            </span>
            {
              data.map((item) => {
                return (
                  <span className='badge bg-success text-capitalize'
                    onClick={setterFunction(item.name)}
                  >
                    {item.name}
                  </span>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default TypeFilter