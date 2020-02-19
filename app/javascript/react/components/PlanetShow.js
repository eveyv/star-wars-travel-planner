import React from 'react'
const PlanetShow = ({ planetObject }) => {
  let { id, name, terrain, url, description, destination_url } = planetObject

  return(
    <div>
      <h2>| {name} |</h2>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cafe9115409afe56e740b75b4b4c754315fee6d2
      <img className="destination-pic" src={destination_url}/>
      <div className="planet-description">
        {description}
      </div>
<<<<<<< HEAD
=======
        <img className="destination-pic" src={destination_url}/>
        <div className="planet-description">
            {description}
        </div>
>>>>>>> 92b45ebcd4598b7721c7af546df266fa7c691cce
=======
>>>>>>> cafe9115409afe56e740b75b4b4c754315fee6d2
    </div>
  )
}
export default PlanetShow;
