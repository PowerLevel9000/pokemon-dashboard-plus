import { Suspense, useEffect, useState } from 'react'
import { useGetAllPokemonNameQuery, useGetPokemonByNameQuery } from '../../redux/pokemon/pokemon';
import PokemonCard from '../shared/PokemonCard';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import { useDocumentTitle } from '../../lib/date';

const Search = () => {
  const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('')
  // const [timeoutId, setTimeoutId] = useState('');
  // const { data, error } = useGetPokemonByNameQuery(query || "bulbasaur");
  const { data } = useGetAllPokemonNameQuery();
  const [firstSixMatching, setFirstSixMatching] = useState([]);
  useDocumentTitle(search || 'Search Pokemon')

  // Clear timeout on unmount
  // useEffect(() => {
  //   return () => {
  //     clearTimeout(timeoutId)
  //     console.log("Cleared")
  //   }
  // }, [timeoutId])

  const handelChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value !== "") {
      const matching = data.filter((item) =>
        item.includes(e.target.value),
      );
      setFirstSixMatching(matching.splice(0, 14));
    } else {
      setFirstSixMatching([]);
    }
  };

  // Debounce search
  // const debounceSearch = (e) => {
  //   setSearch(e.target.value)
  //   clearTimeout(timeoutId)
  //   setTimeoutId(setTimeout(() => {
  //     setQuery(e.target.value.toLowerCase())
  //   }, 1000))
  // }

  return (
    <section className='search-section container my-5'>
      <div className="search-container w-50 mx-auto mb-3 position-relative">
        <input
          title='Search Pokemon by Name or Number'
          type="text"
          placeholder="Search Pokemon By Name or Number ex bulbasur or 1"
          value={search}
          onChange={handelChange}
          id='search'
          className='form-control'
        />
        <ul className='position-absolute d-flex justify-content-center flex-wrap gap-2 w-100 ms-0 ps-0 alert-success'>
          {firstSixMatching.map((item, index) => (
            <li key={index} className='list-group-item p-0 d-block'>
              <button
                title={`Search for ${item}`}
                className='btn d-block w-100 text-start text-dark text-decoration-none p-2 border-none'
                onClick={() => setSearch(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='pokemon-container'>
        <div className="container  my-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            <Suspense fallback={<Loader />}>
              {firstSixMatching.length !== 0 && firstSixMatching.map((item, index) => (
                <PokemonCard key={index} pokemonName={item} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search