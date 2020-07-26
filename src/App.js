import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Rides from './Pages/Rides'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
    this.updateMe = this.updateMe.bind(this)
  }

  updateMe = (info) => {
    this.setState(info)
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={(props) => <Home {...props} info={this.state} updateMe={this.updateMe}/>}/>
                <Route path="/about" render={(props) => <About {...props} info={this.state}/>}/>
                <Route path="/rides" render={(props) => <Rides {...props} info={this.state}/>}/>
                <Route component={Error} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;