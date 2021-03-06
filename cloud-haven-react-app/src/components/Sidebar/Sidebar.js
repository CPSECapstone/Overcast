import React, { useState } from "react";
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome, faQuestion} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />
const barIcon = <FontAwesomeIcon icon={faBars}/>
const questionMarkIcon = <FontAwesomeIcon icon={faQuestion}/>

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const showSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const className = isSidebarOpen ? "sidebar sidebar-open" : "sidebar sidebar-closed";
    //const [isAppSelected, setIsAppSelected] = useState(false);

    return(
        <div className={className}>
            <button id="Hamburger" onClick={showSidebar}><i className="fas fa-bars">{barIcon}</i></button>
            <ul>
                <li >
                    <a href="/">
                        <span id="AppIcon" ><i className="fa fa-home fa-lg fa-fw ">{homeIcon}</i></span>
                        <span id="AppName">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/test">
                        <span id="AppIcon"><i className="fa fa-home fa-lg fa-fw">{questionMarkIcon}</i></span>
                        <span id="AppName">TestApplication</span>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Sidebar;