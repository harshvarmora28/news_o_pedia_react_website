import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><News pageSize={12} country="in" category="general" /></Route>
        <Route exact path="/business"><News pageSize={12} country="in" category="business" /></Route>
        <Route exact path="/entertainment"><News pageSize={12} country="in" category="entertainment" /></Route>
        <Route exact path="/health"><News pageSize={12} country="in" category="health" /></Route>
        <Route exact path="/science"><News pageSize={12} country="in" category="science" /></Route>
        <Route exact path="/sports"><News pageSize={12} country="in" category="sports" /></Route>
        <Route exact path="/technology"><News pageSize={12} country="in" category="technology" /></Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App
