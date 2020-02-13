import React from 'react'

const PlanetShow = ({ planetObject }) => {
  let { id, name, terrain, url, description } = planetObject

  return(
    <div className="stars">
      <h2>please sweet jesus work</h2>
      <div className="planet-tile"> Name: {name}</div>
    </div>
  )
}

export default PlanetShow;
