import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import './ProfileDropdown.css';

const ProfileDropdown = () => {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Username
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ProfileDropdown;
