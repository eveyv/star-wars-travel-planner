import React from 'react'
import { Link } from 'react-router-dom'

const PlanetTiles = ({ planet }) => {
  let { id, name, terrain, planet_url, description } = planet

return(
      <div className="cell large-4 medium-6 small-12" key={id}>
        <Link to={`/planets/${planet.id}`} className="planet-names">| {name} |</Link>
        <img className="planet-pics" src={planet_url} />
      </div>

  )
}
export default PlanetTiles
