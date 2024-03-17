import React from 'react'
import { useGetPokemonTypeQuery } from '../../redux/pokemon/pokemon'

const TypeFilter = ({setterFunction}) => {
  const {data, error, isLoading} = useGetPokemonTypeQuery()
  return (
    <div>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <select onChange={(e) => setterFunction(e.target.value)}>
            <option value=''>All</option>
            {data.results.map((type, index) => (
              <option key={index} value={type.name}>{type.name}</option>
            ))}
          </select>
        )
      }
    </div>
  )
}

export default TypeFilter