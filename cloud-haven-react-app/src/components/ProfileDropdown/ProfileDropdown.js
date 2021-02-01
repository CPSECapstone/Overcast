import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import profile from "../../images/profile-user.png";
import './ProfileDropdown.css';

const ProfileDropdown = () => {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light">
                <span>Username</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/profile">
                    <span className="DropdownItem">Profile</span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/settings">
                    <span className="DropdownItem">Settings</span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/signOut">
                    <span className="DropdownItem">Sign Out</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ProfileDropdown;
