import { Suspense, useEffect, useState } from 'react'
import { useGetAllPokemonNameQuery, useGetPokemonByNameQuery } from '../../redux/pokemon/pokemon';
import PokemonCard from '../shared/PokemonCard';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import { useDocumentTitle } from '../../lib/date';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const { data } = useGetAllPokemonNameQuery();
  const [firstSixMatching, setFirstSixMatching] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useDocumentTitle(search || 'Search Pokemon')

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

  const handleKeyDown = (e) => {
    if (search === "") {
      setIndex(0);
    }
    if (
      e.key === "Enter" &&
      search !== ""
    ) {
      if (index - 1 === -1) {
        navigate(`/pokemon/${firstSixMatching[0]}`);
      } else {
        navigate(`/pokemon/${firstSixMatching[index - 1]}`);
      }
    }
    if (e.key === "ArrowDown") {
      setSearch(firstSixMatching[index].toUpperCase());
      setIndex(index + 1);
      if (index >= firstSixMatching.length - 1) {
        setIndex(0);
      }
    }
    return;
  };

  return (
    <section className='search-section container my-5'>
      <div className="search-container w-50 mx-auto mb-3 position-relative">
        <input
          title='Search Pokemon by Name or Number'
          type="text"
          placeholder="Search Pokemon By Name or Number ex bulbasur or 1"
          value={search}
          onChange={handelChange}
          onKeyDown={handleKeyDown}
          autoFocus={true}
          id='search'
          className='form-control'
        />

        {firstSixMatching.length === 0 && search !== "" && (
          <div className="mt-5">
            <Error 
            className="mt-4" 
            error={`No Pokemon Found Name Matching with ${search}`} />
          </div>
        )}
        <ul className='position-absolute d-flex justify-content-center flex-wrap gap-2 w-100 ms-0 ps-0 alert-success'>
          {firstSixMatching.map((item, index) => (
            <li key={index} className='list-group-item p-0 d-block'>
              <button
                title={`Search for ${item}`}
                className={`${search === item ? "active" : ""}btn d-block w-100 text-start text-dark text-decoration-none p-2 border-none`}
                onClick={() => {
                  navigate(`/pokemon/${item}`);
                  setSearch(item)
                }}
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