import React from 'react'

const TripTiles = ({ trip }) => {
  let { id, name, planet_name } = trip

  return(
    <div>
      <div key={id} className="planet-description">
        {name}
          <li>{planet_name}</li>
      </div>
    </div>
    )
}

export default TripTiles
