import React from 'react'

const TripTiles = ({ trip }) => {
  let { id, name, planet_name } = trip

  return(
    <div key={id} className="planet-description">
      {name} - {planet_name}
    </div>
  )
}

export default TripTiles
