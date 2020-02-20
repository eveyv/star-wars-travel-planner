import React, { useState, useEffect } from 'react'
import App from './App'
import { Redirect } from 'react-router-dom'
import TripTiles from './TripTiles'
import TripForm from './TripForm'

const TripsIndexContainer = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
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

  const setNewTrip = (formPayload) => {

  fetch('/api/v1/trips.json', {
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setTrips([
        ...trips,
        body])
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
}

if(shouldRedirect) {
  return <Redirect to ={`/trips/${tripID}`} />
}


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
<<<<<<< HEAD
=======

>>>>>>> 0f1cfe7cb7366dd555ccfb508cff9a69f88c8179
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
