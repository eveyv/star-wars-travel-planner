import React from 'react'
import { Link } from 'react-router-dom'

const TripTiles = ({ trip }) => {
  let { id, name, planet_name } = trip

  return(
    <div key={id} className="planet-description">
<<<<<<< HEAD
        <Link to={`/trips/${trip.id}`} className="link-to"> {trip.name} </Link>
=======
      {name} - {planet_name}
>>>>>>> c5e614e256e4b80f69b9644ab56017c64347661a
    </div>
  )
}

export default TripTiles
