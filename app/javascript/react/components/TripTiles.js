import React from 'react'

const TripTiles = ({ trip }) => {
  let { id, name } = trip
  return(
    <div>
      <div key={id} className="planet-description">
        {name}
      </div>
    </div>
    )
}

export default TripTiles
