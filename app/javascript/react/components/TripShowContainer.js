import React, { useState, useEffect } from 'react'

import TripShow from './TripShow'
import TripTiles from './TripTiles'


const TripShowContainer = props => {
  const [trip, setTrip] = useState({})

  let tripId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/trips/${tripId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw error
      }
    })
    .then(fetchedTrip => {
      return fetchedTrip.json()
    })
    .then(tripData => {
      setTrip(tripData)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div>
      <TripShow
        trip={trip}
      />
    </div>
  )
}

export default TripShowContainer
