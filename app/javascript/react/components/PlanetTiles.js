import React from 'react'
import { Link } from 'react-router-dom'

const PlanetTiles = ({ planet }) => {
  let { id, name, terrain, planet_url, description, destination_url } = planet
return(
  <div className="tiles">
      <div key={id} className="planet-tile">
        <Link to={`/planets/${planet.id}`}>| {name} |</Link>
        <img src={planet_url}/>
      </div>
  </div>
  )
}

export default PlanetTiles
