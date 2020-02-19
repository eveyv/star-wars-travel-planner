import React from 'react'

const TripTiles = ({ trip }) => {
  let { id, name } = trip
  return(
    <div key={id} className="planet-description">
      {name}
    </div>
  )
}

export default TripTiles
