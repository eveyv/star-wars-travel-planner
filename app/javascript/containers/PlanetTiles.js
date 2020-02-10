import React from 'react'

const PlanetTiles = ({ planet }) => {
  let { id, name, population } = planet
return(
  <div>
    <p>
      <li key={id}> Name:{name} || Location:{population}</li>
    </p>
  </div>
)
}
export default PlanetTiles
