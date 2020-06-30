import React, { Component } from 'react'
import Footer from './../Components/Footer'
import Alert from './../Components/Alert'
import NavBa from './../Components/Nav'

/**
 * Wraper for the entire home (index) page for my website. 
 */
class Home extends Component {
  
  render() {
    return (
      <div className="App">
        <Alert />
        <NavBa />
        <h1>Hey There!</h1>
        <Footer />
      </div>
    );
  }
}

export default Home;