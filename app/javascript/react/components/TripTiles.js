import React from 'react'
import { Link } from 'react-router-dom'

const TripTiles = ({ trip }) => {
  let { id, name } = trip
  return(
    <div key={id} className="planet-description">
        <Link to={`/trips/${trip.id}`} className="link-to"> {trip.name} </Link>
    </div>
  )
}

export default TripTiles
