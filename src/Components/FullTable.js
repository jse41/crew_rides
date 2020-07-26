import React from 'react';
import CarTable from './CarTable'
import {Container, Row, Col} from 'react-bootstrap'

const MakeFullTable = props => {
    if (props.cars) {
        const rows = props.cars.map((row, index) => {
            let carPassengers = [];
            for (let i = 1; i <= row.passengers; i += 1) {
                let loc = `loc${i}`;
                let pass = `name${i}`;
                let time = `time${i}`;
                let rider = {
                    name: row[pass],
                    location: row[loc],
                    time: row[time]
                };
                carPassengers.push(rider);
            }
            let car = {
                driver: row.driverName,
                driverID: row.driverID,
                vehicle: row.car,
                passengers: carPassengers
            }
            return (
                <Col sm={12} md={12} lg={6} key={index}>
                    <CarTable car={car} gen={true}/>
                </Col>
            )
        });
        return rows
    }
    else {
        return (
            <p>{"loading..."}</p>
        )
    }
}

/**
 * Generates the alert at the top of page load, Bootstrap
 */
const FullTable = props => {
    return (
        <Container>
            <Row>
                <MakeFullTable cars={props.cars ? props.cars : []} />
            </Row>
        </Container>
    );
}

export default FullTable;