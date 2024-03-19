import { useGetPokemonTypeQuery } from '../../redux/pokemon/pokemon'
import Error from '../shared/Error'
import Loader from '../shared/Loader'

const TypeFilter = ({ setterFunction, fixed }) => {
  const { data, error, isLoading } = useGetPokemonTypeQuery()
  return (
    <div>
      {
        isLoading ? (
          <Loader />
        ) : error ? (
          <Error error={error} data={"Type"} />
        ) : (
          <div className={`d-flex py-3 ${fixed && "fixed-top"} flex-wrap justify-content-around badge-bg`}>
            <span title='All filter' className='badge bg-success text-capitalize' onClick={setterFunction("")}>
              All
            </span>
            {
              data.map((item) => (
                <span 
                  key={item.name}
                  title={`type filter ${item.name}`}
                  className='badge bg-success text-capitalize'
                  onClick={setterFunction(item.name)}
                >
                  {item.name}
                </span>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default TypeFilter