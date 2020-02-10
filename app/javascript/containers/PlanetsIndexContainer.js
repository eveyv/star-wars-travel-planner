import React, { useState, useEffect} from 'react'
import App from '../react/components/App'
import PlanetTiles from './PlanetTiles'

const PlanetsIndexContainer = props => {

  let [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch('https://swapi.co/api/planets/')
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
    .then(validatedResponse => {
      setPlanets(validatedResponse.results)
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
    <div className="planet-list">
      <h2>Explore a galaxy far, far away...</h2>
        {planetTiles}
    </div>
  )
}

export default PlanetsIndexContainer
