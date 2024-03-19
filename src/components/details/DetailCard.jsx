import PokeHeader from '../shared/pokeHeader'

const DetailCard = ({
  name,
  image,
  front_shiny,
  height,
  weight,
  base_experience,
  typesArr,
  abilitiesArr,
  moveArr,
  itemsArr,
}) => {
  const Badges = ({ arr, property }) => {
    return (
      <>
        <b>{property}</b>
        {" "}
        {arr.length? arr.map((item) => <span className='badge bg-secondary mx-1 text-capitalize'>{item}</span>): "No " + property.toLowerCase() + " available"}
      </>
    )
  }
  const pokemonHeight = () => {
    if(!height) return "0%" // no height
    if(height < 15) return "15%" // tiny
    if(height < 30) return "30%" // small
    if(height < 50) return "50%" // medium
    if(height < 70) return "70%" // large
    if(height > 70) return "100%" // gigantic
  }

  const pokemonWeight = () => {
    if (!weight) return "0%" // no weight
    if (weight < 50) return "10%" // extra light
    if (weight < 150) return "30%" // light
    if (weight < 250) return "50%" // medium
    if (weight < 400) return "70%" // heavy
    if (weight > 400) return "100%" // extra heavy
  }

  const pokemonBaseExperience = () => {
    if (!base_experience) return "0%" // no base experience
    if (base_experience < 50) return "10%" // low
    if (base_experience < 150) return "30%" // medium
    if (base_experience < 250) return "50%" // high
    if (base_experience < 400) return "70%" // very high
    if (base_experience > 400) return "100%" // ultra high
  }

  return (
    <div className="detail-card card mb-3 mx-auto" style={{ maxWidth: "800px" }}>
      <PokeHeader pokeImage={image} pokeName={name} />
      <div className="row g-0">
        <div className="col-md-6">
          <img src={image} className="img-fluid rounded-start" alt="..." style={{ height: "70vh", width: "100%" }} />
        </div>
        <div className="col-md-6 p-2">
          <div className="card-body">
            <h5 className="card-title text-capitalize">{name}</h5>
            <div className='mb-2'>
              <b>Height: {height}</b>
              <div class="progress">
                <div style={{ width: pokemonHeight() }} class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className='mb-2'>
              <b>Weight: {weight}</b>
              <div class="progress">
                <div style={{ width: pokemonWeight() }} class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className='mb-2'>
              <b>Base Experience: {base_experience}</b>
              <div class="progress">
                <div style={{ width: pokemonBaseExperience() }} class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="abilities alert alert-success">
              <Badges arr={abilitiesArr} property={"Abilities"} />
            </div>
            <div className="abilities alert alert-info">
              <Badges arr={typesArr} property={"Types"} />
            </div>
            <div className="abilities alert alert-warning">
              <Badges arr={itemsArr} property={"Items"} />
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-success">
        <Badges arr={moveArr} property={"Moves"} />
      </div>
    </div>
  )
}

export default DetailCard