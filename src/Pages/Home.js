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
      car: []
    };
  }

  componentDidMount() {
    if (!this.props.info.login) {
      this.callServer();
    }
  }

  callServer() {
    // Get the ticket from the URL
    let tickets = this.props.location.search.substr(this.props.location.search.indexOf('=') + 1);
    //let masterService = "http://192.168.50.179:3000"
    let masterService = "https://master.d3spht38sneeyf.amplifyapp.com"

    // Describe what is sent 
    let flight = {
      ticket: tickets,
      service: masterService,
      cooks: sessionStorage.getItem('cooks'),
      reason: "General"
    };

    // If there is a ticket, query the API, otherwise, redirect 
    //console.log(tickets)
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
      body: JSON.stringify(flight)
    }).then(res => res.json())
      .then(
        (result) => {
          console.log("Successful POST")
          console.log(result)
          if (result.cooks) {
            sessionStorage.setItem('cooks', result.cooks)
          }
          if (result.reload) {
            window.location.replace(`https://login.case.edu/cas/login?service=${masterService}`)
          }
          if (result.code)
            this.props.updateMe(result)
            this.props.updateMe({ login: true, })
        },

        (error) => {
          console.log(error)
          console.log("ERROR!")
        }
      )
      
  }

  render() {
      return (
        <div className="App">
          <Alert />
          <NavBa info={this.props.info} updateMe={this.props.updateMe} page="Home" location={this.props.location}/>
          <h1>{this.props.info.name ? `Hi ${this.props.info.name}! Welcome to the Crew RideSheet!` : "Welcome to the Crew RideSheet!"}</h1>
          <CarTable car={this.props.info.car}/>
          <Footer />
        </div>
      );
  }
}

export default Home;