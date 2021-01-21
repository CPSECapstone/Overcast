
import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SidebarMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />

class SidebarMenu extends React.Component {
    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
            <Toggle />
            <Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }}>{homeIcon}</i>
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                
            </Nav>
            </SideNav>
        );
    }

}

export default SidebarMenu;
