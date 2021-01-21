import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import "./TabSystem.css";

const TabSystem = () => {


    return (
        <Tabs defaultActiveKey="UserProfile" id="uncontrolled-tab-example" className="Tabs">
            <Tab eventKey="UserProfile" title="User Profile">
            </Tab>
            <Tab eventKey="Messages" title="Messages">
            </Tab>
            <Tab eventKey="Calendar" title="Calendar">
            </Tab>
        </Tabs>
    )
}

export default TabSystem;