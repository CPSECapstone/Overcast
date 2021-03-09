import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import profile from "../../images/profile-user.png";
import invisible from "../../images/invisible.png";
import './UserProfile.css'

const UserProfile = () => {

    const OPEN = '0'
    const CLOSED = null

    const [ editing, setEditing ] = React.useState(false);
    const [ accordionsOpen, setAccordionsOpen ] = React.useState([null, null, null]); // '0' = open   null = closed
    const [ personalInfoForm, setPersonalInfoForm ] = React.useState([]);

    // TO DO: pull user info from passport/backend
    const [ firstNameFormData, setFirstNameFormData ] = React.useState({
        controlId: 'formFirstName',
        label: 'First Name',
        type: 'name',
        value: 'Johnald',
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

    const clearFocus = () => {
        return null
    }

    const handleFirstNameFormChange = (newValue) => {
        setFirstNameFormData(prevFirstNameFormData => ({ ...prevFirstNameFormData,
            value: newValue,
            focus: 'notnull'
        }));
    }

    const handleAccordionClick = (accordionNumber) => {
        var accordionsOpenTemp = accordionsOpen
        if (accordionsOpenTemp[accordionNumber] === OPEN) {
            accordionsOpenTemp[accordionNumber] = CLOSED
        } else {
            accordionsOpenTemp[accordionNumber] = OPEN
        }
        setAccordionsOpen(accordionsOpenTemp)
    }

    const ProfileHeader = () => {
        return (
            <Container className='d-flex align-items-start justify-content-between'>
                <img src={invisible} height="75" alt=""/>
                <img src={profile} height="150" alt="user-profile"/>
                <EditButton/>
            </Container>
        )
    }

    const EditButton = () => {
        return (
            <Button className='EditButton' onClick={toggleEditing}>Edit</Button>
        )
    }

    const UserInfoAccordions = () => {

        const Accordions = (accordNum, accordInfo) => {
            return (
                <Accordion className='InfoAccordion' defaultActiveKey={accordionsOpen[accordNum]}>
                    <Card className='AccordionCard'>
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => { handleAccordionClick(accordNum) }}/>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {accordInfo}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            )
        }

        const FirstNameForm = (props) => {
            const {formData, formHandler} = props;
            return (
                <Form.Group controlId={formData.controlId}>
                    <Form.Label>{formData.label}</Form.Label>
                    <Form.Control
                        type={formData.type}
                        autoFocus={formData.focus}
                        value={formData.value}
                        onChange={e => formHandler(e.target.value)}
                        disabled={!editing} />
                </Form.Group>
            )
        }

        const PersonalInformation = () => {
            return (
                <Container>
                    <Form>
                        <Row>
                            <Col>
                                <FirstNameForm formData={firstNameFormData} formHandler={handleFirstNameFormChange}/>
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
                </Container>
            )
        }

        return (
            <Container>
                <Container>
                    <Row>
                    </Row>
                </Container>

                <header className='CardHeader'>
                    Personal Information
                </header>
                {Accordions(0, <PersonalInformation/>)}

                <header className='CardHeader'>
                    Contact Details
                </header>
                {Accordions(1, <Card.Body>Contact Details go here</Card.Body>)}

                <header className='CardHeader'>
                    Education
                </header>
                {Accordions(2, <Card.Body>Education goes here (maybe)</Card.Body>)}

            </Container>
        )
    }

    return (
        <Container className='UserProfile'>
            {/* <EditButton/> */}
            <ProfileHeader/>
            <UserInfoAccordions/>
        </Container>

    )
}

export default UserProfile;
