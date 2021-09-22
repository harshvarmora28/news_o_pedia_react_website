import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';


const App = () => {
  const [progress, setProgress] = useState(0)

  const changeProgress = (progress) => {
    setProgress(progress)
  }

  return (
    <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#ed8a0a'
        progress={progress}
      />
      
      <Switch>
        <Route exact path="/"><News changeProgress = {changeProgress} key="general" pageSize={12} country="in" category="general" /></Route>
        <Route exact path="/business"><News changeProgress = {changeProgress} key="business" pageSize={12} country="in" category="business" /></Route>
        <Route exact path="/entertainment"><News changeProgress = {changeProgress} key="entertainment" pageSize={12} country="in" category="entertainment" /></Route>
        <Route exact path="/health"><News changeProgress = {changeProgress} key="health" pageSize={12} country="in" category="health" /></Route>
        <Route exact path="/science"><News changeProgress = {changeProgress} key="science" pageSize={12} country="in" category="science" /></Route>
        <Route exact path="/sports"><News changeProgress = {changeProgress} key="sports" pageSize={12} country="in" category="sports" /></Route>
        <Route exact path="/technology"><News changeProgress = {changeProgress} key="technology" pageSize={12} country="in" category="technology" /></Route>
        <Route exact path="/about"><About/></Route>
      </Switch>
      </Router>
      
      <Footer/>
    </div>
  )
}

export default App
