import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import profile from "../../images/profile-user.png";
import invisible from "../../images/invisible.png";
import './UserProfile.css'

const UserProfile = () => {

    const [ editing, setEditing ] = React.useState(false);

    // TO DO: pull user info from passport/backend
    const [ firstName, setFirstName ] = React.useState('Johnald')

    const [ firstNameFormData, setFirstNameFormData ] = React.useState({
        controlId: 'formFirstName',
        label: 'First Name',
        type: 'name',
        focus: null
    })
    const [ lastNameFormData, setlastNameFormData ] = React.useState({
        controlId: 'formlastName',
        label: 'Last Name',
        type: 'name',
        value: 'Lastname',
        focus: null
    })
    const [ emailFormData, setEmailFormData ] = React.useState({
        controlId: 'formEmail',
        label: 'Email Address',
        type: 'email',
        value: 'test@test.gov',
        focus: null
    })
    const [ phoneFormData, setPhoneFormData ] = React.useState({
        controlId: 'formPhone',
        label: 'Phone Number',
        type: 'tel',
        value: '555-555-555',
        focus: null
    })
    const [ birthFormData, setBirthFormData ] = React.useState({
        controlId: 'formBirth',
        label: 'Date of Birth',
        type: 'date',
        value: '01-01-2000',
        focus: null
    })

    const toggleEditing = () => {
        setEditing(!editing);
    };

    const ProfileHeader = () => {
        return (
            <Container className='d-flex align-items-start justify-content-between'>
                <img src={invisible} height="75" />
                <img src={profile} height="150" />
                <EditButton/>
            </Container>
        )
    }

    const EditButton = () => {
        return (
            <Button className='EditButton' onClick={toggleEditing}>Edit</Button>
        )
    }


    return (
        <Container className='UserProfileWrapper'>
            <ProfileHeader/>
            <header className="AccordionHeader">Personal Information</header>
            <Accordion className='InfoAccordion'>
                <Card className='AccordionCard'>
                    <Accordion.Toggle as={Card.Body} eventKey="0" />
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group controlId={firstNameFormData.controlId}>
                                            <Form.Label>{firstNameFormData.label}</Form.Label>
                                            <Form.Control
                                                type={firstNameFormData.type}
                                                value={firstName}
                                                onChange={e => setFirstName(e.target.value)}
                                                disabled={editing} />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="name" defaultValue='Testman' disabled={!editing} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" defaultValue='test@test.com' disabled={!editing} />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="tel" defaultValue='555-555-5555' disabled={!editing} />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formBirth">
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control type="date" disabled={!editing} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </Container>



    )
}

export default UserProfile;
