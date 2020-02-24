import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TripTiles = ({ trip }) => {
  let { id, name, description, } = trip

  const [trips, setTrips] = useState([])
  let [error, setError ] = useState([])

  useEffect(() => {
    fetch('/api/v1/trips.json')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      setTrips(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])


  const tripInfo = trips.map(trip => {
    return
    <div>
      <TripShow
        trip={trip}
        key={trip.id}
        name={trip.name}
        description={trip.description}
        tripInfo={tripInfo}
       />
    </div>
  })

  return(
<<<<<<< HEAD
    <div key={id} className="planet-description">
      <Link to={`/trips/${trip.id}`} className="link-to"> {trip.name} </Link>
=======
    <div className="cell large-6">
      <div className="planet-description" key={id}>
        <Link to={`/trips/${trip.id}`} className="link-to"> {trip.name} </Link>
      </div>
>>>>>>> 7f30b8c16643807930c6913a11ea42bb6c9ee6fe
    </div>
  )
}


export default TripTiles
