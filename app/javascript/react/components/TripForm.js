import React from 'react'

const TripForm = props => {

  return(

    <form className="trip-form">
      <label className="form-text">
        Trip Name:
        <input
        type="text"
        name="trip-name"
        value=""
        />
      </label>

      <label className="form-text">
        Trip Description:
        <input
        type="text"
        name="trip-name"
        value=""
        />
      </label>

        <label className="form-text">
          Select your first planet:
          <select>
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
          <select>
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
          className="btn"
          />

    </form>
  )
}

export default TripForm;
