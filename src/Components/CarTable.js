import React from 'react';
import Table from 'react-bootstrap/Table'
import './Styling/CarTable.css';

/**
 * Generates the alert at the top of page load, Bootstrap
 */
function CarTable() {  
    return (
        <Table striped bordered hover className="cartable">
        <thead>
          <tr>
            <th>Driver</th>
            <th>Liam</th>
            <th>Ferrari</th>
            <th>Pickup Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jacob</td>
            <td>Village</td>
            <td>6:10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Derick</td>
            <td>Village</td>
            <td>6:10</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jeri</td>
            <td>Hessler</td>
            <td>6:20</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anthony</td>
            <td>Euclid</td>
            <td>6:15</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default CarTable;