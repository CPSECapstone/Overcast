import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import profile from "../../images/profile-user.png";
import './UserProfile.css'

const UserProfile = () => {

    const [ editing, setEditing ] = React.useState(false);
    //                                                       '0' = open   null = closed
    const [ accordionsOpen, setAccordionsOpen ] = React.useState([null, null, null]);

    const toggleEditing = () => {
        setEditing(editing ? false : true);
    };

    const handleAccordionClick = (accordionNumber) => {
        console.log(accordionsOpen[accordionNumber])
        var accordionsOpenTemp = accordionsOpen
        if (accordionsOpenTemp[accordionNumber] == '0') {
            accordionsOpenTemp[accordionNumber] = null
        } else {
            accordionsOpenTemp[accordionNumber] = '0'
        }
        setAccordionsOpen(accordionsOpenTemp)
        console.log(accordionsOpen)
    }

    const ProfileHeader = () => {
        return (
            <Container>
                <Row className="ProfileHeader">
                    <Col md={{ offset: 5 }}>
                        <img src={profile} height="150"/>
                    </Col>
                    <Col md={{ offset: 5 }}>
                        <Button className='EditButton' onClick={toggleEditing}>Edit</Button>{' '}
                    </Col>
                </Row>
            </Container>

        )
    }

    const UserInfoAccordions = () => {

        const PersonalInformation = () => {
            return (
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 0 }}>
                        <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" defaultValue='test@test.com' disabled={!editing} />
                        </Form.Group>
                        </Form>
                        </Col>
                        <Col md={{ span: 3, offset: 1 }}>
                        <Form>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" defaultValue='555-555-5555' disabled={!editing} />
                        </Form.Group>
                        </Form>
                        </Col>
                        <Col md={{ span: 3, offset: 1 }}>
                        <Form>
                        <Form.Group controlId="formBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" disabled={!editing} />
                        </Form.Group>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            )
        }

        return (
            <Container>
                <Container>
                    <Row>
                        <Col md={{ span: 5, offset: 0 }}>
                        <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" defaultValue='John' disabled={!editing} />
                        </Form.Group>
                        </Form>
                        </Col>
                        <Col md={{ span: 5, offset: 2 }}>
                        <Form>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" defaultValue='Testman' disabled={!editing} />
                        </Form.Group>
                        </Form>
                        </Col>
                    </Row>
                </Container>


                <Container className='CardHeader'>
                    Personal Information
                </Container>
                <Accordion className='InfoAccordion' defaultActiveKey={accordionsOpen[0]}>
                    <Card className='AccordionCard' onClick={() => { handleAccordionClick(0) }}>
                        <Accordion.Toggle className='float-right' as={Card.Header} eventKey="0" >

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <PersonalInformation/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Container className='CardHeader'>
                    Contact Details
                </Container>
                <Accordion className='InfoAccordion' defaultActiveKey={accordionsOpen[1]}>
                    <Card className='AccordionCard' onClick={() => { handleAccordionClick(1) }}>
                        <Accordion.Toggle as={Card.Header} eventKey="1">

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Contact Details go here</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Container className='CardHeader'>
                    Education
                </Container>
                <Accordion className='InfoAccordion' defaultActiveKey={accordionsOpen[2]}>
                    <Card className='AccordionCard' onClick={() => { handleAccordionClick(2) }}>
                        <Accordion.Toggle as={Card.Header} eventKey="2">

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Education goes here (maybe)</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        )
    }

    return (
        <Container className='UserProfile'>
            <ProfileHeader/>
            <UserInfoAccordions/>
        </Container>

    )
}

export default UserProfile;
