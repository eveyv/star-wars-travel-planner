import React from 'react'

const PlanetShow = ({ planetObject }) => {
  let { id, name, terrain, url, description, destination_url } = planetObject
  return(
    <div className="stars">
      <h2>please sweet jesus work</h2>
      <div className="planet-tile">
      {name}
      <img src={destination_url}/>
      </div>
      <div className="planet-tile">
      {description}
      </div>
    </div>
  )
}

export default PlanetShow;
