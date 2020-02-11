import React from 'react'

const PlanetTiles = ({ planet }) => {
  let { id, name, population } = planet
return(
  <div>
      <li key={id}> Name:{name} || Location:{population}</li>
  </div>
  )
}
export default PlanetTiles
