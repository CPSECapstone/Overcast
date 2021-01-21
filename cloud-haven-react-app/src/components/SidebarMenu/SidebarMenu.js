/*import React, { useState, Component } from "react";
import {Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from 'styled-components';
import './SidebarMenu.css';*/
import React, { useState, Component } from "react";
import styled from 'styled-components';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SidebarMenu extends React.Component {
    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        Line Chart
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Bar Chart
                    </NavText>
                </NavItem>
                </NavItem>
            </SideNav.Nav>
            </SideNav>
        );
      }

}

export default SidebarMenu;








/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #C4C4C4; /* Black */
  //overflow-x: visible;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

/*
class SideNav extends React.Component {
    render() {
        return (
            <StyledSideNav></StyledSideNav>
        );
      }

}



class SidebarMenu extends React.Component {
  render() {
    return (
        <SideNav></SideNav>
    );
  }
}*/
