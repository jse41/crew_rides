import React from 'react';
import {Table, Card} from 'react-bootstrap'
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
    <Card className="outCard">
      {!props.gen ? <Card.Title className="freetext">Your Rides for the week...</Card.Title> : <div/>}
      {!props.gen ? <Card.Subtitle className="mb-2 text-muted freetext">You are in the same car for the whole week!</Card.Subtitle> : <div/>}
      <Table striped bordered hover className="cartable">
        <thead>
          <tr>
            <th>Driver</th>
            <th>{props.car ? props.car.driver : "Driver..."}</th>
            <th>{props.car ? props.car.vehicle : "Vehicle..."}</th>
            <th>Pickup Time</th>
          </tr>
        </thead>
        <MakeCarTable car={props.car ? props.car.passengers : []} />
      </Table>
    </Card>
  );
}

export default CarTable;