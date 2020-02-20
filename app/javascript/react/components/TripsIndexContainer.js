import React, { useState, useEffect } from 'react'
import App from './App'
import { Redirect, Link } from 'react-router-dom'
import TripTiles from './TripTiles'
import NewTrip from './NewTrip'


const TripsIndexContainer = props => {

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

  const tripTiles = trips.map(trip => {
    return(
      <TripTiles
        key={trip.id}
        trip={trip}
        name={trip.name}
        descripton={trip.description}

      />
    )
  })

  return(
    <div>
      <h1 className="title">| Trips |</h1>
      <Link to={`/trips/new`} className="link-to"> NEW </Link>
        {tripTiles}
      <h2 className="easter-egg">The Last Jedi is an abomination</h2>



    </div>


  )
}

export default TripsIndexContainer
