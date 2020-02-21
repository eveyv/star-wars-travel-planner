import React from 'react'
import TripsIndexContainer from './TripsIndexContainer'
import TripShowContainer from './TripShowContainer'
import TripTiles from './TripTiles'

const TripShow = ({ trip }) => {
  // debugger
  let { id, name, planets } = trip
  return(
    <div>
      <h2> {name} </h2>
      hello!
    </div>
  )

}
export default TripShow
