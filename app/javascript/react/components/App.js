import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PlanetsIndexContainer from './PlanetsIndexContainer'
import PlanetShowContainer from './PlanetShowContainer'
import TripsIndexContainer from './TripsIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PlanetsIndexContainer} />
        <Route exact path="/planets/:id" component={PlanetShowContainer} />
        <Route exact path="/planets" component={PlanetsIndexContainer} />
        <Route exact path="/trips" component={TripsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
