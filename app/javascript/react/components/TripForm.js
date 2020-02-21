import React, { useState }  from 'react'
import _ from "lodash"
import ErrorList from "./ErrorList"

const TripForm = props => {
  const [ errors, setErrors ] = useState({})
  const [ newTrip, setNewTrip ] = useState({
    name: "",
    description: ""
})


const handleInputChange = event => {
  setNewTrip({
    ...newTrip,
    [event.currentTarget.id]: event.currentTarget.value
  })
}

const validFormSubmission = () => {
  let submitErrors = {}
  const requiredFields = [ "name", "description" ]
    requiredFields.forEach(field => {
      if(newTrip[field].trim() === "") {
        submitErrors = {
        ...submitErrors,
        [field]: "cannot be blank"
      }
    }
  })
  setErrors(submitErrors)
  return _.isEmpty(submitErrors)
}

const handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = newTrip;
    if (validFormSubmission()) {
      props.onSubmit(formPayload)
      setNewTrip({
        name: "",
        description: "",
      })
    }
  }

  return(
    <form className="trip-form" onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
      <label className="form-text">
        Trip Name:
        <input
        id="name"
        type="text"
        name="name"
        value={newTrip.name}
        onChange={handleInputChange}
        />
      </label>

      <label className="form-text">
        Trip Description:
        <input
        id="description"
        type="text"
        name="description"
        value={newTrip.description}
        onChange={handleInputChange}
        />
      </label>
      <input
      type="submit"
      value="submit"
      className="btn"
      />
    </form>

  )
}

export default TripForm;
