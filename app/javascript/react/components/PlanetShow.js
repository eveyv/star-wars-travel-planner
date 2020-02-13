import React from 'react'
const PlanetShow = ({ planetObject }) => {
  let { id, name, terrain, url, description, destination_url } = planetObject
  
  return(
    <div className="stars">
      <h2>| {name} |</h2>
        <img className="destination-pic" src={destination_url}/>
          <div className="planet-description">
            {description}
          </div>
    </div>
  )
}
export default PlanetShow;
