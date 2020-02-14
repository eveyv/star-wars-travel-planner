import React from 'react'
import { Link } from 'react-router-dom'

const PlanetTiles = ({ planet }) => {
  let { id, name, terrain, planet_url, description } = planet

return(
      <div key={id}>
        <Link to={`/planets/${planet.id}`} className="planet-names">| {name} |</Link>
        <img className="planet-pics" src={planet_url} />
      </div>
  )
}
export default PlanetTiles
