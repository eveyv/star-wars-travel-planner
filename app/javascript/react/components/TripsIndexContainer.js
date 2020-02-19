import React, { useState, useEffect } from 'react'
import App from './App'
import TripTiles from './TripTiles'

const TripsIndexContainer = props => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    fetch('/api/v1/trips.json')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
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

  const tripTiles = trips.map(trip => {

    return(
      <TripTiles
        key={trip.id}
        trip={trip}
      />
    )
  })

  return(
    <div>
      <h2>The Last Jedi is an abomination</h2>
        {tripTiles}
    </div>
  )
}

export default TripsIndexContainer
