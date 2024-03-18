import React from 'react'
import { useGetPokemonByTypeQuery, useGetPokemonTypeQuery } from '../../redux/pokemon/pokemon'

const TypeFilter = ({ setterFunction }) => {
  const { data, error, isLoading } = useGetPokemonTypeQuery()
  return (
    <div>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <button onClick={setterFunction("")}>
              All
            </button>
            {
              data.map((item) => {
                return (
                  <button
                    onClick={setterFunction(item.name)}
                  >
                    {item.name}
                  </button>
                )
              })
            }
          </>
        )
      }
    </div>
  )
}

export default TypeFilter