import React, { Component } from 'react';
import './App.scss';
import Navbar from "./Navbar/Navbar.js"
import Home from "./Home.js"
import About from "./About.js"
import TourList from "./TourList/index.js"
import {Switch,Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
        <main>
          <Navbar/>
          <Switch>
          {/* <TourList/> */}
          <Route path="/Home" component={Home} />
          <Route exact path="/" component={TourList} />
          <Route path="/About" component={About} />
          </Switch>
        </main>
    );
  }
}

export default App;