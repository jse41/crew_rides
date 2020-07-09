import React, { Component } from 'react'
import Footer from './../Components/Footer'
import Alert from './../Components/Alert'
import NavBa from './../Components/Nav'
import CarTable from './../Components/CarTable'

/**
 * Wraper for the entire home (index) page for my website. 
 */
class Home extends Component {

  componentDidMount() {
    let ticket = this.props.location.search.substr(this.props.location.search.indexOf('=') + 1)
    if (ticket.length > 5) {
      console.log("We found the ticket!")
      console.log(ticket)
    }
    else {
      window.location.replace('https://login.case.edu/cas/login?service=http://10.0.0.61:3000')
    }
  }
  
  render() {
    return (
      <div className="App">
        <Alert />
        <NavBa />
        <h1>Welcome to the Crew RideSheet!</h1>
        <CarTable />
        <Footer />
      </div>
    );
  }
}

export default Home;