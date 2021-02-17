import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import profile from "../../images/profile-user.png";
import settings from "../../images/settings.png";
import logout from "../../images/logout.png";
import './ProfileDropdown.css';

const ProfileDropdown = () => {

    return (
        <Dropdown menuAlign="right">
            <Dropdown.Toggle variant="light">
                <span id="DropdownUsername">Username</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/profile">
                    <span className="DropdownItem">
                        Profile
                        <img className="Icon" src={profile} />
                    </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/settings">
                    <span className="DropdownItem">
                        Settings
                        <img className="Icon" src={settings} />
                    </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/signOut">
                    <span className="DropdownItem">
                        Sign Out
                        <img className="Icon" src={logout} />
                    </span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ProfileDropdown;
