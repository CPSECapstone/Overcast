import React, { useContext } from 'react';
import GlobalState from '../../GlobalState';
import { Container, Button } from 'react-bootstrap';
import'./NotificationBar.css';

const NotificationBar = () => {
    const [state, setState] = useContext(GlobalState);

    const handleClick = () => {
        setState(state => ({ ...state, notifications: state.notifications - 1 }))
    }

    return (
        <Container className="NotifBar">
            <div className="NotifHeader">
                <Button onClick={handleClick} >
                    {state.notifications}
                </Button>
                Notifications
            </div>

        </Container>
    );
}

export default NotificationBar;
