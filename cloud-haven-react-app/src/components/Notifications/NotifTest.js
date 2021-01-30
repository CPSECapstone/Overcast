import React from 'react';
import GlobalState from './contexts/GlobalState';

const NotifTest = () => {
    const [state, setState] = useContext(GlobalState);

    const handleClick = () => {
        state => ({ ...state, notifications: state.notifications - 1 })
    }

    return (
        <Button onClick={handleClick} >
            {state.notifications}
        </Button>
    );
}

export default NotifTest;