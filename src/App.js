//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Donate from './pages/Donate'
import Home from './pages/Home'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/donate" component={Donate}/>
    </Switch>
  </Router>
)

export default App
