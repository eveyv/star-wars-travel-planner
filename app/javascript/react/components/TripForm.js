import React, { useState}  from 'react'

const TripForm = props => {

const [ newTrip, setNewTrip ] = useState({
    name: "",
    description: "",
    planetOne: "",
    planetTwo: "",
})

const [ errors, setErrors ] = useState({})

const handleInputChange = event => {
  setNewTrip({
    ...newTrip,
    [event.currentTarget.name]: event.currentTarget.value
  })
}

const onSubmit = (event) => {
    event.preventDefault()
    if (validFormSubmission()) {
      props.onSubmit(newTrip)
      setNewTrip({
        name: "",
        description: "",
        planetOne: "",
        planetTwo: "",
      })
    }
  }

const validFormSubmission = () => {
  let submitErrors = {}
  const requiredFields = [ "name", "description", "planetOne", "planetTwo" ]
    requiredFields.forEach(field => {
      if (newTrip[field].trim() === "") {
        submitErrors = {
        ...submitErrors,
        [field]: "cannot be blank"
      }
    }
  })
  setErrors(submitErrors)
  return _.isEmpty(submitErrors)
}

  return(

    <form className="trip-form">
      <label className="form-text">
        Trip Name:
        <input
        type="text"
        name="name"
        value={newTrip.name}
        onChange={handleInputChange}
        />
      </label>

      <label className="form-text">
        Trip Description:
        <input
        type="text"
        name="description"
        value={newTrip.description}
        onChange={handleInputChange}
        />
      </label>

        <label className="form-text">
          Select your first planet:
          <select
            id="planetOne"
            name="planetOne"
            value={newTrip.planetOne}
            onChange={handleInputChange}
            >
            <option disabled selected value> -- select an option -- </option>
            <option value="Hoth">Hoth</option>
            <option value="Coruscant">Coruscant</option>
            <option value="Death Star">Death Star</option>
            <option value="Tatooine">Tatooine</option>
            <option value="Kashyyk">Kashyyk</option>
            <option value="Mustafar">Mustafar</option>
          </select>
        </label>

      <label className="form-text">
        Select your second planet:
          <select
            id="planetTwo"
            name="planetTwo"
            value={newTrip.planetTwo}
            onChange={handleInputChange}
            >

            <option disabled selected value> -- select an option -- </option>
            <option value="Hoth">Hoth</option>
            <option value="Coruscant">Coruscant</option>
            <option value="Death Star">Death Star</option>
            <option value="Tatooine">Tatooine</option>
            <option value="Kashyyk">Kashyyk</option>
            <option value="Mustafar">Mustafar</option>
        </select>
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
