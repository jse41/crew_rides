import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import './Styling/Navba.css';

/**
 * Generate the Nav Bar
 */
class Navba extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "?"
        };
    }

    updateName = () => {
        if(this.state.name === "!"){
            this.setState({ name: "?" });
        }
        else {
            this.setState({ name: "!" });
        }
        if (!this.props.info.name) {
            this.callServer()
        }
    };

    callServer() {
        // Get the ticket from the URL
        let tickets = this.props.location.search.substr(this.props.location.search.indexOf('=') + 1);
        //let masterService = `http://192.168.50.179:3000/${this.props.page}`
        let masterService = `https://master.d3spht38sneeyf.amplifyapp.com/${this.props.page}`


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
                    this.sleep(500).then(() => {
                      window.location.replace(`https://login.case.edu/cas/login?service=${masterService}`)
                    })
                }
            )
    }

    sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    render() {
        return (
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand><Nav.Link as={Link} to="/"><div className="navImg"><img src="/CircularOar.png" alt="Logo"></img></div></Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Rides">Rides</Nav.Link>
                        <Nav.Link as={Link} to="/Account">Account</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        <p>{this.props.info.name ? `Signed in as: ` : ""}</p>
                        <p className="navClick" onClick={this.updateName}>{this.props.info.name ? `${this.props.info.name}${this.state.name}` : "Click to Log In"}</p>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}
export default Navba;