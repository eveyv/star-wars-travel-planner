import React from 'react'

const PlanetTiles = ({ planet }) => {
  let { id, name, terrain, url, description } = planet
return(
  <div className="tiles">
      <div key={id} className="planet-tile">
        | {name} |
        <img src={url}/>
      </div>
  </div>
  )
}
export default PlanetTiles
