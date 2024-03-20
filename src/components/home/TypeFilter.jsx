import { useDispatch } from 'react-redux'
import { setType } from '../../redux/feature/typeFilterSlice'

const TypeFilter = ({ fixed }) => {
  const types = ["all", "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric ", "psychic", "ice", "dragon", "dark", "fairy",]
  const dispatch = useDispatch();
  return (
    <div>
      <div className={`d-flex py-3 ${fixed && "fixed-top"} flex-wrap gap-2 justify-content-around badge-bg`}>
        <span title='All filter' className='badge bg-success text-capitalize' onClick={() => dispatch(setType("all"))}>
          All
        </span>
        {types.map((item) => (
          <span
            key={item}
            title={`type filter ${item}`}
            className='badge bg-success text-capitalize'
            onClick={() => dispatch(setType(item))}
          >
            {item}
          </span>
        ))
        }
      </div>
    </div>
  )
}

export default TypeFilter