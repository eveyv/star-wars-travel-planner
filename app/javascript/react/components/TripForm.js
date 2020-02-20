import React, { useState }  from 'react'
import _ from "lodash"
import ErrorList from "./ErrorList"

const TripForm = props => {
  const [ errors, setErrors ] = useState({})
  const [ newTrip, setNewTrip ] = useState({
    name: "",
    description: "",
    // planetOne: "",
    // planetTwo: "",
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
        // planetOne: "",
        // planetTwo: "",
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

      //   <label className="form-text">
      //     Select your first planet:
      //     <select
      //       id="planetOne"
      //       name="planetOne"
      //       value={newTrip.planetOne}
      //       onChange={handleInputChange}
      //       >
      //       <option disabled selected value> -- select an option -- </option>
      //       <option value="Hoth">Hoth</option>
      //       <option value="Coruscant">Coruscant</option>
      //       <option value="Death Star">Death Star</option>
      //       <option value="Tatooine">Tatooine</option>
      //       <option value="Kashyyk">Kashyyk</option>
      //       <option value="Mustafar">Mustafar</option>
      //     </select>
      //   </label>
      //
      // <label className="form-text">
      //   Select your second planet:
      //     <select
      //       id="planetTwo"
      //       name="planetTwo"
      //       value={newTrip.planetTwo}
      //       onChange={handleInputChange}
      //       >
      //
      //       <option disabled selected value> -- select an option -- </option>
      //       <option value="Hoth">Hoth</option>
      //       <option value="Coruscant">Coruscant</option>
      //       <option value="Death Star">Death Star</option>
      //       <option value="Tatooine">Tatooine</option>
      //       <option value="Kashyyk">Kashyyk</option>
      //       <option value="Mustafar">Mustafar</option>
      //   </select>
      // </label>

  )
}

export default TripForm;
