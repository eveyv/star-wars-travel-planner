import React from 'react'
import { Link } from 'react-router-dom'

const PlanetTiles = ({ planet }) => {
  let { id, name, terrain, planet_url, description } = planet
return(
      <div key={id} className="columns small-1 large-4">
        <Link to={`/planets/${planet.id}`}>| {name} |</Link>
        <img className="planet-pics" src={planet_url} />
      </div>
  )
}
export default PlanetTiles
