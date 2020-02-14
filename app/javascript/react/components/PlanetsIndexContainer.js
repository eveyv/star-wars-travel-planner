import React, { useState, useEffect} from 'react'
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
      <div className="column large-4 index-div">
        <PlanetTiles
          key={planet.id}
          planet={planet}
        />
      </div>
    )
  })

  return(
    <div className="stars">
      <h1><strong>Explore a galaxy far, far away...</strong></h1>
        <div className="grid-container">
          {planetTiles}
        </div>
    </div>
  )
}

export default PlanetsIndexContainer
