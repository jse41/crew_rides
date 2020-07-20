import React from 'react';
import Table from 'react-bootstrap/Table'
import './Styling/CarTable.css';

const MakeCarTable = props => {
  if (props.car) {
    const rows = props.car.map((row, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{row.name}</td>
          <td>{row.location}</td>
          <td>{row.time}</td>
        </tr>
      )
    });
    return <tbody>{rows}</tbody>
  }
  else {
    return (
      <tbody>
        <tr key={0}>
          <td>{"loading..."}</td>
        </tr>
      </tbody>
    )
  }
}

/**
 * Generates the alert at the top of page load, Bootstrap
 */
const CarTable = props => {
  return (
    <Table striped bordered hover className="cartable">
      <thead>
        <tr>
          <th>Driver</th>
          <th>{props.car.driver}</th>
          <th>{props.car.vehicle}</th>
          <th>Pickup Time</th>
        </tr>
      </thead>
      <MakeCarTable car={props.car ? props.car.passengers : []} />
    </Table>
  );
}

export default CarTable;