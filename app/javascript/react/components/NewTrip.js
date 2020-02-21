import React, { useState, useEffect } from 'react'
import TripForm from './TripForm'

const NewTrip = props => {

  const [shouldRedirect, setShouldRedirect] = useState(false)
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
    let tripId = trip.id
  return <Redirect to={`/trips/${tripID}`} />
  }

return(
  <div>
    <h2 className="trip-create">Create your trip:</h2>
    <br/>
    <br/>
    <TripForm
    onSubmit={setNewTrip} />
  </div>
  )
}
export default NewTrip
