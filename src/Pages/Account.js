import React from 'react';
import Footer from './../Components/Footer'
import Alert from './../Components/Alert'
import NavBa from './../Components/Nav'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import './../Components/Styling/Account.css'

/**
 * Account Page Wrapper, relies on React Router for routing to here
 */
class Account extends React.Component {
    constructor(props) {
        super(props);
        // Have to hold the form values in state, then on submit send them to global and server
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
            locPreferences: {
                Start: false, 
                Village: false, 
                Daves: false,
                Hessler: false,
                Clark: false, 
                Wade: false, 
                Fribley: false, 
                Carlton: false, 
                Cedar: false, 
                Quad: false, 
                Little: false, 
            },
        };

        // Bindings for onclick and on action calls 
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.buttonChange = this.buttonChange.bind(this);
        this.buttonLocChange = this.buttonLocChange.bind(this);
        this.subClick = this.subClick.bind(this)
    }

    // on mount load in values from parent if they exist 
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
        if (this.props.info.locPreferences) {
            this.setState({locPreferences: {
                Start: this.props.info.locPreferences.Start,
                Village: this.props.info.locPreferences.Village,
                Daves: this.props.info.locPreferences.Daves, 
                Hessler: this.props.info.locPreferences.Hessler, 
                Clark: this.props.info.locPreferences.Clark, 
                Wade: this.props.info.locPreferences.Wade, 
                Fribley: this.props.info.locPreferences.Fribley, 
                Carlton: this.props.info.locPreferences.Carlton,
                Cedar: this.props.info.locPreferences.Cedar,
                Quad: this.props.info.locPreferences.Quad,
                Little: this.props.info.locPreferences.Little
            }});
        }
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    // Remove listener when done
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    // Update window dimensions, listening to remove forced horizontal lining 
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    // Day of week click
    buttonChange = e => {
        let newDay = this.state.days
        newDay[e.target.id] = !this.state.days[e.target.id]
        this.setState({ days: newDay })
    }

    // Location preference click 
    buttonLocChange = e => {
        let newloc = this.state.locPreferences
        newloc[e.target.id] = !this.state.days[e.target.id]
        this.setState({ locPreferences: newloc })
    }

    // This will handle submit eventually 
    subClick() {
        console.log("Submitted!");
    }

    // Sometimes default values do not change on state update, if that is the case add a key attribute to cause element to re-render
    render() {
        // Consider breaking up into smaller functions since this is becoming a lot. 
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
                                    <Form.Control key={`${this.props.info.loc}a`} as="select" defaultValue={this.props.info.loc}>
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
                            <Form.Check key={`${this.props.info.loc}b`} inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Monday" id="Monday" checked={this.state.days.Monday} />
                            <Form.Check key={`${this.props.info.loc}c`} inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Tuesday" id="Tuesday" checked={this.state.days.Tuesday} />
                            <Form.Check key={`${this.props.info.loc}d`} inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Wednesday" id="Wednesday" checked={this.state.days.Wednesday} />
                            <Form.Check key={`${this.props.info.loc}e`} inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Thursday" id="Thursday" checked={this.state.days.Thursday} />
                            <Form.Check key={`${this.props.info.loc}f`} inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Friday" id="Friday" checked={this.state.days.Friday} />
                            <Form.Check key={`${this.props.info.loc}g`} inline={this.state.width > 600} type="checkbox" onChange={this.buttonChange} label="Saturday" id="Saturday" checked={this.state.days.Saturday} />
                            <Form.Check key={`${this.props.info.loc}h`} inline={this.state.width > 600} disabled type="checkbox" onChange={this.buttonChange} label="Sunday" id="Sunday" checked={this.state.days.Sunday} />
                        </Form.Group>
                        <hr></hr>
                        <Form.Group>
                            <Form.Row>
                                Is there anywhere else you could also be picked up (we try for near your residence first)?
                            </Form.Row>
                            <br></br>
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Start (Ugly Statue)" id="Start" checked={this.state.locPreferences.Start} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Village (Starbucks)" id="Village" checked={this.state.locPreferences.Village} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Dave's (Euclid)" id="Daves" checked={this.state.locPreferences.Daves} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Hessler" id="Hessler" checked={this.state.locPreferences.Hessler} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Clark" id="Clark" checked={this.state.locPreferences.Clark} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Wade Park" id="Wade" checked={this.state.locPreferences.Wade} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Fribley" id="Fribley" checked={this.state.locPreferences.Fribley} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Carlton" id="Carlton" checked={this.state.locPreferences.Carlton} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Cedar / Fairmount" id="Cedar" checked={this.state.locPreferences.Cedar} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="The Quad" id="Quad" checked={this.state.locPreferences.Quad} />
                            <Form.Check inline={this.state.width > 600} type="checkbox" onChange={this.buttonLocChange} label="Little Italy" id="Little" checked={this.state.locPreferences.Little} />
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
export default Account;