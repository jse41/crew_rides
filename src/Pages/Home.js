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
    console.log(this.props.info)
    if (!this.props.info.login) {
      this.callServer();
    }
  }

  callServer() {
    // Get the ticket from the URL
    let tickets = this.props.location.search.substr(this.props.location.search.indexOf('=') + 1);

    // Describe what is sent 
    let flight = {
      ticket: tickets,
      service: "https://master.d3spht38sneeyf.amplifyapp.com",
      //service: "http://192.168.50.179:3000",
      cooks: sessionStorage.getItem('cooks')
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
            window.location.replace('https://login.case.edu/cas/login?service=https://master.d3spht38sneeyf.amplifyapp.com')
            //window.location.replace('https://login.case.edu/cas/login?service=http://192.168.50.179:3000')
          }
          if (result.code)
            this.setState({ name: result.name, car: result.car })
            this.props.updateMe({ name: result.name, car: result.car, login: true })
            console.log(`I know that: ${this.props.info.name}`)
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
          <NavBa info={this.props.info}/>
          <h1>{this.props.info.name ? `Hi ${this.props.info.name}! Welcome to the Crew RideSheet!` : "Welcome to the Crew RideSheet!"}</h1>
          <CarTable car={this.props.info.car}/>
          <Footer />
        </div>
      );
  }
}

export default Home;