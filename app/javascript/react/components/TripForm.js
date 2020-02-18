import React from 'react'

class TripForm = (props) => {

  return(
    <form>
      <label>
        Trip Name:
        <input
        type="text"
        name="trip-name"
        value=""
        />
      </label>

      <select className="Choose your first planet:">
        <option value="Hoth">Hoth</option>
        <option value="Coruscant">Coruscant</option>
        <option value="Death Star">Death Star</option>
        <option value="Tatooine">Tatooine</option>
        <option value="Kashyyk">Kashyyk</option>
        <option value="Mustafar">Mustafar</option>
      </select>

      <select className="Choose your second planet:">
        <option value="Hoth">Hoth</option>
        <option value="Coruscant">Coruscant</option>
        <option value="Death Star">Death Star</option>
        <option value="Tatooine">Tatooine</option>
        <option value="Kashyyk">Kashyyk</option>
        <option value="Mustafar">Mustafar</option>
      </select>
    </form>
  )
}

export default TripForm;
