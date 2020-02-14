import React from 'react'
import { Link } from 'react-router-dom'

const PlanetTiles = ({ planet }) => {
  let { id, name, terrain, planet_url, description } = planet

return(
<<<<<<< HEAD
  <div className="tiles">
      <div key={id} className="planet-tile">
        <Link to={`/planets/${planet.id}`}>| {name} |</Link>
        <img className="planet-pics" src={planet_url}/>
=======
      <div className="cell large-4 medium-6 small-12" key={id}>
        <Link to={`/planets/${planet.id}`} className="planet-names">| {name} |</Link>
        <img className="planet-pics" src={planet_url} />
>>>>>>> 83fcd432e71d36cabad994002122a7ad87cf4e41
      </div>

  )
}
export default PlanetTiles
