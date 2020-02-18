import React from 'react'

class TripForm = (props) => {

  return(
    <form>

      <label>
        Trip Name:
        <input type="text" name="trip name" value="" />
      </label>
      <label>
        First Destination:
        <input type="text" name="first destination" value="" />
      </label>
      <label>
        Second Destination:
        <input type="text" name="second destination" value="" />
      </label>

    </form>



  )

}

export default TripForm;
