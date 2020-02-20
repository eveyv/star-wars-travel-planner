import React, { useState, useEffect } from 'react'
import App from './App'
import PlanetTiles from './PlanetTiles'

const PlanetsIndexContainer = props => {

  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch('/api/v1/planets.json')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      setPlanets(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const planetTiles = planets.map(planet => {

    return(
      <PlanetTiles
        key={planet.id}
        planet={planet}
      />
    )
  })

  return(
    <div>
      <h2>Explore a galaxy far, far away...</h2>
        {planetTiles}
<<<<<<< HEAD
=======
     </div>
>>>>>>> 0f1cfe7cb7366dd555ccfb508cff9a69f88c8179
    </div>
  )
}

export default PlanetsIndexContainer
