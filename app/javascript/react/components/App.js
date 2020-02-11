import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PlanetsIndexContainer from '../../containers/PlanetsIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PlanetsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
