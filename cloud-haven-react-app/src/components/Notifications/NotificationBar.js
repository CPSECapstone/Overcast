import React, { useContext } from 'react';
import GlobalState from '../../GlobalState';
import { Container, Row, Col } from 'react-bootstrap';
import'./NotificationBar.css';

const NotificationBar = () => {
    const [notifs, setNotifs] = useContext(GlobalState);

    // Add new notification types once we figure what else will use notifications
    const createNotif = (notif) => {
        /* MESSAGE */
        if (notif.type === "message") {
            return "New Message: " + notif.title;
        } /* FORM */
        else if (notif.type === "form") {
            return "Fill out " + notif.title + " in 'Files' by " + notif.dueDate;
        }
    }   

    const populateNotifBar = () => {
        return (notifs.notifications).map((notif) => {
            return (
                <Row className="DummyNotif">
                    <Col className="ExclamationPt" sm={2}>!</Col>
                    <Col className="NotifText" sm={8}>
                        {createNotif(notif)}
                    </Col>
                    <Col sm={2} className="NotifButton">
                        {'>'}
                    </Col>
                </Row>
            );
        })
    }

    return (
        <Container className="NotifBar">
            <div className="NotifHeader">
                <div className="NotifCount">
                    {(notifs.notifications).length}
                </div>
                <div className="NotifTitle">
                    Notifications
                </div>
            </div>

            {populateNotifBar()}

        </Container>
    );
}

export default NotificationBar;
