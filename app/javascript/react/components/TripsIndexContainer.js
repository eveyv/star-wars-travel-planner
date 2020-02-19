import React, { useState, useEffect } from 'react'
import App from './App'
import TripTiles from './TripTiles'
import TripForm from './TripForm'

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

  const setNewTrip = (formPayload) => {
  fetch('/api/v1/trips', {
    method: "POST",
    body: JSON.stringify(formPayload),
  })
  .then(response => {
    if (response.ok) {
      return response
    } else {
      let errorMessage = `${response.status} (${response.statusText})`
      error = new Error(errorMessage)
      throw(error)
    }
  })
  .then(response => response.json())
  .then(body => {
    setTrips([
      ...trips,
      body
    ])
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}

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

        <TripForm
        onSubmit={setNewTrip}
        />
    </div>


  )
}

export default TripsIndexContainer
