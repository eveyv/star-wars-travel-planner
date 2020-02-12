import React from 'react'

const PlanetTiles = ({ planet }) => {
  let { id, name, population } = planet
return(
  <div className="tiles">
      <div key={id} className="planet-tile"> Name:{name} || Location:{population}</div>
  </div>
  )
}
export default PlanetTiles
