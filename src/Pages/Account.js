import React from 'react';
import Footer from './../Components/Footer'
import Alert from './../Components/Alert'
import NavBa from './../Components/Nav'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import './../Components/Styling/Account.css'

/**
 * About Page Wrapper, relies on React Router for routing to here
 */
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            days: {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false,
            },
            
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.buttonChange = this.buttonChange.bind(this);
        this.subClick = this.subClick.bind(this)
    }

    componentDidMount() {
        if (this.props.info.days) {
            this.setState({days: {
                Monday: this.props.info.days.Monday,
                Tuesday: this.props.info.days.Tuesday,
                Wednesday: this.props.info.days.Wednesday,
                Thursday: this.props.info.days.Thursday,
                Friday: this.props.info.days.Friday,
                Saturday: this.props.info.days.Saturday,
                Sunday: this.props.info.days.Sunday,
            }});
        }
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    buttonChange = e => {
        let newDay = this.state.days
        newDay[e.target.id] = !this.state.days[e.target.id]
        this.setState({ days: newDay })
    }

    subClick() {
        console.log("Submitted!");
    }

    // Sometimes default values do not change on state update, if that is the case add a key attribute to cause element to re-render
    render() {
        return (
            <div>
                <Alert />
                <NavBa info={this.props.info} updateMe={this.props.updateMe} page="Account" location={this.props.location} />
                <h1>Mine as well have an Account page...</h1>
                <Card className="packet">
                    <Form className="myform" >
                        <Form.Group controlId="formPlaintextEmail">
                            <Row>
                                <Form.Label column sm="2">
                                    Case ID:
                                </Form.Label>
                                <Col id="overform" sm="10" md="4" lg="4">
                                    <Form.Control plaintext readOnly defaultValue={this.props.info.caseid} />
                                </Col>
                                <Form.Label column sm="2">
                                    Name:
                                </Form.Label>
                                <Col id="overform" sm="10" md="4" lg="4">
                                    <Form.Control plaintext readOnly defaultValue={this.props.info.name} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Form.Label column sm="2">
                                    Residence:
                                    </Form.Label>
                                <Col sm="10" md="4" lg="4">
                                    <Form.Control key={`${this.props.info.loc}`} as="select" defaultValue={this.props.info.loc}>
                                        <option>Choose...</option>
                                        <option>Cedar</option>
                                        <option>Clarke</option>
                                        <option>Juniper</option>
                                        <option>Magnolia</option>
                                        <option>Mistletoe</option>
                                        <option>Carlton</option>
                                        <option>Murray Hill</option>
                                        <option>Triangles</option>
                                        <option>Village</option>
                                        <option>STJ</option>
                                        <option>PMAs</option>
                                        <option>Hessler</option>
                                        <option>Little Italy</option>
                                        <option>Wade Park / Ashbury</option>
                                        <option>Hazel</option>
                                        <option>Cedar / Fairmount</option>
                                        <option>Euclid</option>
                                        <option>Stearns</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Col>
                                <Form.Label column sm="2">
                                    Building Name / Address:
                                </Form.Label>
                                <Col id="overform" sm="10" md="4" lg="4">
                                    <Form.Control defaultValue={this.props.info.addr} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <hr></hr>
                        <Form.Group>
                            <Form.Label column sm="2">
                                What days do you need a ride?
                                </Form.Label>
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Monday" id="Monday" checked={this.state.Monday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Tuesday" id="Tuesday" checked={this.state.Tuesday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Wednesday" id="Wednesday" checked={this.state.Wednesday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Thursday" id="Thursday" checked={this.state.Thursday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Friday" id="Friday" checked={this.state.Friday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Saturday" id="Saturday" checked={this.state.Saturday} />
                            <Form.Check inline={this.state.width > 600} disabled type="checkbox" onChange={this.buttonChange} label="Sunday" id="Sunday" checked={this.state.Sunday} />
                        </Form.Group>
                        <hr></hr>
                        <Form.Group>
                            <Form.Row>
                                Is there anywhere else you could also be picked up (we try for near your residence first)?
                            </Form.Row>
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Monday" id="Monday" checked={this.state.Monday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Tuesday" id="Tuesday" checked={this.state.Tuesday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Wednesday" id="Wednesday" checked={this.state.Wednesday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Thursday" id="Thursday" checked={this.state.Thursday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Friday" id="Friday" checked={this.state.Friday} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Saturday" id="Saturday" checked={this.state.Saturday} />
                            <Form.Check inline={this.state.width > 600} disabled type="checkbox" onChange={this.buttonChange} label="Sunday" id="Sunday" checked={this.state.Sunday} />
                        </Form.Group>
                        <Form.Row>
                        <Button className="mb-2" onClick={this.subClick}>Submit</Button>
                        </Form.Row>
                    </Form>
                </Card>
                <Footer />
            </div>
        )
    }
}
export default About;