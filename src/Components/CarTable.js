import React from 'react';
import { Table, Card } from 'react-bootstrap'
import './Styling/CarTable.css';

const MakeCarTable = props => {
  if (props.car) {
    const rows = props.car.map((row, index) => {
      if (props.size > 600) {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.location}</td>
            <td>{row.time}</td>
          </tr>
        )
      }
      else {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.location}</td>
            <td>{row.time}</td>
          </tr>
        )
      }
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
class CarTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0 
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
      if (this.state.width > 600) {
        return (
        <Card className="outCard">
        {!this.props.gen ? <Card.Title className="freetext">Your Rides for the week...</Card.Title> : <div />}
        {!this.props.gen ? <Card.Subtitle className="mb-2 text-muted freetext">You are in the same car for the whole week!</Card.Subtitle> : <div />}
        <Table striped bordered hover className="cartable">
          <thead>
            <tr>
              <th>Driver</th>
              <th>{this.props.car ? this.props.car.driver : "Driver..."}</th>
              <th>{this.props.car ? this.props.car.vehicle : "Vehicle..."}</th>
              <th>Pickup Time</th>
            </tr>
          </thead>
          <MakeCarTable car={this.props.car ? this.props.car.passengers : []} size={this.state.width} />
        </Table>
      </Card>
        );
      }
      else {
        return (
          <Card className="outCard">
          {!this.props.gen ? <Card.Title className="freetext">Your Rides for the week...</Card.Title> : <div />}
          {!this.props.gen ? <Card.Subtitle className="mb-2 text-muted freetext">You are in the same car for the whole week!</Card.Subtitle> : <div />}
          <Table striped bordered hover className="cartable">
            <thead>
              <tr>
                <th>{this.props.car ? `Driver: ${this.props.car.driver}` : "Driver..."}</th>
                <th>{this.props.car ? this.props.car.vehicle : "Vehicle..."}</th>
                <th>Pickup Time</th>
              </tr>
            </thead>
            <MakeCarTable car={this.props.car ? this.props.car.passengers : []} size={this.state.width} />
          </Table>
        </Card>
          );
      }
  }
}

export default CarTable;