import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";
import './Styling/Navba.css';

/**
 * Generate the Nav Bar
 */
class Navba extends React.Component {
   render() {
       return (
           <Navbar variant="dark">
               <Navbar.Brand href="#home">Navbar</Navbar.Brand>
               <Nav className="mr-auto">
                   <Nav.Link as={Link}  to="/">Home</Nav.Link>
                   <Nav.Link as={Link}  to="/Rides">Rides</Nav.Link>
                   <Nav.Link as={Link}  to="/About">About</Nav.Link>
               </Nav>

           </Navbar>
       )
   }
}
export default Navba;