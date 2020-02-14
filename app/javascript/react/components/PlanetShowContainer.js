import React, { useState, useEffect } from 'react'
import PlanetShow from './PlanetShow'

const PlanetShowContainer = (props) => {
  const [ planet, setPlanet ] = useState({})

  let planetId = props.match.params.id

  useEffect (() => {
    fetch(`/api/v1/planets/${planetId}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        const error = new Error(`${response.status}: ${response.statusText}`);
        throw(error)
      }
    })
    .then(fetchedPlanet => {
      setPlanet(fetchedPlanet)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])


  return(
    <div>
      <PlanetShow
        planetObject={planet}
      />
    </div>
  )
}

export default PlanetShowContainer;
