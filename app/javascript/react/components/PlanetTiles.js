import React from 'react'

const PlanetTiles = ({ planet }) => {
  let { id, name, terrain, planet_url, description } = planet
return(
  <div className="tiles">
      <div key={id} className="planet-tile">
        | {name} |
        <img src={planet_url}/>
      </div>
  </div>
  )
}
export default PlanetTiles
