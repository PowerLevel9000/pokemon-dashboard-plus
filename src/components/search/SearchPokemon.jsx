import { Suspense, useEffect, useState } from 'react'
import { useGetPokemonByNameQuery } from '../../redux/pokemon/pokemon';
import PokemonCard from '../shared/PokemonCard';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import { useDocumentTitle } from '../../lib/date';

const Search = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')
  const [timeoutId, setTimeoutId] = useState('');
  const { data, error } = useGetPokemonByNameQuery(query || "bulbasaur");
  useDocumentTitle(search || 'Search Pokemon')

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId)
      console.log("Cleared")
    }
  }, [timeoutId])

  // Debounce search
  const debounceSearch = (e) => {
    setSearch(e.target.value)
    clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => {
      setQuery(e.target.value.toLowerCase())
    }, 1000))
  }

  return (
    <section className='search-section w-75 container my-5'>
      <input
        title='Search Pokemon by Name or Number'
        type="text"
        placeholder="Search Pokemon By Name or Number ex bulbasur or 1"
        value={search}
        onChange={debounceSearch}
        id='search'
        className='form-control w-50 mx-auto mb-3'
      />
      {
        error ? (<Error error={error} data={"Pokemon"} />) : (
          <Suspense fallback={<Loader />}>
            <PokemonCard pokemonName={data?.name} />
          </Suspense>)
      }
    </section>
  )
}

export default Search