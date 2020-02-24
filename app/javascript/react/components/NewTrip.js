import React, { useState, useEffect } from 'react'
import { Redirect} from "react-router-dom"

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
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if(shouldRedirect) {
    return <Redirect to="/trips" />
  }

return(
  <div>
    <h2 className="trip-create">Create your trip:</h2>
    <TripForm
      onSubmit={setNewTrip}
    />
  </div>
  )
}
export default NewTrip
