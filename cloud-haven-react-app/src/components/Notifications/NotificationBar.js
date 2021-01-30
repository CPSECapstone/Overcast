import React, { useContext } from 'react';
import GlobalState from '../../GlobalState';
import { Container, Button } from 'react-bootstrap';

const NotificationBar = () => {
    const [state, setState] = useContext(GlobalState);

    const handleClick = () => {
        setState(state => ({ ...state, notifications: state.notifications - 1 }))
    }

    return (
        <Container className="NotifBar">
            <Button onClick={handleClick} >
                {state.notifications}
            </Button>


        </Container>
    );
}

export default NotificationBar;