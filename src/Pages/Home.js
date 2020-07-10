import React, { Component } from 'react'
import Footer from './../Components/Footer'
import Alert from './../Components/Alert'
import NavBa from './../Components/Nav'
import CarTable from './../Components/CarTable'

/**
 * Wraper for the entire home (index) page for my website. 
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  componentDidMount() {
    let tickets = this.props.location.search.substr(this.props.location.search.indexOf('=') + 1)
    if (tickets.length > 5) {
      console.log("We found the ticket!")
      console.log(tickets)
      fetch('https://ddpfv93bg7.execute-api.us-east-2.amazonaws.com/default/crew-hello', {
      mode: 'cors',
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept-Charset": "UTF-8;",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": "x-requested-with",
        "Access-Control-Allow-Headers": "x-requested-with"
      },
      body: JSON.stringify({ticket: tickets,
                            service: "http://10.0.0.63:3000"})
    }).then(res => res.json())
    .then(
      (result) => {
        console.log("Successful POST")
        console.log(result)
        if (!result.includes('Not Valid'))
        this.setState({name: result})
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error)
        console.log("ERROR!")
      }
    )
    }
    else {
      window.location.replace('https://login.case.edu/cas/login?service=http://10.0.0.63:3000')
    }
  }

  render() {
    if (this.state.name === null) {
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
    else {
      return (
        <div className="App">
          <Alert />
          <NavBa />
          <h1>Hi {this.state.name}! Welcome to the Crew RideSheet!</h1>
          <CarTable />
          <Footer />
        </div>
      );
    }
  }
}

export default Home;