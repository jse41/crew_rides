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
        this.setState({ name: "!"});
    };

    render() {
        return (
            <Navbar variant="dark">
                <Navbar.Brand href="#home"><div className="navImg"><img src="/CircularOar.png" alt="Logo"></img></div></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Rides">Rides</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    <Nav.Link as={Link} to="/Other">Other</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <p>{this.props.name ? `Signed in as: ` : ""}</p>
                        <p className="navClick" onClick={this.updateName}>{this.props.name ? `${this.props.name}${this.state.name}` : "Click to Log In"}</p>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}
export default Navba;