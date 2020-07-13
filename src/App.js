import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Rides from './Pages/Rides'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/rides" component={Rides} />
                <Route component={Error} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;