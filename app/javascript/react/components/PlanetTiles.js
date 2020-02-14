import React from 'react'
import { Link } from 'react-router-dom'

const PlanetTiles = ({ planet }) => {
  let { id, name, terrain, planet_url, description } = planet

return(
  <div className="grid-x">
      <div key={id}>
        <Link to={`/planets/${planet.id}`}>| {name} |</Link>
        <img className="planet-pics" src={planet_url} />
      </div>
    </div>
  )
}
export default PlanetTiles
