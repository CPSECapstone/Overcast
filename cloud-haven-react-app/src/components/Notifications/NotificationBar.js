import React, { useContext } from 'react';
import GlobalState from '../../GlobalState';
import { Container, Row, Col, Button } from 'react-bootstrap';
import'./NotificationBar.css';

const NotificationBar = () => {
    const [state, setState] = useContext(GlobalState);

    return (
        <Container className="NotifBar">
            <div className="NotifHeader">
                <div className="NotifCount">
                    {state.notifications}
                </div>
                <div className="ShouldntNeedThisClass">
                    Notifications
                </div>
            </div>

            <Row className="DummyNotif">
                <Col className="ExclamationPt" sm={2}>!</Col>
                <Col className="NotifText" sm={8}>Fill out New Patient Form in ‘Files’ by Wednesday 12/9/20</Col>
                <Col sm={2} className="NotifButton">
                    {'>'}
                </Col>
            </Row>

        </Container>
    );
}

export default NotificationBar;
