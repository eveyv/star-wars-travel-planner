import React from 'react'
const PlanetShow = ({ planetObject }) => {
  let { id, name, terrain, url, description, destination_url } = planetObject

  return(
    <div>
      <h2>| {name} |</h2>
<<<<<<< HEAD
      <img className="destination-pic" src={destination_url}/>
      <div className="planet-description">
        {description}
      </div>
=======
        <img className="destination-pic" src={destination_url}/>
        <div className="planet-description">
            {description}
        </div>
>>>>>>> 92b45ebcd4598b7721c7af546df266fa7c691cce
    </div>
  )
}
export default PlanetShow;
